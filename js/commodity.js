// 商品列表弹出选项
  $(function () {
    $('.inteshow').click(function () {
        $(".alllist").slideToggle(); 
    })
   })

   $(function () {
       $('.littlepic a').mouseover(function () {
        $(this).css('border', '1px solid #ec0000').siblings().css('border', '1px solid #dfdfdf'); 
        // console.log($(this).children().attr('src'));
    //    console.log( $(this).parent().parent().children('.bigpic').children())
        $(this).parent().parent().children('.bigpic').children().attr("src", $(this).children().attr('src')); 
    })
   })


// 点击更多弹出效果
   $(function () {
    $('.more1').click(function () {
        var h = $('.brands').height(); 
        var hy = $('.brands-lt').height(); 
        // console.log(hy);
        
        if (h == 91) {
            $('.brands').css('height', $('.brands-lt').height()); 
        }else {
            $('.brands').css('height', 91); 
        }
       
    })
   })
   $(function () {
    $('.more').click(function () {
        var h = $('.search-condition').height(); 
        var hy = $('.sea-con-lt').height(); 
        // console.log(hy);
        
        if (h == 120) {
            $('.search-condition').css('height', hy); 
        }else {
            $('.search-condition').css('height', 120); 
        }
       
    })
   })


   $(function () {
       $('.sea-con-lt dl dd').on('click', 'a', function () {
           console.log($(this).index()); 
           
        $(this).css( {background:"#ec0000", color:"#ffffff"}).siblings().css( {background:'none', color:"#333333"}); 
       })
   })


// 分页加载
   var rlist = document.querySelector('.rlist'); 
   var pages = document.querySelector('.pages'); 
//请求首页显示信息 
    var xhr1 = new XMLHttpRequest(); 
    xhr1.open('get', 'commodity.php?page=1', false); 
    xhr1.send(); 
    
    // console.log(xhr1.responseText);
    var result = JSON.parse(xhr1.responseText); 
    console.log(result); 
    //把请求的信息添加到页面中
    console.log(result.data.length);
    
    var html= "";
    for (var i = 0; i < result.data.length; i ++ ) {
        // var linode = document.createElement('li'); 
        html+='<li>';
        html+='<a href="" class="bigpic">';
        html+=' <img src='+ result.data[i].pic + '>';
        html+='</a>';
        html+='<div class="littlepic">';
        html+=' <a href="#">';
        html+=' <img src='+result.data[i].pic+'>';
        html+='  </a>';
        html+=' <a href="#">';
        html+=' <img src='+result.data[i].pic2+'>';
        html+=' </a>';
        html+=' <a href="#">';
        html+=' <img src='+result.data[i].pic+'>';
        html+=' </a>';
        html+=' <a href="#">';
        html+=' <img src='+result.data[i].pic+'>';
        html+=' </a>';
        html+=' <a href="#">';
        html+=' <img src='+result.data[i].pic+'>';
        html+=' </a>';
        html+=' </div>';
        html+=' <a href="" class="line-1">';
        html+=  result.data[i].tit;
        html+=' </a>';
        html+=' <h3><span>￥</span> '+result.data[i].price+'</h3>';
        html+='  <p class="evaluate">已有'+result.data[i].plshu+'人评价</p>';
        // html+=' <p class="deadline">九机分期：&nbsp;&nbsp;<span>低至￥277.16 × 12期</span></p>';
        html+='</li>';
        rlist.innerHTML=html;
        // rlist.appendChild(linode); 
    }
//获取页码数,生成页码
var len=result.length;
console.log(Math.ceil(len/16));
for(var j=0;j<Math.ceil(len/16);j++){
    var pnode=document.createElement('span');
    pnode.innerHTML=j+1;
    pages.appendChild(pnode);
}
//给页码绑定事件,请求数据
for(var k=0;k<pages.children.length;k++){
    pages.children[k].index=k;
    $('.pages span').first().css({background:"#f84653"});
    pages.children[k].onclick=function(){
        rlist.innerHTML="";
        var xhr2=new XMLHttpRequest();
        // console.log(this.index+1);
        
        xhr2.open('get','../commodity.php?page='+(this.index+1),true);
        xhr2.send();
        xhr2.onreadystatechange=function(){
            if(xhr2.readyState==4&&xhr2.status==200){
                var result2=JSON.parse(xhr2.responseText);
                // console.log(xhr2.responseText);
                var html= "";
            for (var i = 0; i < result2.data.length; i ++ ) {
                // var linode = document.createElement('li'); 
                html+='<li>';
                html+='<a href="" class="bigpic">';
                html+=' <img src='+ result2.data[i].pic + '>';
                html+='</a>';
                html+='<div class="littlepic">';
                html+=' <a href="#">';
                html+=' <img src='+result2.data[i].pic+'>';
                html+='  </a>';
                html+=' <a href="#">';
                html+=' <img src='+result2.data[i].pic2+'>';
                html+=' </a>';
                html+=' <a href="#">';
                html+=' <img src='+result2.data[i].pic+'>';
                html+=' </a>';
                html+=' <a href="#">';
                html+=' <img src='+result2.data[i].pic+'>';
                html+=' </a>';
                html+=' <a href="#">';
                html+=' <img src='+result2.data[i].pic+'>';
                html+=' </a>';
                html+=' </div>';
                html+=' <a href="" class="line-1">';
                html+=  result2.data[i].tit;
                html+=' </a>';
                html+=' <h3><span>￥</span> '+result2.data[i].price+'</h3>';
                html+='  <p class="evaluate">已有'+result2.data[i].plshu+'人评价</p>';
                // html+=' <p class="deadline">九机分期：&nbsp;&nbsp;<span>低至￥277.16 × 12期</span></p>';
                html+='</li>';
                rlist.innerHTML=html;
                    }
        }
    }

    $(this).css({background: "#f84653",}).siblings().css({background:"none"})
}
}
