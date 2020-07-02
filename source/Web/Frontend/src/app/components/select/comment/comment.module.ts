import { NgModule } from "@angular/core";
import { AppSelectCommentComponent } from "./comment.component";
import { AppSelectModule } from "../select.module";

@NgModule({
    declarations: [
        AppSelectCommentComponent
    ],
    exports: [
        AppSelectCommentComponent
    ],
    imports: [
        AppSelectModule
    ]
})
export class AppSelectCommentModule { }
