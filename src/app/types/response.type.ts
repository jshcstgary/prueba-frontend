export type Response<T> = {
	message?: string;
	error?: string[];
	data?: T;
	status: number;
};