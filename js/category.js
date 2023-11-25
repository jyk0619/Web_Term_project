let categories = [['클래식', '콘서트', '축제', '전시/미술', '영화', '연극'],['뮤지컬/오페라', '무용', '독주/독창회', '국악', '교육/체험', '기타']]
let icons = ['classic.png', 'concert.png', 'festival.png', 'exhibition.png', 'movie.png', 'theater.png', 'opera.png', 'dancing.png', 'recital.png', 'janggu.png', 'learning.png', 'more.png']
for (let i = 0; i < categories.length; i++) {
    document.write('<tr>')
    for (let j = 0; j < categories[i].length; j++) {
        document.write('<td><figure class="category"><button class="category_btn"><img src="/pic/'+icons[i*categories[i].length+j]+'" alt="'+categories[i][j]+' 이미지"></button><figcaption>'+categories[i][j]+'</figcaption></figure></td>');
    }
    document.write('</tr>')
} 