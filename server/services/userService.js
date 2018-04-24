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
    }
};
