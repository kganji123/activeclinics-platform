import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Building, Wrench, DollarSign, BarChart3, Users, Calendar } from "lucide-react";
import doctorImage from "@/assets/doctor-hero.jpg";

const ForDoctors = () => {
  const features = [
    {
      icon: Building,
      title: "Ready-to-Use Cabins",
      description: "Fully furnished consultation rooms with modern equipment and comfortable ambiance",
    },
    {
      icon: Wrench,
      title: "Zero Maintenance",
      description: "We handle all cleaning, repairs, utilities, and facility management",
    },
    {
      icon: DollarSign,
      title: "Flexible Rent Options",
      description: "Pay per consultation or monthly rent - choose what works for your practice",
    },
    {
      icon: BarChart3,
      title: "Practice Dashboard",
      description: "Track appointments, patient records, and revenue analytics in real-time",
    },
    {
      icon: Users,
      title: "Patient Acquisition",
      description: "Get access to our patient network and marketing support",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automated appointment booking and WhatsApp reminders for patients",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Focus on Care, <span className="text-primary">We Handle the Rest</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Join India's premier multi-speciality platform. Get premium infrastructure, zero hassles, and complete practice freedom.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Schedule a Tour</Link>
              </Button>
            </div>
            <div>
              <img 
                src={doctorImage} 
                alt="Professional doctor in modern clinic" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-muted-foreground">Premium amenities and support for your practice</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow">
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Doctors Choose Us</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Complete Practice Freedom</h3>
              <p className="text-muted-foreground">Set your own hours, fees, and treatment protocols. You're independent, we're just your infrastructure partner.</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Premium Location & Infrastructure</h3>
              <p className="text-muted-foreground">Prime locations with parking, modern interiors, and all necessary medical equipment included.</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Technology Support</h3>
              <p className="text-muted-foreground">Digital patient records, online booking, automated reminders - all included in your subscription.</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Marketing & Patient Acquisition</h3>
              <p className="text-muted-foreground">Benefit from our brand presence, SEO, social media, and patient referral network.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Practice?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a clinic tour and see why hundreds of doctors trust ActiveClinics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Book a Tour</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/technology">See Technology</Link>
            </Button>
          </div>
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

export default ForDoctors;
