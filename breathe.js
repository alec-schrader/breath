
$(document).ready(function () {
  var progBar = $("#breathProg")
  var breathDir = $("#breathDir")
  var breathLen = 5.5 * 1000
  var curBreathDir = "Inhale", curBreathTime=0

  window.setInterval(function(){
    if (curBreathDir == "Inhale"){
      curBreathTime+=100
    }else{
      curBreathTime -= 100
    }
    progBar.width((curBreathTime / breathLen) * 100 + "%")
    if (curBreathTime == breathLen) {
      curBreathDir = "Exhale"
      breathDir.html(curBreathDir)
    }
    if (curBreathTime == 0) {
      curBreathDir = "Inhale"
      breathDir.html(curBreathDir)
    }
  }, 100)

});
