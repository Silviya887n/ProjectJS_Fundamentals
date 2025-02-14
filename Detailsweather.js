

window.onload= async function(){
    const urlParams = new URLSearchParams(window.location.search);

    // // Retrieve the value of the 'value' parameter
    const receivedTown = urlParams.get('town');
    const date1= urlParams.get('datec');
    

  /*Menu */
  const  d= new Date(date1);
  let day1=d.getDay();
  let txtday=document.createElement('div');
  const txtday1=DayWeek(day1);
  txtday.textContent=txtday1;
  txtday.classList.add('headertxtday');

     /*Menu */  
     const ElMenu1=document.querySelector('.navmain_navbar');
     ElMenu1.style.visibility='visible';
     const eldivl1= document.createElement('div');
     const eldiva1= document.createElement('a');
     eldiva1.textContent='5-Day Forecast';
     eldiva1.href=`Forecat5DaysDetails.html?town=${encodeURIComponent(receivedTown)}`;
     eldivl1.appendChild(eldiva1);
     ElMenu1.appendChild(eldivl1);

     const eldivl2= document.createElement('div');
     const eldiva2= document.createElement('a');
     eldiva2.textContent='Home';
     eldiva2.addEventListener('click',()=>{
            window.history.go(-1);
           // window.open(`index.html`);
            
          });
     eldivl2.appendChild(eldiva2);
     ElMenu1.appendChild(eldivl2);

    //  const BtnRerutn= document.getElementById('BtnReturn');

    //  BtnRerutn.onclick = () => window.history.back;
     //BtnRerutn.addEventListener("click", window.history.back, false);
    //  BtnRerutn.addEventListener('click',()=>{
    //    //  window.history.go(-1);
    //     window.open(`index.html`);
        
    //  });

    const detailsday= document.querySelector('.detaisday h2'); 

    detailsday.textContent='Weather Forecast '+receivedTown;
 

    const baseurl1=`https://api.weatherapi.com/v1/forecast.json?key=ac561e4d9eef410c9a1122207250402&q=${receivedTown}&days=5&aqi=no&alerts=no`;
    const response1=await fetch(baseurl1);

    const data1= await response1.json();
    /*Tables*/
    const tableh1= document.getElementById('headtable');
    tableh1.classList.add('styletblh');

    let counto=0;
    for (const elday of Object.values(data1)) {
        
        if(counto == 2){
       
            for (const dayc of Object.values(elday)) {
                       
                for (const dcurr of Object.values(dayc)) {
                    
                
        const datecurrent=dcurr.date;  
        if(datecurrent==date1){
        
        const eltr= document.createElement('tr');

        const elthsunr =document.createElement('th');

       
        const eldivsun1=document.createElement('p');
        eldivsun1.textContent='Sun rise: '+ dcurr.astro.sunrise;
        const eldivsun2=document.createElement('p');
        eldivsun2.textContent='Sun sets: '+ dcurr.astro.sunset;
       
        elthsunr.appendChild(eldivsun1);
        elthsunr.appendChild(eldivsun2);
        // const elthsuns =document.createElement('th');
        // elthsuns.textContent='Sun sets: '+ dcurr.astro.sunset;

        const elmoonrisesets =document.createElement('th');
        const elmoonp1=document.createElement('p');
        elmoonp1.textContent='Moon rise: '+ dcurr.astro.moonrise;
        const elmoonp2=document.createElement('p');
        elmoonp2.textContent='Moon sets: '+ dcurr.astro.moonset;

        elmoonrisesets.appendChild(elmoonp1);
        elmoonrisesets.appendChild(elmoonp2);


        const elth1= document.createElement('th');
        elth1.textContent='Max temp.: '+ Math.round(Number(dcurr.day.maxtemp_c))+ ' °C';  /*  avgtemp_c  maxwind_kph*/

        const elth2= document.createElement('th');
        elth2.textContent='Min temp.: '+ Math.round(Number(dcurr.day.mintemp_c))+ ' °C';

        const elavg= document.createElement('th');
        elavg.textContent='Avg temp.: '+ Math.round(Number(dcurr.day.avgtemp_c))+ ' °C';

        const elmaxwind= document.createElement('th');
        const wind=Math.round(Number(dcurr.day.maxwind_kph)*0.44704)
        elmaxwind.textContent='Max wind: '+ wind+' m/s';
    
        eltr.appendChild(elthsunr);
        // eltr.appendChild(elthsuns);
        eltr.appendChild(elmoonrisesets);
        eltr.appendChild(elth1);
        eltr.appendChild(elth2);

        eltr.appendChild(elavg);
        eltr.appendChild(elmaxwind);
    
        tableh1.appendChild(eltr);


        const tblHours=document.getElementById('tblhours');
        const eltr1= document.createElement('tr'); 
        const elth01= document.createElement('th');
        elth01.textContent='';
        
        const elth11= document.createElement('th');
        elth11.textContent='Weather';

        const elth12= document.createElement('th');
        elth12.textContent='Temp';
        const elth13= document.createElement('th');
        elth13.textContent='Feel';
        const elth14= document.createElement('th');
        elth14.textContent='Wind';
        const elth15= document.createElement('th');
        elth15.textContent='Dir';
        const elth16= document.createElement('th');
        elth16.textContent='Gust';
        const elth17= document.createElement('th');
        elth17.textContent='Precip';
        const elth18= document.createElement('th');
        elth18.textContent='Cloud';
        const elth19= document.createElement('th');
        elth19.textContent='Humidity';
        const elth10= document.createElement('th');
        elth10.textContent='Pressure';


        eltr1.appendChild(elth01);
        eltr1.appendChild(elth11);
        eltr1.appendChild(elth12);
        eltr1.appendChild(elth13);
        eltr1.appendChild(elth14);
        eltr1.appendChild(elth15);
        eltr1.appendChild(elth16);
        eltr1.appendChild(elth17);
        eltr1.appendChild(elth18);
        eltr1.appendChild(elth19);
        eltr1.appendChild(elth10);

        tblHours.appendChild(eltr1);
        // Weather Temp Feel Wind Dir Gust Precip Cloud Humidity Pressure

        for (const elhour of Object.values(dcurr.hour)) {
            let txthour=elhour.time;

            const image1= document.createElement('img');
            const imgsrc=elhour.condition.icon
            image1.src="https:"+imgsrc;
            image1.classList.add('classimg');
            image1.id=2;
            image1.alt="test";

            const eltr= document.createElement('tr');
            const eltd1= document.createElement('td');

            const eldivtime=document.createElement('div');
            eldivtime.textContent=elhour.time;

            eltd1.appendChild(eldivtime);
          
            const eltd2= document.createElement('td');
            const eldivtd2=document.createElement('div');
            eldivtd2.textContent=Math.round(Number(elhour.temp_c))+' °C';
            eltd2.appendChild(eldivtd2);

            

            const eltd3= document.createElement('td');
            const eldivtd3=document.createElement('div');
            eldivtd3.textContent='Feels like: '+Math.round(Number(elhour.feelslike_c))+' °C';
            eltd3.appendChild(eldivtd3);
            //wind_mph   wind_dir gust_mph precip_mm   clound humidity pressure_mb

            const eltd4= document.createElement('td');
            const eldivtd4=document.createElement('div');
            const wind=Math.round((Number(elhour.wind_mph)*0.44704)); 
            eldivtd4.textContent=wind+ ' m/s';
            eltd4.appendChild(eldivtd4);


            const eltd5= document.createElement('td');
            const eldivtd5=document.createElement('div');
            eldivtd5.textContent=elhour.wind_dir;
            eltd5.appendChild(eldivtd5);


            const eltd6= document.createElement('td');
            const eldivtd6=document.createElement('div');
            eldivtd6.textContent='Cloud: '+elhour.gust_mph;
            eltd6.appendChild(eldivtd6);


            const eltd7= document.createElement('td');
            const eldivtd7=document.createElement('div');
            eldivtd7.textContent='Cloud: '+elhour.precip_mm;
            eltd7.appendChild(eldivtd7);

            const eltd8= document.createElement('td');
            const eldivtd8=document.createElement('div');
            eldivtd8.textContent='Cloud: '+elhour.cloud;
            eltd8.appendChild(eldivtd8);

            const eltd9= document.createElement('td');
            const eldivtd9=document.createElement('div');
            eldivtd9.textContent='Humidity: '+elhour.humidity+'%';
            eltd9.appendChild(eldivtd9);

            const eltd10= document.createElement('td');
            const eldivtd10=document.createElement('div');
            eldivtd10.textContent=elhour.pressure_mb+' MB';
            eltd10.appendChild(eldivtd10);
           

            eltr.appendChild(eltd1);
            eltr.appendChild(image1);
            eltr.appendChild(eltd2);
            eltr.appendChild(eltd3);
            eltr.appendChild(eltd4);
            eltr.appendChild(eltd5);
            eltr.appendChild(eltd6);
            eltr.appendChild(eltd7);
            eltr.appendChild(eltd8);
            eltr.appendChild(eltd9);
            eltr.appendChild(eltd10);

            tblHours.appendChild(eltr);
           
            
        }
        }
                }
            }

        }

        counto++;
    }



}

const LoadDataTown = async() =>{
    const elementcity=document.getElementById('city');
    const baseurl=`https://api.weatherapi.com/v1/forecast.json?key=ac561e4d9eef410c9a1122207250402 &q=London&days=5&aqi=no&alerts=no`;
    const response=await fetch(baseurl);
    
    const data= await response.json();
    console.log(Object.values(data));

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