import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TabsDemo } from "./tabs";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Upload/Cpatuer Passport</Button>
      </SheetTrigger>
      <SheetContent className="w-[500px]">
        <SheetHeader>
          <SheetTitle>Upload/Cpatuer Passport</SheetTitle>
          <SheetDescription>
            you have to choose method, Either you have to upload passport photo
            exists on your dvice or Take pictuer via camara connceted to your
            divce...
          </SheetDescription>
        </SheetHeader>
        <div className="container m-12">
          <TabsDemo />
        </div>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
