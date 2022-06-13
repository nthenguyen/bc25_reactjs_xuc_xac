import { DAT_CUOC } from "../constants/xucXacConstants";

const initialState = {
  taiXiu: true,
  mangXucXac: [
    { ma: 1, hinhAnh: "./img/1.png" },
    { ma: 1, hinhAnh: "./img/1.png" },
    { ma: 1, hinhAnh: "./img/1.png" },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
};

const xucXacReducer = (state = initialState, action) => {
  switch (action.type) {
    case DAT_CUOC: {
      state.taiXiu = action.payload;
      return { ...state };
    }

    case "PLAY_GAME": {
      //xu ly random xuc xac
      let mangXucXacRandom = [];
      for (let i = 0; i < 3; i++) {
        let soRandom = Math.floor(Math.random() * 2) + 1;

        let xucXacRandom = { ma: soRandom, hinhAnh: `./img/${soRandom}.png` };
        mangXucXacRandom.push(xucXacRandom);
      }
      state.mangXucXac = mangXucXacRandom;
      state.tongSoBanChoi++;
      //Xu ly win game
      let tongSoDiem = mangXucXacRandom.reduce((tongDiem, xucXac, index) => {
        return (tongDiem += xucXac.ma);
      }, 0);
      if (
        (tongSoDiem > 11 && state.taiXiu) ||
        (tongSoDiem <= 11 && tongSoDiem >= 4 && !state.taiXiu)
      ) {
        state.soBanThang++;
      }

      return { ...state };
    }
    default:
      return state;
  }
};

export default xucXacReducer;
