import React, { FC } from 'react';
import Head from 'next/head';

import Header from './Header/Header';

interface ILayout {
  children: React.ReactNode;
  navLinks?: Array<{ id: string; title: string }>;
}

export const siteTitle = 'Curadoria Front-end Roadmap';

const Layout: FC<ILayout> = ({ children, navLinks = [] }) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='lorem' />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Header navLinks={navLinks} />
      <main>{children}</main>
    </>
  );
};

export default Layout;