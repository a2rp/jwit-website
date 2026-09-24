import{d as c,M as r,j as e,O as d,t as p,m as h}from"./index-B2S8S3KJ.js";import{a as x}from"./index-GSoX3aY7.js";const m={Page:c.main`
        padding: 32px 16px 80px;
        max-width: 1180px;
        margin: 0 auto;

        @media (width >= 768px) {
            padding: 40px 24px 100px;
        }

        /* PAGE META (LAST UPDATED) */
        .pageMeta {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-muted);
            font-size: 0.78rem;
            margin-bottom: 16px;
        }

        .pageMetaLabel {
            text-transform: uppercase;
            letter-spacing: 0.12em;
            font-weight: 600;
            font-size: 0.72rem;
            color: var(--color-text-muted);
        }

        .pageMetaValue {
            color: var(--color-surface-soft-text);
        }

        /* ===== HERO STRIP (YOUR ORIGINAL LAYOUT) ===== */
        .heroSection {
            border: 1px solid #333;
            border-radius: 5px;
            display: flex;
            gap: 15px;
            padding: 15px;

            @media (width < 800px) {
                flex-wrap: wrap;
                gap: 50px;
            }

            .aboutMeWrapper,
            .youtubeWrapper,
            .qrCodeWrapper {
                width: 100%;
            }

            .aboutMeWrapper {
                display: flex;
                flex-direction: column;

                .aboutMeImageWrapper {
                    height: 150px;
                    width: 200px;
                    text-align: center;
                    background-color: #000;
                    border-radius: 15px;

                    img {
                        height: 100%;
                        width: 100%;
                    }
                }

                .aboutMeTextWrapper {
                    margin-top: 12px;
                    font-size: 0.95rem;
                    color: var(--color-surface-soft-text);
                    line-height: 1.5;
                }

                .socialMediaLinks {
                    margin-top: 15px;
                    display: flex;
                    gap: 15px;
                    align-items: center;

                    a {
                        border: 1px solid #333;
                        border-radius: 5px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 40px;
                        height: 40px;
                        background: var(--color-surface-soft);
                        color: var(--color-heading);
                        transition: transform 0.2s ease;
                        &:hover {
                            transform: scale(1.1);
                        }

                        .socialIcon {
                            font-size: 20px;
                        }
                    }
                }
            }

            .youtubeWrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 30px;

                .youtubeTextWrapper {
                    text-align: center;
                    font-size: 0.9rem;
                    color: var(--color-surface-soft-text);

                    .youtubeLogo {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 15px;
                        transition: transform 0.2s ease;

                        &:hover {
                            transform: scale(1.1);
                        }

                        .youtubeIcon {
                            color: #f00;
                        }
                        span {
                            color: #000;
                            text-shadow: 0 0 3px #fff;
                            font-size: 32px;
                        }
                    }

                    a {
                        color: var(--color-primary);
                        text-decoration: none;
                        font-weight: 600;
                    }
                }

                .block {
                    background-color: #f00;
                    width: 100%;
                    max-width: 250px;
                    border-radius: 100px;
                    text-align: center;
                    height: 45px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    position: relative;
                    text-decoration: none;
                    /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); */
                    transition: transform 0.2s ease;

                    &:hover {
                        transform: scale(1.1);
                    }

                    .blockText {
                        width: 100%;
                        font-weight: 900;
                        color: var(--color-bg);

                        &.textLeft {
                            text-align: left;
                            padding-left: 30px;
                        }
                        &.textRight {
                            text-align: right;
                            padding-right: 30px;
                        }
                    }

                    .iconLeft,
                    .iconRight {
                        border: 5px solid var(--color-bg);
                        border-radius: 50%;
                        width: 60px;
                        height: 60px;
                        position: absolute;
                        margin: auto;
                        top: 0;
                        bottom: 0;
                        background-color: #f00;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        .youtubeChildIcon {
                            color: var(--color-bg);
                        }
                    }
                    .iconLeft {
                        left: 0;
                    }
                    .iconRight {
                        right: 0;
                    }
                }
            }

            .qrCodeWrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 8px;
                text-align: center;

                transition: transform 0.2s ease;
                &:hover {
                    transform: scale(1.05);
                }

                .qrText {
                    font-size: 0.85rem;
                    color: var(--color-text-muted);
                }

                img {
                    width: 100%;
                    height: 100%;
                    max-width: 260px;
                    border-radius: 12px;
                    background: #fff;
                    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
                }
            }
        }

        /* ===== ABOUT DETAILS SECTION (NEW) ===== */
        .detailsSection {
            margin-top: 40px;
        }

        .sectionTitle {
            font-size: 1.4rem;
            font-weight: 600;
            color: var(--color-heading);
            margin-bottom: 10px;
        }

        .sectionLead {
            font-size: 0.95rem;
            color: var(--color-text-muted);
            margin-bottom: 22px;
            max-width: 720px;
        }

        .detailsGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 20px;
        }

        .infoCard {
            background: var(--color-surface);
            border-radius: 16px;
            border: 1px solid var(--color-border);
            padding: 18px 16px;
        }

        .cardTitle {
            font-size: 1rem;
            font-weight: 600;
            color: var(--color-heading);
            margin-bottom: 8px;
        }

        .cardText {
            font-size: 0.88rem;
            color: var(--color-text-muted);
            line-height: 1.5;
            margin-top: 6px;
        }

        .bulletList {
            list-style: disc;
            padding-left: 18px;
            margin: 4px 0 0;
            font-size: 0.88rem;
            color: var(--color-text-muted);

            li + li {
                margin-top: 4px;
            }
        }

        .tagsRow {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin: 8px 0 10px;
        }

        .pillTag {
            font-size: 0.78rem;
            padding: 4px 10px;
            border-radius: 999px;
            background: var(--color-surface-soft);
            color: var(--color-surface-soft-text);
            border: 1px solid var(--color-border);
        }

        /* ===== LINKS SECTION ===== */
        .linksSection {
            margin-top: 40px;
        }

        .linksGrid {
            margin-top: 14px;
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }

        .linkCard {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 14px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            text-decoration: none;
            color: var(--color-surface-soft-text);
            font-size: 0.88rem;
            transition: transform 0.18s ease, border-color 0.18s ease,
                background 0.18s ease;

            .linkIcon {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                color: var(--color-primary);
            }

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-primary);
                background: var(--color-surface-soft);
            }
        }

        .linkCard--yt .linkIcon {
            color: #ff0000;
        }

        .supportNote {
            margin-top: 14px;
            font-size: 0.85rem;
            color: var(--color-text-muted);
        }
    `},u="/jwit-website/images/logo_ar.png",g="/jwit-website/images/upi-qr.png";function f(a){return r({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"},child:[]}]})(a)}function b(a){return r({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(a)}function j(a){return r({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(a)}function s(a){return r({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(a)}function w(a){return r({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"},child:[]}]})(a)}function v(a){return r({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"},child:[]}]})(a)}function N(a){return r({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"},child:[]}]})(a)}function k(a){return r({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m5.705 3.71-1.41-1.42C1 5.563 1 7.935 1 11h1l1-.063C3 8.009 3 6.396 5.705 3.71zm13.999-1.42-1.408 1.42C21 6.396 21 8.009 21 11l2-.063c0-3.002 0-5.374-3.296-8.647zM12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22zm7-7.414V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.184 4.073 5 6.783 5 10v4.586l-1.707 1.707A.996.996 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a.996.996 0 0 0-.293-.707L19 14.586z"},child:[]}]})(a)}const y=[{label:"GitHub",href:"https://github.com/a2rp",icon:d},{label:"Portfolio",href:"https://www.ashishranjan.net",icon:p},{label:"LinkedIn",href:"https://www.linkedin.com/in/aashishranjan",icon:h}],o={label:"YouTube – Ashish Ranjan",href:"https://www.youtube.com/@ashishranjan-ashz"},T=a=>{const t=new Date(a);if(Number.isNaN(t.getTime()))return"";const n=t.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"}),l=t.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return`${n} ${l} hrs`},z="2026-09-21T22:13:07+05:30",i=T(z),L=()=>e.jsxs(m.Page,{children:[i&&e.jsxs("div",{className:"pageMeta",children:[e.jsx("span",{className:"pageMetaLabel",children:"Last updated:"}),e.jsx("span",{className:"pageMetaValue",children:i})]}),e.jsxs("div",{className:"heroSection",children:[e.jsxs("div",{className:"aboutMeWrapper",children:[e.jsx("div",{className:"aboutMeImageWrapper",children:e.jsx("img",{src:u,alt:""})}),e.jsxs("div",{className:"aboutMeTextWrapper",children:["I am Ashish Ranjan.",e.jsx("br",{}),"A Full-Stack Web Developer.",e.jsx("br",{}),"These days I mainly build MERN stack applications"," ","(MongoDB, Express.js, React.js, Node.js)."]}),e.jsxs("div",{className:"socialMediaLinks",children:[e.jsx("a",{href:"https://www.facebook.com/theash.ashish/",target:"_blank",rel:"noopener noreferrer",children:e.jsx(f,{className:"socialIcon"})}),e.jsx("a",{href:"https://www.linkedin.com/in/aashishranjan/",target:"_blank",rel:"noopener noreferrer",children:e.jsx(j,{className:"socialIcon"})}),e.jsx("a",{href:"https://www.youtube.com/channel/UCLHIBQeFQIxmRveVAjLvlbQ",target:"_blank",rel:"noopener noreferrer",children:e.jsx(s,{className:"socialIcon"})}),e.jsx("a",{href:"https://github.com/a2rp",target:"_blank",rel:"noopener noreferrer",children:e.jsx(b,{className:"socialIcon"})})]})]}),e.jsxs("div",{className:"youtubeWrapper",children:[e.jsxs("div",{className:"youtubeTextWrapper",children:[e.jsxs("a",{className:"youtubeLogo",href:"https://www.youtube.com/@ashishranjan-ashz",target:"_blank",rel:"noopener noreferrer",children:[e.jsx(s,{className:"youtubeIcon",size:50})," ",e.jsx("span",{children:"YouTube"})]}),e.jsx("div",{className:"youtubeText",children:"I've also started posting regularly on my YouTube channel."}),e.jsx("br",{}),e.jsx("a",{href:"https://www.youtube.com/@ashishranjan-ashz",target:"_blank",rel:"noopener noreferrer",children:"youtube.com/@ashishranjan-ashz"})]}),e.jsxs("a",{className:"block likeBlock",href:"https://www.youtube.com/@ashishranjan-ashz",target:"_blank",rel:"noopener noreferrer",children:[e.jsx("div",{className:"blockText textLeft",children:"LIKE"}),e.jsx("div",{className:"iconRight",children:e.jsx(N,{className:"youtubeChildIcon",size:25})})]}),e.jsxs("a",{className:"block commentBlock",href:"https://www.youtube.com/@ashishranjan-ashz",target:"_blank",rel:"noopener noreferrer",children:[e.jsx("div",{className:"blockText textRight",children:"COMMENT"}),e.jsx("div",{className:"iconLeft",children:e.jsx(w,{className:"youtubeChildIcon",size:25})})]}),e.jsxs("a",{className:"block shareBlock",href:"https://www.youtube.com/@ashishranjan-ashz",target:"_blank",rel:"noopener noreferrer",children:[e.jsx("div",{className:"blockText textLeft",children:"SHARE"}),e.jsx("div",{className:"iconRight",children:e.jsx(v,{className:"youtubeChildIcon",size:25})})]}),e.jsxs("a",{className:"block subscribeBlock",href:"https://www.youtube.com/@ashishranjan-ashz",target:"_blank",rel:"noopener noreferrer",children:[e.jsx("div",{className:"blockText textRight",children:"SUBSCRIBE"}),e.jsx("div",{className:"iconLeft",children:e.jsx(k,{className:"youtubeChildIcon",size:25})})]})]}),e.jsxs("div",{className:"qrCodeWrapper",children:[e.jsx("p",{className:"qrText",children:"Optional support for my work (UPI)"}),e.jsx("img",{src:g,alt:""})]})]}),e.jsxs("section",{className:"detailsSection",children:[e.jsx("h2",{className:"sectionTitle",children:"About the developer"}),e.jsx("p",{className:"sectionLead",children:"Unemployed right now, but not idle. I use projects like this JWIT site to sharpen my frontend skills, experiment with UX, and build a serious portfolio of React + Vite projects."}),e.jsxs("div",{className:"detailsGrid",children:[e.jsxs("div",{className:"infoCard",children:[e.jsx("h3",{className:"cardTitle",children:"Currently"}),e.jsxs("ul",{className:"bulletList",children:[e.jsx("li",{children:"Open to full-time and remote roles."}),e.jsx("li",{children:"Taking freelance work for React / MERN apps."}),e.jsx("li",{children:"Focusing on clean UI, DX and re-usable patterns."})]})]}),e.jsxs("div",{className:"infoCard",children:[e.jsx("h3",{className:"cardTitle",children:"Core stack"}),e.jsxs("div",{className:"tagsRow",children:[e.jsx("span",{className:"pillTag",children:"React + Vite"}),e.jsx("span",{className:"pillTag",children:"Styled-components"}),e.jsx("span",{className:"pillTag",children:"Node & Express"}),e.jsx("span",{className:"pillTag",children:"MongoDB"}),e.jsx("span",{className:"pillTag",children:"REST APIs"})]}),e.jsx("p",{className:"cardText",children:"I like building small, focused tools that can be combined into bigger systems: dashboards, auth flows, payment pages, and internal tools."})]}),e.jsxs("div",{className:"infoCard",children:[e.jsx("h3",{className:"cardTitle",children:"About this project"}),e.jsx("p",{className:"cardText",children:"JWIT started as a freelance reference — a community site for a women-in-tech group in Jamshedpur. This version is a refactored, cleaner React + Vite implementation with sliders, modals, counters, events, sponsors, and gallery pages."}),e.jsx("p",{className:"cardText",children:"The goal is to show how I think about structure, routing, and micro-interactions in a real-world multi-page website."})]})]})]}),e.jsxs("section",{className:"linksSection",children:[e.jsx("h2",{className:"sectionTitle",children:"Find me online"}),e.jsxs("div",{className:"linksGrid",children:[y.map(a=>{const t=a.icon;return e.jsxs("a",{href:a.href,target:"_blank",rel:"noopener noreferrer",className:"linkCard",children:[e.jsx("span",{className:"linkIcon",children:e.jsx(t,{})}),e.jsx("span",{className:"linkLabel",children:a.label})]},a.label)}),e.jsxs("a",{href:o.href,target:"_blank",rel:"noopener noreferrer",className:"linkCard linkCard--yt",children:[e.jsx("span",{className:"linkIcon",children:e.jsx(x,{})}),e.jsx("span",{className:"linkLabel",children:o.label})]})]}),e.jsx("p",{className:"supportNote",children:"If you liked this site or it helped you, you can support my work using the UPI QR on top — totally optional, always appreciated."})]})]});export{L as default};
