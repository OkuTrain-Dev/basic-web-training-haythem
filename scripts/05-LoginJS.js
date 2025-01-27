class User {
    constructor(email, username, password) {
        this.email = email;
        this.username = username;
        this.password = password;
    }
}

let userList = []
const resultTextDom = document.getElementById('resultText')

function register(email, username, password) {
    if (userList.find(user => user.email === email)) {
        resultTextDom.innerText = "用户已存在"
        return
    }

    let user = new User(email, username, password)
    userList.push(user)
    resultTextDom.innerText = "注册成功"
}

function login(email, password) {
    let user = userList.find(user => user.email === email)
    if (!user) {
        resultTextDom.innerText = "用户不存在"
        return
    }
    if (user.password !== password) {
        resultTextDom.innerText = "密码错误"
        return
    }
    resultTextDom.innerText = `欢迎回来 ${user.username}`
}

function viewUserList() {
    const userListText = document.getElementById('userListText');
    userListText.innerHTML = ''
    userList.forEach(item => {
        userListText.innerHTML += `<div>用户名：${item.username} 邮箱：${item.email} 密码：${item.password}</div>`
    })
}


function main() {
    const emailTextDom = document.getElementById('emailText');
    const usernameTextDom = document.getElementById('usernameText');
    const passwordTextDom = document.getElementById('passwordText');
    const registerBtnDom = document.getElementById('registerBtn');
    const loginBtnDom = document.getElementById('loginBtn');
    const viewUserListBtnDom = document.getElementById('viewUserListBtn');

    registerBtnDom.addEventListener('click', () => {
        register(emailTextDom.value, usernameTextDom.value, passwordTextDom.value)
    })

    loginBtnDom.addEventListener('click', () => {
        login(emailTextDom.value, passwordTextDom.value)
    })

    viewUserListBtnDom.addEventListener('click', () => {
        viewUserList()
    })
}

main()
