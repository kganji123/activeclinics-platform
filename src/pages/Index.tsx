import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Stethoscope, Users, Zap, Shield, HeartPulse, Building2 } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Practice. Our Platform. <span className="text-primary">Better Healthcare.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                India's modern multi-speciality healthcare startup blending technology, premium infrastructure, and patient-first care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">Book a Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/franchise">Partner With Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Modern clinic interior with aqua blue lighting" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose ActiveClinics?</h2>
            <p className="text-xl text-muted-foreground">Modern healthcare ecosystem built for everyone</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Stethoscope className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">For Doctors</h3>
              <p className="text-muted-foreground">Ready-to-use cabins, zero maintenance, flexible rent, and complete practice freedom.</p>
              <Button variant="link" className="mt-4 p-0" asChild>
                <Link to="/for-doctors">Learn more →</Link>
              </Button>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <HeartPulse className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">For Patients</h3>
              <p className="text-muted-foreground">Easy booking, WhatsApp reminders, multiple specialities under one roof.</p>
              <Button variant="link" className="mt-4 p-0" asChild>
                <Link to="/for-patients">Learn more →</Link>
              </Button>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Building2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Franchise Opportunity</h3>
              <p className="text-muted-foreground">Join India's fastest-growing healthcare network with proven business model.</p>
              <Button variant="link" className="mt-4 p-0" asChild>
                <Link to="/franchise">Learn more →</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Tech-Enabled</h3>
              <p className="text-sm text-muted-foreground">Modern platform for seamless operations</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Patient-First</h3>
              <p className="text-sm text-muted-foreground">Exceptional care experience</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">World-class infrastructure</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Multi-Speciality</h3>
              <p className="text-sm text-muted-foreground">All care under one roof</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Experience Better Healthcare?</h2>
          <p className="text-lg mb-8 opacity-90">Join thousands of satisfied patients and healthcare professionals</p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 ActiveClinics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
