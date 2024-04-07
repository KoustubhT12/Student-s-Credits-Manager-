    import React, { useState, useEffect } from 'react'; // Importing useState and useEffect from 'react'
    import './App.css';
    import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
    import { useNavigate } from 'react-router-dom';
    import { useHistory } from 'react-router-dom';
    import userImage from './gulabi.png';
    import { createContext } from 'react';
    import { useContext} from 'react';
    import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
    import { useQuery } from '@tanstack/react-query';


    export const AppContext = createContext();
    

    function App() { 
      const client = new QueryClient();
      const [user, setUser] = useState(""); // Using useState to manage state
      const [pass, setPass] = useState(""); // Using useState to manage state
      return (
        <QueryClientProvider client={client}>
        <AppContext.Provider value={{user,pass,setUser,setPass}}>
        <Router>
          <Routes>
            <Route path='/' element={<div><img src={userImage} className='imgcon'/> <Home /> <REdirector/></div>}/>
            <Route path='/home' element={<h1>home page</h1>}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </Router>
        </AppContext.Provider>
        </QueryClientProvider>
      );
    }

    function Home() {
   
      return (
        <div>
          <h1 className="orgname">Shri Shivaji college of science Amravati</h1>
          <Loginspace class='loginspac'/>
          <INFO/> {/* Incorrect use of 'class' instead of 'className' */}
        </div>
      );
    }

    function Loginspace() {
      const {setPass} = useContext(AppContext);
      const {setUser} = useContext(AppContext);
      
      return( 
        
        <div className='logindiv'> 
          <img src="https://www.pngmart.com/files/21/Account-User-PNG-File.png" className='imgcon2'/>
          <label className='label1'>Username :-</label>
          <input type='text' className="input1" placeholder='username' onChange={(event)=>{setUser(event.target.value)}}/>
          <label className='label2'>Password :-</label>
          <input type='password' className="input2" placeholder='password' onChange={(event)=>{setPass(event.target.value)}}/>
        </div>
      );


    }

    function REdirector() {
      const {user} = useContext(AppContext);
      const {pass} = useContext(AppContext);
      
      const navigate = useNavigate();
      function checkhandler(){
        if(user==='koustubh' && pass==='123'){
          window.history.replaceState(null, '', '/');
          navigate('/profile');
        }
        else{
          window.alert("Wrong password");
        }

      }
    
      
      return ( 
        <div> 
          <button className='ops' onClick={checkhandler}> Login </button>
        </div>
      );



    }
    function Profile() {
      const { user } = useContext(AppContext);
      const navigate = useNavigate();
    
      // Check if user is logged in
      if (user !== 'koustubh') {
        // Redirect to home page if not logged in
        navigate('/');
      }
    
      return (
        <div>
          <h1>PROFILE page</h1>
        </div>
      );
    }

    function INFO(){
      return (
      <div class="panel">
      <h1 class="heading">Student's Credit Point Manager for Professors</h1>
      <div class="points">
        <div class="point yellow">1. Efficient way to manage students records</div>
        <div class="point green">2. Easiest way to edit, change students credit over the year</div>
        <div class="point red">3. Time-saving nature</div>
        <div class="point blue">4. Easy UI for comfortable experience to everyone</div>
      </div>
    </div>
      );
    }




    export default App;
