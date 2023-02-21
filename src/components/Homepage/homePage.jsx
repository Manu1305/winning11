import React from 'react'
import Header from '../Header/Header'
import Rightpic from '../login/Rightpic'
import SubHead from '../Subhead/SubHead'
import Bar from '../up-liv-com/bar'
import Upcoming from '../upcomingMatch/match'

function HomePage() {
  return (
    <div>
        <div>
        <Header/>
        <SubHead/>
        <Bar/>
        <Upcoming/>
        <Rightpic/>
        </div>
    </div>
  )
}

export default HomePage
