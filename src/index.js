import './index.css'

const btn = document.getElementById('btn');
const num = document.getElementById("num");

btn.addEventListener('click', function () {
    let a = parseInt(num.innerText, 10);//转成十进制
    num.innerText = a+1;
})

class Test{
    #a = 1;
}

const tt = new Test()
console.log('tt.a',tt.a);