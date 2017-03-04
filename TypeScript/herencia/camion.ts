export class camion{
    private color:string;
    public nombre: string;
    protected puertas: number;

    constructor(){
        
    }

    public crearCamion():camion{

        return new camion();
    }
}