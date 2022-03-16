import React from 'react'

interface ISignInBarProps {
  signIn: () => void
}

const SignInBar: React.FunctionComponent<ISignInBarProps> = (props: ISignInBarProps) => {
  return (
    <div className='sign-in'>
      <h1>Welcome to the page!</h1>
      <button
        onClick={e => props.signIn()}
      >
        Sign In!
      </button>
    </div>
  )
}

export default SignInBar