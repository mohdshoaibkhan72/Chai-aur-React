import React, { useEffect, useState } from 'react';

function Github() {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    // Replace 'mohdshoaibkhan72' with the desired GitHub username
    fetch('https://api.github.com/users/mohdshoaibkhan72/followers')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFollowers(data);
      });
  }, []);

  return (
    <div className='text-center m-5 bg-gray-600 text-white p-4 text-3xl '>
      Github followers: {followers.length}
    </div>
  );
}

export default Github;
