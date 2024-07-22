import { Footer, Header } from "./components"
import { HomePage } from "./pages"

function App() {

  return (
    <>
      <Header />
      <main className="main">
        <HomePage />
      </main>
      <Footer />
    </>
  )
}

export default App
