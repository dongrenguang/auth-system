/**
 * @file 用户数据存取对象
 * @author Renguang Dong <dongrenguang@gmail.com>
 */

const dbHelper = require('../utils/dbHelper');
const table = 'user';

module.exports = {

    /**
     * 创建新用户
     *
     * @param  {Object}  user 用户对象
     * @return {Promise}
     */
    async create(user) {
        try {
            return await dbHelper.insertData(table, user);
        }
        catch (e) {
            console.error(e);
        }
    },


    /**
     * 更新用户信息
     *
     * @param  {Object}  user 用户对象
     * @return {Promise}
     */
    async update(user) {
        try {
            if (!user.id) {
                console.error('None user.id');
            }
            else {
                return await dbHelper.updateData(table, user, user.id);
            }
        }
        catch (e) {
            console.error(e);
        }
    },


    /**
     * 根据用户id获取用户信息
     *
     * @param  {number}  id 用户id
     * @return {Promise}
     */
    async getUserById(id) {
        try {
            // const results = await dbHelper.getDataById(table, id);
            // if (Array.isArray(results) && results.length) {
            //     return results[0];
            // }
            // return null;
            const a = await dbHelper.getDataById(table, id);
            console.log(a);
            return {age: 34}
        }
        catch (e) {
            console.error(e);
        }
    },


    /**
     * 根据用户名获取用户信息
     *
     * @param  {string}  name 用户名
     * @return {Promise}
     */
    async getUserByName(name) {
        try {
            const sql = 'SELECT * FROM ?? WHERE name = ? LIMIT 1';
            const results = await dbHelper.query(sql, [table, name]);
            if (Array.isArray(results) && results.length) {
                return results[0];
            }
            return null;
        }
        catch (e) {
            console.error(e);
        }
    },


    /**
     * 根据用户名合密码获取用户信息
     *
     * @param  {string}  name     用户名
     * @param  {string}  password 密码
     * @return {Promise}
     */
    async getUserByNameAndPassword(name, password) {
        try {
            const sql = 'SELECT * FROM ?? WHERE name = ? AND password = ? LIMIT 1';
            let results =  await dbHelper.query(sql, [table, name, password]);
            if (Array.isArray(results) && results.length) {
                return results[0];
            }
            return null;
        }
        catch (e) {
            console.error(e);
        }
    },


    /**
     * 用户是否已经存在
     *
     * @param  {Object}  user 用户信息
     * @return {Promise}
     */
    async getExistOne(user) {
        try {
            const sql = 'SELECT * FROM ?? WHERE name = ? OR email = ? OR phone = ? LIMIT 1';
            let results =  await dbHelper.query(sql, [table, user.name, user.email, user.phone]);
            if (Array.isArray(results) && results.length) {
                return results[0];
            }
            return null;
        }
        catch (e) {
            console.error(e);
        }
    }
};
