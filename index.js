import { arrayOperations } from "./vanilla_js/array.js";
import { throwError } from "./vanilla_js/throwException.js";

// arrayOperations();

//例外処理
const exceptionHandler = () => {
    try {
        throwError();//エラー発生➡catchへ
    } catch (err) {
        console.error(err);
    } finally {
        //エラーを捕まえても動作させたい処理があればここに書く
    }
};
exeeptionHandler();
