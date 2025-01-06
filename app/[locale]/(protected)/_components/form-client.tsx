"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ActionResult } from "@/types";
import { error } from "console";
import { useFormState } from "react-dom";

import { string } from "zod";
import { postClient } from "../lib/action";
import { Select } from "@/components/ui/select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { stat } from "fs";

const initialState: ActionResult = {
  error: "",
};

export function AddClient() {
  const [state, formAction] = useFormState(postClient, initialState);
  return (
    <form action={formAction} className="w-2/3 space-y-6">
      {state.error !== "" && (
        <Alert variant="soft" className="flex items-center">
          <AlertCircle className="h-6 w-6" />
          <AlertTitle className="mb-0">Error</AlertTitle>
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}
      <div className="lg:grid flex lg:grid-cols-2 justify-between flex-wrap items-top gap-7">
        <div className="w-full">
          <label htmlFor="client-name" className="block">
            Nama Client
          </label>
          <div className="mt-3">
            <input
              id="client-name"
              name="client-name"
              placeholder="John Doe"
              className="input border border-black px-[1vw] rounded-md py-[0.5vw]"
              type="text"
            />
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="brand-name" className="block">
            Nama Brand
          </label>
          <div className="mt-3">
            <input
              id="brand-name"
              name="brand-name"
              placeholder="Avond Studio"
              className="input border border-black px-[1vw] rounded-md py-[0.5vw]"
              type="text"
            />
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="email" className="block">
            Email
          </label>
          <div className="mt-3">
            <input
              id="email"
              name="email"
              placeholder="example@domain.com"
              className="input border border-black px-[1vw] rounded-md py-[0.5vw]"
              type="email"
            />
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="phone" className="block">
            Telepon
          </label>
          <div className="mt-3">
            <input
              id="phone"
              name="phone"
              placeholder="+62 000 000 0000"
              className="input border border-black px-[1vw] rounded-md py-[0.5vw]"
              type="tel"
            />
          </div>
        </div>

        <div className="w-full col-span-2">
          <label htmlFor="address" className="block">
            Address
          </label>
          <div className="mt-3">
            <input
              id="address"
              name="address"
              placeholder="Ruko Rungkut Megah, Jl. Rungkut, Surabaya"
              className="input border border-black px-[1vw] rounded-md py-[0.5vw]"
              type="text"
            />
          </div>
        </div>

        <div>
          <label className="block">Client dari</label>
          <div className="mt-4">
            <select
              name="clientFrom"
              id="clientFrom"
              className="border border-black rounded-md px-[1vw] py-[0.5vw]"
            >
              <option value="Avond">Avond</option>
              <option value="Alter">Alter</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block">Services</label>
          <div className="mt-4">
            <select
              name="services"
              id="services"
              className="border border-black rounded-md px-[1vw] py-[0.5vw]"
            >
              <option value="Branding">Branding</option>
              <option value="Website">Website</option>
              <option value="Socmed">Social Media</option>
              <option value="Logo">Logo System</option>
            </select>
          </div>
        </div>
      </div>

      <Button type="submit">Save Client</Button>
    </form>
  );
}
