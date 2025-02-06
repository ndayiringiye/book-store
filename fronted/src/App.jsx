import { Box, Button } from "@chakra-ui/react"
import { Route, Routes } from "react-router"
import HomePage from "./Pages/HomePage"
import CreatePage from "./Pages/CreatePage"
import { NavBar } from "./components/NavBar"

const App = () => {
  return (
    <div>
     <Box minH={"100hv"} bgColor={"blue.400"}>
      <NavBar />
       <Routes>
         <Route path="/"  element={<HomePage/>}/>
         <Route path="/create"  element={<CreatePage/>}/>

       </Routes>
     </Box>
     
    </div>
  )
}

export default App