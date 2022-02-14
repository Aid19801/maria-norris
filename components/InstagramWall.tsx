// import * as React from "react";
// import { Box, Card, Button, Divider, Typography, Grid } from "@mui/material";
// import Link from "next/link";
// import Image from "next/image";

// interface EachTiktokProps {
//   text: string;
//   retweets: string;
//   likes: string;
//   urlToTweet: string;
// }
// export const EachTweet: React.FC<EachTiktokProps> = ({
//   text,
//   retweets,
//   likes,
//   urlToTweet,
// }) => {
//   return (
//     <Link href={urlToTweet}>
//       <a target="_blank" className="twitter__link">
//         <Box className="twitter__wrapper" sx={{ mb: 2 }}>
//           <>
//             <Box
//               className="twitter__tweetContainer"
//               sx={{
//                 display: "flex",
//                 flexDirection: "row",
//                 // border: "1px solid green",
//               }}
//             >
//               {/* profile pic and name */}
//               <Box
//                 className="twitter__profilePicName"
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "flex-start",
//                   // border: "1px solid blue",
//                 }}
//               >
//                 <Image
//                   className="twitter__img"
//                   src="/me.jpeg"
//                   alt="aid thompsin twitter"
//                   height="50"
//                   width="50"
//                 />
//                 <Typography
//                   sx={{ color: "lightgrey", fontSize: 12, textAlign: "center" }}
//                 >
//                   @aidThompsin
//                 </Typography>
//               </Box>

//               {/* main body */}

//               <Box
//                 className="twitter__textContainer"
//                 sx={{ display: "flex", flexDirection: "column", p: 1 }}
//               >
//                 <Typography
//                   variant="body1"
//                   color="secondary"
//                   fontFamily="Arial"
//                   sx={{ fontSize: 12 }}
//                 >
//                   {text}
//                 </Typography>
//                 <Box
//                   className="twitter__stats"
//                   sx={{
//                     display: "flex",
//                     flexDirection: "row",
//                     justifyContent: "flex-end",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexDirection: "row",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <Typography
//                       variant="body1"
//                       color="primary"
//                       sx={{ fontSize: 11 }}
//                     >
//                       {retweets}&nbsp;
//                     </Typography>
//                     <Image
//                       src="/retweet.png"
//                       height={12}
//                       width={12}
//                       alt="retweet icon"
//                     />
//                     &nbsp;
//                   </Box>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexDirection: "row",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <Typography
//                       variant="body1"
//                       color="primary"
//                       sx={{ fontSize: 11 }}
//                     >
//                       {likes}&nbsp;
//                     </Typography>
//                     <Image
//                       src="/love.png"
//                       height={12}
//                       width={12}
//                       alt="retweet icon"
//                     />
//                     &nbsp;
//                   </Box>
//                 </Box>
//               </Box>
//             </Box>
//             <Divider sx={{}} />
//           </>
//         </Box>
//       </a>
//     </Link>
//   );
// };

// export const InstagramWall: React.FC = () => {
//   return (
//     <Card sx={{ p: 2 }}>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "baseline",
//           justifyContent: "flex-start",
//         }}
//       >
//         <h1
//           style={{
//             fontFamily: "Helvetica",
//             fontWeight: 300,
//             fontSize: 21,
//             margin: 0,
//           }}
//         >
//           Instas
//         </h1>
//         <p
//           style={{
//             fontFamily: "Helvetica",
//             fontWeight: 300,
//             fontSize: 12,
//             margin: 0,
//           }}
//         >
//           &nbsp; by
//         </p>
//         <a
//           href="https://www.instagram.com/aid_thompson/"
//           target="_blank"
//           style={{
//             fontFamily: "Helvetica",
//             fontWeight: 300,
//             fontSize: 12,
//             textDecoration: "none",
//             color: "#2b7bb9",
//           }}
//         >
//           &nbsp; @aidThompsin
//         </a>
//       </Box>

//       <Divider sx={{ mt: 2, mb: 2 }} />

//       <Grid container spacing={2}>
//         <Grid
//           item
//           xs={6}
//           md={4}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <Image src="/insta_1.jpg" height={350} width={250} />
//         </Grid>
//         <Grid
//           item
//           xs={6}
//           md={4}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <Image src="/insta_2.jpg" height={280} width={250} />
//         </Grid>
//         <Grid
//           item
//           xs={6}
//           md={4}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <Image src="/insta_3.jpg" height={350} width={250} />
//         </Grid>
//         <Grid
//           item
//           xs={6}
//           md={4}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <Image src="/insta_4.jpg" height={300} width={250} />
//         </Grid>
//         <Grid
//           item
//           xs={6}
//           md={4}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <Image src="/insta_5.jpg" height={370} width={250} />
//         </Grid>
//         <Grid
//           item
//           xs={6}
//           md={4}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <Image src="/insta_6.jpg" height={250} width={250} />
//         </Grid>
//       </Grid>

//       <Button
//         onClick={() => window.open("https://twitter.com/aidthompsin")}
//         variant="contained"
//         color="primary"
//         sx={{ width: "100%" }}
//       >
//         View more on Instagram
//       </Button>
//     </Card>
//   );
// };

// export default InstagramWall;
