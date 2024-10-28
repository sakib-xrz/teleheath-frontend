/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { Button, Input, Pagination, Popconfirm, Table } from "antd";
import { PencilLine, Trash2 } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

import Label from "@/components/shared/Label";
import TitleWithButton from "@/components/shared/TitleWithButton";
import { generateQueryString } from "@/helpers/utils";
import { useDeleteAdminMutation, useGetAdminQuery } from "@/redux/api/adminAPi";
import { toast } from "sonner";

export default function Admin() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchKey, setSearchKey] = useState(searchParams.get("search") || "");
  const [params, setParams] = useState({
    search: searchParams.get("search") || "",
    page: Number(searchParams.get("page")) || 1,
    limit: Number(searchParams.get("limit")) || 20,
  });

  const debouncedSearch = useDebouncedCallback((value) => {
    setParams((prev) => ({ ...prev, search: value, page: 1 }));
  }, 400);

  const updateURL = () => {
    const queryString = generateQueryString(params);
    router.push(`/dashboard/super-admin/admins${queryString}`, undefined, {
      shallow: true,
    });
  };

  const debouncedUpdateURL = useDebouncedCallback(updateURL, 500);

  useEffect(() => {
    debouncedUpdateURL();
  }, [params]);

  const { data, isLoading } = useGetAdminQuery(params);
  const [deleteAdmin, { isLoading: isDeleteLoading }] =
    useDeleteAdminMutation();

  const handleDelete = async (id) => {
    try {
      await deleteAdmin(id).unwrap();
      toast.success("Admin deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error(error?.message || "Failed to delete admin");
    }
  };

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
              className="rounded-full border-2 object-cover max-md:size-20"
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
            <Popconfirm
              title="Delete admin?"
              description="Are you sure to delete this admin?"
              onConfirm={() => {
                handleDelete(record.id);
              }}
              okText="Yes"
              cancelText="No"
              okButtonProps={{ danger: true }}
            >
              <Button danger size="small" className="!w-full">
                <Trash2 className="size-4" />
                Delete
              </Button>
            </Popconfirm>
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
      render: (_text, record) => (
        <div className="flex items-center justify-center gap-2">
          <Button
            size="small"
            className="!border-primary !text-primary hover:!border-primary/70 hover:!text-primary/70"
          >
            <PencilLine className="size-4" />
            Edit
          </Button>
          <Popconfirm
            title="Delete admin?"
            description="Are you sure to delete this admin?"
            onConfirm={() => {
              handleDelete(record.id);
            }}
            okText="Yes"
            cancelText="No"
            okButtonProps={{ danger: true }}
          >
            {" "}
            <Button danger size="small">
              <Trash2 className="size-4" />
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
      responsive: ["sm"],
    },
  ];

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchKey(value);
    debouncedSearch(value);
  };

  const handlePaginationChange = (page) => {
    setParams((prev) => ({ ...prev, page }));
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
          <Label htmlFor="search">Search admin</Label>
          <Input
            name="search"
            type="search"
            placeholder="Search admin by name, email, or contact number"
            style={{ border: "1px solid rgb(188,188,188)" }}
            onChange={handleSearchChange}
            value={searchKey}
            allowClear
          />
          <p className="text-sm text-gray-500">
            {searchKey
              ? `Showing results for ${searchKey}`
              : `Showing ${data?.data?.length || 0} results of ${data?.meta?.total || 0}`}
          </p>
        </div>
        <Table
          columns={columns}
          dataSource={data?.data}
          rowKey={(record) => record.id}
          bordered
          loading={isLoading || isDeleteLoading}
          pagination={false}
        />
        {data?.meta?.total > params.limit && (
          <Pagination
            current={params.page}
            onChange={handlePaginationChange}
            total={data.meta.total}
            pageSize={params.limit}
            align="center"
          />
        )}
      </div>
    </div>
  );
}
