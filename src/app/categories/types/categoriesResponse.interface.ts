import { CategoryResponseInterface } from "./categoryResponse.interface"

export class CategoriesResponseInterface {
    total: number
    count: number
    offset: number
    limit: number
    items: Array<CategoryResponseInterface>
}