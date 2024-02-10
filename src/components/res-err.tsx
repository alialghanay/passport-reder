import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RespondError } from "@/types/state-types";

interface Error {
  error?: RespondError;
}

const ResponseError = ({ error }: Error) => {
  return (
    <div className="bg-background">
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>{error?.success}</AlertTitle>
        <AlertDescription>{error?.message}</AlertDescription>
      </Alert>
    </div>
  );
};

export default ResponseError;
