"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FetchFromTMDB } from "../../components/FetchFromTMDB";
import Link from "next/link";
import Image from "next/image";
const search = () => {
  const Org_url = "https://image.tmdb.org/t/p/w200";
  const params = useParams();
  const [searchmov, setsearchmov] = useState([]);
  const [loading, setLoading] = useState(true);
  const getmovie = async () => {
    const data = await FetchFromTMDB(
      `https://api.themoviedb.org/3/search/movie?query=${params.id}&include_adult=false&language=en-US&page=1`,
    );
    setsearchmov(data.results);
    setLoading(false);
  };
  useEffect(() => {
    getmovie();
  }, []);
  return !loading ? (
    searchmov.length > 0 ? (
      <div className="hide-scrollbar flex flex-wrap justify-center">
        {searchmov.map((item) => {
          return (
            item.poster_path && (
              <div
                key={item.id}
                className="p-2 m-2 rounded-lg flex flex-col items-center"
              >
                <Link
                  href={`/videos/${item.id}`}
                  key={item.id}
                  className="div contents "
                >
                  <Image
                    width={150}
                    height={192}
                    src={Org_url + item.poster_path}
                    alt=""
                    className="m-2 flex-shrink-0 rounded-lg h-48 max-w-none "
                  />
                </Link>
                <h4 className="text-white text-xl flex w-48 justify-center items-center">
                  {item.title}
                </h4>
              </div>
            )
          );
        })}
      </div>
    ) : (
      <div className="text-white text-xl flex justify-center items-center mb-10 h-[60vh]">
        <h1 className="text-white text-5xl">No Movies available</h1>
      </div>
    )
  ) : (
    <div className="h-screen bg-black text-white text-8xl">
      <img
        src="https://i.gifer.com/ZKZg.gif"
        className="size-12 fixed top-1/2 left-1/2 z-50"
        alt="Loading..."
      />
    </div>
  );
};

export default search;
