import FormInput from "@/components/form/form-input";
import Title from "@/components/shared/title";
import { useUpdateAdminMutation } from "@/redux/api/adminAPi";
import { Button, Modal } from "antd";
import { useFormik } from "formik";
import { toast } from "sonner";
import * as Yup from "yup";

export default function EditForm({ open, setOpen, setEditableAdmin, admin }) {
  const [updateAdmin, { isLoading }] = useUpdateAdminMutation();

  console.log(admin);

  const formik = useFormik({
    initialValues: {
      name: admin?.name || "",
      contactNumber: admin?.contactNumber || "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      contactNumber: Yup.string()
        .matches(/^(\+88)?(01[3-9]\d{8})$/, "Invalid contact number")
        .required("Contact number is required"),
    }),
    onSubmit: async (values) => {
      const payload = {
        name: values.name,
        contactNumber: values.contactNumber.startsWith("+88")
          ? values.contactNumber
          : `+88${values.contactNumber}`,
      };

      try {
        await updateAdmin({ id: admin.id, payload }).unwrap();
        toast.success("Admin updated successfully");
        setOpen(false);
        setEditableAdmin(null);
      } catch (error) {
        console.log(error);
        toast.error(error?.message || "Failed to update admin");
      }
    },
  });

  return (
    <Modal
      title={<Title title={"Edit Admin"} className="text-xl xl:text-2xl" />}
      open={open}
      closable={false}
      footer={null}
      centered
    >
      <form onSubmit={formik.handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <FormInput
            label="Name"
            name="name"
            placeholder="Enter admin name"
            formik={formik}
            required
          />

          <FormInput
            label="Contact Number"
            name="contactNumber"
            placeholder="Enter admin contact number"
            formik={formik}
            type="tel"
            required
          />
        </div>
        <div className="mt-2 flex items-center justify-end gap-2">
          <Button
            onClick={() => {
              setOpen(false);
              setEditableAdmin(null);
            }}
            disabled={isLoading}
          >
            Close
          </Button>
          <Button loading={isLoading} htmlType="submit" type="primary">
            Edit Admin
          </Button>
        </div>
      </form>
    </Modal>
  );
}
