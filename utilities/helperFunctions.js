import jwt from "jsonwebtoken";
import { randomUUID } from "crypto";

export function generateAuthToken(userId) {
  const secretKey = "mario";
  // Create a token with user ID as the payload
  const token = jwt.sign({ userId }, secretKey, {
    expiresIn: "1h",
  }); // Expires in 1 hour

  return token;
}
export function calculateTimestampForTomorrow() {
  // Get the current date and time
  const currentDate = new Date();
  // Calculate the timestamp for 1 day from now (add 1 day worth of milliseconds)
  const timestampForTomorrow =
    currentDate.getTime() + 24 * 60 * 60 * 1000;
  return timestampForTomorrow;
}

export function generateShortID(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let shortID = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    shortID += characters.charAt(randomIndex);
  }

  return shortID;
}
export function generateRandomCode(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let code = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }

  return code;
}

export function generateDefaultGlobalSettings() {
  const defaultGlobalSettings = {
    ordersEnabled: false,
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

export function generateMenu(client = "") {
  return {
    isPro: false,
    isOnFreeTrial: false,
    isPublished: false,
    id: randomUUID(),
    items: [...defaultItems],
    globalSettings: { ...generateDefaultGlobalSettings(), client },
  };
}
