import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { login } from "../../redux/auth-reducer"
import loginFormSchema from "../FormValidation/LoginFormSchema";
import s from "./Login.module.css"

const LoginForm = ({ onSubmit }) => {
	return <div className={s.login}>
		<Formik
			initialValues={{ email: "", password: "" }}
			validateOnChange
			validateOnBlur
			onSubmit={onSubmit}
		>
			{({ values, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
				<Form>
					<div>
						<Field
							name={"email"}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						>
							{({
								field,
								meta: { touched, error }
							}) => <input
									type={"text"}
									className={touched && error ? s.error : ""}
									placeholder={"Email"}
									autoComplete={"off"}
									{...field} />
							}
						</Field>
					</div>
					<div>
						<Field
							name={"password"}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
						>
							{({
								field,
								meta: { touched, error }
							}) => <input
									type={"password"}
									className={touched && error ? s.error : ""}
									placeholder={"Password"}
									{...field} />
							}
						</Field>
					</div>

					{values.general ? <div className={s.incorrect}>{values.general}</div> : ""}

					<button
						disabled={!isValid && !dirty}
						onClick={handleSubmit}
						type={"submit"}
					>
						Sign In
					</button>
				</Form>
			)}
		</Formik>
	</div >
};

const Login = ({ login, isAuth }) => {
	const onSubmit = (values, { setFieldValue }) => {
		login(values.email, values.password, setFieldValue);
	};

	if (isAuth) {
		return <Navigate to="/profile" />;
	}

	return <div className={s.content_block}>
		<div className={s.caution}>
			<div>Use this email and password to login to your test account:</div>
			<div className={s.caution_data}>
				<div>hypno7ie@gmail.com</div>
				<div>lotus-network-test</div>
			</div>
		</div>
		<LoginForm onSubmit={onSubmit} />
	</div>;
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);