"use client";

import { Avatar } from "antd";

export default function UserProfileBox({ user }) {
  return (
    <div
      className="flex cursor-pointer items-center gap-2 rounded-md border p-1"
      onClick={(e) => e.preventDefault()}
    >
      <Avatar src={user?.profilePhoto} />
      <div className="pr-2">
        <p className="text-start text-xs font-semibold text-gray-700">
          {user?.name}
        </p>
        <p className="text-start text-xs font-medium text-gray-500">
          {user?.email}
        </p>
      </div>
    </div>
  );
}
