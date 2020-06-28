

const arr = [ {
  id: 1,
  name: '香茅牛尾 Braised Oxtail with lemon grass',
  thumbnail_url: 'https://bit.ly/2VmXl7d',
  price: 2350,
  description: 'Chefs Recommendation Braised Oxtail with lemon grass',
  category: 'chef' },
{
  id: 2,
  name: 'XO Sauce Seafood Fried Rice Noodle',
  thumbnail_url: 'https://bit.ly/2VmXl7d',
  price: 1399,
  description: 'Chef Recommendation XO Sauce Seafood Fried Rice Noodle',
  category: 'chef' },
{
  id: 3,
  name: '燒雞脾 BBQ Chicken Leg',
  thumbnail_url: 'https://bit.ly/2VmXl7d',
  price: 750,
  description:
   'Whole slow roasted honey bbq chicken leg, chopped and served with a side of ginger onion sauce.',
  category: 'appetizers' },
{
  id: 4,
  name: '磅燒雞翼 BBQ Chicken Wing',
  thumbnail_url: 'https://bit.ly/2VmXl7d',
  price: 1299,
  description: 'One lb of slow roasted honey bbq chicken wings.',
  category: 'appetizers' },
{
  id: 5,
  name: 'Assorted Meat on Rice(雜燴飯)',
  thumbnail_url: 'https://bit.ly/2VmXl7d',
  price: 1299,
  description: 'Seafood , meat, veggies mixed on rice with oysters sauce.',
  category: 'mains' },
{
  id: 6,
  name: 'Chicken and broccoli on rice(西蘭花雞片飯)',
  thumbnail_url: 'https://bit.ly/2VmXl7d',
  price: 1199,
  description: 'Wok fried chicken and brocolli on rice',
  category: 'mains' }
]
const obj = {"1": 2, "2": 1, "5": 1, "6": 3}
let sum = 0
for (const menuItem in obj) {
  console.log(arr[id])
  // if (arr.id === menuItem) {
  //   console.log(menuItem)
  // }
//   if (arr[menuItem].price) {
//     console.log(arr[menuItem].price)
// sum += (arr[menuItem].price * obj[menuItem] / 100).toFixed(2)
//   }
}
// console.log(sum)