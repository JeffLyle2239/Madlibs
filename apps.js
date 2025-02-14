function createParagraph(){
    var wordOne = document.getElementById('wordOne').value;
    var wordTwo = document.getElementById('wordTwo').value;
    var wordThree = document.getElementById('wordThree').value;
    var wordFour = document.getElementById('wordFour').value;
    var wordFive = document.getElementById('wordFive').value;
    var wordSix = document.getElementById('wordSix').value;
    var wordSeven = document.getElementById('wordSeven').value;
    var wordEight = document.getElementById('wordEight').value;
    var wordNine = document.getElementById('wordNine').value;
    var wordTen = document.getElementById('wordTen').value;
    var wordEleven = document.getElementById('wordEleven').value;
    var wordTwelve = document.getElementById('wordTwelve').value;
    var wordThirteen = document.getElementById('wordThirteen').value;
    var wordFourteen = document.getElementById('wordFourteen').value;

    var paragraph = `One night me and my ${wordOne} were ${wordTwo} along a hidden path. All of a sudden we heard a loud ${wordThree} from deep in the ${wordFour}. The noise made us ${wordFive} out of our ${wordSix}. We started to ${wordSeven} as fast as we could! Just when we thought we far enough away, we stumbled up a ${wordEight} that started talking to us about ${wordNine}. Never in my life have I seen a talking ${wordTen}. I was relieved to spot a ${wordEleven} in the distance that hopefully could give us a place to hide. As we made our way towards it, we heard that ${wordTwelve} noise again! We start ${wordThirteen} and finally reach our destination. What a ${wordFourteen} night it was!`;

    document.getElementById('answer').innerHTML = paragraph;
}