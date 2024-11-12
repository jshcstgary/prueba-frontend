import { Component } from "@angular/core";
import { CargoService, DepartamentoService } from "./services";
import { forkJoin } from "rxjs";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss"
})
export class AppComponent {
	constructor(private cargoService: CargoService, private departamentoService: DepartamentoService) {}
	
	public ngOnInit(): void {
		this.getData();
	}

	public getData(): void {
		const cargoRequest = this.cargoService.getCargos();
		const departamentoRequest = this.departamentoService.getDepartamentos();
		
		forkJoin([cargoRequest, departamentoRequest]).subscribe({
			next: ([cargoResponse, departamentoResponse]) => {
				this.cargoService.cargos = cargoResponse.data === undefined ? [] : cargoResponse.data;
				this.departamentoService.departamentos = departamentoResponse.data === undefined ? [] : departamentoResponse.data;
			}
		});
	}
}
