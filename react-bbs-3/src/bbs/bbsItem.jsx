import React, { Component } from "react";

/*
  표현할 데이터가 List 형태일때 List의 한줄(한요소)를 표현하는 구조로 생성

*/
class bbsItem extends Component {
  render() {
    const { key, bbsVO } = this.props;
    return (
      <tr key={bbsVO.id}>
        <td className="text-success">{bbsVO.bbsDate}</td>
        <td className="text-warning">{bbsVO.bbsAuth}</td>
        <td className="text-primary">{bbsVO.bbsTitle}</td>
      </tr>
    );
  }
}

export default bbsItem;
