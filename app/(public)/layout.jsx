import PublicNavbar from "@/components/public/Navbar";

export default function PublicLayout({ children }) {
  return (
    <div>
      <PublicNavbar />
      {children}
    </div>
  );
}
