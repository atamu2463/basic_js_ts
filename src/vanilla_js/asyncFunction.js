// 非同期処理, promise, async/await

//promiseオブジェクトを利用する方法
const calculateSum = new Promise((resolve) => {
    const result = 1 + 1; 
    resolve(result);  // promiseがfulfilledになる
});

console.log(calculateSum); //resultのpromiseオブジェクトを返す
console.log(await calculateSum); //promiseの中身＝calculateSum()の戻り値を返す

//promiseチェーン（then/catch）を使う方法
const promiseChain = () => {
    calculateSum
    //promiseがfulfilled➡thenへ
        .then((res) => {
            console.log(res); 
            return res * 2; 
        })
        .then((res) => {
            console.log(res); 
        })
    //promiseがrejected➡catchへ
        .catch((err) => {
            console.error(err); 
        });
};
promiseChain();