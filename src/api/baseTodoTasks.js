export const getTodoItems = () => {
  try {
    return Promise.resolve({
      status: 'success',
      data: [
        { id: 1, text: 'Eat', isCompleted: true },
        { id: 2, text: 'Sleep', isCompleted: true },
        { id: 3, text: 'Rave', isCompleted: true },
        { id: 4, text: 'Repeat', isCompleted: true }
      ]
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

module.exports = {
  getTodoItems
};
