import Head from 'next/head';
import { FunctionComponent } from 'react';
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

interface props {
  children: JSX.Element | JSX.Element[] 
}  

export const MainLayout: FunctionComponent<props>  = ({ children }) => {
    return (
        <div className={styles.container}>
          
          <Head>
            <title>Home - Fernando</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        
          <Navbar />
    
          <main className={styles.main}>
    
            { children }
    
          </main>     
        </div>
      )
};
