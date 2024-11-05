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
    { id: 11, subject: "Englishcommunication", title: "หัวข้อที่เรียนภาษาอังกฤษสื่อสาร #1", details: "จดVerbs of MovementในLineที่ครูส่งให้.", dueDate: "2024-11-05" },
    { id: 12, subject: "biology", title: "หัวข้อที่เรียนชีววิทยา #2", details: "เรียนเรื่องพันธุกรรม, Cell division , โครโมโซม.", dueDate: "2024-11-05" },
    { id: 13, subject: "additionalmath", title: "หัวข้อที่เรียนคณิตศาสตร์เพิ่มเติม #2", details: "เรียนเรื่องการพิจารณาฟังก์ชันเพิ่มฟังก็ชันลด 2 วิธีแทนค่ากับใช้นิยาม.", dueDate: "2024-11-05" },
    { id: 14, subject: "Guidance", title: "หัวข้อที่เรียนแนะแนว #1", details: "พูดคุยเรื่องเกณฑ์การให้คะแนน+คุยเรื่องการเรียนต่อระดับมหาลัย.", dueDate: "2024-11-05" },
    { id: 15, subject: "biologicalsciences", title: "หัวข้อที่เรียนวิทยาศาสตร์ชีวภาพ #1", details: "ว่าง.", dueDate: "2024-11-05" },    
    { id: 16, subject: "physic", title: "หัวข้อที่เรียนฟิสิกส์ #2", details: "การใช้ทฤษฎีลามี ระบบมวลแขวนด้วยเชือก ระบบรอกผูกมวล.", dueDate: "2024-11-05" },    
    { id: 17, subject: "ProjectSubject", title: "หัวข้อที่เรียนการเขียนเค้าโครงโครงงาน #1", details: "จับกลุ่ม+สุ่มครูที่ปรึกษา.", dueDate: "2024-11-05" },
    
];

// ฟังก์ชันแสดงข้อมูลการบ้านในหน้าจอ
function displayAssignments(filteredAssignments) {
    const assignmentsGrid = document.getElementById("assignments-grid");
    assignmentsGrid.innerHTML = ""; // ล้างข้อมูลเก่าออกก่อน

    filteredAssignments.forEach(assignment => {
        const assignmentCard = document.createElement("div");
        assignmentCard.classList.add("assignment-card");

        assignmentCard.innerHTML = `
            <h4>${assignment.title}</h4>
            <p>${assignment.details}</p>
            <p><strong>Date:</strong> ${assignment.dueDate}</p>
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

// ฟังก์ชันแสดงข้อมูลการบ้านในหน้าจอ พร้อมเพิ่มหัวข้อใหญ่ตามวันที่
function displayAssignments(filteredAssignments) {
    const assignmentsGrid = document.getElementById("assignments-grid");
    assignmentsGrid.innerHTML = ""; // ล้างข้อมูลเก่าออกก่อน

    let currentDueDate = ""; // ตัวแปรเก็บวันที่กำหนดส่งล่าสุดที่แสดง

    filteredAssignments.forEach(assignment => {
        // ถ้าวันที่กำหนดส่งเปลี่ยนไปจากข้อมูลก่อนหน้า ให้สร้างหัวข้อใหม่
        if (assignment.dueDate !== currentDueDate) {
            currentDueDate = assignment.dueDate; // อัปเดตวันที่ปัจจุบัน
            const dateHeader = document.createElement("h3"); // สร้างหัวข้อใหญ่สำหรับวันกำหนดส่ง
            dateHeader.textContent = `Date: ${currentDueDate}`;
            assignmentsGrid.appendChild(dateHeader); // เพิ่มหัวข้อวันกำหนดส่งในหน้าจอ
        }

        // สร้าง card สำหรับแสดงข้อมูลการบ้าน
        const assignmentCard = document.createElement("div");
        assignmentCard.classList.add("assignment-card");

        assignmentCard.innerHTML = `
            <h4>${assignment.title}</h4>
            <p>${assignment.details}</p>
            <p><strong>Subject:</strong> ${assignment.subject}</p>
        `;

        assignmentsGrid.appendChild(assignmentCard); // เพิ่ม card ในหน้าจอ
    });
}

// เริ่มต้นแสดงการบ้านทั้งหมดเมื่อโหลดหน้า
displayAssignments(assignments);
