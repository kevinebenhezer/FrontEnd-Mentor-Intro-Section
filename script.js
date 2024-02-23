//Features
const features = document.getElementById("features");
const featuresDropDown = document.getElementById("features-dropdown");
const featuresArrowDown = document.getElementById("features-arrow-down");
const featuresArrowUp = document.getElementById("features-arrow-up");

features.addEventListener("click", dropDownFeature);

function dropDownFeature() {
	featuresDropDown.classList.toggle("features-on");
	if (!featuresArrowDown.hasAttribute("hidden")) {
		featuresArrowUp.removeAttribute("hidden");
		featuresArrowDown.setAttribute("hidden", "0");
	} else {
		featuresArrowDown.removeAttribute("hidden");
		featuresArrowUp.setAttribute("hidden", "0");
	}
}

//Sidebar features
const sidebarfeatures = document.getElementById("sidebar-features");
const sidebarfeaturesDropDown = document.getElementById("sidebar-features-dropdown");
const sidebarfeaturesArrowDown = document.getElementById("sidebar-features-arrow-down");
const sidebarfeaturesArrowUp = document.getElementById("sidebar-features-arrow-up");

sidebarfeatures.addEventListener("click", sidebarDropDownFeature);

function sidebarDropDownFeature() {
	sidebarfeaturesDropDown.classList.toggle("sidebar-features-on");
	if (!sidebarfeaturesArrowDown.hasAttribute("hidden")) {
		sidebarfeaturesArrowUp.removeAttribute("hidden");
		sidebarfeaturesArrowDown.setAttribute("hidden", "0");
	} else {
		sidebarfeaturesArrowDown.removeAttribute("hidden");
		sidebarfeaturesArrowUp.setAttribute("hidden", "0");
	}
}

//Company
const company = document.getElementById("company");
const companyDropDown = document.getElementById("company-dropdown");
const companyArrowDown = document.getElementById("company-arrow-down");
const companyArrowUp = document.getElementById("company-arrow-up");

company.addEventListener("click", dropDownCompany);

function dropDownCompany() {
	companyDropDown.classList.toggle("company-on");
	if (!companyArrowDown.hasAttribute("hidden")) {
		companyArrowUp.removeAttribute("hidden");
		companyArrowDown.setAttribute("hidden", "0");
	} else {
		companyArrowDown.removeAttribute("hidden");
		companyArrowUp.setAttribute("hidden", "0");
	}
}

//Sidebar company
const sidebarCompany = document.getElementById("sidebar-company");
const sidebarCompanyDropDown = document.getElementById("sidebar-company-dropdown");
const sidebarCompanyArrowDown = document.getElementById("sidebar-company-arrow-down");
const sidebarCompanyArrowUp = document.getElementById("sidebar-company-arrow-up");

sidebarCompany.addEventListener("click", sidebarDropDownCompany);

function sidebarDropDownCompany() {
	sidebarCompanyDropDown.classList.toggle("sidebar-company-on");
	if (!sidebarCompanyArrowDown.hasAttribute("hidden")) {
		sidebarCompanyArrowUp.removeAttribute("hidden");
		sidebarCompanyArrowDown.setAttribute("hidden", "0");
	} else {
		sidebarCompanyArrowDown.removeAttribute("hidden");
		sidebarCompanyArrowUp.setAttribute("hidden", "0");
	}
}

//Mobile view
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const sidebar = document.getElementById("sidebar");

menuIcon.addEventListener("click", openSidebar);

function openSidebar() {
	if ((sidebar.style.visibility = "hidden")) {
		sidebar.style.visibility = "visible";
		document.body.className = "darken-body";
		document.getElementById("header").classList.add("darken-body");
	}
}

closeIcon.addEventListener("click", closeSidebar);

function closeSidebar() {
	if (!(sidebar.style.visibility = "hidden")) {
		sidebar.style.visibility = "hidden";
	}
	document.body.className = "";
	document.getElementById("header").classList.remove("darken-body");
}
