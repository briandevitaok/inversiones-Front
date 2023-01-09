import { useContext } from "react"
import { AuthContext } from "../../auth/context/AuthContext"
import { LoginPages } from "../../auth/pages"
import { Navbar } from "../../ui/Navbar"
import { SideBar } from "../../ui/SideBar"

export const PanelPages = () => {

 
  const drawWithd = 240
  return (


    <>

    <Navbar/>
    <SideBar drawWithd={drawWithd}/>
    <div className="container text-center">
      <h1>Panel Principal</h1>
      <hr />

    </div>



    </>
  )
}
