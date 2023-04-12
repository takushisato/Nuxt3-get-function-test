// testStoreから関数をインポート
import {testFunc} from '~/composables/testStore'


// testStoreからインポートした関数に引数を渡して再定義
export const getSample = () => {
    return testFunc('rg=day')
}


// composables内でconsole.logを定義しても、出力はされない。そのためcomposables同士では取得できないのかと誤解されやすいので注意
console.log(testFunc)
