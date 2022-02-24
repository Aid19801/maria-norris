import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "@mui/material/styles";
import { useMainContext } from "../context/main";
import emailjs from "emailjs-com";
import { Box, Button, Input, useMediaQuery } from "@mui/material";
import fetch from "node-fetch";

type FormType = {
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm({
  hasSent = false,
  setHasSent = (bool: boolean) => undefined,
  setError = (str: string) => undefined,
}): ReactElement {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { toggleLoading } = useMainContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const onSubmit = async (data) => {
    toggleLoading(true);
    const formData = {
      origin: "mariawnorris.com",
      ...data,
    };

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_CONTACT_API, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setHasSent(true);
      if (res.status === 200) toggleLoading(false);
      if (res.status === 404) {
        setError("There was a problem - perhaps try Social channels instead?");
        toggleLoading(false);
      }
      const json = await res.json();
      console.log("json back ", json);
      if (json.status === 200) toggleLoading(false);
      if (json.status === 404) {
        setError("There was a problem - perhaps try Social channels instead?");
        toggleLoading(false);
      }
    } catch (error) {
      setError("There was a problem - perhaps try Social channels instead?");
      toggleLoading(false);
    }
  };

  return (
    <Box sx={{ width: "100%", maxWidth: isMobile ? 350 : 500, py: 3 }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", border: "none" }}
      >
        <Input
          placeholder="jon@smith.com"
          {...register("email")}
          sx={{
            marginBottom: 2,
            bgcolor: "#f1e6d5",
            border: "none",
            pl: 2,
            py: 2,
            mb: 2,
          }}
        />
        <Input
          placeholder="Your subject here..."
          {...register("subject")}
          sx={{
            marginBottom: 2,
            bgcolor: "#f1e6d5",
            border: "none",
            pl: 2,
            py: 2,
            mb: 2,
          }}
        />
        <Input
          placeholder="Your message here..."
          {...register("message")}
          sx={{
            marginBottom: 2,
            bgcolor: "#f1e6d5",
            border: "none",
            pl: 2,
            py: 2,
            mb: 2,
          }}
        />
        <Button
          type="submit"
          sx={{
            bgcolor: (theme) => theme.palette.primary.main,
            color: "white",
            py: 2,
            borderRadius: 25,
          }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}
