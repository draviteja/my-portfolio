import { MotionDiv } from "@/lib/framer";
import Footer from "./footer";
import Navbar from "./navbar";
import ChipTabs from "./tabs";

const MaxWidthWrapper = ({ children }) => {
  return (
    <main className="flex items-center justify-between w-full flex-col p-8 min-h-screen">
      <div className="w-full max-w-3xl">
        <div>
          <Navbar />
          <ChipTabs />
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {children}
          </MotionDiv>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default MaxWidthWrapper;
