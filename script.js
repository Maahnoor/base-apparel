function ValidateEmail(inputText, al)
{
	// const al =  document.getElementById(anchorid);
	// console.log(al);
	al.style.backgroundImage = 'url(images/icon-arrow.svg)';
	al.style.backgroundColor = 'hsl(0, 78%, 91%)';
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
return true;
}
else
{
const id = document.getElementById('errormsg');
const id2 = document.getElementById('erroricon');
const id3 = document.getElementById('enter-email');
// const id4 = document.getElementById('anchor');
id.style.visibility = 'visible';
id2.style.visibility = 'visible';
id3.setAttribute('id','errorinput');
return false;
}
}
