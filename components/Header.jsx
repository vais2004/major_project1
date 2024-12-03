export default function Header(){
    return(
        <>
        <header>
            <div className="py-2">
                <nav className="navbar bg-body-tertiary">
                    <div className="container -fluid">
                        <a href="/" className="navbar-brand">MyStyleSpot</a>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        </form>
                    </div>
                </nav>
            </div>
        </header>
        </>
    )
}