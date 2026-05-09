"use client";

import React, { useState } from "react";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const searchOnEnter = (event) => {
    if (event.key === "Enter") {
      const searchQuery = event.currentTarget.value;
      setLoading(true);
      router.push(`/search/${searchQuery}`);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return session ? (
    <nav className="fixed w-full z-50 bg-black">
      <div className="flex h-16 items-center justify-between bg-black">
        <div className="flex items-center">
          <Link href="/" className="div">
            <img src="/logo.png" alt="Logo" className="m-3 h-10" />
          </Link>
          <div className="max-md:hidden">
            <Link href="/" className="p-2 font-medium text-white">
              Home
            </Link>
            <Link
              href="/kids"
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 3000);
              }}
              className="p-2 font-medium text-gray-300 focus:text-white"
            >
              Kids
            </Link>
            <Link
              href="/movies"
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 3000);
              }}
              className="p-2 font-medium text-gray-300 focus:text-white"
            >
              Movies
            </Link>
            <Link
              href="/shows"
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 3000);
              }}
              className="p-2 font-medium text-gray-300 focus:text-white"
            >
              TV Shows
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="searchbar flex h-11 w-80 items-center rounded-full bg-gray-600 p-5 text-gray-300 max-sm:w-52 max-sm:text-sm overflow-hidden">
            <Link
              href={`/search/${search}`}
              className="mr-2"
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 3000);
              }}
            >
              <FaSearch />
            </Link>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Movies, Shows and more"
              value={search}
              className="bg-gray-600 focus:outline-none inline flex-1 sm:text-center"
              onKeyDown={searchOnEnter}
            />
          </div>
          <Link
            className="contacts m-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 text-2xl text-white"
            href="/profile"
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
              }, 3000);
            }}
          >
            <img
              src={session.user?.image || "/default-avatar.png"}
              alt="User"
              className="rounded-full"
            />
          </Link>
        </div>
      </div>
      {loading && (
        <img
          src="https://i.gifer.com/ZKZg.gif"
          className="size-12 fixed top-1/2 left-1/2 z-50"
          alt="Loading..."
        />
      )}
    </nav>
  ) : (
    <nav className="fixed w-full z-50 bg-black">
      <div className="flex h-16 items-center justify-between bg-black">
        <div className="flex items-center">
          <Link href="/" className="div">
            <img src="/logo.png" alt="Logo" className="m-3 h-10" />
          </Link>
          <div className="flex max-md:hidden">
            <Link href="/" className="nav_items p-2 font-medium text-white">
              Home
            </Link>
            <Link
              href="/kids"
              className="nav_items p-2 font-medium text-gray-300"
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 3000);
              }}
            >
              Kids
            </Link>
            <Link
              href="/movies"
              className="nav_items p-2 font-medium text-gray-300"
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 3000);
              }}
            >
              Movies
            </Link>
            <Link
              href="/shows"
              className="nav_items p-2 font-medium text-gray-300"
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 3000);
              }}
            >
              TV Shows
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="searchbar flex h-11 w-80 items-center rounded-full bg-gray-600 p-5 text-gray-300 max-sm:w-52 max-sm:text-sm overflow-hidden">
            <Link
              href={`/search/${search}`}
              className="mr-2"
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 3000);
              }}
            >
              <FaSearch />
            </Link>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Movies, Shows and more"
              value={search}
              className="bg-gray-600 focus:outline-none inline flex-1 sm:text-center"
              onKeyDown={searchOnEnter}
            />
          </div>

          <Link
            href="/login"
            className="contacts m-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 text-2xl text-white"
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
              }, 3000);
            }}
          >
            <FaUserAlt />
          </Link>
        </div>
      </div>
      {loading && (
        <img
          src="https://i.gifer.com/ZKZg.gif"
          className="size-12 fixed top-1/2 left-1/2 z-50"
          alt="Loading..."
        />
      )}
    </nav>
  );
};

export default Navbar;
