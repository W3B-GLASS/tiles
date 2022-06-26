  
function clickAnchorTag(a) {
    console.log("Clicking button");
    var event = document.createEvent('MouseEvent');
    event = new CustomEvent('click');
    a.dispatchEvent(event);
}

if (document.getElementById("title") && window.location.hash) {
  console.log("Update header");
  document.onselectionchange = function() {
    console.log('New selection made');
    let selection = document.getSelection();
    console.log('selection is '+selection);
    console.dir(selection);
  };
  document.getElementById("title").innerText = decodeURI(window.location.hash.split("-")[0]).substring(1);
  document.getElementById("home").innerText = decodeURI(window.location.hash.split("-")[1]);
  document.getElementById("sell").innerText = decodeURI(window.location.hash.split("-")[2]);
  document.getElementById("my").innerText = decodeURI(window.location.hash.split("-")[3]);
  document.getElementById("dashboard").innerText = decodeURI(window.location.hash.split("-")[4]);

  document.getElementById("assetName").placeholder = decodeURI(window.location.hash.split("-")[5]) + " Name";
  document.getElementById("assetDescription").placeholder = decodeURI(window.location.hash.split("-")[5]) + "Description";
  document.getElementById("assetPrice").placeholder = decodeURI(window.location.hash.split("-")[5]) + "Price in Matic";

  let frame = document.createElement("iframe");
  frame.src = "lens-protocol-frontend/profiles";
  frame.style = "position: fixed; bottom: 100";

  document.getElementById("title").after(frame);
}



document.onselectionchange = function() {
    console.log('New selection made');
    let selection = document.getSelection();
    console.log('selection is '+selection);
    console.dir(selection);
};
