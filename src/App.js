import "./App.css"
import Main from "./components/Main"
import Create from "./components/Create"
import Read from "./components/Read"
import Update from "./components/Update"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud operations</h2>
        <Route exact path="/" component={Main} />
        <div>
          <Route exact path="/create" component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path="/read" component={Read} />
        </div>
        <Route exact path="/update" component={Update} />
      </div>
    </Router>
  )
}

export default App
