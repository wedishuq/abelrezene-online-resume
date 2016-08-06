// JavaScript Document
var bio = {
    "name": 'Abel Rezene',
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "(000) 000-0000",
        "mobileURL": "#",
        "email": "wedishuq@gmail.com",
        "emailURL": "mailto:wedishuq@gmail.com",
        "twitter": "@wedishuq",
        "twitterURL": "https://twitter.com/wedishuq",
        "github": "wedishuq",
        "githubURL": "https://github.com/wedishuq",
        "location": "Takoma Park, Maryland",
        "locationURL": "https://takomaparkmd.gov/"
    },
    "bioPic": "images/fry.jpg",
    "welcomeMessage": "MERHABA (which means welcome in TIgryina) <br> IT Professional with 12 years experience in network administration, technical support, and database management. CompTIA A+ certified and pursuing degree in Cybersecurity.",
    "skills": ["HTML", "CSS", "JavaScript", "Jquery", "Bootstrap", "Git", "GitHub", "PC Repair", "CompTIA A+ Certified"],
};
bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMsg);
    var formattedbioMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedbioMobile);
    $("#footerContacts").append(formattedbioMobile);
    var formattedbioEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedbioEmail = formattedbioEmail.replace("#", bio.contacts.emailURL);
    $("#topContacts").append(formattedbioEmail);
    $("#footerContacts").append(formattedbioEmail);

    var formattedbioTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedbioTwitter = formattedbioTwitter.replace("#", bio.contacts.twitterbURL);
    $("#topContacts").append(formattedbioTwitter);
    $("#footerContacts").append(formattedbioTwitter);


    var formattedbioGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedbioGithub = formattedbioGithub.replace("#", bio.contacts.githubURL);
    $("#topContacts").append(formattedbioGithub);
    $("#footerContacts").append(formattedbioGithub);
    var formattedbioLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedbioLocation = formattedbioLocation.replace("#", bio.contacts.locationURL);
    $("#topContacts").append(formattedbioLocation);
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};

bio.display();

var work = {
    "jobs": [{
        "employer": "DigitaliBiz",
        "title": "PC Repair Technician",
        "location": "Herendon, Virginai",
        "dates": "2016-current",
        "description": "Buiding new PCs for the Office of the Comptroller of the Currency Agency of the Depertment of Treasury."
    }]
};
work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
        $('.work-entry:last').append(formattedDescription);
    }
};

work.display();

var projects = {
    "projects": [{
        "title": "Build a Personal Portfolio",
        "dates": "2016",
        "description": "This webpage showcases all my projects, it was one of my very first project. I used HTML, CSS, and bootstrap to create a responsive site with clean code.",
        "images": ["images/project_portfolio.png"],
        "url": "https://github.com/wedishuq/Portfolio"
    }, {
        "title": "Build an interactive Resume website",
        "dates": "2016",
        "description": "This resume was one of my very first projects. It shows my ability to code HTML, CSS, and JavaScript. I created a responsive site with clean code.",
        "images": ["images/project_online-resume.png"],
        "url": ""
    }]
};
projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);


        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

projects.display();

var education = {
    "schools": [{
        "name": "University of Maryland University College",
        "location": "Adelphi, Maryland",
        "degree": "Bachelor of Science",
        "major": "Computer Networks and Cybersecurity",
        "dates": "2015-2017",
        "url": "https://www.umuc.edu/"
    }, {
        "name": "University of Asmara",
        "location": "Asmara, Eritrea",
        "degree": "Associate Degree",
        "major": "Agricultural Science",
        "dates": "1999-2002",
        "url": "http://www.uoa.edu/"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2015-Current",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
    }]
};
education.display = function() {
    for (school in education.schools) {
        var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchool = formattedSchool.replace("#", education.schools[school].url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolDegree = formattedSchool + formattedDegree;
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedMajor);
    }
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    for (onlineCourse in education.onlineCourses) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        var formattedOnlineTitle = formattedOnlineTitle.replace("#", education.onlineCourses[onlineCourse].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        var formattedOnlineTitleOnlineSchool = formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry:last").append(formattedOnlineTitleOnlineSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $(".education-entry:last").append(formattedURL);

    }
};

education.display();

$("#mapDiv").append(googleMap);