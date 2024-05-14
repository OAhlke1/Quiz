let cardContents = [
    {
        topImg: './images/mathe.jpg',
        question: `Was erhält man, wenn man<br>
                  1/1 + 1/2 + 1/3 + 1/4 + ...<br>
                  bis zur Unendlichkeit addiert?`,
        answers: {
                    wrongAnswers: ['100π', '-1/12', 'ist nicht bekannt'],
                    correctAnswer: 'Unendlich'
                },
        infoText: `Tatsächlich ist es unendlich!
                  <br><a href="https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks:_Harmonische_Reihe" target="_blank">Hier geht es zum Beweis</a>`
    },
    {
        topImg: './images/spiderman.jpg',
        question: `Wie dick müsste die Spinnenseide sein,
                  wenn Spiderman Mary-Jane beim Sturz aus 
                  100 Metern Höhe rettet?`,
        answers: {
                    wrongAnswers: ['20cm', '5m', '0,5m'],
                    correctAnswer: '2mm'
                },
        infoText: `Spinnenseide ist das belastbarste Material, das man aus der Natur kennt.
                  <br><a href="https://www.deutschlandfunknova.de/beitrag/das-netz-der-madagaskar-seidenspinne-reissfester-als-stahl-dehnbarer-als-nylon#:~:text=Der%20Faden%20der%20Madagaskar%2DSeidenspinne,gleichzeitig%20aber%20dehnbarer%20als%20Nylon." target="_blank">Hier weitere Infos zu dem Thema</a>`
    },
    {
        topImg: './images/bambus.jpg',
        question: `Mit welcher Geschwindigkeit wächst
                  Bambus?`,
        answers: {
                    wrongAnswers: ['3mm pro Tag', '2cm pro Woche', '1cm pro Stunde'],
                    correctAnswer: '70cm pro Tag'
                },
        infoText: `Tatsächlich wächst Bambus mit einer Geschwindigkeit von bis zu 70 Zentimetern pro Tag!
                  <br>Erfahre <a href="https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks:_Harmonische_Reihe" target="_blank">hier</a> näheres!`
    },
    {
        topImg: './images/blitz.jpg',
        question: `Wie viele Blitze entstehen
                  welteit pro Sekunde?`,
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
                   Wie viele Umläufe (Neptun-Jahre)
                   sind seit seiner Entdeckung vergangen?`,
        answers: {
                    wrongAnswers: ['2', '42', '5'],
                    correctAnswer: '1'
                },
        infoText: `Der Neptun ist der äußerste Planet unseres Sonnensystems.
                  Ein Jahr dauert ca. 
                  <br><a href="https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks:_Harmonische_Reihe" target="_blank">Hier geht es zum Beweis</a>`
    },
    {
        topImg: './images/universum.jpg',
        question: `Wie oft muss man ein Blatt Papier
                  mit 0.1mm Dicke in der Mitte
                  falten, damit dessen Höhe dem
                  Durchmesser des sichtbaren
                  Universums (~93 Mrd. Lichtjahre)
                  entspricht?`,
        answers: {
                    wrongAnswers: ['1 Millon mal', '2112 mal', '700 mal'],
                    correctAnswer: '103 mal'
                },
        infoText: `Tatsächlich müsste man das Blatt nur 103 mal in der Mitte falten
                  damit seine Höhe 100 Mrd Lichtjahre beträgt!
                  Sprich die Höhe wäre sogar noch weit größer als das sichtbare
                  Universum!
                  Das liegt an der Mächtigkeit vom exponentiellen Wachstum, denn mit
                  jeder Faltun verdoppelt sich die Höhe des Papierstapels!`
    },
    {
        topImg: './images/rubikscube.png',
        question: `Wie viele Züge sind höchstens
                  nötig, um einen Zauberwürfel
                  zu lösen?`,
        answers: {
                    wrongAnswers: ['30', '14', 'kann man nicht wissen'],
                    correctAnswer: '20'
                },
        infoText: `Tatsächlich sind es nur 20 Züge!
                  Diese Zahl wird auch <i>Gotteszahl</i> genannt
                  und wurde mithilfe der Google-Server gefunden!
                  Näheres dazu <a href="https://www.cubelelo.com/blogs/cubing/how-to-solve-rubiks-cube-in-20-moves#:~:text=Studies%20and%20research%20have%20proven%20that%20God's%20Number%20is%20number%2020." target="_blank">hier</a>
                  <span>(auf Englisch)</span>`
    },
    {
        topImg: './images/ameise.png',
        question: `Wieviel Prozent der gesamten Biomasse der Menschen
                  machen Ameisen aus?`,
        answers: {
                    wrongAnswers: ['12', '0.01 ', '6'],
                    correctAnswer: '100'
                },
        infoText: `Es gibt über 10 Billiarden (10.000 Millionen Millionen) Ameisen auf der Welt!
                  <br>Lies <a href="https://www.tu-chemnitz.de/tu/pressestelle/aktuell/4779#:~:text=Dazu%20erkl%C3%A4rte%20Ulrich%20Schuster%3A%20%22Ungef%C3%A4hr,alle%20Menschen%20der%20Welt%20zusammen." target="_blank">hier</a> mehr zu dem Thema!`
    },
    {
        topImg: './images/blob.jpg',
        question: `Der Blob ist ein Pilz, welcher nur aus einer einzigen Zelle besteht und wahrliche Meisteleistungen erzielen kann was das das Lernen oder Merken von Informationen angeht. Wie viele Geschlechter hat er jedoch?`,
        answers: {
                    wrongAnswers: ['0', '1.5', 'ist nicht bekannt'],
                    correctAnswer: '720'
                },
        infoText: `Tatsächlich sind es 720 Geschlechter!
                  <br><a href="https://www.welt.de/kmpkt/article233078597/Schleimpilz-Einzeller-des-Jahres-2021-ist-ohne-Gehirn-intelligent.html#:~:text=Au%C3%9Ferdem%20hat%20der%20Blob%20gleich,davon%20au%C3%9Fer%20dem%20eigenen%20paaren." target="_blank">Hier</a> noch mehr Infos zu diesem wirklich faszinierenden Pilz.`
    },
    {
        topImg: './images/antarktis.jpg',
        question: `Wie viel Prozent des globalen Süßwassers liegen in der Antarktis?`,
        answers: {
                    wrongAnswers: ['0.1', '3.14', '10'],
                    correctAnswer: '70'
                },
        infoText: `Die Antarktis, mit dem Kontinent Antarktika, ist der trockenste und unwirtlichste Ort der Erde. Sei bis zu 4 Kilometer hoher Eispanzer umfasst tatsächlich 90 Prozent des Süßwasservorkommens der Erde! 
                  <br><a href="https://www.umweltbundesamt.de/themen/nachhaltigkeit-strategien-internationales/antarktis/die-antarktis/geographie-der-antarktis#:~:text=70%20Prozent%20des%20S%C3%BC%C3%9Fwassers%20der,gr%C3%B6%C3%9Fte%20S%C3%BC%C3%9Fwasserreservoir%20der%20Welt%20dar." target="_blank">Hier geht es zum Beweis</a>`
    },
    {
        headline: "Du hast das Quiz erfolgreich beendet!",
        winTexts: ["Du hast alle Fragen richtig beantwortet! Du hast klar bewiesen, dass du echtes Faktenwissen besitzt!", "Nicht schlecht! Das muss dir erst mal jemand nachmachen!", "Das ist eine solide Leistung", "Okay, du hattest mal einen schlechten Tag. Haben wir alle mal!"]
    }
];
let i = 0;
let randomNumber = 0;
let correctlyAnswered = 0;
let widthPerceBar = 0;
let questionsAmount = cardContents.length-1;
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
        }
        showExtra();
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
        <div class="rightAnswers disFlexColumnCenter">
            <a href="#" class="btn btn-primary"></a>
            <a href="#" class="btn btn-primary"></a>
        </div>
        <div class="rightAnswers disFlexColumnCenter">
            <a href="#" class="btn btn-primary"></a>
            <a href="#" class="btn btn-primary"></a>
        </div >
    </div>
        <div class="extraInfo displayNone">
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
    randomNumber = parseInt(Math.floor(Math.random()*4)); //For that the correct answer is always at a different place
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
        if(i === 9) {
            document.querySelector('.nextQuestion').style.backgroundColor = "orange";
            document.querySelector('.nextQuestion').innerHTML = "Zur Auswertung";
        }
        return;
    }
}

function nextCard() {
    i++;
    if(i === 10) {
        renderResultpage();
    }else {
        if(i === questionsAmount) {
            document.querySelector('.card').classList.add("displayNone");
            document.querySelector('.resultsScreen').remove("displayNone");
        }else {
            renderCard();
        }
    }
}

function addAnswerClick() {
    for(let l=0; l<4; l++) {
        document.querySelectorAll('.answerBlock a')[l].addEventListener('click', clickAnsw);
    }
}

function showExtra() {
    document.querySelector('.extraInfo').classList.remove('displayNone');
}

function renderResultpage() {
    document.querySelector('.cardContainer').classList.add('displayNone');
    document.querySelector('.resultScreen').classList.remove('displayNone');
    document.querySelector('.resultScreen p').innerHTML = `${correctlyAnswered} von ${(cardContents.length-1)} richtig beantwortet!<br>`+choosewinTexts();
    if(correctlyAnswered === 10) {
        document.querySelector('h1').style.color = "gold";
        document.querySelector('h2').style.color = "gold";
        document.querySelector('p').style.color = "gold";
        document.querySelector('img').classList.remove('displayNone');
    }
}

function choosewinTexts() {
    if(correctlyAnswered <= 3) {
        return cardContents[10].winTexts[3];
    }else if(correctlyAnswered > 3 && correctlyAnswered < 7) {
        return cardContents[10].winTexts[2];
    }else if(correctlyAnswered > 7 && correctlyAnswered < 10) {
        return cardContents[10].winTexts[1];
    }else if(correctlyAnswered === 10) {
        return cardContents[10].winTexts[0];
    }
}