import Blog from "./blogModel.js";
import User from "./userModel.js"


User.hasMany(Blog)
Blog.belongsTo(User)

export {
    Blog,
    User
}