export default {

    getSolicitudes: state => {
        return state.solicitudes;
    },
    getFechaSol: state => {
        return state.fechaRegistro;
    },
    getCorrelativo: state => {
        return state.correlativo
    }
}