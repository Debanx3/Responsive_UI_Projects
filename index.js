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

/*STICKY HEADER CODE*/
const stickpane = document.querySelector('#stickyheader');
const sticky = stickpane.offsetTop;
console.log(sticky);
/*CONSOLE FN GIVES ME OFFSET VALUED DISPLAYED UNDER CONSOLE TAB IN BRAVE V* DEVELOPER TOOLS*/
window.addEventListener('scroll', ()=>
    {
        if(window.pageYoffset > sticky)
            {stickpane.classList.add('sticky');}
        else
            {stickpane.classList.add('sticky');}
    }
);