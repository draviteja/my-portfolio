"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

// TODO: use IconTab to show icons instead of this Tab component

const tabs = [
  { name: "About", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Blogs", path: "/blogs" },
  // { name: "Uses", path: "/uses" },
  { name: "Newsletter", path: "/newsletter" },
  { name: "Contact", path: "/contact" },
];

const ChipTabs = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center flex-wrap gap-2 mb-8">
      {tabs.map((tab, index) => (
        <Link href={tab.path} key={index}>
          <Chip
            text={tab.name}
            selected={pathname === tab.path}
            key={tab.name}
          />
        </Link>
      ))}
    </div>
  );
};

const Chip = ({ text, selected }) => {
  return (
    <button
      className={`${
        selected ? "text-white" : "text-gray-500 hover:text-gray-900"
      } text-sm transition-colors px-2 py-1 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gray-900 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};
// Testing
export default ChipTabs;
