import "./Components/_base/reset.scss"
import "./Components/_base/_global.scss"

import Header from './Components/organisms/Header/Header'
import Footer from "./Components/organisms/Footer/Footer"
import SocialPosts from "./Components/organisms/SocialPosts/SocialPosts";

function App() {
  

  return (
      <div className="container">
          <Header />
          {/* <SocialPosts/> */}
          <div className="container--grey">
              <Footer />
          </div>
      </div>
  );}
export default App
