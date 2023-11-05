import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home.component";
import { ProductsModule } from "../products/products.module";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { CategoriesModule } from "../categories/categories.module";

@NgModule({
    declarations: [HomeComponent],
    exports: [HomeComponent],
    imports:[
        CommonModule,
        CategoriesModule,
        ProductsModule,
        HomeRoutingModule,
    ],
})
export class HomeModule {

}