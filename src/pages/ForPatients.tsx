import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, MessageSquare, Stethoscope, FileText, Clock, Shield } from "lucide-react";

const ForPatients = () => {
  const benefits = [
    {
      icon: Calendar,
      title: "Easy Online Booking",
      description: "Book appointments 24/7 through our website or app. No phone calls needed.",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Reminders",
      description: "Get appointment confirmations and reminders directly on WhatsApp.",
    },
    {
      icon: Stethoscope,
      title: "Multiple Specialities",
      description: "Access 15+ specialities under one roof - from general medicine to specialists.",
    },
    {
      icon: FileText,
      title: "Digital Health Records",
      description: "All your medical records, prescriptions, and reports stored securely online.",
    },
    {
      icon: Clock,
      title: "Minimal Wait Times",
      description: "Smart queue management ensures you're seen on time, every time.",
    },
    {
      icon: Shield,
      title: "Quality Assured Care",
      description: "All doctors verified, modern equipment, and hygiene protocols maintained.",
    },
  ];

  const specialities = [
    "General Medicine",
    "Pediatrics",
    "Gynecology",
    "Dermatology",
    "Orthopedics",
    "Cardiology",
    "ENT",
    "Ophthalmology",
    "Dentistry",
    "Physiotherapy",
    "Psychology",
    "Nutrition",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Healthcare Made <span className="text-primary">Simple & Accessible</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Book appointments instantly, consult top doctors, and manage your health - all from one platform.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Book Your First Appointment</Link>
          </Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Patients Love Us</h2>
            <p className="text-xl text-muted-foreground">Modern healthcare experience designed for you</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="p-6 hover:shadow-lg transition-shadow">
                <benefit.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialities */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">All Specialities Under One Roof</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {specialities.map((speciality) => (
              <Card key={speciality} className="p-4 text-center hover:shadow-md transition-shadow">
                <p className="font-medium">{speciality}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Choose Your Doctor</h3>
              <p className="text-muted-foreground">Browse specialities and select from our verified doctors</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Book Your Slot</h3>
              <p className="text-muted-foreground">Pick a convenient time and confirm your appointment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Visit & Get Care</h3>
              <p className="text-muted-foreground">Arrive at your time, minimal wait, quality consultation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Experience Better Healthcare Today</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of satisfied patients who trust ActiveClinics
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Book Appointment</Link>
          </Button>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 ActiveClinics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ForPatients;
