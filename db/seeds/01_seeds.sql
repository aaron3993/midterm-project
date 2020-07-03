INSERT INTO users (name, email, PASSWORD, phone, ROLE)
  VALUES ('Devin Sanders', 'tristanjacobs@gmail.com', 'password', '+16477837891', 'customer'), ('Iva Harrison', 'allisonjackson@mail.com', 'password', '+16477837891', 'customer'), ('Lloyd Jefferson', 'asherpoole@gmx.com', 'password', '+16477837891', 'customer'), ('Dale Coleman', 'michaelgray@mail.com', 'password', '+16477837891', 'customer'), ('Alejandro Osborne', 'ariaatkinson@outlook.com', 'password', '+16477837891', 'customer'), ('Nell Medina', 'juliansantos@aol.com', 'password', '+16477837891', 'customer'), ('Sandeep', 'sandeep@LHL.com', 'password', '+16477837891', 'customer'), ('Sophie', 'sophie@LHL.com', 'password', '+12064886774', 'customer'), ('Aaron', 'aaron@LHL.com', 'password', '+16476256490', 'owner');

INSERT INTO menu_items (name, thumbnail_url, price, description, category)
  VALUES
('Green Onion Chicken
파닭', 'https://thefry.ca/wp-content/uploads/2018/04/Green-Onion-Chicken-3-800x600.jpg', 1322, 'fresh fried onion chicken with fresh green onion herbs.','main'),
('Crispy Chicken 크리스피 치킨', 'https://thefry.ca/wp-content/uploads/2018/04/Crispy-Chicken-2-800x600.jpg', 1683, 'fresh fried chicken crispy on the outside , soft on the inside.','main'),
('Soy Garlic Chicken 간장마늘치킨', 'https://thefry.ca/wp-content/uploads/2018/04/Fry-Wingsoy-garlic-1-800x600.jpg', 822, 'fresh fried chicken in special soy sauce.','main'),
('Fried Chicken in Sauce 양념치킨', 'https://thefry.ca/wp-content/uploads/2018/04/Fried-Chicken-in-Sauce-1-800x600.jpg', 1795, 'fresh fried chicken with your choice of sauce with secret ingredients','main'), ('half and half (original, fried chicken in sauce)
반반치킨', 'https://thefry.ca/wp-content/uploads/2018/04/HalfHalf-Chicken-1-700x600.jpg', 871, 'get the best of the both worlds, your choice of two varities of chicne with sauce of your liking','main'),
('Special Half & Half Chicken
스페셜 반반', 'https:/thefry.ca/wp-content/uploads/2018/04/Special-HalfHalf-1-700x600.jpg', 1730, 'freshly fried chicken finger lickin food','main'),
('Boneless Chicken
순살치킨', 'https://thefry.ca/wp-content/uploads/2018/04/Boneless-Fried-Chicken-1-800x600.jpg', 1012, 'house special fried chicken with lots of sauces.','main'),
 ('Boneless Chicken in Sauce
순살양념치킨', 'https://thefry.ca/wp-content/uploads/2018/04/Boneless-Fried-Chicken-in-Sauce-3-800x600.jpg', 1457, 'Premium chicken in sauce.','main'),
('Boneless Chicken in Soy Sauce
순살간장치킨', 'https://thefry.ca/wp-content/uploads/2018/04/Boneless-Fried-Chicken-in-Soy-Garlic-Sauce-2-800x600.jpg', 1427, 'Premium chicken tossed in deliciously savory sauce', 'main'),
('Wings
프라이 윙: Sauce(Spicy Sauce, Soy Garlic, Crispy)', 'https://thefry.ca/wp-content/uploads/2018/04/Fry-Wingoriginal-1-800x600.jpg', 1393, 'Spicy and savory chicken.', 'main'),
('Boneless Chicken in Spicy Sauce
순살매운양념치킨', 'https://thefry.ca/wp-content/uploads/2018/04/Boneless-Fried-Chicken-in-Spicy-Sauce-1-800x600.jpg', 1130, 'Spicy chicken goodness','main'),
('Cheese Seasoning Chicken
순살치즐링', 'https://thefry.ca/wp-content/uploads/2018/04/Boneless-Cheesling-Chicken-1-800x600.jpg', 1373, 'Who can resist cheese?','main'),
 ('Garlic Butter Fries
버터갈릭감자튀김', 'https://thefry.ca/wp-content/uploads/2018/04/Garilc-Butter-Fries-1-800x600.jpg', 1616, 'Deliciously seasoned fries','side'),
('Corn with Cheese
콘치즈', 'https://thefry.ca/wp-content/uploads/2018/04/Corn-with-Cheese-1-3-800x600.jpg', 818, 'Cheesy corn goodness.','side'),
('Crispy French Fries
크리스피 감자튀김', 'https://thefry.ca/wp-content/uploads/2018/04/Crispy-French-Fries-3-800x600.jpg', 1107, 'The name says it all.','side'),
('Egg Soup
계란탕', 'https://thefry.ca/wp-content/uploads/2018/04/Egg-Soup-1-400x300.png', 1099, 'Rich flavorful egg based soup','soup'),
('Fish Cake Soup
오뎅탕', 'https://thefry.ca/wp-content/uploads/2018/04/Fish-Cake-Soup-2-400x300.jpg', 899, 'A traditional korean dish.','soup'),
('Spicy Seafood Soup
해물 짬뽕', 'https://thefry.ca/wp-content/uploads/2018/04/Spicy-Seafood-Noodle-Soup-2-2-400x300.jpg', 1099, 'A traditiona korean dish, but spicier!','soup'),
('Sweet Potato Fries
고구마 튀김', 'https://thefry.ca/wp-content/uploads/2018/04/Sweet-Potato-Fries-3-800x600.jpg', 1099, 'Crispy declicious sweet potato.','side'),
('Korean Beer | 병맥주', '', 500, 'Bottled Beer','alcohol'),
('Premium Beer | 병맥주', '', 500, 'Bottled Beer','alcohol'),
('Imported Beer | 병맥주', '', 500, 'Bottled Beer','alcohol'),
('Domestic Beer | 병맥주', '', 500, 'Bottled Beer','alcohol'),
('Soju | 소주', '', 500, '참이슬(Fresh, Original)','alcohol'),
('Coke | 음료', '', 152, 'Beverage','beverage'),
('Diet Coke | 음료', '', 152, 'Beverage','beverage'),
('Sprite | 음료', '', 152, 'Beverage','beverage'),
('Ginger Ale | 음료', '', 152, 'Beverage','beverage'),
('Sanpelle | 음료', '', 152, 'Beverage','beverage'),
('Perrier | 음료', '', 152, 'Beverage','beverage');



INSERT INTO orders (user_id, placed_at, special_instructions, wait_time, order_status, ready_at)
  VALUES (4, '6/28/2020, 8:05:06 PM', 'No plastic cutlery', 15, 'complete', '6/28/2020, 8:20:06 PM'), (2, '6/28/2020, 9:10:25 PM', 'Extra sauce', 20, 'complete', '6/28/2020, 9:30:25 PM'), (3, '6/29/2020, 6:28:56 PM', 'No onions', 30, 'complete', '6/29/2020, 6:58:56 PM'), (4, '6/29/2020, 7:13:20 PM', 'Extra napkins', 30, 'complete', '6/29/2020, 7:43:20 PM'), (5, '6/30/2020, 1:45:47 PM', 'Extra napkins', 15, 'complete', '6/30/2020, 2:00:47 PM');

INSERT INTO ordered_items (order_id, menu_item_id, qty)
  VALUES (1, 1, 2), (1, 2, 1), (1, 3, 1), (2, 4, 2), (2, 5, 1), (2, 6, 1), (3, 7, 2), (3, 8, 1), (3, 9, 1), (4, 10, 2), (4, 11, 1), (4, 12, 1), (5, 1, 2), (5, 2, 1), (5, 5, 1);
