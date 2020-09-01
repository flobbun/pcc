//Vars//
mainSection = document.getElementById("mainSection");
let print = false;

    //Receiving from localstorage

    
let nWorkExp = localStorage.getItem('nWorkExp');
let nSkills = localStorage.getItem('nSkills');

let company = localStorage.getItem('company');
let job = localStorage.getItem('job');
let since = localStorage.getItem('since');
let until = localStorage.getItem('until');

let technology = localStorage.getItem('technology');
let level = localStorage.getItem('level');
//==================================================//

//======Getting transfered info======//
cadVariables = location.search.substring(1,location.search.length);
arrVariables = cadVariables.split("&");

for (i=0; i<arrVariables.length; i++) 
{
  arrVariableActual = arrVariables[i].split("=");
  if ( isNaN(parseFloat(arrVariableActual[1])) )
  {
    eval(arrVariableActual[0]+"='"+unescape(arrVariableActual[1])+"';");
  }
  else
  {
    eval(arrVariableActual[0]+"="+arrVariableActual[1]+";");
  }
    
}
//==================================================//
//The user didn't give any info
if(!pName && !pNumber && nWorkExp < 1 && nSkills < 1){
  print = false;
  document.body.style.backgroundColor="#222";
  mainSection.innerHTML+=`<div class="container"><h1 class="text-center text-light">Hey!<br> What are you doing?<br><br> <b><a href="index.html">Create something!</a></b></h1></div>`;
}else{print = true;}
//==================================================//
//===============DOWNLOAD PDF======================//
downloadpdf=()=>{
window.print();

}
//==================================================//
//===============THEME SYSTEM======================//
chooseTheme=()=>{
  if(print){
    let tmpDiv = `
  <div class="container p-4 animate__animated animate__backInDown">
    <div class="list-group">
    <h3 class="text-center">Choose a theme!</h3>
    <a href="#" title="classic" onclick="choose(this.title)" class="list-group-item list-group-item-action">→ Classic theme</a>
    <a href="#" title="hacker" onclick="choose(this.title)" class="list-group-item list-group-item-action">→ Hacker theme</a>
    <a href="#" title="blue" onclick="choose(this.title)" class="list-group-item list-group-item-action">→ Blue theme</a>
    <a href="#" title="fancy" onclick="choose(this.title)" class="list-group-item list-group-item-action">→ Fancy theme</a>
  </div>
  </div>`;
  let themeDiv = document.createElement("div");
  themeDiv.classList.add("themeDiv", "hide-print");
  themeDiv.innerHTML=tmpDiv;
  document.body.insertBefore(themeDiv, mainSection);
  document.body.style.backgroundColor="#111";
  document.body.style.color="#111";
  themeDiv.focus();
  
  choose=(title)=>{
  
    switch (title) {
      case "classic":
        mainSection.classList.add("theme-classic");
        document.body.style.backgroundColor="#222";
        break;
  
      case "hacker":
        mainSection.classList.add("theme-hacker");
        document.body.style.backgroundColor="#111";
        document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/D_OPcPXlI7g/maxresdefault.jpg')";   
  
        break;
      case "blue":
        mainSection.classList.add("theme-blue");
        document.body.style.backgroundColor="#222";
        break;
  
      case "fancy":
        mainSection.classList.add("theme-fancy");
        document.body.style.backgroundColor="#222";
        break;
  
    }
    document.body.removeChild(themeDiv);

    let fixedmenu = document.createElement("div"); 
    fixedmenu.classList.add("container","hide-print","fixedmenu", "col-md-12", "col-sm-8" , "col-8")
    fixedmenu.innerHTML=`    
    <div class="row p-2 justify-content-center">
        <button class="btn btn-dark p-2 m-2" onclick="location.reload()">Change theme</button>
        <button class="btn btn-dark p-2 m-2" onclick="downloadpdf()">Download</button>
    </div>`;
    document.body.appendChild(fixedmenu);
  }

  }
}
chooseTheme();



//==================================================//

let personalData = document.createElement("div");
personalData.classList.add("printDiv");
if(pName || pNumber){
  personalData.innerHTML=`
  <div class="container personalData">
    <h1 class="p-1">${pName}</h1>
    <div class="row text-center justify-content-center">
      <li>Email
      <i class="p-1 fas fa-envelope"></i>${pEmail}
      </li>
      
      <li>Number
      <i class="fas fa-mobile"></i>
        ${pNumber}
      </li>
    </div>
  </div>`;
  
}
//==================================================//


let workExp = document.createElement("div");
workExp.classList.add("printDiv");

if(company){

workExp.innerHTML+=`<h2 class='p-2 m-2 text-center'><i class="fas fa-briefcase"></i> Work Experience</h2>`;

  for (let i = 0;  i < JSON.parse(nWorkExp); i++) {
    if(JSON.parse(company)[i] !== null)
    {
      workExp.innerHTML+=`
      <div class="container">
      <div class="separator"></div>
        <div class="row justify-content-center">
          <i class="row p-3 fas fa-caret-right"></i>
          <li class="company">${JSON.parse(company)[i]}<li>
          <li>${JSON.parse(job)[i]}<li>
          <li>${JSON.parse(since)[i]}<li>
          <li>${JSON.parse(until)[i]}<li>
        </div>
  
      </div>
      
      `;  
    }
    
  }

}

//=================================================================//

let Skills = document.createElement("div");
Skills.classList.add("printDiv");

if(technology){

  Skills.innerHTML+=`<div class="m-2 row justify-content-center text-center"><h2 class='p-2 m-2 text-center'><i class="fas fa-laptop-code"></i> Skills</h2></div>`;
  
    for (let i = 0;  i < JSON.parse(nSkills); i++) {
      if(JSON.parse(technology)[i] !== null)
      {
        Skills.innerHTML+=`
        <div class="container">
        <div class="separator"></div>
          <div class="row justify-content-center">
            <i class="row p-3 fas fa-caret-right"></i>
            <li>${JSON.parse(technology)[i]}<li>
            <li>${JSON.parse(level)[i]}<li>
          </div>
    
        </div>
        
        `;  
      }
      
    }
  
  }






//======================================//
if(print){
  mainSection.appendChild(personalData);
  mainSection.appendChild(workExp);
  mainSection.appendChild(Skills);
}



