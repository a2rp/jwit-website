import{d as m,r as s,j as e,k as p,l as h,g as t,m as l}from"./index-B2S8S3KJ.js";const x={Page:m.main`
        padding: 32px 16px 80px;
        max-width: 1180px;
        margin: 0 auto;

        @media (width >= 768px) {
            padding: 40px 24px 100px;
        }

        /* Header Section */
        .headerSection {
            text-align: center;
            margin-bottom: 38px;
        }

        .headerIcon {
            font-size: 48px;
            color: var(--color-primary);
            margin-bottom: 10px;
            opacity: 0.9;
        }

        .title {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--color-heading);
            margin-bottom: 6px;
        }

        .subtitle {
            font-size: 0.95rem;
            color: var(--color-text-muted);
        }

        .subtitle span {
            font-weight: 600;
            color: var(--color-primary);
        }

        .sparkIcon {
            color: var(--color-primary);
            margin-left: 4px;
            vertical-align: middle;
        }

        /* Team Grid */
        .teamGrid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 22px;
        }

        .card {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 18px 16px 20px;
            text-align: center;
            position: relative;
            overflow: hidden;
            cursor: pointer;

            /* Micro Interaction */
            transition: transform 0.25s ease, box-shadow 0.25s ease,
                border-color 0.25s ease;

            &:hover {
                transform: translateY(-6px);
                border-color: var(--color-primary);
                box-shadow: 0 14px 28px rgba(0, 0, 0, 0.28);
            }
        }

        /* Image */
        .imgWrap {
            width: 110px;
            height: 110px;
            margin: 0 auto 14px;
            border-radius: 999px;
            overflow: hidden;
            border: 3px solid var(--color-primary-soft);
            box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
            background: var(--color-bg-alt);
            transition: border-color 0.25s ease;

            .card:hover & {
                border-color: var(--color-primary);
            }
        }

        .imgWrap img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        /* Info */
        .name {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--color-heading);
            margin-bottom: 4px;
        }

        .role {
            font-size: 0.9rem;
            color: var(--color-primary);
            margin-bottom: 12px;
        }

        /* Social Icons */
        .social {
            display: flex;
            justify-content: center;
            gap: 12px;
        }

        .sIcon {
            width: 34px;
            height: 34px;
            border-radius: 999px;
            display: flex;
            align-items: center;
            justify-content: center;

            background: var(--color-surface-soft);
            color: var(--color-primary);
            font-size: 1.2rem;
            border: 1px solid var(--color-border);

            transition: background 0.2s ease, transform 0.2s ease,
                color 0.2s ease;

            &:hover {
                background: var(--color-primary);
                color: var(--color-bg);
                transform: scale(1.1);
            }
        }

        /* ===== MODAL ===== */

        .modalOverlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.58);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999;
            padding: 16px;
        }

        .modal {
            max-width: 520px;
            width: 100%;
            background: var(--color-surface);
            color: var(--color-surface-text);
            border-radius: 18px;
            border: 1px solid var(--color-border);
            box-shadow: 0 18px 40px rgba(0, 0, 0, 0.5);
            padding: 18px 18px 20px;
            position: relative;
        }

        .modalCloseBtn {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 28px;
            height: 28px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg-alt);
            color: var(--color-surface-soft-text);
            cursor: pointer;
            font-size: 16px;
            line-height: 1;

            display: flex;
            align-items: center;
            justify-content: center;

            transition: background 0.2s ease, transform 0.1s ease,
                color 0.2s ease;

            &:hover {
                background: var(--color-primary);
                color: var(--color-primary-text);
                transform: translateY(-1px);
            }
        }

        .modalHeader {
            display: flex;
            gap: 14px;
            align-items: center;
            margin-bottom: 12px;
        }

        .modalImgWrap {
            width: 80px;
            height: 80px;
            border-radius: 999px;
            overflow: hidden;
            border: 3px solid var(--color-primary-soft);
            background: var(--color-bg-alt);
            flex-shrink: 0;
        }

        .modalImgWrap img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .modalTitleBlock {
            display: flex;
            flex-direction: column;
            gap: 3px;
        }

        .modalName {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--color-heading);
        }

        .modalRole {
            font-size: 0.9rem;
            color: var(--color-primary);
        }

        .modalMeta {
            font-size: 0.82rem;
            color: var(--color-text-muted);
        }

        .modalBody {
            margin-top: 6px;
        }

        .modalText {
            font-size: 0.88rem;
            color: var(--color-surface-soft-text);
            margin-bottom: 8px;
        }

        .modalText.funFact span {
            font-weight: 600;
            color: var(--color-primary);
        }

        .modalActions {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .modalBtn {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 14px;
            border-radius: 999px;
            font-size: 0.86rem;
            text-decoration: none;
            cursor: pointer;
            border: 1px solid transparent;
            transition: background 0.2s ease, color 0.2s ease,
                transform 0.1s ease, border-color 0.2s ease;

            svg {
                font-size: 16px;
            }
        }

        .modalBtn.primary {
            background: var(--color-primary);
            color: var(--color-primary-text);
            border-color: var(--color-primary);

            &:hover {
                background: var(--color-secondary);
                border-color: var(--color-secondary);
                color: var(--color-secondary-text);
                transform: translateY(-1px);
            }
        }

        .modalBtn.ghost {
            background: var(--color-surface-soft);
            color: var(--color-surface-soft-text);
            border-color: var(--color-border);

            &:hover {
                background: var(--color-bg-alt);
                border-color: var(--color-primary);
                color: var(--color-heading);
                transform: translateY(-1px);
            }
        }
    `},g="/jwit-website/images/team/ananyaprasad.png",f="/jwit-website/images/team/madhavisingh.png",u="/jwit-website/images/team/suhanimishra.png",b="/jwit-website/images/team/ritikasen.png",v="/jwit-website/images/team/khushidas.png",y="/jwit-website/images/team/priyasoren.png",k=[{name:"Ananya Prasad",role:"President",email:"ananya@jwit.in",linkedin:"https://linkedin.com",img:g,year:"3rd year, CSE",focus:"Community building, leadership, outreach",bio:"Leads the overall direction of JWIT, anchors collaborations and keeps the community aligned with its mission.",funFact:"Loves combining tech with storytelling and runs a small blog of member journeys."},{name:"Madhavi Singh",role:"Vice President",email:"madhavi@jwit.in",linkedin:"https://linkedin.com",img:f,year:"3rd year, IT",focus:"Operations, planning, logistics",bio:"Keeps events, communication and core team operations running smoothly behind the scenes.",funFact:"Can create a full Notion board for any idea in under 10 minutes."},{name:"Suhani Mishra",role:"Tech Lead",email:"suhani@jwit.in",linkedin:"https://linkedin.com",img:u,year:"2nd year, CSE",focus:"Coding sessions, project repos, tech mentorship",bio:"Designs tech roadmaps, mentors members on projects and maintains the JWIT codebases.",funFact:"Loves refactoring old JavaScript into clean React components."},{name:"Ritika Sen",role:"Community Manager",email:"ritika@jwit.in",linkedin:"https://linkedin.com",img:b,year:"2nd year, ECE",focus:"Community health, onboarding, events experience",bio:"Ensures new members feel welcomed, supported and plugged into the right circles.",funFact:"Remembers names and faces from almost every meetup."},{name:"Khushi Das",role:"Workshops Lead",email:"khushi@jwit.in",linkedin:"https://linkedin.com",img:v,year:"1st year, CSE",focus:"Workshop content, speakers, practice tasks",bio:"Curates hands-on workshops and keeps them beginner-friendly yet challenging.",funFact:"Has a backlog of 50+ workshop ideas in her notes app."},{name:"Priya Soren",role:"Events Lead",email:"priya@jwit.in",linkedin:"https://linkedin.com",img:y,year:"3rd year, Mech",focus:"Event experience, offline logistics, decor",bio:"Designs end-to-end event flow—from registrations to feedback and photos.",funFact:"Can turn any empty classroom into an event space in 20 minutes."}],w=()=>{const[a,o]=s.useState(null);s.useEffect(()=>{if(!a)return;const r=i=>{i.key==="Escape"&&o(null)};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[a]);const c=r=>{o(r)},d=()=>{o(null)},n=r=>r.stopPropagation();return e.jsxs(x.Page,{children:[e.jsxs("header",{className:"headerSection",children:[e.jsx(p,{className:"headerIcon"}),e.jsx("h1",{className:"title",children:"Meet the Core Team"}),e.jsxs("p",{className:"subtitle",children:["The women powering ",e.jsx("span",{children:"JWIT"})," with leadership, collaboration, and heart.",e.jsx(h,{className:"sparkIcon"})]})]}),e.jsx("section",{className:"teamGrid",children:k.map((r,i)=>e.jsxs("div",{className:"card",onClick:()=>c(r),children:[e.jsx("div",{className:"imgWrap",children:e.jsx("img",{src:r.img,alt:r.name})}),e.jsxs("div",{className:"info",children:[e.jsx("h3",{className:"name",children:r.name}),e.jsx("p",{className:"role",children:r.role})]}),e.jsxs("div",{className:"social",onClick:n,children:[e.jsx("a",{href:`mailto:${r.email}`,className:"sIcon",children:e.jsx(t,{})}),e.jsx("a",{href:r.linkedin,target:"_blank",rel:"noreferrer",className:"sIcon",children:e.jsx(l,{})})]})]},i))}),a&&e.jsx("div",{className:"modalOverlay",onClick:d,"aria-modal":"true",role:"dialog",children:e.jsxs("div",{className:"modal",onClick:n,children:[e.jsx("button",{className:"modalCloseBtn",type:"button",onClick:()=>o(null),"aria-label":"Close member details",children:"✕"}),e.jsxs("div",{className:"modalHeader",children:[e.jsx("div",{className:"modalImgWrap",children:e.jsx("img",{src:a.img,alt:a.name})}),e.jsxs("div",{className:"modalTitleBlock",children:[e.jsx("h2",{className:"modalName",children:a.name}),e.jsx("p",{className:"modalRole",children:a.role}),a.year&&e.jsx("p",{className:"modalMeta",children:a.year}),a.focus&&e.jsxs("p",{className:"modalMeta",children:["Focus: ",a.focus]})]})]}),e.jsxs("div",{className:"modalBody",children:[a.bio&&e.jsx("p",{className:"modalText",children:a.bio}),a.funFact&&e.jsxs("p",{className:"modalText funFact",children:[e.jsx("span",{children:"Fun fact: "}),a.funFact]}),e.jsxs("div",{className:"modalActions",children:[e.jsxs("a",{href:`mailto:${a.email}`,className:"modalBtn primary",children:[e.jsx(t,{}),"Email ",a.name.split(" ")[0]]}),e.jsxs("a",{href:a.linkedin,target:"_blank",rel:"noreferrer",className:"modalBtn ghost",children:[e.jsx(l,{}),"View LinkedIn"]})]})]})]})})]})};export{w as default};
