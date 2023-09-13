
function generar_string_fecha(){
    const fecha = new Date()

    const dia = fecha.getDate().toString().padStart(2, '0')
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0')
    const anio = fecha.getFullYear()

    const hora = fecha.getHours().toString().padStart(2, '0')
    const minutos = fecha.getMinutes().toString().padStart(2, '0')
    const segundos = fecha.getSeconds().toString().padStart(2, '0')

    const fechaFormateada = `${mes}/${dia}/${anio} -  ${hora}:${minutos}:${segundos}`
    return fechaFormateada
}

module.exports = {
    generar_string_fecha,
};
