//we create the blank university first, when we instantiate a new class all of them call the university add element to themselves
//courses are created and people are created as well, we give ourselves a big list. Once we do that we people join classes and everything updates from there

class Person {
  protected name: string;
  protected id: string;
  protected university: University;

  constructor(name: string, id: string, university: University) {
    this.name = name;
    this.id = id;
    this.university = university;
  }
  //getters
  public getName() {
    return this.name;
  }
  public getId() {
    return this.id;
  }
  //setters
  public setName(name: string) {
    this.name = name;
  }
  public setId(id: string) {
    this.id = id;
  }
}

class Instructor extends Person {
  private coursesTaught: Course[];

  constructor(name: string, id: string, university: University) {
    super(name, id, university);
    this.coursesTaught = [];
    university.addInstructors([this]);
  }
  //getters
  public getCoursesTaught(): Course[] {
    return this.coursesTaught;
  }
  //setters
  public setCoursesTaught(courses: Course[]) {
    this.coursesTaught = [...this.coursesTaught, ...courses];
    courses.forEach((course) => course.setInstructor(this));
  }
}

class Student extends Person {
  private enrolledCourses: Course[];
  constructor(name: string, id: string, university: University) {
    super(name, id, university);
    this.enrolledCourses = [];
    university.addStudents([this]);
  }
  //getters
  public getEnrolledCourses(): Course[] {
    return this.enrolledCourses;
  }
  //setters
  public joinCourses(courses: Course[]) {
    this.enrolledCourses = [...this.enrolledCourses, ...courses];
    courses.forEach((course) => course.addStudents([this]));
  }

  public leaveEnrolledCourses(courses: Course[]): void {
    const filteredCourses = this.enrolledCourses.filter((course) =>
      courses.some((thisCourse) => thisCourse.getCode() !== course.getCode())
    );
    this.enrolledCourses = filteredCourses;
  }
}

class Course {
  private code: number;
  private name: string;
  private instructor: Instructor;
  private students: Student[];

  constructor(code: number, name: string, university: University) {
    this.code = code;
    this.name = name;
    this.students = [];
    university.addCourses([this]);
  }

  //getters
  public getCode(): number {
    return this.code;
  }
  public getName(): string {
    return this.name;
  }
  public getInstructor(): Instructor {
    return this.instructor;
  }
  public getStudents(): Student[] {
    return this.students;
  }
  //setters
  public setCode(code: number) {
    this.code = code;
  }
  public setName(name: string) {
    this.name = name;
  }
  public setInstructor(instructor: Instructor) {
    this.instructor = instructor;
  }

  public addStudents(students: Student[]) {
    this.students = [...this.students, ...students];
  }

  public removeStudents(students: Student[]) {
    const filteredStudents = this.students.filter((student) =>
      students.some((thisStudent) => thisStudent.getId() !== student.getName())
    );
    this.students = filteredStudents;
  }
}

class University {
  private courses: Course[];
  private students: Student[];
  private instructors: Instructor[];

  constructor() {
    this.courses = [];
    this.students = [];
    this.instructors = [];
  }

  //getters
  getCourses(): Course[] {
    return this.courses;
  }
  getStudents(): Student[] {
    return this.students;
  }
  getInstructors(): Instructor[] {
    return this.instructors;
  }

  //setters
  addCourses(courses: Course[]): void {
    this.courses = [...this.courses, ...courses];
  }
  addStudents(students: Student[]): void {
    this.students = [...this.students, ...students];
  }
  addInstructors(instructors: Instructor[]): void {
    this.instructors = [...this.instructors, ...instructors];
  }

  //remove
  public removeCourses(courses: Student[]) {
    const filteredCourses = this.courses.filter((course) =>
      courses.some((thisCourse) => thisCourse.getId() !== course.getName())
    );
    this.courses = filteredCourses;
  }
  public removeStudents(students: Student[]) {
    const filteredStudents = this.students.filter((student) =>
      students.some((thisStudent) => thisStudent.getId() !== student.getId())
    );
    this.students = filteredStudents;
  }
  public removeInstructors(instructors: Instructor[]) {
    const filteredInstructors = this.students.filter((instructor) =>
      instructors.some(
        (thisInstructor) => thisInstructor.getId() !== instructor.getName()
      )
    );
    this.students = filteredInstructors;
  }
  //get name list
  getCourseNameList(): string[] {
    const justNames = this.courses.map((course) => course.getName());
    return justNames;
  }
  getStudentNameList(): string[] {
    const justNames = this.students.map((student) => student.getName());
    return justNames;
  }
  getInstructorNameList(): string[] {
    const justNames = this.instructors.map((instructor) =>
      instructor.getName()
    );
    return justNames;
  }
}

const ucd = new University();

//students
const mary = new Student("Mary", "a", ucd);
const sally = new Student("Sally", "b", ucd);
const bridget = new Student("Bridget", "c", ucd);
const conner = new Student("Conner", "d", ucd);
const sean = new Student("Sean", "e", ucd);
const peter = new Student("Peter", "f", ucd);

//instructors
const drEnid = new Instructor("Enid", "g", ucd);
const drSarah = new Instructor("Sarah", "h", ucd);
const drEsther = new Instructor("Esther", "i", ucd);
const drNathan = new Instructor("Nathan", "j", ucd);

//courses
const maths = new Course(123, "Maths", ucd);
const english = new Course(234, "English", ucd);
const spanish = new Course(345, "Spanish", ucd);
const latin = new Course(456, "Latin", ucd);
const business = new Course(678, "Business", ucd);

drEnid.setCoursesTaught([maths]);
drSarah.setCoursesTaught([english]);
drEsther.setCoursesTaught([spanish, latin]);
drNathan.setCoursesTaught([business]);

mary.joinCourses([maths, english, business]);
sally.joinCourses([spanish, latin]);
bridget.joinCourses([business, maths]);
conner.joinCourses([maths, english, spanish]);
sean.joinCourses([english, business, latin]);
peter.joinCourses([english, maths, spanish]);

console.log(ucd.getCourseNameList());
console.log(ucd.getStudentNameList());
console.log(maths.getStudents());
