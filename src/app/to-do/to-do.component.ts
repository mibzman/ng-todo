import { Component, OnInit } from "@angular/core";
import { ToDo } from "./to-do";

@Component({
	selector: "ToDo", // default:'app-to-do',
	templateUrl: "./to-do.component.html",
	styleUrls: ["./to-do.component.css"]
})
export class ToDoComponent implements OnInit {
	constructor() {}

	ToDos: ToDo[] = [new ToDo("clean the house"), new ToDo("buy milk")];

	Input: string;

	ngOnInit() {}

	deleteItem(i: number) {
		//note delete doesn't work: https://stackoverflow.com/a/40462431/2653503
		this.ToDos.splice(i, 1);
	}

	addItem() {
		console.log(this.ToDos);
		this.ToDos = this.ToDos.concat(new ToDo(this.Input));
		console.log(this.ToDos);
	}
}
