import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

@Injectable()
export class ApplicationEffects {
    constructor(private actions$: Actions) { }
}
