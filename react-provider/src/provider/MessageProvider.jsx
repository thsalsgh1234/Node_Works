import React, { createContext } from "react"; // React.()()() 라고사용

// Main에서 하위 Component에게 전달할 변수와 method를 포함하는 Provider를 선언
const MessageProvider = createContext({
  message: "",
  changeMessage: mess => {}
});

// 다른곳에서 MessageProvider를 사용할수있도록 export해줌
export default MessageProvider;
