import s from "./SentMessage.module.css";

const SentMessage = (props) => {
  return (
    <div className={s.message}>
      {props.sentMessage}
    </div>
  );
}

export default SentMessage;