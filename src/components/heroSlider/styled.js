import styled from "styled-components";

export const Styled = {
    Wrap: styled.section`
        margin-top: 22px;

        .slider {
            position: relative;
            width: 100%;
            height: 430px;
            overflow: hidden;
            border-radius: 18px;
            background-color: var(--color-surface);
            border: 1px solid var(--color-border);
            box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35);
        }

        .slide {
            position: absolute;
            inset: 0;
            opacity: 0;
            transform: scale(1.02) translateY(4px);
            transition: opacity 0.4s ease-out, transform 0.45s ease-out;
            pointer-events: none;
        }

        .slide--active {
            opacity: 1;
            transform: scale(1) translateY(0);
            pointer-events: auto;
        }

        .slide img {
            width: 100%;
            height: clamp(210px, 40vw, 340px);
            object-fit: cover;
            display: block;
        }

        .caption {
            position: absolute;
            inset-inline: 0;
            bottom: 0;
            padding: 10px 12px 12px;
            pointer-events: none;
        }

        .captionInner {
            max-width: 480px;
            background: linear-gradient(
                to top,
                rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.2)
            );
            color: #fff;
            padding: 10px 12px;
            border-radius: 12px;
            transform: translateY(8px);
            opacity: 0;
            transition: opacity 0.35s ease-out, transform 0.35s ease-out;
        }

        .slide--active .captionInner {
            opacity: 1;
            transform: translateY(0);
        }

        .captionTitle {
            font-size: 0.98rem;
            font-weight: 600;
            margin-bottom: 2px;
        }

        .captionText {
            font-size: 0.82rem;
            opacity: 0.9;
        }

        /* Arrows */

        .arrowBtn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            border: none;
            border-radius: 999px;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            background-color: rgba(0, 0, 0, 0.35);
            color: #fff;

            opacity: 0;
            pointer-events: none;
            transition: opacity 0.2s ease-out, background-color 0.18s ease-out,
                transform 0.12s ease-out;
            z-index: 3;
        }

        .arrowBtn--prev {
            left: 10px;
        }

        .arrowBtn--next {
            right: 10px;
        }

        .slider:hover .arrowBtn {
            opacity: 1;
            pointer-events: auto;
        }

        .arrowBtn:hover {
            background-color: rgba(0, 0, 0, 0.6);
            transform: translateY(-50%) scale(1.02);
        }

        .arrowBtn svg {
            font-size: 18px;
        }

        /* Bullets */

        .bullets {
            margin-top: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
        }

        .bullet {
            border: none;
            background: transparent;
            cursor: pointer;
            padding: 0 1px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-muted);
            transform: translateY(0);
            transition: color 0.18s ease-out, transform 0.12s ease-out;
        }

        .bullet svg {
            font-size: 14px;
        }

        .bullet--active {
            color: var(--color-primary);
            transform: translateY(-1px);
        }

        .bullet:hover {
            color: var(--color-heading);
        }
    `,
};
