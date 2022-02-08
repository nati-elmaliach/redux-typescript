import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const useActions = () => {
  const dispatch = useDispatch();
  // bindActionCreator will return somthin like =>
  // {searchRepositories : dispatch(searchRepositories)}
  
  return bindActionCreators(actionCreators, dispatch)
}