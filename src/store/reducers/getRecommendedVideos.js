import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseRecommendedData } from "../../utils/parseRecommendedData";

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const getRecommendedVideos = createAsyncThunk(
  "youtube/App/getRecommendedVideos",
  async (videoId, { getState }) => {
    const {
      youtubeApp: {
        currentPlaying: {
          videoInfo: { channelId }, // Assuming the channelId is stored in videoInfo
        },
      },
    } = getState();

    // Construct the correct endpoint URL
    const endpoint = `https://youtube.googleapis.com/youtube/v3/search?key=${API_KEY}&relatedToVideoId=${videoId}&type=video&part=snippet&maxResults=20`;

    try {
      const response = await axios.get(endpoint);
      const items = response.data.items;
      const parsedData = await parseRecommendedData(items, videoId);

      return { parsedData };
    } catch (error) {
      console.error("Error fetching recommended videos:", error);
      throw error;
    }
  }
);
