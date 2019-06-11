const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  //forEach
//  companies.forEach(function(company) {
//      console.log(company.name + ' - ' + company.category)
//  })
  
  //==================================FILTER========================================
  
  //With for loop
//  let canDrink = [];
//  for (let i =0; i < ages.length; i++){
//    if (ages[i] > 18){
//        canDrink.push(ages[i]);
//    }
//}

//using filter
//const canDrink = ages.filter(function(age){
//    if(age > 18){
//        return true;
//    }
//})

//Using arrow fun
const canDrink = ages.filter((age) => age > 18);
//console.log(canDrink);

//Filter the retails company

const retailCompanies = companies.filter(function(company){
    if(company.category === 'Retail'){
        return true;
    }
})
//console.log(retailCompanies)

//Short hand using arrow
const retComp = companies.filter(company => company.category === 'Retail')


//console.log(retComp)

//Get comp from 80s

const Ecmp = companies.filter((company) => (company.start >= 1980 && company.start < 1990));
//console.log(Ecmp)

//Get comp that lasted 10 years or more

const lastedTen = companies.filter((company) => (company.end - company.start >= 10));
//console.log(lastedTen);


//MAP----------------Return a new array

//Create a new array of comp name


//const compName = companies.map(company => company.name);
//console.log(compName)

const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)

//console.log(testMap);

const agesSquare = ages.map(age => Math.sqrt(age));
//console.log(agesSquare)

const agesSquare1 = ages
.map(age => Math.sqrt(age))
.map(age => age*2);

//console.log(agesSquare1)


// Sort --------------
//Sort comp by start date
const sortedComp = companies.sort(function(c1, c2) {
    if(c1.start > c2.start){
        return 1;
    }else{
        return -1;
    }
});
//console.log(sortedComp);

const sortedComp1 = companies.sort((a, b) => (a.start > b.start ? 1 : -1))
//console.log(sortedComp1);

//Sort ages

//const sortAges = ages.sort((a, b) => (a > b ? 1 : -1))
//Assending
//const sortAges = ages.sort((a, b) => a - b)
//Decending order
const sortAges = ages.sort((a, b) => b - a)
//console.log(sortAges);

//reduce===========

const ageSum = ages.reduce(function(total, age) {
    return total + age;
}, 0);

//console.log(ageSum)

const ageSum1 = ages.reduce((total, age) => total + age, 0);

//console.log(ageSum1);

//Get total years for all companies

const totalYears = companies.reduce(function (total, comp) {
    return total + (comp.end - comp.start);
}, 0)

//console.log(totalYears)

const totalYears1 = companies.reduce((total, comp) => total + (comp.end - comp.start), 0)

//console.log(totalYears1);

//COMBINE all methods

const combined = ages
.map(age => age * 2)
.filter(a => a >= 40)
.sort((a, b) => a - b)
.reduce((a, b) => a + b , 0);



console.log(combined);


 






