import {Layout} from "react-admin";
import {AppBarComponent} from "../index";

const MainLayout = ({ children }) => {
  return (
    <>
      <Layout appBar={AppBarComponent}>
        {children}
      </Layout>
    </>
  )
}

export default MainLayout
