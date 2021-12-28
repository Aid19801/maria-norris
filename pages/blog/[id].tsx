import { GetStaticProps } from "next";
import Link from "next/link";
import fetch from "node-fetch";
import * as prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";
import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layout";
import List from "../../components/List";
import { useMainContext } from "../../context/main";
import { PrismicRichText } from "@prismicio/react";
import { Box, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

type Props = {
  data: any;
};

const PageBlog = ({ data }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  let bodyContent = [];

  data.data["blog-body"].forEach((eachPtag) => {
    if (eachPtag.text !== "") {
      bodyContent.push(eachPtag);
    } else {
      return null;
    }
  });

  const headline = data.data["blog-title"][0].text;

  return (
    <Layout title={headline}>
      <Grid container spacing={2} className="blog__container">
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ padding: "0px !important" }}
        >
          <Box sx={{ maxWidth: isMobile ? 350 : 700 }}>
            <RichText render={data.data["blog-title"]} />
          </Box>

          <Image
            className="blog__mainImage"
            src={data.data["blog-image-1"].twitter.url}
            alt={
              data.data["blog-image-1"].twitter.alt ||
              "blog man talking politics dystopia"
            }
            {...data.data["blog-image-1"].twitter.dimensions}
          />
          <Box
            sx={{
              // border: "1px solid red",
              width: "100%",
              maxWidth: isMobile ? 375 : 800,
              mt: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RichText render={bodyContent} />
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  const endpoint = prismic.getEndpoint("funk27");
  const client = prismic.createClient(endpoint, { fetch });
  const data = await client.getByUID("blog-page", context.params.id);
  return { props: { data } };
}

export default PageBlog;
