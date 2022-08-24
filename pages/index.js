import Head from 'next/head'
import Image from 'next/image'
import Form from './components/form'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.body}>
      <section className={styles.container}>
        <h1>RandoNum</h1>
        <Form/>
      </section>
    </div>
  )
}
