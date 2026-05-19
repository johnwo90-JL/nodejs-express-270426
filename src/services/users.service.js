import { DatabaseProvider, sqlite3Provider } from "../providers/db.sqlite3.provider.js";

import { UsersModel } from "../models/users.model.js";

const provider = new sqlite3Provider();

export class UsersService {
    /**  @type {DatabaseProvider | null} */
    #dbProvider = null;

    async init(dbProvider) {
        this.#dbProvider = dbProvider;
        await this.#dbProvider.init();
    }
 
    printModels() {console.log(this.#dbProvider.getModels());}
}

const myUsersService = new UsersService();
await myUsersService.init(provider);
console.log(UsersModel(provider));

myUsersService.printModels()