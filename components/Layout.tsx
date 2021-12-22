import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from './Nav'
import { Box } from '@mui/material'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Funk-27 | Politics, Dystopia, Comedy, Tech.' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Nav />
    <Box sx={{ marginLeft: '100px', paddingRight: 4 }}>
      {children}
    </Box>
  </div>
)

export default Layout
