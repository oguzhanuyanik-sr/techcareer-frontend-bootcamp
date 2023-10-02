import { products } from './constants.js';

const priceRange30To100 = products.filter(({ unitPrice }) => unitPrice > 30 && unitPrice < 100).length;
const startsWithA = products.filter(({ name }) => (name.startsWith('a')));
const endsWithA = products.filter(({ name }) => (name.slice(-1) === ('a')));
const id10 = products.filter(({ id }) => id.toString().trim() === '10');
const noDiscontinuedCount = products.filter(({ discontinued }) => !discontinued).length;
const expensiveProduct = products.reduce((max, product) => (max.unitPrice > product.unitPrice) ? max : product);
const cheapestProduct = products.reduce((min, product) => (min.unitPrice < product.unitPrice) ? min : product);

console.log(`
# Fiyatı 30-100 arası olan ürün sayısı:\n${priceRange30To100}\n
# a harfi ile başlayan ürünler:\n${startsWithA.map(item => item.name).join('\n')}\n
# a harfi ile biten ürünler:\n${endsWithA.map(item => item.name).join('\n')}\n
# ID değeri 10 olan ürünün adı:\n${id10.map(item => item.name).join('\n')}\n
# Discontinued false olan ürün sayısı:\n${noDiscontinuedCount}\n
# En pahalı ürün:\n${expensiveProduct.name} - ${expensiveProduct.unitPrice}\n
# En ucuz ürün:\n${cheapestProduct.name} - ${cheapestProduct.unitPrice}\n
`);