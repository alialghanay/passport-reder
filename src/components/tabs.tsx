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

export function TabsDemo() {
  return (
    <Tabs defaultValue="upload" className="w-[500px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="upload">Upload</TabsTrigger>
        <TabsTrigger value="captuer">Captuer</TabsTrigger>
      </TabsList>
      <TabsContent value="upload">
        <Card>
          <CardHeader>
            <CardTitle>Upload</CardTitle>
            <CardDescription>
              Make changes to your Upload here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <PassportUploader />
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="captuer">
        <Card>
          <CardHeader>
            <CardTitle>captuer</CardTitle>
            <CardDescription>
              Change your captuer here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current captuer</Label>
              <PassportCamaraCaptuer />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New captuer</Label>
              <Input id="new" type="captuer" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save captuer</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
