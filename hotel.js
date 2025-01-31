const icon=document.getElementById('troggle')
const head= document.getElementById('dream')
console.log(head);



const bar=document.getElementById('menu')
    icon.addEventListener('click',()=>{
        bar.classList.toggle('showData')
        head.classList.toggle('dreem')

        console.log(bar);
        
    })
   

