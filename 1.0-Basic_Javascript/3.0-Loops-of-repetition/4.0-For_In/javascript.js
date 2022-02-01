const pessoa = {
  nome: "Ana",
  idade: 15,
  sexo: "F",
  cidade: "São Paulo",
};

for (let att in pessoa) {
  console.log(`O atributo é ${att} e o valor é ${pessoa[att]}`);
}
