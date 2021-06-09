/*
Bài 3, Viết chuơng trình JS cứ sau hai giây lại trả về một số ngẫu nhiên từ 1-100. Sau đó tìm xem số này có phải số nguyên tố hay không.
*/

/*
Bài 4, Cho một mảng rỗng
Sau 2 giây thêm  một số nguyên ngẫu nhiên từ 0-100 vào mảng
Sau 3 giây iếp theo tiếp tục thêm một số nguyên ngẫu nhiên từ 0-100 vào mảng
Sau 4 giây tiếp theo tiếp tục thêm một số nguyên ngẫu nhiên từ 0-100 vào mảng
Sau 5 giây tiếp theo tiếp tục thêm một số nguyên ngẫu nhiên từ 0-100 vào mảng

Tiếp sau 4 giây tìm các số lớn hơn 5
Tiếp sau 3 giây tiếp tìm số nhỏ nhất và lớn nhất trong mảng 
Tiếp sau 3 giây tìm trung bình cộng các số trong mảng 

Bài 5, Viết chuơng trình giải phuơng trình bậc hai dạng ax^2 + bx + c với a,b, c nhận ngẫu nhiên các số nguyên từ 5-1000.

Bài 6, Viết hàm nhận chiều cao và chiều rộng của hình chữ nhật, sau 3 giây tính diện tích hình chữ nhật, sau 4 giây tiếp tính chu vi hình chữ nhật.

*/

setInterval(() => {
     const rand =  getRand(1,100); //0-1 /0.1/0.2/0.3/0.4/
     //1-100 /1/4/60/100
     console.log(rand);
     //tìm số nguyên tố 
}, 2000);

function getRand(min,max){
    return Math.round(Math.random()*(max-min)+min);
}