import React from 'react'

interface ISignOutBarProps {
  signOut: () => void,
  currentUser: string | null
}

// TODO decide if currentUser in interface actually needs to be type string | null at this point

const SignOutBar: React.FunctionComponent<ISignOutBarProps> = (props: ISignOutBarProps) => {
  return (
    <div className='sign-out'>
      <h1>Welcome {props.currentUser}!</h1>
      <button
        onClick={e => props.signOut()}
      >
        Sign Out!
      </button>
    </div>
  )
}

export default SignOutBar