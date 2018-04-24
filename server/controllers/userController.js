/**
 * @file 用户控制器
 * @author Renguang Dong <dongrenguang@gmail.com>
 */

const User = require('../models/User');
const userService = require('../services/userService');

module.exports = {

    /**
     * 注册
     *
     * @return {Promise}
     */
    async signUp() {
        try {
            const user = new User({
                name: 'Ryan02',
                password: 'abcd1234',
                email: 'ryan02@gmail.com',
                gender: 0,
                phone: '15811112223'
            }).getPlainObject();
            const result = await userService.create(user);

            if (result && result.insertId * 1 > 0) {
                console.log('注册成功', result);
            }
            else {
                console.log('注册失败', result);
            }


        }
        catch (e) {
            console.error(e);
        }
    },

    /**
     * 登录
     *
     * @return {Promise}
     */
    async signIn() {
        try {

        }
        catch (e) {
            console.error(e);
        }
    },

    /**
     * 获取用户信息
     *
     * @return {Promise}
     */
    async getLoginUserInfo() {
        try {

        }
        catch (e) {
            console.error(e);
        }
    },

    /**
     * 验证用户是否已经登录
     *
     * @return {Promise}
     */
    async validateLogin() {
        try {

        }
        catch (e) {
            console.error(e);
        }
    }
};
