import { ProductsResponseInterface } from "./productsResponse.interface"

export interface ProductsStateInterface {
    isLoading: boolean
    error: string | null
    data: ProductsResponseInterface | null
}