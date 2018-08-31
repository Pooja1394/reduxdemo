import { setLoader, removeLoader, setTableData } from "./Actions";
import axios from "axios";

export function getResponse(_apiurl, _apidata) {
  return dispatch => {
    dispatch(setLoader());
    axios({
      method: "post",
      url: _apiurl,
      data: _apidata
    })
      .then(response => {
        // console.log(response);
        let _res = response.data;
        let _arr = [];
        if (_res.length > 0) {
          _res.map((value, key) => {
            _arr = _arr.concat({
              room_no: value.roomNumber,
              request_time: value.requestTime,
              guest_name: value.name,
              fullfill_time: value.fulfilledTime,
              actions: value.bedroom,
              request: value.requestStatus,
              transmitted_to: value.transmittedTo
            });
            if (key == _res.length - 1) {
              dispatch(setTableData(_arr));
              dispatch(removeLoader());
            }
          });
        } else {
          console.log("hyyyyy");
        }
        // dispatch(setTableData(response));

        //dispatch(removeLoader());
      })
      .catch(error => {
        console.log("in error");
        dispatch(removeLoader());
      });
  };
}
