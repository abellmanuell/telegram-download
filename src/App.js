import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import axios from 'axios';

// Components
import LeftSideSection from './Components/LeftSideSection';
import RightSideSection from './Components/RightSideSection';

async function data(){
    const result = await axios.get('http://localhost:8000/');
    console.log(result.data)
}

data();
class App extends React.Component{
    render(){
        return(
            <>
            <main className="container">
               <LeftSideSection />
               <RightSideSection />
            </main>
            </>
        )
    }
}

export default App