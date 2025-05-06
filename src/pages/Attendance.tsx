
import React from "react";
import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { courses } from "@/lib/mock-data";
import ProgressBar from "@/components/ProgressBar";

const Attendance = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Attendance</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Attendance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-medium mb-4">Overall Statistics</h3>
                
                <div className="space-y-6">
                  {courses.map(course => (
                    <div key={course.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{course.name}</span>
                        <span className="text-sm">{course.attendance}/{course.totalClasses} classes</span>
                      </div>
                      <ProgressBar
                        value={course.attendance}
                        max={course.totalClasses}
                        label={course.code}
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex-1 border-t md:border-t-0 md:border-l pt-6 md:pt-0 md:pl-6">
                <h3 className="text-lg font-medium mb-4">Monthly Breakdown</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">May 2025</span>
                      <span className="text-sm text-muted-foreground">95%</span>
                    </div>
                    <ProgressBar value={95} max={100} showPercentage={false} />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">April 2025</span>
                      <span className="text-sm text-muted-foreground">88%</span>
                    </div>
                    <ProgressBar value={88} max={100} showPercentage={false} />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">March 2025</span>
                      <span className="text-sm text-muted-foreground">92%</span>
                    </div>
                    <ProgressBar value={92} max={100} showPercentage={false} />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">February 2025</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <ProgressBar value={85} max={100} showPercentage={false} />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">January 2025</span>
                      <span className="text-sm text-muted-foreground">90%</span>
                    </div>
                    <ProgressBar value={90} max={100} showPercentage={false} />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                Calendar view will be implemented here
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Absence Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">CS101: Introduction to Computer Science</p>
                      <p className="text-sm text-muted-foreground">Missed class on May 2, 2025</p>
                    </div>
                    <div className="text-xs px-2 py-1 bg-yellow-500/10 text-yellow-500 rounded-full">
                      Pending
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">MATH201: Calculus II</p>
                      <p className="text-sm text-muted-foreground">Missed class on April 28, 2025</p>
                    </div>
                    <div className="text-xs px-2 py-1 bg-green-500/10 text-green-500 rounded-full">
                      Justified
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">ENG102: Academic Writing</p>
                      <p className="text-sm text-muted-foreground">Missed class on April 15, 2025</p>
                    </div>
                    <div className="text-xs px-2 py-1 bg-red-500/10 text-red-500 rounded-full">
                      Unjustified
                    </div>
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

export default Attendance;
