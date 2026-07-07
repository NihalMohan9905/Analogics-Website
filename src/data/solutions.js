// ================================
// Solutions Data - Analogics Website
// ================================

export const solutionCategories = [
  {
    id: 'utilities',
    name: 'Utilities',
    icon: 'FaBolt',
    description: 'Smart metering and utility management solutions'
  },
  {
    id: 'attendance',
    name: 'Time & Attendance',
    icon: 'FaClock',
    description: 'Comprehensive workforce management solutions'
  },
  {
    id: 'banking',
    name: 'Banking',
    icon: 'FaUniversity',
    description: 'Financial inclusion and banking solutions'
  },
  {
    id: 'pds',
    name: 'Public Distribution System',
    icon: 'FaBoxes',
    description: 'PDS automation and management solutions'
  }
];

export const solutions = [
  {
    id: 103,
    name: 'Meter Data Management System (MDMS)',
    category: 'utilities',
    image: '/images/solutions/utilities/mdms-analysis.png',
    description:
      'Enterprise MDMS for collection, analysis, validation, and management of large-scale energy usage data from AMR/MDA systems.',
    features: [
      'N-tier design methodology',
      'Network hierarchy navigation',
      'Rule-based validation',
      'Exports reports (Excel/PDF/email)'
    ],
    detailedInfo: {
      overview:
        'An enterprise application, specifically designed for collection, analysis and management of vast amount of energy usage data. This data is collected from servers (MDA) that manage the metering data acquired from AMR systems. The application is compatible with any MIOS compliant application that retrieves data from AMR systems.',
      keyFeatures: [
        'N-tier design methodology',
        'Provision of menu option for viewing each data report',
        'Navigation from one level of network hierarchy to another',
        'Ability to capture and maintain the geographic/ administrative/ regional hierarchy',
        'Ability to capture and maintain electrical network topology',
        'Generation of summary report of meter data for any load violation and tamper counts',
        'Delivers alarms/ notifications to multiple recipients',
        'Supports automated rule-based validation and configuration of validation rules',
        'Supports channels of different time series',
        'Provision to view time series data in tabular/ graphical form',
        'Provision of selective monitoring of summarized data',
        'Energy balance at different network levels',
        'Monitoring of losses at different voltage levels',
        'Display of load survey analysis',
        'Monitors peak load and performance factors',
        'Exports reports in different formats including Excel, PDF and mail sending.'
      ],
      keyBenefits: [
        'Authenticity for multi-users and provides multiple access levels',
        'Permits enabling/ disabling of various tasks based on the access level',
        'Easy set-up of common operational functions',
        'Displays instantaneous electrical and energy parameters and waveforms',
        'Provides APIs for easy integration with multiple third party applications'
      ],
      systemRequirements: ['Windows 98, ME, NT, 2000, XP, Vista']
    }
  },
  {
    id: 102,
    name: 'Meter Data Acquisition (MDA)',
    category: 'utilities',
    image: '/images/solutions/utilities/mda-system.png',
    description:
      'Meter Data Acquisition software to configure meters and acquire/validate data for MDMS analysis and reporting.',
    features: [
      'Supports 2G/3G technologies',
      'Supports MIOS/Modbus/IEC 62056-21/DLMS meters',
      'Secure data transfer through VPN',
      'Real-time tamper alerts & notifications'
    ],
    detailedInfo: {
      overview:
        'Meter Data Acquisition (MDA) software is designed to configure and acquire data from all Energy meters. The system acquires data from various kinds of meters installed in the field through modems, processes the data, validates and converts the same into CDF format like XML, stores and transmits to MDMS (Meter Data Management System) for further analysis and reporting.',
      keyFeatures: [
        'Supports both 2G/ 3G technologies',
        'Supports MIOS compliant/ Modbus/ IEC 62056-21/ DLMS Meters',
        'IP based communication, enabling simultaneous data access from hundreds/thousands of CAMRs',
        'Secure and reliable data transfer through VPN',
        'Capturing real-time tamper alerts/ event notifications',
        'SMS alerts to field mobile phones as per configuration',
        'Online monitoring of vital instantaneous parameters including voltages, currents energies, powers, power factors, tamper events and power quality',
        'Two way communication facilitating monitoring, control and administration',
        'Intelligence in communication i.e. in case of any communication break during data transfer, leftover data is sent in the next cycle',
        'Common data acquisition and Management software at server end, for any meter and for any communication technology'
      ]
    }
  },
  {
    id: 104,
    name: 'Prepaid Head End System (HES)',
    category: 'utilities',
    image: '/images/solutions/utilities/prepaid-hes.png',
    description:
      'An accepted viable solution worldwide as utilities are looking at ways to improve customer service, improve cash flow and minimize the risks. It introduces the pay-before-you-use concept, where every customer purchases credit and uses electricity until the credit expires.',
    features: [
      'Pay-before-you-use',
      'Credit / token management',
      'Reduced risk & improved cash flow',
      'Better customer service'
    ],
    detailedInfo: {
      overview:
        'An accepted viable solution worldwide as utilities are looking at ways to improve customer service, improve cash flow and minimize the risks. It introduces the pay-before-you-use concept, where every customer purchases credit and uses electricity until the credit expires. A new kind of meter will be installed with an in-built disconnecting/ reconnecting feature and various payment gateways can be used to top up credit in the meter.',
      keyFeatures: [
        'Enables monitoring of electrical consumption on a daily basis digitally.',
        'Eliminates periodic meter reading.',
        'Generates an alarm and automatically disconnects once the credit expires.',
        'Eliminates the need to disconnect power manually in case of pending bills',
        'Easy fraud detection with a tamper switch present on the meter',
        'Improves cash flow to distribution companies',
        'Leads to improved energy management'
      ]
    }
  },
  {
    id: 101,
    name: ' Management Billing and Collection (MBC)',
    category: 'utilities',
    image: '/images/solutions/utilities/mbc-dashboard.png',
    description:
      'Enterprise billing and collection application for utilities, integrated with MDMS and Spot Billing Machines.',
    features: [
      'User friendly with minimal training',
      'Meets exhaustive Utilities MBC requirements',
      'Complete customer account history access',
      'Metering → Billing → Collection flow'
    ],
    detailedInfo: {
      overview:
        'An enterprise application, functionally designed to enable utility billing and collection, based on energy usage data acquired from Meter Data Management System (MDMS). MBC in integration with Spot Billing Machines, gives access to data of end-user\'s history of energy usage and arrears. The application offers complete billing solutions that scale from the smallest residential customer to the largest commercial and industrial account.',
      keyFeatures: [
        'User friendly application and can be used with minimal training',
        'Meets the exhaustive requirement of MBC module for Utilities',
        'Access to complete history of customer account',
        'Energy demand and Ledger Statement generated monthly',
        'Enables view of consumption pattern',
        'Complete process flow from Metering to Billing to Collection.',
        'Reduces billing exceptions and cost',
        'Reduces unbilled revenue'
      ],
      keyBenefits: [
        'Highly configurable to meet the specific requirements of utility.',
        'Easy viewing of key information like area wise revenue generation, revenue collected, pending bills, defaulter details and collection status',
        'Flexible data collection with definable read cycles and routes',
        'Supports Normal billing, Door Lock, Meter stuck up and various other special metering conditions',
        'Can be configured to multi-level messages to appear on bills for specific periods',
        'Supports configuration of bundled rates, fixed fees and charges, flat rates and other charges',
        'Enables operator on field to accept payment from end-user via cash/cheque/ third party aggregators'
      ],
      systemRequirements: ['Windows 98, ME, NT, 2000, XP, Vista']
    }
  },
  {
    id: 108,
    name: 'Mobile Device Management (MDM)',
    category: 'utilities',
    image: '/images/solutions/utilities/mdms-mobile-device.png',
    description:
      'A comprehensive Mobile Device Management solution that enables IT admins to remotely monitor, manage, secure and control enterprise devices across the organization.',
    features: [
      'Remote Access & Control',
      'Device Security & Compliance',
      'Role-based Access Control',
      'Multi-OS Support'
    ],
    detailedInfo: {
      overview:
        'MDMS offers remote control features that allow IT admins to remotely connect to end-users\' devices for troubleshooting and maintenance. It provides comprehensive device lifecycle management with robust security policies, access control, and real-time monitoring across Android, iOS, macOS, and Linux platforms.',
      keyFeaturesImage: '/images/solutions/utilities/mdm-key-features.png',
      remoteFeatures: [
        'Remote Access',
        'Remote Reboot',
        'Remote File Explorer',
        'Remote View',
        'Remote Downloading',
        'Remote Buzz',
        'Remote Terminal',
        'Remote Screen Recording',
        'Multi-Admin Remote Control'
      ],
      importantFeatures: [
        'Device service and repair management',
        'Remote monitoring of device health',
        'Silent installations without user interference',
        'Push applications and software Patches',
        'Lockdown peripheral',
        'Disable uninstall option for system applications',
        'Comprehensive view of all registered devices in Dashboard',
        'Search devices in MDM console',
        'Schedule reboot for Android devices',
        'Monitor CPU usage history',
        'Multi-admin remote control',
        'Multi-factor authentication',
        'Compliance Job support and Analytics report for Linux devices',
        'Web Content Filter for macOS',
        'Certificate payloads for Linux'
      ],
      deviceSecurity: [
        'Create and apply permissions based on role, location, time, and Wi-Fi connection status',
        'Detect rooted or jailbroken devices',
        'Push rigorous password policies to devices',
        'Send an alert tone to locate devices with Remote Buzz',
        'Device compliance policies',
        'Two-factor & Multi-factor authentication',
        'On Android devices, full support for Android Enterprise APIs ensures users cannot find workarounds',
        'Disable factory resetting, USB debugging, and Safe Mode',
        'Easy application behavior management'
      ],
      accessControl: {
        description: 'Role-based Access Control ensures each user (inside/outside the organization) has access to only resources that they require to perform their tasks.',
        roles: [
          'Super User',
          'Admin User',
          'Help-desk User',
          'Manager User',
          'End User'
        ]
      },
      keyFeatures: [
        'Multi-OS Support – Android, iOS, macOS, Linux, Windows',
        'Remote Control – Remote access, reboot, file explorer, screen recording',
        'Out-of-the-box Enrollments',
        'Real-time Dashboard with device health monitoring',
        'Composite Jobs & Custom Reporting Tool',
        'VR Device Management',
        'Kiosk Mode with SureLock, SureFox, and SureVideo',
        'Remote Support',
        'Things Management',
        'Single Sign-On (SSO)',
        'Two-way Messaging',
        'Fencing – Geo, Time, and Network',
        'Over the Air Distribution (OTA)',
        'Multi-factor authentication',
        'Role-based Access Control with five user roles'
      ]
    }
  },
  {
    id: 105,
    name: 'Spot Billing',
    category: 'utilities',
    image: '/images/solutions/utilities/spot-billing-device.png',
    description:
      'An efficient solution for Power Utility Companies in India to generate bills and collect payments. A hand held based Spot Billing Machine (SBM) along with its Billing and Collection software application (MBC) helps manage vast quantities of energy usage data, thus optimizing the field process.',
    features: [
      'On-site bill generation',
      'Payment collection',
      'Handheld SBM support',
      'Works with MBC for data access'
    ],
    detailedInfo: {
      overview:
        'An efficient solution for Power Utility Companies in India to generate bills and collect payments. A hand held based Spot Billing Machine (SBM) along with its Billing and Collection software application (MBC) helps manage vast quantities of energy usage data, thus optimizing the field process. Being the pioneer in introducing Spot Billing solution to Power Utility Companies in India, we still enjoy the major market share across the country.',
      keyFeatures: [
        'The solution includes a Spot Billing Machine (SBM) and a standard server application (MBC) hosted at utility provider’s location',
        'Bills are generated on the spot, by recording the current month’s energy usage on the SBM and acquiring past month usage information from MBC',
        'Data exchange/transfer on the spot between the machines and server via GPRS',
        'Provision to collect Cash/ Cheque/DD on the field and instant information update to server',
        'Easy registering of changes in tariff or penalty on the server, which is instantly reflected on the field'
      ],
      keyBenefits: [
        'User-friendly solution',
        'The ruggedness, ergonomic design and light weight features of SBM makes it easy to use the device on field under any environmental condition',
        'Eliminates manual system to generate bills and collect payments',
        'Efficient management of vast quantities of data',
        'Accurate data collection',
        'Reports generation from both SBM and PC',
        'Online monitoring of Billing and Collections status'
      ],
      applicationAreas: [
        'Ticketing',
        'POS',
        'Parking/Toll collection',
        'Cop spot fine management',
        'Loyalty card management',
        'Micro Finance',
        'Tax collection',
        'Complaint management',
        'Sales Force Automation (SFA) System'
      ]
    }
  },
  {
    id: 110,
    name: 'HT AMR Acquisition System',
    category: 'utilities',
    image: '/images/solutions/utilities/ht-amr-acquisition-system.png',
    description:
      'Web-based HT AMR solution for automated meter data collection, validation, communication monitoring, and utility reporting.',
    features: [
      'Remote HT meter data collection',
      'Real-time communication monitoring',
      'Monthly billing status tracking',
      'Advanced utility filtering'
    ],
    detailedInfo: {
      overview:
        'The HT AMR (High Tension Automatic Meter Reading) Acquisition System automates the collection, monitoring, and management of electricity meter data from High Tension consumers. It remotely acquires meter readings through communication networks, validates the collected information, and stores it in a centralized database for further processing. The system provides real-time monitoring of meter communication, billing status, signal strength, and operational performance through an interactive dashboard.',
      keyFeatures: [
        'Automatic remote collection of HT meter data',
        'Real-time communication status monitoring',
        'Dashboard displaying meter health and operational statistics',
        'Monthly billing status monitoring',
        'Signal strength analysis for communication devices',
        'Secure centralized storage of meter information',
        'Advanced filtering based on Circle, Division, Sub-Division, and Section',
        'Graphical reports for quick analysis and decision-making',
        'Supports efficient monitoring of utility operations',
        'Reduces manual meter reading and operational costs'
      ],
      applicationAreas: [
        'High Tension Consumer Metering',
        'Remote Meter Monitoring',
        'Utility Billing Operations',
        'Operational Performance Tracking'
      ]
    }
  },
  {
    id: 111,
    name: 'Substation 11kV Feeder Monitoring System',
    category: 'utilities',
    image: '/images/solutions/utilities/substation-11kv-feeder-monitoring-system.png',
    description:
      'Centralized feeder monitoring solution for real-time status tracking, outage detection, communication monitoring, and reporting.',
    features: [
      'Real-time feeder status monitoring',
      'Communication failure detection',
      'Zone-wise and circle-wise visibility',
      'Graphical analytics and reports'
    ],
    detailedInfo: {
      overview:
        'The Substation 11kV Feeder Monitoring System is a centralized monitoring application designed to supervise the operational status of electrical feeders installed across substations. It continuously collects feeder communication data, feeder ON/OFF status, and utility information from field devices. The system presents the collected information through interactive dashboards, statistical summaries, and graphical charts, allowing operators to monitor the distribution network in real time.',
      keyFeatures: [
        'Real-time monitoring of 11kV feeder status',
        'Displays feeder ON, OFF, and communication status',
        'Zone-wise and Circle-wise feeder monitoring',
        'Centralized dashboard with graphical analytics',
        'Automatic detection of communication failures',
        'Utility issue monitoring and reporting',
        'Interactive pie charts and statistical summaries',
        'Supports quick fault identification and maintenance planning',
        'Provides historical reports and operational analysis',
        'Enhances power distribution reliability and system performance'
      ],
      applicationAreas: [
        'Substation Operations',
        '11kV Feeder Monitoring',
        'Distribution Network Supervision',
        'Fault Identification and Maintenance Planning'
      ]
    }
  },
  {
    id: 3,
    name: 'Aadhaar & Non-Aadhaar Attendance',
    category: 'attendance',
    image: '/images/solutions/attendance/aadhaar-non-aadhaar-attendance.png',
    description:
      'The tedious task of monitoring time and attendance of workforce and students can be simplified with our reliable products and solutions.',
    features: ['Lotus for Mobile Attendance', 'Web based solutions', 'Attendance monitoring'],
    detailedInfo: {
      overview:
        'The tedious task of monitoring time and attendance of workforce and students can be simplified with our reliable products and solutions. Our products – Lotus for Mobile Attendance with our Web based solutions can help control labour costs, maximize productivity and effectively monitor attendance.',
      lotusMobileAttendance: {
        title: 'Lotus for Mobile Attendance',
        points: [
          'Hand Held Computer (HHC) with integrated finger print scanner',
          'Optional peripherals: Bar code scanner, camera, contactless card reader and GPS',
          'Open source Linux or Android OS to support custom applications'
        ],
        link: {
          label: 'click here',
          to: '/products/biometric?productId=19'
        }
      }
    }
  },
  {
    id: 109,
    name: 'AI Based Mobile App',
    category: 'attendance',
    image: '/images/solutions/attendance/ai-mobile-app-home.png',
    description:
      'A comprehensive mobile attendance solution that simplifies workforce tracking with real-time attendance marking, facial recognition, and detailed reporting capabilities.',
    features: ['Mark Daily Attendance', 'Track Attendance Records', 'Employee Profile Management', 'Real-time Synchronization'],
    detailedInfo: {
      overview:
        'A powerful mobile attendance application designed to streamline workforce time and attendance management. The app enables employees to mark their daily attendance using facial recognition or camera capture, track their attendance history, and access their profile information on-the-go. With real-time synchronization and pending records management, organizations can monitor attendance efficiently and ensure accurate payroll processing.',
      keyFeatures: [
        'Mark Daily Attendance - Employees can mark attendance with front camera facial recognition',
        'Attendance Dashboard - View monthly attendance summary with Present, Absent, and Off days',
        'Track Attendance - Access detailed attendance history and records',
        'Employee Profile - Complete employee information including Personnel ID, Designation, Department, and Area',
        'Pending Records - Manage and sync pending attendance records',
        'Real-time Updates - Instant synchronization with central server',
        'User Authentication - Secure login with password management',
        'Date & Time Stamp - Accurate timestamp for each attendance entry',
        'Front Camera Integration - Facial recognition for attendance verification',
        'Toggle Features - Enable/disable daily attendance marking as needed'
      ],
      keyBenefits: [
        'Eliminates manual attendance registers and reduces paperwork',
        'Prevents buddy punching and ensures accurate attendance tracking',
        'Real-time visibility of workforce attendance for management',
        'Simplifies payroll processing with accurate attendance data',
        'Increases accountability and transparency in attendance management',
        'Reduces administrative overhead and saves time',
        'Mobile accessibility allows attendance from anywhere',
        'Secure and tamper-proof attendance records with photo verification'
      ],
      applicationAreas: [
        'Corporate Offices',
        'Educational Institutions',
        'Government Departments',
        'Healthcare Facilities',
        'Manufacturing Units',
        'Field Workforce Management',
        'Remote Employee Tracking',
        'Multi-location Organizations'
      ],
      appScreenshots: [
        {
          title: 'Home Dashboard',
          image: '/images/solutions/attendance/ai-mobile-app-home.png',
          description: 'View monthly attendance summary and access key features'
        },
        {
          title: 'Employee Profile',
          image: '/images/solutions/attendance/ai-mobile-app-profile.png',
          description: 'Manage employee details and account settings'
        },
        {
          title: 'Mark Attendance',
          image: '/images/solutions/attendance/ai-mobile-app-mark.png',
          description: 'Mark attendance with front camera facial recognition'
        }
      ]
    }
  },
  {
    id: 106,
    name: 'Mobile Attendance Application',
    category: 'attendance',
    image: '/images/solutions/attendance/mobile-attendance-home.png',
    description:
      'A comprehensive mobile attendance solution that simplifies workforce tracking with real-time attendance marking, facial recognition, and detailed reporting capabilities.',
    features: ['Mark Daily Attendance', 'Track Attendance Records', 'Employee Profile Management', 'Real-time Synchronization'],
    detailedInfo: {
      overview:
        'A powerful mobile attendance application designed to streamline workforce time and attendance management. The app enables employees to mark their daily attendance using facial recognition or camera capture, track their attendance history, and access their profile information on-the-go. With real-time synchronization and pending records management, organizations can monitor attendance efficiently and ensure accurate payroll processing.',
      keyFeatures: [
        'Mark Daily Attendance - Employees can mark attendance with front camera facial recognition',
        'Attendance Dashboard - View monthly attendance summary with Present, Absent, and Off days',
        'Track Attendance - Access detailed attendance history and records',
        'Employee Profile - Complete employee information including Personnel ID, Designation, Department, and Area',
        'Pending Records - Manage and sync pending attendance records',
        'Real-time Updates - Instant synchronization with central server',
        'User Authentication - Secure login with password management',
        'Date & Time Stamp - Accurate timestamp for each attendance entry',
        'Front Camera Integration - Facial recognition for attendance verification',
        'Toggle Features - Enable/disable daily attendance marking as needed'
      ],
      keyBenefits: [
        'Eliminates manual attendance registers and reduces paperwork',
        'Prevents buddy punching and ensures accurate attendance tracking',
        'Real-time visibility of workforce attendance for management',
        'Simplifies payroll processing with accurate attendance data',
        'Increases accountability and transparency in attendance management',
        'Reduces administrative overhead and saves time',
        'Mobile accessibility allows attendance from anywhere',
        'Secure and tamper-proof attendance records with photo verification'
      ],
      applicationAreas: [
        'Corporate Offices',
        'Educational Institutions',
        'Government Departments',
        'Healthcare Facilities',
        'Manufacturing Units',
        'Field Workforce Management',
        'Remote Employee Tracking',
        'Multi-location Organizations'
      ],
      appScreenshots: [
        {
          title: 'Home Dashboard',
          image: '/images/solutions/attendance/mobile-attendance-home.png',
          description: 'View monthly attendance summary and access key features'
        },
        {
          title: 'Employee Profile',
          image: '/images/solutions/attendance/mobile-attendance-profile.png',
          description: 'Manage employee details and account settings'
        },
        {
          title: 'Mark Attendance',
          image: '/images/solutions/attendance/mobile-attendance-mark.png',
          description: 'Mark attendance with front camera facial recognition'
        }
      ]
    }
  },
  {
    id: 107,
    name: 'Web-Based Attendance Portal',
    category: 'attendance',
    image: '/images/solutions/attendance/web-attendance-dashboard.png',
    description:
      'A comprehensive web-based attendance management system with real-time dashboards, geo-fence tracking, analytics, and multi-organization support for efficient workforce monitoring.',
    features: ['Real-time Dashboard', 'Geo-fence Tracking', 'Analytics & Reports', 'Multi-Organization Support'],
    detailedInfo: {
      overview:
        'A powerful web-based attendance management portal designed to provide comprehensive workforce tracking and analytics. The system offers real-time visibility into employee attendance with detailed dashboards showing total employees, enrollment status, present/absent counts, and geo-fence monitoring. With advanced reporting capabilities, check-in/check-out time analytics, and support for multiple employee categories (permanent and contractual), organizations can efficiently manage attendance across multiple locations and departments.',
      keyFeatures: [
        'Real-time Dashboard - Live statistics for total, enrolled, verified, present, and absent employees',
        'Employee Categorization - Separate tracking for permanent and contractual employees',
        'Geo-fence Monitoring - Track employees within and outside designated geographical boundaries',
        'Enrollment Management - Monitor enrolled and not enrolled employee status',
        'Check-In/Check-Out Analytics - Visual graphs showing hourly attendance patterns',
        'Circle/Department-wise Reports - Detailed employee summary organized by organizational units',
        'Multi-format Export - Export reports in CSV, Excel, and PDF formats',
        'Advanced Search & Filter - Quickly locate and filter employee attendance data',
        'Date & Department Filtering - Flexible report generation with date and department selection',
        'Verification Status Tracking - Monitor employee verification and enrollment progress',
        'Employee Summary Details - Comprehensive tables with login, logout, and absent counts',
        'Secure Access Control - Password-protected login with CAPTCHA security',
        'Multi-Organization Support - Customizable for different organizations and departments',
        'SLA Reporting - Service Level Agreement tracking and reporting module',
        'Tour Management - Integrated tour tracking and management features',
        'Configuration Options - Flexible system configuration for organizational needs'
      ],
      keyBenefits: [
        'Complete visibility of workforce attendance across all locations in real-time',
        'Reduces manual effort in attendance tracking and report generation',
        'Enables data-driven decision making with detailed analytics and graphs',
        'Improves compliance and accountability with geo-fence monitoring',
        'Streamlines payroll processing with accurate attendance data',
        'Supports multiple employee types and organizational structures',
        'Quick report generation and sharing with export capabilities',
        'Enhanced security with verification status tracking and access controls',
        'Scalable solution for organizations of any size',
        'Reduces administrative costs and improves operational efficiency',
        'Provides historical attendance data for trend analysis',
        'Web-based access from any location with internet connectivity'
      ],
      applicationAreas: [
        'Power Distribution Companies (DISCOMs)',
        'Government Departments and PSUs',
        'Large Corporate Organizations',
        'Educational Institutions',
        'Healthcare and Hospital Networks',
        'Manufacturing Industries',
        'Utility Services Companies',
        'Multi-location Enterprises',
        'Field Service Organizations',
        'Transportation and Logistics Companies',
        'Banking and Financial Institutions',
        'Retail Chains and Distribution Networks'
      ],
      appScreenshots: [
        {
          title: 'Login Portal',
          image: '/images/solutions/attendance/web-attendance-login.png',
          description: 'Secure login interface with CAPTCHA verification for multiple organizations'
        },
        {
          title: 'Live Dashboard',
          image: '/images/solutions/attendance/web-attendance-dashboard.png',
          description: 'Real-time statistics for total, enrolled, verified, present/absent employees with geo-fence tracking'
        },
        {
          title: 'Analytics & Reports',
          image: '/images/solutions/attendance/web-attendance-analytics.png',
          description: 'Check-in/check-out time graphs and circle-wise employee summary details with export options'
        }
      ]
    }
  },
  {
    id: 4,
    name: 'Aadhaar enabled Micro ATMs',
    category: 'banking',
    image: '/images/solutions/banking/aadhaar-micro-atm.png',
    description:
      'A hand held computer that enables banking facilities to customers in unbanked areas. It supports doorstep banking transactions using Aadhaar authentication and connects to central banking servers via GSM/GPRS.',
    features: ['Cash Withdrawals', 'Cash Deposits', 'E-KYC', 'MiniBank Statements'],
    detailedInfo: {
      overview:
        'A hand held computer that enables banking facilities to customers in unbanked areas. It is a cost-effective solution that supports banking transactions at customer’s doorstep. The AADHAAR enabled Hand Held Computer used in the system comes with an integrated printer and Finger Print Sensor/ Iris Scanner for authentication. It connects to central banking servers through GSM/GPRS and can also be integrated with other wireless features including WLAN and 4G. The rugged construction of the device and long battery life enhance its field usability.',
      moreInfoLink: {
        prefixText: 'For more details on the Hand Held Computers, please ',
        label: 'click here',
        to: '/products/handheld'
      },
      keyFeatures: [
        'Offers 4 main services - Cash Withdrawals, Cash Deposits, E-KYC and MiniBank Statements',
        'Authentication through AADHAAR, fingerprint or iris verification',
        'Supports contact/contactless smart cards and debit cards'
      ],
      keyBenefits: [
        'Enables banks to achieve total financial inclusion',
        'Best alternative to ATMs, which are not viable to install in areas with lowvolume of transactions',
        'Easy access to services for customers in remote areas'
      ]
    }
  },
  {
    id: 7,
    name: 'Loan Collection',
    category: 'banking',
    image: '/images/solutions/banking/loan-collection.png',
    description:
      'Compact and rugged Hand Held Computers with integrated printer for efficient loan collections, with real-time updates to central servers via GSM/GPRS.',
    features: ['On-site receipt generation', 'Real-time GSM/GPRS updates', 'Optional peripherals', 'Customizable workflow'],
    detailedInfo: {
      overview:
        'To improve efficiency of loan collections for Banks, Microfinance companies, Insurance companies, NBFCs and Chit Fund companies, compact and rugged Hand Held Computers with integrated printer are used for cash/cheque collection service. The system eliminates the need of paper-based processes for loan collections and updates data to central server in real-time via GSM/GPRS.',
      moreInfoLink: {
        prefixText: 'For more details on the Hand Held Computers, please ',
        label: 'click here',
        to: '/products/handheld'
      },
      keyFeatures: [
        'Use of compact, light-weight and rugged Hand Held Computers',
        'Optional peripherals include finger print sensor, iris scanner, card reader & GPS module',
        'On the spot generation of receipts upon payment by customer',
        'Captures on-site data and updates to server in real-time via GSM/GPRS',
        'Can be customized based on client specific requirements'
      ],
      keyBenefits: [
        'Eliminates manual data entry of transactions which are prone to errors',
        'Ensures transparency in all operations and no frauds',
        'Improves productivity and efficiency of cash collection operations',
        'Enhances customer trust by establishing a standard system',
        'Reconciliation happens on a real time basis for banks/entities'
      ]
    }
  },
  {
    id: 5,
    name: 'e-PDS',
    category: 'pds',
    image: '/images/solutions/pds/e-pds.png',
    description:
      'By linking each beneficiary’s record with Aadhaar, inefficiencies in the Public Distribution System (PDS) can be eliminated.',
    features: [
      'Aadhaar enabled HHC connectivity',
      'Fingerprint / OTP authentication',
      'Real-time traceability',
      'Remote fair price shop monitoring'
    ],
    detailedInfo: {
      overview:
        'By linking each beneficiary’s record with Aadhaar, inefficiencies in the Public Distribution System (PDS) can be eliminated. The solution brings in the use of a Hand Held Computer(HHC), to check the identity of the individual, provide the quota of supplies and update the information to central server.',
      keyFeatures: [
        'Aadhaar enabled HHC, with connectivity to central server',
        'Authentication based on fingerprint or one-time-password',
        'Upon successful verification, HHC retrieves entitlement details from central server',
        'Real-time untability and traceability',
        'Remote monitoring of fair price shops',
        'Real time access to transaction data'
      ]
    }
  }
];
