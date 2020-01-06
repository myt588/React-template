import React from 'react';
import Layout from '../components/Layout';
import { useAuth0 } from '../Auth0';

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <img src={user.picture} alt="Profile" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </Layout>
  );
};

export default Profile;
