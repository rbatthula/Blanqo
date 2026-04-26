import React, { useState } from "react";
import { useToast } from "../hooks/use-toast";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { serviceOptions, stateOptions } from "../data/mock";

const BookingForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    state: "",
    city: "",
  });

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service || !form.state || !form.city) {
      toast({
        title: "Incomplete details",
        description: "Please fill all fields to schedule your pickup.",
      });
      return;
    }
    const existing = JSON.parse(localStorage.getItem("blanqo_bookings") || "[]");
    existing.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem("blanqo_bookings", JSON.stringify(existing));
    toast({
      title: "Pickup Scheduled",
      description: `Thank you ${form.name}. Our team will call you on ${form.phone} shortly.`,
    });
    setForm({ name: "", phone: "", service: "", state: "", city: "" });
  };

  return (
    <section id="booking" className="bg-[#f5f1ea] py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">
              Schedule
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-light text-[#0b1c2c] mb-6 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Book a complimentary
            <span className="italic text-[#8a6f3e]"> doorstep </span>
            pickup.
          </h2>
          <p className="text-[#4a5568] text-base md:text-lg leading-relaxed max-w-md">
            Tell us a little about what you need cleaned. Our concierge will
            reach out within 30 minutes to confirm your slot.
          </p>
          <div className="mt-8 flex items-center gap-8 text-sm text-[#4a5568]">
            <div>
              <p className="text-3xl font-light text-[#0b1c2c]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                24h
              </p>
              <p className="tracking-wider uppercase text-xs mt-1">Turnaround</p>
            </div>
            <div className="h-10 w-px bg-[#0b1c2c]/15" />
            <div>
              <p className="text-3xl font-light text-[#0b1c2c]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                100%
              </p>
              <p className="tracking-wider uppercase text-xs mt-1">Fabric Safe</p>
            </div>
            <div className="h-10 w-px bg-[#0b1c2c]/15" />
            <div>
              <p className="text-3xl font-light text-[#0b1c2c]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hyd
              </p>
              <p className="tracking-wider uppercase text-xs mt-1">Now Live</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={submit}
          className="bg-white p-8 md:p-10 shadow-[0_20px_60px_-20px_rgba(11,28,44,0.25)]"
        >
          <h3
            className="text-2xl font-light text-[#0b1c2c] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Book Now
          </h3>
          <div className="space-y-5">
            <div>
              <Label className="text-xs uppercase tracking-[0.2em] text-[#4a5568] mb-2 block">
                Full Name
              </Label>
              <Input
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Your name"
                className="rounded-none border-0 border-b border-[#0b1c2c]/20 focus-visible:ring-0 focus-visible:border-[#c9a96e] px-0 h-11 bg-transparent"
              />
            </div>
            <div>
              <Label className="text-xs uppercase tracking-[0.2em] text-[#4a5568] mb-2 block">
                Contact Number
              </Label>
              <Input
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="+91"
                type="tel"
                className="rounded-none border-0 border-b border-[#0b1c2c]/20 focus-visible:ring-0 focus-visible:border-[#c9a96e] px-0 h-11 bg-transparent"
              />
            </div>
            <div>
              <Label className="text-xs uppercase tracking-[0.2em] text-[#4a5568] mb-2 block">
                Service
              </Label>
              <Select value={form.service} onValueChange={(v) => update("service", v)}>
                <SelectTrigger className="rounded-none border-0 border-b border-[#0b1c2c]/20 focus:ring-0 px-0 h-11 bg-transparent">
                  <SelectValue placeholder="Select laundry service" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-xs uppercase tracking-[0.2em] text-[#4a5568] mb-2 block">
                  State
                </Label>
                <Select value={form.state} onValueChange={(v) => update("state", v)}>
                  <SelectTrigger className="rounded-none border-0 border-b border-[#0b1c2c]/20 focus:ring-0 px-0 h-11 bg-transparent">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {stateOptions.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-xs uppercase tracking-[0.2em] text-[#4a5568] mb-2 block">
                  City
                </Label>
                <Input
                  value={form.city}
                  onChange={(e) => update("city", e.target.value)}
                  placeholder="City"
                  className="rounded-none border-0 border-b border-[#0b1c2c]/20 focus-visible:ring-0 focus-visible:border-[#c9a96e] px-0 h-11 bg-transparent"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#0b1c2c] hover:bg-[#142a40] text-white rounded-none h-12 tracking-[0.25em] text-xs uppercase mt-4"
            >
              Book Now
            </Button>
            <p className="text-[11px] text-[#4a5568] text-center tracking-wider">
              All Terms & Conditions Apply
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
