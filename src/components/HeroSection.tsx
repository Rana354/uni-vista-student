
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-background pt-8 pb-16 md:pt-16 md:pb-24">
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-br from-primary/20 to-accent/20" />
      
      <div className="container relative z-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight lg:text-6xl">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                UniVista
              </span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Your comprehensive student portal for managing academics, attendance, grades, and more - all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild size="lg">
                <Link to="/dashboard">Go to Dashboard</Link>
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-xl bg-foreground/5 p-2 shadow-lg">
              <div className="glass-card rounded-lg overflow-hidden flex flex-col h-full">
                <div className="bg-primary/10 border-b p-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-sm font-medium">UniVista Dashboard</div>
                </div>
                <div className="flex-1 p-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-foreground/5 p-3 rounded-md">
                      <div className="h-2 w-16 bg-foreground/20 rounded mb-2" />
                      <div className="h-8 w-full bg-foreground/10 rounded" />
                    </div>
                    <div className="bg-foreground/5 p-3 rounded-md">
                      <div className="h-2 w-20 bg-foreground/20 rounded mb-2" />
                      <div className="h-8 w-full bg-foreground/10 rounded" />
                    </div>
                    <div className="col-span-2 bg-foreground/5 p-3 rounded-md">
                      <div className="h-2 w-24 bg-foreground/20 rounded mb-2" />
                      <div className="grid grid-cols-3 gap-1">
                        <div className="h-2 bg-foreground/10 rounded" />
                        <div className="h-2 bg-foreground/10 rounded" />
                        <div className="h-2 bg-foreground/10 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block absolute -bottom-6 -right-6 w-24 h-24 bg-accent/30 rounded-full blur-xl" />
            <div className="hidden md:block absolute -top-8 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="hover-scale glass-card p-6 rounded-xl">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
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
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Academic Excellence</h3>
            <p className="text-muted-foreground">
              Track your academic progress, access course materials, and manage your grades all in one place.
            </p>
          </div>
          
          <div className="hover-scale glass-card p-6 rounded-xl">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
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
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
                <path d="m9 16 2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Seamless Scheduling</h3>
            <p className="text-muted-foreground">
              Keep track of your classes, exams, and university events with our intuitive scheduling system.
            </p>
          </div>
          
          <div className="hover-scale glass-card p-6 rounded-xl">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
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
                <path d="M8 3v3a2 2 0 0 1-2 2H3" />
                <path d="M21 8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8Z" />
                <path d="M12 12h4" />
                <path d="M12 16h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Easy Administration</h3>
            <p className="text-muted-foreground">
              Submit leave requests, check attendance records, and communicate with faculty through an intuitive interface.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
