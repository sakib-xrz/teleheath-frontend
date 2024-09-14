import GlobalProvider from "./_components/GlobalProvider";
import "./globals.css";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Telehealth",
  description:
    "Consult online doctor with Telehealth, Bangladesh's one of the best telemedicine service provider.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
