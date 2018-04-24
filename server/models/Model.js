/**
 * @file 所有model的基类
 * @author Renguang Dong <dongrenguang@gmail.com>
 */

/**
 * 空的构造函数
 *
 * @constructor
 */
function Model() {

}

/**
 * 获取模型对象的对象字面量形式
 *
 * @return {Object}
 */
Model.prototype.getPlainObject = function () {
    const result = {};
    for (let prop in this) {
        if (this.hasOwnProperty(prop)) {
            result[prop] = this[prop];
        }
    }
    return result;
};


module.exports = Model;
