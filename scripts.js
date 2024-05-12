let cardContents = [
    {
        topImg: './images/mathe.jpg',
        question: `Was erhält man, wenn man
                  <br>1/1 + 1/2 + 1/3 + ...
                  <br>bis zur Unendlichkeit addiert?`,
        answers: {
                    wrongAnswers: ['100π', '-1/12', 'man weiß es nicht'],
                    correctAnswer: 'Unendlich'
                },
        infoText: `Tatsächlich ist es unendlich!
                  <br><a href="https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks:_Harmonische_Reihe" target="_blank">Hier geht es zum Beweis</a>`
    },
    {
        topImg: './images/spiderman.jpg',
        question: `Wie dick müsste der Spinnenwebfaden sein,
                  <br>wenn Spiderman Mary-Jane beim Sturz aus 
                  <br>100 Metern Höhe rettet?`,
        answers: {
                    wrongAnswers: ['20 Zentimeter', '5 Meter', '0,5 Meter'],
                    correctAnswer: '2 Millimeter'
                },
        infoText: `Spinnenseide ist das belastbarste Material, das man aus der Natur kennt.
                  <br><a href="https://www.deutschlandfunknova.de/beitrag/das-netz-der-madagaskar-seidenspinne-reissfester-als-stahl-dehnbarer-als-nylon#:~:text=Der%20Faden%20der%20Madagaskar%2DSeidenspinne,gleichzeitig%20aber%20dehnbarer%20als%20Nylon." target="_blank">Hier weitere Infos zu dem Thema</a>`
    },
    {
        topImg: './images/bambus.jpg',
        question: `Mit welcher Geschwindigkeit wächst
                  <br>Bambus?`,
        answers: {
                    wrongAnswers: ['3 Millimeter pro Tag', '2 Zentimeter pro Woche', '1 Zentimeter pro Stunde'],
                    correctAnswer: '70 Zentimeter pro Tag'
                },
        infoText: `Tatsächlich wächst Bambus mit einer Geschwindigkeit von bis zu 70 Zentimetern pro Tag!
                  <br>Erfahre <a href="https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks:_Harmonische_Reihe" target="_blank">hier</a> näheres!`
    },
    {
        topImg: './images/blitz.jpg',
        question: `Wie viele Blitze entstehen
                  <br>welteit pro Sekunde?`,
        answers: {
                    wrongAnswers: ['100', '1', 'mehrere Tausend'],
                    correctAnswer: '44'
                },
        infoText: `Tatsächlich sind es 44 Blitze mit jeder Sekunde!
                  <br><a href="https://www.blick.ch/life/wissen/unnuetzes-wissen-zum-thema-natur-warum-ist-das-meer-blau-id16274697.html" target="_blank">Quelle</a>`
    },
    {
        topImg: './images/neptun.png',
        question: `Der Planet Neptun wurde 1846 entdeckt.
                   <br>Wie viele Umläufe (Neptun-Jahre)
                   <br>hat sind seit seiner Entdeckung vergangen?`,
        answers: {
                    wrongAnswers: ['2', '42', '5'],
                    correctAnswer: '1'
                },
        infoText: `Der Neptun ist der äußerste Planet unseres Sonnensystems.
                  <br>Ein Jahr dauert ca. 
                  <br><a href="https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks:_Harmonische_Reihe" target="_blank">Hier geht es zum Beweis</a>`
    },
    {
        topImg: './images/universum.jpg',
        question: `Wie oft muss man ein Blatt Papier
                  <br>mit 1mm Dicke in der Mitte
                  <br>falten, damit dessen Höhe dem
                  <br>Durchmesser des sichtbaren
                  <br>Universums (~93 Mrd. Lichtjahre)
                  <br>entspricht?`,
        answers: {
                    wrongAnswers: ['1 Millon mal', '2000 mal', '700 mal'],
                    correctAnswer: '100 mal'
                },
        infoText: `Tatsächlich müsste man das Blatt nur 102 mal in der Mitte falten
                  <br>damit seine Höhe 100 Mrd Lichtjahre beträgt!
                  Sprich die Höhe wäre sogar noch weit größer als das sichtbare
                  <br>Universum!
                  <br>Exponentielles Wachsum (denn man verdoppelt die Blatthöhe mit jedem Falten)
                  <br>ist einfach richtig mächtig!`
    },
    {
        topImg: './images/zauberwürfel.jpg',
        question: `Wie viel Züge sind höchstens nötig,
                  <br>um einen Zauberwürfel zu lösen?`,
        answers: {
                    wrongAnswers: ['30', '14', 'kann man nicht wissen'],
                    correctAnswer: '20'
                },
        infoText: `Tatsächlich ist es nur 20 Züge!
                  <br>Diese Zahl wird auch <i>Gotteszahl</i> genannt
                  <br>und wurde mithilfe der Google-Server gefunden!
                  <br>Näheres dazu <a href="https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks:_Harmonische_Reihe" target="_blank">hier</a>
                  <br><span>(auf Englisch)</span>`
    },
    {
        topImg: './images/mathe.jpg',
        question: `Was erhält man, wenn man
                  <br>1/1 + 1/2 + 1/3 + ...
                  <br>bis zur Unendlichkeit addiert?`,
        answers: {
                    wrongAnswers: ['100π', '-1/12', 'man weiß es bis heute nicht'],
                    correctAnswer: 'Unendlich'
                },
        infoText: `Tatsächlich ist es unendlich!
                  <br><a href="https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks:_Harmonische_Reihe" target="_blank">Hier geht es zum Beweis</a>`
    },
    {
        topImg: './images/mathe.jpg',
        question: `Was erhält man, wenn man
                  <br>1/1 + 1/2 + 1/3 + ...
                  <br>bis zur Unendlichkeit addiert?`,
        answers: {
                    wrongAnswers: ['100π', '-1/12', 'man weiß es bis heute nicht'],
                    correctAnswer: 'Unendlich'
                },
        infoText: `Tatsächlich ist es unendlich!
                  <br><a href="https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks:_Harmonische_Reihe" target="_blank">Hier geht es zum Beweis</a>`
    },
    {
        topImg: './images/mathe.jpg',
        question: `Was erhält man, wenn man
                  <br>1/1 + 1/2 + 1/3 + ...
                  <br>bis zur Unendlichkeit addiert?`,
        answers: {
                    wrongAnswers: ['100π', '-1/12', 'man weiß es bis heute nicht'],
                    correctAnswer: 'Unendlich'
                },
        infoText: `Tatsächlich ist es unendlich!
                  <br><a href="https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks:_Harmonische_Reihe" target="_blank">Hier geht es zum Beweis</a>`
    },
    {
        topImg: './images/mathe.jpg',
        question: `Was erhält man, wenn man
                  <br>1/1 + 1/2 + 1/3 + ...
                  <br>bis zur Unendlichkeit addiert?`,
        answers: {
                    wrongAnswers: ['100π', '-1/12', 'man weiß es bis heute nicht'],
                    correctAnswer: 'Unendlich'
                },
        infoText: `Tatsächlich ist es unendlich!
                  <br><a href="https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks:_Harmonische_Reihe" target="_blank">Hier geht es zum Beweis</a>`
    },
    {
        topImg: './images/mathe.jpg',
        question: `Was erhält man, wenn man
                  <br>1/1 + 1/2 + 1/3 + ...
                  <br>bis zur Unendlichkeit addiert?`,
        answers: {
                    wrongAnswers: ['100π', '-1/12', 'man weiß es bis heute nicht'],
                    correctAnswer: 'Unendlich'
                },
        infoText: `Tatsächlich ist es unendlich!
                  <br><a href="https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks:_Harmonische_Reihe" target="_blank">Hier geht es zum Beweis</a>`
    },
    {
        topImg: './images/mathe.jpg',
        question: `Was erhält man, wenn man
                  <br>1/1 + 1/2 + 1/3 + ...
                  <br>bis zur Unendlichkeit addiert?`,
        answers: {
                    wrongAnswers: ['100π', '-1/12', 'man weiß es bis heute nicht'],
                    correctAnswer: 'Unendlich'
                },
        infoText: `Tatsächlich ist es unendlich!
                  <br><a href="https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks:_Harmonische_Reihe" target="_blank">Hier geht es zum Beweis</a>`
    },
    {
        topImg: './images/mathe.jpg',
        question: `Was erhält man, wenn man
                  <br>1/1 + 1/2 + 1/3 + ...
                  <br>bis zur Unendlichkeit addiert?`,
        answers: {
                    wrongAnswers: ['100π', '-1/12', 'man weiß es bis heute nicht'],
                    correctAnswer: 'Unendlich'
                },
        infoText: `Tatsächlich ist es unendlich!
                  <br><a href="https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks:_Harmonische_Reihe" target="_blank">Hier geht es zum Beweis</a>`
    },
    {
        topImg: './images/mathe.jpg',
        question: `Was erhält man, wenn man
                  <br>1/1 + 1/2 + 1/3 + ...
                  <br>bis zur Unendlichkeit addiert?`,
        answers: {
                    wrongAnswers: ['100π', '-1/12', 'man weiß es bis heute nicht'],
                    correctAnswer: 'Unendlich'
                },
        infoText: `Tatsächlich ist es unendlich!
                  <br><a href="https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks:_Harmonische_Reihe" target="_blank">Hier geht es zum Beweis</a>`
    },
    {
        topImg: './images/mathe.jpg',
        question: `Was erhält man, wenn man
                  <br>1/1 + 1/2 + 1/3 + ...
                  <br>bis zur Unendlichkeit addiert?`,
        answers: {
                    wrongAnswers: ['100π', '-1/12', 'man weiß es bis heute nicht'],
                    correctAnswer: 'Unendlich'
                },
        infoText: `Tatsächlich ist es unendlich!
                  <br><a href="https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks:_Harmonische_Reihe" target="_blank">Hier geht es zum Beweis</a>`
    },
    {
        topImg: './images/mathe.jpg',
        question: `Was erhält man, wenn man
                  <br>1/1 + 1/2 + 1/3 + ...
                  <br>bis zur Unendlichkeit addiert?`,
        answers: {
                    wrongAnswers: ['100π', '-1/12', 'man weiß es bis heute nicht'],
                    correctAnswer: 'Unendlich'
                },
        infoText: `Tatsächlich ist es unendlich!
                  <br><a href="https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks:_Harmonische_Reihe" target="_blank">Hier geht es zum Beweis</a>`
    },
    {
        topImg: './images/mathe.jpg',
        question: `Was erhält man, wenn man
                  <br>1/1 + 1/2 + 1/3 + ...
                  <br>bis zur Unendlichkeit addiert?`,
        answers: {
                    wrongAnswers: ['100π', '-1/12', 'man weiß es bis heute nicht'],
                    correctAnswer: 'Unendlich'
                },
        infoText: `Tatsächlich ist es unendlich!
                  <br><a href="https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks:_Harmonische_Reihe" target="_blank">Hier geht es zum Beweis</a>`
    },
    {
        topImg: './images/mathe.jpg',
        question: `Was erhält man, wenn man
                  <br>1/1 + 1/2 + 1/3 + ...
                  <br>bis zur Unendlichkeit addiert?`,
        answers: {
                    wrongAnswers: ['100π', '-1/12', 'man weiß es bis heute nicht'],
                    correctAnswer: 'Unendlich'
                },
        infoText: `Tatsächlich ist es unendlich!
                  <br><a href="https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks:_Harmonische_Reihe" target="_blank">Hier geht es zum Beweis</a>`
    },
    {
        topImg: './images/mathe.jpg',
        question: `Was erhält man, wenn man
                  <br>1/1 + 1/2 + 1/3 + ...
                  <br>bis zur Unendlichkeit addiert?`,
        answers: {
                    wrongAnswers: ['100π', '-1/12', 'man weiß es bis heute nicht'],
                    correctAnswer: 'Unendlich'
                },
        infoText: `Tatsächlich ist es unendlich!
                  <br><a href="https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks:_Harmonische_Reihe" target="_blank">Hier geht es zum Beweis</a>`
    },
];
let i = 0;
let randomNumber = 0;
let correctlyAnswered = 0;
let widthPerceBar = 0;
let questionsAmount = cardContents.length;
let clickAnsw = function clickAnswer(event) {
    event.preventDefault();
    if(document.querySelector('.card').classList.contains('answered')) {
        return;
    }else {
        document.querySelector('.card').classList.add('answered');
        if(event.target.classList.contains('correct')) {
            event.target.style.backgroundColor = 'green'
            event.target.style.color = 'white';
            correctlyAnswered++;
        }else {
            event.target.style.backgroundColor = 'red';
            event.target.style.color = 'white';
            document.querySelector('.answerBlock a.correct').style.backgroundColor = 'green';
            document.querySelector('.answerBlock a.correct').style.color = "white";
            document.querySelector('.extraInfo').classList.remove('displayNone');
        }
    }
    perceBarLength();
}

function renderCard() {
    document.querySelector('.nextQuestion').classList.add('displayNone');
    document.querySelector('.card').innerHTML = '';
    document.querySelector('.card').innerHTML = /* HTML */ `
    <div class="imageTop disFlexColumnCenter">
        <img src="${cardContents[i].topImg}" class="card-img-top" alt="Mathe-Bild">
    </div>
    <div class="card-body disFlexColumnCenter">
    <h5 class="card-title">
        ${cardContents[i].question}
    </h5>
    <div class="answerBlock disFlexColumnCenter">
        <a href="#" class="btn btn-primary"></a>
        <a href="#" class="btn btn-primary"></a>
        <a href="#" class="btn btn-primary"></a>
        <a href="#" class="btn btn-primary"></a>
    </div>
        <div class="extraInfo displayNone disFlexColumnCenter">
            <p>
                ${cardContents[i].infoText}
            </p>
        </div>
    </div>`;
    document.querySelector('.card').classList.remove('answered');
    setCorrectWrong();
    addAnswerClick();
}

function setCorrectWrong() {
    let answers = document.querySelectorAll('.answerBlock a');
    for(let k=0; k<4; k++) {
        answers[k].classList.add('wrong');
        answers[k].addEventListener('click', clickAnsw);
    }
    randomNumber = parseInt(Math.floor(Math.random()*4));
    answers[randomNumber].classList.remove('wrong');
    answers[randomNumber].classList.add('correct');
    setAnswers();
}

function setAnswers() {
    let wrongAnswers = document.querySelectorAll('.answerBlock a.wrong');
    for(let j=0; j<cardContents[i].answers.wrongAnswers.length; j++) {
        wrongAnswers[j].innerHTML = cardContents[i].answers.wrongAnswers[j];
    }
    document.querySelector('.answerBlock a.correct').innerHTML = cardContents[i].answers.correctAnswer;
}

function perceBarLength(perce = 0) {
    perce++;
    if(perce < 101) {
        if(perce === 1) {
            document.querySelector('.perceBar .inner').querySelector('p').innerHTML = (i+1)+"/"+questionsAmount;
        }
        widthPerceBar += (perce/questionsAmount/50);
        document.querySelector('.perceBar .inner').style.width = `${widthPerceBar}%`;
        setTimeout(()=>{perceBarLength(perce)}, 1);
    }else {
        document.querySelector('.nextQuestion').classList.remove('displayNone');
        return;
    }
}

function nextCard() {
    i++;
    console.log(cardContents[i]);
    if(i === questionsAmount) {
        document.querySelector('.card').classList.add("displayNone");
        document.querySelector('.resultsScreen').remove("displayNone");
    }else {
        renderCard();
    }
}

function addAnswerClick() {
    for(let l=0; l<4; l++) {
        document.querySelectorAll('.answerBlock a')[l].addEventListener('click', clickAnsw);
    }
}