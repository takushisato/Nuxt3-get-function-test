<script setup lang="ts">
// プラグインから値を取得
// const {$my} = useNuxtApp()
// console.log($my.getURL())

// composablesから値を取得
import {getSample} from "~/composables/testStore2";

console.log(getSample())
</script>

<template>
  <div>
    <h1>取得サンプル</h1>
  </div>
</template>
