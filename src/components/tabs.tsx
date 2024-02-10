import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PassportUploader from "./passport-scanner/uploader";
import PassportCamaraCaptuer from "./passport-scanner/camra-captuer";
import { PassportData } from "@/types/state-types";

interface TabsDemo {
  passingData: (data: PassportData) => void;
}

export function TabsDemo({ passingData }: TabsDemo) {
  return (
    <Tabs defaultValue="upload" className="md:w-[700px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="upload">Upload</TabsTrigger>
        <TabsTrigger value="captuer">Captuer</TabsTrigger>
      </TabsList>
      <TabsContent value="upload">
        <Card>
          <CardHeader>
            <CardTitle>Upload</CardTitle>
            <CardDescription>Make changes to your Upload here.</CardDescription>
          </CardHeader>
          <CardContent>
            <PassportUploader handleRecivedData={(d) => passingData(d)} />
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="captuer">
        <Card>
          <CardHeader>
            <CardTitle>captuer</CardTitle>
            <CardDescription>
              Change your captuer here. After saving,
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Label htmlFor="current">Current captuer</Label>
            <PassportCamaraCaptuer handleRecivedData={(d) => passingData(d)} />
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
