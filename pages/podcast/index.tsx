import { GetStaticProps } from "next";
import Link from "next/link";
import fetch from "node-fetch";
import * as prismic from "@prismicio/client";

import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layout";
import List from "../../components/List";
import { useMainContext } from "../../context/main";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

type Props = {
  data: any;
};

const PagePodcastIndex = ({ data }: Props) => {
  console.log("data", data);
  const mostRecentEpisode = data?.body[0].items[0];
  return (
    <Layout title="Funk-27 | Podcasts">
      <h1>Aid Thompsin & Other Disappointments</h1>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="podcast background microphones"
              height="140"
              image="/poddy.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {mostRecentEpisode.title1[0].text}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {mostRecentEpisode.description[0].text}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          {/* <Box sx={{ border: '1px solid grey', p: 2, width: '100%', height: '100%', position: 'relative' }}>
            <Image
              className="podcast__episodeBackground"
              src="/poddy.png"
              width="100%"
              height="100%"
            />
            <img
              src={mostRecentEpisode.guest_photo.url}
              alt={mostRecentEpisode.guest_photo.alt}
              height={90}
              width={90}
            />
            <Typography variant="h4">
              {mostRecentEpisode.title1[0].text}
            </Typography>
            <Typography variant="body1">
              {mostRecentEpisode.description[0].text}
            </Typography>
          </Box> */}
        </Grid>
      </Grid>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const endpoint = prismic.getEndpoint("funk27");
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
