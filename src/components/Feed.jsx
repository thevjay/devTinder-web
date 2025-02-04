import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";
import { Base_URL } from "../utils/constants";
import Skeleton from "./Skeleton";

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const getFeed = async () => {
    try {
      const res = await axios.get(`${Base_URL}/feed`, { withCredentials: true });
      dispatch(addFeed(res.data));
    } catch (error) {
      console.error("Error fetching feed:", error);
    } finally {
      setLoading(false); // Ensures `loading` is updated after fetching
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Skeleton />
      </div>
    );
  }

  if (!feed || feed.length === 0) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-gray-800">No Users Found</h1>
        <p className="text-gray-600 mt-2 text-lg">Newly registered users will appear here!</p>
        <Link to={"/"} className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
          Go to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center mt-16">
      <div className="w-full flex justify-center">
        <div className="max-w-lg w-full">
          {feed.length > 0 && <UserCard user={feed[0]} />}
        </div>
      </div>
    </div>
  );
};

export default Feed;
