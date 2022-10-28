import type { NextPage } from "next";
import MiddleCard from "../../UI/organisms/MiddleCard";
import { SignUpFormTitle } from "./constants";
import SignUpForm from "./SignUpForm";

const SignUp: NextPage = () => (
        <MiddleCard title={SignUpFormTitle}>
            <SignUpForm /> 
        </MiddleCard>
);

export default SignUp;
