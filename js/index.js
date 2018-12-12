   $(document).ready(function () {

       //点击锤子动画 & 锤子跟着鼠标移动 只是不居中
       $('.main').mousedown(function () {
           $('.main').css({
               //改变鼠标指针成图片
               cursor: 'url("img/hammer2.png"), auto'
           });
       }).mouseup(function () {
           $('.main').css({
               cursor: 'url("img/hammer.png") ,auto'
           });
       });


       //设定定时器随机出现老鼠
       // 获取一个随机数 作为出现那只老鼠的下标num

       //设定倒计时
       var time = 20;

       var timeId = setInterval(function () {
           var num = Math.floor(Math.random() * 9);
        //    console.log(num);
           $('.mouse').eq(num).animate({
               top: 0,
           }, function () {
               $('.mouse').eq(num).animate({
                   top: 100,
               }, 1000)
           })

           //打中不打中老鼠下去后,都切换回原图
           $('.mouse').eq(num).css('background-image', 'url(img/mouse1.png)');

           time--;
           $('#time').text(time);
           if (time == 0) {
               clearInterval(timeId);
               $('#mask').show();
           }

       }, 1000)


       //分数
       var score = 0;

       //为老鼠注册点击事件,击中加分
       $('.mouse').on('click', function () {
           score += 2;
           $(this).css('background-image', 'url(img/mouse2.png)');
           $('.score-show').text(score);

           // 按下有audio啊音效
           var audio = document.getElementById("audio");
           audio.play();
       })







       // -------------x-------------x-----x-------x----------------x-----------------

       // click事件与mousemove冲突

       // var main = document.querySelector('.main');
       // var chuizi = document.querySelector('.chuizi');

       

       // 鼠标点击换图
       // $('.main').on('mousedown', function () {
       //     $('.chuizi').css('background-image', 'url(img/hammer2.png)');
       // })
       // //
       // $('.main').on('mouseup', function () {
       //     $('.chuizi').css('background-image', 'url(img/hammer.png)');
       // })


       // 锤子跟着鼠标移动 居中
       // main.onmousemove = function (e) {

       //     //鼠标移入获取鼠标的可视距离,
       //     //减去锤子盒子到可视区的距离就是坐标到锤子内边的距离,为了让鼠标始终在锤子中间,再减去锤子xy的一半
       //     //边界检测
       //     //最后赋值

       //     //1.
       //     var rect = chuizi.getBoundingClientRect();
       //     x = e.clientX - rect.x - $(".chuizi").width() / 2;
       //     y = e.clientY - rect.y - $(".chuizi").height() / 2;

       //     // console.log(x, y);
       //     //2.边界检测
       //     x = x < 0 ? 0 : x;
       //     x = x > 700 ? 700 : x;
       //     y = y < 0 ? 0 : y;
       //     y = y > 400 ? 400 : y;

       //     $('.chuizi').css('left', x + 'px');
       //     $('.chuizi').css('top', y + 'px');

       // }

       //为老鼠注册点击事件 --click事件与mousemove冲突
       //    $('.mouse').on('click',function(){
       //        console.log(11);
       //    })

       



   })