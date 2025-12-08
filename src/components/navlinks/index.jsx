import { NavLink, useLocation } from "react-router-dom";
import { Styled } from "./styled";
import {
    TbHome2,
    TbSquareRoundedX,
    TbUsersGroup,
    TbCalendarEvent,
    TbPhoto,
    TbMail,
    TbChevronDown,
} from "react-icons/tb";
import { RiHandHeartFill } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";

/* ---------- SAME STYLE AS HEADER: LINKS + DROPDOWNS ---------- */

const NAV_ITEMS = [
    { id: "home", type: "link", to: "/home", label: "Home", icon: TbHome2 },
    {
        id: "community",
        type: "dropdown",
        label: "Community",
        icon: TbUsersGroup,
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
        icon: TbCalendarEvent,
        items: [
            { to: "/events", label: "All Events" },
            { to: "/events#upcoming", label: "Upcoming" },
            { to: "/events#past", label: "Past" },
        ],
    },
    {
        id: "sponsors",
        type: "link",
        to: "/sponsors",
        label: "Sponsors",
        icon: RiHandHeartFill,
    },
    {
        id: "gallery",
        type: "link",
        to: "/gallery",
        label: "Gallery",
        icon: TbPhoto,
    },
    {
        id: "contact",
        type: "link",
        to: "/contact",
        label: "Contact",
        icon: TbMail,
    },
];

const stripHash = (to) => to.split("#")[0];

// custom: decide which sub-item is active using path + hash
const isSubActive = (sub, location, activePath) => {
    const [subPath, subHash = ""] = sub.to.split("#"); // "/events", "past" etc.
    const locHash = (location.hash || "").replace("#", "");

    if (subPath !== activePath) return false;

    // Plain "/events" => active only when there is *no* hash
    if (!subHash) {
        return locHash === "";
    }

    // "/events#past" => active only when hash === "past"
    return locHash === subHash;
};

/* ---------- MAIN COMPONENT ---------- */
const NavLinks = ({ onNavigate }) => {
    const location = useLocation();
    const activePath = location.pathname;
    const activeLinkRef = useRef(null);

    // which sections (dropdowns) are open in drawer
    const [openSections, setOpenSections] = useState(() => {
        const initial = {};
        NAV_ITEMS.forEach((item) => {
            if (item.type === "dropdown") {
                const hasActiveChild = item.items.some((sub) =>
                    isSubActive(sub, location, activePath)
                );
                initial[item.id] = hasActiveChild;
            }
        });
        return initial;
    });

    // keep active section open when route changes
    useEffect(() => {
        setOpenSections((prev) => {
            const next = { ...prev };
            NAV_ITEMS.forEach((item) => {
                if (item.type === "dropdown") {
                    const hasActiveChild = item.items.some((sub) =>
                        isSubActive(sub, location, activePath)
                    );
                    if (hasActiveChild) {
                        next[item.id] = true;
                    }
                }
            });
            return next;
        });
    }, [activePath, location.hash]);

    // scroll active item into view
    useEffect(() => {
        if (activeLinkRef.current) {
            activeLinkRef.current.scrollIntoView({
                block: "center",
                behavior: "smooth",
            });
        }
    }, [activePath, location.hash]);

    const handleClose = () => {
        if (typeof onNavigate === "function") onNavigate();
    };

    const toggleSection = (id) => {
        setOpenSections((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <Styled.Wrap>
            {/* ---------- HEADER (SITE NAME + CLOSE) ---------- */}
            <div className="headerRow">
                <div className="brand">
                    <span className="brandAccent">JWIT</span>
                    <span className="brandName">
                        Jamshedpur Women in Technology
                    </span>
                </div>

                <button
                    type="button"
                    className="drawerCloseBtn"
                    onClick={handleClose}
                    aria-label="Close navigation"
                >
                    <TbSquareRoundedX />
                </button>
            </div>

            {/* ---------- NAV (LINKS + DROPDOWNS) ---------- */}
            <ul className="sectionList">
                {NAV_ITEMS.map((item) => {
                    // simple top-level link
                    if (item.type === "link") {
                        const Icon = item.icon;

                        return (
                            <li key={item.id} className="sectionItem">
                                <NavLink
                                    to={item.to}
                                    end
                                    className={({ isActive }) =>
                                        "navLinkRoot" +
                                        (isActive
                                            ? " navLinkRoot--active"
                                            : "")
                                    }
                                    onClick={handleClose}
                                >
                                    <span className="pill pill-root">
                                        <span className="icon icon-root">
                                            {Icon && <Icon />}
                                        </span>
                                        <span className="label">
                                            {item.label}
                                        </span>
                                    </span>
                                </NavLink>
                            </li>
                        );
                    }

                    // dropdown (parent + sublinks)
                    const SectionIcon = item.icon;
                    const isOpen = !!openSections[item.id];
                    const hasActiveChild = item.items.some((sub) =>
                        isSubActive(sub, location, activePath)
                    );

                    return (
                        <li key={item.id} className="sectionItem">
                            {/* parent row */}
                            <button
                                type="button"
                                className={
                                    "sectionHeader" +
                                    (hasActiveChild
                                        ? " sectionHeader--active"
                                        : "")
                                }
                                onClick={() => toggleSection(item.id)}
                                aria-expanded={isOpen}
                            >
                                <span className="sectionHeaderLeft">
                                    <span className="icon sectionIcon">
                                        <SectionIcon />
                                    </span>
                                    <span className="sectionLabel">
                                        {item.label}
                                    </span>
                                </span>
                                <span
                                    className={
                                        "chevron" +
                                        (isOpen ? " chevron--open" : "")
                                    }
                                >
                                    <TbChevronDown />
                                </span>
                            </button>

                            {/* sublinks */}
                            {isOpen && (
                                <ul className="navList">
                                    {item.items.map((sub) => {
                                        const subIsActive = isSubActive(
                                            sub,
                                            location,
                                            activePath
                                        );

                                        return (
                                            <li
                                                key={sub.to}
                                                className="navItem"
                                            >
                                                <NavLink
                                                    to={sub.to}
                                                    end
                                                    className={() =>
                                                        "navLink" +
                                                        (subIsActive
                                                            ? " active"
                                                            : "")
                                                    }
                                                    ref={
                                                        subIsActive
                                                            ? activeLinkRef
                                                            : undefined
                                                    }
                                                    onClick={handleClose}
                                                >
                                                    <span className="pill">
                                                        <span className="icon">
                                                            <span className="dot" />
                                                        </span>
                                                        <span className="label">
                                                            {sub.label}
                                                        </span>
                                                    </span>
                                                </NavLink>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </Styled.Wrap>
    );
};

export default NavLinks;
