AOS.init();

const dataDoEvento = new Date("dec 12 2025 19:00:00");
const timeStempDoEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function () {
	const agora = new Date();
	const timeStempAtual = agora.getTime();
	const diferencaTempo = timeStempDoEvento - timeStempAtual;
	const diaEmMS = 1000 * 60 * 60 * 24;
	const horaEmMS = 1000 * 60 * 60;
	const minutoEmMS = 1000 * 60;

	const dia = Math.floor(diferencaTempo / diaEmMS);
	const hora = Math.floor((diferencaTempo % diaEmMS) / horaEmMS);
	const minuto = Math.floor((diferencaTempo % horaEmMS) / minutoEmMS);
	const segundo = Math.floor((diferencaTempo % minutoEmMS) / 1000);

	document.getElementById("contador").innerHTML = `${dia}d ${hora}h ${minuto}m ${segundo}s`;

	if (diferencaTempo < 0) {
		clearInterval(contaHoras);
		document.getElementById("contador").innerHTML = "Evento encerrado";
	}
}, 1000);
