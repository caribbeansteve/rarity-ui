import type { NextPage } from 'next'
import Layout from "@components/Layout";
import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/pages/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout>
      </Layout>
    </div>
  )
}

export default Home
