module.exports = db => {
  const getMenuItems = () => {
    const query = {
      text: `SELECT * FROM menu_items;`
    }
    return db.query(query).then(result => result.rows)
  };

  const getOrders = () => {
    const query = {
      text: `SELECT ordered_items.*, menu_items.name FROM ordered_items JOIN menu_items ON menu_items.id = menu_item_id;`,
    }
    return db.query(query).then(result => result.rows)
  };

  // const placeOrder = () => {
  //   const query = {
  //     text: 'INSERT INTO ordered_items(order_id, menu_item_id, price_charged, qty) VALUES ($1, $2, $3, $4) RETURNING *',
  //     values: [order_id, menu_item_id, price_charged, qty]
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
    getOrders,
    // getCompletedOrder,
    getUsers,
    // placeOrder,
    addUser,
  }
}