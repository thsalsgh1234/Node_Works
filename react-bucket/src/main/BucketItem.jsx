import React, { Component } from "react";
import BucketItemView from "./BucketItemView";
import BucketItemEdit from "./BucketItemEdit";
class BucketItem extends Component {
  state = { isEditing: false };
  isEditing = false;

  handleOnEditing = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  render() {
    const { bucketItem } = this.props;
    return (
      <tr>
        {this.state.isEditing ? (
          <BucketItemEdit
            bucketItem={bucketItem}
            onEditing={this.handleOnEditing}
            bucket_update={this.props.bucket_update}
          />
        ) : (
          <BucketItemView
            bucketItem={bucketItem}
            onEditing={this.handleOnEditing}
            changeFlag={this.props.changeFlag}
          />
        )}
        ;
      </tr>
    );
  }
}

export default BucketItem;
