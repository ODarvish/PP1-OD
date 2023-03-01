import { useEffect, useState } from 'react'
import { parseISO, intervalToDuration } from 'date-fns'
// import reactLogo from './assets/react.svg'
import './App.css'

function gerInterval() {
  const midsummer = parseISO('2023-06-24T00:00:00')
  const intervalId = setInterval(() => {
    const interval = intervalToDuration({
      start: new Date(),
      end: midsummer
    })
  })
}

function App() {
  const [untilMidsummer, setUntilMidsummer] = useState(getInterval())

  // const [count, setCount] = useState(0)

  // console.log('render')
 

  useEffect(() => {
    // console.log('useEffect')
    
    // const midsummer = parseISO('2023-06-24T00:00:00')
    const intervalId = setInterval(() => {
     
      const interval = getInterval()
      // const { months, days, hours, minutes, seconds } = interval  
      // console.log('months', months)
      // console.log('days', days)
      // console.log('hours', hours)
      // console.log('minutes', minutes)
      // console.log('seconds', seconds)
      // console.log('-days until midsummer', days)
      // console.log('setInterval')
      setUntilMidsummer(interval)
    }, 1000);

    return () => {
      // console.log('clearInterval')
      clearInterval(intervalId)
    }  
  }, [])
  console.log(untilMidsummer)
  return (
    <div className="App">
      {/* <div>
         <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1>Personal Project</h1>
      <h2>midsummer Countdown</h2> */}
      <div className="outerContainer">
        <div className="leftContainer">
          <h1 className="days">{untilMidsummer.months} months<br/>
            {untilMidsummer.days} days<br />
            {untilMidsummer.hours}:{untilMidsummer.minutes}:{untilMidsummer.seconds}</h1>
          {/* <h2 className="time">count: {count}</h2> */}
        </div>
        <div className="rightContainer"></div>
      </div>
      <div>
    </div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
