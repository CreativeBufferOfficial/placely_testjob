import type { NextPage } from "next";
import MainLayout from "../components/layout/main";
import SignIn from "../components/templates/SignIn";
import { SignUpText, SignUpTitle } from "../components/UI/atoms/Links/constants";
import HeaderLink from "../components/UI/atoms/Links/HeaderLink";

const SignInPage: NextPage = () => (
    <MainLayout headerText={<HeaderLink label={SignUpText} text={SignUpTitle} link="/"/>}>
        <SignIn />
    </MainLayout>
);

export default SignInPage;
