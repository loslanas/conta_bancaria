import readlinesync = require("readline-sync");

import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main(){

    let opcao: number;

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

    


const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
contacorrente.visualizar();
contacorrente.sacar(2000);
contacorrente.visualizar();
contacorrente.depositar(1000);
contacorrente.visualizar();

const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
contapoupanca.visualizar();
contapoupanca.sacar(200);
contapoupanca.visualizar();
contapoupanca.depositar(1000);
contapoupanca.visualizar();


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
        console.log("            9 - Sair                                ");
        console.log("                                                    ");
        console.log("****************************************************");
        console.log("                                                    ");
        
        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9){
            console.log ("\nBanco Hitau - O Hitau é feito de futuro!");
            sobre();
            process.exit(0);
        }
        
        switch (opcao){
        case 1: 
            console.log('\n\nCriar Conta\n\n');

            break;
        case 2: 
            console.log('\n\nListar todas as Contas\n\n');

            break;
        case 3: 
            console.log('\n\nConsultar dados da Conta - por número\n\n');

            break;
        case 4: 
            console.log('\n\nAtualizar dados da Conta\n\n');

            break;
        case 5: 
            console.log('\n\nApagar uma Conta\n\n');

            break;
        case 6: 
            console.log('\n\nSaque\n\n');

            break;
        case 7: 
            console.log('\n\nDepósito\n\n');

            break;
        case 8: 
            console.log('\n\nTransferência entre Contas\n\n');

            break;
        default:
            console.log ("\nOpção Inválida!\n");
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
main();