import { Navigation, Card } from "components";
import Link from "next/link";
import { IData } from "interfaces";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

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
  const category = context.params?.id;

  const res = await fetch(`${process.env.API}/getCategory/${category}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const datas = await res.json();

  return {
    props: {
      datas,
    },
    revalidate: 10,
  };
};

interface ICategoryProps {
  datas: IData[];
}

export default function Category({ datas }: ICategoryProps) {
  const router = useRouter();
  const query = router.query;

  return (
    <div className="container">
      <Navigation />
      <div style={{ textTransform: "capitalize", marginBottom: "30px" }}>
        <Link href="/"><a>Home</a></Link> / Category / {query.id}
      </div>
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
  );
}
