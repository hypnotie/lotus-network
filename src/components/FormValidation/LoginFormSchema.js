import * as yup from "yup";

const loginFormSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().typeError().required(),
	captcha: yup.string().typeError()
});

export default loginFormSchema;