import { createAction, props } from "@ngrx/store";
import { Notice } from "../@shared/models/notice.model";

export const SaveNotice = createAction('Save Notice', props<{notice: Notice }> (),);
