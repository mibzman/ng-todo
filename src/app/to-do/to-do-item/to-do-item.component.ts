import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ToDo } from "../to-do";

@Component({
	selector: "ToDoItem", //default: app-to-do-item
	templateUrl: "./to-do-item.component.html",
	styleUrls: ["./to-do-item.component.css"]
})
export class ToDoItemComponent implements OnInit {
	constructor() {}

	@Input() ToDo: ToDo = new ToDo("");

	@Output() Deleted: EventEmitter<any> = new EventEmitter();

	ngOnInit() {}

	deleteItem() {
		this.Deleted.emit();
	}
}
