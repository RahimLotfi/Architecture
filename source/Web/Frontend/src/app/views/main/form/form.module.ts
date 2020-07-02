import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppButtonModule } from "src/app/components/button/button.module";
import { AppFormComponent } from "./form.component";
import { AppLabelModule } from "src/app/components/label/label.module";
import { AppSelectCommentModule } from "src/app/components/select/comment/comment.module";
import { AppSelectPostModule } from "src/app/components/select/post/post.module";
import { AppSelectUserModule } from "src/app/components/select/user/user.module";

const routes: Routes = [
    { path: "", component: AppFormComponent }
];

@NgModule({
    declarations: [AppFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        AppButtonModule,
        AppLabelModule,
        AppSelectCommentModule,
        AppSelectPostModule,
        AppSelectUserModule
    ],
    exports: [RouterModule]
})
export class AppFormModule { }
