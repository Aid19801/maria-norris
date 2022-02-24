import * as React from "react";
import { GetStaticProps } from "next";
import fetch from "node-fetch";
import { getEndpoint, createClient } from "@prismicio/client";
import Layout from "../components/Layout";
import { useMainContext } from "../context/main";
import { Card, Grid, Grow, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ContentCard } from "../components/ContentCard";
import { MuiDivider } from "../components/MuiDivider";
import Head from "next/head";
import { content } from "../utils/strings";
import Image from "next/image";

type Props = {
  data: any;
};

const IMG_WIDTH = 300;
const IMG_HEIGHT = 150;

const PagePodcastIndex = ({ data }: Props) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { toggleLoading } = useMainContext();

  React.useEffect(() => {
    if (data) {
      toggleLoading(false);
    }
  }, [data]);
  return (
    <Layout title="Enemies Of The People">
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content={`${content.HOME_URL}${content.meta.podcastImage}`}
        />
        <meta
          name="twitter:creator"
          content={content.meta.twitterSiteCreator}
        />
        <meta name="twitter:site" content={content.meta.twitterSite} />
        <meta
          property="og:title"
          content={content.meta.podcastTitle}
          key="title"
        />

        <meta
          property="og:description"
          content={content.podcast_description}
          key="description"
        />

        <meta name="description" content={content.podcast_description} />

        <meta
          property="og:image"
          content={`${content.HOME_URL}${content.meta.podcastImage}`}
          key="Dr Maria W Norris"
        />
      </Head>

      <Typography
        variant="h1"
        color="secondary"
        sx={{
          mb: 2,
          lineHeight: 1,
          color: (theme) => theme.palette.secondary.light,
          fontSize: isDesktop ? 200 : 110,
          width: "100%",
        }}
      >
        Podcast
      </Typography>
      <Typography
        variant="h5"
        color="secondary.main.light"
        sx={{
          fontFamily: "monospace",
          mb: 0,
          width: "100%",
        }}
      >
        {content.podcast_title}
      </Typography>

      <MuiDivider straight />

      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        <Grow in={true}>
          <Grid item xs={12} md={6}>
            <ContentCard
              title="Enemies Of The People"
              description={content.podcast_para_1}
              backgroundArtworkSrc="/maria_pod.jpeg"
              artworkAlt="enemies of the people main artwork"
              profileImgSrc="/maria_pod.jpeg"
            />
          </Grid>
        </Grow>
        <Grow in={true}>
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ p: 2 }}>
              <Typography variant="body1">
                Follow us on Twitter{" "}
                <a
                  href="https://twitter.com/enemiespod"
                  target="_blank"
                  style={{ color: "grey" }}
                >
                  @EnemiesPod
                </a>{" "}
                or Maria on{" "}
                <a
                  style={{ color: "grey" }}
                  target="_blank"
                  href="https://twitter.com/MariaWNorris"
                >
                  @MariaWNorris
                </a>
              </Typography>
            </Card>

            <Card
              className="podcast__review_container"
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: isDesktop ? "column" : "row",
                flexWrap: "wrap",
                mt: 2,
                p: 2,
                justifyContent: isDesktop ? "space-between" : "center",
                minHeight: isDesktop ? 500 : 400,
              }}
            >
              <Image
                className="podcast__review_img"
                src={content.podcast_review_1}
                height={IMG_HEIGHT}
                width={IMG_WIDTH}
              />
              <Image
                className="podcast__review_img"
                src={content.podcast_review_2}
                height={IMG_HEIGHT}
                width={IMG_WIDTH}
              />
              <Image
                className="podcast__review_img"
                src={content.podcast_review_3}
                height={IMG_HEIGHT}
                width={IMG_WIDTH}
              />

              {/* {!isDesktop && (
                <Image
                  className="podcast__review_img"
                  src={content.podcast_review_1}
                  height={150}
                  width={310}
                />
              )} */}
            </Card>
          </Grid>
        </Grow>
      </Grid>
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
