const xl = require("excel4node");
const wb = new xl.Workbook();
const ws = wb.addWorksheet("Worksheet Name");
var url = "https://api.github.com/users";
x = 0;
list = [];

fetch(`${url}`).then(response => response.json()).then(data => {
  for (element in data) {
    itemList = {
      login: data[x].login,
      id: JSON.stringify(data[x].id),
      urlDoPerfil: JSON.stringify(data[x].html_url)
    };
    list.push(itemList);
    x++;
  };

  const headingColumnNames = [
    "Login",
    "Id",
    "URL do Perfil"
  ];

  let headingColumnIndex = 1; //diz que começará na primeira linha
  headingColumnNames.forEach((heading) => {
    //passa por todos itens do array
    // cria uma célula do tipo string para cada título
    ws.cell(1, headingColumnIndex++).string(heading);
  });

  let rowIndex = 2;
  list.forEach((record) => {
    let columnIndex = 1;
    Object.keys(record).forEach((columnName) => {
      ws.cell(rowIndex, columnIndex++).string(record[columnName]);
    });
    rowIndex++;
  });

  wb.write("APIGithubResults.xlsx");
});