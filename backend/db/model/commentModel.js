import { Sequelize } from "sequelize";
import { db } from "../db.js";

const Comment = db.define('comment', {
    comment: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

export default Comment