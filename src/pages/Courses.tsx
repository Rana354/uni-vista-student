
import React from "react";
import Sidebar from "@/components/Sidebar";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen } from "lucide-react";

const Courses = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
              <p className="text-muted-foreground">
                Manage your registered courses and materials
              </p>
            </div>
            <Button className="w-full md:w-auto">
              <BookOpen className="mr-2 h-4 w-4" />
              Course Catalog
            </Button>
          </div>
          
          <Tabs defaultValue="current">
            <TabsList className="mb-4">
              <TabsTrigger value="current">Current Courses</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            </TabsList>
            
            <TabsContent value="current" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {courses.map(course => (
                  <CourseCard key={course.id} course={course} className="hover-scale" />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="completed">
              <Card>
                <CardHeader>
                  <CardTitle>Previous Semesters</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    Previously completed courses will appear here
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="upcoming">
              <Card>
                <CardHeader>
                  <CardTitle>Future Semesters</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    Planned future courses will appear here
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <Card>
            <CardHeader>
              <CardTitle>Degree Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Core Requirements</span>
                    <span className="text-sm text-muted-foreground">18/24 Credits</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5 mb-4">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Major Requirements</span>
                    <span className="text-sm text-muted-foreground">30/45 Credits</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5 mb-4">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "67%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Electives</span>
                    <span className="text-sm text-muted-foreground">12/15 Credits</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5 mb-4">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Total Degree Progress</span>
                    <span className="text-sm text-muted-foreground">60/120 Credits</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-accent h-2.5 rounded-full" style={{ width: "50%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Courses;
