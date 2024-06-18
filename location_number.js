// Função para capturar a localização
function getLocation(event) {
    event.preventDefault();

    // Obter o número de telefone digitado
    const phoneNumber = document.getElementById('phoneNumber').value;

    // Verificar se o navegador suporta geolocalização
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Mostrar o mapa
            const mapDiv = document.getElementById('map');
            mapDiv.style.display = 'block';

            // Inserir o mapa usando API do Google Maps (exemplo simples)
            const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=15&size=400x300&markers=color:red%7Clabel:A%7C${latitude},${longitude}&key=YOUR_GOOGLE_MAPS_API_KEY`;
            mapDiv.innerHTML = `<img src="${mapUrl}" alt="Mapa da localização">`;

            // Aqui você poderia enviar os dados (phoneNumber, latitude, longitude) para o seu servidor
            console.log(`Número de telefone: ${phoneNumber}`);
            console.log(`Latitude: ${latitude}`);
            console.log(`Longitude: ${longitude}`);
        }, function(error) {
            console.error(`Erro ao obter a localização: ${error.message}`);
        });
    } else {
        alert('Geolocalização não suportada pelo seu navegador.');
    }
}

// Associar a função ao evento de submit do formulário
const form = document.getElementById('locationForm');
form.addEventListener('submit', getLocation);

