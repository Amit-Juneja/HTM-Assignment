import Head from "next/head";

import favicon from "public/favicon.ico";
import { ReactElement } from "react";

type Props = {
  description: string;
  title: string;
};

const CustomHead = ({ description, title }: Props): ReactElement => (
  <Head>
    <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
    <title>{title} | {description}</title>
    <meta name="description" content={description} />
  </Head>
);

export default CustomHead;
