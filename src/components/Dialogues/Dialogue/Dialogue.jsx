import s from "./Dialogue.module.css";
import { NavLink } from "react-router-dom";

const Dialogue = (props) => {
	let path = `/messages/${props.id}`;
	return (
		<NavLink to={path} className={({ isActive }) => isActive ? `${s.active}` : `${s.dialogue}`}>{props.name}</NavLink>
	);
}

export default Dialogue;