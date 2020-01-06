import React from 'react';
import Layout from '../components/Layout';
import { usePrivate } from '../useFetch';

const Home = () => {
  const { data, isLoading } = usePrivate();
  return (
    <Layout>
      <div>hello</div>
      {isLoading ? <div>fetching</div> : <div>{data.message}</div>}
    </Layout>
  );
};

export default Home;
