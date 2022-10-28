import type { NextPage } from "next";
import MainLayout from "../components/layout/main";
import SignUp from "../components/templates/SignUp";
import { SignInTitle, SignInText } from "../components/UI/atoms/Links/constants";
import HeaderLink from "../components/UI/atoms/Links/HeaderLink";

const Home: NextPage = () => (
    <MainLayout headerText={<HeaderLink label={SignInText} text={SignInTitle} link="/sign-in"/>}>
        <SignUp />
    </MainLayout>
);

export default Home;
