<template>
    <h1>登陆</h1>
    <button @click="list">商品列表</button>
</template>

<script setup>
import router from "../../router/index.js";

const list = () => {
    router.push({ name: 'goodsList'})
}
</script>