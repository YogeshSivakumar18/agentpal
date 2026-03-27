"use client"

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export const HomeView = () => {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.hello.queryOptions({text: "Yogesh"}));

  return (
      <div className="flex flex-col p-r gap-y-4">
        {data?.greeting}
      </div>
    );
}
