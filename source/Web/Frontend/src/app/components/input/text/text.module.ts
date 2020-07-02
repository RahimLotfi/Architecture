import { NgModule } from "@angular/core";
import { AppInputTextComponent } from "./text.component";
import { AppInputModule } from "../input.module";

@NgModule({
    declarations: [
        AppInputTextComponent
    ],
    exports: [
        AppInputTextComponent
    ],
    imports: [
        AppInputModule
    ]
})
export class AppInputTextModule extends AppInputModule { }
