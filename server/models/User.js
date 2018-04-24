/**
 * @file 用户信息类
 * @author Renguang Dong <dongrenguang@gmail.com>
 */

const Model = require('./Model');

/**
 * 用户信息类
 *
 * @param       {number} id       key
 * @param       {string} name     用户名
 * @param       {string} password 密码
 * @param       {string} email    邮件
 * @param       {number} gender   性别：0表示男，1表示女
 * @param       {string} phone    手机号码
 */
function User({id, name, password, email, gender, phone} = {}) {
    Model.call(this);

    this.id = id;
    this.name = name;
    this.password = password;
    this.email = email;
    this.gender = gender;
    this.phone = phone;
}
User.prototype = new Model();
User.prototype.constructor = User;


module.exports = User;
