/*BTVN*/
/*Viết chương trình tạo hiệu ứng di chuyển hộp*/

const child = document.querySelector('.child');
function moving(type){
    switch(type){
        case 'TOP_RIGHT':
            child.style.top= 0;
            child.style.right=0;
            child.style.left='auto'; 
        break;
        
        case 'BOTTOM_RIGHT':
            child.style.top= 'auto';
            child.style.right=0;
            child.style.left='auto';
            child.style.bottom=0; 
        break;

        case 'BOTTOM_LEFT':
            child.style.top= 'auto';
            child.style.right='auto';
            child.style.left=0;
            child.style.bottom=0; 
        break;

        case 'TOP_LEFT':
            child.style.top= 0;
            child.style.right='auto';
            child.style.left=0;
            child.style.bottom='auto'; 
        break;
    }
}

(async function(){
    await new Promise((resolve, reject)=>{
       setTimeout(()=>{
           moving('TOP_RIGHT');
           resolve();
       },2000)
    })

    await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            moving('BOTTOM_RIGHT');
            resolve();
        },2000)
     })


     await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            moving('BOTTOM_LEFT');
            resolve();
        },2000)
     })

     await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            moving('TOP_LEFT');
            resolve();
        },2000)
     })
})();