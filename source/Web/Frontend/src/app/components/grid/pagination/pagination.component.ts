import { Input, Component, Output, EventEmitter } from "@angular/core";
import { PageModel } from "./page.model";

@Component({
    selector: "app-pagination",
    templateUrl: "./pagination.component.html"
})
export class AppPaginationComponent {
    pages = 0;
    private _count = 0;
    private _page = new PageModel();

    get count(): number {
        return this._count;
    }

    @Input("count")
    set count(count: number) {
        this._count = count;
        this.setPages();
    }

    get page(): PageModel {
        return this._page;
    }

    @Input("page")
    set page(page: PageModel) {
        this._page = page;
        this.setPages();
    }

    @Output() readonly changed = new EventEmitter();

    change(index: number) {
        this.page.index = index;
        this.changed.emit();
    }

    setPages() {
        this.pages = Math.ceil(this.count / this.page.size);
    }
}
