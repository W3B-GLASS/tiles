  

if (document.getElementById("title") && window.location.hash) {
  document.getElementById("title").innerText = decodeURI(window.location.hash.split("-")[0]);
  document.getElementById("home").innerText = decodeURI(window.location.hash.split("-")[2]);
  document.getElementById("sell").innerText = decodeURI(window.location.hash.split("-")[2]);
  document.getElementById("my").innerText = decodeURI(window.location.hash.split("-")[3]);
  document.getElementById("dashboard").innerText = decodeURI(window.location.hash.split("-")[4]);

  document.getElementById("assetName").innerText = decodeURI(window.location.hash.split("-")[5]);
}

document.onselectionchange = function() {
    console.log('New selection made');
    let selection = document.getSelection();
    console.log('selection is '+selection);
    console.dir(selection);
};
