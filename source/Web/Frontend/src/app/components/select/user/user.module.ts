import { NgModule } from "@angular/core";
import { AppSelectUserComponent } from "./user.component";
import { AppSelectModule } from "../select.module";

@NgModule({
    declarations: [
        AppSelectUserComponent
    ],
    exports: [
        AppSelectUserComponent
    ],
    imports: [
        AppSelectModule
    ]
})
export class AppSelectUserModule { }
