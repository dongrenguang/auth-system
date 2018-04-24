/**
 * @file 用户数据存取对象
 * @author Renguang Dong <dongrenguang@gmail.com>
 */

const dbHelper = require('../utils/dbHelper');

module.exports = {

    /**
     * 创建新用户
     *
     * @param  {Object}  user 用户对象
     * @return {Promise}
     */
    async create(user) {
        try {
            return await dbHelper.insertData('user', user);
        }
        catch (e) {
            console.error(e);
        }
    }
};
