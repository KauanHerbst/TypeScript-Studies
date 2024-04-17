function sum(x: number, y: number) {
  return x + y;
}

console.log(sum(1, 5));

const objeto: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Matheus',
  idade: 19,
  adulto: true,
};

console.log(objeto.nome);
console.log(objeto.adulto);

const arrayDeNumeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arrayDeNumeros.map((numb) => console.log(numb + 5));

const arrayDeString: string[] = ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4'];
console.log(arrayDeString.length > 2);

enum Colors {
  Blue = 0,
  Red = 1,
}

function changeColor(colorIndex: number): string {
  return Colors[colorIndex];
}

const color = changeColor(0);
console.log(color);

type Carro = {
  readonly cor: Colors;
  readonly modelo: string;
  readonly placa: string;
  readonly motor: string;
  velocidadeMaxima?: number;
  velocidadeMinima?: number;
};

const carro_um: Carro = {
  cor: Colors.Blue,
  modelo: 'Fiat Uno',
  placa: 'AEVII21',
  motor: 'V8',
};

console.log(carro_um);

carro_um.velocidadeMaxima = 300;
carro_um.velocidadeMinima = 10;

console.log(carro_um);
