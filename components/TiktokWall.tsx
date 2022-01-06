import * as React from "react";
import { Box, Card, Button, Divider } from "@mui/material";

export const TiktokWall: React.FC = () => {
  return (
    <Card sx={{ p: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "flex-start",
          padding: "10px",
        }}
      >
        <h1
          style={{
            fontFamily: "Helvetica",
            fontWeight: 300,
            fontSize: 21,
            margin: 0,
          }}
        >
          Tiktoks
        </h1>
        <p
          style={{
            fontFamily: "Helvetica",
            fontWeight: 300,
            fontSize: 12,
            margin: 0,
          }}
        >
          &nbsp; by
        </p>
        <a
          href="https://www.tiktok.com/@aidthompsin"
          target="_blank"
          style={{
            fontFamily: "Helvetica",
            fontWeight: 300,
            fontSize: 12,
            textDecoration: "none",
            color: "#2b7bb9",
          }}
        >
          &nbsp; @aidThompsin
        </a>
      </Box>
      <Divider sx={{}} />
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@aidthompsin/video/6953527493827579142"
        data-video-id="6953527493827579142"
        style={{ maxWidth: 605, minWidth: 325 }}
      >
        <section>
          <a
            target="_blank"
            title="@aidthompsin"
            href="https://www.tiktok.com/@aidthompsin"
          >
            @aidthompsin
          </a>
          GENERATIONAL EQUITY THEFT
          <a
            title="ukpol"
            target="_blank"
            href="https://www.tiktok.com/tag/ukpol"
          >
            #ukpol
          </a>
          <a
            title="ukpolitics"
            target="_blank"
            href="https://www.tiktok.com/tag/ukpolitics"
          >
            #ukpolitics
          </a>
          <a
            title="brexit"
            target="_blank"
            href="https://www.tiktok.com/tag/brexit"
          >
            #brexit
          </a>
          <a
            title="housingcrisis"
            target="_blank"
            href="https://www.tiktok.com/tag/housingcrisis"
          >
            #housingcrisis
          </a>
          <a
            title="boris"
            target="_blank"
            href="https://www.tiktok.com/tag/boris"
          >
            #boris
          </a>
          <a
            title="toriesout"
            target="_blank"
            href="https://www.tiktok.com/tag/toriesout"
          >
            #toriesout
          </a>
          <a
            title="ukhousingmarket"
            target="_blank"
            href="https://www.tiktok.com/tag/ukhousingmarket"
          >
            #ukhousingmarket
          </a>
          <a
            title="boomer"
            target="_blank"
            href="https://www.tiktok.com/tag/boomer"
          >
            #boomer
          </a>
          <a
            title="uknews"
            target="_blank"
            href="https://www.tiktok.com/tag/uknews"
          >
            #uknews
          </a>
          <a
            title="britishpolitics"
            target="_blank"
            href="https://www.tiktok.com/tag/britishpolitics"
          >
            #britishpolitics
          </a>
          <a
            title="homeowner"
            target="_blank"
            href="https://www.tiktok.com/tag/homeowner"
          >
            #homeowner
          </a>
          <a
            target="_blank"
            title="♬ original sound - aidThompsin"
            href="https://www.tiktok.com/music/original-sound-6953526968524589830"
          >
            ♬ original sound - aidThompsin
          </a>
        </section>
      </blockquote>
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@aidthompsin/video/6945013035299867909"
        data-video-id="6945013035299867909"
        style={{ maxWidth: 605, minWidth: 325 }}
      >
        <section>
          <a
            target="_blank"
            title="@aidthompsin"
            href="https://www.tiktok.com/@aidthompsin"
          >
            @aidthompsin
          </a>
          Tories on Tiktok make me 😂😂😂
          <a
            title="toriesout"
            target="_blank"
            href="https://www.tiktok.com/tag/toriesout"
          >
            #toriesout
          </a>
          <a
            title="ukpolitics"
            target="_blank"
            href="https://www.tiktok.com/tag/ukpolitics"
          >
            #ukpolitics
          </a>
          <a
            title="borisjohnson"
            target="_blank"
            href="https://www.tiktok.com/tag/borisjohnson"
          >
            #borisjohnson
          </a>
          <a
            title="brexit"
            target="_blank"
            href="https://www.tiktok.com/tag/brexit"
          >
            #brexit
          </a>
          <a
            title="boris"
            target="_blank"
            href="https://www.tiktok.com/tag/boris"
          >
            #boris
          </a>
          <a
            title="labourparty"
            target="_blank"
            href="https://www.tiktok.com/tag/labourparty"
          >
            #labourparty
          </a>
          <a
            title="politics"
            target="_blank"
            href="https://www.tiktok.com/tag/politics"
          >
            #politics
          </a>
          <a
            title="british"
            target="_blank"
            href="https://www.tiktok.com/tag/british"
          >
            #british
          </a>
          <a
            title="tories"
            target="_blank"
            href="https://www.tiktok.com/tag/tories"
          >
            #tories
          </a>
          <a
            target="_blank"
            title="♬ original sound - aidThompsin"
            href="https://www.tiktok.com/music/original-sound-6945012743820856069"
          >
            ♬ original sound - aidThompsin
          </a>
        </section>
      </blockquote>
      <Button
        onClick={() => window.open("https://tiktok.com/@aidthompsin")}
        variant="contained"
        color="primary"
        sx={{ width: "100%" }}
      >
        View more on Tiktok
      </Button>
    </Card>
  );
};

export default TiktokWall;
