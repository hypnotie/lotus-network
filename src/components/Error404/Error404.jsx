import s from "./Error404.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Error404 = () => {
	useEffect(() => {
		document.title = "404 – Page Not Found"
	}, [])
	
	let navigate = useNavigate();

	return (
		<div className={s.error404}>
			<div className={s.digits}>404</div>
			<div className={s.line}>&nbsp;</div>
			<div className={s.label}>We can’t find that page :(</div>
			<button className={s.button} onClick={() => { navigate("/"); }}>Return to Home</button>
		</div>
	);
}

export default Error404;