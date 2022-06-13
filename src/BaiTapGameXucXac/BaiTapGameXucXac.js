import React, { Component } from "react";
import { connect } from "react-redux";
import { actDatCuoc } from "../redux/actions/xucXacActions";
import "./BaiTapGameXucXac.css";
import ThongTinTroChoi from "./ThongTinTroChoi";
import XucXac from "./XucXac";

class BaiTapGameXucXac extends Component {
  render() {
    return (
      <div className="bg__game">
        <div className="container mt-5 display-4">Bài tập game xúc xắc</div>

        <div className="row mt-5">
          <div className="col-md-4 d-flex justify-content-end">
            <button
              onClick={() => {
                this.props.datCuoc(true);
              }}
              className="btn btn-primary btnGame"
            >
              TÀI
            </button>
          </div>
          <div className="col-md-4">
            <XucXac />
          </div>
          <div className="col-md-4 d-flex justify-content-start">
            <button
              onClick={() => {
                this.props.datCuoc(false);
              }}
              className="btn btn-primary btnGame"
            >
              XỈU
            </button>
          </div>
        </div>

        <div className="mt-5">
          <ThongTinTroChoi />

          <button
            onClick={() => {
              this.props.playGame();
            }}
            className="btn btn-success p-2 mt-5 display-4"
          >
            Play game
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      dispatch(actDatCuoc(taiXiu));
    },
    playGame: () => {
      dispatch({ type: "PLAY_GAME" });
    },
  };
};

export default connect(null, mapDispatchToProps)(BaiTapGameXucXac);
