/* show product */
function showimg(obj) {
    var m = document.getElementById("fistColor")
     m.src = obj.src
}

function init() {
  var images = document.querySelectorAll(".thumbnailColor img")
  for (var i = 0; i < images.length; i++)
      images[i].onclick = function() {
          showimg(this)
      }
}
/* thay đổi border của ảnh con */
function changeBorder(element){
  var list = document.querySelectorAll(".thumbnailColor div")
  for (var i = 0 ; i < list.length; i++){
    list[i].style.border = "1px solid #ccc"
  }
  element.style.border = "1px solid #00a2ff"
}


/* read more */
function infor_more(){
  document.getElementById("light-more").style.display = " none"
    document.getElementById("infor-more-under").style.display = " none"
    document.getElementById("infor-more").style.display = " block"
}

/* back to top */
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

function topFunction(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
}

/* đánh giá sao */

function star(element){
    let a = document.getElementsByClassName("star")
    for (var i =0; i < a.length; i++)
    {
        a[i].style.color ="#dfdfdf"
    }

    for (var i =0; i < element;i++)
    {
        a[i].style.color = "#fd9727"
    } 

    document.getElementById("star-dg").style.backgroundImage = "Linear-Gradient(rgb(80, 212, 80),rgb(4, 189, 4))"

    if (element == 1) document.getElementById("star-dg").innerHTML = "Không thích"
    else if (element == 2) document.getElementById("star-dg").innerHTML = "Tạm"
    else if (element == 3) document.getElementById("star-dg").innerHTML = "Bình thường"
    else if (element == 4) document.getElementById("star-dg").innerHTML = "Thích"
    else document.getElementById("star-dg").innerHTML = "Rất tuyệt vời"
}
/* hiển thị bảng đánh giá */
function openComment(){
  document.getElementById("openComment").style.display = "none"
  document.getElementById("closeComment").style.display = "block"
  document.getElementById("my-comment").style.display = "block"
}

/* đóng bảng tự đánh giá */
function closeComment(){
  document.getElementById("closeComment").style.display = "none"
  document.getElementById("my-comment").style.display = "none"
  document.getElementById("openComment").style.display = "block"
}
/* gửi */

function check(x){
    if (x == "") return 0;
    else return 1;
}
function sent(){
    var flagName = 1;
    var flagEmail = 1;
    var flagWrite =1;
  
    /* check name*/
    var name = document.getElementById("name-comment").value
    if (check(name) ==0 ) 
     {
      document.getElementById("name-comment").style.border = "1px solid red"
      flagName =0;
     }
    /* check email */
    
    var emailSent = document.getElementById("email-comment").value
    if (check(emailSent) ==0 ) 
    {
    document.getElementById("email-comment").style.border = "1px solid red"
    flagEmail =0;
    }
    else if(checkEmail() == 0) 
    {
        document.getElementById("email-comment").style.border = "1px solid red"
        document.getElementById("error-email").style.display = "block"
        flagEmail = 0;
    }
    /* check write */
    var write = document.getElementById("write-comment").value
    if (check(write) ==0 ) 
    {
    document.getElementById("write-comment").style.border = "1px solid red"
    flagWrite =0;
    }
  
    /* thông báo sau khi gửi nếu lỗi */
    document.getElementById("error-sent").style.display = "block"
    document.getElementById("error-sent").innerHTML = ""
    if (flagName ==1)
    {
        if (flagEmail ==1)
        {
          if (flagWrite == 0) document.getElementById("error-sent").innerHTML = "*Vui lòng nhập câu hỏi hoặc đánh giá"
        }
        else 
        {
          if (flagWrite == 0) document.getElementById("error-sent").innerHTML = "*Vui lòng nhập email và câu hỏi hoặc đánh giá "
          else document.getElementById("error-sent").innerHTML = "*Vui lòng nhập email"
        }
      }
    else
    {
        if (flagEmail == 1) 
        {
          if (flagWrite==0) document.getElementById("error-sent").innerHTML = "*Vui lòng nhập tên và đánh giá"
          else document.getElementById("error-sent").innerHTML = "*Vui lòng nhập tên"
        }
        else 
        {
          if (flagWrite ==1)
          {
            document.getElementById("error-sent").innerHTML = "*Vui lòng nhập tên và email"
          }
          else if (flagWrite ==0)
          {
            document.getElementById("error-sent").innerHTML = "*Vui lòng nhập tên, email và đánh giá"
          }
        }
      }
      /* nhập đúng */
    if (flagName== 1 && flagEmail ==1 && flagWrite ==1) liveComment();
  }
  /* xóa lôi */
function deleteErrorName(){
    document.getElementById("name-comment").style.border = "1px solid #f8bd79"
    document.getElementById("error-sent").style.display = "none"
    document.getElementById("error-email").style.display = "none"
}
  
function deleteErrorEmail(){
    document.getElementById("email-comment").style.border = "1px solid #f8bd79"
    document.getElementById("error-sent").style.display = "none"
    document.getElementById("error-email").style.display = "none"
}
  
function deleteErrorWrite(){
    document.getElementById("write-comment").style.border = "1px solid #f8bd79"
    document.getElementById("error-sent").style.display = "none"
    document.getElementById("error-email").style.display = "none"
}

/* kiểm tra email */

function checkEmail(){
    var cE= document.getElementById("email-comment").value
    var flag =1;
    var No = ['/','^','!','#','$','%','^','&','(',')','+','-','=','[',']','{','}',';',':','<','>','?','*','|','..',',',' ']
    for (var i=0; i < No.length; i++)
    {
      var x = cE.indexOf(No[i])
      if (x != -1) 
        {
            flag =0;
            document.getElementById("error-email").innerHTML = " *Chú ý: Email chứa kí tự đặc biệt"
            return 0;
        }
        
    }
    if (flag ==1)
    {
      var a = cE.indexOf('.com')
      var a1 = cE.indexOf('.vn')
      var b = cE.indexOf('.')
      var c = cE.indexOf('@')
      
      if (b == -1) 
      {
        document.getElementById("error-email").innerHTML = " *Chú ý: Email ít nhất có 1 dấu chấm"
        flag =0
        return 0;
      }
      else if (c == -1)
      {
        document.getElementById("error-email").innerHTML = " *Chú ý: Email thiếu @"
        flag =0
        return 0;
      }

      else if ((a == -1 && a1==-1) || cE.length <3 ) 
      {
        document.getElementById("error-email").innerHTML = " *Chú ý: Email không hợp lệ"
        flag = 0
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
            document.getElementById("error-email").innerHTML = " *Chú ý: Email không hợp lệ"
            return 0
        }
        }
    }
    
    
  }
/* hiển thị bình luân trực tiếp */
function liveComment(){
  var name = document.getElementById("name-comment").value
  var name1 = document.getElementById("name-comment").value
  var comment = document.getElementById("write-comment").value

  document.getElementById("out-name").innerHTML = name
  document.getElementById("out-name1").innerHTML = name1
  document.getElementById("out-question").innerHTML = comment

  document.getElementById("live-comment").style.display = "block"
  closeComment()
}

/* di chuyển tới id */
$(document).ready(function() {
  $("a[href*='#']:not([href='#])").click(function() {
    let target = $(this).attr("href");
    $('html,body').stop().animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });
});

/* trang bình luận */
function comment1(){
  document.getElementById("comment2").style.display = "none"
  document.getElementById("comment1").style.display = "block"

  /* thay đổi màu nút trang*/
  document.getElementById("number2-comment").style.backgroundColor = "rgb(233, 225, 225)"
  document.getElementById("number1-comment").style.backgroundColor = "rgb(128, 128, 128)"

}

function comment2(){
  document.getElementById("comment1").style.display = "none"
  document.getElementById("comment2").style.display = "block"

  /* thay đổi màu nút trang*/
  document.getElementById("number1-comment").style.backgroundColor = "rgb(233, 225, 225)"
  document.getElementById("number2-comment").style.backgroundColor = "rgb(128, 128, 128)"

}
/* kiểm tra email đăng kí */


function  checkEmailLast(){
  var cE= document.getElementById("footerEmail").value
  var flag =1;
  var No = ['/','^','!','#','$','%','^','&','(',')','+','-','=','[',']','{','}',';',':','<','>','?','*','|','..',',',' ']
  for (var i=0; i < No.length; i++)
  {
    var x = cE.indexOf(No[i])
    if (x != -1) 
      {
          flag =0;
          document.getElementById("tbEmail").style.display = " block"
          document.getElementById("tbEmail").innerHTML = " *Chú ý: Email chứa kí tự đặc biệt"
          return 0;
      }
      
  }
  if (flag ==1)
  {
    var a = cE.indexOf('.com')
    var a1 = cE.indexOf('.vn')
    var b = cE.indexOf('.')
    var c = cE.indexOf('@')
    
    if (b == -1) 
    {
      document.getElementById("tbEmail").style.display = " block"
      document.getElementById("tbEmail").innerHTML = " *Chú ý: Email ít nhất có 1 dấu chấm"
      flag =0
      return 0;
    }
    else if (c == -1)
    {
      document.getElementById("tbEmail").style.display = " block"
      document.getElementById("tbEmail").innerHTML = " *Chú ý: Email thiếu @"
      flag =0
      return 0;
    }

    else if ((a == -1 && a1==-1) || cE.length <3 ) 
    {
      document.getElementById("tbEmail").style.display = " block"
      document.getElementById("tbEmail").innerHTML = " *Chú ý: Email không hợp lệ"
      flag = 0
      return 0;
    }
   
  }
  /* kiểm tra cuối emal có phải la .vn hoạc .com không */
  if (flag =1)
  {
      var lastVn = cE.lastIndexOf('.vn')
      var lastCom= cE.lastIndexOf('.com')

      if (a != -1 || a1 != -1)
      {
          if (lastVn != cE.length-3 && lastCom != cE.length -4 ) 
          {
              flag = 0;
              document.getElementById("tbEmail").style.display = " block"
              document.getElementById("tbEmail").innerHTML = " *Chú ý: Email không hợp lệ"
              return 0
          }
      }
  }
  if (flag ==1)
  {
     document.getElementById("tcEmail").style.display = " block"
     document.getElementById("tcEmail").innerHTML = "Bạn đã đăng kí thành công!"
  }
  
}
function footerEmail(){ 
  var email = document.getElementById("footerEmail").value
  if ( check(email) == 0) 
      {
          document.getElementById("tbEmail").style.display = " block"
          document.getElementById("tbEmail").innerHTML = "*Vui lòng nhập email"
      }
  else  checkEmailLast()
}

function hideEmail(){
  document.getElementById("tbEmail").style.display = "none"
  document.getElementById("tcEmail").style.display = "none"
}
