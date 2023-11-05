import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { UtilsService } from "../../services/util.service";

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [PaginationComponent],
    exports: [PaginationComponent],
    providers: [UtilsService]
})
export class PaginationModule {}