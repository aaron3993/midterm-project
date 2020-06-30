module.exports = (db) => {
  const getMenuItems = () => {
    const query = {
      text: `SELECT * FROM menu_items;`,
    };
    return db.query(query).then((result) => result.rows);
  };

  const registerUser = (values) => {
    const query = {
      text: `INSERT INTO users (name, email, password, phone) VALUES ($1, $2, $3, $4) RETURNING id`,
      values
    }
    return db.query(query).then(result => result.rows[0]);
  };

  const getUserByEmail = (email) => {
    const query = {
      text: `SELECT * FROM users WHERE email = $1`,
      values: [email]
    }
    return db.query(query).then(result => result.rows[0]);
  };

  const addMenuItem = (order_id, menu_item_id, price_charged, qty) => {
      const query = {
        text: 'INSERT INTO ordered_items(order_id, menu_item_id, price_charged, qty) VALUES ($1, $2, $3, $4) RETURNING *',
        values: [order_id, menu_item_id, price_charged, qty]
      }
      return db.query(query).then(result => result.rows)
    };

  const getPriceById = (id) => {
    const query = {
      text: `SELECT price FROM menu_items WHERE id = ${id};`
    }
    return db.query(query).then(result => result.rows)
  }
  
  // const getOrders = () => {
  //   const query = {
  //     text: `SELECT ordered_items.*, menu_items.name
  //     FROM ordered_items
  //     JOIN menu_items ON menu_items.id = menu_item_id;`,
  //   }
  //   return db.query(query).then(result => result.rows)
  // };

  const placeOrder = (
    user_id,
    order_placed_at,
    special_instructions,
    order_ready_duration,
    order_ready,
    order_complete_at
  ) => {
    const query = {
      text: `INSERT INTO orders(user_id, order_placed_at, special_instructions, order_ready_duration, order_ready, order_complete_at)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      values: [
        user_id,
        order_placed_at,
        special_instructions,
        order_ready_duration,
        order_ready,
        order_complete_at,
      ],
    };
    return db.query(query).then((result) => result.rows);
  };

  const getLastOrder = () => {
    const query = {
      text: `SELECT MAX(id) FROM ordered_items`
    }
    return db.query(query).then(result => result.rows)
  }

  const getCompletedOrder = () => {
    const query = {
      text: `SELECT users.name as name, users.phone as phone_number, orders.* FROM users
      JOIN orders ON users.id = user_id;`
    }
    return db.query(query).then(result => result.rows)
  };

  // Template default
  const getUsers = () => {
    const query = {
      text: `SELECT * FROM users;`,
    };
    return db.query(query).then((result) => result.rows);
  };

  // Template default
  const getUserByID = (id) => {
    const query = {
      text: `SELECT * FROM users where id=$1;`,
      value: id,
    };
    return db.query(query).then((result) => result.rows);
  };

  // Template default
  const addUser = (name, email, password) => {
    const query = {
      text: "INSERT INTO users(name) VALUES ($1) RETURNING *",
      values: [name],
    };
    return db.query(query).then((result) => result.rows);
  };

  return {
    addMenuItem,
    getMenuItems,
    getPriceById,
    getLastOrder,
    getCompletedOrder,
    getUsers,
    placeOrder,
    addUser,
    registerUser,
    getUserByEmail
  };
};
