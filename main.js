const MenuSection = document.getElementById('Menu');

/* eslint-disable no-unused-vars */
const showMenu = () => {
  MenuSection.style.display = 'block';
};
const hideMenu = () => {
  MenuSection.style.display = 'none';
};
/* eslint-enable no-unused-vars */
const speakerContainer = document.querySelector('.home-page');

speakerContainer.innerHTML += `
<div class="featured-speakers">
<div class="featured">
    <img src="img/speaker_01 1.png" alt="" class="speaker-img speaker-img-mobile">
    <img src="img/speaker_01 1 (7).png" alt="" class="speaker-img speaker-img-desk ">
    <div class="featured-text">
            <div class="featured-part1">
                <div> <p class="third-text1">Yochai Benkler</p></div>
                <div><p class="third-text2">Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School</p></div>
                <img src="img/title_underline (1).png" alt="">
            </div>
            <p class="featured-part2">Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006</p>
    </div>
   
</div>
<div class="featured">
    <img src="img/speaker_01 1 (2).png" alt="" class="speaker-img speaker-img-mobile">
    <img src="img/speaker_01 1 (8).png" alt="" class="speaker-img speaker-img-desk ">
    <div class="featured-text">
            <div class="featured-part1">
                <div> <p class="third-text1">SohYeong Noh</p></div>
                <div><p class="third-text2">Director of Art Centre Nabi and a board member of CC Korea</p></div>
                <img src="img/title_underline (1).png" alt="">
            </div>
            <p class="featured-part2">As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.</p>
    </div>
   
</div>

<div class="featured featured-desk">
    <img src="img/speaker_01 1 (3).png" alt="" class="speaker-img">
    <div class="featured-text">
            <div class="featured-part1">
                <div> <p class="third-text1">SohYeong Noh</p></div>
                <div><p class="third-text2">Director of Art Centre Nabi and a board member of CC Korea</p></div>
                <img src="img/title_underline (1).png" alt="">
            </div>
            <p class="featured-part2">As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.</p>
    </div>
   
</div>

</div>
<div class="featured-speakers featured-desk">
<div class="featured">
    <img src="img/speaker_01 1 (4).png" alt="" class="speaker-img">
    <div class="featured-text">
            <div class="featured-part1">
                <div> <p class="third-text1">Yochai Benkler</p></div>
                <div><p class="third-text2">Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School</p></div>
                <img src="img/title_underline (1).png" alt="">
            </div>
            <p class="featured-part2">Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006</p>
    </div>
   
</div>
<div class="featured featured-desk">
    <img src="img/speaker_01 1 (5).png" alt="" class="speaker-img">
    <div class="featured-text">
            <div class="featured-part1">
                <div> <p class="third-text1">SohYeong Noh</p></div>
                <div><p class="third-text2">Director of Art Centre Nabi and a board member of CC Korea</p></div>
                <img src="img/title_underline (1).png" alt="">
            </div>
            <p class="featured-part2">As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.</p>
    </div>
   
</div>

<div class="featured featured-desk">
    <img src="img/speaker_01 1 (6).png" alt="" class="speaker-img">
    <div class="featured-text">
            <div class="featured-part1">
                <div> <p class="third-text1">SohYeong Noh</p></div>
                <div><p class="third-text2">Director of Art Centre Nabi and a board member of CC Korea</p></div>
                <img src="img/title_underline (1).png" alt="">
            </div>
            <p class="featured-part2">As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.</p>
    </div>
   
</div>

</div>`;
