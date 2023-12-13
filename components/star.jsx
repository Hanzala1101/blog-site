"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { RiChatDeleteFill } from "react-icons/ri";
import { MdEditNote } from "react-icons/md";
import useAuthContext from "@/Hooks/useAuthContext";

export default function Star(props) {
  const [count, setcount] = useState(isNaN(props?.count) ? 0 : props?.count);
  const { data } = useAuthContext();
  const router = useRouter();

  const removeblog = async (e) => {
    e.preventDefault();
    const confirmed = confirm("Are you sure you want to delete?");
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/blog?id=${props.id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  const editblog = (e) => {
    e.preventDefault();
    const confirme = confirm("Are you sure?");
    if (confirme) {
      router.push(`/editBlog/${props.id}`);
    }
  };

  return (
    <>
      <div className={`flex justify-between`}>
        <div className="flex justify-end space-x-1">
          {[...Array(count)].map((e, index) => (
            <div key={index}>
              <Rating color="text-black" />
            </div>
          ))}
          {[...Array(5 - count)].map((e, index) => (
            <div key={index}>
              <Rating color="text-gray-300 dark:text-gray-500" />
            </div>
          ))}
        </div>

        {data?.admin ? (
          <div className="flex justify-between w-20 ml-4">
            <button onClick={removeblog}>
              <RiChatDeleteFill size={25} className="hover:scale-150" />
            </button>
            <button onClick={editblog}>
              <MdEditNote size={30} className="hover:scale-150" />
            </button>
          </div>
        ) : (
          " "
        )}
      </div>
    </>
  );
}

const Rating = ({ color }) => {
  return (
    <svg
      className={`w-4 h-4 ${color}`}
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
};
