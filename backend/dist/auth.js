"use strict";
exports.__esModule = true;
exports.handleAuthentication = void 0;
var users_1 = require("./users");
var api_config_1 = require("./api-config");
var jwt = require("jsonwebtoken");
var handleAuthentication = function (req, resp) {
    var user = req.body;
    // resp.json({message: 'ola'})
    if (isValid(user)) {
        var dbUser = users_1.users[user.email];
        var token = jwt.sign({ sub: dbUser.email, iss: 'meat-api' }, api_config_1.apiConfig.secret);
        resp.json({ name: dbUser.name, email: dbUser.email, accessToken: token });
    }
    else {
        resp.status(403).json({ message: "Dados inválido, mas como??" });
    }
};
exports.handleAuthentication = handleAuthentication;
function isValid(user) {
    if (!user) {
        return false;
    }
    else {
        var dbUser = users_1.users[user.email];
        return dbUser !== undefined && dbUser.matches(user);
    }
}
