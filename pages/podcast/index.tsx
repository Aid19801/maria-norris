import * as React from "react";
import { GetStaticProps } from "next";
import fetch from "node-fetch";
import { getEndpoint, createClient } from "@prismicio/client";
import { useAnalytics } from "use-analytics";
import Layout from "../../components/Layout";
import { useMainContext } from "../../context/main";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Grow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ContentCard } from "../../components/ContentCard";
import { MuiDivider } from "../../components/MuiDivider";
import Link from "next/link";
import Head from "next/head";

type Props = {
  data: any;
};

const PagePodcastIndex = ({ data }: Props) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  // const mostRecentEpisode = data?.body[0].items[0];
  // const secondMostRecentEpisode = data?.body[1].items[0];
  const { page } = useAnalytics();
  const { toggleLoading } = useMainContext();

  React.useEffect(() => {
    page();
  }, []);
  React.useEffect(() => {
    if (data) {
      toggleLoading(false);
    }
    console.log("data ", data);
  }, [data]);
  return (
    <Layout title="Funk-27 | Podcasts">
      <Head>
        <title>F27 | Aid Thompsin & Other Disappointments</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={data.twitter_image.url} />
        <meta name="twitter:creator" content="@aidThompsin" />
        <meta name="twitter:site" content="@aidThompsin" />

        <meta
          property="og:title"
          //@ts-ignore
          content={`F27 | Aid Thompsin & Other Disappointments`}
          key="title"
        />

        <meta
          property="og:description"
          //@ts-ignore
          content="A lonely Father-of-two is marooned from his friends and family and has to resort to booking a conversation in with someone every Friday night or he'll lose his fucking mind. Join comedian, Aid Thompsin, and high-profile guests as they try to make sense of the senseless. #Tech #Politics #Dystopia."
          key="description"
        />

        <meta
          property="og:image"
          //@ts-ignore
          content={data.twitter_image.url}
          key="seo blog share image"
        />
      </Head>

      <Typography
        variant="h1"
        color="secondary"
        sx={{
          mb: 5,
          lineHeight: 1,
          // fontFamily: "monospace",
          color: (theme) => theme.palette.secondary.light,
          fontSize: isDesktop ? 200 : 110,
        }}
      >
        We'll be right back...
      </Typography>
      <Typography
        variant="h5"
        color="secondary.main.light"
        sx={{
          fontFamily: "monospace",
          mb: 5,
        }}
      >
        Aid Thompsin & Other Disappointments
      </Typography>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // @ts-ignore
  const endpoint: any = getEndpoint("funk27");
  // @ts-ignore
  const client: any = createClient(endpoint, { fetch });
  const { data } = await client.getByUID("page", "podcast");
  return { props: { data } };
};

export default PagePodcastIndex;
