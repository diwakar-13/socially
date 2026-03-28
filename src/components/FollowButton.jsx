"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import { toggleFollow } from "@/actions/userAction";
import { Loader2Icon } from "lucide-react";

function FollowButton({ userId }) {
  const [isLoading, setIsLoading] = useState(false);
  const handleFollow = async () => {
    setIsLoading(true);
    try {
        await toggleFollow(userId);
        toast.success("User Followed successfully");
    } catch (error) {
        toast.error("Failed to follow user");
    }finally{
        setIsLoading(false);
    }
  };

  return (
    <Button
      size={"sm"}
      variant={"secondary"}
      onClick={handleFollow}
      disabled={isLoading}
      className="w-20"
    >
      {isLoading ? <Loader2Icon className="size-4 animate-spin" /> : "Follow"}
    </Button>
  );
}

export default FollowButton;
