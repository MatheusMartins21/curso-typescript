// String
let nome: string = "João"
console.log(nome)

// Numbers
let idade: number = 27
idade = 27.5
console.log(idade)

// Boolean
let possuiHobbies: boolean = false
console.log(possuiHobbies)

// Tipos Explícitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)

// Array

let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
console.log(hobbies)

// Tuplas
let endereco: [string, number, string] = ["Av Principal", 99, ""]
console.log(endereco)

endereco = ["Rua Importante", 1260, "Bloco C"]
console.log(endereco)

// Enums
enum Cor {
    Cinza, // 0
    Verde = 100, // 100
    Azul = 2, // 2
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor : Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

// Any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)

// Funções
function retornaMeuNome(): string {
    return nome
}

console.log(retornaMeuNome())

function digaOi(): void {
    console.log('Oi')
}

digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

console.log(multiplicar(4, 9))

// Tipo Função
let calculo: (x: number, y: number) => number

calculo = multiplicar
console.log(calculo(5, 6))

// Objetos
let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 27
}

console.log(usuario)


// Desafio
/*
    Criar um objeto funcionário com:
    - Array de strings com os nomes dos supervisores
    - Função de bater ponto que recebe a hora (número)
        e retorna uma string
        -> Ponto normal (<= 8)
        -> Fora do horário (> 8)
*/

// Minha resposta
// let funcionario: { nome: string[], baterPonto: any } = {
//     nome: ['Supervisor1', 'Supervisor2'],
//     baterPonto (hora: number): string {
//         if(hora <= 8) {
//             return 'Ponto normal'
//         } else {
//             return 'Fora do horário'
//         }
//     }
// }
// console.log(funcionario)

// Correção

let funcionario: {
    supervisores: string[],
    baterPonto: (horas: number) => string
} = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario: number): string {
        if(horario <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário!'
        }
    }
}
console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))

// Alias
type Funcionario2 = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionario2: Funcionario2 = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto(horario: number): string {
        if(horario <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário!'
        }
    }
}
console.log(funcionario2.supervisores)
console.log(funcionario2.baterPonto(8))
console.log(funcionario2.baterPonto(9))

// Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)

// Checando tipos
let valor = 30

if(typeof valor === "number") {
    console.log("É um valor number!")
} else {
    console.log(typeof valor)
}

// Never
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto() {
        if(!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome')
        }
        if(this.preco <= 0) {
            falha('Preco inválido!')
        }
    }
}

produto.validarProduto()

// Valores opcionais com tipo "Null"
let altura = 12
// altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '12341234',
    tel2: null,
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeSerNulo = null // any
podeSerNulo = 12
podeSerNulo = 'abc'

// Desafio - Transformar Código JS em TS
// let contaBancaria = {
//     saldo: 3456,
//     depositar(valor) {
//         this.saldo += valor
//     }
// }
 
// let correntista = {
//     nome: 'Ana Silva',
//     contaBancaria: contaBancaria,
//     contatos: ['34567890', '98765432']
// }
 
// correntista.contaBancaria.depositar(3000)
// console.log(correntista)

// Resposta
type contaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

type correntista = {
    nome: string,
    contaBancaria: contaBancaria,
    contatos: string[]
}

let contaBancaria: contaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}
 
let correntista: correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)

