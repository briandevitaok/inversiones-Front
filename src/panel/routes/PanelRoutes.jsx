import { PanelPages } from "../pages/PanelPages"
import { Route, Routes } from 'react-router-dom'

export const PanelRoutes = () => {
  return (
    <>
    <div className="">
        <Routes>
            <Route path='panel' element={<PanelPages/>} />
        </Routes>
    </div>
    
    </>
  )
}
