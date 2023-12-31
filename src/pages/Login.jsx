import React, { useRef,useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link ,useNavigate} from "react-router-dom";
import axios from 'axios'

const Login = () => {
  // const loginNameRef = useRef();
  // const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('');

  const navigate=useNavigate();

  const handleLogin=()=>{
     axios.post('http://localhost:5000/login',{username,password})
        .then(response =>{
          console.log(response.data.message);
          navigate('/home')
        })
        .catch(err =>{
          console.error(err)
        })
  }

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
      <Container>
      <Row>
      <Col lg="6" md="6" sm="12" className="m-auto text-center">
      <form className="form mb-5" onSubmit={submitHandler}>
  <div className="form__group">
  
      <input type="text" value={username} placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
      </div>
      <div className="form__group">
      <input type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}  type="submit" className="addTOCart__btn">Login</button>
      </form>
      <Link to="/register">
      Don't have an account? Create an account
      </Link>
      </Col>
      </Row>
      </Container>
      </section>
      </Helmet>
    

    // <Helmet title="Login">
    //   <CommonSection title="Login" />
    //   <section>
    //     <Container>
    //       <Row>
    //         <Col lg="6" md="6" sm="12" className="m-auto text-center">
    //           <form className="form mb-5" onSubmit={submitHandler}>
    //             <div className="form__group">
    //               <input
    //                 type="email"
    //                 placeholder="Email"
    //                 required
    //                 ref={loginNameRef}
    //               />
    //             </div>
    //             <div className="form__group">
    //               <input
    //                 type="password"
    //                 placeholder="Password"
    //                 required
    //                 ref={loginPasswordRef}
    //               />
    //             </div>
    //             <button type="submit" className="addTOCart__btn">
    //               Login
    //             </button>
    //           </form>
    //           <Link to="/register">
    //             Don't have an account? Create an account
    //           </Link>
    //         </Col>
    //       </Row>
    //     </Container>
    //   </section>
    // </Helmet>
  );
};

export default Login;