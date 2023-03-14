import Head from 'next/head'
import Image from 'next/image'
import Board from '@/components/Board'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Board/>
    </div>
  )
}
