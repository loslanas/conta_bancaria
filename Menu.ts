import readlinesync = require("readline-sync");

import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main(){

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, numeroDestino, valor: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', "Conta Poupanca"];

    //Criando um objeto da classe contacontroller
    const contas = new ContaController();

    //Novas Instâncias da Classe ContaCorrente (Objetos)
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'Amanda Magro', 1000000.00, 100000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 1, 'João da Silva', 1000.00, 100.00));
 
    // Novas Instâncias da Classe ContaPoupança (Objetos)
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, 2, "Geana Almeida", 10000, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5698, 2, "Jean Lima", 15000, 15));




    //Cria novas instâncias (objetos) da classe conta
   
    //const c2 = new Conta(2, 123, 2, "Aline", 200000)
    //c2.visualizar();
    //depósito
    //c2.depositar(100.00)
    //c2.visualizar();
    

    //Contas Correntes

    //const cc1 = new ContaCorrente(3, 789, 1, "Andressa", 100000, 1000)
    
    //saque na conta corrente
    //cc1.sacar(100500);
    //cc1.visualizar();
    
    //deposito na conta corrente
    //cc1.depositar(2000);
    //cc1.visualizar();

    





    while(true){

        console.log("****************************************************");
        console.log("                                                    ");
        console.log("              BANCO HITAU                           ");
        console.log("                                                    ");
        console.log("****************************************************");
        console.log("                                                    ");
        console.log("            1 - Criar Conta                         ");
        console.log("            2 - Listar todas as Contas              ");
        console.log("            3 - Buscar Conta por Numero             ");
        console.log("            4 - Atualizar Dados da Conta            ");
        console.log("            5 - Apagar Conta                        ");
        console.log("            6 - Sacar                               ");
        console.log("            7 - Depositar                           ");
        console.log("            8 - Transferir valores entre Contas     ");
        console.log("            0 - Sair                                ");
        console.log("                                                    ");
        console.log("****************************************************");
        console.log("                                                    ");
        
        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n");

                console.log("\nDigite o número da agência: ");
                agencia = readlinesync.questionInt('');

                console.log("\nDigite o nome do titular: ");
                titular = readlinesync.question('');

                console.log("\nEscolha o tipo da conta: ");
                tipo = readlinesync.keyInSelect(tipoContas, "", {cancel: false}) + 1;

                console.log("\nDigite o saldo da conta: ");
                saldo = readlinesync.questionFloat('');

                switch(tipo){
                    case 1:
                        console.log("\nDigite o limite da conta: ");
                        limite = readlinesync.questionFloat('');
                        contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                    break;

                    case 2:
                        console.log("\nDigite o dia do aniversário da poupança: ");
                        aniversario = readlinesync.questionInt('');
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                    break;
                }

                keyPress();
                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");
                contas.listarTodas();
                keyPress();
                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");
                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt('');
                contas.procurarPorNumero(numero);
                keyPress();
                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt('');

                let conta = contas.buscarNoArray(numero);

                if(conta !== null){

                    console.log("\nDigite o novo número da agência: ");
                    agencia = readlinesync.questionInt('');

                    console.log("\nDigite o novo nome do titular: ");
                    titular = readlinesync.question('');

                    console.log("\nDigite o novo saldo da conta: ");
                    saldo = readlinesync.questionFloat('');

                    tipo = conta.tipo;

                    switch(tipo){
                        case 1:
                            console.log("\nDigite o novo limite da conta: ");
                            limite = readlinesync.questionFloat('');
                            contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                        break;

                        case 2:
                            console.log("\nDigite o novo dia do aniversário da poupança: ");
                            aniversario = readlinesync.questionInt('');
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                        break;
                    }
                }else {
                    console.log("Conta não encontrada!");
                }
                
                keyPress();
                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt('');

                contas.deletar(numero);

                keyPress();
                break;
            case 6:
                console.log("\n\nSaque\n\n");

                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt('');

                console.log("Digite o valor do saque: ");
                valor = readlinesync.questionFloat('');

                contas.sacar(numero, valor);

                keyPress();
                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt('');

                console.log("Digite o valor do depósito: ");
                valor = readlinesync.questionFloat('');

                contas.depositar(numero, valor);

                keyPress();
                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                console.log("Digite o número da conta de origem: ");
                numero = readlinesync.questionInt('');

                console.log("Digite o número da conta de destino: ");
                numeroDestino = readlinesync.questionInt('');

                console.log("Digite o valor da transferência: ");
                valor = readlinesync.questionFloat('');

                contas.transferir(numero, numeroDestino, valor);

                keyPress();
                break;
            case 9:
                console.log("\n\nConsulta pelo titular\n\n");

                console.log("\nDigite o nome do titular: ");
                titular = readlinesync.question("");

                contas.procurarPorTitular(titular);
                keyPress();
                break;
            default:
                console.log("\nOpção Inválida!\n");
                keyPress();
                break;
        }
    }

}


export function sobre(): void {
    console.log("\n****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Fernando Lana - fernandoo@genstudents.org");
    console.log("https://github.com/loslanas");
    console.log("****************************************************");


}
function keyPress(): void {
    //console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}
main();