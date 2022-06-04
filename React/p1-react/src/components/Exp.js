import './ExpenseItem.css'

const title = 'he'
const text = 'is'
const sub = 'lazy'
function Exp (p) {
    return(
        <div>
            <h1>1. {p.title}</h1>
            <h1>2. {p.text.toISOString()}</h1>
            <h1>3. {p.sub}</h1>
        </div>
    )
}

export default Exp