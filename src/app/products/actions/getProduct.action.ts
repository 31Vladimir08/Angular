import { createAction, props } from "@ngrx/store";
import { ProductResponseInterface } from "../types/product.response.interfase";
import { ActionTypes } from "../store/product/productType";

export const getProductAction = createAction(
    ActionTypes.GET_PRODUCT,
    props<{id: number}>()
)

export const getProductSuccessAction = createAction(
    ActionTypes.GET_PRODUCT_SUCCESS,
    props<{product: ProductResponseInterface}>()
)

export const getProductFailureAction = createAction(
    ActionTypes.GET_PRODUCT_FAILURE
)