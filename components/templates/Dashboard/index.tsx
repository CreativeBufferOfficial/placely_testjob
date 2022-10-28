import type { NextPage } from "next";
import Router from "next/router";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import FillButton from "../../UI/atoms/Buttons/FillButton";
import { SignOutText } from "./constants";
import { DashboardWrapper } from "./styled";

const Dashboard: NextPage = () => { 
    const authContext = useContext(AuthContext);
    const SignOut = ():void => {
        authContext?.removeUserInfo();
        Router.push('/sign-in')
    }

    return (
        <DashboardWrapper>
            <FillButton label={SignOutText} onClick={SignOut}/>
        </DashboardWrapper>
    )
};

export default Dashboard;
