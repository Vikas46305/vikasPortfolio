import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
    const Links = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Education",
            link: "/education",
        },
        {
            name: "Skill",
            link: "/skill",
        },
        {
            name: "Project",
            link: "/project",
        },
        {
            name: "Contact",
            link: "/contact",
        },
    ];

    const location = useLocation();

    return (
        <div
            className="bg-white/20 absolute right-7 p-5 md:flex items-center justify-end gap-8 w-fit font-semibold hidden"
            style={{ borderRadius: "0 17px" }}
        >
            {Links.map((data, index) => (
                <div key={index}>
                    <NavLink
                        to={data.link}
                        className={`${
                            data.link === location.pathname &&
                            "text-orange-300 font-serif"
                        }`}
                    >
                        {data.name}
                    </NavLink>
                </div>
            ))}
        </div>
    );
}
export default Navbar;
