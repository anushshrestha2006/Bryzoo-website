import SeatMap from "@/components/seat-map";
import { Suspense } from "react";

function SeatMapLoading() {
    return (
        <div className="container py-12">
            <div className="animate-pulse">
                <div className="h-8 w-1/2 bg-muted rounded-md mb-2"></div>
                <div className="h-6 w-1/3 bg-muted rounded-md mb-8"></div>
                <div className="max-w-md mx-auto">
                    <div className="bg-muted rounded-xl p-4 md:p-6 space-y-4">
                        <div className="h-64 bg-muted-foreground/10 rounded-md"></div>
                         <div className="h-10 bg-primary/20 rounded-md"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<SeatMapLoading />}>
      <SeatMap />
    </Suspense>
  );
}
