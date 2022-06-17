function App() {
  const title = 'Blog post'
  const body = 'body'
  const comments = [
    { id: 1, text: 'comment 1' },
    { id: 2, text: 'comment 2' },
    { id: 3, text: 'comment 3' },
    { id: 4, text: 'comment 4' },
  ]

  const loading = false
  const showComments = false
  const commentBlock = (
    <div className="comment">
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((c, idx) => (
          <li key={idx}>c.text</li>
        ))}
      </ul>
    </div>
  )

  if (loading) return <h1>Loading...</h1>
  return (
    <div>
      <h1>Hi</h1>
      {/* {showComments ? (
        <div className="comment">
          <h3>Comments ({comments.length})</h3>
          <ul>
            {comments.map((c, idx) => (
              <li key={idx}>c.text</li>
            ))}
          </ul>
        </div>
      ) : (
        null
      )} */}
      {showComments && commentBlock}
    </div>
  )
}

export default App
