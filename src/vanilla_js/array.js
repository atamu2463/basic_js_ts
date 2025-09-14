// 配列操作

export const arrayOperations = () => {
  //もとの配列
  const baseArray = ["A", "B", "C", "D", "E"];
  
  //配列の要素へアクセスする
  console.log("baseArrayの0番目の値：",baseArray[0]); //A 
    //存在しないインデックスの場合はundefinedが返る
  
  //配列の末尾から数えた位置の要素へアクセスする
  console.log("baseArrayの末尾から1番目の値：",baseArray.at(-1)); //E
    //正の数字を指定した場合は通常のインデックスと同じ

  //配列の要素数を取得する
  console.log("baseArrayの要素数：",baseArray.length); //5

  //分割代入
  //配列の値を変数として個別に扱いたいときに使う
  const [first, second] = baseArray;
  console.log("firstの値：",first); //A
  console.log("secondの値：",second); //B
    //変数名は任意の名前をつけられる
  
  //指定範囲の要素を取得して、新しい配列を作成する
  const slicedArray = baseArray.slice(1, 4);
  console.log("baseArrayの1番目から3番目までの値：",slicedArray); //["B", "C", "D"]
    //開始インデックスは含むが、終了インデックスは含まない
    //引数を省略した場合、もとの配列のコピーを返す
    //負の数を指定した場合、配列の末尾から数えた位置を表す
    //もとの配列は変更されない
    //第一引数＝第二引数の場合と、第一引数>第二引数の場合は空の配列を返す
  
  //配列に指定した要素が含まれているかを調べる
  console.log("baseArrayにCが含まれているか：",baseArray.includes("C")); //true
  console.log("baseArrayにZが含まれているか：",baseArray.includes("Z")); //false
    //大文字と小文字は区別される
    //配列の要素がオブジェクトの場合、参照が同じでないとtrueにならない
  
  //コールバック関数にマッチする要素が配列に含まれているかを調べる
  const hasLongString = baseArray.some((value) => value.length > 1);
  console.log("baseArrayに長さが2以上の文字列が含まれているか：",hasLongString); //false
    //一つでもマッチする要素があればtrueを返す
    //マッチする要素がなければfalseを返す
  
  //要素の追加・削除・並び替え

  //破壊的メソッド（もとの配列が変更される）
  //配列の末尾に要素を追加する
  baseArray.push("F");
  console.log("baseArrayにFを追加：",baseArray); //["A", "B", "C", "D", "E", "F"]

  //配列の末尾の要素を削除する
  const removedValue = baseArray.pop();
  console.log("baseArrayの末尾の要素を削除：",baseArray); //["A", "B", "C", "D", "E"]
  console.log("削除された値：",removedValue); //F

  //配列の先頭に要素を追加する
  baseArray.unshift("Z");
  console.log("baseArrayの先頭にZを追加：",baseArray); //["Z", "A", "B", "C", "D", "E"]

  //配列の先頭の要素を削除する
  const removedFirstValue = baseArray.shift();
  console.log("baseArrayの先頭の要素を削除：",baseArray); //["A", "B", "C", "D", "E"]
  console.log("削除された値：",removedFirstValue); //Z

  //配列の任意の位置に要素を追加・削除する
  //第一引数：開始インデックス、第二引数：削除する要素数、第三引数以降：追加する要素
  baseArray.splice(2, 1, "X", "Y");
  console.log("baseArrayの2番目の要素を1つ削除して、XとYを追加：",baseArray); //["A", "B", "X", "Y", "D", "E"]
    //削除する要素数を0にすると、指定した位置に要素を追加できる
  
  //配列の要素を並び替える
  baseArray.sort();
  console.log("baseArrayをアルファベット順に並び替え：",baseArray); //["A", "B", "D", "E", "X", "Y"]
  
  //baseArrayを元に戻す
  baseArray.splice(4, 2); //["A", "B", "D", "E"]
  baseArray.splice(2, 0, "C"); //["A", "B", "C", "D", "E"]
  
  //非破壊的メソッド（もとの配列は変更されない）
  //配列の展開（配列に含まれる値を個別の値として扱えるようにする）
  const newArray = [...baseArray, "F", "G"];
  console.log("baseArrayを展開して、FとGを追加した新しい配列：",newArray); //["A", "B", "C, "D", "E", "F", "G"]
  
  //非破壊的に配列の末尾に要素を追加する
  const appendedArray = baseArray.concat("F", "G");//方法1
  const appendedArray2 = [...appendedArray, "X"]; //方法2
  console.log("baseArrayの末尾にFとGを追加した新しい配列：",appendedArray); //["A", "B", "C", "D", "E", "F", "G"]
  console.log("appendedArrayの末尾にXを追加した新しい配列：",appendedArray2); //["A", "B", "C", "D", "E", "F", "G", "X"]

  //非破壊的に配列の末尾から要素を削除する
  const arrayAfterPop = baseArray.toSpliced(0, baseArray.length - 1); //方法1
  console.log("baseArrayの末尾の要素を削除した新しい配列：",arrayAfterPop); //["A", "B", "C", "D"]
  const arrayAfterPop2 = baseArray.slice(0, -1); //方法2
  console.log("baseArrayの末尾の要素を削除した新しい配列（slice使用）：",arrayAfterPop2); //["A", "B", "C", "D"]

  //コールバック関数を使って配列を反復処理する

  //配列の各要素に対して、指定した関数を一度ずつ実行する
  baseArray.forEach((value, index) => {
    console.log(`baseArrayの${index}番目の値：`, value);
  });
    //戻り値はない

  //配列の各要素に対して、指定した関数を一度ずつ実行し、新しい配列を作成する
  const mappedArray = baseArray.map((value) => {
    return value.toLowerCase()
  });
  console.log("mappedArray",mappedArray); //["a", "b", "c", "d", "e"]
    //もとの配列は変更されない

  //コールバック関数にマッチする最初の要素を返す
  const foundValue = baseArray.find((value) => {
    return value === "C"
  });
  console.log("foundValue：",foundValue); //C

  //コールバック関数がtrueを返すすべての要素を集めた新しい配列を返す
  const filteredArray = baseArray.filter((value) => {
    return value < "D"
  });
  console.log("filteredArray：",filteredArray); //["A", "B", "C"]
  
  //配列から配列以外の要素を含む任意の値を生成する
  const reducedValue = baseArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, ""); //初期値は空文字列(number型の場合は0)
  console.log("reducedValue：",reducedValue); //ABCDE
    //初期値を省略した場合、配列の最初の要素が初期値となる
};