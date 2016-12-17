document.getElementById("nav01").innerHTML =
"<ul id='menu'>" +
"<li><c href='border.html'></b></li>" +
"<li><a href='index.html'>HOME</a></li>" +
"<li><a href='./profile3/index.html'>DIWA</a></li>" +
"<li><a href='./profile2/index.html'>SAN JUAN</a></li>" +
"<li><b href='border.html'></b></li>" +
"</ul>";

function validation() {
      var input1 = document.getElementById("sub1");
	  var input2 = document.getElementById("email");
	  var input3 = document.getElementById("contact");
   if (input1.value.length == 0)
   {
	   document.getElementById("result1").innerHTML = "please fill the following";
   }
   else
	   if (input1.value.length > 0)
   {
	   document.getElementById("result1").innerHTML = "";
   }
   if (input2.value.length == 0)
   {
	   document.getElementById("result2").innerHTML = "please fill the following";
   } 
   else
	   if (input1.value.length > 0)
   {
	   document.getElementById("result2").innerHTML = "";
   }
   if (input3.value.length == 0)
   {
	   document.getElementById("result3").innerHTML = "please fill the following";
   }
else
	if (input1.value.length > 0)
   {
	   document.getElementById("result3").innerHTML = "";
   }   
   else
	   
   {
      var x = confirm("THANK YOU FOR YOUR SUPPORT!");
      if (x == true) {
		 document.location.href = "index.html"; } 
   }
  }
 
