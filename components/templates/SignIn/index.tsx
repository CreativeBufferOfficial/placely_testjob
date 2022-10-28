import type { NextPage } from "next";
import MiddleCard from "../../UI/organisms/MiddleCard";
import { SignInFormTitle } from "./constants";
import SignInForm from "./SignInForm";

const SignIn: NextPage = () => (
        <MiddleCard title={SignInFormTitle}>
            <SignInForm /> 
        </MiddleCard>
);

export default SignIn;
