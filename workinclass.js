// ข้อมูลการบ้านตัวอย่าง
const assignments = [
    { id: 1, subject: "chemistry", title: "หัวข้อที่เรียเคมี #1", details: "เรียนเรื่อง พันธะโคเวเลนต์ และ เขียนโครงสร้างลิวอิสในแปปฝึกหัด.", dueDate: "2024-11-01" },
    { id: 2, subject: "physic", title: "หัวข้อที่เรียนฟิสิกส์ #1", details: "เรียนเรื่อง สมดุลกล และ ทบทวนการหา ΣF หาเพื่มเติม สามเหลื่ยมแทนแรง กับ ทฤษฏีลามี.", dueDate: "2024-11-01" },
    { id: 3, subject: "Englishreadingandwriting", title: "อังกฤษอ่าน-เขียน #1", details: "จดคำศัพย์ที่ต้องรู้จากเรื่อง Humans in Space ในLine.", dueDate: "2024-11-01" },
    { id: 4, subject: "social", title: "หัวข้อที่เรียนสังคม #1", details: "เรียนเรื่อง การเมือง.", dueDate: "2024-11-04" },
    { id: 5, subject: "additionalmath", title: "หัวข้อที่เรียนคณิตศาสตร์เพิ่มเติม #1", details: "การคำนวนฟังก็ชัน และ ทบทวนเรื่องการหาDomain Range.", dueDate: "2024-11-04" },
    { id: 6, subject: "biology", title: "หัวข้อที่เรียนชีววิทยา #1", details: "เรียนเรื่องการวิวัฒนาการ.", dueDate: "2024-11-04" },
    { id: 7, subject: "thai", title: "หัวข้อที่เรียนภาษาไทย #1", details: "เขียนเกณฑ์การให้คะแนนและนิราศนรินทร์คำโครง.", dueDate: "2024-11-04" },
    { id: 8, subject: "chemistry", title: "หัวข้อที่เรียนเคมี #2", details: "ทำแบบฝึกหน้า79,80ส่งในคาบโดยการเขียนโครงสร้างพันธะแบบลิวอิส.", dueDate: "2024-11-04" },
    { id: 9, subject: "Technology", title: "หัวข้อที่เรียนออกแบบเทคโนโลยี #1", details: "เขียนเกณฑ์การให้คะแนน.", dueDate: "2024-11-04" },
    { id: 10, subject: "english", title: "หัวข้อที่เรียนภาษาอังกฤษ #1", details: "แบบฝึกทำหน้า 5ข้อ1, 8ข้อ2และ3.", dueDate: "2024-11-04" },
];

// จัดกลุ่มการบ้านตามวันที่
    const groupedByDate = filteredAssignments.reduce((acc, assignment) => {
        const date = assignment.dueDate;
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(assignment);
        return acc;
    }, {});

    // สร้างและแสดงกลุ่มการบ้าน
    for (const [date, assignments] of Object.entries(groupedByDate)) {
        // สร้างกลุ่มการบ้านตามวันที่
        const assignmentGroup = document.createElement("div");
        assignmentGroup.classList.add("assignment-group");

        // แสดงหัวข้อวันที่
        const dateHeading = document.createElement("h3");
        dateHeading.textContent = date;
        assignmentGroup.appendChild(dateHeading);


    filteredAssignments.forEach(assignment => {
        const assignmentCard = document.createElement("div");
        assignmentCard.classList.add("assignment-card");

        assignmentCard.innerHTML = `
            <h4>${assignment.title}</h4>
            <p>${assignment.details}</p>
            <p><strong>Due Date:</strong> ${assignment.dueDate}</p>
            <p><strong>Subject:</strong> ${assignment.subject}</p>
        `;

        assignmentsGrid.appendChild(assignmentCard);
    });
}

// ฟังก์ชันกรองการบ้านตามวันที่และวิชา
function filterAssignments() {
    const filterDate = document.getElementById("filter-date").value;
    const filterSubject = document.getElementById("filter-subject").value;

    let filteredAssignments = assignments;

    if (filterDate) {
        filteredAssignments = filteredAssignments.filter(assignment => assignment.dueDate === filterDate);
    }

    if (filterSubject !== "all") {
        filteredAssignments = filteredAssignments.filter(assignment => assignment.subject === filterSubject);
    }

    displayAssignments(filteredAssignments);
}

// Event Listeners สำหรับการกรอง
document.getElementById("filter-date").addEventListener("change", filterAssignments);
document.getElementById("filter-subject").addEventListener("change", filterAssignments);

// เริ่มต้นแสดงการบ้านทั้งหมดเมื่อโหลดหน้า
displayAssignments(assignments);
