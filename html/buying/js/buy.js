function changeColor(element){
    let tabs= document.getElementsByClassName('cp')
    for(i =0; i < tabs.length; i++){
        tabs[i].style.background = "white"
    }
    element.style.backgroundColor = "darkgray"
}
// thay đổi hình ảnh sản phẩm
$(document).ready(function(){
    $(".color input").click(function(){
        var c = $(this).attr('data');
        $(".show img").attr('src',`../images/phone/iPhone/show${c}-iPhone-images.jpg`);
    })
})

/* số lượng sản phẩm */

function checkMoney(element){
    var a= " ";
    var dem =0;
    for (var i = element.length -1; i>=0; i--)
    {
        a = a + element[i]
        dem ++;
        if (dem % 3 == 0  && dem != element.length ) a = a + "."
    }
    var money= " ";
    for (var i = a.length -1; i >= 0 ; i--)
    money = money + a[i]

    money = money + " đ"
    return money;
}

function numberMoney(){
    var value = document.getElementById("number").value
    // dùng biến kt đển kiểm tra value có phải sô không?
    var kt = value
    document.getElementById("numberPro").innerHTML = "x "+value
    value =  parseInt(value)
    if(value<1 || kt != parseInt(value) ) 
    {
        document.getElementById("valueMoney").innerHTML = "Lỗi"
        return 0;
    }
    else
    {
        var x = value * 37990000
        var ch =x.toString();

        // chỉnh sửa số tiền
        var gt = checkMoney(ch)
        document.getElementById("valueMoney").innerHTML = gt
        return 1;
    }
    
}

function minus(){
    var x = document.getElementById("number").value
    if (x > 1) document.getElementById("number").value = parseInt(x)-1;
    numberMoney();
}

function plus(){
    var x = document.getElementById("number").value
    if (x == "" || x <= 0) document.getElementById("number").value =1;
    else  document.getElementById("number").value = parseInt(x) +1;
    if (numberMoney()==0) document.getElementById("number").value =1;
}

/* hình thức giao hàng */
function typeSell(element){
    let tabs = document.getElementsByClassName('fa-check-square')
    for (var i = 0 ; i < 3; i ++)
    tabs[i].style.color = " rgb(209, 209, 209)"

    element.style.color = "#298ad8"
}

function check(x){
    if (x == "") return 0;
    else return 1;
}

/* kiểm tra email */

function checkEmail(){
    var cE= document.getElementById("email").value
    var flag =1;
    var No = ['/','^','!','#','$','%','^','&','(',')','+','-','=','[',']','{','}',';',':','<','>','?','*','|','..',',',' ']
    for (var i=0; i < No.length; i++)
    {
      var x = cE.indexOf(No[i])
      if (x != -1) 
        {
            flag =0;
            document.getElementById("email").style.border = " 1px solid red"
            return 0;
        }
        
    }
    if (flag ==1)
    {
      var a = cE.indexOf('.com')
      var a1 = cE.indexOf('.vn')
      var b = cE.indexOf('.')
      var c = cE.indexOf('@')
      
      if (b == -1 || c == -1 || (a == -1 && a1==-1) || cE.length <3) 
      {
        document.getElementById("email").style.border = " 1px solid red"
        flag =0
        return 0;
      }
     
    }
    /* kiểm tra cuối emal có phải la .vn hoạc .com không */
    if (flag ==1)
    {
        var lastVn = cE.lastIndexOf('.vn')
        var lastCom= cE.lastIndexOf('.com')

        if (a != -1 || a1 != -1)
        {
            if (lastVn != cE.length-3 && lastCom != cE.length -4 ) 
            {
                document.getElementById("email").style.border = " 1px solid red"
                return 0
            }
        }
    }
}

// nhạc chuông cho phần dăng kí
function music(){
    var audio = new Audio('images/ok.mp3');
    audio.play();
}

function buy(){
    var flagName = 1;
    var flagPhone = 1;
    var flagEmail = 1;
    var flagOption =1;
    var flagAdd =1;
    // kiểm tra tên
    var name = document.getElementById("name").value
    if (check(name) == 0)
    {
        document.getElementById("name").style.border ="1px solid red"
        flagName =0;
    }
    // kiểm tra số điện thoại
    var phone = document.getElementById("numberPhone").value
    if (phone.length <6 || parseInt(phone) != phone || phone < 0) 
    {
        document.getElementById("numberPhone").style.border = "1px solid red"
        flagPhone = 0;
    }
    // kiểm tra Email
    var email = document.getElementById("email").value
    if (check(email)== 0)
    {
        document.getElementById("email").style.border = " 1px solid red"
        flagEmail =0;
    }
    else
    {
       if (checkEmail()==0) flagEmail =0;
    }
    // tỉnh thành
    var option = document.getElementById("option").value
    if (option == "Chọn tỉnh thành") 
    {
        document.getElementById("option").style.border = "1px solid red"
        flagOption = 0;
    }
    // địa chỉ cụ thể
    var add = document.getElementById("add").value
    if (check(add) == 0 || add.length < 10)
    {
        document.getElementById("add").style.border = "1px solid red"
        flagAdd =0;
    }

    if (flagName ==0 || flagPhone ==0 || flagEmail ==0 || flagOption ==0 || flagAdd ==0)
    {
        document.getElementById("error").style.display = "block"
    }
    else
    {
        music();
        document.getElementById("error").style.display = "none"
        document.getElementById("ok").style.opacity = 1
        document.getElementById("ok").style.zIndex = 1000
        setTimeout(function(){
            document.getElementById("ok").style.opacity = 0
            document.getElementById("ok").style.zIndex = -1
        },3000)
        setTimeout(function(){
            window.location.replace("https://nguyenvantruong-ou.github.io/NVTshop/");
        },3000)
    }
}

function hideError(element){
    element.style.border = "1px solid #666"
}
/* back to top */
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}
 
// scroll to the top 
function topFunction(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
}

