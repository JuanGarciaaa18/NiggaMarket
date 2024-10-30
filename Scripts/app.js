import { products } from "./carshop.js";

const addproduct=document.getElementById('addproduct')
const nameproduct=document.getElementById('nameproduct')
const priceproduct=document.getElementById('priceproduct')
const imgproduct=document.getElementById('imgproduct')


addproduct.addEventListener ('click', () => products.push())
