import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Target, Eye, Users } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Co-Founder & CEO",
      bio: "15+ years in healthcare management, MBBS from AIIMS, MBA from IIM-A",
    },
    {
      name: "Priya Sharma",
      role: "Co-Founder & COO",
      bio: "Technology entrepreneur, built 3 successful healthcare startups",
    },
    {
      name: "Dr. Amit Patel",
      role: "Chief Medical Officer",
      bio: "20+ years clinical experience, MD Medicine, passionate about patient care",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 text-center">About ActiveClinics</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Building India's most trusted tech-enabled multi-speciality healthcare ecosystem
          </p>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8">
              <Eye className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To become India's leading multi-speciality healthcare network, making quality healthcare accessible and affordable for everyone through technology and innovation.
              </p>
            </Card>

            <Card className="p-8">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                Empower doctors with premium infrastructure and support while providing patients with world-class care experiences through our technology-first approach.
              </p>
            </Card>
          </div>

          {/* Story */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                ActiveClinics was founded in 2023 with a simple idea: healthcare should be accessible, affordable, and efficient. We noticed that doctors struggled with high overhead costs and administrative burden, while patients faced long wait times and fragmented care.
              </p>
              <p>
                By combining premium clinic infrastructure with cutting-edge technology, we created a platform where doctors can focus on what they do best - caring for patients - while we handle everything else.
              </p>
              <p>
                Today, we're proud to serve thousands of patients across multiple locations, with a network of India's finest healthcare professionals.
              </p>
            </div>
          </div>

          {/* Team */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Our Founding Team</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {team.map((member) => (
                <Card key={member.name} className="p-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/60 mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
                  <p className="text-primary text-center mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground text-center">{member.bio}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="mt-16 bg-secondary rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Patient-First</h3>
                <p className="text-sm text-muted-foreground">Every decision prioritizes patient wellbeing and experience</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">Continuously improving through technology and best practices</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Integrity</h3>
                <p className="text-sm text-muted-foreground">Transparent, ethical, and trustworthy in all our operations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 ActiveClinics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
