import { ProductMediaInterface } from "./productMedia.interface"

export interface ProductResponseInterface {
    id: number
    sku: string
    name: string
    price: number
    thumbnailUrl: string
    description: string
    smallThumbnailUrl: string
    defaultDisplayedPriceFormatted: string
    seoDescription: string
    seoTitle: string
    defaultCategoryId: number
    categoryIds: Array<number>
    media: ProductMediaInterface
}