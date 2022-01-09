import 'tailwindcss/tailwind.css'
import "../styles/global.scss"
import React,{useEffect,useStates} from "react";
import {Layout} from "../Components"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
