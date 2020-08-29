//Vars//
mainSection = document.getElementById("mainSection");


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

//=============================================//
alert(nSkills);

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

  Skills.innerHTML+=`<div class="row justify-content-center text-center"><h2 class='p-2 m-2 text-center'><i class="fas fa-laptop-code"></i> Skills</h2></div>`;
  
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



//The user didn't give any info
if(!pName && !pNumber && nWorkExp < 1 && nSkills < 1){
  mainSection.innerHTML+=`<div class="container"><h1 class="text-center text-light">Hey!<br> What are you doing?<br><br> <b><a href="index.html">Create something!</a></b></h1></div>`;
}


//======================================//
mainSection.appendChild(personalData);
mainSection.appendChild(workExp);
mainSection.appendChild(Skills);


