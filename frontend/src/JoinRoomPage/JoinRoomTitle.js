import React from "react";

const JoinRoomTitle = ({ isRoomHost }) => {
  // const titleText = isRoomHost ? "Host meeting" : "Join meeting";
  const titleText = isRoomHost ? 'ホスト会議' : '会議に参加する';

  return <p className="join_room_title">{titleText}</p>;
};

export default JoinRoomTitle;
