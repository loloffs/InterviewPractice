const allCars = {

  used: {
         1: {
           make: "Honda",
           model: "Fit",
           year: 2007,
           odometer: 221000,
           price: 3500
         },
 
         2: {
           make: "Subaru",
           model: "Outback",
           year: 2017,
           odometer: 70000,
           price: 15000
         },
 
         3: {
           make: "Volkswagen",
           model: "Jetta",
           year: 2003,
           odometer: 305000,
           price: 700
         },
 
         4: {
           make: "Ford",
           model: "F150",
           year: 2009,
           odometer: 246000,
           price: 12000
         }, 
         5: {
          make: "BMW",
          model: "X1",
          year: 2014,
          odometer: 54000,
          price: 15000
        },
     },
 
   new: {
         1: {
           make: "Tesla",
           model: "Model 3",
           year: 2021,
           odometer: 5000,
           price: 75000
         },
 
         2: {
           make: "Jeep",
           model: "SRT",
           year: 2021,
           odometer: 2000,
           price: 60000
         },
 
         3: {
           make: "Mazda",
           model: "3",
           year: 2021,
           odometer: 2600,
           price: 30000
         }
     },
 
     findCarByPrice: function(newOrUsed, maxPrice) {
       newOrUsed.toString();
       let result = []
       for (const key in this[newOrUsed]) {
         if (this[newOrUsed][key].price <= maxPrice) {
           result.push(`${this[newOrUsed][key].year} ${this[newOrUsed][key].make} ${this[newOrUsed][key].model} ($${this[newOrUsed][key].price})`)
         }
       }
       return result;
     },
     findCarByYear: function(min, max) {
      // min.toString();
      // max.toString();
      for (const key in this) {
        console.log(key);
      }
     }
 }
 
 
 // const findCarByConditionAndMaxPrice = function(newOrUsed, maxPrice) {
 //   newOrUsed.toString();
 //   let result = []
 //   for (const key in allCars[newOrUsed]) {
 //     if (allCars[newOrUsed][key].price < maxPrice) {
 //       result.push(`${allCars[newOrUsed][key].year} ${allCars[newOrUsed][key].make} ${allCars[newOrUsed][key].model} ($${allCars[newOrUsed][key].price})`)
 //     }
 //   }
 //   return result;
 // }
 
//  console.log(allCars.findCarByPrice("new", 30000));
 console.log(allCars.findCarByYear());