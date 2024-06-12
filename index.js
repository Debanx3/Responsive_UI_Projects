function showmodal()
{
    /*first method for onclick mouse event*/
    document.querySelector('.overlay').classList.add('displayoverlay');
    document.querySelector('.loginform').classList.add('displayloginform');
}
/*var logos=document.querySelector('.logo');
logos.addEventListener('click',showmodal);*//*second method for onclick mouse event */
function closemodal()
{
    document.querySelector('.overlay').classList.remove('displayoverlay');
    document.querySelector('.loginform').classList.remove('displayloginform');
}
var c=document.querySelector(".trojan");
c.addEventListener('click',closemodal);