import { DataTypes, TEXT } from "sequelize";
import { randomUUID } from "node:crypto";
import { DatabaseProvider } from "../providers/db.sqlite3.provider.js";

/**
 * 
 * @param {DatabaseProvider} provider 
 */
export function UsersModel(provider) {
    provider.define("User", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: DataTypes.TEXT,
        password: DataTypes.TEXT,
    });

    return provider;
}

console.log("Created user!");