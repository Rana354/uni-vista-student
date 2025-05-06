
export interface Course {
  id: string;
  code: string;
  name: string;
  instructor: string;
  credits: number;
  schedule: string;
  room: string;
  attendance: number;
  totalClasses: number;
}

export interface Grade {
  courseId: string;
  courseName: string;
  midterm: number;
  assignment: number;
  final: number;
  total: number;
  grade: string;
}

export interface Exam {
  id: string;
  courseId: string;
  courseName: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  type: "Midterm" | "Final" | "Quiz";
}

export interface LeaveRequest {
  id: string;
  startDate: string;
  endDate: string;
  reason: string;
  status: "Approved" | "Pending" | "Rejected";
  submittedOn: string;
}

export const courses: Course[] = [
  {
    id: "cs101",
    code: "CS101",
    name: "Introduction to Computer Science",
    instructor: "Dr. Alan Turing",
    credits: 3,
    schedule: "Mon, Wed, Fri",
    room: "Tech-301",
    attendance: 28,
    totalClasses: 30,
  },
  {
    id: "math201",
    code: "MATH201",
    name: "Calculus II",
    instructor: "Dr. Katherine Johnson",
    credits: 4,
    schedule: "Tue, Thu",
    room: "Science-204",
    attendance: 25,
    totalClasses: 28,
  },
  {
    id: "eng102",
    code: "ENG102",
    name: "Academic Writing",
    instructor: "Prof. Maya Angelou",
    credits: 3,
    schedule: "Wed, Fri",
    room: "Arts-105",
    attendance: 22,
    totalClasses: 26,
  },
  {
    id: "phy201",
    code: "PHY201",
    name: "Physics for Engineers",
    instructor: "Dr. Richard Feynman",
    credits: 4,
    schedule: "Mon, Wed, Fri",
    room: "Science-101",
    attendance: 27,
    totalClasses: 30,
  },
  {
    id: "hist101",
    code: "HIST101",
    name: "World History",
    instructor: "Dr. Howard Zinn",
    credits: 3,
    schedule: "Tue, Thu",
    room: "Humanities-302",
    attendance: 20,
    totalClasses: 24,
  },
];

export const grades: Grade[] = [
  {
    courseId: "cs101",
    courseName: "Introduction to Computer Science",
    midterm: 85,
    assignment: 90,
    final: 88,
    total: 88,
    grade: "A",
  },
  {
    courseId: "math201",
    courseName: "Calculus II",
    midterm: 78,
    assignment: 85,
    final: 80,
    total: 81,
    grade: "B+",
  },
  {
    courseId: "eng102",
    courseName: "Academic Writing",
    midterm: 92,
    assignment: 94,
    final: 90,
    total: 92,
    grade: "A",
  },
  {
    courseId: "phy201",
    courseName: "Physics for Engineers",
    midterm: 75,
    assignment: 80,
    final: 82,
    total: 79,
    grade: "B",
  },
  {
    courseId: "hist101",
    courseName: "World History",
    midterm: 88,
    assignment: 92,
    final: 90,
    total: 90,
    grade: "A-",
  },
];

export const exams: Exam[] = [
  {
    id: "ex1",
    courseId: "cs101",
    courseName: "Introduction to Computer Science",
    date: "2025-06-10",
    startTime: "10:00",
    endTime: "12:00",
    location: "Tech-301",
    type: "Final",
  },
  {
    id: "ex2",
    courseId: "math201",
    courseName: "Calculus II",
    date: "2025-06-08",
    startTime: "14:00",
    endTime: "16:00",
    location: "Science-204",
    type: "Final",
  },
  {
    id: "ex3",
    courseId: "eng102",
    courseName: "Academic Writing",
    date: "2025-05-20",
    startTime: "09:00",
    endTime: "11:00",
    location: "Arts-105",
    type: "Final",
  },
  {
    id: "ex4",
    courseId: "phy201",
    courseName: "Physics for Engineers",
    date: "2025-06-15",
    startTime: "13:00",
    endTime: "15:00",
    location: "Science-101",
    type: "Final",
  },
  {
    id: "ex5",
    courseId: "hist101",
    courseName: "World History",
    date: "2025-05-25",
    startTime: "11:00",
    endTime: "13:00",
    location: "Humanities-302",
    type: "Final",
  },
];

export const leaveRequests: LeaveRequest[] = [
  {
    id: "leave1",
    startDate: "2025-03-10",
    endDate: "2025-03-12",
    reason: "Medical appointment",
    status: "Approved",
    submittedOn: "2025-03-01",
  },
  {
    id: "leave2",
    startDate: "2025-04-15",
    endDate: "2025-04-16",
    reason: "Family emergency",
    status: "Approved",
    submittedOn: "2025-04-12",
  },
  {
    id: "leave3",
    startDate: "2025-05-05",
    endDate: "2025-05-07",
    reason: "Academic conference",
    status: "Pending",
    submittedOn: "2025-04-25",
  },
  {
    id: "leave4",
    startDate: "2025-05-20",
    endDate: "2025-05-21",
    reason: "Personal reasons",
    status: "Rejected",
    submittedOn: "2025-05-10",
  },
];

export const studentInfo = {
  id: "STU123456",
  name: "John Doe",
  department: "Computer Science",
  year: 2,
  semester: 4,
  email: "john.doe@university.edu",
  program: "Bachelor of Science in Computer Science",
  advisor: "Dr. Grace Hopper",
  gpa: 3.8,
  totalCredits: 60,
  enrollmentDate: "2023-09-01",
  expectedGraduation: "2027-05-30",
};
