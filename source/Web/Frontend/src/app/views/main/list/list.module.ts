import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppListComponent } from "./list.component";
import { AppListGridModule } from "./grid/grid.module";

const routes: Routes = [
    { path: "", component: AppListComponent }
];

@NgModule({
    declarations: [AppListComponent],
    imports: [
        RouterModule.forChild(routes),
        AppListGridModule
    ],
    exports: [RouterModule]
})
export class AppListModule { }
