const root = document.querySelector("#root")

/* função assincrona responsavel por ler o 
   arquivo e extrair seu conteudo*/
 async function readFile(file){
  //  faz uma requisição via fect (XMLHttpRequest)
  const dataCsvRequest = await fetch(file)
  //retorna apenas o texto (gera uma promise)
  .then( response => response.text());
  // armazena o dado quando a promise e resolvida ( resolve a promise anterior)
  const dataCsv = await dataCsvRequest
  // chama a função responsavel por tratar os dados
  dataProcessing(dataCsv)
}

async function dataProcessing(cvsRough){
  const data = await cvsRough.split(/\r?\n|\r/);
  renderTable(data)
}

function renderTable(data){
  var HeaderTable;
  var bodyTable = "";
  for(let i = 0; i< data.length; i++){
    let rows = data[i].split(",")

    bodyTable += "<tr>"
    for(let i = 0; i < rows.length; i++){
      bodyTable += `<td>${rows[i]}</td>` 
    }
    bodyTable += "</tr>"
 
  }
  console.log(bodyTable)
  root.innerHTML = `<table> ${bodyTable} </table`;
}

readFile("./pl.csv")