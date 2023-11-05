import { createAction, props } from "@ngrx/store";
import { ProductResponseInterface } from "../types/product.response.interfase";
import { ProductActionTypes } from "../store/product/productActionType";

export const getProductAction = createAction(
    ProductActionTypes.GET_PRODUCT,
    props<{id: number}>()
)

export const getProductSuccessAction = createAction(
    ProductActionTypes.GET_PRODUCT_SUCCESS,
    props<{product: ProductResponseInterface}>()
)

export const getProductFailureAction = createAction(
    ProductActionTypes.GET_PRODUCT_FAILURE
)