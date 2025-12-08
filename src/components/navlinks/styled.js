import styled from "styled-components";

export const Styled = {
    Wrap: styled.nav`
        padding: 10px 12px 18px;
        font-size: 13px;
        color: var(--color-text);

        /* ---------- HEADER ROW ---------- */
        .headerRow {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            padding: 4px 4px 10px;
            margin-bottom: 6px;
            border-bottom: 1px solid var(--color-border);
        }

        .brand {
            display: flex;
            align-items: baseline;
            gap: 6px;
            overflow: hidden;
        }

        .brandAccent {
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--color-link);
            flex-shrink: 0;
        }

        .brandName {
            font-size: 12px;
            font-weight: 500;
            color: var(--color-heading);
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .drawerCloseBtn {
            border: 1px solid var(--color-border);
            border-radius: 999px;
            padding: 4px 6px;
            background-color: var(--color-surface-soft);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.16s ease, transform 0.12s ease,
                box-shadow 0.16s ease;

            svg {
                font-size: 16px;
                color: var(--color-text-muted);
            }

            &:hover {
                background-color: var(--color-surface);
                transform: translateY(-1px);
                box-shadow: var(--shadow-soft);

                svg {
                    color: var(--color-heading);
                }
            }
        }

        /* ---------- LIST ROOT ---------- */

        .sectionList {
            list-style: none;
            margin: 0;
            padding: 6px 0 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .sectionItem {
            margin: 0;
        }

        /* ---------- TOP-LEVEL DIRECT LINKS ---------- */

        .navLinkRoot {
            text-decoration: none;
            color: inherit;
            display: block;
        }

        .pill-root {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 8px 11px;
            border-radius: 999px;
            background: transparent;
            cursor: pointer;
            transition: background 0.16s ease, transform 0.12s ease,
                box-shadow 0.16s ease;
        }

        .icon-root {
            width: 22px;
            height: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            background-color: var(--color-surface-soft);
            flex-shrink: 0;

            svg {
                color: var(--color-text-muted);
                font-size: 14px;
            }
        }

        .navLinkRoot:hover .pill-root {
            background: var(--color-surface-soft);
            transform: translateX(1px);
            box-shadow: var(--shadow-soft);
        }

        .navLinkRoot:hover .icon-root svg {
            color: var(--color-heading);
        }

        .navLinkRoot--active .pill-root {
            background: var(--color-surface-soft);
            color: var(--color-heading);
        }

        .navLinkRoot--active .pill-root::before {
            content: "";
            position: absolute;
            left: 4px;
            top: 50%;
            transform: translateY(-50%);
            width: 3px;
            height: 55%;
            border-radius: 999px;
            background: var(--color-link);
        }

        .navLinkRoot--active .icon-root {
            background-color: var(--color-heading);
        }

        .navLinkRoot--active .icon-root svg {
            color: var(--color-bg);
        }

        /* ---------- DROPDOWN PARENTS ---------- */

        .sectionHeader {
            width: 100%;
            border: none;
            background: transparent;
            cursor: pointer;
            padding: 6px 8px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            color: var(--color-text-muted);
            transition: background 0.16s ease, color 0.16s ease,
                transform 0.1s ease;
        }

        .sectionHeaderLeft {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .sectionIcon {
            background-color: var(--color-surface-soft);

            svg {
                color: var(--color-text-muted);
                font-size: 14px;
            }
        }

        .sectionLabel {
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .sectionHeader:hover {
            background: var(--color-surface-soft);
            color: var(--color-heading);
            transform: translateX(1px);
        }

        .sectionHeader--active {
            color: var(--color-heading);
        }

        .chevron {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            color: var(--color-text-muted);
            transition: transform 0.16s ease, color 0.16s ease;
        }

        .sectionHeader:hover .chevron {
            color: var(--color-heading);
        }

        .chevron--open {
            transform: rotate(180deg);
        }

        /* ---------- SUB NAV LIST ---------- */

        .navList {
            list-style: none;
            margin: 2px 0 4px;
            padding: 0 0 0 22px;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .navItem {
            margin: 0;
        }

        .navLink {
            text-decoration: none;
            color: inherit;
            display: block;
        }

        .pill {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 6px 10px;
            border-radius: 999px;
            position: relative;
            background: transparent;
            cursor: pointer;
            transition: background 0.16s ease, transform 0.12s ease,
                box-shadow 0.16s ease;
        }

        .icon {
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            background-color: var(--color-surface-soft);
            flex-shrink: 0;

            svg {
                color: var(--color-text-muted);
                font-size: 13px;
            }
        }

        .dot {
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background-color: var(--color-border-strong);
        }

        .label {
            white-space: nowrap;
        }

        .navLink:hover .pill {
            background: var(--color-surface-soft);
            transform: translateX(1px);
            box-shadow: var(--shadow-soft);
        }

        .navLink:hover .icon svg {
            color: var(--color-heading);
        }

        .navLink.active .pill {
            background: var(--color-surface-soft);
            color: var(--color-heading);
        }

        .navLink.active .pill::before {
            content: "";
            position: absolute;
            left: 4px;
            top: 50%;
            transform: translateY(-50%);
            width: 3px;
            height: 55%;
            border-radius: 999px;
            background: var(--color-link);
        }

        .navLink.active .icon {
            background-color: var(--color-heading);
        }

        .navLink.active .icon svg {
            color: var(--color-bg);
        }
    `,
};
