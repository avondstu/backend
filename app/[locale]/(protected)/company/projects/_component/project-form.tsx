'use client'

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ActionResult } from "@/types";
import { ProjectPortfolio } from "@prisma/client";
import { useFormState } from "react-dom";
import { editProject, postProject } from "../lib/action";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";


interface FormProjectPages{
    type: 'ADD' | 'EDIT',
    data?: ProjectPortfolio | null
}

const initialState: ActionResult ={
    error: "",
}

export function ProjectForm({type='ADD', data = null} : FormProjectPages ) {

    const updateProjectWithID = (_:unknown, formData:FormData) => editProject(_,formData,data?.id!);

    const [state, formAction] = useFormState(type === "ADD" ? postProject : updateProjectWithID,initialState);

return(
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
          <label htmlFor="namaProject" className="block">
            Nama Client
          </label>
          <div className="mt-3">
            <input
              id="namaProject"
              name="namaProject"
              placeholder="John Doe"
              className="input border text-black border-black px-[1vw] rounded-md py-[0.5vw]"
              type="text"
              defaultValue= {data?.nama}
            />
          </div>
        </div>

        <div>
          <label className="block">Project Category</label>
          <div className="mt-4">
            <select
            defaultValue={data?.category}
              name="category"
              id="category"
              className="border text-balance border-black rounded-md px-[1vw] py-[0.5vw]"
            >
              <option value="Branding">Branding</option>
              <option value="Website">Website</option>
              <option value="Socmed">Social Media</option>
              <option value="Logo">Logo System</option>
            </select>
          </div>
        </div>


        <div className="w-full col-span-2">
          <label htmlFor="deskripsiProject" className="block">
            Project Description
          </label>
          <div className="mt-3">
            <Textarea
              id="deskripsiProject"
              name="deskripsiProject"
              placeholder="Ruko Rungkut Megah, Jl. Rungkut, Surabaya"
              className="input border border-black px-[1vw] rounded-md py-[0.5vw]"
              defaultValue={data?.description}
            />
          </div>
        </div>

        
      </div>

      <Button type="submit">Save Client</Button>
    </form>
)
}