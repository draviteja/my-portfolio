import MaxWidthWrapper from "@/components/reusable/maxWidthWrapper";
import { deskSetup } from "@/data/uses";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses",
  description: `My ever-evolving toolkit, comprising both hardware and software. I try
          to keep this list updated as much as possible.`,
  openGraph: {
    images: [
      {
        url: "https://your-site.com/images/uses.png",
        width: 800,
        height: 600,
        alt: "Uses Image",
      },
    ],
  },
};

const Uses = () => {
  const sectionKeys = Object.keys(deskSetup);
  return (
    <MaxWidthWrapper>
      <p className="text-gray-500">
        My ever-evolving toolkit, comprising both hardware and software. I try
        to keep this list updated as much as possible.
      </p>
      {sectionKeys.map((sectionKey) => (
        <div key={sectionKey}>
          <h1 className="capitalize font-medium text-lg mt-5">{sectionKey}</h1>
          <ul className="list-disc text-gray-400 ml-5">
            {Object.values(deskSetup[sectionKey]).map((item: any) => (
              <li key={item.name} className="space-x-1 my-3">
                <span className="font-medium text-sm text-gray-900">
                  {item.name}
                </span>{" "}
                <span>-</span>
                <span className="text-sm text-gray-500">
                  {item.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </MaxWidthWrapper>
  );
};

export default Uses;
