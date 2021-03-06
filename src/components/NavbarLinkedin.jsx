import userEvent from "@testing-library/user-event";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Button,
} from "react-bootstrap";
import user from "../assets/user.jpeg";
import home from "../assets/home.svg";
import users from "../assets/users.png";
import bag from "../assets/bag.jpg";
import messages from "../assets/messages.jpg";
import bell from "../assets/bell.jpg";
import square from "../assets/square.jpg";
import post from "../assets/post.png";
import "./NavbarLinkedin.css";
import { Link } from "react-router-dom";

const NavbarLinkedin = () => {
  return (
    <div>
      <Navbar expand="lg" className="navbar">
      <Link to={"/"} > 
        <svg
          height="31"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
        >
          <g fill="none">
            <path
              d="M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z"
              fill="#069"
            />
            <path
              d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z"
              fill="#fff"
            />
          </g>
        </svg>
        </Link>
        <Form className="d-flex">
          <FormControl
            style={{ height: 30 }}
            type="search"
            placeholder="Search"
            className="ml-2 mr-5"
            aria-label="Search"
          />
        </Form>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to={"/"} > 
             <div className="iconsWrapper mx-2">
              <img src={home} alt="user" />
            <Nav.Link href="#action1" className="navlink">Home</Nav.Link>
            </div> 
          </Link>

          <Link to={""} > 
            <div className="iconsWrapper mx-2">
              <img src={users} alt="user" />
            <Nav.Link href="#action1" className="navlink">My Network</Nav.Link>
            </div> 
            </Link>

            <Link to={""} > 
            <div className="iconsWrapper mx-2">
              <img src={bag} alt="user" />
            <Nav.Link href="#action1" className="navlink">Jobs</Nav.Link>
            </div> 
            </Link>
            
            <Link to={""} >    
            <div className="iconsWrapper mx-2">
              <img src={messages} alt="user" />
            <Nav.Link href="#action1" className="navlink">Messaging</Nav.Link>
            </div> 
            </Link>

            <Link to={""} > 
            <div className="iconsWrapper mx-2">
              <img src={bell} alt="user" />
            <Nav.Link href="#action1" className="navlink">Notifications</Nav.Link>
            </div> 
            </Link>
          
            <Link to={"/profilePage"} >  
            <div className="userDropdown">
              <img src={user} className="userImg" alt="user" />
              <NavDropdown
                title="Me"
                id="navbarScrollingDropdown"
                className="userDropdowne"
              >
           
                <NavDropdown.Item href="#action4">
                  Go to Profile Page
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </div>   
           </Link>

            <div className="userDropdown ">
              <img src={square} className="dropIcon" alt="work" />
              <NavDropdown
                title="Work"
                id="navbarScrollingDropdown"
                className="userDropdowne"
              >
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </div>

            <div className="userDropdown ">
              <img src={post} className="dropIcon" alt="post" />
              <NavDropdown
                title="Post a job"
                id="navbarScrollingDropdown"
                className="userDropdowne"
              >
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </div>

          </Nav>
        </Navbar.Collapse>
       
      </Navbar>
    </div>
  );
};
export default NavbarLinkedin;
