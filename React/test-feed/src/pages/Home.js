import { FeedList } from '../components/FeedList'
import { FeedForm } from '../components/FeedForm'
import { FeedStat } from '../components/FeedStat'

export const Home = () => {  
  return (
    <>
      <FeedStat />
      <FeedForm />
      <FeedList />
    </>
  )
}
