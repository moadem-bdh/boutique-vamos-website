import { useState, type ChangeEvent } from "react";

export function useForm(
  initialValues: Record<string, string | number | boolean>,
) {
  const [values, setValues] =
    useState<Record<string, string | number | boolean>>(initialValues);

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    const newValue: string | number | boolean =
      type === "checkbox" ? checked : value;

    setValues((prev: Record<string, string | number | boolean>) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  // Reset the form to initial values
  const resetForm = () => {
    setValues(initialValues);
  };

  return {
    formValues: values,
    changeFormValues: handleChange,
    resetForm,
    hardSetValues: setValues, // optional, if you want to programmatically update form
  } as const;
}
