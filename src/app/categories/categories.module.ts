import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CategoriesComponent } from "./components/categories/categories.component";
import { CategoriesRoutingModule } from "./categories-routing.module";
import { LoadingModule } from "../shared/modules/loading/loading.module";
import { EffectsModule } from "@ngrx/effects";
import { CategoryEffect } from "./store/effects/category.effect";
import { StoreModule } from "@ngrx/store";
import { reducersCategories } from "./store/categories/reducers";
import { CategoriesService } from "./services/categories.service";

@NgModule({
    imports: [
        CommonModule,
        CategoriesRoutingModule,
        LoadingModule,
        EffectsModule.forFeature([CategoryEffect]),
        StoreModule.forFeature('categories', reducersCategories),
    ],
    declarations: [
        CategoriesComponent
    ],
    providers: [CategoriesService],
    exports: [
        CategoriesComponent
    ]
})
export class CategoriesModule {

}