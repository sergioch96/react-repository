import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  const formatUserName = (userName) => `@${userName}`
  
  return (
    <section className='App'>
      <TwitterFollowCard 
        formatUserName={formatUserName} 
        userName="sergioch96" 
        name="Sergio Chamorro" 
        isFollowing={false} />

      <TwitterFollowCard 
        formatUserName={formatUserName} 
        userName="midudev" 
        name="Miguel Durán" 
        isFollowing />

      <TwitterFollowCard 
        formatUserName={formatUserName} 
        userName="elonmusk" 
        name="Elon Musk" 
        isFollowing />

      <TwitterFollowCard 
        formatUserName={formatUserName} 
        userName="vxnder" 
        name="Vanderhart" 
        isFollowing /> 
    </section>
  )
}