//functionは先コンパイル
//console.log(testFunc(2));

//functionで定義する
//コンパイル時に登録される
function testFunc(args1){
  return "hello,world!";
}

//Functionコンストラクタで定義 (あまり使わない)
let sumFunc = new Function("args1","args2","return args1+ args2;");

// 関数リテラルで定義
// 無名関数とも呼ばれる
let sumFunc2 = function(args1,args2){
  console.log("Run sumFunc2");
  return args1+args2;
}

/*
  アロー関数
 ・function の記載がいらない
 ・かなり簡略化して書ける
 ・代入時に登録
*/
let arrowFunc = (args1,args2) => {
  return args1+args2;
}
let arrowFuncMin = (args1,args2) => args1+args2;

// 引数のデフォルト値
let argsDefault = (x = 1,y = 2) => {return x+y};
let makeErr = function(){throw new Error("Required args");}
let mustArgs = (x = makeErr()) => {
  return x;
};

// 可変長引数
let rest = (...lists) => {
  console.log(lists);
  for (let i=0;i<lists.length;i++){
    console.log(lists[i]);
  }
}

// 複数の戻り値
let getMaxMin = (...lists) => {
  const ret = {
    maxNum : Math.max(...lists),
    minNum : Math.min(...lists),
  };
  return [ret.maxNum,ret.minNum];
}

let [maxNumber,minNumber] = getMaxMin(1,2,3,5,8,13,21);


// 高階関数
function arrayWalk(data,f){
  for (let key in data){
    f(data[key],key);
    //console.log("data[key]:"+data[key]);
    //console.log("key:"+key);
  }
}
function showElement(value,key){
  console.log(key+":"+value);
}

// closure = simple object
function closure(init){
  let counter = init;
  return function(){
    return ++counter;
  }
}
