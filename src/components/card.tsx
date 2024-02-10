import * as React from "react";

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
import { PassportData } from "@/types/state-types";

interface CardWithForm {
  dataRecived?: PassportData;
}

export function CardWithForm({ dataRecived }: CardWithForm) {
  if (dataRecived)
    return (
      <Card className="md:w-[350px] md:m-0 mt-8">
        <CardHeader>
          <CardTitle>Passport Data</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <Label>Name:</Label>
            <div>{dataRecived.name}</div>

            <Label>Surname:</Label>
            <div>{dataRecived.surname}</div>

            <Label>Sex:</Label>
            <div>{dataRecived.sex}</div>

            <Label>Date of Birth:</Label>
            <div>{dataRecived.date_of_birth}</div>

            <Label>Nationality:</Label>
            <div>{dataRecived.nationality}</div>

            <Label>Passport Type:</Label>
            <div>{dataRecived.passport_type}</div>

            <Label>Passport Number:</Label>
            <div>{dataRecived.passport_number}</div>

            <Label>Issuing Country:</Label>
            <div>{dataRecived.issuing_country}</div>

            <Label>Expiration Date:</Label>
            <div>{dataRecived.expiration_date}</div>

            <Label>Personal Number:</Label>
            <div>{dataRecived.personal_number}</div>
          </div>
        </CardContent>
      </Card>
    );
}
