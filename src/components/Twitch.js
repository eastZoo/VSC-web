import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TwitchChat, TwitchPlayer  } from 'react-twitch-embed';
import { domain } from '../constants';


const Twitch = () => {
  const  [toogleState, setToggleState]= useState(1);
  const [streamer, setStreamer] = useState('woowakgood');
  const toggleTab = (index) => {
    setToggleState(index)
  }

  const client_id = "jjdgc8yg13k1imz5fmi3bb34gr6itv";
  const token = "xintf8kwxy7c0fociv0fgi6551kvtn";
  // 49045679
  useEffect(() => {
  //   axios.post(
  //       "https://id.twitch.tv/oauth2/token?client_id=jjdgc8yg13k1imz5fmi3bb34gr6itv&client_secret=sl4gmmiistyyes4ulzglufy18ya42j&grant_type=client_credentials")
  //     .then((res) => {
  //       console.log(res.data.access_token);
  //       setToken(res.data.access_token)
  //     })
  //     .catch(() => {});
    
    axios.get(
      "https://api.twitch.tv/helix/search/channels?login_name=woowakgood", {
        headers: {
          "Client-Id" : client_id,
          "Authorization" : "Bearer "+ token
        }
      }
    ).then((res) => {
      console.log(res.data);
    })
    .catch(() => {});

  //   axios.get(
  //     "https://tmi.twitch.tv/group/user/woowakgood/chatters"
  //   ).then((res) => {
  //     console.log(res);
  //   })
  //   .catch(() => {});
  }, []);

  return (
    <div className='twitch'>
      <div className='inner'>
        <div className='r_empty'></div>
        <ul className='name_menu'>
          <li className="item" onClick={()=> {toggleTab(1); setStreamer("woowakgood")}}>
            <img src={process.env.PUBLIC_URL + `images/waktube_logo_1x.jpg`}/>
            <div className={toogleState === 1 ? "item__name__active" : "item__name"}>우왁굳</div>
          </li>
          <li className="item" onClick={()=> {toggleTab(2); setStreamer("vo_ine")} }>
            <img src={process.env.PUBLIC_URL + `images/isedol/ine40.jpg`}/>
            <div className={toogleState === 2 ? "item__name__active" : "item__name"}>아이네</div>
          </li>
          <li className="item" onClick={()=> {toggleTab(3); setStreamer("jingburger")}}>
            <img src={process.env.PUBLIC_URL + `images/isedol/jingburger40.jpg`}/>
            <div className={toogleState === 3 ? "item__name__active" : "item__name"}>징버거</div>
          </li>
          <li className="item" onClick={()=> {toggleTab(4); setStreamer("lilpaaaaaa")}}>
            <img src={process.env.PUBLIC_URL + `images/isedol/lilpa40.jpg`}/>
            <div className={toogleState === 4 ? "item__name__active" : "item__name"}>릴파</div>
          </li>
          <li className="item" onClick={()=> {toggleTab(5); setStreamer("cotton__123")}}>
            <img src={process.env.PUBLIC_URL + `images/isedol/jururu40.jpg`}/>
            <div className={toogleState === 5 ? "item__name__active" : "item__name"}>주르르</div>
          </li>
          <li className="item" onClick={()=> {toggleTab(6); setStreamer("gosegugosegu")}}>
            <img src={process.env.PUBLIC_URL + `images/isedol/gosegu40.jpg`}/>
            <div className={toogleState === 6 ? "item__name__active" : "item__name"}>고세구</div>
          </li>
          <li className="item" onClick={()=> {toggleTab(7); setStreamer("viichan6")}}>
            <img src={process.env.PUBLIC_URL + `images/isedol/vichan40.jpg`}/>
            <div className={toogleState === 7 ? "item__name__active" : "item__name"}>비챤</div>
          </li>
          <li className="item" onClick={()=> {toggleTab(8); setStreamer("woowakgood")}}>
            <img src={process.env.PUBLIC_URL + `images/wakent_logo_1x.png`} />
            <div className={toogleState === 1 ? "item__name__active" : "item__name"}>모두</div>
          </li>
        </ul>
        <div className='twitch__set'>
          <div className='twich__player'>
            <TwitchPlayer className="stream" channel={streamer} parent={[domain]} width="1470px" height="100%" />
          </div>
          <div className='twitch__chat'>
            <TwitchChat channel={streamer} darkMode height="840px" width="300px"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Twitch