import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, UserPlus, LogIn, FileText, Calendar, Shield } from "lucide-react";

function HomePage() {
  return (
    <div className="container mx-auto max-w-6xl space-y-12 py-8">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
          <GraduationCap className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Welcome to WLC Ormoc
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your journey to excellence starts here. Register now for the upcoming academic year and join our community of learners.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/register">
              <UserPlus className="mr-2 h-5 w-5" />
              Register Now
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg px-8">
            <Link href="/login">
              <LogIn className="mr-2 h-5 w-5" />
              Log In
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <FileText className="w-10 h-10 text-primary mb-2" />
            <CardTitle>Easy Registration</CardTitle>
            <CardDescription>
              Complete your registration in minutes with our streamlined online process
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Calendar className="w-10 h-10 text-primary mb-2" />
            <CardTitle>Real-Time Updates</CardTitle>
            <CardDescription>
              Stay informed about enrollment status, deadlines, and important announcements
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Shield className="w-10 h-10 text-primary mb-2" />
            <CardTitle>Secure & Private</CardTitle>
            <CardDescription>
              Your information is protected with industry-standard security measures
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* Quick Actions */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Quick Actions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>New Student Enrollment</CardTitle>
              <CardDescription>
                First time enrolling? Submit your enrollment application here
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/register">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Start Enrollment
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Enrolled Student Portal</CardTitle>
              <CardDescription>
                Already enrolled? Access your student portal and records
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href="/login">
                  <LogIn className="mr-2 h-4 w-4" />
                  Student Login
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-muted/50 rounded-lg p-8 space-y-4">
        <h2 className="text-2xl font-bold">Important Information</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
            <span>Registration is open for Academic Year 2025-2026</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
            <span>Prepare your documents: Birth Certificate, Report Cards, and 2x2 ID Photos</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
            <span>Need assistance? Contact our registrar's office during business hours</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default HomePage;