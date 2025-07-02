import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "react-toastify/ReactToastify.css"
import "./CmsLayout.css"

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import http from "../library/http"
import { clearUser, setUser } from "../store/user.slice"
import { Loading } from "./Loading"

export const CmsLayout = () => {
    const user = useSelector(state => state.user.value)     // value returned by state function is stored in user

    const [loading, setLoading] = useState(true)

/*    useEffect(() => {   // leas used variation of useEffect, can trigger any time
        
    })

    useEffect(() => {

    }, [])      // empty dependency because array is empty, one time trigger 
*/

    const dispatch = useDispatch()

    useEffect(() => {
        if(!user) {
            setLoading(true)

            const token = localStorage.getItem('mbttoken')

            if(token) {
                http.get(`/profile/details`)
                    .then(({data}) => {
                        dispatch(setUser(data))
                    })
                    .catch(() => {})
                    .finally(() => setLoading(false))
            } else {
                setLoading(false)
            }
        } else {
            setLoading(false)
        }
    }, [user])  // with dependency if "user's data" is changed

    const handleLogout = () => {
        localStorage.removeItem('mbcttoken')

        dispatch(clearUser())
    }

    return loading ? <Loading /> : <>
        {user && <Navbar bg="dark" expand="lg" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>
                    MERN BCT
                </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse>

                    <Nav>
                        <Nav.Item>
                            <Link className="nav-link" to="/cms/authors">
                                Link
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to="#">
                                <i className="bi bi-people me-2"></i>Authors
                            </Link>
                        </Nav.Item>
                    </Nav>

                    <Nav className="ms-auto">
                        <NavDropdown title={<>
                                <i className="bi bi-person-circle me-2"></i>{user.name}
                            </>} align="end">
                            <Link className="dropdown-item" to="#">Item</Link>
                            <Link className="dropdown-item" to="#">Item</Link>
                            <NavDropdown.Divider />
                            <Button className="btn btn-link dropdown-item" onClick={handleLogout}>
                                <i className="bi bi-box-arrow-right me-2"></i>Logout
                            </Button>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>}

        <Container>
            <Outlet />
        </Container>
    </>
}