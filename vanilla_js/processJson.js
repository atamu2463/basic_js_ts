const mockJson = '{ "id": 1, "name": "Taro" }';

//JSON文字列をJavaScriptのオブジェクトに変換する
const parseJson = () => {
    //外部とデータ通信をするケースがほとんどなので、try-catchでエラーハンドリングを行う
    try {
        const parsedData = JSON.parse(mockJson);
        console.log("Parse successed:", parsedData);       
    } catch (error) {
        console.error("Parse failed:", error);
    }
};
parseJson(mockJson);

//オブジェクトをJSON文字列に変換する
const convertToJson = () => {
    const obj = { id: 2, name: "Hanako" };
    try {
        const jsonString = JSON.stringify(obj);
        console.log("Convert successed:", jsonString);
    } catch (error) {
        console.error("Convert failed:", error);
    }
}
convertToJson();
