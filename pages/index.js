import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut } from 'next-auth/react';

//image
// import codeImage from '../public/codeImage.svg';

// copy url linl
// https://pixabay.com/images/search/nature/

export default function Home() {

  const session = useSession();

  console.log(session);

  if(session.data === null) {
    return (
      <button onClick={signIn}>Login</button>
    )
  }
  return (
    <div className={styles.container}>
      {/* <Image 
        src={codeImage}
        alt='Code-Image'
        width={400}
        height={350}
      /> */}

      {/* <Image
        src={"/codeImage.svg"}
        alt='Code-Image'
        width={400}
        height={350}
      /> */}

      {/* <Image
        src="https://www.pexels.com/photo/timelapse-photography-off-water-fountain-719396/"
        alt="Code-Image"
        width={400}
        height={350}
      /> */}

      <h1>Auth {session?.data?.user?.name}</h1>
      <button onClick={signOut}>Logout</button>
    </div>
  )
}
