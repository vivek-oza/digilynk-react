"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { RainbowButtonCustom } from "../magicui/rainbow-button-custom";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { RainbowButton } from "../magicui/rainbow-button";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export default function AppointmentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    toast.success("Appointment booked successfully!");
    reset();
  };

  return (
    <div className="flex justify-center items-center  z-10 lg:py-0 py-4 px-2 lg:max-w-[400px] w-full">
      <Card className="w-full shadow-xl border-2 bg-white/5 backdrop-blur-md">
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-bold font-poppins">
            Book an Appointment
          </CardTitle>
          <CardDescription>We'll get back to you shortly</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                {...register("name")}
                placeholder="John Doe"
                className="focus-visible:ring-[#82CEFD]"
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm leading-none">
                Phone Number
              </Label>
              <Input
                id="phone"
                {...register("phone")}
                placeholder="+91 9998887776"
                className="focus-visible:ring-[#82CEFD]"
              />
              {errors.phone && (
                <p className="text-xs text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Your Message</Label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder="Tell us about your needs..."
                className="focus-visible:ring-[#82CEFD] h-[30px] max-h-[80px]"
              />
              {errors.message && (
                <p className="text-xs text-red-500">{errors.message.message}</p>
              )}
            </div>

            <div className="w-full flex justify-center">
              <RainbowButtonCustom className="">
                Book
              </RainbowButtonCustom>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
