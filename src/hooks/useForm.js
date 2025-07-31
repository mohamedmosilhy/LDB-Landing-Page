import { useState } from "react";
import { validateForm, submitEmailForm } from "../utils/helpers";

// =============================================================================
// USE FORM HOOK
// =============================================================================
export const useForm = (initialState = {}) => {
  // ===========================================================================
  // STATE
  // ===========================================================================
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  // ===========================================================================
  // EVENT HANDLERS
  // ===========================================================================
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Update form data
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Validate form
      const validation = validateForm(formData);
      if (!validation.isValid) {
        setErrors(validation.errors);
        return;
      }

      // Submit form
      const result = await submitEmailForm(formData.email, formData.message);

      if (result.success) {
        setSubmitStatus("success");
        setFormData(initialState);
        setErrors({});
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ===========================================================================
  // UTILITY FUNCTIONS
  // ===========================================================================
  const resetForm = () => {
    setFormData(initialState);
    setErrors({});
    setSubmitStatus("");
    setIsSubmitting(false);
  };

  const clearErrors = () => {
    setErrors({});
  };

  // ===========================================================================
  // RETURN
  // ===========================================================================
  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
    resetForm,
    clearErrors,
  };
};
