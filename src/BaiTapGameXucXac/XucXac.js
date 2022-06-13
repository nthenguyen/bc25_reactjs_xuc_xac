import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  renderXucXac = () => {
    let { mangXucXac } = this.props;
    return mangXucXac.map((xucxac, index) => {
      return (
        <img
          key={index}
          className="xuc__xac"
          src={xucxac.hinhAnh}
          alt={xucxac.hinhAnh}
        />
      );
    });
  };
  render() {
    return <div>{this.renderXucXac()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    mangXucXac: state.xucXacReducer.mangXucXac,
  };
};

export default connect(mapStateToProps, null)(XucXac);
