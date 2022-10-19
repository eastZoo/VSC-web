import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Youtube = (props) => {
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCBkyj16n2snkRg1BAzpovXQ&maxResults=50&key=AIzaSyAzHbmffJ970h-n6RdQF0Ndfu41VxSFZfc"
      )
      .then((res) => {
        console.log(res);
        setPlaylist(res.data.items);
      })
      .catch(() => {});
  }, []);
  console.log(playlist);

  return (
          <div className="content">
            {playlist &&
              playlist.map((i, idx) => {
                return (
                  <div className="playlist" key={idx}>
                    <img src={i.snippet.thumbnails.high["url"]} alt="" />
                    <Link to={"/playlist/" + i.id}>
                      <h1>{i.snippet.localized["title"]}</h1>
                    </Link>
                    <p>{i.snippet.localized["description"]}</p>
                  </div>
                );
              })}
          </div>
  )
}

export default Youtube