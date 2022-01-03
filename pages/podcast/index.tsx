import { GetStaticProps } from "next";
import fetch from "node-fetch";
import * as prismic from "@prismicio/client";
import Layout from "../../components/Layout";
import { useMainContext } from "../../context/main";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Grow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { PodcastCard } from "../../components/PodcastCard";
import { BadgeAvatar } from "../../components/Badge";
import { MuiDivider } from "../../components/MuiDivider";
import Link from "next/link";
import Head from "next/head";

type Props = {
  data: any;
};

const PagePodcastIndex = ({ data }: Props) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const mostRecentEpisode = data?.body[0].items[0];
  const secondMostRecentEpisode = data?.body[0].items[1];
  const { toggleLoading } = useMainContext();
  if (data) {
    toggleLoading(false);
  }
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
        Podcast
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
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grow in={true}>
          <Grid item xs={12} md={6}>
            <PodcastCard
              title={mostRecentEpisode.title1[0].text}
              description={mostRecentEpisode.description[0].text}
              episodeArtworkSrc={mostRecentEpisode.podc_ep_twitter_img.url}
              artworkAlt={mostRecentEpisode.podc_ep_twitter_img.alt}
              guestImgSrc={mostRecentEpisode.guest_photo.url}
              slug={mostRecentEpisode.episode_slug[0].text}
            />
          </Grid>
        </Grow>
        <Grow in={true}>
          <Grid item xs={12} md={6} lg={4}>
            <PodcastCard
              title={secondMostRecentEpisode.title1[0].text}
              description={secondMostRecentEpisode.description[0].text}
              episodeArtworkSrc={
                secondMostRecentEpisode.podc_ep_twitter_img.url
              }
              artworkAlt={secondMostRecentEpisode.podc_ep_twitter_img.alt}
              guestImgSrc={secondMostRecentEpisode.guest_photo.url}
              slug={secondMostRecentEpisode.episode_slug[0].text}
            />
          </Grid>
        </Grow>
      </Grid>

      <MuiDivider prim />

      <Grid container spacing={2}>
        {data?.body[0].items.slice(2, 10).map((each) => (
          <Grid item xs={12} md={4} lg={3} key={each.title1[0].text}>
            <PodcastCard
              firstBatch
              descriptionLength={128}
              title={each.title1[0].text}
              description={each.description[0].text}
              episodeArtworkSrc={each.podc_ep_twitter_img.url}
              artworkAlt={each.podc_ep_twitter_img.alt}
              guestImgSrc={each.guest_photo.url}
              slug={each.episode_slug[0].text}
            />
          </Grid>
        ))}
        <Grid item xs={12} md={6}>
          <PodcastCard
            title={data?.body[0].items[10].title1[0].text}
            description={data?.body[0].items[10].description[0].text}
            episodeArtworkSrc={data?.body[0].items[10].podc_ep_twitter_img.url}
            artworkAlt={data?.body[0].items[10].podc_ep_twitter_img.alt}
            guestImgSrc={data?.body[0].items[10].guest_photo.url}
            slug={data?.body[0].items[10].episode_slug[0].text}
          />
        </Grid>
        <MuiDivider />
        <Grid item xs={12} md={4} lg={3}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {data?.body[0].items.slice(11, 13).map((each) => (
              <Card sx={{ mb: 2 }} key={each.title1[0].text}>
                <Link
                  href="/podcast/[id]"
                  as={`/podcast/${each.episode_slug[0].text}`}
                >
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="secondary.dark"
                      sx={{ position: "relative" }}
                    >
                      {each.title1[0].text.toLocaleLowerCase()}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      color="secondary.light"
                      sx={{ position: "relative" }}
                    >
                      {each.description[0].text}
                    </Typography>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </Box>
        </Grid>

        {data?.body[0].items.slice(13, 21).map((each) => (
          <Grid item xs={12} md={4} lg={3} key={each.title1[0].text}>
            <PodcastCard
              firstBatch
              descriptionLength={128}
              title={each.title1[0].text}
              description={each.description[0].text}
              episodeArtworkSrc={each.podc_ep_twitter_img.url}
              artworkAlt={each.podc_ep_twitter_img.alt}
              guestImgSrc={each.guest_photo.url}
              slug={each.episode_slug[0].text}
            />
          </Grid>
        ))}
        <Grid item xs={12} md={4} lg={3}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {data?.body[0].items.slice(21, 23).map((each) => (
              <Card sx={{ mb: 2 }} key={each.title1[0].text}>
                <Link
                  href="/podcast/[id]"
                  as={`/podcast/${each.episode_slug[0].text}`}
                >
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="secondary.dark"
                      sx={{ position: "relative" }}
                    >
                      {each.title1[0].text.toLocaleLowerCase()}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      color="secondary.light"
                      sx={{ position: "relative" }}
                    >
                      {each.description[0].text}
                    </Typography>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <PodcastCard
            title={data?.body[0].items[23].title1[0].text}
            description={data?.body[0].items[23].description[0].text}
            episodeArtworkSrc={data?.body[0].items[23].podc_ep_twitter_img.url}
            artworkAlt={data?.body[0].items[23].podc_ep_twitter_img.alt}
            guestImgSrc={data?.body[0].items[23].guest_photo.url}
            slug={data?.body[0].items[23].episode_slug[0].text}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <PodcastCard
            title={data?.body[0].items[24].title1[0].text}
            description={data?.body[0].items[24].description[0].text}
            episodeArtworkSrc={data?.body[0].items[24].podc_ep_twitter_img.url}
            artworkAlt={data?.body[0].items[24].podc_ep_twitter_img.alt}
            guestImgSrc={data?.body[0].items[24].guest_photo.url}
            slug={data?.body[0].items[24].episode_slug[0].text}
          />
        </Grid>
      </Grid>

      <MuiDivider prim />

      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        {data?.body[1].items.map((each) => (
          <Grid item xs={12} key={each.title1[0].text}>
            <Card sx={{ maxWidth: 350 }}>
              <Link
                href="/podcast/[id]"
                as={`/podcast/${each.episode_slug[0].text}`}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="secondary.dark"
                    sx={{ position: "relative" }}
                  >
                    {each.title1[0].text.toLocaleLowerCase()}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    color="secondary.light"
                    sx={{ position: "relative" }}
                  >
                    {each.description[0].text}
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // @ts-ignore
  const endpoint = prismic.getEndpoint("funk27");
  // @ts-ignore
  const client = prismic.createClient(endpoint, { fetch });
  const { data } = await client.getByUID("page", "podcast", {
    // fetchLinks: [
    //   "blog-page.blog-title",
    //   "blog-page.blog-body",
    //   "blog-page.blog-image-1",
    //   "blog-page.blog-image-2",
    //   "blog-page.date",
    // ],
  });
  return { props: { data } };
};

export default PagePodcastIndex;
