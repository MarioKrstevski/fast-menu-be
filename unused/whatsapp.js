// import whatsAppClient from "@green-api/whatsapp-api-client";

import whatsAppClient from "@green-api/whatsapp-api-client";

const API_TOKEN_INSTANCE =
  "dc3b3d5c9582485596c37c66bb1fdb324ab3a9ee475e48d99f";
const ID_INSTANCE = "7103872930";

const restAPI = whatsAppClient.restAPI({
  idInstance: ID_INSTANCE,
  apiTokenInstance: API_TOKEN_INSTANCE,
});
const order = `Hello Cakery I would like to make an order

My name is Mario. I live on Partizanska and I will pay in cash.

----
1 x espresso: 60 den
2 x makijato: 160 den
1 x caj od nane: 60 den
----
Subtotal: 280 den
Delivery: 100 den
Total: 380 den 
----
Deliver Address: Partizanska 33
----

Contact details:
Name: Mario
Number: 432942348


---`;

const sienje = `
3 x bluze
2 x majce 
---
Cena: 300den
Ime: Marta
---
`;

const order123 = `
3 x bluze
2 x majce 
---
Cena: 300den
Ime: Marta
---
`;
restAPI.message
  .sendMessage("38977766669@c.us", null, sienje)
  .then((data) => {
    console.log(data);
    console.log("success");
  });
