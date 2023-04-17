function App() {
  var items = [
    {id: 1, name: 'pencil'},
    {id: 2, name: 'eraser'},
    {id: 3, name: 'brush'},
  ]
  return (
    <div>
      <ul>
        {
          items.map((i, idx) => (
            <li key={i.id}>{i.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App


{/* <div>
      <Header />
      <main>
        <Home />
        <Post />
        <About />
      </main>
    </div> */}