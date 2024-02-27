function clock()
{
    let second=document.getElementById('seconds');
    let minute=document.getElementById('minutes');
    let hour=document.getElementById('hour');
    let ampm=document.getElementById('ampm');


    let s=new Date().getSeconds();
    let m=new Date().getMinutes();
    let h=new Date().getHours();
    var am='AM';


    if(h>12)
    {
        h=h-12;
        var am='PM';
    }
    h= (h<10) ? '0'+h:h;
    m= (m<10) ? '0'+m:m;
    s= (s<10) ? '0'+s:s;

    second.innerHTML=s;
    minute.innerHTML=m;
    hour .innerHTML=h;
    ampm.innerHTML=am;
}

let interval=setInterval(clock,1000);