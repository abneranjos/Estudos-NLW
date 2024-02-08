const perguntas = [
    { 
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Compara valores e tipos de dados sem fazer coerção",
        "Realiza uma comparação apenas de valores, ignorando os tipos",
        "Realiza uma comparação somente de tipos, ignorando os valores"
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Data Object Model",
        "Document Object Model",
        "Dynamic Object Model"
      ],
      correta: 1
    },
    {
      pergunta: "Como você declara uma variável em JavaScript?",
      respostas: [
        "let myVar;",
        "variable myVar;",
        "var myVar;"
      ],
      correta: 0
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de dado que representa um único valor",
        "Um conjunto ordenado de valores, acessados por índices",
        "Um objeto que armazena propriedades e métodos"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'querySelector'?",
      respostas: [
        "Selecionar elementos por classe",
        "Selecionar elementos por ID",
        "Selecionar elementos por tag name"
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Uma expressão regular",
        "Um bloco de código reutilizável que pode ser chamado por nome",
        "Um tipo de dado que representa ações ou eventos"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "let é usado para variáveis mutáveis, const para variáveis imutáveis",
        "const é usado para variáveis mutáveis, let para variáveis imutáveis",
        "Não há diferença, ambos são usados para declarar variáveis"
      ],
      correta: 0
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "Um erro durante a execução do código",
        "O processo de mover declarações para o topo do escopo",
        "Um padrão de design para organizar código"
      ],
      correta: 1
    },
    {
      pergunta: "Como você comenta uma linha de código em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "<!-- Comentário -->"
      ],
      correta: 0
    },
    {
      pergunta: "O que é o evento 'click' em JavaScript?",
      respostas: [
        "Um evento relacionado ao teclado",
        "Um evento relacionado ao mouse",
        "Um evento relacionado à entrada de dados"
      ],
      correta: 1
    }
  ];
  //pesquisa no html os itens e transforma em conteudo JS.
    const quiz = document.querySelector('#quiz')
    const template = document.querySelector('template')
  
    const corretas = new Set() 
    const totalDePerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
    //loop ou laço de repetição
    for(const item of perguntas) { 
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) { 
    const dt = quizItem.querySelector ('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta 
    dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event)=> {
     const estaCorreta = event.target.value == item.correta
     
     corretas.delete(item)
     if(estaCorreta) {
       corretas.add(item)
     }
  
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
    }
  
  
    quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
    // coloca as perguntas na tela 
    quiz.appendChild(quizItem)
    }
  
  