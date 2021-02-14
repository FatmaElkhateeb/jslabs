////////////////task one/////////////////////
const arrayOfFood = ["burger", "pizza", "donuts", "pizza", "koshary", "donuts", "seafood", "burger"]
let newSet = new Set(arrayOfFood);
newSet.add("pasta");
console.log(newSet);
newSet.delete("burger");
console.log(newSet);
function addsets(sets)
{
    if(sets.size>2)
    {
    newSet.clear(sets);
    }
    else{
     newSet.add(sets)
    }
}
console.log(addsets(newSet));
/////////////////task two//////////////////////
class Vehicle{
    static i=0;
    constructor(wheels=4 ,speed=100) {
        Vehicle.i++;
        this.wheels = wheels;
        this.speed=speed;
    }

    static renum(){
     console.log(Vehicle.i);
    }

    static iscompare(p1 ,p2){
        if(p1.speed>p2.speed){
            return p1;}
            else{
                
                return p2;
            }
        }
}

class Bike extends Vehicle {
    constructor( wheels = 2, speed = 10, basket = true) {
        super(wheels, speed)
        this.basket = basket;
    }
}
////////////////task three//////////////////////////

const getData = async () => {
const Dataresult = await fetch('users.json');
const data = await Dataresult.json();
const resultfilter = data['results'];


for(let item of resultfilter){
    let fullName=`${item['name']['first']}${item['name']['last']}`;
    item['name'].fulName=fullName;
}


for(let item of resultfilter){
    if(item['dob']['age']>50&& item['gender']=='male')
    console.log(item)
}


let sum=0;
for(let item of resultfilter){
    if(item['location']['country']=='France')
    if(sum<item['dob']['age'])
        sum=item['dob']['age']
}
console.log(sum)}

getData();

////////////////task four/////////////////
const tenRandomNumbers = {
   from: 1,
    to: 10,
    [Symbol.iterator]() {
      return {
        current: 0,
        next() {
          if (this.current < 10) {
            this.current = this.current + 1;
            return { value: Math.random(), done: false };
          } else {
            return { value: undefined, done: true };
          }
        },
      };
    },
  };

for (let item of tenRandomNumbers) {
    console.log(item) 
}
///////////////////////////////////////
