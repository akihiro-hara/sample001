"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbRepository_1 = require("./dbRepository");
exports.getItems = (req, res) => {
    dbRepository_1.cosmosDb.getItems((err, results) => {
        if (err > 0) {
            res.sendStatus(err);
        }
        else {
            res.status(200).json(results);
        }
    });
};
exports.getItem = (req, res) => {
    dbRepository_1.cosmosDb.getItem(req.params.id, (err, result) => {
        if (err > 0) {
            res.sendStatus(err);
        }
        else {
            res.status(200).json(result);
        }
    });
};
exports.addItem = (req, res) => {
    dbRepository_1.cosmosDb.addItem(req.body, (err, result) => {
        if (err > 0) {
            res.sendStatus(err);
        }
        else {
            res.status(201).json(result);
        }
    });
};
exports.updateItem = (req, res) => {
    dbRepository_1.cosmosDb.updateItem(req.params.id, req.body, (err, result) => {
        if (err > 0) {
            res.sendStatus(err);
        }
        else {
            res.status(200).json(result);
        }
    });
};
exports.deleteItem = (req, res) => {
    dbRepository_1.cosmosDb.deleteItem(req.params.id, (err, result) => {
        if (err > 0) {
            res.sendStatus(err);
        }
        else {
            res.sendStatus(204);
        }
    });
};
//# sourceMappingURL=pipaController.js.map