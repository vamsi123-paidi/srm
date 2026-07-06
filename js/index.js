// const heading = document.getElementById('heading')
// console.log(heading)
// heading.style.color = "red"
// const heading = document.getElementsByClassName("heading");
// console.log(heading)
// heading[0].style.color="red"
// const h2 = document.getElementsByTagName("h2")
// h2[0].style.color = "red"

// const heading = document.querySelectorAll('.heading')
// heading.forEach((index)=>{
//     index.style.color = "red"
// })

// const heading1 = document.getElementById('heading1')
// // heading1.innerText = "newly added text in step 4"
// heading1.innerHTML = '<h1>hello world </h1>'

// const outer = document.getElementById('outer')
// const inner = document.createElement('div')
// inner.setAttribute('id',"inner");
// inner.innerHTML= '<h1>this is added dynamically</h1>'

// outer.appendChild(inner)

// const btn = document.getElementById('btn')
// btn.addEventListener("click",()=>{
//     document.body.style.backgroundColor= "black"
// })
// const btn1 = document.getElementById('btn1')
// btn1.addEventListener("click",()=>{
//     document.body.style.backgroundColor= "white"
// })

// const handleSubmit = document.getElementById("handleSubmit")

handleSubmit.addEventListener('submit',(e)=>{
    e.preventDefault()
    const userInput = document.getElementById("userInput").value;
    alert(`hello ${userInput}`)
})



