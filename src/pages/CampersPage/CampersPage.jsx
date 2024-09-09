import { Outlet } from "react-router"
import { Button } from "../../components/Button/Button"

const CampersPage = () => {
  return (
    <div>CampersPage
      <Button title='click me' variant="secondary" />
      <Outlet />
    </div>
  )
}

export default CampersPage