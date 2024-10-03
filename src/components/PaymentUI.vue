<script setup lang="ts">
import { ref } from 'vue'

const quantity = ref(1)
const price = 200
const discount = 0.05
const shippingCharges = 0
const subTotal = ref(price * quantity.value)
const discountedPrice = ref(subTotal.value * discount)
const total = ref(subTotal.value - discountedPrice.value + shippingCharges)

const increaseQty = () => {
  quantity.value++
  updateTotal()
}

const decreaseQty = () => {
  if (quantity.value > 1) {
    quantity.value--
    updateTotal()
  }
}

const updateTotal = () => {
  subTotal.value = price * quantity.value
  discountedPrice.value = subTotal.value * discount
  total.value = subTotal.value - discountedPrice.value + shippingCharges
}
</script>

<template>
  <v-container class="mt-5">
    <v-row>
      <v-col cols="12" md="8">
        <!-- Product Information -->
        <v-card class="pa-4">
          <v-row align="center">
            <v-col cols="2">
              <!-- Product Image -->
              <v-img
                src="https://example.com/teddy-bear.jpg"
                aspect-ratio="1"
                class="rounded"
              ></v-img>
            </v-col>

            <v-col cols="6">
              <!-- Product Title and Description -->
              <div>
                <h4>Cute Soft Teddybear</h4>
                <p>Size: 8 | Color: Dark Red</p>
              </div>
            </v-col>

            <v-col cols="2">
              <!-- Product Price -->
              <div class="text-h6">${{ price }}</div>
              <div class="text-decoration-line-through text-subtitle-2">$175</div>
            </v-col>

            <v-col cols="2">
              <!-- Quantity Controls -->
              <v-btn icon @click="decreaseQty">-</v-btn>
              <span>{{ quantity }}</span>
              <v-btn icon @click="increaseQty">+</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <!-- Order Summary -->
        <v-card class="pa-4">
          <h4>Order Summary</h4>
          <v-row>
            <v-col>Sub Total</v-col>
            <v-col class="text-right">${{ subTotal }}</v-col>
          </v-row>
          <v-row>
            <v-col>Discount 5%</v-col>
            <v-col class="text-right">- ${{ discountedPrice }}</v-col>
          </v-row>
          <v-row>
            <v-col>Shipping Charges</v-col>
            <v-col class="text-right">${{ shippingCharges }}</v-col>
          </v-row>
          <v-row>
            <v-col><strong>Total</strong></v-col>
            <v-col class="text-right"
              ><strong>${{ total }}</strong></v-col
            >
          </v-row>
        </v-card>

        <!-- Checkout Button -->
        <v-btn class="mt-4" color="primary" block>Checkout</v-btn>
        <v-btn class="mt-2" outlined block>Continue Shopping</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-img {
  width: 80px;
  height: 80px;
}
</style>
