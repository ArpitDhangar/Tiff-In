import React, { useRef,useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios'


const Register = () => {
  // const signupNameRef = useRef();
  // const signupPasswordRef = useRef();
  // const signupEmailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const [name,setName]=useState('')
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('');

  const navigate=useNavigate();

  const handleRegister=()=>{
     axios.post('http://localhost:5000/register',{name,username,password})
        .then(response =>{
          console.log(response.data.message);
          navigate('/login')
        })
        .catch(err =>{
          console.error(err)
        })
  }

  return (

    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">


    <input type="text" value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)} />
    </div>
    <div className="form__group">
    <input type="text" value={username} placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
    </div>
    <div className="form__group">
    <input type="text" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
    </div>
    <button onClick={handleRegister} type="submit" className="addTOCart__btn">Register</button>
    </form>
              <Link to="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>


    // <Helmet title="Signup">
    //   <CommonSection title="Signup" />
    //   <section>
    //     <Container>
    //       <Row>
    //         <Col lg="6" md="6" sm="12" className="m-auto text-center">
    //           <form className="form mb-5" onSubmit={submitHandler}>
    //             <div className="form__group">
    //               <input
    //                 type="text"
    //                 placeholder="Full name"
    //                 required
    //                 ref={signupNameRef}
    //               />
    //             </div>
    //             <div className="form__group">
    //               <input
    //                 type="email"
    //                 placeholder="Email"
    //                 required
    //                 ref={signupEmailRef}
    //               />
    //             </div>
    //             <div className="form__group">
    //               <input
    //                 type="password"
    //                 placeholder="Password"
    //                 required
    //                 ref={signupPasswordRef}
    //               />
    //             </div>
    //             <button type="submit" className="addTOCart__btn">
    //               Sign Up
    //             </button>
    //           </form>
    //           <Link to="/login">Already have an account? Login</Link>
    //         </Col>
    //       </Row>
    //     </Container>
    //   </section>
    // </Helmet>
  );
};

export default Register;