

public class ContaBancaria {

    //Atributos da classe ContaBancaria
    private String titular = "Fulano de Tal";
    private String numeroDaConta = "0000-0";
    private double saldo = 0.0;
    private String[] tipoConta = {
        "Conta Corrente",
        "Conta Poupança",
        "Conta Salário",
        "Conta Administrador"
    };
    

    

    public ContaBancaria(double saldoInicial)
        {
            if (saldoInicial < 0) {
                throw new IllegalArgumentException("O saldo inicial não pode ser negativo.");
            }
            this.saldo = saldoInicial;
        }
    
    
    // Metodos da classe a seguir


    public String exibirSaldo() { // Saldo
        return String.format("Seu saldo é de: %.2f", saldo);
    } // Fim saldo

        public String transferir(ContaBancaria destino, double valor) { // Transferir
            if (valor > 0 && this.sacar(valor).startsWith("Saque")) {
                destino.depositar(valor);
                return "Transferência realizada com sucesso.";
            } else {
                return "Transferência não realizada.";
            }
            
        } // Fim transferir

            public String sacar(double valorQueQuerSacar) {  // Saque
                if (valorQueQuerSacar <= 0) {
                   throw new IllegalArgumentException("O valor tem que ser maior que zero.");
                }

                if  (valorQueQuerSacar > saldo) {
                    return "Saldo insuficiente para o saque.";
                } 
                
            
                    saldo -= valorQueQuerSacar;
                    return String.format("Saque de R$ %.2f realizado com sucesso. Novo saldo: R$ %.2f", valorQueQuerSacar, saldo);
            
            } // Fim saque

            public String depositar(double valor) { // depositar
                if (valor > 0) {
                    throw new IllegalArgumentException("O valor do depósito deve ser maior que zero.");
                }
                saldo += valor;
                 return String.format("Depósito de R$ %.2f realizado com sucesso. Novo saldo: R$ %.2f", valor, saldo);
            } // Fim depositar
        
        } // Fim classe ContaBancaria

    