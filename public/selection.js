  

if (document.getElementById("title") && window.location.hash) {
  document.getElementById("title").innerText = decodeURI(window.location.hash.split("-")[0]).substring(1);
  document.getElementById("home").innerText = decodeURI(window.location.hash.split("-")[1]);
  document.getElementById("sell").innerText = decodeURI(window.location.hash.split("-")[2]);
  document.getElementById("my").innerText = decodeURI(window.location.hash.split("-")[3]);
  document.getElementById("dashboard").innerText = decodeURI(window.location.hash.split("-")[4]);

  document.getElementById("assetName").placeholder = decodeURI(window.location.hash.split("-")[5]) + " Name";
  document.getElementById("assetDescription").placeholder = decodeURI(window.location.hash.split("-")[5]) + "Description";
  document.getElementById("assetPrice").placeholder = decodeURI(window.location.hash.split("-")[5]) + "Price in Matic";

  setTimeout(eventFire,1000,document.getElementById("dashboard"),'click');
  setTimeout(eventFire,10000,document.getElementById("home"),'click');
}

function eventFire(el, etype){
  console.log("Going to fire click "+etype);
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}


document.onselectionchange = function() {
    console.log('New selection made');
    let selection = document.getSelection();
    console.log('selection is '+selection);
    console.dir(selection);
};
