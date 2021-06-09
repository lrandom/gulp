/*
var mang = new Array(10,5,2,5,6,7,8,9); 
Sau 3 giây tính tổng các chữ số trong mảng và in ra màn hình
Tiếp sau 4 giây tính giai thừa của các số trong mảng và in ra màn hình
Tiếp sau 3 giây tìm các số là số nguyên tố và in ra màn hình 
Tiếp sau 3 giây tìm các số chia hết cho 3 và in ra màn hình 
*/
var mang = new Array(10,5,2,5,6,7,8,9); 


(async function () {
    await new Promise(function (res,reject){
        setTimeout(function () { 
            const sum = mang.reduce((total,currentVal)=>total+=currentVal);
            document.write('<div>Tổng là'+sum+'</div');
            res(10);
           },3000);
    })      

    await new Promise(function(res){
        setTimeout(function () {
            const newMang = mang.map(function (item) {
              let n = 1;
              for (let i = 1; i <= item; i++) {
                  n*=i;
              }
              return n;
           })
       
           for (let i = 0; i < newMang.length; i++) {
              document.write('<div>Giai thừa của '+mang[i]+' là</div>'+newMang[i]);
           }

           res();
        },4000);
    })

})();