import { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
    const [activeTab, setActiveTab] = useState("daily");
    const [openLecture, setOpenLecture] = useState(null);

    const lectures = [
        {
            id: 1,
            rating: 4.6,
            status: "Excellent",
            className: "BCA - 1st Year",
            time: "10:30 AM - 11:30 AM",
            subject: "Java Fundamentals",
            faculty: "Dr. Rajesh Sharma",
            submissions: "45 / 50",
            percentage: 90,
            metrics: [
                ["Clarity of Explanation", 4.8],
                ["Punctuality & Time Management", 5.0],
                ["Subject Knowledge & Depth", 4.7],
                ["Student Engagement", 4.2],
                ["Teaching Aids & Tools", 4.5],
                ["Query Resolution", 4.4],
                ["Pace of Lecture", 4.3],
                ["Use of Examples", 4.6],
                ["Learning Environment", 4.5],
                ["Overall Effectiveness", 4.7],
            ],
            remarks: [
                "Sir explained the topic very clearly.",
                "Examples made the Java concepts easy to understand.",
            ],
        },

        {
            id: 2,
            rating: 3.2,
            status: "Low Rating",
            className: "BCA - 2nd Year",
            time: "01:30 PM - 02:30 PM",
            subject: "Data Structures",
            faculty: "Prof. V. K. Verma",
            submissions: "38 / 50",
            percentage: 76,
            metrics: [
                ["Clarity of Explanation", 3.0],
                ["Punctuality & Time Management", 3.8],
                ["Subject Knowledge & Depth", 3.6],
                ["Student Engagement", 2.8],
                ["Teaching Aids & Tools", 3.1],
                ["Query Resolution", 3.0],
                ["Pace of Lecture", 2.6],
                ["Use of Examples", 3.2],
                ["Learning Environment", 3.4],
                ["Overall Effectiveness", 3.0],
            ],
            remarks: [
                "The lecture pace was a little fast.",
                "More examples would make the topic easier.",
            ],
        },

        {
            id: 3,
            rating: 4.3,
            status: "Good",
            className: "BCA - 3rd Year",
            time: "03:00 PM - 04:00 PM",
            subject: "Machine Learning",
            faculty: "Dr. Ananya Roy",
            submissions: "48 / 50",
            percentage: 96,
            metrics: [
                ["Clarity of Explanation", 4.4],
                ["Punctuality & Time Management", 4.5],
                ["Subject Knowledge & Depth", 4.7],
                ["Student Engagement", 4.1],
                ["Teaching Aids & Tools", 4.3],
                ["Query Resolution", 4.2],
                ["Pace of Lecture", 4.1],
                ["Use of Examples", 4.4],
                ["Learning Environment", 4.5],
                ["Overall Effectiveness", 4.3],
            ],
            remarks: [
                "Good explanation with practical examples.",
            ],
        },
    ];

    const faculty = [
        {
            name: "Dr. Rajesh Sharma",
            department: "Computer Science",
            initials: "RS",
            score: 4.58,
            lectures: 42,
            metrics: [
                ["Subject Knowledge & Depth", 4.9],
                ["Punctuality & Time Management", 4.8],
                ["Clarity of Explanation", 4.6],
                ["Student Engagement", 4.1],
                ["Teaching Aids & Tools", 4.5],
                ["Query Resolution", 4.6],
                ["Pace of Lecture", 4.4],
                ["Use of Examples", 4.7],
                ["Learning Environment", 4.6],
                ["Overall Effectiveness", 4.7],
            ],
        },

        {
            name: "Prof. V. K. Verma",
            department: "Commerce",
            initials: "VV",
            score: 3.72,
            lectures: 36,
            metrics: [
                ["Subject Knowledge & Depth", 4.0],
                ["Punctuality & Time Management", 4.1],
                ["Clarity of Explanation", 3.6],
                ["Student Engagement", 3.4],
                ["Teaching Aids & Tools", 3.5],
                ["Query Resolution", 3.7],
                ["Pace of Lecture", 3.2],
                ["Use of Examples", 3.8],
                ["Learning Environment", 3.9],
                ["Overall Effectiveness", 3.7],
            ],
        },
    ];

    const classes = [
        {
            name: "BCA - 1st Year",
            lectures: 8,
            feedback: 92,
            rating: 4.52,
            status: "Optimal",
        },
        {
            name: "BCA - 2nd Year",
            lectures: 7,
            feedback: 86,
            rating: 4.18,
            status: "Good",
        },
        {
            name: "BCA - 3rd Year",
            lectures: 6,
            feedback: 81,
            rating: 3.48,
            status: "Review Required",
        },
        {
            name: "BBA - 1st Year",
            lectures: 5,
            feedback: 78,
            rating: 3.41,
            status: "Review Required",
        },
    ];

    const toggleLecture = (id) => {
        setOpenLecture(openLecture === id ? null : id);
    };

    return (
        <div className="dashboard-page">

            {/* ================= HEADER ================= */}

            <header className="dashboard-header">

                <div className="dashboard-header-content">

                    <div className="dashboard-brand">

                        <img
                            src="/ssismlogo.png"
                            alt="SSISM Logo"
                        />

                        <div>
                            <h1>SANT SINGAJI EDUCATIONAL SOCIETY</h1>
                            <p>Student Feedback Management System</p>
                        </div>

                    </div>


                    <div className="dashboard-admin">

                        <div className="dashboard-date">
                            <input
                                type="date"
                                defaultValue="2026-08-18"
                            />
                        </div>

                        <div className="admin-divider"></div>

                        <div className="admin-info">

                            <div className="admin-avatar">
                                AD
                            </div>

                            <div>
                                <strong>Admin</strong>
                                <span>Administrator</span>
                            </div>

                        </div>

                    </div>

                </div>

            </header>


            {/* ================= SUMMARY ================= */}

            <section className="dashboard-summary">

                <div className="summary-card">

                    <div>
                        <span>Lectures Held Today</span>
                        <strong>24</strong>
                    </div>

                    <div className="summary-status success">
                        100% On Time
                    </div>

                </div>


                <div className="summary-card">

                    <div>
                        <span>Feedback Completion</span>

                        <strong>
                            218
                            <small>/ 240</small>
                        </strong>
                    </div>

                    <div className="summary-status primary">
                        90.8% Rate
                    </div>

                </div>


                <div className="summary-card">

                    <div>
                        <span>Today's Campus Avg</span>

                        <strong className="orange-text">
                            4.32
                            <small>/ 5.0</small>
                        </strong>
                    </div>

                    <div className="summary-status warning">
                        Good
                    </div>

                </div>


                <div className="summary-card">

                    <div>
                        <span>Low Score Alerts</span>

                        <strong className="danger-text">
                            2
                            <small> Lectures</small>
                        </strong>
                    </div>

                    <div className="summary-status danger">
                        Needs Action
                    </div>

                </div>

            </section>


            {/* ================= TABS ================= */}

            <div className="dashboard-tabs">

                <button
                    className={activeTab === "daily" ? "active" : ""}
                    onClick={() => setActiveTab("daily")}
                >
                    Daily Lecture Feed

                    <span>24</span>
                </button>

                <button
                    className={activeTab === "faculty" ? "active" : ""}
                    onClick={() => setActiveTab("faculty")}
                >
                    Faculty Performance
                </button>

                <button
                    className={activeTab === "class" ? "active" : ""}
                    onClick={() => setActiveTab("class")}
                >
                    Class & Department
                </button>

            </div>


            {/* ================= MAIN ================= */}

            <main className="dashboard-main">


                {/* =================================================
                    DAILY LECTURE
                ================================================= */}

                {activeTab === "daily" && (

                    <section>

                        <div className="dashboard-section-heading">

                            <div>
                                <h2>
                                    Today's Lectures & Student Responses
                                </h2>

                                <p>
                                    Lecture-wise feedback and performance
                                    matrix
                                </p>
                            </div>


                            <select>
                                <option>All Departments</option>
                                <option>Computer Science</option>
                                <option>Commerce</option>
                                <option>Management</option>
                            </select>

                        </div>


                        <div className="lecture-container">

                            {lectures.map((lecture) => (

                                <div
                                    key={lecture.id}
                                    className={`lecture-card ${lecture.rating < 3.5
                                            ? "lecture-low"
                                            : ""
                                        }`}
                                >

                                    {/* LECTURE HEADER */}

                                    <div className="lecture-header">

                                        <div className="lecture-main">

                                            <div
                                                className={`lecture-rating ${lecture.rating < 3.5
                                                        ? "low"
                                                        : ""
                                                    }`}
                                            >
                                                <strong>
                                                    {lecture.rating}
                                                </strong>

                                                <span>
                                                    {lecture.status}
                                                </span>
                                            </div>


                                            <div className="lecture-content">

                                                <div className="lecture-meta">

                                                    <span>
                                                        {lecture.className}
                                                    </span>

                                                    <small>
                                                        {lecture.time}
                                                    </small>

                                                </div>


                                                <h3>
                                                    {lecture.subject}
                                                </h3>


                                                <p>
                                                    Faculty:
                                                    <b>
                                                        {lecture.faculty}
                                                    </b>
                                                </p>

                                            </div>

                                        </div>


                                        <div className="lecture-right">

                                            <div className="submission-rate">

                                                <span>
                                                    Submission Rate
                                                </span>

                                                <strong>
                                                    {lecture.submissions}

                                                    <em>
                                                        ({lecture.percentage}%)
                                                    </em>
                                                </strong>

                                            </div>


                                            <button
                                                onClick={() =>
                                                    toggleLecture(lecture.id)
                                                }
                                            >
                                                {openLecture === lecture.id
                                                    ? "Hide Metrics"
                                                    : "View 10 Metrics"}
                                            </button>

                                        </div>

                                    </div>


                                    {/* EXPANDED */}

                                    {openLecture === lecture.id && (

                                        <div className="lecture-expanded">

                                            <div className="matrix-card">

                                                <h4>
                                                    Feedback Matrix
                                                </h4>

                                                <div className="matrix-grid">

                                                    {lecture.metrics.map(
                                                        ([name, score], index) => (

                                                            <div
                                                                className="matrix-item"
                                                                key={index}
                                                            >

                                                                <div className="matrix-title">

                                                                    <span>
                                                                        {index + 1}.
                                                                        {" "}
                                                                        {name}
                                                                    </span>

                                                                    <b>
                                                                        {score}
                                                                    </b>

                                                                </div>


                                                                <div className="matrix-progress">

                                                                    <div
                                                                        style={{
                                                                            width: `${(
                                                                                score /
                                                                                5
                                                                            ) * 100}%`,
                                                                        }}
                                                                    ></div>

                                                                </div>

                                                            </div>

                                                        )
                                                    )}

                                                </div>

                                            </div>


                                            <div className="remarks-card">

                                                <h4>
                                                    Student Remarks
                                                </h4>


                                                <div className="remarks">

                                                    {lecture.remarks.map(
                                                        (remark, index) => (

                                                            <div
                                                                key={index}
                                                                className="remark"
                                                            >
                                                                "{remark}"
                                                            </div>

                                                        )
                                                    )}

                                                </div>


                                                <button className="export-button">
                                                    Export Lecture Report
                                                </button>

                                            </div>

                                        </div>

                                    )}

                                </div>

                            ))}

                        </div>

                    </section>

                )}


                {/* =================================================
                    FACULTY
                ================================================= */}

                {activeTab === "faculty" && (

                    <section>

                        <div className="dashboard-section-heading">

                            <div>
                                <h2>
                                    Faculty Performance
                                </h2>

                                <p>
                                    Individual faculty feedback
                                    performance
                                </p>
                            </div>

                        </div>


                        <div className="faculty-container">

                            {faculty.map((teacher, index) => (

                                <div
                                    className="faculty-card"
                                    key={index}
                                >

                                    <div className="faculty-profile">

                                        <div className="faculty-avatar">
                                            {teacher.initials}
                                        </div>

                                        <h3>
                                            {teacher.name}
                                        </h3>

                                        <p>
                                            Faculty •{" "}
                                            {teacher.department}
                                        </p>


                                        <div className="faculty-stats">

                                            <div>
                                                <span>
                                                    Overall Score
                                                </span>

                                                <strong>
                                                    {teacher.score} / 5
                                                </strong>
                                            </div>

                                            <div>
                                                <span>
                                                    Lectures Evaluated
                                                </span>

                                                <strong>
                                                    {teacher.lectures}
                                                </strong>
                                            </div>

                                        </div>

                                    </div>


                                    <div className="faculty-matrix">

                                        <h4>
                                            Feedback Matrix
                                        </h4>

                                        {teacher.metrics.map(
                                            ([name, score], index) => (

                                                <div
                                                    className="faculty-metric"
                                                    key={index}
                                                >

                                                    <div>

                                                        <span>
                                                            {name}
                                                        </span>

                                                        <b>
                                                            {score}
                                                        </b>

                                                    </div>


                                                    <div className="matrix-progress">

                                                        <div
                                                            style={{
                                                                width: `${(
                                                                    score /
                                                                    5
                                                                ) * 100}%`,
                                                            }}
                                                        ></div>

                                                    </div>

                                                </div>

                                            )
                                        )}

                                    </div>

                                </div>

                            ))}

                        </div>

                    </section>

                )}


                {/* =================================================
                    CLASS REPORT
                ================================================= */}

                {activeTab === "class" && (

                    <section>

                        <div className="dashboard-section-heading">

                            <div>
                                <h2>
                                    Class & Department Reports
                                </h2>

                                <p>
                                    Class-wise aggregated feedback
                                    performance
                                </p>
                            </div>

                        </div>


                        <div className="class-table-wrapper">

                            <table>

                                <thead>

                                    <tr>
                                        <th>Class / Semester</th>
                                        <th>Lectures</th>
                                        <th>Feedback</th>
                                        <th>Avg Rating</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>

                                </thead>


                                <tbody>

                                    {classes.map((item, index) => (

                                        <tr key={index}>

                                            <td>
                                                <strong>
                                                    {item.name}
                                                </strong>
                                            </td>

                                            <td>
                                                {item.lectures} Today
                                            </td>

                                            <td>
                                                <span className="feedback-value">
                                                    {item.feedback}%
                                                </span>
                                            </td>

                                            <td>

                                                <strong
                                                    className={
                                                        item.rating < 3.5
                                                            ? "table-danger"
                                                            : "table-success"
                                                    }
                                                >
                                                    {item.rating} / 5
                                                </strong>

                                            </td>

                                            <td>

                                                <span
                                                    className={`class-status ${item.rating < 3.5
                                                            ? "review"
                                                            : "optimal"
                                                        }`}
                                                >
                                                    {item.status}
                                                </span>

                                            </td>

                                            <td>

                                                <button className="detail-button">
                                                    View Detail
                                                </button>

                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    </section>

                )}

            </main>

        </div>
    );
}

export default Dashboard;