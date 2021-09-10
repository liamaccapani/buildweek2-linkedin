import CustomFooter from "../CustomFooter";
import Directory from "../Directory";
import NavbarLinkedin from "../NavbarLinkedin";
import Posts from "../Posts";
import ProfileRightSide from "../ProfileRightSide";

const HomePage = () => {
    
    return (
        <div>
        <NavbarLinkedin/> 
        <Row>
         <Col>
        <Posts/>
         </Col>
         <Col>
        <ProfileRightSide />
        </Col>
        </Row>
        <Directory/> 
        <CustomFooter />
        </div>
    )
}
export default HomePage