import { ID, Query } from "node-appwrite"
import { users } from "../appwrite.config"
import { parseStringify } from "../utils";

// CREATE APPWRITE USER
export const createUser = async (user: CreateUserParams) => {
    try {
      console.log("User data being created:", {
        email: user.email,
        phone: user.phone,
        name: user.name,
      });
  
      const newuser = await users.create(
        ID.unique(),
        user.email,
        user.phone || "", // Ensure valid phone
        undefined,        // Default password
        user.name
      );
  
      console.log("User created successfully:", newuser);
      return parseStringify(newuser);
    } catch (error: any) {
      if (error && error.code === 409) {
        const existingUser = await users.list([
          Query.equal("email", [user.email]),
        ]);
        return existingUser.users[0];
      }
      console.error("An error occurred while creating a new user:", error);
    }
  };
  