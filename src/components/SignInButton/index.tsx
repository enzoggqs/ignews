import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react';

import styles from './styles.module.scss'

const SignInButton = () => {
  const { data: session } = useSession();

  console.log(session)

  return session ? (
    <button 
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#04b361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} onClick={() => signOut()}></FiX>
    </button>
  ) : (
    <button 
      type="button"
      className={styles.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}

export default SignInButton