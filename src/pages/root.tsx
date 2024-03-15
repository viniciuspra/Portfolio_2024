import FloatingButtonMenu from "@/components/floating-button-menu";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SetTitle from "@/components/set-title";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="flex flex-col p-3 md:p-6 space-y-4 max-w-[1900px] m-auto h-screen overflow-x-hidden relative transition-colors">
      <SetTitle />
      <Header />
      <div className="flex flex-col flex-1 space-y-4">
        <Outlet />
      </div>
      <div className="flex max-h-32 min-h-28 h-20 md:h-full">
        <Footer />
      </div>
      <FloatingButtonMenu />
    </div>
  );
}
