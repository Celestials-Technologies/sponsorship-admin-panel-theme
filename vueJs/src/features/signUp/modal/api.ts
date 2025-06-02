import { errors, formData } from "./types";
import { signUpSchema } from "./schema";
import { ref } from "vue";
import { z } from "zod";

const isSubmitting = ref(false);
const hasSubmissionError = ref(false);

const clearErrors = () => {
  Object.keys(errors).forEach((key) => {
    errors[key as keyof typeof errors] = "";
  });
  hasSubmissionError.value = false;
};

const handleSubmit = async () => {
  clearErrors();
  isSubmitting.value = true;
  try {
    const validatedData = signUpSchema.parse(formData);
    console.log("Form data is valid:", validatedData);
  } catch (error) {
    if (error instanceof z.ZodError) {
      error.errors.forEach((err) => {
        if (err.path) {
          errors[err.path[0] as keyof typeof errors] = err.message;
        }
      });
    } else {
      hasSubmissionError.value = true;
    }
  } finally {
    isSubmitting.value = false;
  }
};

export { handleSubmit, hasSubmissionError, isSubmitting };
