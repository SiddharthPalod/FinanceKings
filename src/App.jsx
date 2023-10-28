import { About , News, Trends, } from './components'
import { scroller } from 'react-scroll';

scroller.scrollTo('myScrollToElement', {
  duration: 1500,
  delay: 100,
  smooth: 'easeInOutQuint',
  containerId: 'ContainerElementID',
});


function App() {

  return (
    <main className="app transition-all ease-in">
      {/* <About/> */}
      <Trends/>
      {/* <News/> */}
    </main>
  )
}

export default App
