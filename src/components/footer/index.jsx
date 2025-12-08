import React from "react";
import { Styled } from "./styled";
import {
    TbBrandInstagram,
    TbBrandLinkedin,
    TbBrandYoutube,
    TbBrandDiscord,
    TbMail,
} from "react-icons/tb";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <Styled.Wrap>
            <div className="inner">
                <div className="metaRow">
                    <span className="copy">
                        © {year} JWIT. All rights reserved.
                    </span>
                    <span className="tagline">
                        Jamshedpur Women in Technology
                    </span>
                </div>

                <nav className="linksRow" aria-label="JWIT social links">
                    <a
                        href="#"
                        className="linkItem"
                    >
                        <TbBrandDiscord />
                        <span>Discord</span>
                    </a>
                    <a
                        href="#"
                        className="linkItem"
                    >
                        <TbBrandInstagram />
                        <span>Instagram</span>
                    </a>
                    <a
                        href="#"
                        className="linkItem"
                    >
                        <TbBrandLinkedin />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href="#"
                        className="linkItem"
                    >
                        <TbBrandYoutube />
                        <span>YouTube</span>
                    </a>
                    <a
                        href="mailto:hello@jwit.in"
                        className="linkItem"
                    >
                        <TbMail />
                        <span>Email Us</span>
                    </a>
                    <a
                        href="#"
                        className="linkItem pill"
                    >
                        <span className="pillDot" />
                        <span>Join Our Mailing List</span>
                    </a>
                </nav>
            </div>
        </Styled.Wrap>
    );
};

export default Footer;
