import Layout from "@components/layout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="h-96">
        <div className="font-normal font-mono text-7xl">
          I'm falling in love with νμ§ π§‘
        </div>
        <div className="font-normal font-sans text-3xl">λ¨μ μ΄μΈλ§</div>
      </div>
    </Layout>
  );
};

export default Home;
