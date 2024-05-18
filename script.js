const questions=[{
    que:'1Javascript is an _______ language?',
    a:'Object-Oriented',
    b:'Object-Based',
    c:'Procedural',
    d:'None of the above',
    correct:'a'
},
{
    que:'2Javascript is an _______ language?',
    a:'Object-Oriented',
    b:'Object-Based',
    c:'Procedural',
    d:'None of the above',
    correct:'a'
},
{
    que:'3Javascript is an _______ language?',
    a:'Object-Oriented',
    b:'Object-Based',
    c:'Procedural',
    d:'None of the above',
    correct:'a'
},
{
    que:'4Javascript is an _______ language?',
    a:'Object-Oriented',
    b:'Object-Based',
    c:'Procedural',
    d:'None of the above',
    correct:'a'
}]

let index=0
let total=questions.length;
let right=0;
let wrong=0;

const que= document.getElementById("que")
const options= document.querySelectorAll(".option")

const loadquestion=()=>{
    if(index === total){
       return end()
    }
    reset()
const data=questions[index]
if (data) {
que.innerText=data.que
options[0].nextElementSibling.innerText=data.a
options[1].nextElementSibling.innerText=data.b
options[2].nextElementSibling.innerText=data.c
options[3].nextElementSibling.innerText=data.d
}else{console.error('Question data is undefined');

}
}

const submitans=()=>{
    
    const finans=getans()

    const data=questions[index]
    if(finans === data.correct){
right++
}else{
wrong++
}
if(finans == undefined){
    console.log("select the box")
}
else{
    index++
    loadquestion()

}

return;
}


const getans=()=>{
    let ans ;
    options.forEach((input)=>{
if(input.checked){
    ans=input.value
}
    })
    return ans
}


const reset=()=>{
    options.forEach((input)=>{
             input.checked=false
    })
}

const end=()=>{
    document.getElementById("form").innerHTML=`
    <h1> ${right}/${total} are correct</h2>
    `
}

//innail function
loadquestion()
