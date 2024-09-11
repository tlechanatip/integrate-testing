"use strict";
// import { Router, Request, Response } from 'express';
// import { Product } from '../model/product';
// const productList: Product[] = [
//     {
//         id: 1,
//         name: 'Bombril',
//         price: 8
//     },
//     {
//         id: 1,
//         name: 'Sausage',
//         price: 3
//     },
//     {
//         id: 2,
//         name: 'Max',
//         price: 5
//     },
//     {
//         id: 2,
//         name: 'Mon',
//         price: 0.5
//     }
// ]
// const getAll = (req: Request, res: Response) => {
//     res.status(200).send(productList);
// }
// export default { getAll }
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../db/product");
const getAll = (req, res) => {
    product_1.default
        .selectAll() //--db/product.ts
        .then((products) => {
        // .then for async call
        res.status(200).send({
            message: "OK",
            result: products,
        });
    })
        .catch((err) => {
        res.status(500).send({
            message: "DATABASE ERROR",
            error: err.code,
        });
    });
};
exports.default = { getAll };
