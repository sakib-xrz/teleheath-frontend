import { cn } from "@/utils/cn";

export default function Label({ className, children, ...props }) {
  return (
    <label
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    >
      {children} {props.required && <span className="text-red-500">*</span>}
    </label>
  );
}
