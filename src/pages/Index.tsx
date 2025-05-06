
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          
          <section className="py-16 container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose UniVista?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover-scale">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
                        <path d="M12 13v8" />
                        <path d="M12 3v3" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Streamlined Interface</h3>
                    <p className="text-muted-foreground">
                      Access all your academic information with our intuitive and user-friendly interface designed for students.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover-scale">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m16 10-4 4-4-4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Real-time Updates</h3>
                    <p className="text-muted-foreground">
                      Stay informed with real-time notifications about grades, attendance, and important academic announcements.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover-scale">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Personalized Dashboard</h3>
                    <p className="text-muted-foreground">
                      Customize your student portal experience with a personalized dashboard showing what matters most to you.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
          
          <section className="py-16 bg-muted">
            <div className="container text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Access your student portal now to view your academic progress, attendance records, exam schedule, and more.
              </p>
              <Button size="lg" asChild>
                <a href="/dashboard">Go to Dashboard</a>
              </Button>
            </div>
          </section>
          
          <footer className="border-t py-8">
            <div className="container">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                  <div className="bg-primary p-2 rounded-md">
                    <span className="text-primary-foreground font-bold text-lg">UV</span>
                  </div>
                  <span className="font-bold text-lg">UniVista</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  © 2025 UniVista. All rights reserved.
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
