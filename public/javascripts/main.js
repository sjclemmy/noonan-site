var currchap = 1;
var text, i;
for (i = 0; i < 150; i++) {
  text +=
    "<div id='fullscreen"
    + (i + 1) +
    "' style='width: 1350px; height: 620px; margin:auto; border: 2px solid beige; background-color: LavenderBlush; display: none; padding: 0;'></div>";
}
document.getElementById("fullscreen0").innerHTML = text;