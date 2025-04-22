import { useEffect } from 'react'
import { animate } from 'animejs'
import AppRoutes from "./routes"

function App() {
  useEffect(() => {
    animate('#box', {
      translateX: 250,
      duration: 1000,
      easing: 'easeInOutQuad',
    })
  }, [])

  return (
    <AppRoutes/>
  )
}

export default App