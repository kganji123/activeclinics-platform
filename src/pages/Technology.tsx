import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Smartphone, Monitor, Database, MessageCircle, BarChart, Lock } from "lucide-react";
import techImage from "@/assets/tech-dashboard.jpg";

const Technology = () => {
  const patientFeatures = [
    { icon: Smartphone, title: "Mobile App", desc: "Book, manage, and track appointments on the go" },
    { icon: MessageCircle, title: "WhatsApp Integration", desc: "Reminders and updates via WhatsApp" },
    { icon: Database, title: "Health Records", desc: "Secure digital storage of all medical data" },
  ];

  const doctorFeatures = [
    { icon: Monitor, title: "Practice Dashboard", desc: "Real-time insights on appointments and revenue" },
    { icon: BarChart, title: "Analytics", desc: "Patient trends, popular times, growth metrics" },
    { icon: Database, title: "EMR System", desc: "Electronic medical records with quick search" },
  ];

  const clinicFeatures = [
    { icon: MessageCircle, title: "Queue Management", desc: "Smart token system reduces wait times" },
    { icon: Lock, title: "Security & Privacy", desc: "HIPAA-compliant data protection" },
    { icon: Smartphone, title: "Digital Payments", desc: "Integrated UPI, cards, and wallets" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Technology That <span className="text-primary">Powers Better Care</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Our integrated platform connects patients, doctors, and clinics seamlessly
          </p>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <img 
            src={techImage} 
            alt="ActiveClinics technology dashboard showing patient data and analytics" 
            className="rounded-2xl shadow-2xl w-full"
          />
        </div>
      </section>

      {/* Patient App */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">For Patients</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {patientFeatures.map((feature) => (
              <Card key={feature.title} className="p-6 text-center">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 max-w-3xl mx-auto">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Key Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Browse doctors by speciality, location, and availability</li>
                <li>✓ Book appointments instantly with real-time slot availability</li>
                <li>✓ Receive automated WhatsApp reminders before appointments</li>
                <li>✓ Access complete medical history and prescriptions anytime</li>
                <li>✓ Pay securely online or at the clinic</li>
                <li>✓ Rate and review your consultation experience</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Doctor Dashboard */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">For Doctors</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {doctorFeatures.map((feature) => (
              <Card key={feature.title} className="p-6 text-center">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 max-w-3xl mx-auto">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Dashboard Capabilities</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ View today's appointments with patient details</li>
                <li>✓ Manage your availability and block time slots</li>
                <li>✓ Track consultation revenue and payment status</li>
                <li>✓ Access patient medical history before consultation</li>
                <li>✓ Create digital prescriptions and share via WhatsApp</li>
                <li>✓ Analytics on patient demographics and popular consultation hours</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Clinic Tools */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Clinic Management</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {clinicFeatures.map((feature) => (
              <Card key={feature.title} className="p-6 text-center">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 max-w-3xl mx-auto">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Backend Infrastructure</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Cloud-based system with 99.9% uptime</li>
                <li>✓ Automated patient check-in with digital tokens</li>
                <li>✓ Real-time queue status displayed on screens</li>
                <li>✓ Integrated billing and payment reconciliation</li>
                <li>✓ Multi-location support for clinic chains</li>
                <li>✓ Regular backups and disaster recovery</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <Lock className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Security & Compliance</h2>
          <p className="text-muted-foreground mb-6">
            We take data security seriously. All patient information is encrypted, access-controlled, and compliant with healthcare privacy regulations.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-4">
              <p className="font-semibold">256-bit Encryption</p>
            </Card>
            <Card className="p-4">
              <p className="font-semibold">HIPAA Compliant</p>
            </Card>
            <Card className="p-4">
              <p className="font-semibold">Regular Audits</p>
            </Card>
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

export default Technology;
