/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Label from "@/components/shared/Label";
import TitleWithButton from "@/components/shared/TitleWithButton";
import { generateQueryString } from "@/helpers/utils";
import { useGetAdminQuery } from "@/redux/api/adminAPi";
import { Button, Input, Pagination, Table } from "antd";
import { PencilLine, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function Admin() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchKey, setSearchKey] = useState(searchParams.get("search") || "");

  const [params, setParams] = useState({
    search: searchParams.get("search") || "",
    page: searchParams.get("page") || 1,
    limit: searchParams.get("limit") || 10,
  });

  const debouncedSearch = useDebouncedCallback((value) => {
    setParams((prevParams) => ({
      ...prevParams,
      search: value,
      page: 1,
    }));
  }, 400);

  const debouncedUpdateURL = useDebouncedCallback(() => {
    const queryString = generateQueryString(params);
    router.push(`/dashboard/super-admin/admins${queryString}`, undefined, {
      shallow: true,
    });
  }, 500);

  useEffect(() => {
    debouncedUpdateURL();
  }, [params]);

  const result = useGetAdminQuery(params);

  const { data, isLoading } = result;

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
              className="size-14 rounded-full border-2 object-cover max-md:size-20"
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

          <div className="flex items-center gap-2 sm:hidden">
            <Button
              size="small"
              className="!w-full !border-primary !text-primary hover:!border-primary/70 hover:!text-primary/70"
            >
              <PencilLine className="size-4" />
              Edit
            </Button>

            <Button danger size="small" className="!w-full">
              <Trash2 className="size-4" />
              Delete
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
      title: <p className="text-center">Action</p>,
      key: "action",
      render: (_text, _record) => (
        <div className="flex items-center justify-center gap-2">
          <Button
            size="small"
            className="!border-primary !text-primary hover:!border-primary/70 hover:!text-primary/70"
          >
            <PencilLine className="size-4" />
            Edit
          </Button>

          <Button danger size="small">
            <Trash2 className="size-4" />
            Delete
          </Button>
        </div>
      ),
      responsive: ["sm"],
    },
  ];

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchKey(value);
    debouncedSearch(value);
  };

  return (
    <div className="space-y-8">
      <TitleWithButton
        title="Admins"
        buttonText="Create Admin"
        href="/dashboard/super-admin/admins/create"
      />

      <div className="space-y-5">
        <div className="space-y-1">
          <Label htmlFor={"search"}>Search admin</Label>
          <Input
            name={"search"}
            type={"search"}
            placeholder="Search admin by name, email, or contact number"
            style={{
              border: `1px solid rgb(188,188,188)`,
            }}
            onChange={handleSearchChange}
            value={searchKey || ""}
            allowClear
          />

          {searchKey ? (
            <p className="text-sm text-gray-500">
              Showing results for{" "}
              <span className="font-medium">{searchKey}</span>
            </p>
          ) : (
            <p className="text-sm text-gray-500">
              Showing {data?.data?.length} results of {data?.meta?.total}
            </p>
          )}
        </div>
        <Table
          columns={columns}
          dataSource={data?.data}
          rowKey={(record) => record.id}
          bordered
          loading={isLoading}
          pagination={false}
        />
        {data?.meta?.total > params?.limit && (
          <Pagination
            align="center"
            current={params?.page}
            onChange={(page) => {
              setParams((prevParams) => ({
                ...prevParams,
                page,
              }));
            }}
            total={data?.meta?.total}
            pageSize={params?.limit}
          />
        )}
      </div>
    </div>
  );
}
