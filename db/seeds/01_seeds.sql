
INSERT INTO users (name, email, password, phone, role)
VALUES
  ('Devin Sanders', 'tristanjacobs@gmail.com', 'password', '+16477837891', 'customer'),
  ('Iva Harrison', 'allisonjackson@mail.com', 'password', '+16477837891', 'customer'),
  ('Lloyd Jefferson', 'asherpoole@gmx.com', 'password', '+16477837891', 'customer'),
  ('Dale Coleman', 'michaelgray@mail.com', 'password', '+16477837891', 'customer'),
  ('Alejandro Osborne', 'ariaatkinson@outlook.com', 'password', '+16477837891', 'customer'),
  ('Nell Medina', 'juliansantos@aol.com', 'password', '+16477837891', 'customer'),
  ('Sandeep', 'sandeep@LHL.com', 'password', '+16477837891', 'customer'),
  ('Sophie', 'sophie@LHL.com', 'password', '+12064886774', 'customer'),
  ('Aaron', 'aaron@LHL.com', 'password', '+16476256490', 'owner');


INSERT INTO menu_items
  (name,thumbnail_url, price, description,category)
VALUES
  ('香茅牛尾 Braised Oxtail with lemon grass', 'https://bit.ly/2VmXl7d', 2350, 'Chefs Recommendation Braised Oxtail with lemon grass', 'chef'),
  ('XO Sauce Seafood Fried Rice Noodle', 'https://bit.ly/2VmXl7d', 1399, 'Chef Recommendation XO Sauce Seafood Fried Rice Noodle', 'chef'),
  ('燒雞脾 BBQ Chicken Leg', 'https://bit.ly/2VmXl7d', 750, 'Whole slow roasted honey bbq chicken leg, chopped and served with a side of ginger onion sauce.', 'appetizers'),
  ('磅燒雞翼 BBQ Chicken Wing', 'https://bit.ly/2VmXl7d', 1299, 'One lb of slow roasted honey bbq chicken wings.', 'appetizers'),
  ('Assorted Meat on Rice(雜燴飯)', 'https://bit.ly/2VmXl7d', 1299, 'Seafood , meat, veggies mixed on rice with oysters sauce.', 'mains'),
  ('Chicken and broccoli on rice(西蘭花雞片飯)', 'https://bit.ly/2VmXl7d', 1199, 'Wok fried chicken and brocolli on rice', 'mains'),
  ('四川雞飯 Schezwan Style Chicken on Rice', 'https://bit.ly/2VmXl7d', 1150, 'Schezwan Style Chicken on Rice in exotic spices & marinade', 'mains'),
  ('Pork Chop in Black Pepper', 'https://bit.ly/2VmXl7d', 1150, 'Pork Chop in Black Pepper Sauce on Rice with magic ingredients', 'mains'),
  ('General tao chicken on rice (左雞飯)', 'https://bit.ly/2VmXl7d', 1099, 'General tao style white meat chicken wok fried with green pepper on bed of steam rice', 'mains'),
  ('Canadian Short Can', 'https://bit.ly/2VmXl7d', 600, 'Cold Freezy Chilled Canadian Short Can', 'drinks'),
  ('Soft Drink', 'https://bit.ly/2VmXl7d', 120, 'Cold Freezy Chilled Soft Drink Can', 'drinks'),
  ('Water', 'https://bit.ly/2VmXl7d', 120, 'Cold Freezy Chilled Soft Water', 'drinks');


  INSERT INTO orders (user_id, placed_at, special_instructions, wait_time, order_status, ready_at)
  VALUES
    (4, '6/28/2020, 8:05:06 PM', 'No plastic cutlery', 15, 'complete', '6/28/2020, 8:20:06 PM'),
    (2, '6/28/2020, 9:10:25 PM', 'Extra sauce', 20, 'complete', '6/28/2020, 9:30:25 PM'),
    (3, '6/29/2020, 6:28:56 PM', 'No onions', 30, 'complete', '6/29/2020, 6:58:56 PM'),
    (4, '6/29/2020, 7:13:20 PM', 'Extra napkins', 30, 'complete', '6/29/2020, 7:43:20 PM'),
    (5, '6/30/2020, 1:45:47 PM', 'Extra napkins', 15, 'complete', '6/30/2020, 2:00:47 PM');


  INSERT INTO ordered_items
    (order_id, menu_item_id, qty)
  VALUES
    (1, 1, 2),
    (1, 2, 1),
    (1, 3, 1),
    (2, 4, 2),
    (2, 5, 1),
    (2, 6, 1),
    (3, 7, 2),
    (3, 8, 1),
    (3, 9, 1),
    (4, 10, 2),
    (4, 11, 1),
    (4, 12, 1),
    (5, 1, 2),
    (5, 2, 1),
    (5, 5, 1);
