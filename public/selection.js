  
function clickAnchorTag(a) {
    console.log("Going to click button");
    var event = document.createEvent('MouseEvent');
    event = new CustomEvent('click');
    a.dispatchEvent(event);
}

if (document.getElementById("title") && window.location.hash) {
  console.log("Going to click button");
  clickAnchorTag(document.getElementById("dashboard"));
  document.getElementById("title").innerText = decodeURI(window.location.hash.split("-")[0]).substring(1);
  document.getElementById("home").innerText = decodeURI(window.location.hash.split("-")[1]);
  document.getElementById("sell").innerText = decodeURI(window.location.hash.split("-")[2]);
  document.getElementById("my").innerText = decodeURI(window.location.hash.split("-")[3]);
  document.getElementById("dashboard").innerText = decodeURI(window.location.hash.split("-")[4]);

  document.getElementById("assetName").placeholder = decodeURI(window.location.hash.split("-")[5]) + " Name";
  document.getElementById("assetDescription").placeholder = decodeURI(window.location.hash.split("-")[5]) + "Description";
  document.getElementById("assetPrice").placeholder = decodeURI(window.location.hash.split("-")[5]) + "Price in Matic";

}



document.onselectionchange = function() {
    console.log('New selection made');
    let selection = document.getSelection();
    console.log('selection is '+selection);
    console.dir(selection);
};
