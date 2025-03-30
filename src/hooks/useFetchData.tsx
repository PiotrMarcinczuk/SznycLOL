import axios from "axios";
import useLocalStorageData from "./useLocalStorageData";
const dotenv = require("dotenv");
dotenv.config();

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function useFetchData() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    nickname:
      typeof window !== "undefined"
        ? localStorage.getItem("nickname") || ""
        : "",
    tag:
      typeof window !== "undefined"
        ? localStorage.getItem("nickname") || ""
        : "",
    puuid: "",
  });

  const { setData } = useLocalStorageData();
  const axiosInstance = axios.create({
    baseURL: process.env.URL,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const fetchAccessData = async (
    nickname: string,
    tag: string,
    setValidating: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    axiosInstance
      .post(`/api/getPuuid`, {
        nickname: nickname,
        tag: tag,
      })
      .then((response) => {
        setUserData({
          nickname: response.data.gameName,
          tag: response.data.tagLine,
          puuid: response.data.puuid,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        if (error.response.status === 403) setValidating(true);
        return;
      });
  };

  const fetchChampionMastery = async (puuid: string, region: string) => {
    axiosInstance
      .post(`/api/getChampionMastery`, {
        puuid: puuid,
        region: region,
      })
      .then((response) => {
        router.refresh();

        if (typeof window !== "undefined") {
          setData(response);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        return;
      });
  };

  return {
    fetchAccessData,
    fetchChampionMastery,
    userData,
  };
}
