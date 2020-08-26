//Init Vars
let bCreate = document.getElementById("bCreate");
gocreate=()=>{location.href="pcc.html"}



// if(document.getElementsByClassName("removeWorkExp")){
//     let removeWorkExp = document.getElementsByClassName("removeWorkExp");
// }

// //Skills



// //=============================================================//
// //AddWork
// 
// addWorkExp.addEventListener("click", ()=>{




//     //TEMPLATE//


// newWorkExp.innerHTML+=template;
// if(fCompany != "" || fJob != ""){
//     workExperienceSection.appendChild(newWorkExp);
//     company.value = "";
//     job.value = "";
//     since.value = "";
//     until.value = "";
//     // listenRemove(newWorkExp,id);
// }
// })
// //============================================================//
// //RemoveWork

// // listenRemove=(element, id)=>{
// //     if(document.getElementsByClassName("removeWorkExp")[id]){
// //         removeWorkExp.addEventListener("click", ()=>{
// //             workExperienceSection.removeChild(element);
// //         })
// //     }
// // }

// //============================================================//
// //AddSkill

   




// })

// //============================================================//
// //CreatePCC
// let createpcc = document.getElementById("createpcc");
// createpcc.addEventListener("click", ()=>{
   




// })

let personalDataSection = document.getElementById("personalDataSection");
let workExperienceSection = document.getElementById("workExperienceSection");
let skillsSection = document.getElementById("skillsSection");

class PersonalData{
    constructor(){ 
        name = document.getElementById("name");
        email = document.getElementById("email");
        number = document.getElementById("number");
    }

}

class WorkExp{
    constructor(){
        
        this.company = document.getElementById("company");
        this.job = document.getElementById("job");
        this.since = document.getElementById("since");
        this.until = document.getElementById("until");
        
        this.newDiv = [];


    }



    newWorkExp(){

        //TEMPLATE//
        let template =`
            <b>Company:</b> ${company.value} <b>Job:</b> ${job.value} <b>Since:</b> ${since.value} <b>Until:</b> ${until.value} <button onclick="workexp.removeWorkExp();" id="removeWorkExp" class="button removeWorkExp">✖</button>
        <br>`;

        this.id = this.newDiv.push(document.createElement("div") );

        

        workExperienceSection.appendChild(this.newDiv[this.id-1]);
        this.newDiv[this.id-1].innerHTML+=template;
        this.newDiv[this.id-1].classList.add("container", "newDiv");

        console.log(this.id +" "+ this.newDiv[this.id-1]);
    }

    removeWorkExp(){
        
    }


}

class Skills{
    constructor(){
        this.technology = document.getElementById("technology");
        this.level = document.getElementById("level");
        this.newDiv = [];


    }

    newSkill(){
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
        

        this.id = this.newDiv.push(document.createElement("div") );
        skillsSection.appendChild(this.newDiv[this.id-1]);
        this.newDiv[this.id-1].innerHTML+=template;
        this.newDiv[this.id-1].classList.add("container", "newDiv");
        
        console.log(this.color);
    }
}

skill = new Skills();
workexp = new WorkExp();


//==LISTENERS==//
let addWorkExp = document.getElementById("addWorkExp");
addWorkExp.addEventListener("click", ()=>{
    
    workexp.newWorkExp();
})

let addSkill = document.getElementById("addSkill");
addSkill.addEventListener("click", ()=>{
    
    skill.newSkill();
})

