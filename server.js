import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import fs from "fs";
import multer from "multer";
import csvParser from "csv-parser";
// import Redis from "redis";
import Redis from "ioredis";
import whatsAppClient from "@green-api/whatsapp-api-client";
import PublicGoogleSheetsParser from "public-google-sheets-parser";
import { randomUUID } from "crypto";
import jwt from "jsonwebtoken";

// import csv from "csvtojson";

// const redisClient = Redis.createClient();
// const client = createClient();
// client.on("error", (err) => console.log("Redis Client Error", err));
// await client.connect();

const secretKey = "mario";
function generateAuthToken(userId) {
  // Create a token with user ID as the payload
  const token = jwt.sign({ userId }, secretKey, {
    expiresIn: "1h",
  }); // Expires in 1 hour

  return token;
}
function generateShortID(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let shortID = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    shortID += characters.charAt(randomIndex);
  }

  return shortID;
}
function generateRandomCode(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let code = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }

  return code;
}
// Usage: Generate a 6-character short ID
// const redisOptions = {
//   host: 'your-redis-host',       // Replace with your Redis Labs host
//   port: 12345,                    // Replace with your Redis Labs port
//   password: 'your-redis-password', // Replace with your Redis Labs password
// };

const redisOptions = {
  password: "DZqdWxND92zzDU6ZorUUgS2JHifNfP4Y",
  port: 11535,
  host: "redis-11535.c300.eu-central-1-1.ec2.cloud.redislabs.com",
  // socket: {
  // },
};
// By default, it will connect to localhost:6379 if no args are passed
// const redis = new Redis();
const redis = new Redis(redisOptions);

const PORT = process.env.PORT || 8000;

const API_TOKEN_INSTANCE =
  "dc3b3d5c9582485596c37c66bb1fdb324ab3a9ee475e48d99f";
const ID_INSTANCE = "7103872930";

const upload = multer({ dest: "uploads/" });
const whatsappRestAPI = whatsAppClient.restAPI({
  idInstance: ID_INSTANCE,
  apiTokenInstance: API_TOKEN_INSTANCE,
});
dotenv.config();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
// if you want only your frontend running at port 3000 to connect to this backend
// app.use(cors({ origin: "<http://localhost:3000>" }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const defaultItemsSpreadSheetURL =
  "https://docs.google.com/spreadsheets/d/1i8s74vfPOwOyckvrwzxXBE7j_-0LPJR2rGRgyfwNDWU/edit#gid=0";
const defaultItems = [];

// accept CSV file to use as a source for data
app.get("/test", (req, res) => {
  return res.status(200).send("hello");
});
app.post("/upload", upload.single("csvFile"), (req, res) => {
  const uploadedFile = req.file;

  if (!uploadedFile) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const results = [];

  fs.createReadStream(uploadedFile.path)
    .pipe(csvParser())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      // At this point, `results` contains the JSON representation of the CSV data
      console.log("results", results);
      // res.json(results);
    });
  res.send("uploadedFile successfuly");
});

// GLOBAL SETTINGS
app.get("/globalSettings", async (req, res) => {
  const menuId = req.query.menuId;

  // menus should always exists since we clicked edit from the dashboard on
  // an existing menu
  const existingMenus = await redis.get("menus");
  const menuArray = JSON.parse(existingMenus);

  const menu = menuArray.find((menu) => {
    return menu.id === menuId;
  });

  if (menu) {
    return res.status(200).json({
      success: true,
      globalSettings: menu.globalSettings,
    });
  } else {
    return res.status(400).send("Menu doesn't exist");
  }
});
app.post("/saveGlobalSettings", async (req, res) => {
  const { menuId, globalSettings } = req.body;
  const existingMenus = await redis.get("menus");
  const menuArray = JSON.parse(existingMenus);
  const menu = menuArray.find((menu) => {
    return menu.id === menuId;
  });

  menu.globalSettings = globalSettings;

  await redis.set("menus", JSON.stringify(menuArray));

  return res.status(200).send("Settings updated successfully");
});

// MENU

function generateDefaultGlobalSettings() {
  const defaultGlobalSettings = {
    ordersEnabled: true,
    whatsappNumberConnected: "Your number here",
    spreadSheetURL: defaultItemsSpreadSheetURL,
    websiteName: "Webiste Name",
    menuName: "New Menu " + generateRandomCode(5),
    client: "clientName",
    subdomain: "subdomain-" + generateRandomCode(4).toLowerCase(),
    logoURL: "",
    websiteTitle: "",
    faviconURL: "",
    isNavbarFixed: false,
    hero: {
      isShown: false,
      title: "Hero Title",
      titleColor: "#FFFFFF",
      subheading: "Subheading",
      subheadingColor: "#FFFFFF",
      image: "",
    },
    menuDescription: "Menu Description",
    footer: {
      isFreeMenuTrademarkShown: true,
      isShown: false,
      text: "",
      backgroundColor: "#E3E3E3",
      textColor: "#000000",
      isFacebookLinkShown: false,
      isInstagramLinkShown: false,
      isTiktokLinkShown: false,
      isTwitterLinkShown: false,
      facebookURL: "",
      instagramURL: "",
      tiktokURL: "",
      twitterURL: "",
    },
    theme: {
      headerColor: "#FFFFFF",
      backgroundColor: "#F0F0F0",
      font: "",
    },
    card: {
      customFields: "",
      filterBy: "",
      image: "",
      title: "",
      description: "",
      caption: "",
      buttonAction: "no action",
      buttonLink: "",
      buttonText: "Button Text",
      buttonBgColor: "#731574",
      buttonTextColor: "#ffffff",
    },
  };

  return defaultGlobalSettings;
}

function createNewMenu(client = "") {
  return {
    isPro: false,
    isOnFreeTrial: false,
    isPublished: false,
    id: randomUUID(),
    items: [...defaultItems],
    globalSettings: { ...generateDefaultGlobalSettings(), client },
  };
}

async function generateAndAddNewDefaultMenu(client) {
  const existingMenus = await redis.get("menus");

  const newMenu = createNewMenu(client);

  if (!existingMenus) {
    await redis.set("menus", JSON.stringify([newMenu]));
  } else {
    const menuArray = JSON.parse(existingMenus);
    menuArray.push(newMenu);
    await redis.set("menus", JSON.stringify(menuArray));
  }

  // add menuid in user menus array
  const existingUsers = await redis.get("users");

  // user should exist
  const userArray = JSON.parse(existingUsers);
  const user = userArray.find((user) => {
    return user.clientName === client;
  });

  user.menusIds.push(newMenu.id);

  await redis.set("users", JSON.stringify(userArray));
}

async function getMenusForClient(client) {
  console.log("Getting menus for client", client);
  const existingUsers = await redis.get("users");

  // user should exist
  const userArray = JSON.parse(existingUsers);
  const user = userArray.find((user) => {
    return user.clientName === client;
  });

  const existingMenus = await redis.get("menus");

  if (!existingMenus) {
    return [];
  }
  // user should exist
  const menuArray = JSON.parse(existingMenus);

  let userMenus = [];

  console.log("existing ids", user.menusIds);
  for (const menuId of user.menusIds) {
    const menu = menuArray.find((menu) => {
      return menu.id === menuId;
    });
    if (!menu) {
      console.log("menu", menu);
      console.log("menuid no menu", menuId);
    }
    // if (menu) {
    let freeTrialValue = "";
    if (Number(menu.isOnFreeTrial) >= new Date().getTime()) {
      freeTrialValue = menu.isOnFreeTrial;
    }
    userMenus.push({
      isPublished: menu.isPublished,
      isOnFreeTrial: freeTrialValue,
      isPro: menu.isPro,
      menuName: menu.globalSettings.menuName,
      subdomain: menu.globalSettings.subdomain,
      id: menuId,
    });
    // }
  }
  return userMenus;
}
app.delete("/deleteMenu", async (req, res) => {
  console.log("res.params", req.query);
  const menuId = req.query.menuId;

  // menu must exist since we are deleting it
  const existingMenus = await redis.get("menus");
  let menuArray = JSON.parse(existingMenus);

  const menu = menuArray.find((menu) => {
    return menu.id === menuId;
  });

  if (menu) {
    menuArray = menuArray.filter((menu) => {
      return menu.id !== menuId;
    });

    console.log("mar", menuArray);

    await redis.set("menus", JSON.stringify(menuArray));
    console.log("Menu deleted");

    const existingUsers = await redis.get("users");
    const userArray = JSON.parse(existingUsers);
    let user = userArray.find((user) => {
      return user.menusIds.includes(menuId);
    });

    if (user) {
      console.log("menu found");
      user.menusIds = user.menusIds.filter((id) => id !== menuId);

      await redis.set("users", JSON.stringify(userArray));
    }

    return res.status(200).send("Menu deleted");
  }
});
app.get("/getMenus", async (req, res) => {
  const client = req.query.client;
  console.log("Asked for menus for ", client);
  const menusForClient = await getMenusForClient(client);
  return res.status(200).json({
    success: true,
    menus: menusForClient,
  });
});
app.get("/generateNewMenu", async (req, res) => {
  const client = req.query.client;
  await generateAndAddNewDefaultMenu(client);

  const menusForClient = await getMenusForClient(client);

  return res.status(200).json({
    success: true,
    message: "New menu created",
    newMenus: menusForClient,
  });
});
app.post("/publishMenu", async (req, res) => {
  const { menuId } = req.body;

  // menu must exist
  const existingMenus = await redis.get("menus");
  const menuArray = JSON.parse(existingMenus);
  const menu = menuArray.find((menu) => {
    return menu.id === menuId;
  });
  menu.isPublished = true;

  await redis.set("menus", JSON.stringify(menuArray));

  console.log("Menu was published");

  return res.status(200).send("Menu is published");
});
app.get("/subdomainAvailability", async (req, res) => {
  const subdomain = req.query.subdomain;
  console.log("Checking for subdomain availability", subdomain);
  const existingMenus = await redis.get("menus");

  const menuArray = JSON.parse(existingMenus);

  const menu = menuArray.find(
    (menu) => menu.globalSettings.subdomain === subdomain
  );

  console.log("menu", menu);
  if (menu) {
    return res.status(201).send("taken");
  } else {
    return res.status(201).send("free");
  }
});
app.get("/checkClientName", async (req, res) => {
  const clientName = req.query.clientName;
  const existingUsers = await redis.get("users");
  if (!existingUsers) {
    return res.status(201).send("Client name is free");
  }
  const usersArray = JSON.parse(existingUsers);
  const user = usersArray.find((u) => u.clientName === clientName);

  if (user) {
    return res.status(400).send("Client name taken");
  } else {
    return res.status(201).send("Client name is free");
  }
});

function calculateTimestampForTomorrow() {
  // Get the current date and time
  const currentDate = new Date();
  // Calculate the timestamp for 1 day from now (add 1 day worth of milliseconds)
  const timestampForTomorrow =
    currentDate.getTime() + 24 * 60 * 60 * 1000;
  return timestampForTomorrow;
}
app.post("/enableFreeTrialForMenu", async (req, res) => {
  const { menuId } = req.body;
  const existingMenus = await redis.get("menus");
  const menuArray = JSON.parse(existingMenus);
  const menu = menuArray.find((menu) => {
    return menu.id === menuId;
  });

  if (!menu.isOnFreeTrial) {
    menu.isOnFreeTrial = calculateTimestampForTomorrow().toString();
  }

  await redis.set("menus", JSON.stringify(menuArray));

  console.log("Menu subscribed to Free Trial", menuId);

  return res.status(200).send("Menu upgraded to Free Trial");
});
app.post("/subscribeMenuToPro", async (req, res) => {
  const { menuId } = req.body;

  const existingMenus = await redis.get("menus");
  const menuArray = JSON.parse(existingMenus);
  const menu = menuArray.find((menu) => {
    return menu.id === menuId;
  });

  menu.isPro = true;
  await redis.set("menus", JSON.stringify(menuArray));

  console.log("Menu subscribed to Pro", menuId);

  return res.status(200).send("Menu upgraded to PRO");
});
app.get("/menuItems", async (req, res) => {
  const newSpreadSheetURL = req.query.newSpreadSheetURL;
  console.log("Asked for menu items from link", newSpreadSheetURL);

  const spreadsheetId = extractSpreadsheetId(newSpreadSheetURL);

  const parser = new PublicGoogleSheetsParser(spreadsheetId);

  parser.parse().then((menuItems) => {
    res.json({ menuItems });
  });
});

app.get("/menu", async (req, res) => {
  const menuId = req.query.menuId;
  const subdomain = req.query.subdomain;

  let menu = null;
  const existingMenus = await redis.get("menus");
  const menuArray = JSON.parse(existingMenus);
  if (menuId) {
    console.log("Menu Requested with menuId");
    // there should always be a menu since we clicked in dashboard edit button
    menu = menuArray.find((menu) => {
      return menu.id === menuId;
    });
  }

  if (subdomain) {
    console.log("Menu Requested with subdomain");
    // there should always be a menu since we clicked in dashboard edit button
    menu = menuArray.find((menu) => {
      return menu.globalSettings.subdomain === subdomain;
    });

    if (menu && !menu.isPublished) {
      menu = "not published";
    }
  }
  if (menu === "not published") {
    return res.status(403).send("Menu not published yet");
  }
  if (!menu) {
    return res.status(404).send("Menu doesnt eixst");
  }
  // console.log("menu", menu);
  const menuSpreadsheetId = extractSpreadsheetId(
    menu.globalSettings.spreadSheetURL
  );
  const parser = new PublicGoogleSheetsParser(menuSpreadsheetId);

  parser.parse().then((menuItemsArray) => {
    res.json({
      menuItems: menuItemsArray,
      globalSettings: menu.globalSettings,
    });
  });
});

// AUTH
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Trying to login", email, " ", password);

    // Retrieve users from Redis
    const existingUsers = await redis.get("users");

    if (!existingUsers) {
      return res.status(401).json({
        success: false,
        message: "Login failed. Invalid email or password",
      });
    }

    const usersArray = JSON.parse(existingUsers);

    console.log("usersArray", usersArray);

    // Check if a user with the provided email and password exists
    const user = usersArray.find(
      (u) => u.email === email && u.password === password
    );
    console.log("user", user);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Login failed. Invalid email/password",
      });
    }

    // uncomment to remove milisecond blink for menus

    // const menus = await getMenusForClient(user.clientName);
    // user.menus = menus;

    // remove password to dont send it back for login info

    console.log("new user", user);
    delete user.password;
    return res.status(200).json({
      success: true,
      message: "Login successful",
      user,
      token: generateAuthToken(user.id),
    });
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ success: false, message: "An error occurred" });
  }
});
app.post("/updateUserInfo", async (req, res) => {
  const { contactName, contactNumber, email } = req.body;
  console.log("req.body", req.body);

  const existingUsers = await redis.get("users");
  const userArray = JSON.parse(existingUsers);
  const user = userArray.find((user) => user.email === email);

  user.contactName = contactName;
  user.contactNumber = contactNumber;

  await redis.set("users", JSON.stringify(userArray));

  delete user.password;
  res.status(200).json({
    success: true,
    message: "Login successful",
    user,
    token: generateAuthToken(user.id),
  });
});

app.post("/signup", async (req, res) => {
  try {
    const {
      password,
      email,
      clientName,
      contactName,
      contactNumber,
    } = req.body;
    let userId = generateShortID(6); // Generate a short ID

    // Check if the user ID is already in use
    const existingUsers = await redis.get("users");

    let userArray = [];
    if (existingUsers) {
      userArray = JSON.parse(existingUsers);

      // Check if the generated user ID is already in use
      while (userArray.some((user) => user.id === userId)) {
        userId = generateShortID(6); // Generate a new ID
      }
    }

    // Check if a user with the same email already exists
    const existingUser = userArray.find(
      (user) => user.email === email
    );

    if (existingUser) {
      return res
        .status(400)
        .send("User with the same email already exists");
    }

    // Add the new user to the array

    const newUser = {
      id: userId,
      password,
      email,
      clientName,
      menusIds: [],
      menus: [],
      createdAt: Date.now().toString(),
      contactName,
      contactNumber,
    };

    console.log("new user created", newUser);
    userArray.push(newUser);

    // Update the 'users' key in Redis
    await redis.set("users", JSON.stringify(userArray));

    console.log("New user created");
    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred");
  }
});
// returns the globalsettings for a client

// not needed for now
// app.get("/loadClientData", (req, res) => {
//   const client = req.query.client;
//   res.json(globalSettings[client]);
// });

// switch to supabase?

// load global settings per menu

// update global settings per menu
// when client updates gs per menu, we might need to update client data
// update client data

// LATER TODO

// enable pro version
function extractSpreadsheetId(link) {
  // Regular expression to match the spreadsheet ID
  const regex = /\/spreadsheets\/d\/([a-zA-Z0-9_-]+)\/edit/;

  // Use the regular expression to extract the ID
  const match = link.match(regex);

  // Check if a match is found
  if (match && match[1]) {
    return match[1];
  } else {
    return null; // Return null if no match is found
  }
}
// returns the menu for a client ( one client can has more than one menus )

// sends a message to a phone numbers on whatsapp
app.post("/placeOrder", (req, res) => {
  const { message, number } = req.body;
  console.log("message ", message);

  whatsappRestAPI.message
    .sendMessage(`${number}@c.us`, null, message)
    .then((data) => {
      console.log(data);
      console.log("success");
      res.json("Order placed");
    });
});

async function createDemoMenusAndUsers() {
  const demoMenus = [];
  // published with default Menu 1
  const demoMenu1 = createNewMenu("demo");
  demoMenu1.isPublished = true;
  demoMenu1.isPro = true;
  demoMenu1.globalSettings.subdomain = "demo1";
  demoMenu1.ordersEnabled = true;
  demoMenu1.globalSettings.card.buttonAction = "cart";
  demoMenu1.globalSettings.spreadSheetURL =
    "https://docs.google.com/spreadsheets/d/1i8s74vfPOwOyckvrwzxXBE7j_-0LPJR2rGRgyfwNDWU/edit#gid=0";

  // published with default Menu 2
  const demoMenu2 = createNewMenu("thedemo");
  demoMenu2.isPublished = true;
  demoMenu2.globalSettings.subdomain = "demo2";

  demoMenu2.globalSettings.spreadSheetURL =
    "https://docs.google.com/spreadsheets/d/14_N9Lk0APCXrA1lcCrCEeiE-KFkbho125bk8RWuu5T4/edit#gid=0";

  // published with custom playing around shopping list

  const demoMenu3 = createNewMenu("thedemo");
  demoMenu3.globalSettings.subdomain = "demo3";
  demoMenu3.isPublished = true;
  demoMenu3.globalSettings.spreadSheetURL =
    "https://docs.google.com/spreadsheets/d/14_N9Lk0APCXrA1lcCrCEeiE-KFkbho125bk8RWuu5T4/edit#gid=0";

  // published with custom electronics Neptun stuff

  const demoMenu4 = createNewMenu("thedemo");
  demoMenu4.isPublished = true;
  demoMenu4.globalSettings.subdomain = "demo4";

  demoMenu4.globalSettings.spreadSheetURL =
    "https://docs.google.com/spreadsheets/d/14_N9Lk0APCXrA1lcCrCEeiE-KFkbho125bk8RWuu5T4/edit#gid=0";

  // demo 5 is not published
  const demoMenu5 = createNewMenu("thedemo");
  demoMenu5.isPublished = false;
  demoMenu5.globalSettings.subdomain = "demo5";
  demoMenu5.globalSettings.spreadSheetURL =
    "https://docs.google.com/spreadsheets/d/14_N9Lk0APCXrA1lcCrCEeiE-KFkbho125bk8RWuu5T4/edit#gid=0";

  demoMenus.push(demoMenu1);
  demoMenus.push(demoMenu2);
  demoMenus.push(demoMenu3);
  demoMenus.push(demoMenu4);
  demoMenus.push(demoMenu5);

  const existingMenus = await redis.get("menus");
  if (!existingMenus) {
    await redis.set("menus", JSON.stringify(demoMenus));
  } else {
    let menuArray = JSON.parse(existingMenus);
    await redis.set(
      "menus",
      JSON.stringify([...menuArray, ...demoMenus])
    );
  }

  const demoUsers = [];
  const demoUser1 = {
    id: generateShortID(6),
    password: "demo",
    email: "demo@demo.com",
    clientName: "thedemo",
    menusIds: [
      demoMenu1.id,
      demoMenu2.id,
      demoMenu3.id,
      demoMenu4.id,
      demoMenu5.id,
    ],
    menus: [],
    createdAt: Date.now().toString(),
    contactName: "Demo User",
    contactNumber: "Demo Number",
  };
  demoUsers.push(demoUser1);
  const existingUsers = await redis.get("users");
  if (!existingUsers) {
    console.log("demoUser1", demoUsers);
    await redis.set("users", JSON.stringify(demoUsers));
  } else {
    let userArray = JSON.parse(existingUsers);
    console.log("userArray", userArray);

    console.log("demoUser2", [...userArray, ...demoUsers]);

    await redis.set(
      "users",
      JSON.stringify([...userArray, ...demoUsers])
    );
  }

  // Check if a user with the same email already exists
}

app.get("/populateWithDemo", async (req, res) => {
  await createDemoMenusAndUsers();
  console.log("Database seeded with demo");

  return res.status(200).send("Database seeded with demo");
});

app.get("/wipeDatabase", async (req, res) => {
  await redis.set("users", JSON.stringify([]));
  await redis.set("menus", JSON.stringify([]));
  console.log("Database deleted");
  return res.status(200).send("Database deleted");
});

app.get("/getAllExistingMenus", async (req, res) => {
  const existingMenus = await redis.get("menus");
  const menuArray = JSON.parse(existingMenus);

  console.log("All existing menus returned");

  return res.status(200).json({
    allMenus: menuArray,
  });
});

app.get("/getAllExistingUsers", async (req, res) => {
  const existingUsers = await redis.get("users");
  const userArray = JSON.parse(existingUsers);

  console.log("All existing menus returned");

  return res.status(200).json({
    allUsers: userArray,
  });
});

// createDemoMenusAndUsers();
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
