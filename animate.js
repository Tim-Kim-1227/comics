window.onload = function(){
  let panel2 = document.getElementById('p2');
  let panel5 = document.getElementById('p5');
  let panel6 = document.getElementById('p6');

  let ball = document.getElementById('ball');
  let displayT = document.getElementById('displayT');
  let magnify = document.getElementById('magnify');
  let meteor = document.getElementById('mt');

  let ballSize = 50; //50px
  let meteorSizeW = 800; //800px
  let meteorSizeH = 600; //600px

  let batSound = new Audio("assets/bat.mp3");
  let warningSound = new Audio("assets/warning.mp3");
  let screamSound = new Audio("assets/screaming.mp3");

  document.querySelector(".b1").addEventListener('click', function(){
    //move to scollY vlaue = 955
    batSound.play();

    panel2.scrollIntoView({
      behavior: "smooth",
    });

    ball.style.width = ballSize + 'px';
    ball.style.height = ballSize + 'px';
  });

  window.addEventListener('scroll',function(){
    let scrollVal = window.scrollY;
    console.log(scrollVal);

    if(scrollVal >= 4772){
      screamSound.play();
    }else if(scrollVal >= 2998 && scrollVal <= 3940){
      let x = (scrollVal - 2998);
      meteor.style.top = 252 + scrollVal * 1 + 'px';
      meteor.style.left = 400 + (scrollVal - 2998) * 0.75 + 'px';

      meteor.style.width = meteorSizeW - 2.5 * x * (meteorSizeW / 2998) + 'px';
      meteor.style.height = meteorSizeH - 2.5 * x * (meteorSizeH / 2998)+ 'px';

      panel5.style.top = scrollVal +'px';

    }else if(scrollVal >= 955){
      //ball
      x = 955 - scrollVal;
      ball.style.top = 1500 + 0.8 * x - 0.004 * x * x +'px';
      ball.style.left = 700 + (scrollVal - 955) + 'px';
      ball.style.width = ballSize / 955 * scrollVal + (scrollVal - 955) * 2 + 'px';
      ball.style.height = ballSize / 955 * scrollVal + (scrollVal - 955) * 2 + 'px';
      ball.style.transform = 'rotate(' + 0.43   *(scrollVal-955) + 'deg)' ;

    }else{
      ball.style.top = "1500px";
      ball.style.left = "700px";
      ball.style.width = ballSize + 'px';
      ball.style.height = ballSize + 'px';
    }
  });

  displayT.addEventListener('mouseover', function(){
    displayT.style.width = "26vw";
    displayT.style.height = "auto";
    magnify.style.visibility = "hidden";
    warningSound.play();
    warningSound.loop = true;
  });
  displayT.addEventListener('mouseout', function(){
    displayT.style.width = "13vw";
    displayT.style.height = "auto";
    magnify.style.visibility = "visible";
    warningSound.loop = false;
  });

}
