

// Aqui vamos a extender una interface
declare namespace Express {
    export interface Request {
        userId: string;
    }
}