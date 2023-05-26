import PropTypes from 'prop-types';

export const FirstApp = ({
    title, 
    subtitle = '2023-05-18',
    name
}) => {

    if (!title) {
        throw new Error('El title no existe')
    }

    return(
        <>
        <h1>{title}</h1>
        {/* <code>{getValue(newMessage)}</code> */}
        <p>{subtitle}</p>
        <p>{name}</p>
        </>
    )
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number
}

FirstApp.defaultProps = {
    name: 'SCG',
    subtitle:'No hay subtitulo',
    title:'No hay titulo',
}

