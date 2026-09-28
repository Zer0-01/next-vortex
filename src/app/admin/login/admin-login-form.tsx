"use client";

import { revalidateLogic, useForm } from "@tanstack/react-form";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import {
  adminLoginSchema,
  type AdminLoginValues,
} from "./admin-login-schema";

const defaultValues: AdminLoginValues = {
  email: "",
  password: "",
};

const unavailableMessage =
  "Authentication isn't connected yet. Your details were not sent.";

export function AdminLoginForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const form = useForm({
    defaultValues,
    validationLogic: revalidateLogic({
      mode: "blur",
      modeAfterSubmission: "change",
    }),
    validators: {
      onDynamic: adminLoginSchema,
    },
    onSubmit: () => {
      setSubmissionMessage(unavailableMessage);
    },
  });

  return (
    <div className="w-full max-w-md">
      <div className="mb-10">
        <p className="text-label uppercase text-primary">Admin Access</p>
        <h1 className="mt-3 font-heading text-heading-lg uppercase">
          Welcome back
        </h1>
        <p className="mt-4 max-w-sm text-body-md text-muted-foreground">
          Sign in to access Vortex Academia administration.
        </p>
      </div>

      <form
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          void form.handleSubmit();
        }}
      >
        <FieldGroup>
          <form.Field name="email">
            {(field) => {
              const errorId = `${field.name}-error`;
              const hasErrors = field.state.meta.errors.length > 0;

              return (
                <Field data-invalid={hasErrors}>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="email"
                    autoComplete="email"
                    value={field.state.value}
                    className="h-12 bg-card px-4"
                    aria-describedby={hasErrors ? errorId : undefined}
                    aria-invalid={hasErrors}
                    onBlur={field.handleBlur}
                    onChange={(event) => {
                      setSubmissionMessage("");
                      field.handleChange(event.target.value);
                    }}
                  />
                  <FieldError id={errorId} errors={field.state.meta.errors} />
                </Field>
              );
            }}
          </form.Field>

          <form.Field name="password">
            {(field) => {
              const errorId = `${field.name}-error`;
              const hasErrors = field.state.meta.errors.length > 0;

              return (
                <Field data-invalid={hasErrors}>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <div className="relative">
                    <Input
                      id={field.name}
                      name={field.name}
                      type={isPasswordVisible ? "text" : "password"}
                      autoComplete="current-password"
                      value={field.state.value}
                      className="h-12 bg-card px-4 pr-12"
                      aria-describedby={hasErrors ? errorId : undefined}
                      aria-invalid={hasErrors}
                      onBlur={field.handleBlur}
                      onChange={(event) => {
                        setSubmissionMessage("");
                        field.handleChange(event.target.value);
                      }}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      aria-label={
                        isPasswordVisible ? "Hide password" : "Show password"
                      }
                      className="absolute right-0 top-1/2 size-11 -translate-y-1/2"
                      onPointerDown={(event) => event.preventDefault()}
                      onClick={() => setIsPasswordVisible((visible) => !visible)}
                    >
                      {isPasswordVisible ? (
                        <EyeOff aria-hidden="true" />
                      ) : (
                        <Eye aria-hidden="true" />
                      )}
                    </Button>
                  </div>
                  <FieldError id={errorId} errors={field.state.meta.errors} />
                </Field>
              );
            }}
          </form.Field>

          <form.Subscribe selector={(state) => state.isSubmitting}>
            {(isSubmitting) => (
              <Button
                type="submit"
                size="lg"
                className="min-h-12 w-full font-semibold"
                disabled={isSubmitting}
              >
                Sign in
              </Button>
            )}
          </form.Subscribe>
        </FieldGroup>
      </form>

      <p
        role="status"
        aria-live="polite"
        className="mt-5 min-h-6 text-sm leading-6 text-muted-foreground"
      >
        {submissionMessage}
      </p>

      <Link
        href="/"
        className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-muted-foreground underline decoration-border underline-offset-4 transition-colors duration-fast hover:text-foreground"
      >
        Back to website
      </Link>
    </div>
  );
}
