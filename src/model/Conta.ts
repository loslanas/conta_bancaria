export abstract class Conta{

    //Modelo de Dados
    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    //GERAMOS O MÉTODO CONSTRUTOR
	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
		this._numero = numero;
		this._agencia = agencia;
		this._tipo = tipo;
		this._titular = titular;
		this._saldo = saldo;
	}
    
    //GERAR OS MÉTODOS GETTER'S E SETTER'S PARA ACESSAR E MODIFICAR OS DADOS DOS ATRIBUTOS

    /**
     * Getter numero
     * @return {number}
     */
	public get numero(): number {
		return this._numero;
	}

    /**
     * Getter agencia
     * @return {number}
     */
	public get agencia(): number {
		return this._agencia;
	}

    /**
     * Getter tipo
     * @return {number}
     */
	public get tipo(): number {
		return this._tipo;
	}

    /**
     * Getter titular
     * @return {string}
     */
	public get titular(): string {
		return this._titular;
	}

    /**
     * Getter saldo
     * @return {number}
     */
	public get saldo(): number {
		return this._saldo;
	}

    /**
     * Setter numero
     * @param {number} value
     */
	public set numero(value: number) {
		this._numero = value;
	}

    /**
     * Setter agencia
     * @param {number} value
     */
	public set agencia(value: number) {
		this._agencia = value;
	}

    /**
     * Setter tipo
     * @param {number} value
     */
	public set tipo(value: number) {
		this._tipo = value;
	}

    /**
     * Setter titular
     * @param {string} value
     */
	public set titular(value: string) {
		this._titular = value;
	}

    /**
     * Setter saldo
     * @param {number} value
     */
	public set saldo(value: number) {
		this._saldo = value;
	}
    
    public sacar(valor: number): boolean{
        if(valor >= this._saldo){
            console.log("Saldo Insuficiente!");
            return false;
        }
        this._saldo -= valor;
        return true;
    
    }

    public depositar(valor: number){
        this._saldo += valor;

    }
    
    
    
    public visualizar(){

        let tipo: string;
        switch(this._tipo){
        case 1:
            tipo = "Conta Corrente";
            break;
        case 2:
            tipo = "Conta Poupança";
            break;
        default:
            tipo ="Tipo Inválido!";       


        }

        console.log("*********************************************************************")
        console.log("Dados da Conta");
        console.log("*********************************************************************")
        console.log(`Número da Conta: ${this._numero}`)
        console.log(`Número da Agência: ${this._agencia}`)
        console.log(`Tipo da Conta: ${tipo}`)
        console.log(`Nome do Titular da Conta: ${this._titular}`)
        console.log(`Saldo da Conta: ${this._saldo}`)
    
    
    
    }

}