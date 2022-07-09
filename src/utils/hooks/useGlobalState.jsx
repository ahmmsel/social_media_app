import { useSelector, useDispatch } from "react-redux";

function useGlobalState(selectedStated) {
  const state = useSelector(selectedStated || ((state) => state));
  const dispatch = useDispatch();

  return { state, dispatch };
}

export default useGlobalState;
