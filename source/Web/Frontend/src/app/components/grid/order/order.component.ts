import { Component, Output, EventEmitter, Input } from "@angular/core";
import { OrderModel } from "./order.model";

@Component({
    selector: "app-order",
    templateUrl: "./order.component.html"
})
export class AppOrderComponent {
    @Input() order!: OrderModel;
    @Input() readonly property!: string;
    @Input() readonly text!: string;
    @Output() readonly changed = new EventEmitter();

    click() {
        this.order = this.order ?? new OrderModel();
        this.order.property = this.property;
        this.order.ascending = !this.order.ascending;
        this.changed.emit();
    }
}
