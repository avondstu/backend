"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle } from "lucide-react";
import React from "react";
import { getHomeData } from "../lib/data";
import { ActionResult } from "@/types";
import { useFormState, useFormStatus } from "react-dom";
import { HomePage } from "@prisma/client";
import { editHome } from "../lib/action";

interface FormHomePages {
  data?: HomePage | null;
}

const initialState: ActionResult = {
  error: "",
};

function SaveButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Loading" : "Save Update"}
    </Button>
  );
}

export default function FormHome({ data }: FormHomePages) {
  const EditHomePage = (_: unknown, formData: FormData) =>
    editHome(_, formData, 1);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, formAction] = useFormState(EditHomePage, initialState);

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

        <div className="lg:grid flex lg:grid-cols-2 pt-[2vw] justify-between flex-wrap items-top gap-7">
          <div className="w-full ">
            <label htmlFor="taglone" className="block">
              Tagline
            </label>
            <div className="mt-3">
              <input
                id="tagline"
                name="tagline"
                placeholder="Company Tagline"
                className="input border text-black border-black px-[1vw] w-full rounded-md py-[0.5vw]"
                type="text"
                defaultValue={data?.tagline}
              />
            </div>
          </div>

          <div className="w-full ">
            <label htmlFor="headline" className="block">
              Headline
            </label>
            <div className="mt-3">
              <input
                id="headline"
                name="headline"
                placeholder="Company Headline"
                className="input border text-black border-black px-[1vw] w-full rounded-md py-[0.5vw]"
                type="text"
                defaultValue={data?.headline}
              />
            </div>
          </div>

          <div className="w-full col-span-2 mb-[1vw]">
            <label htmlFor="desc" className="block">
              Description
            </label>
            <div className="mt-3">
              <Textarea
                id="desc"
                name="desc"
                defaultValue={data?.desc}
                placeholder="Why Effektiv is effective?"
                className="input border border-black px-[1vw] rounded-md py-[0.5vw]"
              ></Textarea>
            </div>
          </div>

          <div className="w-full mb-[2vw]">
            <label htmlFor="mainButton" className="block">
              Main Button
            </label>
            <div className="mt-3">
              <input
                id="mainButton"
                name="mainButton"
                placeholder="Banner Main Button"
                className="input border text-black border-black px-[1vw] w-full rounded-md py-[0.5vw]"
                type="text"
                defaultValue={data?.mainButton}
              />
            </div>

            <label htmlFor="mainLink" className="block mt-[1vw]">
              Link Button
            </label>
            <div className="mt-3">
              <input
                id="mainLink"
                name="mainLink"
                placeholder="Main Button Link"
                className="input border text-black border-black px-[1vw] w-full rounded-md py-[0.5vw]"
                type="text"
                defaultValue={data?.mainLink}
              />
            </div>
            
          </div>

          <div className="w-full mb-[2vw]">
            <label htmlFor="secondButton" className="block">
              Secondary Button
            </label>
            <div className="mt-3">
              <input
                id="secondButton"
                name="secondButton"
                placeholder="Banner Secondary Button "
                className="input border text-black border-black px-[1vw] w-full rounded-md py-[0.5vw]"
                type="text"
                defaultValue={data?.secondButton}
              />
            </div>

            <label htmlFor="secondLink" className="block mt-[1vw]">
              Link Button
            </label>
            <div className="mt-3">
              <input
                id="secondLink"
                name="secondLink"
                placeholder="Secondary Button Link"
                className="input border text-black border-black px-[1vw] w-full rounded-md py-[0.5vw]"
                type="text"
                defaultValue={data?.secondLink}
              />
            </div>
            
          </div>
        </div>

        <SaveButton/>
      </form>
    </section>
  );
}