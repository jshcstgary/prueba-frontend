import { Component, OnInit } from "@angular/core";
import { CargoService, DepartamentoService } from "../../services";
import { Cargo, Departamento } from "../../types";
import { forkJoin } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { UserFormComponent } from "../user-form/user-form.component";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss"
})
export class HeaderComponent implements OnInit {
	public cargos: Cargo[] = [];
	public departamentos: Departamento[] = [];

	constructor(private cargoService: CargoService, private departamentoService: DepartamentoService, public dialog: MatDialog) {}

	public ngOnInit(): void {
		this.getData();
	}

	public getData(): void {
		const cargoRequest = this.cargoService.getCargos();
		const departamentoRequest = this.departamentoService.getDepartamentos();

		forkJoin([cargoRequest, departamentoRequest]).subscribe({
			next: ([cargoResponse, departamentoResponse]) => {
				this.cargos = cargoResponse.data === undefined ? [] : cargoResponse.data;
				this.departamentos = departamentoResponse.data === undefined ? [] : departamentoResponse.data;

				this.cargoService.cargos = this.cargos;
				this.departamentoService.departamentos = this.departamentos;
			}
		});
	}

	public openDialog(): void {
		const dialogRef = this.dialog.open(UserFormComponent);

		dialogRef.afterClosed().subscribe((result) => {
			console.log("The dialog was closed");
		});
	}
}
