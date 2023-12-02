"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var rs = require("readline-sync");
var crypto = require("node:crypto");
var fs = require("node:fs");
var user_1 = require("./user");
var book_1 = require("./book");
var magazzine_1 = require("./magazzine");
var itemMmanager_1 = require("./itemMmanager");
var userManager_1 = require("./userManager");
var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
        this.users = [];
        this.userManager = [];
        this.loans = [];
        this.menuOptions = ["readItems", "addItems", "deleteItems", "loan", "readUsers", "addUser", "deleteUsers"
        ];
        this.items = [];
        this.users = [];
        this.userManager = [];
        this.loans = [];
    }
    ;
    Library.prototype.readUsers = function () {
        var readUsers = fs.readFileSync("./users.json", { encoding: "utf-8" });
        if (readUsers) {
            this.items = JSON.parse(readUsers);
            console.log("Usuarios");
            if (!this.users.length) {
                console.log("No se encontraron.\n");
            }
            else {
                this.users.forEach(function (users) {
                    console.log("\n                        ID: ".concat(users.id, "\n                        name: ").concat(users.name, "\n                        ---\n                    "));
                });
            }
        }
        console.log(readUsers);
        rs.keyInPause("\n");
    };
    ;
    Library.prototype.addUsers = function () {
        console.log("Nuevo usuario");
        rs.keyInPause("\n");
        var readUsers = fs.readFileSync("./users.json", { encoding: "utf-8" });
        if (readUsers) {
            this.items = JSON.parse(readUsers);
        }
        var name = rs.question("Ingrese el nombre del nuemvo usuario: ");
        var address = rs.question("Ingrese una direccion: ");
        var numberPhone = rs.questionInt("Ingrese su numero telefonico:");
        var newUser = new user_1.User(name, address, numberPhone);
        this.users.push(newUser);
        console.log(newUser);
        rs.keyInPause("\n");
        userManager_1.UserManager.appendUser(this.users);
        console.log(this.users);
        rs.keyInPause("\n");
    };
    ;
    Library.prototype.deleteUser = function () {
        console.log("Borrar usuario");
        var idToDelete = rs.question("Ingrese el id del usuario que desea eliminar: ");
        var recordIndex = this.users.findIndex(function (user) { return user.id === idToDelete; });
        if (recordIndex !== -1) {
            var recordToDelete = this.users[recordIndex];
            var confirmation = rs.keyInYN("Queres eliminar ".concat(recordToDelete.id, "? (Y/N)"));
            if (confirmation) {
                this.users.splice(recordIndex, 1);
                userManager_1.UserManager.appendUser(this.users);
            }
            else {
                console.log("Eliminacion cancelada. \n");
            }
        }
        else {
            console.log("Usuario no encontrado.");
        }
        rs.keyInPause();
    };
    ;
    Library.prototype.loanItem = function () {
        var usersData = JSON.parse(fs.readFileSync('./users.json', 'utf-8'));
        var itemsData = JSON.parse(fs.readFileSync('./items.json', 'utf-8'));
        var userId = rs.question('Ingrese el ID de su usuario: ');
        var user = usersData.find(function (users) { return users.id === userId; });
        if (!user) {
            console.log('Usuario no encontrado');
        }
        else {
            console.log('Lista de artículos disponibles:');
            itemsData.forEach(function (item, index) {
                if (item.isAvailable) {
                    console.log("".concat(index + 1, ". ID: ").concat(item.id, ", T\u00EDtulo: ").concat(item.title));
                }
            });
            var itemId_1 = rs.question('Ingrese el ID del artículo deseado: ');
            var item = itemsData.find(function (item) { return item.id === itemId_1; });
            if (!item) {
                console.log('Artículo no encontrado');
            }
            else {
                var loan = {
                    userId: user.id,
                    itemId: item.id,
                    loanDate: new Date()
                };
                var loansData = JSON.parse(fs.readFileSync('./loans.json', 'utf-8'));
                loansData.push(loan);
                fs.writeFileSync('./loans.json', JSON.stringify(loansData, null, 2));
                console.log('Préstamo realizado con éxito .');
                rs.keyInPause();
                console.log("".concat(user.id, ".").concat(user.name, " recibio un prestamo de ID: ").concat(item.id, ", T\u00EDtulo: ").concat(item.title, ", a devolver ").concat(item.returnDate));
                rs.keyInPause();
            }
        }
    };
    ;
    Library.prototype.addItem = function () {
        console.log("Item.");
        rs.keyInPause("\n");
        var readItems = fs.readFileSync("./items.json", { encoding: "utf-8" });
        if (readItems) {
            this.items = JSON.parse(readItems);
        }
        var type = rs.question("Ingrese de que tipo es: book o magazzine: ");
        if (type == "book") {
            var author = rs.question("Ingrese el autor: ");
            var title = rs.question("Ingrese el titulo: ");
            var year = rs.question("Ingrese el año: ");
            var id = crypto.randomUUID();
            var newItem = new book_1.Book(title, author, year, id);
            this.items.push(newItem);
            console.log(newItem);
            rs.keyInPause("\n");
        }
        else if (type == "magazzine") {
            var editor = rs.question("Ingrese el editor: ");
            var title = rs.question("Ingrese el titulo: ");
            var year = rs.question("Ingrese el año: ");
            var id = crypto.randomUUID();
            var newItem = new magazzine_1.Magazzine(title, editor, year, id);
            this.items.push(newItem);
            console.log(newItem);
            rs.keyInPause("\n");
        }
        itemMmanager_1.itemManager.appendItem(this.items);
        console.log(this.items);
    };
    ;
    Library.prototype.deleteItem = function () {
        console.log("delete");
        var idToDelete = rs.question("Ingrese el id que desea eliminar:");
        var recordIndex = this.items.findIndex(function (item) { return item.id === idToDelete; });
        if (recordIndex !== -1) {
            var recordToDelete = this.items[recordIndex];
            var confirmation = rs.keyInYN("Queres eliminar ".concat(recordToDelete.id, "? (Y/N)"));
            if (confirmation) {
                this.items.splice(recordIndex, 1);
                itemMmanager_1.itemManager.appendItem(this.items);
            }
            else {
                console.log("Eliminacion cancelada. Item no eliminado. \n");
            }
        }
        else {
            console.log("Item no encontrado.");
        }
        rs.keyInPause();
    };
    ;
    Library.prototype.readItems = function () {
        var readItems = fs.readFileSync("./items.json", { encoding: "utf-8" });
        if (readItems) {
            this.items = JSON.parse(readItems);
            console.log("Items");
            if (!this.items.length) {
                console.log("No se encontraron.\n");
            }
            else {
                this.items.forEach(function (item) {
                    console.log("\n                        ID: ".concat(item.id, "\n                        Title: ").concat(item.title, "\n                        Year: ").concat(item.year, "\n                        ---\n                    "));
                });
            }
        }
        console.log(readItems);
        rs.keyInPause("\n");
    };
    ;
    Library.prototype.menu = function () {
        while (true) {
            console.clear();
            var choice = rs.keyInSelect(this.menuOptions);
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
    ;
    return Library;
}());
exports.Library = Library;
var sarasabook = new Library();
//console.log(sarasabook.readItems());
sarasabook.menu();
function readItems() {
    throw new Error("Function not implemented.");
}
