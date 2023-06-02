import { FeedList } from '../FeedList'
import { FeedStat } from '../FeedStat'
import { FeedForm } from '../FeedForm'

export const Home = () => {

  return (
    <>
      <FeedStat />
      <FeedForm />
      <FeedList />
    </>
  )
}
