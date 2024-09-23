import GlobalProvider from "@/components/shared/GlobalProvider";
import "./globals.css";

export const metadata = {
  title: "Telehealth",
  description:
    "Consult online doctor with Telehealth, Bangladesh's one of the best telemedicine service provider.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"antialiased"}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
