import { proxy } from "valtio";

export enum StudentView {
  Home = "Home",
  Tutors = "Tutors",
  Profile = "Profile",
  Settings = "Settings",
  Courses = "My Courses",
  Assessment = "Assessment",
}

export enum TutorView {
  Home = "Home",
  Students = "Tutors",
  Courses = "Courses",
  Profile = "Profile",
  Settings = "Settings",
  EventSchedule = "Schedule",
}

export const StudentStore = proxy<{
  studentView: StudentView;
}>({
  studentView: StudentView.Home,
});

export const TutorStore = proxy<{
  TutorView: StudentView;
}>({
  TutorView: StudentView.Home,
});
