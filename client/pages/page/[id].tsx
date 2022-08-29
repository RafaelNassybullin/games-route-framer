import { motion } from "framer-motion";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { IData } from "interfaces";
import {
  Navigation,
  Galery,
  Trailer,
  Description,
  SysReq,
  DownloadBtn,
} from "components";
import { Footer, Main } from "styles/globalStyles";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.API}/getCard`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  const paths = data.map((item: IData) => {
    return {
      params: { id: item._id.toString() },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;

  const responce = await fetch(`${process.env.API}/getCard/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const datas = await responce.json();

  return {
    props: {
      datas,
    },
    revalidate: 10,
  };
};

interface IHomeIdProps {
  datas: IData;
}

export default function HomeID({ datas }: IHomeIdProps) {
  const AnimTitle = {
    hidden: {
      y: "100%",
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  return (
    <>
      <Head>
        <title>{datas.title}</title>
        <link type="image/png" sizes="420x420" rel="icon" href="https://pngimg.com/uploads/gamepad/gamepad_PNG39.png" />

      </Head>
      <Main>
        <Navigation />
        <div className="container">
          <div className="wrapper-page">
            <motion.div className="wrap" layoutId={datas._id}>
              <img src={datas.image} alt={datas.title} />
            </motion.div>
            <div className="wrap">
              <div className="overlay">
                <motion.h3
                  variants={AnimTitle}
                  initial="hidden"
                  animate="visible"
                  className="title"
                >
                  {datas.title}
                </motion.h3>
              </div>
              <SysReq datas={datas} />
              <DownloadBtn />
            </div>
          </div>
          <Description datas={datas} />
          <Trailer datas={datas} />
          <Galery datas={datas} />
          <DownloadBtn />
        </div>
        <Footer>
          <div className="container">
            <div className="footer-wrapper">
              <p>
                Developed by{" "}
                <span style={{ color: "#277BC0" }}>
                  <a href="https://github.com/RafaelNassybullin?tab=repositories">
                    Rafael Nasybullin
                  </a>
                </span>
              </p>
            </div>
          </div>
        </Footer>
      </Main>
    </>
  );
}
