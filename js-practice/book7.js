//localstorage,sessionstorageがある

var storage = sessionStorage;
storage.setItem("item","apple");

//非同期処理
//参照: https://zenn.dev/tentel/articles/8146043d1101b5ea873d

var promiseTest = function(){
    return new Promise(function (resolve, reject){
    // resolve：非同期処理が正常終了したことを知らせるメソッド。returnの代わりに、resolve()と記述することで、非同期関数が正常終了したことを知らせる。
    // reject：非同期処理が異常終了したことを知らせるメソッド。returnの代わりに、reject()と記述することで、非同期関数が異常終了したことを知らせる。

    try{
      console.log("run promiseTest...");
      //throw "error!";
      setTimeout(()=>{
        console.log("completed setTimeout!");
        resolve("hello");
      },1000)
      //resolve("resolved!");
    }catch(err){
      console.error(err);
      reject();
    }

  })
}

// resolve -> return
// reject -> throw
var asyncTest = async function(){
  try {
    console.log("run asyncTest...");
    setTimeout(()=>{
      console.log("completed setTimeout!");
      throw "error!";
      //return "hello"
    },1000)
    throw "error!";
  } catch (err) {
    console.error(err);
    throw "reject"
  }
}



promiseTest().then((str)=>{
  console.log("then:"+str);
}).catch((err) => {
  console.log("catch");
})

async function main(){
  console.log("run main");
  const hoge = await asyncTest();
  console.log(hoge);
}

main();
