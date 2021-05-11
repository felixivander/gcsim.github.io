
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var ztx = zoomed.getContext("2d");
    var zoomu; var zoomd;
    var phaserat, deadtime, smalle, smalla, smallb, smallc, smalll, smalls, Eddy, N; B = 0, Cg = 0, sd = [0,0,0,0,0,0,0,0,0],sdp = [0,0,0,0,0,0,0,0,0], anum = 8; strength = 2000; grandomtoken = 0; gfilterb = 0; gnoiselevel = 10; Norm = 0.01; sigVc = 20; MolMc = 20; tempx = 0; tempy= 0; off = 2; viscosity=0; vint = 0; vslope = 0; lin = 0; var zoomcounter = 0;
    var k = [0,0,0,0,0,0,0,0]; kgrad = [0,0,0,0,0,0,0,0]; bub = ['0','0','0','0','0','0','0','0']; delHperR = [0,0,0,0,0,0,0,0];delSperP = [0,0,0,0,0,0,0,0]; delS = [0,0,0,0,0,0,0,0]; yo = [0,0,0,0,0,0,0,0]; ret = [0,0,0,0,0,0,0,0]; H = [0,0,0,0,0,0,0,0]; Dg = [0,0,0,0,0,0,0,0]; offsety = [0,0,0,0,0,0,0,0,0,0,0]; offsetx = [0,0,0,0,0,0,0,0,0,0,0,0] ;TempR = [0,0,0,0,0,0,0,0]; RetGrad = [0,0,0,0,0,0,0,0]; HGrad = [0,0,0,0,0,0,0,0]; DgGrad = [0,0,0,0,0,0,0,0]; sdgrad = [0,0,0,0,0,0,0,0];sdpgrad = [0,0,0,0,0,0,0,0,0]; Multigrad = [0,0,0,0,0,0,0,0,0]
    let biga = [999,999,999,999,999,999,999,999]; bigb = [999,999,999,999,999,999,999,999]; bigs = [999,999,999,999,999,999,999,999]; bigl = [999,999,999,999,999,999,999,999]; bige = [999,999,999,999,999,999,999,999]; sigV = [999,999,999,999,999,999,999,999]; molMa = [999,999,999,999,999,999,999,999]; BolP =[0,0,0,0,0,0,0,0]; c = [0,0,0,0,0,0,0,0,0,0,0,0,0]; Index =[0,0,0,0,0,0,0,0,0,0]; AnalyteName =[0,0,0,0,0,0,0,0,0,0]; var noise = [1,1]; rampnum = 2; multisd = [0,0,0,0,0,0,0,0,0]; multisdp = [0,0,0,0,0,0,0,0,0];kmulti = [0,0,0,0,0,0,0,0,0]; Multitempr = [0,0,0,0,0,0,0,0,0]; Hmulti = [0,0,0,0,0,0,0,0,0]; DgMulti = [0,0,0,0,0,0,0,0,0];
    var Analist =[
      {
        "Analyte": "None Chosen",
        "E": 999,
        "S": 999,
        "A": 999,
        "B": 999,
        "L": 999,
        "sigV": 1000,
        "BP": 1001,
        "MW": 1002
      },
      {
        "Analyte": "Acetanilide",
        "E": 0.96,
        "S": 1.144,
        "A": 0.538,
        "B": 0.708,
        "L": 5.916,
        "sigV": 140.34,
        "BP": 304,
        "MW": 135.17
      },
      {
        "Analyte": "Acetophenone",
        "E": 0.806,
        "S": 1.026,
        "A": 0,
        "B": 0.503,
        "L": 4.533,
        "sigV": 133.49,
        "BP": 202,
        "MW": 120.15
      },
      {
        "Analyte": "Aniline",
        "E": 0.955,
        "S": 1.003,
        "A": 0.249,
        "B": 0.425,
        "L": 3.956,
        "sigV": 97.81,
        "BP": 184.1,
        "MW": 93.13
      },
      {
        "Analyte": "Anisole",
        "E": 0.712,
        "S": 0.768,
        "A": 0,
        "B": 0.311,
        "L": 3.808,
        "sigV": 117.59,
        "BP": 154,
        "MW": 108.14
      },
      {
        "Analyte": "Anthracene",
        "E": 1.923,
        "S": 1.309,
        "A": 0,
        "B": 0.253,
        "L": 7.692,
        "sigV": 190.8,
        "BP": 340,
        "MW": 178.23
      },
      {
        "Analyte": "Benzaldehyde",
        "E": 0.813,
        "S": 1.025,
        "A": 0,
        "B": 0.394,
        "L": 4.005,
        "sigV": 112.97,
        "BP": 178.1,
        "MW": 106.124
      },
      {
        "Analyte": "Benzamide",
        "E": 1.258,
        "S": 1.343,
        "A": 0.648,
        "B": 0.664,
        "L": 5.277,
        "sigV": 119.82,
        "BP": 288,
        "MW": 121.14
      },
      {
        "Analyte": "Benzene",
        "E": 0.608,
        "S": 0.511,
        "A": 0,
        "B": 0.144,
        "L": 2.777,
        "sigV": 90.96,
        "BP": 80.1,
        "MW": 78.11
      },
      {
        "Analyte": "Benzofuran",
        "E": 0.921,
        "S": 0.776,
        "A": 0,
        "B": 0.193,
        "L": 4.302,
        "sigV": 128.87,
        "BP": 174,
        "MW": 118.1
      },
      {
        "Analyte": "Benzonitrile",
        "E": 0.742,
        "S": 1.135,
        "A": 0,
        "B": 0.331,
        "L": 4.04,
        "sigV": 109.09,
        "BP": 191,
        "MW": 103.04
      },
      {
        "Analyte": "Benzophenone",
        "E": 1.224,
        "S": 1.33,
        "A": 0,
        "B": 0.576,
        "L": 7.009,
        "sigV": 199.31,
        "BP": 305.4,
        "MW": 182.217
      },
      {
        "Analyte": "Benzyl alcohol",
        "E": 0.803,
        "S": 0.882,
        "A": 0.4,
        "B": 0.557,
        "L": 4.244,
        "sigV": 117.59,
        "BP": 205,
        "MW": 108.14
      },
      {
        "Analyte": "Benzyl benzoate",
        "E": 1.264,
        "S": 1.28,
        "A": 0,
        "B": 0.597,
        "L": 7.546,
        "sigV": 225.94,
        "BP": 323,
        "MW": 212.25
      },
      {
        "Analyte": "Biphenyl",
        "E": 1.312,
        "S": 0.874,
        "A": 0,
        "B": 0.298,
        "L": 6.164,
        "sigV": 177.3,
        "BP": 255,
        "MW": 154.21
      },
      {
        "Analyte": "Bromobenzene",
        "E": 0.882,
        "S": 0.72,
        "A": 0,
        "B": 0.09,
        "L": 4.047,
        "sigV": 110.55,
        "BP": 156,
        "MW": 157.1
      },
      {
        "Analyte": "1-Bromonaphthalene",
        "E": 1.598,
        "S": 1.005,
        "A": 0,
        "B": 0.157,
        "L": 6.59,
        "sigV": 160.47,
        "BP": 135,
        "MW": 207.7
      },
      {
        "Analyte": "Butan-1-ol",
        "E": 0.224,
        "S": 0.44,
        "A": 0.344,
        "B": 0.52,
        "L": 2.578,
        "sigV": 92.81,
        "BP": 117.7,
        "MW": 74.121
      },
      {
        "Analyte": "Butan-2-one",
        "E": 0.166,
        "S": 0.662,
        "A": 0,
        "B": 0.496,
        "L": 2.422,
        "sigV": 88.19,
        "BP": 79,
        "MW": 72.11
      },
      {
        "Analyte": "n-Butyl acetate",
        "E": 0.079,
        "S": 0.57,
        "A": 0,
        "B": 0.438,
        "L": 3.409,
        "sigV": 135.34,
        "BP": 126,
        "MW": 116.16
      },
      {
        "Analyte": "n-Butylbenzene",
        "E": 0.595,
        "S": 0.499,
        "A": 0,
        "B": 0.139,
        "L": 4.734,
        "sigV": 173.04,
        "BP": 183.3,
        "MW": 134.222
      },
      {
        "Analyte": "n-Butyl benzoate",
        "E": 0.668,
        "S": 0.851,
        "A": 0,
        "B": 0.393,
        "L": 5.974,
        "sigV": 201.16,
        "BP": 250,
        "MW": 178.23
      },
      {
        "Analyte": "Butyrophenone",
        "E": 0.798,
        "S": 1.026,
        "A": 0,
        "B": 0.503,
        "L": 5.388,
        "sigV": 174.53,
        "BP": 229,
        "MW": 148.2
      },
      {
        "Analyte": "Caffeine",
        "E": 1.518,
        "S": 1.726,
        "A": 0.039,
        "B": 1.232,
        "L": 7.864,
        "sigV": 144.08,
        "BP": 178,
        "MW": 194.2
      },
      {
        "Analyte": "2-Chloroaniline",
        "E": 1.026,
        "S": 0.965,
        "A": 0.253,
        "B": 0.321,
        "L": 4.71,
        "sigV": 116.5,
        "BP": 209,
        "MW": 127.5715
      },
      {
        "Analyte": "4-Chloroaniline",
        "E": 1.017,
        "S": 1.128,
        "A": 0.366,
        "B": 0.309,
        "L": 4.972,
        "sigV": 116.5,
        "BP": 232,
        "MW": 127.5715
      },
      {
        "Analyte": "Chlorobenzene",
        "E": 0.718,
        "S": 0.656,
        "A": 0,
        "B": 0.056,
        "L": 3.663,
        "sigV": 109.65,
        "BP": 132,
        "MW": 112.56
      },
      {
        "Analyte": "1-Chloronaphthalene",
        "E": 1.419,
        "S": 0.951,
        "A": 0,
        "B": 0.135,
        "L": 6.175,
        "sigV": 159.57,
        "BP": 259,
        "MW": 162.62
      },
      {
        "Analyte": "2-Chlorophenol",
        "E": 0.882,
        "S": 0.668,
        "A": 0.538,
        "B": 0.342,
        "L": 4.118,
        "sigV": 115.76,
        "BP": 174.9,
        "MW": 128.56
      },
      {
        "Analyte": "4-Chlorophenol",
        "E": 1.016,
        "S": 0.794,
        "A": 0.886,
        "B": 0.205,
        "L": 4.802,
        "sigV": 115.76,
        "BP": 219.7,
        "MW": 128.56
      },
      {
        "Analyte": "Cinnamyl alcohol",
        "E": 1.119,
        "S": 0.971,
        "A": 0.451,
        "B": 0.606,
        "L": 5.475,
        "sigV": 154.01,
        "BP": 250,
        "MW": 134.17
      },
      {
        "Analyte": "Coumarin",
        "E": 1.269,
        "S": 1.61,
        "A": 0,
        "B": 0.524,
        "L": 6.034,
        "sigV": 132.58,
        "BP": 307.71,
        "MW": 146.14
      },
      {
        "Analyte": "Cyclohexanol",
        "E": 0.474,
        "S": 0.65,
        "A": 0.237,
        "B": 0.592,
        "L": 3.715,
        "sigV": 110.93,
        "BP": 161.8,
        "MW": 100.158
      },
      {
        "Analyte": "Cyclohexanone",
        "E": 0.403,
        "S": 0.895,
        "A": 0,
        "B": 0.53,
        "L": 3.759,
        "sigV": 106.31,
        "BP": 155.6,
        "MW": 98.15
      },
      {
        "Analyte": "Decane",
        "E": 0,
        "S": 0,
        "A": 0,
        "B": 0,
        "L": 4.703,
        "sigV": 209.82,
        "BP": 174.1,
        "MW": 142.29
      },
      {
        "Analyte": "Decan-1-ol",
        "E": 0.191,
        "S": 0.44,
        "A": 0.344,
        "B": 0.52,
        "L": 5.589,
        "sigV": 215.93,
        "BP": 230,
        "MW": 158.28
      },
      {
        "Analyte": "3,4-Dichloroaniline",
        "E": 1.253,
        "S": 1.302,
        "A": 0.559,
        "B": null,
        "L": 5.796,
        "sigV": 135.19,
        "BP": 272,
        "MW": 162
      },
      {
        "Analyte": "1,2-Dichlorobenzene",
        "E": 0.872,
        "S": 0.771,
        "A": 0,
        "B": 0.054,
        "L": 4.516,
        "sigV": 128.34,
        "BP": 180,
        "MW": 147
      },
      {
        "Analyte": "1,3-Dichlorobenzene",
        "E": 0.852,
        "S": 0.692,
        "A": 0,
        "B": 0.008,
        "L": 4.422,
        "sigV": 128.34,
        "BP": 173,
        "MW": 147
      },
      {
        "Analyte": "Diethyl phthalate",
        "E": 0.729,
        "S": 1.465,
        "A": 0,
        "B": 0.869,
        "L": 0,
        "sigV": 229.28,
        "BP": 302,
        "MW": 222.24
      },
      {
        "Analyte": "2,3-Dimethylphenol",
        "E": 0.866,
        "S": 0.767,
        "A": 0.589,
        "B": 0.403,
        "L": 4.884,
        "sigV": 138.11,
        "BP": 217,
        "MW": 122.16
      },
      {
        "Analyte": "2,6-Dimethylphenol",
        "E": 0.773,
        "S": 0.791,
        "A": 0.408,
        "B": 0.402,
        "L": 4.624,
        "sigV": 138.11,
        "BP": 203,
        "MW": 122.16
      },
      {
        "Analyte": "3,5-Dimethylphenol",
        "E": 0.768,
        "S": 0.764,
        "A": 0.669,
        "B": 0.347,
        "L": 4.792,
        "sigV": 138.11,
        "BP": 222,
        "MW": 122.16
      },
      {
        "Analyte": "1,3-Dinitrobenzene",
        "E": 1.027,
        "S": 1.756,
        "A": 0,
        "B": 0.399,
        "L": 5.93,
        "sigV": 119.86,
        "BP": 291,
        "MW": 168.107
      },
      {
        "Analyte": "1,4-Dioxane",
        "E": 0.329,
        "S": 0.742,
        "A": 0,
        "B": 0.576,
        "L": 2.83,
        "sigV": 76,
        "BP": 101,
        "MW": 88.11
      },
      {
        "Analyte": "Diphenylamine",
        "E": 1.599,
        "S": 1.077,
        "A": 0.341,
        "B": 0.549,
        "L": 6.885,
        "sigV": 184.15,
        "BP": 302,
        "MW": 169
      },
      {
        "Analyte": "Dodecane",
        "E": 0,
        "S": 0,
        "A": 0,
        "B": 0,
        "L": 5.685,
        "sigV": 250.86,
        "BP": 216.2,
        "MW": 170
      },
      {
        "Analyte": "2-Ethoxyethanol",
        "E": 0.237,
        "S": 0.575,
        "A": 0.31,
        "B": 0.775,
        "L": 2.779,
        "sigV": 98.92,
        "BP": 135,
        "MW": 90.12
      },
      {
        "Analyte": "Ethyl benzoate",
        "E": 0.694,
        "S": 0.886,
        "A": 0,
        "B": 0.444,
        "L": 5.032,
        "sigV": 160.12,
        "BP": 213,
        "MW": 150.17
      },
      {
        "Analyte": "Ethyl propionate",
        "E": 0.092,
        "S": 0.53,
        "A": 0,
        "B": 0.478,
        "L": 2.893,
        "sigV": 114.82,
        "BP": 99,
        "MW": 102.13
      },
      {
        "Analyte": "Fluoranthene",
        "E": 2.292,
        "S": 1.486,
        "A": 0,
        "B": 0.255,
        "L": 8.733,
        "sigV": 204.3,
        "BP": 375,
        "MW": 202.26
      },
      {
        "Analyte": "Fluorene",
        "E": 1.664,
        "S": 1.12,
        "A": 0,
        "B": 0.252,
        "L": 6.921,
        "sigV": 193.2,
        "BP": 116,
        "MW": 166
      },
      {
        "Analyte": "Heptan-1-ol",
        "E": 0.202,
        "S": 0.44,
        "A": 0.344,
        "B": 0.52,
        "L": 4.132,
        "sigV": 154.37,
        "BP": 175,
        "MW": 116.88
      },
      {
        "Analyte": "Heptan-2-one",
        "E": 0.123,
        "S": 0.662,
        "A": 0,
        "B": 0.496,
        "L": 3.781,
        "sigV": 149.75,
        "BP": 151,
        "MW": 114
      },
      {
        "Analyte": "Heptanal",
        "E": 0.14,
        "S": 0.642,
        "A": 0,
        "B": 0.441,
        "L": 3.856,
        "sigV": 149.75,
        "BP": 152.8,
        "MW": 114
      },
      {
        "Analyte": "Hexadecane",
        "E": 0,
        "S": 0,
        "A": 0,
        "B": 0,
        "L": 7.631,
        "sigV": 332.94,
        "BP": 287,
        "MW": 226.41
      },
      {
        "Analyte": "Hexan-1-ol",
        "E": 0.21,
        "S": 0.44,
        "A": 0.344,
        "B": 0.52,
        "L": 3.643,
        "sigV": 133.85,
        "BP": 157,
        "MW": 102
      },
      {
        "Analyte": "Hexan-2-one",
        "E": 0.136,
        "S": 0.662,
        "A": 0,
        "B": 0.496,
        "L": 3.281,
        "sigV": 129.23,
        "BP": 128,
        "MW": 100.1589
      },
      {
        "Analyte": "Hexanophenone",
        "E": 0.79,
        "S": 1.026,
        "A": 0,
        "B": 0.503,
        "L": 6.346,
        "sigV": 110.93,
        "BP": 265,
        "MW": 176.25
      },
      {
        "Analyte": "1-Hexyne",
        "E": 0.167,
        "S": 0.274,
        "A": 0.09,
        "B": 0.117,
        "L": 2.544,
        "sigV": 118.5,
        "BP": 71,
        "MW": 82.14
      },
      {
        "Analyte": "Indole",
        "E": 1.039,
        "S": 1.235,
        "A": 0.422,
        "B": 0.223,
        "L": 5.136,
        "sigV": 111.31,
        "BP": 53,
        "MW": 117.15
      },
      {
        "Analyte": "Iodobenzene",
        "E": 1.182,
        "S": 0.784,
        "A": 0,
        "B": 0.135,
        "L": 4.548,
        "sigV": 118.45,
        "BP": 188,
        "MW": 204.1
      },
      {
        "Analyte": "2-Methoxynaphthalene",
        "E": 1.449,
        "S": 1.14,
        "A": 0,
        "B": 0.359,
        "L": 6.265,
        "sigV": 167.51,
        "BP": 274,
        "MW": 158.2
      },
      {
        "Analyte": "Methyl benzoate",
        "E": 0.738,
        "S": 0.923,
        "A": 0,
        "B": 0.439,
        "L": 4.674,
        "sigV": 139.6,
        "BP": 199,
        "MW": 136
      },
      {
        "Analyte": "2-Methylbutan-1-ol",
        "E": 0.217,
        "S": 0.428,
        "A": 0.336,
        "B": 0.516,
        "L": 2.982,
        "sigV": 113.33,
        "BP": 129,
        "MW": 88.148
      },
      {
        "Analyte": "2-Methylbutan-2-ol",
        "E": 0.193,
        "S": 0.388,
        "A": 0.247,
        "B": 0.645,
        "L": 2.538,
        "sigV": 113.33,
        "BP": 102,
        "MW": 88.148
      },
      {
        "Analyte": "3-Methylbutan-1-ol",
        "E": 0.198,
        "S": 0.423,
        "A": 0.351,
        "B": 0.501,
        "L": 2.963,
        "sigV": 113.33,
        "BP": 132,
        "MW": 88.148
      },
      {
        "Analyte": "Methyl decanoate",
        "E": 0.057,
        "S": 0.564,
        "A": 0,
        "B": 0.456,
        "L": 5.867,
        "sigV": 237.94,
        "BP": 224,
        "MW": 186.29
      },
      {
        "Analyte": "Methyl hexanoate",
        "E": 0.084,
        "S": 0.564,
        "A": 0,
        "B": 0.456,
        "L": 3.97,
        "sigV": 155.86,
        "BP": 151.2,
        "MW": 130.18
      },
      {
        "Analyte": "Methyl nonanoate",
        "E": 0.054,
        "S": 0.564,
        "A": 0,
        "B": 0.456,
        "L": 5.403,
        "sigV": 217.42,
        "BP": 213,
        "MW": 172.26
      },
      {
        "Analyte": "Methyl octanoate",
        "E": 0.069,
        "S": 0.564,
        "A": 0,
        "B": 0.456,
        "L": 4.944,
        "sigV": 196.9,
        "BP": 193,
        "MW": 158.24
      },
      {
        "Analyte": "1-Methylnaphthalene",
        "E": 1.337,
        "S": 0.915,
        "A": 0,
        "B": 0.205,
        "L": 5.703,
        "sigV": 161.4,
        "BP": 245,
        "MW": 142.2
      },
      {
        "Analyte": "2-Methylphenol",
        "E": 0.774,
        "S": 0.745,
        "A": 0.621,
        "B": 0.357,
        "L": 4.271,
        "sigV": 123.7,
        "BP": 191,
        "MW": 108
      },
      {
        "Analyte": "Octadecane",
        "E": 0.226,
        "S": 0.235,
        "A": 0,
        "B": 0.111,
        "L": 9.445,
        "sigV": 373.98,
        "BP": 317,
        "MW": 254.5
      },
      {
        "Analyte": "Tetradecane",
        "E": 0.199,
        "S": 0.144,
        "A": 0,
        "B": 0.106,
        "L": 6.744,
        "sigV": 291.9,
        "BP": 253,
        "MW": 198
      },
      {
        "Analyte": "Methylbenzene",
        "E": 0.708,
        "S": 0.596,
        "A": 0,
        "B": 0.223,
        "L": 3.418,
        "sigV": 111.48,
        "BP": 110.6,
        "MW": 92
      },
      {
        "Analyte": "Ethylbenzene",
        "E": 0.721,
        "S": 0.593,
        "A": 0,
        "B": 0.235,
        "L": 3.925,
        "sigV": 132,
        "BP": 136,
        "MW": 106.17
      },
      {
        "Analyte": "Butylbenzene",
        "E": 0.737,
        "S": 0.635,
        "A": 0,
        "B": 0.25,
        "L": 4.89,
        "sigV": 173.04,
        "BP": 183.3,
        "MW": 134.22
      },
      {
        "Analyte": "Propylbenzene",
        "E": 0.719,
        "S": 0.616,
        "A": 0,
        "B": 0.249,
        "L": 4.386,
        "sigV": 152.52,
        "BP": 159,
        "MW": 120.2
      },
      {
        "Analyte": "Pentylbenzene",
        "E": 0.74,
        "S": 0.66,
        "A": 0,
        "B": 0.256,
        "L": 5.435,
        "sigV": 193.56,
        "BP": 205,
        "MW": 148
      },
      {
        "Analyte": "Hexylbenzene",
        "E": 0.751,
        "S": 0.69,
        "A": 0,
        "B": 0.255,
        "L": 5.877,
        "sigV": 214.08,
        "BP": 226,
        "MW": 162.27
      },
      {
        "Analyte": "Undecane",
        "E": 0,
        "S": 0,
        "A": 0,
        "B": 0,
        "L": 5.185,
        "sigV": 230.34,
        "BP": 195.9,
        "MW": 156.31
      },
      {
        "Analyte": "n-tridecane",
        "E": 0,
        "S": 0,
        "A": 0,
        "B": 0,
        "L": 6.156,
        "sigV": 271.38,
        "BP": 234,
        "MW": 184.37
      },
      {
        "Analyte": "n-pentadecane",
        "E": 0.204,
        "S": 0.169,
        "A": 0,
        "B": 0.094,
        "L": 7.591,
        "sigV": 312.42,
        "BP": 270.7,
        "MW": 212.41
      },
      {
        "Analyte": "1-Undecanol",
        "E": 0.181,
        "S": 0.42,
        "A": 0.37,
        "B": 0.48,
        "L": 6.128,
        "sigV": 236.45,
        "BP": 243,
        "MW": 172.31
      },
      {
        "Analyte": "n-heptane",
        "E": 0.135,
        "S": 0.097,
        "A": 0,
        "B": 0.102,
        "L": 3.251,
        "sigV": 148.26,
        "BP": 98.42,
        "MW": 100.21
      },
      {
        "Analyte": "n-octane",
        "E": 0.141,
        "S": 0.099,
        "A": 0,
        "B": 0.103,
        "L": 3.781,
        "sigV": 168.78,
        "BP": 125.6,
        "MW": 114.23
      },
      {
        "Analyte": "n-nonane",
        "E": 0.148,
        "S": 0.104,
        "A": 0,
        "B": 0.106,
        "L": 4.243,
        "sigV": 189.3,
        "BP": 151,
        "MW": 128.2
      },
      {
        "Analyte": "2-octanone",
        "E": 0.108,
        "S": 0.68,
        "A": 0,
        "B": 0.51,
        "L": 4.257,
        "sigV": 170.27,
        "BP": 172.5, 
        "MW": 128.21
      },
      {
        "Analyte": "1-octanol",
        "E": 0.199,
        "S": 0.72,
        "A": 0.37,
        "B": 0.48,
        "L": 4.619,
        "sigV": 174.89,
        "BP": 195, 
        "MW": 130.23
      },
      {
        "Analyte": "None Chosen",
        "E": 999,
        "S": 999,
        "A": 999,
        "B": 999,
        "L": 999,
        "sigV": 1000,
        "BP": 1001,
        "MW": 1002
      }
     ];
    var Analength = Analist.length;
            var Statiolist = [
              {
                "Name": "Empty",
                "ID": 0,
                "Thickness": 0,
                "Length": 0,
                "e": 0,
                "s": 0,
                "a": 0,
                "b": 0,
                "l": 0,
                "c": 0,
                "esl": 0,
                "ssl": 0,
                "asl": 0,
                "bsl": 0,
                "lsl": 0,
                "csl": 0
              },
              {
                "Name": "DB-1701",
                "ID": 0.32,
                "Thickness": 0.25,
                "Length": 15,
                "e": -0.341,
                "s": 1.124,
                "a": -0.00487,
                "b": 0,
                "l": 0.8841,
                "c": -2.6524,
                "esl": 0.002,
                "ssl": -0.003405,
                "asl": 1.214,
                "bsl": 0,
                "lsl": -0.003015,
                "csl": -0.00176
              },
              {
                "Name": "EC-Wax",
                "ID": 0.25,
                "Thickness": 0.25,
                "Length": 30,
                "e": 0.142,
                "s": 2.2018,
                "a": 3.7594,
                "b": 0,
                "l": 0.769,
                "c": -3.0469,
                "esl": 0.00063,
                "ssl": -0.00703,
                "asl": -0.01494,
                "bsl": 0,
                "lsl": -0.00255,
                "csl": 0.00034499
              },
              {
                "Name": "DB-1",
                "ID": 0.32,
                "Thickness": 1,
                "Length": 30,
                "e": -0.1294,
                "s": 0.3052,
                "a": 0.5197,
                "b": 0,
                "l": 0.8642,
                "c": -1.8163,
                "esl": 0.00108,
                "ssl": -0.00073,
                "asl": -0.002885,
                "bsl": 0,
                "lsl": -0.00296,
                "csl": -0.001925
              },
              {
                "Name": "DB-5",
                "ID": 0.53,
                "Thickness": 1.5,
                "Length": 30,
                "e": -0.1052,
                "s": 0.4216,
                "a": 0.3585,
                "b": 0,
                "l": 0.7802,
                "c": -1.803,
                "esl": 0.00115,
                "ssl": -0.00131,
                "asl": -0.001505,
                "bsl": 0,
                "lsl": -0.00263,
                "csl": -0.00141
              },
              {
                "Name": "PTE-5",
                "ID": 0.25,
                "Thickness": 0.25,
                "Length": 30,
                "e": -0.1391,
                "s": 0.4705,
                "a": 0.5146,
                "b": 0,
                "l": 0.8862,
                "c": -2.3709,
                "esl": 0.001165,
                "ssl": -0.001395,
                "asl": -0.00265,
                "bsl": 0,
                "lsl": -0.00302,
                "csl": -0.001765
              },
              {
                "Name": "SolGel-1",
                "ID": 0.25,
                "Thickness": 0.25,
                "Length": 30,
                "e": -0.178,
                "s": 0.3913,
                "a": 0.568,
                "b": 0,
                "l": 0.861,
                "c": -2.1436,
                "esl": 0.0014,
                "ssl": -0.0012,
                "asl": -0.003,
                "bsl": 0,
                "lsl": -0.0026,
                "csl": -0.0042
              },
              {
                "Name": "HP-5",
                "ID": 0.53,
                "Thickness": 0.88,
                "Length": 30,
                "e": -0.1656,
                "s": 0.5011,
                "a": 0.5311,
                "b": 0,
                "l": 0.8675,
                "c": -1.7338,
                "esl": 0.0014,
                "ssl": -0.0016,
                "asl": -0.0027,
                "bsl": 0,
                "lsl": -0.0029,
                "csl": -0.0023
              },
              {
                "Name": "SolGel-Wax",
                "ID": 0.25,
                "Thickness": 0.25,
                "Length": 30,
                "e": 0.1372,
                "s": 1.973,
                "a": 3.3664,
                "b": 0,
                "l": 0.7517,
                "c": -2.7626,
                "esl": 0.00057,
                "ssl": -0.0048,
                "asl": -0.0113,
                "bsl": 0,
                "lsl": -0.002,
                "csl": -0.0049
              },
              {
                "Name": "HP-INNOWax",
                "ID": 0.25,
                "Thickness": 0.3,
                "Length": 30,
                "e": 0.1669,
                "s": 2.0554,
                "a": 3.4107,
                "b": 0,
                "l": 0.7397,
                "c": -2.4189,
                "esl": 0.000405,
                "ssl": -0.0059,
                "asl": -0.0127,
                "bsl": 0,
                "lsl": -0.0023,
                "csl": -0.002
              },
              {
                "Name": "DB-17",
                "ID": 0.25,
                "Thickness": 0.25,
                "Length": 30,
                "e": -0.1311,
                "s": 1.2844,
                "a": 0.6141,
                "b": 0,
                "l": 0.8431,
                "c": -2.6024,
                "esl": 0.0023,
                "ssl": -0.0043,
                "asl": -0.0021,
                "bsl": 0,
                "lsl": -0.0024,
                "csl": -0.0044
              },
              {
                "Name": "DB-23",
                "ID": 0.25,
                "Thickness": 0.25,
                "Length": 30,
                "e": -0.1949,
                "s": 1.9712,
                "a": 2.4021,
                "b": 0,
                "l": 0.7308,
                "c": -2.6282,
                "esl": 0.0015,
                "ssl": -0.004,
                "asl": -0.0079,
                "bsl": 0,
                "lsl": -0.0023,
                "csl": -0.0047
              },
              {
                "Name": "Empty",
                "ID": 0,
                "Thickness": 0,
                "Length": 0,
                "e": 0,
                "s": 0,
                "a": 0,
                "b": 0,
                "l": 0,
                "c": 0,
                "esl": 0,
                "ssl": 0,
                "asl": 0,
                "bsl": 0,
                "lsl": 0,
                "csl": 0
              }
             ];
            Statiolength = Statiolist.length
    
    //This function looks for the exact input string on the json database
    function AnalyteSearcher(x){
      var t = document.getElementById("Analyte"+x).value;
      suggester(x);
      AnalytearrayChanneler(x,t)
      }
function AnalytearrayChanneler(x,input){
      var i=0;
      var read = Analist[i].Analyte;
  while(input.toUpperCase() !== read.toUpperCase()){if (i>Analength){
      break;}
      read = Analist[i].Analyte;
      AnalyteName[x] = Analist[i].Analyte;
      biga[x] = Analist[i].A;
      bigb[x] = Analist[i].B;
      bige[x] = Analist[i].E;
      bigs[x] = Analist[i].S;
      bigl[x] = Analist[i].L;
      molMa[x] = Analist[i].MW;
      sigV[x] = Analist[i].sigV;
      BolP[x] = Analist[i].BP;
      Index[x] = i;
      i++;
      }
}

//Suggests analytes during searches
function suggester(x){
  var y=1; a=1; b=1;
  var input = document.getElementById("Analyte"+x).value;  
  while (a <= 5){
      document.getElementById("choice"+x+a).style.display = "none";
      a=a+1;
  }
  for (i=1; i<(Analength-1); i++){
      test = Analist[i].Analyte;
      if (test.toUpperCase().indexOf(input.toUpperCase())>-1 && test.toUpperCase().indexOf(input.toUpperCase())<10 && y<6){
          document.getElementById("choice"+x+y).innerHTML = test;
          document.getElementById("choice"+x+y).style.display = "block";
          document.getElementById("choice"+x+y).onclick = function(){
              document.getElementById("Analyte"+x).value = this.innerHTML;
              AnalytearrayChanneler(x,this.innerHTML)
              while (b<=5){
                document.getElementById("choice"+x+b).style.display = "none";
                b=b+1;}
          }
          y=y+1;
      }
  }
}
// like above but for stationary phase
function SearcherStat(x){
    var i = 0;
    var input = x;
    var read = Statiolist[i].Name;
    while(input.toUpperCase() !== read.toUpperCase()){if (i>Statiolength){
    break;}
    read = Statiolist[i].Name;
    smalla = Statiolist[i].a;
    smallb = Statiolist[i].b;
    smalls = Statiolist[i].s;
    smalle = Statiolist[i].e;
    smalll = Statiolist[i].l;
    smallc = Statiolist[i].c;
    slopec = Statiolist[i].csl;
    slopea = Statiolist[i].asl;
    slopee = Statiolist[i].esl;
    slopes = Statiolist[i].ssl;
    slopeb = Statiolist[i].bsl;
    slopel = Statiolist[i].lsl;
    Index[6] = i;
    document.getElementById('sliderval5').value = Statiolist[i].ID;
    document.getElementById('sliderval4').value = Statiolist[i].Thickness;
    document.getElementById('StatPhase').innerHTML = Statiolist[i].Name;
    document.getElementById('Dimension').innerHTML = Statiolist[i].ID +"mm &times "+ Statiolist[i].Thickness+"&microm";
    i++
    }}
function presetter(x,y,z,a,b){
    let presetlist = ["0",x,y,z,a,b];
    for (i=1;i<=5;i++){
      document.getElementById("Analyte"+i).value = "";
      AnalytearrayChanneler(i,presetlist[i]);
      document.getElementById("Analyte"+i).value = presetlist[i];
    }
}
//essential equations here
function equations(){
  var inpress = 1;
  var temp = Number(document.getElementById("sliderval1").value)+273; //converted to K
  var length = document.getElementById("sliderval3").value; //in metres
  var diam = document.getElementById("sliderval5").value; //input is in mm
  var thick = document.getElementById("sliderval4").value; //input is in microns
  var mob;
  var inlet = Number(101325*(Number(document.getElementById('sliderval6').value)));
  var prate = Number(document.getElementById('sliderval6').value);
  viscosity = Number(vslope*Number(document.getElementById('sliderval1').value))+Number(vint);
  phaserat=250*diam/thick; //assuming diam>>thickness
  document.getElementById("sliderval2").value = (((3.14/(8*viscosity*length))*(diam/2000)*(diam/2000)*(diam/2000)*(diam/2000)*(101325*(Number(document.getElementById('sliderval6').value)-inpress)))*60000000*10000000).toFixed(3);
  mob = 3.14*Math.pow(diam/20,2)*length*100; //treating the mobile phase as a tube, and that diam-thick~diam. diam (m) converted to r (cm), length from m to cm, and hence the coefficients. 
  var lin1 = (inlet*((prate*prate)-1)*((prate*prate)-1)*(diam/1000)*(diam/1000)); var lin2 = (128*viscosity*length*((prate*prate*prate)-1));
  lin = (30000000/4)*lin1/lin2;
  deadtime = (length/(lin*60));
  for (i=1;i<=anum;i++){ //put the number of analytes here
      LSERtoRet(i);
      Dg[i] = 0.00143*Math.pow(temp,1.75)*Math.pow(1/molMa[i]+1/MolMc,0.5)/(Math.pow(Math.pow(sigV[i],1/3)+Math.pow(sigVc,1/3),2));
      H[i] = 2*Dg[i]/(lin*600000)+(1+6*k[i]+11*k[i]*k[i])*(diam/1000*diam/1000)*(lin*60)/(96*(1+k[i]*(1+k[i])*Dg[i]/10000)); //H is in metres
      sdf(i);
      DgGrad[i] = 0.00143*Math.pow(TempR[i]+273,1.75)*Math.pow(1/molMa[i]+1/MolMc,0.5)/(Math.pow(Math.pow(sigV[i],1/3)+Math.pow(sigVc,1/3),2));
      HGrad[i] = 2*DgGrad[i]/(lin*600000)+(1+6*kgrad[i]+11*kgrad[i]*kgrad[i])*(diam/1000*diam/1000)*(lin*60)/(96*(1+kgrad[i]*(1+kgrad[i])*DgGrad[i]/10000));
      sdfg(i);
  }
}
function sdfg(i){
  var ph = (Math.pow(HGrad[i]/document.getElementById("sliderval3").value,0.5)*RetGrad[i]);
  if (ph>1){
    sdgrad[i]=ph;
    sdpgrad[i]=ph;
  }
  else {
    sdgrad[i]=1;
    sdpgrad[i]=ph
  }
}
function sdf(i){
  var ph = (Math.pow(H[i]/document.getElementById("sliderval3").value,0.5)*ret[i]);
  if (ph>1){
    sd[i]=ph;
    sdp[i]=ph;
  }
  else {
    sd[i]=1;
    sdp[i]=ph
  }
}
function sdfm(i){
  var ph = (Math.pow(Hmulti[i]/document.getElementById("sliderval3").value,0.5)*Multigrad[i]);
  if (ph>1){
    multisd[i]=ph;
    multisdp[i]=ph;
  }
  else {
    multisd[i]=1;
    multisdp[i]=ph
  }
}
function Normalizer(){
  var x = 0; b = 0;a=0; i=1;
  Norm = 0;
  while (i<=anum){
    a = Math.pow(sd[i]*sd[i]*3.14*2,-1/2);
    if (a>Norm){
      Norm = a;
    }
    i++;
  }
}
function deadtimer(){
  var inpress = 101325; l = Number(document.getElementById('sliderval3').value); diam = Number(document.getElementById('sliderval5').value)/1000; thick = Number(document.getElementById("sliderval4").value)/1000000;
  var P = 101325*Number(document.getElementById('sliderval6').value)/inpress;
  return 4*viscosity*l*l*((P*P*P)-1)*32/(3*inpress*((P*P)-1)*((P*P)-1)*(diam-thick)*(diam-thick)*10000000*60);
}
//separated from equation because this one will be run repeatedly
function LSERtoRet(x){//x is #analyte
    yo[x] = logk(x,Number(document.getElementById("sliderval1").value))
    k[x] = Math.pow(10,yo[x]) ;
    ret[x] = (k[x]*deadtime+deadtime)*60;
    var Kone = Math.pow(10,yo[x]); var Ktwo = Math.pow(10,logk(x,Number(document.getElementById("sliderval1").value)+10)); var T1=Number(document.getElementById("sliderval1").value)+273;var T2=Number(document.getElementById("sliderval1").value)+283;
    delHperR[x] = (Math.log((Kone))-Math.log((Ktwo)))/(1/T1-1/T2);
    delSperP[x] = Math.log(Kone)-(delHperR[x]*(1/(T1)));
    TempR[x] = eltempapproxer(x,Number(document.getElementById('sliderval20').value));
    RetGrad[x] = ((TempR[x]-T1+273)/Number(document.getElementById('sliderval20').value))*60;
    kgrad[x] = (RetGrad[x]/60-deadtime)/deadtime;
    if (document.getElementById('TG').innerHTML == "Multiramp"){
      var john = multitrgetter(rampnum,x);
    Multigrad[x] = john;
    kmulti[x] = (Multigrad[x]/60-deadtime)/deadtime;
    DgMulti[x] = 0.00143*Math.pow(Multitempr[x]+273,1.75)*Math.pow(1/molMa[x]+1/MolMc,0.5)/(Math.pow(Math.pow(sigV[x],1/3)+Math.pow(sigVc,1/3),2));
    Hmulti[x] = 2*DgMulti[x]/(lin*600000)+(1+6*kmulti[x]+11*kmulti[x]*kmulti[x])*(diam/1000*diam/1000)*(lin*60)/(96*(1+kmulti[x]*(1+kmulti[x])*DgMulti[x]/10000));
    sdfm(x);}
    }
function tgapp(a,dHperR,T){
    return 1/(deadtime*(1+Math.exp(a)*Math.exp(dHperR/T)));
  }
function eltempapproxer(index,rate){
    var startingT = Number(document.getElementById('sliderval1').value)+273;
    var res = 0; var b = startingT;
    while (res<rate){
      var interval = (b-startingT)/4;
      res = interval/3*(tgapp(delSperP[index],delHperR[index],startingT)+4*tgapp(delSperP[index],delHperR[index],startingT+interval)+2*tgapp(delSperP[index],delHperR[index],startingT+2*interval)+4*tgapp(delSperP[index],delHperR[index],startingT+3*interval)+tgapp(delSperP[index],delHperR[index],startingT+4*interval));
      b = b + 0.01;
    }
    return b-273
}
function eltempapproxerv2(T0,index,rate,L,v){
  var res = 0; var b = Number(T0)+0.01;
  while (res<rate){
    var interval = (b-T0)/4;
    res = interval/3*(tgappv2(delSperP[index],delHperR[index],T0,L,v)+4*tgappv2(delSperP[index],delHperR[index],T0+interval,L,v)+2*tgappv2(delSperP[index],delHperR[index],T0+2*interval,L,v)+4*tgappv2(delSperP[index],delHperR[index],T0+3*interval,L,v)+tgappv2(delSperP[index],delHperR[index],T0+4*interval,L,v));
    b = Number(b) + 0.01;
  }
  return b}
function tgappv2(a,dHperR,T,L,v){
    return 1/(L/v*(1+Math.exp(a)*Math.exp(dHperR/T)));
  }
function tgappv3(a,dHperR,T){
    return 1/((1+Math.exp(a)*Math.exp(dHperR/T)));
  }
function multint(T1,T0,index){
  var interval = (T1-T0)/4;
      return interval/3*(tgappv3(delSperP[index],delHperR[index],T0)+4*tgappv3(delSperP[index],delHperR[index],T0+interval)+2*tgappv3(delSperP[index],delHperR[index],T0+2*interval)+4*tgappv3(delSperP[index],delHperR[index],T0+3*interval)+tgappv3(delSperP[index],delHperR[index],T0+4*interval));
}
function multitrgetter(rampnum,index){
  var T0 = Number(document.getElementById('sliderval1').value)+273;
  var L = Number(document.getElementById('sliderval3').value);
  var T1 = T0; var joy=0; var retti=0; var blegh=0; var alin = lin*100;
  for(i=1;i<=rampnum;i++){
    T0 = T1;
    T1 = Number(T0)+Number(document.getElementById('rr'+i).value*document.getElementById('rtime'+i).value);
    var check = Number(multint(T1,T0,index)*alin/document.getElementById('rr'+i).value);
    if (check < Number(L)){
      L = L - Number(multint(T1,T0,index)*alin/document.getElementById('rr'+i).value);
      retti = Number(retti) + Number(document.getElementById('rtime'+i).value);
    }
    else{
      blegh = eltempapproxerv2(T0,index,document.getElementById('rr'+i).value,L,alin);
      joy = (Number(blegh)-Number(T0))/document.getElementById('rr'+i).value;
      Multitempr[index] = blegh;
      break;
    }
  }
  return Number(retti)+Number(joy);
}
function Trprox(Ht,St,Tt,Ratet){
  var delx = 1; var l = Number(document.getElementById('sliderval3').value)
  var n = l/delx;
  var bt = 0; var i = 0;
  while (i<=n){
    bt = bt+delx*deadtime/l*(1+Math.exp(Ht/(Tt+Ratet*i)+St));
    i = i+delx;
  }
  return bt
}
function logk(x,T){
    return (smallc+slopec*(T)) + ((smalla+slopea*(T))*biga[x]) + ((smallb+slopeb*(T))*bigb[x]) + ((smalls+slopes*(T))*bigs[x]) + ((smalll+slopel*(T))*bigl[x]) + ((smalle+slopee*(T))*bige[x]);
}

//if this function didnt exist, then canvas wouldnt refresh
function reset(){
    i=1;
    x=0;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ztx.clearRect(0,0,zoomed.width,zoomed.height)
    }
function responder(x){
  document.getElementById('sliderval10').value = (2*sd[x]);
  document.getElementById('axisslider').value = ret[x]*document.getElementById('sliderval10').value - sd[x]*document.getElementById('sliderval10').value ;
}
function Cor(x){
  document.getElementById('sliderval'+x).value = document.getElementById('slidervals'+x).value;
}
function Cors(x){
  document.getElementById('slidervals'+x).value = document.getElementById('sliderval'+x).value;
}
function redraw(){
    var bod = document.body.clientWidth;
    ctx.canvas.width = bod; //responsive canvas width
    ctx.canvas.height = "250"; //nonresponsive canvas height
    document.getElementById("ip").style.width = bod + "px"; //trivial but required
    document.getElementById("ip").style.height = "250px"; //trivial but required
    document.getElementById("lens").style.width = bod/15 + "px"; //responsive zooming lens width
    document.getElementById('zoomed').style.height = '300px'; //responsive canvas film
    document.getElementById('zoomed').style.width = bod/3.1 + "px"; //responsive canvas film
    
    document.getElementById('axisslider').max = 6000*document.getElementById('sliderval10').value
    colorer();
    reset(); //resets the canvas
    equations(); //runs the equation in case parameters change
    if (document.getElementById('R').innerHTML == "Chromatogram"){
      if (document.getElementById('TG').innerHTML == "Isothermal"){
      alldrawer();
      bubbler();}
      else if (document.getElementById('TG').innerHTML == "Tempgrad") {
        alldrawerGrad();
        bubblergrad();
      }
      else {
        alldrawermulti();
        bubblermulti();
      }
    }
    else {
      if (document.getElementById('TG').innerHTML == "Isothermal"){
      for (i=1;i<=anum;i++){
        draw(i); //draws canvas analyte# times
      }
      bubbler();
    }
      else if (document.getElementById('TG').innerHTML == "Tempgrad"){
        for (i=1;i<=anum;i++){
          drawgrad(i); //draws canvas analyte# times
        }
      bubblergrad()
      }
      else {
        for (i=1;i<=anum;i++){
          drawmulti(i); //draws canvas analyte# times
        }
      bubblermulti()
      }
    }
    for (i=1;i<=anum;i++){
      reporternew(i);
    }
    
    axisdraw();
    var cointoss = reportcheck();
    if (cointoss == 0){
      document.getElementById('tablehead').style.display = "none";
      document.getElementById('tablehair').style.display = "flex"
    }
    else{
      document.getElementById('tablehead').style.display = "inline";
      document.getElementById('tablehair').style.display = "none"
    }
    }
function Real(){
  if (document.getElementById('R').innerHTML == "Peak View"){
    document.getElementById('R').innerHTML = "Chromatogram"
  }
  else {
    document.getElementById('R').innerHTML = "Peak View"
  }
}
function zoomus(){
  zoomu = setInterval(function(){
    document.getElementById('sliderval10').stepUp(); redrawer();zoomcounter=zoomcounter+10;
  },200-zoomcounter)
}
function zoomds(){
  zoomd = setInterval(function(){
    document.getElementById('sliderval10').stepDown(); redrawer();zoomcounter=zoomcounter+10;
  },200-zoomcounter)
}
function redrawer(){
  setTimeout(redraw,50); //frame per sec, take caution not to be too demanding
    }
function ShowWidget(){
  if (document.getElementById('ShowWidget').title == "Widget On"){
    for(bn=1;bn<=anum;bn++){
      bub[bn] = '1';
    }
    document.getElementById('ShowWidget').title="Widget Off"
    document.getElementById('ShowWidget').style.border="2px inset grey"
  }
  else {
    for(bb=1;bb<=anum;bb++){
      bub[bb] = '0';
    }
    document.getElementById('ShowWidget').title="Widget On"
    document.getElementById('ShowWidget').style.border="2px outset grey"
  }
}
function zoomdrawer(){
  ztx.clearRect(0,0,zoomed.width,zoomed.height)
    var xstart = xcord-lenswidth/2;
    var ystart = ycord-lensheight/2;
    ztx.drawImage(canvas,xstart,ystart,document.getElementById("lens").offsetWidth,document.getElementById("lens").offsetHeight,0,0,ztx.canvas.width,ztx.canvas.height); //this is for the blue pan
    }
function zoomdrawerT(){
  setTimeout(zoomdrawer,50)
}
function draw (index){  //draws the canvas
  var i = 1;
  var x = 0, y = ctx.canvas.clientHeight, z, a;
  ctx.strokeStyle = document.getElementById('Analyte'+index).style.color;
  while (i < strength) {
      ctx.beginPath();
      ctx.moveTo(x,y);
      x = x+ctx.canvas.clientWidth/strength; //This defines the increments or "resolution" of the plot.
      z = Math.pow(((x+Number(document.getElementById("axisslider").value))/document.getElementById("sliderval10").value-ret[index])/(sd[index]),2);
      a = 0.39894678/sd[index];
      
      y = (canvas.height-(  canvas.height*a*Math.pow(2.71828,-0.5*z)/Norm));
      ctx.lineTo(x,y);
      ctx.stroke()
      i++;}
  }
function drawgrad (index){  //draws the canvas
  var i = 1;
  var x = 0, y = ctx.canvas.clientHeight, z, a;
  ctx.strokeStyle = document.getElementById('Analyte'+index).style.color;
  while (i < strength) {
      ctx.beginPath();
      ctx.moveTo(x,y);
      x = x+ctx.canvas.clientWidth/strength; //This defines the increments or "resolution" of the plot.
      z = Math.pow(((x+Number(document.getElementById("axisslider").value))/document.getElementById("sliderval10").value-RetGrad[index])/(sdgrad[index]),2);
      a = 0.39894678/sdgrad[index];
      y = (canvas.height-(canvas.height*a*Math.pow(2.71828,-0.5*z)/Norm));
      ctx.lineTo(x,y);
      ctx.stroke()
      i++;}
  }
function drawmulti(index){  //draws the canvas
    var i = 1;
    var x = 0, y = ctx.canvas.clientHeight, z, a;
    ctx.strokeStyle = document.getElementById('Analyte'+index).style.color;
    while (i < strength) {
        ctx.beginPath();
        ctx.moveTo(x,y);
        x = x+ctx.canvas.clientWidth/strength; //This defines the increments or "resolution" of the plot.
        z = Math.pow(((x+Number(document.getElementById("axisslider").value))/document.getElementById("sliderval10").value-Multigrad[index])/(multisd[index]),2);
        a = 0.39894678/multisd[index];
        y = (canvas.height-(canvas.height*a*Math.pow(2.71828,-0.5*z)/Norm));
        ctx.lineTo(x,y);
        ctx.stroke()
        i++;}
    }  
  function alldrawerGrad(){
    var i = 1; 
    var x = 0,  y = ctx.canvas.clientHeight, a;
    ctx.strokeStyle = 'black';
    while (i < strength) {
        index=1;
        b = 0;
        ctx.beginPath();
        ctx.moveTo(x,y);
        x = x+ctx.canvas.clientWidth/strength; //This defines the increments or "resolution" of the plot.
        while (index <= anum){
        z = 0, a=0;
        z = Math.pow((x/document.getElementById("sliderval10").value-RetGrad[index]+Number(document.getElementById("axisslider").value)/document.getElementById("sliderval10").value)/(sdgrad[index]),2);
        a = 0.39894678/sdgrad[index];
        if ((a*Math.pow(2.71828,-0.5*z)/Norm)<100){
          b = b+(a*Math.pow(2.71828,-0.5*z)/Norm);
        }
        index++}
        y = (canvas.height-canvas.height*b);
        ctx.lineTo(x,y);
        ctx.stroke()
        i++;}
  }
function alldrawer(){
  var i = 1; 
  var x = 0,  y = ctx.canvas.clientHeight, a;
  ctx.strokeStyle = 'black';
  while (i < strength) {
      index=1;
      b = 0;
      ctx.beginPath();
      ctx.moveTo(x,y);
      x = x+ctx.canvas.clientWidth/strength; //This defines the increments or "resolution" of the plot.
      while (index <= anum){
      z = 0, a=0
      z = Math.pow((x/document.getElementById("sliderval10").value-ret[index]+Number(document.getElementById("axisslider").value)/document.getElementById("sliderval10").value)/(sd[index]),2);
      a = 0.39894678/sd[index];
      if ((a*Math.pow(2.71828,-0.5*z)/Norm)<100){
        b = b+(a*Math.pow(2.71828,-0.5*z)/Norm);
      }
      index++}
      y = (canvas.height-canvas.height*b);
      ctx.lineTo(x,y);
      ctx.stroke()
      i++;}
}
function randomizer(x){
  if (grandomtoken == 1){ 
  return Math.random()*(2*x)-x;}
  else {
    return 0;
  }
}
function filterbaseline(){
  if (gfilterb == 0){
    gfilterb = gnoiselevel
  }
  else {
    gfilterb = 0
  }
}
function showCoords(event) { //moves the blue box
    xcord = event.clientX-document.getElementById("ip").getBoundingClientRect().left;
    ycord = event.clientY-document.getElementById("ip").getBoundingClientRect().top;
    document.getElementById("lens").style.display = "inline-block";
    lensheight = document.getElementById("lens").offsetHeight;
    lenswidth = document.getElementById("lens").offsetWidth;
    if (xcord < lenswidth/2) {xcord = lenswidth/2;} //the ifs make sure blue box doesnt get out of canvas
    if (ycord < lensheight/2) {ycord = lensheight/2;}
    if (xcord > document.getElementById("ip").offsetWidth) {xcord=lenswidth/2;}
    if (xcord+lenswidth/2 > document.getElementById("ip").offsetWidth) {xcord=document.getElementById("ip").offsetWidth-lenswidth/2;}
    if (ycord+lensheight/2 > document.getElementById("ip").offsetHeight) {ycord=document.getElementById("ip").offsetHeight-lensheight/2;}
    document.getElementById("lens").style.top = (ycord-lensheight/2) +"px";
    ylens =  document.getElementById("lens").style.top;
    document.getElementById("lens").style.left = (xcord-lenswidth/2) +"px";
    xlens =  document.getElementById("lens").style.left;
    }    
//This function colors the stationary phase a when clicked, and colors all the others the b.
function bodyonload(){
    for (i=1;i<=anum;i++){
      for (a=1;a<=5;a++){
          document.getElementById("choice"+i+a).style.display = "none";
      };
  }
  ZoomButton();
  redrawer();
  
  document.getElementById("mainbody").addEventListener("click", redrawer);
  document.addEventListener('dragover', (e) => e.preventDefault(), true);
  window.addEventListener("resize", redrawer);
  document.getElementById("mainbody").addEventListener("input", redrawer);
  document.getElementById("axisslider").addEventListener("input", redrawer);
  document.getElementById("ip").addEventListener("mousemove", zoomdrawer);
  SearcherStat('DB-1');
  Carrier(2.67,4,1,0.3992945,186.61685,1);
  noiseload();
  document.getElementById('crypt').addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {

    crypt();
    alpresetter();
    redrawer();
  }});
  
}
function crypt(){
  var i = 0;  var count = 0;
  while (i < document.getElementById('crypt').value.length){
      c[i] = (decoder(document.getElementById('crypt').value.charAt(i)));
      i = i+1;
  }
}
function alpresetter(){
  k = [0,0,0,0,0,0]; yo = [0,0,0,0,0,0]; ret = [0,0,0,0,0,0]; H = [0,0,0,0,0,0]; biga = [999,999,999,999,999,999]; bigb = [999,999,999,999,999,999]; bigs = [999,999,999,999,999,999]; bigl = [999,999,999,999,999,999]; bige = [999,999,999,999,999,999];
  codepresetter(c[0],c[1],c[2],c[3],c[4]);
  document.getElementById('stat'+c[5].toString()).click();
  document.getElementById('sliderval1').value = c[6]/92*260+40;
  document.getElementById('sliderval2').value = c[7]/92*4.95+0.05;
  document.getElementById('sliderval3').value = c[8]/92*90+10;
  document.getElementById('cg'+c[9].toString()).click();
}
function importer(){
  var temp = '';
  var T = Math.round(((document.getElementById('sliderval1').value-40)*92/260));
  var f = Math.round(((document.getElementById('sliderval2').value-0.05)*92/4.95));
  var L = Math.round(((document.getElementById('sliderval3').value-10)*92/90));
  temp = coder(Index[1]).toString() + coder(Index[2]).toString() + coder(Index[3]).toString() + coder(Index[4]).toString() + coder(Index[5]).toString() + coder(Index[6]).toString() + coder(T).toString() + coder(f).toString() + coder(L).toString() + coder(Index[7]).toString();
  alert(temp);
  
}
function Tempgrad(){
  if (document.getElementById('TG').innerHTML == "Isothermal"){
    document.getElementById('RR').classList.remove('nodisplay');
    document.getElementById('RR').classList.add('opCondsChoicess');
    document.getElementById('TG').innerHTML = "Tempgrad";
    document.getElementById('Start').innerHTML = "Starting";
  }
  else if (document.getElementById('TG').innerHTML == "Tempgrad"){
    document.getElementById('TG').innerHTML = "Multiramp";
    document.getElementById('Start').innerHTML = "";
    document.getElementById('RR').classList.remove('opCondsChoicess');
    document.getElementById('RR').classList.add('nodisplay');
    displayer('RampPanel');
    
  }
  else {
    document.getElementById('TG').innerHTML = "Isothermal";
    document.getElementById('Start').innerHTML = "";
    displayer('RampPanel');
  }
}
function addramp(i){
  var btn = document.createElement("DIV");   
  btn.setAttribute('id','ramp'+i);
  btn.classList.add('multi');               
  document.getElementById('RampPanel').appendChild(btn);
  var input = document.createElement("input");
  input.setAttribute('id','rr'+i);
  document.getElementById('ramp'+i).appendChild(input);
  var input2 = document.createElement("input");
  input.setAttribute('id','rtime'+i);
  document.getElementById('ramp'+i).appendChild(input2);
}
function adder(){
  rampnum = rampnum + 1;
  addramp(rampnum)
}
function codepresetter(x,y,z,a,b){
  let presetlistcode = ["0",Analist[x].Analyte,Analist[y].Analyte,Analist[z].Analyte,Analist[a].Analyte,Analist[b].Analyte];
  for (i=1;i<=5;i++){
    document.getElementById("Analyte"+i).value = "";
    AnalytearrayChanneler(i,presetlistcode[i]);
    document.getElementById("Analyte"+i).value = presetlistcode[i];
    if (document.getElementById("Analyte"+i).value == "None Chosen"){
      document.getElementById("Analyte"+i).value = ""
    } 
  }
}
function axisdraw(){
    ctx.fillStyle="black";
    var x = 0;
    ctx.font = "15px Helvenica";
    while (x<9000*document.getElementById("sliderval10").value){
        
        ctx.fillRect((x-Number(document.getElementById("axisslider").value)),ctx.canvas.clientHeight-8,2,8);
        ctx.fillText((x/(60*document.getElementById("sliderval10").value)).toFixed(0)+"'", x-Number(document.getElementById("axisslider").value)+4, ctx.canvas.clientHeight-3); 
        x=x+60*document.getElementById("sliderval10").value;
    }
    var maxh = (1/Norm)/10;
    var y = 225;
    while (y>0){
      ctx.fillRect(0,y,4,2);
      ctx.fillText((((250-y)/2500)*maxh).toFixed(2), 4, y); 
      y=y-25;
    }


}

function zoomdown(){
  document.getElementById('sliderval10').stepDown(); redrawer();zoomcounter++;
}
function zoomreset(){
  clearInterval(zoomu);
  clearInterval(zoomd);
  zoomcounter = 0;
}
function ZoomButton(){
  if (document.getElementById('ip').style.display == "none"){
    document.getElementById('ip').style.display = "block";
    document.getElementById('zoomed').style.display = "block";
  }
  else {
    document.getElementById('ip').style.display = "none";
    document.getElementById('zoomed').style.display = "none";
  }
}
function randomtoken(){
  if (grandomtoken < 1){
    grandomtoken = 1;
  }
  else {
    grandomtoken = 0;
  }
}
function Carrier(x,y,index,vs,vi,Choice){
    sigVc = x;
    MolMc = y;
    Index[7] = index;
    vslope = vs;
    vint = vi;
    for (i=1;i<4;i++){
      document.getElementById('cg'+i).style.backgroundColor="white"
    }
    document.getElementById('cg'+Choice).style.backgroundColor="#DDDDFF";
}
function colorer(){
  var index = 1;
  while (index<=anum){
    document.getElementById('Analyte'+index).style.color = document.getElementById('color'+index).value;
    index = index + 1;
  }
}
function displayer(x){
  if (document.getElementById(x).style.display == "none"){
    document.getElementById(x).style.display = "block"
  }
  else {
    document.getElementById(x).style.display = "none"
  
  }
}
function offsetterup(i){
  offsetx[i] = offsetx[i]+event.clientX-tempx;
  offsety[i] = offsety[i]+event.clientY-tempy;
  if (document.getElementById('TG').innerHTML == "Isothermal"){
  offsetmover(i);}
  else{
    offsetmovergrad(i)
  }
 }
function offsetterall(x){
  document.getElementById(x).style.left =  parseInt(document.getElementById(x).style.left) +  Number(event.clientX-tempx) + "px";
  document.getElementById(x).style.top = parseInt(document.getElementById(x).style.top) + Number(event.clientY-tempy) + "px";
 } 
function offsetterdown(){
  tempx = event.clientX;
  tempy = event.clientY;}
function offsetmover(i){
  document.getElementById("bubble"+i).style.left = (ret[i]*document.getElementById("sliderval10").value-Number(document.getElementById("axisslider").value)) +  Number(offsetx[i])+"px";
  document.getElementById("bubble"+i).style.top = document.getElementById("canvas").getBoundingClientRect().top + window.pageYOffset + offsety[i] + "px";
  document.getElementById("bubble"+i).style.borderColor = document.getElementById('color'+i).value}
function offsetmovergrad(i){
  document.getElementById("bubble"+i).style.left = (RetGrad[i]*document.getElementById("sliderval10").value-Number(document.getElementById("axisslider").value)) +  Number(offsetx[i])+"px";
  document.getElementById("bubble"+i).style.top = document.getElementById("canvas").getBoundingClientRect().top + window.pageYOffset + offsety[i] + "px";
  document.getElementById("bubble"+i).style.borderColor = document.getElementById('color'+i).value}
function offsetmovermulti(i){
  document.getElementById("bubble"+i).style.left = (Multigrad[i]*document.getElementById("sliderval10").value-Number(document.getElementById("axisslider").value)) +  Number(offsetx[i])+"px";
  document.getElementById("bubble"+i).style.top = document.getElementById("canvas").getBoundingClientRect().top + window.pageYOffset + offsety[i] + "px";
  document.getElementById("bubble"+i).style.borderColor = document.getElementById('color'+i).value}
function bubbler(){
  var clientwidth = document.getElementById('canvas').clientWidth + Number(document.getElementById("axisslider").value);
  for (i=1;i<=anum;i++){
    if (ret[i] < clientwidth && ret[i] > 0){
      if (bub[i] == '0'){
    document.getElementById("bubble"+i).style.display = "block";}
      else {
        document.getElementById("bubble"+i).style.display = "none";
      }
  offsetmover(i);
  document.getElementById('content'+i).textContent = "R.Time = " + (ret[i]/60).toFixed(2) + " min";
  document.getElementById('content'+i).innerHTML = document.getElementById('content'+i).textContent + '<br/>' + '<br/>'  + "FWHM = " + (sdp[i]*2.355).toFixed(2) + ' s' + '<br/>' + '<br/>' +'Bol.P = ' + BolP[i] + '&#176;'
  +"C" + '<br/>' + '<br/>' +'Mol.W = ' + molMa[i] + ' g/mol';
}
    else {
    document.getElementById("bubble"+i).style.display = "none";
  }}
}
function bubblergrad(){
  var clientwidth = document.getElementById('canvas').clientWidth + Number(document.getElementById("axisslider").value);
  for (i=1;i<=anum;i++){
    if (RetGrad[i] < clientwidth && RetGrad[i] > 1){
      if (bub[i] == '0'){
    document.getElementById("bubble"+i).style.display = "block";}
      else {
        document.getElementById("bubble"+i).style.display = "none";
      }
  offsetmovergrad(i);
  document.getElementById('content'+i).textContent = "R.Time = " + (RetGrad[i]/60).toFixed(2) + " min";
  document.getElementById('content'+i).innerHTML = document.getElementById('content'+i).textContent + '<br/>' + '<br/>'  + "FWHM = " + (sdpgrad[i]*2.355).toFixed(2) + ' s' + '<br/>' + '<br/>' +'Bol.P = ' + BolP[i] + '&#176;'
  +"C" + '<br/>' + '<br/>' +'Mol.W = ' + molMa[i] + ' g/mol';
}
    else {
    document.getElementById("bubble"+i).style.display = "none";
  }}
}
function bubblermulti(){
  var clientwidth = document.getElementById('canvas').clientWidth + Number(document.getElementById("axisslider").value);
  for (i=1;i<=anum;i++){
    if (RetGrad[i] < clientwidth && RetGrad[i] > 1){
      if (bub[i] == '0'){
    document.getElementById("bubble"+i).style.display = "block";}
      else {
        document.getElementById("bubble"+i).style.display = "none";
      }
  offsetmovermulti(i);
  document.getElementById('content'+i).textContent = "R.Time = " + (Multigrad[i]/60).toFixed(2) + " min";
  document.getElementById('content'+i).innerHTML = document.getElementById('content'+i).textContent + '<br/>' + '<br/>'  + "FWHM = " + (multisdp[i]*2.355).toFixed(2) + ' s' + '<br/>' + '<br/>' +'Bol.P = ' + BolP[i] + '&#176;'
  +"C" + '<br/>' + '<br/>' +'Mol.W = ' + molMa[i] + ' g/mol';
}
    else {
    document.getElementById("bubble"+i).style.display = "none";
  }}
}
function addG(i){
  var btn = document.createElement("DIV");   
  btn.setAttribute('id','Report'+i)
  btn.classList.add('Analytein');               
  document.getElementById('pane1').appendChild(btn);
  var namet = document.createElement("DIV");
  namet.innerHTML = AnalyteName[i];
  namet.classList.add('inpane');               
  document.getElementById('Report'+i).appendChild(namet);
  var kt = document.createElement("DIV");
  kt.innerHTML = kgrad[i].toFixed(2);
  kt.classList.add('inpane');               
  document.getElementById('Report'+i).appendChild(kt);
  var rett = document.createElement("DIV");
  rett.innerHTML = (RetGrad[i]/60).toFixed(2);
  rett.classList.add('inpane');               
  document.getElementById('Report'+i).appendChild(rett);
  var pwt = document.createElement("DIV");
  pwt.innerHTML = (2.355*sdpgrad[i]).toFixed(2);
  pwt.classList.add('inpane');               
  document.getElementById('Report'+i).appendChild(pwt);
}
function add(i){
  var btn = document.createElement("DIV");   
  btn.setAttribute('id','Report'+i)
  btn.classList.add('Analytein');               
  document.getElementById('pane1').appendChild(btn);
  var namet = document.createElement("DIV");
  namet.innerHTML = AnalyteName[i];
  namet.classList.add('inpane');               
  document.getElementById('Report'+i).appendChild(namet);
  var kt = document.createElement("DIV");
  kt.innerHTML = k[i].toFixed(2);
  kt.classList.add('inpane');               
  document.getElementById('Report'+i).appendChild(kt);
  var rett = document.createElement("DIV");
  rett.innerHTML = (ret[i]/60).toFixed(2);
  rett.classList.add('inpane');               
  document.getElementById('Report'+i).appendChild(rett);
  var pwt = document.createElement("DIV");
  pwt.innerHTML = (2.355*sdp[i]).toFixed(2);
  pwt.classList.add('inpane');               
  document.getElementById('Report'+i).appendChild(pwt);
}
function noiseload(){
  var plato = strength+100000;
  for (bips=0;bips<plato;bips++){
  noise.push((Math.random()*20-10))};
}
function reporternew(i){
  var length = document.getElementById("sliderval3").value;
  var diam = document.getElementById("sliderval5").value; //input is in mm
  var mob = 3.14*Math.pow(diam/20,2)*length*100;
  document.getElementById("tm").value = deadtime.toFixed(3);
  document.getElementById("vm").value = mob.toFixed(3);
  document.getElementById("visc").value = viscosity.toFixed(3);
  document.getElementById("lin").value = lin.toFixed(2);
  var checker = document.getElementById("Report"+i);
  if (checker != null){
    document.getElementById('Report'+i).remove();
  }
  if (AnalyteName[i] != "None Chosen" && AnalyteName[i] != "0" && document.getElementById('TG').innerHTML == "Isothermal"){
    add(i)
  }
  if (AnalyteName[i] != "None Chosen" && AnalyteName[i] != "0" && document.getElementById('TG').innerHTML == "Tempgrad"){
    addG(i)
  }
}
function reportcheck(){
  var coin = 0;
  for(i=1;i<=anum;i++){
      if (document.getElementById("Report"+i) !== null){
        coin = 1;
    }
  }
  return coin;
}
function hlight(){
  for(i=1;i<=anum;i++){
  document.getElementById('Analyte'+i).classList.add('hlighted');}
  document.getElementById('purple').classList.add('nonlight');
  document.getElementById('purple').classList.remove('spbuttons');
  document.getElementById('dbut').classList.add('hlighted');
}
function rhlight(){
  for(i=1;i<=anum;i++){
  document.getElementById('Analyte'+i).classList.remove('hlighted');}
  document.getElementById('purple').classList.remove('nonlight');
  document.getElementById('purple').classList.add('spbuttons');
  document.getElementById('dbut').classList.remove('hlighted');
}
function decoder(x){
  if (x == "a"){
    return 1;
  }
  else if (x == '.'){
    return 0;
  }
  else if (x == "b"){
    return 2;
  }
  else if (x == 'c'){
    return 3;
  }
  else if (x == 'd'){
    return 4;
  }
  else if (x == 'e'){
    return 5;
  }
  else if (x == 'f'){
    return 6;
  }
  else if (x == 'g'){
    return 7;
  }
  else if (x == 'h'){
    return 8;
  }
  else if (x == 'i'){
    return 9;
  }
  else if (x == 'k'){
    return 10;
  }
  else if (x == 'l'){
    return 11;
  }
  else if (x == 'm'){
    return 12;
  }
  else if (x == 'n'){
    return 13;
  }
  else if (x == 'o'){
    return 14;
  }
  else if (x == 'p'){
    return 15;
  }
  else if (x == 'q'){
    return 16;
  }
  else if (x == 'r'){
    return 17;
  }
  else if (x == 's'){
    return 18;
  }
  else if (x == 't'){
    return 19;
  }
  else if (x == 'u'){
    return 20;
  }
  else if (x == 'v'){
    return 21;
  }
  else if (x == 'w'){
    return 22;
  }
  else if (x == 'x'){
    return 23;
  }
  else if (x == 'y'){
    return 24;
  }
  else if (x == 'z'){
    return 25;
  }
  else if (x == 'j'){
    return 26;
  }
  else if (x == 'A'){
    return 27;
  }
  else if (x == 'B'){
    return 28;
  }
  else if (x == 'C'){
    return 29;
  }
  else if (x == 'D'){
    return 30;
  }
  else if (x == 'E'){
    return 31;
  }
  else if (x == 'F'){
    return 32;
  }
  else if (x == 'G'){
    return 33;
  }
  else if (x == 'H'){
    return 34;
  }
  else if (x == 'I'){
    return 35;
  }
  else if (x == 'J'){
    return 36;
  }
  else if (x == 'K'){
    return 37;
  }
  else if (x == 'L'){
    return 38;
  }
  else if (x == 'M'){
    return 39;
  }
  else if (x == 'N'){
    return 40;
  }
  else if (x == 'O'){
    return 41;
  }
  else if (x == 'P'){
    return 42;
  }
  else if (x == 'Q'){
    return 43;
  }
  else if (x == 'R'){
    return 44;
  }
  else if (x == 'S'){
    return 45;
  }
  else if (x == 'T'){
    return 46;
  }
  else if (x == 'U'){
    return 47;
  }
  else if (x == 'V'){
    return 48;
  }
  else if (x == 'W'){
    return 49;
  }
  else if (x == 'X'){
    return 50;
  }
  else if (x == 'Y'){
    return 51;
  }
  else if (x == 'Z'){
    return 52;
  }
  else if (x == '!'){
    return 53;
  }
  else if (x == '@'){
    return 54;
  }
  else if (x == '#'){
    return 55;
  }
  else if (x == '$'){
    return 56;
  }
  else if (x == '%'){
    return 57;
  }
  else if (x == '^'){
    return 58;
  }
  else if (x == '&'){
    return 59;
  }
  else if (x == '*'){
    return 60;
  }
  else if (x == '('){
    return 61;
  }
  else if (x == ')'){
    return 62;
  }
  else if (x == '-'){
    return 63;
  }
  else if (x == '_'){
    return 64;
  }
  else if (x == '+'){
    return 65;
  }
  else if (x == '='){
    return 66;
  }
  else if (x == '/'){
    return 67;
  }
  else if (x == '?'){
    return 68;
  }
  else if (x == '<'){
    return 69;
  }
  else if (x == '>'){
    return 70;
  }
  else if (x == ','){
    return 71;
  }
  else if (x == '`'){
    return 72;
  }
  else if (x == '~'){
    return 73;
  }
  else if (x == ';'){
    return 74;
  }
  else if (x == ':'){
    return 75;
  }
  else if (x == '"'){
    return 76;
  }
  else if (x == "'"){
    return 77;
  }
  else if (x == ']'){
    return 78;
  }
  else if (x == '['){
    return 79;
  }
  else if (x == '{'){
    return 80;
  }
  else if (x == '}'){
    return 81;
  }
  else if (x == '|'){
    return 82;
  }
  else if (x == '1'){
    return 83;
  }
  else if (x == '2'){
    return 84;
  }
  else if (x == '3'){
    return 85;
  }
  else if (x == '4'){
    return 86;
  }
  else if (x == '5'){
    return 87;
  }
  else if (x == '6'){
    return 88;
  }
  else if (x == '7'){
    return 89;
  }
  else if (x == '8'){
    return 90;
  }
  else if (x == '9'){
    return 91;
  }
  else if (x == '0'){
    return 92;
  }
}
function coder(x){
  if (x == 1){
    return "a";
  }
  else if (x == 2){
    return "b";
  }
  else if (x == 3){
    return 'c';
  }
  else if (x == 4){
    return 'd';
  }
  else if (x == 5){
    return 'e';
  }
  else if (x == 6){
    return 'f';
  }
  else if (x == 7){
    return 'g';
  }
  else if (x == 8){
    return 'h';
  }
  else if (x == 9){
    return 'i';
  }
  else if (x == 10){
    return 'k';
  }
  else if (x == 11){
    return 'l';
  }
  else if (x == 12){
    return 'm';
  }
  else if (x == 13){
    return 'n';
  }
  else if (x == 14){
    return 'o';
  }
  else if (x == 15){
    return 'p';
  }
  else if (x == 16){
    return 'q';
  }
  else if (x == 17){
    return 'r';
  }
  else if (x == 18){
    return 's';
  }
  else if (x == 19){
    return 't';
  }
  else if (x == 20){
    return 'u';
  }
  else if (x == 21){
    return 'v';
  }
  else if (x == 22){
    return 'w';
  }
  else if (x == 23){
    return 'x';
  }
  else if (x == 24){
    return 'y';
  }
  else if (x == 25){
    return 'z';
  }
  else if (x == 26){
    return 'j';
  }
  else if (x == 27){
    return 'A';
  }
  else if (x == 28){
    return 'B';
  }
  else if (x == 29){
    return 'C';
  }
  else if (x == 30){
    return 'D';
  }
  else if (x == 31){
    return 'E';
  }
  else if (x == 32){
    return 'F';
  }
  else if (x == 33){
    return 'G';
  }
  else if (x == 34){
    return 'H';
  }
  else if (x == 35){
    return 'I';
  }
  else if (x == 36){
    return 'J';
  }
  else if (x == 37){
    return 'K';
  }
  else if (x == 38){
    return 'L';
  }
  else if (x == 39){
    return 'M';
  }
  else if (x == 40){
    return 'N';
  }
  else if (x == 41){
    return 'O';
  }
  else if (x == 42){
    return 'P';
  }
  else if (x == 43){
    return 'Q';
  }
  else if (x == 44){
    return 'R';
  }
  else if (x == 45){
    return 'R';
  }
  else if (x == 46){
    return 'T';
  }
  else if (x == 47){
    return 'U';
  }
  else if (x == 48){
    return 'V';
  }
  else if (x == 49){
    return 'W';
  }
  else if (x == 50){
    return 'X';
  }
  else if (x == 51){
    return 'Y';
  }
  else if (x == 52){
    return 'Z';
  }
  else if (x == 53){
    return '!';
  }
  else if (x == 54){
    return '@';
  }
  else if (x == 55){
    return '#';
  }
  else if (x == 56){
    return '$';
  }
  else if (x == 57){
    return '%';
  }
  else if (x == 58){
    return '^';
  }
  else if (x == 59){
    return '&';
  }
  else if (x == 60){
    return '*';
  }
  else if (x == 61){
    return '(';
  }
  else if (x == 62){
    return ')';
  }
  else if (x == 63){
    return '-';
  }
  else if (x == 64){
    return '_';
  }
  else if (x == 65){
    return '+';
  }
  else if (x == 66){
    return '=';
  }
  else if (x == 67){
    return '/';
  }
  else if (x == 68){
    return '?';
  }
  else if (x == 69){
    return '<';
  }
  else if (x == 70){
    return '>';
  }
  else if (x == 71){
    return ',';
  }
  else if (x == 72){
    return '`';
  }
  else if (x == 73){
    return '~';
  }
  else if (x == 74){
    return ';';
  }
  else if (x == 75){
    return ':';
  }
  else if (x == 76){
    return '"';
  }
  else if (x == 77){
    return "'";
  }
  else if (x == 78){
    return ']';
  }
  else if (x == 79){
    return '[';
  }
  else if (x == 80){
    return '{';
  }
  else if (x == 81){
    return '}';
  }
  else if (x == 82){
    return '|';
  }
  else if (x == 83){
    return '1';
  }
  else if (x == 84){
    return '2';
  }
  else if (x == 85){
    return '3';
  }
  else if (x == 86){
    return '4';
  }
  else if (x == 87){
    return '5';
  }
  else if (x == 88){
    return '6';
  }
  else if (x == 89){
    return '7';
  }
  else if (x == 90){
    return '8';
  }
  else if (x == 91){
    return '9';
  }
  else if (x == 92){
    return '0';
  }
  else if (x == 0){
    return '.'
  }
}