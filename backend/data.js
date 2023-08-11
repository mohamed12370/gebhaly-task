const path = require('path');
const apple1 = path.join('./images/apple1.jpg');
const apple2 = path.join('./images/apple2.jpg');
const apple3 = path.join('./images/apple3.jpg');
const cap1 = path.join('./images/c1.jpg');
const cap2 = path.join('./images/c2.jpg');
const cap3 = path.join('./images/c3.jpg');
const cap4 = path.join('./images/c4.jpg');
const baby1 = path.join('./images/baby1.jpg');
const baby2 = path.join('./images/baby2.jpg');
const baby3 = path.join('./images/baby3.jpg');
const baby4 = path.join('./images/baby4.jpg');
const boy1 = path.join('./images/boy1.png');
const boy2 = path.join('./images/boy2.jpg');
const boy3 = path.join('./images/boy3.jpg');
const boy4 = path.join('./images/boy4.jpg');
const shirt1 = path.join('./images/s1.png');
const shirt2 = path.join('./images/s2.jpg');
const shirt3 = path.join('./images/s3.jpg');
const shirt4 = path.join('./images/s4.jpg');
const tv1 = path.join('./images/tv1.png');
const tv2 = path.join('./images/tv2.jpg');
const tv3 = path.join('./images/tv3.jpg');
const toy1 = path.join('./images/toy1.jpg');
const toy2 = path.join('./images/toy2.jpg');
const toy3 = path.join('./images/toy3.jpg');
const toy4 = path.join('./images/toy4.jpg');
const pants1 = path.join('./images/p1.jpg');
const pants2 = path.join('./images/p2.jpg');
const pants3 = path.join('./images/p3.jpg');
const makeup1 = path.join('./images/m1.jpg');
const makeup2 = path.join('./images/m2.jpg');
const makeup3 = path.join('./images/m3.jpg');
const makeup4 = path.join('./images/m4.png');
const tshirt1 = path.join('./images/t1.jpg');
const tshirt2 = path.join('./images/t2.jpg');
const tshirt3 = path.join('./images/t3.jpg');
const tshirt4 = path.join('./images/t4.jpg');
const watch1 = path.join('./images/watch1.png');
const watch2 = path.join('./images/watch2.png');
const watch3 = path.join('./images/watch3.jpg');
const watch4 = path.join('./images/watch4.jpg');

const data = [
  {
    id: 1,
    name: 'apple 14',
    category: 'phone',
    price: '1000 $',
    quantity: 20,
    img: apple1,
    image: [apple1, apple2, apple3],
  },
  {
    id: 2,
    name: 'cap',
    category: 'clothes',
    price: '100 $',
    quantity: 50,
    img: cap1,
    image: [cap1, cap2, cap3, cap4],
  },
  {
    id: 3,
    name: 'little girl',
    category: 'clothes',
    price: '150 $',
    quantity: 70,
    img: baby1,
    image: [baby1, baby2, baby3, baby4],
  },
  {
    id: 4,
    name: 'little boy',
    category: 'clothes',
    price: '160 $',
    quantity: 70,
    img: boy1,
    image: [boy1, boy2, boy3, boy4],
  },
  {
    id: 5,
    name: 'shirt',
    category: 'clothes',
    price: '130 $',
    quantity: 90,
    img: shirt1,
    image: [shirt1, shirt2, shirt3, shirt4],
  },
  {
    id: 6,
    name: 'tv',
    category: 'home',
    price: '900 $',
    quantity: 200,
    img: tv1,
    image: [tv1, tv2, tv3],
  },
  {
    id: 7,
    name: 'toy',
    category: 'toy',
    price: '250 $',
    quantity: 100,
    img: toy1,
    image: [toy1, toy2, toy3, toy4],
  },
  {
    id: 8,
    name: 'Pants',
    category: 'clothes',
    price: '140 $',
    quantity: 120,
    img: pants1,
    image: [pants1, pants2, pants3],
  },
  {
    id: 9,
    name: 'Makeup',
    category: 'women',
    price: '300 $',
    quantity: 180,
    img: makeup1,
    image: [makeup1, makeup2, makeup3, makeup4],
  },
  {
    id: 10,
    name: 't-short',
    category: 'cllothes',
    price: '350 $',
    quantity: 280,
    img: tshirt1,
    image: [tshirt1, tshirt2, tshirt3, tshirt4],
  },
  {
    id: 11,
    name: 'Watch',
    category: 'men',
    price: '500 $',
    quantity: 300,
    img: watch1,
    image: [watch1, watch2, watch3, watch4],
  },
];

module.exports = data;
