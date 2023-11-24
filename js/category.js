let categories = [['클래식', '콘서트', '축제', '전시/미술', '영화', '연극'],['뮤지컬/오페라', '무용', '독주/독창회', '국악', '교육/체험', '기타']]
let icons = []
for (let i = 0; i < categories.length; i++) {
    document.write('<div>')
    for (let j = 0; j < categories[i].length; j++) {
        document.write('<figure class="category"><button class="category_btn"><img src="concert.png" alt="버튼 이미지" ></button><figcaption>'+categories[i][j]+'</figcaption></figure>');
    }
    document.write('</div><br>')
} 