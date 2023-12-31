"use client";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Web3ReactProvider } from "@web3-react/core";
import { connectors } from "@/connectors";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { Navbar } from "@/components";
const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Divine Aura Bliss",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Web3ReactProvider connectors={connectors}>
        <Provider store={store}>
          <body className={inter.className}>
            <Navbar />
            <main>{children}</main>
          </body>
        </Provider>
      </Web3ReactProvider>
    </html>
  );
}
