let b0=document.getElementById('b0');
let b1=document.getElementById('b1');
let b2=document.getElementById('b2');
let b3=document.getElementById('b3');
let b4=document.getElementById('b4');
let b5=document.getElementById('b5');
let b6=document.getElementById('b6');
let b7=document.getElementById('b7');
let b8=document.getElementById('b8');
let b9=document.getElementById('b9');
let bzero=document.getElementById('b0');
let bdot=document.getElementById('bdot');
let bplus=document.getElementById('bplus');
let bmins=document.getElementById('bmins');
let bvs=document.getElementById('bvs');
let bcut=document.getElementById('bcut');
let beql=document.getElementById('beql');
let bstart=document.getElementById('bstart');
let bdelet=document.getElementById('bdelet');
let sp=document.querySelector('span')
//actions
bzero.onclick=()=>{sp.innerText+='0';};
b1.onclick=()=>{sp.innerText+='1';};
b2.onclick=()=>{sp.innerText+='2';};
b3.onclick=()=>{sp.innerText+='3';};
b4.onclick=()=>{sp.innerText+='4';};
b5.onclick=()=>{sp.innerText+='5';};
b6.onclick=()=>{sp.innerText+='6';};
b7.onclick=()=>{sp.innerText+='7';};
b8.onclick=()=>{sp.innerText+='8';};
b9.onclick=()=>{sp.innerText+='9';};
bdot.onclick=()=>{sp.innerText+='.';};
bplus.onclick=()=>{sp.innerText+='+';};
bmins.onclick=()=>{sp.innerText+='-';};
bvs.onclick=()=>{sp.innerText+='×';};
bcut.onclick=()=>{sp.innerText+='/';};
bstart.onclick=()=>{sp.innerText='';};
bdelet.onclick=()=>{let del=sp.innerText;
    sp.innerText=del.slice(0,-1);};
 
// ---------------------------------------------------- 
 beql.onclick=()=>{
    let r = sp.innerText;
    var num = r.split('');
    let i=1;
    
 while(i<num.length){
   
   if(num[i]=='+')
      { if(Number.isInteger(parseInt(num[i+2]))){        
        num[i+1]= num[i+1]+num[i+2];
        num[0]=parseInt(num[0])+parseInt(num[i+1]);
       i+=3;}
      else{   num[0]=parseInt(num[0])+parseInt(num[i+1]);
         i+=2;} }
    if(num[i]=='-')
             { if(Number.isInteger(parseInt(num[i+2]))){        
               num[i+1]= num[i+1]+num[i+2];
               num[0]=parseInt(num[0])-parseInt(num[i+1]);
              i+=3;}
               else{ num[0]=parseInt(num[0])-parseInt(num[i+1]);
                i+=2;} }
    if(num[i]=='×')
              {if(Number.isInteger(parseInt(num[i+2]))){        
               num[i+1]= num[i+1]+num[i+2];
               num[0]=parseInt(num[0])*parseInt(num[i+1]);
              i+=3;}
              else{ num[0]=parseInt(num[0])*parseInt(num[i+1]); 
                i+=2;}}
    if(num[i]=='/')
              { if(Number.isInteger(parseInt(num[i+2]))){        
               num[i+1]= num[i+1]+num[i+2];
               num[0]=parseInt(num[0])/parseInt(num[i+1]);
              i+=3;}
              else{ num[0]=parseInt(num[0])/parseInt(num[i+1]);
                i+=2;} }
     if(num[i]=='.')
                {num[0]=num[0].num[i+1];
                    i+=2; }
   if(Number.isInteger(parseInt(num[i]))){        
 num[0]=num[0]+num[i];
i+=1;}
    }
 sp.innerText=num[0];
}






