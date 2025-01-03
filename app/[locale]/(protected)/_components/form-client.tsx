"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "@/hooks/use-toast";
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

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function AddClient() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <div className="grid grid-cols-2 justify-between flex-wrap items-center gap-7">
                <div className="w-full">
                  <FormLabel>Nama Client</FormLabel>
                  <FormControl className="mt-3">
                    <Input placeholder="John Doe" />
                  </FormControl>
                </div>

                <div className="w-full">
                  <FormLabel>Nama Brand</FormLabel>
                  <FormControl className="mt-3">
                    <Input placeholder="Avond Studio" />
                  </FormControl>
                </div>

                <div className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl className="mt-3">
                    <Input placeholder="Avond Studio" />
                  </FormControl>
                </div>

                <div className="w-full">
                  <FormLabel>Telepon</FormLabel>
                  <FormControl className="mt-3">
                    <Input placeholder="+62 000 000 0000" />
                  </FormControl>
                </div>

                <div className="w-full col-span-2">
                  <FormLabel>Address</FormLabel>
                  <FormControl className="mt-3">
                    <Input placeholder="Ruko Rungkut Megah, Jl. Rungkut, Surabaya" />
                  </FormControl>
                </div>

                <div>
                  <FormLabel>Client dari</FormLabel>
                  <FormControl className="mt-4">
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="all" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          All new messages
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="mentions" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Direct messages and mentions
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="none" />
                        </FormControl>
                        <FormLabel className="font-normal">Nothing</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
