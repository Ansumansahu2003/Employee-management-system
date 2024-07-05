const EmployeeOptions = [
  { _id: 0, title: "Employee Attendance", path: "/Employeeadminattendance.html" },
  { _id: 1, title: "Employee Payment", path: "/Employeeadminpayment.html" },
  { _id: 2, title: "Leave Application", path: "/Employeeadminleaveapplication.html" },
  { _id: 3, title: "Advance Payment", path: "/Employeeadminadvancepayment.html" },
  { _id: 4, title: "Food Allowance", path: "/Employeeadminfoodallowance.html" },
  { _id: 5, title: "Safety Precaution", path: "/Adminemployeesafetyboth.html" },
  { _id: 6, title: "Disciplinary Committee", path: "/EmployeeadminDC.html" },
  { _id: 7, title: "Query", path: "/Employeeadminquery.html" },
];

const AdminOptions = [
  { _id: 0, title: "Joining", path: "Employeejoining.html" },
  { _id: 1, title: "Employee Attendance", path: "/AdminemployeeAttendance.html" },
  { _id: 2, title: "Employee Payment", path: "/Adminemployeepayment.html" },
  { _id: 3, title: "Food Allowance", path: "/Adminemployeefoodallowance.html" },
  { _id: 4, title: "Advance Payment", path: "/Adminemployeeadvancepayment.html" },
  { _id: 5, title: "Leave Approval", path: "/Adminemployeeleaveapproval.html" },
  { _id: 6, title: "Store Equipment", path: "/Adminstoreequipment.html" },
  { _id: 7, title: "Disciplinary Committee", path: "/AdminemployeeDC.html" },
  { _id: 8, title: "Safety Precaution", path: "/Adminemployeesafetyboth.html" },
  { _id: 9, title: "Query", path: "/Adminemployeequery.html" },
];

const VendorOptions = [
  { _id: 0, title: "Employee Attendance", path: "/Vendorattendance.html" },
  { _id: 1, title: "Employee Payment", path: "/Vendorpayment.html" },
  { _id: 2, title: "Food Allowance", path: "/Vendorfoodallowance.html" },
  { _id: 3, title: "Advance Payment", path: "/Vendoradvancepayment.html" },
  { _id: 4, title: "Leave Approval", path: "/Vendorleaveapproval.html" },
  { _id: 5, title: "Store Equipment", path: "/Vendorstoreequipment.html" },
  { _id: 6, title: "Disciplinary Committee", path: "/VendorDC.html" },
  { _id: 7, title: "Safety Precaution", path: "/Adminemployeesafetyboth.html" },
  { _id: 8, title: "Query", path: "/Vendorquery.html" },
];

const role = "Vendor"; // Admin or Employee or Vendor
const SideBar = document.getElementById("side-bar");
const HomeAnchar = document.querySelector(".header>a");

const appearOptions = () => {
  let options;

  switch (role) {
    case "Admin":
      options = AdminOptions;
      break;
    case "Employee":
      options = EmployeeOptions;
      break;
    default:
      options = VendorOptions;
      break;
  }

  SideBar.innerHTML = "";
  HomeAnchar.innerText = `${role} Dashboard`;

  switch (role) {
    case "Admin":
      HomeAnchar.href = "EmployeeHome.html";
      break;
    case "Employee":
      HomeAnchar.href = "AdminHome.html";
      break;
    default:
      HomeAnchar.href = "VendorHome.html";
  }

  options.forEach((option) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = option.path;
    link.textContent = option.title;
    listItem.appendChild(link);
    SideBar.appendChild(listItem);
  });
};

appearOptions();

function toggleDropdown() {
  document.getElementById("dropdown").classList.toggle("show");
}

function selectOption(option) {
  document.getElementById("selectedOption").textContent = option;
  document.getElementById("dropdown").classList.remove("show");
}

window.onclick = function (event) {
  if (
    !event.target.matches(".dropbtn-container") &&
    !event.target.closest(".dropbtn-container")
  ) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

var style = document.createElement("style");
var position = "right";

style.innerHTML = `
      @keyframes my-animation{
        0% { ${position}: -${
  document.querySelector(".text").offsetWidth + 10
}px;}
        100%{${position}: 100%;}
      }`;

document.head.append(style);
