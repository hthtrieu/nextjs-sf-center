"use client";

import React from "react";
import { FormInput } from "@/components/common/form/FormInput";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Constants } from "@/lib/constant";
import { Button } from "@/components/ui/button";
import { RegisterCourseButton } from "@/components/layouts/default/header/RegisterCourseButton";
import { useTrans } from "@/hooks/useTrans";

const ContactForm = () => {
  const { t } = useTrans();
  // Define schema using Zod
  const formSchema = z.object({
    name: z.string().min(2, { message: "Required" }),
    email: z.string().email({ message: "Invalid email" }),
    message: z.string().min(10, { message: "Required" }),
    phone: z.string().min(10, { message: "Required" }),
  });

  // Infer form data type from Zod schema
  type FormData = z.infer<typeof formSchema>;

  // Initialize React Hook Form
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   name: defaultValues?.name,
    // },
  });

  // Submit handler
  const submitForm: SubmitHandler<FormData> = (values) => {
    // onSubmitForm(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitForm)}>
        <div className="w-full space-y-2">
          <FormInput
            control={form.control}
            fieldName="name"
            type={Constants.INPUT_TYPE.TEXT}
            label={t("contact.form.name.label")}
            placeholder={t("contact.form.name.placeholder")}
            required={true}
          />
          <FormInput
            control={form.control}
            fieldName="email"
            type={Constants.INPUT_TYPE.EMAIL}
            label={t("contact.form.email.label")}
            placeholder={t("contact.form.email.placeholder")}
            required={true}
          />
          <FormInput
            control={form.control}
            fieldName="message"
            type={Constants.INPUT_TYPE.TEXT}
            label={t("contact.form.message.label")}
            placeholder={t("contact.form.message.placeholder")}
            required={true}
          />
          <FormInput
            control={form.control}
            fieldName="phone"
            type={Constants.INPUT_TYPE.TEXT}
            label={t("contact.form.phone.label")}
            placeholder={t("contact.form.phone.placeholder")}
            required={true}
          />
          <div className="w-full flex justify-center md:justify-start">
            <Button className="h-12 rounded-3xl min-w-fit min-[1920px]:w-48 font-bold text-lg bg-sky-900 text-white hover:bg-red-700 transition delay-150 duration-300 ease-in-out">
              <span>{t("header.register_button")}</span>
            </Button>{" "}
          </div>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
