import fs from "fs";
import Papa from "papaparse";

function arrayToCsv(dataArray, filePath) {
  if (dataArray.length === 0) {
    console.error("Array is empty. Cannot generate CSV.");
    return;
  }

  // Extract column headers from the keys of the first object in the array
  const columnHeaders = Object.keys(dataArray[0]);

  // Convert array of objects to CSV string, including column headers as the first line
  const csvString = Papa.unparse({
    fields: columnHeaders,
    data: dataArray,
  });

  // Write the CSV string to a file
  fs.writeFileSync(filePath, csvString, "utf-8");

  console.log(`CSV file saved to: ${filePath}`);
}

// Example usage
const data = [
  { Name: "John", Age: 30, City: "New York" },
  { Name: "Jane", Age: 25, City: "San Francisco" },
  // Add more objects as needed
];

const camahuer = [
  {
    Nombre: "Spaguetti - Con camarón",
    Descripción: "",
    Categoría: "Favoritos 🤩",
    Precio: "$110.00",
    Chico: "",
    Mediano: "",
    Grande: "",
    "Surtido Chico": "",
    "Surtido Grande": "",
    Imagen:
      "https://drive.google.com/file/d/1apmhksRYQfPmGLvhQFWHn_Z7Bcv78pVM/view?usp=sharing",
    id: 1,
    slug: "1",
  },
  {
    Nombre: "Marinero",
    Descripción: "",
    Categoría: "Favoritos 🤩",
    Precio: "$160.00",
    Chico: "",
    Mediano: "",
    Grande: "",
    "Surtido Chico": "",
    "Surtido Grande": "",
    Imagen:
      "https://drive.google.com/file/d/1Ckq820WROAxftckC9MR9EvaS7Z3hLU9I/view?usp=sharing",
    id: 2,
    slug: "2",
  },
  {
    Nombre: "Chocolate",
    Descripción: "",
    Categoría: "Favoritos 🤩",
    Precio: "$30.00",
    Chico: "",
    Mediano: "",
    Grande: "",
    "Surtido Chico": "",
    "Surtido Grande": "",
    Imagen:
      "https://drive.google.com/file/d/1gCE_-pXJ2AcEylBPzYtnreb04JH_eXHm/view?usp=sharing",
    id: 3,
    slug: "3",
  },
  {
    Nombre: "Pozole",
    Descripción: "",
    Categoría: "Favoritos 🤩",
    Precio: "",
    Chico: "$60.00",
    Mediano: "",
    Grande: "$70.00",
    "Surtido Chico": "$70.00",
    "Surtido Grande": "$80.00",
    Imagen:
      "https://drive.google.com/file/d/1PBrFwhU6sOk8_C7ItB7cfl4pvOJLDhFH/view?usp=sharing",
    id: 4,
    slug: "4",
  },
  {
    Nombre: "Chilaques gratinados con pollo o huevo",
    Descripción: "",
    Categoría: "Favoritos 🤩",
    Precio: "$90.00",
    Chico: "",
    Mediano: "",
    Grande: "",
    "Surtido Chico": "",
    "Surtido Grande": "",
    Imagen:
      "https://drive.google.com/file/d/1TAM7y7eY8ALlKnZk-GgveIP-eVNIJgkZ/view?usp=sharing",
    id: 5,
    slug: "5",
  },
  {
    Nombre: "Enfrijoladas pollo o panela c/3",
    Descripción: "",
    Categoría: "Favoritos 🤩",
    Precio: "$60.00",
    Chico: "",
    Mediano: "",
    Grande: "",
    "Surtido Chico": "",
    "Surtido Grande": "",
    Imagen:
      "https://drive.google.com/file/d/1w4_iAljWXLRjlCTNtzH5v_Uu6kR3wZ3M/view?usp=sharing",
    id: 6,
    slug: "6",
  },
  {
    Nombre: "Enchiladas",
    Descripción: "",
    Categoría: "Favoritos 🤩",
    Precio: "$18.00",
    Chico: "",
    Mediano: "",
    Grande: "",
    "Surtido Chico": "",
    "Surtido Grande": "",
    Imagen:
      "https://drive.google.com/file/d/1xJc85eQoWTxmhk-GcZBnO6kzPJiZ4Qjc/view?usp=sharing",
    id: 7,
    slug: "7",
  },
  {
    Nombre: "Panela con albahaca",
    Descripción: "",
    Categoría: "Entradas🍴",
    Precio: "$70.00",
    id: 8,
    slug: "8",
  },
  {
    Nombre: "Guacamole",
    Descripción: "",
    Categoría: "Entradas🍴",
    Precio: "$45.00",
    id: 9,
    slug: "9",
  },
  {
    Nombre: "Queso fundido",
    Descripción: "",
    Categoría: "Entradas🍴",
    Precio: "$80.00",
    id: 10,
    slug: "10",
  },
  {
    Nombre: "Queso fundido con carne",
    Descripción: "",
    Categoría: "Entradas🍴",
    Precio: "$95.00",
    id: 11,
    slug: "11",
  },
  {
    Nombre: "Carnes frías",
    Descripción: "",
    Categoría: "Entradas🍴",
    Precio: "$70.00",
    id: 12,
    slug: "12",
  },
  {
    Nombre: "Frijoles",
    Descripción: "",
    Categoría: "Entradas🍴",
    Precio: "$30.00",
    id: 13,
    slug: "13",
  },
  {
    Nombre: "Nachos",
    Descripción: "",
    Categoría: "Entradas🍴",
    Precio: "$60.00",
    id: 14,
    slug: "14",
  },
  {
    Nombre: "Nachos con carne",
    Descripción: "",
    Categoría: "Entradas🍴",
    Precio: "$85.00",
    id: 15,
    slug: "15",
  },
  {
    Nombre: "Orden de papas",
    Descripción: "",
    Categoría: "Entradas🍴",
    Precio: "$40.00",
    id: 16,
    slug: "16",
  },
  {
    Nombre: "Orden de panela",
    Descripción: "",
    Categoría: "Entradas🍴",
    Precio: "$35.00",
    id: 17,
    slug: "17",
  },
  {
    Nombre: "Jocoque",
    Descripción: "",
    Categoría: "Entradas🍴",
    Precio: "$50.00",
    id: 18,
    slug: "18",
  },
  {
    Nombre: "Desayuno Compostelence",
    Descripción: "Chilaquiles, guisado y huevo estrellado o revuelto",
    Categoría: "Desayunos 🍳",
    Precio: "$95.00",
    id: 19,
    slug: "19",
  },
  {
    Nombre: "Huevos - Revueltos o estrellados",
    Descripción: "",
    Categoría: "Desayunos 🍳",
    Precio: "$50.00",
    id: 20,
    slug: "20",
  },
  {
    Nombre: "Huevos - Al gusto",
    Descripción: "",
    Categoría: "Desayunos 🍳",
    Precio: "$65.00",
    id: 21,
    slug: "21",
  },
  {
    Nombre: "Huevos - Divorciados",
    Descripción: "",
    Categoría: "Desayunos 🍳",
    Precio: "$70.00",
    id: 22,
    slug: "22",
  },
  {
    Nombre: "Huevos dormidos",
    Descripción:
      "Huevos dentro de una tortilla frita, acompañado con una cama de frijoles y guisado a elegir",
    Categoría: "Desayunos 🍳",
    Precio: "$90.00",
    id: 23,
    slug: "23",
  },
  {
    Nombre: "Huevos - Omelette",
    Descripción:
      "Espicana, champiñon, tocino, jamón, chedar o panela",
    Categoría: "Desayunos 🍳",
    Precio: "$70.00",
    id: 24,
    slug: "24",
  },
  {
    Nombre: "Enfrijoladas pollo o panela c/3",
    Descripción: "",
    Categoría: "Desayunos 🍳",
    Precio: "$60.00",
    id: 25,
    slug: "25",
  },
  {
    Nombre: "Chilaquiles - Sencillos",
    Descripción: "",
    Categoría: "Desayunos 🍳",
    Precio: "$65.00",
    id: 26,
    slug: "26",
  },
  {
    Nombre: "Chilaquiles - Con huevo",
    Descripción: "",
    Categoría: "Desayunos 🍳",
    Precio: "$70.00",
    id: 27,
    slug: "27",
  },
  {
    Nombre: "Chilaquiles - Con pollo",
    Descripción: "",
    Categoría: "Desayunos 🍳",
    Precio: "$75.00",
    id: 28,
    slug: "28",
  },
  {
    Nombre: "Chilaquiles - Con sirlon",
    Descripción: "",
    Categoría: "Desayunos 🍳",
    Precio: "$100.00",
    id: 29,
    slug: "29",
  },
  {
    Nombre: "Chilaquiles - Con arrachera",
    Descripción: "",
    Categoría: "Desayunos 🍳",
    Precio: "$115.00",
    id: 30,
    slug: "30",
  },
  {
    Nombre: "Chilaquiles - Grat. con pollo o huevo",
    Descripción: "",
    Categoría: "Desayunos 🍳",
    Precio: "$90.00",
    id: 31,
    slug: "31",
  },
  {
    Nombre: "Chilaquiles - 1/2 chilaquiles con huevo",
    Descripción: "",
    Categoría: "Desayunos 🍳",
    Precio: "$60.00",
    id: 32,
    slug: "32",
  },
  {
    Nombre: "Molletes - Mantequilla",
    Descripción: "",
    Categoría: "Desayunos 🍳",
    Precio: "$30.00",
    id: 33,
    slug: "33",
  },
  {
    Nombre: "Molletes - Con queso y frijol",
    Descripción: "",
    Categoría: "Desayunos 🍳",
    Precio: "$60.00",
    id: 34,
    slug: "34",
  },
  {
    Nombre: "Molletes - Con asada, chorizo o champiñon",
    Descripción: "",
    Categoría: "Desayunos 🍳",
    Precio: "$70.00",
    id: 35,
    slug: "35",
  },
  {
    Nombre: "Molletes - Con tocino",
    Descripción: "",
    Categoría: "Desayunos 🍳",
    Precio: "$75.00",
    id: 36,
    slug: "36",
  },
  {
    Nombre: "Hotcakes - Secillo",
    Descripción: "",
    Categoría: "Desayunos 🍳",
    Precio: "$55.00",
    id: 37,
    slug: "37",
  },
  {
    Nombre: "Hotcakes - Con fruta",
    Descripción: "",
    Categoría: "Desayunos 🍳",
    Precio: "$75.00",
    id: 38,
    slug: "38",
  },
  {
    Nombre: "Pan Fracés - Sencillo",
    Descripción: "",
    Categoría: "Desayunos 🍳",
    Precio: "$35.00",
    id: 39,
    slug: "39",
  },
  {
    Nombre: "Pan Fracés - Con tocino",
    Descripción: "",
    Categoría: "Desayunos 🍳",
    Precio: "$50.00",
    id: 40,
    slug: "40",
  },
  {
    Nombre: "Compostela - Sirlon",
    Descripción:
      "Bisteck asado al carbón acompañado de 2 quesadillas de maíz, arroz y frijoles",
    Categoría: "Desayunos 🍳",
    Precio: "$145.00",
    id: 41,
    slug: "41",
  },
  {
    Nombre: "Compostela - Arrachera",
    Descripción:
      "Bisteck asado al carbón acompañado de 2 quesadillas de maíz, arroz y frijoles",
    Categoría: "Especiales ❤️",
    Precio: "$155.00",
    id: 42,
    slug: "42",
  },
  {
    Nombre: "Camahuer - Sirlon",
    Descripción:
      "Bisteck asado al carbón acompañado de 2 enchiladas a la mexicana,  ensalada fresca, papas fritas, arroz y frijoles",
    Categoría: "Especiales ❤️",
    Precio: "$150.00",
    id: 43,
    slug: "43",
  },
  {
    Nombre: "Camahuer - Arrachera",
    Descripción:
      "Bisteck asado al carbón acompañado de 2 enchiladas a la mexicana,  ensalada fresca, papas fritas, arroz y frijoles",
    Categoría: "Especiales ❤️",
    Precio: "$160.00",
    id: 44,
    slug: "44",
  },
  {
    Nombre: "Spaguetti - Con pollo",
    Descripción: "",
    Categoría: "Spaguetti 🍝",
    Precio: "$95.00",
    id: 45,
    slug: "45",
  },
  {
    Nombre: "Spaguetti - Champiñon y espinaca",
    Descripción: "",
    Categoría: "Spaguetti 🍝",
    Precio: "$90.00",
    id: 46,
    slug: "46",
  },
  {
    Nombre: "Ensalada - Pollo con crema",
    Descripción: "",
    Categoría: "Ensaladas 🥗",
    Precio: "$75.00",
    id: 47,
    slug: "47",
  },
  {
    Nombre: "Ensalada - Con pechuga",
    Descripción: "",
    Categoría: "Ensaladas 🥗",
    Precio: "$95.00",
    id: 48,
    slug: "48",
  },
  {
    Nombre: "Ensalada - Con aracherra",
    Descripción: "",
    Categoría: "Ensaladas 🥗",
    Precio: "$115.00",
    id: 49,
    slug: "49",
  },
  {
    Nombre: "Ensalada - Con camarón",
    Descripción: "",
    Categoría: "Ensaladas 🥗",
    Precio: "$120.00",
    id: 50,
    slug: "50",
  },
  {
    Nombre: "Ensalada - Salmón",
    Descripción: "",
    Categoría: "Ensaladas 🥗",
    Precio: "$140.00",
    id: 51,
    slug: "51",
  },
  {
    Nombre: "Sopes",
    Descripción: "",
    Categoría: "Antojitos mexicanos 🌮",
    Precio: "$18.00",
    id: 52,
    slug: "52",
  },
  {
    Nombre: "Tostadas ",
    Descripción: "",
    Categoría: "Antojitos mexicanos 🌮",
    Precio: "$20.00",
    id: 53,
    slug: "53",
  },
  {
    Nombre: "Tacos dorados",
    Descripción: "",
    Categoría: "Antojitos mexicanos 🌮",
    Precio: "$18.00",
    id: 54,
    slug: "54",
  },
  {
    Nombre: "Guisados",
    Descripción: "",
    Categoría: "Del día ☀️",
    Precio: "$80.00",
    id: 55,
    slug: "55",
  },
  {
    Nombre: "Corrida",
    Descripción: "Guisado, consomé o sopa y agua fresca",
    Categoría: "Del día ☀️",
    Precio: "$90.00",
    id: 56,
    slug: "56",
  },
  {
    Nombre: "Caldo de pollo",
    Descripción: "",
    Categoría: "Del día ☀️",
    Precio: "$65.00",
    id: 57,
    slug: "57",
  },
  {
    Nombre: "Consome",
    Descripción: "",
    Categoría: "Del día ☀️",
    Precio: "$30.00",
    id: 58,
    slug: "58",
  },
  {
    Nombre: "Sopa pasta",
    Descripción: "",
    Categoría: "Del día ☀️",
    Precio: "$30.00",
    id: 59,
    slug: "59",
  },
  {
    Nombre: "Milanesa de res o pollo",
    Descripción: "",
    Categoría: "Carnes y pollo 🍗",
    Precio: "$120.00",
    id: 60,
    slug: "60",
  },
  {
    Nombre: "Arrachera",
    Descripción: "",
    Categoría: "Carnes y pollo 🍗",
    Precio: "$140.00",
    id: 61,
    slug: "61",
  },
  {
    Nombre: "Sirlon",
    Descripción: "",
    Categoría: "Carnes y pollo 🍗",
    Precio: "$125.00",
    id: 62,
    slug: "62",
  },
  {
    Nombre: "Chuleta Ahumada",
    Descripción: "",
    Categoría: "Carnes y pollo 🍗",
    Precio: "$90.00",
    id: 63,
    slug: "63",
  },
  {
    Nombre: "Higado encebollado o a la mexicana",
    Descripción: "",
    Categoría: "Carnes y pollo 🍗",
    Precio: "$80.00",
    id: 64,
    slug: "64",
  },
  {
    Nombre: "Pollo dorado (1)",
    Descripción: "",
    Categoría: "Carnes y pollo 🍗",
    Precio: "$65.00",
    id: 65,
    slug: "65",
  },
  {
    Nombre: "Pollo dorado (2)",
    Descripción: "",
    Categoría: "Carnes y pollo 🍗",
    Precio: "$85.00",
    id: 66,
    slug: "66",
  },
  {
    Nombre: "Pechuga a la plancha",
    Descripción: "",
    Categoría: "Carnes y pollo 🍗",
    Precio: "$95.00",
    id: 67,
    slug: "67",
  },
  {
    Nombre: "Tostadas de camarón",
    Descripción: "",
    Categoría: "Mariscos 🍤",
    Precio: "$30.00",
    id: 68,
    slug: "68",
  },
  {
    Nombre: "Caldo de camarón",
    Descripción: "",
    Categoría: "Mariscos 🍤",
    Precio: "$115.00",
    id: 69,
    slug: "69",
  },
  {
    Nombre: "Camarones",
    Descripción:
      "Empanizados, a la diabla, al mojo de ajo, rancheros, aguachile, ceviche.",
    Categoría: "Mariscos 🍤",
    Precio: "$145.00",
    id: 70,
    slug: "70",
  },
  {
    Nombre: "Empanadas de camarón c/3",
    Descripción: "",
    Categoría: "Mariscos 🍤",
    Precio: "$90.00",
    id: 71,
    slug: "71",
  },
  {
    Nombre: "Filete de empanizado",
    Descripción: "",
    Categoría: "Pescado 🐟",
    Precio: "$120.00",
    id: 72,
    slug: "72",
  },
  {
    Nombre: "Pescado a la plancha",
    Descripción: "",
    Categoría: "Pescado 🐟",
    Precio: "$100.00",
    id: 73,
    slug: "73",
  },
  {
    Nombre: "Pescado al mojo",
    Descripción: "",
    Categoría: "Pescado 🐟",
    Precio: "$110.00",
    id: 74,
    slug: "74",
  },
  {
    Nombre: "Salmón a la veracruzana",
    Descripción: "",
    Categoría: "Pescado 🐟",
    Precio: "$165.00",
    id: 75,
    slug: "75",
  },
  {
    Nombre: "Salmón a la plancha",
    Descripción: "",
    Categoría: "Pescado 🐟",
    Precio: "$140.00",
    id: 76,
    slug: "76",
  },
  {
    Nombre: "Enchiladas Suizas ",
    Descripción: "",
    Categoría: "Especiales ✨",
    Precio: "$90.00",
    id: 77,
    slug: "77",
  },
  {
    Nombre: "Burritos",
    Descripción: "",
    Categoría: "Loncheria 🥪",
    Precio: "$18.00",
    id: 78,
    slug: "78",
  },
  {
    Nombre: "Pellizcadas antigua",
    Descripción: "Con mantequilla y queso seco",
    Categoría: "Loncheria 🥪",
    Precio: "$24.00",
    id: 79,
    slug: "79",
  },
  {
    Nombre: "Pellizcada",
    Descripción: "",
    Categoría: "Loncheria 🥪",
    Precio: "$28.00",
    id: 80,
    slug: "80",
  },
  {
    Nombre: "Pellizcadas con carne o chorizo",
    Descripción: "",
    Categoría: "Loncheria 🥪",
    Precio: "$34.00",
    id: 81,
    slug: "81",
  },
  {
    Nombre: "Quesadilla comal o dorada",
    Descripción: "",
    Categoría: "Loncheria 🥪",
    Precio: "$28.00",
    id: 82,
    slug: "82",
  },
  {
    Nombre: "Primo",
    Descripción: "Quesadilla con carne",
    Categoría: "Loncheria 🥪",
    Precio: "$32.00",
    id: 83,
    slug: "83",
  },
  {
    Nombre: "Volcán",
    Descripción:
      "Tortilla dorada a las brazas con queso y carne o chorizo",
    Categoría: "Loncheria 🥪",
    Precio: "$32.00",
    id: 84,
    slug: "84",
  },
  {
    Nombre: "Tacos de asada",
    Descripción: "",
    Categoría: "Loncheria 🥪",
    Precio: "$24.00",
    id: 85,
    slug: "85",
  },
  {
    Nombre: "Sincronizada",
    Descripción: "",
    Categoría: "Loncheria 🥪",
    Precio: "$45.00",
    id: 86,
    slug: "86",
  },
  {
    Nombre: "Hamburguesas - Res o pollo",
    Descripción: "",
    Categoría: "Loncheria 🥪",
    Precio: "$48.00",
    id: 87,
    slug: "87",
  },
  {
    Nombre: "Hamburguesas - Con papas",
    Descripción: "",
    Categoría: "Loncheria 🥪",
    Precio: "$60.00",
    id: 88,
    slug: "88",
  },
  {
    Nombre: "Hamburguesas - Camarón con papas",
    Descripción: "",
    Categoría: "Loncheria 🥪",
    Precio: "$70.00",
    id: 89,
    slug: "89",
  },
  {
    Nombre: "Sandwich - Sencillo",
    Descripción: "",
    Categoría: "Loncheria 🥪",
    Precio: "$30.00",
    id: 90,
    slug: "90",
  },
  {
    Nombre: "Sandwich - Especial",
    Descripción: "",
    Categoría: "Loncheria 🥪",
    Precio: "$35.00",
    id: 91,
    slug: "91",
  },
  {
    Nombre: "Torta - Sencilla",
    Descripción: "",
    Categoría: "Loncheria 🥪",
    Precio: "$37.00",
    id: 92,
    slug: "92",
  },
  {
    Nombre: "Torta - Especial",
    Descripción: "",
    Categoría: "Loncheria 🥪",
    Precio: "$42.00",
    id: 93,
    slug: "93",
  },
  {
    Nombre: "Torta Ahogada",
    Descripción: "",
    Categoría: "Loncheria 🥪",
    Precio: "$48.00",
    id: 94,
    slug: "94",
  },
  {
    Nombre: "Café o té",
    Descripción: "",
    Categoría: "Bebidas ☕️",
    Precio: "$25.00",
    id: 95,
    slug: "95",
  },
  {
    Nombre: "Chocolate",
    Descripción: "",
    Categoría: "Bebidas ☕️",
    Precio: "$30.00",
    id: 96,
    slug: "96",
  },
  {
    Nombre: "Tisana",
    Descripción: "",
    Categoría: "Bebidas ☕️",
    Precio: "$35.00",
    id: 97,
    slug: "97",
  },
  {
    Nombre: "Agua fresca",
    Descripción: "",
    Categoría: "Bebidas ☕️",
    Precio: "$24.00",
    id: 98,
    slug: "98",
  },
  {
    Nombre: "1/2 Jarra",
    Descripción: "",
    Categoría: "Bebidas ☕️",
    Precio: "$65.00",
    id: 99,
    slug: "99",
  },
  {
    Nombre: "Jarra",
    Descripción: "",
    Categoría: "Bebidas ☕️",
    Precio: "$85.00",
    id: 100,
    slug: "100",
  },
  {
    Nombre: "Limonada y naranjada",
    Descripción: "",
    Categoría: "Bebidas ☕️",
    Precio: "$38.00",
    id: 101,
    slug: "101",
  },
  {
    Nombre: "Vaso de leche",
    Descripción: "",
    Categoría: "Bebidas ☕️",
    Precio: "$18.00",
    id: 102,
    slug: "102",
  },
  {
    Nombre: "Jugo verde",
    Descripción: "",
    Categoría: "Bebidas ☕️",
    Precio: "$35.00",
    id: 103,
    slug: "103",
  },
  {
    Nombre: "Licuado",
    Descripción: "",
    Categoría: "Bebidas ☕️",
    Precio: "$38.00",
    id: 104,
    slug: "104",
  },
  {
    Nombre: "Limonjito",
    Descripción: "",
    Categoría: "Bebidas ☕️",
    Precio: "$40.00",
    id: 105,
    slug: "105",
  },
  {
    Nombre: "Refresco",
    Descripción: "",
    Categoría: "Bebidas ☕️",
    Precio: "$24.00",
    id: 106,
    slug: "106",
  },
  {
    Nombre: "Jugo de naraja",
    Descripción: "",
    Categoría: "Bebidas ☕️",
    Precio: "",
    Chico: "$24.00",
    Mediano: "$32.00",
    Grande: "$38.00",
    id: 107,
    slug: "107",
  },
  {
    Nombre: "Chocomilk",
    Descripción: "",
    Categoría: "Bebidas ☕️",
    Precio: "",
    Chico: "$24.00",
    Mediano: "$28.00",
    Grande: "$32.00",
    id: 108,
    slug: "108",
  },
  {
    Nombre: "Malteada",
    Descripción: "Chocolate, Fresa o Vainilla",
    Categoría: "Bebidas ☕️",
    Precio: "",
    Chico: "",
    Mediano: "$40.00",
    Grande: "$50.00",
    id: 109,
    slug: "109",
  },
  {
    Nombre: "Malteada de Oreo",
    Descripción: "",
    Categoría: "Bebidas ☕️",
    Precio: "",
    Chico: "",
    Mediano: "$45.00",
    Grande: "$55.00",
    id: 110,
    slug: "110",
  },
  {
    Nombre: "Chocoflan",
    Descripción: "",
    Categoría: "Postres 🥧",
    Precio: "$38.00",
    id: 111,
    slug: "111",
  },
  {
    Nombre: "Flan",
    Descripción: "",
    Categoría: "Postres 🥧",
    Precio: "$38.00",
    id: 112,
    slug: "112",
  },
  {
    Nombre: "Helado frito",
    Descripción: "",
    Categoría: "Postres 🥧",
    Precio: "$45.00",
    id: 113,
    slug: "113",
  },
  {
    Nombre: "Pay",
    Descripción: "Pregunte por sabores disponibles",
    Categoría: "Postres 🥧",
    Precio: "$38.00",
    id: 114,
    slug: "114",
  },
  {
    Nombre: "Nieve",
    Descripción: "",
    Categoría: "Postres 🥧",
    Precio: "",
    Chico: "$24.00",
    Mediano: "$40.00",
    Grande: "$58.00",
    id: 115,
    slug: "115",
  },
];

const verdemio = [
  {
    Nombre: "Pink Velvet",
    Descripción:
      "Fresas, yogurt griego, leche de coco, dátil, HEMP y\nvainilla",
    Categoría: "Smoothies 🥤",
    Precio: "$92.00",
    Imagen:
      "https://drive.google.com/file/d/1IQGiNG6IyWhUEI9T-J68BO5VyDkPOgHV/view?usp=sharing",
    id: 1,
    slug: "1",
  },
  {
    Nombre: "Caramel Mazapán",
    Descripción:
      "Plátano, mazapán casero, crema de cacahueta, leche de almendrás, vainilla y caramelo de dátil",
    Categoría: "Smoothies 🥤",
    Precio: "$85.00",
    Imagen:
      "https://drive.google.com/file/d/1-Ui6jBErM9BcDR_O6s9MZSjbGo826P1R/view?usp=sharing",
    id: 2,
    slug: "2",
  },
  {
    Nombre: "Crunchy Monkey",
    Descripción:
      "Plátano, leche de coco, cacao, crema de cacahueta, cacao nibs y proteina vegana",
    Categoría: "Smoothies 🥤",
    Precio: "$85.00",
    Imagen:
      "https://drive.google.com/file/d/17_1wN4qaQmp1kt0AABuAdn5JoNocHXl1/view?usp=sharing",
    id: 3,
    slug: "3",
  },
  {
    Nombre: "Acai Boost",
    Descripción:
      "Acai orgánico, berries, plátano, leche de almendras, nuez de castilla, polen natural (Opcional)",
    Categoría: "Smoothies 🥤",
    Precio: "$95.00",
    Imagen:
      "https://drive.google.com/file/d/1jzpqyQTIba__mMNGXcdIz7SlwFXZM2dh/view?usp=sharing",
    id: 4,
    slug: "4",
  },
  {
    Nombre: "Tropical Vibes",
    Descripción:
      "Naranja, piña, mango, plátano, coconut flakes (coco deshidratado) y agua de coco",
    Categoría: "Smoothies 🥤",
    Precio: "$80.00",
    Imagen:
      "https://drive.google.com/file/d/1BGVjqytEB5MSJSDNMpWPbI2JHsdRC4JR/view?usp=sharing",
    id: 5,
    slug: "5",
  },
  {
    Nombre: "California Love",
    Descripción:
      "Plátano, leche de almendras, vainilla, canela, maca y dátil",
    Categoría: "Smoothies 🥤",
    Precio: "$80.00",
    Imagen:
      "https://drive.google.com/file/d/1ec530Xv0NZOMa8csGUDkejD2G8Lk4UCl/view?usp=sharing",
    id: 6,
    slug: "6",
  },
  {
    Nombre: "Green Hulk",
    Descripción:
      "Apio, jengibrem espinaca, manzana verde, piña agua de coco y chía (Match + $15.00 MXN)",
    Categoría: "Smoothies 🥤",
    Precio: "$85.00",
    Imagen:
      "https://drive.google.com/file/d/1wLqE8-iSCP9-ojkPoqDh-U1Mj7M7r_8v/view?usp=sharing",
    id: 7,
    slug: "7",
  },
  {
    Nombre: "Aloha",
    Descripción: "Fresa, piña, plátano, coco y agua de coco",
    Categoría: "Smoothies 🥤",
    Precio: "$85.00",
    Imagen:
      "https://drive.google.com/file/d/1Qb4Gw0h_H-k2SRLbs4HX3UhQAavddn-j/view?usp=sharing",
    id: 8,
    slug: "8",
  },
  {
    Nombre: "Holly Matcha",
    Descripción:
      "Plátano, espinaca, matcha, leche de almendras y Stevia",
    Categoría: "Smoothies 🥤",
    Precio: "$85.00",
    Imagen:
      "https://drive.google.com/file/d/1LpE_XaSY9nvs87YoweKooN_DqWo98o4y/view?usp=sharing",
    id: 9,
    slug: "9",
  },
  {
    Nombre: "Golden Milk",
    Descripción:
      "Plátano, leche de almendras, jengibre, cúrcuma, crema de almendras y proteína vegana",
    Categoría: "Smoothies 🥤",
    Precio: "$85.00",
    Imagen:
      "https://drive.google.com/file/d/13d98DmnEKFbi42OCn4BROxo2EBSqG46i/view?usp=sharing",
    id: 10,
    slug: "10",
  },
  {
    Nombre: "Pink flamingo",
    Descripción:
      "Piña, platano, pitaya, leche de coco, mango y miel de agave",
    Categoría: "Smoothies 🥤",
    Precio: "$90.00",
    id: 11,
    slug: "11",
  },
  {
    Nombre: "cookies & cream",
    Descripción: "Cacao nibs, platano, vainilla. leche de almendras",
    Categoría: "Smoothies 🥤",
    Precio: "$85.00",
    id: 12,
    slug: "12",
  },
  {
    Nombre: "sascha reese´s",
    Descripción:
      "Cacao en polvo, vainilla, proteína Sascha fitness, leche de almendras, mazapan , cacao nibs y stevia",
    Categoría: "Smoothies 🥤",
    Precio: "$100.00",
    id: 13,
    slug: "13",
  },
  {
    Nombre: "withe chocolate",
    Descripción:
      "Smoothie de chocolate blanco agrégale crema de avellana por $ 15 pesos",
    Categoría: "Smoothies 🥤",
    Precio: "$80.00",
    id: 14,
    slug: "14",
  },
  {
    Nombre: "vainilla latte",
    Descripción: "Rico Smoothie latte de vainilla",
    Categoría: "Smoothies 🥤",
    Precio: "$80.00",
    id: 15,
    slug: "15",
  },
  {
    Nombre: "tapioca taro",
    Descripción: "Smoothie a base de taro",
    Categoría: "Smoothies 🥤",
    Precio: "$80.00",
    id: 16,
    slug: "16",
  },
  {
    Nombre: "Toddler",
    Descripción: "Fresa, plátano, cacao, leche de coco, cacao nibs",
    Categoría: "Smoothies 🥤",
    Precio: "$68.00",
    Imagen:
      "https://drive.google.com/file/d/1NU50ldZQH5pVCH26OwXHADEgD5Y-TomB/view?usp=sharing",
    id: 17,
    slug: "17",
  },
  {
    Nombre: "Crazy Mango",
    Descripción:
      "Mango, piña, limón, sal del himalaya, agua de coco, chamoy de jamaica y tamarindo sin azúcar",
    Categoría: "Smoothies 🥤",
    Precio: "$85.00",
    Imagen:
      "https://drive.google.com/file/d/1Khuc3tZPoYcKWrjO2DvE5is6WjIS62_p/view?usp=sharing",
    id: 18,
    slug: "18",
  },
  {
    Nombre: "Berry Keto",
    Descripción:
      "Berries, fresas, leche de coco, coconut flakes, Stevia, maca",
    Categoría: "Smoothies 🥤",
    Precio: "$105.00",
    id: 19,
    slug: "19",
  },
  {
    Nombre: "Dark Coconut",
    Descripción:
      "Plátano, coconut flakes, leche de coco, cacao nibs, vainilla y carbón activado",
    Categoría: "Smoothies 🥤",
    Precio: "$80.00",
    id: 20,
    slug: "20",
  },
  {
    Nombre: "Detox",
    Descripción:
      "Berries, plátanos, espinaca, fresas, avena, linaza, leche de almendras, proteína, vegana y vainilla",
    Categoría: "Smoothies 🥤",
    Precio: "$100.00",
    id: 21,
    slug: "21",
  },
  {
    Nombre: "Wake Me Up",
    Descripción:
      "Plátano, maca, crema de almendras, leche de almendras, vainilla y proteina vegana ",
    Categoría: "Smoothies 🥤",
    Precio: "$85.00",
    id: 22,
    slug: "22",
  },
  {
    Nombre: "Tizana",
    Descripción:
      "Infusión de frutos rojos, leche de coco, miel de agave y vanilla",
    Categoría: "Refreshers 🍧",
    Precio: "$55.00",
    id: 23,
    slug: "23",
  },
  {
    Nombre: "CARAMEL LATTE",
    Descripción: "",
    Categoría: "Refreshers 🍧",
    Precio: "$50.00",
    id: 24,
    slug: "24",
  },
  {
    Nombre: "Dark Lemonade",
    Descripción: "Limón fresco, chía, carbón activado y Stevia",
    Categoría: "Refreshers 🍧",
    Precio: "$40.00",
    id: 25,
    slug: "25",
  },
  {
    Nombre: "Golden Bowl",
    Descripción:
      "Plátano, mango, piña, jengibre, cúrcuma, proteína vegana, granola, crema de almendras, coconut flakes y hemp",
    Categoría: "Bowls 🥣",
    Precio: "$125.00",
    Imagen:
      "https://drive.google.com/file/d/1iIGVxbU_8AkUqiYNir_uJotqksJB9lS7/view?usp=sharing",
    id: 26,
    slug: "26",
  },
  {
    Nombre: "Acai Bowl",
    Descripción:
      "Acai orgánico, berries, proteína veana, granola, crema de almendras y coconut flakes",
    Categoría: "Bowls 🥣",
    Precio: "$125.00",
    Imagen:
      "https://drive.google.com/file/d/1qOV9OjpFRrK2CShXXOeXH1DnZ7PED_7c/view?usp=sharing",
    id: 27,
    slug: "27",
  },
  {
    Nombre: "Cacao Bowl",
    Descripción:
      "Plátano, fresas, proteína vegana, cacao, granola, crema de almendras, coconut flakes, hemp y cacao nibs",
    Categoría: "Bowls 🥣",
    Precio: "$125.00",
    id: 28,
    slug: "28",
  },
  {
    Nombre: "Run a mile bowl",
    Descripción:
      "Plátano, cacao en polvo, cacao nibs, leche de coco, proteína vegana, granola, vainilla, coconut flakes, crema de avellanas y crema de cacahuate",
    Categoría: "Bowls 🥣",
    Precio: "$125.00",
    id: 29,
    slug: "29",
  },
  {
    Nombre: "Dragon fruit bowl",
    Descripción:
      "Plátano, fresa, piña, leche de coco, pitaya, chía, coconut flakes, miel de abeja, hemp y nuez de castilla",
    Categoría: "Bowls 🥣",
    Precio: "$125.00",
    Imagen:
      "https://drive.google.com/file/d/1uIYBnfNs-upQIrJEl_O-aZ4NuUCyeV52/view?usp=sharing",
    id: 30,
    slug: "30",
  },
  {
    Nombre: "Salmon MX",
    Descripción:
      "Pan de centeno, salmón, queso de cabra, aguacate, germinado de alfafa, dukkah de pistache y crinotte de limón real",
    Categoría: "Toast 🥪",
    Precio: "$100.00",
    Imagen:
      "https://drive.google.com/file/d/1li-aPnuPGXo9hApnnxsrch8kQ-I3QKzo/view?usp=sharing",
    id: 31,
    slug: "31",
  },
  {
    Nombre: "Avocado Toast",
    Descripción:
      "Pan de centeno, aguacate, germinado de alfalfa, tomate cherry, aceite de oliva, hojuelas de sal rosa y pimienta",
    Categoría: "Toast 🥪",
    Precio: "$70.00",
    Imagen:
      "https://drive.google.com/file/d/1DJ9p1GMl_du6-hOZhEnmFiMm685Q-_bz/view?usp=sharing",
    id: 32,
    slug: "32",
  },
  {
    Nombre: "Sweet Toast",
    Descripción:
      "Pan de centeno, creama de almendras, plátano, fresa, hemp, granola y coconut flakes",
    Categoría: "Toast 🥪",
    Precio: "$70.00",
    Imagen:
      "https://drive.google.com/file/d/1WY3JjL31SU_ONh2PU0yhYtkoFYWb9rmH/view?usp=sharing",
    id: 33,
    slug: "33",
  },
  {
    Nombre: "Honey & Goat Toast",
    Descripción:
      "Pan de centeno, queso de cabra, fresas, miel de abeja y hemp",
    Categoría: "Toast 🥪",
    Precio: "$70.00",
    Imagen:
      "https://drive.google.com/file/d/1VzVkU6EhIwj_9SREWe1mlOYU_IKQU9SB/view?usp=sharing",
    id: 34,
    slug: "34",
  },
  {
    Nombre: "Panini Verde Mío",
    Descripción:
      "Pan multigrano, pesto, pechuga de pavo natural, papino, germinado de alfalfa, aguacate y queso de cabra",
    Categoría: "Comida 🥗",
    Precio: "$78.00",
    Imagen:
      "https://drive.google.com/file/d/1wsfL59V3T29ECfp0FRL1_4OETbwZNqX1/view?usp=sharing",
    id: 35,
    slug: "35",
  },
  {
    Nombre: "SÁNDWICH Verde mío",
    Descripción:
      "Pan multigrano, pesto, pechuga de pavo natural, pepino, germinado de alfalfa, aguacate y queso de cabra",
    Categoría: "Comida 🥗",
    Precio: "$65.00",
    id: 36,
    slug: "36",
  },
  {
    Nombre: "Ensalada Kaliroi",
    Descripción:
      "Mix de lechugas, pimiento morrón, tomate cherry, queso feta, kalamata, pepino y vinagreta de la casa",
    Categoría: "Comida 🥗",
    Precio: "$70.00",
    id: 37,
    slug: "37",
  },
  {
    Nombre: "Ensalada Marietta",
    Descripción:
      "Mix de lechugas, jícama, zanahoria, betabel, tomate Cherry, queso parmesano y vinagreta de la casa",
    Categoría: "Comida 🥗",
    Precio: "$70.00",
    id: 38,
    slug: "38",
  },
  {
    Nombre: "Ensalada Mila",
    Descripción:
      "Mix de lechugas, fresa, nuez de castilla, hemp, queso de cabra y vinagreta",
    Categoría: "Comida 🥗",
    Precio: "$70.00",
    id: 39,
    slug: "39",
  },
  {
    Nombre: "Chilli Bowl",
    Descripción:
      "Zanahoria, jícama, betabel, chamoy de Jamaica y\ntamarindo sin azúcar, cacahuate, churritos de\namaranto, limón y sal de himalaya\n",
    Categoría: "Snacks",
    Precio: "$65.00",
    id: 40,
    slug: "40",
  },
  {
    Nombre: "Chilli Chips",
    Descripción:
      "Jícama, zanahoria, betabel, chips de jícama, chips\nde betabel, cacahuate, chamoy de jamaica y\ntamarindo sin azúcar",
    Categoría: "Snacks",
    Precio: "$70.00",
    id: 41,
    slug: "41",
  },
];

const levoysushi = [
  {
    Nombre: "Crunchy Roll",
    Descripción:
      "Philadelpihia, aguacate, pepino y camarón por dentro, ajonjolí blanco y negro por fuera, con topping de camarón crunchy spicy, coronado con laminas de atún fresco y chile serrano, bañado en salsa de anguila. (Natural)",
    Precio: "$170.00",
    Categoría: "⭐️ Nuevos",
    Imagen:
      "https://drive.google.com/file/d/1YLqLyWD1CqhaAkgIlLYvCbJ5Sy9wtZjz/view?usp=share_link",
    id: 1,
    slug: "1",
  },
  {
    Nombre: "Caprichito Roll",
    Descripción:
      "Philadelpihia, aguacate, pepino y camarón por dentro, ajonjolí blanco y negro por fuera, con topping de cubitos de atún fresco, camarón, masago, coronado con trozos de aguacate y pulpo, bañado en salsa de anguila. (Natural)",
    Precio: "$165.00",
    Categoría: "⭐️ Nuevos",
    Imagen:
      "https://drive.google.com/file/d/1HRjDsUWjrD_QDugLv7s4G6aOtbE4XjW4/view?usp=share_link",
    id: 2,
    slug: "2",
  },
  {
    Nombre: "Kani Roll",
    Descripción:
      "Philadelphia, aguacate, res y camarón empanizado por dentro; gratinado, con topping de kanikama, tocino y ajonjolí, bañado en salsa de anguila. (Empanizado)",
    Precio: "$165.00",
    Categoría: "⭐️ Nuevos",
    Imagen:
      "https://drive.google.com/file/d/1u2prKSPlVYcWCDF2-ahq7rd4dEO7Ex3F/view?usp=drive_link",
    id: 3,
    slug: "3",
  },
  {
    id: 4,
    slug: "4",
  },
  {
    Nombre: "Tostadita de camarón ",
    Descripción:
      "Tostada de camarón, pepino, cebolla morada y cubitos de aguacate, montada sobre wonton y aderezo especial de la casa, acompañada con salsa marea negra y coronada con poro frito.",
    Precio: "$90.00",
    Categoría: "🥄 Entradas",
    Imagen:
      "https://drive.google.com/file/d/1Lj9BaqFdvX371r9yMsbU9LtK-HSAwHy8/view?usp=share_link",
    id: 5,
    slug: "5",
  },
  {
    Nombre: "Tostadita de atún ",
    Descripción:
      "Tostada de atún fresco (100 gr), cubitos de aguacate, montada sobre wonton y aderezo especial de la casa, acompañada con salsa marea negra y coronada con poro frito.",
    Precio: "$90.00",
    Categoría: "🥄 Entradas",
    Imagen:
      "https://drive.google.com/file/d/1Ylv_N5wwGRR8aFfXrdcE9_fOZ-p4fygB/view?usp=drivesdk",
    id: 6,
    slug: "6",
  },
  {
    Nombre: "Chile relleno especial • Pieza individual",
    Descripción:
      "Relleno de philadelphia, queso chihuahua, tampico e ingrediente a elegir (res, pollo, camarón o mixto). Gratinado con queso chipotle y trozos de tocino.",
    Precio: "$90.00",
    Categoría: "🥄 Entradas",
    Imagen:
      "https://drive.google.com/file/d/1tx0K02uG5NifrtECFuedmPPeilgb4WZn/view?usp=drivesdk",
    id: 7,
    slug: "7",
  },
  {
    Nombre: "Chile relleno • Pieza individual",
    Descripción:
      "Relleno de Philadelphia, queso chihuahua, tampico e ingredientes a elegir (Res, pollo, camarón o mixtos).",
    Precio: "$65.00",
    Categoría: "🥄 Entradas",
    id: 8,
    slug: "8",
  },
  {
    Nombre: "Chiles rellenos • Orden de 3 pzs.",
    Descripción:
      "Relleno de Philadelphia, queso chihuahua, tampico e ingredientes a elegir (Res, pollo, camarón o mixtos).",
    Precio: "$180.00",
    Categoría: "🥄 Entradas",
    id: 9,
    slug: "9",
  },
  {
    Nombre: "Nuggets ",
    Descripción: "Pollo empanizado, acompañado de catsup. ",
    Precio: "$75.00",
    Categoría: "🥄 Entradas",
    id: 10,
    slug: "10",
  },
  {
    Nombre: "Dedos de queso ",
    Descripción: "Orden de 4 piezas ",
    Precio: "$90.00",
    Categoría: "🥄 Entradas",
    id: 11,
    slug: "11",
  },
  {
    Nombre: "Bomba",
    Descripción:
      "Res, pollo, camarón, tampico y philadelphia, con aguacate encima. (Empanizada)",
    Precio: "$135.00",
    Categoría: "🥄 Entradas",
    Imagen:
      "https://drive.google.com/file/d/1tv3myBMZkXfzDW0nerguZAd7gh3gSRRr/view?usp=drivesdk",
    id: 12,
    slug: "12",
  },
  {
    id: 13,
    slug: "13",
  },
  {
    Nombre: "Cachiporra Roll",
    Descripción:
      "Philadelphia, aguacate y res por dentro; Topping de camarón empanizado spicy y trozos de tocino bañana en salsa de anguila. (Empanizado)",
    Precio: "$155.00",
    Categoría: "🍱  Rollos Empanizados",
    Imagen:
      "https://drive.google.com/file/d/1tplK6OUIeKBcgFnQWSFl5JbDL0NhbUnF/view?usp=drivesdk",
    id: 14,
    slug: "14",
  },
  {
    Nombre: "Tato Roll",
    Descripción:
      "Philadelphia, aguacate, res y tocino por dentro; queso chihuahua con tocino y serrano por fuera. (Empanizado)",
    Precio: "$160.00",
    Categoría: "🍱  Rollos Empanizados",
    Imagen:
      "https://drive.google.com/file/d/1NJkq5xHTM-HfURRkaS0vpqMqNwJX30Tq/view?usp=share_link",
    id: 15,
    slug: "15",
  },
  {
    Nombre: "Cochito Roll",
    Descripción:
      "Philadelphia, aguacate, chile caribe y pollo por dentro; Topping de tampico y trozos de tocino encima. (Empanizado)",
    Precio: "$155.00",
    Categoría: "🍱  Rollos Empanizados",
    Imagen:
      "https://drive.google.com/file/d/1_BBWcb84apAxM2KokNwplreRRZ1GpoYJ/view?usp=share_link",
    id: 16,
    slug: "16",
  },
  {
    Nombre: "Mechudo Roll",
    Descripción:
      "Philadelphia, aguacate, camarón por dentro; topping de kanikama con trozos de camarón empanizado encima, bañado en salsa de anguila. (Empanizado)",
    Precio: "$145.00",
    Categoría: "🍱  Rollos Empanizados",
    Imagen:
      "https://drive.google.com/file/d/1R4mDLqdRtSH4pxfY1-gYx9LhK0EF2IZa/view?usp=sharing",
    id: 17,
    slug: "17",
  },
  {
    Nombre: "Imperial Roll",
    Descripción:
      "Philadelphia, aguacate y surimi por dentro. Topping de tampico, aguacate y camarón, acompañado de tampico spicy con trocitos de camarón y pulpo. (Empanizado).",
    Precio: "$150.00",
    Categoría: "🍱  Rollos Empanizados",
    Imagen:
      "https://drive.google.com/file/d/1CJ9M3BGpgYTyh8s1HEPbhR62R9965qe7/view?usp=drivesdk",
    id: 18,
    slug: "18",
  },
  {
    Nombre: "Guamuchilito",
    Descripción:
      "Philadelphia, aguacate y surimi por dentro. Philadelphia y camarón por fuera ; Topping de tampico, aguacate y ajonjolí bañado en salsa de anguila (Empanizado)",
    Precio: "$135.00",
    Categoría: "🍱  Rollos Empanizados",
    Imagen:
      "https://drive.google.com/file/d/19F0jt_SQr0cI9ufDzjMpVp0JE3DtJZKN/view?usp=share_link",
    id: 19,
    slug: "19",
  },
  {
    Nombre: "Mar y tierra",
    Descripción:
      "Philadelphia, aguacate, res y camarón por dentro. (Empanizado)",
    Precio: "$105.00",
    Categoría: "🍱  Rollos Empanizados",
    id: 20,
    slug: "20",
  },
  {
    Nombre: "Cielo mar y tierra",
    Descripción:
      "Philadelphia, aguacate, res, pollo y camarón por dentro. (Empanizado)",
    Precio: "$115.00",
    Categoría: "🍱  Rollos Empanizados",
    id: 21,
    slug: "21",
  },
  {
    Nombre: "3 Quesos",
    Descripción:
      "Philadelphia, aguacate, res y camarón por dentro. Philadelphia, queso tipo americano y chihuahua por fuera (Empanizado)",
    Precio: "$115.00",
    Categoría: "🍱  Rollos Empanizados",
    Imagen:
      "https://drive.google.com/file/d/1S0UWNsoUoR8Y2F0ER_xidZbY0uFp1uzc/view?usp=sharing",
    id: 22,
    slug: "22",
  },
  {
    Nombre: "Cordón Blue",
    Descripción:
      "Philadelphia, aguacate, pollo y tocino por dentro. Philadelphia y queso chihuahua por fuera . (Empanizado)",
    Precio: "$115.00",
    Categoría: "🍱  Rollos Empanizados",
    Imagen:
      "https://drive.google.com/file/d/1C6gS6AoH-IOkhTq66Ps6oBgWSnZFvckf/view?usp=drivesdk",
    id: 23,
    slug: "23",
  },
  {
    Nombre: "Res blue",
    Descripción:
      "Philadelphia, aguacate, res y tocino por dentro. Philadelphia y queso chihuahua por fuera . (Empanizado)",
    Precio: "$120.00",
    Categoría: "🍱  Rollos Empanizados",
    id: 24,
    slug: "24",
  },
  {
    Nombre: "Camarón Blue",
    Descripción:
      "Philadelphia, aguacate, camarón y tocino por dentro. Philadelphia y queso chihuahua por fuera . (Empanizado)",
    Precio: "$120.00",
    Categoría: "🍱  Rollos Empanizados",
    id: 25,
    slug: "25",
  },
  {
    id: 26,
    slug: "26",
  },
  {
    Nombre: "Vaquita Roll",
    Descripción:
      "Philadelphia, aguacate, res y tocino por dentro; Gratinado con queso chihuahua, trozos de res y chile serrano bañado en salsa de anguila. (Empanizado)",
    Precio: "$165.00",
    Categoría: "🍤  Rollos Horneados",
    Imagen:
      "https://drive.google.com/file/d/1abvSbqKiBdml5zxSDbgSP4ZTvcaqc98L/view?usp=share_link",
    id: 27,
    slug: "27",
  },
  {
    Nombre: "Suavecito Roll",
    Descripción:
      "Philadelphia, aguacate, res, pollo, camarón y tocino por dentro; gratinado con queso chihuahua; topping de tampico y aguacate, bañado en salsa de anguila. (Empanizado)",
    Precio: "$170.00",
    Categoría: "🍤  Rollos Horneados",
    Imagen:
      "https://drive.google.com/file/d/1t_u6bQMQYEtOcdzKN7NMimQixDV3M52N/view?usp=drivesdk",
    id: 28,
    slug: "28",
  },
  {
    Nombre: "Levoy Roll",
    Descripción:
      "(Especialidad de la casa) Philadelphia, res y pollo por dentro; Avocado por fuera; Toppping de camarón spicy con queso chihuahua, bañado en salsa de anguila. (Empanizado)",
    Precio: "$160.00",
    Categoría: "🍤  Rollos Horneados",
    Imagen:
      "https://drive.google.com/file/d/1xl7ULqKwbxW7mXP00PtAwzQtpkml4qJo/view?usp=drivesdk",
    id: 29,
    slug: "29",
  },
  {
    Nombre: "Black Factor Roll",
    Descripción:
      "Philadelphia, aguacate y res por dentro; Topping de camarón, tocino y queso chihuahua, bañado en salsa de anguila. (Empanizado)",
    Precio: "$160.00",
    Categoría: "🍤  Rollos Horneados",
    Imagen:
      "https://drive.google.com/file/d/1RS5zY-O1u-x1P2orcLIzQktLgnmuU2J_/view?usp=drive_link",
    id: 30,
    slug: "30",
  },
  {
    Nombre: "Betillo Roll",
    Descripción:
      "Philadelphia, pollo y tocino por dentro; Avocado por fuera; Topping de res, pollo, chile caribe y queso Chihuahua, bañado en salsa de anguila. (Empanizado)",
    Precio: "$160.00",
    Categoría: "🍤  Rollos Horneados",
    Imagen:
      "https://drive.google.com/file/d/1tVGrt1p_7Mh6x0PEgR1J_Iz2si81PPRk/view?usp=drivesdk",
    id: 31,
    slug: "31",
  },
  {
    Nombre: "Chipotle Roll",
    Descripción:
      "Philadelphia, aguacate y pollo por dentro; gratinado dequeso chipotle con trozos de tocino, bañado en salsa de anguila. (Empanizado)",
    Precio: "$160.00",
    Categoría: "🍤  Rollos Horneados",
    Imagen:
      "https://drive.google.com/file/d/1k39rwcMN8DM0xs7KWE1FXAoz_vFRTaaW/view?usp=share_link",
    id: 32,
    slug: "32",
  },
  {
    Nombre: "Tocinito Roll",
    Descripción:
      "Philadelphia, aguacate, res y pollo por dentro; Philadelphia por fuera, gratinado con queso chihuahua, cubierto con trozos de tocino. (Empanizado)",
    Precio: "$160.00",
    Categoría: "🍤  Rollos Horneados",
    Imagen:
      "https://drive.google.com/file/d/1u3NP7jAP5BUiU4oi_MRP_KNRwF9tDDhU/view?usp=drivesdk",
    id: 33,
    slug: "33",
  },
  {
    Nombre: "California Roll",
    Descripción:
      "Philadelphia, aguacate, pepino e ingredientes a elegir (res o pollo). Camarón (+5)",
    Precio: "$110.00",
    Categoría: "🍣 Rollos Naturales",
    id: 34,
    slug: "34",
  },
  {
    Nombre: "Avocado Roll",
    Descripción:
      "Philadelphia, aguacate, pepino y res por dentro; Forrado con aguacate por fuera",
    Precio: "$125.00",
    Categoría: "🍣 Rollos Naturales",
    id: 35,
    slug: "35",
  },
  {
    Nombre: "Masago Roll",
    Descripción:
      "Philadlephia, aguacate, pepino y camarón empanizado por dentro; masago y ajonjolí por fuera.",
    Precio: "$135.00",
    Categoría: "🍣 Rollos Naturales",
    id: 36,
    slug: "36",
  },
  {
    Nombre: "Mountain Roll",
    Descripción:
      "Philadelphia, aguacate, pepino y camarón empanizado por dentro; Philadelphia, aguacate y camarón por fuera; Topping de tampico, bañado en salsa de anguila.",
    Precio: "$135.00",
    Categoría: "🍣 Rollos Naturales",
    id: 37,
    slug: "37",
  },
  {
    Nombre: "Avocado con kanikama",
    Descripción:
      "Philadelphia, aguacate, pepino y camarón por dentro; Forrado con aguacate por fuera, con topping kanikama.",
    Precio: "$140.00",
    Categoría: "🍣 Rollos Naturales",
    id: 38,
    slug: "38",
  },
  {
    Nombre: "Pulpo Spicy",
    Descripción:
      "Philadelphia, aguacate, pepino y camarón por dentro; pulpo y philadelphia por fuera, con topping de tampico spicy.",
    Precio: "$140.00",
    Categoría: "🍣 Rollos Naturales",
    Imagen:
      "https://drive.google.com/file/d/1ECjMmptdj4_rKhlsxVi1JAXvONDqI09N/view?usp=drive_link",
    id: 39,
    slug: "39",
  },
  {
    Nombre: "Polo Roll",
    Descripción:
      "Philadelphia, aguacate, pepino y camarón por dentro; Philadelphia, aguacate y pulpo por fuera, coronado con kanikama, camarón empanizado, philadelphia y ajonjolí, bañado en salsa de anguila.",
    Precio: "$160.00",
    Categoría: "🍣 Rollos Naturales",
    Imagen:
      "https://drive.google.com/file/d/1yuBAw6Ek1vEfFF56aWGqUadg6E6Al6Xu/view?usp=drive_link",
    id: 40,
    slug: "40",
  },
  {
    Nombre: "Atún Roll",
    Descripción:
      "Philadelphia, aguacate, pepino y camarón por dentro; Atún por fuera, coronado con kanikama, masago, serrano y ajonjolí.",
    Precio: "$160.00",
    Categoría: "🍣 Rollos Naturales",
    Imagen:
      "https://drive.google.com/file/d/1KgZoS3k4ZsrYt5rstc2YPahF8uZA3etx/view?usp=sharing",
    id: 41,
    slug: "41",
  },
  {
    Nombre: "Salmón Hot",
    Descripción:
      "Philadelphia, aguacate, pepino y camarón por dentro; Forrado con salmón y topping de camarón spicy (al horno) con ajonjolí, bañado en salsa de anguila.",
    Precio: "$165.00",
    Categoría: "🍣 Rollos Naturales",
    Imagen:
      "https://drive.google.com/file/d/1vQXHA_dRk-gvUfn7GJMU1_1u4vPWI2z4/view?usp=sharing",
    id: 42,
    slug: "42",
  },
  {
    Nombre: "Salmón Spicy",
    Descripción:
      "Philadelphia, aguacate, pepino y camarón por dentro; Philadelphia y masago por fuera, con topping de camarón y salmón spicy.",
    Precio: "$160.00",
    Categoría: "🍣 Rollos Naturales",
    Imagen:
      "https://drive.google.com/file/d/1tx7ZtQEIR-2BjCWZmWAuuHQ2T5-UDE7H/view?usp=drivesdk",
    id: 43,
    slug: "43",
  },
  {
    Nombre: "Vegetariano",
    Descripción:
      "Philadelphia, aguacate, pepino y zanahoria por dentro. Ajonjolí por fuera, Natural.",
    Precio: "$105.00",
    Categoría: "🍣 Rollos Naturales",
    id: 44,
    slug: "44",
  },
  {
    Nombre: "Yakimeshi",
    Descripción:
      "Platillo de arroz frito con zanahoria, cebollín, res y pollo con philadelphia, tampico, aguacate y ajonjolí.",
    Precio: "$135.00",
    Categoría: "🍚 Arroces",
    id: 45,
    slug: "45",
  },
  {
    Nombre: "Yakimeshi Especial",
    Descripción:
      "Platillo de arroz frito con zanahoria, cebollín, res y pollo, con philadelphia, tampico, aguacate, camarón empanizado y ajonjolí.",
    Precio: "$155.00",
    Categoría: "🍚 Arroces",
    Imagen:
      "https://drive.google.com/file/d/1yCDQN4jvZqeSMuVV_v8OxNiiZHHW95CH/view?usp=drivesdk",
    id: 46,
    slug: "46",
  },
  {
    Nombre: "Gohan",
    Descripción:
      "Platillo de arroz blanco, philadelphia, tampico y aguacate caompañado de res, pollo y camarón frito.",
    Precio: "$140.00",
    Categoría: "🍚 Arroces",
    Imagen:
      "https://drive.google.com/file/d/1MXuNOaWPIunOtKV3KEbW45kR1aHOuTUj/view?usp=drivesdk",
    id: 47,
    slug: "47",
  },
  {
    Nombre: "Té ",
    Descripción: "Vaso individual con 1 refill",
    Precio: "$35.00",
    Categoría: "🥤 Bebidas",
    id: 48,
    slug: "48",
  },
  {
    id: 49,
    slug: "49",
  },
  {
    id: 50,
    slug: "50",
  },
  {
    Nombre: "Agua mineral 330 ml.",
    Descripción: "Perrier",
    Precio: "$40.00",
    Categoría: "🥤 Bebidas",
    id: 51,
    slug: "51",
  },
  {
    id: 52,
    slug: "52",
  },
  {
    Nombre: "Agua natural 500 ml.",
    Descripción: "",
    Precio: "$15.00",
    Categoría: "🥤 Bebidas",
    id: 53,
    slug: "53",
  },
  {
    Nombre: "Coca cola 335 ml.",
    Descripción: "Lata",
    Precio: "$25.00",
    Categoría: "🥤 Bebidas",
    id: 54,
    slug: "54",
  },
  {
    Nombre: "Fanta naranja 335 ml",
    Descripción: "Lata",
    Precio: "$25.00",
    Categoría: "🥤 Bebidas",
    id: 55,
    slug: "55",
  },
  {
    Nombre: "Sprite 335 ml.",
    Descripción: "Lata",
    Precio: "$25.00",
    Categoría: "🥤 Bebidas",
    id: 56,
    slug: "56",
  },
  {
    Nombre: "Coca cola light 335 ml.",
    Descripción: "Lata",
    Precio: "$25.00",
    Categoría: "🥤 Bebidas",
    id: 57,
    slug: "57",
  },
  {
    Nombre: "Té 1 litro",
    Descripción: "Únicamente para llevar",
    Precio: "$35.00",
    Categoría: "🥤 Bebidas",
    id: 58,
    slug: "58",
  },
  {
    id: 59,
    slug: "59",
  },
  {
    Nombre: "Queso gratinado",
    Descripción:
      "Todo extra tiene un costo adicional sobre el valor indicado en el menú.",
    Precio: "$40.00",
    Categoría: "🥢 Ingrediente extra",
    id: 60,
    slug: "60",
  },
  {
    Nombre: "Queso gratinado chipotle ",
    Descripción:
      "Todo extra tiene un costo adicional sobre el valor indicado en el menú.",
    Precio: "$45.00",
    Categoría: "🥢 Ingrediente extra",
    id: 61,
    slug: "61",
  },
  {
    Nombre: "Porción extra de philadelphia ",
    Descripción:
      "Todo extra tiene un costo adicional sobre el valor indicado en el menú.",
    Precio: "$25.00",
    Categoría: "🥢 Ingrediente extra",
    id: 62,
    slug: "62",
  },
  {
    Nombre: "Ingrediente extra (Camarón, res, pollo ó tocino)",
    Descripción:
      "Todo extra tiene un costo adicional sobre el valor indicado en el menú.",
    Precio: "$25.00",
    Categoría: "🥢 Ingrediente extra",
    id: 63,
    slug: "63",
  },
  {
    Nombre: "Ingrediente extra (Salmón, pulpo, atún o masago)",
    Descripción:
      "Todo extra tiene un costo adicional sobre el valor indicado en el menú.",
    Precio: "$35.00",
    Categoría: "🥢 Ingrediente extra",
    id: 64,
    slug: "64",
  },
  {
    Nombre: "Porción de tampico",
    Descripción:
      "Todo extra tiene un costo adicional sobre el valor indicado en el menú.",
    Precio: "$30.00",
    Categoría: "🥢 Ingrediente extra",
    id: 65,
    slug: "65",
  },
  {
    Nombre: "Porción de tampico spicy ",
    Descripción:
      "Todo extra tiene un costo adicional sobre el valor indicado en el menú.",
    Precio: "$35.00",
    Categoría: "🥢 Ingrediente extra",
    id: 66,
    slug: "66",
  },
  {
    Nombre: "Porción de kanikama",
    Descripción:
      "Todo extra tiene un costo adicional sobre el valor indicado en el menú.",
    Precio: "$35.00",
    Categoría: "🥢 Ingrediente extra",
    id: 67,
    slug: "67",
  },
  {
    Nombre:
      "Soya, mayonesa, aderezo, anguila o sriracha extra para llevar",
    Descripción:
      "Todo extra tiene un costo adicional sobre el valor indicado en el menú.",
    Precio: "$5.00",
    Categoría: "🥢 Ingrediente extra",
    id: 68,
    slug: "68",
  },
  {
    Nombre: "Contenedor con todo para llevar",
    Descripción:
      "Todo extra tiene un costo adicional sobre el valor indicado en el menú.",
    Precio: "$15.00",
    Categoría: "🥢 Ingrediente extra",
    id: 69,
    slug: "69",
  },
  {
    Nombre: "Contenedor vacío para llevar ",
    Descripción: "Chico o grande",
    Precio: "$5.00",
    Categoría: "🥢 Ingrediente extra",
    id: 70,
    slug: "70",
  },
  {
    Nombre: "Soya aguachile ",
    Descripción:
      "Todo extra tiene un costo adicional sobre el valor indicado en el menú.",
    Precio: "$15.00",
    Categoría: "🥢 Ingrediente extra",
    id: 71,
    slug: "71",
  },
  {
    Nombre: "Gratinado Levoy",
    Descripción:
      "Todo extra tiene un costo adicional sobre el valor indicado en el menú.",
    Precio: "$55.00",
    Categoría: "🥢 Ingrediente extra",
    id: 72,
    slug: "72",
  },
  {
    Nombre: "Extra aguacate ",
    Descripción: "",
    Precio: "$15.00",
    Categoría: "🥢 Ingrediente extra",
    id: 73,
    slug: "73",
  },
  {
    id: 74,
    slug: "74",
  },
  {
    Nombre: "Flan",
    Descripción: "",
    Precio: "$75.00",
    Categoría: "🍰 Postres",
    Imagen:
      "https://drive.google.com/file/d/1A20Plf07CXntqtqu4Coiw0s6hlI05W55/view?usp=share_link",
    id: 75,
    slug: "75",
  },
];
const csvFilePath = "levoysushi.csv";

arrayToCsv(levoysushi, csvFilePath);
