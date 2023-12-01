let local_list = [['종로구', '중구', '용산구', '성동구', '광진구', '동대문구', '중랑구', '성북구'], ['강북구', '도봉구', '노원구', '은평구', '서대문구', '마포구', '양천구', '강서구', '구로구'], ['금천구', '영등포구', '동작구', '관악구', '서초구', '강남구', '송파구', '강동구']]
let icons = ['jongno.svg', 'junggu.svg', 'yongsan.svg', 'seongdong.svg', 'gwangjin.svg', 'dongdaemun.svg', 'jungnang.svg', 'seongbuk.svg', 'gangbuk.svg', 'dobong.svg', 'nowon.svg', 'eunpyeong.svg', 'seodaemun.svg', 'mapo.svg', 'yangcheon.svg', 'gangseo.svg', 'guro.svg', 'geumcheon.svg', 'yeongdeungpo.svg', 'dongjak.svg', 'gwanak.svg', 'seocho.svg', 'gangnam.svg', 'songpa.svg', 'gangdong.svg']
let index = 0;
for (let i = 0; i < local_list.length; i++) {
    for (let j = 0; j < local_list[i].length; j++) {
        document.write('<figure class="local"><button class="local_btn" onclick="load('+i+','+j+')"><img src="./pic/'+icons[index]+'" alt="'+local_list[i][j]+' 이미지"></button><figcaption>'+local_list[i][j]+'</figcaption></figure>')
        index++;
    }
    if (i != local_list.length - 1) document.write('<br><br>');
}

function load(i, j) {
    window.open('item.html?location=' + local_list[i][j]);
}