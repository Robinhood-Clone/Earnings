const db = require('./index.js');
const Earning = require('./Earning.js');

const sampleEarnings =
  [{
    "seedID": 1,
    "ticker": "MMM",
    "companyName": "3M",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$208.85",
        "actualPrice": "$147.30"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$87.33",
        "actualPrice": "$143.73"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$356.04",
        "actualPrice": "$400.97"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$304.14",
        "actualPrice": "$155.94"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$45.49",
        "actualPrice": "$39.62"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$413.07",
        "actualPrice": "$140.30"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$86.10",
        "actualPrice": "$378.55"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$249.94",
        "actualPrice": "$267.75"
      }
    ]
  }, {
    "seedID": 2,
    "ticker": "F",
    "companyName": "Ford",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$461.92",
        "actualPrice": "$410.20"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$455.54",
        "actualPrice": "$335.45"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$417.34",
        "actualPrice": "$233.63"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$31.58",
        "actualPrice": "$136.80"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$10.86",
        "actualPrice": "$167.51"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$329.77",
        "actualPrice": "$4.93"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$440.42",
        "actualPrice": "$60.08"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$109.19",
        "actualPrice": "$439.94"
      }
    ]
  }, {
    "seedID": 3,
    "ticker": "GE",
    "companyName": "GE",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$196.35",
        "actualPrice": "$327.16"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$357.17",
        "actualPrice": "$29.61"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$130.64",
        "actualPrice": "$200.11"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$269.77",
        "actualPrice": "$23.91"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$178.96",
        "actualPrice": "$194.14"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$173.60",
        "actualPrice": "$12.96"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$108.57",
        "actualPrice": "$393.11"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$195.95",
        "actualPrice": "$16.32"
      }
    ]
  }, {
    "seedID": 4,
    "ticker": "FIT",
    "companyName": "Fitbit",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$57.67",
        "actualPrice": "$373.08"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$253.19",
        "actualPrice": "$51.23"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$138.29",
        "actualPrice": "$95.16"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$161.13",
        "actualPrice": "$144.71"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$61.45",
        "actualPrice": "$109.49"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$7.97",
        "actualPrice": "$354.39"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$343.04",
        "actualPrice": "$108.42"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$39.85",
        "actualPrice": "$226.37"
      }
    ]
  }, {
    "seedID": 5,
    "ticker": "GPRO",
    "companyName": "GoPro",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$498.02",
        "actualPrice": "$74.86"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$89.08",
        "actualPrice": "$235.04"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$153.76",
        "actualPrice": "$81.15"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$440.00",
        "actualPrice": "$472.78"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$70.90",
        "actualPrice": "$490.67"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$109.20",
        "actualPrice": "$497.47"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$383.33",
        "actualPrice": "$232.23"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$377.76",
        "actualPrice": "$211.07"
      }
    ]
  }, {
    "seedID": 6,
    "ticker": "MSFT",
    "companyName": "Microsoft",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$132.22",
        "actualPrice": "$167.68"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$270.48",
        "actualPrice": "$291.80"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$287.33",
        "actualPrice": "$364.75"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$263.74",
        "actualPrice": "$71.12"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$437.54",
        "actualPrice": "$270.06"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$394.72",
        "actualPrice": "$181.96"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$386.12",
        "actualPrice": "$269.64"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$330.70",
        "actualPrice": "$295.69"
      }
    ]
  }, {
    "seedID": 7,
    "ticker": "AAPL",
    "companyName": "Apple",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$462.46",
        "actualPrice": "$212.45"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$11.72",
        "actualPrice": "$351.59"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$244.31",
        "actualPrice": "$265.21"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$227.96",
        "actualPrice": "$93.05"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$211.61",
        "actualPrice": "$497.95"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$498.61",
        "actualPrice": "$329.99"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$128.38",
        "actualPrice": "$165.39"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$83.90",
        "actualPrice": "$7.27"
      }
    ]
  }, {
    "seedID": 8,
    "ticker": "DIS",
    "companyName": "Disney",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$246.41",
        "actualPrice": "$317.00"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$120.94",
        "actualPrice": "$340.75"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$94.63",
        "actualPrice": "$20.80"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$49.35",
        "actualPrice": "$288.15"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$118.01",
        "actualPrice": "$181.12"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$53.77",
        "actualPrice": "$361.27"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$421.63",
        "actualPrice": "$279.48"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$49.11",
        "actualPrice": "$279.35"
      }
    ]
  }, {
    "seedID": 9,
    "ticker": "CRON",
    "companyName": "Cronos Group",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$458.61",
        "actualPrice": "$23.66"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$481.80",
        "actualPrice": "$191.86"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$418.47",
        "actualPrice": "$469.22"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$303.71",
        "actualPrice": "$367.23"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$363.57",
        "actualPrice": "$27.93"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$214.31",
        "actualPrice": "$204.51"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$436.37",
        "actualPrice": "$79.15"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$416.67",
        "actualPrice": "$20.26"
      }
    ]
  }, {
    "seedID": 10,
    "ticker": "CGC",
    "companyName": "Canopy Growth",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$230.85",
        "actualPrice": "$354.50"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$12.59",
        "actualPrice": "$374.65"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$421.31",
        "actualPrice": "$109.13"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$97.96",
        "actualPrice": "$264.89"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$65.03",
        "actualPrice": "$452.60"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$433.51",
        "actualPrice": "$425.51"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$15.83",
        "actualPrice": "$9.53"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$213.87",
        "actualPrice": "$74.80"
      }
    ]
  }, {
    "seedID": 11,
    "ticker": "SNAP",
    "companyName": "Snap",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$161.47",
        "actualPrice": "$444.88"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$236.89",
        "actualPrice": "$466.60"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$412.60",
        "actualPrice": "$81.72"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$60.43",
        "actualPrice": "$324.36"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$113.93",
        "actualPrice": "$199.96"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$71.21",
        "actualPrice": "$242.43"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$384.82",
        "actualPrice": "$362.95"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$420.02",
        "actualPrice": "$421.79"
      }
    ]
  }, {
    "seedID": 12,
    "ticker": "AMD",
    "companyName": "AMD",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$316.55",
        "actualPrice": "$3.29"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$372.72",
        "actualPrice": "$375.55"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$411.59",
        "actualPrice": "$128.27"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$137.12",
        "actualPrice": "$457.34"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$445.66",
        "actualPrice": "$349.50"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$191.66",
        "actualPrice": "$404.69"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$184.20",
        "actualPrice": "$142.53"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$23.62",
        "actualPrice": "$19.99"
      }
    ]
  }, {
    "seedID": 13,
    "ticker": "PLUG",
    "companyName": "Plug Power",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$374.67",
        "actualPrice": "$424.73"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$422.51",
        "actualPrice": "$276.83"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$395.84",
        "actualPrice": "$306.99"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$144.00",
        "actualPrice": "$182.50"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$113.19",
        "actualPrice": "$186.77"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$485.72",
        "actualPrice": "$392.84"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$307.89",
        "actualPrice": "$61.39"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$133.02",
        "actualPrice": "$355.71"
      }
    ]
  }, {
    "seedID": 14,
    "ticker": "FB",
    "companyName": "Facebook",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$194.72",
        "actualPrice": "$28.44"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$210.07",
        "actualPrice": "$91.36"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$377.20",
        "actualPrice": "$101.18"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$330.95",
        "actualPrice": "$449.14"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$4.32",
        "actualPrice": "$426.29"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$420.83",
        "actualPrice": "$181.46"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$62.57",
        "actualPrice": "$250.97"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$94.54",
        "actualPrice": "$25.33"
      }
    ]
  }, {
    "seedID": 15,
    "ticker": "TSLA",
    "companyName": "Tesla",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$367.98",
        "actualPrice": "$242.66"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$61.45",
        "actualPrice": "$450.01"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$254.09",
        "actualPrice": "$81.13"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$460.76",
        "actualPrice": "$313.82"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$278.99",
        "actualPrice": "$340.72"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$257.95",
        "actualPrice": "$92.08"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$46.52",
        "actualPrice": "$195.63"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$159.24",
        "actualPrice": "$112.12"
      }
    ]
  }, {
    "seedID": 16,
    "ticker": "ZNGA",
    "companyName": "Zynga",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$255.66",
        "actualPrice": "$123.21"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$384.36",
        "actualPrice": "$302.41"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$418.63",
        "actualPrice": "$420.86"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$225.12",
        "actualPrice": "$493.01"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$345.86",
        "actualPrice": "$26.85"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$83.36",
        "actualPrice": "$251.39"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$224.89",
        "actualPrice": "$297.47"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$283.94",
        "actualPrice": "$164.42"
      }
    ]
  }, {
    "seedID": 17,
    "ticker": "TWTR",
    "companyName": "Twitter",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$314.76",
        "actualPrice": "$180.71"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$72.33",
        "actualPrice": "$298.00"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$128.13",
        "actualPrice": "$91.78"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$224.93",
        "actualPrice": "$169.62"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$136.82",
        "actualPrice": "$254.48"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$494.91",
        "actualPrice": "$2.53"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$432.09",
        "actualPrice": "$55.21"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$326.05",
        "actualPrice": "$15.66"
      }
    ]
  }, {
    "seedID": 18,
    "ticker": "AMZN",
    "companyName": "Amazon",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$257.34",
        "actualPrice": "$18.31"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$383.69",
        "actualPrice": "$425.79"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$280.72",
        "actualPrice": "$322.61"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$159.89",
        "actualPrice": "$305.37"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$107.96",
        "actualPrice": "$132.30"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$51.66",
        "actualPrice": "$436.70"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$123.65",
        "actualPrice": "$399.63"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$19.67",
        "actualPrice": "$347.69"
      }
    ]
  }, {
    "seedID": 19,
    "ticker": "BABA",
    "companyName": "Alibaba",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$290.67",
        "actualPrice": "$281.33"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$494.35",
        "actualPrice": "$409.48"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$429.62",
        "actualPrice": "$57.89"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$330.31",
        "actualPrice": "$311.95"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$52.96",
        "actualPrice": "$297.04"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$496.52",
        "actualPrice": "$310.59"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$340.62",
        "actualPrice": "$481.06"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$61.61",
        "actualPrice": "$468.66"
      }
    ]
  }, {
    "seedID": 20,
    "ticker": "CHK",
    "companyName": "Chesapeake Energy",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$149.86",
        "actualPrice": "$137.00"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$0.94",
        "actualPrice": "$465.82"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$416.29",
        "actualPrice": "$308.55"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$442.86",
        "actualPrice": "$24.69"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$7.90",
        "actualPrice": "$243.74"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$278.63",
        "actualPrice": "$471.67"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$417.94",
        "actualPrice": "$27.98"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$40.07",
        "actualPrice": "$427.60"
      }
    ]
  }, {
    "seedID": 21,
    "ticker": "UBER",
    "companyName": "Uber",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$273.21",
        "actualPrice": "$265.33"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$172.60",
        "actualPrice": "$328.32"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$292.64",
        "actualPrice": "$114.79"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$69.75",
        "actualPrice": "$68.56"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$381.36",
        "actualPrice": "$450.22"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$193.86",
        "actualPrice": "$397.72"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$225.20",
        "actualPrice": "$413.19"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$351.37",
        "actualPrice": "$459.56"
      }
    ]
  }, {
    "seedID": 22,
    "ticker": "BAC",
    "companyName": "Bank of America",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$71.70",
        "actualPrice": "$418.33"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$453.32",
        "actualPrice": "$289.71"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$123.58",
        "actualPrice": "$489.68"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$96.06",
        "actualPrice": "$350.14"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$480.24",
        "actualPrice": "$296.42"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$72.87",
        "actualPrice": "$82.74"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$317.63",
        "actualPrice": "$369.51"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$306.09",
        "actualPrice": "$282.05"
      }
    ]
  }, {
    "seedID": 23,
    "ticker": "NIO",
    "companyName": "NIO",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$300.22",
        "actualPrice": "$273.24"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$168.57",
        "actualPrice": "$208.21"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$294.08",
        "actualPrice": "$102.66"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$180.75",
        "actualPrice": "$25.04"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$147.44",
        "actualPrice": "$493.04"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$170.57",
        "actualPrice": "$430.09"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$305.69",
        "actualPrice": "$105.93"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$374.57",
        "actualPrice": "$50.53"
      }
    ]
  }, {
    "seedID": 24,
    "ticker": "NFLX",
    "companyName": "Netflix",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$237.80",
        "actualPrice": "$310.48"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$145.28",
        "actualPrice": "$331.85"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$427.61",
        "actualPrice": "$2.50"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$61.06",
        "actualPrice": "$269.76"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$477.81",
        "actualPrice": "$3.35"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$189.51",
        "actualPrice": "$77.51"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$327.55",
        "actualPrice": "$120.74"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$171.12",
        "actualPrice": "$262.31"
      }
    ]
  }, {
    "seedID": 25,
    "ticker": "T",
    "companyName": "AT&T",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$259.46",
        "actualPrice": "$455.99"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$381.10",
        "actualPrice": "$114.06"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$301.56",
        "actualPrice": "$495.14"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$367.95",
        "actualPrice": "$5.00"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$104.33",
        "actualPrice": "$395.45"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$335.70",
        "actualPrice": "$399.08"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$137.83",
        "actualPrice": "$409.29"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$499.66",
        "actualPrice": "$384.08"
      }
    ]
  }, {
    "seedID": 26,
    "ticker": "SBUX",
    "companyName": "Starbucks",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$488.49",
        "actualPrice": "$488.36"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$68.83",
        "actualPrice": "$208.40"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$451.75",
        "actualPrice": "$482.15"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$380.06",
        "actualPrice": "$33.74"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$357.16",
        "actualPrice": "$88.14"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$310.24",
        "actualPrice": "$408.66"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$304.03",
        "actualPrice": "$51.78"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$330.98",
        "actualPrice": "$8.70"
      }
    ]
  }, {
    "seedID": 27,
    "ticker": "NVDA",
    "companyName": "NVIDIA",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$24.23",
        "actualPrice": "$90.84"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$286.27",
        "actualPrice": "$426.77"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$165.94",
        "actualPrice": "$81.53"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$334.86",
        "actualPrice": "$58.67"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$307.65",
        "actualPrice": "$464.40"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$124.37",
        "actualPrice": "$58.81"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$10.47",
        "actualPrice": "$57.89"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$398.21",
        "actualPrice": "$98.95"
      }
    ]
  }, {
    "seedID": 28,
    "ticker": "APHA",
    "companyName": "Aphria",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$360.80",
        "actualPrice": "$206.20"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$367.92",
        "actualPrice": "$97.33"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$487.46",
        "actualPrice": "$395.85"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$147.41",
        "actualPrice": "$104.71"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$308.05",
        "actualPrice": "$62.03"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$118.36",
        "actualPrice": "$333.13"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$74.78",
        "actualPrice": "$281.55"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$390.36",
        "actualPrice": "$343.43"
      }
    ]
  }, {
    "seedID": 29,
    "ticker": "GRPN",
    "companyName": "Groupon",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$307.63",
        "actualPrice": "$107.14"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$470.67",
        "actualPrice": "$219.44"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$161.40",
        "actualPrice": "$257.20"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$264.79",
        "actualPrice": "$121.68"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$449.90",
        "actualPrice": "$135.29"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$7.71",
        "actualPrice": "$287.88"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$381.88",
        "actualPrice": "$326.78"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$161.94",
        "actualPrice": "$487.59"
      }
    ]
  }, {
    "seedID": 30,
    "ticker": "SQ",
    "companyName": "Square",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$94.44",
        "actualPrice": "$412.08"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$456.48",
        "actualPrice": "$411.43"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$303.04",
        "actualPrice": "$216.35"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$123.98",
        "actualPrice": "$210.96"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$213.58",
        "actualPrice": "$134.60"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$219.06",
        "actualPrice": "$302.85"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$467.82",
        "actualPrice": "$431.82"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$202.82",
        "actualPrice": "$222.72"
      }
    ]
  }, {
    "seedID": 31,
    "ticker": "S",
    "companyName": "Sprint",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$225.16",
        "actualPrice": "$31.14"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$451.32",
        "actualPrice": "$389.86"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$44.60",
        "actualPrice": "$427.43"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$469.65",
        "actualPrice": "$478.21"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$435.39",
        "actualPrice": "$246.65"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$477.23",
        "actualPrice": "$412.31"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$9.88",
        "actualPrice": "$242.11"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$355.06",
        "actualPrice": "$200.00"
      }
    ]
  }, {
    "seedID": 32,
    "ticker": "SIRI",
    "companyName": "Sirius XM",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$359.70",
        "actualPrice": "$362.74"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$331.22",
        "actualPrice": "$348.81"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$127.72",
        "actualPrice": "$35.84"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$312.51",
        "actualPrice": "$3.07"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$112.29",
        "actualPrice": "$244.72"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$175.07",
        "actualPrice": "$371.26"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$235.20",
        "actualPrice": "$122.53"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$69.47",
        "actualPrice": "$367.69"
      }
    ]
  }, {
    "seedID": 33,
    "ticker": "KO",
    "companyName": "Coca-Cola",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$296.75",
        "actualPrice": "$243.24"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$461.60",
        "actualPrice": "$170.31"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$349.92",
        "actualPrice": "$313.80"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$453.65",
        "actualPrice": "$205.76"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$361.93",
        "actualPrice": "$323.06"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$114.03",
        "actualPrice": "$407.15"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$274.29",
        "actualPrice": "$171.15"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$250.31",
        "actualPrice": "$197.84"
      }
    ]
  }, {
    "seedID": 34,
    "ticker": "VOO",
    "companyName": "Vanguard S&P 500 ETF",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$68.54",
        "actualPrice": "$395.14"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$211.48",
        "actualPrice": "$8.93"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$46.18",
        "actualPrice": "$325.58"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$308.19",
        "actualPrice": "$273.17"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$435.84",
        "actualPrice": "$306.22"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$360.72",
        "actualPrice": "$281.53"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$424.14",
        "actualPrice": "$128.84"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$4.12",
        "actualPrice": "$367.33"
      }
    ]
  }, {
    "seedID": 35,
    "ticker": "BYND",
    "companyName": "Beyond Meat",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$245.84",
        "actualPrice": "$256.05"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$350.37",
        "actualPrice": "$444.63"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$186.38",
        "actualPrice": "$397.76"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$197.82",
        "actualPrice": "$466.62"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$491.33",
        "actualPrice": "$182.57"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$110.57",
        "actualPrice": "$249.85"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$310.09",
        "actualPrice": "$194.15"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$489.82",
        "actualPrice": "$397.64"
      }
    ]
  }, {
    "seedID": 36,
    "ticker": "CRBP",
    "companyName": "Corbus Pharmaceuticals",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$219.81",
        "actualPrice": "$458.15"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$197.45",
        "actualPrice": "$54.32"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$483.21",
        "actualPrice": "$402.52"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$7.98",
        "actualPrice": "$19.59"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$417.39",
        "actualPrice": "$177.71"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$169.33",
        "actualPrice": "$472.50"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$287.84",
        "actualPrice": "$115.65"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$464.19",
        "actualPrice": "$85.24"
      }
    ]
  }, {
    "seedID": 37,
    "ticker": "WORK",
    "companyName": "Slack",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$388.37",
        "actualPrice": "$423.17"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$191.91",
        "actualPrice": "$30.45"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$55.08",
        "actualPrice": "$164.73"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$278.34",
        "actualPrice": "$147.79"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$466.03",
        "actualPrice": "$336.70"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$61.39",
        "actualPrice": "$205.12"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$99.98",
        "actualPrice": "$370.69"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$86.73",
        "actualPrice": "$285.67"
      }
    ]
  }, {
    "seedID": 38,
    "ticker": "ATVI",
    "companyName": "Activision Blizzard",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$323.34",
        "actualPrice": "$153.24"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$141.16",
        "actualPrice": "$318.72"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$39.10",
        "actualPrice": "$249.08"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$193.99",
        "actualPrice": "$404.76"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$167.61",
        "actualPrice": "$214.13"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$144.70",
        "actualPrice": "$430.70"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$374.42",
        "actualPrice": "$468.64"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$137.04",
        "actualPrice": "$11.02"
      }
    ]
  }, {
    "seedID": 39,
    "ticker": "NKE",
    "companyName": "Nike",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$197.13",
        "actualPrice": "$226.74"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$91.31",
        "actualPrice": "$53.57"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$57.16",
        "actualPrice": "$68.12"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$193.59",
        "actualPrice": "$194.46"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$42.78",
        "actualPrice": "$482.09"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$20.37",
        "actualPrice": "$116.49"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$488.01",
        "actualPrice": "$97.25"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$187.92",
        "actualPrice": "$98.76"
      }
    ]
  }, {
    "seedID": 40,
    "ticker": "LYFT",
    "companyName": "Lyft",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$377.23",
        "actualPrice": "$196.62"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$465.74",
        "actualPrice": "$205.79"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$167.79",
        "actualPrice": "$182.41"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$477.74",
        "actualPrice": "$464.66"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$297.91",
        "actualPrice": "$31.88"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$159.61",
        "actualPrice": "$482.53"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$288.65",
        "actualPrice": "$452.96"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$406.48",
        "actualPrice": "$15.36"
      }
    ]
  }, {
    "seedID": 41,
    "ticker": "MU",
    "companyName": "Micron Technology",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$489.17",
        "actualPrice": "$365.56"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$408.45",
        "actualPrice": "$45.26"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$281.28",
        "actualPrice": "$451.74"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$142.36",
        "actualPrice": "$272.55"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$194.21",
        "actualPrice": "$432.03"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$479.50",
        "actualPrice": "$342.10"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$4.28",
        "actualPrice": "$302.27"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$10.63",
        "actualPrice": "$400.66"
      }
    ]
  }, {
    "seedID": 42,
    "ticker": "V",
    "companyName": "Visa",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$310.62",
        "actualPrice": "$232.15"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$152.24",
        "actualPrice": "$275.00"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$133.19",
        "actualPrice": "$399.05"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$179.72",
        "actualPrice": "$377.05"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$433.71",
        "actualPrice": "$404.03"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$395.87",
        "actualPrice": "$322.97"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$317.08",
        "actualPrice": "$393.16"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$55.11",
        "actualPrice": "$330.48"
      }
    ]
  }, {
    "seedID": 43,
    "ticker": "VSLR",
    "companyName": "Vivint Solar",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$278.99",
        "actualPrice": "$166.34"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$265.85",
        "actualPrice": "$160.14"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$472.79",
        "actualPrice": "$162.01"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$218.00",
        "actualPrice": "$191.87"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$219.76",
        "actualPrice": "$113.48"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$380.00",
        "actualPrice": "$120.84"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$201.31",
        "actualPrice": "$53.84"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$292.45",
        "actualPrice": "$401.32"
      }
    ]
  }, {
    "seedID": 44,
    "ticker": "INTC",
    "companyName": "Intel",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$132.88",
        "actualPrice": "$174.36"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$265.96",
        "actualPrice": "$48.33"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$210.33",
        "actualPrice": "$335.47"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$471.00",
        "actualPrice": "$52.57"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$352.02",
        "actualPrice": "$290.11"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$125.99",
        "actualPrice": "$45.92"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$128.94",
        "actualPrice": "$280.21"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$301.79",
        "actualPrice": "$275.38"
      }
    ]
  }, {
    "seedID": 45,
    "ticker": "NOK",
    "companyName": "Nokia",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$13.58",
        "actualPrice": "$79.25"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$199.73",
        "actualPrice": "$303.12"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$105.30",
        "actualPrice": "$424.21"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$100.57",
        "actualPrice": "$168.70"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$251.26",
        "actualPrice": "$408.59"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$139.68",
        "actualPrice": "$93.46"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$100.26",
        "actualPrice": "$21.78"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$403.69",
        "actualPrice": "$413.45"
      }
    ]
  }, {
    "seedID": 46,
    "ticker": "PCG",
    "companyName": "PG&E",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$219.64",
        "actualPrice": "$399.54"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$97.57",
        "actualPrice": "$167.28"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$265.34",
        "actualPrice": "$334.79"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$496.79",
        "actualPrice": "$347.89"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$418.24",
        "actualPrice": "$339.90"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$192.45",
        "actualPrice": "$408.74"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$87.57",
        "actualPrice": "$101.64"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$87.32",
        "actualPrice": "$194.60"
      }
    ]
  }, {
    "seedID": 47,
    "ticker": "CSCO",
    "companyName": "Cisco",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$428.23",
        "actualPrice": "$89.93"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$338.34",
        "actualPrice": "$463.26"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$5.17",
        "actualPrice": "$30.55"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$128.53",
        "actualPrice": "$252.84"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$306.96",
        "actualPrice": "$182.87"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$135.90",
        "actualPrice": "$478.63"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$370.06",
        "actualPrice": "$45.53"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$267.96",
        "actualPrice": "$151.60"
      }
    ]
  }, {
    "seedID": 48,
    "ticker": "SPY",
    "companyName": "SPDR S&P 500 ETF",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$57.39",
        "actualPrice": "$219.84"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$451.85",
        "actualPrice": "$384.32"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$395.21",
        "actualPrice": "$264.71"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$76.94",
        "actualPrice": "$368.36"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$487.31",
        "actualPrice": "$348.34"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$214.78",
        "actualPrice": "$311.47"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$124.12",
        "actualPrice": "$496.54"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$61.56",
        "actualPrice": "$216.44"
      }
    ]
  }, {
    "seedID": 49,
    "ticker": "JCP",
    "companyName": "J.C. Penny",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$424.23",
        "actualPrice": "$160.70"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$33.88",
        "actualPrice": "$22.26"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$311.80",
        "actualPrice": "$436.13"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$93.75",
        "actualPrice": "$247.85"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$288.22",
        "actualPrice": "$459.33"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$97.50",
        "actualPrice": "$399.49"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$341.62",
        "actualPrice": "$462.33"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$281.80",
        "actualPrice": "$99.19"
      }
    ]
  }, {
    "seedID": 50,
    "ticker": "TLRY",
    "companyName": "Tilray",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$53.02",
        "actualPrice": "$91.31"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$362.38",
        "actualPrice": "$390.77"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$335.15",
        "actualPrice": "$466.98"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$314.65",
        "actualPrice": "$32.73"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$465.13",
        "actualPrice": "$410.22"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$432.89",
        "actualPrice": "$394.75"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$116.31",
        "actualPrice": "$310.47"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$349.13",
        "actualPrice": "$217.26"
      }
    ]
  }, {
    "seedID": 51,
    "ticker": "PYPL",
    "companyName": "Paypal",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$70.57",
        "actualPrice": "$436.79"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$417.42",
        "actualPrice": "$378.42"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$432.79",
        "actualPrice": "$213.17"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$493.90",
        "actualPrice": "$374.51"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$217.96",
        "actualPrice": "$98.97"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$319.38",
        "actualPrice": "$243.00"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$300.61",
        "actualPrice": "$385.24"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$45.81",
        "actualPrice": "$162.85"
      }
    ]
  }, {
    "seedID": 52,
    "ticker": "TCEHY",
    "companyName": "Tencent",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$8.83",
        "actualPrice": "$453.23"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$194.41",
        "actualPrice": "$278.43"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$333.78",
        "actualPrice": "$139.17"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$340.20",
        "actualPrice": "$475.30"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$108.77",
        "actualPrice": "$260.41"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$133.83",
        "actualPrice": "$27.13"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$455.90",
        "actualPrice": "$360.97"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$460.09",
        "actualPrice": "$176.95"
      }
    ]
  }, {
    "seedID": 53,
    "ticker": "MJ",
    "companyName": "ETFMG Alternative Harvest",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$245.84",
        "actualPrice": "$458.42"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$372.12",
        "actualPrice": "$203.86"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$100.65",
        "actualPrice": "$45.74"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$346.15",
        "actualPrice": "$142.52"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$78.61",
        "actualPrice": "$335.87"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$437.77",
        "actualPrice": "$237.25"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$27.22",
        "actualPrice": "$206.98"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$192.57",
        "actualPrice": "$46.77"
      }
    ]
  }, {
    "seedID": 54,
    "ticker": "GLUU",
    "companyName": "Glu Mobile",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$2.00",
        "actualPrice": "$49.99"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$357.89",
        "actualPrice": "$377.43"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$280.02",
        "actualPrice": "$471.66"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$385.23",
        "actualPrice": "$134.24"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$124.01",
        "actualPrice": "$58.44"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$153.12",
        "actualPrice": "$169.37"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$181.84",
        "actualPrice": "$20.68"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$383.89",
        "actualPrice": "$58.60"
      }
    ]
  }, {
    "seedID": 55,
    "ticker": "BRK.B",
    "companyName": "Berkshire Hathaway",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$338.67",
        "actualPrice": "$147.92"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$470.79",
        "actualPrice": "$266.60"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$186.58",
        "actualPrice": "$85.74"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$492.32",
        "actualPrice": "$128.20"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$352.68",
        "actualPrice": "$81.55"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$179.94",
        "actualPrice": "$341.84"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$230.65",
        "actualPrice": "$252.87"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$353.68",
        "actualPrice": "$291.76"
      }
    ]
  }, {
    "seedID": 56,
    "ticker": "NRZ",
    "companyName": "New Residential Investment",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$381.58",
        "actualPrice": "$361.28"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$352.30",
        "actualPrice": "$455.79"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$174.78",
        "actualPrice": "$386.71"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$338.09",
        "actualPrice": "$209.59"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$439.81",
        "actualPrice": "$24.70"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$426.94",
        "actualPrice": "$262.01"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$152.61",
        "actualPrice": "$243.09"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$286.70",
        "actualPrice": "$99.59"
      }
    ]
  }, {
    "seedID": 57,
    "ticker": "AUY",
    "companyName": "Yamana Gold",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$11.42",
        "actualPrice": "$197.49"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$87.31",
        "actualPrice": "$309.56"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$153.42",
        "actualPrice": "$205.95"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$270.76",
        "actualPrice": "$390.59"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$98.55",
        "actualPrice": "$49.77"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$141.91",
        "actualPrice": "$432.32"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$420.69",
        "actualPrice": "$199.17"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$109.76",
        "actualPrice": "$209.00"
      }
    ]
  }, {
    "seedID": 58,
    "ticker": "IQ",
    "companyName": "iQIYI",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$382.00",
        "actualPrice": "$40.94"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$449.91",
        "actualPrice": "$161.80"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$64.01",
        "actualPrice": "$421.67"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$342.07",
        "actualPrice": "$41.52"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$325.53",
        "actualPrice": "$460.93"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$440.56",
        "actualPrice": "$117.71"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$319.61",
        "actualPrice": "$480.53"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$351.75",
        "actualPrice": "$47.69"
      }
    ]
  }, {
    "seedID": 59,
    "ticker": "ROKU",
    "companyName": "Roku",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$170.18",
        "actualPrice": "$498.09"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$460.12",
        "actualPrice": "$274.49"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$299.71",
        "actualPrice": "$165.12"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$467.11",
        "actualPrice": "$484.65"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$369.13",
        "actualPrice": "$375.29"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$227.31",
        "actualPrice": "$116.02"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$191.70",
        "actualPrice": "$214.60"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$231.39",
        "actualPrice": "$267.42"
      }
    ]
  }, {
    "seedID": 60,
    "ticker": "CRM",
    "companyName": "Salesforce",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$463.41",
        "actualPrice": "$393.46"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$168.94",
        "actualPrice": "$145.55"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$38.85",
        "actualPrice": "$32.51"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$459.62",
        "actualPrice": "$337.65"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$309.60",
        "actualPrice": "$184.27"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$487.65",
        "actualPrice": "$430.98"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$389.56",
        "actualPrice": "$2.56"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$21.82",
        "actualPrice": "$47.25"
      }
    ]
  }, {
    "seedID": 61,
    "ticker": "WMT",
    "companyName": "Walmart",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$345.53",
        "actualPrice": "$491.63"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$299.90",
        "actualPrice": "$89.31"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$333.37",
        "actualPrice": "$28.50"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$105.43",
        "actualPrice": "$217.49"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$148.96",
        "actualPrice": "$257.25"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$195.08",
        "actualPrice": "$357.26"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$240.10",
        "actualPrice": "$112.77"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$336.87",
        "actualPrice": "$413.44"
      }
    ]
  }, {
    "seedID": 62,
    "ticker": "BA",
    "companyName": "Boeing",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$204.53",
        "actualPrice": "$24.63"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$144.78",
        "actualPrice": "$222.87"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$198.67",
        "actualPrice": "$155.27"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$5.77",
        "actualPrice": "$90.89"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$183.25",
        "actualPrice": "$170.99"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$412.44",
        "actualPrice": "$18.67"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$377.61",
        "actualPrice": "$424.45"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$407.87",
        "actualPrice": "$108.61"
      }
    ]
  }, {
    "seedID": 63,
    "ticker": "GERN",
    "companyName": "Geron",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$135.05",
        "actualPrice": "$189.94"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$25.93",
        "actualPrice": "$265.24"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$36.28",
        "actualPrice": "$455.02"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$299.24",
        "actualPrice": "$105.50"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$485.31",
        "actualPrice": "$418.37"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$438.23",
        "actualPrice": "$212.70"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$97.32",
        "actualPrice": "$487.14"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$429.13",
        "actualPrice": "$7.07"
      }
    ]
  }, {
    "seedID": 64,
    "ticker": "DNR",
    "companyName": "Denbury",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$308.24",
        "actualPrice": "$110.30"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$213.74",
        "actualPrice": "$424.47"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$363.09",
        "actualPrice": "$479.93"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$125.17",
        "actualPrice": "$303.89"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$259.57",
        "actualPrice": "$423.10"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$458.37",
        "actualPrice": "$170.17"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$235.81",
        "actualPrice": "$416.26"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$287.47",
        "actualPrice": "$292.64"
      }
    ]
  }, {
    "seedID": 65,
    "ticker": "VKTX",
    "companyName": "Viking Therapeutics",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$0.39",
        "actualPrice": "$165.72"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$135.20",
        "actualPrice": "$198.15"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$344.55",
        "actualPrice": "$263.69"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$480.67",
        "actualPrice": "$483.75"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$451.81",
        "actualPrice": "$211.17"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$348.88",
        "actualPrice": "$231.57"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$279.13",
        "actualPrice": "$232.15"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$446.62",
        "actualPrice": "$339.06"
      }
    ]
  }, {
    "seedID": 66,
    "ticker": "KODK",
    "companyName": "Kodak",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$427.18",
        "actualPrice": "$135.65"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$346.89",
        "actualPrice": "$398.87"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$413.70",
        "actualPrice": "$198.14"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$317.83",
        "actualPrice": "$192.74"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$169.22",
        "actualPrice": "$106.23"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$493.35",
        "actualPrice": "$23.36"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$32.03",
        "actualPrice": "$69.31"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$417.38",
        "actualPrice": "$50.25"
      }
    ]
  }, {
    "seedID": 67,
    "ticker": "PFE",
    "companyName": "Pfizer",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$142.94",
        "actualPrice": "$410.64"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$255.25",
        "actualPrice": "$335.59"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$16.90",
        "actualPrice": "$498.69"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$445.55",
        "actualPrice": "$204.51"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$47.67",
        "actualPrice": "$148.93"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$21.79",
        "actualPrice": "$334.59"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$314.19",
        "actualPrice": "$227.78"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$246.23",
        "actualPrice": "$264.52"
      }
    ]
  }, {
    "seedID": 68,
    "ticker": "ENPH",
    "companyName": "Enphase Energy",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$262.47",
        "actualPrice": "$300.46"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$190.69",
        "actualPrice": "$340.53"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$350.68",
        "actualPrice": "$127.17"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$22.84",
        "actualPrice": "$336.36"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$298.47",
        "actualPrice": "$203.09"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$388.63",
        "actualPrice": "$116.38"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$449.50",
        "actualPrice": "$101.21"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$304.40",
        "actualPrice": "$429.24"
      }
    ]
  }, {
    "seedID": 69,
    "ticker": "GM",
    "companyName": "GM",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$166.68",
        "actualPrice": "$462.72"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$114.23",
        "actualPrice": "$82.64"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$291.72",
        "actualPrice": "$283.40"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$482.82",
        "actualPrice": "$170.31"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$171.63",
        "actualPrice": "$211.90"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$458.09",
        "actualPrice": "$265.56"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$287.02",
        "actualPrice": "$186.80"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$406.41",
        "actualPrice": "$315.55"
      }
    ]
  }, {
    "seedID": 70,
    "ticker": "GOOGL",
    "companyName": "Alphabet",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$281.30",
        "actualPrice": "$300.84"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$231.85",
        "actualPrice": "$279.33"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$146.55",
        "actualPrice": "$306.68"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$307.82",
        "actualPrice": "$165.55"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$200.78",
        "actualPrice": "$204.77"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$98.60",
        "actualPrice": "$118.13"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$193.24",
        "actualPrice": "$70.02"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$293.16",
        "actualPrice": "$160.05"
      }
    ]
  }, {
    "seedID": 71,
    "ticker": "TWLO",
    "companyName": "Twilio",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$277.09",
        "actualPrice": "$31.35"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$295.07",
        "actualPrice": "$47.83"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$461.44",
        "actualPrice": "$315.72"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$133.26",
        "actualPrice": "$265.90"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$410.73",
        "actualPrice": "$416.10"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$162.08",
        "actualPrice": "$128.64"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$338.45",
        "actualPrice": "$44.20"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$467.68",
        "actualPrice": "$139.58"
      }
    ]
  }, {
    "seedID": 72,
    "ticker": "SHOP",
    "companyName": "Shopify",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$181.15",
        "actualPrice": "$286.41"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$11.43",
        "actualPrice": "$106.44"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$21.94",
        "actualPrice": "$298.07"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$426.69",
        "actualPrice": "$175.26"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$93.30",
        "actualPrice": "$293.15"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$217.01",
        "actualPrice": "$317.64"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$429.19",
        "actualPrice": "$162.55"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$154.07",
        "actualPrice": "$443.39"
      }
    ]
  }, {
    "seedID": 73,
    "ticker": "JD",
    "companyName": "JD.com",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$266.24",
        "actualPrice": "$110.63"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$178.32",
        "actualPrice": "$426.44"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$220.19",
        "actualPrice": "$191.64"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$168.98",
        "actualPrice": "$313.68"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$280.41",
        "actualPrice": "$219.20"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$485.43",
        "actualPrice": "$455.04"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$185.74",
        "actualPrice": "$21.49"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$72.35",
        "actualPrice": "$175.86"
      }
    ]
  }, {
    "seedID": 74,
    "ticker": "VZ",
    "companyName": "Verizon",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$164.69",
        "actualPrice": "$449.14"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$360.66",
        "actualPrice": "$267.60"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$233.88",
        "actualPrice": "$213.78"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$189.86",
        "actualPrice": "$249.94"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$483.84",
        "actualPrice": "$255.22"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$6.42",
        "actualPrice": "$430.71"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$469.11",
        "actualPrice": "$452.93"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$174.47",
        "actualPrice": "$115.75"
      }
    ]
  }, {
    "seedID": 75,
    "ticker": "DBX",
    "companyName": "Dropbox",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$174.29",
        "actualPrice": "$442.16"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$219.67",
        "actualPrice": "$159.83"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$256.85",
        "actualPrice": "$431.01"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$251.78",
        "actualPrice": "$8.66"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$259.72",
        "actualPrice": "$238.77"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$382.79",
        "actualPrice": "$39.50"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$386.03",
        "actualPrice": "$129.55"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$0.76",
        "actualPrice": "$230.22"
      }
    ]
  }, {
    "seedID": 76,
    "ticker": "CPRX",
    "companyName": "Catalyst Pharmaceuticals",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$159.16",
        "actualPrice": "$78.62"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$316.25",
        "actualPrice": "$94.42"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$225.89",
        "actualPrice": "$111.10"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$183.30",
        "actualPrice": "$246.74"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$197.32",
        "actualPrice": "$74.73"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$414.27",
        "actualPrice": "$55.59"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$299.86",
        "actualPrice": "$376.05"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$171.03",
        "actualPrice": "$340.12"
      }
    ]
  }, {
    "seedID": 77,
    "ticker": "LK",
    "companyName": "Luckin Coffee",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$25.09",
        "actualPrice": "$37.18"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$215.21",
        "actualPrice": "$467.21"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$156.43",
        "actualPrice": "$138.19"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$287.60",
        "actualPrice": "$192.07"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$152.37",
        "actualPrice": "$323.67"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$119.63",
        "actualPrice": "$423.32"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$250.68",
        "actualPrice": "$257.47"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$151.86",
        "actualPrice": "$180.47"
      }
    ]
  }, {
    "seedID": 78,
    "ticker": "COST",
    "companyName": "Costco",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$49.38",
        "actualPrice": "$144.51"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$291.04",
        "actualPrice": "$475.94"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$96.81",
        "actualPrice": "$310.05"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$69.27",
        "actualPrice": "$94.18"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$255.16",
        "actualPrice": "$72.07"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$465.98",
        "actualPrice": "$89.42"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$270.05",
        "actualPrice": "$421.26"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$215.08",
        "actualPrice": "$314.24"
      }
    ]
  }, {
    "seedID": 79,
    "ticker": "PINS",
    "companyName": "Pinterest",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$379.11",
        "actualPrice": "$185.58"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$494.35",
        "actualPrice": "$409.22"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$171.26",
        "actualPrice": "$154.74"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$43.91",
        "actualPrice": "$53.30"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$212.38",
        "actualPrice": "$485.14"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$244.45",
        "actualPrice": "$269.38"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$172.55",
        "actualPrice": "$447.47"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$68.98",
        "actualPrice": "$431.12"
      }
    ]
  }, {
    "seedID": 80,
    "ticker": "SNE",
    "companyName": "Sony",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$118.91",
        "actualPrice": "$386.09"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$180.42",
        "actualPrice": "$14.19"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$160.85",
        "actualPrice": "$257.93"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$453.33",
        "actualPrice": "$54.39"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$211.74",
        "actualPrice": "$256.82"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$35.12",
        "actualPrice": "$371.07"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$289.72",
        "actualPrice": "$402.15"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$39.87",
        "actualPrice": "$418.90"
      }
    ]
  }, {
    "seedID": 81,
    "ticker": "BILI",
    "companyName": "Bilibili",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$171.11",
        "actualPrice": "$356.30"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$319.42",
        "actualPrice": "$283.72"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$294.49",
        "actualPrice": "$435.13"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$293.49",
        "actualPrice": "$242.66"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$194.07",
        "actualPrice": "$229.51"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$105.02",
        "actualPrice": "$442.64"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$473.43",
        "actualPrice": "$209.92"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$313.95",
        "actualPrice": "$209.38"
      }
    ]
  }, {
    "seedID": 82,
    "ticker": "CARA",
    "companyName": "Cara Therapeutics",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$77.35",
        "actualPrice": "$221.08"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$81.29",
        "actualPrice": "$65.38"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$335.32",
        "actualPrice": "$356.07"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$297.50",
        "actualPrice": "$433.39"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$32.49",
        "actualPrice": "$157.11"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$305.19",
        "actualPrice": "$2.74"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$478.72",
        "actualPrice": "$110.74"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$146.97",
        "actualPrice": "$344.09"
      }
    ]
  }, {
    "seedID": 83,
    "ticker": "AKS",
    "companyName": "AK Steel",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$285.83",
        "actualPrice": "$219.51"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$31.16",
        "actualPrice": "$227.36"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$57.85",
        "actualPrice": "$218.32"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$204.23",
        "actualPrice": "$301.09"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$278.23",
        "actualPrice": "$451.69"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$181.46",
        "actualPrice": "$312.91"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$315.95",
        "actualPrice": "$273.47"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$301.34",
        "actualPrice": "$384.49"
      }
    ]
  }, {
    "seedID": 84,
    "ticker": "CRSP",
    "companyName": "CRISPR",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$3.90",
        "actualPrice": "$34.51"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$438.00",
        "actualPrice": "$387.24"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$6.68",
        "actualPrice": "$114.34"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$48.40",
        "actualPrice": "$151.49"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$307.49",
        "actualPrice": "$47.23"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$455.01",
        "actualPrice": "$210.98"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$210.30",
        "actualPrice": "$170.18"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$407.23",
        "actualPrice": "$241.64"
      }
    ]
  }, {
    "seedID": 85,
    "ticker": "ABBV",
    "companyName": "AbbVie",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$47.92",
        "actualPrice": "$117.58"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$111.88",
        "actualPrice": "$245.43"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$201.30",
        "actualPrice": "$368.56"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$424.80",
        "actualPrice": "$163.42"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$112.68",
        "actualPrice": "$197.54"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$113.45",
        "actualPrice": "$313.36"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$53.24",
        "actualPrice": "$128.70"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$432.66",
        "actualPrice": "$333.92"
      }
    ]
  }, {
    "seedID": 86,
    "ticker": "CVS",
    "companyName": "CVS",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$365.22",
        "actualPrice": "$477.01"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$134.80",
        "actualPrice": "$243.93"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$380.36",
        "actualPrice": "$15.16"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$418.10",
        "actualPrice": "$169.81"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$482.50",
        "actualPrice": "$116.07"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$103.38",
        "actualPrice": "$472.25"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$60.95",
        "actualPrice": "$143.59"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$108.75",
        "actualPrice": "$423.98"
      }
    ]
  }, {
    "seedID": 87,
    "ticker": "SPWR",
    "companyName": "SunPower",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$389.14",
        "actualPrice": "$20.30"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$446.75",
        "actualPrice": "$317.14"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$225.27",
        "actualPrice": "$6.11"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$135.86",
        "actualPrice": "$499.45"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$181.10",
        "actualPrice": "$185.08"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$398.27",
        "actualPrice": "$270.70"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$61.08",
        "actualPrice": "$305.52"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$498.22",
        "actualPrice": "$118.58"
      }
    ]
  }, {
    "seedID": 88,
    "ticker": "YETI",
    "companyName": "YETI",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$371.35",
        "actualPrice": "$499.47"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$43.68",
        "actualPrice": "$7.71"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$25.61",
        "actualPrice": "$167.82"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$436.16",
        "actualPrice": "$189.91"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$139.42",
        "actualPrice": "$495.97"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$456.17",
        "actualPrice": "$55.26"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$450.04",
        "actualPrice": "$422.81"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$86.66",
        "actualPrice": "$455.37"
      }
    ]
  }, {
    "seedID": 89,
    "ticker": "TGT",
    "companyName": "Target",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$213.33",
        "actualPrice": "$10.85"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$291.95",
        "actualPrice": "$131.52"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$453.08",
        "actualPrice": "$128.28"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$466.61",
        "actualPrice": "$477.08"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$188.47",
        "actualPrice": "$295.36"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$260.64",
        "actualPrice": "$463.51"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$400.18",
        "actualPrice": "$452.92"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$273.00",
        "actualPrice": "$146.57"
      }
    ]
  }, {
    "seedID": 90,
    "ticker": "LLNW",
    "companyName": "Limelight Networks",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$159.06",
        "actualPrice": "$464.73"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$59.58",
        "actualPrice": "$456.49"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$279.98",
        "actualPrice": "$380.15"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$494.54",
        "actualPrice": "$208.98"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$274.62",
        "actualPrice": "$435.56"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$221.92",
        "actualPrice": "$188.78"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$337.74",
        "actualPrice": "$324.05"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$52.18",
        "actualPrice": "$448.63"
      }
    ]
  }, {
    "seedID": 91,
    "ticker": "TEVA",
    "companyName": "Teva Pharmaceutical",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$202.08",
        "actualPrice": "$235.79"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$115.97",
        "actualPrice": "$85.29"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$15.08",
        "actualPrice": "$164.39"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$464.90",
        "actualPrice": "$284.58"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$166.91",
        "actualPrice": "$111.78"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$69.09",
        "actualPrice": "$190.50"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$388.70",
        "actualPrice": "$64.92"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$21.30",
        "actualPrice": "$293.52"
      }
    ]
  }, {
    "seedID": 92,
    "ticker": "MCD",
    "companyName": "McDonald's",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$194.74",
        "actualPrice": "$328.28"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$181.61",
        "actualPrice": "$277.34"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$449.86",
        "actualPrice": "$301.34"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$246.24",
        "actualPrice": "$100.28"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$463.53",
        "actualPrice": "$160.05"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$369.85",
        "actualPrice": "$213.26"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$425.20",
        "actualPrice": "$5.96"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$130.90",
        "actualPrice": "$425.24"
      }
    ]
  }, {
    "seedID": 93,
    "ticker": "UAA",
    "companyName": "Under Armour",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$126.02",
        "actualPrice": "$316.68"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$298.58",
        "actualPrice": "$133.94"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$310.26",
        "actualPrice": "$303.69"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$206.94",
        "actualPrice": "$90.09"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$67.56",
        "actualPrice": "$470.96"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$99.02",
        "actualPrice": "$404.36"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$140.93",
        "actualPrice": "$404.50"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$139.38",
        "actualPrice": "$486.40"
      }
    ]
  }, {
    "seedID": 94,
    "ticker": "SFIX",
    "companyName": "Stitch Fix",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$99.54",
        "actualPrice": "$363.95"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$240.38",
        "actualPrice": "$264.02"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$31.06",
        "actualPrice": "$9.16"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$299.10",
        "actualPrice": "$365.57"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$131.63",
        "actualPrice": "$376.19"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$490.25",
        "actualPrice": "$373.49"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$210.52",
        "actualPrice": "$372.16"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$142.78",
        "actualPrice": "$307.83"
      }
    ]
  }, {
    "seedID": 95,
    "ticker": "JNJ",
    "companyName": "Johnson & Johnson",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$111.98",
        "actualPrice": "$292.89"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$320.25",
        "actualPrice": "$245.17"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$392.42",
        "actualPrice": "$292.40"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$193.12",
        "actualPrice": "$493.88"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$247.27",
        "actualPrice": "$66.63"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$323.99",
        "actualPrice": "$407.63"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$358.53",
        "actualPrice": "$457.21"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$172.81",
        "actualPrice": "$409.09"
      }
    ]
  }, {
    "seedID": 96,
    "ticker": "ZM",
    "companyName": "Zoom",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$200.00",
        "actualPrice": "$314.08"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$261.76",
        "actualPrice": "$488.62"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$474.57",
        "actualPrice": "$300.89"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$474.60",
        "actualPrice": "$11.18"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$424.57",
        "actualPrice": "$64.28"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$392.92",
        "actualPrice": "$107.98"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$299.34",
        "actualPrice": "$271.85"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$188.09",
        "actualPrice": "$359.39"
      }
    ]
  }, {
    "seedID": 97,
    "ticker": "KHC",
    "companyName": "Kraft Foods",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$265.01",
        "actualPrice": "$498.36"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$463.75",
        "actualPrice": "$285.38"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$255.30",
        "actualPrice": "$270.49"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$372.14",
        "actualPrice": "$195.73"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$205.83",
        "actualPrice": "$178.02"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$219.95",
        "actualPrice": "$379.06"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$435.03",
        "actualPrice": "$441.27"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$31.31",
        "actualPrice": "$295.33"
      }
    ]
  }, {
    "seedID": 98,
    "ticker": "OMG",
    "companyName": "OmiseGO",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$449.70",
        "actualPrice": "$156.20"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$110.74",
        "actualPrice": "$441.29"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$316.86",
        "actualPrice": "$392.49"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$252.17",
        "actualPrice": "$438.97"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$304.40",
        "actualPrice": "$92.49"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$131.97",
        "actualPrice": "$134.31"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$109.51",
        "actualPrice": "$394.38"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$189.27",
        "actualPrice": "$171.06"
      }
    ]
  }, {
    "seedID": 99,
    "ticker": "DLTR",
    "companyName": "Dollar Tree",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$462.47",
        "actualPrice": "$19.20"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$498.48",
        "actualPrice": "$287.59"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$244.29",
        "actualPrice": "$215.21"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$297.38",
        "actualPrice": "$294.52"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$373.85",
        "actualPrice": "$349.49"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$471.31",
        "actualPrice": "$116.30"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$352.73",
        "actualPrice": "$307.59"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$290.96",
        "actualPrice": "$256.31"
      }
    ]
  }, {
    "seedID": 100,
    "ticker": "PSX",
    "companyName": "Limelight Networks",
    "data": [
      {
        "quarter": "1/1/18",
        "estimatedPrice": "$161.16",
        "actualPrice": "$91.52"
      },
      {
        "quarter": "4/1/18",
        "estimatedPrice": "$34.63",
        "actualPrice": "$57.59"
      },
      {
        "quarter": "7/1/18",
        "estimatedPrice": "$101.75",
        "actualPrice": "$298.65"
      },
      {
        "quarter": "10/1/18",
        "estimatedPrice": "$99.44",
        "actualPrice": "$399.64"
      },
      {
        "quarter": "1/1/19",
        "estimatedPrice": "$351.83",
        "actualPrice": "$12.30"
      },
      {
        "quarter": "4/1/19",
        "estimatedPrice": "$87.52",
        "actualPrice": "$25.27"
      },
      {
        "quarter": "7/1/19",
        "estimatedPrice": "$130.86",
        "actualPrice": "$1.24"
      },
      {
        "quarter": "10/1/19",
        "estimatedPrice": "$340.26",
        "actualPrice": "$444.27"
      }
    ]
  },];

const setupDB = () => {
  Earning.deleteMany({}, (err) => {
    if (err) {
      throw err;
    }
  }).then(
    Earning.create(sampleEarnings, (err, res) => {
      if (err) {
        throw err;
      }
    })
  );
};

setupDB();