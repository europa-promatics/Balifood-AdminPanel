
export interface Environment 
{
	endPoint:string;
}

export const DEV: Environment = {
	endPoint:'http://localhost:8080/api/' 
}

export const PROD: Environment = {
	endPoint:'http://18.218.43.56:5001/api/' 
}
export const environment: Environment= PROD;

