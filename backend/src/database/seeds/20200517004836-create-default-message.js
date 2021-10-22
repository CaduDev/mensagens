const detail = "Lorem Ipsum is simply dummy text of the printing"+
  "and typesetting industry. Lorem Ipsum has been the industry's standard "+
  "dummy text ever since the 1500s, when an unknown printer took a "+
  "galley of type and scrambled it to make a type specimen book. It "+
  "has survived not only five centuries, but also the leap into electronic "+
  "typesetting, remaining essentially unchanged. It was popularised in "+
  "the 1960s with the release of Letraset sheets containing Lorem "+
  "Ipsum passages, and more recently with desktop publishing software "+
  "like Aldus PageMaker including versions of Lorem Ipsum."

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'messages',
      [
        {
          id: 1,
          timestamp: new Date(),
          subject: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          detail,
          read: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          timestamp: new Date(),
          subject: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          detail,
          read: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          timestamp: new Date(),
          subject: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          detail,
          read: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          timestamp: new Date(),
          subject: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          detail,
          read: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          timestamp: new Date(),
          subject: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          detail,
          read: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          timestamp: new Date(),
          subject: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          detail,
          read: false,
          created_at: new Date(),
          updated_at: new Date(),
        }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('messages', null, {});
  },
};
