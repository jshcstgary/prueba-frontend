import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ENVIRONMENT } from "../../environments/environment";
import { Cargo, Response } from "../types";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class CargoService {
	private url: string = `${ENVIRONMENT.BASE_URL}:${ENVIRONMENT.PORT}/api`;

	private _cargos: Cargo[] = [];

	constructor(private http: HttpClient) { }

	set cargos(cargos: Cargo[]) {
		this._cargos = cargos;
	}

	get cargos() {
		return this._cargos;
	}

	public getCargos(): Observable<Response<Cargo[]>> {
		return this.http.get<Response<Cargo[]>>(`${this.url}/cargos`);
	}
}
