export const personalInfo = {
  name: "Shantu Raj Gogoi",
  role: "Mechanical & Systems Engineer",
  tagline: "Final-Year Mechanical Engineering Undergraduate passionate about CAD Product Design, Kinematic Simulations, UAVs, and Mechatronics Systems.",
  location: "Assam, India",
  institution: "Barak Valley Engineering College (ASTU)",
  degree: "B.Tech in Mechanical Engineering (2022 - 2026)",
  email: "gogoishanturaj@gmail.com",
  instagram: "https://instagram.com/srg.phics",
  linkedin: "https://linkedin.com",
  status: "Open to Full-Time Roles & Graduate Engineering Trainee (GET) Positions",
};

export const stats = [
  { label: "Engineering Disciplines", value: "CAD & Mechatronics" },
  { label: "Graduation Target", value: "Class of 2026" },
  { label: "Key CAD Software", value: "SolidWorks & Simulation" },
  { label: "Hands-on Projects", value: "8+ Prototypes & Studies" }
];

export const skillsCategories = [
  {
    category: "CAD, Design & Simulation",
    icon: "Boxes",
    skills: [
      { name: "SolidWorks (3D Modeling & Assemblies)", level: 90 },
      { name: "Parametric Mechanical Design", level: 85 },
      { name: "Motion Studies & Kinematic Analysis", level: 80 },
      { name: "Tolerance & GD&T Principles", level: 75 },
      { name: "Photorealistic CAD Rendering", level: 85 },
      { name: "Engineering Drawing (Drafting)", level: 80 }
    ]
  },
  {
    category: "Robotics, UAVs & Mechatronics",
    icon: "Cpu",
    skills: [
      { name: "Drone Assembly & F450 Airframes", level: 85 },
      { name: "Arduino & Microcontroller Logic", level: 80 },
      { name: "PID Tuning & Flight Dynamics", level: 75 },
      { name: "Servo & DC Actuation Systems", level: 85 },
      { name: "Telemetry & RF Link (FlySky)", level: 80 },
      { name: "Kinematic Linkage Design", level: 85 }
    ]
  },
  {
    category: "Manufacturing & Computation",
    icon: "Wrench",
    skills: [
      { name: "Python (Automation & Data Scripts)", level: 75 },
      { name: "Workshop & Fabrication Methods", level: 80 },
      { name: "Hardware Prototyping & Soldering", level: 85 },
      { name: "Material Selection & Stress Concepts", level: 80 },
      { name: "Design for Assembly (DFA)", level: 75 },
      { name: "Technical Documentation & Reporting", level: 90 }
    ]
  }
];

export const projects = [
  {
    id: "car-lift-v2",
    title: "Showcase Car Lift V2 (Hydraulic Automotive System)",
    subtitle: "Precision Parametric CAD Assembly & Structural Load Analysis",
    category: "Mechanical Design & CAD",
    video: "/3dshowcasemodel2.mp4",
    featured: true,
    tags: ["SolidWorks", "Parametric Assembly", "Hydraulics", "Photorealistic Rendering", "Machine Design"],
    summary: "Heavy-duty showroom mechanical automotive lift engineered with dynamic parametric constraints, dual-cylinder synchronized hydraulics, and 4,000+ kg load distribution capabilities.",
    specifications: [
      { key: "Designed Working Load", val: "4,000 kg (Uniformly Distributed)" },
      { key: "Software Package", val: "SolidWorks Parametric Suite" },
      { key: "Component Count", val: "100+ Unique Mated Parts" },
      { key: "Safety Feature", val: "Mechanical Ratchet Safety Lockouts" }
    ],
    detailedSections: [
      {
        heading: "1. Problem Statement & Design Objectives",
        content: "High-end vehicle display lifts require both an aesthetically commanding presence and uncompromising structural reliability. The objective was to design a multi-tier hydraulic scissor/column lift that eliminates side-deflection during asymmetric vehicular loading."
      },
      {
        heading: "2. Engineering & Modeling Methodology",
        content: "Implemented relation-driven parametric geometry in SolidWorks. Altering the base platform footprint automatically triggers relational dimension updates across the cross-beams, bearing housings, and hydraulic mounting pins without assembly errors. Performed clash detection and interference verification across full vertical travel stroke."
      },
      {
        heading: "3. Verification & Key Learnings",
        content: "This project deepened practical experience in industrial assembly mates, realistic metallic material rendering (specular reflections, ambient occlusion), and sizing load-bearing structural members against standard yield tolerances."
      }
    ]
  },
  {
    id: "f450-drone",
    title: "Autonomous-Ready F450 Quadcopter Drone",
    subtitle: "End-to-End Avionics Integration, ESC Telemetry & Flight Calibration",
    category: "Robotics & UAVs",
    featured: true,
    tags: ["UAV Avionics", "PID Tuning", "FlySky 2.4GHz", "Brushless DC", "ESC Calibration"],
    summary: "Built, calibrated, and flight-tested a high-payload quadcopter using an F450 composite airframe, tuning real-time PID stabilization loops to eliminate harmonic oscillation and drift.",
    specifications: [
      { key: "Airframe", val: "F450 Glass-Fiber & Polyamide Frame" },
      { key: "Power Plant", val: "High-KV Outrunner Brushless Motors + 30A ESCs" },
      { key: "Control System", val: "Central IMU Flight Controller (Gyro/Acc)" },
      { key: "Radio Link", val: "FlySky FS-i6 6-Channel 2.4GHz AFHDS 2A" }
    ],
    detailedSections: [
      {
        heading: "1. Airframe & Propulsion Architecture",
        content: "Selected an X-configured F450 airframe to maintain a symmetrical center of gravity. Sized the brushless motor kV rating against 1045 propellers and 3S LiPo discharge capacities to guarantee a 2.2:1 thrust-to-weight ratio for responsive throttle authority."
      },
      {
        heading: "2. Avionics & Feedback Loops",
        content: "Connected 30A Electronic Speed Controllers with PWM input headers. Implemented sensor calibration for onboard gyroscopes and 3-axis accelerometers. Iteratively fine-tuned Proportional-Integral-Derivative (PID) gains to achieve rapid disturbance rejection under turbulent outdoor crosswinds."
      },
      {
        heading: "3. Flight Testing & Safety Protocols",
        content: "Conducted pre-flight motor direction checklists, failsafe return thresholds, and low-voltage telemetry alarms. The platform demonstrated stable hover and precise yaw-roll translation."
      }
    ]
  },
  {
    id: "robotic-arm",
    title: "Multi-Axis Articulated Robotic Arm Simulation",
    subtitle: "Kinematic Workspace Envelope & End-Effector Mechanism Design",
    category: "Robotics & UAVs",
    video: "/3droboticarm.mp4",
    featured: true,
    tags: ["Kinematics", "SolidWorks Motion", "End-Effector Gripper", "Degrees of Freedom", "Gear Trains"],
    summary: "Synthesized a multi-degree-of-freedom robotic arm with custom revolute joints and a synchronized dual-jaw gripper, validated through SolidWorks dynamic collision checks.",
    specifications: [
      { key: "Kinematic Architecture", val: "Revolute Joint Articulation" },
      { key: "End-Effector", val: "Synchronized Dual-Claw Gear Drive" },
      { key: "Simulation Tool", val: "SolidWorks Motion Study & Collision Engine" },
      { key: "Workspace Validation", val: "3D Reach Envelope Mapping" }
    ],
    detailedSections: [
      {
        heading: "1. Mechanical Articulation & Joint Design",
        content: "Modeled rotary joint assemblies incorporating bearing pockets and motor mounts. Designed structural linkages with ribbed cross-sections to maximize torsional stiffness while minimizing inertia."
      },
      {
        heading: "2. Kinematic Simulation & Clash Detection",
        content: "Conducted continuous motion studies across joint limit angles. Verified that no mesh-on-mesh mechanical binding occurred between the humerus limb and base revolving turret under extreme reach configurations."
      },
      {
        heading: "3. Gripper Mechanism",
        content: "Engineered an opposed-spur gear train ensuring symmetrical claw closure. Configured torque profiles for steady pick-and-place grip without component deformation."
      }
    ]
  },
  {
    id: "rc-jet-engine",
    title: "RC Turbojet Engine Architecture",
    subtitle: "Aerospace Propulsion Modeling & Rotor Balancing Studies",
    category: "Aerospace & Thermal",
    video: "/jetengine.mp4",
    featured: true,
    tags: ["Aerospace Propulsion", "Compressor Stages", "Turbine Blades", "Combustion Chamber", "CAD"],
    summary: "Conceptual 3D architectural study of a micro-turbojet engine, modeling axial compressor blade profiles, fuel injector annular arrays, and exhaust nozzle contraction geometry.",
    specifications: [
      { key: "System Type", val: "Centrifugal/Axial Hybrid Micro-Turbojet" },
      { key: "CAD Modules", val: "Lofted Airfoils, Radial Impellers, Nozzle Geometry" },
      { key: "Focus Area", val: "Compressor-to-Turbine Shaft Balance & Flow Continuity" }
    ],
    detailedSections: [
      {
        heading: "1. Aerodynamic Blading & Flow Ducting",
        content: "Constructed multi-blade axial compressor rotors using lofted 3D aerofoil profiles designed for smooth continuous fluid turning and compression."
      },
      {
        heading: "2. Core Components Mating",
        content: "Detailed the central shaft bearing carrier, flame tube perforation geometry for stoichiometric combustion air mixing, and high-temp turbine disk extraction stage."
      },
      {
        heading: "3. Analytical Foundation",
        content: "Developed a comprehensive conceptual baseline prepared for future Computational Fluid Dynamics (CFD) boundary condition simulation and pressure gradient analysis."
      }
    ]
  },
  {
    id: "hybrid-maglev",
    title: "Hybrid Maglev Dual-Track Transit Research",
    subtitle: "Electrodynamic Suspension & Dual-Mode Railway Bogie System",
    category: "Mechanical Design & CAD",
    featured: false,
    tags: ["Maglev", "Transit Systems", "Electrodynamics", "Track Transition", "High-Speed Rail"],
    summary: "Comprehensive engineering research paper investigating retrofitted Maglev bogie systems capable of operating on conventional railway infrastructure while utilizing EDS at high-speed sectors.",
    specifications: [
      { key: "Technology", val: "Electrodynamic Suspension (EDS) + Steel Bogies" },
      { key: "Primary Goal", val: "Bridge Infrastructure CapEx & Ultra-High Speed Transit" },
      { key: "Key Challenge", val: "High-Speed Retraction & Load Transition" }
    ],
    detailedSections: [
      {
        heading: "1. Feasibility & Infrastructure Optimization",
        content: "Traditional Maglev lines demand dedicated, capital-intensive guideways. This research conceptualizes a hybrid carriage mechanism that leverages existing rail networks for suburban transit while transitioning to magnetic levitation along dedicated intercity corridors."
      },
      {
        heading: "2. Retractable Bogie Mechanics",
        content: "Analyzed kinematic linkages capable of tucking steel wheel assemblies into secondary aerodynamic wells once electromagnetic levitation height is achieved."
      }
    ]
  },
  {
    id: "servo-butterfly",
    title: "Biomimetic Flapping Wing (Ornithopter) Mechanism",
    subtitle: "Crank-and-Rocker Kinematics & Lightweight Micro-Actuation",
    category: "Robotics & UAVs",
    featured: false,
    tags: ["Biomimetics", "Kinematic Linkage", "Arduino PWM", "Servo Actuation", "Rapid Prototyping"],
    summary: "Biomimetic actuation mechanism converting servo rotational sweeps into symmetrical butterfly wing flapping cycles through an optimized planar crank-and-rocker linkage.",
    specifications: [
      { key: "Actuator", val: "SG90 9g Micro Servo" },
      { key: "Control Core", val: "Arduino PWM Sine Frequency Generation" },
      { key: "Materials", val: "Balsa Structural Spars & Polymer Film" }
    ],
    detailedSections: [
      {
        heading: "1. Linkage Synthesis",
        content: "Designed a planar four-bar mechanism that translates the limited angular excursion of a micro-servo horn into opposing 70-degree wing arc sweeps."
      },
      {
        heading: "2. Weight-to-Torque Optimization",
        content: "Calibrated moving components to strictly respect the servo's stall torque envelope (1.8 kg·cm), minimizing inertial load on reverse strokes."
      }
    ]
  },
  {
    id: "robo-car",
    title: "Autonomous Obstacle-Navigating Robotic Vehicle",
    subtitle: "Microcontroller Motor Drive, Sonar Arrays & Sensor Fusion",
    category: "Robotics & UAVs",
    featured: false,
    tags: ["Embedded C++", "Arduino", "L298N H-Bridge", "Ultrasonic Telemetry", "Autonomous Logic"],
    summary: "Four-wheel-drive mechatronic vehicle platform with real-time distance surveying, responsive PID differential steering, and collision-avoidance algorithms.",
    specifications: [
      { key: "Drivetrain", val: "4x Geared DC Motors with Dual H-Bridge Drivers" },
      { key: "Sensory Suite", val: "Ultrasonic HC-SR04 on Swiveling Micro-Servo" },
      { key: "Power", val: "Regulated Dual Li-Ion Supply Isolating Logic/Motor Noise" }
    ],
    detailedSections: [
      {
        heading: "1. Drive Electronics & Noise Isolation",
        content: "Engineered optoisolated circuitry separating inductive kickback from motor coils from the sensitive logic pins of the microcontroller."
      },
      {
        heading: "2. Environmental Sweep Algorithm",
        content: "Programmed distance polling algorithms that slow vehicle approach speed proportional to object proximity before calculating open-path headings."
      }
    ]
  },
  {
    id: "showroom-v1",
    title: "Mechanical Scissor Lift Prototype V1",
    subtitle: "Foundational Structural Assembly & SolidWorks Spatial Validation",
    category: "Mechanical Design & CAD",
    video: "/3dshowcasemodel.mp4",
    featured: false,
    tags: ["SolidWorks", "Proof of Concept", "Hydraulic Lift", "Iterative Engineering"],
    summary: "The initial proof-of-concept CAD study that laid the dimensional constraints and kinematic foundation for the refined Showcase Car Lift V2.",
    specifications: [
      { key: "Stage", val: "Proof-of-Concept Geometric Exploration" },
      { key: "Focus", val: "Wheelbase clearances & Cylinder Mounting Centers" }
    ],
    detailedSections: [
      {
        heading: "1. Iterative Learning & Torsional Analysis",
        content: "Identified beam-flex weaknesses and pinch-points in the base frame that directly motivated the reinforced multi-column architecture implemented in V2."
      }
    ]
  }
];

export const educationAndTimeline = [
  {
    type: "education",
    period: "2022 — 2026",
    role: "B.Tech in Mechanical Engineering",
    organization: "Barak Valley Engineering College (ASTU)",
    location: "Karimganj / Assam, India",
    highlight: "Final Year Undergraduate",
    description: "Rigorous coursework encompassing Machine Design, Theory of Machines, Kinematics & Dynamics, Fluid Mechanics, Thermodynamics, Manufacturing Technology, and Finite Element Analysis fundamentals.",
    bulletPoints: [
      "Specialized project work in mechanical product modeling, robotics, and CAD assembly verification.",
      "Practical workshop mastery in machining, turning, welding, and bench assembly methods.",
      "Active contributor to student technical initiatives and cross-disciplinary hardware prototypes."
    ]
  },
  {
    type: "experience",
    period: "Internship & Community Service",
    role: "Field Social Service Intern",
    organization: "Sarothi Old Age Home",
    location: "Jorhat, Assam",
    highlight: "Community & Organizational Practicum",
    description: "Engaged in community assistance operations, empathetic resident interaction, facility management observation, and formal daily log documentation.",
    bulletPoints: [
      "Authored systematic activity reports sharpening technical writing and formal communication.",
      "Developed high emotional intelligence, interpersonal coordination, and team collaboration skills."
    ]
  },
  {
    type: "education",
    period: "2020 — 2022",
    role: "Higher Secondary (Class XII — Science)",
    organization: "Assam Higher Secondary Education Council",
    location: "Assam, India",
    highlight: "Pre-Engineering Foundation",
    description: "Comprehensive focus on Physics (Classical Mechanics, Electromagnetism, Optics), Advanced Mathematics (Calculus, Linear Algebra), and Chemistry."
  }
];

export const certificationsAndAchievements = [
  {
    title: "SolidWorks Parametric Modeling & Assemblies",
    issuer: "Independent CAD Intensive Project Studies",
    badge: "CAD Certified",
    date: "2023 - 2024"
  },
  {
    title: "Microcontroller Systems & Mechatronics Prototyping",
    issuer: "Practical Hardware Project Implementation",
    badge: "Hardware & IoT",
    date: "2024"
  },
  {
    title: "UAV Aerial Dynamics & Telemetry Integration",
    issuer: "F450 Experimental Drone Assembly",
    badge: "Avionics",
    date: "2024 - 2025"
  }
];
