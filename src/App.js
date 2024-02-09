import Header from './components/Header'
import Item from './components/CoupleComponent/Item'
import VideoComponent from './components/VideoComponent'

export default function App() {
  return (
    <div className ='bg-pink-50 w-full p-2'>
      <Header></Header>
      <div className='flex-1 md:flex'>
        <Item Image='https://i.pinimg.com/236x/2f/12/94/2f12942fc56d1ccf226acb1d4daf92d3.jpg' Name='Mind'></Item>
        <VideoComponent></VideoComponent>
      </div>
    </div>
  )
}