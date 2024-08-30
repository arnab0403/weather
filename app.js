const btn = document.querySelector(".btn_s");
const temp = document.querySelector(".text");
const temp_out = document.querySelector(".deg");
const hum = document.querySelector(".hum");
const speed = document.querySelector(".speed");
btn.addEventListener("click",()=>
{   
    const loc=temp.value;
    console.log(loc);
    const url ="https://api.openweathermap.org/data/2.5/weather?q="+loc+"&appid=cad94b206152558219057c083b6032d6&units=metric";
    weatherapp(url)
    .then((data)=>
        {
            temparature=JSON.parse(data);
            console.log(temparature);
            temp_out.innerHTML=temparature.main.temp+"&deg;C.";
            hum.innerHTML=temparature.main.humidity+"%";
            const s=Math.floor(temparature.wind.speed*6.25)
            speed.innerHTML=s+"/km";
        })
        .catch((data)=>{
            temp_out.innerHTML=data;
            temp_out.style.fontSize="30px";
            hum.innerHTML="0%"
            speed.innerHTML="0/km"
        })  

})




function weatherapp(url){
    const xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        xhr.open("GET",url);

        xhr.onload = () =>
            {
        
            if(xhr.status>=200 && xhr.status<=300)
            {
                resolve(xhr.response);
            }
            else
            {
                reject("Something went wrong");
            }
            }

        xhr.onerror= () =>
        {
            reject("Check Your connection");
        }
    xhr.send();
    })
}

