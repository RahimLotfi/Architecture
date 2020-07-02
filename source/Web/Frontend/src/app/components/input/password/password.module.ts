import { NgModule } from "@angular/core";
import { AppInputPasswordComponent } from "./password.component";
import { AppInputModule } from "../input.module";

@NgModule({
    declarations: [
        AppInputPasswordComponent
    ],
    exports: [
        AppInputPasswordComponent
    ],
    imports: [
        AppInputModule
    ]
})
export class AppInputPasswordModule extends AppInputModule { }
