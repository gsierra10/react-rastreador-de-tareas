const Header = ({ title }) => {
    return (
        <header>
            <h1 style={{ color: 'red', backgroundColor: 'black' }}>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Rastreador de Tareas React'
}

export default Header
