import history from "../utils/history.js";

export function changeList(val){
  return {
  	type: "select/tab",
  	payload: {
  		tab: val
  	}
  }
}
