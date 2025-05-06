
import React from "react";
import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCard";
import CourseCard from "@/components/CourseCard";
import ProgressBar from "@/components/ProgressBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Check, FileText, Clock } from "lucide-react";
import { courses, exams, leaveRequests, studentInfo, grades } from "@/lib/mock-data";

const Dashboard = () => {
  // Calculate attendance statistics
  const totalClasses = courses.reduce((sum, course) => sum + course.totalClasses, 0);
  const attendedClasses = courses.reduce((sum, course) => sum + course.attendance, 0);
  const attendancePercentage = Math.round((attendedClasses / totalClasses) * 100);
  
  // Get upcoming exams sorted by date
  const upcomingExams = [...exams]
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);
  
  // Get pending leave requests
  const pendingLeaves = leaveRequests.filter(leave => leave.status === "Pending");
  
  // Calculate GPA
  const gradePoints = {
    "A+": 4.3, "A": 4.0, "A-": 3.7,
    "B+": 3.3, "B": 3.0, "B-": 2.7,
    "C+": 2.3, "C": 2.0, "C-": 1.7,
    "D+": 1.3, "D": 1.0, "D-": 0.7,
    "F": 0
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, {studentInfo.name}! Here's an overview of your academic progress.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Overall Attendance"
              value={`${attendancePercentage}%`}
              description={`${attendedClasses}/${totalClasses} classes attended`}
              icon={<Check className="h-4 w-4" />}
            />
            <StatCard
              title="Current GPA"
              value={studentInfo.gpa.toFixed(2)}
              description={`${studentInfo.totalCredits} total credits earned`}
              icon={<FileText className="h-4 w-4" />}
            />
            <StatCard
              title="Upcoming Exams"
              value={upcomingExams.length}
              description={`Next: ${upcomingExams[0]?.courseName.substring(0, 20)}...`}
              icon={<Calendar className="h-4 w-4" />}
            />
            <StatCard
              title="Leave Requests"
              value={pendingLeaves.length}
              description={pendingLeaves.length > 0 ? "Pending approval" : "No pending requests"}
              icon={<Clock className="h-4 w-4" />}
            />
          </div>
          
          <div className="grid gap-6 md:grid-cols-6">
            <Card className="md:col-span-4">
              <CardHeader>
                <CardTitle>Registered Courses</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                {courses.slice(0, 4).map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Upcoming Exams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingExams.map(exam => (
                  <div key={exam.id} className="flex flex-col space-y-1 pb-3 border-b last:border-0">
                    <div className="flex justify-between">
                      <span className="font-medium text-sm">{exam.courseName}</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        {exam.type}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{exam.date}</span>
                      <span className="text-muted-foreground">{exam.startTime} - {exam.endTime}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Location: {exam.location}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-6 md:grid-cols-6">
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Grade Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {grades.slice(0, 3).map(grade => (
                  <div key={grade.courseId} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{grade.courseName}</span>
                      <span className="text-sm font-bold">{grade.grade}</span>
                    </div>
                    <ProgressBar
                      value={grade.total}
                      max={100}
                      size="sm"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Midterm: {grade.midterm}</span>
                      <span>Assignments: {grade.assignment}</span>
                      <span>Final: {grade.final}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Leave Requests</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {leaveRequests.slice(0, 3).map(leave => (
                  <div key={leave.id} className="flex justify-between items-start pb-3 border-b last:border-0">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">
                        {new Date(leave.startDate).toLocaleDateString()} - {new Date(leave.endDate).toLocaleDateString()}
                      </p>
                      <p className="text-xs text-muted-foreground">{leave.reason}</p>
                      <p className="text-xs text-muted-foreground">Submitted: {new Date(leave.submittedOn).toLocaleDateString()}</p>
                    </div>
                    <div>
                      {leave.status === "Approved" && (
                        <span className="text-xs bg-green-500/10 text-green-500 px-2 py-0.5 rounded-full">
                          Approved
                        </span>
                      )}
                      {leave.status === "Pending" && (
                        <span className="text-xs bg-yellow-500/10 text-yellow-500 px-2 py-0.5 rounded-full">
                          Pending
                        </span>
                      )}
                      {leave.status === "Rejected" && (
                        <span className="text-xs bg-red-500/10 text-red-500 px-2 py-0.5 rounded-full">
                          Rejected
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
