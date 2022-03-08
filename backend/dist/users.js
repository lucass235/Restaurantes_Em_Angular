"use strict";
exports.__esModule = true;
exports.users = exports.User = void 0;
var User = /** @class */ (function () {
    function User(email, name, password, img) {
        this.email = email;
        this.name = name;
        this.password = password;
        this.img = img;
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
    "lucas@gmail.com": new User("lucas@gmail.com", "Lucas dos Santos", "123", "./img/64389529.jpg"),
    "rhay@gmail.com": new User("rhay@gmail.com", "Rhaylene", "321", "./img/pp.jpg")
};
