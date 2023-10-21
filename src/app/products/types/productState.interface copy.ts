import { ProductResponseInterface } from "./product.response.interfase"

export interface ProductStateInterface {
    isLoading: boolean
    error: string | null
    data: ProductResponseInterface | null
}