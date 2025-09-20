"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import {
  Car,
  Zap,
  Calendar,
  MapPin,
  ArrowRight,
  Armchair,
  SteeringWheel,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "./ui/card";
import { Separator } from "./ui/separator";

const vehicleLayouts = {
  sumo: [
    [{ id: 's1', number: 1, available: true }],
    [{ id: 's2', number: 2, available: false }, { id: 's3', number: 3, available: true }, { id: 's4', number: 4, available: true }, { id: 's5', number: 5, available: true }],
    [{ id: 's6', number: 6, available: true }, { id: 's7', number: 7, available: false }, { id: 's8', number: 8, available: true }, { id: 's9', number: 9, available: false }],
  ],
  ev: [
    [{ id: 'e1', number: 1, available: false }],
    [{ id: 'e2', number: 2, available: true }, { id: 'e3', number: 3, available: true }, { id: 'e4', number: 4, available: true }],
    [{ id: 'e5', number: 5, available: true }, { id: 'e6', number: 6, available: false }, { id: 'e7', number: 7, available: true }],
    [{ id: 'e8', number: 8, available: true }, { id: 'e9', number: 9, available: false }, { id: 'e10', number: 10, available: true }],
  ],
};


export default function SeatMap() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const bookingDetails = useMemo(() => ({
    origin: searchParams.get("origin"),
    destination: searchParams.get("destination"),
    date: searchParams.get("date"),
    vehicle: searchParams.get("vehicle") as keyof typeof vehicleLayouts,
  }), [searchParams]);

  if (!bookingDetails.vehicle) {
    // This could be a redirect or an error message.
    return <div className="container text-center py-12">Invalid booking details. Please start over.</div>;
  }
  
  const layout = vehicleLayouts[bookingDetails.vehicle] || [];

  const handleSeatClick = (seatId: string) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    );
  };

  const handleConfirmBooking = () => {
    const params = new URLSearchParams(searchParams);
    params.set("seats", selectedSeats.join(','));
    const bookingId = `BRZ-${Date.now()}`;
    router.push(`/confirmation/${bookingId}?${params.toString()}`);
  }

  const getSeatVariant = (seat: { id: string; available: boolean; }) => {
    if (selectedSeats.includes(seat.id)) return "default";
    if (!seat.available) return "secondary";
    return "outline";
  }

  const renderVehicleIcon = () => {
    if(bookingDetails.vehicle === 'sumo') return <Car className="h-5 w-5 mr-2" />
    if(bookingDetails.vehicle === 'ev') return <Zap className="h-5 w-5 mr-2" />
    return null;
  }

  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Select Your Seats</CardTitle>
                    <CardDescription>Click on available seats to select them.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="max-w-md mx-auto">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 md:p-6 space-y-4">
                            <div className="text-center text-sm font-medium text-muted-foreground">Front of Vehicle</div>
                            <div className="space-y-4">
                                {layout.map((row, rowIndex) => (
                                    <div key={rowIndex} className="flex justify-center items-center gap-2 md:gap-4">
                                        {rowIndex === 0 && <div className="w-16"></div> }
                                        {row.map((seat) => (
                                        <Button
                                            key={seat.id}
                                            variant={getSeatVariant(seat)}
                                            disabled={!seat.available}
                                            onClick={() => handleSeatClick(seat.id)}
                                            className="aspect-square h-auto w-16 p-1 flex flex-col"
                                            aria-label={`Seat ${seat.number}`}
                                        >
                                            <Armchair className="h-6 w-6 md:h-8 md:w-8" />
                                            <span className="text-xs">{seat.number}</span>
                                        </Button>
                                        ))}
                                        {rowIndex === 0 && 
                                            <div className="w-16 aspect-square p-1 flex flex-col items-center justify-center">
                                                <SteeringWheel className="h-6 w-6 md:h-8 md:w-8 text-muted-foreground"/>
                                                <span className="text-xs text-muted-foreground">Driver</span>
                                            </div>
                                        }
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center space-x-4 pt-4 text-sm">
                                <div className="flex items-center"><Armchair className="h-4 w-4 mr-2 text-primary fill-primary"/> Selected</div>
                                <div className="flex items-center"><Armchair className="h-4 w-4 mr-2 border-2 rounded-sm"/> Available</div>
                                <div className="flex items-center"><Armchair className="h-4 w-4 mr-2 text-muted-foreground fill-muted"/> Booked</div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

        <div className="lg:col-span-1 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                    <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                        <span>{bookingDetails.origin}</span>
                        <ArrowRight className="h-4 w-4 mx-2 text-muted-foreground" />
                        <span>{bookingDetails.destination}</span>
                    </div>
                    <div className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                        <span>{bookingDetails.date}</span>
                    </div>
                    <div className="flex items-center">
                        {renderVehicleIcon()}
                        <span className="capitalize">{bookingDetails.vehicle}</span>
                    </div>
                    <Separator />
                    <div>
                        <h4 className="font-semibold mb-2">Selected Seats:</h4>
                        {selectedSeats.length > 0 ? (
                            <p className="font-mono text-lg font-bold text-primary">{selectedSeats.join(', ')}</p>
                        ) : (
                            <p className="text-muted-foreground">No seats selected yet.</p>
                        )}
                    </div>
                </CardContent>
                <CardFooter>
                    <Button 
                        className="w-full" 
                        size="lg"
                        disabled={selectedSeats.length === 0}
                        onClick={handleConfirmBooking}
                    >
                        Confirm Booking
                    </Button>
                </CardFooter>
            </Card>
        </div>
      </div>
    </div>
  );
}
