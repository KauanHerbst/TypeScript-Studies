export class Empresa {
  public readonly nome: string;
  private readonly funcionarios: Funcionario[] = [];
  private _cnpj: string;
  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this._cnpj = cnpj;
  }

  public adicionarFuncionario(funcionario: Funcionario): void {
    this.funcionarios.push(funcionario);
  }
  public removerFuncionario(indexFuncionario: number): void {
    this.funcionarios.splice(indexFuncionario, 1);
  }
  public mostrarFuncionarios(): void {
    for (const funcionario of this.funcionarios) {
      console.log(funcionario);
    }
  }

  get cnpj(): string {
    return this._cnpj;
  }

  set cnpj(cnpj: string) {
    this._cnpj = cnpj;
  }
}

export class Funcionario {
  constructor(
    public readonly nome: string,
    public readonly idade: number,
    public readonly cpf?: string,
  ) {}
}

const empresa1 = new Empresa('Empresa 1', '0220320/123-2');
const funcionario1 = new Funcionario('Funcionario 1', 20, '0293132910');
const funcionario2 = new Funcionario('Funcionario 2', 50);
const funcionario3 = new Funcionario('Funcionario 3', 38, '6152132910');
console.log(empresa1);
empresa1.adicionarFuncionario(funcionario1);
empresa1.adicionarFuncionario(funcionario2);
empresa1.adicionarFuncionario(funcionario3);
empresa1.mostrarFuncionarios();
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
empresa1.removerFuncionario(1);
empresa1.mostrarFuncionarios();

export abstract class Pessoa {
  constructor(
    protected _nome: string,
    protected _idade: number,
  ) {}

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  get idade(): number {
    return this._idade;
  }

  set idade(idade: number) {
    this._idade = idade;
  }
}

export class PessoaCPF extends Pessoa {
  constructor(
    nome: string,
    idade: number,
    private _cpf: string,
  ) {
    super(nome, idade);
  }

  get cpf(): string {
    return this._cpf;
  }

  set cpf(cpf: string){
    this._cpf = cpf;
  }
}

export class PessoaPJ extends Pessoa {
    constructor(
      nome: string,
      idade: number,
      private _pj: string,
    ) {
      super(nome, idade);
    }

    get pj(): string {
      return this._pj;
    }

    set pj(pj: string){
      this._pj = pj;
    }
  }
