"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import {
  Car,
  Calendar as CalendarIcon,
  MapPin,
  ArrowRight,
  Zap,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const locations = ["Birgunj", "Kathmandu"] as const;

const bookingFormSchema = z
  .object({
    origin: z.enum(locations, {
      required_error: "Please select an origin.",
    }),
    destination: z.enum(locations, {
      required_error: "Please select a destination.",
    }),
    date: z.date({
      required_error: "A date of travel is required.",
    }),
    vehicle: z.string({
      required_error: "Please select a vehicle type.",
    }),
  })
  .refine((data) => data.origin !== data.destination, {
    message: "Origin and destination cannot be the same.",
    path: ["destination"],
  });

type BookingFormValues = z.infer<typeof bookingFormSchema>;

export default function BookingForm() {
  const router = useRouter();

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      date: new Date(),
    },
  });

  function onSubmit(data: BookingFormValues) {
    const params = new URLSearchParams({
      origin: data.origin,
      destination: data.destination,
      date: format(data.date, "yyyy-MM-dd"),
      vehicle: data.vehicle,
    });
    router.push(`/booking?${params.toString()}`);
  }

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">
          Find Your Ride
        </CardTitle>
        <CardDescription>
          Fill in the details below to find available seats.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <FormField
                control={form.control}
                name="origin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Origin</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <MapPin className="mr-2 h-4 w-4" />
                          <SelectValue placeholder="Select a departure point" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {locations.map((loc) => (
                          <SelectItem key={loc} value={loc}>
                            {loc}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="destination"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Destination</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <MapPin className="mr-2 h-4 w-4" />
                          <SelectValue placeholder="Select an arrival point" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {locations.map((loc) => (
                          <SelectItem key={loc} value={loc}>
                            {loc}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of Travel</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date() || date > new Date("2030-01-01")}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="vehicle"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Vehicle Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <Card className="w-full hover:border-primary has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary">
                            <label className="flex items-center p-4 cursor-pointer">
                              <RadioGroupItem value="sumo" id="sumo" className="peer sr-only" />
                              <Car className="mr-4 h-8 w-8 text-primary" />
                              <div>
                                <h3 className="font-semibold">Sumo</h3>
                                <p className="text-sm text-muted-foreground">Standard 10-seater vehicle.</p>
                              </div>
                            </label>
                          </Card>
                        </FormControl>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                           <Card className="w-full hover:border-primary has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary">
                             <label className="flex items-center p-4 cursor-pointer">
                              <RadioGroupItem value="ev" id="ev" className="peer sr-only" />
                              <Zap className="mr-4 h-8 w-8 text-green-500" />
                              <div>
                                <h3 className="font-semibold">Electric Vehicle</h3>
                                <p className="text-sm text-muted-foreground">Eco-friendly 4-seater car.</p>
                              </div>
                            </label>
                          </Card>
                        </FormControl>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" size="lg">
              Find Seats <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
