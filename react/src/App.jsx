import Home from "./components/Home"
import InputExe from "./components/InputExe"
import Toggle from "./components/Toggle"
import UseEffect from "./components/UseEffect"
import UseStateExe from "./components/UseStateExe"

const App = ()=>{
  const obj = {
    name:"adam",
    city:"mars"
  }
  return(
    <>
      {/* <Home obj = {obj} />
      <UseStateExe/>
      <InputExe/> */}
      <Toggle/>
      <UseEffect/>
    </>
  )
}

export default App