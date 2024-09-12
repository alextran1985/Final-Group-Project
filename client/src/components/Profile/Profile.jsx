import React from 'react'
import { useQuery } from '@apollo/client';

function Profile() {

    // We want to query for the Current Users Data
    const { loading, data, error } = useQuery(QUERY_CURRENT_USER);

    const user = data?.user;

  return (
    <div>Profile</div>
  )
}

export default Profile