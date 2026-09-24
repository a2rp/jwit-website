import { useState, useEffect } from "react";
import { Styled } from "./styled";
import { IoIosMenu } from "react-icons/io";
import { TbSun, TbMoon, TbChevronDown } from "react-icons/tb";
import { NavLink, useLocation } from "react-router-dom";

const logo = `${import.meta.env.BASE_URL}logo.png`;

/* TOP NAV ITEMS (DESKTOP) */
const NAV_ITEMS = [
    { id: "home", type: "link", to: "/home", label: "Home" },
    {
        id: "community",
        type: "dropdown",
        label: "Community",
        items: [
            { to: "/core-team", label: "Core Team" },
            { to: "/membership", label: "Membership" },
            { to: "/resources", label: "Resources" },
        ],
    },
    {
        id: "events",
        type: "dropdown",
        label: "Events",
        items: [
            { to: "/events", label: "All Events" },
            { to: "/events#upcoming", label: "Upcoming" },
            { to: "/events#past", label: "Past" },
        ],
    },
    { id: "sponsors", type: "link", to: "/sponsors", label: "Sponsors" },
    { id: "gallery", type: "link", to: "/gallery", label: "Gallery" },
    { id: "contact", type: "link", to: "/contact", label: "Contact" },
];

const stripHash = (to) => to.split("#")[0];

const Header = ({ setDisplayDrawer }) => {
    const location = useLocation();
    const activePath = location.pathname;

    // light / dark theme state
    const [theme, setTheme] = useState(() => {
        if (typeof window === "undefined") return "light";

        const stored = window.localStorage.getItem("technaari-theme");
        if (stored === "light" || stored === "dark") return stored;

        return "light";
    });

    // which dropdown is open (desktop)
    const [openDropdown, setOpenDropdown] = useState(null);

    // apply theme to <html> + persist
    useEffect(() => {
        if (typeof document === "undefined") return;

        const root = document.documentElement;
        root.dataset.theme = theme;
        window.localStorage.setItem("technaari-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const handleDropdownToggle = (id) => {
        setOpenDropdown((prev) => (prev === id ? null : id));
    };

    const closeDropdowns = () => {
        setOpenDropdown(null);
    };

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <Styled.Col className="left">
                    <NavLink to="/" className="brandName" onClick={closeDropdowns}>
                        <img src={logo} alt="JWIT logo" />
                        {/* JWIT */}
                    </NavLink>
                </Styled.Col>

                <Styled.Col className="right">
                    {/* navlinks (desktop) */}
                    <div className="navlinksWrapper" onMouseLeave={closeDropdowns}>
                        <ul className="navList">
                            {NAV_ITEMS.map((item) => {
                                if (item.type === "link") {
                                    return (
                                        <li key={item.id} className="navItem">
                                            <NavLink
                                                to={item.to}
                                                className={({ isActive }) =>
                                                    "topLink" +
                                                    (isActive ? " active" : "")
                                                }
                                                onClick={closeDropdowns}
                                            >
                                                <span className="topLabel">
                                                    {item.label}
                                                </span>
                                            </NavLink>
                                        </li>
                                    );
                                }

                                // dropdown parent active if any child path matches
                                const hasActiveChild = item.items.some(
                                    (sub) => stripHash(sub.to) === activePath
                                );

                                return (
                                    <li key={item.id} className="navItem">
                                        <button
                                            type="button"
                                            className={
                                                "topButton" +
                                                (hasActiveChild
                                                    ? " activeParent"
                                                    : "")
                                            }
                                            onClick={() =>
                                                handleDropdownToggle(item.id)
                                            }
                                            aria-haspopup="true"
                                            aria-expanded={
                                                openDropdown === item.id
                                            }
                                        >
                                            <span className="topLabel">
                                                {item.label}
                                            </span>
                                            <span
                                                className={
                                                    "chevron" +
                                                    (openDropdown === item.id
                                                        ? " chevron--open"
                                                        : "")
                                                }
                                            >
                                                <TbChevronDown />
                                            </span>
                                        </button>

                                        <div
                                            className={
                                                "dropdownPanel" +
                                                (openDropdown === item.id
                                                    ? " is-open"
                                                    : "")
                                            }
                                        >
                                            <ul className="dropdownList">
                                                {item.items.map((sub) => (
                                                    <li
                                                        key={sub.to}
                                                        className="dropdownItem"
                                                    >
                                                        <NavLink
                                                            to={sub.to}
                                                            className={({
                                                                isActive,
                                                            }) =>
                                                                "dropdownLink" +
                                                                (isActive
                                                                    ? " active"
                                                                    : "")
                                                            }
                                                            onClick={
                                                                closeDropdowns
                                                            }
                                                        >
                                                            <span className="dropdownDot" />
                                                            <span>
                                                                {sub.label}
                                                            </span>
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Theme toggle */}
                    <button
                        type="button"
                        className={
                            "themeToggle" +
                            (theme === "dark" ? " is-dark" : " is-light")
                        }
                        onClick={toggleTheme}
                        aria-label="Toggle color theme"
                    >
                        <span className="toggleTrack">
                            <span className="toggleThumb" />
                        </span>
                        <span className="toggleIcon">
                            {theme === "light" ? <TbSun /> : <TbMoon />}
                        </span>
                    </button>

                    {/* Drawer / menu button (mobile) */}
                    <button
                        type="button"
                        className="sliderLinkWrapper"
                        onClick={() => {
                            closeDropdowns();
                            setDisplayDrawer(() => true);
                        }}
                        aria-label="Open navigation"
                    >
                        <IoIosMenu size={22} />
                    </button>
                </Styled.Col>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Header;
