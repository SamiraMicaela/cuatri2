import * as rs from "readline-sync";
import * as crypto from "node:crypto";
import * as fs from "node:fs";
import { User } from "./user";
import { Item } from "./item";
import { Loan } from "./loan";
import { Book } from "./book";
import { Magazzine } from "./magazzine";
import { itemManager } from "./itemMmanager";
import { UserManager } from "./userManager";
import { loanManager } from "./loanManager";

export class Library {
    private items: Item[] = [];
    private user: User[] = [];
    private userManager: UserManager[] = [];
    private loans: Loan[] = [];
    private isOpen: boolean;


    constructor() {
        this.items = [];
        this.user = [];
        this.userManager = [];
        this.loans = [];

    };

    readUsers() {
        const readUsers = fs.readFileSync("./users.json", { encoding: "utf-8" });

        if (readUsers) {
            this.items = JSON.parse(readUsers);
            console.log("Usuarios");

            if (!this.user.length) {
                console.log("No se encontraron.\n");
            } else {
                this.user.forEach((user) => {
                    console.log(`
                        ID: ${user.id}
                        name: ${user.name}
                        ---
                    `);
                });
            }
        }

        console.log(readUsers);
        rs.keyInPause("\n");

    };

    addUsers() {
        console.log("Nuevo usuario");
        rs.keyInPause("\n");
        const readUsers = fs.readFileSync("./users.json", { encoding: "utf-8" });
        if (readUsers) {
            this.items = JSON.parse(readUsers);
        } const name = rs.question("Ingrese el nombre del nuemvo usuario: ");
        const address = rs.question("Ingrese una direccion: ");
        const numberPhone = rs.questionInt("Ingrese su numero telefonico:");
        const newUser = new User(name, address, numberPhone);
        this.user.push(newUser);
        console.log(newUser);
        rs.keyInPause("\n");

        UserManager.appendUser(this.user);
        console.log(this.user);
        rs.keyInPause("\n");
    };

    deleteUser() {
        console.log("Borrar usuario");
        const idToDelete = rs.question("Ingrese el id del usuario que desea eliminar: ");
        const recordIndex = this.user.findIndex(
            (user) => user.id === idToDelete
        );
        if (recordIndex !== -1) {
            const recordToDelete = this.user[recordIndex];
            const confirmation = rs.keyInYN(
                `Queres eliminar ${recordToDelete.id}? (Y/N)`
            );
            if (confirmation) {
                this.user.splice(recordIndex, 1);
                UserManager.appendUser(this.user);
            } else {
                console.log("Eliminacion cancelada. \n");
            }
        } else {
            console.log("Usuario no encontrado.");
        }
        rs.keyInPause();

    };

    loanItem() {

        const fs = require('fs');
        const readlineSync = require('readline-sync');


        const usersData = JSON.parse(fs.readFileSync('./users.json', 'utf-8'));
        const itemsData = JSON.parse(fs.readFileSync('./items.json', 'utf-8'));


        const userId = readlineSync.question('Ingrese el ID de su usuario: ');


        const user = usersData.find(user => user.id === userId);

        if (!user) {
            console.log('Usuario no encontrado');
        } else {

            console.log('Lista de artículos disponibles:');
            itemsData.forEach((item, index) => {
                if (item.isAvailable) {
                    console.log(`${index + 1}. ID: ${item.id}, Título: ${item.title}`);
                }
            });


            const itemId = readlineSync.question('Ingrese el ID del artículo deseado: ');


            const item = itemsData.find(item => item.id === itemId);

            if (!item) {
                console.log('Artículo no encontrado');
            } else {

                const loan = {
                    userId: user.id,
                    itemId: item.id,
                    loanDate: new Date().toISOString()
                };

                const loansData = JSON.parse(fs.readFileSync('./loans.json', 'utf-8'));
                loansData.push(loan);
                fs.writeFileSync('./loans.json', JSON.stringify(loansData, null, 2));

                
            }
        }
        
        console.log('Préstamo realizado con éxito.');




    };

    addItem(): void {
        console.log(`Item.`);
        rs.keyInPause("\n");
        const readItems = fs.readFileSync("./items.json", { encoding: "utf-8" });
        if (readItems) {
            this.items = JSON.parse(readItems);
        }
        const type = rs.question("Ingrese de que tipo es: book o magazzine: ");
        if (type == "book") {
            const author = rs.question("Ingrese el autor: ");
            const title = rs.question("Ingrese el titulo: ");
            const year = rs.question("Ingrese el año: ");
            const id = crypto.randomUUID();

            const newItem = new Book(title, author, year, id);
            this.items.push(newItem);
            console.log(newItem);
            rs.keyInPause("\n");

        } else if (type == "magazzine") {
            const editor = rs.question("Ingrese el editor: ");
            const title = rs.question("Ingrese el titulo: ");
            const year = rs.question("Ingrese el año: ");
            const id = crypto.randomUUID();

            const newItem = new Magazzine(title, editor, year, id);
            this.items.push(newItem);
            console.log(newItem);
            rs.keyInPause("\n");

        }
        itemManager.appendItem(this.items);
        console.log(this.items);


    };

    deleteItem() {
        console.log("delete");
        const idToDelete = rs.question("Ingrese el id que desea eliminar:");
        const recordIndex = this.items.findIndex(
            (item) => item.id === idToDelete
        );
        if (recordIndex !== -1) {
            const recordToDelete = this.items[recordIndex];
            const confirmation = rs.keyInYN(
                `Queres eliminar ${recordToDelete.id}? (Y/N)`
            );
            if (confirmation) {
                this.items.splice(recordIndex, 1);
                itemManager.appendItem(this.items);
            } else {
                console.log("Eliminacion cancelada. Item no eliminado. \n");
            }
        } else {
            console.log("Item no encontrado.");
        }
        rs.keyInPause();
    };

    readItems() {
        const readItems = fs.readFileSync("./items.json", { encoding: "utf-8" });

        if (readItems) {
            this.items = JSON.parse(readItems);
            console.log("Items");

            if (!this.items.length) {
                console.log("No se encontraron.\n");
            } else {
                this.items.forEach((item) => {
                    console.log(`
                        ID: ${item.id}
                        Title: ${item.title}
                        Year: ${item.year}
                        ---
                    `);
                });
            }
        }

        console.log(readItems);
        rs.keyInPause("\n");
    };




    menu() {
        while (true) {
            console.clear();
            const choice = rs.keyInSelect(this.menuOptions);
            switch (choice) {
                case 0:
                    this.readItems();
                    break;
                case 1:
                    this.addItem();
                    break;
                case 2:
                    this.deleteItem();
                    break;
                case 3:
                    this.loanItem();
                    break;
                case 4:
                    this.readUsers();
                    break;
                case 5:
                    this.addUsers();
                    break;
                case 6:
                    this.deleteUser();
                    break;
                default:
                    console.log("baiiiii xxs");
                    return;


            }
        }
    };

    menuOptions = ["readItems", "addItems", "deleteItems", "loan", "readUsers", "addUser", "deleteUsers"
    ]
}
const sarasabook = new Library();
//console.log(sarasabook.readItems());
sarasabook.menu();


function readItems() {
    throw new Error("Function not implemented.");
}

