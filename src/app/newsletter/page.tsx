import NewsletterComponent from "@/components/newsletter";
import MaxWidthWrapper from "@/components/reusable/maxWidthWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter",
  description: `Stay ahead of the curve with my monthly newsletter. Receive valuable insights on the latest trends, techniques, and tools in web development and design.`,
  openGraph: {
    // images: [
    //   {
    //     url: "OG IMAGE URL",
    //     width: 800,
    //     height: 600,
    //     alt: "Newsletter Image",
    //   },
    // ],
  },
};
const Newsletter = () => {
  return (
    <MaxWidthWrapper>
      <div>
        <NewsletterComponent />
      </div>
    </MaxWidthWrapper>
  );
};

export default Newsletter;
