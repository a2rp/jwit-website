import{d as b,u as j,q as y,r as s,j as e,h as n,l as w,s as m,c as g,f as x,a as k}from"./index-CZeAmlQo.js";const N={Page:b.main`
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

        /* FILTER TABS */
        .tabs {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-bottom: 30px;
        }

        .tab {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-surface-text);
            padding: 8px 16px;
            border-radius: 999px;
            cursor: pointer;
            font-size: 0.9rem;

            transition: background 0.2s ease, transform 0.2s ease;

            &:hover {
                background: var(--color-surface-soft);
                transform: translateY(-2px);
            }
        }

        .tab.active {
            background: var(--color-primary);
            color: var(--color-primary-text);
            border-color: var(--color-primary);
            font-weight: 600;
        }

        /* GRID */
        .gridSection {
            position: relative;
        }

        .grid {
            display: grid;
            gap: 22px;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        }

        /* EVENT CARD */
        .card {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;

            transition: transform 0.25s ease, box-shadow 0.25s ease,
                border-color 0.25s ease;

            &:hover {
                transform: translateY(-6px);
                border-color: var(--color-primary);
                box-shadow: 0 14px 26px rgba(0, 0, 0, 0.28);
            }
        }

        .imgWrap {
            position: relative;
            width: 100%;
            height: 180px;
            overflow: hidden;
        }

        .imgWrap img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .tag {
            position: absolute;
            top: 10px;
            left: 10px;
            padding: 4px 10px;
            background: var(--color-secondary);
            color: var(--color-secondary-text);
            font-size: 0.75rem;
            border-radius: 999px;
        }

        /* INFO */
        .info {
            padding: 18px 16px;
        }

        .evTitle {
            font-size: 1.05rem;
            font-weight: 600;
            margin-bottom: 10px;
            color: var(--color-heading);
        }

        .meta {
            display: flex;
            flex-direction: column;
            gap: 6px;
            font-size: 0.85rem;
            color: var(--color-text-muted);
            margin-bottom: 12px;
        }

        .metaItem {
            display: flex;
            align-items: center;
            gap: 6px;

            svg {
                color: var(--color-primary);
            }
        }

        .detailsBtn {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 12px;
            border-radius: 10px;
            background: var(--color-primary);
            color: var(--color-primary-text);
            border: none;
            cursor: pointer;
            font-size: 0.85rem;
            font-weight: 600;

            transition: background 0.2s ease, transform 0.2s ease;

            &:hover {
                background: var(--color-secondary);
                color: var(--color-secondary-text);
                transform: translateY(-2px);
            }

            svg {
                font-size: 18px;
            }
        }

        /* EVENT MODAL */

        .eventModalOverlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
            z-index: 999;
        }

        .eventModal {
            width: 100%;
            max-width: 640px;
            background: var(--color-surface);
            border-radius: 18px;
            border: 1px solid var(--color-border);
            box-shadow: 0 22px 40px rgba(0, 0, 0, 0.5);
            overflow: hidden;
            position: relative;

            transform: translateY(8px) scale(0.98);
            opacity: 0;
            animation: eventModalIn 0.2s ease-out forwards;
        }

        @keyframes eventModalIn {
            to {
                transform: translateY(0) scale(1);
                opacity: 1;
            }
        }

        .eventModalClose {
            position: absolute;
            top: 10px;
            right: 10px;
            border: none;
            background: rgba(0, 0, 0, 0.3);
            color: #fff;
            width: 26px;
            height: 26px;
            border-radius: 999px;
            cursor: pointer;
            font-size: 15px;
            display: flex;
            align-items: center;
            justify-content: center;

            transition: background 0.15s ease, transform 0.15s ease;

            &:hover {
                background: rgba(0, 0, 0, 0.6);
                transform: scale(1.05);
            }
        }

        .eventModalImgWrap {
            position: relative;
            width: 100%;
            height: 220px;
            overflow: hidden;
        }

        .eventModalImgWrap img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .eventModalTag {
            position: absolute;
            bottom: 12px;
            left: 12px;
            padding: 4px 10px;
            border-radius: 999px;
            background: var(--color-secondary);
            color: var(--color-secondary-text);
            font-size: 0.8rem;
        }

        .eventModalBody {
            padding: 18px 18px 20px;
        }

        .eventModalTitle {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 10px;
            color: var(--color-heading);
        }

        .eventModalMeta {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            font-size: 0.86rem;
            color: var(--color-text-muted);
            margin-bottom: 12px;

            span {
                display: inline-flex;
                align-items: center;
                gap: 6px;

                svg {
                    color: var(--color-primary);
                }
            }
        }

        .eventModalDesc {
            font-size: 0.9rem;
            color: var(--color-surface-text);
            margin-bottom: 10px;
        }

        .eventModalNote {
            font-size: 0.8rem;
            color: var(--color-text-muted);
            margin-bottom: 14px;
        }

        .eventModalCta {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 9px 14px;
            border-radius: 999px;
            border: 1px solid var(--color-primary);
            background: var(--color-primary-soft);
            color: var(--color-heading);
            font-size: 0.9rem;
            font-weight: 600;
            text-decoration: none;
            cursor: pointer;

            transition: background 0.18s ease, transform 0.12s ease,
                box-shadow 0.18s ease;

            svg {
                font-size: 18px;
            }

            &:hover {
                background: var(--color-primary);
                transform: translateY(-1px);
                box-shadow: 0 12px 22px rgba(0, 0, 0, 0.35);
            }
        }
    `},M="/jwit-website/images/events/upcoming-1.jpg",T="/jwit-website/images/events/upcoming-2.jpg",I="/jwit-website/images/events/upcoming-3.jpg",E="/jwit-website/images/events/past-1.jpg",C="/jwit-website/images/events/past-2.jpg",z="/jwit-website/images/events/past-3.jpg",P=[{title:"Women in Tech Meetup – Jamshedpur",date:"Feb 22, 2025",time:"3:00 PM – 6:00 PM",location:"Bistupur Community Hall",attendees:"150+ expected",img:M,tag:"Meetup",description:"An open community gathering for women in and around Jamshedpur to share journeys, find collaborators, and meet local mentors."},{title:"Frontend Bootcamp (React Edition)",date:"Mar 8, 2025",time:"10:00 AM – 4:00 PM",location:"XITE College Auditorium",attendees:"80 seats only",img:T,tag:"Workshop",description:"A full–day hands-on bootcamp where we build a complete React project from scratch – ideal for students and early professionals."},{title:"Tech Leadership for Women",date:"Apr 15, 2025",time:"11:00 AM – 2:00 PM",location:"Centre for Excellence",attendees:"120 expected",img:I,tag:"Seminar",description:"Panel conversations with women leaders from steel, IT, and manufacturing talking about real leadership paths from Jamshedpur."}],W=[{title:"JWIT Launch Event",date:"Nov 11, 2024",location:"Jubilee Park Centre",attendees:"200+ attended",img:E,tag:"Launch",description:"The first official gathering of Jamshedpur Women in Technology with lightning talks, introductions, and community planning."},{title:"Git & GitHub Workshop",date:"Dec 5, 2024",location:"NIT Jamshedpur",attendees:"100+ attended",img:C,tag:"Workshop",description:"A practical introduction to version control, branching, and GitHub workflows – every attendee pushed their first PR."},{title:"AI Awareness Session",date:"Jan 12, 2025",location:"Jamshedpur Women's College",attendees:"140+ attended",img:z,tag:"Seminar",description:"Exploring what AI really is, how it is used in industry, and where students can start learning responsibly."}],h=o=>o==="#past"?"past":"upcoming",S=()=>{const o=j(),u=y(),[i,c]=s.useState(()=>h(o.hash)),[t,d]=s.useState(null);s.useEffect(()=>{c(h(o.hash))},[o.hash]);const v=i==="upcoming"?P:W,f=a=>{d(a)},l=()=>d(null);s.useEffect(()=>{if(!t)return;const a=r=>{r.key==="Escape"&&l()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[t]);const p=a=>{c(a),u(`/events${a==="past"?"#past":"#upcoming"}`,{replace:!1})};return e.jsxs(N.Page,{children:[e.jsxs("header",{className:"hero",children:[e.jsx(n,{className:"heroIcon"}),e.jsx("h1",{className:"heroTitle",children:"Events"}),e.jsxs("p",{className:"heroTagline",children:["Workshops, meetups, bootcamps & community gatherings.",e.jsx(w,{className:"sparkIcon"})]})]}),e.jsxs("div",{className:"tabs",children:[e.jsx("button",{className:i==="upcoming"?"tab active":"tab",onClick:()=>p("upcoming"),type:"button",children:"Upcoming"}),e.jsx("button",{className:i==="past"?"tab active":"tab",onClick:()=>p("past"),type:"button",children:"Past"})]}),e.jsx("section",{className:"gridSection",children:e.jsx("div",{className:"grid",children:v.map((a,r)=>e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"imgWrap",children:[e.jsx("img",{src:a.img,alt:a.title}),e.jsx("span",{className:"tag",children:a.tag})]}),e.jsxs("div",{className:"info",children:[e.jsx("h3",{className:"evTitle",children:a.title}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{className:"metaItem",children:[e.jsx(n,{})," ",a.date]}),a.time&&e.jsxs("span",{className:"metaItem",children:[e.jsx(m,{})," ",a.time]}),e.jsxs("span",{className:"metaItem",children:[e.jsx(g,{})," ",a.location]}),e.jsxs("span",{className:"metaItem",children:[e.jsx(x,{})," ",a.attendees]})]}),e.jsxs("button",{className:"detailsBtn",type:"button",onClick:()=>f(a),children:["View Details ",e.jsx(k,{})]})]})]},r))})}),t&&e.jsx("div",{className:"eventModalOverlay",onClick:l,"aria-modal":"true",role:"dialog",children:e.jsxs("div",{className:"eventModal",onClick:a=>a.stopPropagation(),children:[e.jsx("button",{type:"button",className:"eventModalClose",onClick:l,"aria-label":"Close",children:"✕"}),e.jsxs("div",{className:"eventModalImgWrap",children:[e.jsx("img",{src:t.img,alt:t.title}),e.jsx("span",{className:"eventModalTag",children:t.tag})]}),e.jsxs("div",{className:"eventModalBody",children:[e.jsx("h2",{className:"eventModalTitle",children:t.title}),e.jsxs("div",{className:"eventModalMeta",children:[e.jsxs("span",{children:[e.jsx(n,{})," ",t.date]}),t.time&&e.jsxs("span",{children:[e.jsx(m,{})," ",t.time]}),e.jsxs("span",{children:[e.jsx(g,{})," ",t.location]}),e.jsxs("span",{children:[e.jsx(x,{}),t.attendees]})]}),t.description&&e.jsx("p",{className:"eventModalDesc",children:t.description}),e.jsx("p",{className:"eventModalNote",children:"To reserve a seat or ask questions, send us a quick email with your name, college / company, and which event you're interested in."}),e.jsxs("a",{className:"eventModalCta",href:`mailto:hello@jwit.in?subject=JWIT Event - ${encodeURIComponent(t.title)}`,children:[e.jsx(n,{}),e.jsx("span",{children:"RSVP via Email"})]})]})]})})]})};export{S as default};
