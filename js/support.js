function music(){
    var audio = new Audio('images/avd/music.mp3');
    audio.play();
}

/* di chuyển tới phone */
function phone(){
    $("html, body").animate({ scrollTop: 490 }, "slow");
}

function hideButton(element){
    let tabs= document.getElementsByClassName('opt')
    for(i =0; i < tabs.length; i++){
        tabs[i].style.background='white'
        tabs[i].style.color="#288ad6"
    }
    switch(element)
    {
        case 1:
            document.getElementById("button-iPhone").style.background='#288ad6';
            document.getElementById("button-iPhone").style.color = "white"
            break;
        case 2:
            document.getElementById("button-samsung").style.background='#288ad6';
            document.getElementById("button-samsung").style.color = "white"
            break;
        case 3:
            document.getElementById("button-oppo").style.background='#288ad6';
            document.getElementById("button-oppo").style.color = "white"
            break;
        case 4:
            document.getElementById("button-xiaomi").style.background='#288ad6';
            document.getElementById("button-xiaomi").style.color = "white"
            break;
        case 5:
            document.getElementById("button-vivo").style.background='#288ad6';
            document.getElementById("button-vivo").style.color = "white"
            break;
        case 6:
            document.getElementById("button-more").style.background='#288ad6';
            document.getElementById("button-more").style.color = "white"
            break;
    }
   
}

function changeList(type, element){

    let tabs= document.getElementsByClassName('opt')
    for(i =0; i < tabs.length; i++){
        tabs[i].style.background='white'
        tabs[i].style.color="#288ad6"
    }

    element.style.background='#288ad6';
    element.style.color = "white"
    switch (type){
        case 'phobien':
            document.getElementById('popular').style.display='block';
            document.getElementById('popular').style.display='flex';
            document.getElementById('increase').style.display='none';
            document.getElementById('reduction').style.display='none';
            document.getElementById('see').style.display='block';
            document.getElementById('iphone').style.display='none';
            document.getElementById('samsung').style.display='none';
            document.getElementById('oppo').style.display='none';
            document.getElementById('xiaomi').style.display='none';
            document.getElementById('vivo').style.display='none';
            document.getElementById('otherPhone').style.display='none';

            
            /* ẩn xem thêm */
            let tabs0= document.getElementsByClassName('more')
            for(var i =0; i < tabs0.length; i++){
                tabs0[i].style.display = " none"
            }

            let tabs1= document.getElementsByClassName('more1')
            for(var i =0; i < tabs1.length; i++){
                tabs1[i].style.display = " none"
            }
        
            let tabs2= document.getElementsByClassName('more2')
            for(var i =0; i < tabs2.length; i++){
                tabs2[i].style.display = " none"
            }
            break;

        case 'abc':
            document.getElementById('increase').style.display='block';
            document.getElementById('increase').style.display='flex';
            document.getElementById('reduction').style.display='none';
            document.getElementById('popular').style.display='none';
            document.getElementById('see1').style.display='block';
            document.getElementById('iphone').style.display='none';
            document.getElementById('samsung').style.display='none';
            document.getElementById('oppo').style.display='none';
            document.getElementById('xiaomi').style.display='none';
            document.getElementById('vivo').style.display='none';
            document.getElementById('otherPhone').style.display='none';

            /* ẩn xem thêm */
            let tabs3= document.getElementsByClassName('more')
            for(var i =0; i < tabs3.length; i++){
                tabs3[i].style.display = " none"
            }

            let tabs4= document.getElementsByClassName('more1')
            for(var i =0; i < tabs4.length; i++){
                tabs4[i].style.display = " none"
            }
        
            let tabs5= document.getElementsByClassName('more2')
            for(var i =0; i < tabs5.length; i++){
                tabs5[i].style.display = " none"
            }
    
            break;    
        case 'cba': 
            document.getElementById('reduction').style.display='block';
            document.getElementById('reduction').style.display='flex';
            document.getElementById('increase').style.display='none';
            document.getElementById('popular').style.display='none';
            document.getElementById('see2').style.display='block';
            document.getElementById('iphone').style.display='none';
            document.getElementById('samsung').style.display='none';
            document.getElementById('oppo').style.display='none';
            document.getElementById('xiaomi').style.display='none';
            document.getElementById('vivo').style.display='none';
            document.getElementById('otherPhone').style.display='none';

            /* ẩn xem thêm */
            let tabs6= document.getElementsByClassName('more')
            for(var i =0; i < tabs6.length; i++){
                tabs6[i].style.display = " none"
            }

            let tabs7= document.getElementsByClassName('more1')
            for(var i =0; i < tabs7.length; i++){
                tabs7[i].style.display = " none"
            }
        
            let tabs8= document.getElementsByClassName('more2')
            for(var i =0; i < tabs8.length; i++){
                tabs8[i].style.display = " none"
            }

            break;
        
    }
}
function iphone(element){
    
    hideButton(element)

    document.getElementById('iphone').style.display='block';
    document.getElementById('iphone').style.display='flex';
    document.getElementById('increase').style.display='none';
    document.getElementById('reduction').style.display='none';
    document.getElementById('popular').style.display='none';
    document.getElementById('samsung').style.display='none';
    document.getElementById('oppo').style.display='none';
    document.getElementById('xiaomi').style.display='none';
    document.getElementById('vivo').style.display='none';
    document.getElementById('otherPhone').style.display='none';

    /* di chuyển tới phone */
    $("html, body").animate({ scrollTop: 490 }, "slow");
}

function samsung(element){

    hideButton(element)

    document.getElementById('samsung').style.display='block';
    document.getElementById('samsung').style.display='flex';
    document.getElementById('increase').style.display='none';
    document.getElementById('reduction').style.display='none';
    document.getElementById('popular').style.display='none';
    document.getElementById('iphone').style.display='none';
    document.getElementById('oppo').style.display='none';
    document.getElementById('xiaomi').style.display='none';
    document.getElementById('vivo').style.display='none';
    document.getElementById('otherPhone').style.display='none';
    /* di chuyển tới phone */
    $("html, body").animate({ scrollTop: 490 }, "slow");
}

function oppo(element){

    hideButton(element)

    document.getElementById('oppo').style.display='block';
    document.getElementById('oppo').style.display='flex';
    document.getElementById('increase').style.display='none';
    document.getElementById('reduction').style.display='none';
    document.getElementById('popular').style.display='none';
    document.getElementById('iphone').style.display='none';
    document.getElementById('samsung').style.display='none';
    document.getElementById('xiaomi').style.display='none';
    document.getElementById('vivo').style.display='none';
    document.getElementById('otherPhone').style.display='none';
    /* di chuyển tới phone */
    $("html, body").animate({ scrollTop: 490 }, "slow");
}

function xiaomi(element){

    hideButton(element)

    document.getElementById('xiaomi').style.display='block';
    document.getElementById('xiaomi').style.display='flex';
    document.getElementById('increase').style.display='none';
    document.getElementById('reduction').style.display='none';
    document.getElementById('popular').style.display='none';
    document.getElementById('iphone').style.display='none';
    document.getElementById('samsung').style.display='none';
    document.getElementById('oppo').style.display='none';
    document.getElementById('vivo').style.display='none';
    document.getElementById('otherPhone').style.display='none';
    /* di chuyển tới phone */
    $("html, body").animate({ scrollTop: 490 }, "slow");
}

function vivo(element){

    hideButton(element)

    document.getElementById('vivo').style.display='block';
    document.getElementById('vivo').style.display='flex';
    document.getElementById('increase').style.display='none';
    document.getElementById('reduction').style.display='none';
    document.getElementById('popular').style.display='none';
    document.getElementById('iphone').style.display='none';
    document.getElementById('samsung').style.display='none';
    document.getElementById('oppo').style.display='none';
    document.getElementById('xiaomi').style.display='none';
    document.getElementById('otherPhone').style.display='none';
    /* di chuyển tới phone */
    $("html, body").animate({ scrollTop: 490 }, "slow");
}

function otherPhone(element){

    hideButton(element)

    document.getElementById('otherPhone').style.display='block';
    document.getElementById('otherPhone').style.display='flex';
    document.getElementById('increase').style.display='none';
    document.getElementById('reduction').style.display='none';
    document.getElementById('popular').style.display='none';
    document.getElementById('iphone').style.display='none';
    document.getElementById('samsung').style.display='none';
    document.getElementById('oppo').style.display='none';
    document.getElementById('xiaomi').style.display='none';
    document.getElementById('vivo').style.display='none';
    /* di chuyển tới phone */
    $("html, body").animate({ scrollTop: 490 }, "slow");
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
 
// When the user clicks on the button, scroll to the top of the document
function topFunction(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
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

/* xem thêm sản phẩm */
function more(){
    document.getElementById("see").style.display = " none"

    let tabs= document.getElementsByClassName('more')
    for(i =0; i < tabs.length; i++){
        tabs[i].style.display = " block"
    }

}
function more1(){
    document.getElementById("see1").style.display = " none"

    let tabs1= document.getElementsByClassName('more1')
    for(i =0; i < tabs1.length; i++){
        tabs1[i].style.display = " block"
    }
}
function more2(){
    document.getElementById("see2").style.display = " none"

    let tabs2= document.getElementsByClassName('more2')
    for(var i =0; i < tabs2.length; i++){
        tabs2[i].style.display = " block"
    }
}

/* kiểm tra email */
function check(x){
    if (x == "") return 0;
    else return 1;
}
function checkEmail(){
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
       music()  
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
    else  checkEmail()
}

function hideEmail(){
    document.getElementById("tbEmail").style.display = "none"
    document.getElementById("tcEmail").style.display = "none"
}

