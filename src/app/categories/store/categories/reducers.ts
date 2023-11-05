import { Action, createReducer, on } from "@ngrx/store";
import { CategoriesStateInterface } from "../../types/categoriesState.interface";
import { getCategoriesAction, getCategoriesFailureAction, getCategoriesSuccessAction } from "../../actions/getCategories.action";

const initialState: CategoriesStateInterface = {
    isLoading: false,
    error: null,
    data: null
}

const categoriesReducer = createReducer(
    initialState,
    on(
        getCategoriesAction,
        (state):  CategoriesStateInterface => ({
            ...state,
            isLoading: true
        })
    ),
    on(
        getCategoriesSuccessAction,
        (state, action):  CategoriesStateInterface => ({
            ...state,
            isLoading: false,
            data: action.categories
        })
    ),
    on(
        getCategoriesFailureAction,
        (state):  CategoriesStateInterface => ({
            ...state,
            isLoading: false
        })
    )
)

export function reducersCategories(state: CategoriesStateInterface, action: Action) {
    return categoriesReducer(state, action)
}

