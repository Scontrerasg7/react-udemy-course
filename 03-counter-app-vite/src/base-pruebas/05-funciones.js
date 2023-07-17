// Como escribir un return implicito
export const getUser = () => ({
        uid: 'ABC123',
        username: 'Gohan248'
    });

export const getUsuarioActivo = (nombre) => (
    {
        uid: 'ABC123',
        username: nombre
    }
);