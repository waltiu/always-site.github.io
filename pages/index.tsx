import type { NextPage } from 'next'
import Head from 'next/head'
import classNames from 'classnames'
import TopNav from 'compoments/TopNav'
import Label from 'compoments/Label'
import Intro from 'compoments/Intro'
import styles from './index.module.scss'



const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>always-site</title>
        <meta name="description" content="Generated by always-site" />
        <link rel="icon" href="https://avatars.githubusercontent.com/u/35523427?v=4" />
      </Head>

      <main className={classNames('scrollbar-beautiful',styles['always-site'])}>
        <TopNav/>
        <div className={styles.middle}>
            <Label />
            <Intro/>
        </div>
      </main>


    </div>
  )
}
// page目录下的组件，才会调用这个方法
Home.getInitialProps = async () => {
  return {
  };
}
export default Home
