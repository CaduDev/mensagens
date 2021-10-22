import Sequelize, { Model } from 'sequelize';

class Message extends Model {
  static init(sequelize) {
    super.init(
      {
        timestamp: Sequelize.DATE,
        subject: Sequelize.STRING,
        detail: Sequelize.STRING,
        read: Sequelize.BOOLEAN,
        canceled_at: Sequelize.DATE,
        canceled_by: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

}

export default Message;
