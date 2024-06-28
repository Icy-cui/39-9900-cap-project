// 原型模式注册，创建新用户
// 原型模式: 用一个已经创建的实例作为原型，通过复制该原型对象来创建一个和原型相同或相似的新对象。
class User {
  constructor(name, email, phone, address, password) {
    // this.name = name;
    this.setName(name);
    this.setEmail(email);
    this.setPhone(phone);
    this.setAddress(address);
    this.setPassword(password);
  }
  setName(name) {
    this.name = name;
  }
  setEmail(email) {
    this.email = email;
  }
  setPhone(phone) {
    this.phone = phone;
  }
  setAddress(address) {
    this.address = address;
  }
  setPassword(password) {
    this.password = password;
  }
}

function init() {
  createForm.addEventListener("submit", function (e) {
    e.preventDefault();
    try {
      let name = document.querySelector("[name=name]").value;
      let email = document.querySelector("[name=email]").value;
      let phone = document.querySelector("[name=phone]").value;
      let address = document.querySelector("[name=address]").value;
      let password = document.querySelector("[name=password]").value;
      let confirmed_password = document.querySelector(
        "[name=confirmed_password]"
      ).value;
      if (password !== confirmed_password) {
        alert("两次输入的密码不同！");
      }
      var user = new User();
      user.setName(name);
      user.setEmail(email);
      user.setPhone(phone);
      user.setAddress(address);
      user.setPassword(password);

      console.log(user);
    } catch (e) {
      console.log(e);
    }
  });
}

let createForm = document.getElementById("my-form");
// console.log(createForm)
init();
