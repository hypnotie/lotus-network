import s from "./ReceivedMessage.module.css";

const ReceivedMessage = (props) => {
  return (
    <div className={s.message}>
      {props.receivedMessage}
    </div>
  );
}

export default ReceivedMessage;