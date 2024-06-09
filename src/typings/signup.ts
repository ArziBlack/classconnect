export interface IGuardian {
    first_name: string,
    last_name: string,
    student_email: string,
    sex: string,
    country: string,
    state: string,
    course: string,
    dateOfBirth: Date,
    classTime_options: Array<string>,
    payment_plan: string,
    class_type: string,
    salutation: string,
}