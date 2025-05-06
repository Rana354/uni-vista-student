
import React from "react";
import Sidebar from "@/components/Sidebar";
import { leaveRequests } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle } from "lucide-react";

const Leaves = () => {
  const pendingLeaves = leaveRequests.filter(leave => leave.status === "Pending");
  const approvedLeaves = leaveRequests.filter(leave => leave.status === "Approved");
  const rejectedLeaves = leaveRequests.filter(leave => leave.status === "Rejected");

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Leave Requests</h1>
              <p className="text-muted-foreground">
                View and manage your leave applications
              </p>
            </div>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              New Request
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex justify-between items-center">
                  <span>Pending</span>
                  <span className="text-sm bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded-full">{pendingLeaves.length}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Awaiting approval from faculty
                </p>
                
                <div className="space-y-2">
                  {pendingLeaves.map(leave => (
                    <div key={leave.id} className="border rounded-lg p-3 text-sm">
                      <p className="font-medium">
                        {new Date(leave.startDate).toLocaleDateString()} - {new Date(leave.endDate).toLocaleDateString()}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{leave.reason}</p>
                      <p className="text-xs text-muted-foreground mt-1">Submitted: {new Date(leave.submittedOn).toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex justify-between items-center">
                  <span>Approved</span>
                  <span className="text-sm bg-green-500/10 text-green-500 px-2 py-1 rounded-full">{approvedLeaves.length}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Leaves that have been approved
                </p>
                
                <div className="space-y-2">
                  {approvedLeaves.map(leave => (
                    <div key={leave.id} className="border rounded-lg p-3 text-sm">
                      <p className="font-medium">
                        {new Date(leave.startDate).toLocaleDateString()} - {new Date(leave.endDate).toLocaleDateString()}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{leave.reason}</p>
                      <p className="text-xs text-muted-foreground mt-1">Submitted: {new Date(leave.submittedOn).toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex justify-between items-center">
                  <span>Rejected</span>
                  <span className="text-sm bg-red-500/10 text-red-500 px-2 py-1 rounded-full">{rejectedLeaves.length}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Leaves that were not approved
                </p>
                
                <div className="space-y-2">
                  {rejectedLeaves.map(leave => (
                    <div key={leave.id} className="border rounded-lg p-3 text-sm">
                      <p className="font-medium">
                        {new Date(leave.startDate).toLocaleDateString()} - {new Date(leave.endDate).toLocaleDateString()}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{leave.reason}</p>
                      <p className="text-xs text-muted-foreground mt-1">Submitted: {new Date(leave.submittedOn).toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Leave Details</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="history">
                <TabsList className="mb-4">
                  <TabsTrigger value="history">Leave History</TabsTrigger>
                  <TabsTrigger value="policy">Leave Policy</TabsTrigger>
                </TabsList>
                
                <TabsContent value="history">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-border">
                      <thead>
                        <tr>
                          <th className="py-3 text-left text-xs font-medium text-muted-foreground uppercase">Date Range</th>
                          <th className="py-3 text-left text-xs font-medium text-muted-foreground uppercase">Reason</th>
                          <th className="py-3 text-left text-xs font-medium text-muted-foreground uppercase">Status</th>
                          <th className="py-3 text-left text-xs font-medium text-muted-foreground uppercase">Duration</th>
                          <th className="py-3 text-left text-xs font-medium text-muted-foreground uppercase">Submitted</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {leaveRequests.map(leave => {
                          const startDate = new Date(leave.startDate);
                          const endDate = new Date(leave.endDate);
                          const durationInDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
                          
                          return (
                            <tr key={leave.id}>
                              <td className="py-4 text-sm">
                                {new Date(leave.startDate).toLocaleDateString()} - {new Date(leave.endDate).toLocaleDateString()}
                              </td>
                              <td className="py-4 text-sm">{leave.reason}</td>
                              <td className="py-4">
                                {leave.status === "Approved" && (
                                  <span className="text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded-full">
                                    Approved
                                  </span>
                                )}
                                {leave.status === "Pending" && (
                                  <span className="text-xs bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded-full">
                                    Pending
                                  </span>
                                )}
                                {leave.status === "Rejected" && (
                                  <span className="text-xs bg-red-500/10 text-red-500 px-2 py-1 rounded-full">
                                    Rejected
                                  </span>
                                )}
                              </td>
                              <td className="py-4 text-sm">{durationInDays} {durationInDays === 1 ? "day" : "days"}</td>
                              <td className="py-4 text-sm">{new Date(leave.submittedOn).toLocaleDateString()}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
                
                <TabsContent value="policy">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Leave Policy</h3>
                      <p className="text-sm text-muted-foreground">
                        Students are entitled to request leave for personal, medical, or academic reasons. All leave requests must be submitted with appropriate supporting documentation.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-1">Medical Leave</h4>
                      <p className="text-sm text-muted-foreground">
                        Medical leave requests require a doctor's note or medical certificate. These should be submitted within 3 days of returning to class.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-1">Personal Leave</h4>
                      <p className="text-sm text-muted-foreground">
                        Personal leave requests should be submitted at least 7 days in advance when possible. Documentation may be required depending on the nature of the request.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-1">Academic Leave</h4>
                      <p className="text-sm text-muted-foreground">
                        Leave for academic conferences, competitions, or research activities requires approval from your academic advisor and department head.
                      </p>
                    </div>
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

export default Leaves;
