import { Link } from "react-router-dom"
import Banner from "../../components/Banner"
import Gallery from "../../components/Gallery"
import banner1 from "/src/assets/banner1.png"

function Home() {

  return (
    <>
      <Banner imageURL={banner1} banner="Chez nous, partout et ailleurs" />
      <Gallery />
    </>
  )
}

export default Home
