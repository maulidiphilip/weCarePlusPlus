import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client();
console.log("ENDPOINT:", ENDPOINT);
console.log("PROJECT_ID:", PROJECT_ID);

client
  .setEndpoint(ENDPOINT || "https://cloud.appwrite.io/v1")
  .setProject('67472b4b0039f46dd736')
  .setKey('standard_37e376292a11a54fca599c96312de2064c8da0efb7465ccc0fb90413a8f6f77f640d41810e2f792bb8c9c00105066f49f91a73c0248e402f48ac994501c7117c620989bdeb6c60c3d256a208f5e475064822e7fcd7009e5d3a25c8a8b8630b349aea8c49680ca6ee30ada89566b7418058f60316d9eb659040c290369daa9680');

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
