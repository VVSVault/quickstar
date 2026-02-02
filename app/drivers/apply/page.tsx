"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Input, Select, Textarea, Checkbox } from "@/components/ui/Input";

const steps = [
  { id: 1, title: "Basic Info" },
  { id: 2, title: "Experience" },
  { id: 3, title: "Preferences" },
  { id: 4, title: "Compliance" },
];

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentStep < steps.length) {
      handleNext();
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <div className="bg-[var(--navy)] pt-32 pb-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Apply to Drive
              </h1>
            </motion.div>
          </div>
        </div>

        <Section background="white" padding="xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-full bg-[var(--success)] flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[var(--navy)] mb-4">
              Application Submitted!
            </h2>
            <p className="text-[var(--gray)] text-lg mb-8">
              Thank you for your interest in driving with Quickstar Transportation. A recruiter will review your application and contact you within 24-48 hours.
            </p>
            <div className="bg-[var(--gray-light)] rounded-xl p-6 mb-8 text-left">
              <h3 className="font-bold text-[var(--navy)] mb-3">What's Next?</h3>
              <ul className="space-y-2 text-[var(--charcoal)]">
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 rounded-full bg-[var(--orange)] text-white flex items-center justify-center text-sm flex-shrink-0">1</span>
                  <span>Our recruiting team will review your application</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 rounded-full bg-[var(--orange)] text-white flex items-center justify-center text-sm flex-shrink-0">2</span>
                  <span>A recruiter will call you to discuss opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 rounded-full bg-[var(--orange)] text-white flex items-center justify-center text-sm flex-shrink-0">3</span>
                  <span>We'll schedule orientation if you're a good fit</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="/drivers">
                Explore More
              </Button>
              <Button variant="ghost" href="tel:+18005551234">
                Call Us: (800) 555-1234
              </Button>
            </div>
          </motion.div>
        </Section>
      </>
    );
  }

  return (
    <>
      <div className="bg-[var(--navy)] pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Apply to Drive
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Start your application in just a few minutes. A recruiter will contact you within 24-48 hours.
            </p>
          </motion.div>
        </div>
      </div>

      <Section background="light" padding="lg">
        <div className="max-w-2xl mx-auto">
          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                      step.id <= currentStep
                        ? "bg-[var(--orange)] text-white"
                        : "bg-gray-200 text-[var(--gray)]"
                    }`}
                  >
                    {step.id < currentStep ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      step.id
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-12 sm:w-20 h-1 mx-2 rounded transition-colors ${
                        step.id < currentStep ? "bg-[var(--orange)]" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs sm:text-sm text-[var(--gray)]">
              {steps.map((step) => (
                <span key={step.id} className={step.id === currentStep ? "text-[var(--orange)] font-semibold" : ""}>
                  {step.title}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >
            <AnimatePresence mode="wait">
              {/* Step 1: Basic Info */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-xl font-bold text-[var(--navy)] mb-6">
                    Basic Information
                  </h2>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input label="First Name" name="firstName" required />
                      <Input label="Last Name" name="lastName" required />
                    </div>
                    <Input label="Email" name="email" type="email" required />
                    <Input label="Phone" name="phone" type="tel" required />
                    <div className="grid md:grid-cols-3 gap-4">
                      <Input label="City" name="city" required />
                      <Select
                        label="State"
                        name="state"
                        options={[
                          { value: "AL", label: "Alabama" },
                          { value: "AK", label: "Alaska" },
                          { value: "AZ", label: "Arizona" },
                          { value: "AR", label: "Arkansas" },
                          { value: "CA", label: "California" },
                          { value: "CO", label: "Colorado" },
                          { value: "CT", label: "Connecticut" },
                          { value: "DE", label: "Delaware" },
                          { value: "FL", label: "Florida" },
                          { value: "GA", label: "Georgia" },
                          { value: "TX", label: "Texas" },
                          // Add more states...
                        ]}
                        required
                      />
                      <Input label="ZIP Code" name="zip" required />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Experience */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-xl font-bold text-[var(--navy)] mb-6">
                    Driving Experience
                  </h2>
                  <div className="space-y-4">
                    <Select
                      label="CDL Class"
                      name="cdlClass"
                      options={[
                        { value: "A", label: "Class A" },
                        { value: "B", label: "Class B" },
                      ]}
                      required
                    />
                    <Select
                      label="Years of CDL Experience"
                      name="experience"
                      options={[
                        { value: "0-6", label: "Less than 6 months" },
                        { value: "6-12", label: "6-12 months" },
                        { value: "1-2", label: "1-2 years" },
                        { value: "2-5", label: "2-5 years" },
                        { value: "5+", label: "5+ years" },
                      ]}
                      required
                    />
                    <div>
                      <label className="block text-sm font-semibold text-[var(--charcoal)] mb-3">
                        Type of Experience (select all that apply)
                      </label>
                      <div className="grid sm:grid-cols-2 gap-2">
                        <Checkbox label="Over-the-Road (OTR)" name="exp_otr" />
                        <Checkbox label="Regional" name="exp_regional" />
                        <Checkbox label="Dedicated" name="exp_dedicated" />
                        <Checkbox label="Local" name="exp_local" />
                      </div>
                    </div>
                    <Input label="Current/Most Recent Employer" name="employer" />
                    <div>
                      <label className="block text-sm font-semibold text-[var(--charcoal)] mb-3">
                        Endorsements (select all that apply)
                      </label>
                      <div className="grid sm:grid-cols-3 gap-2">
                        <Checkbox label="Hazmat" name="end_hazmat" />
                        <Checkbox label="Tanker" name="end_tanker" />
                        <Checkbox label="Doubles/Triples" name="end_doubles" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Preferences */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-xl font-bold text-[var(--navy)] mb-6">
                    Job Preferences
                  </h2>
                  <div className="space-y-4">
                    <Select
                      label="Desired Job Type"
                      name="jobType"
                      options={[
                        { value: "dedicated", label: "Dedicated" },
                        { value: "regional", label: "Regional" },
                        { value: "otr", label: "Over-the-Road (OTR)" },
                        { value: "owner-op", label: "Owner-Operator" },
                      ]}
                      required
                    />
                    <Select
                      label="Desired Home Time"
                      name="homeTime"
                      options={[
                        { value: "daily", label: "Daily" },
                        { value: "weekly", label: "Weekly" },
                        { value: "biweekly", label: "Every 2 weeks" },
                        { value: "flexible", label: "Flexible" },
                      ]}
                      required
                    />
                    <Input label="Desired Start Date" name="startDate" type="date" />
                    <Select
                      label="How did you hear about us?"
                      name="source"
                      options={[
                        { value: "indeed", label: "Indeed" },
                        { value: "google", label: "Google Search" },
                        { value: "referral", label: "Referral from Driver" },
                        { value: "social", label: "Social Media" },
                        { value: "other", label: "Other" },
                      ]}
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 4: Compliance */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-xl font-bold text-[var(--navy)] mb-6">
                    Compliance Questions
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-[var(--gray-light)] rounded-lg p-4">
                      <p className="text-sm text-[var(--gray)] mb-4">
                        Please answer the following questions honestly. All information is kept confidential.
                      </p>

                      <div className="space-y-4">
                        <Select
                          label="Any accidents in the past 3 years?"
                          name="accidents"
                          options={[
                            { value: "no", label: "No" },
                            { value: "yes", label: "Yes" },
                          ]}
                          required
                        />
                        <Select
                          label="Any moving violations in the past 3 years?"
                          name="violations"
                          options={[
                            { value: "no", label: "No" },
                            { value: "yes", label: "Yes" },
                          ]}
                          required
                        />
                        <Select
                          label="Any DUI/DWI ever?"
                          name="dui"
                          options={[
                            { value: "no", label: "No" },
                            { value: "yes", label: "Yes" },
                          ]}
                          required
                        />
                        <Select
                          label="Can you pass a DOT drug screen?"
                          name="drugScreen"
                          options={[
                            { value: "yes", label: "Yes" },
                            { value: "no", label: "No" },
                          ]}
                          required
                        />
                      </div>
                    </div>

                    <Checkbox
                      label="I consent to a background check and verification of my driving record"
                      name="consent"
                      required
                    />
                    <Checkbox
                      label="I certify that all information provided is true and accurate"
                      name="certify"
                      required
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
              {currentStep > 1 ? (
                <Button variant="ghost" type="button" onClick={handleBack}>
                  Back
                </Button>
              ) : (
                <div />
              )}
              <Button
                variant="orange"
                size="lg"
                type="submit"
                loading={isSubmitting}
              >
                {currentStep < steps.length ? "Continue" : isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </motion.form>

          <p className="text-center text-sm text-[var(--gray)] mt-6">
            Need help? Call our recruiting team at{" "}
            <a href="tel:+18005551234" className="text-[var(--orange)] font-semibold">
              (800) 555-1234
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
