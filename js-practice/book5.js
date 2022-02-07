// 関数がクラス?
let Member = function(firstName,lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  // 関数オブジェクトプロパティ = メソッド
  this.getName = function(){
    console.log("名前取得処理が呼び出されました");
    return this.firstName + this.lastName;
  }
}


//let my = new Member("murasa","milk");
//my.age = 25;
// my.alert = function(){
//   alert("hello");
// }

Member.prototype = {
  greeting : function(){
    console.log("hello.");
  },
  sleep: function(n){
    console.log("z"*n);
  }
};

/* 以下がES2015 */
class User{
  constructor(f,l){
    this.firstName = f;
    this.lastName = l;
  }
  getName(){
    return this.firstName+this.lastName;
  }
  static staticMethod(){
    return "this is static";
  }
}

const my = new User("murasa","milk")
