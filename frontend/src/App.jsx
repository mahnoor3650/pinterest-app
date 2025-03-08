import './app.css'
import Gallery from './components/gallery/Gallery'
import Leftbar from './components/leftBar/Leftbar'
import TopBar from './components/topBAr/TopBar'

const App = () => {
  return (
    <div className='app'>
      {" "}
      <Leftbar />
      <div className="content">
        <TopBar />
        <Gallery />
      </div>
    </div>
  );
}

export default App