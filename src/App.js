import "./App.css";
import {Header, Footer, Container } from "./components/index";
import { Home, Profile } from "./Pages/ingexg";
import { Route, Routes, BrowserRouter } from "react-router-dom";
const App = ()=>{
    return (
        <>
    <BrowserRouter>
        <Header/>
        <Container>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="profile" element={<Profile/>}/>
        </Routes>
        </Container>
        <Footer/>  
    </BrowserRouter>
         
        </>
    )
}

export default App;