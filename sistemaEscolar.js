const NOMESISTEMAESCOLAR = "*** SISTEMA CRISTIANE LUIZ***";
console.log(NOMESISTEMAESCOLAR);

const alunosDaEscola= [
    {
      nome:"Henrique",
      notas:[],
      cursos:[],
      faltas:5
    },
    {
      nome:"Edson",
      notas:[],
      cursos:[],
      faltas:2
    },
    {
      nome:"Bruno",
      notas:[10,9.8,9.6],
      cursos:[],
      faltas:0
    },
    {
      nome:"Guilherme",
      notas:[10,9.8,9.6],
      cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],
      faltas:0
    },
    {
      nome:"Carlos",
      notas:[],
      cursos:[],
      faltas:0
    },
    {
      nome:"Lucca",
      notas:[10,9.8,9.6],
      cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],
      faltas:0
    }
];

function adicionarAluno (nome) {
  alunosDaEscola.push({
      nome: "nome",
      notas: [],
      cursos: [],
      faltas: 0
  });
  console.log(` ${nome} adicionado a lista!`);
};
console.log(adicionarAluno('Miguel',2,'Android',5));

function listarAlunos(){
  for (let alunos of alunosDaEscola) {
      console.log(`
    Nome: ${alunos.nome}
    Notas: ${alunos.notas}
    Faltas: ${alunos.faltas}`);
      for (let cursos of alunos.cursos) {
        console.log(`    Cursos: ${cursos.nomeDoCurso}     `);
      }        
  }
};

function buscarAluno (nomeAluno) {
    let alunoAtivo = alunosDaEscola.filter(aluno => aluno.nome == nomeAluno);

    if(alunoAtivo.length > 0) {
        console.log(`Aluno ativo no sistema : ${nomeAluno}`);
    }
    else {
        console.log(`Aluno não encontrado no sistema!`);
    }
};

function matricularAluno (novoAluno, curso){
    alunosDaEscola.filter((aluno) => {
        if (aluno.nome == novoAluno) {
            aluno.cursos.push({nomeDoCurso: curso, dataMatricula: new Date});
            console.log(`O aluno ${novoAluno} foi matriculado no curso ${curso}!`);
        }
    });
};
console.log (matricularAluno [{nome: 'Miguel',notas: 2,cursos: 'Android', faltas:5}]);


function aplicarFalta(alunoAusente){
    for (let i = 0; i < alunosDaEscola.length; i++) {
      if (alunosDaEscola[i].nome == alunoAusente && alunosDaEscola[i].cursos.length > 0) {
        let numFaltas = alunosDaEscola[i].faltas + 1;
        console.log(`Foram adicionadas ${numFaltas} faltas ao aluno ${alunoAusente}`);
      }
    }
};
console.log(aplicarFalta({nome:"Henrique",notas:[],cursos:[],faltas:[2]}));

function aplicarNota (alunos) {
    for (let i = 0; i < alunosDaEscola.length; i++) {
      if (alunosDaEscola[i].nome == alunos && alunosDaEscola[i].cursos.length > 0) {
        alunosDaEscola[i].notas.push(nota);
        console.log(`Nota ${nota} aplicada ao aluno ${alunos}`);
     
    }
    }
};

function aprovarAluno (aluno) {
    for (let i = 0; i < alunosDaEscola.length; i++) {
      if (alunosDaEscola[i].nome == aluno && alunosDaEscola[i].cursos.length > 0) {
        let soma = alunosDaEscola[i].notas.reduce((acumulado, valorNota) => acumulado + valorNota);
        let numeroFaltas = alunosDaEscola[i].faltas;
        let media = soma / alunosDaEscola[i].notas.length;
        if (media >= 7 && numeroFaltas <= 3) {
          console.log(`O aluno ${aluno} foi aprovado!!`);
        }
        else {
          console.log("Aluno reprovado");
        } 
      }
    }
};
console.log(adicionarAluno('Miguel', 2,'Android', 5));
console.log(listarAlunos());
console.log(buscarAluno('Guilherme'));
console.log(matricularAluno('Carlos', "Android"));
console.log(aplicarFalta({nome:"Edson",notas:[],cursos:[],faltas:6}));
console.log(aplicarFalta("Edson"));
console.log(aplicarNota("Lucca", 5));
