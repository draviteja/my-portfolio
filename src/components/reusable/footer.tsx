import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="text-center flex items-center justify-center flex-col mt-16 text-sm">
      <div>
        <Image src="/images/peace.svg" alt="Twitter" width={60} height={60} />
      </div>
      <div>© 2024 - Raviteja Daggupati</div>
    </div>
  );
};

export default Footer;
