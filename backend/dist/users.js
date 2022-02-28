"use strict";
exports.__esModule = true;
exports.users = exports.User = void 0;
var User = /** @class */ (function () {
    function User(email, nome, password) {
        this.email = email;
        this.nome = nome;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "lucas@gmail.com": new User("lucas@gmail.com", "Lucas", "123"),
    "rhay@gmail.com": new User("rhay@gmail.com", "Rhay", "321"),
    "teste": new User("1", "ola sou teste", "1")
};
