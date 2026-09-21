import{d as h,r as a,j as e,T as f,a as b,b as v,c as x,e as j,f as w,g as y,N as l,h as N,i as k}from"./index-BAkg7P-W.js";const T={Page:h.main`
        min-height: 100vh;
        /* padding-top: 80px; */
        padding-bottom: 40px;
        background-color: var(--color-bg);
        color: var(--color-text);

        display: flex;
        flex-direction: column;
        align-items: stretch;

        .heroBar {
            width: 100%;
            background-color: var(--color-primary);
            color: var(--color-primary-text);
            padding: 18px 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
            position: relative;
            overflow: hidden;
        }

        .heroBar::after {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(
                circle at 0 0,
                rgba(255, 255, 255, 0.16),
                transparent 55%
            );
            pointer-events: none;
        }

        .heroTitle {
            font-size: 1rem;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            font-weight: 700;
            line-height: 1.4;
            color: var(--color-primary-text);
            position: relative;
            z-index: 1;

            @media (width >= 768px) {
                font-size: 1.15rem;
            }
        }

        /* Shared layout wrapper */
        section {
            width: 100%;
        }

        .introBlock,
        .infoSection,
        .missionSection,
        .joinSection,
        .sliderSection {
            max-width: 960px;
            margin: 0 auto;
            padding-inline: 16px;

            @media (width >= 768px) {
                padding-inline: 24px;
            }
        }

        .sliderSection {
            margin-top: 18px;
        }

        .introBlock {
            margin-top: 24px;
            font-size: 0.9rem;
            display: flex;
            flex-direction: column;
            gap: 10px;
            text-align: center;
            color: var(--color-text);

            @media (width >= 768px) {
                text-align: left;
            }
        }

        /* Info cards */

        .infoSection {
            margin-top: 22px;
        }

        .infoGrid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;

            @media (width >= 720px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }

        .infoItem {
            background-color: var(--color-surface);
            color: var(--color-surface-text);
            border-radius: 12px;
            padding: 12px 12px 14px;
            border: 1px solid var(--color-border);
            box-shadow: 0 6px 14px rgba(0, 0, 0, 0.16);
            display: flex;
            flex-direction: column;
            gap: 4px;
            transition: transform 0.16s ease, box-shadow 0.16s ease,
                border-color 0.16s ease, background-color 0.16s ease;
        }

        .infoItem:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 22px rgba(0, 0, 0, 0.22);
            border-color: var(--color-primary);
            background-color: var(--color-surface-soft);
        }

        .infoIcon {
            width: 26px;
            height: 26px;
            border-radius: 999px;
            background-color: var(--color-primary-soft);
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                font-size: 16px;
                color: var(--color-heading);
            }
        }

        .infoTitle {
            font-size: 0.8rem;
            font-weight: 600;
            margin-top: 4px;
            color: var(--color-heading);
        }

        .infoText {
            font-size: 0.82rem;
            color: var(--color-text);
        }

        .infoEmail {
            font-weight: 600;
            color: var(--color-link);
        }

        /* Mission */

        .missionSection {
            margin-top: 26px;
        }

        .missionCard {
            background-color: var(--color-surface-soft);
            color: var(--color-surface-soft-text);
            border-radius: 12px;
            padding: 18px 18px 20px;
            border: 1px solid var(--color-border);
            text-align: center;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);

            @media (width >= 768px) {
                padding: 22px 28px 24px;
            }
        }

        .missionTitle {
            font-size: 1.05rem;
            margin-bottom: 10px;
            color: var(--color-heading);
        }

        .missionText {
            font-size: 0.88rem;
            margin-bottom: 6px;
        }

        /* Join section */

        .joinSection {
            margin-top: 32px;
            text-align: center;
        }

        .joinTitle {
            font-size: 1.2rem;
            color: var(--color-heading);
            margin-bottom: 16px;
        }

        .joinGrid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
            margin-bottom: 10px;

            @media (width >= 640px) {
                grid-template-columns: repeat(3, minmax(0, 1fr));
            }
        }

        .joinItem {
            background-color: var(--color-surface);
            color: var(--color-surface-text);
            border-radius: 12px;
            padding: 14px 10px;
            border: 1px solid var(--color-border);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            box-shadow: var(--shadow-soft);
            transition: transform 0.16s ease, box-shadow 0.16s ease,
                border-color 0.16s ease, background-color 0.16s ease;
        }

        .joinItem:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 22px rgba(0, 0, 0, 0.22);
            border-color: var(--color-secondary);
            background-color: var(--color-surface-soft);
        }

        .joinLink {
            text-decoration: none;
        }

        .iconWrap {
            width: 32px;
            height: 32px;
            border-radius: 999px;
            background-color: var(--color-primary-soft);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 4px;

            svg {
                font-size: 18px;
                color: var(--color-heading);
            }
        }

        .joinLabel {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--color-text-muted);
        }

        .joinValue {
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--color-heading);
        }

        .joinHint {
            font-size: 0.76rem;
            color: var(--color-text-muted);
        }

        .joinNote {
            margin-top: 10px;
            font-size: 0.8rem;
            color: var(--color-text-muted);
            max-width: 640px;
            margin-inline: auto;
        }

        .ctaRow {
            margin-top: 14px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
        }

        .primaryCta,
        .ghostCta {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 8px 16px;
            border-radius: 999px;
            font-size: 0.82rem;
            text-decoration: none;
            transition: background-color 0.18s ease, color 0.18s ease,
                border-color 0.18s ease, box-shadow 0.18s ease,
                transform 0.1s ease;
        }

        .primaryCta {
            background-color: var(--color-primary);
            color: var(--color-primary-text);
            border: 1px solid var(--color-primary);

            &:hover {
                background-color: var(--color-secondary);
                border-color: var(--color-secondary);
                color: var(--color-secondary-text);
                box-shadow: var(--shadow-soft);
                transform: translateY(-1px);
            }
        }

        .ghostCta {
            background-color: transparent;
            color: var(--color-link);
            border: 1px solid var(--color-border);

            &:hover {
                background-color: var(--color-surface-soft);
                border-color: var(--color-link);
                box-shadow: var(--shadow-soft);
                transform: translateY(-1px);
            }
        }
    `},I={Wrap:h.section`
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
    `},S="/jwit-website/images/jwit-hero-1.png",z="/jwit-website/images/jwit-hero-2.png",B="/jwit-website/images/jwit-hero-3.png",C="/jwit-website/images/jwit-hero-4.png",W="/jwit-website/images/jwit-hero-5.png",Y="/jwit-website/images/jwit-hero-6.png",E="/jwit-website/images/jwit-hero-7.png",c=[{src:S,alt:"Women collaborating with sticky notes on a glass wall",title:"Planning the next build",tagline:"From ideas on sticky notes to working prototypes."},{src:z,alt:"Women carrying heavy boxes at an industrial site",title:"Strength at every shift",tagline:"Women leading operations on the shop floor."},{src:B,alt:"Woman working on a heavy machine in a workshop",title:"Making with machines",tagline:"Hands-on skills, from tools to terminals."},{src:C,alt:"Women sorting material on a long workbench",title:"Many hands, one line",tagline:"Teamwork turning raw work into finished output."},{src:W,alt:"Group of women lifting industrial crates together",title:"Lifting together",tagline:"Support systems matter in every workplace."},{src:Y,alt:"Row of women in helmets and vests working on a line",title:"Precision in motion",tagline:"Discipline, focus, and quiet leadership."},{src:E,alt:"Another group of women in helmets and vests on an assembly line",title:"Future of work",tagline:"More women in every layer of industry."}],L=6e3,H=()=>{const[t,d]=a.useState(0),[p,m]=a.useState(!1),i=c.length,n=a.useCallback(o=>{const r=(o+i)%i;d(r)},[i]),g=()=>n(t-1),u=()=>n(t+1);return a.useEffect(()=>{if(p)return;const o=setInterval(()=>{d(r=>(r+1)%i)},L);return()=>clearInterval(o)},[p,i]),e.jsxs(I.Wrap,{children:[e.jsxs("div",{className:"slider",onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),children:[c.map((o,r)=>{const s=r===t;return e.jsxs("figure",{className:"slide"+(s?" slide--active":""),children:[e.jsx("img",{src:o.src,alt:o.alt}),e.jsx("figcaption",{className:"caption",children:e.jsxs("div",{className:"captionInner",children:[e.jsx("h3",{className:"captionTitle",children:o.title}),e.jsx("p",{className:"captionText",children:o.tagline})]})})]},o.src+r)}),e.jsx("button",{type:"button",className:"arrowBtn arrowBtn--prev",onClick:g,"aria-label":"Previous slide",children:e.jsx(f,{})}),e.jsx("button",{type:"button",className:"arrowBtn arrowBtn--next",onClick:u,"aria-label":"Next slide",children:e.jsx(b,{})})]}),e.jsx("div",{className:"bullets","aria-label":"Slide navigation",children:c.map((o,r)=>{const s=r===t;return e.jsx("button",{type:"button",className:"bullet"+(s?" bullet--active":""),onClick:()=>n(r),"aria-label":`Go to slide ${r+1}`,children:e.jsx(v,{})},o.src+"bullet"+r)})})]})},M=()=>e.jsxs(T.Page,{children:[e.jsx("section",{className:"heroBar",children:e.jsx("h1",{className:"heroTitle",children:"Jamshedpur Women in Technology"})}),e.jsxs("section",{className:"introBlock",children:[e.jsx("p",{children:"Jamshedpur Women in Technology (JWIT) is a student-led community for women and non-binary folks who are curious about technology. We bring together people who are just starting out, actively upskilling, or already building real projects."}),e.jsx("p",{children:"From beginner-friendly coding sessions to resume reviews and project showcases, JWIT is a safe space to ask questions, experiment, and grow in public."})]}),e.jsx("section",{className:"sliderSection",children:e.jsx(H,{})}),e.jsx("section",{className:"infoSection",children:e.jsxs("div",{className:"infoGrid",children:[e.jsxs("div",{className:"infoItem",children:[e.jsx("div",{className:"infoIcon",children:e.jsx(x,{})}),e.jsx("div",{className:"infoTitle",children:"Based in"}),e.jsx("div",{className:"infoText",children:"Jamshedpur, Jharkhand – open to students from any college in and around the city."})]}),e.jsxs("div",{className:"infoItem",children:[e.jsx("div",{className:"infoIcon",children:e.jsx(j,{})}),e.jsx("div",{className:"infoTitle",children:"What we explore"}),e.jsx("div",{className:"infoText",children:"Web dev, programming basics, open-source, interview prep, design, and anything that helps you ship."})]}),e.jsxs("div",{className:"infoItem",children:[e.jsx("div",{className:"infoIcon",children:e.jsx(w,{})}),e.jsx("div",{className:"infoTitle",children:"How we learn"}),e.jsx("div",{className:"infoText",children:"Peer-to-peer sessions, hands-on workshops, project circles, and mentoring from seniors & alumni."})]}),e.jsxs("div",{className:"infoItem",children:[e.jsx("div",{className:"infoIcon",children:e.jsx(y,{})}),e.jsx("div",{className:"infoTitle",children:"Stay in touch"}),e.jsxs("div",{className:"infoText",children:["Event updates go out on our Discord, Instagram, and mailing list. You can also write to"," ",e.jsx("span",{className:"infoEmail",children:"hello@jwit.in"}),"."]})]})]})}),e.jsx("section",{className:"missionSection",children:e.jsxs("div",{className:"missionCard",children:[e.jsx("h2",{className:"missionTitle",children:"Our Mission"}),e.jsx("p",{className:"missionText",children:"Our mission is to make tech spaces in and around Jamshedpur more inclusive, supportive, and accessible for women. We want members to feel confident opening laptops, asking questions, and showing their work."}),e.jsx("p",{className:"missionText",children:"JWIT focuses on consistent practice over perfection – small weekly wins, collaborative projects, and a community that celebrates your progress."})]})}),e.jsxs("section",{className:"joinSection",children:[e.jsx("h2",{className:"joinTitle",children:"Join us!"}),e.jsxs("div",{className:"joinGrid",children:[e.jsxs(l,{to:"/events",className:"joinItem joinLink",children:[e.jsx("div",{className:"iconWrap",children:e.jsx(N,{})}),e.jsx("div",{className:"joinLabel",children:"Meetup Day"}),e.jsx("div",{className:"joinValue",children:"Every Saturday"}),e.jsx("div",{className:"joinHint",children:"View upcoming events"})]}),e.jsxs("div",{className:"joinItem",children:[e.jsx("div",{className:"iconWrap",children:e.jsx(k,{})}),e.jsx("div",{className:"joinLabel",children:"Typical Time"}),e.jsx("div",{className:"joinValue",children:"4:00pm – 6:00pm"}),e.jsx("div",{className:"joinHint",children:"Timing may shift based on workshop slots."})]}),e.jsxs("div",{className:"joinItem",children:[e.jsx("div",{className:"iconWrap",children:e.jsx(x,{})}),e.jsx("div",{className:"joinLabel",children:"Venue"}),e.jsx("div",{className:"joinValue",children:"CS Block, Jamshedpur Campus"}),e.jsx("div",{className:"joinHint",children:"Exact room number is announced with each event."})]})]}),e.jsx("p",{className:"joinNote",children:"New members can walk into any meetup — no prior experience needed. To get the full details and reminders, join the community through the buttons below."}),e.jsxs("div",{className:"ctaRow",children:[e.jsx(l,{to:"/membership",className:"primaryCta",children:"Become a member"}),e.jsx(l,{to:"/contact",className:"ghostCta",children:"Ask a question"})]})]})]});export{M as default};
