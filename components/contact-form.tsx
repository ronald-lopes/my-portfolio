"use client";

import {
  TextField,
  Button,
  TextArea,
  Label,
  Input,
  Surface,
  FieldError,
} from "@heroui/react";
import { RocketLaunchIcon } from "@phosphor-icons/react";
import axios from "axios";
import React from "react";
import { Ripple } from "m3-ripple";
import "m3-ripple/ripple.css";

export const ContactForm = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = event.target;
    setInputs((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios({
        method: "POST",
        url: process.env.NEXT_PUBLIC_FORM_URL,
        data: inputs,
      });

      if (response.status === 200) {
        setSubmitted(true);
      }
    } catch (error) {
      alert("Something went wrong, please try again later");
      console.log(error);
    }
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
          onSubmit={handleOnSubmit}
          className="flex flex-col items-center justify-center w-full"
        >
          <fieldset className="flex w-full flex-col gap-4 min-w-0">
            <div className="flex w-full flex-col gap-4 sm:flex-row">
              <TextField
                variant="secondary"
                name="name"
                className="w-full min-w-0"
                isRequired
              >
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={inputs.name}
                  onChange={handleOnChange}
                  autoComplete="on"
                />
                <FieldError>Please enter your name</FieldError>
              </TextField>
              <TextField
                variant="secondary"
                name="email"
                type="email"
                className="w-full min-w-0"
                isRequired
              >
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={inputs.email}
                  onChange={handleOnChange}
                  autoComplete="on"
                />
                <FieldError>Please enter a valid email address</FieldError>
              </TextField>
            </div>
            <div>
              <TextField isRequired variant="secondary" name="message">
                <Label htmlFor="message">Your message</Label>
                <TextArea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  className="w-full"
                  rows={3}
                  value={inputs.message}
                  onChange={handleOnChange}
                  autoComplete="off"
                ></TextArea>
                <FieldError>Please enter your message</FieldError>
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
                <RocketLaunchIcon
                  size={24}
                  weight="fill"
                  className="hover:animate-rocket"
                />
                <Ripple />
              </Button>
            )}
            {submitted && (
              <Button
                variant="ghost"
                className="mt-6 w-full bg-emerald-600 text-white duration-1000 ease-in-out hover:bg-emerald-500 lg:max-w-full"
                onPress={() => setSubmitted(false)}
              >
                Thank you for your message!
                <RocketLaunchIcon
                  size={24}
                  weight="fill"
                  className="animate-rocket ml-1"
                />
                <Ripple />
              </Button>
            )}
          </fieldset>
        </form>
      </Surface>
    </>
  );
};
