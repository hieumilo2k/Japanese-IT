import React from "react";
import { useHistory } from "react-router-dom";

const Button = ({ buttonText, cancelButton = false, onClickHandler }) => {
  const buttonClass = cancelButton
    ? "join_room_cancel_button"
    : "join_room_success_button";

  return (
    <button onClick={onClickHandler} className={buttonClass}>
      {buttonText}
    </button>
  );
};

const JoinRoomButtons = ({ handleJoinRoom, isRoomHost }) => {
  // const successButtonText = isRoomHost ? "Host" : "Join";
  const successButtonText = isRoomHost ? 'ホスト' : '参加';

  const history = useHistory();

  const pushToIntroductionPage = () => {
    history.push("/");
  };

  return (
    <div className='join_room_buttons_container'>
      <Button buttonText={successButtonText} onClickHandler={handleJoinRoom} />
      <Button
        // buttonText="Cancel"
        buttonText='キャンセル'
        cancelButton
        onClickHandler={pushToIntroductionPage}
      />
    </div>
  );
};

export default JoinRoomButtons;
