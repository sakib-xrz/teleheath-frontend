"use client";

import { Avatar, Skeleton } from "antd";

export default function UserProfile({ user, isLoading }) {
  return (
    <>
      {isLoading ? (
        <div className="flex w-40 cursor-pointer items-center gap-2 rounded-md border p-1 px-2">
          <Skeleton.Avatar active />
          <div className="space-y-1 pr-2">
            <p className="h-3.5 w-16 animate-pulse rounded-sm bg-gray-200"></p>
            <p className="h-2.5 w-24 animate-pulse rounded-sm bg-gray-200"></p>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
}
