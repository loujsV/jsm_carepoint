import * as sdk from 'node-appwrite';

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID
} = process.env;


if (!process.env.NEXT_PUBLIC_ENDPOINT) {
  throw new Error("Missing necessary environment variables");
}


// Create a new client instance
const client = new sdk.Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
  .setProject('668c3d9400150282240b')
  .setKey('68946b452fcccd9da2dd1de1191a11a5dd2812cad7874b936b6443ab1f2f87972aea94b1a5bd9f7b1d1a2b250a292468b4eaab0c65083269b52e55fa8e5196faee7b716fd314292e4ba67787e4b424a56865d0c5907c6b6df3b4a9db751bd16654818223a122f8d6e00e7013ec26afdfa6564aed4427b2f5657af967bdba4de4');


export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);


// client
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('668c3d9400150282240b')
//     .setKey('68946b452fcccd9da2dd1de1191a11a5dd2812cad7874b936b6443ab1f2f87972aea94b1a5bd9f7b1d1a2b250a292468b4eaab0c65083269b52e55fa8e5196faee7b716fd314292e4ba67787e4b424a56865d0c5907c6b6df3b4a9db751bd16654818223a122f8d6e00e7013ec26afdfa6564aed4427b2f5657af967bdba4de4')
