// src/components/catalog/CatalogPage/styled.js
import styled from "styled-components";

export const Styled = {
    Wrap: styled.main`
        max-width: 1180px;
        margin: 0 auto;
        padding: 18px 14px 24px;
        color: var(--color-text);

        /* ===== PAGE HEADER ===== */
        .pageHeader {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            justify-content: space-between;
            gap: 10px 16px;
            margin-bottom: 14px;
        }

        .titleBlock {
            max-width: 680px;
        }

        .title {
            font-size: 1.35rem;
            letter-spacing: 0.04em;
        }

        .subtitle {
            font-size: 0.85rem;
            color: var(--color-text-muted);
            margin-bottom: 0;
        }

        .metaBlock {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }

        .metaTag {
            font-size: 0.7rem;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            padding: 4px 8px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.02),
                rgba(255, 255, 255, 0.04)
            );
            color: var(--color-text-muted);
            white-space: nowrap;
        }

        /* ===== MAIN LAYOUT ===== */
        .pageLayout {
            display: grid;
            grid-template-columns: minmax(0, 230px) minmax(0, 1.7fr) minmax(
                    0,
                    240px
                );
            gap: 12px;
            align-items: flex-start;
        }

        .sidebar,
        .mainColumn,
        .infoPanel {
            min-width: 0;
        }

        /* ===== PANELS ===== */
        .panel {
            background: var(--color-surface);
            border-radius: var(--radius-lg);
            border: 1px solid var(--color-border);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.55);
            padding: 10px 11px 12px;
        }

        .panelHeader {
            margin-bottom: 8px;
        }

        .panelLabel {
            display: block;
            font-size: 0.8rem;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--color-heading);
            margin-bottom: 2px;
        }

        .panelHint {
            display: block;
            font-size: 0.72rem;
            color: var(--color-text-muted);
        }

        .panelBody {
            font-size: 0.8rem;
            color: var(--color-text);
        }

        .placeholderBlock {
            padding: 10px;
            border-radius: var(--radius-md);
            background: radial-gradient(
                    circle at top left,
                    rgba(255, 255, 255, 0.06),
                    transparent 55%
                ),
                radial-gradient(
                    circle at bottom right,
                    rgba(255, 255, 255, 0.02),
                    transparent 60%
                );
            border: 1px dashed var(--color-border);
            color: var(--color-text-muted);
        }

        /* ===== MAIN COLUMN SPECIAL ===== */
        .mainPanel {
            padding: 11px 12px 13px;
        }

        .mainHeaderRow {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 8px 12px;
        }

        .viewBadges {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            justify-content: flex-end;
        }

        .pill {
            font-size: 0.72rem;
            padding: 4px 9px;
            border-radius: 999px;
            background: var(--color-surface-soft);
            color: var(--color-surface-soft-text);
            border: 1px solid var(--color-border);
            white-space: nowrap;
        }

        .pillGhost {
            background: transparent;
            color: var(--color-text-muted);
        }

        .gridPlaceholder {
            margin-top: 8px;
            padding: 12px;
            min-height: 160px;
            border-radius: var(--radius-md);
            background: linear-gradient(
                    135deg,
                    rgba(255, 255, 255, 0.03),
                    transparent 55%
                ),
                radial-gradient(
                    circle at bottom left,
                    rgba(255, 255, 255, 0.02),
                    transparent 60%
                );
            border: 1px dashed var(--color-border);
            color: var(--color-text-muted);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 960px) {
            .pageLayout {
                grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.4fr);
                grid-template-areas:
                    "main main"
                    "sidebar info";
            }

            .mainColumn {
                grid-area: main;
            }

            .sidebar {
                grid-area: sidebar;
            }

            .infoPanel {
                grid-area: info;
            }
        }

        @media (max-width: 720px) {
            .pageLayout {
                grid-template-columns: minmax(0, 1fr);
                grid-template-areas:
                    "main"
                    "sidebar"
                    "info";
            }

            .pageHeader {
                align-items: flex-start;
            }

            .metaBlock {
                justify-content: flex-start;
            }
        }

        @media (max-width: 480px) {
            .title {
                font-size: 1.1rem;
            }

            .pageLayout {
                gap: 10px;
            }

            .panel {
                padding: 9px 9px 11px;
            }

            .mainPanel {
                padding: 9px 9px 11px;
            }
        }
    `,
};
