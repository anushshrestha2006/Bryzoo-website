"use client";

import { useSearchParams, useParams, useRouter } from "next/navigation";
import { useMemo } from "react";
import Link from "next/link";
import {
  Car,
  Zap,
  Calendar,
  MapPin,
  ArrowRight,
  Armchair,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ConfirmationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();

  const bookingDetails = useMemo(
    () => ({
      id: params.id,
      origin: searchParams.get("origin"),
      destination: searchParams.get("destination"),
      date: searchParams.get("date"),
      vehicle: searchParams.get("vehicle"),
      seats: searchParams.get("seats"),
    }),
    [searchParams, params]
  );

  const renderVehicleIcon = () => {
    if (bookingDetails.vehicle === "sumo")
      return <Car className="h-5 w-5 mr-2" />;
    if (bookingDetails.vehicle === "ev")
      return <Zap className="h-5 w-5 mr-2" />;
    return null;
  };

  return (
    <div className="container py-12 flex justify-center px-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="items-center text-center p-4 md:p-6">
          <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
          <CardTitle className="font-headline text-2xl md:text-3xl">
            Booking Confirmed!
          </CardTitle>
          <p className="text-muted-foreground text-center">
            Your ride is booked. Thank you for choosing Bryzoo.
          </p>
        </CardHeader>
        <CardContent className="space-y-6 p-4 md:p-6">
          <div className="border rounded-lg p-4 space-y-4">
            <div className="flex flex-wrap justify-between items-center gap-2">
              <span className="text-sm text-muted-foreground">Booking ID</span>
              <Badge variant="secondary" className="text-xs">{bookingDetails.id}</Badge>
            </div>
            <div className="flex flex-col sm:flex-row items-center text-lg font-medium text-center">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary hidden sm:block" />
                <span>{bookingDetails.origin}</span>
              </div>
              <ArrowRight className="h-4 w-4 mx-2 my-2 sm:my-0 text-muted-foreground" />
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary hidden sm:block" />
                <span>{bookingDetails.destination}</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
              <div>
                <p className="text-muted-foreground">Date</p>
                <p className="font-medium">{bookingDetails.date}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-muted-foreground mr-2">{renderVehicleIcon()}</div>
              <div>
                <p className="text-muted-foreground">Vehicle</p>
                <p className="font-medium capitalize">{bookingDetails.vehicle}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Armchair className="h-5 w-5 mr-2 text-muted-foreground" />
              <div>
                <p className="text-muted-foreground">Seats</p>
                <p className="font-medium break-all">{bookingDetails.seats}</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 md:p-6">
          <Button className="w-full" asChild>
            <Link href="/">Book Another Ride</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
