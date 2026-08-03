// SERVIXA HOME - CENTRALIZED BUSINESS INFORMATION & CONSTANTS

export const BUSINESS_INFO = {
  name: "SERVIXA HOME",
  websiteUrl: "https://www.servixahome.online",
  category: "Home Appliance Repair Company",
  tagline: "सेवा • सुरक्षा • समृद्धि | Navi Mumbai's Most Trusted Appliance Repair",
  phone: "+91 8779694303",
  phoneRaw: "+918779694303",
  whatsapp: "+91 8779694303",
  whatsappRaw: "918779694303",
  email: "home.servixa@gmail.com",
  workingHours: "Monday - Sunday: 09:00 AM - 10:00 PM",
  emergencyService: "Available 24/7 for Urgent Repair Needs",
  visitCharge: "₹99",
  visitPolicyNote: "₹99 visit fee is ONLY applicable if customer chooses NOT to repair after inspection. Otherwise, inspection fee is 100% WAIVED & included in repair cost.",
  primaryArea: "Navi Mumbai",
  expansionAreas: ["Mumbai", "Thane"],
  web3FormsKey: "04b0549d-161d-4613-8dc0-066c188969a6",
  ga4Id: "G-541393348",
  gtmId: "GTM-PMZS2J8D"
};

export const SERVICES_LIST = [
  {
    id: "washing-machine",
    title: "Washing Machine Repair",
    path: "/services/washing-machine-repair",
    icon: "WashingMachine",
    shortDesc: "Front Load, Top Load & Automatic Washing Machine Repair by Certified Experts.",
    pricing: "Starting from ₹99 Inspection",
    popularIssues: ["Not Spinning / Draining", "Excessive Noise / Vibration", "Error Code on Display", "Water Leakage Problem", "PCB Controller Repair"],
    brands: ["LG", "Samsung", "Whirlpool", "IFB", "Bosch", "Godrej", "Haier", "Panasonic"]
  },
  {
    id: "ac-repair",
    title: "Air Conditioner Repair & Service",
    path: "/services/ac-repair",
    icon: "Wind",
    shortDesc: "Split & Window AC Servicing, Gas Refilling, PCB Repair & Jet Wash Cleaning.",
    pricing: "Starting from ₹99 Inspection",
    popularIssues: ["AC Not Cooling", "Water Dripping Inside", "Gas Leakage & Refilling", "Compressor Not Starting", "Foul Smell / Dust Accumulation"],
    brands: ["Daikin", "Voltas", "Blue Star", "Carrier", "Hitachi", "LG", "Samsung", "Lloyd"]
  },
  {
    id: "refrigerator",
    title: "Refrigerator Repair",
    path: "/services/refrigerator-repair",
    icon: "Refrigerator",
    shortDesc: "Single Door, Double Door & Side-by-Side Fridge Gas Charging & Cooling Repair.",
    pricing: "Starting from ₹99 Inspection",
    popularIssues: ["No Cooling / Over Cooling", "Freezer Frost Accumulation", "Compressor Relay Defect", "Gas Leakage Repair", "Door Gasket Replacement"],
    brands: ["Samsung", "LG", "Whirlpool", "Godrej", "Haier", "Bosch", "Panasonic", "Electrolux"]
  },
  {
    id: "microwave",
    title: "Microwave Repair",
    path: "/services/microwave-repair",
    icon: "Microwave",
    shortDesc: "Solo, Grill & Convection Microwave Magnetron & Touchpad Panel Service.",
    pricing: "Starting from ₹99 Inspection",
    popularIssues: ["Not Heating Food", "Sparking Inside Chamber", "Turntable Plate Not Rotating", "Buttons / Touch Panel Unresponsive", "Display Error"],
    brands: ["IFB", "LG", "Samsung", "Panasonic", "Bajaj", "Godrej", "Morphy Richards"]
  }
];

export const COMING_SOON_SERVICES = [
  "RO Water Purifier Repair",
  "Kitchen Chimney Repair",
  "Dishwasher Repair",
  "Television Repair",
  "Dryer Repair",
  "Deep Freezer Repair",
  "AMC Maintenance Plans",
  "Commercial Appliance Repair"
];

export const NAVI_MUMBAI_LOCATIONS = [
  { name: "Vashi", slug: "vashi", pincode: "400703", highlight: "Sector 1 to 30 Coverage" },
  { name: "Nerul", slug: "nerul", pincode: "400706", highlight: "East & West Doorstep Service" },
  { name: "CBD Belapur", slug: "cbd-belapur", pincode: "400614", highlight: "Residential & Office Hubs" },
  { name: "Seawoods", slug: "seawoods", pincode: "400706", highlight: "Grand Central & Darave" },
  { name: "Sanpada", slug: "sanpada", pincode: "400705", highlight: "Rapid 30-Min Arrival" },
  { name: "Juinagar", slug: "juinagar", pincode: "400705", highlight: "Quick Response Technicians" },
  { name: "Airoli", slug: "airoli", pincode: "400708", highlight: "Sector 1 to 20 Availability" },
  { name: "Ghansoli", slug: "ghansoli", pincode: "400701", highlight: "Node Wide Doorstep Visit" },
  { name: "Kopar Khairane", slug: "kopar-khairane", pincode: "400709", highlight: "Same Day Inspection" },
  { name: "Rabale", slug: "rabale", pincode: "400701", highlight: "Industrial & Domestic" },
  { name: "Mahape", slug: "mahape", pincode: "400710", highlight: "Millennium Business Park" },
  { name: "Kharghar", slug: "kharghar", pincode: "410210", highlight: "Sectors 1 to 36 Doorstep" },
  { name: "Kamothe", slug: "kamothe", pincode: "410209", highlight: "Affordable Inspection" },
  { name: "Kalamboli", slug: "kalamboli", pincode: "410218", highlight: "Fast Service Delivery" },
  { name: "Panvel", slug: "panvel", pincode: "410206", highlight: "Old & New Panvel Areas" }
];

export const SUPPORTED_BRANDS = [
  { name: "LG", category: "All Appliances" },
  { name: "Samsung", category: "All Appliances" },
  { name: "Whirlpool", category: "Washing & Fridge" },
  { name: "Bosch", category: "Washing & Microwave" },
  { name: "IFB", category: "Washing & Microwave" },
  { name: "Haier", category: "Fridge & AC" },
  { name: "Godrej", category: "Fridge & AC" },
  { name: "Panasonic", category: "AC & Microwave" },
  { name: "Daikin", category: "AC Specialists" },
  { name: "Voltas", category: "AC Service" },
  { name: "Carrier", category: "AC Specialist" },
  { name: "Blue Star", category: "AC & Deep Freezer" },
  { name: "Hitachi", category: "AC & Refrigerator" },
  { name: "Lloyd", category: "AC & Washing Machine" },
  { name: "Siemens", category: "Premium Washing & Microwave" },
  { name: "Electrolux", category: "Washing & Refrigerator" },
  { name: "Midea", category: "AC & Microwave" }
];
