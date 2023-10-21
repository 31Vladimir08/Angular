import { ProductResponseInterface } from "src/app/products/types/product.response.interfase"

export interface ProductsResponseInterface {
    total: number
    count: number
    offset: number
    limit: number
    items: Array<ProductResponseInterface>
}