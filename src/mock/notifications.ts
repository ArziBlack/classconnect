export const notifications = [
    {
        idx: 1,
        date: new Date().toISOString(), // Today's date
        title: "Assignment Due Reminder",
        content: "Your assignment for the JavaScript Basics course is due tomorrow.",
        info: "Make sure to review the requirements and submit before the deadline.",
        message: "Dear student, this is a reminder that your assignment for the JavaScript Basics course is due tomorrow. Please ensure that you have reviewed all the requirements and submit your work before the deadline to avoid any late penalties. If you have any questions, feel free to reach out to your instructor. Good luck!"
    },
    {
        idx: 2,
        date: new Date(Date.now() - 86400000).toISOString(), // Yesterday's date
        title: "New Course Material Available",
        content: "New lecture notes and resources have been added for the React Native Development course.",
        info: "Check the course page for the latest updates and materials.",
        message: "Dear student, new lecture notes and additional resources have been uploaded for the React Native Development course. Please visit the course page to access the latest materials and stay up-to-date with the course content. If you have any questions or need further assistance, don't hesitate to contact your instructor."
    },
    {
        idx: 3,
        date: new Date(Date.now() - 2 * 86400000).toISOString(), // Day before yesterday's date
        title: "Upcoming Webinar",
        content: "Join us for a live webinar on Advanced TypeScript Techniques.",
        info: "The webinar will be held on July 5th at 3 PM. Don't miss it!",
        message: "Dear student, we are excited to announce an upcoming live webinar on Advanced TypeScript Techniques. The webinar will take place on July 5th at 3 PM. This is a great opportunity to enhance your skills and interact with industry experts. Be sure to mark your calendar and join us for this informative session. See you there!"
    },
    {
        idx: 4,
        date: new Date(Date.now() - 3 * 86400000).toISOString(), // Three days ago
        title: "Course Feedback Request",
        content: "We value your feedback! Please take a moment to complete the course survey.",
        info: "Your feedback helps us improve the learning experience for everyone.",
        message: "Dear student, we hope you enjoyed the JavaScript Basics course. We would love to hear your thoughts and feedback. Please take a few minutes to complete the course survey. Your input is invaluable in helping us improve the learning experience for you and future students. Thank you for your time and feedback!"
    },
    {
        idx: 5,
        date: new Date(Date.now() - 4 * 86400000).toISOString(), // Four days ago
        title: "Grade Posted",
        content: "Your grade for the React Native Project has been posted.",
        info: "Log in to your account to view your grade and feedback.",
        message: "Dear student, your grade for the React Native Project has been posted. Please log in to your account to view your grade and any feedback provided by your instructor. If you have any questions or concerns about your grade, please reach out to your instructor for further clarification. Congratulations on completing the project!"
    },
    {
        idx: 6,
        date: new Date(Date.now() - 5 * 86400000).toISOString(), // Five days ago
        title: "New Discussion Forum Post",
        content: "A new discussion topic has been posted in the Express.js course forum.",
        info: "Join the discussion and share your insights with fellow students.",
        message: "Dear student, a new discussion topic has been posted in the Express.js course forum. We encourage you to join the discussion, share your insights, and learn from your peers. Engaging in these discussions is a great way to deepen your understanding of the course material and connect with other students. We look forward to your participation!"
    },
    {
        idx: 7,
        date: new Date(Date.now() - 6 * 86400000).toISOString(), // Six days ago
        title: "Certificate of Completion",
        content: "Congratulations! You have completed the Redux Toolkit course.",
        info: "Download your certificate from your profile page.",
        message: "Dear student, congratulations on successfully completing the Redux Toolkit course! You can now download your certificate of completion from your profile page. We are proud of your hard work and dedication. Keep up the great work and continue your learning journey with us. Best wishes for your future endeavors!"
    },
    {
        idx: 8,
        date: new Date(Date.now() - 7 * 86400000).toISOString(), // A week ago
        title: "Weekly Study Tips",
        content: "Check out this week's study tips to stay on track.",
        info: "Visit the blog for tips on effective learning strategies.",
        message: "Dear student, to help you stay on track with your studies, we have compiled some weekly study tips for you. Visit our blog to read about effective learning strategies, time management techniques, and more. Implementing these tips can greatly enhance your learning experience and academic performance. Happy studying!"
    },
    {
        idx: 9,
        date: new Date(Date.now() - 8 * 86400000).toISOString(), // Eight days ago
        title: "Technical Support Available",
        content: "Experiencing technical issues? Our support team is here to help.",
        info: "Contact technical support through the helpdesk for assistance.",
        message: "Dear student, if you are experiencing any technical issues with the platform or course materials, please know that our support team is here to assist you. You can contact technical support through the helpdesk for prompt assistance. We are committed to ensuring a smooth learning experience for you. Don't hesitate to reach out if you need help!"
    },
    {
        idx: 10,
        date: new Date(Date.now() - 9 * 86400000).toISOString(), // Nine days ago
        title: "New Course Announcement",
        content: "Exciting news! A new course on Advanced Mobile Development is now available.",
        info: "Enroll today to expand your skills and knowledge.",
        message: "Dear student, we are thrilled to announce the launch of a new course on Advanced Mobile Development. This course covers advanced topics and techniques to take your mobile development skills to the next level. Enroll today to expand your skills and knowledge. We look forward to seeing you in the new course!"
    }
];
