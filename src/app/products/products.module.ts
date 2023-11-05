import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { ProductsComponent } from "./components/products/products.component";
import { StoreModule } from "@ngrx/store";
import { reducersProducts } from "./store/products/reducers";
import { ProductsService } from "./services/products.service";
import { LoadingModule } from "../shared/modules/loading/loading.module";
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductComponent } from "./components/product/product.component";
import { reducersProduct } from "./store/product/reducers";
import { ProductEffect } from "./store/effects/product.effect";

@NgModule({
    imports: [
        CommonModule,
        ProductsRoutingModule,
        LoadingModule,
        EffectsModule.forFeature([ProductEffect]),
        StoreModule.forFeature('products', reducersProducts),
        StoreModule.forFeature('product', reducersProduct)
    ],
    declarations: [ProductsComponent, ProductComponent],
    providers: [ProductsService],
    exports: [ProductsComponent]
})
export class ProductsModule {

}