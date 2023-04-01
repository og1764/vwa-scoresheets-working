const FINALS_DATES = ["2022-09-04","2022-09-11","2022-09-18"];

// This is used to get a list of all players. eg: https://vwa.bracketpal.com/leaders/season/25 
const SEASON_ID = "25";

const __CONFIG__ = {
    "venues": {
        "Aquinas": {
            "name": "Aquinas",
            "top": "",
            "mid": "Aquinas",
            "bot": "College",
            "alias": ["Aquinas College"]
        },
        "Ballajura": {
            "name": "Ballajura",
            "top": "",
            "mid": "",
            "bot": "Ballajura",
            "alias": ["Ballajura Indoor Spo"]
        },
        "Bendat": {
            "name": "Bendat",
            "top": "",
            "mid": "",
            "bot": "Bendat",
            "alias": []
        },
        "Cockburn": {
            "name": "Cockburn",
            "top": "",
            "mid": "",
            "bot": "Cockburn",
            "alias": ["Cockburn ARC"]
        },
        "Curtin Stadium": {
            "name": "Curtin Stadium",
            "top": "",
            "mid": "Curtin",
            "bot": "Stadium",
            "alias": ["Curtin"]
        },
        "ECU Mt. Lawley": {
            "name": "ECU Mt. Lawley",
            "top": "",
            "mid": "ECU",
            "bot": "Mt. Lawley",
            "alias": ["ECU", "ECU Mount Lawley", "ECU Mt Lawley"]
        },
        "Geographe Leisure Centre": {
            "name": "Geographe Leisure Centre",
            "top": "Geographe",
            "mid": "Leisure",
            "bot": "Centre",
            "alias": ["Geographe", "Geographe Leisure", "Geographe Lei. Centr", "Geographe Lei. Cntr"]
        },
        "Gold Netball Centre": {
            "name": "Gold Netball Centre",
            "top": "Gold",
            "mid": "Netball",
            "bot": "Centre",
            "alias": []
        },
        "Greenwood College": {
            "name": "Greenwood College",
            "top": "",
            "mid": "Greenwood",
            "bot": "College",
            "alias": []
        },
        "Hale": {
            "name": "Hale",
            "top": "",
            "mid": "",
            "bot": "Hale",
            "alias": ["Hale School"]
        },
        "Halls Head Recreation Centre": {
            "name": "Halls Head Recreation Centre",
            "top": "Halls Head",
            "mid": "Recreation",
            "bot": "Centre",
            "alias": ["Halls Head Rec Centr", "Halls Head Rec"]
        },
        "HBF Stadium Claremont": {
            "name": "HBF Stadium Claremont",
            "top": "",
            "mid": "HBF",
            "bot": "Stadium",
            "alias": ["HBF Stad. Claremont", "HBF", "HBF Stadium", "HBF Stad."]
        },
        "John Wollaston": {
            "name": "John Wollaston",
            "top": "",
            "mid": "John",
            "bot": "Wollaston",
            "alias": ["John Wollaston ACS C", "John Wollaston ACS"]
        },
        "Kingsway": {
            "name": "Kingsway",
            "top": "",
            "mid": "",
            "bot": "Kingsway",
            "alias": ["Kingsway Indoor Stad", "Kingsway Indoor"]
        },
        "Loftus": {
            "name": "Loftus",
            "top": "",
            "mid": "",
            "bot": "Loftus",
            "alias": []
        },
        "Mandurah ARC": {
            "name": "Mandurah ARC",
            "top": "",
            "mid": "Mandurah",
            "bot": "ARC",
            "alias": []
        },
        "MBC": {
            "name": "MBC",
            "top": "",
            "mid": "",
            "bot": "MBC",
            "alias": ["Mandurah Baptist College", "Mandurah Baptist Col"]
        },
        "Melville LeisureFit": {
            "name": "Melville LeisureFit",
            "top": "",
            "mid": "Melville",
            "bot": "LeisureFit",
            "alias": ["Melville Leisure"]
        },
        "Methodist Ladies College": {
            "name": "Methodist Ladies College",
            "top": "Methodist",
            "mid": "Ladies",
            "bot": "College",
            "alias": ["MLC", "Methodist L. Col"]
        },
        "Murdoch Active": {
            "name": "Murdoch Active",
            "top": "",
            "mid": "Murdoch",
            "bot": "Active",
            "alias": []
        },
        "Penrhos College": {
            "name": "Penrhos College",
            "top": "",
            "mid": "Penrhos",
            "bot": "College",
            "alias": ["Penrhos"]
        },
        "Rossmoyne": {
            "name": "Rossmoyne",
            "top": "",
            "mid": "",
            "bot": "Rossmoyne",
            "alias": ["Rossmoyne SHS"]
        },
        "Santa Maria": {
            "name": "Santa Maria",
            "top": "",
            "mid": "Santa",
            "bot": "Maria",
            "alias": ["Santa Maria College"]
        },
        "St Mary's": {
            "name": "St Mary's",
            "top": "",
            "mid": "",
            "bot": "St Mary's",
            "alias": []
        },
        "The Rise": {
            "name": "The Rise",
            "top": "",
            "mid": "",
            "bot": "The Rise",
            "alias": []
        },
        "UWA Recreation Centre": {
            "name": "UWA Recreation Centre",
            "top": "UWA",
            "mid": "Recreation",
            "bot": "Centre",
            "alias": ["UWA", "UWA Rec. Centre", "UWA Rec Centre"]
        },
        "UWA Sport Science": {
            "name": "UWA Sport Science",
            "top": "UWA",
            "mid": "Sport",
            "bot": "Science",
            "alias": []
        },  
        "Wesley College": {
            "name": "Wesley College",
            "top": "",
            "mid": "Wesley",
            "bot": "College",
            "alias": ["Wesley"]
        },
        "Warwick": {
            "name": "Warwick",
            "top": "",
            "mid": "",
            "bot": "Warwick",
            "alias": ["Warwick Stadium", "Warwick Stad."]
        }
    },
    "wavl": {
        "State League Women": {
            "id": 103,
            "long": "State League Women",
            "short": "SL Women"
        },
        "State League Men": {
            "id": 102,
            "long": "State League Men",
            "short": "SL Men"
        },
        "State League Reserve Women": {
            "id": 104,
            "long": "State League Reserve Women",
            "short": "SLR Women"
        },
        "State League Reserve Men": {
            "id": 105,
            "long": "State League Reserve Men",
            "short": "SLR Men"
        },
        "Division 1 Women": {
            "id": 107,
            "long": "Division 1 Women",
            "short": "Div 1 W"
        },
        "Division 1 Men": {
            "id": 106,
            "long": "Division 1 Men",
            "short": "Div 1 M"
        },
        "Division 2 Women": {
            "id": 109,
            "long": "Division 2 Women",
            "short": "Div 2 W"
        },
        "Division 2 Men": {
            "id": 108,
            "long": "Division 2 Men",
            "short": "Div 2 M"
        },
        "Division 3 Women": {
            "id": 111,
            "long": "Division 3 Women",
            "short": "Div 3 W"
        },
        "Division 3 Men": {
            "id": 115,
            "long": "Division 3 Men",
            "short": "Div 3 M"
        },
        "Division 4 Men": {
            "id": 129,
            "long": "Division 4 Men",
            "short": "Div 4 M"
        },
        "Division 4 Women": {
            "id": 112,
            "long": "Division 4 Women",
            "short": "Div 4 W"
        },
        "Division 5 Men": {
            "id": 130,
            "long": "Division 5 Men",
            "short": "Div 5 M"
        },
        "Division 6 Men": {
            "id": 131,
            "long": "Division 6 Men",
            "short": "Div 6 M"
        }
    },
    "jl": {
        "7/8 Female North": {
            "id": 117,
            "long": "7/8 Female North",
            "short": "7/8 F N"
        },
        "7/8 Female South": {
            "id": 118,
            "long": "7/8 Female South",
            "short": "7/8 F S"
        },
        "7/8 Male North": {
            "id": 110,
            "long": "7/8 Male North",
            "short": "7/8 M N"
        },
        "7/8 Male South": {
            "id": 116,
            "long": "7/8 Male South",
            "short": "7/8 M S"
        },
        "9/10 Female Pool 1": {
            "id": 122,
            "long": "9/10 Female Pool 1",
            "short": "9/10 F 1"
        },
        "9/10 Female Pool 2": {
            "id": 125,
            "long": "9/10 Female Pool 2",
            "short": "9/10 F 2"
        },
        "9/10 Female Pool 3": {
            "id": 124,
            "long": "9/10 Female Pool 3",
            "short": "9/10 F 3"
        },
        "9/10 Male North": {
            "id": 121,
            "long": "9/10 Male North",
            "short": "9/10 M N"
        },
        "9/10 Male South Pool 1": {
            "id": 119,
            "long": "9/10 Male South Pool 1",
            "short": "9/10 M S 1"
        },
        "9/10 Male South Pool 2": {
            "id": 120,
            "long": "9/10 Male South Pool 2",
            "short": "9/10 M S 2"
        },
        "11/12 Female": {
            "id": 128,
            "long": "11/12 Female",
            "short": "11/12 F"
        },
        "11/12 Male North": {
            "id": 127,
            "long": "11/12 Male North",
            "short": "11/12 M N"
        },
        "11/12 Male South": {
            "id": 126,
            "long": "11/12 Male South",
            "short": "11/12 M S"
        }
    }
}

const TEAM_ID = {
    '1 Fremantle': ['1', 'Fremantle', '1001', 'State League Men'],
    '2 Southern Cross': ['2', 'Southern Cross', '1002', 'State League Men'],
    '3 UWA': ['3', 'UWA', '1003', 'State League Men'],
    '4 ECU': ['4', 'ECU', '1004', 'State League Men'],
    '5 Reds': ['5', 'Reds', '1005', 'State League Men'],
    '6 Balcatta': ['6', 'Balcatta', '1006', 'State League Men'],
    '8 Rossmoyne': ['8', 'Rossmoyne', '1007', 'State League Men'],
    '10 Northern Stars': ['10', 'Northern Stars', '1008', 'State League Men'],
    
    '11 Fremantle': ['11', 'Fremantle', '1023', 'State League Reserve Men'],
    '12 Southern Cross': ['12', 'Southern Cross', '1024', 'State League Reserve Men'],
    '13 UWA': ['13', 'UWA', '1025', 'State League Reserve Men'],
    '14 ECU': ['14', 'ECU', '1026', 'State League Reserve Men'],
    '15 Reds': ['15', 'Reds', '1027', 'State League Reserve Men'],
    '16 Balcatta': ['16', 'Balcatta', '1028', 'State League Reserve Men'],
    '17 Mandurah': ['17', 'Mandurah', '1029', 'State League Reserve Men'],
    '18 Rossmoyne': ['18', 'Rossmoyne', '1030', 'State League Reserve Men'],
    '19 Busselton': ['19', 'Busselton', '1031', 'State League Reserve Men'],
    '20 Northern Stars': ['20', 'Northern Stars', '1032', 'State League Reserve Men'],

    '21 Fremantle': ['21', 'Fremantle', '1033', 'Division 1 Men'],
    '23 UWA': ['23', 'UWA', '1035', 'Division 1 Men'],
    '24 ECU': ['24', 'ECU', '1036', 'Division 1 Men'],
    '25 Reds': ['25', 'Reds', '1037', 'Division 1 Men'],
    '26 Balcatta': ['26', 'Balcatta', '1038', 'Division 1 Men'],
    '28 Rossmoyne': ['28', 'Rossmoyne', '1040', 'Division 1 Men'],
    '30 Northern Stars': ['30', 'Northern Stars', '1042', 'Division 1 Men'],
    '31 Murdoch': ['31', 'Murdoch', '1039', 'Division 1 Men'],
    '33 VIRSA': ['33', 'VIRSA', '1034', 'Division 1 Men'],
    '34 United': ['34', 'United', '1041', 'Division 1 Men'],

    '42 Southern Cross': ['42', 'Southern Cross', '1054', 'Division 2 Men'],
    '43 UWA': ['43', 'UWA', '1055', 'Division 2 Men'],
    '44 ECU': ['44', 'ECU', '1056', 'Division 2 Men'],
    '45 Reds': ['45', 'Reds', '1057', 'Division 2 Men'],
    '46 Balcatta': ['46', 'Balcatta', '1058', 'Division 2 Men'],
    '47 Mandurah': ['47', 'Mandurah', '1059', 'Division 2 Men'],
    '49 Busselton': ['49', 'Busselton', '1061', 'Division 2 Men'],
    '50 Northern Stars': ['50', 'Northern Stars', '1062', 'Division 2 Men'],
    '52 Reds Junior': ['52', 'Reds Junior', '1060', 'Division 2 Men'],
    '54 United': ['54', 'United', '1053', 'Division 2 Men'],

    '61 Fremantle': ['61', 'Fremantle', '1091', 'Division 3 Men'],
    '62 Southern Cross': ['62', 'Southern Cross', '1092', 'Division 3 Men'],
    '63 UWA': ['63', 'UWA', '1093', 'Division 3 Men'],
    '64 ECU': ['64', 'ECU', '1094', 'Division 3 Men'],
    '65 Reds': ['65', 'Reds', '1095', 'Division 3 Men'],
    '66 Balcatta': ['66', 'Balcatta', '1096', 'Division 3 Men'],
    '68 Rossmoyne': ['68', 'Rossmoyne', '1098', 'Division 3 Men'],
    '70 Northern Stars': ['70', 'Northern Stars', '1100', 'Division 3 Men'],
    '71 Murdoch': ['71', 'Murdoch', '1097', 'Division 3 Men'],
    '72 Reds Junior': ['72', 'Reds Junior', '1099', 'Division 3 Men'],

    '81 Fremantle': ['81', 'Fremantle', '1260', 'Division 4 Men'],
    '82 Southern Cross': ['82', 'Southern Cross', '1261', 'Division 4 Men'],
    '83 UWA': ['83', 'UWA', '1262', 'Division 4 Men'],
    '84 ECU': ['84', 'ECU', '1263', 'Division 4 Men'],
    '85 Reds': ['85', 'Reds', '1264', 'Division 4 Men'],
    '86 Balcatta': ['86', 'Balcatta', '1265', 'Division 4 Men'],
    '87 Mandurah': ['87', 'Mandurah', '1266', 'Division 4 Men'],
    '88 Rossmoyne': ['88', 'Rossmoyne', '1267', 'Division 4 Men'],
    '91 Murdoch': ['91', 'Murdoch', '1269', 'Division 4 Men'],
    '92 Reds Junior': ['92', 'Reds Junior', '1268', 'Division 4 Men'],

    '102 Southern Cross': ['102', 'Southern Cross', '1009', 'State League Women'],
    '103 UWA': ['103', 'UWA', '1010', 'State League Women'],
    '104 ECU': ['104', 'ECU', '1011', 'State League Women'],
    '105 Reds': ['105', 'Reds', '1012', 'State League Women'],
    '106 Balcatta': ['106', 'Balcatta', '1013', 'State League Women'],
    '108 Rossmoyne': ['108', 'Rossmoyne', '1014', 'State League Women'],

    '111 Fremantle': ['111', 'Fremantle', '1021', 'State League Reserve Women'],
    '112 Southern Cross': ['112', 'Southern Cross', '1016', 'State League Reserve Women'],
    '113 UWA': ['113', 'UWA', '1017', 'State League Reserve Women'],
    '114 ECU': ['114', 'ECU', '1018', 'State League Reserve Women'],
    '115 Reds': ['115', 'Reds', '1019', 'State League Reserve Women'],
    '116 Balcatta': ['116', 'Balcatta', '1020', 'State League Reserve Women'],
    '118 Rossmoyne': ['118', 'Rossmoyne', '1022', 'State League Reserve Women'],
    '119 Busselton': ['119', 'Busselton', '1015', 'State League Reserve Women'],

    '121 Fremantle': ['121', 'Fremantle', '1043', 'Division 1 Women'],
    '122 Southern Cross': ['122', 'Southern Cross', '1044', 'Division 1 Women'],
    '123 UWA': ['123', 'UWA', '1045', 'Division 1 Women'],
    '124 ECU': ['124', 'ECU', '1046', 'Division 1 Women'],
    '125 Reds': ['125', 'Reds', '1047', 'Division 1 Women'],
    '126 Balcatta': ['126', 'Balcatta', '1048', 'Division 1 Women'],
    '127 Mandurah': ['127', 'Mandurah', '1049', 'Division 1 Women'],
    '128 Rossmoyne': ['128', 'Rossmoyne', '1050', 'Division 1 Women'],
    '132 Reds Junior': ['132', 'Reds Junior', '1051', 'Division 1 Women'],
    '134 United': ['134', 'United', '1052', 'Division 1 Women'],

    '141 Fremantle': ['141', 'Fremantle', '1063', 'Division 2 Women'],
    '143 UWA': ['143', 'UWA', '1065', 'Division 2 Women'],
    '144 ECU': ['144', 'ECU', '1066', 'Division 2 Women'],
    '145 Reds': ['145', 'Reds', '1067', 'Division 2 Women'],
    '146 Balcatta': ['146', 'Balcatta', '1068', 'Division 2 Women'],
    '148 Rossmoyne': ['148', 'Rossmoyne', '1070', 'Division 2 Women'],
    '150 Northern Stars': ['150', 'Northern Stars', '1072', 'Division 2 Women'],
    '151 Murdoch': ['151', 'Murdoch', '1069', 'Division 2 Women'],
    '152 Reds Junior': ['152', 'Reds Junior', '1071', 'Division 2 Women'],
    '154 United': ['154', 'United', '1064', 'Division 2 Women'],

    '161 Fremantle': ['161', 'Fremantle', '1073', 'Division 3 Women'],
    '162 Southern Cross': ['162', 'Southern Cross', '1074', 'Division 3 Women'],
    '163 UWA': ['163', 'UWA', '1075', 'Division 3 Women'],
    '164 ECU': ['164', 'ECU', '1076', 'Division 3 Women'],
    '165 Reds': ['165', 'Reds', '1077', 'Division 3 Women'],
    '166 Balcatta': ['166', 'Balcatta', '1078', 'Division 3 Women'],
    '167 Mandurah': ['167', 'Mandurah', '1079', 'Division 3 Women'],
    '168 Rossmoyne': ['168', 'Rossmoyne', '1080', 'Division 3 Women'],
    '170 Northern Stars': ['170', 'Northern Stars', '1082', 'Division 3 Women'],
    '171 Murdoch': ['171', 'Murdoch', '1081', 'Division 3 Women'],

    '181 ECU Blue': ['181', 'ECU Blue', '1083', 'Division 4 Women'],
    '182 Southern Cross': ['182', 'Southern Cross', '1084', 'Division 4 Women'],
    '183 UWA': ['183', 'UWA', '1085', 'Division 4 Women'],
    '184 ECU Red': ['184', 'ECU Red', '1086', 'Division 4 Women'],
    '185 Northern Stars Black': ['185', 'Northern Stars Black', '1087', 'Division 4 Women'],
    '186 Balcatta': ['186', 'Balcatta', '1088', 'Division 4 Women'],
    '187 Northern Stars Blue': ['187', 'Northern Stars Blue', '1089', 'Division 4 Women'],

    '201 ECU Blue': ['201', 'ECU Blue', '1281', 'Division 5 Men'],
    '202 Southern Cross': ['202', 'Southern Cross', '1282', 'Division 5 Men'],
    '203 UWA': ['203', 'UWA', '1283', 'Division 5 Men'],
    '204 ECU Red': ['204', 'ECU Red', '1284', 'Division 5 Men'],
    '205 Reds': ['205', 'Reds', '1285', 'Division 5 Men'],
    '206 Balcatta': ['206', 'Balcatta', '1286', 'Division 5 Men'],
    '208 Rossmoyne': ['208', 'Rossmoyne', '1288', 'Division 5 Men'],
    '209 ECU White': ['209', 'ECU White', '1289', 'Division 5 Men'],
    '210 Northern Stars': ['210', 'Northern Stars', '1290', 'Division 5 Men'],
    '211 Murdoch': ['211', 'Murdoch', '1287', 'Division 5 Men'],
    
    '221 Northern Stars Black': ['221', 'Northern Stars Black', '1270', 'Division 6 Men'],
    '222 Southern Cross Green': ['222', 'Southern Cross Green', '1271', 'Division 6 Men'],
    '223 UWA': ['223', 'UWA', '1272', 'Division 6 Men'],
    '224 ECU Red': ['224', 'ECU Red', '1273', 'Division 6 Men'],
    '225 ECU Blue': ['225', 'ECU Blue', '1274', 'Division 6 Men'],
    '226 Balcatta': ['226', 'Balcatta', '1275', 'Division 6 Men'],
    '227 ECU White': ['227', 'ECU White', '1276', 'Division 6 Men'],
    '228 Rossmoyne': ['228', 'Rossmoyne', '1277', 'Division 6 Men'],
    '229 Southern Cross White': ['229', 'Southern Cross White', '1278', 'Division 6 Men'],
    '230 Northern Stars Blue': ['230', 'Northern Stars Blue', '1279', 'Division 6 Men'],
    '231 Murdoch': ['231', 'Murdoch', '1280', 'Division 6 Men']
}
