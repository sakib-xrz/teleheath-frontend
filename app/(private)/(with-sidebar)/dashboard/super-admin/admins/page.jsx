"use client";

import TitleWithButton from "@/components/shared/TitleWithButton";

export default function Admin() {
  return (
    <div>
      <TitleWithButton
        title="Admins"
        buttonText="Add New Admin"
        href="/dashboard/super-admin/admins/add"
      />
    </div>
  );
}
