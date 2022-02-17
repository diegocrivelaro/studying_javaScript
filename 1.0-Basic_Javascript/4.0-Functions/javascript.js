const client = {
  name: "Diego",
  cpf: "123.456.789-10",
  telephone: "(11) 99999-9999",
  address: {
    city: "Balneário Camboriú",
    state: "SC",
  },
};

/* Standard */
function y() {
  console.log("Standard: ", client.name, client.cpf, client.address.city);
}

/* Destructuring */
function x({ name, cpf, address: { city } }) {
  console.log("Destructuring: ", name, cpf, city);
}

y(client);
x(client);
