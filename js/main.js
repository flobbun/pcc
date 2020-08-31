//Clean
localStorage.clear();

//Init Vars
let bCreate = document.getElementById("bCreate");
gocreate=()=>{location.href="pcc.html"}

    //Sections
let personalDataSection = document.getElementById("personalDataSection");
let workExperienceSection = document.getElementById("workExperienceSection");
let skillsSection = document.getElementById("skillsSection");

    //Buttons
let addWorkExp = document.getElementById("addWorkExp");
let addSkill = document.getElementById("addSkill");

let newObj = [];
let ID = 0;

let newObj2 = [];
let ID2 = 0;



//===============================================================//


class PersonalData{
    constructor(){ 
        this.name = document.getElementById("name");
        this.email = document.getElementById("email");
        this.number = document.getElementById("number");

    }

}


//==============================================================//

class WorkExp{
    constructor(id){
        
        this.company = document.getElementById("company");
        this.job = document.getElementById("job");
        this.since = document.getElementById("since");
        this.until = document.getElementById("until");
       
        this.vCompany = this.company.value;
        this.vJob = this.job.value;
        this.vSince = this.since.value;
        this.vUntil = this.until.value;

        this.id = id;

        //TEMPLATE//
        let template =`
            <b>Company:</b> ${this.vCompany} <b>Job:</b> ${this.vJob} <b>Since:</b> ${this.vSince} <b>Until:</b> ${this.vUntil}`;

        this.newDiv = document.createElement("div");

        workExperienceSection.appendChild(this.newDiv);
        this.newDiv.innerHTML+=template;
        this.newDiv.classList.add("container", "newDiv", "newwork-"+id);

        this.newButton = document.createElement("button");
        this.newDiv.appendChild(this.newButton);
        this.newButton.innerHTML="✖";
        this.newButton.classList.add("button", "removeWorkExp");
        this.newButton.setAttribute("id", "removeWorkExp");

        this.newButton.addEventListener("click", () => {
            this.removeWorkExp();
        })

    }


    removeWorkExp(){
        ID--;
        workExperienceSection.removeChild(this.newDiv);
        newObj.pop();
        delete this;
    }


}
//============//
//AddWork//
addWorkExp.addEventListener("click",()=>{
    ID++;
    newObj[ID] = new WorkExp(ID);
    company.value = "";
    job.value = "";
    since.value = 0;
    until.value = 0;
})





        


//================================================//

class Skills{
    constructor(id){
        
        this.technology = document.getElementById("technology");
        this.level = document.getElementById("level");

        this.vTechnology = this.technology.value;
        this.vLevel = this.level.value;
       
        this.id = id;

        if(level.value < 3){
            this.color = "gray";
        }
        if(level.value > 3 && level.value < 8){
            this.color = "blue";
        }
        if(level.value > 8){
            this.color = "red";
        }

        //TEMPLATE//
        let template =`
        <b>Technology:</b> ${this.vTechnology} <b>Level of Experience:</b> <b><span class=${this.color}>${this.vLevel}</span></b>`;

        this.newDiv = document.createElement("div");

        skillsSection.appendChild(this.newDiv);
        this.newDiv.innerHTML+=template;
        this.newDiv.classList.add("container", "newDiv");



        this.newButton = document.createElement("button");
        this.newDiv.appendChild(this.newButton);
        this.newButton.innerHTML="✖";
        this.newButton.classList.add("button", "removeSkill");
        this.newButton.setAttribute("id", "removeWorkExp");

        

        this.newButton.addEventListener("click", () => {
            this.removeSkill();
        })

    }


    removeSkill(){
        ID2--;
        skillsSection.removeChild(this.newDiv);
        newObj2.pop();
        delete this;
    }


}
//============//
//AddSkill//
addSkill.addEventListener("click",()=>{
    ID2++;
    newObj2[ID2] = new Skills(ID2);
    level.value = 1;
    technology.value = "";
})

let lvl = document.getElementById("lvl-value");
//========Show level==========//
level.addEventListener("change",()=>{

    
if(level.value < 3){
    lvl.classList.toggle("cgray")
}
if(level.value > 3 && level.value < 8){
    lvl.classList.toggle("cblue")
}
if(level.value > 8){
    lvl.classList.toggle("cred")
}
lvl.innerHTML= level.value;


})




//==================================//

//==CreatePCC==//

let createpcc = document.getElementById("createpcc");
createpcc.addEventListener("click", ()=>{

    //===========GET DATA==========//

    //PersonalData
personalData = new PersonalData();
let pName = personalData.name.value;
let pEmail = personalData.email.value;
let pNumber = personalData.number.value;

    //WorkExp && Skills
let pCompany = [], pJob = [], pSince = [], pUntil = [], pTechnology = [], pLevel = [];

for (let i = 0; i < newObj.length; i++) {
    
    if(newObj[i]){
        pCompany[i] = newObj[i].vCompany;
        pJob[i] = newObj[i].vJob;
        pSince[i] = newObj[i].vSince;
        pUntil[i] = newObj[i].vUntil;
    }

    localStorage.setItem('nWorkExp', JSON.stringify(newObj.length));
    localStorage.setItem('company', JSON.stringify(pCompany));
    localStorage.setItem('job', JSON.stringify(pJob));
    localStorage.setItem('since', JSON.stringify(pSince));
    localStorage.setItem('until', JSON.stringify(pUntil));

}

for (let i = 0; i < newObj2.length; i++) {

    if(newObj2[i]){
        pTechnology[i] = newObj2[i].vTechnology;
        pLevel[i] = newObj2[i].vLevel;
            
    localStorage.setItem('nSkills', JSON.stringify(newObj2.length))
    localStorage.setItem('technology', JSON.stringify(pTechnology));
    localStorage.setItem('level', JSON.stringify(pLevel));
    }

}


    



//=====================================================================//

//If you are asking yourself why am I using two diffrent ways to transfer data from one page to another
//the answer is because I'm learning :v

    //Go
transferData("print.html", "pName,pEmail,pNumber");

function transferData(page, vars) {
    page +="?";
    nomVec = vars.split(",");
    for (i=0; i<nomVec.length; i++)
    page += nomVec[i] + "=" + escape(eval(nomVec[i]))+"&";
    page = page.substring(0,page.length-1);
    location.href=page;
  }


  

})
