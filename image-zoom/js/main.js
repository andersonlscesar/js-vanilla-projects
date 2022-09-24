'use-strict'

import { ImageZoom } from "./Classes/ImageZoom.js";

const containerImage = document.querySelector('.container-image')
const image = document.querySelector('.container-image .product-image')
const viewer = document.querySelector('.viewer')

const imageZoom = new ImageZoom(image,  containerImage)
imageZoom.active()