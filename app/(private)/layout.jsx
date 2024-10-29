import PrivateNavbar from "./_components/navbar";

export default function layout({ children }) {
  return (
    <>
      <PrivateNavbar />
      {children}
    </>
  );
}
