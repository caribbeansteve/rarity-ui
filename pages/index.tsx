import type { NextPage } from 'next'
import Layout from '@components/Layout';
import CTA from '@components/CTA'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/pages/Home.module.scss'
import Summoner from '@components/Summoner';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout>
      <CTA
        title="Rarity"
        description="Go on a magical quest using the loot-inspired adventure game"
      />
      <div className={styles.home}>
        <Summoner/>
      </div>
      
      </Layout>
    </div>
  )
}

export default Home

