import { Sequelize } from "sequelize";
import { db } from "../db.js";

const Favorites = db.define('favorites', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    blogId : {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

export default Favorites