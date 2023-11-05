import { CategoriesResponseInterface } from "./categoriesResponse.interface"

export interface CategoriesStateInterface {
    isLoading: boolean
    error: string | null
    data: CategoriesResponseInterface | null
}