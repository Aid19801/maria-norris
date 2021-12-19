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

const PagePodcast = ({ data }: Props) => {
  console.log('data is back =>', data);
  return (
    <Layout title="Blog back">
      <h1>Podcast</h1>
    </Layout>
  )
}

export async function getServerSideProps(context: any) {
  const endpoint = prismic.getEndpoint("funk27");
  const client = prismic.createClient(endpoint, { fetch });
  const data = await client.getByUID('blog-page', context.params.id);
  return { props: { data } }
}

export default PagePodcast;
