module.exports = db => {
  const getMenuItems = () => {
    const query = {
      text: `SELECT * FROM menu_items;`
      // values: []
    }
    return db.query(query).then(result => result.rows)
  };

  // const getOrder = () => {
  //   const query = {
  //     text: `SELECT * FROM orders;`,
  //     // values: []
  //   }
  //   return db.query(query).then(result => result.rows)
  // };

  // const placeOrder = () => {
  //   const query = {
  //     text: 'INSERT INTO orders(...) VALUES ($1) RETURNING *',
  //     // values: []
  //   }
  //   return db.query(query).then(result => result.rows)
  // };

  // const getCompletedOrder = () => {
  //   const query = {
  //     text: `SELECT * FROM ordered_items;`,
  //     // values: []
  //   }
  //   return db.query(query).then(result => result.rows)
  // };

  // Template default
  const getUsers = () => {
    const query = {
      text: `SELECT * FROM users;`,
      // values: []
    }
    return db.query(query).then(result => result.rows)
  };

  // Template default
  const addUser = (name, email, password) => {
    const query = {
      text: 'INSERT INTO users(name) VALUES ($1) RETURNING *',
      values: [name]
    }
    return db.query(query).then(result => result.rows)
  }
  return {
    getMenuItems,
    // getOrder,
    // getCompletedOrder,
    getUsers,
    addUser,
  }
}