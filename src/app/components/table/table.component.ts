import { Component, OnInit } from "@angular/core";
import { User } from "../../types";
import { UserService } from "../../services/user.service";

export interface PeriodicElement {
	name: string;
	position: number;
	weight: number;
	symbol: string;
}
  
const ELEMENT_DATA: PeriodicElement[] = [
	{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
	{position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
	{position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
	{position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
	{position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
	{position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
	{position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
	{position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
	{position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
	{position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
	selector: "app-table",
	templateUrl: "./table.component.html",
	styleUrl: "./table.component.scss"
})
export class TableComponent implements OnInit {
	displayedColumns: string[] = ["usuario", "nombres", "apellidos", "departamento", "cargo", "email", "acciones"];

	dataSource = ELEMENT_DATA;

	public users: User[] = [];

	constructor(private userService: UserService) { }

	public ngOnInit(): void {
		this.getUsers();
	}

	private getUsers(): void {
		this.userService.getUsers().subscribe({
			next: (response) => {
				if (response.data === undefined) {
					this.users = [];
				}
				
				this.users = response.data === undefined ? [] : response.data;
			}
		});
	}
}
