// Chapter 3 accordion

var pooracc = document.getElementsByClassName("poorcard-header");
var pooracc1 = document.getElementsByClassName("poornoshow");


for (i = 0; i < pooracc.length; i++) {
           pooracc[i].addEventListener("click", function() 
	             {closeall(i);
	              this.classList.toggle("active1");
	              var panel = this.nextElementSibling;
                  if (panel.style.display === "block")
				  {panel.style.display = "none";}
			      else
				  {panel.style.display = "block";}
			     }
				                      );
				                     }
	


function closeall(z) {
var p=0;

do	{
pooracc[p].classList.remove("active1");
pooracc1[p].style.display = "none";
p++;
}
while (p < pooracc1.length, p != z);
}