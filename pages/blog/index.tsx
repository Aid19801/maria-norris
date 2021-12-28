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
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { BlogCard } from "../../components/BlogCard";

type Props = {
  data: any;
};

const PageBlogIndex = ({ data }: Props) => {
  //
  console.log("data is ", data);
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Layout title="Blog Index Page">
      <Typography
        variant="h1"
        color="secondary"
        sx={{
          my: 5,
          // fontFamily: "monospace",
          color: (theme) => theme.palette.secondary.light,
          fontSize: isDesktop ? 200 : 110,
        }}
      >
        Blog
      </Typography>

      <Grid container spacing={2}>
        {data.blogs.map((each) => {
          return (
            <Grid
              item
              xs={12}
              sm={10}
              md={4}
              key={each.blog.data["blog-title"][0].text}
            >
              <BlogCard
                slug={each.blog.uid}
                title={each.blog.data["blog-title"][0].text}
                comments={0}
                imgSrc={each.blog.data["blog-image-1"].twitter.url}
                imgAlt={each.blog.data["blog-image-1"].alt}
                categoryImgSrc={each.blog.data["blog-image-2"].url}
                date={each.blog.first_publication_date}
              />
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const endpoint = prismic.getEndpoint("funk27");
  const client = prismic.createClient(endpoint, { fetch });
  const { data } = await client.getByUID("page", "blog-home-page", {
    fetchLinks: [
      "blog-page.blog-title",
      "blog-page.blog-body",
      "blog-page.blog-image-1",
      "blog-page.blog-image-2",
      "blog-page.date",
    ],
  });
  return { props: { data } };
};

export default PageBlogIndex;
