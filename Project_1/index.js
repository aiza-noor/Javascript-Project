console.log("Project_1 Squad I")

const fs=require("fs/promises")

const funct=async()=>{
  try{  
    const resp= await (await fetch('https://restcountries.com/v3.1/all')).json();
    const Data= (await fs.readFile('input.text', {encoding:'utf8'})).split(',');
    console.log(Data);
  

    //Taks 1 searching 1st input
    const searchingValue=Data[0];
    const searchingKey = resp.filter((x)=>x.continents.some((y)=>y.toLowerCase().includes(searchingValue.toLowerCase())));
    // searchingKey.forEach((value)=>console.log(value.continents));
    console.log(searchingKey)

    // Taks 2 Filter 2nd input
    const filteringValue=Data[1];
    const existsBroaders=searchingKey.filter((value)=>Object.keys(value).includes('borders'));
    const filteringKey= existsBroaders.filter((x)=>x.borders.some((y)=>y === (filteringValue)));
    // filteringKey.forEach((value1)=>console.log(value1.borders));

    //Taks 3 Return only the key 3rd one
    const returningValue=Data[2];
    const returnKey=filteringKey.map((obj)=>obj[returningValue]);
    // returnKey.forEach((value2)=>console.log(value2))
  //limiting the value
  const limitValue=Data[3];
  const limitKey=returnKey.slice(0,limitValue);
  // limitKey.forEach((value3)=>console.log(value3))


}catch(error){
    console.log(error);
} }  
funct()