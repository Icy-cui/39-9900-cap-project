// Object 对象
let user = {
  name: "juan",
  age: 17,
  phone: "123231",
  sayHi() {
    console.log("hi, I am " + this.name);
  },
};

// 箭头函数
// let func = () => expression
let sum = (a, b) => a + b;

let arr = [1, 45, 32, 2, 3, 5, 20, 10];
arr.sort((a, b) => b - a);

// setTimeout(()=>console.log(arr),5000)
// setInterval(()=>console.log(arr),2000)

// JSON 方法
let userJson = JSON.stringify(user);
let userStr = JSON.parse(userJson);
// console.log(userStr)

// this
user.sayHi();

// Promise, fetch 和 Async/await
// axios fetch
let url = "/";
fetch(url)
  .then(function (res) {
    if (res.status === 200) {
        //token
      return;
    } else {
      alert("error!");
    }
  })
  .then((text) => {
    console.log(text);
  })
  .catch((err) => {
    console.log(err);
  });

async function f(){
    let res = await fetch(url);
    let data = await res.json()
}

// axios.post('./ register.css', user).then

// 在浏览器中储存数据
// 1. localstorage
localStorage.setItem('user',user)
localStorage.getItem('user')
localStorage.removeItem('user')
localStorage.clear()
// 2. sessionstorage
// 3. cookies
document.cookie = 'user=john; path=/ '

// 跨域 CORS
// flask-CORS
