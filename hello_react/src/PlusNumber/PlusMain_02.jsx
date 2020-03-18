import React, { Component } from "react";

class PlusMain_01 extends Component {
  /*
    부모로부터 변수를 받을수 있는 또하나의 방법
    props는 부모로 부터 받은 변수를 자식이 변경할수 없다.
    state는 자식이 자유롭게 변수를 변경하여 사용할수 있다.
    
    클래스의 필드 변수 number를 선언하고 0으로 초기화시키겠다
    */
  state = {
    number: 0
  };

  /*
  두개의 버튼 클릭 이벤트 핸들러
  원래 number가 가지고 있는 값(this.state.number)에
  1dmf 플러스하여 다시 number에 저장하라
  */
  plus = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  /*
  js 구조 분해 할당, 비구조화 할당
  배열이나 객체의 속성을 unpack하여
  값을 개별 변수에 담아 사용할수 있도록 하는
  js 새로운 문법(ES6,7)
  */
  plus1 = () => {
    this.setState(({ number }) => ({
      number: number + 1
    }));
  };

  minus = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  minus1 = () => {
    this.setState(state => ({
      number: state.number - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>카운트 : {this.state.number}</h1>
        <button onClick={this.plus}>plus</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default PlusMain_01;
