import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { AUTH_TOKEN_KEY } from "./utils/constant";

// Array of routes that don't require authentication.
const AuthRoutes = ["/login", "/register"];

// Array of common private routes that require authentication for all users.
const commonPrivateRoutes = [
  "/dashboard",
  "/dashboard/change-password",
  "/doctors",
];

// Role-based private routes: each role has specific paths that require authentication.
const roleBasedPrivateRoutes = {
  PATIENT: [/^\/dashboard\/patient/], // Routes starting with /dashboard/patient are for patients
  DOCTOR: [/^\/dashboard\/doctor/], // Routes starting with /dashboard/doctor are for doctors
  ADMIN: [/^\/dashboard\/admin/], // Routes starting with /dashboard/admin are for admins
  SUPER_ADMIN: [/^\/dashboard\/super-admin/], // Routes starting with /dashboard/super-admin are for super admins
};

// Middleware function to handle route access based on authentication and roles.
export function middleware(request) {
  // Extracting the current pathname (the requested URL) from the request object.
  const { pathname } = request.nextUrl;

  // Attempting to get the access token from the cookies using the AUTH_TOKEN_KEY constant.
  const accessToken = cookies().get(AUTH_TOKEN_KEY)?.value;

  // If no access token is found (i.e., the user is not logged in)
  if (!accessToken) {
    // Check if the current route is in the AuthRoutes (login, register), if so, allow access.
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next(); // Continue to the requested page without redirection.
    } else {
      // If it's a protected route, redirect the user to the login page.
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // If the user has an access token and the route is a common private route (accessible to all roles)
  if (
    accessToken &&
    (commonPrivateRoutes.includes(pathname) || // Check if pathname is in commonPrivateRoutes
      commonPrivateRoutes.some((route) => pathname.startsWith(route))) // or starts with any route in commonPrivateRoutes
  ) {
    return NextResponse.next(); // Allow access to the requested page.
  }

  // If the route is not in commonPrivateRoutes, decode the access token to check the user's role.
  const decodedData = jwtDecode(accessToken); // Decode the JWT token to extract the user data.

  const role = decodedData?.role; // Extract the role from the decoded token.

  // If the user's role exists and has specific role-based private routes
  if (role && roleBasedPrivateRoutes[role]) {
    const routes = roleBasedPrivateRoutes[role]; // Get the routes for the user's role.

    // Check if the current pathname matches any of the role-specific routes.
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next(); // Allow access to the route if it matches.
    }
  }

  // If no conditions match (unauthorized access), redirect the user to the home page.
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/login", "/register", "/dashboard/:page*", "/doctors/:page*"], // Define URL patterns to apply this middleware.
};
