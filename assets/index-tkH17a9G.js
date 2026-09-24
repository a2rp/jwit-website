import{d as x,r as n,j as e,n as u,l as g,e as h,y as b,z as f,A as d,x as v,B as k,C as y,f as j,D as S,c as T,E as c,F as N}from"./index-CsyRfC4X.js";import{M as w}from"./index-BPUScPE5.js";const L={Page:x.main`
        padding: 32px 16px 80px;
        max-width: 1180px;
        margin: 0 auto;

        @media (width >= 768px) {
            padding: 40px 24px 100px;
        }

        /* HERO */
        .hero {
            text-align: center;
            margin-bottom: 36px;
        }

        .heroIcon {
            font-size: 48px;
            color: var(--color-primary);
            margin-bottom: 10px;
        }

        .heroTitle {
            font-size: 1.9rem;
            font-weight: 700;
            color: var(--color-heading);
            margin-bottom: 6px;
        }

        .heroTagline {
            font-size: 0.95rem;
            color: var(--color-text-muted);
        }

        .heroTagline span {
            color: var(--color-primary);
            font-weight: 600;
        }

        .sparkIcon {
            margin-left: 4px;
            color: var(--color-primary);
        }

        .downloadsSec {
            margin-top: 50px;
        }

        /* SECTION TITLE */
        .secTitle {
            font-size: 1.4rem;
            font-weight: 600;
            margin-bottom: 18px;
            color: var(--color-heading);
            text-align: center;
        }

        /* GRID */
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 22px;
        }

        /* CARD */
        .card {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            padding: 20px;
            border-radius: 16px;
            text-align: center;

            transition: transform 0.25s ease, box-shadow 0.25s ease,
                border-color 0.25s ease;

            &:hover {
                transform: translateY(-6px);
                box-shadow: 0 14px 28px rgba(0, 0, 0, 0.28);
                border-color: var(--color-primary);
            }
        }

        .iconWrap {
            width: 42px;
            height: 42px;
            margin: 0 auto 12px;
            background: var(--color-primary-soft);
            border-radius: 999px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-heading);
            font-size: 20px;
        }

        .cardTitle {
            font-size: 1rem;
            font-weight: 600;
            color: var(--color-heading);
            margin-bottom: 4px;
        }

        .cardDesc {
            color: var(--color-text-muted);
            font-size: 0.86rem;
            margin-bottom: 10px;
        }

        .learnMore {
            border: none;
            background: transparent;
            color: var(--color-primary);
            font-size: 0.86rem;
            font-weight: 600;
            text-decoration: none;
            cursor: pointer;

            transition: color 0.2s ease, transform 0.12s ease;

            &:hover {
                color: var(--color-secondary);
                transform: translateY(-1px);
            }
        }

        /* DOWNLOADS */
        .dlWrap {
            display: flex;
            flex-direction: column;
            gap: 12px;
            max-width: 540px;
            margin: 0 auto 40px;
        }

        .dlItem {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 16px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            text-decoration: none;
            color: var(--color-surface-text);

            transition: transform 0.2s ease, border-color 0.2s ease,
                background 0.2s ease;

            svg {
                font-size: 20px;
                color: var(--color-primary);
            }

            &:hover {
                transform: translateY(-3px);
                border-color: var(--color-primary);
                background: var(--color-surface-soft);
            }
        }

        .dlText {
            flex-grow: 1;
            font-size: 0.92rem;
        }

        .dlSize {
            font-size: 0.8rem;
            color: var(--color-text-muted);
        }

        /* USEFUL LINKS */
        .linksList {
            list-style: none;
            padding: 0;
            max-width: 540px;
            margin: 0 auto;
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
        }

        .linksList li {
            margin-bottom: 12px;
        }

        .extLink {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 14px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            text-decoration: none;
            color: var(--color-surface-text);
            font-size: 0.9rem;

            transition: transform 0.2s ease, border-color 0.2s ease,
                background 0.2s ease;

            svg {
                font-size: 18px;
                color: var(--color-primary);
            }

            &:hover {
                transform: translateY(-3px);
                border-color: var(--color-primary);
                background: var(--color-surface-soft);
            }
        }

        /* LOCAL RESOURCES */
        .localSec {
            margin-top: 40px;
        }

        .localCard {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            padding: 20px;
            border-radius: 16px;

            transition: transform 0.25s ease, border-color 0.25s ease,
                box-shadow 0.25s ease;

            &:hover {
                transform: translateY(-6px);
                border-color: var(--color-primary);
                box-shadow: 0 14px 28px rgba(0, 0, 0, 0.28);
            }
        }

        .iconWrap.alt {
            background: var(--color-secondary-soft);
            color: var(--color-heading);
        }

        .localTitle {
            font-size: 1rem;
            font-weight: 600;
            margin: 12px 0 10px;
            color: var(--color-heading);
        }

        .localList {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .localList li {
            display: flex;
            align-items: center;
            gap: 6px;
            margin-bottom: 6px;
            font-size: 0.85rem;
            color: var(--color-text-muted);

            svg {
                color: var(--color-primary);
            }
        }

        /* ===== MODAL ===== */

        .modalOverlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999;
            padding: 16px;
        }

        .modal {
            width: 100%;
            max-width: 560px;
            background: var(--color-surface);
            border-radius: 18px;
            border: 1px solid var(--color-border);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);
            padding: 18px 18px 18px;
            position: relative;

            transform: translateY(8px) scale(0.98);
            opacity: 0;
            animation: modalIn 0.2s ease-out forwards;
        }

        @keyframes modalIn {
            to {
                transform: translateY(0) scale(1);
                opacity: 1;
            }
        }

        .modalClose {
            position: absolute;
            top: 10px;
            right: 10px;
            border: none;
            background: transparent;
            color: var(--color-text-muted);
            font-size: 18px;
            cursor: pointer;
            padding: 4px;

            transition: color 0.15s ease, transform 0.15s ease;

            &:hover {
                color: var(--color-heading);
                transform: scale(1.1);
            }
        }

        .modalHeader {
            display: flex;
            gap: 12px;
            margin-bottom: 12px;
            align-items: center;
        }

        .modalIcon {
            width: 40px;
            height: 40px;
            border-radius: 999px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--color-primary-soft);
            color: var(--color-heading);
            font-size: 22px;
            flex-shrink: 0;
        }

        .modalTitle {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--color-heading);
        }

        .modalSubtitle {
            font-size: 0.86rem;
            color: var(--color-text-muted);
        }

        .modalBody {
            margin-bottom: 12px;
        }

        .modalIntro {
            font-size: 0.9rem;
            color: var(--color-surface-text);
            margin-bottom: 10px;
        }

        .moduleList {
            list-style: none;
            padding-left: 0;
            margin: 0;
        }

        .moduleList li {
            position: relative;
            padding-left: 16px;
            margin-bottom: 6px;
            font-size: 0.86rem;
            color: var(--color-text-muted);
        }

        .moduleList li::before {
            content: "•";
            position: absolute;
            left: 4px;
            top: 0;
            color: var(--color-primary);
        }

        .modalFooter {
            margin-top: 6px;
            border-top: 1px solid var(--color-border);
            padding-top: 10px;
        }

        .pdfBtn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;
            border: 1px solid var(--color-primary);
            background: var(--color-primary-soft);
            color: var(--color-heading);
            text-decoration: none;
            font-size: 0.86rem;
            font-weight: 600;

            transition: background 0.18s ease, transform 0.12s ease,
                box-shadow 0.18s ease;
        }

        .pdfBtn svg {
            font-size: 18px;
        }

        .pdfBtn:hover {
            background: var(--color-primary);
            transform: translateY(-1px);
            box-shadow: 0 12px 22px rgba(0, 0, 0, 0.35);
        }

        .pdfSize {
            font-weight: 400;
            opacity: 0.9;
        }

        .modalNote {
            margin-top: 6px;
            font-size: 0.78rem;
            color: var(--color-text-muted);
        }
    `},C=[{icon:h,title:"Web Development",desc:"HTML, CSS, JS, React and modern frontend stacks.",link:"#",detailIntro:"Start from absolute basics and move towards building full single-page apps. This track is ideal for students who want to ship real projects and portfolios.",modules:["HTML & semantic structure","Modern CSS (Flexbox, Grid, responsive layouts)","JavaScript fundamentals & DOM","React basics, hooks and component patterns","Deploying projects on Netlify / GitHub Pages"],pdfTitle:"Web Dev Track – Syllabus PDF",pdfSize:"1.8 MB",pdfLink:"#"},{icon:b,title:"Data & Databases",desc:"SQL, NoSQL, database design, and analytics.",link:"#",detailIntro:"Understand how data is stored, queried and visualised. Helpful for backend, analytics and any serious product work.",modules:["Relational database concepts (tables, keys, joins)","Writing SQL queries with practice problems","Intro to NoSQL & document databases","ER diagrams and schema design basics","Small data project with dashboards / charts"],pdfTitle:"Data & DB Track – Syllabus PDF",pdfSize:"1.4 MB",pdfLink:"#"},{icon:f,title:"Soft Skills",desc:"Communication, leadership and interview confidence.",link:"#",detailIntro:"Tech skills open doors, soft skills keep them open. This track focuses on confidence, visibility and clear communication.",modules:["Speaking about your projects without fear","Resume and LinkedIn polish sessions","Mock interviews & feedback loops","Team collaboration & conflict basics","Public speaking practice in small circles"],pdfTitle:"Soft Skills Track – Workbook PDF",pdfSize:"2.1 MB",pdfLink:"#"},{icon:d,title:"Beginner Roadmaps",desc:"Guided basics for school & college students.",link:"#",detailIntro:"A simple, step-by-step path for students who are just touching computers, coding and tech opportunities for the first time.",modules:["Computer basics & internet safety","Logic-building with puzzles and games","First steps in HTML & scratch-style coding","Simple JS programs & problem solving","How to choose branches, colleges & next steps"],pdfTitle:"Beginner Roadmaps – Guide PDF",pdfSize:"1.2 MB",pdfLink:"#"}],z=[{icon:d,title:"Schools",places:["DBMS English School","Sacred Heart Convent","Carmel Junior College","Motilal Nehru Public School"]},{icon:v,title:"Colleges",places:["NIT Jamshedpur","XITE College","Karim City College","Jamshedpur Women's College"]},{icon:k,title:"Libraries",places:["JRD Tata Public Library","Beldih Club Reading Room","College campus libraries"]},{icon:w,title:"Museums",places:["Tata Steel Zoological Museum","Centre for Excellence Museum","Tribal Culture Museum"]},{icon:y,title:"Sports & Recreation",places:["Gopal Maidan","Keenan Stadium","JRD Sports Complex","Jubilee Park"]},{icon:j,title:"Local Clubs",places:["Beldih Club","United Club","Golmuri Club","Tata Club House"]},{icon:S,title:"Funding Resources",places:["Tata Steel CSR Programs","Startup Jharkhand Grants","College Innovation Funds","Women Entrepreneurship Schemes"]}],I=[{title:"JWIT Branding Kit",size:"12 MB",link:"#"},{title:"Event Playbook PDF",size:"4.2 MB",link:"#"},{title:"Contributor Handbook",size:"3.8 MB",link:"#"}],D=[{title:"Women in Tech India",link:"https://womenintech.org"},{title:"GitHub Learning Lab",link:"https://lab.github.com"},{title:"FreeCodeCamp",link:"https://freecodecamp.org"},{title:"Google Developer Groups",link:"https://gdg.community.dev"}],B=()=>{var i;const[a,l]=n.useState(null),s=()=>l(null);return n.useEffect(()=>{if(!a)return;const o=r=>{r.key==="Escape"&&s()};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[a]),e.jsxs(L.Page,{children:[e.jsxs("header",{className:"hero",children:[e.jsx(u,{className:"heroIcon"}),e.jsx("h1",{className:"heroTitle",children:"Resources"}),e.jsxs("p",{className:"heroTagline",children:["Everything you need to grow - from learning to local support.",e.jsx(g,{className:"sparkIcon"})]})]}),e.jsxs("section",{className:"tracksSec",children:[e.jsx("h2",{className:"secTitle",children:"Learning Tracks"}),e.jsx("div",{className:"grid",children:C.map((o,r)=>{const t=o.icon;return e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h3",{className:"cardTitle",children:o.title}),e.jsx("p",{className:"cardDesc",children:o.desc}),e.jsx("button",{type:"button",className:"learnMore",onClick:()=>l(o),children:"Explore now →"})]},r)})})]}),e.jsxs("section",{className:"localSec",children:[e.jsx("h2",{className:"secTitle",children:"Local Resources (Jamshedpur)"}),e.jsx("div",{className:"grid",children:z.map((o,r)=>{const t=o.icon;return e.jsxs("div",{className:"localCard",children:[e.jsx("div",{className:"iconWrap alt",children:e.jsx(t,{})}),e.jsx("h3",{className:"localTitle",children:o.title}),e.jsx("ul",{className:"localList",children:o.places.map((p,m)=>e.jsxs("li",{children:[e.jsx(T,{}),e.jsx("span",{children:p})]},m))})]},r)})})]}),e.jsxs("section",{className:"downloadsSec",children:[e.jsx("h2",{className:"secTitle",children:"Downloads"}),e.jsx("div",{className:"dlWrap",children:I.map((o,r)=>e.jsxs("a",{href:o.link,className:"dlItem",children:[e.jsx(c,{}),e.jsx("span",{className:"dlText",children:o.title}),e.jsxs("span",{className:"dlSize",children:["(",o.size,")"]})]},r))})]}),e.jsxs("section",{className:"linksSec",children:[e.jsx("h2",{className:"secTitle",children:"Useful External Links"}),e.jsx("ul",{className:"linksList",children:D.map((o,r)=>e.jsx("li",{children:e.jsxs("a",{className:"extLink",target:"_blank",rel:"noreferrer",href:o.link,children:[e.jsx(N,{}),o.title]})},r))})]}),a&&e.jsx("div",{className:"modalOverlay",onClick:s,"aria-modal":"true",role:"dialog",children:e.jsxs("div",{className:"modal",onClick:o=>o.stopPropagation(),children:[e.jsx("button",{type:"button",className:"modalClose",onClick:s,"aria-label":"Close details",children:"✕"}),e.jsxs("div",{className:"modalHeader",children:[e.jsx("div",{className:"modalIcon",children:e.jsx(a.icon,{})}),e.jsxs("div",{children:[e.jsx("h2",{className:"modalTitle",children:a.title}),e.jsx("p",{className:"modalSubtitle",children:a.desc})]})]}),e.jsxs("div",{className:"modalBody",children:[e.jsx("p",{className:"modalIntro",children:a.detailIntro}),((i=a.modules)==null?void 0:i.length)>0&&e.jsx("ul",{className:"moduleList",children:a.modules.map((o,r)=>e.jsx("li",{children:o},r))})]}),e.jsxs("div",{className:"modalFooter",children:[e.jsxs("a",{href:a.pdfLink,className:"pdfBtn",children:[e.jsx(c,{}),e.jsx("span",{children:a.pdfTitle}),e.jsxs("span",{className:"pdfSize",children:["(",a.pdfSize,")"]})]}),e.jsx("p",{className:"modalNote",children:"PDF includes session plan, suggested prerequisites and checklist for mentors."})]})]})})]})};export{B as default};
