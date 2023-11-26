window.onload = function () { buildCalendar(); }

        let nowMonth = new Date();  // 현재 달을 페이지를 로드한 날의 달로 초기화
        let today = new Date();     // 페이지를 로드한 날짜를 저장
        today.setHours(0, 0, 0, 0);    // 비교 편의를 위해 today의 시간을 초기화

        // 달력 생성 : 해당 달에 맞춰 테이블을 만들고, 날짜를 채워 넣는다.
        function buildCalendar() {

            let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);     // 이번달 1일
            let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);  // 이번달 마지막날

            let tbody_Calendar = document.querySelector(".Calendar > tbody");
            document.getElementById("calYear").innerText = nowMonth.getFullYear();             // 연도 숫자 갱신
            document.getElementById("calMonth").innerText = leftPad(nowMonth.getMonth() + 1);  // 월 숫자 갱신

            while (tbody_Calendar.rows.length > 0) {                        // 이전 출력결과가 남아있는 경우 초기화
                tbody_Calendar.deleteRow(tbody_Calendar.rows.length - 1);
            }

            let nowRow = tbody_Calendar.insertRow();            

            for (let j = 0; j < firstDate.getDay(); j++) {  
                let nowColumn = nowRow.insertCell();       
            }

            for (let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)) {   // day는 날짜를 저장하는 변수, 이번달 마지막날까지 증가시키며 반복  

                let nowColumn = nowRow.insertCell();      


                let newDIV = document.createElement("p");
                newDIV.innerHTML = leftPad(nowDay.getDate());      
                nowColumn.appendChild(newDIV);

                if (nowDay.getDay() == 6) {             
                    nowRow = tbody_Calendar.insertRow();   
                }

                if (nowDay < today) {                       
                    newDIV.className = "pastDay";
                }
                else if (nowDay.getFullYear() == today.getFullYear() && nowDay.getMonth() == today.getMonth() && nowDay.getDate() == today.getDate()) { // 오늘인 경우           
                    newDIV.className = "today";
                    newDIV.onclick = function () { choiceDate(this); }
                }
                else {                                     
                    newDIV.className = "futureDay";
                    newDIV.onclick = function () { choiceDate(this); }
                }
            }


        }

        // 날짜 선택
        function choiceDate(newDIV) {
            if (document.getElementsByClassName("choiceDay")[0]) {    
                document.getElementsByClassName("choiceDay")[0].classList.remove("choiceDay"); 
            }
            newDIV.classList.add("choiceDay"); 
        }

        // 이전달 버튼 클릭
        function prevMonth() {
            nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() - 1, nowMonth.getDate());
            buildCalendar();
        }

        // 다음달 버튼 클릭
        function nextMonth() {
            nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, nowMonth.getDate());
            buildCalendar();
        }

        // input값이 한자리 숫자인 경우 앞에 '0' 붙혀주는 함수
        function leftPad(value) {
            if (value < 10) {
                value = "0" + value;
                return value;
            }
            return value;
        }

        