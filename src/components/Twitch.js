import { useState } from 'react';
import { TwitchChat, TwitchPlayer  } from 'react-twitch-embed';
import "./Twitch.css";
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

const Twitch = () => {
  const [mainStreamer, setMainStreamer] = useState('woowakgood');
  const [sideStreamer, setSideStreamer] = useState([ 
    'gosegugosegu',
    'lilpaaaaaa',
    'viichan6',
    'vo_ine',
    'cotton__123',
    'jingburger',
  ]);

  const changeMainStream = (value) => {
    setMainStreamer(value);
    console.log(value)
  };

  return (
    <div className="twitch__container">
      <div className="twich__player" onClick={changeMainStream}>
        <TwitchPlayer
          className="stream"
          channel={mainStreamer}
          width="1373px"
          height="758px"
        />
      </div>
      <div className="isegye__wrapper">
        {sideStreamer.map((streamer) => (
          <div className='isegye__list' key={streamer} onClick={changeMainStream}>
            <ReactTwitchEmbedVideo
              channel={streamer}
              width="228px"
              height="150px"
              layout="video"
            />
          </div>
        ))}
      </div>
      <div className='twitch__chat'>
            <TwitchChat channel={mainStreamer} darkMode height="915px" width="270px"/>
          </div>
    </div>
  );
}

export default Twitch