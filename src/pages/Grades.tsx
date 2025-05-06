
import React from "react";
import Sidebar from "@/components/Sidebar";
import { grades } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Grades = () => {
  // Calculate GPA
  const totalCredits = 15; // Example total credits
  const gpa = 3.8; // Example GPA
  
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Grades</h1>
            <p className="text-muted-foreground">
              View your academic performance
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Current Semester</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Semester GPA</p>
                    <p className="text-3xl font-bold">{gpa.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Credits</p>
                    <p className="text-3xl font-bold">{totalCredits}</p>
                  </div>
                </div>
                
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-accent h-3 rounded-full" style={{ width: `${(gpa / 4.0) * 100}%` }}></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-muted-foreground">0.0</span>
                  <span className="text-xs text-muted-foreground">4.0</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Academic Standing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-500/20 p-3 rounded-full">
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
                      className="text-green-500"
                    >
                      <path d="m8 12 3 3 6-6" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl font-bold">Good Standing</div>
                    <div className="text-sm text-muted-foreground">
                      You're on track with your academic requirements
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <p className="text-sm font-medium mb-2">Academic Progress</p>
                  <div className="space-y-1">
                    <div className="text-xs flex justify-between mb-1">
                      <span>Cumulative GPA</span>
                      <span>3.75 / 4.0</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: "94%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader className="pb-1">
              <CardTitle>Course Grades</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="current">
                <TabsList className="mb-4">
                  <TabsTrigger value="current">Current Semester</TabsTrigger>
                  <TabsTrigger value="previous">Previous Semesters</TabsTrigger>
                  <TabsTrigger value="transcript">Full Transcript</TabsTrigger>
                </TabsList>
                
                <TabsContent value="current">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Course</TableHead>
                          <TableHead className="text-right">Midterm</TableHead>
                          <TableHead className="text-right">Assignments</TableHead>
                          <TableHead className="text-right">Final</TableHead>
                          <TableHead className="text-right">Total</TableHead>
                          <TableHead className="text-right">Grade</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {grades.map((grade) => (
                          <TableRow key={grade.courseId}>
                            <TableCell className="font-medium">{grade.courseName}</TableCell>
                            <TableCell className="text-right">{grade.midterm}%</TableCell>
                            <TableCell className="text-right">{grade.assignment}%</TableCell>
                            <TableCell className="text-right">{grade.final}%</TableCell>
                            <TableCell className="text-right">{grade.total}%</TableCell>
                            <TableCell className="text-right font-bold">{grade.grade}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
                
                <TabsContent value="previous">
                  <div className="text-center py-8 text-muted-foreground">
                    Grades from previous semesters will appear here
                  </div>
                </TabsContent>
                
                <TabsContent value="transcript">
                  <div className="text-center py-8 text-muted-foreground">
                    Your full academic transcript will appear here
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Grades;
