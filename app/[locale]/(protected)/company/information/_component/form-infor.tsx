"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ActionResult } from "@/types";
import { CompanyInformation } from "@prisma/client";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { editCompanyInformatiom } from "../lib/action";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface formInformationPage {
  data?: CompanyInformation | null
}

const initialState: ActionResult = {
  error: ""
}

function SaveButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Loading" : "Save Update"}
    </Button>
  );
}

export default function InformationForm({data}: formInformationPage) {

  const editCompany = (_:unknown, formData:FormData) => editCompanyInformatiom(_,formData,1);
  const [state, formAction] = useFormState(editCompany,initialState)

  return (
    <section>
      <form action={formAction}>
        {state.error !== "" && (
          <Alert variant="soft" className="flex items-center">
            <AlertCircle className="h-6 w-6" />
            <AlertTitle className="mb-0">Error</AlertTitle>
            <AlertDescription>{state.error}</AlertDescription>
          </Alert>
        )}

        <div className="lg:grid flex lg:grid-cols-3 py-[2vw] justify-between flex-wrap items-top gap-10">
          <div className="w-full ">
            <label htmlFor="companyName" className="block">
              Company Name
            </label>
            <div className="mt-3">
              <input
                id="companyName"
                name="companyName"
                placeholder="Company Name"
                className="input border text-black border-black px-[1vw] w-full rounded-md py-[0.5vw]"
                type="text"
                defaultValue={data?.name}
              />
            </div>
          </div>

          <div className="w-full ">
            <label htmlFor="whatsapp" className="block">
              Phone Number / Whatsapp
            </label>
            <div className="mt-3">
              <input
                id="whatsapp"
                name="whatsapp"
                placeholder="Company Whatsapp Number"
                className="input border text-black border-black px-[1vw] w-full rounded-md py-[0.5vw]"
                type="text"
                defaultValue={data?.whatsapp}
              />
            </div>
          </div>

          <div className="w-full ">
            <label htmlFor="email" className="block">
              Email
            </label>
            <div className="mt-3">
              <input
                id="email"
                name="email"
                placeholder="Company Email Address"
                className="input border text-black border-black px-[1vw] w-full rounded-md py-[0.5vw]"
                type="text"
                defaultValue={data?.email}
              />
            </div>
          </div>

          <div className="w-full ">
            <label htmlFor="iglink" className="block">
              Instagram Link
            </label>
            <div className="mt-3">
              <input
                id="iglink"
                name="iglink"
                placeholder="Company Instagram Link"
                className="input border text-black border-black px-[1vw] w-full rounded-md py-[0.5vw]"
                type="text"
                defaultValue={data?.iglink}
              />
            </div>
          </div>

          <div className="w-full ">
            <label htmlFor="tiktoklink" className="block">
              Tiktok Link
            </label>
            <div className="mt-3">
              <input
                id="tiktoklink"
                name="tiktoklink"
                placeholder="Company Tiktok Link"
                className="input border text-black border-black px-[1vw] w-full rounded-md py-[0.5vw]"
                type="text"
                defaultValue={data?.tiktoklink}
              />
            </div>
          </div>

          <div className="w-full ">
            <label htmlFor="linkedin" className="block">
              LinkedIn Link
            </label>
            <div className="mt-3">
              <input
                id="linkedin"
                name="linkedin"
                placeholder="Company LinkedIn Link"
                className="input border text-black border-black px-[1vw] w-full rounded-md py-[0.5vw]"
                type="text"
                defaultValue={data?.linkedin}
              />
            </div>
          </div>

          <div className="w-full col-span-2 mb-[1vw]">
            <label htmlFor="description" className="block">
              Company Short Description
            </label>
            <div className="mt-3">
              <Textarea
                id="description"
                name="description"
                  defaultValue={data?.description}
                placeholder="Company Short Introduction"
                className="input border border-black px-[1vw] rounded-md py-[0.5vw]"
              ></Textarea>
            </div>
          </div>

          <div className="w-full ">
            <label htmlFor="logoImage" className="block">
              Logo Image
            </label>
            <div className="mt-3">
              {/* <input
                id="logoImage"
                name="logoImage"
                placeholder="Company LinkedIn Link"
                className="input border text-black border-black px-[1vw] w-full rounded-md py-[0.5vw]"
                type="text"
              
              /> */}
            </div>
          </div>
        </div>

        <SaveButton />
      </form>
    </section>
  );
}
