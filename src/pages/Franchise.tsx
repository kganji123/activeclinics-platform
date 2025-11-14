import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { TrendingUp, Users, Headphones, Award, Building, DollarSign } from "lucide-react";

const Franchise = () => {
  const benefits = [
    {
      icon: Award,
      title: "Proven Business Model",
      description: "Join a successful healthcare franchise with demonstrated profitability",
    },
    {
      icon: TrendingUp,
      title: "Growing Market",
      description: "Healthcare industry growing at 20%+ annually in India",
    },
    {
      icon: Users,
      title: "Built-in Patient Base",
      description: "Access to our established network and brand recognition",
    },
    {
      icon: Headphones,
      title: "Complete Support",
      description: "Training, marketing, operations, and technology support included",
    },
    {
      icon: Building,
      title: "Turnkey Setup",
      description: "We help with location selection, design, and launch",
    },
    {
      icon: DollarSign,
      title: "Multiple Revenue Streams",
      description: "Doctor rents, patient consultations, pharmacy tie-ups",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Own an <span className="text-primary">ActiveClinics Franchise</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Join India's fastest-growing multi-speciality healthcare network. Proven model, complete support, attractive returns.
          </p>
          <Button size="lg" asChild>
            <Link to="#inquiry-form">Express Your Interest</Link>
          </Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Partner With Us?</h2>
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

      {/* Investment Details */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Investment Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Initial Investment</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Franchise Fee: ₹15-25 lakhs</li>
                <li>• Setup Cost: ₹40-60 lakhs</li>
                <li>• Working Capital: ₹10-15 lakhs</li>
                <li>• Total: ₹65-100 lakhs (approx)</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Expected Returns</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Monthly Revenue: ₹8-15 lakhs</li>
                <li>• Operating Margin: 30-40%</li>
                <li>• Breakeven: 18-24 months</li>
                <li>• ROI: 25-35% annually</li>
              </ul>
            </Card>
          </div>
          <p className="text-sm text-muted-foreground text-center mt-6">
            *Figures are indicative and vary based on location, size, and local market conditions
          </p>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">What You Get</h2>
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Pre-Launch Support</h3>
              <p className="text-muted-foreground">Site selection, clinic design, equipment procurement, doctor recruitment</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Technology Platform</h3>
              <p className="text-muted-foreground">Complete software suite including patient app, doctor dashboard, and admin panel</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Training & Operations</h3>
              <p className="text-muted-foreground">Staff training, SOPs, quality protocols, and ongoing operational support</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Marketing & Branding</h3>
              <p className="text-muted-foreground">National brand presence, local marketing campaigns, digital marketing support</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Continuous Support</h3>
              <p className="text-muted-foreground">Dedicated franchise manager, quarterly business reviews, updates and improvements</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Express Your Interest</h2>
          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">City</label>
                  <Input placeholder="Preferred location" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Investment Capacity</label>
                <Input placeholder="₹ 50 lakhs - 1 crore" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea placeholder="Tell us about your background and why you're interested..." rows={4} />
              </div>
              <Button className="w-full" size="lg">Submit Inquiry</Button>
            </form>
          </Card>
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

export default Franchise;
