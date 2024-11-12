import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ENVIRONMENT } from "../../environments/environment";
import { Cargo, Response, User, UserCreate } from "../types";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class UserService {
	private url: string = `${ENVIRONMENT.BASE_URL}:${ENVIRONMENT.PORT}`;
	
	constructor(private http: HttpClient) { }

	public getUsers(): Observable<Response<User[]>> {
		return this.http.get<Response<User[]>>(`${this.url}/users`);
	}

	public getUser(id: number): Observable<Response<User>> {
		return this.http.get<Response<User>>(`${this.url}/users/${id}`);
	}

	public createUser(userCreate: UserCreate): Observable<Response<User>> {
		return this.http.post<Response<User>>(`${this.url}/users`, userCreate);
	}

	public updateUser(user: User): Observable<Response<User>> {
		return this.http.put<Response<User>>(`${this.url}/users/${user.id}`, user);
	}

	public deleteUser(id: number): Observable<Response<void>> {
		return this.http.delete<Response<void>>(`${this.url}/users/${id}`);
	}
}
