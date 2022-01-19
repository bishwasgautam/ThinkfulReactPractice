function Header({loggedIn, setLoggedIn}){


    function handleClick(){
        setLoggedIn(!loggedIn)
    }

    return (
        <button onClick={handleClick}>{loggedIn? "Log Out": "Log In"}</button>
    )
}

export default Header;