import styled from "styled-components";

export const Styled = {
    Wrap: styled.footer`
        margin-top: 40px;
        background-color: var(--color-secondary-soft);
        color: var(--color-surface-soft-text);
        border-top: 1px solid var(--color-border);
        box-shadow: 0 -4px 18px rgba(0, 0, 0, 0.2);

        .inner {
            max-width: 1100px;
            margin: 0 auto;
            padding: 10px 12px 14px;
            display: flex;
            flex-direction: column;
            gap: 8px;

            @media (width >= 768px) {
                padding: 12px 24px 16px;
            }
        }

        .metaRow {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2px;
            font-size: 11px;

            @media (width >= 768px) {
                flex-direction: row;
                justify-content: center;
                gap: 10px;
            }
        }

        .copy {
            font-weight: 500;
        }

        .tagline {
            opacity: 0.9;
        }

        .linksRow {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 10px;
            font-size: 11px;
        }

        .linkItem {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 4px 8px;
            border-radius: 999px;
            text-decoration: none;
            color: var(--color-surface-soft-text);
            border: 1px solid transparent;

            transition: background-color 0.18s ease, color 0.18s ease,
                border-color 0.18s ease, transform 0.1s ease,
                box-shadow 0.18s ease;

            svg {
                font-size: 13px;
            }

            &:hover {
                background-color: var(--color-primary-soft);
                color: var(--color-primary-text);
                border-color: var(--color-border);
                box-shadow: var(--shadow-soft);
                transform: translateY(-1px);
            }
        }

        .linkItem.pill {
            background-color: var(--color-primary);
            color: var(--color-primary-text);
            font-weight: 600;

            .pillDot {
                width: 6px;
                height: 6px;
                border-radius: 999px;
                background-color: var(--color-primary-soft);
            }

            &:hover {
                background-color: var(--color-secondary);
                color: var(--color-secondary-text);
            }
        }
    `,
};
