import React from "react";
import { useSearchParams } from "react-router-dom";
const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isDetail = searchParams.get("detail");

  const openDetail = () => {
    setSearchParams({ detail: true });
  };
  const closeDetail = () => {
    setSearchParams({});
  };
  return (
    <div>
      <h1>About</h1>
      <p>
        이 프로젝트는 리액트 라우터 v6 기초를 실습해 보는 예제 프로젝트입니다.
      </p>
      {isDetail ? (
        <>
          <p>상세페이지: detail=true로 설정됨</p>
          <button onClick={closeDetail}>상세페이지 접기</button>
        </>
      ) : (
        <button onClick={openDetail}>상세페이지 열기</button>
      )}
    </div>
  );
};

export default About;
