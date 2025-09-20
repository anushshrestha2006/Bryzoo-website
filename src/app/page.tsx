import BookingForm from "@/components/booking-form";

export default function Home() {
  return (
    <div className="container relative">
      <section className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center py-12 md:py-24 lg:py-32">
        <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
          Your Journey, Simplified
        </h1>
        <p className="mt-4 max-w-[700px] text-foreground/80 md:text-xl">
          Effortlessly book your ride between Birgunj and Kathmandu. Select your
          route, date, and vehicle to get started.
        </p>
      </section>

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur-lg opacity-50"></div>
        <div className="relative">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
