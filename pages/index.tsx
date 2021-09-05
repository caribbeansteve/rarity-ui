import type { NextPage } from 'next'
import Layout from '@components/Layout';
import CTA from '@components/CTA'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/pages/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout>
      <CTA
        title="Rarity"
        description="Go on a magical quest using the loot-inspired adventure game"
      />
      </Layout>
    </div>
  )
}

export default Home
