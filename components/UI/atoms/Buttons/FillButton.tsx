import type { NextPage } from "next";
import { FillButtonWrapper } from "./styled";
import { ICommonButtonProp } from "./types";

const FillButton: NextPage<ICommonButtonProp> = ({onClick, label, ...props}) => (
    <FillButtonWrapper {...props} onClick={onClick} >
        {label}
    </FillButtonWrapper>
);

export default FillButton;
