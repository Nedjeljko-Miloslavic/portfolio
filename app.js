const projectItem = document.querySelector(".projectItem");
const projectItem2 = document.querySelector(".projectItem:nth-child(2)");
const body = document.body;
const explenationFacebook = "Ovo je moj 'facebook clone' fullstack projekt napravljen u Node.js-u i React-u, u kojem sam pokušao imitirati izgled i funkcionalnost facebooka. Naravno, nisam ubacio sve funkcinalnosti. No one osnovne su tu. Ako kliknete na strelicu desno od slike otići ćete na login stranicu. Tu potom možete kliknuti na tipku za registraciju koja će vas odvesti na registracijsku stranicu. Tu ispunite sve podatke i registrirate se. Ako neko od polja nije ispunjeno zacrvenit će se. Za verifikaciju maila napravio sam jedan bazični regex koji samo provjerava jeli mail ispravnog oblika. Ukoliko je sve OK vaš account će se spremiti na moj mongo atlas cloud i potom se možete ulogirati. Inače login sustav sam napravio koristeći se passport local strategijom. Kad ste ulogirani na glavnoj stranici možete objavljivati slike i tekstualne postove. A ako kliknete na svoje ime na naslovnoj traci završit ćete na 'profilnoj stranici' gdje možete postaviti profilnu sliku koja će se potom pojavljivati uz vaš account. Sve vazano uz spremanje slika se odvija preko multera i slike su tako spremljene direktno na server. One se sa servera brišu nakon određenog roka (ovo je način na koji funkcinira besplatna webhosting usluga Heroku na koji sam postavio ovaj projekt). Zatim možete kliknuti na tipku 'find friends' i tamo potom možete dodavati, prihvaćati i uklanjati prijatelje. Ali također im možete i slati poruke. Za to se vratite na glavnu stranicu. S desne strane će vam biti traka sa novododanim prijateljima. Za slanje poruka koristio sam socket.io, a mongo atlas za njihovo pohranjivanje. Predlažem da napravite dva accounta te ih otvorite u dva različita browsera da testirate ovu funkcionalnst. Uz sve ovo dodao sam i tipke za komentiranje i drugu interakciju sa postovima no one su bez funkcionalnosti. Isto je sa mnogim ikonicama sa lijeve strane glavne starnice. To sam napravio čisto da sve skupa bude bar izgledom bliže stvarnom facebooku.";
const explanationSocketGame = "Jednostavna multyplayer igrica za dva igrača napisana u Node.js-u i JS canvasu. Sva interakcija između igrača odvija se pomoću socket.io-a. Ako kliknete na strelicu desno od slike otići ćete na stranicu na kojoj prvo izabirete igrača (player 1 i player 2). U igrici se može skakati i ići lijevo - desno tipkama WAD. Cilj je skupiti pet zvjezdica prije protivnika. Može se upasti u rupe. To uzrokuje gubitak zvjezdice. Također može se skupiti pucaljka ako se odozdo udari sa karakterom u kockicu sa slovom 'g'. Puca se sa tipkom P. Pogodak iz pucaljke ili skok na neprijatelja vodi do njegovog gubitka zvjezdice koju potom vi možete pokupiti. Na dnu se vidi mapa koja ukazuje gdje se u prostoru nalazite vi, a gdje vaš protivnik. Ovaj projekt ima naoko nešto kompliciraniju fiziku, no to meni osobno nije bilo toliko teško isprogramirati. Dosta teže je bilo uskladiti interakciju između igrača pomoću socketa. Ako nemate još jednu osobu pri sebi možete igru testirati i tako da jednog igrača odaberete u jednom browseru, a drugog u drugom.";

projectItem.addEventListener("click", appendProject);
projectItem2.addEventListener("click", appendProject);


function appendProject(e){
	const currentProject = e.currentTarget.attributes[1].nodeValue;
	const projectItemSecond = document.createElement("div");
	projectItemSecond.classList.add("projectItemSecond");
	const projectItemSecondContainer = document.createElement("div");
	projectItemSecondContainer.classList.add("projectItemSecondContainer");
	const x = document.createElement("div");
	x.classList.add("x");
	x.innerHTML = "X";
	x.addEventListener("click", removeProject);
	projectItemSecondContainer.appendChild(x);
	const projectImage = document.createElement("div");
	projectImage.classList.add("projectImage");
	if(currentProject==="facebook"){
		projectImage.classList.add("facebook");
	}else if(currentProject==="socketGame"){
		projectImage.classList.add("socketGame");
	}
	projectItemSecondContainer.appendChild(projectImage);
	const arrow = document.createElement("div");
	if(currentProject==="facebook"){
		arrow.addEventListener("click", ()=>window.open("https://tranquil-cliffs-88620.herokuapp.com/","_blank"));
	}else if(currentProject==="socketGame"){
		arrow.addEventListener("click", ()=>window.open("https://socket-game-neno.herokuapp.com/","_blank"));
	}
	
	arrow.classList.add("arrow");
	projectImage.appendChild(arrow);
	const arrowSvg = document.createElement("div");
	arrowSvg.classList.add("arrowSvg");
	arrow.appendChild(arrowSvg);
	const projectExplanation = document.createElement("div");
	projectExplanation.classList.add("projectExplanation");
	const p = document.createElement("p");
	if(currentProject==="facebook"){
		p.innerHTML = explenationFacebook;
	}else if(currentProject==="socketGame"){
		p.innerHTML = explanationSocketGame;
	}
	projectExplanation.appendChild(p);
	projectItemSecondContainer.appendChild(projectExplanation);
	projectItemSecond.appendChild(projectItemSecondContainer);
	document.body.appendChild(projectItemSecond);
}


function removeProject(e){
	body.removeChild(e.target.parentNode.parentNode);
}