import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as storeAction from './store.actions';
import { of, switchMap, tap } from "rxjs";
@Injectable()

export class StoreEffects {
  constructor(private actions: Actions ) {}

  saveStorage$ = createEffect(() => {
    return this.actions.pipe(
      ofType(
        storeAction.SaveNotice
      ),
      tap((result) => {
        const storage = sessionStorage.getItem('store');

        if (result) {
          try {
            const jsonStorage = JSON.parse(storage!);
            storage
              ? sessionStorage.setItem(
                  'store',
                  JSON.stringify({ ...jsonStorage, ...result }),
                )
              : sessionStorage.setItem(
                  'store',
                  JSON.stringify({ ...jsonStorage, ...result }),
                );
          } catch (error) {
            console.log('error');
          }
        }
      }),
      switchMap((result) => of({ type: 'Save Id success' })),
    );
  });
}
