function getUrlParameterValue(url, parameter) {
    const newURL = new URL(url);
    const params = newURL.searchParams.get(parameter);
    console.log(params);
}

const url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby"

getUrlParameterValue(url, "utm_medium");
getUrlParameterValue(url, "utm_campaign");


function getReverse(n){
    let val = 0;
    while(n > 0){
        val = (val*10) + (n%10);
        n = Math.floor(n/10);
    }
    console.log(val);
}

const n = 213;
getReverse(n);