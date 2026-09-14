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
const selectUrgencia = document.getElementById('urgencia');

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

formEnvio.addEventListener('submit', function(event) {
  event.preventDefault();

  if (!formEnvio.checkValidity()) {
    formEnvio.reportValidity();
    return;
  }

  const valOrigen = inputOrigen.value;
  const valDestino = inputDestino.value;
  const valPeso = inputPeso.value;
  const valTipoEnvio = selectTipoEnvio.options[selectTipoEnvio.selectedIndex].text;
  const valUrgencia = selectUrgencia.value;

  let servicioSugerido = "";
  if (valUrgencia === "baja") {
    servicioSugerido = "Básico";
  } else if (valUrgencia === "media") {
    servicioSugerido = "Estándar";
  } else if (valUrgencia === "alta") {
    servicioSugerido = "Prioritario";
  }

  panelResultado.innerHTML = `
    <h3 class="resumen-titulo">Resumen de tu encomienda</h3>
    <ul class="resumen-lista">
      <li><strong>Origen:</strong> ${valOrigen}</li>
      <li><strong>Destino:</strong> ${valDestino}</li>
      <li><strong>Tipo de envío elegido:</strong> ${valTipoEnvio}</li>
      <li><strong>Peso declarado:</strong> ${valPeso} kg</li>
    </ul>
    <p class="resumen-recomendacion">
      Recomendación del sistema: Te sugerimos el servicio <span class="resumen-destacado">${servicioSugerido}</span>.
    </p>
  `;
});

btnLimpiar.addEventListener('click', function() {
  panelResultado.innerHTML = '<p>Completa el formulario para ver la recomendación de envío.</p>';
  
  serviceCards.forEach(card => card.classList.remove('is-selected'));
  
  formEnvio.querySelectorAll('.is-valid, .is-error').forEach(el => {
    el.classList.remove('is-valid', 'is-error');
  });

  infoContent.classList.remove('info-visible');
  btnToggleInfo.textContent = 'Mostrar información adicional';
});