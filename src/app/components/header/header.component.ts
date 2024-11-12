import { Component, OnInit } from "@angular/core";
import { CargoService, DepartamentoService } from "../../services";
import { Cargo, Departamento } from "../../types";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss"
})
export class HeaderComponent implements OnInit {
	public cargos: Cargo[] = [];
	public departamentos: Departamento[] = [];

	constructor(private cargoService: CargoService, private departamentoService: DepartamentoService) {}

	public ngOnInit(): void {
		this.getData();
	}

	public getData(): void {
		this.cargos = this.cargoService.cargos;
		this.departamentos = this.departamentoService.departamentos;
	}
}
