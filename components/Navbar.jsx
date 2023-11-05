import React from "react";

const Navbar = () => {
  return (
    <nav className="flex text-white bg-[#2E2B59] text-center justify-between items-center xs:px-2 xs:py-1 sm:px-4 sm:py-2 md:px-5 md:py-2 xm:px-6 xm:py-3 lg:px-7 lg:py-3 minmd:px-8 minmd:py-4 minlg:px-10 minlg:py-3 border-b border-b-white">
      <div className="hidden sm:flex">
        <div>Divine Aura Bliss</div>
        <div className="flex  items-center space-x-5">
          <div>Add Quote</div>
          <div>My Profile</div>
          <div>Connect Wallet</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
