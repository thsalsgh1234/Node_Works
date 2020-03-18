import React from "react";
import RSC_SUB from "./RSC_SUB";

/*
    함수형 component 생성
    const RSC = function() {}
    함수형 component는 2014 버전에서부터 사용이 가능하다.

    App.js > RCC.jsx, (RSC.js > RCC_SUB.jsx)

    RCC_SUB component에서 name 변수에 값을 담아서 전달하기
    <component 변수="값"/>

*/
const RSC = () => {
  return (
    <div>
      <div>나는 두번째 함수형 component 입니다.</div>
      <RSC_SUB name="홍길동" />
    </div>
  );
};

export default RSC;
