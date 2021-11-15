import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('click');
    }
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='blue' text='Añadir' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Rastreador de Tareas React'
}

// CSS in JavaScript
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }
export default Header
