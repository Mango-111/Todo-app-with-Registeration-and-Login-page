import React ,{useState ,useEffect}  from 'react'
import { Form, Button, Container,Row,Col} from 'react-bootstrap'
import {addStorage} from '../components/Storage'

function Registeration() {
    const [Fname, setUser] = useState(" ");
    const [Lname,setLname] = useState(" ");
    const [Uname,setUname] = useState(" ");
    const [Email,setEmail] = useState(" ");
    const [Pass, setPass] =useState( " ");
    const [Conpass,setConPass] = useState(" ");
    
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const [info, setInfo] = useState(true);

//     const setDataStorage=async ()=>{
//         try{
//              const d = await addStorage();
//              localStorage.setItem('data',JSON.stringify(d));
//         }catch(error){
//             console.log(error);
//         }
//     }

//    useEffect(() => {
//        setDataStorage();
//    }, [])
    const handleForm =(e)=>{
        e.preventDefault();

        if(!Fname || !Lname ||!Uname || !Email || !Email || !Pass || !Conpass )
        {
            setFlag(true);
        }
        else{
            setFlag(false);
            localStorage.setItem("Email", JSON.stringify(Email));
            localStorage.setItem("Password", JSON.stringify(Pass));
            localStorage.setItem("Username",JSON.stringify(Uname));
            console.log("Saved in Local Storage");

            setLogin(!login)
        }

    }

    const handleClick=(e)=>{
      e.preventDefault();
      setLogin(!login)
      alert("Please fill all the fields")
    }
    

    return (
        <div>
            <Container className="mt-4">
                <Form onSubmit={handleForm}>
                <i class="fas fa-registered"></i>
                    <h2> Registeration Form</h2>
                    <Row className="mt-3">
                        <Col md={6}>
                        <Form.Label><i class="fas fa-user-circle"></i>Name:</Form.Label>
                        <Form.Control type="]text" placeholder="Enter Name"  onChange={(e)=>setUser(e.target.value)}/>

                            <Form.Label><i class="fas fa-user-circle"></i>Last Name:</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" onChange={(e)=>setLname(e.target.value)} />
                            
                            <Form.Label><i class="fas fa-user-circle"></i>User Name:</Form.Label>
                            <Form.Control type="text" placeholder="User Name"  onChange={(e)=>setUname(e.target.value)}/>

                        <Form.Label><i class="fas fa-envelope"></i>Email:</Form.Label>
                        <Form.Control placeholder="Email" type="email" onChange={(e)=>setEmail(e.target.value)} />

                        <Form.Label><i class="fas fa-lock"></i> Password:</Form.Label>
                        <Form.Control placeholder="Password" type="Password" onChange={(e)=>setPass(e.target.value)}/>

                        <Form.Label> <i class="fas fa-lock"></i> Confirm Password:</Form.Label>
                        <Form.Control placeholder="Password" type="Password" onChange={(e)=>setConPass(e.target.value)} />



                    <Button variant="primary" type="submit" className="mt-3" onClick={handleClick}>
                        Submit
                    </Button>
                    </Col>
                    </Row>
                </Form>
            </Container>

        </div>
    )
}

export default Registeration
