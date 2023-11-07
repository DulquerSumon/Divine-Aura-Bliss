"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ViewFunctions from "@/redux/blockchain/viewFunctions";
const Navbar = () => {
  const { currentAccount, connectWallet } = ViewFunctions();
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  return (
    <nav className="flex w-full text-white bg-[#2E2B59] xs:h-8 sm:h-10 md:h-12 xm:h-12 lg:h-12 minmd:h-14 minlg:h-[70px] text-center justify-between items-center xs:px-2 xs:py-1 sm:px-4 sm:py-2 md:px-5 md:py-2 xm:px-6 xm:py-3 lg:px-7 lg:py-3 minmd:px-8 minmd:py-4 minlg:px-10 minlg:py-3 border-b border-b-white">
      <div className="hidden sm:flex w-full">
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <div className=" font-bold xs:text-sm sm:text-base">
              Divine Aura Bliss
            </div>
          </Link>
          <div onClick={() => setIsToggleOpen(!isToggleOpen)}>
            {isToggleOpen ? (
              <Image
                src="/cross.png"
                width={25}
                height={25}
                alt="menu"
                className="rounded-sm"
              />
            ) : (
              <Image
                src="/menu.png"
                width={25}
                height={25}
                alt="menu"
                className="rounded-sm"
              />
            )}
          </div>
        </div>
        {isToggleOpen && (
          <div className="bg-[#2E2B59] xs:text-sm sm:text-base font-semibold xs:space-y-2 sm:space-y-3 xs:top-8 top-10 flex fixed flex-col justify-center items-center right-0 w-full h-screen">
            <div className=" cursor-pointer hover:bg-cyan-500 sm:px-1 sm:py-[2px] rounded-xl">
              Add Quote
            </div>
            <div className=" cursor-pointer hover:bg-cyan-500 sm:px-1 sm:py-[2px] rounded-xl">
              My Profile
            </div>
            <div
              className=" cursor-pointer hover:bg-cyan-500 sm:px-1 sm:py-[2px] rounded-xl"
              onClick={() => connectWallet()}
            >
              {currentAccount ? "DisConnect" : "Connect Wallet"}
            </div>
          </div>
        )}
      </div>
      <div className="sm:hidden flex w-full items-center justify-between">
        <div>
          <Link href="/">
            <div className=" font-bold md:text-lg xm:text-xl lg:text-2xl minmd:text-3xl minlg:text-4xl">
              Divine Aura Bliss
            </div>
          </Link>
        </div>
        <div className="bg-[#2E2B59] md:text-lg xm:text-lg lg:text-xl minmd:text-2xl minlg:text-3xl font-semibold md:space-x-5 xm:space-x-6 lg:space-x-7 minmd:space-x-7 minlg:space-x-8 flex justify-center items-center">
          <div className=" cursor-pointer hover:bg-cyan-500 md:px-2 md:py-[2px] xm:px-2 xm:py-1 lg:py-1 lg:px-2 minmd:py-1 minmd:px-3 minlg:py-2 minlg:px-3 rounded-full">
            Add Quote
          </div>
          <div className=" cursor-pointer hover:bg-cyan-500 md:px-2 md:py-[2px] xm:px-2 xm:py-1 lg:py-1 lg:px-2 minmd:py-1 minmd:px-3 minlg:py-2 minlg:px-3 rounded-full">
            My Profile
          </div>
          <div
            className=" cursor-pointer hover:bg-cyan-500 md:px-2 md:py-[2px] xm:px-2 xm:py-1 lg:py-1 lg:px-2 minmd:py-1 minmd:px-3 minlg:py-2 minlg:px-3 rounded-full"
            onClick={() => connectWallet()}
          >
            {currentAccount ? "DisConnect" : "Connect Wallet"}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
