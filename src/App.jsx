import { Routes, Route } from "react-router-dom"
import Navigation from "./routes/navigation/navigation.component"
import Home from "./routes/home/home.component"
import Works from "./routes/works/works.component"


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="work/*" element={<Works />} />
  {/*<Route path="blog" element={<Blog />} /> */}
      </Route>
    </Routes>
  )
}

export default App
