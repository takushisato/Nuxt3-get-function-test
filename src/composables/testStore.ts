// 試し関数
// ここではサンプルとして海上保安庁が無料公開しているAPIを取得している（岩手県の海上データを取得しています）
export async function testFunc(key: any) {
    const {data, error} = await useFetch('https://tide736.net/api/get_tide.php/?pc=3&hc=7&yr=2023&mn=3&dy=31&' + key, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    return data;
}
