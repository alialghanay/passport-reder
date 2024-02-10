"use client";
import NavBar from "@/components/nav";
import PassportCamaraCaptuer from "@/components/passport-scanner/camra-captuer";
import PassportUploader from "@/components/passport-scanner/uploader";
import { SheetDemo } from "@/components/sheet";
import { TabsDemo } from "@/components/tabs";

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <NavBar />
      <div className="flex justify-center items-center mt-12">
        <TabsDemo />
      </div>
    </main>
  );
}
