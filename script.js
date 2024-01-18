var fd=document.getElementById("ddf");
fd.addEventListener("submit",hfs);
function hfs(e)
{
     e.preventDefault();
    var dn=e.target.elements["name"].value;
    var dl=e.target.elements["loc"].value;
    var dp=e.target.elements["photo"].value;
    var dds=e.target.elements["desc"].value;
    for(var i=0;i<fd.length;i++)
    {
        //console.log(fd.children[i].value);
        fd.elements[i].value="";
    }
    var dc1=cdc(dn,dl,dp,dds);
    var wc=document.querySelector("#dc");
    if(wc.children.length===0)
    {
        document.querySelector("#title").innerHTML="WishList";
    }
    document.querySelector("#dc").appendChild(dc1);
    function cdc(n,l,url,des)
    {
        var card=document.createElement("div");
        card.className="card";
        var img=document.createElement("img");
        img.setAttribute("alt",n);
        var cpu="/image/OIP.jpg";
        if(img.src.length===0)
        {
            img.setAttribute("src",cpu)
        }
        else{
            img.setAttribute("src",url)
        }
        card.appendChild(img);
        var cardbody=document.createElement("div");
        cardbody.className="cardbody";
        var ct=document.createElement("h3");
        ct.innerText=n;
       cardbody.appendChild(ct);
        var st=document.createElement("h4");
        st.innerText=l;
        cardbody.appendChild(st);
        if(des.length!==0)
        {
            var dt=document.createElement("p");
            dt.className="cardtext"
            dt.innerText=des;
            cardbody.appendChild(dt);
        }
        
        //wc.appendChild(card);
        var cdb=document.createElement("button");
        cdb.innerText="remove";
        cdb.addEventListener("click",rd)
        cardbody.appendChild(cdb);
        card.appendChild(cardbody);
        return card;
    }
        function rd(e){
            var card=e.target.parentElement.parentElement;
            card.remove();
        }
    


}