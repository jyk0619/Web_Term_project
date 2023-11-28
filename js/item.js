
//결과창 템플릿 만들기
var template = `<a class="pageopen" href="" target="_blank" title="새창열림">     
            <span class="thum">
                <img class="mainimage" width="150" height="150" src="" alt="">
            </span> 
            <span class="tbx">
                <em class="title">제목</em>
                <em class="place">위치</em>
                <em class="danumte">날짜</em>
                <em class="fee">텍스트</em>
            </span>
        </a> `

        for(var i=0;i<5;i++){
            document.getElementsByClassName("item")[i].insertAdjacentHTML('beforeend',template)
        }

//location , categories,s_name



fetch('http://openapi.seoul.go.kr:8088/564952574f6a796b38306b544f4561/json/culturalEventInfo/1/5/')
.then(res => res.json()) // JSON 응답을 JavaScript 객체 리터럴로 구문분석
.then(data => {
    getdata(data,0)
    getdata(data,1)
    getdata(data,2)
    getdata(data,3)
    getdata(data,4)
    console.log(data)
        });

function getdata(data, dataNum){
    document.getElementsByClassName("title")[dataNum].innerHTML=data.culturalEventInfo.row[dataNum].TITLE;
    document.getElementsByClassName("place")[dataNum].innerHTML=data.culturalEventInfo.row[dataNum].GUNAME;
    document.getElementsByClassName("danumte")[dataNum].innerHTML=data.culturalEventInfo.row[dataNum].danumTE;
    document.getElementsByClassName("fee")[dataNum].innerHTML=data.culturalEventInfo.row[dataNum].USE_FEE;
    document.getElementsByClassName("mainimage")[dataNum].src=data.culturalEventInfo.row[dataNum].MAIN_IMG;
    document.getElementsByClassName("pageopen")[dataNum].href=data.culturalEventInfo.row[dataNum].ORG_LINK;
}//데이터 넣기

