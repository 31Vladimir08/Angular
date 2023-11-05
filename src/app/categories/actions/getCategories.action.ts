import { createAction, props } from "@ngrx/store";
import { CategoriesResponseInterface } from "../types/categoriesResponse.interface";
import { CategoriesActionTypes } from "../store/categories/categoriesActionType";

export const getCategoriesAction = createAction(
    CategoriesActionTypes.GET_CATEGORIES
)

export const getCategoriesSuccessAction = createAction(
    CategoriesActionTypes.GET_CATEGORIES_SUCCESS,
    props<{categories: CategoriesResponseInterface}>()
)

export const getCategoriesFailureAction = createAction(
    CategoriesActionTypes.GET_CATEGORIES_FAILURE
)