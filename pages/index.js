import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Rating from '../components/Rating'
import Header from '../components/Header'
import Video from '../components/Video'
import More from '../components/More'
import Work from '../components/Work'


export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Rating />
      <Video />
      <More />
      <Work />
    </>
  )
}
