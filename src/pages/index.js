import Head from 'next/head'
import Header from '@/components/Header'
import Board from '@/components/Board'
import Footer from '@/components/Footer'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Board/>
      <Footer/>
    </div>
  )
}
