import { NgModule } from "@angular/core";
import { AppSelectPostComponent } from "./post.component";
import { AppSelectModule } from "../select.module";

@NgModule({
    declarations: [
        AppSelectPostComponent
    ],
    exports: [
        AppSelectPostComponent
    ],
    imports: [
        AppSelectModule
    ]
})
export class AppSelectPostModule { }
