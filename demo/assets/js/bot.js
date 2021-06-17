const DATA = [
    {
        name: "Jesna",
        description: `Nammade swantham job kari. Vazha ennum ariyappedum. Full time ethelum pazham urunji urunji irikkum. Broadcast il aarkkelum bore adicha orotta job kond avare ON aakkum.\n Oh btw, girlsplay.com nte systems admin aane ;) Sahikkan vayyathe bakki mambers okke parayum, "Uff, mundu mathiyaarnn"`,
        keywords: ["vazha", "jobkari", "job kari"],
        image: 'assets/img/jesna.png',
        instagram: 'jesna_mariyam',
        whatsapp: '919496650554',
        phone: '9496650554'
    },
    {
        name: "Abhisree",
        description: `Swiggy mamanod urunjan Gulab Jamun kitto enn ella divasavum Chavadimukku vibe il chodikkana ore oru killadi.\nAarelum aduth vannal parayum, "Ente karate chavittu kondal nee oombiyath thanna"`,
        keywords: ["gulab jamun", 'gulabjamun'],
        image: 'assets/img/abhi.png',
        instagram: 'abhi_m_sunil_',
        whatsapp: '919497111424',
        phone: '9497111424'
    }
]

function bot() {
    var query = document.getElementById("form").elements[0].value;
    document.getElementById("error").style.display = "none";
    document.getElementById("results").style.display = "none";
    var i, j;
    if (!query) {
        document.getElementById("error_text").innerHTML = "Aadhyam enthelum chodikk...";
        document.getElementById("error").style.display = "flex";
    }
    else {
        for (i = 0; i < DATA.length; i++) {
            for (j = 0; j < DATA[i].keywords.length; j++) {
                if (query.includes(DATA[i].keywords[j])) {
                    document.getElementById("name").innerHTML = DATA[i].name;
                    document.getElementById("description").innerHTML = DATA[i].description;
                    document.getElementById("pic").src = DATA[i].image;
                    document.getElementById("results").style.display = "flex";
                    document.getElementById("insta").href = `https://www.instagram.com/${DATA[i].instagram}`;
                    document.getElementById("wa").href = `https://api.whatsapp.com/send?phone=${DATA[i].whatsapp}`;
                    // j = DATA[i].keywords.length + 1;
                    // i = DATA.length + 1;
                }
            }
        } if (document.getElementById("name").innerHTML.length < 1) {
            document.getElementById("error_text").innerHTML = "Athonnum enikk arinjooda makkale";
            document.getElementById("error").style.display = "flex";
        }
    }
}