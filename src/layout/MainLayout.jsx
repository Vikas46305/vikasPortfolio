import Aside from "../_components/Aside";
import { Outlet } from "react-router-dom";
import Navbar from "../_components/Navbar";

const MainLayout = () => {
    return (
        <div className="md:flex gap-2 md:gap-7 p-2 md:p-7 h-screen">
            <div className="md:w-[22%] bg-white/10 rounded-xl p-5">
                <Aside />
            </div>

            <div className="w-full bg-white/10 rounded-xl mt-2 md:mt-0">
                <div>
                    <Navbar />
                </div>
                <div className="p-3 md:p-10">
                    <Outlet />
                </div>
            </div>

        </div>
    );
};

export default MainLayout;
