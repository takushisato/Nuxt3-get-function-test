// composables同士だと値が取れない
console.log(getHoantyoData())

// pluginから取得
const {$my} = useNuxtApp()
console.log($my.getURL())
