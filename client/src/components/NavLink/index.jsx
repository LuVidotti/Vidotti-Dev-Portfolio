import "./NavLink.css"

function NavLink({ href, children }) {
    return(
        <a className="navlink" href={href}>{children}</a>
    )
}

export default NavLink;