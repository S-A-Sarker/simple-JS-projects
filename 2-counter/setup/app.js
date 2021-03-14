const btns = document.querySelectorAll('.btn');
const value = document.getElementById('value');

let count = 0;

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const style = e.currentTarget.classList;
        if(style.contains('decrease')){
            count--;
        }
        else if(style.contains('increase')){
            count++;

        }
        else{
            count=0;
        }
        if(count==0){
            value.style.color="#222";
        }
        if(count>0){
            value.style.color = "green";
        }
        if(count<0){
            value.style.color = "red";
        }
        value.textContent=count;
    })

})


// const value = document.getElementById('value');
// const btns = document.querySelectorAll('.btn');

// count = 0;

// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         const style = e.currentTarget.classList;
//         if(style.contains('decrease')){
//             count--;
//         }
//         else if(style.contains('increase')){
//             count++;
//         }
//         else{
//             count=0;
//         }
//         if(count==0){
//             value.style.color='#222';
//         }
//         if(count>0){
//             value.style.color="green";
//         }
//         else if(count<0){
//             value.style.color="red";
//         }
        
//         value.textContent=count;



//         // value.innerHTML=count;
//         // console.log(count);

//     });
// });