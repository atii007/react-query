import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchUser = (email) => {
  return axios.get(`http://localhost:3000/users/${email}`);
};

const fetchCourses = (channelId) => {
  return axios.get(`http://localhost:3000/channels/${channelId}`);
};

const DependentQueries = ({ email }) => {
  const { data: user } = useQuery(["user", email], () => fetchUser(email));
  const channelId = user?.data.channelId;

  const { data: channels } = useQuery(
    ["Courses", channelId],
    () => fetchCourses(channelId),
    {
      enabled: !!channelId,
    }
  );

  const courses = channels?.data.course || [];

  return (
    <div>
      <h2>Dependent Queries</h2>
      <ul>
        {courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default DependentQueries;
