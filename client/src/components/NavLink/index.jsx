import "./NavLink.css"

// eslint-disable-next-line react/prop-types
function NavLink({ href, children }) {
    return(
        <a className="navlink" href={href}>{children}</a>
    )
}

export default NavLink;