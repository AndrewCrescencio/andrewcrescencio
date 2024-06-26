import styled from "styled-components";
import { media } from "@/styles/media-querie";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
  ${media.phone`
    padding: 0 24px;
  `}
  ${media.tablet`
    padding: 0 48px;
  `}
  ${media.laptop`
    padding: 0 96px;
  `}
`;
