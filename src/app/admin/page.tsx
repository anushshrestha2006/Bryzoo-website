import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users, Car, BookOpen, Ticket } from "lucide-react";

export default function AdminDashboardPage() {
  const stats = [
    {
      title: "Total Users",
      value: "1,250",
      icon: <Users className="h-6 w-6 text-muted-foreground" />,
    },
    {
      title: "Vehicles",
      value: "15",
      icon: <Car className="h-6 w-6 text-muted-foreground" />,
    },
    {
      title: "Pending Bookings",
      value: "32",
      icon: <BookOpen className="h-6 w-6 text-muted-foreground" />,
    },
    {
      title: "Tickets Issued",
      value: "5,432",
      icon: <Ticket className="h-6 w-6 text-muted-foreground" />,
    },
  ];

  const recentBookings = [
    {
      id: "BRZ-98765",
      user: "Aarav Sharma",
      trip: "Kathmandu to Birgunj",
      date: "2024-08-01",
      status: "Approved",
    },
    {
      id: "BRZ-98764",
      user: "Sunita Rai",
      trip: "Birgunj to Kathmandu",
      date: "2024-08-01",
      status: "Pending",
    },
    {
      id: "BRZ-98763",
      user: "Bikram Thapa",
      trip: "Kathmandu to Birgunj",
      date: "2024-07-31",
      status: "Rejected",
    },
    {
      id: "BRZ-98762",
      user: "Priya Gurung",
      trip: "Birgunj to Kathmandu",
      date: "2024-07-31",
      status: "Approved",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Bookings</CardTitle>
          <CardDescription>
            A quick overview of the latest booking requests.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Booking ID</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Trip</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentBookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell className="font-medium">{booking.id}</TableCell>
                    <TableCell>{booking.user}</TableCell>
                    <TableCell>{booking.trip}</TableCell>
                    <TableCell>{booking.date}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          booking.status === "Approved"
                            ? "default"
                            : booking.status === "Pending"
                            ? "secondary"
                            : "destructive"
                        }
                        className={booking.status === "Approved" ? "bg-green-600" : ""}
                      >
                        {booking.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
