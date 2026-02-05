import { Link } from "react-router-dom"
import Banner from "../../components/Banner"
import Gallery from "../../components/Gallery"
import banner1 from "/src/assets/banner1.png"
import styles from "./Home.module.scss"

function Home() {

  return (
    <>
      <div className={styles.home}>
        <Banner imageURL={banner1} banner="Chez nous, partout et ailleurs" />
        <Gallery />
      </div>
    </>
  )
}

export default Home
