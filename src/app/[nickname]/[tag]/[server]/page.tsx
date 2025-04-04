"use client";
import Header from "@/components/Header";
import BubbleChart from "@/components/BubbleChart";
import useLocalStorageData from "@/hooks/useLocalStorageData";
import useFetchData from "@/hooks/useFetchData";
import { useEffect, useState } from "react";
interface MainContentProps {
  params: {
    nickname: string;
    tag: string;
  };
}

export default function MainContent({ params }: MainContentProps) {
  const { getData } = useLocalStorageData();
  const [valuableChampions, setValuableChampions] = useState([]);

  useEffect(() => {
    let championsMastery = null;
    if (typeof window !== "undefined") {
      championsMastery = getData();
    }
    if (championsMastery) {
      const filteredMastery = championsMastery
        .filter((el: any) => el.championPoints >= 12000)
        .map((el: any) => el);
      setValuableChampions(filteredMastery);
    }
  }, [params]);

  return (
    <>
      <Header initialNickname={params.nickname} initialTag={params.tag} />

      <BubbleChart
        data={valuableChampions}
        nickname={params.nickname}
        tag={params.tag}
      />
    </>
  );
}
