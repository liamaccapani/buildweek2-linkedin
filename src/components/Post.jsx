import { Row, Card, Col, ListGroup, ListGroupItem, Modal, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

import NewPost from "./NewPost";

const Post = ({ postData }) => {
  // console.log("this is postdata", postData);

  const[showModal,setShowModal]=useState(false)
  const handleClose=()=>setShowModal(false);
  const handleShow=()=>setShowModal(true);


    // const[message, setMessage]=useState("")
    // const[name, setName]=useState("")
    // const[text, setText]=useState("")
 
    const[post, setPost] = useState({
      message:"",
      name:"",
      text:"",
    })
      
    const [newPost, setNewPost] = useState(true)
    // const thisNewPost = {message, name, text}
    const handleInput = (key, value) => {
      setPost({
      ...post, [key] : value
    })
    }
    
    // const id = "_id"
    const POST_URL = "https://striveschool-api.herokuapp.com/api/posts/";
    let bearer =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo";
    

   const handleSubmit = async (e) => {
     e.preventDefault()

     try {
      // console.log("inside putIntoPost and before fetch",post)
      const response = await fetch(`${POST_URL}`  , {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
          Authorization: `${bearer}`,
        },
      });
      console.log("this should be the response after the fetch", response)
      if (response.ok) {
        const postData = await response.json()
         alert("NEW POST CREATE");
        console.log("my postData", postData);
        setNewPost(true)
         setPost({
        message:"",
        name:"",
        text:"",
       })
    
      } else {
        console.log("error");
        alert("oi oi");
      }
    } catch (error) {
      throw error;
    }
   }
  //    console.log("the new post:", post)
     
  //    let response = await putIntoPost()
  //    if (response.ok) {
  //      setPost({
  //       message:"",
  //       name:"",
  //       text:"",
  //      })
  //       console.log("the new post:", post)
  //    } else {
  //      console.log("something wrong in this post")
  //    }
  //    } catch (error) {
  //      console.log(error)
  //    }
  //  }

  // useEffect((prevPost, newPost ) => {
  //      if ( prevPost!=== newPost) {
  //         setPost(post)
  //      }
  // },[])

  const sendAndClose=(e)=>{
    // sendPostData(e)
    handleClose()
    handleInput(e)
    handleSubmit(e)
    console.log("this is the last creation", post)
    // getPosts()
}

//   const sendPostData = async (e) => {
//     console.log(thisNewPost ,'testttttttt')
//     e.preventDefault()
//     setMessage(thisNewPost)
//     setName(thisNewPost)
//     setText(thisNewPost)
//     await putIntoPost(thisNewPost)
  
//     console.log("new post", thisNewPost)
// } 



  return (
    <div>
      <Button
        variant="primary"
        id="edit-btn"
        className="mx-1 mt-2 mb-2 "
        onClick={() => setShowModal(!showModal)}
      >
        <span>New Post</span>
      </Button>
  
   {/* <NewPost thisNewPost={thisNewPost} />  */}

       {/* <> */}
      { newPost && <NewPost post={post}/>}
        {/* <p>{post.message}</p>
         <p>{post.name}</p>
         <p>{post.text}</p> */}
        
     {/* ) }
       </>  */}


      <Modal show={showModal} onHide={handleShow}>
                    <Modal.Header closeButton>
                    <Modal.Title>Create a new post!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                <Form.Label>What do you have in mind?</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder=""
                                defaultValue = {post.message}
                                 onChange = {(e)=> handleInput( "message", e.target.value)}
                                />
                                {/* { handleInput(e, 'text/name/...')} */}
                                 <Form.Control 
                                type="text" 
                                placeholder=""
                                defaultValue = {text.message}
                                 onChange = {(e)=> handleInput( "text", e.target.value)}
                                />
                                 <Form.Control 
                                type="text" 
                                placeholder=""
                                defaultValue = {name.message}
                                 onChange = {(e)=> handleInput( "name", e.target.value)}
                                />
                    
                    </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" type="submit" >
                        Close
                    </Button>
                    <Button variant="primary" onClick={sendAndClose}>
                        Pubblish
                    </Button>
                    </Modal.Footer>

                </Modal>

      {postData.slice(0, 7).map((post) => (
        <div>
          <Row className="m-auto">
            <Col md={{ span: 6, offset: 3 }} className="m-auto my-5">
              <Card style={{ width: "18rem" }} className="mb-5">
                <Card.Img variant="top" src={post.user.image} alt="userImg" />
                <Card.Body>
                  <Card.Title>{post.user.name}</Card.Title>
                  <h5>{post.username} </h5>
                  <Card.Text>{post.user.bio}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{post.text}</ListGroupItem>
                  <ListGroupItem>{post.user.area}</ListGroupItem>
                  <ListGroupItem>{post.user.id}</ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </div>
      ))}

    </div>
  );
};
export default Post;
