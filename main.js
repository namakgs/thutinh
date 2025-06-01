// Thay đổi nội dung búc thư ở đây
var letterContent ="Chúc em vi ngày 1/6 thật đặc biệt, tớ hy vọng cậu sẽ nhận được nhiều niềm vui và những món quà ý nghĩa.
Ngày Quốc tế Thiếu nhi, tớ muốn gửi đến cậu 1000 niềm vui và những điều tốt đẹp nhất. Hãy luôn vui vẻ và hạnh phúc nhé!
Cậu là người dễ thương xinh đẹp là ánh sáng trong cuộc sống của tui á 😉. Chúc em vi có một ngày 1/6 tràn đầy tiếng cười và những kỷ niệm đẹp.
Nhân ngày 1/6, tui chúc em vi luôn mạnh khỏe, xinh đẹp và đạt được mọi điều em mong muốn. Tớ sẽ luôn bên cạnh cậu !
Hãy để ngày hôm nay là một ngày thật tuyệt vời, và những kỉ niệm đẹp. 
Tương lai sau này không biết chúng ta sẽ ra sao như thế nào nhưng tớ rất quý mến cậu rất nhìu rất nhìu 🥰
Tớ thật sự cảm ơn cậu tớ rất vui khi có cậu cùng đồng hành với tớ trong khoảng thời gian qua .
Tuy có nhiều chuyện buồn vui lẫn lộn nhưng tớ sẽ luôn luôn rất quý cậu ạ . 
Người vừa dễ thương xinh gái lại còn tốt bụng nữa .
nói chung là tớ rất yêu quý cậu ạ."

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})
