const Nb_Cycle = 3;
const Countdown = 1000;

let SelectedPost
let refresh = false;

let Formation = ""
let IE_1 = ""
let IE_2 = ""
let IE_3 = ""
let IE_GO = ""
let IE_GOCS = ""
let IE_GOGALAXY = ""
let IE_ARES = ""
let IE_ORION = ""
let IE_BETAVR = ""
let IE_1_COACH = ""
let IE_2_COACH = ""
let IE_3_COACH = ""
let IE_GO_COACH = ""
let IE_GOCS_COACH = ""
let IE_GOGALAXY_COACH = ""
let IE_ARES_COACH = ""
let IE_ORION_COACH = ""
let IE_ALL = ""
let IE_ALL_COACH = ""

let yourTeam = [];
let offset = 0;
let counter = 0;
let Status = false;

let name1_status = false; 
let name2_status = false;
let name3_status = false;
let name4_status = false;
let name5_status = false;
let name6_status = false;
let name7_status = false;
let name8_status = false;
let name9_status = false;
let name10_status = false;
let name11_status = false;
let name12_status = false;
let name13_status = false;
let name14_status = false;
let name15_status = false;
let name16_status = false;

let selected_previous_option = "optionFOR";

let DF = { Players: [] };
let MF = { Players: [] };
let FW = { Players: [] };
let GK = { Players: [] };

let shuffledArray

let CurrentList = { 'DF': DF.Players, 'MF': MF.Players, 'FW': FW.Players, 'GK': GK.Players }
console.log("CurrentList - Befor Init")
console.log(CurrentList)

let FolderPath = "./web_database.json";
let Joueurs = [];

let img_down_row = document.getElementById("img_down_row");

const Team_directory = {
    "RM": "Raimon",
    "OC": "Occulte",
    "WD": "Wild",
    "CT": "Cybertech",
    "OK": "Otaku",
    "RA": "Royal Academie",
    "SK": "Shuriken",
    "TA": "Terria",
    "KW": "Kirkwood",
    "ZS": "Zeus",
    "OI": "Onze d'Inazuma",
    "SS": "Street Sally's",
    "KF": "Inazuma Kids FC",
    "UB": "Umbrella",

    "ST": "Services Secrets",
    "AP": "Alpin",
    "CD": "Cloître Divin",
    "3C": "Super Triple C",
    "FS": "Fauxshore",
    "MT": "Mary Times",
    "TG": "Tempête des Gémeaux",
    "EP": "Epsilon",
    "NE": "Nouvel Epsilon",
    "NR": "Nouvelle Royal Academie",
    "PM": "Prominence",
    "DD": "Diamond Dust",
    "GS": "Genesis",
    "EN": "Empereurs Noirs",
    "RdG": "Robots de Garde",
    "FT": "Forest Team",
    "JI": "Jeunes Inazuma",

    "IJ": "Inazuma Japon",
    "NJ": "Neo Japon",
    "BW": "Big Waves",
    "LdD": "Lions du Désert",
    "DF": "Dragons de Feu",
    "KQ": "Knights of Queen",
    "TD": "Team D",
    "LE": "Les Empereurs",
    "LL": "Les Licornes",
    "OP": "Orphée",
    "RF": "Les Rois du Football",
    "TZ": "Team Zoolan",
    "LG": "Little Gigantes",
    "RG": "Rose Griffons",
    "TR": "Les Toreros Rouges",
    "BB": "Brocken Bogue",
    "CC": "The Cape Crusaders",
    "TO": "Team Ogre",
    "MC": "Sky Team",
    "DT": "Dark Team",
    "AN": "Anges Noirs",

    "AO": "l'Âge d'Or",
    "KFGO": "Inazuma KFC",
    "UMT": "Ultramégatétra",
    "RMGO": "Raimon GO",
    "RM R": "Raimon Reserve",
    "CN": "Chevaliers Noirs",
    "SR": "Surdoués",
    "VL": "Voie Lactée",
    "FTP": "Foi Toute-Puissante",
    "RAGO": "Royal Academy GO",
    "BP": "Baie des Pirates",
    "ML": "Mers Lunaires",
    "APGO": "Alpin GO",
    "KWGO": "Kirkwood GO",
    "CM": "Collège des Mirages",
    "CU": "Collège Universel",
    "MO": "Mont Olympe",
    "AdD": "Alliance du Dragon",
    "LME": "Lumière Éternelle",
    "OA": "Ombre Ancestral",
    "E0": "Équipe Zéro",
    "GdS": "Griffe du Sud",
    "CdN": "Croc du Nord",
    "RD": "Rage du Démon",


    "SHW": "Les Sherwinds",
    "PO": "Protocol Omega",
    "PO2": "Protocol Omega 2.0",
    "PO3": "Protocol Omega 3.0",
    "ZD": "Zanark Domination",
    "EX": "Excellence",
    "ZAN": "Zan",
    "GIH": "Gihl",
    "GAH": "Gahl",
    "RGN": "Ragna",
    "CS": "Chrono Storm",
    "BCB": "Bande du Cerf Blanc",
    "RS": "Robots de Surveillance",
    "SA": "Statues d'Argile",
    "IJE": "Inazuma Japon Évolution",
    "RdD": "Roses du Désespoir",
    "ES": "Enfants Sauvages",
    "TN": "Traqueurs Nocturnes",

    "IN": "Inazuma National",
    "DFGO": "Dragons de Feu (GO)",
    "BWGO": "Big Waves (GO)",
    "SBA": "Sabres Arides",
    "TT": "Tigres de Thaïlande",
    "LO": "Loups d'Ouzbékistan",
    "OT": "Onze Terrestre",
    "OS": "Onze de Silica",
    "ON": "Onze de Naiadi",
    "OM": "Onze de Magmavia",
    "OF": "Onze de Fertilia",
    "FM": "Falam Medius",
    "AI": "Armada Ixar",
    "BIBG": "Big Bang",
    "SPNA": "Supernova",
    "TS": "Terrible Shadow",

    "IKRM": "Inakuni Raimon",
    "BT": "Bastion",
    "AS": "Anima Sana",
    "PS": "École Polaris",
    "AA": "École Alia",
    "LD": "Lambda",
    "SN": "Sélène",

    "RB": "Red Bison",
    "SHST": "Shining Satans",
    "ET": "Eternal Dancers",
    "PHoA": "Phoenix Army of Arab",
    "SAoA": "Soccer Acrobatic of Arab",
    "IG": "Invincible Giant",
    "SU": "Star Unicorn",
    "NI": "Navy Invaders",
    "PFS": "Perfect Spark",
    "OdS": "Olé de Samba",
    "GQ": "Guardians of Queen",
    "SO": "Shadow of Orion",

    "IAS": "Inazuma All Stars",
    "JD": "Japan Dreams",
    "AM": "Alia Masters"
};

function preloadImages(categoryData) {
    // Parcourir chaque élément dans la catégorie
    for (var key in categoryData) {
        if (categoryData.hasOwnProperty(key)) {
            var imagePath = categoryData[key].Path;

            // Créer un objet Image pour précharger l'image
            var img_preload = new Image();
            img.src = imagePath;
        }
    }
}

async function init() {
    if (combo2.value == "optionCoach" || combo2.value == "optionFOR" || combo.value == "optionIEBETAVR") {
        img_down_row.style.display = "none";
    }


    var buttonStart = document.getElementById("start-button");
    var buttonSelected1 = document.getElementById("buttonSelected1");
    var buttonSelected2 = document.getElementById("buttonSelected2");
    var buttonSelected3 = document.getElementById("buttonSelected3");
    var buttonSelected4 = document.getElementById("buttonSelected4");
    var buttonSelected5 = document.getElementById("buttonSelected5");
    buttonStart.disabled = true;
    buttonSelected1.disabled = true;
    buttonSelected2.disabled = true;
    buttonSelected3.disabled = true;
    buttonSelected4.disabled = true;
    buttonSelected5.disabled = true;
    buttonStart.classList.add("disabled-button");
    buttonSelected1.classList.add("disabled-button");
    buttonSelected2.classList.add("disabled-button");
    buttonSelected3.classList.add("disabled-button");
    buttonSelected4.classList.add("disabled-button");
    buttonSelected5.classList.add("disabled-button");

    console.log("")
    console.log("....Init Start....")
    const response = await fetch(FolderPath);
    const data = await response.json();

    Formation = data.Formation;
    IE_1 = data.IE_1;
    IE_2 = data.IE_2;
    IE_3 = data.IE_3;
    IE_GO = data.IE_GO;
    IE_GOCS = data.IE_GOCS;
    IE_GOGALAXY = data.IE_GOGALAXY;
    IE_ARES = data.IE_ARES;
    IE_ORION = data.IE_ORION;
    IE_BETAVR = data.IE_betaVR;
    IE_1_COACH = data.IE_1_COACH;
    IE_2_COACH = data.IE_2_COACH;
    IE_3_COACH = data.IE_3_COACH;
    IE_GO_COACH = data.IE_GO_COACH;
    IE_GOCS_COACH = data.IE_GOCS_COACH;
    IE_GOGALAXY_COACH = data.IE_GOGALAXY_COACH;
    IE_ARES_COACH = data.IE_ARES_COACH;
    IE_ORION_COACH = data.IE_ORION_COACH;
    IE_ALL = data.IE_ALL;
    IE_ALL_COACH = data.IE_ALL_COACH;

    if (refresh = false) {
        console.log("refresh")
        console.log(refresh)
        Object.values(IE_1).forEach(joueur => { Joueurs.push(joueur.Path); });

        Object.values(IE_1).forEach(joueur => {
            if (joueur.Poste === "GK") {
                GK.Players.push(joueur);
            }
            else if (joueur.Poste === "DF") {
                DF.Players.push(joueur);
            }
            else if (joueur.Poste === "MF") {
                MF.Players.push(joueur);
            }
            else if (joueur.Poste === "FW") {
                FW.Players.push(joueur);
            }
        });
    }

    CurrentList["Formation"] = Formation;
    CurrentList["Coach"] = IE_1_COACH;



    //GK["Players"] = [];
    //console.log("GK")
    //console.log(GK.Players)
    console.log("CurrentList - After Init")
    //CurrentList["GK"] = GK.Players
    console.log(CurrentList)

    console.log("....Init End....")
    console.log("")
}


var combo = document.getElementById("combo-box1");
combo.addEventListener("change", function () {
    let CurrentSaison
    var selectedOptionC1 = combo.value;
    switch (selectedOptionC1) {
        case "optionIE1":
            CurrentSaison = IE_1;
            break;
        case "optionIE2":
            CurrentSaison = IE_2;
            break;
        case "optionIE3":
            CurrentSaison = IE_3;
            break;
        case "optionIEGO":
            CurrentSaison = IE_GO;
            break;
        case "optionIEGOCS":
            CurrentSaison = IE_GOCS;
            break;
        case "optionIEGOGALAXY":
            CurrentSaison = IE_GOGALAXY;
            break;
        case "optionIEARES":
            CurrentSaison = IE_ARES;
            break;
        case "optionIEORION":
            CurrentSaison = IE_ORION;
            break;
        case "optionIEALL":
            CurrentSaison = IE_ALL;
            break;
        case "optionIEBETAVR":
            CurrentSaison = IE_BETAVR;
            break;
        //default:
        // Gérer d'autres options si nécessaire
        //    break;
    }


    on_comboBox_type_changed(combo.value)

    GK["Players"] = [];
    MF["Players"] = [];
    FW["Players"] = [];
    DF["Players"] = [];

    console.log("after")
    CurrentList["GK"] = GK.Players;
    CurrentList["DF"] = DF.Players;
    CurrentList["MF"] = MF.Players;
    CurrentList["FW"] = FW.Players;

    console.log(CurrentList);

    Object.values(CurrentSaison).forEach(joueur => {
        if (joueur.Poste === "GK") {
            GK.Players.push(joueur);
        }
        else if (joueur.Poste === "DF") {
            DF.Players.push(joueur);
        }
        else if (joueur.Poste === "MF") {
            MF.Players.push(joueur);
        }
        else if (joueur.Poste === "FW") {
            FW.Players.push(joueur);
        }
    });

    console.log(CurrentList);

});


var combo2 = document.getElementById("combo-box2");
combo2.addEventListener("change", function () {
    var selectedOption = combo.value;
    on_comboBox_type_changed(selectedOption)

});

function on_comboBox_type_changed(selectOpt) {

    if (combo.value == "default" || combo2.value == "default") {
        var buttonStart = document.getElementById("start-button");
        var buttonSelected1 = document.getElementById("buttonSelected1");
        var buttonSelected2 = document.getElementById("buttonSelected2");
        var buttonSelected3 = document.getElementById("buttonSelected3");
        var buttonSelected4 = document.getElementById("buttonSelected4");
        var buttonSelected5 = document.getElementById("buttonSelected5");
        buttonStart.disabled = true;
        buttonSelected1.disabled = true;
        buttonSelected2.disabled = true;
        buttonSelected3.disabled = true;
        buttonSelected4.disabled = true;
        buttonSelected5.disabled = true;
        buttonStart.classList.add("disabled-button");
        buttonSelected1.classList.add("disabled-button");
        buttonSelected2.classList.add("disabled-button");
        buttonSelected3.classList.add("disabled-button");
        buttonSelected4.classList.add("disabled-button");
        buttonSelected5.classList.add("disabled-button");
    } else {

        var buttonStart = document.getElementById("start-button");
        var buttonSelected1 = document.getElementById("buttonSelected1");
        var buttonSelected2 = document.getElementById("buttonSelected2");
        var buttonSelected3 = document.getElementById("buttonSelected3");
        var buttonSelected4 = document.getElementById("buttonSelected4");
        var buttonSelected5 = document.getElementById("buttonSelected5");
        buttonStart.disabled = false;
        buttonSelected1.disabled = false;
        buttonSelected2.disabled = false;
        buttonSelected3.disabled = false;
        buttonSelected4.disabled = false;
        buttonSelected5.disabled = false;
        buttonStart.classList.remove("disabled-button");
        buttonSelected1.classList.remove("disabled-button");
        buttonSelected2.classList.remove("disabled-button");
        buttonSelected3.classList.remove("disabled-button");
        buttonSelected4.classList.remove("disabled-button");
        buttonSelected5.classList.remove("disabled-button");

        Status = false
        var selectedOption = combo2.value;
        let Saison = combo.value;
        console.log("")
        console.log(selectOpt)
        console.log("")
        if (selected_previous_option === "optionFOR" || selected_previous_option === "optionCoach" || selected_previous_option == "optionIEBETAVR") {

            img_down_row.style.display = "flex";
        }

        if (combo.value == "optionIEBETAVR") {

            img_down_row.style.display = "none";
            Status = true
        }

        if (selectedOption == "optionFOR") {

            img_down_row.style.display = "none";
            Status = true
        }
        switch (selectedOption) {
            case "optionCoach":
                img_down_row.style.display = "none";
                Status = true
                switch (selectOpt) {
                    case "optionIE1":
                        CurrentList["Coach"] = IE_1_COACH;
                        break;
                    case "optionIE2":
                        CurrentList["Coach"] = IE_2_COACH;
                        break;
                    case "optionIE3":
                        CurrentList["Coach"] = IE_3_COACH;
                        break;
                    case "optionIEGO":
                        CurrentList["Coach"] = IE_GO_COACH;
                        break;
                    case "optionIEGOCS":
                        CurrentList["Coach"] = IE_GOCS_COACH;
                        break;
                    case "optionIEGOGALAXY":
                        CurrentList["Coach"] = IE_GOGALAXY_COACH;
                        break;
                    case "optionIEARES":
                        CurrentList["Coach"] = IE_ARES_COACH;
                        break;
                    case "optionIEORION":
                        CurrentList["Coach"] = IE_ORION_COACH;
                        break;
                    case "optionIEALL":
                        CurrentList["Coach"] = IE_ALL_COACH;
                        break;
                    case "optionIEBETAVR":
                        CurrentList["Coach"] = IE_BETAVR;
                        break;
                }
                break;

            case "optionGK":
                SelectedPost = GK
                Status = true
                break;

            case "optionDF":
                SelectedPost = DF
                Status = true
                break;

            case "optionMF":
                SelectedPost = MF
                Status = true
                break;

            case "optionFW":
                SelectedPost = FW
                Status = true
                break;
        }
        selected_previous_option = selectedOption
        if (combo.value == "optionIEBETAVR") {
            selected_previous_option = "optionIEBETAVR"
        }

        console.log(CurrentList);
    }
}

function shuffleObject(obj) {
    // Convert object to array
    var arr = Object.values(obj);

    // Perform shuffle operation
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    // Convert array back to object
    var shuffledObj = {};
    for (var i = 0; i < arr.length; i++) {
        shuffledObj[i] = arr[i];
    }

    return shuffledObj;
}

var startButton = document.getElementById("start-button");
startButton.addEventListener("click", function () {

    var refresh_button = document.getElementById("refresh-button");
    refresh_button.disabled = true;
    startButton.disabled = true;
    buttonSelected1.disabled = true;
    buttonSelected2.disabled = true;
    buttonSelected3.disabled = true;
    buttonSelected4.disabled = true;
    buttonSelected5.disabled = true;
    refresh_button.classList.add("disabled-button");
    startButton.classList.add("disabled-button");
    buttonSelected1.classList.add("disabled-button");
    buttonSelected2.classList.add("disabled-button");
    buttonSelected3.classList.add("disabled-button");
    buttonSelected4.classList.add("disabled-button");
    buttonSelected5.classList.add("disabled-button");


    buttonSelected1.style.display = 'none';
    buttonSelected2.style.display = 'none';
    buttonSelected3.style.display = 'none';
    buttonSelected4.style.display = 'none';
    buttonSelected5.style.display = 'none';


    combo.disabled = true;
    combo2.disabled = true;

    offset = 0

    console.log("....Start Button Pressed....")
    console.log(CurrentList)

    switch (combo2.value) {
        case "optionFOR":
            console.log("Before Shuffle")
            console.log(CurrentList.Formation)
            shuffledArray = shuffleObject(CurrentList.Formation)
            console.log("After Shuffle")
            console.log(shuffledArray)
            break;
        case "optionCoach":
            console.log("Before Shuffle")
            console.log(CurrentList.Coach)
            shuffledArray = shuffleObject(CurrentList.Coach)
            console.log("After Shuffle")
            console.log(shuffledArray)
            break;
        case "optionGK":
            console.log("Before Shuffle")
            console.log(CurrentList.GK)
            shuffledArray = shuffleObject(CurrentList.GK)
            console.log("After Shuffle")
            console.log(shuffledArray)
            break;
        case "optionDF":
            console.log("Before Shuffle")
            console.log(CurrentList.DF)
            shuffledArray = shuffleObject(CurrentList.DF)
            console.log("After Shuffle")
            console.log(shuffledArray)
            break;
        case "optionMF":
            console.log("Before Shuffle")
            console.log(CurrentList.MF)
            shuffledArray = shuffleObject(CurrentList.MF)
            console.log("After Shuffle")
            console.log(shuffledArray)
            break;
        case "optionFW":
            console.log("Before Shuffle")
            console.log(CurrentList.FW)
            shuffledArray = shuffleObject(CurrentList.FW)
            console.log("After Shuffle")
            console.log(shuffledArray)
            break;
    }
    let Nb_item = Object.keys(shuffledArray).length
    console.log("Taille de l'objet :", Nb_item);
    //let TotalItems = Nb_Cycle * Nb_item
    let TotalItems = 175

    if (combo2.value == "optionFOR" || combo2.value == "optionCoach" || combo.value == "optionIEBETAVR") {
        TotalItems = 175
    } else {
        TotalItems = 250
    }

    console.log("TotalItems :", TotalItems);

    const image1 = document.getElementById("IMG_Charcter_1");
    const image2 = document.getElementById("IMG_Charcter_2");
    const image3 = document.getElementById("IMG_Charcter_3");
    const image4 = document.getElementById("IMG_Charcter_4");
    const image5 = document.getElementById("IMG_Charcter_5");

    const TeamText1 = document.getElementById("Team_Text_1");
    const TeamText2 = document.getElementById("Team_Text_2");
    const TeamText3 = document.getElementById("Team_Text_3");
    const TeamText4 = document.getElementById("Team_Text_4");
    const TeamText5 = document.getElementById("Team_Text_5");

    const Name_Text_1 = document.getElementById("Name_Text_1");
    const Name_Text_2 = document.getElementById("Name_Text_2");
    const Name_Text_3 = document.getElementById("Name_Text_3");
    const Name_Text_4 = document.getElementById("Name_Text_4");
    const Name_Text_5 = document.getElementById("Name_Text_5");

    // Création d'un objet principal
    let team_template = {
        bloc1: {
            "image": image1,
            "TeamText": TeamText1,
            "Name_Text": Name_Text_1
        },
        bloc2: {
            "image": image2,
            "TeamText": TeamText2,
            "Name_Text": Name_Text_2
        },
        bloc3: {
            "image": image3,
            "TeamText": TeamText3,
            "Name_Text": Name_Text_3
        },
        bloc4: {
            "image": image4,
            "TeamText": TeamText4,
            "Name_Text": Name_Text_4
        },
        bloc5: {
            "image": image5,
            "TeamText": TeamText5,
            "Name_Text": Name_Text_5
        }
    };

    if (Nb_item > 0){
    afficherImagesAvecIntervalle(shuffledArray, 0, TotalItems, Nb_item, team_template, Team_directory)
    } else {
        team_template.bloc1.image.src = "Resource/character-placeholder.png";

        team_template.bloc1.TeamText.innerText = "";

        team_template.bloc1.Name_Text.innerText = "";
    }

    refresh_button.disabled = false;
    buttonSelected1.disabled = false;
    buttonSelected2.disabled = false;
    buttonSelected3.disabled = false;
    buttonSelected4.disabled = false;
    buttonSelected5.disabled = false;
    refresh_button.classList.remove("disabled-button");
    buttonSelected1.classList.remove("disabled-button");
    buttonSelected2.classList.remove("disabled-button");
    buttonSelected3.classList.remove("disabled-button");
    buttonSelected4.classList.remove("disabled-button");
    buttonSelected5.classList.remove("disabled-button");

    buttonSelected1.style.display = 'block';
    buttonSelected2.style.display = 'block';
    buttonSelected3.style.display = 'block';
    buttonSelected4.style.display = 'block';
    buttonSelected5.style.display = 'block';

});

function afficherImagesAvecIntervalle(shuffledArray, index, TotalItems, Nb_item, team_template, Team_directory) {

    startButton.disabled = true;
    buttonSelected1.disabled = true;
    buttonSelected2.disabled = true;
    buttonSelected3.disabled = true;
    buttonSelected4.disabled = true;
    buttonSelected5.disabled = true;
    startButton.classList.add("disabled-button");
    buttonSelected1.classList.add("disabled-button");
    buttonSelected2.classList.add("disabled-button");
    buttonSelected3.classList.add("disabled-button");
    buttonSelected4.classList.add("disabled-button");
    buttonSelected5.classList.add("disabled-button");
    buttonSelected1.style.display = 'none';
    buttonSelected2.style.display = 'none';
    buttonSelected3.style.display = 'none';
    buttonSelected4.style.display = 'none';
    buttonSelected5.style.display = 'none';

    if (index < TotalItems) {
        // Affiche l'image actuelle
        var image_path = shuffledArray[index % Nb_item].Path;
        var Nom = shuffledArray[index % Nb_item].Nom;
        var Genre = shuffledArray[index % Nb_item].Genre;
        var Team_name = Team_directory[shuffledArray[index % Nb_item].Team];

        if (combo2.value == "optionFOR" || combo2.value == "optionCoach" || combo.value == "optionIEBETAVR") {
            nbr_image_display = 3
            if (Nb_item == 2){
                nbr_image_display = 2
            }
            if (Nb_item == 1){
                nbr_image_display = 1
            }
        } else {
            nbr_image_display = 5
            if (Nb_item == 4){
                nbr_image_display = 4
            }
            if (Nb_item == 3){
                nbr_image_display = 3
            }
            if (Nb_item == 2){
                nbr_image_display = 2
            }
            if (Nb_item == 1){
                nbr_image_display = 1
            }
        }

        if (index % nbr_image_display == 0) {
            team_template.bloc1.image.src = image_path;
            if (combo2.value == "optionFOR") {
                team_template.bloc1.TeamText.innerText = shuffledArray[index % Nb_item].Placement;
            } else {
                team_template.bloc1.TeamText.innerText = Team_name;
            }
            if (combo2.value == "optionFOR" || combo2.value == "optionCoach") {
                team_template.bloc1.Name_Text.innerText = Nom;
            } else {
                var name_genre = Nom + ' - ' + Genre;
                team_template.bloc1.Name_Text.innerText = name_genre;
            }
        }
        else if (index % nbr_image_display == 1) {
            team_template.bloc2.image.src = image_path;
            if (combo2.value == "optionFOR") {
                team_template.bloc2.TeamText.innerText = shuffledArray[index % Nb_item].Placement;
            } else {
                team_template.bloc2.TeamText.innerText = Team_name;
            }
            if (combo2.value == "optionFOR" || combo2.value == "optionCoach") {
                team_template.bloc2.Name_Text.innerText = Nom;
            } else {
                var name_genre = Nom + ' - ' + Genre;
                team_template.bloc2.Name_Text.innerText = name_genre;
            }
        }
        else if (index % nbr_image_display == 2) {
            team_template.bloc3.image.src = image_path;
            if (combo2.value == "optionFOR") {
                team_template.bloc3.TeamText.innerText = shuffledArray[index % Nb_item].Placement;
            } else {
                team_template.bloc3.TeamText.innerText = Team_name;
            }
            if (combo2.value == "optionFOR" || combo2.value == "optionCoach") {
                team_template.bloc3.Name_Text.innerText = Nom;
            } else {
                var name_genre = Nom + ' - ' + Genre;
                team_template.bloc3.Name_Text.innerText = name_genre;
            }
        }
        else if (index % nbr_image_display == 3) {
            team_template.bloc4.image.src = image_path;
            if (combo2.value == "optionFOR") {
                team_template.bloc4.TeamText.innerText = shuffledArray[index % Nb_item].Placement;
            } else {
                team_template.bloc4.TeamText.innerText = Team_name;
            }
            if (combo2.value == "optionFOR" || combo2.value == "optionCoach") {
                team_template.bloc4.Name_Text.innerText = Nom;
            } else {
                var name_genre = Nom + ' - ' + Genre;
                team_template.bloc4.Name_Text.innerText = name_genre;
            }
        }
        else {
            team_template.bloc5.image.src = image_path;
            if (combo2.value == "optionFOR") {
                team_template.bloc5.TeamText.innerText = shuffledArray[index % Nb_item].Placement;
            } else {
                team_template.bloc5.TeamText.innerText = Team_name;
            }
            if (combo2.value == "optionFOR" || combo2.value == "optionCoach") {
                team_template.bloc5.Name_Text.innerText = Nom;
            } else {
                var name_genre = Nom + ' - ' + Genre;
                team_template.bloc5.Name_Text.innerText = name_genre;
            }
        };

        if (Nb_item < 5){
            team_template.bloc5.image.src = "Resource/character-placeholder.png";
            team_template.bloc5.TeamText.innerText = "";
            team_template.bloc5.Name_Text.innerText = "";
        }
        if (Nb_item < 4){
            team_template.bloc4.image.src = "Resource/character-placeholder.png";
            team_template.bloc4.TeamText.innerText = "";
            team_template.bloc4.Name_Text.innerText = "";
        }
        if (Nb_item < 3){
            team_template.bloc3.image.src = "Resource/character-placeholder.png";
            team_template.bloc3.TeamText.innerText = "";
            team_template.bloc3.Name_Text.innerText = "";
        }
        if (Nb_item < 2){
            team_template.bloc2.image.src = "Resource/character-placeholder.png";
            team_template.bloc2.TeamText.innerText = "";
            team_template.bloc2.Name_Text.innerText = "";
        }

        let delay_ms = 3500 / TotalItems
        // Attente de 100 ms avant de passer à l'image suivante
        setTimeout(function () {
            afficherImagesAvecIntervalle(shuffledArray, index + 1, TotalItems, Nb_item, team_template, Team_directory);
        }, delay_ms);
    } else {
        shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 1]
        if (nbr_image_display == 1) {
            
            team_template.bloc1.image.src = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display].Path;
            if (combo2.value == "optionFOR" || combo2.value == "optionCoach") {
                team_template.bloc1.Name_Text.innerText = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display].Nom;
            } else {
                var name_genre = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display].Nom + ' - ' + shuffledArray[Object.keys(shuffledArray).length-1].Genre;
                team_template.bloc1.Name_Text.innerText = name_genre;
            }
            if (combo2.value == "optionFOR") {
                team_template.bloc1.TeamText.innerText = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display].Placement;
            } else {
                team_template.bloc1.TeamText.innerText = Team_directory[shuffledArray[Object.keys(shuffledArray).length - nbr_image_display].Team];
            }

            team_template.bloc2.image.src = "Resource/character-placeholder.png";
            team_template.bloc3.image.src = "Resource/character-placeholder.png";
            team_template.bloc4.image.src = "Resource/character-placeholder.png";
            team_template.bloc5.image.src = "Resource/character-placeholder.png";

            team_template.bloc2.TeamText.innerText = "";
            team_template.bloc3.TeamText.innerText = "";
            team_template.bloc4.TeamText.innerText = "";
            team_template.bloc5.TeamText.innerText = "";

            team_template.bloc2.Name_Text.innerText = "";
            team_template.bloc3.Name_Text.innerText = "";
            team_template.bloc4.Name_Text.innerText = "";
            team_template.bloc5.Name_Text.innerText = "";
        } else if (nbr_image_display == 2) {

            team_template.bloc1.image.src = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display].Path;
            if (combo2.value == "optionFOR" || combo2.value == "optionCoach") {
                team_template.bloc1.Name_Text.innerText = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display].Nom;
            } else {
                var name_genre = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display].Nom + ' - ' + shuffledArray[Object.keys(shuffledArray).length-2].Genre;
                team_template.bloc1.Name_Text.innerText = name_genre;
            }
            if (combo2.value == "optionFOR") {
                team_template.bloc1.TeamText.innerText = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display].Placement;
            } else {
                team_template.bloc1.TeamText.innerText = Team_directory[shuffledArray[Object.keys(shuffledArray).length - nbr_image_display].Team];
            }


            team_template.bloc2.image.src = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 1].Path;
            if (combo2.value == "optionFOR" || combo2.value == "optionCoach") {
                team_template.bloc2.Name_Text.innerText = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 1].Nom;
            } else {
                var name_genre = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 1].Nom + ' - ' + shuffledArray[Object.keys(shuffledArray).length-1].Genre;
                team_template.bloc2.Name_Text.innerText = name_genre;
            }
            if (combo2.value == "optionFOR") {
                team_template.bloc2.TeamText.innerText = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 1].Placement;
            } else {
                team_template.bloc2.TeamText.innerText = Team_directory[shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 1].Team];
            }
            
            team_template.bloc3.image.src = "Resource/character-placeholder.png";
            team_template.bloc4.image.src = "Resource/character-placeholder.png";
            team_template.bloc5.image.src = "Resource/character-placeholder.png";

            team_template.bloc3.TeamText.innerText = "";
            team_template.bloc4.TeamText.innerText = "";
            team_template.bloc5.TeamText.innerText = "";

            team_template.bloc3.Name_Text.innerText = "";
            team_template.bloc4.Name_Text.innerText = "";
            team_template.bloc5.Name_Text.innerText = "";

        } else if(nbr_image_display == 3) {
            
            team_template.bloc1.image.src = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display].Path;
            if (combo2.value == "optionFOR" || combo2.value == "optionCoach") {
                team_template.bloc1.Name_Text.innerText = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display].Nom;
            } else {
                var name_genre = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display].Nom + ' - ' + shuffledArray[Object.keys(shuffledArray).length - 3].Genre;
                team_template.bloc1.Name_Text.innerText = name_genre;
            }
            if (combo2.value == "optionFOR") {
                team_template.bloc1.TeamText.innerText = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display].Placement;
            } else {
                team_template.bloc1.TeamText.innerText = Team_directory[shuffledArray[Object.keys(shuffledArray).length - nbr_image_display].Team];
            }


            team_template.bloc2.image.src = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 1].Path;
            if (combo2.value == "optionFOR" || combo2.value == "optionCoach") {
                team_template.bloc2.Name_Text.innerText = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 1].Nom;
            } else {
                var name_genre = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 1].Nom + ' - ' + shuffledArray[Object.keys(shuffledArray).length - 2].Genre;
                team_template.bloc2.Name_Text.innerText = name_genre;
            }
            if (combo2.value == "optionFOR") {
                team_template.bloc2.TeamText.innerText = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 1].Placement;
            } else {
                team_template.bloc2.TeamText.innerText = Team_directory[shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 1].Team];
            }


            team_template.bloc3.image.src = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 2].Path;
            if (combo2.value == "optionFOR" || combo2.value == "optionCoach") {
                team_template.bloc3.Name_Text.innerText = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 2].Nom;
            } else {
                var name_genre = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 2].Nom + ' - '+ shuffledArray[Object.keys(shuffledArray).length-1].Genre;
                team_template.bloc3.Name_Text.innerText = name_genre;
            }
            if (combo2.value == "optionFOR") {
                team_template.bloc3.TeamText.innerText = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 2].Placement;
            } else {
                team_template.bloc3.TeamText.innerText = Team_directory[shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 2].Team];
            }        
               
            team_template.bloc4.image.src = "Resource/character-placeholder.png";
            team_template.bloc5.image.src = "Resource/character-placeholder.png";
            
            team_template.bloc4.TeamText.innerText = "";
            team_template.bloc5.TeamText.innerText = "";

            team_template.bloc4.Name_Text.innerText = "";
            team_template.bloc5.Name_Text.innerText = "";

        } else if(nbr_image_display == 4) {
            
            team_template.bloc1.image.src = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display].Path;
            team_template.bloc1.TeamText.innerText = Team_directory[shuffledArray[Object.keys(shuffledArray).length - nbr_image_display].Team];
            var name_genre = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display].Nom + ' - ' + shuffledArray[Object.keys(shuffledArray).length - 4].Genre;
            team_template.bloc1.Name_Text.innerText = name_genre;

            team_template.bloc2.image.src = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 1].Path;
            team_template.bloc2.TeamText.innerText = Team_directory[shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 1].Team];
            var name_genre = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 1].Nom + ' - ' + shuffledArray[Object.keys(shuffledArray).length - 3].Genre;
            team_template.bloc2.Name_Text.innerText = name_genre;

            team_template.bloc3.image.src = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 2].Path;
            team_template.bloc3.TeamText.innerText = Team_directory[shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 2].Team];
            var name_genre = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 2].Nom + ' - ' + shuffledArray[Object.keys(shuffledArray).length - 2].Genre;
            team_template.bloc3.Name_Text.innerText = name_genre;

            team_template.bloc4.image.src = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 3].Path;
            team_template.bloc4.TeamText.innerText = Team_directory[shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 3].Team];
            var name_genre = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 3].Nom + ' - ' + shuffledArray[Object.keys(shuffledArray).length - 1].Genre;
            team_template.bloc4.Name_Text.innerText = name_genre;
            
            team_template.bloc5.image.src = "Resource/character-placeholder.png";
            
            team_template.bloc5.TeamText.innerText = "";

            team_template.bloc5.Name_Text.innerText = "";

        } else if(nbr_image_display == 5) {
            

            team_template.bloc1.image.src = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display].Path;
            team_template.bloc1.TeamText.innerText = Team_directory[shuffledArray[Object.keys(shuffledArray).length - nbr_image_display].Team];
            var name_genre = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display].Nom + ' - ' + shuffledArray[Object.keys(shuffledArray).length - 5].Genre;
            team_template.bloc1.Name_Text.innerText = name_genre;

            team_template.bloc2.image.src = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 1].Path;
            team_template.bloc2.TeamText.innerText = Team_directory[shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 1].Team];
            var name_genre = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 1].Nom + ' - ' + shuffledArray[Object.keys(shuffledArray).length - 4].Genre;
            team_template.bloc2.Name_Text.innerText = name_genre;

            team_template.bloc3.image.src = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 2].Path;
            team_template.bloc3.TeamText.innerText = Team_directory[shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 2].Team];
            var name_genre = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 2].Nom + ' - ' + shuffledArray[Object.keys(shuffledArray).length - 3].Genre;
            team_template.bloc3.Name_Text.innerText = name_genre;



            team_template.bloc4.image.src = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 3].Path;
            team_template.bloc4.TeamText.innerText = Team_directory[shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 3].Team];
            var name_genre = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 3].Nom + ' - ' + shuffledArray[Object.keys(shuffledArray).length - 2].Genre;
            team_template.bloc4.Name_Text.innerText = name_genre;


            team_template.bloc5.image.src = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 4].Path;
            team_template.bloc5.TeamText.innerText = Team_directory[shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 4].Team];
            var name_genre = shuffledArray[Object.keys(shuffledArray).length - nbr_image_display + 4].Nom + ' - ' + shuffledArray[Object.keys(shuffledArray).length - 1].Genre;
            team_template.bloc5.Name_Text.innerText = name_genre;

        }
        buttonSelected1.disabled = false;
        buttonSelected2.disabled = false;
        buttonSelected3.disabled = false;
        buttonSelected4.disabled = false;
        buttonSelected5.disabled = false;
        buttonSelected1.classList.remove("disabled-button");
        buttonSelected2.classList.remove("disabled-button");
        buttonSelected3.classList.remove("disabled-button");
        buttonSelected4.classList.remove("disabled-button");
        buttonSelected5.classList.remove("disabled-button");
        buttonSelected1.style.display = 'block';
        buttonSelected2.style.display = 'block';
        buttonSelected3.style.display = 'block';
        buttonSelected4.style.display = 'block';
        buttonSelected5.style.display = 'block';
    }
}

var buttonSelected1 = document.getElementById("buttonSelected1");
buttonSelected1.addEventListener("click", function () {

    startButton.disabled = false;
    startButton.classList.remove("disabled-button");

    combo.disabled = false;
    combo2.disabled = false;

    console.log("selectedButton1")
    image_selected = document.getElementById("IMG_Charcter_1");

    
    let variableOffset
    if (combo2.value == "optionFOR" || combo2.value == "optionCoach" || combo.value == "optionIEBETAVR") {
        variableOffset = 2
    } else {
        variableOffset = 0
    }

    if (Object.keys(shuffledArray).length == 4){
        variableOffset = 1
    } else if (Object.keys(shuffledArray).length == 3){
        variableOffset = 2
    } else if (Object.keys(shuffledArray).length == 2){
        variableOffset = 3
    } else if (Object.keys(shuffledArray).length == 1){
        variableOffset = 4
    } 
    
    
    switch (combo2.value) {
        case "optionFOR":
            
            for (let object_pointeur in CurrentList.Formation) {
                if (CurrentList.Formation[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 5 + variableOffset]) {
                    console.log("item deleted :", CurrentList.Formation[object_pointeur])
                    selectedCharacter(image_selected,CurrentList.Formation[object_pointeur].Nom)
                    delete CurrentList.Formation[object_pointeur]
                    break
                }
            }
            break;

        case "optionCoach":

            for (let object_pointeur in CurrentList.Coach) {
                if (CurrentList.Coach[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 5 + variableOffset]) {
                    console.log("item deleted :", CurrentList.Coach[object_pointeur])
                    selectedCharacter(image_selected,CurrentList.Coach[object_pointeur].Nom)
                    delete CurrentList.Coach[object_pointeur]
                    break
                }
            }
            break;
        case "optionGK":

            for (let object_pointeur in CurrentList.GK) {
                if (CurrentList.GK[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 5 + variableOffset]) {
                    console.log("item deleted :", CurrentList.GK[object_pointeur])
                    selectedCharacter(image_selected,CurrentList.GK[object_pointeur].Nom)
                    delete CurrentList.GK[object_pointeur]
                    break
                }
            }
            break;
        case "optionDF":

            for (let object_pointeur in CurrentList.DF) {
                if (CurrentList.DF[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 5 + variableOffset]) {
                    console.log("item deleted :", CurrentList.DF[object_pointeur])
                    selectedCharacter(image_selected,CurrentList.DF[object_pointeur].Nom)
                    delete CurrentList.DF[object_pointeur]
                    break
                }
            }
            break;
        case "optionMF":

            for (let object_pointeur in CurrentList.MF) {
                if (CurrentList.MF[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 5 + variableOffset]) {
                    console.log("item deleted :", CurrentList.MF[object_pointeur])
                    selectedCharacter(image_selected,CurrentList.MF[object_pointeur].Nom)
                    delete CurrentList.MF[object_pointeur]
                    break
                }
            }
            break;
        case "optionFW":

            for (let object_pointeur in CurrentList.FW) {
                if (CurrentList.FW[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 5 + variableOffset]) {
                    console.log("item deleted :", CurrentList.FW[object_pointeur])
                    selectedCharacter(image_selected,CurrentList.FW[object_pointeur].Nom)
                    delete CurrentList.FW[object_pointeur]
                    break
                }
            }
            break;
    }



    var buttonSelected1 = document.getElementById("buttonSelected1");
    var buttonSelected2 = document.getElementById("buttonSelected2");
    var buttonSelected3 = document.getElementById("buttonSelected3");
    var buttonSelected4 = document.getElementById("buttonSelected4");
    var buttonSelected5 = document.getElementById("buttonSelected5");
    buttonSelected1.disabled = true;
    buttonSelected2.disabled = true;
    buttonSelected3.disabled = true;
    buttonSelected4.disabled = true;
    buttonSelected5.disabled = true;
    buttonSelected1.classList.add("disabled-button");
    buttonSelected2.classList.add("disabled-button");
    buttonSelected3.classList.add("disabled-button");
    buttonSelected4.classList.add("disabled-button");
    buttonSelected5.classList.add("disabled-button");


    var IMG_Charcter_2 = document.getElementById("IMG_Charcter_2");
    var IMG_Charcter_3 = document.getElementById("IMG_Charcter_3");
    var IMG_Charcter_4 = document.getElementById("IMG_Charcter_4");
    var IMG_Charcter_5 = document.getElementById("IMG_Charcter_5");
    IMG_Charcter_2.src = "Resource/character-placeholder.png";
    IMG_Charcter_3.src = "Resource/character-placeholder.png";
    IMG_Charcter_4.src = "Resource/character-placeholder.png";
    IMG_Charcter_5.src = "Resource/character-placeholder.png";

    var Team_Text_2 = document.getElementById("Team_Text_2");
    var Team_Text_3 = document.getElementById("Team_Text_3");
    var Team_Text_4 = document.getElementById("Team_Text_4");
    var Team_Text_5 = document.getElementById("Team_Text_5");
    Team_Text_2.innerText = "";
    Team_Text_3.innerText = "";
    Team_Text_4.innerText = "";
    Team_Text_5.innerText = "";

    var Name_Text_2 = document.getElementById("Name_Text_2");
    var Name_Text_3 = document.getElementById("Name_Text_3");
    var Name_Text_4 = document.getElementById("Name_Text_4");
    var Name_Text_5 = document.getElementById("Name_Text_5");
    Name_Text_2.innerText = "";
    Name_Text_3.innerText = "";
    Name_Text_4.innerText = "";
    Name_Text_5.innerText = "";
});

var buttonSelected2 = document.getElementById("buttonSelected2");
buttonSelected2.addEventListener("click", function () {
    combo.disabled = false;
    combo2.disabled = false;

    startButton.disabled = false;
    startButton.classList.remove("disabled-button");
    

    console.log("selectedButton2")
    image_selected = document.getElementById("IMG_Charcter_2");
    
    let variableOffset
    if (combo2.value == "optionFOR" || combo2.value == "optionCoach" || combo.value == "optionIEBETAVR") {
        variableOffset = 2
    } else {
        variableOffset = 0
    }
    
    if (Object.keys(shuffledArray).length == 2){
        variableOffset = 3
    } 

    if (Object.keys(shuffledArray).length == 4){
        variableOffset = 1
        if (combo2.value == "optionFOR" || combo2.value == "optionCoach" || combo.value == "optionIEBETAVR") {
            variableOffset += 1
        } 
    } else if (Object.keys(shuffledArray).length == 3){
        variableOffset = 2
        if (combo2.value == "optionFOR" || combo2.value == "optionCoach" || combo.value == "optionIEBETAVR") {
        } 
    } else if (Object.keys(shuffledArray).length == 2){
        variableOffset = 3
        if (combo2.value == "optionFOR" || combo2.value == "optionCoach" || combo.value == "optionIEBETAVR") {
        } 
    }
    //    delete shuffledArray[Object.keys(shuffledArray).length-5 + variableOffset]
    
    
    switch (combo2.value) {
        case "optionFOR":
            
            for (let object_pointeur in CurrentList.Formation) {
                if (CurrentList.Formation[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 4 + variableOffset]) {
                    console.log("item deleted :", CurrentList.Formation[object_pointeur])
                    selectedCharacter(image_selected, CurrentList.Formation[object_pointeur].Nom)
                    delete CurrentList.Formation[object_pointeur]
                    break
                }
            }
            break;

        case "optionCoach":

            for (let object_pointeur in CurrentList.Coach) {
                if (CurrentList.Coach[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 4 + variableOffset]) {
                    console.log("item deleted :", CurrentList.Coach[object_pointeur])
                    selectedCharacter(image_selected, CurrentList.Coach[object_pointeur].Nom)
                    delete CurrentList.Coach[object_pointeur]
                    break
                }
            }
            break;
        case "optionGK":

            for (let object_pointeur in CurrentList.GK) {
                if (CurrentList.GK[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 4 + variableOffset]) {
                    console.log("item deleted :", CurrentList.GK[object_pointeur])
                    selectedCharacter(image_selected, CurrentList.GK[object_pointeur].Nom)
                    delete CurrentList.GK[object_pointeur]
                    break
                }
            }
            break;
        case "optionDF":

            for (let object_pointeur in CurrentList.DF) {
                if (CurrentList.DF[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 4 + variableOffset]) {
                    console.log("item deleted :", CurrentList.DF[object_pointeur])
                    selectedCharacter(image_selected, CurrentList.DF[object_pointeur].Nom)
                    delete CurrentList.DF[object_pointeur]
                    break
                }
            }
            break;
        case "optionMF":

            for (let object_pointeur in CurrentList.MF) {
                if (CurrentList.MF[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 4 + variableOffset]) {
                    console.log("item deleted :", CurrentList.MF[object_pointeur])
                    selectedCharacter(image_selected, CurrentList.MF[object_pointeur].Nom)
                    delete CurrentList.MF[object_pointeur]
                    break
                }
            }
            break;
        case "optionFW":

            for (let object_pointeur in CurrentList.FW) {
                if (CurrentList.FW[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 4 + variableOffset]) {
                    console.log("item deleted :", CurrentList.FW[object_pointeur])
                    selectedCharacter(image_selected, CurrentList.FW[object_pointeur].Nom)
                    delete CurrentList.FW[object_pointeur]
                    break
                }
            }
            break;
    }



    var buttonSelected1 = document.getElementById("buttonSelected1");
    var buttonSelected2 = document.getElementById("buttonSelected2");
    var buttonSelected3 = document.getElementById("buttonSelected3");
    var buttonSelected4 = document.getElementById("buttonSelected4");
    var buttonSelected5 = document.getElementById("buttonSelected5");
    buttonSelected1.disabled = true;
    buttonSelected2.disabled = true;
    buttonSelected3.disabled = true;
    buttonSelected4.disabled = true;
    buttonSelected5.disabled = true;
    buttonSelected1.classList.add("disabled-button");
    buttonSelected2.classList.add("disabled-button");
    buttonSelected3.classList.add("disabled-button");
    buttonSelected4.classList.add("disabled-button");
    buttonSelected5.classList.add("disabled-button");


    var IMG_Charcter_1 = document.getElementById("IMG_Charcter_1");
    var IMG_Charcter_3 = document.getElementById("IMG_Charcter_3");
    var IMG_Charcter_4 = document.getElementById("IMG_Charcter_4");
    var IMG_Charcter_5 = document.getElementById("IMG_Charcter_5");
    IMG_Charcter_1.src = "Resource/character-placeholder.png";
    IMG_Charcter_3.src = "Resource/character-placeholder.png";
    IMG_Charcter_4.src = "Resource/character-placeholder.png";
    IMG_Charcter_5.src = "Resource/character-placeholder.png";

    var Team_Text_1 = document.getElementById("Team_Text_1");
    var Team_Text_3 = document.getElementById("Team_Text_3");
    var Team_Text_4 = document.getElementById("Team_Text_4");
    var Team_Text_5 = document.getElementById("Team_Text_5");
    Team_Text_1.innerText = "";
    Team_Text_3.innerText = "";
    Team_Text_4.innerText = "";
    Team_Text_5.innerText = "";

    var Name_Text_1 = document.getElementById("Name_Text_1");
    var Name_Text_3 = document.getElementById("Name_Text_3");
    var Name_Text_4 = document.getElementById("Name_Text_4");
    var Name_Text_5 = document.getElementById("Name_Text_5");
    Name_Text_1.innerText = "";
    Name_Text_3.innerText = "";
    Name_Text_4.innerText = "";
    Name_Text_5.innerText = "";
});

var buttonSelected3 = document.getElementById("buttonSelected3");
buttonSelected3.addEventListener("click", function () {
    combo.disabled = false;
    combo2.disabled = false;

    startButton.disabled = false;
    startButton.classList.remove("disabled-button");
    

    console.log("selectedButton3")
    image_selected = document.getElementById("IMG_Charcter_3");
    
    let variableOffset
    if (combo2.value == "optionFOR" || combo2.value == "optionCoach" || combo.value == "optionIEBETAVR") {
        variableOffset = 2
    } else {
        variableOffset = 0
    }

    if (Object.keys(shuffledArray).length == 4){
        variableOffset = 1
        if (combo2.value == "optionFOR" || combo2.value == "optionCoach" || combo.value == "optionIEBETAVR") {
            variableOffset += 1
        } 
    } else if (Object.keys(shuffledArray).length == 3){
        variableOffset = 2
    }
    
    switch (combo2.value) {
        case "optionFOR":
            
            for (let object_pointeur in CurrentList.Formation) {
                if (CurrentList.Formation[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 3 + variableOffset]) {
                    console.log("item deleted :", CurrentList.Formation[object_pointeur])
                    selectedCharacter(image_selected, CurrentList.Formation[object_pointeur].Nom)
                    delete CurrentList.Formation[object_pointeur]
                    break
                }
            }
            break;

        case "optionCoach":

            for (let object_pointeur in CurrentList.Coach) {
                if (CurrentList.Coach[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 3 + variableOffset]) {
                    console.log("item deleted :", CurrentList.Coach[object_pointeur])
                    selectedCharacter(image_selected, CurrentList.Coach[object_pointeur].Nom)
                    delete CurrentList.Coach[object_pointeur]
                    break
                }
            }
            break;
        case "optionGK":

            for (let object_pointeur in CurrentList.GK) {
                if (CurrentList.GK[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 3 + variableOffset]) {
                    console.log("item deleted :", CurrentList.GK[object_pointeur])
                    selectedCharacter(image_selected, CurrentList.GK[object_pointeur].Nom)
                    delete CurrentList.GK[object_pointeur]
                    break
                }
            }
            break;
        case "optionDF":

            for (let object_pointeur in CurrentList.DF) {
                if (CurrentList.DF[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 3 + variableOffset]) {
                    console.log("item deleted :", CurrentList.DF[object_pointeur])
                    selectedCharacter(image_selected, CurrentList.DF[object_pointeur].Nom)
                    delete CurrentList.DF[object_pointeur]
                    break
                }
            }
            break;
        case "optionMF":

            for (let object_pointeur in CurrentList.MF) {
                if (CurrentList.MF[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 3 + variableOffset]) {
                    console.log("item deleted :", CurrentList.MF[object_pointeur])
                    selectedCharacter(image_selected, CurrentList.MF[object_pointeur].Nom)
                    delete CurrentList.MF[object_pointeur]
                    break
                }
            }
            break;
        case "optionFW":

            for (let object_pointeur in CurrentList.FW) {
                if (CurrentList.FW[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 3 + variableOffset]) {
                    console.log("item deleted :", CurrentList.FW[object_pointeur])
                    selectedCharacter(image_selected, CurrentList.FW[object_pointeur].Nom)
                    delete CurrentList.FW[object_pointeur]
                    break
                }
            }
            break;
    }

    var buttonSelected1 = document.getElementById("buttonSelected1");
    var buttonSelected2 = document.getElementById("buttonSelected2");
    var buttonSelected3 = document.getElementById("buttonSelected3");
    var buttonSelected4 = document.getElementById("buttonSelected4");
    var buttonSelected5 = document.getElementById("buttonSelected5");
    buttonSelected1.disabled = true;
    buttonSelected2.disabled = true;
    buttonSelected3.disabled = true;
    buttonSelected4.disabled = true;
    buttonSelected5.disabled = true;
    buttonSelected1.classList.add("disabled-button");
    buttonSelected2.classList.add("disabled-button");
    buttonSelected3.classList.add("disabled-button");
    buttonSelected4.classList.add("disabled-button");
    buttonSelected5.classList.add("disabled-button");


    var IMG_Charcter_1 = document.getElementById("IMG_Charcter_1");
    var IMG_Charcter_2 = document.getElementById("IMG_Charcter_2");
    var IMG_Charcter_4 = document.getElementById("IMG_Charcter_4");
    var IMG_Charcter_5 = document.getElementById("IMG_Charcter_5");
    IMG_Charcter_1.src = "Resource/character-placeholder.png";
    IMG_Charcter_2.src = "Resource/character-placeholder.png";
    IMG_Charcter_4.src = "Resource/character-placeholder.png";
    IMG_Charcter_5.src = "Resource/character-placeholder.png";

    var Team_Text_1 = document.getElementById("Team_Text_1");
    var Team_Text_2 = document.getElementById("Team_Text_2");
    var Team_Text_4 = document.getElementById("Team_Text_4");
    var Team_Text_5 = document.getElementById("Team_Text_5");
    Team_Text_1.innerText = "";
    Team_Text_2.innerText = "";
    Team_Text_4.innerText = "";
    Team_Text_5.innerText = "";

    var Name_Text_1 = document.getElementById("Name_Text_1");
    var Name_Text_2 = document.getElementById("Name_Text_2");
    var Name_Text_4 = document.getElementById("Name_Text_4");
    var Name_Text_5 = document.getElementById("Name_Text_5");
    Name_Text_1.innerText = "";
    Name_Text_2.innerText = "";
    Name_Text_4.innerText = "";
    Name_Text_5.innerText = "";
});

var buttonSelected4 = document.getElementById("buttonSelected4");
buttonSelected4.addEventListener("click", function () {
    combo.disabled = false;
    combo2.disabled = false;

    startButton.disabled = false;
    startButton.classList.remove("disabled-button");

    console.log("selectedButton4")
    image_selected = document.getElementById("IMG_Charcter_4");
    
    let variableOffset = 0
    if (Object.keys(shuffledArray).length == 4){
        variableOffset = 1
    }

    switch (combo2.value) {
        case "optionFOR":
            
            for (let object_pointeur in CurrentList.Formation) {
                if (CurrentList.Formation[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 2 + variableOffset]) {
                    console.log("item deleted :", CurrentList.Formation[object_pointeur])
                    selectedCharacter(image_selected, CurrentList.Formation[object_pointeur].Nom)
                    delete CurrentList.Formation[object_pointeur]
                    break
                }
            }
            break;

        case "optionCoach":

            for (let object_pointeur in CurrentList.Coach) {
                if (CurrentList.Coach[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 2 + variableOffset]) {
                    console.log("item deleted :", CurrentList.Coach[object_pointeur])
                    selectedCharacter(image_selected, CurrentList.Coach[object_pointeur].Nom)
                    delete CurrentList.Coach[object_pointeur]
                    break
                }
            }
            break;
        case "optionGK":

            for (let object_pointeur in CurrentList.GK) {
                if (CurrentList.GK[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 2 + variableOffset]) {
                    console.log("item deleted :", CurrentList.GK[object_pointeur])
                    selectedCharacter(image_selected, CurrentList.GK[object_pointeur].Nom)
                    delete CurrentList.GK[object_pointeur]
                    break
                }
            }
            break;
        case "optionDF":

            for (let object_pointeur in CurrentList.DF) {
                if (CurrentList.DF[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 2 + variableOffset]) {
                    console.log("item deleted :", CurrentList.DF[object_pointeur])
                    selectedCharacter(image_selected, CurrentList.DF[object_pointeur].Nom)
                    delete CurrentList.DF[object_pointeur]
                    break
                }
            }
            break;
        case "optionMF":

            for (let object_pointeur in CurrentList.MF) {
                if (CurrentList.MF[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 2 + variableOffset]) {
                    console.log("item deleted :", CurrentList.MF[object_pointeur])
                    selectedCharacter(image_selected, CurrentList.MF[object_pointeur].Nom)
                    delete CurrentList.MF[object_pointeur]
                    break
                }
            }
            break;
        case "optionFW":

            for (let object_pointeur in CurrentList.FW) {
                if (CurrentList.FW[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 2 + variableOffset]) {
                    console.log("item deleted :", CurrentList.FW[object_pointeur])
                    selectedCharacter(image_selected, CurrentList.FW[object_pointeur].Nom)
                    delete CurrentList.FW[object_pointeur]
                    break
                }
            }
            break;
    }

    var buttonSelected1 = document.getElementById("buttonSelected1");
    var buttonSelected2 = document.getElementById("buttonSelected2");
    var buttonSelected3 = document.getElementById("buttonSelected3");
    var buttonSelected4 = document.getElementById("buttonSelected4");
    var buttonSelected5 = document.getElementById("buttonSelected5");
    buttonSelected1.disabled = true;
    buttonSelected2.disabled = true;
    buttonSelected3.disabled = true;
    buttonSelected4.disabled = true;
    buttonSelected5.disabled = true;
    buttonSelected1.classList.add("disabled-button");
    buttonSelected2.classList.add("disabled-button");
    buttonSelected3.classList.add("disabled-button");
    buttonSelected4.classList.add("disabled-button");
    buttonSelected5.classList.add("disabled-button");


    var IMG_Charcter_1 = document.getElementById("IMG_Charcter_1");
    var IMG_Charcter_2 = document.getElementById("IMG_Charcter_2");
    var IMG_Charcter_3 = document.getElementById("IMG_Charcter_3");
    var IMG_Charcter_5 = document.getElementById("IMG_Charcter_5");
    IMG_Charcter_1.src = "Resource/character-placeholder.png";
    IMG_Charcter_2.src = "Resource/character-placeholder.png";
    IMG_Charcter_3.src = "Resource/character-placeholder.png";
    IMG_Charcter_5.src = "Resource/character-placeholder.png";

    var Team_Text_1 = document.getElementById("Team_Text_1");
    var Team_Text_2 = document.getElementById("Team_Text_2");
    var Team_Text_3 = document.getElementById("Team_Text_3");
    var Team_Text_5 = document.getElementById("Team_Text_5");
    Team_Text_1.innerText = "";
    Team_Text_2.innerText = "";
    Team_Text_3.innerText = "";
    Team_Text_5.innerText = "";

    var Name_Text_1 = document.getElementById("Name_Text_1");
    var Name_Text_2 = document.getElementById("Name_Text_2");
    var Name_Text_3 = document.getElementById("Name_Text_3");
    var Name_Text_5 = document.getElementById("Name_Text_5");
    Name_Text_1.innerText = "";
    Name_Text_2.innerText = "";
    Name_Text_3.innerText = "";
    Name_Text_5.innerText = "";
});

var buttonSelected5 = document.getElementById("buttonSelected5");
buttonSelected5.addEventListener("click", function () {
    combo.disabled = false;
    combo2.disabled = false;

    startButton.disabled = false;
    startButton.classList.remove("disabled-button");

    console.log("selectedButton5")
    image_selected = document.getElementById("IMG_Charcter_5");
    switch (combo2.value) {
        case "optionFOR":
            
            for (let object_pointeur in CurrentList.Formation) {
                if (CurrentList.Formation[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 1]) {
                    console.log("item deleted :", CurrentList.Formation[object_pointeur])
                    selectedCharacter(image_selected, CurrentList.Formation[object_pointeur].Nom)
                    delete CurrentList.Formation[object_pointeur]
                    break
                }
            }
            break;

        case "optionCoach":

            for (let object_pointeur in CurrentList.Coach) {
                if (CurrentList.Coach[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 1]) {
                    console.log("item deleted :", CurrentList.Coach[object_pointeur])
                    selectedCharacter(image_selected, CurrentList.Coach[object_pointeur].Nom)
                    delete CurrentList.Coach[object_pointeur]
                    break
                }
            }
            break;
        case "optionGK":

            for (let object_pointeur in CurrentList.GK) {
                if (CurrentList.GK[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 1]) {
                    console.log("item deleted :", CurrentList.GK[object_pointeur])
                    selectedCharacter(image_selected, CurrentList.GK[object_pointeur].Nom)
                    delete CurrentList.GK[object_pointeur]
                    break
                }
            }
            break;
        case "optionDF":

            for (let object_pointeur in CurrentList.DF) {
                if (CurrentList.DF[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 1]) {
                    console.log("item deleted :", CurrentList.DF[object_pointeur])
                    selectedCharacter(image_selected, CurrentList.DF[object_pointeur].Nom)
                    delete CurrentList.DF[object_pointeur]
                    break
                }
            }
            break;
        case "optionMF":

            for (let object_pointeur in CurrentList.MF) {
                if (CurrentList.MF[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 1]) {
                    console.log("item deleted :", CurrentList.MF[object_pointeur])
                    selectedCharacter(image_selected, CurrentList.MF[object_pointeur].Nom)
                    delete CurrentList.MF[object_pointeur]
                    break
                }
            }
            break;
        case "optionFW":

            for (let object_pointeur in CurrentList.FW) {
                if (CurrentList.FW[object_pointeur] == shuffledArray[Object.keys(shuffledArray).length - 1]) {
                    console.log("item deleted :", CurrentList.FW[object_pointeur])
                    selectedCharacter(image_selected, CurrentList.FW[object_pointeur].Nom)
                    delete CurrentList.FW[object_pointeur]
                    break
                }
            }
            break;
    }

    var buttonSelected1 = document.getElementById("buttonSelected1");
    var buttonSelected2 = document.getElementById("buttonSelected2");
    var buttonSelected3 = document.getElementById("buttonSelected3");
    var buttonSelected4 = document.getElementById("buttonSelected4");
    var buttonSelected5 = document.getElementById("buttonSelected5");
    buttonSelected1.disabled = true;
    buttonSelected2.disabled = true;
    buttonSelected3.disabled = true;
    buttonSelected4.disabled = true;
    buttonSelected5.disabled = true;
    buttonSelected1.classList.add("disabled-button");
    buttonSelected2.classList.add("disabled-button");
    buttonSelected3.classList.add("disabled-button");
    buttonSelected4.classList.add("disabled-button");
    buttonSelected5.classList.add("disabled-button");


    var IMG_Charcter_1 = document.getElementById("IMG_Charcter_1");
    var IMG_Charcter_2 = document.getElementById("IMG_Charcter_2");
    var IMG_Charcter_3 = document.getElementById("IMG_Charcter_3");
    var IMG_Charcter_4 = document.getElementById("IMG_Charcter_4");
    IMG_Charcter_1.src = "Resource/character-placeholder.png";
    IMG_Charcter_2.src = "Resource/character-placeholder.png";
    IMG_Charcter_3.src = "Resource/character-placeholder.png";
    IMG_Charcter_4.src = "Resource/character-placeholder.png";

    var Team_Text_1 = document.getElementById("Team_Text_1");
    var Team_Text_2 = document.getElementById("Team_Text_2");
    var Team_Text_3 = document.getElementById("Team_Text_3");
    var Team_Text_4 = document.getElementById("Team_Text_4");
    Team_Text_1.innerText = "";
    Team_Text_2.innerText = "";
    Team_Text_3.innerText = "";
    Team_Text_4.innerText = "";

    var Name_Text_1 = document.getElementById("Name_Text_1");
    var Name_Text_2 = document.getElementById("Name_Text_2");
    var Name_Text_3 = document.getElementById("Name_Text_3");
    var Name_Text_4 = document.getElementById("Name_Text_4");
    Name_Text_1.innerText = "";
    Name_Text_2.innerText = "";
    Name_Text_3.innerText = "";
    Name_Text_4.innerText = "";
});

function selectedCharacter(SelectedImage, SelectedNom) {
    if (combo2.value == "optionFOR") {
        var Your_Team_Formation = document.getElementById("Your_Team_Formation");
        Your_Team_Formation.src = SelectedImage.src;
    }

    else if (combo2.value == "optionCoach") {
        var Your_Team_Coach = document.getElementById("Your_Team_Coach");
        Your_Team_Coach.src = SelectedImage.src;
    }

    else {
        counter += 1
        if (counter == 1) {
            var pic1_selected = document.getElementById("pic1_selected");
            pic1_selected.src = SelectedImage.src;
            name1_status = true;
            var name = document.getElementById('name1_selected');
            name.innerText = SelectedNom

        }
        if (counter == 2) {
            var pic2_selected = document.getElementById("pic2_selected");
            pic2_selected.src = SelectedImage.src;
            name2_status = true;
            var name = document.getElementById('name2_selected');
            name.innerText = SelectedNom
        }

        if (counter == 3) {
            var pic3_selected = document.getElementById("pic3_selected");
            pic3_selected.src = SelectedImage.src;
            name3_status = true;
            var name = document.getElementById('name3_selected');
            name.innerText = SelectedNom
        }

        if (counter == 4) {
            var pic4_selected = document.getElementById("pic4_selected");
            pic4_selected.src = SelectedImage.src;
            name4_status = true;
            var name = document.getElementById('name4_selected');
            name.innerText = SelectedNom
        }

        if (counter == 5) {
            var pic5_selected = document.getElementById("pic5_selected");
            pic5_selected.src = SelectedImage.src;
            name5_status = true;
            var name = document.getElementById('name5_selected');
            name.innerText = SelectedNom
        }

        if (counter == 6) {
            var pic6_selected = document.getElementById("pic6_selected");
            pic6_selected.src = SelectedImage.src;
            name6_status = true;
            var name = document.getElementById('name6_selected');
            name.innerText = SelectedNom
        }

        if (counter == 7) {
            var pic7_selected = document.getElementById("pic7_selected");
            pic7_selected.src = SelectedImage.src;
            name7_status = true;
            var name = document.getElementById('name7_selected');
            name.innerText = SelectedNom
        }

        if (counter == 8) {
            var pic8_selected = document.getElementById("pic8_selected");
            pic8_selected.src = SelectedImage.src;
            name8_status = true;
            var name = document.getElementById('name8_selected');
            name.innerText = SelectedNom
        }

        if (counter == 9) {
            var pic9_selected = document.getElementById("pic9_selected");
            pic9_selected.src = SelectedImage.src;
            name9_status = true;
            var name = document.getElementById('name9_selected');
            name.innerText = SelectedNom
        }

        if (counter == 10) {
            var pic10_selected = document.getElementById("pic10_selected");
            name10_status = true;
            pic10_selected.src = SelectedImage.src;
            var name = document.getElementById('name10_selected');
            name.innerText = SelectedNom
        }

        if (counter == 11) {
            var pic11_selected = document.getElementById("pic11_selected");
            pic11_selected.src = SelectedImage.src;
            name11_status = true;
            var name = document.getElementById('name11_selected');
            name.innerText = SelectedNom
        }

        if (counter == 12) {
            var pic12_selected = document.getElementById("pic12_selected");
            pic12_selected.src = SelectedImage.src;
            name12_status = true;
            var name = document.getElementById('name12_selected');
            name.innerText = SelectedNom
        }

        if (counter == 13) {
            var pic13_selected = document.getElementById("pic13_selected");
            pic13_selected.src = SelectedImage.src;
            name13_status = true;
            var name = document.getElementById('name13_selected');
            name.innerText = SelectedNom
        }

        if (counter == 14) {
            var pic14_selected = document.getElementById("pic14_selected");
            pic14_selected.src = SelectedImage.src;
            name14_status = true;
            var name = document.getElementById('name14_selected');
            name.innerText = SelectedNom
        }

        if (counter == 15) {
            var pic15_selected = document.getElementById("pic15_selected");
            pic15_selected.src = SelectedImage.src;
            name15_status = true;
            var name = document.getElementById('name15_selected');
            name.innerText = SelectedNom
        }

        if (counter == 16) {
            var pic16_selected = document.getElementById("pic16_selected");
            pic16_selected.src = SelectedImage.src;
            name16_status = true;
            var name = document.getElementById('name16_selected');
            name.innerText = SelectedNom
        }

    }

}

var refresh8button = document.getElementById("refresh-button");
refresh8button.addEventListener("click", function () {
    init()

    name1_status = false; 
    name2_status = false;
    name3_status = false;
    name4_status = false;
    name5_status = false;
    name6_status = false;
    name7_status = false;
    name8_status = false;
    name9_status = false;
    name10_status = false;
    name11_status = false;
    name12_status = false;
    name13_status = false;
    name14_status = false;
    name15_status = false;
    name16_status = false;

    counter = 0
    combo.disabled = false;
    combo2.disabled = false;

    var Your_Team_Formation = document.getElementById("Your_Team_Formation");
    Your_Team_Formation.src = "Resource\\field.svg";


    var Your_Team_Coach = document.getElementById("Your_Team_Coach");
    Your_Team_Coach.src = "Resource\\character-placeholder.png";

    var pic1_selected = document.getElementById("pic1_selected");
    pic1_selected.src = "Resource\\character-placeholder.png";
    var pic2_selected = document.getElementById("pic2_selected");
    pic2_selected.src = "Resource\\character-placeholder.png";
    var pic3_selected = document.getElementById("pic3_selected");
    pic3_selected.src = "Resource\\character-placeholder.png";
    var pic4_selected = document.getElementById("pic4_selected");
    pic4_selected.src = "Resource\\character-placeholder.png";
    var pic5_selected = document.getElementById("pic5_selected");
    pic5_selected.src = "Resource\\character-placeholder.png";
    var pic6_selected = document.getElementById("pic6_selected");
    pic6_selected.src = "Resource\\character-placeholder.png";
    var pic7_selected = document.getElementById("pic7_selected");
    pic7_selected.src = "Resource\\character-placeholder.png";
    var pic8_selected = document.getElementById("pic8_selected");
    pic8_selected.src = "Resource\\character-placeholder.png";
    var pic9_selected = document.getElementById("pic9_selected");
    pic9_selected.src = "Resource\\character-placeholder.png";
    var pic10_selected = document.getElementById("pic10_selected");
    pic10_selected.src = "Resource\\character-placeholder.png";
    var pic11_selected = document.getElementById("pic11_selected");
    pic11_selected.src = "Resource\\character-placeholder.png";
    var pic12_selected = document.getElementById("pic12_selected");
    pic12_selected.src = "Resource\\character-placeholder.png";
    var pic13_selected = document.getElementById("pic13_selected");
    pic13_selected.src = "Resource\\character-placeholder.png";
    var pic14_selected = document.getElementById("pic14_selected");
    pic14_selected.src = "Resource\\character-placeholder.png";
    var pic15_selected = document.getElementById("pic15_selected");
    pic15_selected.src = "Resource\\character-placeholder.png";
    var pic16_selected = document.getElementById("pic16_selected");
    pic16_selected.src = "Resource\\character-placeholder.png";

    var IMG_Charcter_1 = document.getElementById("IMG_Charcter_1");
    var IMG_Charcter_2 = document.getElementById("IMG_Charcter_2");
    var IMG_Charcter_3 = document.getElementById("IMG_Charcter_3");
    var IMG_Charcter_4 = document.getElementById("IMG_Charcter_4");
    var IMG_Charcter_5 = document.getElementById("IMG_Charcter_5");
    IMG_Charcter_1.src = "Resource/character-placeholder.png";
    IMG_Charcter_2.src = "Resource/character-placeholder.png";
    IMG_Charcter_3.src = "Resource/character-placeholder.png";
    IMG_Charcter_4.src = "Resource/character-placeholder.png";
    IMG_Charcter_5.src = "Resource/character-placeholder.png";

    var Team_Text_1 = document.getElementById("Team_Text_1");
    var Team_Text_2 = document.getElementById("Team_Text_2");
    var Team_Text_3 = document.getElementById("Team_Text_3");
    var Team_Text_4 = document.getElementById("Team_Text_4");
    var Team_Text_5 = document.getElementById("Team_Text_5");
    Team_Text_1.innerText = "";
    Team_Text_2.innerText = "";
    Team_Text_3.innerText = "";
    Team_Text_4.innerText = "";
    Team_Text_5.innerText = "";

    var Name_Text_1 = document.getElementById("Name_Text_1");
    var Name_Text_2 = document.getElementById("Name_Text_2");
    var Name_Text_3 = document.getElementById("Name_Text_3");
    var Name_Text_4 = document.getElementById("Name_Text_4");
    var Name_Text_5 = document.getElementById("Name_Text_5");
    Name_Text_1.innerText = "";
    Name_Text_2.innerText = "";
    Name_Text_3.innerText = "";
    Name_Text_4.innerText = "";
    Name_Text_5.innerText = "";

    selectedOptionC1 = combo.value;
    switch (selectedOptionC1) {
        case "optionIE1":
            CurrentSaison = IE_1;
            break;
        case "optionIE2":
            CurrentSaison = IE_2;
            break;
        case "optionIE3":
            CurrentSaison = IE_3;
            break;
        case "optionIEGO":
            CurrentSaison = IE_GO;
            break;
        case "optionIEGOCS":
            CurrentSaison = IE_GOCS;
            break;
        case "optionIEGOGALAXY":
            CurrentSaison = IE_GOGALAXY;
            break;
        case "optionIEARES":
            CurrentSaison = IE_ARES;
            break;
        case "optionIEORION":
            CurrentSaison = IE_ORION;
            break;
        case "optionIEALL":
            CurrentSaison = IE_ALL;
            break;
        case "optionIEBETAVR":
            CurrentSaison = IE_BETAVR;
            break;
        //default:
        // Gérer d'autres options si nécessaire
        //    break;
    }


    on_comboBox_type_changed(combo.value)

    GK["Players"] = [];
    MF["Players"] = [];
    FW["Players"] = [];
    DF["Players"] = [];

    console.log("after")
    CurrentList["GK"] = GK.Players;
    CurrentList["DF"] = DF.Players;
    CurrentList["MF"] = MF.Players;
    CurrentList["FW"] = FW.Players;

    console.log(CurrentList);

    Object.values(CurrentSaison).forEach(joueur => {
        if (joueur.Poste === "GK") {
            GK.Players.push(joueur);
        }
        else if (joueur.Poste === "DF") {
            DF.Players.push(joueur);
        }
        else if (joueur.Poste === "MF") {
            MF.Players.push(joueur);
        }
        else if (joueur.Poste === "FW") {
            FW.Players.push(joueur);
        }
    });


    refresh = true;

});


// Afficher la pop-up lors du chargement de la page
window.onload = function () {
    var modal = document.getElementById("pop-up");
    modal.style.display = "block";
};

// Fermer la pop-up lors du clic sur le bouton de fermeture
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function () {
    var modal = document.getElementById("pop-up");
    modal.style.display = "none";
};


var pic1 = document.getElementById('pic1_selected');
pic1.addEventListener('mouseenter', function () {
    
    if (name1_status == true){
    var name = document.getElementById('name1_selected');
    name.style.display = 'block'; // Affiche le nom
    }
});
pic1.addEventListener('mouseleave', function () {
    
    if (name1_status == true){
    var name = document.getElementById('name1_selected');
    name.style.display = 'none'; // Affiche le nom
    }
});

var pic2 = document.getElementById('pic2_selected');
pic2.addEventListener('mouseenter', function () {
    
    if (name2_status == true){
    var name = document.getElementById('name2_selected');
    name.style.display = 'block'; // Affiche le nom
    }
});
pic2.addEventListener('mouseleave', function () {
    
    if (name2_status == true){
    var name = document.getElementById('name2_selected');
    name.style.display = 'none'; // Affiche le nom
    }
});

var pic3 = document.getElementById('pic3_selected');
pic3.addEventListener('mouseenter', function () {
    
    if (name3_status == true){
    var name = document.getElementById('name3_selected');
    name.style.display = 'block'; // Affiche le nom
    }
});
pic3.addEventListener('mouseleave', function () {
    
    if (name3_status == true){
    var name = document.getElementById('name3_selected');
    name.style.display = 'none'; // Affiche le nom
    }
});

var pic4 = document.getElementById('pic4_selected');
pic4.addEventListener('mouseenter', function () {
    
    if (name4_status == true){
    var name = document.getElementById('name4_selected');
    name.style.display = 'block'; // Affiche le nom
    }
});
pic4.addEventListener('mouseleave', function () {
    
    if (name4_status == true){
    var name = document.getElementById('name4_selected');
    name.style.display = 'none'; // Affiche le nom
    }
});

var pic5 = document.getElementById('pic5_selected');
pic5.addEventListener('mouseenter', function () {
    
    if (name5_status == true){
    var name = document.getElementById('name5_selected');
    name.style.display = 'block'; // Affiche le nom
    }
});
pic5.addEventListener('mouseleave', function () {
    
    if (name5_status == true){
    var name = document.getElementById('name5_selected');
    name.style.display = 'none'; // Affiche le nom
    }
});

var pic6 = document.getElementById('pic6_selected');
pic6.addEventListener('mouseenter', function () {
    
    if (name6_status == true){
    var name = document.getElementById('name6_selected');
    name.style.display = 'block'; // Affiche le nom
    }
});
pic6.addEventListener('mouseleave', function () {
    
    if (name6_status == true){
    var name = document.getElementById('name6_selected');
    name.style.display = 'none'; // Affiche le nom
    }
});

var pic7 = document.getElementById('pic7_selected');
pic7.addEventListener('mouseenter', function () {
    
    if (name7_status == true){
    var name = document.getElementById('name7_selected');
    name.style.display = 'block'; // Affiche le nom
    }
});
pic7.addEventListener('mouseleave', function () {
    
    if (name7_status == true){
    var name = document.getElementById('name7_selected');
    name.style.display = 'none'; // Affiche le nom
    }
});

var pic8 = document.getElementById('pic8_selected');
pic8.addEventListener('mouseenter', function () {
    
    if (name8_status == true){
    var name = document.getElementById('name8_selected');
    name.style.display = 'block'; // Affiche le nom
    }
});
pic8.addEventListener('mouseleave', function () {
    
    if (name8_status == true){
    var name = document.getElementById('name8_selected');
    name.style.display = 'none'; // Affiche le nom
    }
});

var pic9 = document.getElementById('pic9_selected');
pic9.addEventListener('mouseenter', function () {
    
    if (name9_status == true){
    var name = document.getElementById('name9_selected');
    name.style.display = 'block'; // Affiche le nom
    }
});
pic9.addEventListener('mouseleave', function () {
    
    if (name9_status == true){
    var name = document.getElementById('name9_selected');
    name.style.display = 'none'; // Affiche le nom
    }
});

var pic10 = document.getElementById('pic10_selected');
pic10.addEventListener('mouseenter', function () {
    
    if (name10_status == true){
    var name = document.getElementById('name10_selected');
    name.style.display = 'block'; // Affiche le nom
    }
});
pic10.addEventListener('mouseleave', function () {
    
    if (name10_status == true){
    var name = document.getElementById('name10_selected');
    name.style.display = 'none'; // Affiche le nom
    }
});

var pic11 = document.getElementById('pic11_selected');
pic11.addEventListener('mouseenter', function () {
    
    if (name11_status == true){
    var name = document.getElementById('name11_selected');
    name.style.display = 'block'; // Affiche le nom
    }
});
pic11.addEventListener('mouseleave', function () {
    
    if (name11_status == true){
    var name = document.getElementById('name11_selected');
    name.style.display = 'none'; // Affiche le nom
    }
});

var pic12 = document.getElementById('pic12_selected');
pic12.addEventListener('mouseenter', function () {
    
    if (name12_status == true){
    var name = document.getElementById('name12_selected');
    name.style.display = 'block'; // Affiche le nom
    }
});
pic12.addEventListener('mouseleave', function () {
    
    if (name12_status == true){
    var name = document.getElementById('name12_selected');
    name.style.display = 'none'; // Affiche le nom
    }
});

var pic13 = document.getElementById('pic13_selected');
pic13.addEventListener('mouseenter', function () {
    
    if (name13_status == true){
    var name = document.getElementById('name13_selected');
    name.style.display = 'block'; // Affiche le nom
    }
});
pic13.addEventListener('mouseleave', function () {
    
    if (name13_status == true){
    var name = document.getElementById('name13_selected');
    name.style.display = 'none'; // Affiche le nom
    }
});

var pic14 = document.getElementById('pic14_selected');
pic14.addEventListener('mouseenter', function () {
    
    if (name14_status == true){
    var name = document.getElementById('name14_selected');
    name.style.display = 'block'; // Affiche le nom
    }
});
pic14.addEventListener('mouseleave', function () {
    
    if (name14_status == true){
    var name = document.getElementById('name14_selected');
    name.style.display = 'none'; // Affiche le nom
    }
});

var pic15 = document.getElementById('pic15_selected');
pic15.addEventListener('mouseenter', function () {
    
    if (name15_status == true){
    var name = document.getElementById('name15_selected');
    name.style.display = 'block'; // Affiche le nom
    }
});
pic15.addEventListener('mouseleave', function () {
    
    if (name15_status == true){
    var name = document.getElementById('name15_selected');
    name.style.display = 'none'; // Affiche le nom
    }
});

var pic16 = document.getElementById('pic16_selected');
pic16.addEventListener('mouseenter', function () {
    
    if (name16_status == true){
    var name = document.getElementById('name16_selected');
    name.style.display = 'block'; // Affiche le nom
    }
});
pic16.addEventListener('mouseleave', function () {
    
    if (name16_status == true){
    var name = document.getElementById('name16_selected');
    name.style.display = 'none'; // Affiche le nom
    }
});



init();

preloadImages(Formation);
preloadImages(IE_1);
preloadImages(IE_2);
preloadImages(IE_3);
preloadImages(IE_GO);
preloadImages(IE_GOCS);
preloadImages(IE_GOGALAXY);
preloadImages(IE_ARES);
preloadImages(IE_ORION);
preloadImages(IE_BETAVR);
preloadImages(IE_1_COACH);
preloadImages(IE_2_COACH);
preloadImages(IE_3_COACH);
preloadImages(IE_GO_COACH);
preloadImages(IE_GOCS_COACH);
preloadImages(IE_GOGALAXY_COACH);
preloadImages(IE_ARES_COACH);
preloadImages(IE_ORION_COACH);
preloadImages(IE_ALL);
preloadImages(IE_ALL_COACH);