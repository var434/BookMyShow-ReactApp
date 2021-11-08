import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


function Registration() {
    const [userName, setUserName] = useState("");
    const [emailaddress, setEmailAddress] = useState("");
    const [passwordd, setPasswordd] = useState("");

    function clearInput(){
        setUserName("");
        setEmailAddress("");
        setPasswordd("");
    }

    async function UserPost(){
        const UserDetails = {
            "userName": userName,          //should same as UserSchema
            "email": emailaddress,
            "password": passwordd
        }
        await axios.post('https://infinite-eyrie-76014.herokuapp.com/user-register', UserDetails)
        .then((data)=>{ 
            Swal.fire({
            title: `<strong>${data.data.message}</strong>`,
            icon: 'success',
            showCloseButton: true,
            })
            clearInput();
        }).catch((err)=>  Swal.fire({
                        title: `<strong>${err.message}</strong>`,
                        icon: 'error',
                        showCloseButton: true,
                    }));


        // console.log(UserDetails);
        //  const response = await axios.post('https://infinite-eyrie-76014.herokuapp.com/user-register', UserDetails);
        // console.log(response);

    }


    return (
        <div>
            <Container style={{padding:"7%"}}>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Enter User Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={emailaddress} onChange={(e) => setEmailAddress(e.target.value)} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={passwordd} onChange={(e) => setPasswordd(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" onClick={UserPost}>Submit</Button>
                </Form>
            </Container>
      </div>
    );
  }
  
  export default Registration;