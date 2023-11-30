


function getQueryParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}


//결과창 템플릿 만들기
var template = `<a class="pageopen" href="" target="_blank" title="새창열림">     
            <span class="thum">
                <img class="mainimage" width="100" height="100" src="" alt="">
            </span> 
            <span class="tbx">
                <em class="title">제목</em>
                <em class="place">위치</em>
                <em class="date">날짜</em>
                <em class="fee">텍스트</em>
            </span>
        </a> `

            
        for(var i=0;i<10;i++){
            
            document.getElementsByClassName("item")[i].insertAdjacentHTML('beforeend',template)
        }

//location , categories,s_name

// http://openapi.seoul.go.kr:8088/564952574f6a796b38306b544f4561/xml/culturalEventInfo/1/5/CODENAME/TITLE/DATE
var textValue = getQueryParam('text');
var dateValue = getQueryParam('date');
var categoryValue = getQueryParam('category')
var locateValue = getQueryParam('location')

if(textValue==null){textValue='%20'}
if(dateValue==null){dateValue='%20'}
if(categoryValue==null){categoryValue='%20'}
if(locateValue==null){locateValue='%20'}

const apiUrl=`http://openapi.seoul.go.kr:8088/564952574f6a796b38306b544f4561/json/culturalEventInfo/1/1000/`
var searchUrl=`${apiUrl}${categoryValue}/${textValue}/${dateValue}`
console.log(searchUrl)
fetch(searchUrl)
.then(res => res.json()) // JSON 응답을 JavaScript 객체 리터럴로 구문분석
.then(data => {
    if(locateValue!=="%20"){
        // 필터링할 GUNAME 값
  const targetGuname = locateValue;

  // GUNAME 값으로 필터링된 데이터 추출
  const filteredData = data.culturalEventInfo.row.filter(item => item.GUNAME === targetGuname);
  

        for(var j=0;j<10;j++){
            removedata(j)
        }
 
        for(var k=0;k<10;k++){
            getFdata(filteredData,k)
        }

        console.log(filteredData);
    }
    else{
    for(var j=0;j<10&&data.culturalEventInfo.list_total_count;j++){
        getdata(data,j)
        
    }
}
    console.log(data)
        });

function removedata(dataNum){
    document.getElementsByClassName("title")[dataNum].innerHTML=""
    document.getElementsByClassName("place")[dataNum].innerHTML=""
    document.getElementsByClassName("date")[dataNum].innerHTML=""
    document.getElementsByClassName("fee")[dataNum].innerHTML=""
    document.getElementsByClassName("mainimage")[dataNum].src=""
    document.getElementsByClassName("pageopen")[dataNum].href=""
}
        
function getdata(data, dataNum){
    document.getElementsByClassName("title")[dataNum].innerHTML=data.culturalEventInfo.row[dataNum].TITLE;
    document.getElementsByClassName("place")[dataNum].innerHTML=data.culturalEventInfo.row[dataNum].GUNAME;
    document.getElementsByClassName("date")[dataNum].innerHTML=data.culturalEventInfo.row[dataNum].DATE;
    document.getElementsByClassName("fee")[dataNum].innerHTML=data.culturalEventInfo.row[dataNum].USE_FEE;
    document.getElementsByClassName("mainimage")[dataNum].src=data.culturalEventInfo.row[dataNum].MAIN_IMG;
    document.getElementsByClassName("pageopen")[dataNum].href=data.culturalEventInfo.row[dataNum].ORG_LINK;
}//데이터 넣기

function getFdata(filteredData, FdataNum){
    document.getElementsByClassName("title")[FdataNum].innerHTML=filteredData[FdataNum].TITLE;
    document.getElementsByClassName("place")[FdataNum].innerHTML=filteredData[FdataNum].GUNAME;
    document.getElementsByClassName("date")[FdataNum].innerHTML=filteredData[FdataNum].DATE;
    document.getElementsByClassName("fee")[FdataNum].innerHTML=filteredData[FdataNum].USE_FEE;
    document.getElementsByClassName("mainimage")[FdataNum].src=filteredData[FdataNum].MAIN_IMG;
    document.getElementsByClassName("pageopen")[FdataNum].href=filteredData[FdataNum].ORG_LINK;
}



function submitForm() {
    // 폼 요소에 접근
    var form = document.querySelector('.searching');

    // 폼 데이터 가져오기
    var formData = new FormData(form);
    console.log(formData)

    var locationValue = formData.get('location');
    var categoryValue = formData.get('category');
    var startValue = formData.get('start');
    var endValue = formData.get('end');
    var sNameValue = formData.get('s_name');

    if (sNameValue==""){
        sNameValue="%20"
    }

    console.log('지역:', locationValue);
    console.log('카테고리:', categoryValue);
    console.log('시작 날짜:', startValue);
    console.log('종료 날짜:', endValue);
    console.log('검색어:', sNameValue);

    const fullUrl = `${apiUrl}${categoryValue}/${sNameValue}/${startValue}`

   


    // fetch를 사용하여 데이터 가져오기
fetch(fullUrl)
.then(response => response.json()) // JSON 형태로 변환
.then(data => {
    if(locationValue!=="%20"){
        // 필터링할 GUNAME 값
  const targetGuname = locationValue;

  // GUNAME 값으로 필터링된 데이터 추출
  const filteredData = data.culturalEventInfo.row.filter(item => item.GUNAME === targetGuname);
  

        for(var j=0;j<10;j++){
            removedata(j)
        }
 
        for(var k=0;k<10;k++){
            getFdata(filteredData,k)
        }

        console.log(filteredData);
    }
    else{
    var total_list=data.culturalEventInfo.list_total_count;
    for(var j=0;j<10;j++){
        removedata(j)
    }

    for(var k=0;k<10&&k<total_list;k++){
        getdata(data,k)
    }
    }

    

    console.log(data.culturalEventInfo.list_total_count)
    console.log(fullUrl)
    console.log(data)
  // 필터링된 데이터 콘솔에 출력
  
})
.catch(error => console.error('데이터를 불러오는 중 에러 발생:', error));

   
    }