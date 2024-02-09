import Header from './components/Header'
import VideoComponent from './components/VideoComponent'
import Poster from './assets/poster.webp'
import Couple from './components/CoupleComponent'

export default function App() {
  return (
    <div className ='bg-pink-50 w-full p-1'>
      <div className='mb-3 p-4 pb-2 pt-2'>
        <img src={Poster} alt='poster' className='w-screen rounded-xl'></img>
      </div>
      <Header></Header>
      <div>
        <Couple></Couple>
        <VideoComponent></VideoComponent>
      </div>
    </div>
  )
}