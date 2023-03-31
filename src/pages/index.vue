<template>
  <h1>テストだよ</h1>
</template>
<script setup>
  import {hoge} from "~/composables/testStore";

  const get = hoge()
  console.log(get)
</script>
