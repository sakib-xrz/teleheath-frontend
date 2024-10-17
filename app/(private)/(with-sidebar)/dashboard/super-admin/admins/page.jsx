"use client";

import TitleWithButton from "@/components/shared/TitleWithButton";
import { useGetAdminQuery } from "@/redux/api/adminAPi";
import { Table } from "antd";
import Image from "next/image";

export default function Admin() {
  const { data, isLoading } = useGetAdminQuery();

  const columns = [
    {
      title: "Name",
      key: "name",
      render: (_text, record) => (
        <div className="flex items-center gap-2">
          <Image
            src={record.profilePhoto}
            alt={record.name}
            width={50}
            height={50}
            className="rounded-full max-md:size-16"
          />
          <div>
            <p className="font-medium">{record.name}</p>
            <a className="block lg:hidden" href={`mailto:${record.email}`}>
              {record.email}
            </a>
            <a className="block md:hidden" href={`tel:${record.contactNumber}`}>
              {record.contactNumber}
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Email",
      key: "email",
      render: (_text, record) => (
        <a href={`mailto:${record.email}`}>{record.email}</a>
      ),
      responsive: ["lg"],
    },
    {
      title: "Contact Number",
      key: "contactNumber",
      render: (_text, record) => (
        <a href={`tel:${record.contactNumber}`}>{record.contactNumber}</a>
      ),
      responsive: ["md"],
    },
    {
      title: "Action",
      key: "action",
      render: (_text, record) => (
        <span>
          <a href={`/dashboard/super-admin/admins/${record.id}/edit`}>Edit</a>
        </span>
      ),
      responsive: ["sm"],
    },
  ];

  return (
    <div className="space-y-5">
      <TitleWithButton
        title="Admins"
        buttonText="Create Admin"
        href="/dashboard/super-admin/admins/create"
      />

      <Table
        columns={columns}
        dataSource={data}
        bordered
        loading={isLoading}
        pagination={false}
      />
    </div>
  );
}
