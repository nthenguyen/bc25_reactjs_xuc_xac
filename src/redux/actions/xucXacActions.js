import * as ActionType from "../constants/xucXacConstants";

const actDatCuoc = (taiXiu) => {
  return {
    type: ActionType.DAT_CUOC,
    payload: taiXiu,
  };
};

export { actDatCuoc };
