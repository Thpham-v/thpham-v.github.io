// DOM
const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) => {
	const valeur = e.keyCode.toString();
	calculer(valeur)
})

document.addEventListener('click', (e) => {
	const valeur = e.target.dataset.key;
	calculer(valeur)
})

const calculer = (valeur) => {
	if (listeKeycode.includes(valeur)) {
		switch(valeur) {
			case '8':
				ecran.textContent = "";
				break;
			case '13':
				const calcul = eval(ecran.textContent);
				ecran.textContent = calcul;
				break;
			default:
				const indexKeycode = listeKeycode.indexOf(valeur);
				const touche = touches[indexKeycode];
				ecran.textContent += touche.innerHTML;
		}
	}
	if (ecran.textContent.length >= 15) {
		ecran.textContent = "To many numbers";
	}
}

window.addEventListener('error', (e) => {
	alert('Erreur dans le calcul : ' + e.message)
})