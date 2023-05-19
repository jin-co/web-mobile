import { EffectProvider } from './context/EffectContext'
import { Effect } from './components/Effect'

export const App = () => {    
  return (
    <EffectProvider>
      <div>
        <Effect />        
      </div>
    </EffectProvider>
  )
}
