"use client";
import DataSekeleton from "@/components/DataSekeleton";
import { CardWithForm } from "@/components/card";
import NavBar from "@/components/nav";
import ResponseError from "@/components/res-err";
import { TabsDemo } from "@/components/tabs";
import { Toaster } from "@/components/ui/sonner";
import Modal from "@/types/modal";
import { PassportData } from "@/types/state-types";
import { useState } from "react";

export default function Home() {
  const [err, setErr] = useState(false);
  const handleErr = () => setErr(!err);
  const [res, setRes] = useState<PassportData>();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="min-h-screen p-4">
      <NavBar />
      <div className="flex md:flex-row md:gap-8 md:justify-around items-start mt-12 flex-col">
        <TabsDemo
          passingData={(d) => setRes(d)}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        />
        {isLoading ? <DataSekeleton /> : <CardWithForm dataRecived={res} />}
        <Toaster className="z-40" richColors />
      </div>
    </main>
  );
}
