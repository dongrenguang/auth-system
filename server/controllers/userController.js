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
            let user = {
                name: 'Ryan03',
                password: 'abcd1234',
                email: 'ryan03@gmail.com',
                gender: 0,
                phone: '15811112203'
            };
            const existOne = await userService.getExistOne(user);
            if (existOne) {
                console.error('username, email or phone has been occupied');
                return;
            }

            user = new User(user).getPlainObject();
            const result = await userService.create(user);

            if (result && result.insertId * 1 > 0) {
                user.id = result.insertId;
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
            const result = await userService.getUserByNameAndPassword('Ryan', 'newpassword2');
            if (result) {
                console.log('sign in success', result);
            }
            else {
                const res = await userService.getUserByName('Ryan');
                if (res) {
                    console.log('Wrong username or password');
                }
                else {
                    console.log('user not exit');
                }
            }
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
    async getUserInfo() {
        try {
            const result = await userService.getUserById(1);
            if (result) {
                console.log(result);
            }
            else {
                console.log('user not exit');
            }
        }
        catch (e) {
            console.error(e);
        }
    },


    /**
     * 更新用户信息
     *
     * @return {Promise}
     */
    async updateUserInfo() {
        try {
            const newUserInfo = {
                id: 1,
                name: 'Ryan',
                email: 'new@gmail.com',
                password: 'newpassword2'
            };
            const result = await userService.update(newUserInfo);
            if (result && result.changedRows) {
                console.log('update success', result);
            }
            else {
                console.log('update failed', result);
            }
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
            // TODO
        }
        catch (e) {
            console.error(e);
        }
    }
};
