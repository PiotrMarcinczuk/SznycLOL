"use client";
import Header from "@/components/Header";

interface MainContentProps {
  params: {
    nickname: string;
    tag: string;
  };
}

export default function ErrorContent({ params }: MainContentProps) {
  return (
    <>
      <Header initialNickname={params.nickname} initialTag={params.tag} />

      <>
        <p>ERROR</p>
        <span>
          Couldn't find summoner "{params.nickname.split("%20").join(" ")}" and
          tag #{params.tag}
        </span>
      </>
    </>
  );
}
