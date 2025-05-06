
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProgressBar from "./ProgressBar";
import { Course } from "@/lib/mock-data";
import { BookOpen } from "lucide-react";

interface CourseCardProps {
  course: Course;
  className?: string;
}

const CourseCard = ({ course, className }: CourseCardProps) => {
  const attendancePercentage = Math.round((course.attendance / course.totalClasses) * 100);
  
  let attendanceStatus: string;
  let statusColor: string;
  
  if (attendancePercentage >= 85) {
    attendanceStatus = "Good";
    statusColor = "bg-green-500";
  } else if (attendancePercentage >= 75) {
    attendanceStatus = "Acceptable";
    statusColor = "bg-yellow-500";
  } else {
    attendanceStatus = "At Risk";
    statusColor = "bg-red-500";
  }

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4 text-primary" />
              <Badge variant="outline">{course.code}</Badge>
            </div>
            <CardTitle className="mt-2 text-lg">{course.name}</CardTitle>
          </div>
          <Badge variant="secondary">{course.credits} Credits</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="text-sm">
            <span className="text-muted-foreground">Instructor:</span> {course.instructor}
          </div>
          <div className="text-sm">
            <span className="text-muted-foreground">Schedule:</span> {course.schedule}
          </div>
          <div className="text-sm">
            <span className="text-muted-foreground">Room:</span> {course.room}
          </div>
          <div className="mt-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm">Attendance</span>
              <div className="flex items-center space-x-1">
                <div className={`h-2 w-2 rounded-full ${statusColor}`}></div>
                <span className="text-xs">{attendanceStatus}</span>
              </div>
            </div>
            <ProgressBar 
              value={course.attendance} 
              max={course.totalClasses} 
              showPercentage={false}
            />
            <div className="text-xs text-right mt-1 text-muted-foreground">
              {course.attendance}/{course.totalClasses} classes
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
