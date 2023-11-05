import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {switchMap, map, catchError} from 'rxjs/operators'

import {of} from 'rxjs'
import { CategoriesService } from "../../services/categories.service";
import { getCategoriesAction, getCategoriesFailureAction, getCategoriesSuccessAction } from "../../actions/getCategories.action";
import { CategoriesResponseInterface } from "../../types/categoriesResponse.interface";

@Injectable()
export class CategoryEffect {
    getCategories$ = createEffect(() => this.actions$.pipe(
        ofType(getCategoriesAction),
        switchMap(() => {
            return this.categoryService.getCategories().pipe(
                map((categories: CategoriesResponseInterface) => {
                    return getCategoriesSuccessAction({categories})
                }),
                catchError(() => {
                    return of(getCategoriesFailureAction())
                })
            )
        })
    ))

    constructor(
        private actions$: Actions,
        private categoryService: CategoriesService) {}
}