import Blog from "./blogModel.js";
import User from "./userModel.js"
import Favorites from "./favoritesModel.js";

User.hasMany(Blog)
Blog.belongsTo(User)

User.hasMany(Favorites)
Favorites.belongsTo(User)

export {
    Blog,
    User,
    Favorites
}