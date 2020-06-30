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

  const fetchPendingOrders = () => {
    const query = {
      text: `SELECT id as order_id, user_id, placed_at, special_instructions
            FROM orders
            WHERE order_status = 'pending';`
    }
    return db.query(query).then(result => JSON.stringify(result.rows));
  };

  const fetchPendingOrderDetails = () => {
    const query = {
      text: `SELECT orders.id as order_id, menu_items.name, ordered_items.qty
      FROM ordered_items
      JOIN menu_items ON menu_items.id = ordered_items.menu_item_id
      JOIN orders ON orders.id = ordered_items.order_id
      WHERE orders.order_status = 'pending';`
    }
    return db.query(query).then(result => JSON.stringify(result.rows));
  }

  // const addMenuItem = (menu_item_id, qty) => {
  //   // const query = {
  //   //   text: 'INSERT INTO ordered_items(order_id, menu_item_id, price_charged, qty) VALUES ($1, $2, $3, $4) RETURNING *',
  //   //   values: [order_id, menu_item_id, price_charged, qty]
  //   // }
  //     const query = {
  //       text: 'INSERT INTO ordered_items(menu_item_id, qty) VALUES ($1, $2) RETURNING *',
  //       values: [menu_item_id, qty]
  //     }
  //     return db.query(query).then(result => result.rows)
  //   };

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

  const getCompletedOrder = () => {
    const query = {
      text: `SELECT ordered_items.id as ordered_items_id, orders.* FROM ordered_items
      JOIN orders ON orders.id = order_id
      WHERE ordered_items.id = 1;`,
      // Will change this WHERE to be dynamic after
    };
    return db.query(query).then((result) => result.rows);
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
    // addMenuItem,
    getMenuItems,
    // getOrders,
    getCompletedOrder,
    getUsers,
    placeOrder,
    addUser,
    registerUser,
    getUserByEmail,
    fetchPendingOrders,
    fetchPendingOrderDetails
  };
};
