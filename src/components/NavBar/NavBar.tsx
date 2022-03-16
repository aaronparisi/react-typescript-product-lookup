import React from 'react'
import SignInBar from './SignInBar'
import SignOutBar from './SignOutBar'

interface INavBarProps {
  currentUser: string | null,
  signIn: () => void,
  signOut: () => void
}

// TODO decide if I want to split out the two bars (2 levels of prop drilling here)

const NavBar: React.FunctionComponent<INavBarProps> = (props: INavBarProps) => {
  return (
    <div className="nav-bar">
      
      {props.currentUser ? <SignOutBar signOut={props.signOut} currentUser={props.currentUser}/> : <SignInBar signIn={props.signIn}/>}
    </div>
  )
}

export default NavBar