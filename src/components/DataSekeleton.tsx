import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function DataSekeleton() {
  return (
    <div className="flex flex-col space-y-3 mx-5">
      <div className="space-y-2">
        <Skeleton className="h-[50px] w-[300px]" />
        <Skeleton className="h-4 w-[200px]" />
        <div className="flex flex-col items-around justify-start">
          <ItemDataSkeleton />
          <ItemDataSkeleton />
          <ItemDataSkeleton />
          <ItemDataSkeleton />
          <ItemDataSkeleton />
          <ItemDataSkeleton />
          <ItemDataSkeleton />
          <ItemDataSkeleton />
          <ItemDataSkeleton />
          <ItemDataSkeleton />
        </div>
      </div>
    </div>
  );
}

function ItemDataSkeleton() {
  return (
    <div className="flex flex-row justify-start items-center mt-5 gap-10">
      <Skeleton className="h-4 w-[120px]" />
      <Skeleton className="h-4 w-[120px]" />
    </div>
  );
}
