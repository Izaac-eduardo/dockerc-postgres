import Sewueliexe, {Model, DataTypes} from "sequelize";
import Datatypes from "sequelize";

class User extends Model {
    static init(sequelize){

        super.init( 
            {
              name: {
               type: DataTypes.STRING,

        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      }   
            }, {sequelize})}
}
export default User