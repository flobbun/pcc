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
        name = document.getElementById("name");
        email = document.getElementById("email");
        number = document.getElementById("number");
    }

}

//==============================================================//

class WorkExp{
    constructor(id){
        
        this.company = document.getElementById("company");
        this.job = document.getElementById("job");
        this.since = document.getElementById("since");
        this.until = document.getElementById("until");
       
        this.id = id;


        //TEMPLATE//
        let template =`
            <b>Company:</b> ${company.value} <b>Job:</b> ${job.value} <b>Since:</b> ${since.value} <b>Until:</b> ${until.value}`;

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
    }


}
//============//
//AddWork//
addWorkExp.addEventListener("click",()=>{
    ID++;
    newObj[ID] = new WorkExp(ID);

})








//================================================//

class Skills{
    constructor(id){
        
        this.technology = document.getElementById("technology");
        this.level = document.getElementById("level");
       
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
        <b>Technology:</b> ${technology.value} <b>Level of Experience:</b> <b><span class=${this.color}>${level.value}</span></b> <button class="button removeSkill">✖</button>
        <br>`;

        this.newDiv = document.createElement("div");

        skillsSection.appendChild(this.newDiv);
        this.newDiv.innerHTML+=template;
        this.newDiv.classList.add("container", "newDiv");



        this.newButton = document.createElement("button");
        this.newDiv.appendChild(this.newButton);
        this.newButton.innerHTML="✖";
        this.newButton.classList.add("button", "removeWorkExp");
        this.newButton.setAttribute("id", "removeWorkExp");

        

        this.newButton.addEventListener("click", () => {
            this.removeSkill();
        })

    }


    removeSkill(){
        ID--;
        skillsSection.removeChild(this.newDiv);
    }


}
//============//
//AddSkill//
addSkill.addEventListener("click",()=>{
    ID2++;
    newObj2[ID] = new Skills(ID2);

})



//=====================
//CreatePCC
let createpcc = document.getElementById("createpcc");
createpcc.addEventListener("click", ()=>{
   




})
