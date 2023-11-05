import { Action, createReducer, on } from "@ngrx/store";
import { ProductStateInterface } from "../../types/productState.interface";
import { getProductAction, getProductFailureAction, getProductSuccessAction } from "../../actions/getProduct.action";

const initialState: ProductStateInterface = {
    isLoading: false,
    error: null,
    data: null
}

const productReducer = createReducer(
    initialState,
    on(
        getProductAction,
        (state):  ProductStateInterface => ({
            ...state,
            isLoading: true
        })
    ),
    on(
        getProductSuccessAction,
        (state, action):  ProductStateInterface => ({
            ...state,
            isLoading: false,
            data: action.product
        })
    ),
    on(
        getProductFailureAction,
        (state):  ProductStateInterface => ({
            ...state,
            isLoading: false
        })
    )
)

export function reducersProduct(state: ProductStateInterface, action: Action) {
    return productReducer(state, action)
}

