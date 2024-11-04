// script.js

// ข้อมูลการบ้านตัวอย่าง (สามารถปรับแต่งหรือดึงข้อมูลจากฐานข้อมูลในอนาคต)
const assignments = [
    { id: 1, subject: "chemistry", title: "หัวข้อที่เรียเคมี #1", details: "เรียนเรื่อง พันธะโคเวเลนต์ และ เขียนโครงสร้างลิวอิสในแปปฝึกหัด.", dueDate: "01-11-2024" },
    { id: 2, subject: "physic", title: "หัวข้อที่เรียนฟิสิกส์ #1", details: "เรียนเรื่อง สมดุลกล และ ทบทวนการหา ΣF หาเพื่มเติม สามเหลื่ยมแทนแรง กับ ทฤษฏีลามี.", dueDate: "01-11-2024" },
    { id: 3, subject: "Englishreadingandwriting", title: "อังกฤษอ่าน-เขียน #1", details: "จดคำศัพย์ที่ต้องรู้จากเรื่อง Humans in Space ในLine.", dueDate: "01-11-2024" },
    { id: 4, subject: "social", title: "หัวข้อที่เรียนสังคม #1", details: "เรียนเรื่อง การเมือง.", dueDate: "04-11-2024" },
    { id: 5, subject: "additionalmath", title: "หัวข้อที่เรียนคณิตศาสตร์เพิ่มเติม #1", details: "การคำนวนฟังก็ชัน และ ทบทวนเรื่องการหาDomain Range.", dueDate: "04-11-2024" },
    { id: 6, subject: "biology", title: "หัวข้อที่เรียนชีววิทยา #1", details: "เรียนเรื่องการวิวัฒนาการ.", dueDate: "04-11-2024" },
    { id: 7, subject: "thai", title: "หัวข้อที่เรียนภาษาไทย #1", details: "เขียนเกณฑ์การให้คะแนนและนิราศนรินทร์คำโครง.", dueDate: "04-11-2024" },
    { id: 8, subject: "chemistry", title: "หัวข้อที่เรียนเคมี #2", details: "ทำแบบฝึกหน้า79,80ส่งในคาบโดยการเขียนโครงสร้างพันธะแบบลิวอิส.", dueDate: "04-11-2024" },
    { id: 9, subject: "Technology", title: "หัวข้อที่เรียนออกแบบเทคโนโลยี #1", details: "เขียนเกณฑ์การให้คะแนน.", dueDate: "04-11-2024" },
    { id: 10, subject: "english", title: "หัวข้อที่เรียนภาษาอังกฤษ #1", details: "แบบฝึกทำหน้า 5ข้อ1, 8ข้อ2และ3.", dueDate: "04-11-2024" },
];

// แปลงวันที่ให้อยู่ในรูป Date Object
const updatedAssignments = assignments.map(assignment => {
    const [day, month, year] = assignment.dueDate.split("-");
    const formattedDate = new Date(year, month - 1, day); // month - 1 เพราะเดือนใน Date เริ่มจาก 0
    return { ...assignment, dueDate: formattedDate };
});

console.log(updatedAssignments);

// การแสดงข้อมูลการบ้านในหน้าจอ
function displayAssignments(filteredAssignments) {
    const assignmentsGrid = document.getElementById("assignments-grid");
    assignmentsGrid.innerHTML = ""; // ล้างข้อมูลเก่าออกก่อน

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

        // แสดงการบ้านในแต่ละวันที่จัดกลุ่ม
        assignments.forEach(assignment => {
            const assignmentCard = document.createElement("div");
            assignmentCard.classList.add("assignment-card");

            // ตรวจสอบวันหมดอายุและเปลี่ยนสีการ์ดให้เป็นสีทึบถ้าหมดเขตแล้ว
            const today = new Date().toISOString().split('T')[0];
            if (new Date(assignment.dueDate) < new Date(today)) {
                assignmentCard.style.backgroundColor = "#d3d3d3"; // สีทึบสำหรับงานที่หมดเขต
            }

            assignmentCard.innerHTML = `
                <h4>${assignment.title}</h4>
                <p>${assignment.details}</p>
                <p class="due-date"><strong>Due Date:</strong> ${assignment.dueDate}</p>
                <p class="subject"><strong>Subject:</strong> ${assignment.subject}</p>
            `;

            assignmentGroup.appendChild(assignmentCard);
        });

        assignmentsGrid.appendChild(assignmentGroup);
    }
}

// ฟังก์ชันสำหรับกรองการบ้านตามวันที่และวิชา
function filterAssignments() {
    const filterDate = document.getElementById("filter-date").value;
    const filterSubject = document.getElementById("filter-subject").value;

    let filteredAssignments = assignments;

    // กรองตามวันที่
    if (filterDate) {
        filteredAssignments = filteredAssignments.filter(assignment => assignment.dueDate === filterDate);
    }

    // กรองตามวิชา
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
