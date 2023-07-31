// no need to even import a header and a footer here
// they are all included in the layout component
// so the layout import alone is enough
import Layout from '/components/Layout';
import Firstsection from '/components/Firstsection';
import Secondsection from '@/components/Secondsection';
import Thirdsection from '@/components/Thirdsection';

export default function Home() {
  return (
    <Layout>
      <Firstsection />
      <Secondsection />
      <Thirdsection />
    </Layout>
  );
}
