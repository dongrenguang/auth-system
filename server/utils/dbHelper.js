/**
 * @file 数据库操作辅助工具
 * @author Renguang Dong <dongrenguang@gmail.com>
 */

const mysql = require('mysql');
const dbConfig = require('../../config').database;

const pool = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USERNAME,
    password: dbConfig.PASSWORD,
    database: dbConfig.DATABASE
});

function query(sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            }
            else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(rows);
                    }
                    connection.release();
                });
            }
        });
    });
}

function insertData(table, values) {
    return query('INSERT INTO ?? SET ?', [table, values]);
}

function deleteDataByID(table, id) {
    return query('DELETE FROM ?? WHERE id = ?', [table, id]);
}

function updateData(table, values, id) {
    return query('UPDATE ?? SET ? WHERE id = ?', [table, values, id]);
}

function getDataById(table, id) {
    return query('SELECT * FROM ?? WHERE id = ?', [table, id]);
}

module.exports = {
    query,
    insertData,
    deleteDataByID,
    updateData,
    getDataById
};
