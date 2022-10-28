import type { NextPage } from "next";
import Link from "next/link";
import {  HeaderLinkWrapper } from "./styled";
import { HeaderLinkProps } from "./types";

const HeaderLink: NextPage<HeaderLinkProps> = ({label, link, text}) => (
    <HeaderLinkWrapper >
        {label}
        <Link href={link} passHref>{text}</Link>
    </HeaderLinkWrapper>
);

export default HeaderLink;
