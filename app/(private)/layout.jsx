import PrivateNavbar from "./_components/Navbar";

export default function layout({ children }) {
  return (
    <>
      <PrivateNavbar />
      {children}
    </>
  );
}
