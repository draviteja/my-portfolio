"use client";

import MaxWidthWrapper from "@/components/reusable/maxWidthWrapper";
export default function MyApp() {
  return (
    <MaxWidthWrapper>
      <p className="text-gray-500 mb-4">
        {`Let's work on something together, you can book a meeting below or drop a
        dm on `}
        <a href="#" className="underline">
          twitter
        </a>
      </p>
    </MaxWidthWrapper>
  );
}
