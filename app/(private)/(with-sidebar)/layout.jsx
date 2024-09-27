import dynamic from "next/dynamic";
const Sidebar = dynamic(() => import("./_components/Sidebar"), { ssr: false });

export default function layout({ children }) {
  return <Sidebar>{children}</Sidebar>;
}
