<template>
    <h1>商品列表</h1>
    <button @click="detail">商品详情</button>
</template>

<script setup>
import router from "../../../router/index.js";

const detail = () => {
    router.push({ name: 'goodsDetail'})
}
</script>