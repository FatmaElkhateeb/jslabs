///////////////task one//////////////////////////
let developer = {

    name: "Ahmed",
    birthYear: 1992,
    skills: ["PhotoShop", "HTML", "CSS", "JS"],
    getAge:function(){
        var todayofdates = new Date();
        today_year = todayofdates.getFullYear();
        return (today_year-this.birthYear);
    },
     newSkills : ["ES6", "ES7", "ES😎"],
     divesSkills:function (){
        [this.designSkills,...this.devSkills] = this.skills
   devSkills=[...this.devSkills,...this.newSkills];
return devSkills
        },
  };

  console.log(developer.getAge());
  console.log(developer.divesSkills());
 


////////////// task two///////////////////
const restaurant = {
    name: "ES-Snacks",
    drinks: {
      hot: ["coffee", "tea"],
      cold: ["pepsi", "7up", "fanta", "juice"],
    },
    meals: ["burger", "pizza"],
    addOrder(obj) {
      const  {
        name: names,
        order: {
          meal,
          drink: { c: cold, h: hot },
        },
      } = obj;
      setTimeout(() => {
        console.log(
          `Thank you for ordering from ${this.name} 
        
                Order Summary
                =============
                Mr/Ms: "${names}"
                Order: "${
                  cold ? this.drinks.cold[cold - 1] : this.drinks.hot[hot - 1]
                }", "${this.meals[meal - 1]}"
                
                have a great day!`
        );
      }, 2000);
    },
  };
    
const order = {};
        const handler = {
        
            set(obj, prop, value) {
              if (prop != "meal" && prop != "drink") {
                throw new Error(`${prop} does not exist on current obj`);
              }
              if (prop === "meal") {
                if (typeof value !== "number" )
                {
                  throw new Error("Only number 1 and 2  are allowed");

                }
                if (value>2 || value<0) {
                  throw new Error("Only number 1 and 2  are allowed");
                }
                if (prop  == "drink") {
                  if (typeof value != "object") {
                    throw "object only";
                  }
                }
              }
              
            },
          };

      
          const proxy1 = new Proxy(order, handler);
          console.log(proxy1.meal=1)
         console.log( proxy1.drink = { h: 1 });

         const {name,drinks:{hot,cold:coldDrinks},meals}=restaurant
         console.log(coldDrinks);
       
       function resofDrink(){
           let res=[];
           for (let i=0;i<coldDrinks.length;i++) {
               if (coldDrinks[i].includes('u')) {
                   res.push(coldDrinks[i]);
               }
           }
           return res;
       }
       console.log(resofDrink());
       

//////////////////////task three/////////////////////////
function styled(strings,...keys){
  const theme = {
      color: {
        primary: "red",
        secondary: "blue",
      },
      fontSize: {
        small: "10px",
        large: "20px",
      },
    };
    return strings.map((x,y)=> keys[y]? x+= keys[y](theme): x).join("")
}
console.log(
  styled`
.h1 {
    color: ${ theme => theme.color.primary},
    font-size: ${ theme => theme.fontSize.large}
}
`)
 


