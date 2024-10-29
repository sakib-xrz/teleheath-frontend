import PublicNavbar from "@/components/public/navbar";

export default function PublicLayout({ children }) {
  return (
    <div>
      <PublicNavbar />
      {children}
    </div>
  );
}
