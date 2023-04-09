export interface MyPluginInterface {
    getURL(): string
}

class MyPlugin implements MyPluginInterface {
    getURL() {
        // ちなみに、この中ではNuxtインスタンスやルートオブジェクトも取得可
        return 'http://localhost:3000/'
    }
}

export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            my: new MyPlugin
        }
    }
})
