import type { NextPage } from "next";
import { cx } from "../../../../assets/utils";
import { MiddleCardWrapper } from "./styled";
import { MiddleCardProps } from "./types";

const MiddleCard: NextPage<MiddleCardProps> = ({children, title}) => (
    <>
        <MiddleCardWrapper>
            <h3 className={cx('card_title')}>{title}</h3>
            {children}
        </MiddleCardWrapper>
    </>
);

export default MiddleCard;
