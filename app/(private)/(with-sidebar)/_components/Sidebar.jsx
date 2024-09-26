"use client";

import Container from "@/components/shared/Container";
import { Layout, Menu } from "antd";
import { User } from "lucide-react";
import { useState } from "react";

const { Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export default function Sidebar({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    getItem(
      "Option 1",
      "1",
      <User className={`${collapsed ? "!text-2xl" : "!text-base"}`} />,
    ),
    getItem("Option 2", "2", <User />),
    getItem("User", "sub1", <User />, [
      getItem("Tom", "3"),
      getItem("Bill", "4"),
      getItem("Alex", "5"),
    ]),
    getItem("Team", "sub2", <User />, [
      getItem("Team 1", "6"),
      getItem("Team 2", "8"),
    ]),
    getItem("Files", "9", <User />),
  ];

  return (
    <>
      <div className="max-sm:hidden">
        <Layout
          style={{
            minHeight: "100vh",
          }}
        >
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            style={{ overflow: "auto", height: "100vh", position: "fixed" }}
          >
            <Menu defaultSelectedKeys={["1"]} mode="inline" items={items} />
          </Sider>
          <Layout>
            <Content
              style={{
                marginInlineStart: collapsed ? 80 : 200,
              }}
            >
              <Container>{children}</Container>
            </Content>
          </Layout>
        </Layout>
      </div>
      <div className="hidden max-sm:block">
        <Container>{children}</Container>
      </div>
    </>
  );
}
