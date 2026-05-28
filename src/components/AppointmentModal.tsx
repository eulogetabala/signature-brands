"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CalendarClock, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
] as const;

type AppointmentModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function AppointmentModal({ open, onOpenChange }: AppointmentModalProps) {
  const [sent, setSent] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  function handleOpenChange(next: boolean) {
    if (!next) {
      setTimeout(() => setSent(false), 300);
    }
    onOpenChange(next);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="z-[100] max-w-[min(100vw-2rem,32rem)] border-brand-white/10 bg-brand-black text-brand-white p-0 gap-0 overflow-hidden sm:rounded-2xl [&>button]:z-50 [&>button]:text-brand-white/60 [&>button]:hover:text-brand-white [&>button]:top-5 [&>button]:right-5">
        <div className="absolute inset-0 methodology-grain pointer-events-none opacity-[0.15]" />
        <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-brand-accent/10 blur-[60px] pointer-events-none" />

        <div className="relative z-10 p-6 sm:p-8">
          {sent ? (
            <div className="py-8 text-center animate-scale-in">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-accent/15 text-brand-accent mb-6">
                <CalendarClock size={28} strokeWidth={1.5} />
              </span>
              <DialogHeader className="space-y-3">
                <DialogTitle className="title-display text-2xl sm:text-3xl font-medium text-brand-white">
                  Request received
                </DialogTitle>
                <DialogDescription className="text-sm text-brand-white/55 font-light leading-relaxed max-w-xs mx-auto">
                  Thank you — we'll confirm your appointment by email shortly.
                </DialogDescription>
              </DialogHeader>
              <button
                type="button"
                onClick={() => handleOpenChange(false)}
                className="mt-8 px-8 py-3 bg-brand-accent text-brand-black text-[11px] uppercase tracking-[0.15em] font-bold rounded-full hover:bg-brand-white transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <DialogHeader className="space-y-3 mb-6 pr-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent">
                  Book a call
                </span>
                <DialogTitle className="title-display text-2xl sm:text-[1.75rem] font-medium text-brand-white leading-tight">
                  Let's <span className="title-accent text-brand-accent">talk</span>.
                </DialogTitle>
                <DialogDescription className="text-sm text-brand-white/50 font-light leading-relaxed">
                  Pick a date and time — we'll get back to you to confirm your appointment.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label="First name" name="firstName" required autoComplete="given-name" />
                  <FormField label="Last name" name="lastName" required autoComplete="family-name" />
                </div>

                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label="Date" name="date" type="date" required min={today} />
                  <label className="block group">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-brand-white/50 group-focus-within:text-brand-accent transition-colors">
                      Time <span className="text-brand-accent">*</span>
                    </span>
                    <select
                      name="time"
                      required
                      defaultValue=""
                      className="mt-2 w-full bg-brand-white/[0.04] border border-brand-white/10 focus:border-brand-accent rounded-lg outline-none px-3 py-2.5 text-sm text-brand-white transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-brand-black">
                        Select a time
                      </option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot} className="bg-brand-black">
                          {slot.replace(":", "h")}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="block group">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-brand-white/50 group-focus-within:text-brand-accent transition-colors">
                    Message <span className="text-brand-accent">*</span>
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project or what you'd like to discuss..."
                    className="mt-2 w-full bg-brand-white/[0.04] border border-brand-white/10 focus:border-brand-accent rounded-lg outline-none px-3 py-2.5 text-sm text-brand-white placeholder:text-brand-white/25 resize-none transition-colors"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-accent text-brand-black text-[11px] uppercase tracking-[0.15em] font-bold rounded-full hover:bg-brand-white transition-colors duration-300"
                >
                  <Send size={14} strokeWidth={2.5} />
                  Send request
                </button>
              </form>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function FormField({
  label,
  name,
  type = "text",
  required,
  min,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block group">
      <span className="text-[10px] uppercase tracking-[0.25em] text-brand-white/50 group-focus-within:text-brand-accent transition-colors">
        {label}
        {required && <span className="text-brand-accent"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        min={min}
        autoComplete={autoComplete}
        className="mt-2 w-full bg-brand-white/[0.04] border border-brand-white/10 focus:border-brand-accent rounded-lg outline-none px-3 py-2.5 text-sm text-brand-white placeholder:text-brand-white/25 transition-colors [color-scheme:dark]"
      />
    </label>
  );
}

type LetsTalkButtonProps = {
  className?: string;
  children?: ReactNode;
};

export function LetsTalkButton({ className, children }: LetsTalkButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          className ??
          "px-5 py-2.5 bg-brand-accent text-brand-black text-[11px] uppercase tracking-[0.15em] font-bold rounded-full hover:bg-brand-white transition-colors duration-300"
        }
      >
        {children ?? "Let's talk"}
      </button>
      <AppointmentModal open={open} onOpenChange={setOpen} />
    </>
  );
}
