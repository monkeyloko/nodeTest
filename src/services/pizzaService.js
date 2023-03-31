import Pizza from '../models/pizza.js';
import sql from 'mssql';
import configDB from '../models/db.js';

export const getAll = async () => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().query('SELECT * FROM Pizzas')

    console.log(results);
}
export const getById = async (id) => {
    const returnEntity = null;
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("pId",sql.Int, id).query('SELECT * FROM Pizzas WHERE id = @pId'
    returnEntity)

    console.log(results);
}