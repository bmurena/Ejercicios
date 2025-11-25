class CuentaBancaria {
  private saldo: number;
// constructor que inicializa el saldo de la cuenta
  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }
// Método para depositar dinero en la cuenta
  depositar(monto: number): void {
    if (monto > 0) {
      this.saldo += monto;
      console.log(`Depósito realizado: $${monto}`);
    } else {
      console.log("El monto debe ser positivo.");
    }
  }
// Método para mostrar el saldo actual
  mostrarSaldo(): void {
    console.log(`Saldo actual: $${this.saldo}`);
  }
}

// Ejemplo de uso
const cuenta = new CuentaBancaria(100);
cuenta.mostrarSaldo();     
cuenta.depositar(50);      
cuenta.mostrarSaldo();     
