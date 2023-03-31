import { Layout } from "@/components/layout";
import { NextPageWithLayout } from "_app-types";

 const Home: NextPageWithLayout = () => {
  return (
    <div>
    </div>
  );
}

Home.getLayout = function getLayout (page, pageProps) {
  console.log('home pageProps ----------------', pageProps)
  return <Layout title='Home'>{page}</Layout>
}

export default Home
