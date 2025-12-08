import{d as x,r as n,j as r,p as g,l as h,t as l,v as u,w as f,f as b,g as v,x as y}from"./index-jDHeA68L.js";const j={Page:x.main`
        padding: 32px 16px 80px;
        max-width: 1180px;
        margin: 0 auto;

        @media (width >= 768px) {
            padding: 40px 24px 100px;
        }

        /* HERO */
        .hero {
            text-align: center;
            margin-bottom: 28px;
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

        /* IMPACT STRIP */
        .impactStrip {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
            gap: 12px;
            margin-bottom: 32px;
        }

        .impactItem {
            background: var(--color-surface);
            border-radius: 14px;
            border: 1px solid var(--color-border);
            padding: 10px 14px;
            text-align: center;
        }

        .impactValue {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--color-heading);
        }

        .impactLabel {
            font-size: 0.8rem;
            color: var(--color-text-muted);
        }

        /* GENERIC SECTION */
        .section {
            margin-top: 28px;
        }

        .secTitle {
            font-size: 1.35rem;
            font-weight: 600;
            color: var(--color-heading);
            margin-bottom: 18px;
            text-align: center;
        }

        /* MAJOR SPONSORS */
        .majorGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 22px;
        }

        .sponsorCard {
            background: var(--color-surface);
            border-radius: 18px;
            border: 1px solid var(--color-border);
            padding: 18px 18px 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            transition: transform 0.25s ease, box-shadow 0.25s ease,
                border-color 0.25s ease;

            &:hover {
                transform: translateY(-6px);
                border-color: var(--color-primary);
                box-shadow: 0 16px 30px rgba(0, 0, 0, 0.32);
            }
        }

        .cardHeader {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .logoWrap {
            width: 56px;
            height: 56px;
            border-radius: 16px;
            background: var(--color-bg-alt);
            border: 1px solid var(--color-border);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .logoWrap img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .cardHeading {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .sponsorName {
            font-size: 1rem;
            font-weight: 600;
            color: var(--color-heading);
        }

        .tierBadge {
            align-self: flex-start;
            padding: 3px 9px;
            border-radius: 999px;
            background: var(--color-secondary-soft);
            color: var(--color-secondary-text);
            font-size: 0.75rem;
            font-weight: 600;
        }

        .focus {
            font-size: 0.86rem;
            color: var(--color-text-muted);
        }

        .supportList {
            list-style: none;
            padding-left: 0;
            margin: 0 0 8px;
        }

        .supportList li {
            font-size: 0.84rem;
            color: var(--color-surface-soft-text);
            margin-bottom: 4px;
            position: relative;
            padding-left: 14px;
        }

        .supportList li::before {
            content: "•";
            position: absolute;
            left: 0;
            top: 0;
            color: var(--color-primary);
        }

        .visitBtn {
            margin-top: 4px;
            align-self: flex-start;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 14px;
            border-radius: 999px;
            background: var(--color-primary);
            color: var(--color-primary-text);
            font-size: 0.86rem;
            font-weight: 600;
            text-decoration: none;
            border: none;
            cursor: pointer;
            transition: background 0.2s ease, transform 0.2s ease;

            svg {
                font-size: 18px;
            }

            &:hover {
                background: var(--color-secondary);
                color: var(--color-secondary-text);
                transform: translateY(-2px);
            }
        }

        /* COMMUNITY PARTNERS */
        .communityGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 18px;
        }

        .communityCard {
            background: var(--color-surface);
            border-radius: 16px;
            border: 1px solid var(--color-border);
            padding: 16px 16px 18px;
            transition: transform 0.22s ease, border-color 0.22s ease,
                box-shadow 0.22s ease;

            &:hover {
                transform: translateY(-4px);
                border-color: var(--color-primary);
                box-shadow: 0 12px 26px rgba(0, 0, 0, 0.26);
            }
        }

        .communityHeader {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
        }

        .logoMini {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            background: var(--color-bg-alt);
            border: 1px solid var(--color-border);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .logoMini img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .communityName {
            font-size: 0.98rem;
            font-weight: 600;
            color: var(--color-heading);
        }

        .communityRole {
            font-size: 0.8rem;
            color: var(--color-text-muted);
        }

        .communityNote {
            font-size: 0.84rem;
            color: var(--color-surface-soft-text);
            margin-bottom: 8px;
        }

        .communityLink {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 0.84rem;
            text-decoration: none;
            color: var(--color-primary);
            padding: 4px 0;

            svg {
                font-size: 16px;
            }

            &:hover {
                color: var(--color-secondary);
            }
        }

        /* TIERS */
        .tiersGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 20px;
        }

        .tierCard {
            background: var(--color-surface);
            border-radius: 16px;
            border: 1px solid var(--color-border);
            padding: 18px 16px 20px;
            transition: transform 0.22s ease, box-shadow 0.22s ease,
                border-color 0.22s ease;

            &:hover {
                transform: translateY(-5px);
                border-color: var(--color-primary);
                box-shadow: 0 14px 28px rgba(0, 0, 0, 0.28);
            }
        }

        .tierIconWrap {
            width: 40px;
            height: 40px;
            border-radius: 999px;
            background: var(--color-primary-soft);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-heading);
            margin-bottom: 10px;

            svg {
                font-size: 20px;
            }
        }

        .tierLabel {
            font-size: 1rem;
            font-weight: 600;
            color: var(--color-heading);
            margin-bottom: 6px;
        }

        .tierList {
            list-style: none;
            padding-left: 0;
            margin: 0;
        }

        .tierList li {
            font-size: 0.84rem;
            color: var(--color-text-muted);
            margin-bottom: 4px;
        }

        /* CTA SECTION */
        .ctaSection {
            margin-top: 40px;
        }

        .ctaContent {
            background: var(--color-surface);
            border-radius: 18px;
            border: 1px solid var(--color-border);
            padding: 20px 18px;
            display: flex;
            flex-direction: column;
            gap: 14px;

            @media (width >= 720px) {
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
            }
        }

        .ctaText h2 {
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--color-heading);
            margin-bottom: 4px;
        }

        .ctaText p {
            font-size: 0.9rem;
            color: var(--color-text-muted);
        }

        .ctaActions {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .ctaBtn {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 9px 14px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            cursor: pointer;
            font-size: 0.88rem;
            font-weight: 600;
            text-decoration: none;
            transition: background 0.2s ease, color 0.2s ease,
                transform 0.2s ease, border-color 0.2s ease;

            svg {
                font-size: 18px;
            }
        }

        .ctaBtn.primary {
            background: var(--color-primary);
            color: var(--color-primary-text);
            border-color: var(--color-primary);

            &:hover {
                background: var(--color-secondary);
                color: var(--color-secondary-text);
                transform: translateY(-2px);
            }
        }

        .ctaBtn.ghost {
            background: transparent;
            color: var(--color-primary);
            white-space: nowrap;

            &:hover {
                background: var(--color-surface-soft);
                border-color: var(--color-primary);
                transform: translateY(-2px);
            }
        }
    `},w="/jwit-website/images/sponsors/tata-steel.png",N="/jwit-website/images/sponsors/tcs.png",T="/jwit-website/images/sponsors/usha-martin.png",k="/jwit-website/images/sponsors/local-ngo.png",S=[{name:"Tata Steel",tier:"Title Partner",logo:w,focus:"STEM education, skilling, and community development.",website:"https://www.tatasteel.com",support:["Annual funding for flagship JWIT programs","Venue support for large conferences","Mentors from in-house engineering teams"]},{name:"TCS (Tata Consultancy Services)",tier:"Gold Partner",logo:N,focus:"Technology careers, internships, and upskilling.",website:"https://www.tcs.com",support:["Technical workshops & hackathons","Industry sessions on careers in tech","Project collaboration opportunities"]}],I=[{name:"Usha Martin",role:"Industry Partner",logo:T,website:"https://www.ushamartin.com",note:"Supporting women in manufacturing, operations, and plant tech."},{name:"Sakhi Foundation",role:"NGO Partner",logo:k,website:"https://example.org",note:"Grassroots support for girls' education and digital literacy."}],z=[{label:"Title Partner",icon:u,perks:["Branding on all JWIT flagship events","Co-branded tech programs in Jamshedpur","Priority access to student & professional talent pool"]},{label:"Gold Partner",icon:f,perks:["Branding on select campaigns and bootcamps","Quarterly collaboration on workshops","Spotlight in newsletters & social media"]},{label:"Community Partner",icon:b,perks:["Logo presence on the website","Joint local initiatives & outreach","Invites to JWIT networking meets"]}],t=[{label:"Women reached",target:1200,suffix:"+"},{label:"Events hosted",target:35,suffix:"+"},{label:"Local colleges involved",target:10,suffix:"+"}],P=()=>{const[c,d]=n.useState(t.map(()=>0));n.useEffect(()=>{const o=performance.now(),a=s=>{const i=Math.min((s-o)/1200,1);d(t.map(m=>Math.floor(m.target*i))),i<1&&requestAnimationFrame(a)};requestAnimationFrame(a)},[]);const p=e=>e.toLocaleString("en-IN");return r.jsxs(j.Page,{children:[r.jsxs("header",{className:"hero",children:[r.jsx(g,{className:"heroIcon"}),r.jsx("h1",{className:"heroTitle",children:"Sponsors & Partners"}),r.jsxs("p",{className:"heroTagline",children:["The organisations standing behind"," ",r.jsx("span",{children:"Jamshedpur Women in Technology"}),".",r.jsx(h,{className:"sparkIcon"})]})]}),r.jsx("section",{className:"impactStrip",children:t.map((e,o)=>r.jsxs("div",{className:"impactItem",children:[r.jsxs("div",{className:"impactValue",children:[p(c[o]),e.suffix]}),r.jsx("div",{className:"impactLabel",children:e.label})]},e.label))}),r.jsxs("section",{className:"section",children:[r.jsx("h2",{className:"secTitle",children:"Major Sponsors"}),r.jsx("div",{className:"majorGrid",children:S.map(e=>r.jsxs("article",{className:"sponsorCard",children:[r.jsxs("div",{className:"cardHeader",children:[r.jsx("div",{className:"logoWrap",children:r.jsx("img",{src:e.logo,alt:e.name})}),r.jsxs("div",{className:"cardHeading",children:[r.jsx("h3",{className:"sponsorName",children:e.name}),r.jsx("span",{className:"tierBadge",children:e.tier})]})]}),r.jsx("p",{className:"focus",children:e.focus}),r.jsx("ul",{className:"supportList",children:e.support.map((o,a)=>r.jsx("li",{children:o},a))}),r.jsxs("a",{href:e.website,className:"visitBtn",target:"_blank",rel:"noreferrer",children:[r.jsx(l,{}),"Visit website"]})]},e.name))})]}),r.jsxs("section",{className:"section",children:[r.jsx("h2",{className:"secTitle",children:"Community Partners"}),r.jsx("div",{className:"communityGrid",children:I.map(e=>r.jsxs("article",{className:"communityCard",children:[r.jsxs("div",{className:"communityHeader",children:[r.jsx("div",{className:"logoMini",children:r.jsx("img",{src:e.logo,alt:e.name})}),r.jsxs("div",{children:[r.jsx("h3",{className:"communityName",children:e.name}),r.jsx("p",{className:"communityRole",children:e.role})]})]}),r.jsx("p",{className:"communityNote",children:e.note}),r.jsxs("a",{href:e.website,className:"communityLink",target:"_blank",rel:"noreferrer",children:[r.jsx(l,{}),"Learn more"]})]},e.name))})]}),r.jsxs("section",{className:"section",children:[r.jsx("h2",{className:"secTitle",children:"Sponsorship Tiers"}),r.jsx("div",{className:"tiersGrid",children:z.map(e=>{const o=e.icon;return r.jsxs("article",{className:"tierCard",children:[r.jsx("div",{className:"tierIconWrap",children:r.jsx(o,{})}),r.jsx("h3",{className:"tierLabel",children:e.label}),r.jsx("ul",{className:"tierList",children:e.perks.map((a,s)=>r.jsx("li",{children:a},s))})]},e.label)})})]}),r.jsx("section",{className:"ctaSection",children:r.jsxs("div",{className:"ctaContent",children:[r.jsxs("div",{className:"ctaText",children:[r.jsx("h2",{children:"Partner with JWIT"}),r.jsx("p",{children:"Whether you're a company, college, or NGO, we'd love to build long-term programs for women in technology in and around Jamshedpur."})]}),r.jsxs("div",{className:"ctaActions",children:[r.jsxs("a",{href:"mailto:hello@jwit.in?subject=JWIT%20Sponsorship%20Enquiry",className:"ctaBtn primary",children:[r.jsx(v,{}),"Email the team"]}),r.jsxs("a",{href:"#",className:"ctaBtn ghost","aria-label":"Download JWIT sponsorship deck",children:[r.jsx(y,{}),"Download sponsor deck (PDF)"]})]})]})})]})};export{P as default};
