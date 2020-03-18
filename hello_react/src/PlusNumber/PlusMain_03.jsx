import React, { useState } from "react";
/**
 * useState
 * React 16.8.x 이후에 사용가능한 객체이며
 * Hooks 기능을 도입한 React엔진에 장착되어 있고
 * 함수형 component state형 변수를 사용할 수 있다.
 * props 변수는 읽기전용인데
 * 내부에서 어떤 변화된 값들을 처리하고자 할 때
 * state 변수를 사용한다.
 * 그런데 초기의 함수형 컴퍼넌트에서는 state형 변수를 사용할 수 없었다.
 */
const PlusMain_03 = () => {
  // useState()
  // 함수형 컴퍼넌트에서 state형 변수를 선언하고
  // 초기화를 수행하는 method
  // 변수형이 [변수명, 함수명]형식의 배열로 생성한다.
  const [message, setMessage] = useState("");

  const onInput = () => setMessage("어서오세요");
  const onOutput = () => setMessage("안녕히 가세요");

  return (
    <div>
      <button onClick={onInput}>입장</button>
      <button onClick={onOutput}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default PlusMain_03;
