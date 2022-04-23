import s from "./Dialogues.module.css";
import Dialogue from "./Dialogue/Dialogue";

const Dialogues = (props) => {
	let state = props.dialoguesPage;
	let dialoguesElements = state.dialogues.map(d => <Dialogue key={d.id} id={d.id} name={d.name} />);

	return (
		<div className={s.content_block}>
			<div className={s.allChats}>
				<div className={s.chatsColumns}>
					<div className={s.dialogues}>
						{dialoguesElements}
					</div>
					<div className={s.messages}>
						<div className={s.message}>
							Select a chat to start messaging
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dialogues;