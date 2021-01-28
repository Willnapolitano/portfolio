import React from 'react'
import Head from 'next/head'
import Header from '../components/header'

const App = () => {
    return(
        <div>
            <Head>
                <link rel="icon" href={require('../assets/imgs/icons8-monitor-64.svg')}></link>
                <meta ></meta>
                <title>Willnapolitano</title>
            </Head>
            <main> 
                <Header>
                    
                </Header>
            </main>
        </div>
    )
}

export default App