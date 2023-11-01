var request=new XMLHttpRequest
request.open("GET","https://restcountries.com/v3.1/all","true")
request.send();
request.onload=function(){
    var data=request.response;
    var result=JSON.parse(data);
    console.log(result)
 //1)display asia countries
  var res=result.filter((ele)=>ele.continents=="Asia")
    var final=res.map((x)=>x.name.common)
    console.log(final)

//2)population less than 2 laks
var arr1=result.filter((ele1)=>ele1.population<200000)
var arr2=arr1.map((ele2)=>ele2.name.common)
console.log(arr2)
//3)name,capital,flag
var arr3=result.forEach((ele3) =>console.log(`${ele3.name.common} ${ele3.flag} ${ele3.capital}`))

//4)total population
var arr4=result.reduce((acc,cv)=>cv.population,0)
console.log(arr4)

//5)Us currency USD.name=="United States dollar"   ele4.currencies=="USD"
var arr4=result.filter((ele4)=>ele4.currencies.USD)
var arr5=arr4.map((ele5)=>ele5.name.common)
console.log(arr4)
 }