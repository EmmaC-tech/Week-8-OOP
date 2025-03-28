//Menu app example for this week will be about Shoes 

// Shoes

//Shoes array

//class Shoes
//make
//model
class Shoes {
  constructor(name, version){
    this.name = name;
    this.version = version;
  }
}
//class Menu
class Menu{ 
    constructor(){
    //shoes array
    this.Shoes =[];
    this.version=[]
 }

 //add Shoes
 //prompt for a name
 //prompt for a version
 //create new shoes and push shoes into array
 addShoes(){
    // Prompt user for shoes name and version
    let shoesName = prompt("Enter shoes name:");
    let shoesVersion = prompt("Enter shoes version:");
    this.Shoes.push(new Shoes(shoesName, shoesVersion));
 }
 
 //delete Shoes
 deleteShoes(){
    let shoesIndex = prompt("Enter shoes index to DELETE:");
    this.Shoes.splice(shoesIndex, 1);
 }


 //view Shoes
 viewShoes(){
    let displayShoes = '';
    for(let i=0; i < this.Shoes.length; i++){
        
        displayShoes += `
        ${i}) ${this.Shoes[i].name} ${this.version[i].version}`
     }

     alert(`
     Shoes Inventory:
     **********************
     ${displayShoes}
     `);
 }
 
 //see a menu
 showMainMenu(){
    return prompt(`
        Main Menu:
        ~~~~~~~~~~~~~~~~~
        0)Exit Menu
        1)Add Shoes
        2)Delete Shoes
        3)View All Shoes
      `); 
 }

 //start the menu
 start(){
    let selection = this.showMainMenu();

    while(selection != 0){

        switch(selection){
            case "1": this.addShoes();
            break;

            case"2": this.deleteShoes();
            break;

            case"3": this.viewShoes();
            break;

            default: selection = 0;
        }
        selection = this.showMainMenu();
    }
    alert("You've pressed Exit Menu...ADIOS!");  
 }
 
}
 //instatiate the menu and invoke the start method

 let menu = new Menu();

 menu.start();
