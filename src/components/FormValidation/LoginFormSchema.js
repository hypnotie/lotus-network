import * as yup from "yup";

const loginFormSchema = yup.object().shape({
	email: yup.string().email("Enter proper e-mail").required(""),
	password: yup.string().typeError("Should be a string").required("")
});

export default loginFormSchema;