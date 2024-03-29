import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
  "youtube/App/homePageVideos",
  async (isNext, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState();
    const {
      data: { items, nextPageToken },
    } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="drop X out"&key=${API_KEY}&part=snippet&type=video`
    );
    console.log(items);
  }
);
