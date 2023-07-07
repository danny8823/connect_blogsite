import Blog from "./blogModel.js";
import User from "./userModel.js"


User.hasMany(Blog, {foreignKey: 'userId'})
Blog.belongsTo(User, {foreignKey: 'userId'})

export {
    Blog,
    User
}