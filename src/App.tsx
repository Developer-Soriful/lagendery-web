import { Outlet } from "react-router"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
const App = () => {
  return (
    <div>
      {/* this is for nav bar components */}
      <Navbar />
      {/* this is for outlet */}
      <Outlet />
      {/* this is for footer section on this app */}
      <Footer />
    </div>
  )
}

export default App
