import { Link } from "react-router-dom"
import Banner from "../../components/Banner"
import Gallery from "../../components/Gallery"
import banner1 from "/src/assets/banner1.png"

function Home() {

  return (
    <>
      <Banner imageURL={banner1} />
      <h1 class="bannerTitle">Chez nous, partout et ailleurs</h1>
      <Gallery />
    </>
  )
}

export default Home
