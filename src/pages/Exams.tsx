
import React from "react";
import Sidebar from "@/components/Sidebar";
import { exams } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

const Exams = () => {
  const upcomingExams = [...exams].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Exam Schedule</h1>
            <p className="text-muted-foreground">
              View your upcoming and past exams
            </p>
          </div>
          
          <Tabs defaultValue="upcoming">
            <TabsList className="mb-4">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past Exams</TabsTrigger>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Exams</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingExams.map(exam => (
                      <div key={exam.id} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border rounded-lg">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline">{exam.courseId}</Badge>
                            <Badge 
                              variant="secondary"
                              className={
                                exam.type === "Final" 
                                  ? "bg-red-500/10 text-red-500 hover:bg-red-500/20 hover:text-red-600" 
                                  : exam.type === "Midterm" 
                                    ? "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 hover:text-yellow-600" 
                                    : undefined
                              }
                            >
                              {exam.type}
                            </Badge>
                          </div>
                          <h4 className="font-medium">{exam.courseName}</h4>
                          <div className="text-sm text-muted-foreground flex items-center space-x-4">
                            <span className="flex items-center">
                              <Calendar className="mr-1 h-3 w-3" />
                              {exam.date}
                            </span>
                            <span className="flex items-center">
                              <Clock className="mr-1 h-3 w-3" />
                              {exam.startTime} - {exam.endTime}
                            </span>
                          </div>
                        </div>
                        <div className="text-sm">
                          <div className="font-medium">Location</div>
                          <div className="text-muted-foreground">{exam.location}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exam Preparation Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Study Guides</h4>
                        <p className="text-sm text-muted-foreground">Access study materials for your upcoming exams</p>
                      </div>
                      <div className="text-primary">→</div>
                    </div>
                    
                    <div className="p-4 border rounded-lg flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Past Papers</h4>
                        <p className="text-sm text-muted-foreground">View previous years' exam papers</p>
                      </div>
                      <div className="text-primary">→</div>
                    </div>
                    
                    <div className="p-4 border rounded-lg flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Tutoring Services</h4>
                        <p className="text-sm text-muted-foreground">Schedule a session with a tutor</p>
                      </div>
                      <div className="text-primary">→</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="past">
              <Card>
                <CardHeader>
                  <CardTitle>Past Exams</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    Your past exam results will appear here
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="calendar">
              <Card>
                <CardHeader>
                  <CardTitle>Exam Calendar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-muted-foreground">
                    Calendar view will be implemented here
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Exams;
