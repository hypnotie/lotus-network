import s from "./Dialogues.module.css";
import Dialogue from "./Dialogue/Dialogue";
import attention from "../../img/icons/common/attention-light.svg"
import { useEffect } from "react";

const Dialogues = (props) => {
	useEffect(() => {
    document.title = "Messages"
  }, [])
	
	let state = props.dialoguesPage;
	let dialoguesElements = state.dialogues.map(d => <Dialogue key={d.id} id={d.id} name={d.name} />);

	return (
		<div className={s.content_block}>
			<div className={s.allChats}>
				<div className={s.chatsColumns}>
					<div className={s.dialogues}>
						<div className={s.users}>
							{dialoguesElements}
						</div>
						<div className={s.hint}>
							<img src={attention} alt="Attention" />
							<span>This section contains demo data, the functionality of which has not yet been implemented.</span>
						</div>
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