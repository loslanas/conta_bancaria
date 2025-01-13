import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{
    
    //Coleção Array que vai armazenar os objetos Conta
    private listaContas = new Array<Conta>();

    // Controlar os Números das Contas
    public numero: number = 0; //public porque precisará acessar do menu

    procurarPorTitular(titular: string): void {
        //filtragem dos dados
        let buscaPorTitular = this.listaContas.filter(conta => 
            conta.titular.toUpperCase().includes(titular.toUpperCase())
        )

        //listagem dos dados
        buscaPorTitular.forEach(conta => conta.visualizar());
    }

    procurarPorNumero(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null)
            buscaConta.visualizar()
        else
            console.log("\nConta não encontrada!");
        
    }

    listarTodas(): void {
        for(let conta of this.listaContas){
            conta.visualizar();
        }
    }

    //pega o objeto conta e guarda na coleção
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("A conta foi cadastrada com sucesso!");
    }

    atualizar(conta: Conta): void {
        const buscaConta = this.buscarNoArray(conta.numero);

        if(buscaConta !== null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log("A conta foi atualizada com sucesso!");
        }else
            console.log("\nConta não encontrada!");
    }

    deletar(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log("A conta foi deletada com sucesso!");
        }else
            console.log("\nConta não encontrada!");
    }

    //Métodos Bancários

    sacar(numero: number, valor: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null) {
            if(buscaConta.sacar(valor) === true){
                console.log("O saque foi efetuado com sucesso!");
            }
        }else
            console.log("\nConta não encontrada!");
    }

    depositar(numero: number, valor: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null) {
            buscaConta.depositar(valor)
            console.log("O depósito foi efetuado com sucesso!");
        
        }else
            console.log("\nConta não encontrada!");
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        const contaOrigem = this.buscarNoArray(numeroOrigem);
        const contaDestino = this.buscarNoArray(numeroDestino);

        if(contaOrigem !== null && contaDestino !== null) {
            if(contaOrigem.sacar(valor) === true){
                contaDestino.depositar(valor);
                console.log("A transferência foi efetuada com sucesso!");
            }
        }else
            console.log("\nConta de origem e/ou conta de destino não foi encontrada!");
    }

    // Métodos auxiliares

    //gerar numero da conta automaticamente, porque não tem banco de dados
    public gerarNumero(): number{
        return ++this.numero;
    }
    
    public buscarNoArray(numero: number): Conta | null {
        for(let conta of this.listaContas){
            if(conta.numero === numero)
                return conta;
        }

        return null;
    }
}