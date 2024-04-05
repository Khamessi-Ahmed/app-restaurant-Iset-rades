export interface SignupRequest {
    email: string;
    password: string;
    role: string;
    nom : string;
    prenom : string;
    codeSecurite:number;
    numeroCarte:string;
}