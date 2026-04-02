"use client";

import {
  TextField,
  Link,
  Button,
  TextArea,
  Label,
  Input,
  Surface,
} from "@heroui/react";
import { buttonVariants } from "@heroui/styles";
import { RocketLaunchIcon } from "@phosphor-icons/react";
import axios from "axios";
import React from "react";

export const ContactForm = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [formValue, setformValue] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", formValue.name);
    formData.append("email", formValue.email);
    formData.append("message", formValue.message);

    try {
      const response = await axios({
        method: "post",
        url: process.env.NEXT_PUBLIC_FORM_URL,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200) {
        setSubmitted(true);
      }
    } catch (error) {
      alert("Something went wrong, please try again later");
      console.log(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Surface
        className="flex w-full flex-col items-center justify-center rounded-3xl p-6
        sm:p-8 md:w-1/2 lg:max-w-120"
      >
        <p className="mb-6 text-center text-lg font-semibold">
          Feel free to contact me and
          <br className="hidden sm:block" /> I will get back to you as soon as I
          can.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center w-full"
        >
          <fieldset className="flex w-full flex-col gap-4 min-w-0">
            <div className="flex w-full flex-col gap-4 sm:flex-row">
              <TextField
                variant="secondary"
                name="name"
                className="w-full min-w-0"
                isRequired
                onChange={() => handleChange}
              >
                <Label>Name</Label>
                <Input placeholder="Your name" />
              </TextField>
              <TextField
                variant="secondary"
                name="email"
                type="email"
                className="w-full min-w-0"
                isRequired
                onChange={() => handleChange}
              >
                <Label>Email</Label>
                <Input placeholder="Your email" />
              </TextField>
            </div>
            <div>
              <TextField
                isRequired
                variant="secondary"
                name="message"
                onChange={() => handleChange}
              >
                <Label>Your message</Label>
                <TextArea
                  name="message"
                  placeholder="Write your message here..."
                  className="w-full"
                  rows={3}
                ></TextArea>
              </TextField>
            </div>
            {!submitted && (
              <Button
                className="mt-6 w-full lg:max-w-full"
                variant="primary"
                type="submit"
                size="md"
              >
                Get in touch
                <RocketLaunchIcon size={24} />
              </Button>
            )}
            {submitted && (
              <Link
                className={
                  buttonVariants({ variant: "ghost" }) +
                  " mt-6 w-full bg-emerald-600 text-white duration-1000 ease-in-out hover:bg-emerald-500 lg:max-w-full"
                }
                onPress={() => setSubmitted(false)}
              >
                Thank you for your message!
                <RocketLaunchIcon size={24} className="animate-rocket" />
              </Link>
            )}
          </fieldset>
        </form>
      </Surface>
    </>
  );
};
