import Image from "next/image";
import { cx } from "../../../assets/utils";
import { MainLayoutWrapper } from "./styled";
import { MainLayoutProps } from "./types";

export default function MainLayout({ children, headerText }: MainLayoutProps) {
    return (
        <>
            <MainLayoutWrapper>
                <div className={cx('header_section')}>
                    <Image className={cx('logo_image')} priority={true} src="/assets/logo.svg" width={112} height={33} alt="Placely Logo" />
                    {headerText}
                </div>
                <main>{children}</main>
            </MainLayoutWrapper>
        </>
    );
}
