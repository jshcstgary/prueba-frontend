import { Cargo, Departamento } from ".";

export type User = {
    id: number;
    usuario: string;
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    departamento: Departamento;
    cargo: Cargo;
};

export type UserCreate = {
    usuario: string;
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    departamento: Departamento;
    cargo: Cargo;
};
