import useIsDesktop from "@/utils/useIsDesktop";
import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import { CSSProperties, ReactElement } from "react";
import LinkedinLogo from "../public/Linkedin.svg";
import TwitterLogo from "../public/Twitter.svg";
import YoutubeLogo from "../public/Youtube.svg";
import FacebookLogo from "../public/facebook.svg";
import InstagramLogo from "../public/instagram.svg";
import FooterLogo from "../public/niseko-central-logo.png";

export default function Footer(): ReactElement {
  const isDesktop = useIsDesktop();
  const iconSize = 18;
  const mainFooter: CSSProperties = {
    backgroundColor: "#222",
    display: "flex",
    alignItems: isDesktop ? "flex-end" : "center",
    justifyContent: "space-around",
    flexDirection: isDesktop ? "row" : "column",
  };

  return (
    <footer style={mainFooter}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pt: 6.5,
        }}
      >
        <Link href="/">
          <Image
            src={FooterLogo}
            alt="Footer Logo"
          />
        </Link>
      </Box>

      {/* Logo rendered */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          pt: 3,
          pb: 4,
          gap: 3
        }}
      >
        <Link href="https://www.facebook.com/nisekocentral">
          <Image
            src={FacebookLogo}
            alt="Logo for Facebook Page"
            width={iconSize}
            height={iconSize}
          />
        </Link>
        <Link href="https://twitter.com/i/flow/login?redirect_after_login=%2Fnisekocentral">
          <Image
            src={TwitterLogo}
            alt="Logo for Twitter Page"
            width={iconSize}
            height={iconSize}
          />
        </Link>
        <Link href="https://www.linkedin.com/company/hokkaido-tourism-management/">
          <Image
            src={LinkedinLogo}
            alt="Logo for LinkedIn Page"
            width={iconSize}
            height={iconSize}
          />
        </Link>
        <Link href="https://www.instagram.com/nisekocentral/">
          <Image
            src={InstagramLogo}
            alt="Logo for Instagram Page"
            width={iconSize}
            height={iconSize}
          />
        </Link>
        <Link href="https://www.youtube.com/@hokkaidotourismmanagementh7538">
          <Image
            src={YoutubeLogo}
            alt="Logo for Youtube Page"
            width={iconSize}
            height={iconSize}
          />
        </Link>
      </Box>

      {/* terms & privacy policy */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: 3.25,
          pb: 4.25,
        }}
      >
        <Link href="https://www.nisekocentral.com/privacy-policy">
          <Typography
            sx={{
              fontFamily: "Matteo",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19px",
              textDecorationLine: "underline",
              color: "#FFFFFF",
            }}
          >
            Terms of service
          </Typography>
        </Link>
        <Box
          sx={{
            width: "2px",
            height: "2px",
            background: "#FFFFFF",
            ml: 1,
            mr: 1,
          }}
        ></Box>
        <Link href="https://www.nisekocentral.com/privacy-policy">
          <Typography
            sx={{
              fontFamily: "Matteo",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19px",
              textDecorationLine: "underline",
              color: "#FFFFFF",
            }}
          >
            Privacy policy
          </Typography>
        </Link>
      </Box>
    </footer>
  );
}
