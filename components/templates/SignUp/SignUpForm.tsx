import type { NextPage } from "next";
import { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import InputGroup from "../../UI/molecules/InputGroup";
import FillButton from "../../UI/atoms/Buttons/FillButton";
import { SignUpButtonTitle } from "./constants";
import { useRouter } from "next/router";
import { AuthContext } from "../../../contexts/AuthContext";
import { gql, useMutation } from "@apollo/client";

const QUERY_LOGIN = gql`
  mutation SIGN_UP($email: String!, $pwd: String!) {
    signUp(email: $email, validator: PASSWORD, pwd:$pwd) {
      email
      emailStatus
      status
    }
  }
`;

const SignUpForm: NextPage = () => {
    const [SignUpNow] = useMutation(QUERY_LOGIN)
    const [submitted, setSubmitted] = useState(false);
    const authContext = useContext(AuthContext);

    const router = useRouter()
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '', 
        },
        onSubmit: values => {
          setSubmitted(true);
          SignUpNow({variables: {email: values.email, pwd: values.password}}).then(res => {
            setSubmitted(false);
            authContext?.setAuthState('yes')
            router.push('/dashboard')
          }).catch(err => {
            console.log(err)
          })

        },
        validationSchema: yup.object({
          email: yup
            .string()
            .email()
            .required(),     
          password: yup
            .string()
            .trim()
            .required()
            .matches(
                /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Invalid Format"
            ),
        }),
      });

    return (
        <form onSubmit={formik.handleSubmit}>
            <InputGroup
                type="text"
                name="email"
                label="Email"
                values={formik.values}
                errors={formik.errors}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
            />
            <InputGroup
                type="password"
                name="password"
                label="Password"
                values={formik.values}
                errors={formik.errors}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
            />     
            <FillButton disabled={!formik.isValid || submitted} type="submit" label={!submitted ? SignUpButtonTitle: 'Loading...'} />
        </form >
    )
};

export default SignUpForm;
