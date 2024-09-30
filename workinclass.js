// script.js

// ข้อมูลการบ้านตัวอย่าง (สามารถปรับแต่งหรือดึงข้อมูลจากฐานข้อมูลในอนาคต)
const assignments = [
    { id: 1, subject: "math", title: "Math Homework #1", details: "Complete exercises 1-20 on page 15.", dueDate: "2024-10-01" },
    { id: 2, subject: "physic", title: "Science Report #1", details: "Write a Newton Rule.", dueDate: "2024-09-30" },
    { id: 3, subject: "english", title: "Essay #1", details: "Write an essay on 'My Summer Vacation'.", dueDate: "2024-09-29" },
    { id: 4, subject: "physic", title: "Math Homework #2", details: "Complete exercises 21-40 on page 16.", dueDate: "2024-10-02" },
    { id: 5, subject: "english", title: "Grammar Exercise #1", details: "Complete grammar exercises on page 10-15.", dueDate: "2024-09-29" }
];

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
