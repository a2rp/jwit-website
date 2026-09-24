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
            gap: 8px;
        }

        .linkItem {
            display: grid;
            place-items: center;
            width: 34px;
            height: 34px;
            padding: 0;
            border-radius: 9px;
            text-decoration: none;
            color: var(--color-surface-soft-text);
            border: 1px solid var(--color-border);

            transition: background-color 0.18s ease, color 0.18s ease,
                border-color 0.18s ease, box-shadow 0.18s ease;

            svg {
                font-size: 13px;
            }

            &:hover {
                background-color: var(--color-primary-soft);
                color: var(--color-primary-text);
                border-color: var(--color-border);
                box-shadow: var(--shadow-soft);
            }
        }
    `,
};
