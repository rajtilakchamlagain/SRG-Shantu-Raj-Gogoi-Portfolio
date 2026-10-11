export const personalInfo = {
  name: "Shantu Raj Gogoi",
  monogram: "SRG",
  role: "Mechanical & Systems Engineer",
  tagline: "Mechanical Engineering Undergraduate with hands-on experience in product design, CAD modeling, FEA analysis, and refinery operations.",
  location: "Golaghat, Assam, India",
  phone: "+91 9395393823",
  institution: "Barak Valley Engineering College (BVEC)",
  degree: "B.Tech in Mechanical Engineering (2023 - 2027)",
  graduationYear: "2027",
  email: "shanturajgogoi123@gmail.com",
  instagram: "https://instagram.com/srg.phics",
  linkedin: "https://linkedin.com/in/shanturajgogoi",
  resumeUrl: "/Shantu_Raj_Gogoi_Resume.pdf",
  status: "Available for Mechanical Design, CAD & Engineering Roles (Class of 2027)",
};

export const creatorInfo = {
  name: "Rajtilak Chamlagain",
  role: "BTech CSE & Systems Developer",
  email: "rjtiksrm@gmail.com",
  github: "https://github.com/rajtilakchamlagain",
  linkedin: "https://linkedin.com/in/rajtilak-chamlagain-7129942a3",
  portfolio: "https://rajtilak.me"
};

export const stats = [
  { label: "Core Specialization", value: "CAD & FEA Analysis" },
  { label: "Industrial Internships", value: "3 Key Industry Roles" },
  { label: "Primary Software", value: "SolidWorks & ANSYS" },
  { label: "Graduation Target", value: "Class of 2027" }
];

export const skillsCategories = [
  {
    category: "Design, Simulation & Analysis",
    icon: "Boxes",
    skills: [
      { name: "SolidWorks (3D Modeling & Assemblies)", level: 95 },
      { name: "ANSYS Workbench (FEA & Structural)", level: 85 },
      { name: "GD&T (Geometric Dimensioning & Tolerancing)", level: 85 },
      { name: "Factor of Safety (FOS) & Stress Validation", level: 85 },
      { name: "Computational Fluid Dynamics (CFD)", level: 75 },
      { name: "Production-Ready Engineering Drawings", level: 90 }
    ]
  },
  {
    category: "Industrial Operations & Manufacturing",
    icon: "Wrench",
    skills: [
      { name: "Refinery Systems (Pumps, Compressors, Boilers)", level: 85 },
      { name: "Heat Exchangers & Fluid Mechanics", level: 80 },
      { name: "Tool Room Fabrication & MSME Methods", level: 85 },
      { name: "Preventive Maintenance & Inspection", level: 80 },
      { name: "Design for Manufacturing & Assembly (DFMA)", level: 85 },
      { name: "Equipment Safety & Technical Documentation", level: 90 }
    ]
  },
  {
    category: "Robotics, Mechatronics & Avionics",
    icon: "Cpu",
    skills: [
      { name: "Multi-DOF Arduino Robotic Arms", level: 85 },
      { name: "Emergency Payload Delivery RC Drones (F-22)", level: 85 },
      { name: "Servo Motors & Actuation Linkages", level: 90 },
      { name: "Sensor Integration (IoT & Embedded)", level: 80 },
      { name: "Aerodynamic Performance Optimization", level: 80 },
      { name: "Kinematic Motion Simulation", level: 85 }
    ]
  }
];

export const internships = [
  {
    role: "Design Engineer Intern",
    company: "Neodrant Healthcare Solutions Pvt. Ltd.",
    period: "Aug 2026 — Present",
    location: "Industrial Practicum",
    badge: "Product Design",
    description: "Contribute to end-to-end product design and precision manufacturing of electric toothbrush components through parametric 3D CAD modeling and iterative prototype modifications."
  },
  {
    role: "Mechanical Engineering Intern",
    company: "Numaligarh Refinery Limited (NRL)",
    period: "Jul 2026 — Aug 2026",
    location: "Numaligarh, Assam",
    badge: "Refinery Operations",
    description: "Studied comprehensive end-to-end refinery processes from crude oil distillation through downstream petrochemical processing. Gained direct operational exposure to heavy-duty industrial pumps, gas compressors, shell-and-tube heat exchangers, high-pressure boilers, and stringent refinery safety protocols."
  },
  {
    role: "CAD Design Intern",
    company: "TRTC (Tool Room & Training Centre), MSME",
    period: "Jun 2025 — Jul 2025",
    location: "Guwahati, Assam",
    badge: "MSME Certified",
    description: "Engineered 15+ complex mechanical components and multi-part assemblies using SolidWorks for real manufacturing applications. Prepared detailed manufacturing drawings with GD&T callouts to support production-ready tooling."
  }
];

export const leadership = [
  {
    role: "Research & Development Head",
    org: "Design Club, BVEC",
    period: "2026 — Present",
    desc: "Direct CAD-based engineering design projects, lead collaborative workshops, and mentor engineering students in advanced SolidWorks parametric modeling."
  },
  {
    role: "Joint Secretary",
    org: "Robotronix Club, BVEC",
    period: "2025 — 2026",
    desc: "Coordinated institution-wide technical events, hackathons, and hardware robotics project development across inter-departmental teams."
  }
];

export const projects = [
  {
    id: "knuckle-joint-fea",
    title: "Knuckle Joint Design & Structural Analysis (10 kN Load)",
    subtitle: "SolidWorks Parametric Modeling & ANSYS Workbench FEA Simulation",
    category: "Mechanical Design & CAD",
    featured: true,
    tags: ["SolidWorks", "ANSYS Workbench", "FEA Analysis", "10 kN Static Load", "Factor of Safety"],
    summary: "Engineered an industrial knuckle joint assembly in SolidWorks and validated structural stress limits in ANSYS Workbench under a 10 kN static tensile load, confirming design safety via Factor of Safety (FOS) evaluation.",
    specifications: [
      { key: "Static Test Load", val: "10 kN (Tensile Load)" },
      { key: "FEA Suite", val: "ANSYS Workbench Structural" },
      { key: "Modeling Tool", val: "SolidWorks Parametric CAD" },
      { key: "Design Verification", val: "Factor of Safety (FOS) Passed" }
    ],
    detailedSections: [
      {
        heading: "1. Design Problem Statement",
        content: "Knuckle joints transmit axial tensile loads between two rods with small angular flexibility. The fork end, eye end, and pin must withstand high shear and tensile stresses without yielding."
      },
      {
        heading: "2. CAD Modeling & Boundary Conditions",
        content: "Parametrically modeled the pin, fork end, and eye end with precise dimensional tolerances in SolidWorks. Exported geometry to ANSYS Workbench, applied fine tetrahedral meshing at pin contact regions, fixed one rod end, and applied a 10 kN static load."
      },
      {
        heading: "3. FEA Results & Structural Safety",
        content: "Evaluated Von-Mises equivalent stress distributions, pin shear stresses, and total deformation contours. The maximum stress remained comfortably below material yield strength, demonstrating a safe operating Factor of Safety."
      }
    ]
  },
  {
    id: "f22-rc-drone",
    title: "Mini F-22 Raptor RC Drone for Emergency Relief Delivery",
    subtitle: "Aerodynamic Design, CAD Modeling & Payload Optimization",
    category: "Robotics & UAVs",
    featured: true,
    tags: ["RC Drone", "F-22 Raptor Airframe", "Aerodynamics", "Disaster Relief", "Payload Optimization"],
    summary: "Designed an F-22 Raptor-inspired lightweight RC aircraft tailored to deliver urgent medicines and emergency relief supplies to remote and flood-affected terrain in Assam, optimizing thrust, wing area, and payload capacity.",
    specifications: [
      { key: "Mission Profile", val: "Flood Relief Emergency Medicine Drops" },
      { key: "Airframe", val: "F-22 Raptor Swept-Wing Aerodynamic Design" },
      { key: "Design Tools", val: "SolidWorks CAD & Aerodynamic Optimization" },
      { key: "Key Focus", val: "Low-Speed Lift & Maximum Payload Capacity" }
    ],
    detailedSections: [
      {
        heading: "1. Humanitarian Application & Design Constraints",
        content: "Assam's seasonal monsoon floods frequently isolate riverine and remote rural communities. This fixed-wing RC platform is engineered for rapid emergency deployment delivering medical supplies where surface transport is cut off."
      },
      {
        heading: "2. Aerodynamic & Structural Modeling",
        content: "Applied aerodynamic lifting-body principles modeled in CAD to balance lift-to-drag ratios at low patrol speeds, allowing stable payload carriage while retaining high agility."
      }
    ]
  },
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
      { key: "Working Load", val: "4,000 kg (Uniformly Distributed)" },
      { key: "Software Package", val: "SolidWorks Parametric Suite" },
      { key: "Component Count", val: "100+ Unique Mated Parts" },
      { key: "Safety Feature", val: "Mechanical Ratchet Safety Lockouts" }
    ],
    detailedSections: [
      {
        heading: "1. Problem Statement & Design Objectives",
        content: "Vehicle display lifts require aesthetic elegance and structural reliability. The objective was to design a column lift that eliminates side-deflection during asymmetric vehicular loading."
      },
      {
        heading: "2. Engineering & Modeling Methodology",
        content: "Implemented relation-driven parametric geometry in SolidWorks. Altering the base platform footprint automatically triggers relational dimension updates across cross-beams, bearing housings, and hydraulic mounting pins without assembly errors."
      }
    ]
  },
  {
    id: "robotic-arm-arduino",
    title: "Arduino-Based Multi-DOF Articulated Robotic Arm",
    subtitle: "From CAD Modeling to Physical Servo Mechanical Assembly",
    category: "Robotics & UAVs",
    video: "/3droboticarm.mp4",
    featured: true,
    tags: ["Arduino", "Kinematics", "Servo Motors", "SolidWorks Motion", "End-Effector Gripper"],
    summary: "End-to-end design and physical assembly of a multi-degree-of-freedom robotic arm powered by Arduino and servomotors, bridging 3D CAD modeling with physical mechatronic assembly.",
    specifications: [
      { key: "Control Platform", val: "Arduino Microcontroller Firmware" },
      { key: "Actuation", val: "Multi-Axis Servo Motors & Linkages" },
      { key: "End-Effector", val: "Synchronized Dual-Claw Gear Drive" },
      { key: "Simulation Tool", val: "SolidWorks Motion Study & Collision Engine" }
    ],
    detailedSections: [
      {
        heading: "1. Mechanical Articulation & Joint Design",
        content: "Modeled rotary joint assemblies incorporating bearing pockets and motor mounts. Designed structural linkages with ribbed cross-sections to maximize torsional stiffness while minimizing inertia."
      },
      {
        heading: "2. Kinematic Simulation & Clash Detection",
        content: "Conducted continuous motion studies across joint limit angles. Verified that no mesh-on-mesh mechanical binding occurred between limbs under extreme reach configurations."
      }
    ]
  },
  {
    id: "rc-jet-engine",
    title: "RC Turbojet Engine Architecture",
    subtitle: "Aerospace Propulsion Modeling & Rotor Balancing Studies",
    category: "Aerospace & Thermal",
    video: "/jetengine.mp4",
    featured: false,
    tags: ["Aerospace Propulsion", "Compressor Stages", "Turbine Blades", "Combustion Chamber", "CAD"],
    summary: "Conceptual 3D architectural study of a micro-turbojet engine, modeling axial compressor blade profiles, fuel injector annular arrays, and exhaust nozzle contraction geometry.",
    specifications: [
      { key: "System Type", val: "Centrifugal/Axial Hybrid Micro-Turbojet" },
      { key: "CAD Modules", val: "Lofted Airfoils, Radial Impellers, Nozzle Geometry" }
    ],
    detailedSections: [
      {
        heading: "1. Aerodynamic Blading & Flow Ducting",
        content: "Constructed multi-blade axial compressor rotors using lofted 3D aerofoil profiles designed for smooth continuous fluid turning and compression."
      }
    ]
  },
  {
    id: "f450-drone",
    title: "F450 Experimental Quadcopter Drone",
    subtitle: "Avionics Integration, ESC Telemetry & Flight Calibration",
    category: "Robotics & UAVs",
    featured: false,
    tags: ["UAV Avionics", "PID Tuning", "FlySky 2.4GHz", "Brushless DC", "ESC Calibration"],
    summary: "Built, calibrated, and flight-tested a quadcopter using an F450 composite airframe, tuning real-time PID stabilization loops to eliminate harmonic oscillation and drift.",
    specifications: [
      { key: "Airframe", val: "F450 Glass-Fiber & Polyamide Frame" },
      { key: "Power Plant", val: "High-KV Brushless Motors + 30A ESCs" }
    ]
  }
];

export const educationAndTimeline = [
  {
    type: "education",
    period: "2023 — 2027",
    role: "Bachelor of Technology (B.Tech) in Mechanical Engineering",
    organization: "Barak Valley Engineering College (BVEC)",
    location: "Karimganj / Assam, India",
    highlight: "Class of 2027",
    description: "Coursework in Machine Design, Finite Element Analysis, Kinematics & Dynamics, Fluid Mechanics, Heat Transfer, Manufacturing Technology, and Metrology.",
    bulletPoints: [
      "Head of Research & Development at BVEC Design Club.",
      "Joint Secretary at Robotronix Club (2025 - 2026).",
      "Hands-on expertise in product modeling, mechanical workshop fabrication, and FEA simulations."
    ]
  }
];

export const certifications = [
  {
    title: "Mechanical Design using SolidWorks",
    issuer: "TRTC (Tool Room & Training Centre), MSME Guwahati",
    badge: "MSME Certified",
    year: "2025"
  },
  {
    title: "ANSYS Workbench Complete Simulation Course",
    issuer: "Udemy",
    badge: "FEA Certified",
    year: "2025"
  },
  {
    title: "Drone Bootcamp & Aerial Systems",
    issuer: "National Institute of Technology (NIT) Silchar",
    badge: "UAV Avionics",
    year: "2024"
  },
  {
    title: "Robotics with IoT & AI Workshop",
    issuer: "Barak Valley Engineering College (BVEC)",
    badge: "Robotics & IoT",
    year: "2024"
  }
];
