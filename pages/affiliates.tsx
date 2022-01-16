import { Grid, Grow } from "@mui/material";
import Head from "next/head";
import * as React from "react";
import Layout from "../components/Layout";
import { ContentCard } from "../components/ContentCard";

export const PageAffiliates = () => {
  return (
    <Layout>
      <Head>
        <title>F27 | Affiliates</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="http://www.timeline.tv/wp-content/uploads/2019/06/O8A3580-copy-2.png"
        />
        <meta name="twitter:creator" content="@aidThompsin" />
        <meta name="twitter:site" content="@aidThompsin" />

        <meta property="og:title" content={`F27 | Affiliates`} key="title" />

        <meta
          property="og:description"
          content="Funk-27 is a platform for Political discussion and Dystopian blogs & podcasts. We work with some exciting names."
          key="description"
        />

        <meta
          property="og:image"
          content="http://www.timeline.tv/wp-content/uploads/2019/06/O8A3580-copy-2.png"
          key="seo affiliates studio image"
        />
      </Head>
      <Grid container spacing={2} className="blog__container">
        <Grow in={true}>
          <Grid item xs={12} md={6}>
            <ContentCard
              title="SuperTanskiii"
              description="Lorem ipsum must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes."
              backgroundArtworkSrc="http://www.timeline.tv/wp-content/uploads/2019/06/O8A3580-copy-2.png"
              artworkAlt="supertanskiii"
              profileImgSrc="https://yt3.ggpht.com/_JhorVEZvWBHhRljeSesNjqPRuLJKa0geGtLOsya4_kmyMh9DjgADQdvnYcMiOjKzrOemc6r=s900-c-k-c0x00ffffff-no-rj"
              slug="/episode-49-tan-daviemoo"
            />
          </Grid>
        </Grow>
        <Grow in={true}>
          <Grid item xs={12} md={6}>
            <ContentCard
              title="DavieMoo"
              description="Lorem ipsum must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes."
              backgroundArtworkSrc="http://www.timeline.tv/wp-content/uploads/2019/06/O8A3580-copy-2.png"
              artworkAlt="daviemoo"
              profileImgSrc="https://daviemoo.files.wordpress.com/2021/01/image.jpg?w=200"
              slug="/episode-49-tan-daviemoo"
            />
          </Grid>
        </Grow>
      </Grid>
    </Layout>
  );
};

export default PageAffiliates;
