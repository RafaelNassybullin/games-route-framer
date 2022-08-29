import { Navigation, Card } from "components";
import Link from "next/link";
import { GetStaticProps } from "next";
import { IData } from "interfaces";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async () => {
  const responce = await fetch(`${process.env.API}/getCard`, {
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

interface IHomeProps {
  datas: IData[];
}

export default function Home({ datas }: IHomeProps) {
  return (
    <>
      <Head>
        <title>Best games ever!!!</title>
      </Head>
      <div className="container">
        <Navigation />
        <div className="grid-wrap">
          {datas.map((data: IData) => (
            <Link key={data._id} href={`/page/${data._id}`}>
              <a>
                <Card data={data} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
