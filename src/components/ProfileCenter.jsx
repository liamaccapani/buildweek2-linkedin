import {Container} from 'react-bootstrap'
import "./ProfileCenterStyle.css"

const ProfileCenter=({profilesData,id})=>{
    let thisProfile = profilesData.find(profile => profile._id === id)

    return(
        <Container className="rounded my-3" >
                {
                thisProfile.map(profile=>(
                <div>
                    <h5>About</h5>
                    {profile.bio}
                </div>
                ))
                }
        </Container>
    )
}
export default ProfileCenter