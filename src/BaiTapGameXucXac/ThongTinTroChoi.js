import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinTroChoi extends Component {
  render() {
    let { taiXiu, soBanThang, tongSoBanChoi } = this.props;
    return (
      <div>
        <div className="display-4">
          BẠN CHỌN:{" "}
          <span className="text-danger">{taiXiu ? "TÀI" : "XỈU"}</span>
        </div>
        <div className="display-4">
          BÀN THẮNG: <span className="text-success">{soBanThang}</span>
        </div>
        <div className="display-4">
          TỔNG SỐ BÀN CHƠI:{" "}
          <span className="text-primary">{tongSoBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taiXiu: state.xucXacReducer.taiXiu,
    soBanThang: state.xucXacReducer.soBanThang,
    tongSoBanChoi: state.xucXacReducer.tongSoBanChoi,
  };
};

export default connect(mapStateToProps, null)(ThongTinTroChoi);
