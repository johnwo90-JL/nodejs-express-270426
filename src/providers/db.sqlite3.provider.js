import sqlite3 from "sqlite3";
import { Sequelize } from "sequelize";


export class DatabaseProvider {
    async init() { throw new Error("Not implemented"); }
    getModels() { throw new Error("Not implemented"); }

    /**
     * @param {string} modelName 
     * @param {object} attributes
     */
    define(modelName, attributes) { throw new Error("Not implemented"); }
}


export class sqlite3Provider extends DatabaseProvider {
    /** @type {Sequelize} */
    #sequelize = null;

    async init() {
        // export const sequelize = new Sequelize("sqlite::memory::");
        this.#sequelize = new Sequelize({
            dialect: "sqlite",
            storage: "tmp/db.sqlite3",
        });

        await this.#sequelize.authenticate();
        await this.#sequelize.sync();

        return this.#sequelize;
    }

    getModels() {
        this.#sequelize.models;
    }

    /** @type {<Model<any, any>, any>(modelName: string, attributes: ModelAttributes<Model<any, any>, any>, options?: ModelOptions<Model<any, any>> | undefined): ModelCtor<Model<any, any>>} */
    define(...args) {
        return this.#sequelize.define(...args);
    }
}

