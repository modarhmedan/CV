window.onload = function(){
$(".disguise1").hide("slide", { direction: "left" }, 1000);
$(".disguise2").hide("slide", { direction: "right" }, 1000);
$(".image").hide();
$(".tech i").click(function(){
  var className = $(this).attr('class').substr(0, 5);
  var classDown = $(this).attr('class').substr(18, 4);
  if(classDown == "down"){
    $(this).attr('class', className+' fa fa-angle-up');
  }
  else{
    $(this).attr('class', className+' fa fa-angle-down');
  }
  $("p."+className).toggle("slow");
});
$(".formation i").click(function(){
  var className = $(this).attr('class').substr(0, 5);
  var classDown = $(this).attr('class').substr(18, 4);
  if(classDown == "down"){
    $(this).attr('class', className+' fa fa-angle-up');
    console.log($(this).attr('class'));
  }
  else{
    $(this).attr('class', className+' fa fa-angle-down');
  }
  $("p."+className).toggle("slow");
});
setTimeout(type,1000);
setTimeout(animation,7000);
}
function animation(){
  var loading = setInterval(function() {load(); }, 50);
  var num = 0;
  function load() {
    $(".image:nth-child(1)").show("slide", { direction: "left" }, 1000);
      if (num == 100) {
          clearInterval(loading);
          document.getElementById("mymeter1").style.boxShadow = "0px 0px 5px #006400";
          $(".image:nth-child(2)").show("slide", { direction: "left" }, 1000);
          var loading2 = setInterval(function() {load2(); }, 50);
          var num2 = 0;
          function load2() {
              if (num2 == 100) {
                  clearInterval(loading2);
                  document.getElementById("mymeter2").style.boxShadow = "0px 0px 5px #006400";
                  $(".image:nth-child(3)").show("slide", { direction: "left" }, 2000);
                  var loading = setInterval(function() {load3(); }, 1000);
                    function load3(){
                      $(".image:nth-child(3) img:nth-child(1)").css("top","-30px");
                      $(".image:nth-child(3) img:nth-child(1)").css("opacity" , "1");
                      $(".image:nth-child(3) img:nth-child(1)").show();
                      $(".image:nth-child(3) img:nth-child(1)").css("opacity" , "0.5");
                      $(".image:nth-child(3) img:nth-child(1)").animate({top: "-60px"});
                      $(".image:nth-child(3) img:nth-child(1)").fadeOut();
                    }
                }
              else{
                  num2++;
                  document.getElementById("mymeter2").style.width = num2+"%";
                }
              }
            }
      else{
          num++;
          document.getElementById("mymeter1").style.width = num+"%";
        }
      }
}
function type(){
  var typeLetters = setInterval(function() {typed(); }, 200);
  var i = 0;
  function typed(){
    var myName = "Modar Hmedan";
    var myJobe = "développeur web";
    if(i < myName.length){
      document.querySelector("#présentation h1").textContent += myName[i];
      i++;
    }
    else{
      clearInterval(typeLetters);
      var typeLettersJob = setInterval(function() {typedJob(); }, 200);
      var h = 0;
      function typedJob(){
        if(h < myJobe.length){
          document.querySelector("#présentation h3").textContent += myJobe[h];
          h++;
        }
        else{
          clearInterval(typeLettersJob);
        }
      }
    }
  }
}
