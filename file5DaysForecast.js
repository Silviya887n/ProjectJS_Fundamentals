window.onload= async function(){
    const urlParams = new URLSearchParams(window.location.search);

    // // Retrieve the value of the 'value' parameter
    const receivedTown = urlParams.get('town');

    // const BtnReturn= document.getElementById('BtnReturn1');
    // BtnReturn.addEventListener('click',()=>{
    //     window.open(`index.html`);
    // })

    const Tabledays=document.getElementById('Tbl5Days');

    const eltr1= document.createElement('tr'); 
    const elth0= document.createElement('th');
    elth0.textContent='';
    const elth01= document.createElement('th');
    elth01.textContent='Weather';
    
    const elth1= document.createElement('th');
    elth1.textContent='Max';
    const elth2= document.createElement('th');
    elth2.textContent='Mix';
    const elth3= document.createElement('th');
    elth3.textContent='Wind';
    const elth4= document.createElement('th');
    elth4.textContent='Precip';
    const elth5= document.createElement('th');
    elth5.textContent='Humidity';
    const elth6= document.createElement('th');
    elth6.textContent='Sunrise';
    const elth7= document.createElement('th');
    elth7.textContent='Sunset';
    const elth8= document.createElement('th');
    elth8.textContent='Moonsise';
    const elth9= document.createElement('th');
    elth9.textContent='Moonset';
    const elth10= document.createElement('th');
    elth10.textContent='UV';

    eltr1.appendChild(elth0);
    eltr1.appendChild(elth01);
    eltr1.appendChild(elth1);
    eltr1.appendChild(elth2);
    eltr1.appendChild(elth3);
    eltr1.appendChild(elth4);
    eltr1.appendChild(elth5);
    eltr1.appendChild(elth6);
    eltr1.appendChild(elth7);
    eltr1.appendChild(elth8);
    eltr1.appendChild(elth9);
    eltr1.appendChild(elth10);

    Tabledays.appendChild(eltr1);

    const baseurl1=`https://api.weatherapi.com/v1/forecast.json?key=ac561e4d9eef410c9a1122207250402&q=${receivedTown}&days=5&aqi=no&alerts=no`;

    const response=await fetch(baseurl1);
    const data3=await response.json();

    console.log(Object.values(data3))

    let counttimes=0;
    for (const element of Object.values(data3)) {
        if(counttimes===2){


            for (const el2 of Object.values(element)) {
                for (const el3 of Object.values(el2)) {
            const tr2= document.createElement('tr');
            const tddate= document.createElement('td');
            tddate.textContent=el3.date;

            
             /*Menu */
             const  requestd= new Date(el3.date);
             const  d= new Date(el3.date);

             let day1=requestd.getDay();
            //  let txtday=document.createElement('div');
             const txtday1=DayWeek(day1);  
             const ElMenu1=document.querySelector('.navmain_navbar');
             ElMenu1.style.visibility='visible';
             const eldivl1= document.createElement('div');
             const eldiva1= document.createElement('a');
             eldiva1.textContent=txtday1;
             eldiva1.href=`DetailsDay.html?town=${encodeURIComponent(receivedTown)}&&datec=${el3.date}`;
             eldivl1.appendChild(eldiva1);
             ElMenu1.appendChild(eldivl1);


            const image1= document.createElement('img');
            const imgsrc=el3.day.condition.icon
            image1.src="https:"+imgsrc;
            image1.classList.add('classimg');
            image1.id=2;
            image1.alt="test";

            const eltd2= document.createElement('td');
            eltd2.appendChild(image1);

            const eltd3= document.createElement('td');
            eltd3.textContent=el3.day.maxtemp_c+' °C';

            const eltd4= document.createElement('td');
            eltd4.textContent=el3.day.mintemp_c+' °C';
            const eltd5= document.createElement('td');
            eltd5.textContent=el3.day.maxwind_mph;
            const eltd6= document.createElement('td');
            eltd6.textContent=el3.day.totalprecip_mm;

            const eltd7= document.createElement('td');
            eltd7.textContent='';
            const eltd8= document.createElement('td');
            eltd8.textContent=el3.astro.sunrise;

            const eltd9= document.createElement('td');
            eltd9.textContent=el3.astro.sunset;

            const eltd10= document.createElement('td');
            eltd10.textContent=el3.astro.moonrise;

            const eltd11= document.createElement('td');
            eltd11.textContent=el3.astro.moonset;

            const eltd12= document.createElement('td');
            eltd12.textContent=el3.day.uv;

            
 /*  */
  //maxtemp_c   mintemp_c  maxwind_mph  totalprecip_mm sunrise sunset moonrise moonset uv

            tr2.appendChild(tddate);
            tr2.appendChild(eltd2);
            tr2.appendChild(eltd3);
            tr2.appendChild(eltd4);
            tr2.appendChild(eltd5);
            tr2.appendChild(eltd6);

            tr2.appendChild(eltd7);
            tr2.appendChild(eltd8);
            tr2.appendChild(eltd9);
            tr2.appendChild(eltd10);
            tr2.appendChild(eltd11);
            tr2.appendChild(eltd12);

            Tabledays.appendChild(tr2);
                }
            }
        }

        counttimes++;
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



