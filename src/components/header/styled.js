import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        position: fixed;
        inset-inline: 0;
        top: 0;
        height: 64px;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--color-surface);
        color: var(--color-surface-text);
        border-bottom: 1px solid var(--color-border);
        box-shadow: 0 4px 14px var(--shadow-soft);
    `,
    Main: styled.div`
        width: 100%;
        padding: 0 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media (width >= 768px) {
            padding: 0 24px;
        }
    `,
    Col: styled.div`
        &.left {
            .brandName {
                /* border: 1px solid #f00; */
                padding: 8px 0;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.14em;
                font-size: 0.78rem;
                color: var(--color-heading);
                cursor: pointer;
                user-select: none;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                /* width: 100px; */
                height: 60px;
                transition: opacity 0.2s ease, transform 0.1s ease;

                &:hover {
                    opacity: 0.9;
                    transform: translateY(-1px);
                }

                img {
                    width: 100%;
                    min-width: 60px;
                    height: 100%;
                }
            }
        }

        &.right {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 12px;

            /* DESKTOP NAV LINKS */
            .navlinksWrapper {
                display: none;

                @media (width >= 900px) {
                    display: flex;
                    align-items: center;
                }
            }

            .navList {
                /* border: 1px solid #f00; */
                list-style: none;
                margin: 0;
                padding: 0;
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .navItem {
                /* border: 1px solid #f00; */

                position: relative;
            }

            .topLink,
            .topButton {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 6px 10px;
                border-radius: 999px;
                border: 1px solid transparent;
                background-color: transparent;
                color: var(--color-text-muted);
                font-size: 0.8rem;
                cursor: pointer;
                text-decoration: none;

                transition: background-color 0.18s ease, color 0.18s ease,
                    border-color 0.18s ease, transform 0.1s ease,
                    box-shadow 0.18s ease;
            }

            .topButton {
                font-family: inherit;
            }

            .topLink:hover,
            .topButton:hover,
            .topLink.active,
            .topButton.activeParent {
                background-color: var(--color-surface-soft);
                color: var(--color-heading);
                border-color: var(--color-border);
                box-shadow: var(--shadow-soft);
                transform: translateY(-1px);
            }

            .topLabel {
                white-space: nowrap;
            }

            .chevron {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 0.9rem;
                transition: transform 0.18s ease;
            }

            .chevron--open {
                transform: rotate(180deg);
            }

            /* DROPDOWN PANEL */
            .dropdownPanel {
                /* border: 1px solid #f00; */
                position: absolute;
                /* top: calc(100% + 6px); */
                top: calc(100% + 0px);
                left: 0;
                min-width: 180px;
                padding: 6px 0;
                border-radius: 10px;
                background-color: var(--color-surface);
                border: 1px solid var(--color-border);
                box-shadow: var(--shadow-soft);
                opacity: 0;
                pointer-events: none;
                transform: translateY(4px);
                transition: opacity 0.18s ease, transform 0.18s ease;
                z-index: 200;
            }

            .dropdownPanel.is-open {
                opacity: 1;
                pointer-events: auto;
                transform: translateY(0);
            }

            .dropdownList {
                /* border: 1px solid #f00; */
                list-style: none;
                margin: 0;
                padding: 0;
            }

            .dropdownItem {
                /* border: 1px solid #f00; */
                margin: 0;
            }

            .dropdownLink {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 6px 12px;
                font-size: 0.8rem;
                text-decoration: none;
                color: var(--color-text);
                background: transparent;

                transition: background-color 0.16s ease, color 0.16s ease;
            }

            .dropdownLink:hover,
            .dropdownLink.active {
                background-color: var(--color-surface-soft);
                color: var(--color-heading);
            }

            .dropdownDot {
                width: 6px;
                height: 6px;
                border-radius: 999px;
                background-color: var(--color-border-strong);
                flex-shrink: 0;
            }

            /* Theme toggle button */
            .themeToggle {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 4px 8px;
                border-radius: 999px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface);
                color: var(--color-text-muted);
                font-size: 0.78rem;

                transition: background-color 0.2s ease, border-color 0.2s ease,
                    box-shadow 0.2s ease, transform 0.1s ease, opacity 0.2s ease;
            }

            .themeToggle:hover,
            .themeToggle:focus-visible {
                background-color: var(--color-bg-alt);
                border-color: var(--color-link);
                box-shadow: var(--shadow-soft);
                transform: translateY(-1px);
                outline: none;
            }

            .themeToggle .toggleTrack {
                position: relative;
                width: 32px;
                height: 16px;
                border-radius: 999px;
                background-color: var(--color-bg-alt);
                border: 1px solid var(--color-border);
                display: inline-flex;
                align-items: center;
                padding: 1px;
            }

            .themeToggle .toggleThumb {
                width: 14px;
                height: 14px;
                border-radius: 50%;
                background: linear-gradient(
                    135deg,
                    #ffffff,
                    var(--color-surface-soft)
                );
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.18);
                transform: translateX(0);
                transition: transform 0.18s ease-out;
            }

            .themeToggle .toggleIcon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 1rem;
            }

            /* Dark mode position */
            .themeToggle.is-dark .toggleThumb {
                transform: translateX(14px);
            }

            /* Menu icon button */
            .sliderLinkWrapper {
                border-radius: 999px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface-soft);
                padding: 6px 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                color: var(--color-surface-soft-text);
                cursor: pointer;

                transition: background-color 0.2s ease, box-shadow 0.2s ease,
                    transform 0.1s ease, border-color 0.2s ease;

                &:hover {
                    background-color: var(--color-surface);
                    border-color: var(--color-border);
                    box-shadow: var(--shadow-soft);
                    transform: translateY(-1px);
                }
            }
        }
    `,
};
