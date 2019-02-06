// var currchap = 1;
// var text, i;
// for (i = 0; i < 150; i++) {
//   text +=
//     "<div id='fullscreen"
//     + (i + 1) +
//     "' style='width: 1350px; height: 620px; margin:auto; border: 2px solid beige; background-color: LavenderBlush; display: none; padding: 0;'></div>";
// }
// document.getElementById("fullscreen0").innerHTML = text;


// function bigimg(boxid, minZ, maxZ, Z, w, h, url) {
//   closeall();
//   document.getElementById('fullscreen0').style.display = 'block';
//   document.getElementById(boxid).style.display = 'block';
//   document.getElementById('navbutt1').style.display = 'block';
//   var map = L.map(boxid, {minZoom: minZ, maxZoom: maxZ, center: [0, 0], zoom: Z, crs: L.CRS.Simple});
//   var southWest = map.unproject([0, h], map.getMaxZoom()-1);
//   var northEast = map.unproject([w, 0], map.getMaxZoom()-1);
//   var bounds = new L.LatLngBounds(southWest, northEast);
//   L.imageOverlay(url, bounds).addTo(map);
//   map.setMaxBounds(bounds);
// }
//
// function closeall() {
//   var box = ['titles', 'container1', 'lcontainer1', 'lcontainer1b', 'lcontainer1a', 'lcontainer2', 'rcontainer1', 'rcontainer3', 'nav', 'navbutt1',
//     'navbuttPR', 'navbuttPRa', 'lcontainer3', 'lcontainer3a', 'lcontainer3b','lcontainer4', 'lcontainer5', 'lcontainer6', 'lcontainer7', 'rcontainer4'];
//   var viewbox = [];
//   for(i = 0; i < 150; i++)
//   {viewbox[i] = "fullscreen" + (i + 1);}
//   var len = box.length;
//   for (i = 0; i < len; i++)
//   {document.getElementById(box[i]).style.display = "none";}
//   var viewlen = viewbox.length;
//   for (i = 0; i < viewlen; i++)
//   {document.getElementById(viewbox[i]).style.display = "none";}
//   document.getElementById('fullscreen0').style.display = "none";
//   document.getElementById("chtitle").innerHTML = "";}