import { Component } from "@angular/core";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss"
})
export class HeaderComponent {
	public foods = [
		{ value: "steak-0", viewValue: "Steak" },
		{ value: "pizza-1", viewValue: "Pizza" },
		{ value: "tacos-2", viewValue: "Tacos" }
	];
}
