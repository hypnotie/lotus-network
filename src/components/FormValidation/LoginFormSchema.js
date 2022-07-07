import * as yup from "yup";

const loginFormSchema = yup.object().shape({
	email: yup.string().matches(/hypno7ie@gmail.com/).email().required(),
	password: yup.string().typeError().required(),
	captcha: yup.string().typeError()
});

export default loginFormSchema;