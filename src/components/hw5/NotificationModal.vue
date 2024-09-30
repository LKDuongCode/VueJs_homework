<script setup></script>

<template>
  <div style="background-color: burlywood; padding: 10px; color: #333; font-family: monospace">
    <slot name="header"></slot>
    <hr style="margin-top: 10px; margin-bottom: 10px" />
    <slot name="content"></slot>
    <hr style="margin-top: 10px; margin-bottom: 10px" />
    <slot name="buttonFooter"></slot>
  </div>
</template>

<style scoped></style>
