const serviceCards = document.querySelectorAll('.service-card');

const btnToggleInfo = document.getElementById('toggle-info');
const infoContent = document.getElementById('info-content');

const formEnvio = document.getElementById('shipping-form');
const btnLimpiar = document.getElementById('reset-btn');
const panelResultado = document.getElementById('result-content');

const inputOrigen = document.getElementById('origen');
const inputDestino = document.getElementById('destino');
const selectTipoEnvio = document.getElementById('tipo-envio');
const inputPeso = document.getElementById('peso');
const inputLargo = document.getElementById('largo');
const inputAncho = document.getElementById('ancho');
const inputAlto = document.getElementById('alto');
const selectUrgencia = document.getElementById('urgencia');
const inputEmail = document.getElementById('email');

serviceCards.forEach(card => {
  card.addEventListener('click', function() {
    serviceCards.forEach(c => c.classList.remove('is-selected'));
    
    this.classList.add('is-selected');

    const servicioSeleccionado = this.getAttribute('data-service');
    selectTipoEnvio.value = servicioSeleccionado;
  });
});

btnToggleInfo.addEventListener('click', () => {
  infoContent.classList.toggle('info-visible');
  
  if (infoContent.classList.contains('info-visible')) {
    btnToggleInfo.textContent = 'Ocultar información adicional';
  } else {
    btnToggleInfo.textContent = 'Mostrar información adicional';
  }
});