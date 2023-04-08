import "./App.css";
import {Header, Footer, Container } from "./components/index";
import { Home, Profile } from "./Pages/ingexg";
import { Route, Routes, HashRouter } from "react-router-dom";
const App = ()=>{
    return (
        <>
    <HashRouter>
        <Header/>
        <Container>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="profile" element={<Profile/>}/>
        </Routes>
        </Container>
        <Footer/>  
    </HashRouter>
         
        </>
    )
}

export default App;