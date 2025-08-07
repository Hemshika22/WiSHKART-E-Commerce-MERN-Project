import popular_3 from "../Assets/popular_3.jpeg";
import popular_4 from "../Assets/popular_4.jpeg";
import p1 from "../Assets/p1.jpeg";
import p2 from "../Assets/p2.jpeg";
import p3 from "../Assets/p3.jpeg";
import p4 from "../Assets/p4.jpeg";
import p5 from "../Assets/p5.jpeg";
import p6 from "../Assets/p6.jpeg";
import p7 from "../Assets/p7.jpeg";
import p8 from "../Assets/p8.jpeg";
import p9 from "../Assets/p9.jpeg";
import p10 from "../Assets/p10.jpeg";
import p11 from "../Assets/p11.jpeg";
import p12 from "../Assets/p12.jpeg";
import p13 from "../Assets/p13.jpeg";
import p14 from "../Assets/p14.jpeg";
import p15 from "../Assets/p15.jpeg";
import p16 from "../Assets/p16.jpeg";
import p17 from "../Assets/p17.jpeg";
import p18 from "../Assets/p18.jpeg";
import p19 from "../Assets/p19.jpeg";
import p20 from "../Assets/p20.jpeg";
import p21 from "../Assets/p21.jpeg";
import p22 from "../Assets/p22.jpeg";
import p23 from "../Assets/p23.jpeg";
import p24 from "../Assets/p24.jpeg";
import p25 from "../Assets/p25.jpeg";
import p26 from "../Assets/p26.jpeg";
import p27 from "../Assets/p27.jpeg";
import p28 from "../Assets/p28.jpeg";
import p29 from "../Assets/p29.jpeg";
import p30 from "../Assets/p30.jpeg";
import p31 from "../Assets/p31.jpeg";
import p32 from "../Assets/p32.jpeg";
import p33 from "../Assets/p33.jpeg";
import p34 from "../Assets/p34.jpeg";

let all_products = [
  // 👗 Women (12)
  {
    id: 1,
    name: "Floral Summer Dress",
    category: "women",
    image: popular_4,
    old_price: 2499,
    new_price: 1799,
  },
  {
    id: 2,
    name: "Beige Trench Coat",
    category: "women",
    image: popular_3,
    old_price: 4999,
    new_price: 3999,
  },
  {
    id: 3,
    name: "Pink Crop Top",
    category: "women",
    image: p1,
    old_price: 1299,
    new_price: 999,
  },
  {
    id: 4,
    name: "Formal Blazer",
    category: "women",
    image: p2,
    old_price: 3499,
    new_price: 2799,
  },
  {
    id: 5,
    name: "Black Maxi Dress",
    category: "women",
    image: p3,
    old_price: 2999,
    new_price: 2199,
  },
  {
    id: 6,
    name: "High-Waist Skirt",
    category: "women",
    image: p4,
    old_price: 1999,
    new_price: 1499,
  },
  {
    id: 7,
    name: "Denim Jacket",
    category: "women",
    image: p5,
    old_price: 2799,
    new_price: 2099,
  },
  {
    id: 8,
    name: "Boho Top",
    category: "women",
    image: p6,
    old_price: 1599,
    new_price: 1199,
  },
  {
    id: 9,
    name: "Long Cardigan",
    category: "women",
    image: p7,
    old_price: 2599,
    new_price: 1999,
  },
  {
    id: 10,
    name: "Off-Shoulder Top",
    category: "women",
    image: p8,
    old_price: 1499,
    new_price: 1099,
  },
  {
    id: 11,
    name: "Casual T-Shirt",
    category: "women",
    image: p9,
    old_price: 899,
    new_price: 649,
  },
  {
    id: 12,
    name: "Blue Kurti",
    category: "women",
    image: p10,
    old_price: 1799,
    new_price: 1399,
  },

  // 👔 Men (12)
  {
    id: 13,
    name: "White Formal Shirt",
    category: "men",
    image: p11,
    old_price: 1999,
    new_price: 1299,
  },
  {
    id: 14,
    name: "Slim Fit Jeans",
    category: "men",
    image: p12,
    old_price: 2799,
    new_price: 1999,
  },
  {
    id: 15,
    name: "Casual Hoodie",
    category: "men",
    image: p13,
    old_price: 2199,
    new_price: 1599,
  },
  {
    id: 16,
    name: "Polo T-shirt",
    category: "men",
    image: p14,
    old_price: 1499,
    new_price: 1099,
  },
  {
    id: 17,
    name: "Black Leather Jacket",
    category: "men",
    image: p15,
    old_price: 4999,
    new_price: 3899,
  },
  {
    id: 18,
    name: "Green Sweatshirt",
    category: "men",
    image: p16,
    old_price: 1799,
    new_price: 1399,
  },
  {
    id: 19,
    name: "Blue Checked Shirt",
    category: "men",
    image: p17,
    old_price: 1699,
    new_price: 1199,
  },
  {
    id: 20,
    name: "Men's Joggers",
    category: "men",
    image: p18,
    old_price: 1499,
    new_price: 999,
  },
  {
    id: 21,
    name: "Cotton Shorts",
    category: "men",
    image: p19,
    old_price: 1299,
    new_price: 899,
  },
  {
    id: 22,
    name: "Graphic Tee",
    category: "men",
    image: p20,
    old_price: 999,
    new_price: 749,
  },
  {
    id: 23,
    name: "Denim Shirt",
    category: "men",
    image: p21,
    old_price: 1999,
    new_price: 1499,
  },
  {
    id: 24,
    name: "Khaki Cargo Pants",
    category: "men",
    image: p22,
    old_price: 2399,
    new_price: 1799,
  },

  // 🧒 Kids (12)
  {
    id: 25,
    name: "Kid's T-shirt with Print",
    category: "kid",
    image: p23,
    old_price: 899,
    new_price: 649,
  },
  {
    id: 26,
    name: "Denim Dungarees",
    category: "kid",
    image: p24,
    old_price: 1499,
    new_price: 1099,
  },
  {
    id: 27,
    name: "Summer Kids Dress",
    category: "kid",
    image: p25,
    old_price: 1199,
    new_price: 899,
  },
  {
    id: 28,
    name: "Boys' Formal Shirt",
    category: "kid",
    image: p26,
    old_price: 999,
    new_price: 749,
  },
  {
    id: 29,
    name: "Girls' Frock",
    category: "kid",
    image: p27,
    old_price: 1299,
    new_price: 949,
  },
  {
    id: 30,
    name: "Boys' Denim Shorts",
    category: "kid",
    image: p28,
    old_price: 899,
    new_price: 699,
  },
  {
    id: 31,
    name: "Printed Hoodie",
    category: "kid",
    image: p29,
    old_price: 1199,
    new_price: 849,
  },
  {
    id: 32,
    name: "Cartoon Sweatshirt",
    category: "kid",
    image: p30,
    old_price: 999,
    new_price: 749,
  },
  {
    id: 33,
    name: "Kid's Night Suit",
    category: "kid",
    image: p31,
    old_price: 899,
    new_price: 649,
  },
  {
    id: 34,
    name: "Boys' Hoodie",
    category: "kid",
    image: p32,
    old_price: 1099,
    new_price: 799,
  },
  {
    id: 35,
    name: "Kid's Leggings",
    category: "kid",
    image: p33,
    old_price: 999,
    new_price: 699,
  },
  {
    id: 36,
    name: "Girl's Yellow Dress",
    category: "kid",
    image: p34,
    old_price: 1399,
    new_price: 1099,
  },
];

export default all_products;
