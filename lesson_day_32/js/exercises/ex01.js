let delaydHello = new Promise((resolve, reject)=> {
    const  condition = true;
    if (condition){
        setTimeout(()=> {
            console.log("hello, world")
            resolve('Promise is resolved successfully');
        },2000);
        
     } else{
            reject('Promise is rejected. ');
)}


console.log (delaydHello);

delaydHello
     .then((res)=>{
    console.log(res);

})