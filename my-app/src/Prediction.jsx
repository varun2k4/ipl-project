import React, { useState } from "react";
import "./Prediction.css";

const Prediction = () => {
  const [selectedBatter, setSelectedBatter] = useState("");
  const [selectedTossWinner, setSelectedTossWinner] = useState("");
  const [selectedVenue, setSelectedVenue] = useState("");
  const [selectedBowler, setSelectedBowler] = useState("");
  const [selectedToss, setSelectedToss] = useState("");
  const [selectedBattingTeam, setSelectedBattingTeam] = useState("");
  const [selectedBowlingTeam, setSelectedBowlingTeam] = useState("");

  const batter = [
    "DA Warner",
    "S Dhawan",
    "MC Henriques",
    "Yuvraj Singh",
    "DJ Hooda",
    "BCJ Cutting",
    "CH Gayle",
    "Mandeep Singh",
    "TM Head",
    "KM Jadhav",
    "SR Watson",
    "Sachin Baby",
    "STR Binny",
    "S Aravind",
    "YS Chahal",
    "TS Mills",
    "A Choudhary",
    "PA Patel",
    "JC Buttler",
    "RG Sharma",
    "N Rana",
    "AT Rayudu",
    "KH Pandya",
    "KA Pollard",
    "HH Pandya",
    "TG Southee",
    "AM Rahane",
    "MA Agarwal",
    "SPD Smith",
    "BA Stokes",
    "MS Dhoni",
    "JJ Roy",
    "BB McCullum",
    "SK Raina",
    "AJ Finch",
    "KD Karthik",
    "G Gambhir",
    "CA Lynn",
    "MK Tiwary",
    "DT Christian",
    "HM Amla",
    "M Vohra",
    "WP Saha",
    "AR Patel",
    "GJ Maxwell",
    "DA Miller",
    "Vishnu Vinod",
    "Iqbal Abdulla",
    "P Negi",
    "AP Tare",
    "SW Billings",
    "KK Nair",
    "SV Samson",
    "RR Pant",
    "CH Morris",
    "CR Brathwaite",
    "PJ Cummins",
    "A Mishra",
    "S Nadeem",
    "Z Khan",
    "DR Smith",
    "DS Kulkarni",
    "P Kumar",
    "Basil Thampi",
    "RV Uthappa",
    "MK Pandey",
    "YK Pathan",
    "SA Yadav",
    "CR Woakes",
    "SP Narine",
    "Harbhajan Singh",
    "AB de Villiers",
    "CJ Anderson",
    "F du Plessis",
    "RA Tripathi",
    "R Bhatia",
    "DL Chahar",
    "A Zampa",
    "AB Dinda",
    "Imran Tahir",
    "NV Ojha",
    "V Shankar",
    "Rashid Khan",
    "B Kumar",
    "MP Stoinis",
    "MM Sharma",
    "VR Aaron",
    "V Kohli",
    "MJ McClenaghan",
    "Ankit Sharma",
    "SN Thakur",
    "RD Chahar",
    "LH Ferguson",
    "C de Grandhomme",
    "Bipul Sharma",
    "SS Iyer",
    "EJG Morgan",
    "KC Cariappa",
    "Sandeep Sharma",
    "Ishan Kishan",
    "JD Unadkat",
    "AF Milne",
    "S Badree",
    "AD Mathews",
    "Mohammed Shami",
    "Mohammad Nabi",
    "I Sharma",
    "RA Jadeja",
    "AJ Tye",
    "KS Williamson",
    "SE Marsh",
    "Shakib Al Hasan",
    "JP Faulkner",
    "MG Johnson",
    "K Rabada",
    "AD Nath",
    "NM Coulter-Nile",
    "Kuldeep Yadav",
    "UT Yadav",
    "Washington Sundar",
    "KV Sharma",
    "DM Bravo",
    "AR Bawne",
    "SP Jackson",
    "MJ Guptill",
    "Anureet Singh",
    "IK Pathan",
    "Ankit Soni",
    "JJ Bumrah",
    "SL Malinga",
    "PJ Sangwan",
    "S Kaul",
    "LMP Simmons",
    "MN Samuels",
    "Swapnil Singh",
    "R Tewatia",
    "MM Patel",
    "SS Tiwary",
    "TA Boult",
    "CJ Jordan",
    "IR Jaggi",
    "PP Chawla",
    "AS Rajpoot",
    "SC Ganguly",
    "RT Ponting",
    "DJ Hussey",
    "Mohammad Hafeez",
    "R Dravid",
    "W Jaffer",
    "JH Kallis",
    "CL White",
    "MV Boucher",
    "B Akhil",
    "AA Noffke",
    "SB Joshi",
    "ML Hayden",
    "MEK Hussey",
    "JDP Oram",
    "S Badrinath",
    "K Goel",
    "JR Hopes",
    "KC Sangakkara",
    "SM Katich",
    "T Kohli",
    "M Kaif",
    "DS Lehmann",
    "M Rawat",
    "D Salunkhe",
    "SK Warne",
    "SK Trivedi",
    "V Sehwag",
    "L Ronchi",
    "ST Jayasuriya",
    "DJ Thornely",
    "PR Shah",
    "AM Nayar",
    "SM Pollock",
    "S Chanderpaul",
    "LRPL Taylor",
    "AC Gilchrist",
    "Y Venugopal Rao",
    "VVS Laxman",
    "A Symonds",
    "SB Styris",
    "AS Yadav",
    "SB Bangar",
    "WPUJC Vaas",
    "RP Singh",
    "LR Shukla",
    "DPMD Jayawardene",
    "S Sohal",
    "B Lee",
    "WA Mota",
    "Kamran Akmal",
    "Shahid Afridi",
    "DJ Bravo",
    "MA Khote",
    "A Nehra",
    "GC Smith",
    "Pankaj Singh",
    "RR Sarwan",
    "S Sreesanth",
    "VRV Singh",
    "R Vinay Kumar",
    "AB Agarkar",
    "M Kartik",
    "Shoaib Malik",
    "MF Maharoof",
    "VY Mahesh",
    "TM Srivastava",
    "B Chipli",
    "DW Steyn",
    "DB Das",
    "HH Gibbs",
    "DNT Zoysa",
    "D Kalyankrishna",
    "SA Asnodkar",
    "Sohail Tanvir",
    "Salman Butt",
    "BJ Hodge",
    "Umar Gul",
    "SP Fleming",
    "S Vidyut",
    "JA Morkel",
    "LPC Silva",
    "DB Ravi Teja",
    "Misbah-ul-Haq",
    "YV Takawale",
    "RR Raje",
    "Mohammad Asif",
    "GD McGrath",
    "Joginder Sharma",
    "MS Gony",
    "M Muralitharan",
    "M Ntini",
    "DT Patil",
    "A Kumble",
    "S Anirudha",
    "CK Kapugedera",
    "A Chopra",
    "T Taibu",
    "J Arunkumar",
    "PP Ojha",
    "SP Goswami",
    "SR Tendulkar",
    "U Kaul",
    "TM Dilshan",
    "AD Mascarenhas",
    "Niraj Patel",
    "LA Pomersbach",
    "Younis Khan",
    "PM Sarvesh Kumar",
    "DP Vijaykumar",
    "Shoaib Akhtar",
    "Abdur Razzak",
    "H Das",
    "SD Chitnis",
    "CRD Fernando",
    "VS Yeligati",
    "L Balaji",
    "A Mukund",
    "RR Powar",
    "JP Duminy",
    "A Flintoff",
    "T Thushara",
    "JD Ryder",
    "KP Pietersen",
    "T Henderson",
    "Kamran Khan",
    "RS Bopara",
    "R Bishnoi",
    "FH Edwards",
    "PC Valthaty",
    "RJ Quiney",
    "AS Raut",
    "Yashpal Singh",
    "M Manhas",
    "AA Bilakhia",
    "AN Ghosh",
    "BAW Mendis",
    "DL Vettori",
    "MN van Wyk",
    "RE van der Merwe",
    "TL Suman",
    "Shoaib Ahmed",
    "GR Napier",
    "KP Appanna",
    "LA Carseldine",
    "SM Harwood",
    "M Vijay",
    "SB Jakati",
    "RJ Harris",
    "D du Preez",
    "M Morkel",
    "J Botha",
    "C Nanda",
    "Mashrafe Mortaza",
    "A Singh",
    "GJ Bailey",
    "AB McDonald",
    "Y Nagar",
    "SS Shaikh",
    "R Ashwin",
    "Mohammad Ashraful",
    "CA Pujara",
    "OA Shah",
    "Anirudh Singh",
    "Jaskaran Singh",
    "R Sathish",
    "R McLaren",
    "AA Jhunjhunwala",
    "P Dogra",
    "A Uniyal",
    "MS Bisla",
    "YA Abdulla",
    "JM Kemp",
    "S Tyagi",
    "RS Gavaskar",
    "SE Bond",
    "S Ladda",
    "DP Nannes",
    "MJ Lumb",
    "DR Martyn",
    "S Narwal",
    "AB Barath",
    "FY Fazal",
    "AC Voges",
    "MD Mishra",
    "J Theron",
    "SJ Srivastava",
    "R Sharma",
    "SW Tait",
    "KB Arun Karthik",
    "KAJ Roach",
    "PD Collingwood",
    "CK Langeveldt",
    "VS Malik",
    "A Mithun",
    "AP Dole",
    "AN Ahmed",
    "RS Sodhi",
    "DE Bollinger",
    "S Sriram",
    "B Sumanth",
    "C Madan",
    "AG Paunikar",
    "MR Marsh",
    "Harmeet Singh",
    "RV Gomez",
    "AUK Pathan",
    "UBT Chand",
    "DJ Jacobs",
    "Sunny Singh",
    "NJ Rimmington",
    "AL Menaria",
    "WD Parnell",
    "JJ van der Wath",
    "R Ninan",
    "MS Wade",
    "TD Paine",
    "SB Wagh",
    "AC Thomas",
    "JEC Franklin",
    "DH Yagnik",
    "S Randiv",
    "BJ Haddin",
    "NLTC Perera",
    "NL McCullum",
    "JE Taylor",
    "J Syed Mohammad",
    "RN ten Doeschate",
    "TR Birt",
    "AG Murtaza",
    "Harpreet Singh",
    "M Klinger",
    "AC Blizzard",
    "I Malhotra",
    "L Ablish",
    "CA Ingram",
    "P Parameswaran",
    "CJ Ferguson",
    "AA Chavan",
    "ND Doshi",
    "Y Gnaneswara Rao",
    "S Rana",
    "BA Bhatt",
    "RE Levi",
    "KK Cooper",
    "HV Patel",
    "DAJ Bracewell",
    "DJ Harris",
    "GB Hogg",
    "RR Bhatkal",
    "CJ McKay",
    "N Saini",
    "Azhar Mahmood",
    "RJ Peterson",
    "KMDN Kulasekara",
    "A Ashish Reddy",
    "V Pratap Singh",
    "BB Samantray",
    "MJ Clarke",
    "Gurkeerat Singh",
    "AP Majumdar",
    "PA Reddy",
    "K Upadhyay",
    "P Awana",
    "AD Russell",
    "A Chandila",
    "Sunny Gupta",
    "MC Juneja",
    "GH Vihari",
    "MDKJ Perera",
    "R Shukla",
    "B Laughlin",
    "BMAJ Mendis",
    "R Rampaul",
    "SMSM Senanayake",
    "BJ Rohrer",
    "KL Rahul",
    "Q de Kock",
    "R Dhawan",
    "LJ Wright",
    "IC Pandey",
    "CM Gautam",
    "X Thalaivan Sargunam",
    "DJG Sammy",
    "KW Richardson",
    "UA Birla",
    "Parvez Rasool",
    "PV Tambe",
    "NJ Maddinson",
    "JDS Neesham",
    "MA Starc",
    "BR Dunk",
    "RR Rossouw",
    "Shivam Sharma",
    "VH Zol",
    "BE Hendricks",
    "S Gopal",
    "M de Lange",
    "JO Holder",
    "Karanveer Singh",
    "SA Abbott",
    "J Suchith",
    "RG More",
    "D Wiese",
    "SN Khan",
    "DJ Muthuswami",
    "C Munro",
    "P Sahu",
    "KJ Abbott",
    "M Ashwin",
    "NS Naik",
    "PSP Handscomb",
    "J Yadav",
    "UT Khawaja",
    "F Behardien",
    "BB Sran",
    "S Kaushik",
    "ER Dwivedi",
    "E Lewis",
    "M Wood",
    "R Singh",
    "D Short",
    "K Gowtham",
    "T Curran",
    "M Markande",
    "B Stanlake",
    "M Ur Rahman",
    "A Dananjaya",
    "S Gill",
    "S Mavi",
    "Mohammed Siraj",
    "H Klaasen",
    "R Bhui",
    "J Archer",
    "P Shaw",
    "L Plunkett",
    "Mustafizur Rahman",
    "A Hales",
    "M Lomror",
    "D Shorey",
    "M Ali",
    "P Krishna",
    "P Chopra",
    "J Searles",
    "I Sodhi",
    "S Hetmyer",
    "S Dube",
    "J Bairstow",
    "C Ingram",
    "K Paul",
    "R Salam",
    "N Pooran",
    "N Naik",
    "H Vihari",
    "P R Barman",
    "S Curran",
    "H Viljoen",
    "Avesh Khan",
    "S Lamichhane",
    "S Sharma",
    "H Gurney",
    "SD Lad",
    "A Joseph",
    "R Parag",
    "M Santner",
    "J Denly",
    "L Livingstone",
    "K Ahmed",
    "A Turner",
    "H Brar",
    "S Rutherford",
    "P Raj",
    "S Singh",
  ];

  const team = [
    "Sunrisers Hyderabad",
    "Kolkata Knight Riders",
    "Kings XI Punjab",
    "Royal Challengers Bangalore",
    "Mumbai Indians",
    "Gujarat Lions",
    "Chennai Super Kings",
    "Rajasthan Royals",
    "Delhi Capitals",
    "Lucknow Super Giants",
  ];

  //venue
  const venues = [
    "Rajiv Gandhi International Stadium, Uppal",
    "Maharashtra Cricket Association Stadium",
    "Saurashtra Cricket Association Stadium",
    "Holkar Cricket Stadium",
    "M Chinnaswamy Stadium",
    "Wankhede Stadium",
    "Eden Gardens",
    "Feroz Shah Kotla",
    "Punjab Cricket Association IS Bindra Stadium, Mohali",
    "Green Park",
    "Punjab Cricket Association Stadium, Mohali",
    "Sawai Mansingh Stadium",
    "MA Chidambaram Stadium, Chepauk",
    "Dr DY Patil Sports Academy",
    "Newlands",
    "St George's Park",
    "Kingsmead",
    "SuperSport Park",
    "Buffalo Park",
    "New Wanderers Stadium",
    "De Beers Diamond Oval",
    "OUTsurance Oval",
    "Brabourne Stadium",
    "Sardar Patel Stadium, Motera",
    "Barabati Stadium",
    "Vidarbha Cricket Association Stadium, Jamtha",
    "Himachal Pradesh Cricket Association Stadium",
    "Nehru Stadium",
    "Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium",
    "Subrata Roy Sahara Stadium",
    "Shaheed Veer Narayan Singh International Stadium",
    "JSCA International Stadium Complex",
    "Sheikh Zayed Stadium",
    "Sharjah Cricket Stadium",
    "Dubai International Cricket Stadium",
    "M. A. Chidambaram Stadium",
    "Feroz Shah Kotla Ground",
    "M. Chinnaswamy Stadium",
    "Rajiv Gandhi Intl. Cricket Stadium",
    "IS Bindra Stadium",
    "ACA-VDCA Stadium",
  ];

  //bowler
  const bowlers = [
    "TS Mills",
    "A Choudhary",
    "YS Chahal",
    "S Aravind",
    "SR Watson",
    "TM Head",
    "STR Binny",
    "A Nehra",
    "B Kumar",
    "BCJ Cutting",
    "Rashid Khan",
    "DJ Hooda",
    "MC Henriques",
    "Bipul Sharma",
    "AB Dinda",
    "DL Chahar",
    "BA Stokes",
    "Imran Tahir",
    "A Zampa",
    "R Bhatia",
    "TG Southee",
    "HH Pandya",
    "MJ McClenaghan",
    "JJ Bumrah",
    "KH Pandya",
    "KA Pollard",
    "TA Boult",
    "PP Chawla",
    "SP Narine",
    "CR Woakes",
    "Kuldeep Yadav",
    "YK Pathan",
    "P Kumar",
    "DS Kulkarni",
    "MS Gony",
    "S Kaushik",
    "DR Smith",
    "SB Jakati",
    "Sandeep Sharma",
    "MM Sharma",
    "AR Patel",
    "T Natarajan",
    "MP Stoinis",
    "Swapnil Singh",
    "DT Christian",
    "RD Chahar",
    "Z Khan",
    "CH Morris",
    "PJ Cummins",
    "S Nadeem",
    "A Mishra",
    "CR Brathwaite",
    "B Stanlake",
    "Iqbal Abdulla",
    "P Negi",
    "SK Raina",
    "Tejas Baroka",
    "Basil Thampi",
    "SL Malinga",
    "Harbhajan Singh",
    "AS Rajpoot",
    "VR Aaron",
    "CJ Anderson",
    "Mustafizur Rahman",
    "UT Yadav",
    "C de Grandhomme",
    "I Sharma",
    "GJ Maxwell",
    "S Badree",
    "AJ Tye",
    "RA Jadeja",
    "Ankit Sharma",
    "LH Ferguson",
    "SN Thakur",
    "KC Cariappa",
    "MM Patel",
    "AF Milne",
    "JD Unadkat",
    "NM Coulter-Nile",
    "Mohammed Shami",
    "AD Mathews",
    "BB Sran",
    "S Kaul",
    "Mohammad Nabi",
    "J Yadav",
    "Mohammed Siraj",
    "Yuvraj Singh",
    "JP Faulkner",
    "Shakib Al Hasan",
    "K Rabada",
    "MG Johnson",
    "Washington Sundar",
    "SS Agarwal",
    "NB Singh",
    "KV Sharma",
    "RA Tripathi",
    "Ankit Soni",
    "Anureet Singh",
    "IK Pathan",
    "PJ Sangwan",
    "MN Samuels",
    "MJ Henry",
    "R Tewatia",
    "R Vinay Kumar",
    "Avesh Khan",
    "HV Patel",
    "CJ Jordan",
    "AA Noffke",
    "JH Kallis",
    "SB Joshi",
    "CL White",
    "AB Agarkar",
    "SC Ganguly",
    "LR Shukla",
    "B Lee",
    "S Sreesanth",
    "JR Hopes",
    "K Goel",
    "WA Mota",
    "JDP Oram",
    "M Muralitharan",
    "P Amarnath",
    "Joginder Sharma",
    "GD McGrath",
    "B Geeves",
    "MF Maharoof",
    "DL Vettori",
    "SK Trivedi",
    "SK Warne",
    "D Salunkhe",
    "B Akhil",
    "SM Pollock",
    "ST Jayasuriya",
    "AM Nayar",
    "M Kartik",
    "Mohammad Hafeez",
    "DJ Hussey",
    "WPUJC Vaas",
    "RP Singh",
    "SB Styris",
    "SB Bangar",
    "A Symonds",
    "PP Ojha",
    "Pankaj Singh",
    "Mohammad Asif",
    "VY Mahesh",
    "Shahid Afridi",
    "DJ Bravo",
    "VS Yeligati",
    "MA Khote",
    "D Kalyankrishna",
    "VRV Singh",
    "Sohail Tanvir",
    "A Kumble",
    "DNT Zoysa",
    "SD Chitnis",
    "Shoaib Malik",
    "DW Steyn",
    "JA Morkel",
    "CRD Fernando",
    "V Kohli",
    "V Sehwag",
    "Gagandeep Singh",
    "Y Venugopal Rao",
    "Umar Gul",
    "M Ntini",
    "DP Vijaykumar",
    "DB Ravi Teja",
    "LPC Silva",
    "DJ Thornely",
    "RR Raje",
    "S Vidyut",
    "L Balaji",
    "CK Kapugedera",
    "AD Mascarenhas",
    "Shoaib Akhtar",
    "RR Powar",
    "PM Sarvesh Kumar",
    "Abdur Razzak",
    "TM Dilshan",
    "RG Sharma",
    "A Nel",
    "BAW Mendis",
    "T Thushara",
    "A Flintoff",
    "Kamran Khan",
    "T Henderson",
    "JD Ryder",
    "DP Nannes",
    "AM Salvi",
    "YA Abdulla",
    "VS Malik",
    "FH Edwards",
    "Harmeet Singh",
    "CH Gayle",
    "KP Pietersen",
    "LRPL Taylor",
    "RS Bopara",
    "MK Tiwary",
    "RR Bose",
    "KP Appanna",
    "Shoaib Ahmed",
    "BJ Hodge",
    "SR Tendulkar",
    "RE van der Merwe",
    "JP Duminy",
    "S Tyagi",
    "GR Napier",
    "SM Harwood",
    "AS Raut",
    "D du Preez",
    "RJ Harris",
    "TL Suman",
    "A Singh",
    "M Morkel",
    "LA Carseldine",
    "A Mithun",
    "C Nanda",
    "SS Sarkar",
    "AM Rahane",
    "J Botha",
    "Mashrafe Mortaza",
    "AB McDonald",
    "Y Nagar",
    "CK Langeveldt",
    "R Ashwin",
    "RA Shaikh",
    "Jaskaran Singh",
    "SW Tait",
    "A Uniyal",
    "AA Jhunjhunwala",
    "R McLaren",
    "AG Murtaza",
    "R Sathish",
    "RS Gavaskar",
    "JM Kemp",
    "S Ladda",
    "SE Bond",
    "S Narwal",
    "SJ Srivastava",
    "AC Voges",
    "R Sharma",
    "J Theron",
    "NLTC Perera",
    "KAJ Roach",
    "PD Collingwood",
    "C Ganapathy",
    "MB Parmar",
    "SB Wagh",
    "DE Bollinger",
    "AP Dole",
    "AN Ahmed",
    "FY Fazal",
    "MR Marsh",
    "L Ablish",
    "S Sriram",
    "AJ Finch",
    "ND Doshi",
    "S Randiv",
    "AL Menaria",
    "AUK Pathan",
    "RV Gomez",
    "JEC Franklin",
    "AC Thomas",
    "WD Parnell",
    "M Manhas",
    "NJ Rimmington",
    "RN ten Doeschate",
    "BA Bhatt",
    "JJ van der Wath",
    "R Ninan",
    "PC Valthaty",
    "S Dhawan",
    "J Syed Mohammad",
    "NL McCullum",
    "JE Taylor",
    "KMDN Kulasekara",
    "P Parameswaran",
    "I Malhotra",
    "B Chipli",
    "AA Kazi",
    "Anand Rajan",
    "P Prasanth",
    "Y Gnaneswara Rao",
    "AA Chavan",
    "S Rana",
    "SS Mundhe",
    "RW Price",
    "M de Lange",
    "KK Cooper",
    "DAJ Bracewell",
    "DJ Harris",
    "TP Sudhindra",
    "F du Plessis",
    "GB Hogg",
    "RR Bhatkal",
    "P Awana",
    "V Pratap Singh",
    "CJ McKay",
    "AD Russell",
    "A Ashish Reddy",
    "Azhar Mahmood",
    "A Chandila",
    "LJ Wright",
    "RJ Peterson",
    "R Shukla",
    "MJ Clarke",
    "BW Hilfenhaus",
    "SPD Smith",
    "K Upadhyay",
    "Sunny Gupta",
    "B Laughlin",
    "GH Vihari",
    "BMAJ Mendis",
    "Harmeet Singh (2)",
    "R Dhawan",
    "R Rampaul",
    "SMSM Senanayake",
    "JO Holder",
    "IC Pandey",
    "DJG Sammy",
    "KW Richardson",
    "P Suyal",
    "PV Tambe",
    "BJ Rohrer",
    "Parvez Rasool",
    "MG Neser",
    "AC Gilchrist",
    "MA Starc",
    "JDS Neesham",
    "M Vijay",
    "SA Yadav",
    "Shivam Sharma",
    "V Shankar",
    "LMP Simmons",
    "K Santokie",
    "S Gopal",
    "BE Hendricks",
    "JW Hastings",
    "Karanveer Singh",
    "DJ Muthuswami",
    "SA Abbott",
    "J Suchith",
    "RG More",
    "D Wiese",
    "GS Sandhu",
    "Gurkeerat Singh",
    "M Ashwin",
    "C Munro",
    "P Sahu",
    "KJ Abbott",
    "T Shamsi",
    "SM Boland",
    "Sachin Baby",
    "N Rana",
    "KS Williamson",
    "M Wood",
    "M Markande",
    "M Ur Rahman",
    "K Khejroliya",
    "K Gowtham",
    "D Short",
    "T Curran",
    "A Dananjaya",
    "S Mavi",
    "J Archer",
    "L Plunkett",
    "I Sodhi",
    "M Lomror",
    "L Ngidi",
    "KM Asif",
    "D Willey",
    "P Krishna",
    "M Ali",
    "J Searles",
    "S Lamichhane",
    "J Dala",
    "K Ahmed",
    "N Saini",
    "S Dube",
    "L Ferguson",
    "S Sharma",
    "R Salam",
    "K Paul",
    "S Curran",
    "V Chakravarthy",
    "H Viljoen",
    "Mandeep Singh",
    "P R Barman",
    "M Santner",
    "H Vihari",
    "J Behrendorff",
    "S Kuggeleijn",
    "A Joseph",
    "H Gurney",
    "S Midhun",
    "R Parag",
    "L Livingstone",
    "SN Khan",
    "S Rutherford",
    "H Brar",
    "P Raj",
    "O Thomas",
    "A Roy",
    "S Warrier",
  ];
  const toss = ["Select Decision", "Bat", "Bowl"];

  return (
    <>
    <div id="abc">
    <main className="item">
      <form action="/" method="post">
        <div id="first">
          <div className="f">
            <h4> Venue</h4>
            <select
              className="f1"
              value={selectedVenue}
              onChange={(e) => setSelectedVenue(e.target.value)}
            >
              <option value="" disabled>Select venue</option> {/* Placeholder option */}
              {venues.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="f">
            <h4>Toss Winner</h4>
            <select
              className="f1"
              value={selectedTossWinner}
              onChange={(e) => setSelectedTossWinner(e.target.value)}
            >
              <option value="" disabled>Select toss winner</option> {/* Placeholder option */}
              {team.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="f">
            {" "}
            <h4> Toss Decision</h4>
            <select
              className="f1"
              value={selectedToss}
              onChange={(e) => setSelectedToss(e.target.value)}
            >
              <option value="" disabled>Choose toss decision</option> {/* Placeholder option */}
              {toss.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="f">
            <h4>Batting Team</h4>
            <select
              className="f1"
              value={selectedBattingTeam}
              onChange={(e) => setSelectedBattingTeam(e.target.value)}
            >
              <option value="" disabled>Select batting team</option> {/* Placeholder option */}
              {team.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="f">
            <h4>Bowling Team</h4>
            <select
              className="f1"
              value={selectedBowlingTeam}
              onChange={(e) => setSelectedBowlingTeam(e.target.value)}
            >
              <option value="" disabled>Select bowling team</option> {/* Placeholder option */}
              {team.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="f">
            {" "}
            <h4> Innings</h4>
            <input
            placeholder="Enter innings"
              className="f1"
              type="number"
              name="innings"
              min="1"
              max="2"
              required
            />
          </div>

          <div className="f">
            <h4> Striker</h4>
            <select
              className="f1"
              value={selectedBatter}
              onChange={(e) => setSelectedBatter(e.target.value)}
            >
              <option value="" disabled>Select Striker</option> {/* Placeholder option */}
              {batter.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="f">
            <h4> Non-Striker</h4>
            <select
              className="f1"
              value={selectedBatter}
              onChange={(e) => setSelectedBatter(e.target.value)}
            >
              <option value="" disabled>Select Non-Striker</option> {/* Placeholder option */}
              {batter.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="f">
            <h4> Number of Overs</h4>
            <input
            placeholder="Enter Number of overs"
              className="f1"
              type="number"
              name="over"
              min="1"
              max="20"
              required
            />
          </div>

          <div className="f">
            {" "}
            <h4> Number of Balls</h4>
            <input
            placeholder="Enter Number of balls"
              className="f1"
              type="number"
              name="ball"
              min="1"
              max="6"
              required
            />
          </div>

          <div className="f">
            <h4> Bowler</h4>
            <select
              className="f1"
              value={selectedBowler}
              onChange={(e) => setSelectedBowler(e.target.value)}
            >
              <option value="" disabled>Select bowler</option> {/* Placeholder option */}
              {bowlers.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="f">
            <h4> CRR</h4>
            <input
            placeholder="Enter current-run-rate"
              className="f1"
              type="number"
              step="0.01"
              name="crr"
              required
            />
          </div>

          <div className="f">
            <h4> Current Score</h4>
            <input placeholder="Enter current score" className="f1" type="number" name="score" min="0" required />
          </div>

          <div className="f">
            {" "}
            <h4 id="f"> Number of Wickets Left</h4>
            <input
            placeholder="Enter Number of Wickets Left"
              className="f1"
              type="number"
              name="Wickets"
              min="0"
              max="10"
              required
            />
          </div>
        </div>
        <div id="btn" className="f">
          <button className="but" type="submit">
            PREDICT
          </button>
        </div>
      </form>
    </main>
    </div>
    </>
  );
};

export default Prediction;