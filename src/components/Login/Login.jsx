import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { login } from "../../redux/auth-reducer"
import s from "./Login.module.css"
import loginFormSchema from "../FormValidation/LoginFormSchema";
import { useEffect } from "react";

const LoginForm = ({ onSubmit, captchaUrl }) => {
	useEffect(() => {
    document.title = "Lotus Network"
  }, [])

	return <div className={s.login}>
		<Formik
			initialValues={{ email: "", password: "", captcha: "" }}
			validateOnChange
			validateOnBlur
			onSubmit={onSubmit}
			validationSchema={loginFormSchema}
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
									className={touched && error ? s.error : s.input}
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
									className={touched && error ? s.error : s.input}
									placeholder={"Password"}
									{...field} />
							}
						</Field>
					</div>

					{captchaUrl &&
						<div className={s.captcha}>
							<img src={captchaUrl} className={s.captchaImage} alt="Captcha" />
							<div>
								<Field
									name={"captcha"}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.captcha}
								>
									{({
										field,
										meta: { touched, error }
									}) => <input
											type={"text"}
											className={touched && error ? s.error : s.input}
											placeholder={"Captcha"}
											{...field} />
									}
								</Field>
							</div>
						</div>
					}

					{values.general ? <div className={s.incorrect}>{values.general[0]}</div> : ""}

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

const Login = ({ login, isAuth, captchaUrl, authorizedUserId }) => {
	const onSubmit = (values, { setFieldValue }) => {
		login(values.email, values.password, values.captcha, setFieldValue);
	};

	if (isAuth) {
		return <Navigate to={"/users/" + authorizedUserId} />;
	}

	return <div className={s.content_block}>
		<div className={s.caution}>
			<div className={s.cautionLabel}>
				Please use this email and password to login to your test account.<br />
				Otherwise, you won't be able to log in.
			</div>
			<div className={s.cautionData}>
				<div>hypno7ie@gmail.com</div>
				<div>lotus-network-test</div>
			</div>
		</div>
		<LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
	</div>;
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	authorizedUserId: state.auth.id,
	captchaUrl: state.auth.url
});

export default connect(mapStateToProps, { login })(Login);