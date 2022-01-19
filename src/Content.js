function Content({loggedIn}){


    // if(loggedIn === true){
    //     return (<p>Hello, logged in user. Welcome to React Example.</p>)
    // }
    // else {
    //     return null;
    // }

    return (
        loggedIn && <p>Hello, logged in user. Welcome to React Example.</p>
    )
}

export default Content;