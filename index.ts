import {question,questionInt} from "readline-sync";
class Curp{
    private nombre:string
    private ApellidoPaterno:string
    private ApellidoMaterno:string
    private Dia:string
    private Mes:string
    private Anio:number;
    private Sexo:string;
    private CD:string;
    private Curp:string;

    public  getNombre():string {
		return this.nombre;
	}

	public setNombre( nombre:string) {
		this.nombre = nombre.trim().toUpperCase();
	}

	public  getApellidoPaterno():string {
		return this.ApellidoPaterno;
	}

	public setApellidoPaterno(apellidoPaterno:string) {
		this.ApellidoPaterno = apellidoPaterno.trim().toUpperCase();
	}

	public getApellidoMaterno():string {
		return this.ApellidoMaterno;
	}

	public  setApellidoMaterno(apellidoMaterno) {
		this.ApellidoMaterno = apellidoMaterno.trim().toUpperCase();
	}

	public  getDia():string {
		return this.Dia;
	}

	public  setDia( dia:string) {
		this.Dia = dia;
	}

	public getMes():string {
		return this.Mes;
	}

	public setMes( mes:string) {
		this.Mes = mes;
	}

	public getAnio():number {
		return this.Anio;
	}

	public  setAnio( anio:number) {
		this.Anio = anio;
	}

	public getSexo():string {
		return this.Sexo;
	}

	public setSexo( sexo:string) {
		this.Sexo = sexo.trim().toUpperCase();
		if (this.Sexo=="HOMBRE"||this.Sexo=="MASCULINO")
			this.Sexo="H"
		if(this.Sexo=="MUJER"||this.Sexo=="FEMENINO")
			this.Sexo="M"
	}

	public getCD():string {
		return this.CD;
	}

	public  setCD( cD:string) {
		this.CD = cD.trim().toUpperCase();
	}

	public  getCurp():string {
		return this.Curp;
	}

	public  setCurp( curp:string) {
		this.Curp = curp;
	}
	public GeneraCurp():string{
		var dat:string;
		var nomAux=this.CD.split(" ")
		var nameAux=this.nombre.split(" ");
		var letraAux:string
		dat=this.ApellidoPaterno.substring(0,1)
		dat+=this.ApellidoPaterno.substr(this.validaVocal(this.ApellidoPaterno),1)
		dat+=this.ApellidoMaterno.substr(0,1)
		if (nameAux.length>1){
			if(this.validaExcepcioVocal(nameAux[0])){
				dat+=nameAux[1].substr(0,1)
			}else{
				dat+=nameAux[0].substr(0,1)
			}
		}else{
			dat+=this.nombre.substr(0,1)
		}

		dat+=this.Anio.toString().substr(this.Anio.toString().length-2,2)
		dat+=this.Mes
		dat+=this.Dia
		dat+=this.Sexo
		dat+=this.CD.substr(0,1)
		if (nomAux.length==1){
			dat+=this.CD.substr(this.validaConsonantes(this.CD,false),1)
		}else{

			dat+=nomAux[nomAux.length-1].substr(0,1)
		}
		letraAux=this.ApellidoPaterno.substr(1,this.ApellidoPaterno.length-1)
		dat+=letraAux.substr(this.validaConsonantes(letraAux,true),1)

		letraAux=this.ApellidoMaterno.substr(1,this.ApellidoMaterno.length-1)
		dat+=letraAux.substr(this.validaConsonantes(letraAux,true),1)

		letraAux=this.nombre.substr(1,this.nombre.length-1)
		dat+=letraAux.substr(this.validaConsonantes(letraAux,true),1)
		dat+=Math.floor(Math.random() * 9) + 1  
		dat+=Math.floor(Math.random() * 9) + 1  
		return dat

	}
	private validaConsonantes(cadena:string,primera:boolean):number{
		var i:number;
		if(primera){
			for(i=0;i<cadena.length;i++){
				if(cadena.charAt(i)!="A"&&cadena.charAt(i)!="E"&&cadena.charAt(i)!="I"&&cadena.charAt(i)!="O"&&cadena.charAt(i)!="U"){
					return i;
				}
			}
		}
		else{
			for(i=cadena.length-1;i>=0;i--){
				if(cadena.charAt(i)!="A"&&cadena.charAt(i)!="E"&&cadena.charAt(i)!="I"&&cadena.charAt(i)!="O"&&cadena.charAt(i)!="U"){
					return i;
				}
			}
		}

	}
	private validaVocal(cadena:string):number{
		var i:number;
		
		for(i=0;i<cadena.length;i++){
			if(cadena.charAt(i)=="A"||cadena.charAt(i)=="E"||cadena.charAt(i)=="I"||cadena.charAt(i)=="O"||cadena.charAt(i)=="U"){
				return i;
			}
		}
	}
	private validaExcepcioVocal(nombre:string):boolean{
		if(nombre.search(/MARIA/gi)==0){
			return true
		}
		if(nombre.search(/MARIA/gi)==0){
			return true
		}
		if(nombre.search(/MA./gi)==0){
			return true
		}

		if(nombre.search(/MA/gi)==0){
			return true
		}
		if(nombre.search(/JOSE/gi)==0){
			return true
		}
		if(nombre.search(/J/gi)==0){
			return true
		}
		if(nombre.search(/J./gi)==0){
			return true
		}
		return false
	}
}

var op:number;
var datos:Curp;
var fechaDMY:string;
var ops:string
	try
	{
		do{
			console.clear();
			datos=new Curp();
			datos.setNombre(question("Ingresa tu nombre:"))	
			datos.setApellidoPaterno(question("Ingresa tu Apellido Paterno:"))
			datos.setApellidoMaterno(question("Ingresa tu Apellido Materno:"))
			datos.setSexo(question("Ingresa su sexo (H=Hombre|M=Mujer):"))
			fechaDMY=question("Ingresa tu fecha de nacimiento (DD/MM/YYYY):")
			var fecha=fechaDMY.split("/")
			datos.setDia(fecha[0])
			datos.setMes(fecha[1])
			datos.setAnio(Number(fecha[2]))
			datos.setCD(question("Ingresa lugar de naciemiento:"))
			console.log(datos.GeneraCurp())
			ops=question("Desea generar otro CURP (s/n)")
		}while(ops!="n")
	}
	catch (e)
	{
		e.printStackTrace();
	}
