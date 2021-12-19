import { GetStaticProps } from 'next'
import Link from 'next/link'
import fetch from 'node-fetch';
import * as prismic from "@prismicio/client";

import { User } from '../../interfaces'
import { sampleUserData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import List from '../../components/List'
import { useMainContext } from '../../context/main'

type Props = {
  data: any;
}

const PageBlogsIndex = ({ data }: Props) => {
  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <h1>Blogs List</h1>
      <p>
        Example fetching data from inside <code>getStaticProps()</code>.
      </p>
      <p>You are currently on: /blogs</p>
      {/* <List items={items} /> */}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const endpoint = prismic.getEndpoint("funk27");
  const client = prismic.createClient(endpoint, { fetch });
  const { data } = await client.getByUID('page', "blog-home-page", {
    fetchLinks: [
      "blog-page.blog-title",
      "blog-page.blog-body",
      "blog-page.blog-image-1",
      "blog-page.blog-image-2",
      "blog-page.date",
    ],
  });
  return { props: { data } }
}

export default PageBlogsIndex
