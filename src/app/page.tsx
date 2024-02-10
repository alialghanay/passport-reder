"use client";
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

  return (
    <main className="min-h-screen p-4">
      <NavBar />
      <div className="flex md:flex-row md:justify-around items-center mt-12 flex-col">
        <TabsDemo passingData={(d) => setRes(d)} />
        <CardWithForm dataRecived={res} />
        <Toaster className="z-40" richColors />
      </div>
    </main>
  );
}
