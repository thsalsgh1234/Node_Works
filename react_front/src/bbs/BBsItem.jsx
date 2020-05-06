import React, { Component } from "react";
import PropTypes from "prop-types";

/* 
    class type의 component
    LifeCycle method를 포함한다.

    LifeCycle method는 외부 서버 등과 연동을 할떄 데이터를 불러 오거나 
    데이터를 저장하는 용도의 method구현이 필요할때 사용하는 구조
*/
class BBsItem extends Component {
  constructor(props) {
    super(props);
  }
  /*
    BBsList로 부터 리스트 한줄을 받아서 render를 실제로 수행
    bbsVO에 리스트 한줄이 담겨 전달되고
    Key에는 bbsVO 리스트 1줄의 id값이 담겨 전달된다.
  */
  render() {
    const { bbsVO, key } = this.props;

    return (
      <tr key={key}>
        <td>{bbsVO.bbsDate}</td>
        <td>{bbsVO.bbsAuth}</td>
        <td>{bbsVO.bbsTitle}</td>
      </tr>
    );
  }
}
/*
    react를 통해서 데이터를 표현할떄 부모컴포넌트로부터 수신되는 데이터타입을 지정할때 사용
    일반적으로 타입을 지정하지 않아도 부모로 부터 데이터를 받아서 redering을 하는데 큰문제는 없는데 
    많은 종류의 데이터를 수신, 표현할때 type을 미리 지정을 하면
    경고, 오류등을 통해 잘못수신된 데이터가 없도록 알려주는 기능을 만들수 있다.
*/
BBsItem.propTypes = {};

export default BBsItem;
