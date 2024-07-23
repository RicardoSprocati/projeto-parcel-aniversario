AOS.init();

const dataDoEvento = new Date("Jan 15,2025 00:00:01");
const timeStampEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function() {
    const horaAgora = new Date();
    const timeStampAgora = horaAgora.getTime();
    const distanciaAteEvento = timeStampEvento - timeStampAgora;

    const diasAteEvento = Math.floor(distanciaAteEvento / (1000 * 60 * 60 * 24));
    const horasAteEvento = Math.floor((distanciaAteEvento % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    const minutosAteEvento = Math.floor((distanciaAteEvento % (1000 * 60 * 60)) / (1000 * 60));
    const segundosAteEvento = Math.floor((distanciaAteEvento % (1000 * 60)) / (1000));

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if (distanciaAteEvento < 0) {
        clearInterval(contaHoras);
        let html = '<div style="background-color: #FF0000; padding: 10px;">Evento expirado!</div>';
        document.getElementById('finalizado').innerHTML = html;
        document.getElementById('contador').innerHTML = '';
    }

},1000);
