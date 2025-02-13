

window.addEventListener("load", loadf);
function loadf(){ 
   
   const btnSearch=document.getElementById('btnsearch');
   btnSearch.addEventListener('click',LoadDataTown);
   const ElMenu=document.querySelector('.navmain_navbar');
   ElMenu.style.visibility='hidden';

   const elhead=document.querySelector('.head');
   elhead.addEventListener('click',()=>{
      window.location.href=`index.html`;
   })
  
}

function LoadNewData(){
   LoadDataTown;
}

const LoadDataTown = async() =>{
const elementcity=document.getElementById('city');
const baseurl=`https://api.weatherapi.com/v1/current.json?key=ac561e4d9eef410c9a1122207250402&q=${elementcity.value}&aqi=no`;
const response=await fetch(baseurl);

const data= await response.json();
console.log(Object.values(data));

let elcurrentw= document.getElementById('currentcast');
const elulhistory=document.querySelector('.allTown');
const elli= document.createElement('li');

elli.addEventListener('click',invokePastSearch);


elli.textContent=elementcity.value;

const eltxt=elli.textContent;
elli.classList.add('cllihistory');



let isfalse=false;
const liElements = elulhistory.querySelectorAll('li');
for (let i = 0; i < liElements.length; i++) {

   const res=liElements[i].textContent;
  if (liElements[i].textContent.trim() == eltxt) {
   isfalse=true; // Found a match
   break;
  }
}
if(!isfalse){
   elulhistory.appendChild(elli);
}



const eldivdsearch=document.querySelector('.dsearch');
const eldivBtns=document.querySelector('.ContainerBtns');

if(eldivBtns != null){

   eldivdsearch.removeChild(eldivBtns);
}
//  const bclearexist1=document.getElementById('btnclear');
//  const bclearexist2=document.getElementById('btndetails');
//  if(bclearexist1 != null){
//     eldivBtns.removeChild(bclearexist1);
//  }

//  if(bclearexist2 != null){
//    eldivBtns.removeChild(bclearexist2);
// }
const ElContainerBtns= document.createElement('div');
ElContainerBtns.classList.add('ContainerBtns');

const btnClear= document.createElement('button');
btnClear.textContent="Clear History";
btnClear.classList.add('classBtns');
btnClear.id='btnclear';
btnClear.addEventListener('click',()=>{
   elulhistory.innerHTML='';
});
ElContainerBtns.appendChild(btnClear);

const btnDetails5Days= document.createElement('button');
btnDetails5Days.textContent="5-Day Forecast";
btnDetails5Days.classList.add('classBtns');
btnDetails5Days.id='btndetails';
btnDetails5Days.addEventListener('click',()=>{
   window.location.href=`Forecat5DaysDetails.html?town=${encodeURIComponent(elementcity.value)}`;
   //window.open(`Forecat5DaysDetails.html?town=${encodeURIComponent(elementcity.value)}`);
});

ElContainerBtns.appendChild(btnDetails5Days);
eldivdsearch.appendChild(ElContainerBtns);

const eldiv1=document.createElement('div');
elcurrentw.innerHTML='';


let countr=0;
for(const record of Object.values(data)){
   if(countr==0){

const elcountry=document.createElement('p');
elcountry.textContent='Country: '+record.country;
const elregion=document.createElement('p');
elregion.textContent='Region: '+record.region;

const eltz=document.createElement('p');
eltz.textContent='Timezone: '+record.tz_id;
const d = new Date(record.localtime);

const elh=document.createElement('h3');
elh.textContent=record.name;
const elspan=document.createElement('span');



elspan.textContent=`(${String(d.getDate())}/${d.getMonth()+1}/${d.getFullYear()})`;
elh.appendChild(elspan);
eldiv1.appendChild(elh);
eldiv1.appendChild(elcountry);
eldiv1.appendChild(elregion);
eldiv1.appendChild(eltz);
   }

   if( countr==1){
/*  */

const elcurrentcast=document.createElement('div');
// elcurrentcast.classList.add('stylecondition');

const image1= document.createElement('img');
const imgsrc=record.condition.icon
image1.src="https:"+imgsrc;
image1.id=2;
image1.alt="test";

const elspn1= document.createElement('p');
elspn1.textContent=record.condition.text;

elcurrentcast.appendChild(image1);
elcurrentcast.appendChild(elspn1);

elcurrentw.appendChild(elcurrentcast);


   //  record.localtime,DateTimeFormatter.ofPattern( "dd/MM/uuuu" ) )

const elp1=document.createElement('p');
elp1.textContent='Temperature: '+record.temp_c+" °C";
const elp2=document.createElement('p');
elp2.textContent='Humidity: '+record.humidity+'%';
const elp3=document.createElement('p');
elp3.textContent='Wind Speed: '+record.wind_mph+'MPH';

const elp4=document.createElement('p');
elp4.textContent='UV index:'+record.uv;


eldiv1.appendChild(elp1);
eldiv1.appendChild(elp2);
eldiv1.appendChild(elp3);
eldiv1.appendChild(elp4);
   }

countr++;
}

elcurrentw.appendChild(eldiv1);

/*5 Days Forecast  Test1*/
const divfivedays=document.querySelector('.fivedays');
const existh=document.querySelector('.fivedays h4');
if(existh != null){
   divfivedays.removeChild(existh);
}
const elh4= document.createElement('h4');
elh4.textContent='5-Days  Forecast';
divfivedays.appendChild(elh4);


/*  */

const baseurl1=`https://api.weatherapi.com/v1/forecast.json?key=ac561e4d9eef410c9a1122207250402&q=${elementcity.value}&days=5&aqi=no&alerts=no`;
const response1=await fetch(baseurl1);

const data1= await response1.json();
const eldivforecast= document.createElement('div');
eldivforecast.classList.add('class5Days');

let countjson=0;
divfivedays.innerHTML='';
eldivforecast.innerHTML='';
const ElMenu1=document.querySelector('.navmain_navbar');
ElMenu1.style.visibility='visible';
ElMenu1.innerHTML='';

for(const record of Object.values(data1)){
   countjson++;
   if(countjson==3){

     for (const rec of record.forecastday) {     
     
   const elday1=document.createElement('div');
   elday1.classList.add('classtyleday');

   const elp51=document.createElement('p');
   elp51.textContent=rec.date;
   const requestd=rec.date;



   elday1.addEventListener('click',()=>{
      window.location.href=`DetailsDay.html?town=${encodeURIComponent(elementcity.value)}&&datec=${requestd}`
     // window.open(`DetailsDay.html?town=${encodeURIComponent(elementcity.value)}&&datec=${requestd}`)
   })

 
  
   const  d= new Date(rec.date);
   let day1=d.getDay();
   let txtday=document.createElement('div');
   const txtday1=DayWeek(day1);
   txtday.textContent=txtday1;
   txtday.classList.add('headertxtday');

      /*Menu */  
     
      const eldivl1= document.createElement('div');
      const eldiva1= document.createElement('a');
      eldiva1.textContent=txtday1;
      eldiva1.href=`DetailsDay.html?town=${encodeURIComponent(elementcity.value)}&&datec=${requestd}`;
      eldivl1.appendChild(eldiva1);
      ElMenu1.appendChild(eldivl1);




const divimg=document.createElement('div');
const image2= document.createElement('img');
const imgsrc=rec.day.condition;
let ik=imgsrc.icon;
image2.src="https:"+ik;
image2.id=2;
image2.alt="test";

divimg.appendChild(image2);
divimg.classList.add('contenttxtday');

const elp52=document.createElement('div');
elp52.classList.add('styletemp');

const elmaxspan=document.createElement('span');
elmaxspan.textContent=rec.day.maxtemp_c+" °C";

const elminspan= document.createElement('span');
elminspan.textContent=rec.day.mintemp_c +" °C";
elp52.appendChild(elminspan);
elp52.appendChild(elmaxspan);

elday1.appendChild(txtday);
elday1.appendChild(elp51);
elday1.appendChild(divimg);
elday1.appendChild(elp52);

eldivforecast.appendChild(elday1);
     }
      
   }


}

divfivedays.appendChild(eldivforecast);

eldivforecast
};


// display the past search again when the list group item is clicked in search history
 function  invokePastSearch(event){
   var liEl=event.target;
   if (event.target.matches("li")){
       const city=liEl.textContent.trim();
       const elementcity=document.getElementById('city');
       elementcity.value=city;
       liEl.addEventListener('click',LoadDataTown());
   }

}

function DayWeek(cday){
   let txtday='';
   switch(cday){
      case 1:
         txtday='Monday'; 
      break;
      case 2:
         txtday='Tuesday'; 
      break;
      case 3:
         txtday='Wednesday'; 
      break;
      case 4:
         txtday='Thursday'; 
      break;
      case 5:
         txtday='Friday'; 
      break;
      case 6:
         txtday='Saturday'; 
      break;
      case 0:
         txtday='Sunday'; 
      break;
  
   }
   return txtday;
}

// document.on("click",invokePastSearch);
// async function Myfunc(){
 