import "../styles/globals.css";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "../Context/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "eKYC",
  description: "Decentralized KYC Verification System",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GlobalContextProvider>{children}</GlobalContextProvider>;
}
