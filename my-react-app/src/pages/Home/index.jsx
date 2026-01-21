import { Link } from "react-router-dom"
import Title from '../../components/Title'
import banner1 from "/src/assets/banner1.png"

function Home() {

  return (
    <>
      <Title title="test2" imageURL={banner1} />
      <h1>Chez nous, partout et ailleurs</h1>

    </>
  )
}

export default Home
