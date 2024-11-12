import { Injectable } from "@angular/core";
import { ENVIRONMENT } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Departamento, Response } from "../types";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class DepartamentoService {
	private url: string = `${ENVIRONMENT.BASE_URL}:${ENVIRONMENT.PORT}`;
	
	private _departamentos: Departamento[] = [];
	
	constructor(private http: HttpClient) { }

	set departamentos(departamentos: Departamento[]) {
		this._departamentos = departamentos;
	}

	get departamentos() {
		return this._departamentos;
	}
	
	public getDepartamentos(): Observable<Response<Departamento[]>> {
		return this.http.get<Response<Departamento[]>>(`${this.url}/departamentos`);
	}
}
