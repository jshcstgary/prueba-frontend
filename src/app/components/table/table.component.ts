import { Component, OnInit } from "@angular/core";
import { User } from "../../types";
import { UserService } from "../../services/user.service";

@Component({
	selector: "app-table",
	templateUrl: "./table.component.html",
	styleUrl: "./table.component.scss"
})
export class TableComponent implements OnInit {
	displayedColumns: string[] = ["usuario", "nombres", "apellidos", "departamento", "cargo", "email", "acciones"];

	public users: User[] = [];

	constructor(private userService: UserService) {}

	public ngOnInit(): void {
		this.getUsers();
	}

	private getUsers(): void {
		this.userService.getUsers().subscribe({
			next: (response) => {
				this.users = response.data === undefined ? [] : response.data;
				console.log(this.users);
			}
		});
	}
}
