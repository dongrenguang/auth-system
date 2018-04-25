/**
 * @file 用户服务
 * @author Renguang Dong <dongrenguang@gmail.com>
 */

const userDao = require('../daos/userDao');

module.exports = {

    /**
     * 创建新用户
     *
     * @param  {Object}  user 用户对象
     * @return {Promise}
     */
    async create(user) {
        try {
            return await userDao.create(user);
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
            return await userDao.update(user);
        }
        catch (e) {
            console.error(e);
        }
    },


    /**
     * 根据用户名获取用户信息
     *
     * @param  {number}  id 用户id
     * @return {Promise}
     */
    async getUserById(id) {
        try {
            return await userDao.getUserById(id);
        }
        catch (e) {
            console.error(e);
        }
    },


    /**
     * 根据用户id获取用户信息
     *
     * @param  {string}  name 用户名
     * @return {Promise}
     */
    async getUserByName(name) {
        try {
            return await userDao.getUserByName(name);
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
            return await userDao.getUserByNameAndPassword(name, password);
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
            return await userDao.getExistOne(user);
        }
        catch (e) {
            console.error(e);
        }
    }
};
