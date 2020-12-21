let canal: string = 'Gaveta'
let inscritos: number = 610234

// canal = inscritos
console.log(`Canal = ${canal}`)

function soma(a: any, b: any) {
    return a + b
}

let qualquerCoisa
qualquerCoisa = 12
qualquerCoisa = 'abc'

function saudar(isManha: boolean): string {
    let saudacao: string
    if(isManha) {
        saudacao = 'Bom dia!'
    } else {
        saudacao = 'Tenha uma boa vida!'
    }
    return saudacao
}

// https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

// https://www.typescriptlang.org/docs/handbook/compiler-options.html