"use client";

import TitleWithButton from "@/components/shared/TitleWithButton";
import { useGetAdminQuery } from "@/redux/api/adminAPi";
import { Button, Table, Tooltip } from "antd";
import { PencilLine, Trash, Trash2 } from "lucide-react";
import Image from "next/image";

export default function Admin() {
  const { data, isLoading } = useGetAdminQuery();

  const columns = [
    {
      title: "Name",
      key: "name",
      render: (_text, record) => (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Image
              src={record.profilePhoto}
              alt={record.name}
              width={50}
              height={50}
              className="rounded-full max-md:size-20"
            />
            <div>
              <p className="font-medium">{record.name}</p>
              <a className="block lg:hidden" href={`mailto:${record.email}`}>
                {record.email}
              </a>
              <a
                className="block md:hidden"
                href={`tel:${record.contactNumber}`}
              >
                {record.contactNumber}
              </a>
            </div>
          </div>

          <div className="hidden items-center gap-2 xs:flex sm:hidden">
            <Button size="small">
              <PencilLine className="size-4" />
              Edit
            </Button>

            <Button danger size="small">
              <Trash2 className="size-4" />
              Soft delete
            </Button>

            <Button type="primary" size="small" danger>
              <Trash className="size-4" />
              Delete
            </Button>
          </div>

          <div className="flex items-center gap-2 xs:hidden">
            <Button size="small">
              <PencilLine className="size-4" />
            </Button>

            <Button danger size="small">
              <Trash2 className="size-4" />
            </Button>

            <Button type="primary" size="small" danger>
              <Trash className="size-4" />
            </Button>
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
      render: (_text, _record) => (
        <div className="flex items-center gap-2">
          <Tooltip title="Edit">
            <Button size="small">
              <PencilLine className="size-4" />
            </Button>
          </Tooltip>

          <Tooltip title="Soft delete" color="#ff4d4f">
            <Button danger size="small">
              <Trash2 className="size-4" />
            </Button>
          </Tooltip>

          <Tooltip title="Delete" color="#ff4d4f">
            <Button type="primary" size="small" danger>
              <Trash className="size-4" />
            </Button>
          </Tooltip>
        </div>
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
