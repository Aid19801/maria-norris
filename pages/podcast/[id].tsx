import * as React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import fetch from "node-fetch";
import * as prismic from "@prismicio/client";
import { useTheme } from "@mui/material/styles";
import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layout";
import List from "../../components/List";
import { useMainContext } from "../../context/main";
import { Typography, useMediaQuery, Grid, Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import { Facebook, Podcasts, YouTube } from "@mui/icons-material";
type Props = {
  data: any;
};

const PagePodcast = ({ data }: Props) => {
  console.log("data is back =>", data.data.body[0]);
  const [thisEp, setThisEp] = React.useState(null);
  const router = useRouter();
  const { id } = router.query;
  // const first = data.data.body[0];
  // const second = data.data.body[1];

  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  React.useEffect(() => {
    const first = data.data.body[0].items;
    const second = data.data.body[1].items;
    const all = [...first, ...second];

    const res = all.filter((each) => each.episode_slug[0].text === id)[0];
    setThisEp(res);
  }, [data]);
  return (
    <Layout title="Blog back">
      <Typography
        variant="h1"
        color="secondary"
        sx={{
          mb: 5,
          color: (theme) => theme.palette.secondary.light,
          fontSize: isDesktop ? 60 : 80,
        }}
      >
        {thisEp && thisEp.title1[0].text}
      </Typography>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            pl: isDesktop ? "inherit" : "0px !important",
          }}
        >
          {thisEp && (
            <Image
              className="blog__mainImage"
              src={thisEp["podc_ep_twitter_img"].url}
              alt={
                thisEp["podc_ep_twitter_img"].alt ||
                "blog man talking politics dystopia"
              }
              {...thisEp["podc_ep_twitter_img"].dimensions}
            />
          )}
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            pl: isDesktop ? "inherit" : "0px !important",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", padding: 4 }}>
            <Typography
              variant="body2"
              sx={{ fontSize: isDesktop ? "inherit" : "30px" }}
            >
              {thisEp && thisEp.description[0].text}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <Image
              src="/spotify.png"
              height={40}
              width={40}
              alt="spotify logo"
            />
            <Image
              src="/youtube.png"
              height={40}
              width={40}
              alt="youtube logo"
            />
            <Image
              src="/podcast.png"
              height={40}
              width={40}
              alt="podcast app logo"
            />
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  const endpoint = prismic.getEndpoint("funk27");
  const client = prismic.createClient(endpoint, { fetch });
  const data = await client.getByUID("page", "podcast");
  return { props: { data } };
}

export default PagePodcast;
