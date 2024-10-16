import { Component } from '@angular/core';

@Component({
  selector: 'app-recursividade',
  templateUrl: './recursividade.component.html',
  styleUrls: ['./recursividade.component.css']
})
export class RecursividadeComponent {
  numFatorial: number = 0;
  numFibonacci: number = 0;
  numProduto1: number = 0;
  numProduto2: number = 0;
  numSoma: number = 0;
  resultado: string = '';
  private fibonacciMemo: { [key: number]: number } = {};

  // Fatorial
  fatorial(n: number): bigint {
    if (n < 0) throw new Error('Número negativo não permitido');
    if (n === 0 || n === 1) return BigInt(1);

    let result: bigint = BigInt(1);
    for (let i = 2; i <= n; i++) {
      result *= BigInt(i);
    }
    return result;
  }

  // Fibonacci
  fibonacci(n: number): number {
    if (n < 0) throw new Error('Número negativo não permitido');
    if (n in this.fibonacciMemo) return this.fibonacciMemo[n];
    if (n <= 1) return n;

    this.fibonacciMemo[n] = this.fibonacci(n - 1) + this.fibonacci(n - 2);
    return this.fibonacciMemo[n];
  }

  // Produto
  produto(a: number, b: number): number {
    if (b < 0) throw new Error('Número negativo não permitido');
    if (b === 0) return 0;
    return a + this.produto(a, b - 1);
  }

  // Soma Recursiva
  somaRecursiva(n: number): number {
    if (n < 0) throw new Error('Número negativo não permitido');
    if (n <= 0) return 0;
    return n + this.somaRecursiva(n - 1);
  }

  // Função de Cálculo
  calcular(tipo: string, num1: number, num2?: number) {
    try {
      switch (tipo) {
        case 'fatorial':
          this.resultado = `Fatorial de ${num1} é ${this.fatorial(num1).toString()}`;
          break;
        case 'fibonacci':
          this.resultado = `Fibonacci de ${num1} é ${this.fibonacci(num1)}`;
          break;
        case 'produto':
          this.resultado = `Produto de ${num1} e ${num2} é ${this.produto(num1, num2!)}`;
          break;
        case 'soma':
          this.resultado = `Soma de 1 a ${num1} é ${this.somaRecursiva(num1)}`;
          break;
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.resultado = error.message;
      } else {
        this.resultado = 'Ocorreu um erro inesperado.';
      }
    }
  }
}

