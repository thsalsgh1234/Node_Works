import Moment from "react-moment";

import React, { Component } from "react";

class BucketItemView extends Component {
  changeEdit = () => {
    this.props.onEditing();
  };

  handleChangeFlag = () => {
    // this.props.changeFlag(this.props.bucketItem.b_id);

    const { changeFlag, bucketItem } = this.props;
    changeFlag(bucketItem.b_id);
  };

  render() {
    const { bucketItem } = this.props;
    return (
      <React.Fragment>
        <td onClick={this.handleChangeFlag}>{bucketItem.b_flag_text}</td>
        <td>
          <Moment format="YYYY-MM-DD">{bucketItem.b_start_date}</Moment>
        </td>
        <td onClick={this.changeEdit}>{bucketItem.b_title}</td>
        <td>
          {/* 
                      // react에서 조건별로 tag를 표시하고자 할때
                      { 검사값 ? (true 일떄) : (flase 일떄)}
                  */}
          {bucketItem.b_end_date !== "" ? (
            <Moment format="YYYY-MM-DD">{bucketItem.b_end_date}</Moment>
          ) : (
            "◎"
          )}
        </td>
        <td>
          <input type="checkbox" value={bucketItem.b_cancel} />
        </td>
      </React.Fragment>
    );
  }
}

export default BucketItemView;
