let categories = [['클래식', '콘서트', '축제', '전시/미술', '영화', '연극'],['뮤지컬/오페라', '무용', '독주/독창회', '국악', '교육/체험', '기타']]
let icons = [['pic/classic.png', 'pic/concert.png', 'pic/festival.png', 'pic/exhibition.png', 'pic/movie.png', 'pic/theater.png'], ['pic/opera.png', 'pic/dancing.png', 'pic/recital.png', 'pic/janggu.png', 'pic/learning.png', 'pic/more.png']]
for (let i = 0; i < categories.length; i++) {
    document.write('<tr>')
    for (let j = 0; j < categories[i].length; j++) {
        document.write('<td><figure class="category"><button class="category_btn" onclick="load('+i+','+j+')"><img src="'+icons[i][j]+'" alt="'+categories[i][j]+' 이미지"></button><figcaption>'+categories[i][j]+'</figcaption></figure></td>');
    }
    document.write('</tr>')
} 

function load(i, j) {
    window.open('item.html?'+'category='+categories[i][j]);
}