import { createElement } from "react";
import { TbBrandCodepen, TbBrandFacebook, TbBrandGithub, TbBrandLinkedin, TbBrandPatreon, TbBrandYoutube, TbCoffee, TbHeart, TbMail, TbWorld } from "react-icons/tb";
import { Styled } from "./styled";

const links = [
    ["Portfolio", "https://www.ashishranjan.net/", TbWorld],
    ["GitHub", "https://github.com/a2rp", TbBrandGithub],
    ["CodePen", "https://codepen.io/ash1198", TbBrandCodepen],
    ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", TbBrandLinkedin],
    ["Facebook", "https://www.facebook.com/theash.ashish/", TbBrandFacebook],
    ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", TbBrandYoutube],
    ["Email", "mailto:ash.ranjan09@gmail.com", TbMail],
    ["Support", "https://a2rp-donation-page.netlify.app/", TbHeart],
    ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", TbCoffee],
    ["Patreon", "https://www.patreon.com/a2rp", TbBrandPatreon],
];

const Footer = () => (
    <Styled.Wrap>
        <div className="inner">
            <div className="metaRow">
                <span className="copy">Copyright &copy; {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></span>
                <span className="tagline">Jamshedpur Women in Technology</span>
            </div>
            <nav className="linksRow" aria-label="Social and support links">
                {links.map(([label, href, icon]) => (
                    <a key={label} href={href} className="linkItem" target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"} aria-label={label} title={label}>
                        {createElement(icon, { "aria-hidden": true })}
                    </a>
                ))}
            </nav>
        </div>
    </Styled.Wrap>
);

export default Footer;
