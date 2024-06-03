//Imediately Invoked Function Expression

(function sayHello(){
    console.log("Hello");
})();

( sayHi=()=>{
   console.log("Hi");
})();

(sayGoodMorning=(name)=>{
    console.log(`Good morning ${name}`);
})("sujit")