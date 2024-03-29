/*Exercício 01

## Sistema de correção de provas

Nesse exercício vamos simular um sistema de correção de provas e imprimir a quantidade de acertos com a nota do aluno.

**a)** Declare uma função de nome `corrigirProva` que tenha apenas um parâmetro chamado `prova`. Faça commit do resultado.

**b)** Sabendo que o parâmetro `prova` será sempre um objeto com o seguinte formato:*/

function corrigirProva(prova, valor) {
    let acerto = 0;
    let errado = 0;
    for (let correcao of prova) {
        if (correcao.resposta == correcao.correta) {
            acerto++;
        } else if (correcao.resposta != correcao.correta) {
            errado++;
        }
    }
    return `O aluno(a) João acertou ${acerto} questões e obteve nota ${(valor / prova.length) * acerto}`;
};
const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};
console.log(corrigirProva(prova.questoes, prova.valor));
/*Implemente a função `corrigirProva` de modo que, ao receber um objeto como este como parâmetro, o resultado seja o seguinte.

```
O aluno(a) João acertou 3 questões e obteve nota 6
```

Para testar sua implementação, chame a função `corrigirProva` passando o objeto `prova` exemplificado acima como argumento.*/