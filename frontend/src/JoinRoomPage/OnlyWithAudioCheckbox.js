import React from "react";
import CheckImg from "../resources/images/check.png";

const OnlyWithAudioCheckbox = ({
  connectOnlyWithAudio,
  setConnectOnlyWithAudio,
}) => {
  const handleConnectionTypeChange = () => {
    setConnectOnlyWithAudio(!connectOnlyWithAudio);
  };

  return (
    <div className='checkbox_container'>
      <div className='checkbox_connection' onClick={handleConnectionTypeChange}>
        {connectOnlyWithAudio && (
          <img
            className='checkbox_image'
            src={CheckImg}
            alt='checkboxImg'
          ></img>
        )}
      </div>
      {/* <p className="checkbox_container_paragraph">Only audio</p> */}
      <p className='checkbox_container_paragraph'>音声のみ</p>
    </div>
  );
};

export default OnlyWithAudioCheckbox;
