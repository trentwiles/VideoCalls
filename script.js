/*
 *
 * Under Apache-2.0 License
 *
*/

const room = window.location.hash.substr(1); // temp fix, going to use full urls in the future

function changeuri() {
  var random_room = Math.random()
    .toString(16)
    .substr(2, 8);
  let stateObj = { id: "100" };
  window.history.replaceState(stateObj, "Room", "/#" + random_room);
}

if (room == "") {
  changeuri();
}

function init() {
  var i;
  var ele = document.getElementsByTagName("video");
  for (i = 0; i < ele.length; i++) {
    console.log(ele[i]);
    console.log(ele[i].controls);
    ele[i].controls = false;
    var cur = document.getElementById(ele[i].id);
    var h = cur.height;
    var w = cur.width;
    cur.height = 200;
    cur.width = 400;
    if (cur.ended == true) {
      cur.remove();
    }

    var users = i + 1; // because computers count from 0

    document.getElementById("join").innerHTML = users + " users in this call";
  }
}
setInterval(function() {
  init();
}, 1000);
