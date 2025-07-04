export class tiempoActual{
condition: any; 
    constructor(
    public ciudad: string,
    public pais: string,
    public condicion: string,
    public icono: string,
    public temperatura_c: number,
    public temperatura_f: number
  ) {}

}