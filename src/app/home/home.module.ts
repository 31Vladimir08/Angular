import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home.component";
import { ProductsModule } from "../products/products.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
    declarations: [HomeComponent],
    exports: [HomeComponent],
    imports:[
        CommonModule,
        ProductsModule,
        HomeRoutingModule,
    ],
})
export class HomeModule {

}