function getdata(data, num){
    document.getElementsByClassName("title")[num].innerHTML=data.culturalEventInfo.row[num].TITLE;
    document.getElementsByClassName("place")[num].innerHTML=data.culturalEventInfo.row[num].GUNAME;
    document.getElementsByClassName("date")[num].innerHTML=data.culturalEventInfo.row[num].DATE;
    document.getElementsByClassName("text")[num].innerHTML=data.culturalEventInfo.row[num].ETC_DESC;
    document.getElementsByClassName("mainimage")[num].src=data.culturalEventInfo.row[num].MAIN_IMG;
    document.getElementsByClassName("pageopen")[num].href=data.culturalEventInfo.row[num].ORG_LINK;
}

fetch('http://openapi.seoul.go.kr:8088/564952574f6a796b38306b544f4561/json/culturalEventInfo/1/5/')
.then(res => res.json()) // JSON 응답을 JavaScript 객체 리터럴로 구문분석
.then(data => {
    getdata(data,0)
    getdata(data,1)
    getdata(data,2)
        });