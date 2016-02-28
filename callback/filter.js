var filterEdadMayor25 = function(persona) {
	return persona.edad > 25
}

function filterCiudadLimaAndChiclayo(persona) {
	return persona.ciudad === 'Lima' || persona.ciudad === 'Chiclayo'
}