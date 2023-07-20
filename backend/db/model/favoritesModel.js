import { Sequelize } from "sequelize";
import { db } from "../db.js";

const Favorites = db.define('favorites', {
    blogId: {
        type: Sequelize.INTEGER,
        allowNull: false 
    }
})

export default Favorites