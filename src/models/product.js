import {Sequelize} from "sequelize";
import databaseProvider from "../DatabaseProvider";

const MODEL_NAME = "product";

databaseProvider.defineModel(
    MODEL_NAME,
    {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.DataTypes.STRING,
        }
    }
)