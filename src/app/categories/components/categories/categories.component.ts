import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { CategoriesResponseInterface } from "../../types/categoriesResponse.interface";
import { Store, select } from "@ngrx/store";
import { getCategoriesAction } from "../../actions/getCategories.action";
import { categoriesSelector, errorSelector, isLoadingSelector } from "../../store/categories/selectors";

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
    isLoading$: Observable<boolean>
    error$: Observable<string | null>
    categories$: Observable<CategoriesResponseInterface | null>

    constructor(private store: Store) {        
    }

    ngOnInit(): void {
        this.initValues();
        this.getCategories();
    }

    initValues(): void {
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
        this.error$ = this.store.pipe(select(errorSelector))
        this.categories$ = this.store.pipe(select(categoriesSelector))
    }

    getCategories(): void {
        this.store.dispatch(getCategoriesAction());
    }
}
