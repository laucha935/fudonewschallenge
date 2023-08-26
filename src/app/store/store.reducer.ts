import { createReducer, Action, on } from "@ngrx/store";
import { SaveNotice } from "./store.actions";
import { AppState } from "../@shared/models/apptate.model";



const item = sessionStorage.getItem('store');
const emptyState : AppState = {
  notice : undefined
}

const initialState =  item && JSON.parse(item) ? JSON.parse(item) : emptyState;
export const _storeReducer = createReducer(
  initialState,

  on(SaveNotice, (state , notice) => {
    return {
      ...state,
      notice: notice.notice
    }
  }),
);

export function storeReducer(state: any, action: Action){
  return _storeReducer(state,action);
}
