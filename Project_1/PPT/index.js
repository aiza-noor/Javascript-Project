console.log('persentation')

const fs=require('fs/promises')
const funct=async()=>{
    try{
        const res= await(await fetch('https://restcountries.com/v3.1/all')).json()
        const Data=(await fs.promises.readFile('D:/Web Dev/J.S/Project_1/input.textinput.txt','utf8')).split(',');

// searching 1st param
        console.log('searching start from here');
        const searchValue = Data[0];
        const searchData= searchValue ? res.filter((x)=>x.continents.some((y)=>y.includes(searchValue))) : res;
        // searchData.forEach((value)=>console.log(value.continents))

//filtering 2nd param
        console.log('filtering start from here');
        const filterValue = Data[1];
        const filterData= filterValue ? searchData.filter((x)=>(Object.keys(x).includes('borders') && x.borders.some((y)=>y === filterValue))): searchData;
        // filterData.forEach((value)=>console.log(value.name.common));

//return 3rd input in resultant array 
        console.log('return start from here');
        const returnValue= Data[2];
        const returnkey =filterData.map((obj)=>obj[returnValue]);
        returnkey.forEach((value)=>console.log(value));

//limit the resultant array to 4th input
        console.log('limit strat from there');
        const limitValue= Data[3];
        const limitInput= limitValue?returnkey.slice(0,limitValue):returnkey;
        limitValue ? limitInput.push({'totalCount': limitInput.length}):[];
        limitInput.forEach((value)=>console.log(value))  

    }catch(error){
        console.log(error);
   }
}

funct();