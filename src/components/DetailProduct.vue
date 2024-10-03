<script setup lang="ts">
import { ref } from 'vue'

const price = 200
const originalPrice = 175
const reviews = 236
const selectedColor = ref('Orange')
const quantity = ref(1)

const colors = ['Orange', 'Blue', 'Green', 'Pink']
const productImages = [
  {
    src: 'https://assets.aboutamazon.com/dims4/default/315d9b7/2147483647/strip/true/crop/1280x720+0+0/resize/1280x720!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F19%2F68%2Fb69f14d04488bb8d1bb700699f32%2Fcharger.jpg',
    alt: 'Image 1'
  },
  {
    src: 'https://images.pexels.com/photos/270640/pexels-photo-270640.jpeg?cs=srgb&dl=pexels-pixabay-270640.jpg&fm=jpg',
    alt: 'Image 2'
  },
  {
    src: 'https://www.slashgear.com/img/gallery/12-smart-gadgets-you-didnt-know-existed-upgrade/intro-1712278582.jpg',
    alt: 'Image 3'
  },
  {
    src: 'https://imgcdn.stablediffusionweb.com/2024/4/11/7c82bb44-459b-4694-b06e-0247bafd6354.jpg',
    alt: 'Image 4'
  }
]

const increaseQty = () => {
  quantity.value++
}

const decreaseQty = () => {
  if (quantity.value > 1) quantity.value--
}

const selectColor = (color: string) => {
  selectedColor.value = color
}
</script>

<template>
  <v-container class="mt-5">
    <v-row>
      <!-- Product Image Gallery -->
      <v-col cols="12" md="6">
        <v-carousel hide-delimiters height="400">
          <v-carousel-item
            v-for="(image, index) in productImages"
            :key="index"
            :src="image.src"
            :alt="image.alt"
          ></v-carousel-item>
        </v-carousel>

        <!-- Thumbnails -->
        <v-row class="mt-3">
          <v-col cols="2" v-for="(image, index) in productImages" :key="index">
            <v-img :src="image.src" :alt="image.alt" aspect-ratio="1"></v-img>
          </v-col>
        </v-row>
      </v-col>

      <!-- Product Details -->
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <!-- Product Availability and Category -->
          <div class="d-flex align-center">
            <v-chip color="green lighten-3" text-color="green darken-1">In Stock</v-chip>
            <v-chip class="ml-2" color="blue lighten-3" text-color="blue darken-1">Kids</v-chip>
          </div>

          <!-- Product Title and Description -->
          <h2 class="mt-3">Cute Soft Teddybear</h2>
          <p class="grey--text">
            Vuhoqi tulioif nuzihrup zewwopzi pi kamim vibruvci vebajgi pomiduv gik zigju af las
            arsoze.
          </p>

          <!-- Product Price -->
          <div class="d-flex align-center">
            <span class="text-h5 font-weight-bold">${{ price }}</span>
            <span class="text-decoration-line-through ml-3">${{ originalPrice }}</span>
          </div>

          <!-- Product Rating -->
          <v-rating :value="4.5" :length="5" readonly class="mt-2"></v-rating>
          <p class="caption grey--text">{{ reviews }} reviews</p>

          <!-- Color Selection -->
          <div class="mt-3">
            <h4>Colors</h4>
            <v-row>
              <v-col cols="2" v-for="color in colors" :key="color">
                <v-btn
                  :color="selectedColor === color ? color : 'grey lighten-3'"
                  @click="selectColor(color)"
                  class="ma-2"
                  width="40"
                  height="40"
                  rounded
                ></v-btn>
              </v-col>
            </v-row>
          </div>

          <!-- Quantity Selector -->
          <div class="mt-3">
            <h4>Quantity</h4>
            <v-btn icon @click="decreaseQty">-</v-btn>
            <span>{{ quantity }}</span>
            <v-btn icon @click="increaseQty">+</v-btn>
          </div>

          <!-- Buy and Add to Cart Buttons -->
          <v-row class="mt-4">
            <v-col>
              <v-btn color="orange" block large>Buy Now</v-btn>
            </v-col>
            <v-col>
              <v-btn color="blue" block large outlined>Add to Cart</v-btn>
            </v-col>
          </v-row>

          <!-- Shipping Info -->
          <p class="caption grey--text mt-2">Dispatched in 2-3 weeks</p>
          <v-btn text="" class="caption" color="blue">Why the longer time for delivery?</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-img {
  cursor: pointer;
  border: 2px solid transparent;
}
.v-img:hover {
  border-color: blue;
}
</style>
