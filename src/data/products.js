// ================================
// Products Data - Analogics Website
// Complete product catalog with all categories
// ================================

export const productCategories = [
  // UTILITIES
  {
    id: 'utilities',
    name: 'Power Utilities',
    icon: 'FaBolt',
    description: 'Smart grid products and utility management solutions'
  },
  {
    id: 'power-automation',
    name: 'Power Automation',
    icon: 'FaNetworkWired',
    description: 'Auto-reclosers, sectionalisers and ring main units for smart grid automation'
  },
  {
    id: 'water',
    name: 'Water Utilities',
    icon: 'FaTint',
    description: 'Advanced water metering solutions'
  },
  // HARDWARE DEVICES
  {
    id: 'handheld',
    name: 'Hand Held Computers',
    icon: 'FaMobileAlt',
    description: 'Rugged handheld devices for field operations'
  },
  {
    id: 'biometric',
    name: 'Biometric and facial attendance',
    icon: 'FaFingerprint',
    description: 'Advanced biometric attendance and access control systems'
  },
  {
    id: 'printers',
    name: 'Portable Printers',
    icon: 'FaPrint',
    description: 'Compact and portable printing solutions'
  },
  // TECHNOLOGY & ENERGY
  {
    id: 'solar',
    name: 'Solar Inverters & Controllers',
    icon: 'FaSolarPanel',
    description: 'Solar water pump controllers and grid-tied inverters'
  },
  {
    id: 'iot',
    name: 'Internet of Things',
    icon: 'FaWifi',
    description: 'IoT solutions and connectivity'
  },
  // SPECIALIZED
  {
    id: 'defence',
    name: 'Defence',
    icon: 'FaShieldAlt',
    description: 'Defence-grade rugged products'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    icon: 'FaPlug',
    description: 'High quality accessories for all products'
  },
  {
    id: 'smart-meters',
    name: 'Smart Meters',
    icon: 'FaWifi',
    description: 'Smart metering devices and communication modules'
  }
];

export const products = [
  // POWER UTILITIES (10 products)
  {
    id: 1,
    name: 'AMR',
    category: 'utilities',
    image: '/images/products/amr.jpg',
    dataSheet: '/brochures/4G AMR.pdf',
    description: 'An advanced meter reading device which automatically collects data from Electronic Energy Meters using optical port and transfers the acquired data to the server with its in built 2G/ 3G communication technology.',
    detailedInfo: {
      overview: 'An advanced meter reading device which automatically collects data from Electronic Energy Meters using optical port and transfers the acquired data to the server with its in-built 2G/ 3G /4G communication technology. It is compact, easy to install in existing meter boxes and can be remotely configured or programmed.',
      keyFeatures: [
        'Compact and Easy to Install',
        'Online monitoring of vital Billing parameters and tamper events',
        'Load Control',
        'Power outage, Quality Power Management and Tamper Management',
        'Energy auditing and accounting',
        'Data collection from different energy meters irrespective of make and model.',
        'Supports any of the communication technologies including 2G/ 3G /4G',
        'Inbuilt 6 KV surge protected SMPS based Power Supply',
        '1 Open collector output for external device control and 1 Input for tamper sensing',
        'Supports MIOS compliant/ Modbus / IEC 62056-21/ DLMS Meters',
        'Integrated IEC 1107, Pact, ANSI compatible optical port for interfacing most of the reputed energy Meters.',
        'Two-way communication facilitating monitoring, control and administration',
        'Facilitates GPS time synchronization from Central server for effective energy audit.',
        'Type Tested for protection against Environment, EMI - EMC, Surge, AC Voltage, etc.'
      ],
      applicationAreas: [
        'Smart Grid Solutions',
        'Automatic Meter Reading'
      ],
      availableModels: [
        'Transparent – works on AT command',
        'Intelligent – Application Mode'
      ],
      technicalSpecs: {
        memory: {
          label: 'MEMORY',
          value: 'RAM: 8MB'
        },
        ports: {
          label: 'I/O PORTS',
          value: 'Output Ports: 1 (Open Collector)\nInput Ports: 1 (Opto Isolated)\nOther: RS232/Optical Port'
        },
        wireless: {
          label: 'WIRELESS CONNECTIVITY',
          value: 'Connectivity: GSM/GPRS/LTE(2G/3G/4G)'
        },
        power: {
          label: 'POWER',
          value: 'Input Voltage: 1-P/3-P AC with wide voltage range (90-470V)\nMax.Output Power: 2W for GSM 900MHz, 1W for GSM 1800MHz'
        },
        dimensions: {
          label: 'DIMENSIONS',
          value: 'H x W x D in mm: 185 x 95 x 43'
        },
        operatingConditions: {
          label: 'OPERATING CONDITIONS',
          value: 'Operating Temperature: 0°C to +60°C\nRelative Humidity: 5-95% (Non-condensing)'
        }
      }
    }
  },
  {
    id: 3,
    name: 'Data Concentrator Unit (DCU)',
    category: 'utilities',
    image: '/images/products/dcu.jpg',
    dataSheet: '/brochures/DCU.pdf',
    description: 'It is an intelligent device with built-in LPR modules to acquire data from Electronic Energy Meters (EEM) or Meter Interface Units (MIU) using AMR software. Its in-built 2G/3G modules then transmits data to the Data Acquisition Server Interfaced with Data Logger PC. A MIU is connected to EEM to enable wireless transmission of data from meters to DCUs. It eliminates conventional cabling requirements between meters and DCUs, thereby ensuring a quantum jump and data integrity of the system.',
    detailedInfo: {
      overview: 'It is an intelligent device with built-in LPR modules to acquire data from Electronic Energy Meters (EEM) or Meter Interface Units (MIU) using AMR software. Its in-built 2G/3G modules then transmits data to the Data Acquisition Server Interfaced with Data Logger PC. A MIU is connected to EEM to enable wireless transmission of data from meters to DCUs. It eliminates conventional cabling requirements between meters and DCUs, thereby ensuring a quantum jump and data integrity of the system.',
      keyFeatures: [
        'Compact and Easy to install',
        'Supports: GSM/GPRS wireless communication with 2G/3G technology',
        'Supports MIOS compliant/ Modbus/ IEC 62056-21/ DLMS protocols for data collection from energy meters of any make and model',
        'Common Optical Probe to interface with any Meters/ Interface can be made wireless using Meter Interface Unit (MIU)',
        'Power Outage Management',
        'Buffering of data in the event of loss of communication/ power interruption',
        'Inbuilt universal power supply (1-Phas/3-Phase) with optional battery backup',
        'Independent of field power supply (like 110V, 220V, 440V)',
        'Two way communication, facilitating monitoring, controlling and administration',
        'Configurable Digital I/O ports for Tripping and monitoring substation parameters',
        'Protection against harsh environment, EMI-EMC, Surge etc.',
        'Simultaneous data access from hundreds of Automatic Meter Readers (AMR)/ DCUs. Secure and reliable data transfer to server through VPN',
        'Server features: Meter Data Acquisition & Management Software, Remotely configurable and feasible firmware upgradation, GPS time synchronization from server for effective energy audit',
        'Online monitoring of Instantaneous parameters like V\'s, I\'s, P\'s, PF and Power Quality etc.',
        'Real-time Tamper Alerts/ Event notifications via SMS'
      ],
      applicationAreas: [
        'Smart Grid Solutions',
        'Automatic Meter Reading'
      ],
      technicalSpecs: {
        processor: {
          label: 'PROCESSOR',
          value: 'CPU: ARM 9\nSpeed: 1GHz'
        },
        os: {
          label: 'OPERATING SYSTEM',
          value: 'OS: Linux OS'
        },
        memory: {
          label: 'MEMORY',
          value: 'RAM: Upto 512 MB RAM\nExternal Memory: Upto 128 GB (SD-card)'
        },
        ports: {
          label: 'COMMUNICATION PORTS',
          value: 'USB: USB 2.0\nOther: Ethernet, RS232, RS485'
        },
        wireless: {
          label: 'WIRELESS CONNECTIVITY',
          value: 'WLAN: WLAN (IEEE802.11 b/g)\nConnectivity: GSM/GPRS\nOther: Low Power Radio Module'
        },
        ioports: {
          label: 'I/O PORTS',
          value: 'Digital Output ports: 24 (Relay Outputs)\nDigital Input ports: 24 (Opto isolated)\nAnalog Input ports: 16 (16-bit)'
        },
        dimensions: {
          label: 'DIMENSIONS',
          value: 'H x W x D in mm: 185 x 95 x 43'
        },
        operatingConditions: {
          label: 'OPERATING CONDITIONS',
          value: 'Operating Temperature: 0°C - 50°C\nRelative Humidity: 5 - 95% (Non-condensing)'
        }
      }
    }
  },
  {
    id: 55,
    name: 'Remote Terminal Unit (RTU)',
    category: 'utilities',
    image: '/images/products/rtu.jpg',
    dataSheet: '/brochures/RTU Gateway - Final.pdf',
    description: 'A rugged, microprocessor-based RTU designed for remote monitoring, control, and data acquisition in utility and industrial applications. It collects data from field sensors and meters, processes it locally, and transmits it reliably over 4G networks.',
    detailedInfo: {
      overview: 'The RTU is built for harsh and unmanned locations, offering dependable operation for power generation, transmission/distribution, substation and feeder automation, and remote asset management. It supports flexible logging intervals, on-site backup, and configurable system parameters through a user interface.',
      keyFeatures: [
        'One year internal data storage capability',
        'Onsite backup facility to pen drive / laptop',
        'LAN connectivity',
        'User-programmable logging interval of measured parameters',
        'System parameters configurable through user interface',
        '4G dual SIM connectivity'
      ],
      applicationAreas: [
        'Energy Meter Data Collection',
        'Customized Application'
      ],
      technicalSpecs: {
        processor: {
          label: 'PROCESSOR',
          value: 'CPU: 900 MHz ARM'
        },
        memory: {
          label: 'MEMORY',
          value: 'RAM: 512 MB\nFlash: 4 GB'
        },
        meterData: {
          label: 'METER DATA',
          value: 'Meter data reading through Ethernet / RS485'
        },
        communication: {
          label: 'COMMUNICATION',
          value: '4G modem with Dual SIM'
        },
        rtc: {
          label: 'REAL-TIME CLOCK',
          value: 'Display available and synchronize RTC with server'
        },
        ports: {
          label: 'PORTS',
          value: 'Ethernet: 4 ports (10/100)\nSerial: 1 x RS232, 1 x RS485\nUSB: 1 x Host, 1 x Device\nRTC: With backup'
        },
        power: {
          label: 'POWER',
          value: '63/110/230V AC (24V DC optional)'
        },
        mounting: {
          label: 'MOUNTING',
          value: 'Din rail mounting (optional)'
        },
        dimensions: {
          label: 'DIMENSIONS',
          value: 'L = 190mm x W = 160mm x H = 50mm'
        },
        operatingConditions: {
          label: 'OPERATING CONDITIONS',
          value: 'Operating Temperature: 0°C to 60°C\nOperating Humidity: 0 - 95% RH'
        },
        protocol: {
          label: 'PROTOCOL',
          value: 'Modbus protocol supported by IEC 101/104, TCP/IP'
        },
        certifications: {
          label: 'CERTIFICATIONS',
          value: 'IEC 61000-4-2, 3, 4, 6, 8 & 10\nIEC 60068-2-1, 2, 6, 14 & 27'
        }
      }
    }
  },
  {
    id: 2,
    name: 'Versatile Bluetooth Meter Reading',
    category: 'utilities',
    image: '/images/products/bluetooth-meter-reading.jpg',
    dataSheet: '/brochures/Versalite BT Mobile CMRI APP.pdf',
    description: 'Analogics has launched another innovative, compact wireless (BT) optical port with mobile app. It is capable of reading all Legacy / DLMS / Smart Energy Meters, (1Phase & 3Phase) of all makes and types in India.',
    detailedInfo: {
      overview: 'Analogics has introduced various meter reading, billing & AMR products and related software modules, over a period of 30 years. Analogics has launched another innovative, compact wireless (BT) optical port with mobile app. It is capable of reading all Legacy / DLMS / Smart Energy Meters, (1Phase & 3Phase) of all makes and types in India.',
      keyFeatures: [
        'Compact and Easy to Operate with Analogics Mobile App',
        'Supports all Smart Meters DLMS and NON DLMS,(1Phase & 3Phase)Energy Meters.',
        'Automatic Meter Reading (AMR) using the Analogics Android Mobile App with Optical Port Communication',
        'Magnetically latched to the optical port of the Meter.',
        'High capacity, built in rechargeable battery 3.6V/500 mAh.',
        'Compatible with different types of optical ports (ANSI, PACT...).',
        'Sufficient battery backup for about 12 hours of field operations.',
        'No external power is required',
        'Standard USB, "C" Type, Fast charger with LED Indication.',
        'Supports various baud rates depending on the meter type.'
      ],
      applicationAreas: [
        'Energy Meter Data Collection'
      ],
      technicalSpecs: {
        ledIndicators: {
          label: 'LED INDICATORS',
          value: 'Power On/Off, Data Transfer & Low battery.'
        },
        enclosure: {
          label: 'ENCLOSURE',
          value: 'Compact ABS Plastic'
        },
        dimensions: {
          label: 'DIMENSIONS',
          value: '45(L) x 35(W) x 55(H) mm'
        },
        switch: {
          label: 'ON/OFF SWITCH',
          value: 'Push button Switch to ON/OFF with LED.'
        },
        communication: {
          label: 'COMMUNICATION',
          value: 'Bluetooth 5.0, class 1.0 (Classic and BLE)'
        },
        weight: {
          label: 'WEIGHT',
          value: '< 100 Grams.'
        },
        warranty: {
          label: 'WARRANTY',
          value: 'One Year'
        },
        mobileApp: {
          label: 'MOBILE APPLICATION',
          value: 'Analogics Mobile App'
        }
      }
    }
  },
  {
    id: 5,
    name: 'Fault Passage Indicator',
    category: 'utilities',
    image: '/images/products/fault-passage-indicator.jpg',
    dataSheet: '/brochures/FPI-DATASHEET.pdf',
    description: 'Fault Passage Indicator is designed to detect and indicate Earth fault (phase-to-ground) and Short circuit faults (phase-to-phase) on overhead distribution lines. The unit will indicate a fault condition when current is detected above set trip current settings and fault information is instantaneously sent to the central server.',
    detailedInfo: {
      overview: 'Fault Passage Indicator is designed to detect and indicate Earth fault (phase-to-ground) and Short circuit faults (phase-to-phase) on overhead distribution lines. The unit will indicate a fault condition when current is detected above set trip current settings and fault information is instantaneously sent to the central server for further actions. This enables the operator at dispatch center to immediately identify the fault location and quick actions can be taken to recover power outage.\n\nIf the current exceeds programmed set current for programmed response time (i.e. if fault occurs for t>= response time) the fault will be indicated by flashing LED. Reset occurs automatically by preset time passage (adjustable) or manually on-site or can be done remotely from data centre. Configurable parameters need to be programmed at the time of installation thus avoiding unauthorized field tampers.',
      keyFeatures: [
        'Over current fault sensing (Detection time: 20~25 ms)',
        'Configurable trip current settings (Range: 50-600A)',
        'Fault Response Time: Adjustable, 25-250ms',
        'Auto mode configuration to detect any current fluctuations',
        'Self-powered device with internal rechargeable battery',
        'Remote monitoring of fault alarms',
        'Fault Indication Reset: Remotely/ Manually on-site/ Automatically by configured timer',
        'Configurable fault indication time i.e. flash lamp ON time (30mins/ 1hour/ 2hours/ 4 hours)',
        'Rated Voltage: 11 ~ 36 KV',
        'Rated Current: 10 ~ 200 A'
      ],
      applicationAreas: [
        'Overhead Distribution Lines',
        'Fault Detection & Monitoring'
      ],
      technicalSpecs: {
        shortCircuitCurrent: {
          label: 'SHORT CIRCUIT TRIP CURRENT',
          value: 'Adjustable, 50-600A'
        },
        earthFaultCurrent: {
          label: 'EARTH FAULT TRIP CURRENT',
          value: 'Adjustable'
        },
        responseTime: {
          label: 'FAULT RESPONSE TIME',
          value: 'Adjustable, 20-250ms'
        },
        indications: {
          label: 'FAULT INDICATIONS',
          value: 'Flash lamp & Server update\nShort Circuit: Red LED\nEarth Fault: Green LED'
        },
        resetModes: {
          label: 'RESET MODES',
          value: 'Remote Reset\nManually on-site\nAutomatic reset by configured timer'
        },
        dimensions: {
          label: 'DIMENSIONS',
          value: 'Length: 187mm\nDiameter: 126mm (Bottom), 96mm (Top)'
        },
        protection: {
          label: 'PROTECTION',
          value: 'IP65'
        },
        operatingConditions: {
          label: 'OPERATING TEMPERATURE',
          value: '0°C to 70°C'
        },
        power: {
          label: 'POWER SUPPLY',
          value: 'Rechargeable Li-ion battery'
        }
      }
    }
  },
  {
    id: 6,
    name: 'Mini DCU/4G Gateway',
    category: 'utilities',
    image: '/images/products/mini-dcu.jpg',
    description: 'A compact version of the regular DCU. Its built in LPR modules acquire data from any Electronic Energy Meters and the in built 2G/3G modules then transmit data to the Data Acquisition server. It eliminates conventional cabling requirements between meters and DCUs.',
    detailedInfo: {
      overview: 'A compact version of the regular DCU. Its built-in LPR modules acquire data from any Electronic Energy Meters and the in-built 2G/3G modules then transmit data to the Data Acquisition server. It eliminates conventional cabling requirements between meters and DCUs, thereby ensuring a quantum jump and data integrity of the system.',
      keyFeatures: [
        'Compact and thereby very convenient to use',
        'Data collection from different energy meters irrespective of make and model',
        'Remote firmware upgradation',
        'Built-in encryption for data security',
        'Supports 2G/3G/4G communication technologies',
        'Source/destination addressing',
        'Online monitoring of vital parameters like voltages, currents, energies, demands and frequencies',
        'Power outage management',
        'Inbuilt universal power supply (1-P/3-P/12-48V DC) with optional battery backup',
        'Supports two way communication, facilitating monitoring, control and administration',
        'Type tested for protection against environment, EMI-EMC, surge etc.'
      ],
      applicationAreas: [
        'Smart Grid Solutions',
        'Automatic Meter Reading'
      ],
      technicalSpecs: {
        processor: {
          label: 'PROCESSOR',
          value: 'CPU: High Speed ARM Cortex A7/A8\nSpeed: Cortex A7 @900MHz, Cortex A8 @1GHz'
        },
        os: {
          label: 'OPERATING SYSTEM',
          value: 'OS: Linux'
        },
        memory: {
          label: 'MEMORY',
          value: 'RAM: 256MB/512MB\nFlash: 8GB'
        },
        ports: {
          label: 'COMMUNICATION PORTS',
          value: 'Serial: RS-232, RS-485\nConnectivity: 2G/3G/4G\nLAN: Ethernet 10/100 Mbps\nOther: Low Power Radio Module'
        },
        power: {
          label: 'POWER',
          value: 'Universal power supply: 1-P 90-270Vac/ 3-P 90-270Vac\nBattery: 3.7V/2200mAh'
        },
        dimensions: {
          label: 'DIMENSIONS',
          value: 'H x W x D in mm: 142 x 83 x 33'
        },
        operatingConditions: {
          label: 'OPERATING CONDITIONS',
          value: 'Operating Temperature: -10°C to +60°C\nRelative Humidity: 5-95% (Non-condensing)'
        }
      }
    }
  },
  {
    id: 42,
    name: 'Totaliser',
    category: 'utilities',
    image: '/images/products/totaliser.jpg',
    dataSheet: '/brochures/Analogics_ Totaliser (1).pdf',
    description: 'The Totaliser is the Communication device to read the Energy Meter Data through RS485 network. It periodically reads the Energy Meter and refreshes the Energy values on Display. Data is stored in Memory and transmitted to the server through GSM/GPRS Communication.',
    detailedInfo: {
      overview: 'The Totaliser is the Communication device to read the Energy Meter Data through RS485 network. Totalizer is 4 no\'s RS485 port and all RS485 Ports are communicating to Energy Meters Parallel mode as per configuration. After completion of Meter reading on specified interval (15 / 30 / 60 min) display the all energy meters data in summation values as per configuration. Totalizer is periodically read the Energy Meter and refreshes the Energy values on Display. This data will be stored in Memory and will be transmitted to the server through GSM/GPRS Communication.',
      keyFeatures: [
        'Menu based system configuration',
        'Onsite back up facility to pen drive / laptop',
        'User friendly GUI / Browser PC interface',
        'To connect Analog Sensors and Digital Sensors',
        'User programmable logging interval of the measured parameters',
        'One Year data internal storage capability',
        'System Parameters configurable through user interface',
        'Wi-Fi support',
        'Data communication through 4G modem'
      ],
      applicationAreas: [
        'Energy Meter Data Collection',
        'Customized Application'
      ],
      technicalSpecs: {
        processor: {
          label: 'PROCESSING SYSTEM',
          value: 'High speed Cortex Processor with Linux OS'
        },
        meterData: {
          label: 'METER DATA',
          value: 'Meter data reading through Low Power RF Module'
        },
        display: {
          label: 'DISPLAY & KEYBOARD',
          value: 'Display: 3.5" TFT LCD colour Display\nKeyboard: Industrial grade keypad or touch pad on display'
        },
        ports: {
          label: 'PORTS & CONNECTIVITY',
          value: 'Ports: 1-RS-232 / 4-RS-485 & USB 2.0\nEthernet Port: 2 Ports'
        },
        gps: {
          label: 'GPS',
          value: 'Synchronize RTC with GPS time (Optional)'
        },
        firmware: {
          label: 'FIRMWARE UPDATE',
          value: 'USB and FOTA'
        },
        rtc: {
          label: 'REAL-TIME CLOCK',
          value: 'Resolution of 1 second with +/- 20 PPM'
        },
        dataRetrieval: {
          label: 'DATA RETRIEVAL',
          value: 'RS-232 Port / Pen Drive / LAN port'
        },
        power: {
          label: 'POWER & MOUNTING',
          value: 'Power: Universal AC Power\nMounting: Din Rail Mounting'
        },
        dimensions: {
          label: 'DIMENSIONS',
          value: 'L = 190mm x W = 160mm x H = 50mm'
        },
        operatingConditions: {
          label: 'OPERATING CONDITIONS',
          value: 'Operational Temperature: 0°C to 60°C\nOperating Humidity: 0 - 95% RH'
        }
      }
    }
  },
  {
    id: 43,
    name: 'Intelligent Interface Unit (IIU)',
    category: 'utilities',
    image: '/images/products/intelligent-interface-unit.jpg',
    dataSheet: '/brochures/Intelligent Interface Unit.pdf',
    description: 'An industrial grade Intelligent Interface Unit (IIU) with 2-Ch relay module, 8-ch digital input, RS485 bus with Modbus protocol. Features embedded protection circuits such as power isolation and TVS diode, with ABS enclosure for industrial control and monitoring.',
    detailedInfo: {
      overview: 'This is an industrial grade Intelligent Interface unit (IIU) with 2 - Ch relay module, with 8-ch digital input, RS485 bus with Modbus protocol. It features embedded protection circuits such as power isolation and TVS diode, etc. It also comes with an ABS enclosure. Due to its fast communication, stability, reliability, and safety, it is an ideal choice for industrial control and monitoring applications.',
      keyFeatures: [
        'ABS plastic enclosure, easy to install, safe to use',
        'Multiple LEDs for indicating the device status of signals',
        'Highly reliable relays, contact rating: ≤10A 250VAC/30VDC',
        'Adopts dedicated relay driver chip, with built-in fly back diode protection',
        'Onboard power supply isolation, provides stable isolated voltage, needs no extra power supply for the isolated terminal',
        'Onboard opto coupler isolation, prevent the relay from being interfered by high-voltage circuit',
        'Supports passive and active digital input, with bi-directional opto coupler isolation, built in debouncing algorithm'
      ],
      applicationAreas: [
        'Industrial Control',
        'Industrial Monitoring',
        'Smart Grid Solutions',
        'Automation'
      ],
      technicalSpecs: {
        power: {
          label: 'POWER SUPPLY',
          value: '7~36V DC'
        },
        communication: {
          label: 'COMMUNICATION',
          value: 'Interface: RS485 / Wireless Mesh\nFormat: 9600, 8, N, 1\nProtocol: Standard Modbus protocol\nRS485 Address: 1~255'
        },
        relay: {
          label: 'RELAY',
          value: 'Channels: 2\nContact Form: 1NO\nContact Rating: ≤10A 250VAC/30VDC'
        },
        digitalInput: {
          label: 'DIGITAL INPUT',
          value: '8DI, 5~36V, passive / active input (NPN or PNP), built-in bi-directional opto coupler isolation'
        },
        ledIndicators: {
          label: 'LED INDICATORS',
          value: 'TXD: TX indicator, lights up when sending data\nRXD: RX indicator, lights up when receiving data'
        }
      }
    }
  },
  {
    id: 7,
    name: 'RF Nodes',
    category: 'smart-meters',
    image: '/images/products/rf-nodes.jpg',
    description: 'IoT modules based on 6LoWPAN (sub-Gig & 2.4GHz bands) find their usage in wide range of Low power Mesh (or Canopy) networking applications like Home/Office/Factory automation, BMS, AMR/AMI/Smart Grid solutions, Smart city solutions etc.',
    detailedInfo: {
      overview: 'IoT modules based on 6LoWPAN (sub-Gig & 2.4GHz bands) find their usage in wide range of Low power Mesh (or Canopy) networking applications like Home/Office/Factory automation, BMS, AMR/AMI/Smart Grid solutions, Smart city solutions etc. The module\'s slim form factor makes it an ideal add-on for enhancing the intelligence of your device/ solution.',
      keyFeatures: [
        'The protocol stack is based on standard IEEE 802.15.4g (IPv6)',
        'Supports Peer-to-Peer (P2P), Point-to-Multipoint (P2MP) and Mesh topologies',
        '100 meters of LoS communication distance (can be extended using high power external antenna)',
        'Built-in Cryptographic Acceleration for AES 128/256 for data security',
        'Interoperability of the network with open source',
        'IPv6 having 128 bit addressing, facilitates large number of nodes',
        'Compatible for future Smart Grid & IoT (Internet of Things)',
        'Remote firmware upgradation',
        'Acknowledgment mode communication with retries',
        'Power saving modes for low power applications',
        'Source/ Destination addressing',
        'Unicast and Broadcast communication',
        'Digital I/O line support',
        'Default configuration for ready to use in Automated/Drive by Meter Reading',
        'Remote control, remote measurement system, Access control, Data Collection, Identification system, etc.'
      ],
      applicationAreas: [
        'Smart Grid Solutions',
        'IoT Applications',
        'Home/Office/Factory Automation',
        'AMR/AMI Solutions'
      ],
      availableModels: [
        '2.4GHz band',
        'Sub-GHz'
      ],
      technicalSpecs: {
        power: {
          label: 'POWER',
          value: 'Supply Voltage: 1.8 to 3.6 V\nTransmit Current (at +19dBm): 131mA\nReceive Current: 25mA\nPower-down Count: <10 µA'
        },
        rf: {
          label: 'RF SPECIFICATIONS',
          value: 'Frequency: 2.4 GHz\nMaximum Transmit power output: 19 dBm\nRF Data Rate: 50 kbps\nModulation: 2GFSK\nReceiver Sensitivity: -100.7 dBm'
        },
        communication: {
          label: 'COMMUNICATION',
          value: 'Serial Interface Data Rate: Up to 115200 baud\nCommunication Provision: RS232 (TTL level)'
        },
        network: {
          label: 'NETWORK',
          value: 'Supported Network Topologies: Peer-to-Peer(P2P), Point to Multipoint(P2MP) & Mesh\nNumber of Channels: 10\nAddressing Options: PAN ID, Channel and addresses'
        },
        antenna: {
          label: 'ANTENNA',
          value: 'Antenna Options: Chip Antenna, Wire Antenna Helical\nAntenna Connector: MMCX (for external antenna)'
        },
        interface: {
          label: 'INTERFACE',
          value: 'Interface Connector: 10 pin receptacles, 2.00mm pitch'
        },
        dimensions: {
          label: 'DIMENSIONS',
          value: 'Dimensions (mm): 31x28'
        },
        operatingConditions: {
          label: 'OPERATING CONDITIONS',
          value: 'Operating Temperature: -40 to 85 °C'
        }
      }
    }
  },
  {
    id: 8,
    name: 'Smart Check',
    category: 'utilities',
    image: '/images/products/smart-check.jpg',
    description: 'Smart Check is a portable device based on state of the art technology in power and energy measurement. Smart Check is a portable HHC solution suitable for 1 phase and 3 phase electricity meter installations and accuracy testing.',
    detailedInfo: {
      overview: 'Smart Check is a portable device based on state of the art technology in power and energy measurement. Smart Check is a portable HHC solution suitable for 1 phase and 3 phase electricity meter installations and accuracy testing. All the instantaneous values are simultaneously displayed and vector diagram makes it is easy to detect wiring faults in the voltage and circuits of meter installation.\n\nBy entering all relevant parameters like Active / Reactive and the number of pulses, the system can perform error measurement on electricity meters. Scanning head helps in detecting calibration pulses of meter for energy calculation.\n\nBuilt in thermal printer is available in HHC for printing test report on site. Also a rechargeable battery is available in HHC to recharge the device at any time in the field. User friendly menu driven BCS helps to analyse each meter status including instant data with vector display.',
      keyFeatures: [
        'Easy and user friendly operation with graphs and reports',
        'Interacts with energy meters and helps in installation and accuracy checking',
        'All instant values are displayed along with vector diagram',
        'Three phase Current measurement up to 60 Amps with error compensated clamp on CTs.',
        'Accuracy class 0.2 with compensated clamp on CTs',
        'Different modes of testing available in Pulse, Duration and Snap mode.o',
        'Mini clamp-on CT for testing meter without supply interruption',
        'Power and energy measurement of active, reactive and apparent energy',
        'Error measurement by entering all relevant parameter like meter constant and number of pulses.',
        'GUI based data management software for evaluation of the test results and test report generation',
        'Presentation of the measuring results and reports printing using integrated thermal printer at field',
        'Automatic alerts on display for wrong connections or missing currents',
        'A complete and light weight meter test set',
        'Windows based Base Computer Software (BCS) for data upload, analysis and reporting',
        'The curve display for voltage and current serves for analysing the signal quality. Two channels can be measured and displayed simultaneously (optional)',
        'Measures harmonics in voltage and current (optional)'
      ],
      applicationAreas: [
        'Meter Installation & Testing',
        'Energy Measurement & Auditing'
      ],
      technicalSpecs: {
        electrical: {
          label: 'ELECTRICAL',
          value: 'Voltage: 240VAC (-30% / +20 %)\nCurrent: 200mA to 60Amps with clamp on CT mode\nFrequency: 50 Hz +/- 5 Hz\nPower Factor: Zero lag – Unity – Zero lead\nVoltage Burden: Less than 10VA\nCurrent Burden: Less than 1VA\nAccuracy (with clamp on CT mode): 0.2'
        },
        display: {
          label: 'DISPLAY & KEYPAD',
          value: 'Display: Colour graphic display with backlight\nKeypad: Alpha numeric keypad with separate keys for alphabets & numbers\nVoltage: 1/100 V\nCurrent: 1/1000 A\nPhase Angle: 1/100 degree\nFrequency: 1/100 Hz\nPower: 1/1000 kW/KVA/KVAR\nEnergy: 1/1000 Wh/VARh\nError: 1/100%'
        },
        ports: {
          label: 'COMMUNICATION PORTS',
          value: 'USB: USB 2.0'
        },
        power: {
          label: 'POWER',
          value: 'Universal power supply: 1-P 90-270Vac/ 3-P 90-270Vac\nBattery: 24 (opto isolated)'
        },
        memory: {
          label: 'MEMORY',
          value: 'No. of Testing results: >10000 test results along with meter, consumer information'
        },
        dimensions: {
          label: 'DIMENSIONS',
          value: 'L x W x H in mm: 240 x 80 x 80\nWeight: < 1kg'
        },
        operating: {
          label: 'OPERATING SPECIFICATIONS',
          value: 'Standards: IS13779, IS12346, IEC60687\nPulse Scanner: LED Pulse for Electronic Meters'
        }
      }
    }
  },
  // POWER AUTOMATION (4 products)
  {
    id: 49,
    name: 'Auto-Reclosers',
    category: 'power-automation',
    image: '/images/products/auto-recloser.jpg',
    description: 'An Auto recloser, or automatic circuit recloser (ACR), is a self-controlled device that automatically interrupts and resets an alternating current with a pre-determined sequence of opening and reclosing followed by resetting (or) Lockout.',
    detailedInfo: {
      overview: 'An Auto recloser, or automatic circuit recloser (ACR), is a self-controlled device in the event of fault. Auto recloser will automatically interrupting and resetting an alternating current with a pre-determined sequence of opening and reclosing followed by resetting (or) Lockout. The time and current setting of Auto-Reclosers are done to ensure that it interrupts the fault current for a pre determined sequence of open and reclosing. This cycle can be repeated 3 times, lockout typically on the fourth trip. The auto reclosing feature is useful in avoiding the manual intervention and long period interruption in case of temporary faults.',
      keyFeatures: [
        'Automatic fault interruption and reclosing sequence',
        'Pre-determined sequence of opening and reclosing followed by Lockout',
        'Cycle can be repeated 3 times, lockout on fourth trip',
        'Solid dielectric / SF6 / Air insulation',
        'Variety of protection and control features',
        'Communicates with a SCADA control center',
        'Avoids manual intervention during temporary faults',
        'Reduces long period interruption in case of temporary faults'
      ],
      benefits: [
        'Reduces power outage time by 90% by detecting and isolating the faulty section'
      ],
      applicationAreas: [
        'Distribution Network Fault Management',
        'Smart Grid Solutions',
        'SCADA Integrated Power Networks',
        'Substation Automation'
      ],
      technicalSpecs: {
        insulation: {
          label: 'INSULATION TYPE',
          value: 'Solid Dielectric / SF6 / Air'
        },
        protection: {
          label: 'PROTECTION FEATURES',
          value: 'Over Current, Earth Fault, Auto-Reclose'
        },
        communication: {
          label: 'COMMUNICATION',
          value: 'SCADA Compatible'
        },
        reclosingCycles: {
          label: 'RECLOSING CYCLES',
          value: 'Up to 3 reclosing operations; Lockout on 4th trip'
        }
      }
    }
  },
  {
    id: 50,
    name: 'Sectionalisers',
    category: 'power-automation',
    image: '/images/products/sectionaliser.jpg',
    description: 'A Sectionaliser is an automatic switch, installed downstream of a Recloser/Circuit Breaker that isolates the fault section in coordination with auto-recloser by counting the interruptions created by a recloser during a fault sequence.',
    detailedInfo: {
      overview: 'A Sectionaliser is an automatic switch, installed downstream of a Recloser/Circuit Breaker and the Sectionaliser will isolate the fault section in coordination with auto-recloser by counting the interruptions created by a recloser during a fault sequence. It has capability to open automatically based on the \'fault count\' setting. It counts as \'1\' if it senses the \'fault current on load side and no supply at source side\' and consequently count 2 and 3. Each tripping of the Auto Recloser under persisting fault conditions is counted as one count.',
      keyFeatures: [
        'Automatic fault section isolation',
        'Coordinates with upstream Auto Recloser / Circuit Breaker',
        'Fault count-based automatic opening',
        'Counts fault current on load side with no supply at source side',
        'Each Auto Recloser trip counted as one fault count'
      ],
      functions: [
        'Fault Isolation',
        'Minimizing Outages',
        'Coordination with Auto Recloser / Circuit Breakers'
      ],
      types: [
        'Automatic Sectionalizers',
        'Manual Sectionalizers'
      ],
      applicationAreas: [
        'Distribution Network Fault Isolation',
        'Smart Grid Coordination',
        'Downstream Protection Systems'
      ],
      technicalSpecs: {
        operation: {
          label: 'OPERATION MODE',
          value: 'Automatic / Manual'
        },
        coordination: {
          label: 'COORDINATION',
          value: 'Works downstream of Recloser / Circuit Breaker'
        },
        faultCount: {
          label: 'FAULT COUNT SETTING',
          value: 'Configurable; Opens on reaching preset fault count'
        }
      }
    }
  },
  {
    id: 51,
    name: 'Ring Main Unit (RMU)',
    category: 'power-automation',
    image: '/images/products/ring-main-unit.jpg',
    description: 'A Ring Main Unit (RMU) is a type of electrical distribution equipment commonly used in medium voltage networks to provide reliable power distribution and enhance system protection.',
    detailedInfo: {
      overview: 'A Ring Main Unit (RMU) is a type of electrical distribution equipment commonly used in medium voltage networks to provide reliable power distribution and enhance system protection. It allows for the creation of a ring-type network, where electricity can flow in both directions, ensuring continued supply even if one part of the network fails.',
      keyFeatures: [
        'Fault Isolation',
        'Ring Configuration – electricity can flow in both directions',
        'Protection and Switching',
        'Compact Design',
        'Safe and Automated Operation',
        'Ensures continued supply even if one part of the network fails'
      ],
      applicationAreas: [
        'Medium Voltage Distribution Networks',
        'Urban Power Distribution',
        'Industrial Power Supply',
        'Smart Grid Protection'
      ],
      technicalSpecs: {
        voltage: {
          label: 'VOLTAGE LEVEL',
          value: 'Medium Voltage Networks'
        },
        configuration: {
          label: 'NETWORK CONFIGURATION',
          value: 'Ring-type network with bi-directional power flow'
        },
        features: {
          label: 'KEY FEATURES',
          value: 'Fault Isolation\nProtection and Switching\nCompact Design\nSafe and Automated Operation'
        }
      }
    }
  },
  {
    id: 56,
    name: 'RTU Panel for Substation',
    category: 'power-automation',
    image: '/images/products/RTU Panel.jpg',
    description: 'RTU panel designed for substation automation, integrating monitoring, control, and communication for reliable grid operations.',
    detailedInfo: {
      overview: 'A substation RTU panel that supports IEC 61850-compliant automation with SCADA integration, remote control, and fault diagnostics. It enables seamless interoperability with legacy RTUs to modernize substations without downtime.',
      keyFeatures: [
        'IEC 61850-compliant automation',
        'Integrated SCADA for real-time monitoring and control',
        'Remote diagnostics and fault reporting',
        'Supports phased modernization with legacy RTUs',
        'Rugged panelized enclosure for substation environments'
      ],
      applicationAreas: [
        'Substation Automation',
        'Distribution Network Control',
        'Remote Monitoring and Diagnostics'
      ]
    }
  },

  // WATER UTILITIES (4 products)
  {
    id: 11,
    name: 'Ultrasonic Water Meter 15 MM',
    category: 'water',
    image: '/images/products/ultrasonic-water-meter.jpg',
    dataSheet: '/brochures/Ultrasonic water meter.pdf',
    description: 'Analogics smart water meter integrate the state of the art ultrasonic sensing technology with Low - power RF based communication to offer the best solution for Domestic as well as commercial metering requirements.',
    detailedInfo: {
      overview: 'Analogics smart water meter integrate the state of the art ultrasonic sensing technology with Low - power RF based communication to offer the best solution for Domestic as well as commercial metering requirements. It is fully integrated design with no moving parts ensure extremely long maintenance free operation periods. With virtually no obstructions along the flow of water, the head pressure loss is almost negligible, reducing overall delivery cost.\n\nA starting flow rate and very high measuring accuracy allows for detection of leaks and tampers, thereby helping minimum water loss.',
      keyFeatures: [
        'Compact, low cost & Rugged',
        '+/- 2% accuracy',
        'Leak and Tamper detection',
        'No moving parts',
        'Long life and low maintenance',
        'Low pressure drop',
        'Insensitive to sand and other particles',
        'No metering of Air'
      ],
      meterEvaluation: [
        'Pressure Loss: Causes increased pumping cost and time',
        'Range: Water meters can only measure certain range of flow speeds accurately. They tend to register water flow at low speeds',
        'Accuracy: Pinpoint accuracy implies increased revenue protection',
        'Maintenance: Due to Customers/meter ratio replacement; replacement in addition to cost of replacement means a meter of low maintenance & longer life is preferred',
        'Cost: Price of water meters vary and installation of manhours, would stay away from high initial costs even if there are other significant advantages.'
      ],
      availableAlarms: [
        'Over Flow',
        'Reverse Flow detection',
        'Water leak detection',
        'Non use detection',
        'Low battery voltage detection',
        'Temperature sensing',
        'Bubble detection'
      ],
      readingMethods: [
        'Manual - Using HHU (Hand Held Unit)',
        'Semi - Automatic : Drive by solution',
        'Fully Automatic : Network AMR'
      ],
      applicationAreas: [
        'Domestic/Commercial water metering'
      ],
      technicalSpecs: {
        flowRange: {
          label: 'FLOW RANGE',
          value: 'R200/R400'
        },
        accuracy: {
          label: 'ACCURACY',
          value: '±2% (class B)'
        },
        temperature: {
          label: 'WORKING TEMPERATURE RANGE',
          value: '-10°C to 70°C'
        },
        pressure: {
          label: 'WORKING PRESSURE',
          value: '1.6 Mpa'
        },
        ipSealing: {
          label: 'IP68 SEALING',
          value: 'Yes'
        },
        power: {
          label: 'POWER SOURCE',
          value: 'Internal Li-Ion Battery'
        },
        batteryLife: {
          label: 'BATTERY LIFE',
          value: '8+ years'
        },
        pulseOutput: {
          label: 'PULSE OUTPUT FOR TELEMETERING DEVICES',
          value: 'Yes'
        },
        dataLogger: {
          label: 'DATALOGGER',
          value: 'Yes'
        },
        tempCompensation: {
          label: 'TEMPERATURE COMPENSATION',
          value: 'Yes'
        },
        display: {
          label: 'LCD DISPLAY',
          value: 'Yes'
        },
        dataLoss: {
          label: 'NO DATA LOSS IN CASE OF END-OF-BATTERY LIFE',
          value: 'Yes (non-volatile flash memory)'
        },
        specifications: {
          label: 'TECHNICAL SPECIFICATIONS (15MM)',
          value: 'Nominal Diameter DN (mm): 15\nQ3/Q1: R200\nPermanent flow rate (Q3 in m³/h): 2.5\nStarting flow (l/h): 2\nMinimum flow rate (Q1 in l/h): 12.5\nOverload flow rate (Q4 in m³/h): 3.125\nNominal pressure (bar): 16\nHead loss class (bar): 0.25\nSpool material: Industrial grade Nylon (Polyamide)\nPipe fitting interface: Push fit/ Threaded'
        }
      }
    }
  },
  {
    id: 12,
    name: 'Ultrasonic Water Meter 20 MM',
    category: 'water',
    image: '/images/products/ultrasonic-water-meter-20mm.jpg',
    dataSheet: '/brochures/Ultrasonic water meter.pdf',
    description: 'Analogics smart water meter integrate the state of the art ultrasonic sensing technology with Low - power RF based communication to offer the best solution for Domestic as well as commercial metering requirements.',
    detailedInfo: {
      overview: 'Analogics smart water meter integrate the state of the art ultrasonic sensing technology with Low - power RF based communication to offer the best solution for Domestic as well as commercial metering requirements. It is fully integrated design with no moving parts ensure extremely long maintenance free operation periods. With virtually no obstructions along the flow of water, the head pressure loss is almost negligible, reducing overall delivery cost.\n\nA starting flow rate and very high measuring accuracy allows for detection of leaks and tampers, thereby helping minimum water loss.',
      keyFeatures: [
        'Compact, low cost & Rugged',
        '+/- 2% accuracy',
        'Leak and Tamper detection',
        'No moving parts',
        'Long life and low maintenance',
        'Low pressure drop',
        'Insensitive to sand and other particles',
        'No metering of Air'
      ],
      meterEvaluation: [
        'Pressure Loss: Causes increased pumping cost and time',
        'Range: Water meters can only measure certain range of flow speeds accurately. They tend to register water flow at low speeds',
        'Accuracy: Pinpoint accuracy implies increased revenue protection',
        'Maintenance: Due to Customers/meter ratio replacement; replacement in addition to cost of replacement means a meter of low maintenance & longer life is preferred',
        'Cost: Price of water meters vary and installation of manhours, would stay away from high initial costs even if there are other significant advantages.'
      ],
      availableAlarms: [
        'Over Flow',
        'Reverse Flow detection',
        'Water leak detection',
        'Non use detection',
        'Low battery voltage detection',
        'Temperature sensing',
        'Bubble detection'
      ],
      readingMethods: [
        'Manual - Using HHU (Hand Held Unit)',
        'Semi - Automatic : Drive by solution',
        'Fully Automatic : Network AMR'
      ],
      applicationAreas: [
        'Domestic/Commercial water metering'
      ],
      technicalSpecs: {
        flowRange: {
          label: 'FLOW RANGE',
          value: 'R200/R400'
        },
        accuracy: {
          label: 'ACCURACY',
          value: '±2% (class B)'
        },
        temperature: {
          label: 'WORKING TEMPERATURE RANGE',
          value: '-10°C to 70°C'
        },
        pressure: {
          label: 'WORKING PRESSURE',
          value: '1.6 Mpa'
        },
        ipSealing: {
          label: 'IP68 SEALING',
          value: 'Yes'
        },
        power: {
          label: 'POWER SOURCE',
          value: 'Internal Li-Ion Battery'
        },
        batteryLife: {
          label: 'BATTERY LIFE',
          value: '8+ years'
        },
        pulseOutput: {
          label: 'PULSE OUTPUT FOR TELEMETERING DEVICES',
          value: 'Yes'
        },
        dataLogger: {
          label: 'DATALOGGER',
          value: 'Yes'
        },
        tempCompensation: {
          label: 'TEMPERATURE COMPENSATION',
          value: 'Yes'
        },
        display: {
          label: 'LCD DISPLAY',
          value: 'Yes'
        },
        dataLoss: {
          label: 'NO DATA LOSS IN CASE OF END-OF-BATTERY LIFE',
          value: 'Yes (non-volatile flash memory)'
        },
        specifications: {
          label: 'TECHNICAL SPECIFICATIONS (20MM)',
          value: 'Nominal Diameter DN (mm): 20\nQ3/Q1: R400\nPermanent flow rate (Q3 in m³/h): 4\nStarting flow (l/h): 2\nMinimum flow rate (Q1 in l/h): 10\nOverload flow rate (Q4 in m³/h): 5\nNominal pressure (bar): 16\nHead loss class (bar): 0.4\nSpool material: Brass\nPipe fitting interface: Threaded'
        }
      }
    }
  },
  {
    id: 13,
    name: 'Ultrasonic Water Meter 25 MM',
    category: 'water',
    image: '/images/products/ultrasonic-water-meter-25mm.jpg',
    dataSheet: '/brochures/Ultrasonic water meter.pdf',
    description: 'Analogics smart water meter integrate the state of the art ultrasonic sensing technology with Low - power RF based communication to offer the best solution for Domestic as well as commercial metering requirements.',
    detailedInfo: {
      overview: 'Analogics smart water meter integrate the state of the art ultrasonic sensing technology with Low - power RF based communication to offer the best solution for Domestic as well as commercial metering requirements. It is fully integrated design with no moving parts ensure extremely long maintenance free operation periods. With virtually no obstructions along the flow of water, the head pressure loss is almost negligible, reducing overall delivery cost.\n\nA starting flow rate and very high measuring accuracy allows for detection of leaks and tampers, thereby helping minimum water loss.',
      keyFeatures: [
        'Compact, low cost & Rugged',
        '+/- 2% accuracy',
        'Leak and Tamper detection',
        'No moving parts',
        'Long life and low maintenance',
        'Low pressure drop',
        'Insensitive to sand and other particles',
        'No metering of Air'
      ],
      meterEvaluation: [
        'Pressure Loss: Causes increased pumping cost and time',
        'Range: Water meters can only measure certain range of flow speeds accurately. They tend to register water flow at low speeds',
        'Accuracy: Pinpoint accuracy implies increased revenue protection',
        'Maintenance: Due to Customers/meter ratio replacement; replacement in addition to cost of replacement means a meter of low maintenance & longer life is preferred',
        'Cost: Price of water meters vary and installation of manhours, would stay away from high initial costs even if there are other significant advantages.'
      ],
      availableAlarms: [
        'Over Flow',
        'Reverse Flow detection',
        'Water leak detection',
        'Non use detection',
        'Low battery voltage detection',
        'Temperature sensing',
        'Bubble detection'
      ],
      readingMethods: [
        'Manual - Using HHU (Hand Held Unit)',
        'Semi - Automatic : Drive by solution',
        'Fully Automatic : Network AMR'
      ],
      applicationAreas: [
        'Domestic/Commercial water metering'
      ],
      technicalSpecs: {
        flowRange: {
          label: 'FLOW RANGE',
          value: 'R200/R400'
        },
        accuracy: {
          label: 'ACCURACY',
          value: '±2% (class B)'
        },
        temperature: {
          label: 'WORKING TEMPERATURE RANGE',
          value: '-10°C to 70°C'
        },
        pressure: {
          label: 'WORKING PRESSURE',
          value: '1.6 Mpa'
        },
        ipSealing: {
          label: 'IP68 SEALING',
          value: 'Yes'
        },
        power: {
          label: 'POWER SOURCE',
          value: 'Internal Li-Ion Battery'
        },
        batteryLife: {
          label: 'BATTERY LIFE',
          value: '8+ years'
        },
        pulseOutput: {
          label: 'PULSE OUTPUT FOR TELEMETERING DEVICES',
          value: 'Yes'
        },
        dataLogger: {
          label: 'DATALOGGER',
          value: 'Yes'
        },
        tempCompensation: {
          label: 'TEMPERATURE COMPENSATION',
          value: 'Yes'
        },
        display: {
          label: 'LCD DISPLAY',
          value: 'Yes'
        },
        dataLoss: {
          label: 'NO DATA LOSS IN CASE OF END-OF-BATTERY LIFE',
          value: 'Yes (non-volatile flash memory)'
        },
        specifications: {
          label: 'TECHNICAL SPECIFICATIONS (25MM)',
          value: 'Nominal Diameter DN (mm): 25\nQ3/Q1: R400\nPermanent flow rate (Q3 in m³/h): 4\nStarting flow (l/h): 2\nMinimum flow rate (Q1 in l/h): 10\nOverload flow rate (Q4 in m³/h): 5\nNominal pressure (bar): 16\nHead loss class (bar): 0.4\nSpool material: Brass\nPipe fitting interface: Threaded'
        }
      }
    }
  },
  {
    id: 54,
    name: 'Smart Starter',
    category: 'water',
    image: '/images/products/smart-starter.jpg',
    description: 'A smart motor pump management solution with metering, monitoring, and protection features for water utility and pumping applications.',
    detailedInfo: {
      overview: 'Smart Starter is a smart motor pump management solution designed for reliable operation, remote monitoring, and protection. It supports local and remote control, provides operational insights through metering/monitoring, and is built for rugged field deployments.',
      keyFeatures: [
        'Local and remote operation',
        'Metering and operational monitoring',
        'Rugged enclosure for field deployment',
        'Protection features for safer pump operation',
        'Suitable for integration with broader automation / telemetry systems'
      ],
      applicationAreas: [
        'Water utility pumping and distribution',
        'Pump monitoring and control',
        'Remote operation and diagnostics'
      ],
      technicalSpecs: {
        powerRange: {
          label: 'POWER RANGE',
          value: '0.5 HP to 15 HP'
        },
        enclosure: {
          label: 'ENCLOSURE',
          value: 'IP65 (field-ready)'
        },
        control: {
          label: 'CONTROL',
          value: 'Local + Remote operation'
        },
        monitoring: {
          label: 'MONITORING',
          value: 'Metering and operational parameters monitoring'
        }
      }
    }
  },

  // HAND HELD COMPUTERS (8 products)
  {
    id: 14,
    name: 'Point of Sale Terminal (POS)',
    category: 'handheld',
    image: '/images/products/pos-terminal.jpg',
    dataSheet: '/brochures/POS Datasheet for Fertilizers i9100.pdf',
    gemLink: 'https://mkp.gem.gov.in/point-sale-terminal-v4/point-sale-terminal/p-5116877-48145399100-cat.html#variant_id=5116877-48145399100',
    description: 'Android POS with Integrated L1 Finger Print Sensor (FPS) and 2" Thermal Printer. It is available in Android OS and comes with SDK (s) for printer and FPS that helps in rapid deployment of custom applications.',
    detailedInfo: {
      overview: 'Android POS with Integrated L1 Finger Print Sensor (FPS) and 2" Thermal Printer. It is available in Android OS and comes with SDK (s) for printer and FPS that helps in rapid deployment of custom applications. With in-built features like 5.5 inch HD, GPS/GLONASS for location tracking, 5MP Auto Focus Camera and wireless like 2G/3G/4G, Bluetooth and WiFi. The terminal can be deployed for many applications in the field.',
      keyFeatures: [
        '5.5 Inch LED-Blacklit with Multi-Touch',
        'Combined With 4G/3G/2G WIFI & Bluetooth',
        'PCI 6.X Security Standards',
        'GPS/GLONASS L1 Finger Print Scanner',
        'Magnetic Stripe Card / IC Cards (Contact/Contactless) / QR code Payments'
      ],
      applicationAreas: [
        'Authentication Applications (DBT Fertilizer Subsidy, Rural Banking, Micro Finance, Financial Inclusion, aPOC, PDS)',
        'Customized Application'
      ],
      technicalSpecs: {
        os: {
          label: 'OS',
          value: 'Android 12'
        },
        cpu: {
          label: 'CPU',
          value: '64-bit Processor & Quad Core 2.0 GHZ'
        },
        memory: {
          label: 'MEMORY',
          value: 'RAM: 2GB (3GB Optional)\nFlash: 32GB'
        },
        display: {
          label: 'DISPLAY',
          value: '5.5-inch HD, 1280 x 720, Multi-touch'
        },
        simSam: {
          label: 'SIM + SAM',
          value: '2 x SIM Slot + 1 x SAM Slot\n1 x SIM Slot + 2 x SAM Slot (Optional)'
        },
        connectivity: {
          label: 'TERMINAL CONNECTIVITY',
          value: 'GSM Network 2G/3G/4G/LTE with GPS, GPRS, Wi-Fi & Bluetooth'
        },
        positioning: {
          label: 'POSITIONING',
          value: 'GPS & GLONASS, Galileo & Supports A-GPS'
        },
        antenna: {
          label: 'ADD-ON ANTENNA',
          value: 'Optional'
        },
        printer: {
          label: 'PRINTER',
          value: 'High-speed 2" Thermal Printer.\nPaper Roll Width/Diameter: 58mm/40mm'
        },
        peripheralPorts: {
          label: 'PERIPHERAL PORTS',
          value: '1 x USB TYPE-C'
        },
        camera: {
          label: 'CAMERA',
          value: 'Rear: 5MP AF, Read 1D&2D Barcode,\nFront 2MP FF (5MP Optional)'
        },
        audio: {
          label: 'AUDIO',
          value: 'Built-in Speaker Audio Play, Recorder'
        },
        buttons: {
          label: 'BUTTONS',
          value: '1 x Power ON/OFF Vol +/- button'
        },
        fingerprint: {
          label: 'FINGERPRINT',
          value: 'L1 Fingerprint Scanner. (As per STQC Specifications).'
        },
        compliance: {
          label: 'ENVIRONMENT HEALTH & SAFETY DURABILITY, ELECTRICAL, EMI/EMC COMPLIANCE',
          value: 'As per STQC Specifications'
        },
        battery: {
          label: 'BATTERY',
          value: 'Rechargeable Battery, 3.8V, 5200mAh'
        },
        dimensions: {
          label: 'DIMENSION & WEIGHT',
          value: '188mm x 87mm x 61mm, 500g Approx'
        },
        certification: {
          label: 'CERTIFICATION',
          value: 'PCI PTS 6.x, TQM, EMV L1 & L2, EMV Contactless L1, Rupay & STQC, MasterCard Contactless, Visa PayWave, CE, FCC & RoHS etc.'
        }
      }
    }
  },
  {
    id: 15,
    name: 'Spot Billing Machine with (IR& IrDA)',
    subtitle: 'Smart POS Terminal',
    modelNo: 'i9100',
    category: 'handheld',
    image: '/images/products/spot-billing-ir-irda.jpg',
    dataSheet: '/brochures/SBM Datasheet for TGSPDCL-i9100.pdf',
    description: 'Android POS with Integrated IR & IRDA Port and 2" Thermal Printer. Available in Android OS with SDK(s) for printer and built-in features like 5.5 display, GPS/GLONASS, 5MP Auto Focus Camera and wireless features like 3G/4G, Bluetooth and WiFi.',
    detailedInfo: {
      overview: 'Android POS with Integrated IR & IRDA Port and 2" Thermal Printer. It is available in Android OS and comes with SDK(s) for printer and Built-in features like 5.5 display, GPS/GLONASS for location tracking, 5MP Auto Focus Camera and wireless features like 3G/4G, Bluetooth and WiFi. The terminal can be deployed for many applications in the field.',
      keyFeatures: [
        '5.5 Inch LED-Backlit with Multi-Touch',
        'Combined With 4G/3G, WIFI & Bluetooth',
        'Bar Code Capturing Facility',
        'QR Code Capturing Facility',
        'Image Capturing Facility'
      ],
      applicationAreas: [
        'Authentication Applications (Aadhaar/Non-Aadhaar)',
        'DBT Fertilizer Subsidy',
        'Rural Banking',
        'Micro Finance',
        'Financial Inclusion',
        'eKYC',
        'PDS',
        'Customized Application'
      ],
      technicalSpecs: {
        os: {
          label: 'OPERATING SYSTEM',
          value: 'Android 10'
        },
        processor: {
          label: 'PROCESSOR',
          value: 'ARM Cortex-A53, 1.4GHz, 32-bit Security'
        },
        memory: {
          label: 'MEMORY',
          value: 'RAM: 2GB\nFlash: 16GB (Micro SD upto 128GB)'
        },
        display: {
          label: 'DISPLAY',
          value: '5.5-inch HD, 1280 x 720, Multi-touch'
        },
        simPsam: {
          label: 'SIM + PSAM',
          value: '2x SIM Slot + 2x PSAM Slot\n1x SIM Slot + 3x PSAM Slot (Optional)'
        },
        wireless: {
          label: 'TERMINAL CONNECTIVITY',
          value: 'GSM Network 3G, 4G/LTE with GPRS, Wi-Fi, Bluetooth & Ethernet\nAdd-On Antenna: Optional'
        },
        printer: {
          label: 'PRINTER',
          value: 'High-speed 2" Thermal Printer\nPaper Roll Width Diameter: 58mm/40mm/60 GSM roll'
        },
        ports: {
          label: 'PERIPHERAL PORTS',
          value: '1 x USB TYPE-C'
        },
        camera: {
          label: 'CAMERA',
          value: 'Rear: 5MP AF, Read 1D&2D Barcode\nFront (Optional): 2MP FF'
        },
        audio: {
          label: 'AUDIO / VIDEO',
          value: 'Audio: Built-in Speaker Audio Play, Recorder\nVideo: Hardware Video Decoder'
        },
        base: {
          label: 'BASE (OPTIONAL)',
          value: 'Recharger, USB Device/Ethernet (RJ-45)'
        },
        buttons: {
          label: 'BUTTONS',
          value: '1 x Power ON/OFF\n2x Function Buttons'
        },
        googlePlay: {
          label: 'GOOGLE PLAY STORE',
          value: 'Available'
        },
        compliance: {
          label: 'COMPLIANCE',
          value: 'Environment, Health & Safety Durability, Humidity, EMI/EMC: As per STQC guidelines'
        },
        power: {
          label: 'BATTERY',
          value: 'Rechargeable Battery 3000mAh'
        },
        dimensions: {
          label: 'DIMENSIONS & WEIGHT',
          value: '190.5mm x 82.5mm x 64.5mm, 438g Approx.'
        }
      }
    }
  },
  {
    id: 17,
    name: 'Lotus Plus',
    subtitle: 'Versatile CMRI',
    category: 'handheld',
    image: '/images/products/lotus-series.jpg',
    dataSheet: '/brochures/LotusPlus_New CMRI.pdf',
    description: 'Analogics has introduced various meter reading, billing & AMR products and related software modules, over a period of 30 years. The Lotus Plus is a Versatile CMRI capable of reading all Legacy/DLMS/Smart Energy Meters (1Phase & 3Phase) of all makes and types in India. It features a 3.5" QVGA TFT Display with Touch Panel, Linux OS Kernel 4.1, integrated GSM/GPRS/3G/4G/WiFi connectivity, and sufficient battery backup for about 12 hours of field operations.',
    detailedInfo: {
      overview: 'Analogics has introduced various meter reading, billing & AMR products and related software modules, over a period of 30 years. The Lotus Plus is a Versatile CMRI capable of reading all Legacy/DLMS/Smart Energy Meters (1Phase & 3Phase) of all makes and types in India. It features a 3.5" QVGA TFT Display with Touch Panel, Linux OS Kernel 4.1, integrated GSM/GPRS/3G/4G/WiFi connectivity, and sufficient battery backup for about 12 hours of field operations.',
      keyFeatures: [
        'Compact, Low cost & Rugged, IP 65 Compliant',
        'Supports smart meters – DLMS and NON DLMS, 1Ph & 3Ph Energy Meters',
        'Linux Operating System, Kernel 4.1',
        '3.5" QVGA TFT Display with Touch Panel',
        'Integrated GSM/GPRS/3G/4G/WiFi (Optional)',
        'Compatible with different types of optical ports (ANSI, PACT...)',
        'Sufficient battery backup for about 12 hours of field operations',
        'Supports various baud rates depending on the meter type'
      ],
      applicationAreas: [
        'Energy Meter Data Collection',
        'Field Work Force Management',
        'Authentication Applications (Aadhaar/Non-Aadhaar)'
      ],
      availableModels: [
        'Lotus Plus',
        'Lotus QuAd 3.5"',
        'Lotus QuAd 5"'
      ],
      technicalSpecs: {
        processor: {
          label: 'PROCESSOR',
          value: 'CPU: High Speed Cortex A9\nSpeed: 1.0GHz'
        },
        os: {
          label: 'OPERATING SYSTEM',
          value: 'OS: Linux OS, Kernel 4.1'
        },
        memory: {
          label: 'MEMORY',
          value: 'RAM: 512 MB\nFlash: 8GB'
        },
        ports: {
          label: 'COMMUNICATION PORTS',
          value: 'RS-232\nUSB: USB 2.0 OTG\nOther: 10/100 Ethernet (Optional)'
        },
        wireless: {
          label: 'OPTIONAL WIRELESS CONNECTIVITY',
          value: 'WLAN: 2.4G, IEEE 802.11 b/g/n\nConnectivity: GSM/GPRS/3G/4G\nBluetooth: v2.1 + EDR/3.0/4.1LE'
        },
        power: {
          label: 'POWER',
          value: 'Battery: Rechargeable Li-Ion 2600mAh with intelligent Charger'
        },
        display: {
          label: 'DISPLAY & KEYPAD',
          value: 'Display Type & Size: 3.5" QVGA TFT w/Touch Panel\nKeypad: 30 keys (multi-functional)'
        },
        peripherals: {
          label: 'OPTIONAL PERIPHERALS',
          value: 'Camera: 5MP Auto Focus\nLocation: GPS, GLONASS'
        },
        rfid: {
          label: 'OPTIONAL',
          value: 'RFID Card: Mifare Card Reader (Optional)'
        },
        dimensions: {
          label: 'DIMENSIONS',
          value: 'H x W x D in mm: 185 x 95 x 43'
        },
        operatingConditions: {
          label: 'OPERATING CONDITIONS',
          value: 'Operating Temperature: 0°C - 50°C\nRelative Humidity: 5 - 95% (Non-condensing)'
        }
      }
    }
  },
  {
    id: 18,
    name: 'Rider Quad',
    category: 'handheld',
    image: '/images/products/rider-series.jpg',
    description: 'Rider is a compact 3.5"/5" display Handheld computer with integrated printer. Its open source Linux/Android OS helps in rapid deployment of custom applications. The unit can be equipped with wireless features such as WLAN and 2G/3G/4G.',
    detailedInfo: {
      overview: 'Rider is a compact 3.5"/5" display Handheld computer with integrated printer. Its open source Linux/Android OS helps in rapid deployment of custom applications. The unit can be equipped with wireless features such as WLAN and 2G/3G/4G. The printer options for the device include 2"/3" Thermal and 2" Impact. It can be customized with various add-ons such as fingerprint sensor, contact/contactless card reader, camera, GPS, RFID and 1D/2D Barcode scanner. This rugged device can be deployed virtually for many applications in the field and its long battery life enhances usability.',
      keyFeatures: [
        'Compact, Low cost, Rugged & IP 51 compliant',
        'ARM Cortex A9 Processor @1GMHz/ ARM Cortex A7 Processor @900MHz/ Qualcomm Quad Core Processor @1.1 GHz',
        'Linux/Android Operating System',
        '3.5" / 5" Display with Touch Panel',
        'Integrated 2G/3G/4G/WLAN',
        'Integrated 2" Thermal/ 2" Impact/ 3" Thermal printer',
        'Custom features – Fingerprint sensor, Camera, GPS, RFID, 1D/2D Barcode scanner'
      ],
      applicationAreas: [
        'Ticketing & Spot Billing applications',
        'Authentication applications',
        'Micro ATMs',
        'Customized applications'
      ],
      availableModels: [
        'Rider Plus 2" Impact printer with ARM Cortex A9 Processor',
        'Rider Plus 2" Thermal printer with ARM Cortex A9/A7 Processor',
        'Rider Plus 3" Thermal printer with ARM Cortex A9 Processor',
        'Rider QuAd 3.5" with 2" Impact printer & Qualcomm Quad Core Processor',
        'Rider QuAd 3.5" with 2" Thermal printer & Qualcomm Quad Core Processor',
        'Rider QuAd 3.5" with 3" Thermal printer & Qualcomm Quad Core Processor',
        'Rider QuAd 5" with 2" Impact printer & Qualcomm Quad Core Processor',
        'Rider QuAd 5" with 3" Thermal printer & Qualcomm Quad Core Processor'
      ],
      technicalSpecs: {
        processor: {
          label: 'PROCESSOR',
          value: 'CPU: ARM Cortex A9\nSpeed: 1GHz'
        },
        os: {
          label: 'OPERATING SYSTEM',
          value: 'OS: Linux'
        },
        memory: {
          label: 'MEMORY',
          value: 'RAM: 512MB/1GB\nFlash: 8GB\nExpandable: SD card up to 32GB'
        },
        ports: {
          label: 'COMMUNICATION PORTS',
          value: 'USB: USB 2.0 OTG\nOther: 10/100 Ethernet'
        },
        wireless: {
          label: 'WIRELESS CONNECTIVITY',
          value: 'WLAN: 2.4G, IEEE 802.11 b/g/n\nConnectivity: 2G/3G\nBluetooth: V4.0'
        },
        power: {
          label: 'POWER',
          value: 'Battery: Rechargeable Li-Ion 7.4V/2600mAh\nExternal Adapter: 5V@2A, USB Charging'
        },
        display: {
          label: 'DISPLAY & KEYPAD',
          value: 'Display type & size: 3.5" QVGA TFT w/Touch Panel\nKeypad: 30 keys alpha-numeric/ 45 keys QWERTY'
        },
        peripherals: {
          label: 'OPTIONAL PERIPHERALS',
          value: 'Camera: 5MP Auto Focus\nLocation: GPS, GLONASS\nIdentification: STQC certified FPS\nOther: RFID, 1D/2D Barcode scanner'
        },
        dimensions: {
          label: 'DIMENSIONS',
          value: 'H x W x D in mm: 242 x 108 x 32 (Impact printer)\n230 x 88 x 32 (Thermal printer)'
        },
        operatingConditions: {
          label: 'OPERATING CONDITIONS',
          value: 'Operating Temperature: 0°C - 50°C\nRelative Humidity: 5-95% (Non-condensing)'
        },
        printerSpecs: {
          label: 'PRINTER SPECIFICATIONS',
          value: '2" Thermal: Thermo Sensitive, 58mm width, 203 DPI, 60mm/sec, 384 dots/line\n3" Thermal: Thermo Sensitive, 72mm width, 203 DPI, 50mm/sec, 576 dots/line\n2" Impact: Impact with ribbon, 57mm width, 2.7 lines/sec, 144 dots/line'
        }
      }
    }
  },
  {
    id: 19,
    name: 'Rider Plus',
    category: 'handheld',
    image: '/images/products/rider-plus.jpg',
    description: 'A Linux based HHC with ARM Cortex A9 processor, 3.5" TFT display, QWERTY/Alpha-numeric keypad and integrated 2"/3" printer. It comes with an SDK that helps in rapid deployment of custom applications.',
    detailedInfo: {
      overview: 'A Linux based HHC with ARM Cortex A9 processor, 3.5" TFT display, QWERTY/Alpha-numeric keypad and integrated 2"/3" printer. It comes with an SDK that helps in rapid deployment of custom applications.',
      keyFeatures: [
        '2G/3G/4G',
        'GPS',
        'WLAN & Fingerprint Scanner (FPS)',
        'Camera',
        'RFID/Barcode reader and more'
      ],
      applicationAreas: [
        'Billing & Ticketing',
        'Financial Inclusions',
        'Banking and Authentication based applications'
      ],
      technicalSpecs: {
        processor: {
          label: 'PROCESSOR',
          value: 'CPU: ARM Cortex A9\nSpeed: 1GHz'
        },
        os: {
          label: 'OPERATING SYSTEM',
          value: 'OS: Linux'
        },
        display: {
          label: 'DISPLAY & KEYPAD',
          value: 'Display type & size: 3.5" TFT\nKeypad: QWERTY/Alpha-numeric'
        },
        wireless: {
          label: 'WIRELESS CONNECTIVITY',
          value: 'Connectivity: 2G/3G/4G\nWLAN: Available'
        },
        printer: {
          label: 'PRINTER',
          value: 'Integrated 2"/3" printer'
        },
        peripherals: {
          label: 'OPTIONAL PERIPHERALS',
          value: 'Location: GPS\nIdentification: Fingerprint Scanner (FPS)\nCamera: Available\nOther: RFID/Barcode reader'
        }
      }
    }
  },
  {
    id: 20,
    name: 'Terrain',
    category: 'handheld',
    image: '/images/products/terrain.jpg',
    dataSheet: '/brochures/Terrain with 32GB.pdf',
    description: 'A rugged, user friendly Windows based tablet PC with 7" touch screen display and QWERTY keypad. It is designed to reliably operate in harsh usage environments and conditions, such as strong vibrations, extreme temperatures and dusty conditions. The terminal can be integrated with GPS/GLONASS (with AGPS) for location tracking and wireless features like GPRS (2G/3G) and WLAN. It also allows for extensions such as Camera, Finger Print Sensor, Barcode reader and more.',
    detailedInfo: {
      overview: 'A rugged, user friendly Windows based tablet PC with 7" touch screen display and QWERTY keypad. It is designed to reliably operate in harsh usage environments and conditions, such as strong vibrations, extreme temperatures and dusty conditions. The terminal can be integrated with GPS/GLONASS (with AGPS) for location tracking and wireless features like GPRS (2G/3G) and WLAN. It also allows for extensions such as Camera, Finger Print Sensor, Barcode reader and more.',
      keyFeatures: [
        'Compact & Rugged, IP 65 Compliant',
        'Intel Celeron Dual Core Processor @1.58 GHz speed',
        'Windows 8.1 / Windows 10 OS',
        '7.0" 800x480 TFT Display with Touch Panel',
        'Integrated GSM/GPRS/2G/3G/WLAN',
        'Optional: Finger Print Sensor, Camera, Card Reader, RFID & 1D/2D Barcode Scanner'
      ],
      applicationAreas: [
        'Energy Meter Reading / Field data collection',
        'Industrial Automation',
        'Field equivalent of a laptop'
      ],
      technicalSpecs: {
        processor: {
          label: 'PROCESSOR',
          value: 'CPU: Intel Celeron Dual Core Processor\nSpeed: 1.58GHz'
        },
        os: {
          label: 'OPERATING SYSTEM',
          value: 'OS: Windows 8.1 / Windows 10'
        },
        memory: {
          label: 'MEMORY',
          value: 'RAM: 2GB DDR3L\nFlash: 32GB SSD\nExternal Memory: SD-Card (up to 128 GB)'
        },
        ports: {
          label: 'PORTS',
          value: 'USB: USB 2.0 Host\nAudio: HD audio head phone Jack, Internal Mic, Stereo Speaker\nOther: 10/100/1000 Ethernet, RS232'
        },
        wireless: {
          label: 'WIRELESS CONNECTIVITY',
          value: 'WLAN: IEEE802.11 a/b/g/n\nConnectivity: GSM/GPRS/2G/3G\nBluetooth: v4.0 + EDR'
        },
        power: {
          label: 'POWER',
          value: 'Battery: Rechargeable Li-Ion 5200mAh\nExternal Adapter: 12V/3A'
        },
        display: {
          label: 'DISPLAY & KEYPAD',
          value: 'Display Type & Size: 7.0" 800x480 TFT w/Touch Panel\nKeypad: 45 Keys QWERTY keypad'
        },
        peripherals: {
          label: 'OPTIONAL PERIPHERALS',
          value: 'Camera: 3MP/5MP Auto Focus\nLocation: GPS, GLONASS\nIdentification: Finger Print Sensor\nReader: 1D/2D Barcode, RFID (ISO14443)'
        },
        dimensions: {
          label: 'DIMENSIONS',
          value: 'H x W x D in mm: 216 x 196 x 33'
        },
        operatingConditions: {
          label: 'OPERATING CONDITIONS',
          value: 'Operating Temperature: 0°C – 50°C\nRelative Humidity: 5 - 95% (Non-condensing)'
        }
      }
    }
  },
  // BIOMETRIC AND FACIAL ATTENDANCE (3 products)
  {
    id: 22,
    name: 'Lotus Plus',
    subtitle: 'Versatile CMRI',
    category: 'biometric',
    image: '/images/products/lotus-plus-biometric.jpg',
    dataSheet: '/brochures/LotusPlus_New CMRI.pdf',
    description: 'Analogics has introduced various meter reading, billing & AMR products and related software modules, over a period of 30 years. The Lotus Plus is a Versatile CMRI capable of reading all Legacy/DLMS/Smart Energy Meters (1Phase & 3Phase) of all makes and types in India. It features a 3.5" QVGA TFT Display with Touch Panel, Linux OS Kernel 4.1, integrated GSM/GPRS/3G/4G/WiFi connectivity, and sufficient battery backup for about 12 hours of field operations.',
    detailedInfo: {
      overview: 'Analogics has introduced various meter reading, billing & AMR products and related software modules, over a period of 30 years. The Lotus Plus is a Versatile CMRI capable of reading all Legacy/DLMS/Smart Energy Meters (1Phase & 3Phase) of all makes and types in India. It features a 3.5" QVGA TFT Display with Touch Panel, Linux OS Kernel 4.1, integrated GSM/GPRS/3G/4G/WiFi connectivity, and sufficient battery backup for about 12 hours of field operations.',
      keyFeatures: [
        'Compact, Low cost & Rugged, IP 65 Compliant',
        'Supports smart meters – DLMS and NON DLMS, 1Ph & 3Ph Energy Meters',
        'Linux Operating System, Kernel 4.1',
        '3.5" QVGA TFT Display with Touch Panel',
        'Integrated GSM/GPRS/3G/4G/WiFi (Optional)',
        'Compatible with different types of optical ports (ANSI, PACT...)',
        'Sufficient battery backup for about 12 hours of field operations',
        'Supports various baud rates depending on the meter type'
      ],
      applicationAreas: [
        'Energy Meter Data Collection',
        'Field Work Force Management',
        'Authentication Applications (Aadhaar/Non-Aadhaar)'
      ],
      availableModels: [
        'Lotus Plus',
        'Lotus QuAd 3.5"',
        'Lotus QuAd 5"'
      ],
      technicalSpecs: {
        processor: {
          label: 'PROCESSOR',
          value: 'CPU: High Speed Cortex A9\nSpeed: 1.0GHz'
        },
        os: {
          label: 'OPERATING SYSTEM',
          value: 'OS: Linux OS, Kernel 4.1'
        },
        memory: {
          label: 'MEMORY',
          value: 'RAM: 512 MB\nFlash: 8GB'
        },
        ports: {
          label: 'COMMUNICATION PORTS',
          value: 'RS-232\nUSB: USB 2.0 OTG\nOther: 10/100 Ethernet (Optional)'
        },
        wireless: {
          label: 'OPTIONAL WIRELESS CONNECTIVITY',
          value: 'WLAN: 2.4G, IEEE 802.11 b/g/n\nConnectivity: GSM/GPRS/3G/4G\nBluetooth: v2.1 + EDR/3.0/4.1LE'
        },
        power: {
          label: 'POWER',
          value: 'Battery: Rechargeable Li-Ion 2600mAh with intelligent Charger'
        },
        display: {
          label: 'DISPLAY & KEYPAD',
          value: 'Display Type & Size: 3.5" QVGA TFT w/Touch Panel\nKeypad: 30 keys (multi-functional)'
        },
        peripherals: {
          label: 'OPTIONAL PERIPHERALS',
          value: 'Camera: 5MP Auto Focus\nLocation: GPS, GLONASS'
        },
        rfid: {
          label: 'OPTIONAL',
          value: 'RFID Card: Mifare Card Reader (Optional)'
        },
        dimensions: {
          label: 'DIMENSIONS',
          value: 'H x W x D in mm: 185 x 95 x 43'
        },
        operatingConditions: {
          label: 'OPERATING CONDITIONS',
          value: 'Operating Temperature: 0°C - 50°C\nRelative Humidity: 5 - 95% (Non-condensing)'
        }
      }
    }
  },
  {
    id: 23,
    name: 'BT Bio',
    category: 'biometric',
    image: '/images/products/bt-bio.jpg',
    description: 'BT Bio is a compact, low cost, high quality battery operated biometric fingerprint device with enhanced security features. It is compatible with any Android based device via Bluetooth and comes with SDK for custom application development.',
    detailedInfo: {
      overview: 'BT Bio is a compact, low cost, high quality battery operated biometric fingerprint device with enhanced security features. It is compatible with any Android based device via Bluetooth and comes with SDK for custom application development. It is designed for fast capture of quality fingerprint images and is ideal for a broad range of enrolment, authentication, and identification applications.',
      keyFeatures: [
        'Compact, low cost & portable device',
        'Compatible with any Android device',
        'Works for more than 8 hours with internal battery'
      ],
      applicationAreas: [
        'Field authentication',
        'Mobile biometric verification',
        'Attendance systems',
        'Access control'
      ],
      technicalSpecs: {
        ports: {
          label: 'COMMUNICATION PORTS',
          value: 'USB: USB 2.0 Micro-B (for charging only)'
        },
        wireless: {
          label: 'WIRELESS CONNECTIVITY',
          value: 'Bluetooth: V4.0'
        },
        power: {
          label: 'POWER SUPPLY',
          value: 'Battery: Rechargeable Li-Ion, 2600mAh'
        },
        fingerprint: {
          label: 'FINGERPRINT SENSOR',
          value: 'Sensor Type: Optical\\nCertification: STQC certified\\nBiometric Characteristics:\\n- Sensor area: 18 x 22 mm\\n- Resolution: 500 dpi, 256 grey scale\\n- Fingerprint image capture and enhancement, template calculation, authentication (1:1) and identification (1:500 people)\\n- Authentication (1:1) timing: less than 1 sec (typical time)\\n- Identification (1:500 people) timing: 1.5 sec\\n- Adjustable false acceptance rate'
        },
        dimensions: {
          label: 'DIMENSIONS',
          value: 'L x W x D in mm: 60 x 86 x 25'
        },
        operatingConditions: {
          label: 'OPERATING CONDITIONS',
          value: 'Operating Temperature: -10°C to 50°C\\nStorage Temperature: -20°C to 70°C\\nRelative Humidity: 85% (Non-condensing)'
        }
      }
    }
  },
  {
    id: 24,
    name: 'Lotus Bio',
    category: 'biometric',
    image: '/images/products/lotus-bio.jpg',
    description: 'Lotus Bio is a compact 3.5"/5" Handheld computer with integrated fingerprint sensor. It is available in Android as well as Linux OS. The terminal can be equipped with integrated wireless features such as WLAN and 2G/3G/4G.',
    detailedInfo: {
      overview: 'Lotus Bio is a compact 3.5"/5" Handheld computer with integrated fingerprint sensor. It is available in Android as well as Linux OS. The terminal can be equipped with integrated wireless features such as WLAN and 2G/3G/4G. It can be customized with various add-ons such as contact/contactless card reader, camera, RFID, GPS and 1D/2D Barcode scanner. This rugged device can be deployed virtually for many applications in the field and its long battery life enhances usability.',
      keyFeatures: [
        'Compact, Low cost, Rugged & IP65 compliant',
        'High speed ARM Cortex A7 @900MHz/ Qualcomm Quad Core Processor @1.1GHz',
        'Android/Linux Operating System',
        '3.5"/ 5" Display with Touch Panel',
        'Integrated 2G/3G/4G, WLAN',
        'Custom features – Camera, RFID, 1D/2D Barcode scanner, GPS'
      ],
      applicationAreas: [
        'Field Work Force Management',
        'Authentication applications',
        'Time & Attendance applications at corporate offices, educational institutions, government departments'
      ],
      availableModels: [
        'Lotus Bio 3.5" QVGA TFT display, Linux OS, ARM Cortex A7 Processor',
        'Lotus Bio 3.5" QVGA TFT display, Android OS, Qualcomm Quad Core Processor',
        'Lotus Bio 5" WVGA/HD display, Android OS, Qualcomm Quad Core Processor'
      ],
      technicalSpecs: {
        processor: {
          label: 'PROCESSOR',
          value: 'CPU: Qualcomm Quad Core/ ARM Cortex A7\nSpeed: @1.1GHz for Qualcomm, @900MHz for ARM Cortex'
        },
        os: {
          label: 'OPERATING SYSTEM',
          value: 'OS: Android/Linux'
        },
        memory: {
          label: 'MEMORY',
          value: 'RAM: 1GB LPDDR3\nFlash: 8GB\nExpandable: SD card up to 32 GB for Qualcomm, SD card up to 16 GB for ARM Cortex A7'
        },
        ports: {
          label: 'COMMUNICATION PORTS',
          value: 'USB: USB 2.0 OTG\nOther: 10/100 Ethernet/ RS232'
        },
        wireless: {
          label: 'WIRELESS CONNECTIVITY',
          value: 'WLAN: 2.4G, IEEE 802.11 b/g/n\nConnectivity: 2G/3G/4G\nBluetooth: V4.1 BR/EDR + BLE'
        },
        power: {
          label: 'POWER SUPPLY',
          value: 'Battery: Rechargeable Li-Ion 5200mAh\nExternal Adapter: 5V/2A USB Charging/Adapter'
        },
        display: {
          label: 'DISPLAY & KEYPAD',
          value: 'Display type & size: 3.5" QVGA TFT w/Touch Panel, 5" WVGA/HD w/Touch Panel\nKeypad: 30 keys (multi-functional)'
        },
        optional: {
          label: 'OPTIONAL PERIPHERALS',
          value: 'Camera: 8MP Auto Focus\nOther: 1D/2D Barcode scanner, contact/contactless card reader, RFID'
        },
        dimensions: {
          label: 'DIMENSIONS',
          value: 'H x W x D in mm: 185 x 95 x 43'
        },
        operatingConditions: {
          label: 'OPERATING CONDITIONS',
          value: 'Operating Temperature: 0°C to 50°C\nRelative Humidity: 5-95% (Non-condensing)'
        }
      }
    }
  },

  // PORTABLE PRINTERS (3 products)
  {
    id: 26,
    name: 'BT 2 Inch Thermal',
    subtitle: 'Bluetooth 2" Thermal Printer',
    category: 'printers',
    image: '/images/products/bt-2-inch-thermal.jpg',
    dataSheet: '/brochures/2 Inch BTP040625.pdf',
   gemLink: 'https://mkp.gem.gov.in/receipt-printer-v3/2-inch-bluetooth-thermal-printer/p-5116877-40584810413-cat.html#variant_id=5116877-40584810413',
    description: 'Bluetooth Thermal Printer uses chemically coated paper for printing, thus eliminating the need of recursive replacement of ribbon cartridge. It is compatible with any Android device via Bluetooth/USB. It is user programmable and comes with SDK that helps in rapid deployment of custom applications.',
    detailedInfo: {
      overview: 'Bluetooth Thermal Printer uses chemically coated paper for printing, thus eliminating the need of recursive replacement of ribbon cartridge. It is compatible with any Android device via Bluetooth/USB. It is user programmable and comes with SDK that helps in rapid deployment of custom applications.',
      keyFeatures: [
        'Compact, Portable & Rugged, IP 51 Compliant',
        '2" wide Thermal Paper',
        'Android SDK, supports ESC/POS commands',
        'Heavy Duty Battery – Upto 12 hours of field use',
        'Interfaces – Bluetooth, High Speed USB',
        '4MB Flash & 2MB RAM',
        'Make In India (MII)'
      ],
      applicationAreas: [
        'Receipt generation / Mobile Printing (Utilities, Banking, Field Sales, Delivery Teams)',
        'Retail Billing'
      ],
      otherPrinterOptions: {
        impact2inch: {
          label: '2" Impact',
          printType: 'Impact with ribbon',
          paperWidth: '57 mm',
          dotSize: '-',
          dpi: '-',
          printSpeed: '2.7 lines/sec',
          resolution: '144 dots/line'
        },
        thermal3inch: {
          label: '3" Thermal',
          printType: 'Thermo Sensitive',
          paperWidth: '72 mm',
          dotSize: '0.125 x 0.125',
          dpi: '203',
          printSpeed: '50 mm/sec',
          resolution: '576 dots/line'
        }
      },
      technicalSpecs: {
        wireless: {
          label: 'WIRELESS CONNECTIVITY',
          value: 'Bluetooth: Bluetooth 5.0 (Classic + BLE)'
        },
        printer: {
          label: 'PRINTER',
          value: 'Print Type: Thermal Sensitive\nPaper Width: 58 mm\nDot Size: 0.125 x 0.125\nDPI: 203\nPrint Speed: 60 mm/sec\nResolution: 384 dots/line'
        },
        memory: {
          label: 'MEMORY',
          value: '4MB Flash\n2MB RAM'
        },
        ports: {
          label: 'COMMUNICATION PORTS',
          value: 'USB: USB Type C (Communication / Charging)'
        },
        power: {
          label: 'POWER',
          value: 'Battery: Rechargeable Li-Ion 2600mAh\nExternal Adapter: 5V 2A Type C (Optional)'
        },
        dimensions: {
          label: 'DIMENSIONS',
          value: 'H x W x D in mm: 115 x 85 x 40'
        },
        operatingConditions: {
          label: 'OPERATING CONDITIONS',
          value: 'Operating Temperature: 0°C - 50°C\nRelative Humidity: 5 - 95% (Non-condensing)'
        },
        origin: {
          label: 'COUNTRY OF ORIGIN',
          value: 'Make In India (MII)'
        }
      }
    }
  },
  {
    id: 27,
    name: 'BT 3 Inch Thermal',
    subtitle: 'Bluetooth 3" Thermal Printer',
    category: 'printers',
    image: '/images/products/bt-3-inch-thermal.jpg',
    dataSheet: '/brochures/3 Inch Thermal BTP.pdf',
    gemLink: 'https://mkp.gem.gov.in/receipt-printer-v3/3-inch-bluetooth-thermal-printer/p-5116877-50963776947-cat.html#variant_id=5116877-50963776947',
    description: 'Bluetooth Thermal Printer uses chemically coated paper for printing, thus eliminating the need of recursive replacement of ribbon cartridge. It is compatible with any Android and iOS devices through Bluetooth/USB. It is user programmable and comes with SDK that helps in rapid deployment of custom applications.',
    detailedInfo: {
      overview: 'Bluetooth Thermal Printer uses chemically coated paper for printing, thus eliminating the need of recursive replacement of ribbon cartridge. It is compatible with any Android and iOS devices through Bluetooth/USB. It is user programmable and comes with SDK that helps in rapid deployment of custom applications.',
      keyFeatures: [
        'Compact, Portable & Rugged, IP 51 Compliant',
        '3" wide Thermal Paper',
        'Android SDK, supports ESC/POS commands',
        'Heavy Duty Battery – Upto 12 hours of field use',
        'Interfaces – Bluetooth, High Speed USB',
        '4MB Flash & 2MB RAM',
        'Make In India (MII)'
      ],
      applicationAreas: [
        'Receipt generation / Mobile Printing (Utilities, Banking, Field Sales, Delivery Teams)',
        'Retail Billing'
      ],
      otherPrinterOptions: {
        impact2inch: {
          label: '2" Impact',
          printType: 'Impact with ribbon',
          paperWidth: '57 mm',
          dotSize: '-',
          dpi: '-',
          printSpeed: '2.7 lines/sec',
          resolution: '144 dots/line'
        },
        thermal2inch: {
          label: '2" Thermal',
          printType: 'Thermo Sensitive',
          paperWidth: '58 mm',
          dotSize: '0.125 x 0.125',
          dpi: '203',
          printSpeed: '60 mm/sec',
          resolution: '384 dots/line'
        }
      },
      technicalSpecs: {
        wireless: {
          label: 'WIRELESS CONNECTIVITY',
          value: 'Bluetooth: Bluetooth 5.0 (Classic + BLE)'
        },
        printer: {
          label: 'PRINTER',
          value: 'Print Type: Thermal Sensitive\nPaper Width: 72 mm\nDot Size: 0.125 x 0.125\nDPI: 203\nPrint Speed: 60 mm/sec\nResolution: 576 dots/line'
        },
        ports: {
          label: 'COMMUNICATION PORTS',
          value: 'USB: USB Type – "C" (Used for Charging and Communication)'
        },
        power: {
          label: 'POWER',
          value: 'Battery: Rechargeable Li-Ion 2600mAh\nExternal Adapter: USB Type C (5V-2A)'
        },
        memory: {
          label: 'MEMORY',
          value: '4MB Flash\n2MB RAM'
        },
        dimensions: {
          label: 'DIMENSIONS',
          value: 'H x W x L in mm: 50 x 105 x 131.7\nWeight: 275 Grams'
        },
        operatingConditions: {
          label: 'OPERATING CONDITIONS',
          value: 'Operating Temperature: 0°C - 50°C\nRelative Humidity: 5 - 95% (Non-condensing)'
        },
        origin: {
          label: 'COUNTRY OF ORIGIN',
          value: 'Make In India (MII)'
        }
      }
    }
  },
  {
    id: 25,
    name: 'BT 2 Inch Impact',
    subtitle: 'Bluetooth 2" Impact Printer',
    category: 'printers',
    image: '/images/products/bt-2-inch-impact.jpg',
    dataSheet: '/brochures/2 Inch Impact BTP040625.df.pdf',
    gemLink: 'https://mkp.gem.gov.in/receipt-printer-v3/2-inch-bluetooth-impact-printer/p-5116877-24004068158-cat.html#variant_id=5116877-24004068158',
    description: 'Bluetooth impact printer is ideal for long-term storage of receipts/documents, due to permanent ink based printer mechanism. It is compatible with any Android device with Bluetooth/USB. It is a user programmable and comes with SDK that helps in rapid deployment of custom applications.',
    detailedInfo: {
      overview: 'Bluetooth impact printer is ideal for long-term storage of receipts/documents, due to permanent ink based printer mechanism. It is compatible with any Android device with Bluetooth/USB. It is a user programmable and comes with SDK that helps in rapid deployment of custom applications.',
      keyFeatures: [
        'Compact, Portable & Rugged, IP 51 Compliant',
        '2" wide plain paper',
        'Android SDK, Supports ESC/POS Commands',
        'Battery – Upto 10 hours of field use',
        'Interfaces – Bluetooth, High Speed USB',
        '4MB Flash & 2MB RAM',
        'Make In India (MII)'
      ],
      applicationAreas: [
        'Receipt generation / Mobile Printing (Utilities, Banking, Field Sales, Delivery Teams)',
        'Retail Billing'
      ],
      otherPrinterOptions: {
        thermal2inch: {
          label: '2" Thermal',
          printType: 'Thermo Sensitive',
          paperWidth: '58 mm',
          dotSize: '0.125 x 0.125',
          dpi: '203',
          printSpeed: '60 mm/sec',
          resolution: '384 dots/line'
        },
        thermal3inch: {
          label: '3" Thermal',
          printType: 'Thermo Sensitive',
          paperWidth: '72 mm',
          dotSize: '0.125 x 0.125',
          dpi: '203',
          printSpeed: '50 mm/sec',
          resolution: '576 dots/line'
        }
      },
      technicalSpecs: {
        wireless: {
          label: 'WIRELESS CONNECTIVITY',
          value: 'Bluetooth: Bluetooth 5.0 (Classic + BLE)'
        },
        printer: {
          label: 'PRINTER',
          value: 'Print Type: Impact with ribbon cassette\nPaper Width: 57 mm\nPrint Speed: 2.7 lines/sec\nResolution: 144 dots/line'
        },
        ports: {
          label: 'COMMUNICATION PORTS',
          value: 'USB: USB Device Type - C Connector'
        },
        power: {
          label: 'POWER',
          value: 'Battery: Rechargeable Li-Ion 2600mAh\nExternal Charging: USB Type C Port (5V - 2A)'
        },
        memory: {
          label: 'MEMORY',
          value: '4MB Flash\n2MB RAM'
        },
        dimensions: {
          label: 'DIMENSIONS',
          value: 'H x W x D in mm: 150 x 95 x 50'
        },
        operatingConditions: {
          label: 'OPERATING CONDITIONS',
          value: 'Operating Temperature: 0°C - 50°C\nRelative Humidity: 5 - 95% (Non-condensing)'
        },
        origin: {
          label: 'COUNTRY OF ORIGIN',
          value: 'Make In India (MII)'
        }
      }
    }
  },

  // INTERNET OF THINGS (4 products)
  {
    id: 28,
    name: 'AMR (IoT)',
    category: 'iot',
    image: '/images/products/amr.jpg',
    description: 'An advanced meter reading device which automatically collects data from Electronic Energy Meters using optical port and transfers the acquired data to the server with its in built 2G/ 3G communication technology.',
    detailedInfo: {
      overview: 'An advanced meter reading device which automatically collects data from Electronic Energy Meters using optical port and transfers the acquired data to the server with its in-built 2G/ 3G /4G communication technology. It is compact, easy to install in existing meter boxes and can be remotely configured or programmed.',
      keyFeatures: [
        'Compact and Easy to Install',
        'Online monitoring of vital Billing parameters and tamper events',
        'Load Control',
        'Power outage, Quality Power Management and Tamper Management',
        'Energy auditing and accounting',
        'Data collection from different energy meters irrespective of make and model.',
        'Supports any of the communication technologies including 2G/ 3G /4G',
        'Inbuilt 6 KV surge protected SMPS based Power Supply',
        '1 Open collector output for external device control and 1 Input for tamper sensing',
        'Supports MIOS compliant/ Modbus / IEC 62056-21/ DLMS Meters',
        'Integrated IEC 1107, Pact, ANSI compatible optical port for interfacing most of the reputed energy Meters.',
        'Two-way communication facilitating monitoring, control and administration',
        'Facilitates GPS time synchronization from Central server for effective energy audit.',
        'Type Tested for protection against Environment, EMI - EMC, Surge, AC Voltage, etc.'
      ],
      applicationAreas: [
        'Smart Grid Solutions',
        'Automatic Meter Reading'
      ],
      availableModels: [
        'Transparent – works on AT command',
        'Intelligent – Application Mode'
      ],
      technicalSpecs: {
        memory: {
          label: 'MEMORY',
          value: 'RAM: 8MB'
        },
        ports: {
          label: 'I/O PORTS',
          value: 'Output Ports: 1 (Open Collector)\nInput Ports: 1 (Opto Isolated)\nOther: RS232/Optical Port'
        },
        wireless: {
          label: 'WIRELESS CONNECTIVITY',
          value: 'Connectivity: GSM/GPRS/LTE(2G/3G/4G)'
        },
        power: {
          label: 'POWER',
          value: 'Input Voltage: 1-P/3-P AC with wide voltage range (90-470V)\nMax.Output Power: 2W for GSM 900MHz, 1W for GSM 1800MHz'
        },
        dimensions: {
          label: 'DIMENSIONS',
          value: 'H x W x D in mm: 185 x 95 x 43'
        },
        operatingConditions: {
          label: 'OPERATING CONDITIONS',
          value: 'Operating Temperature: 0°C to +60°C\nRelative Humidity: 5-95% (Non-condensing)'
        }
      }
    }
  },
  {
    id: 29,
    name: 'DCU (IoT)',
    category: 'iot',
    image: '/images/products/dcu.jpg',
    description: 'It is an intelligent device with built-in LPR modules to acquire data from Electronic Energy Meters (EEM) or Meter Interface Units (MIU) using AMR software. Its in-built 2G/3G modules then transmits data to the Data Acquisition Server Interfaced with Data Logger PC. A MIU is connected to EEM to enable wireless transmission of data from meters to DCUs. It eliminates conventional cabling requirements between meters and DCUs, thereby ensuring a quantum jump and data integrity of the system.',
    detailedInfo: {
      overview: 'It is an intelligent device with built-in LPR modules to acquire data from Electronic Energy Meters (EEM) or Meter Interface Units (MIU) using AMR software. Its in-built 2G/3G modules then transmits data to the Data Acquisition Server Interfaced with Data Logger PC. A MIU is connected to EEM to enable wireless transmission of data from meters to DCUs. It eliminates conventional cabling requirements between meters and DCUs, thereby ensuring a quantum jump and data integrity of the system.',
      keyFeatures: [
        'Compact and Easy to install',
        'Supports: GSM/GPRS wireless communication with 2G/3G technology',
        'Supports MIOS compliant/ Modbus/ IEC 62056-21/ DLMS protocols for data collection from energy meters of any make and model',
        'Common Optical Probe to interface with any Meters/ Interface can be made wireless using Meter Interface Unit (MIU)',
        'Power Outage Management',
        'Buffering of data in the event of loss of communication/ power interruption',
        'Inbuilt universal power supply (1-Phas/3-Phase) with optional battery backup',
        'Independent of field power supply (like 110V, 220V, 440V)',
        'Two way communication, facilitating monitoring, controlling and administration',
        'Configurable Digital I/O ports for Tripping and monitoring substation parameters',
        'Protection against harsh environment, EMI-EMC, Surge etc.',
        'Simultaneous data access from hundreds of Automatic Meter Readers (AMR)/ DCUs. Secure and reliable data transfer to server through VPN',
        'Server features: Meter Data Acquisition & Management Software, Remotely configurable and feasible firmware upgradation, GPS time synchronization from server for effective energy audit',
        'Online monitoring of Instantaneous parameters like V\'s, I\'s, P\'s, PF and Power Quality etc.',
        'Real-time Tamper Alerts/ Event notifications via SMS'
      ],
      applicationAreas: [
        'Smart Grid Solutions',
        'Automatic Meter Reading'
      ],
      technicalSpecs: {
        processor: {
          label: 'PROCESSOR',
          value: 'CPU: ARM 9\nSpeed: 1GHz'
        },
        os: {
          label: 'OPERATING SYSTEM',
          value: 'OS: Linux OS'
        },
        memory: {
          label: 'MEMORY',
          value: 'RAM: Upto 512 MB RAM\nExternal Memory: Upto 128 GB (SD-card)'
        },
        ports: {
          label: 'COMMUNICATION PORTS',
          value: 'USB: USB 2.0\nOther: Ethernet, RS232, RS485'
        },
        wireless: {
          label: 'WIRELESS CONNECTIVITY',
          value: 'WLAN: WLAN (IEEE802.11 b/g)\nConnectivity: GSM/GPRS\nOther: Low Power Radio Module'
        },
        ioports: {
          label: 'I/O PORTS',
          value: 'Digital Output ports: 24 (Relay Outputs)\nDigital Input ports: 24 (Opto isolated)\nAnalog Input ports: 16 (16-bit)'
        },
        dimensions: {
          label: 'DIMENSIONS',
          value: 'H x W x D in mm: 185 x 95 x 43'
        },
        operatingConditions: {
          label: 'OPERATING CONDITIONS',
          value: 'Operating Temperature: 0°C - 50°C\nRelative Humidity: 5 - 95% (Non-condensing)'
        }
      }
    }
  },
  {
    id: 30,
    name: 'Mini DCU (IoT)',
    category: 'iot',
    image: '/images/products/mini-dcu.jpg',
    description: 'A compact version of the regular DCU. Its built in LPR modules acquire data from any Electronic Energy Meters and the in built 2G/3G modules then transmit data to the Data Acquisition server.',
    detailedInfo: {
      overview: 'A compact version of the regular DCU. Its built-in LPR modules acquire data from any Electronic Energy Meters and the in-built 2G/3G modules then transmit data to the Data Acquisition server. It eliminates conventional cabling requirements between meters and DCUs, thereby ensuring a quantum jump and data integrity of the system.',
      keyFeatures: [
        'Compact and thereby very convenient to use',
        'Data collection from different energy meters irrespective of make and model',
        'Remote firmware upgradation',
        'Built-in encryption for data security',
        'Supports 2G/3G/4G communication technologies',
        'Source/destination addressing',
        'Online monitoring of vital parameters like voltages, currents, energies, demands and frequencies',
        'Power outage management',
        'Inbuilt universal power supply (1-P/3-P/12-48V DC) with optional battery backup',
        'Supports two way communication, facilitating monitoring, control and administration',
        'Type tested for protection against environment, EMI-EMC, surge etc.'
      ],
      applicationAreas: [
        'Smart Grid Solutions',
        'Automatic Meter Reading'
      ],
      technicalSpecs: {
        processor: {
          label: 'PROCESSOR',
          value: 'CPU: High Speed ARM Cortex A7/A8\nSpeed: Cortex A7 @900MHz, Cortex A8 @1GHz'
        },
        os: {
          label: 'OPERATING SYSTEM',
          value: 'OS: Linux'
        },
        memory: {
          label: 'MEMORY',
          value: 'RAM: 256MB/512MB\nFlash: 8GB'
        },
        ports: {
          label: 'COMMUNICATION PORTS',
          value: 'Serial: RS-232, RS-485\nConnectivity: 2G/3G/4G\nLAN: Ethernet 10/100 Mbps\nOther: Low Power Radio Module'
        },
        power: {
          label: 'POWER',
          value: 'Universal power supply: 1-P 90-270Vac/ 3-P 90-270Vac\nBattery: 3.7V/2200mAh'
        },
        dimensions: {
          label: 'DIMENSIONS',
          value: 'H x W x D in mm: 142 x 83 x 33'
        },
        operatingConditions: {
          label: 'OPERATING CONDITIONS',
          value: 'Operating Temperature: -10°C to +60°C\nRelative Humidity: 5-95% (Non-condensing)'
        }
      }
    }
  },
  {
    id: 31,
    name: 'RF Nodes (IoT)',
    category: 'iot',
    image: '/images/products/rf-nodes.jpg',
    description: 'IoT modules based on 6LoWPAN (sub-Gig & 2.4GHz bands) find their usage in wide range of Low power Mesh (or Canopy) networking applications like Home/Office/Factory automation, BMS, AMR/AMI/Smart Grid solutions, Smart city solutions etc.',
    detailedInfo: {
      overview: 'IoT modules based on 6LoWPAN (sub-Gig & 2.4GHz bands) find their usage in wide range of Low power Mesh (or Canopy) networking applications like Home/Office/Factory automation, BMS, AMR/AMI/Smart Grid solutions, Smart city solutions etc. The module\'s slim form factor makes it an ideal add-on for enhancing the intelligence of your device/ solution.',
      keyFeatures: [
        'The protocol stack is based on standard IEEE 802.15.4g (IPv6)',
        'Supports Peer-to-Peer (P2P), Point-to-Multipoint (P2MP) and Mesh topologies',
        '100 meters of LoS communication distance (can be extended using high power external antenna)',
        'Built-in Cryptographic Acceleration for AES 128/256 for data security',
        'Interoperability of the network with open source',
        'IPv6 having 128 bit addressing, facilitates large number of nodes',
        'Compatible for future Smart Grid & IoT (Internet of Things)',
        'Remote firmware upgradation',
        'Acknowledgment mode communication with retries',
        'Power saving modes for low power applications',
        'Source/ Destination addressing',
        'Unicast and Broadcast communication',
        'Digital I/O line support',
        'Default configuration for ready to use in Automated/Drive by Meter Reading',
        'Remote control, remote measurement system, Access control, Data Collection, Identification system, etc.'
      ],
      applicationAreas: [
        'Smart Grid Solutions',
        'IoT Applications',
        'Home/Office/Factory Automation',
        'AMR/AMI Solutions'
      ],
      availableModels: [
        '2.4GHz band',
        'Sub-GHz'
      ],
      technicalSpecs: {
        power: {
          label: 'POWER',
          value: 'Supply Voltage: 1.8 to 3.6 V\nTransmit Current (at +19dBm): 131mA\nReceive Current: 25mA\nPower-down Count: <10 µA'
        },
        rf: {
          label: 'RF SPECIFICATIONS',
          value: 'Frequency: 2.4 GHz\nMaximum Transmit power output: 19 dBm\nRF Data Rate: 50 kbps\nModulation: 2GFSK\nReceiver Sensitivity: -100.7 dBm'
        },
        communication: {
          label: 'COMMUNICATION',
          value: 'Serial Interface Data Rate: Up to 115200 baud\nCommunication Provision: RS232 (TTL level)'
        },
        network: {
          label: 'NETWORK',
          value: 'Supported Network Topologies: Peer-to-Peer(P2P), Point to Multipoint(P2MP) & Mesh\nNumber of Channels: 10\nAddressing Options: PAN ID, Channel and addresses'
        },
        antenna: {
          label: 'ANTENNA',
          value: 'Antenna Options: Chip Antenna, Wire Antenna Helical\nAntenna Connector: MMCX (for external antenna)'
        },
        interface: {
          label: 'INTERFACE',
          value: 'Interface Connector: 10 pin receptacles, 2.00mm pitch'
        },
        dimensions: {
          label: 'DIMENSIONS',
          value: 'Dimensions (mm): 31x28'
        },
        operatingConditions: {
          label: 'OPERATING CONDITIONS',
          value: 'Operating Temperature: -40 to 85 °C'
        }
      }
    }
  },

  // SOLAR INVERTERS & CONTROLLERS (4 products)
  {
    id: 32,
    name: 'Grid Tied Inverter',
    category: 'solar',
    image: '/images/products/grid-tied-inverter.jpg',
    description: 'Indigenously developed highly functional Inverter used to convert the DC Power produced from Solar PV panels to AC, suitable for exporting to grid.',
    detailedInfo: {
      overview: 'Indigenously developed highly functional Inverter used to convert the DC Power produced from Solar PV panels to AC, suitable for exporting to grid.',
      keyFeatures: [
        'Simple & Effective Installation and Operation procedure',
        'Compact and Rugged design',
        'IP65 compatible Enclosure',
        'Web based software for remote monitoring and data analysis',
        'GPRS/Wi-Fi/Ethernet communication'
      ],
      technicalSpecs: {
        communicationPorts: {
          label: 'COMMUNICATION PORTS',
          value: 'Ports & Wireless: RS 485, Wi-Fi, GPRS'
        },
        dcInput: {
          label: 'DC INPUT (FROM ARRAY)',
          value: 'Max. Input Power: 5500W\nMax. DC Voltage: 800V\nMPPT Voltage Range: 350 - 800V\nMax. Input Current: 12A'
        },
        output: {
          label: 'OUTPUT',
          value: 'AC Nominal Power: 5 KVA\nNominal AC Voltage: 400 VAC, 3 Phase\nNominal AC Current: 8A\nAC Voltage Range: 360 to 470V\nAC Frequency Range: 47 to 53 Hz\nMax. Power Factor: +/- 0.9\nEfficiency: > 97%\nMax.THD: < 3%\nPower consumption during night: < 5 Watt'
        },
        otherSpecs: {
          label: 'OTHER SPECIFICATIONS',
          value: 'Display: Multi-function LCD\nEnclosure Protection: IP 65\nType of cooling: Natural\nEnclosure material: Steel / Aluminium\nProtections: Anti-Islanding, GFCI, Overload, alarms provided for all important protections\nCertifications: IEC 62109, IEC 61683, IEC 60068-2, IEC 62116, IEC 61000'
        },
        environment: {
          label: 'ENVIRONMENT',
          value: 'Operating Temperature: 0°C to 50°C\nStorage Temperature: -10°C to 60°C\nHumidity: 0 – 95% RH (Non-condensing)\nAcoustic Noise (at 1 metre): < 55 dB\nAltitude: < 1000m, above sea level without derating'
        }
      }
    }
  },
  {
    id: 33,
    name: 'Solar Water Pump Controller',
    category: 'solar',
    image: '/images/products/solar-water-pump.jpg',
    description: 'Power produced by Solar PV panels will be delivered to VFD based controller, which converts the DC power to AC power to operate water pump. The Solar water pump controller automatically regulates output frequency and speed of motor according to solar radiation intensity with built in MPPT tracking function.',
    detailedInfo: {
      overview: 'Power produced by Solar PV panels will be delivered to VFD based controller, which converts the DC power to AC power to operate water pump. The Solar water pump controller automatically regulates output frequency and speed of motor according to solar radiation intensity with built in MPPT tracking function. It is compatible with both linear and non-linear loads.\n\nIn case of DC motor pumps, power from solar array is regulated by the DC charge cum controller to drive the DC water pump with built in MPPT tracking function.',
      keyFeatures: [
        'IP 65 rated enclosure for Solar VFD to withstand harsh environments and field locations, keeping in view the long life time operation of the panels and motor',
        'Monitoring software for real time status display and control',
        'Adopting the dynamic maximum power point tracking (MPPT) control method, with fast response and reliable operation',
        'Remote Monitoring SMS and GPRS based features for controlling along with Remote Firmware upgradation using GPRS technology (Providing a feature rich option at a very cost effective rate)',
        'VFD (variable frequency driver), greatly improves efficiency and operating time',
        'Easy to Install (plug and play type), avoiding of setting in the field during installation',
        'Modular construction & Low heat dissipation, assuring long time operation',
        'Stream lined design and rugged construction avoiding the use of Fan for cooling',
        'Proven reliability and low maintenance',
        'Optimized Energy Harvest & Unparalleled Performance'
      ],
      protections: [
        'Under/Over voltage for Input, Output',
        'Output overload & short circuit protection',
        'Over current protection',
        'Over temperature protection',
        'Surge Protection at Input array',
        'Dry Run Protection',
        'DC Isolator/MCB for PV isolation (Optional)'
      ],
      applicationAreas: [
        'Agriculture and Rural water supply schemes',
        'Applications where grid power is intermittently present or not available at all'
      ],
      technicalSpecs: {
        processor: {
          label: 'PROCESSOR',
          value: 'CPU: 32 bit micro Controller\nSpeed: 60MHz'
        },
        memory: {
          label: 'MEMORY',
          value: 'RAM: 10KB\nFlash: 64KB'
        },
        communicationPorts: {
          label: 'COMMUNICATION PORTS',
          value: 'Ports: RS 232'
        },
        displayKeypad: {
          label: 'DISPLAY & KEYPAD',
          value: 'Display Type & Size: 2x16 LCD display'
        },
        vfdInput3HP: {
          label: 'VFD INPUT - 3HP (FROM ARRAY)',
          value: 'Open Circuit Voltage (VoC): 500V\nPV Voltage Range: 300 – 500V\nMPPT Voltage Range: 320 - 500V\nMax. Input Current: 10A\nSuggested Solar Panel: 300W, 72 cells, Vmp:36V, VoC:43.2V\nNo. of solar panels in series/No. of strings: 10 / 01\nMin. /Max. solar array power: 3.0 to 3.3 Kwp'
        },
        vfdInput5HP: {
          label: 'VFD INPUT - 5HP (FROM ARRAY)',
          value: 'Open Circuit Voltage (VoC): 500V\nPV Voltage Range: 300 – 500V\nMPPT Voltage Range: 320 - 500V\nMax. Input Current: 15A\nSuggested Solar Panel: 300W, 72 cells, Vmp:36V, VoC:43.2V\nNo. of solar panels in series/No. of strings: 10 / 01\nMin. /Max. solar array power: 5.0 to 5.5 Kwp'
        },
        vfdInput7HP: {
          label: 'VFD INPUT - 7.5HP (FROM ARRAY)',
          value: 'Open Circuit Voltage (VoC): 500V\nPV Voltage Range: 300 – 500V\nMPPT Voltage Range: 320 - 500V\nMax. Input Current: 20A\nSuggested Solar Panel: 300W, 72 cells, Vmp:36V, VoC:43.2V\nNo. of solar panels in series/No. of strings: 10 / 01\nMin. /Max. solar array power: 7.5 to 8.0 Kwp'
        },
        vfdOutput3HP: {
          label: 'VFD OUTPUT - 3HP',
          value: 'Output Phase: 3 Phase, 3 Wire\nOutput Voltage: 0V to 240VAC\nOutput Frequency: 0 to 50Hz\nOutput Current: 8.5 Amp\nRecommended motor rating: 3PH/3HP/230V'
        },
        vfdOutput5HP: {
          label: 'VFD OUTPUT - 5HP',
          value: 'Output Phase: 3 Phase, 3 Wire\nOutput Voltage: 0V to 240VAC\nOutput Frequency: 0 to 50Hz\nOutput Current: 12 Amp\nRecommended motor rating: 3PH/5HP/230V'
        },
        vfdOutput7HP: {
          label: 'VFD OUTPUT - 7.5HP',
          value: 'Output Phase: 3 Phase, 3 Wire\nOutput Voltage: 0V to 240VAC\nOutput Frequency: 0 to 50Hz\nOutput Current: 18 Amp\nRecommended motor rating: 3PH/7.5HP/230V'
        },
        otherSpecs: {
          label: 'OTHER SPECIFICATIONS',
          value: 'Mechanical Endurance: Designed to meet IP 65 standards, Natural air cooling, Input & output through KUT-16 terminals\nCertification: IEC 61683 & IEC 60068-2- (1,2,14 and 30)'
        },
        dimensions: {
          label: 'DIMENSIONS',
          value: 'L x W x D in mm: 500 x 275 x 150\nWeight: 10 kgs'
        },
        environment: {
          label: 'ENVIRONMENT',
          value: 'Location: Outdoor (free from corrosive gases & conductive dust)\nOperating Temperature: -10°C to +55°C\nRelative Humidity @25°C: 5 to 95% (Non-condensing)\nMax. altitude above sea level without de-rating: 1000m'
        }
      }
    }
  },
  {
    id: 34,
    name: 'Lifeline',
    category: 'solar',
    image: '/images/products/lifeline.jpg',
    description: 'First of its kind indigenously developed product by Analogics to make agriculture sector in India more self sustained. It is the latest innovative technology product with user friendly features of Solar Water Pump Controller cum Utility Power Generator for the benefit of the farmer.',
    detailedInfo: {
      overview: 'First of its kind indigenously developed product by Analogics to make agriculture sector in India more self-sustained. It is the latest innovative technology product with user-friendly features of Solar Water Pump Controller cum Utility Power Generator for the benefit of the farmer. It consists of Solar Water Pump Controller and an added feature to export excess solar power to the utility grid.',
      keyFeatures: [
        '3-Phase Variable Frequency Drive (VFD) to drive the AC & DC submersible or surface mount pumps (ranging from 3 to 7.5HP)',
        'Can be switched from Pump driver to Grid Tied Inverter (manual or automatic) or vice-versa',
        'Ensures total protection for pumps against dry run, short circuit, over voltage and under voltage',
        'Remote monitoring and ON/OFF control through mobile'
      ],
      benefits: [
        'Reduces the dependency on grid supply',
        'Additional source of income to farmer',
        'Maximum revenue can be generated by exporting solar power to grid at noon, when solar panels happen to output the most electrical power',
        'Added water pump protection circuitry results in longer pump life'
      ],
      technicalSpecs: {
        processor: {
          label: 'PROCESSOR',
          value: 'CPU: 32 bit DSP Controller\nSpeed: 200MHz'
        },
        memory: {
          label: 'MEMORY',
          value: 'RAM: 164KB\nFlash: 1MB'
        },
        communicationPorts: {
          label: 'COMMUNICATION PORTS',
          value: 'Port: RS 485'
        },
        displayKeypad: {
          label: 'DISPLAY & KEYPAD',
          value: 'Display Type & Size: 2x16 LCD display'
        },
        dcInput: {
          label: 'DC INPUT (FROM ARRAY)',
          value: 'Max. Input Power: 5500Wp\nMax. DC Voltage: 800V\nMPPT Voltage Range: 350 - 750V DC'
        },
        outputGridMode: {
          label: 'OUTPUT (GRID INVERTER MODE)',
          value: 'AC Nominal Power: 5 KVA\nNominal AC Voltage/Current/Freq: 400 VAC, 3 Phase/ 10A/ 50Hz\nAC Voltage Range: 320 to 470V\nMax Efficiency: > 98%\nMax.THD: < 3% at rated power'
        },
        outputVFDMode: {
          label: 'OUTPUT (VFD MODE)',
          value: 'AC Nominal Power: 5 HP\nNominal AC Voltage/Current/Freq: 400V AC, 3-Phase/ 10A / 50Hz\nAC Voltage Range: 100 to 440V\nMax Efficiency: > 98%\nMax.THD: < 3% at rated power'
        },
        otherPeripherals: {
          label: 'OTHER PERIPHERALS',
          value: 'LCD: Multi-function display\nOptional: WiFi, GPRS\nProtections: Anti Islanding, Over Load, Short Circuit\nEnclosure Protection/ Type of cooling: IP65/ Natural'
        },
        dimensions: {
          label: 'DIMENSIONS',
          value: 'L x W x D in mm: 500 x 400 x 210'
        },
        operatingConditions: {
          label: 'OPERATING CONDITIONS',
          value: 'Operating Temperature: -10°C to +55°C\nRelative Humidity: 5-95% (Non-condensing)'
        }
      }
    }
  },
  // DEFENCE (4 products)
  {
    id: 36,
    name: 'Gamma Ray Spectrometer',
    category: 'defence',
    image: '/images/products/gamma-ray-spectrometer.jpg',
    dataSheet: '/brochures/GammaRay3X3.pdf',
    description: 'Indigenously developed product to display K, U and Th concentrations. It is a low cost product and compatible for field use due to rugged design. The Software supports Data Acquisition, Transfer of Data, Interface and Storage.',
    detailedInfo: {
      overview: 'Indigenously developed product to display K, U and Th concentrations. It is a low cost product and compatible for field use due to rugged design. The Software supports Data Acquisition, Transfer of Data, Interface and Storage.',
      highlights: [
        'Indigenously Developed product',
        'Display of K, U, Th concentrations',
        'Data acquisition',
        'Rugged design for field use',
        'Low cost and versatile',
        'Software for data acquisition, interface, storage, transfer of data'
      ],
      keyFeatures: [
        'Display of K, U, Th concentrations, dose rate with a user selectable sample time (Acquisition time)',
        'Data Logging',
        'Rugged Design to withstand field usage',
        'Dynamic range: 10 to 3000 KeV',
        'Resolution: < 7%, FWHM at 662 KeV, <5% at 1.33 MeV',
        'Count rate: 50,000 cps',
        'Supports data acquisition, transfer of data, interface and storage',
        'Offline software supports Spectrum processing',
        'Digital potentiometer for calibration'
      ],
      multiChannelAnalyzer: {
        label: 'Multi Channel Analyzer',
        value: '256/512/1024 Channel MCA\nIntegral non linearity: <0.07%\nDifferential non linearity: <+/-1%\nDead time for event: 2usec including memory transfer\nGain stability: <+50ppm/degC'
      },
      dataAcquisitionSystem: {
        label: 'Data Acquisition System',
        value: 'ARM controller based DAS with Linux OS\nData acquisition from the MCA and GPS\nMode selection and Display\nHigh voltage and amplifier gain\nBuilt in GPS'
      },
      embeddedSoftware: {
        label: 'Embedded Software',
        value: 'Acquisition and display of the live radiometric data at an interval of 5 seconds\nControl of amplifier gain with digital potentiometer\nComputation and display of dose rate, radio elemental concentration after the user defined acquisition time\nStorage of more than 500 sample spectrum along with GPS coordinates\nTransfer of the stored data to PC/Server'
      },
      applicationAreas: [
        'Monitoring Airports, Shipping Yards & Nuclear Facilities',
        'Radiation Detection',
        'Toxic dump site monitoring',
        'Atomic Research',
        'Awareness in Educational Institutions'
      ],
      technicalSpecs: {
        processor: {
          label: 'PROCESSOR AND OS',
          value: 'CPU: High speed ARM Cortex A8 processor with 1GHz\nOS: Linux OS Kernel 3.2'
        },
        memory: {
          label: 'MEMORY',
          value: '512 MB RAM\n4 GB Flash'
        },
        ports: {
          label: 'INTERFACE',
          value: 'USB 2.0 Host, USB 2.0 Client, GPS Module (Internal)'
        },
        detector: {
          label: 'DETECTOR',
          value: 'Standard detector 3" x 3" NaI(TI) with PMT'
        },
        power: {
          label: 'POWER',
          value: 'Rechargeable Li-Ion Battery, 2600mAh capacity, for >8 hours operation'
        },
        display: {
          label: 'DISPLAY AND KEYPAD',
          value: '3.5" QVGA high bright TFT with Touch Panel\nPanel mounted keypad with 5 keys (Up, Down, Calibration, Menu, Ok)\n54 pin connector for Display'
        },
        indications: {
          label: 'INDICATIONS',
          value: 'Charge LED and Power ON LED'
        },
        storageTemp: {
          label: 'STORAGE TEMPERATURE',
          value: 'Auto calibration with Cesium (Cs) & Potassium(K)\nBuilt in GPS\nRTC (Real Time Clock)\nWifi\nAudio'
        },
        dimensions: {
          label: 'DIMENSIONS & WEIGHT',
          value: '260mm (L) x 100mm (W) x 110mm (H)\nWeight: Less than 3 kg'
        },
        operatingConditions: {
          label: 'OPERATING TEMPERATURE',
          value: '0 – 50 °C'
        }
      },
      notes: [
        'Option 1: Single unit integrated of Electronic Device & Sensor with PMT.',
        'Option 2: Separate Electronic Device & Sensor with PMT will be interconnected through cable.'
      ]
    }
  },
  {
    id: 37,
    name: 'Rugged Tab',
    subtitle: 'Rugged Tab',
    category: 'defence',
    image: '/images/products/rugged-tab-computer.jpg',
    dataSheet: '/brochures/RUGGED_TAB_DATASHEET-updated.pdf',
    description: 'This is a Customised computer system to communicate with avionics equipments & systems. It has versatile Interfaces suitable for wide range of Applications Testing, simulation & Monitoring of various Avionics ports in the Lab & In the field.',
    detailedInfo: {
      overview: 'This is a Customised computer system to communicate with avionics equipments & systems. It has versatile Interfaces suitable for wide range of Applications Testing, simulation & Monitoring of various Avionics ports in the Lab & In the field.',
      application: 'Device is suitable for wide range of applications including, but not limited to box level testing/simulation, Portable test equipment, flight level test & diagnosis software development, System debugging.',
      keyFeatures: [
        'Compact & Rugged Tablet PC, IP 65 Compliant',
        'Intel Celeron Dual Core Processor @ 1.58 GHz',
        'Windows 10 IOT Enterprise Edition',
        '10.1" TFT Display with Capacitive Touch',
        'Rugged Metallic He30 Enclosure'
      ],
      applicationAreas: [
        'Ground Maintenance',
        'On board Flight Testing',
        'System Test and Integration',
        'Automated Test',
        'Databus Analysis, Test, and Simulation',
        'Weather Radar, CDU and T-R Unit analysis, Test and Simulation',
        'Data Loading',
        'Field equivalent of a laptop'
      ],
      technicalSpecs: {
        processor: {
          label: 'PROCESSOR',
          value: 'CPU: Intel Celeron Dual Core Processor\nSpeed: 1.58 GHz'
        },
        os: {
          label: 'OPERATING SYSTEM',
          value: 'OS: Windows 10 IOT Enterprise edition'
        },
        memory: {
          label: 'MEMORY',
          value: 'RAM: 2GB DDR3L\nFlash: 32GB\nMemory: Expandable Upto 128GB'
        },
        ports: {
          label: 'PORTS & CONNECTIVITY',
          value: 'USB: USB 2.0 Host\nSerial Port: RS232, RS422/RS485\nI/O Interface: 16 Digital Inputs, 16 Digital Outputs\nBus Interface: ADC, DAC Channels\nNetwork: Ethernet 10/100 Gigabit'
        },
        power: {
          label: 'POWER',
          value: 'Battery: Rec 11.1V, 5200mAh\nAdapter: 14.1V DC @ 3A'
        },
        display: {
          label: 'DISPLAY & KEYPAD',
          value: 'Display Type & Size: 10.1" TFT Display with Capacitive Touch\nKeypad: 4 Keys'
        },
        dimensions: {
          label: 'DIMENSIONS',
          value: 'H x W x D in mm: 216 x 196 x 33'
        },
        operatingConditions: {
          label: 'OPERATING CONDITIONS',
          value: 'Operating Temperature: 0°C - 50°C\nRelative Humidity: 5 - 95% (Non-condensing)'
        }
      }
    }
  },
  {
    id: 48,
    name: 'Program Clock',
    modelNo: 'AEPC-102',
    category: 'defence',
    image: '/images/products/program-clock.jpg',
    dataSheet: '/brochures/Program Clock.pdf',
    description: 'Program clock plays central role in Count Down Time generation and dissemination. It is a FPGA based system with High accuracy TCXO built-in to generate accurate countdown time. It synchronizes generated count down time with external GPS clock.',
    detailedInfo: {
      overview: 'Program clock plays central role in Count down Time generation and dissemination. It is a FPGA based system with High accuracy TCXO built-in to generate accurate countdown time. It synchronizes generated count down time with external GPS clock. It gives user the ability to run and hold the CDT. It can also hold the clock when connected RTD generate hold request. Program clock not only generates the CDT but also disseminates CDT to other sub systems of timing system.',
      keyFeatures: [
        'IRIG-B Output',
        'IRIG-B Input',
        'RS232 Output',
        'RS232 Input',
        '7 Segment LED Display',
        'Switches & Keys',
        '3.5" Display with Touch',
        'Ethernet Ports'
      ],
      applicationAreas: [
        'Customized Application'
      ],
      technicalSpecs: {
        display: {
          label: 'DISPLAY',
          value: '7 Segment LED Display\n3.5" Display with Touch'
        },
        ports: {
          label: 'COMMUNICATION PORTS',
          value: 'IRIG-B Output\nIRIG-B Input\nRS232 Output\nRS232 Input\nEthernet Ports'
        },
        controls: {
          label: 'CONTROLS',
          value: 'Switches & Keys'
        },
        functionality: {
          label: 'FUNCTIONALITY',
          value: 'FPGA based system with High accuracy TCXO\nGenerates and disseminates Count Down Time (CDT)\nSynchronizes CDT with external GPS clock\nRun / Hold CDT control\nHolds clock on RTD hold request\nDisseminates CDT to sub systems of timing system'
        }
      }
    }
  },
  {
    id: 38,
    name: 'Time Display Unit',
    modelNo: 'ATDU-102',
    category: 'defence',
    dataSheet: '/brochures/Time Display Unit.pdf',
    image: '/images/products/time-sync-unit.jpg',
    description: 'TCR is connected to server through Ethernet port and receives and displays both Actual Time Display (ATD) & Count Down Time (CDT)',
    detailedInfo: {
      overview: 'TCR is connected to server through Ethernet port and receives and displays both Actual Time Display (ATD) & Count Down Time (CDT).',
      keyFeatures: [
        'Ethernet Ports',
        '7 Segment LED Display',
        'Display ATD & CDT'
      ],
      applicationAreas: [
        'Customized Application'
      ],
      technicalSpecs: {
        display: {
          label: 'DISPLAY',
          value: '7 Segment LED Display'
        },
        ports: {
          label: 'COMMUNICATION PORTS',
          value: 'Ethernet Ports'
        },
        functionality: {
          label: 'FUNCTIONALITY',
          value: 'Displays Actual Time Display (ATD) & Count Down Time (CDT)\nConnected to server via Ethernet port'
        }
      }
    }
  },
  {
    id: 47,
    name: 'Real Time Display (RTD)',
    modelNo: 'AVDM-102',
    category: 'defence',
    image: '/images/products/real-time-display-rtd.jpg',
    dataSheet: '/brochures/RTD.pdf',
    description: 'Real Time Display (RTD) is connected through Ethernet with a Program Clock and receives Count Down Time (CDT) to display. RTD is configured as MDRTD/VDRTD/RTD based on the functionality.',
    detailedInfo: {
      overview: 'Real Time Display (RTD) is connected through Ethernet with a Program Clock and receives Count Down Time (CDT) to display. RTD is configured as MDRTD/VDRTD/RTD based on the functionality.\n\nMDRTD is having special Power to stop (or) Run the Count Down Time (CDT) and it is having a key for controlling launch Authorization/Non launch Authorization. This will be operative only in Hold condition.',
      keyFeatures: [
        'IRIG-B Input',
        'RS232 Input',
        '7 Segment LED Display',
        'Switches & Keys',
        '3.5" Display with Touch',
        'Ethernet Ports'
      ],
      applicationAreas: [
        'Customized Application'
      ],
      technicalSpecs: {
        display: {
          label: 'DISPLAY',
          value: '7 Segment LED Display\n3.5" Display with Touch'
        },
        ports: {
          label: 'COMMUNICATION PORTS',
          value: 'Ethernet Ports\nRS232 Input\nIRIG-B Input'
        },
        controls: {
          label: 'CONTROLS',
          value: 'Switches & Keys\nLaunch Authorization / Non Launch Authorization key (MDRTD)'
        },
        functionality: {
          label: 'FUNCTIONALITY',
          value: 'Configured as MDRTD / VDRTD / RTD based on functionality\nReceives Count Down Time (CDT) from Program Clock via Ethernet\nMDRTD: Special power to stop or run CDT, operative only in Hold condition'
        }
      }
    }
  },

  // ACCESSORIES (4 products)
  {
    id: 40,
    name: 'Power Bank',
    category: 'accessories',
    image: '/images/products/power-bank.jpg',
    dataSheet: '/brochures/Power bank-3200mah.pdf',
    description: 'The Analogics 3200mAh Power Bank delivers 36W fast charging, intelligent power management, and a sleek, travel-friendly design. Ideal for smartphones and USB-C devices, it features high quality lithium-ion cells for safe, long lasting power in a compact, pocket-sized form.',
    detailedInfo: {
      overview: 'The Analogics 3200mAh Power Bank delivers 36W fast charging, intelligent power management, and a sleek, travel-friendly design. Ideal for smartphones and USB-C devices, it features high quality lithium-ion cells for safe, long lasting power all in a compact, pocket-sized form, designed for life on the go.',
      keyFeatures: [
        'USB-C to USB-C Connectivity: Supports efficient 22W fast charging',
        'Input: 5V/2.4A, 9V/2.0A, 12V/1.5A',
        'Output: 5V/2.4A, 9V/2.0A, 12V/1.5A',
        'Battery Capacity: 3200mAh high-capacity battery for extended use',
        'Battery Cells: Built with reliable lithium-ion battery cells',
        'Design: Compact and lightweight, ideal for travel and pocket-friendly portability',
        'All-in-One Charging Solution: Offers a comprehensive, integrated charging experience',
        'LED Indicators: Easy-to-read LED indicators show battery level and charging status'
      ],
      applicationAreas: [
        'Smartphones & USB-C Devices',
        'Travel & On-the-Go Charging',
        'Field Operations'
      ],
      technicalSpecs: {
        battery: {
          label: 'BATTERY',
          value: 'Capacity: 3200mAh\nCell Type: Lithium-ion'
        },
        input: {
          label: 'INPUT',
          value: '5V/2.4A, 9V/2.0A, 12V/1.5A'
        },
        output: {
          label: 'OUTPUT',
          value: '5V/2.4A, 9V/2.0A, 12V/1.5A'
        },
        charging: {
          label: 'CHARGING',
          value: 'USB-C to USB-C: 22W fast charging\nMax Power: 36W'
        },
        indicators: {
          label: 'LED INDICATORS',
          value: 'Easy-to-read LED indicators for battery level and charging status'
        },
        design: {
          label: 'DESIGN',
          value: 'Compact and lightweight, pocket-friendly portability\nSmall Size – Easy to Carry'
        }
      }
    }
  },
  {
    id: 45,
    name: 'Common Optical Port (COP-3 USB)',
    subtitle: 'COP-3 USB',
    dataSheet: '/brochures/Common Optical Port USB.pdf',
    category: 'accessories',
    image: '/images/products/cop-3-usb.jpg',
    description: 'Analogics Common Optical Port (COP-3 USB) is compatible with IEC 1107, PACT and ANSI standards. It features narrow band IR for better noise immunity and galvanically isolated communication, self-powered from RS-232C signals.',
    detailedInfo: {
      overview: 'Analogic has developed an innovative Common Optical Port for the convenience of meter readers in the field. With Analogic\'s CMRI and Common Optical Port, meter reader may virtually read any meter in the field.\n\nThe Common Optical Port (COP-3) has been tested for proper operation with various branded Tri-vector meters manufactured by M/s. Secure Meters, L & T, Elster, Duke Arnics, Schlumberger, Genus etc. The single optical head, multi adaptor arrangement will facilitate a low cost, Universal Solution for meter reading through CMRI, GSM/GPRS, CDMA, PSTN Modems.\n\nSome of the important features of Common Optical Port are Highly sensitive and fast response, narrow band infrared sensors with built in optical filter to minimize daylight bias and spurious/noise and can work up to 19,200 baud rate.',
      keyFeatures: [
        'Compatible to IEC 1107, PACT and ANSI standards',
        'Narrow band IR for better noise immunity',
        'Galvanically isolated communication',
        'No external power (self-powered from RS-232C signals)',
        'High impact, Compact, ABS plastic casing'
      ],
      applicationAreas: [
        'Meter Reading (CMRI)',
        'GSM/GPRS, CDMA, PSTN Modem Communication',
        'Tri-vector Meter Data Collection',
        'Field Meter Reading Operations'
      ],
      technicalSpecs: {
        optical: {
          label: 'OPTICAL BANDWIDTH',
          value: '900 to 1000 nano meters'
        },
        power: {
          label: 'POWER',
          value: 'No external power, very low operating power derived from RS-232C signals'
        },
        communication: {
          label: 'COMMUNICATION',
          value: 'USB-Type "A" Connector\nUSB - Type "C" Connector (Optional)'
        },
        cable: {
          label: 'CABLE LENGTH',
          value: '0.5 mts. Standard (optional 1, 2, 3... meters)'
        },
        weight: {
          label: 'WEIGHT',
          value: '120 gms'
        }
      }
    }
  },
  {
    id: 52,
    name: '4G Magnetic Mount Antenna (5.5 dBi)',
    category: 'accessories',
    dataSheet: '/brochures/4G Magnetic Mount Antenna.pdf',
    image: '/images/products/4g-magnetic-mount-antenna.jpg',
    description: 'A high-performance 4G LTE magnetic mount antenna designed for indoor and outdoor use. It supports multiple frequency bands across GSM, 3G, and 4G/LTE networks, providing reliable wireless signal reception and transmission.',
    detailedInfo: {
      overview: 'A high-performance 4G LTE magnetic mount antenna designed for indoor and outdoor use. It supports multiple frequency bands across GSM, 3G, and 4G/LTE networks, providing reliable wireless signal reception and transmission. The magnetic base ensures easy mounting on metal surfaces and is ideal for routers, modems, gateways, and industrial communication equipment.',
      keyFeatures: [
        'Supports GSM / 3G / 4G (LTE) frequency bands',
        'Omni-directional radiation pattern',
        'Magnetic mount base for easy installation',
        'RG178 cable with 3m standard length (customizable)',
        'SMA-J (Male SMA) connector'
      ],
      technicalSpecs: {
        frequencyRange: {
          label: 'FREQUENCY RANGE',
          value: '700 – 2700 MHz (GSM/4G)'
        },
        vswr: {
          label: 'VSWR',
          value: '≤ 1.5'
        },
        impedance: {
          label: 'IMPEDANCE',
          value: '50 Ω'
        },
        antennaType: {
          label: 'ANTENNA TYPE',
          value: 'Omni-directional'
        },
        cable: {
          label: 'CABLE',
          value: 'Type: RG178\nLength: 3 meters (customizable)'
        },
        maxPower: {
          label: 'MAX POWER',
          value: '50 W'
        },
        gain: {
          label: 'GAIN',
          value: '5.5 dBi'
        },
        physical: {
          label: 'PHYSICAL',
          value: 'Height: 29 cm\nWeight: 50 grams\nColor: Black'
        },
        connector: {
          label: 'CONNECTOR',
          value: 'SMA-J (Male SMA)'
        },
        useCase: {
          label: 'USE CASE',
          value: 'Outdoor antenna for GSM/4G modem'
        }
      }
    }
  },
  {
    id: 53,
    name: '4G Magnetic Mount Antenna (6 dBi)',
    category: 'accessories',
    dataSheet: '/brochures/4G Magnetic Mount Antenna (RG58).pdf',
    image: '/images/products/4g-magnetic-mount-antenna-rg58.jpg',
    description: 'A 4G LTE magnetic mount antenna variant with RG58 cable, designed for outdoor antenna use with GSM/4G modems and industrial communication equipment.',
    detailedInfo: {
      overview: 'A 4G LTE magnetic mount antenna designed for indoor and outdoor use. It supports multiple frequency bands across GSM, 3G, and 4G/LTE networks for reliable wireless signal reception and transmission. The magnetic base ensures easy mounting on metal surfaces and is ideal for routers, modems, gateways, and industrial communication equipment.',
      keyFeatures: [
        'Frequency range: 700 – 2700 MHz (GSM/4G)',
        'VSWR ≤ 1.5',
        'Omni-directional antenna',
        'Magnetic mount base',
        'SMA-J (Male SMA) connector'
      ],
      technicalSpecs: {
        frequencyRange: {
          label: 'FREQUENCY RANGE',
          value: '700 – 2700 MHz (GSM/4G)'
        },
        vswr: {
          label: 'VSWR',
          value: '≤ 1.5'
        },
        impedance: {
          label: 'IMPEDANCE',
          value: '50 Ω'
        },
        antennaType: {
          label: 'ANTENNA TYPE',
          value: 'Omni-directional'
        },
        cable: {
          label: 'CABLE',
          value: 'Type: RG58\nLength: 3 meters (customizable)'
        },
        maxPower: {
          label: 'MAX POWER',
          value: '50 W'
        },
        gain: {
          label: 'GAIN',
          value: '6 dBi'
        },
        physical: {
          label: 'PHYSICAL',
          value: 'Height: 32 cm\nWeight: 230 grams\nColor: Black'
        },
        connector: {
          label: 'CONNECTOR',
          value: 'SMA-J (Male SMA)'
        },
        useCase: {
          label: 'USE CASE',
          value: 'Outdoor antenna for GSM/4G modem'
        }
      }
    }
  },
  {
    id: 46,
    name: '4G LTE NIC Card',
    category: 'smart-meters',
    dataSheet: '/brochures/NIC CARD_1.pdf',
    image: '/images/products/4g-lte-nic-card.jpg',
    description: 'An advanced meter reading NIC Card which automatically collects data from Electronic Energy Meters and transfers the acquired data to the server with its in-built 4G communication technology. Compact, easy to install in existing meter boxes and can be remotely configured or programmed.',
    detailedInfo: {
      overview: 'An advanced meter reading NIC Card which automatically collects data from Electronic Energy Meters and transfers the acquired data to the server with its in-built 4G communication technology. It is compact, easy to install in existing meter boxes and can be remotely configured or programmed.',
      keyFeatures: [
        'Compact and Easy to install',
        'Supports wireless communication with 4G LTE technology',
        'Supports MIOS compliant / Modbus / IEC 62056-21 / DLMS protocols for data collection from energy meters of any make and model',
        'Online monitoring of Virtual Billing parameters and Real-time Tamper events',
        'Power outage, Power Quality Management and Tamper Management',
        'Load Control',
        'GPS time synchronization from server for effective energy audit',
        'Energy auditing and accounting',
        'Two way communication, facilitating monitoring, controlling and administration',
        'Protection against harsh environment, EMI-EMC, AC Voltages, Surge etc.'
      ],
      applicationAreas: [
        'Energy Meter Data Collection',
        'Smart Metering',
        'AMR / AMI Solutions',
        'Power Quality Monitoring'
      ],
      technicalSpecs: {
        processor: {
          label: 'PROCESSOR',
          value: 'CPU: ARM'
        },
        supportBands: {
          label: 'SUPPORT BANDS',
          value: 'TDD-LTE: B34/B38/B39/B40/B41\nFDD-LTE: B1/B3/B5/B8'
        },
        memory: {
          label: 'MEMORY',
          value: 'RAM: 16 MB\nFlash: 8 MB'
        },
        wireless: {
          label: 'WIRELESS CONNECTIVITY',
          value: 'Connectivity: FDD LTE CAT 1\nDL: Max 10 Mbps\nUL: Max 5 Mbps'
        },
        operatingConditions: {
          label: 'OPERATING CONDITIONS',
          value: 'Operating Temperature: -10°C to 60°C\nRelative Humidity: 5 - 95% (Non-condensing)'
        }
      }
    }
  }
];
