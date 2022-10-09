const submitBtn= document.getElementById('submitBtn');
const cityName= document.getElementById('cityName');
const city_name= document.getElementById('city_name');
const temp_status= document.getElementById('temp_status');
const temp= document.getElementById('temp');
const tempdeg= document.getElementById('temp_deg');

const datahide= document.querySelector('.middle_layer');

const getInfo=async(event)=>{
    event.preventDefault();
   let cityVal= cityName.value;
    if(cityVal===""){
        city_name.innerHTML="Please write city name first";

        datahide.classList.add('data_hide');
    }
    else{
        try{
        let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=77c6ff28050d54084aa331ea576f2134`
        const response= await fetch(url);
        const data= await response.json();
        const arrData= [data];

        city_name.innerHTML=`${arrData[0].name}, ${arrData[0].sys.country}`;
            tempdeg.innerText=arrData[0].main.temp;
            const tempMood=arrData[0].weather[0].main;

            if(tempMood=="Clear"){
                temp_status.innerHTML="<i class='fa-solid fa-sun' style='color:#eccc68;'></i>";
            } 
            else if(tempMood=="Clouds"){
                temp_status.innerHTML="<i class='fa-solid fa-cloud' style='color:#f1f2f6;'></i>";
            } 
            else if(tempMood=="Rain"){
                temp_status.innerHTML="<i class='fa-solid fa-cloud-rain' style='color:#a4b0be;'></i>";
            }
            else{
                temp_status.innerHTML="<i class='fa-solid fa-cloud-sun' style='color:#f1f2f6;'></i>";
            }

            datahide.classList.remove('data_hide')

    }
    catch{
        city_name.innerText="Please write city name properly";
        datahide.classList.add('data_hide')
    }
    }
}

submitBtn.addEventListener('click',getInfo);


