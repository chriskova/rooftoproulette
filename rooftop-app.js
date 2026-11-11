"use strict";
const VENUES=[{"id":"untied","name":"Untied","area":"Barangaroo","lat":-33.865555,"lng":151.201996,"rating":4.7,"address":"Level 4, 400 Barangaroo Ave","hours":[[[720,1320]],[[720,1320]],[[720,1320]],[[720,1320]],[[720,1440]],[[720,1440]],[[720,1260]]],"pid":"ChIJF9mEdEeuEmsRO3QF3fOwfs8","vibe":"Bottomless brunch"},{"id":"jimmy-s-rooftop","name":"Jimmy's Rooftop","area":"Sydney CBD","lat":-33.866292,"lng":151.207502,"rating":4.3,"address":"Level 4, 320 George St","hours":[[],[[720,1440]],[[720,1440]],[[720,1620]],[[720,1620]],[[720,1620]],[[960,1320]]],"pid":"ChIJTRT8DNKvEmsRzIMltEcEzRY","vibe":"Rooftop pool","fact":"Used to be Ivy Pool Club. The pool stayed."},{"id":"sora-rooftop-bar","name":"Sora Rooftop Bar","area":"Sydney CBD","lat":-33.872503,"lng":151.205453,"rating":4.3,"address":"Level 9, 285 Clarence St","hours":[[],[[960,1380]],[[960,1380]],[[960,1380]],[[720,1560]],[[720,1560]],[]],"pid":"ChIJIZl-CeivEmsR8QKYWFwFa0w","vibe":"DJs on weekends"},{"id":"above-319","name":"Above 319","area":"Sydney CBD","lat":-33.875183,"lng":151.204269,"rating":4.2,"address":"Rooftop, 319 Sussex St","hours":[[],[],[[990,1260]],[[990,1260]],[[990,1380]],[[780,1380]],[[780,1200]]],"pid":"ChIJN_enO-GvEmsRDjvdxEZSBmo","vibe":"Bottomless margs"},{"id":"harper-rooftop","name":"Harper Rooftop","area":"Sydney CBD","lat":-33.874979,"lng":151.207602,"rating":3.7,"address":"Level 7, 339 Pitt St","hours":[[],[],[[960,1380]],[[960,1380]],[[960,1380]],[[720,1380]],[[720,1380]]],"pid":"ChIJu0OKArCvEmsRfENSCqhDNDA","vibe":"Huge rooftop + pool"},{"id":"j-ji","name":"Jōji","area":"Sydney CBD","lat":-33.868396,"lng":151.207405,"rating":4.6,"address":"Level 5, 388 George St","hours":[[[960,1380]],[[720,1380]],[[720,1440]],[[720,1500]],[[720,1500]],[[720,1560]],[[960,1380]]],"pid":"ChIJ3eP7NQCvEmsRC-Yj4qiks8U","vibe":"Japanese + DJs"},{"id":"the-rook","name":"The Rook","area":"Sydney CBD","lat":-33.86973,"lng":151.20635,"rating":4.4,"address":"Level 7, 56 York St","hours":[[[720,1320]],[[720,1320]],[[720,1320]],[[720,1380]],[[720,1440]],[[720,1440]],[]],"pid":"ChIJs-zIED-uEmsRsHT2GJUVTUQ","vibe":"Great cocktails"},{"id":"babylon-rooftop","name":"Babylon Rooftop","area":"Sydney CBD","lat":-33.869726,"lng":151.208454,"rating":4.2,"address":"Level 7, 182 Pitt St","hours":[[[720,1320]],[[720,1380]],[[720,1380]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1320]]],"pid":"ChIJ1bVicD6uEmsR84q2UI62xC4","vibe":"Middle Eastern food"},{"id":"the-rooftop-sydney","name":"The Rooftop Sydney","area":"Sydney CBD","lat":-33.871149,"lng":151.204121,"rating":4.1,"address":"Shelbourne Hotel, 200 Sussex St","hours":[[],[],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[]],"pid":"ChIJSSLfNjmuEmsRCtzLzCGEwDY","vibe":"Quiet for the CBD"},{"id":"jacksons-on-george","name":"Jacksons on George","area":"Sydney CBD","lat":-33.861808,"lng":151.208123,"rating":3.9,"address":"176 George St","hours":[[[600,1560]],[[600,1560]],[[600,1560]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1560]]],"pid":"ChIJT_GmSEKuEmsRyjWPfU3NleQ","vibe":"Big sports pub","fact":"Rebuilt in 2023."},{"id":"taylor-s-rooftop","name":"Taylor's Rooftop","area":"Sydney CBD","lat":-33.863841,"lng":151.208726,"rating":4.0,"address":"Republic Hotel, 69 Pitt St","hours":[[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1440]]],"pid":"ChIJS4fpjEGuEmsRlcCqLAjLgw4","vibe":"Retractable roof"},{"id":"hotel-sweeney-s","name":"Hotel Sweeney's","area":"Sydney CBD","lat":-33.872606,"lng":151.20585,"rating":4.1,"address":"236 Clarence St","hours":[[[600,1560]],[[600,1560]],[[600,1560]],[[600,1560]],[[600,1650]],[[600,1650]],[[720,1320]]],"pid":"ChIJLSVxoj6uEmsR_P552YU9Ii0","vibe":"Craft beer"},{"id":"the-bristol","name":"The Bristol","area":"Sydney CBD","lat":-33.867754,"lng":151.203187,"rating":3.9,"address":"81 Sussex St","hours":[[[600,1500]],[[600,1500]],[[600,1500]],[[600,1560]],[[600,1620]],[[720,1620]],[]],"pid":"ChIJ2_Y-oziuEmsRSh6QEqRiuwA","vibe":"Souvlaki"},{"id":"the-sussex-hotel","name":"The Sussex Hotel","area":"Sydney CBD","lat":-33.865008,"lng":151.203379,"rating":4.0,"address":"20 Sussex St","hours":[[[600,1440]],[[600,1500]],[[600,1500]],[[600,1500]],[[600,1560]],[[720,1560]],[]],"pid":"ChIJRRcbJEeuEmsRGUevvdn564Q","vibe":"Thai upstairs","fact":"A freeway pillar runs through it."},{"id":"sky-bar-shell-house","name":"Sky Bar, Shell House","area":"Sydney CBD","lat":-33.865166,"lng":151.206718,"rating":4.0,"address":"37 Margaret St","hours":[[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[]],"pid":"ChIJNT38zwmvEmsRiZHInwB-M60","vibe":"Next to the clock tower","fact":"The 400-tonne clock tower once hung mid-air."},{"id":"old-mate-s-place","name":"Old Mate's Place","area":"Sydney CBD","lat":-33.869547,"lng":151.205153,"rating":4.7,"address":"Level 4, 199 Clarence St","hours":[[],[[960,1560]],[[960,1560]],[[960,1560]],[[900,1560]],[[900,1560]],[[900,1560]]],"pid":"ChIJuasXSJivEmsR8XembUrbNVc","vibe":"Secret menu"},{"id":"zephyr","name":"Zephyr","area":"Sydney CBD","lat":-33.869509,"lng":151.203289,"rating":4.2,"address":"Level 12, 161 Sussex St","hours":[[],[[900,1440]],[[900,1440]],[[900,1440]],[[900,1440]],[[840,1440]],[[840,1440]]],"pid":"ChIJcZ8-ITmuEmsRiu6ZF0314rw","vibe":"Saturday fireworks"},{"id":"panorama-bar","name":"Panorama Bar","area":"Sydney CBD","lat":-33.867884,"lng":151.209637,"rating":4.1,"address":"The International, 25 Martin Pl","hours":[[],[[960,1440]],[[960,1440]],[[900,1440]],[[900,1440]],[[960,1440]],[]],"pid":"ChIJc-qWKQCvEmsRxi8m2WzdqxI","vibe":"Grill skewers"},{"id":"aster","name":"Aster","area":"Sydney CBD","lat":-33.862904,"lng":151.212384,"rating":4.2,"address":"Level 32, 117 Macquarie St","hours":[[[960,1320]],[[960,1440]],[[960,1440]],[[960,1440]],[[960,1440]],[[960,1440]],[[960,1320]]],"pid":"ChIJF0c8VZWvEmsRfNK5hhY70JA","vibe":"Level 32"},{"id":"cirq","name":"CIRQ","area":"Barangaroo","lat":-33.862548,"lng":151.201074,"rating":4.1,"address":"Level 26, 1 Barangaroo Ave","hours":[[],[],[[960,1440]],[[960,1440]],[[960,1500]],[[960,1500]],[[960,1320]]],"pid":"ChIJiRQJU9avEmsRDzWfv2otLpg","vibe":"Level 26 at Crown","fact":"Sydney's tallest building."},{"id":"smoke-bar","name":"Smoke Bar","area":"Barangaroo","lat":-33.865576,"lng":151.201534,"rating":4.4,"address":"Level 2, 35 Barangaroo Ave","hours":[[],[[900,1320]],[[900,1440]],[[900,1440]],[[900,1500]],[[900,1500]],[[900,1380]]],"pid":"ChIJ3818dUeuEmsR8lhLI5I9PWs","vibe":"Harbour sunsets"},{"id":"zeta-bar","name":"Zeta Bar","area":"Sydney CBD","lat":-33.87175,"lng":151.207175,"rating":3.7,"address":"Hilton, Level 4, 488 George St","hours":[[],[],[],[],[[1020,1440]],[[1020,1440]],[]],"pid":"ChIJodn99D6uEmsRqGYZbqVW-go","vibe":"Inside the Hilton"},{"id":"the-glenmore","name":"The Glenmore","area":"The Rocks","lat":-33.858627,"lng":151.207429,"rating":4.3,"address":"96 Cumberland St","hours":[[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1500]],[[660,1500]],[[660,1440]]],"pid":"ChIJz66NJ0OuEmsRRA_Dvawy8kI","vibe":"Opera House view","fact":"Been in Sydney longer than the Harbour Bridge."},{"id":"henry-deane","name":"Henry Deane","area":"Millers Point","lat":-33.857891,"lng":151.202225,"rating":4.0,"address":"Hotel Palisade, 35 Bettington St","hours":[[],[[960,1320]],[[960,1320]],[[720,1380]],[[720,1440]],[[720,1440]],[[720,1320]]],"pid":"ChIJmwkf3USuEmsRAQuLyMIFeZ4","vibe":"Harbour views"},{"id":"keg-brew","name":"Keg & Brew","area":"Surry Hills","lat":-33.883864,"lng":151.209905,"rating":4.3,"address":"26 Foveaux St","hours":[[[600,1440]],[[600,1440]],[[600,1440]],[[600,1440]],[[600,1620]],[[600,1620]],[[600,1320]]],"pid":"ChIJyVf-AyKuEmsRf5Ez1dNyUD0","vibe":"Pub rooftop"},{"id":"taphouse","name":"Taphouse","area":"Darlinghurst","lat":-33.884582,"lng":151.218117,"rating":4.3,"address":"122 Flinders St","hours":[[[960,1380]],[[960,1380]],[[960,1380]],[[960,1440]],[[690,1500]],[[690,1500]],[[690,1380]]],"pid":"ChIJl3F0uxuuEmsR1-VJdifvCm4","vibe":"Spice bags"},{"id":"colombian-hotel","name":"Colombian Hotel","area":"Darlinghurst","lat":-33.87958,"lng":151.215284,"rating":3.8,"address":"117 Oxford St","hours":[[[540,1800]],[[540,1800]],[[540,1800]],[[540,1800]],[[540,1800]],[[540,1800]],[[540,1800]]],"pid":"ChIJ04H5RReuEmsRzuSfVMcRz6U","vibe":"Oxford St staple"},{"id":"the-tilbury","name":"The Tilbury","area":"Woolloomooloo","lat":-33.86978,"lng":151.220455,"rating":4.1,"address":"12 Nicholson St","hours":[[[660,1200]],[[660,1200]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1320]]],"pid":"ChIJ70-WHm2uEmsRQJ9NjYZ9QOQ","vibe":"Proper pub"},{"id":"the-imperial","name":"The Imperial","area":"Erskineville","lat":-33.899142,"lng":151.182612,"rating":4.2,"address":"35 Erskineville Rd","hours":[[[960,1320]],[[960,1320]],[[960,1380]],[[960,1380]],[[960,1620]],[[720,1680]],[[720,1320]]],"pid":"ChIJn2KDQDSwEmsRqtyqeKSgUb8","vibe":"Erko institution","fact":"Priscilla was filmed here."},{"id":"aurora-hotel-rooftop","name":"Aurora Hotel Rooftop","area":"Surry Hills","lat":-33.884126,"lng":151.208419,"rating":4.0,"address":"324 Elizabeth St","hours":[[[540,1680]],[[540,1680]],[[540,1680]],[[540,1680]],[[540,1680]],[[540,1680]],[[540,1680]]],"pid":"ChIJQ8DXjiGuEmsRwXqm3Mt5HOo","vibe":"Footy on"},{"id":"slims-rooftop","name":"Slims Rooftop","area":"Darlinghurst","lat":-33.874257,"lng":151.214643,"rating":3.9,"address":"47/49 William St","hours":[[[600,1620]],[[600,1620]],[[600,1620]],[[600,1620]],[[600,1620]],[[600,1620]],[[600,1440]]],"pid":"ChIJz3feFRSuEmsRtgAiFAPuhac","vibe":"St Mary's view"},{"id":"the-strawberry","name":"The Strawberry","area":"Surry Hills","lat":-33.886524,"lng":151.208032,"rating":4.0,"address":"453 Elizabeth St","hours":[[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1440]]],"pid":"ChIJgzJwTSCuEmsR-_il2-0vp6w","vibe":"Happy hour cocktails"},{"id":"east-village-hotel","name":"East Village Hotel","area":"Darlinghurst","lat":-33.877594,"lng":151.216632,"rating":4.2,"address":"234 Palmer St","hours":[[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1320]]],"pid":"ChIJb8UmMBGuEmsR0lfFBnciMAM","vibe":"Sunday roast","fact":"Tilly Devine's old local."},{"id":"darlo-bar","name":"Darlo Bar","area":"Darlinghurst","lat":-33.877986,"lng":151.2206267,"rating":4.3,"address":"306 Liverpool St","hours":[[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]]],"pid":"ChIJaVxY6hGuEmsRT7xRTYn89I8","vibe":"Retro corner bar"},{"id":"burdekin-rooftop","name":"Burdekin Rooftop","area":"Darlinghurst","lat":-33.877028,"lng":151.212957,"rating":4.5,"address":"2 Oxford St","hours":[[],[],[[960,1320]],[[960,1320]],[[960,1440]],[[720,1440]],[]],"pid":"ChIJp-z_ImCvEmsRlf4URZ1mG2c","vibe":"Hyde Park views"},{"id":"kasbah-the-strand","name":"Kasbah, The Strand","area":"Darlinghurst","lat":-33.874564,"lng":151.216521,"rating":4.5,"address":"99 William St","hours":[[],[],[],[[960,1380]],[[960,1440]],[[780,1440]],[[780,1260]]],"pid":"ChIJx1TSsbSvEmsR9QfDNjgr_KU","vibe":"64 stairs. Worth it."},{"id":"monica-rooftop","name":"Monica Rooftop","area":"Paddington","lat":-33.881801,"lng":151.219223,"rating":4.1,"address":"Level 5/1 Oxford St","hours":[[[900,1320]],[[900,1320]],[[900,1320]],[[900,1320]],[[720,1435]],[[720,1435]],[[720,1320]]],"pid":"ChIJr6_ybjyvEmsR6Wh4-D7iuJ4","vibe":"Feels like LA"},{"id":"royal-hotel","name":"Royal Hotel","area":"Paddington","lat":-33.882399,"lng":151.228503,"rating":4.1,"address":"237 Glenmore Rd","hours":[[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[600,1440]],[[660,1320]]],"pid":"ChIJfT3LxwiuEmsRlc_AQvE1Q8I","vibe":"Classic pub balcony"},{"id":"the-light-brigade","name":"The Light Brigade","area":"Woollahra","lat":-33.888535,"lng":151.232214,"rating":4.0,"address":"Cnr Oxford St & Jersey Rd","hours":[[[690,1440]],[[690,1440]],[[690,1440]],[[690,1440]],[[690,1500]],[[690,1500]],[[690,1320]]],"pid":"ChIJNbXEageuEmsRnctwYerAMgM","vibe":"Taco Tuesdays"},{"id":"sweethearts-terraza","name":"Sweethearts Terraza","area":"Potts Point","lat":-33.873366,"lng":151.223741,"rating":4.2,"address":"Level 3/33-35 Darlinghurst Rd","hours":[[],[],[[1020,1440]],[[1020,1440]],[[1020,1440]],[[720,1440]],[[720,1440]]],"pid":"ChIJwd3FH1mvEmsRJdynbd6KmtU","vibe":"Mexican brunch"},{"id":"kings-cross-hotel","name":"Kings Cross Hotel","area":"Potts Point","lat":-33.874903,"lng":151.222045,"rating":4.1,"address":"244-248 William St","hours":[[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]]],"pid":"ChIJ_Zmujw2uEmsRAaqIm1aG_8E","vibe":"Coke sign view"},{"id":"arturo-s-rooftop","name":"Arturo's Rooftop","area":"Woolloomooloo","lat":-33.869182,"lng":151.219488,"rating":3.6,"address":"Level 2/2 Bourke St","hours":[[],[],[[1020,1440]],[[1020,1440]],[[720,1440]],[[720,1440]],[[720,1200]]],"pid":"ChIJl2HU9MevEmsRUYj9_nsucvs","vibe":"Lobster sliders"},{"id":"green-moustache","name":"Green Moustache","area":"North Sydney","lat":-33.838401,"lng":151.206795,"rating":4.3,"address":"Level 10/100 Miller St","hours":[[],[[705,1320]],[[705,1320]],[[690,1320]],[[690,1350]],[[690,1350]],[]],"pid":"ChIJk1sOd7ivEmsRKXWPQ82SEtE","vibe":"Fancy food"},{"id":"four-hundred","name":"Four Hundred","area":"North Sydney","lat":-33.840308,"lng":151.207483,"rating":4.7,"address":"Greenwood Plaza Rooftop","hours":[[],[[720,1380]],[[720,1380]],[[720,1380]],[[720,1380]],[[720,1380]],[]],"pid":"ChIJGfh_AZ6vEmsRwklZQAumXW4","vibe":"Mexican food"},{"id":"the-treehouse-hotel","name":"The Treehouse Hotel","area":"North Sydney","lat":-33.839196,"lng":151.206475,"rating":4.3,"address":"60 Miller St","hours":[[[720,1320]],[[720,1320]],[[720,1380]],[[720,1380]],[[720,1380]],[[1020,1380]],[]],"pid":"ChIJx1H_TfKuEmsRHok6k4ljUVs","vibe":"Feels like a forest"},{"id":"websters","name":"Websters","area":"Newtown","lat":-33.896988,"lng":151.179059,"rating":4.1,"address":"323 King St","hours":[[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1440]]],"pid":"ChIJ6zc9zTawEmsRnod33Al5njQ","vibe":"Trivia nights"},{"id":"corridor","name":"Corridor","area":"Newtown","lat":-33.89357,"lng":151.183129,"rating":4.4,"address":"153A King St","hours":[[[1020,1380]],[[1020,1380]],[[1020,1380]],[[1020,1380]],[[960,1440]],[[900,1440]],[[900,1380]]],"pid":"ChIJI6pXTzGwEmsR2knXcm5PFtQ","vibe":"Grungy, in a good way"},{"id":"hotel-steyne","name":"Hotel Steyne","area":"Manly","lat":-33.796961,"lng":151.287679,"rating":3.7,"address":"75 The Corso","hours":[[[540,1620]],[[540,1620]],[[540,1620]],[[540,1620]],[[540,1800]],[[540,1800]],[[540,720]]],"pid":"ChIJ0SobZw-rEmsR8XKo0XEZCPE","vibe":"Opposite the beach"},{"id":"coogee-pavilion-rooftop","name":"Coogee Pavilion Rooftop","area":"Coogee","lat":-33.918713,"lng":151.258244,"rating":3.7,"address":"Level 3/169 Dolphin St","hours":[[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[660,1440]],[[660,1440]]],"pid":"ChIJUR24XvqzEmsRFFs3JRkMvyw","vibe":"Beach view","fact":"Used to be an aquarium. Google the Shark Arm case."},{"id":"the-rooftop-pyrmont","name":"The Rooftop, Pyrmont","area":"Pyrmont","lat":-33.871066,"lng":151.194971,"rating":3.8,"address":"214-216 Harris St","hours":[[],[],[[720,1350]],[[720,1350]],[[720,1440]],[[720,1440]],[[720,1260]]],"pid":"ChIJqZNV7DWvEmsRWMshJxavX24","vibe":"Corner pub rooftop"},{"id":"the-old-clare-rooftop","name":"The Old Clare Rooftop","area":"Chippendale","lat":-33.884421,"lng":151.201388,"rating":3.8,"address":"Level 4, 1 Kensington St","hours":[[],[],[[960,1320]],[[960,1320]],[[960,1320]],[[960,1320]],[]],"pid":"ChIJoeLDLyavEmsRksXCvNmiOcQ","vibe":"Rooftop pool"},{"id":"the-library-bar","name":"The Library Bar","area":"Sydney CBD","lat":-33.8665466,"lng":151.2134094,"rating":4.3,"address":"Mitchell Library, 1 Shakespeare Pl","hours":[[],[],[[960,1320]],[[960,1320]],[[960,1320]],[[960,1320]],[]],"pid":"ChIJc1vwpumvEmsRE7WYsnNTYBo","vibe":"Hidden harbour view"},{"id":"martinez","name":"Martinez","area":"Sydney CBD","lat":-33.8627915,"lng":151.2112344,"rating":4.2,"address":"Quay Quarter Tower, 50 Bridge St","hours":[[[690,1260]],[[690,1260]],[[690,1260]],[[690,1260]],[[690,1260]],[],[]],"pid":"ChIJt5CEcQ2vEmsR6c3vf6d45Os","vibe":"Lunch crowd"},{"id":"the-butler","name":"The Butler","area":"Potts Point","lat":-33.871688,"lng":151.22268,"rating":4.6,"address":"123 Victoria St","hours":[[[960,1380]],[[960,1380]],[[720,1380]],[[720,1380]],[[720,1440]],[[720,1440]],[[720,1320]]],"pid":"ChIJk5rNr3KuEmsRQSgDz3qgIm0","vibe":"Margarita flights"},{"id":"the-toxteth","name":"The Toxteth","area":"Glebe","lat":-33.8768,"lng":151.1849,"rating":4.1,"address":"345 Glebe Point Rd","hours":[[[600,1440]],[[600,1440]],[[600,1440]],[[600,1440]],[[600,1440]],[[600,1440]],[[660,1320]]],"pid":"ChIJ2TPEbdOvEmsRt8I7LQF5I3I","vibe":"Big pub"},{"id":"the-fernery","name":"The Fernery","area":"Mosman","lat":-33.8283958,"lng":151.2439408,"rating":4.2,"address":"719 Military Rd","hours":[[],[],[[720,1320]],[[720,1320]],[[720,1440]],[[720,1440]],[[720,1260]]],"pid":"ChIJp1qr8hqsEmsR8tBjPXYFOKo","vibe":"Big groups"},{"id":"socal","name":"SoCal","area":"Neutral Bay","lat":-33.830924,"lng":151.221458,"rating":4.4,"address":"1 Young St","hours":[[[1020,1440]],[[1020,1440]],[[1020,1440]],[[1020,1440]],[[720,1440]],[[720,1440]],[[720,1440]]],"pid":"ChIJY0p97IWJtAER-iCXGhiYGpA","vibe":"Tacos"},{"id":"kiln","name":"Kiln","area":"Surry Hills","lat":-33.8788571,"lng":151.209904,"rating":4.4,"address":"Level 18, Ace Hotel, 53 Wentworth Ave","hours":[[[1020,1380]],[[1020,1380]],[[1020,1380]],[[720,1380]],[[720,1440]],[[720,1440]],[]],"pid":"ChIJ5cqf0LavEmsRgYffN6rZabM","vibe":"Level 18"},{"id":"white-horse","name":"White Horse","area":"Surry Hills","lat":-33.8853965,"lng":151.2138641,"rating":4.7,"address":"381 Crown St","hours":[[],[[900,1380]],[[900,1380]],[[900,1380]],[[720,1410]],[[720,1410]],[[720,1260]]],"pid":"ChIJ75-1BwCvEmsRdwPXo6alBO4","vibe":"Chef's hat food","fact":"Steel horse on the roof. Shipped from Scotland."},{"id":"the-lansdowne","name":"The Lansdowne","area":"Chippendale","lat":-33.8847945,"lng":151.1950215,"rating":4.2,"address":"2-6 City Rd","hours":[[],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1620]],[[720,1620]],[[720,1440]]],"pid":"ChIJ405xzymuEmsRG73wo6BzHw0","vibe":"Live music","fact":"You Am I played early gigs here."},{"id":"bar-ombre","name":"Bar Ombré","area":"Sydney CBD","lat":-33.8619735,"lng":151.210137,"rating":4.0,"address":"Level 3, Gateway, Alfred St","hours":[[[960,1440]],[[960,1440]],[[960,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1320]]],"pid":"ChIJD4oA-FWvEmsRfMSH7M35uIc","tempClosed":true,"vibe":"Tucked away"},{"id":"the-mercantile","name":"The Mercantile","area":"The Rocks","lat":-33.8571355,"lng":151.2083827,"rating":4.3,"address":"25 George St","hours":[[[630,1320]],[[630,1320]],[[630,1320]],[[630,1380]],[[600,1410]],[[600,1410]],[[600,1320]]],"pid":"ChIJkdqMPV2uEmsRaGwdOX-V2Oc","vibe":"Irish pub"},{"id":"harbour-view-hotel","name":"Harbour View Hotel","area":"The Rocks","lat":-33.8565983,"lng":151.2073426,"rating":4.3,"address":"18 Lower Fort St","hours":[[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1320]]],"pid":"ChIJV_wrHl2uEmsR92Q_ubhgXDI","vibe":"Bridge right there"},{"id":"cauliflower-hotel","name":"The Cauliflower Hotel","area":"Waterloo","lat":-33.898883,"lng":151.200268,"rating":4.4,"address":"123 Botany Rd","hours":[[[600,1380]],[[600,1380]],[[600,1440]],[[600,1440]],[[600,1440]],[[600,1440]],[[600,1320]]],"pid":"ChIJibUEE8WxEmsRas8y_hrd_No","vibe":"Cheap schooners","fact":"The one '70s pub you couldn't get whacked in."},{"id":"marrickville-springs","name":"Marrickville Springs","area":"Marrickville","lat":-33.9102514,"lng":151.1626457,"rating":4.6,"address":"Philter Brewing, 92-98 Sydenham Rd","hours":[[],[],[[900,1320]],[[900,1320]],[[720,1440]],[[720,1440]],[[720,1260]]],"pid":"ChIJ6V6RpT6xEmsRFPMvNbJ9zXM","vibe":"Brewery"},{"id":"watsons-bay-hotel","name":"Watsons Bay Boutique Hotel","area":"Watsons Bay","lat":-33.8429855,"lng":151.2823156,"rating":4.2,"address":"10 Marine Parade","hours":[[[660,1260]],[[660,1260]],[[660,1260]],[[660,1260]],[[660,1320]],[[600,1320]],[[600,1320]]],"pid":"ChIJg6K8SYqsEmsRc90_ZVkqUzU","vibe":"Mind the seagulls"},{"id":"royal-oak-double-bay","name":"Royal Oak Hotel","area":"Double Bay","lat":-33.8771556,"lng":151.2414361,"rating":4.2,"address":"28 Bay St","hours":[[[600,1440]],[[600,1440]],[[600,1440]],[[600,1440]],[[600,1500]],[[600,1500]],[[600,1380]]],"pid":"ChIJt04AY-etEmsR4KjbC2RTD1M","vibe":"Dog friendly"},{"id":"intercontinental-double-bay","name":"Rooftop at InterContinental Double Bay","area":"Double Bay","lat":-33.8763177,"lng":151.243405,"rating":4.0,"address":"33 Cross St","hours":[[[720,1140]],[[720,1140]],[[720,1140]],[[720,1140]],[[720,1140]],[[720,1140]],[[720,1140]]],"pid":"ChIJ_zdFct2tEmsRfFCl6ILF20g","vibe":"Bay views"},{"id":"bridgeview-hotel","name":"Bridgeview Hotel","area":"Willoughby","lat":-33.8072602,"lng":151.1990473,"rating":4.1,"address":"580 Willoughby Rd","hours":[[[600,1500]],[[600,1500]],[[600,1500]],[[600,1500]],[[600,1500]],[[600,1500]],[[600,1320]]],"pid":"ChIJs19DfVtTDWsRx-3_9Wx0jOg","vibe":"Sunday roast"},{"id":"manly-greenhouse","name":"Manly Greenhouse","area":"Manly","lat":-33.7974882,"lng":151.2882014,"rating":4.3,"address":"36-38 South Steyne","hours":[[[900,1440]],[],[],[[900,1440]],[[900,1440]],[[900,1440]],[[900,1440]]],"pid":"ChIJg6p7bg-rEmsRIh4Xw6XtYoE"},{"id":"bne-sixteen-antlers","name":"Sixteen Antlers","area":"Brisbane City","lat":-27.468382,"lng":153.023103,"rating":4.0,"address":"Level 16, Pullman, cnr Ann & Roma St","hours":[[],[[960,1320]],[[960,1320]],[[960,1320]],[[900,1440]],[[900,1440]],[]],"pid":"ChIJo7F8jwNakWsR1Oe_Jk-lhDY","city":"Brisbane"},{"id":"bne-hibiscus-bar","name":"Hibiscus Bar & Terrace","area":"Brisbane City","lat":-27.470199,"lng":153.023841,"rating":4.2,"address":"Level 4, Hyatt Regency, 72 Queen St","hours":[[[900,1320]],[[900,1320]],[[900,1320]],[[900,1320]],[[720,1380]],[[720,1380]],[[720,1080]]],"pid":"ChIJxzBW7QRakWsRPgS6ODt30UQ","city":"Brisbane"},{"id":"bne-wet-deck","name":"WET Deck","area":"Brisbane City","lat":-27.46993,"lng":153.022139,"rating":3.7,"address":"Level 4, W Brisbane, 81 North Quay","hours":[[[660,1140]],[[660,1140]],[[660,1140]],[[660,1140]],[[660,1440]],[[660,1440]],[[660,1140]]],"pid":"ChIJHZVaSKVbkWsRudt-EgDXY0s","city":"Brisbane"},{"id":"bne-cicada-blu","name":"Cicada Blu","area":"Brisbane City","lat":-27.474199,"lng":153.024952,"rating":3.7,"address":"Level 23, Sky Deck, The Star, 33 William St","hours":[[[720,1290]],[[720,1290]],[[720,1290]],[[720,1290]],[[720,1290]],[[600,1290]],[[600,1290]]],"pid":"ChIJXYVwawBbkWsRPQvWTHiowLA","city":"Brisbane"},{"id":"bne-fiume","name":"Fiume","area":"Brisbane City","lat":-27.462476,"lng":153.035727,"rating":4.4,"address":"Level 3, Crystalbrook Vincent, 5 Boundary St","hours":[[],[],[[720,990]],[[960,1410]],[[720,1410]],[[720,1410]],[[720,1260]]],"pid":"ChIJlYsqLIxZkWsRk0_5cMfcS6g","city":"Brisbane"},{"id":"bne-stock-exchange","name":"Stock Exchange Rooftop","area":"Brisbane City","lat":-27.46954,"lng":153.028513,"rating":3.8,"address":"Stock Exchange Hotel, 131 Edward St","hours":[[[600,1200]],[[600,1320]],[[600,1320]],[[600,1320]],[[600,1560]],[[600,1560]],[[660,1080]]],"pid":"ChIJAUaoYRtakWsR996_T1jxEys","city":"Brisbane"},{"id":"bne-the-milton","name":"The Milton Rooftop","area":"Petrie Terrace","lat":-27.464782,"lng":153.012722,"rating":4.7,"address":"2 Caxton St","hours":[[],[[660,1380]],[[660,1380]],[[660,1380]],[[660,1500]],[[660,1500]],[[660,1380]]],"pid":"ChIJk4pToxpRkWsRsEuPxqSpAYw","city":"Brisbane"},{"id":"bne-maya","name":"MAYA Mexican","area":"Fortitude Valley","lat":-27.456938,"lng":153.036788,"rating":4.3,"address":"Level 11, 757 Ann St","hours":[[],[],[[720,1380]],[[720,1380]],[[720,1620]],[[720,1620]],[[720,1380]]],"pid":"ChIJG_0nwvJZkWsRlEtqw044e9M","city":"Brisbane"},{"id":"bne-iris","name":"Iris Rooftop","area":"Fortitude Valley","lat":-27.460242,"lng":153.0377,"rating":4.4,"address":"Hotel X, 458 Brunswick St","hours":[[],[],[[960,1350]],[[960,1350]],[[690,1410]],[[690,1410]],[[690,1350]]],"pid":"ChIJw990El9ZkWsRLtnMlazxUA0","city":"Brisbane"},{"id":"bne-soko","name":"Soko","area":"Fortitude Valley","lat":-27.453306,"lng":153.033951,"rating":4.4,"address":"Level 14, 7 Symes St","hours":[[[720,960]],[[660,960]],[[720,1320]],[[720,1320]],[[720,1380]],[[720,1380]],[[720,1320]]],"pid":"ChIJc_Ht8qBZkWsRdG1eV_CieAo","city":"Brisbane"},{"id":"bne-valley-hops","name":"Valley Hops Rooftop","area":"Fortitude Valley","lat":-27.458893,"lng":153.034995,"rating":3.9,"address":"Cloudland, 641 Ann St","hours":[[],[],[[690,1320]],[[690,1380]],[[690,1440]],[[690,1440]],[[690,1320]]],"pid":"ChIJgeniPEhZkWsRW1TCaph_MWw","city":"Brisbane"},{"id":"bne-cielo","name":"Cielo Rooftop","area":"Fortitude Valley","lat":-27.456548,"lng":153.032166,"rating":4.3,"address":"209 Brunswick St","hours":[[],[],[],[[960,1290]],[[960,1320]],[[720,1440]],[[720,1200]]],"pid":"ChIJs71iG2lZkWsRt5uvaatHFKw","city":"Brisbane"},{"id":"bne-siroco","name":"Siroco Rooftop","area":"Fortitude Valley","lat":-27.456356,"lng":153.036385,"rating":4.4,"address":"The Constance, 14-20 Constance St","hours":[[],[],[[720,900],[1020,1380]],[[720,900],[1020,1380]],[[720,900],[1020,1380]],[[720,1380]],[[720,1380]]],"pid":"ChIJWXhTlkJZkWsRJHokHqSaQbY","city":"Brisbane"},{"id":"bne-above-rooftop","name":"Above Rooftop","area":"Fortitude Valley","lat":-27.452379,"lng":153.039292,"rating":4.5,"address":"Ovolo The Valley, 1000 Ann St","hours":[[],[],[[900,1200]],[[900,1200]],[[780,1260]],[[780,1260]],[[780,1140]]],"pid":"ChIJjduLw_RZkWsRICrUsrqt3mg","city":"Brisbane"},{"id":"bne-su-casa","name":"Su Casa Rooftop","area":"Fortitude Valley","lat":-27.458699,"lng":153.034557,"rating":3.8,"address":"648 Ann St","hours":[[],[],[[1020,1620]],[[1020,1620]],[[900,1620]],[[900,1620]],[[1020,1620]]],"pid":"ChIJ5z4CeVVZkWsRKAsOMz0mFLg","city":"Brisbane"},{"id":"bne-the-terrace","name":"The Terrace","area":"South Brisbane","lat":-27.481495,"lng":153.023155,"rating":4.3,"address":"Level 21, Emporium Hotel, 267 Grey St","hours":[[[660,1320]],[[660,1320]],[[660,1440]],[[660,1440]],[[660,1500]],[[390,1500]],[[390,1320]]],"pid":"ChIJa0SOJNBbkWsRArdJerkLeXY","city":"Brisbane"},{"id":"bne-lina","name":"Lina Rooftop","area":"South Brisbane","lat":-27.481881,"lng":153.020607,"rating":4.5,"address":"Level 12, 74-80 Tribune St","hours":[[[720,1020]],[[720,1020]],[[660,1380]],[[660,1380]],[[660,1380]],[[660,1380]],[[660,1140]]],"pid":"ChIJ0at1yHtbkWsRKMbb-e6195Q","city":"Brisbane"},{"id":"bne-fox-rooftop","name":"Fox Rooftop","area":"South Brisbane","lat":-27.47418,"lng":153.01747,"rating":4.0,"address":"Hotel Terminus, 71-73 Melbourne St","hours":[[],[[960,1440]],[[960,1440]],[[720,1560]],[[720,1560]],[[720,1560]],[[720,1560]]],"pid":"ChIJ65wGYghakWsRpod_nTOYBnw","city":"Brisbane"},{"id":"bne-eagles-nest","name":"Eagles Nest","area":"Kangaroo Point","lat":-27.473997,"lng":153.036515,"rating":4.3,"address":"Level 12, The Point Hotel, 21 Lambert St","hours":[[],[],[],[[900,1260]],[[900,1260]],[[900,1260]],[[900,1260]]],"pid":"ChIJKzsw9BhakWsRuyLCEllKvwI","city":"Brisbane"},{"id":"bne-sunsets","name":"Sunsets Rooftop","area":"Kangaroo Point","lat":-27.484641,"lng":153.039539,"rating":4.5,"address":"Rooftop, 95 Linton St","hours":[[],[],[],[[720,1320]],[[720,1320]],[[720,1320]],[[720,1290]]],"pid":"ChIJD28EKrBbkWsRtaAnH3rlsYM","city":"Brisbane"},{"id":"bne-ooh-la-la","name":"Ooh La La","area":"Woolloongabba","lat":-27.485721,"lng":153.029516,"rating":4.4,"address":"Above C'est Bon, 609-611 Stanley St","hours":[[],[],[],[],[[960,1260]],[[960,1260]],[]],"pid":"ChIJe40k7wVbkWsR7ZKbYlQYDPo","city":"Brisbane"},{"id":"bne-ruma","name":"Ruma Rooftop","area":"New Farm","lat":-27.467144,"lng":153.045803,"rating":4.7,"address":"84 Merthyr Rd","hours":[[],[],[[720,1290]],[[720,1290]],[[720,1320]],[[660,1350]],[[660,1230]]],"pid":"ChIJ1653K_pZkWsRzNZ3sh0KDqk","city":"Brisbane"},{"id":"bne-melrose","name":"Melrose","area":"Bulimba","lat":-27.450889,"lng":153.053976,"rating":4.8,"address":"Level 1, 37 Oxford St","hours":[[],[],[[1020,1260]],[[1020,1260]],[[720,1320]],[[720,1320]],[[720,1020]]],"pid":"ChIJE_9SHtZZkWsRKFyyT0hXWv8","city":"Brisbane"},{"id":"bne-tetto","name":"Tetto Rooftop Bar","area":"Everton Park","lat":-27.406796,"lng":152.991503,"rating":4.6,"address":"807 Stafford Rd","hours":[[],[[960,1260]],[[960,1290]],[[960,1290]],[[720,1380]],[[720,1380]],[[720,1260]]],"pid":"ChIJ--er3QNXkWsRWFzCMpyC7Es","city":"Brisbane"},{"id":"mel-rooftop-bar-curtin-house","name":"Curtin House Rooftop","area":"Melbourne CBD","lat":-37.812014,"lng":144.965261,"rating":4.4,"address":"Level 7, Curtin House, 252 Swanston St","hours":[[[600,1620]],[[600,1620]],[[600,1620]],[[600,1620]],[[600,1620]],[[600,1620]],[[600,1620]]],"pid":"ChIJwYzOQcpC1moRbm5SF7RuCm0","city":"Melbourne"},{"id":"mel-her-rooftop","name":"Her Rooftop","area":"Melbourne CBD","lat":-37.811498,"lng":144.964155,"rating":4,"address":"Level 4, 270 Lonsdale St","hours":[[[690,1500]],[[690,1500]],[[690,1500]],[[690,1560]],[[690,1620]],[[690,1620]],[[690,1560]]],"pid":"ChIJ7SeQ6ZBD1moR7P9hvzDvNrQ","city":"Melbourne"},{"id":"mel-union-electric","name":"Union Electric Rooftop","area":"Melbourne CBD","lat":-37.81179,"lng":144.966705,"rating":4.6,"address":"13 Heffernan Ln","hours":[[[960,1500]],[[960,1500]],[[960,1500]],[[960,1500]],[[720,1500]],[[720,1500]],[[720,1500]]],"pid":"ChIJ7_FCh8lC1moRPc7-4Iwg5WE","city":"Melbourne"},{"id":"mel-rooftop-at-qt","name":"Rooftop at QT","area":"Melbourne CBD","lat":-37.813428,"lng":144.967824,"rating":4.4,"address":"Level 11, 133 Russell St","hours":[[[900,1380]],[[900,1380]],[[900,1380]],[[900,1380]],[[720,1500]],[[720,1500]],[[720,1380]]],"pid":"ChIJt7f_wMlC1moR78AaroNklv4","city":"Melbourne"},{"id":"mel-loop-roof","name":"Loop Roof","area":"Melbourne CBD","lat":-37.812176,"lng":144.97219,"rating":4.3,"address":"Level 3, 23 Meyers Pl","hours":[[],[],[[960,1380]],[[960,1380]],[[840,1500]],[[720,1500]],[[780,1200]]],"pid":"ChIJG86Ln8hC1moRgRVvzbmC6iI","city":"Melbourne"},{"id":"mel-inuman","name":"Inuman","area":"Melbourne CBD","lat":-37.811701,"lng":144.970111,"rating":4.8,"address":"167 Exhibition St","hours":[[],[[960,1380]],[[960,1380]],[[960,1380]],[[960,1440]],[[960,1440]],[]],"pid":"ChIJc9OhfQBD1moR99BjnibW_BQ","city":"Melbourne"},{"id":"mel-santana","name":"Santana Rooftop","area":"Melbourne CBD","lat":-37.813046,"lng":144.968622,"rating":4.7,"address":"Level 3, 169 Melbourne Pl","hours":[[[900,1500]],[[900,1500]],[[900,1500]],[[900,1500]],[[900,1500]],[[900,1500]],[[900,1500]]],"pid":"ChIJoYXGtY9D1moRRcp2-gnXHnI","city":"Melbourne"},{"id":"mel-farmers-daughters","name":"Farmer's Daughters","area":"Melbourne CBD","lat":-37.813554,"lng":144.971025,"rating":4.4,"address":"80 Collins, 95 Exhibition St","hours":[[[720,1260]],[[720,1260]],[[720,1260]],[[720,1290]],[[720,1290]],[[690,1290]],[[690,1260]]],"pid":"ChIJbVfLiJdD1moRk7I8Ws1zp7w","city":"Melbourne"},{"id":"mel-fleet","name":"Fleet Rooftop Bar","area":"Melbourne CBD","lat":-37.818788,"lng":144.962035,"rating":4.6,"address":"Level 22, Vibe Hotel, 1 Queen St","hours":[[],[[900,1380]],[[900,1380]],[[900,1380]],[[900,1440]],[[720,1440]],[[900,1380]]],"pid":"ChIJiVHlaQBD1moRD3FgRMTmjAc","city":"Melbourne"},{"id":"mel-imperial-hotel","name":"Imperial Hotel","area":"Melbourne CBD","lat":-37.81124,"lng":144.97277,"rating":4.2,"address":"2-8 Bourke St","hours":[[[660,1380]],[[660,1380]],[[660,1380]],[[660,1440]],[[660,1560]],[[660,1560]],[[660,1380]]],"pid":"ChIJ0y4DB8ZC1moRRnezTs9hzKs","city":"Melbourne"},{"id":"mel-morris-house","name":"Morris House","area":"Melbourne CBD","lat":-37.812869,"lng":144.971197,"rating":4.1,"address":"120 Exhibition St","hours":[[[690,1380]],[[690,1380]],[[690,1380]],[[690,1380]],[[690,1500]],[[690,1500]],[[690,1320]]],"pid":"ChIJDea8Si9D1moRvFKUQfX7iAk","city":"Melbourne"},{"id":"mel-hickens-hotel","name":"Hickens Hotel","area":"Melbourne CBD","lat":-37.813723,"lng":144.968295,"rating":4.5,"address":"127 Russell St","hours":[[[660,1500]],[[660,1500]],[[660,1500]],[[660,1500]],[[660,1620]],[[660,1620]],[[660,1500]]],"pid":"ChIJ-5_Hj5dD1moRLf5AmJkXZVo","city":"Melbourne"},{"id":"mel-good-heavens","name":"Good Heavens","area":"Melbourne CBD","lat":-37.812076,"lng":144.971143,"rating":4.3,"address":"Level 2, 79 Bourke St","hours":[[[720,1500]],[[720,1500]],[[720,1500]],[[720,1500]],[[720,1500]],[[720,1500]],[[720,1500]]],"pid":"ChIJ7cO7k8hC1moRgZW5lxx0mDI","city":"Melbourne"},{"id":"mel-fable","name":"Fable","area":"Melbourne CBD","lat":-37.810561,"lng":144.967408,"rating":4.1,"address":"Level 13, 168 Lonsdale St","hours":[[],[[900,1440]],[[900,1440]],[[900,1440]],[[900,1500]],[[900,1500]],[[900,1350]]],"pid":"ChIJNcMQVv5D1moRl98V2jj-Xpc","city":"Melbourne"},{"id":"mel-goldilocks","name":"Goldilocks","area":"Melbourne CBD","lat":-37.811823,"lng":144.965131,"rating":4.4,"address":"Level 5, 264 Swanston St","hours":[[[720,1500]],[[720,1500]],[[720,1500]],[[720,1500]],[[720,1560]],[[720,1560]],[[720,1500]]],"pid":"ChIJFxQqR8pC1moRtrCWdmUuFTU","city":"Melbourne"},{"id":"mel-transit","name":"Transit Rooftop Bar","area":"Melbourne CBD","lat":-37.818426,"lng":144.968406,"rating":4.2,"address":"Level 2, Transport Hotel, Federation Square","hours":[[[960,1380]],[[960,1380]],[[960,1440]],[[960,1440]],[[960,1560]],[[720,1560]],[[720,1380]]],"pid":"ChIJh1-3NCRo1moR-z74M9dBDP4","city":"Melbourne"},{"id":"mel-bomba","name":"Bomba","area":"Melbourne CBD","lat":-37.810404,"lng":144.969197,"rating":4.5,"address":"103 Lonsdale St","hours":[[[1020,1380]],[[720,1380]],[[720,1380]],[[720,1380]],[[720,1440]],[[720,1440]],[[900,1380]]],"pid":"ChIJ9yEuL8lC1moRpVtvu92LyWA","city":"Melbourne"},{"id":"mel-siglo","name":"Siglo","area":"Melbourne CBD","lat":-37.81091,"lng":144.972536,"rating":4.1,"address":"Level 2, 161 Spring St","hours":[[[1020,1620]],[[1020,1620]],[[1020,1620]],[[1020,1620]],[[1020,1620]],[[1020,1620]],[]],"pid":"ChIJVUlb_MVC1moReBMBN5F84vw","city":"Melbourne"},{"id":"mel-doms-social-club","name":"Dom's Social Club","area":"Melbourne CBD","lat":-37.811056,"lng":144.964241,"rating":4.7,"address":"Level 1, 301 Swanston St","hours":[[],[],[[1020,1380]],[[1020,1380]],[[960,1500]],[[960,1500]],[]],"pid":"ChIJLzCh9TBD1moRSUAqm95HPlA","city":"Melbourne"},{"id":"mel-heroes","name":"Heroes","area":"Melbourne CBD","lat":-37.812678,"lng":144.967615,"rating":4.3,"address":"188 Bourke St","hours":[[],[],[],[],[[960,1620]],[[960,1620]],[]],"pid":"ChIJPyZRld5D1moRQjRYEJV4tyc","city":"Melbourne"},{"id":"mel-cleo","name":"Cleo","area":"Melbourne CBD","lat":-37.813279,"lng":144.968525,"rating":3.9,"address":"Level 12, Melbourne Place, 130 Russell St","hours":[[[390,1350]],[[390,1350]],[[390,1350]],[[390,1350]],[[390,1440]],[[420,1440]],[[420,1350]]],"pid":"ChIJI9ItHcFD1moRwjW0Zud3kwg","city":"Melbourne"},{"id":"mel-state-of-grace","name":"State of Grace","area":"Melbourne CBD","lat":-37.819752,"lng":144.956983,"rating":4.6,"address":"27 King St","hours":[[[720,1320]],[[720,1320]],[[720,1320]],[[720,1380]],[[720,1500]],[[720,1500]],[[720,1260]]],"pid":"ChIJmfW-qk1d1moRewnuCAqvfY4","city":"Melbourne"},{"id":"mel-disuko","name":"Disuko","area":"Melbourne CBD","lat":-37.811999,"lng":144.971523,"rating":4.4,"address":"Level 3, 59-63 Bourke St","hours":[[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,900],[1020,1440]],[[720,900],[1020,1440]],[[720,900],[1020,1440]]],"pid":"ChIJS8y9tTVD1moRayt85yADL6g","city":"Melbourne"},{"id":"mel-waterside-hotel","name":"The Waterside Hotel","area":"Melbourne CBD","lat":-37.820225,"lng":144.957261,"rating":4.1,"address":"508 Flinders St","hours":[[[690,1380]],[[690,1380]],[[690,1500]],[[690,1620]],[[690,1620]],[[690,1620]],[[690,1500]]],"pid":"ChIJqXync1Jd1moRsFcec9xZZuo","city":"Melbourne"},{"id":"mel-hotel-nacional","name":"Hotel Nacional","area":"Melbourne CBD","lat":-37.814085,"lng":144.961334,"rating":4.2,"address":"23-25 Hardware Ln","hours":[[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]]],"pid":"ChIJ_1DxAkJD1moRmusslphummc","city":"Melbourne"},{"id":"mel-top-yard","name":"Top Yard Rooftop","area":"Melbourne CBD","lat":-37.81888,"lng":144.957329,"rating":4,"address":"2 Geddes Ln","hours":[[],[],[],[[1080,1620]],[[1200,1800]],[[1080,1800]],[]],"pid":"ChIJp80KPZld1moRAQM98kREfVU","city":"Melbourne"},{"id":"mel-blossom","name":"Blossom Rooftop Bar","area":"Melbourne CBD","lat":-37.81282,"lng":144.964754,"rating":4,"address":"Level 14, Pullman, 265 Little Bourke St","hours":[[],[[960,1380]],[[960,1380]],[[960,1380]],[[960,1380]],[[720,1440]],[]],"pid":"ChIJm8sqwlFD1moRiBJRkbSrL48","city":"Melbourne"},{"id":"mel-carlton-rooftop","name":"The Carlton Rooftop","area":"Melbourne CBD","lat":-37.813229,"lng":144.967663,"rating":4,"address":"193 Bourke St","hours":[[],[],[],[],[[1020,1620]],[[1020,1620]],[]],"pid":"ChIJISCTFkpD1moRuloSfN8hGsg","city":"Melbourne"},{"id":"mel-stolen-gem","name":"The Stolen Gem","area":"Melbourne CBD","lat":-37.814398,"lng":144.962108,"rating":4.3,"address":"Level 8, 388 Bourke St","hours":[[],[],[[900,1320]],[[900,1320]],[[900,1440]],[[840,1440]],[[840,1140]]],"pid":"ChIJU9snJLVC1moRT946l1nLJF8","city":"Melbourne"},{"id":"mel-q-rooftop","name":"The Q Rooftop","area":"Melbourne CBD","lat":-37.819588,"lng":144.956905,"rating":4.3,"address":"Level 28, 509 Flinders Ln","hours":[[],[],[],[],[[960,1320]],[[960,1320]],[]],"pid":"ChIJEe-HAC5d1moRGMPc4lhJArY","city":"Melbourne"},{"id":"mel-garden-state-rooftop","name":"Garden State Rooftop","area":"Melbourne CBD","lat":-37.81542,"lng":144.971164,"rating":4.1,"address":"Garden State Hotel, 101 Flinders Ln","hours":[[[690,1440]],[[690,1440]],[[690,1440]],[[690,1440]],[[690,1620]],[[720,1620]],[[720,1380]]],"pid":"ChIJ17FTBFxD1moRafdxQd8z_wQ","city":"Melbourne"},{"id":"mel-emerald-peacock","name":"The Emerald Peacock","area":"Melbourne CBD","lat":-37.811449,"lng":144.965539,"rating":4.3,"address":"233 Lonsdale St","hours":[[[960,1380]],[[960,1380]],[[960,1440]],[[960,1440]],[[960,1500]],[[960,1500]],[[960,1380]]],"pid":"ChIJ5fBdNspC1moRAXDdMcwkKYw","city":"Melbourne"},{"id":"mel-young-and-jacksons","name":"Young and Jackson","area":"Melbourne CBD","lat":-37.817341,"lng":144.967163,"rating":4.2,"address":"1 Swanston St","hours":[[[600,1440]],[[600,1440]],[[600,1440]],[[600,1440]],[[600,1440]],[[600,1440]],[[600,1440]]],"pid":"ChIJ3VlKn7ZC1moRnOHqo_15M_I","city":"Melbourne"},{"id":"mel-duke-of-wellington","name":"The Duke of Wellington","area":"Melbourne CBD","lat":-37.816443,"lng":144.970121,"rating":4.3,"address":"146 Flinders St","hours":[[[660,1380]],[[660,1380]],[[660,1440]],[[660,1500]],[[660,1500]],[[660,1500]],[[660,1380]]],"pid":"ChIJ9YePsLdC1moRhmhASJxsSqk","city":"Melbourne"},{"id":"mel-quarterhouse","name":"Quarterhouse","area":"Docklands","lat":-37.819768,"lng":144.952252,"rating":4.7,"address":"693 Collins St","hours":[[[690,1380]],[[690,1440]],[[690,1440]],[[690,1440]],[[690,1500]],[[690,1500]],[[690,1380]]],"pid":"ChIJX5nuSEZd1moRWe7HSa_uM7o","city":"Melbourne"},{"id":"mel-johnnys-green-room","name":"Johnny's Green Room","area":"Carlton","lat":-37.798381,"lng":144.967062,"rating":4,"address":"Level 2, 293-297 Lygon St","hours":[[[720,1380]],[[720,1380]],[[720,1380]],[[720,1380]],[[720,1440]],[[720,1440]],[[720,1380]]],"pid":"ChIJS3c_WtBD1moRSdoTjZt7llI","city":"Melbourne"},{"id":"mel-prince-alfred","name":"Prince Alfred Rooftop","area":"Carlton","lat":-37.800423,"lng":144.962229,"rating":4.2,"address":"191 Grattan St","hours":[[[720,1380]],[[720,1380]],[[720,1500]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1380]]],"pid":"ChIJN5RQIdNC1moRs1htswJSRJY","city":"Melbourne"},{"id":"mel-wolfs-lair","name":"Wolf's Lair","area":"Carlton","lat":-37.797466,"lng":144.967034,"rating":4.5,"address":"Jimmy Watson's, Little Elgin St","hours":[[],[[630,1380]],[[630,1380]],[[630,1380]],[[630,1380]],[[630,1380]],[[630,1140]]],"pid":"ChIJ052tZkVD1moRD-4Z7TFIaKk","city":"Melbourne"},{"id":"mel-runner-up","name":"Runner Up","area":"Collingwood","lat":-37.799271,"lng":144.986514,"rating":4.5,"address":"Level 2, 35 Johnston St","hours":[[],[[1020,1380]],[[1020,1380]],[[960,1380]],[[960,1500]],[[780,1500]],[[900,1320]]],"pid":"ChIJIZCRcZpD1moRghAETO0nWIw","city":"Melbourne"},{"id":"mel-slowpoke","name":"Slowpoke","area":"Collingwood","lat":-37.804023,"lng":144.988493,"rating":4.4,"address":"Level 4, 50 Gipps St","hours":[[],[],[[960,1320]],[[960,1380]],[[960,1380]],[[840,1380]],[[840,1320]]],"pid":"ChIJOxf46OFD1moR7Jysyy_g0rM","city":"Melbourne"},{"id":"mel-easeys","name":"Easey's","area":"Collingwood","lat":-37.797615,"lng":144.986443,"rating":4.3,"address":"Level 3, 48 Easey St","hours":[[[660,1320]],[[660,1320]],[[660,1320]],[[660,1320]],[[660,1380]],[[660,1380]],[[660,1320]]],"pid":"ChIJI0eazx5D1moRIPxFYpXoeCM","city":"Melbourne"},{"id":"mel-naked-in-the-sky","name":"Naked in the Sky","area":"Fitzroy","lat":-37.798765,"lng":144.978198,"rating":4.4,"address":"Naked for Satan, 285 Brunswick St","hours":[[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1500]],[[720,1500]],[[720,1320]]],"pid":"ChIJZTxgryBD1moRLY4a4APof1Q","city":"Melbourne"},{"id":"mel-marquis-of-lorne","name":"Marquis of Lorne","area":"Fitzroy","lat":-37.797213,"lng":144.981978,"rating":4.6,"address":"411 George St","hours":[[[960,1380]],[[960,1380]],[[960,1380]],[[720,1380]],[[720,1500]],[[720,1500]],[[720,1380]]],"pid":"ChIJE4WnxyFD1moRW-Pvjv626S4","city":"Melbourne"},{"id":"mel-provincial-hotel","name":"The Provincial Hotel","area":"Fitzroy","lat":-37.79813,"lng":144.978303,"rating":4.2,"address":"299 Brunswick St","hours":[[[720,1320]],[[720,1320]],[[720,1320]],[[720,1320]],[[720,1620]],[[720,1620]],[[720,1320]]],"pid":"ChIJ7bx8tyBD1moRcvM39mhnAag","city":"Melbourne"},{"id":"mel-full-moon-fever","name":"Full Moon Fever","area":"Abbotsford","lat":-37.800078,"lng":144.993596,"rating":4.6,"address":"Lulie Tavern, 225 Johnston St","hours":[[[960,1380]],[[960,1380]],[[720,1380]],[[720,1500]],[[720,1500]],[[720,1500]],[[720,1380]]],"pid":"ChIJj5-OpwRD1moRTc2_PgcPgWg","city":"Melbourne"},{"id":"mel-cornish-arms","name":"The Cornish Arms","area":"Brunswick","lat":-37.773403,"lng":144.960877,"rating":4.4,"address":"163A Sydney Rd","hours":[[[720,1380]],[[720,1380]],[[720,1380]],[[720,1380]],[[720,1500]],[[720,1500]],[[720,1380]]],"pid":"ChIJRwm4S7Vc1moRsQe2HMiLwyE","city":"Melbourne"},{"id":"mel-gigi-rooftop","name":"Gigi Rooftop","area":"Thornbury","lat":-37.752655,"lng":145.001404,"rating":4.2,"address":"Level 2, 917 High St","hours":[[],[],[],[[990,1320]],[[990,1320]],[[840,1320]],[[840,1320]]],"pid":"ChIJs8PXoiNF1moRx4wmmRLulE0","city":"Melbourne"},{"id":"mel-harlow","name":"Harlow","area":"Richmond","lat":-37.826822,"lng":144.997996,"rating":4.3,"address":"447 Church St","hours":[[[690,1380]],[[690,1380]],[[690,1380]],[[690,1440]],[[690,1560]],[[690,1620]],[[690,1440]]],"pid":"ChIJR6q2WIxC1moRcGVICR5pTVY","city":"Melbourne"},{"id":"mel-corner-hotel","name":"Corner Hotel","area":"Richmond","lat":-37.824965,"lng":144.992759,"rating":4.4,"address":"57 Swan St","hours":[[],[[720,1500]],[[720,1500]],[[720,1500]],[[720,1620]],[[720,1620]],[[720,1500]]],"pid":"ChIJ3br785JC1moR963nGxdKAcA","city":"Melbourne"},{"id":"mel-union-house","name":"Union House","area":"Richmond","lat":-37.826066,"lng":144.999266,"rating":4.4,"address":"270 Swan St","hours":[[[960,1320]],[[960,1320]],[[960,1380]],[[720,1380]],[[720,1500]],[[720,1500]],[[720,1320]]],"pid":"ChIJUSklooxC1moRHCZgAhznvBc","city":"Melbourne"},{"id":"mel-fargo-and-co","name":"Fargo and Co","area":"Richmond","lat":-37.82569,"lng":144.996788,"rating":4.4,"address":"216 Swan St","hours":[[],[],[],[[720,1380]],[[720,1620]],[[720,1620]],[[720,1320]]],"pid":"ChIJ--7iHI1C1moRWVDDY6tdkF8","city":"Melbourne"},{"id":"mel-public-house","name":"Public House","area":"Richmond","lat":-37.826205,"lng":144.99811,"rating":4,"address":"433-435 Church St","hours":[[],[],[],[[720,1320]],[[720,1560]],[[720,1560]],[[720,1380]]],"pid":"ChIJlwPh8YxC1moRgekC18r1aWw","city":"Melbourne"},{"id":"mel-mt-view-hotel","name":"Mt View Hotel","area":"Richmond","lat":-37.818011,"lng":144.992156,"rating":4.3,"address":"68-70 Bridge Rd","hours":[[[720,1380]],[[720,1380]],[[720,1380]],[[720,1380]],[[720,1500]],[[720,1500]],[[720,1380]]],"pid":"ChIJ2cdr2O1C1moRANQmeH32rzE","city":"Melbourne"},{"id":"mel-harvie","name":"Harvie","area":"Armadale","lat":-37.862093,"lng":145.027839,"rating":4.1,"address":"109 Wattletree Rd","hours":[[[900,1320]],[[900,1290]],[[900,1290]],[[900,1320]],[[900,1410]],[[780,1410]],[[780,1320]]],"pid":"ChIJI5HbIt9p1moRNU7lc-3bk5Q","city":"Melbourne"},{"id":"mel-beverly","name":"Beverly","area":"South Yarra","lat":-37.838328,"lng":144.995393,"rating":4.2,"address":"Level 24, 627 Chapel St","hours":[[[960,1380]],[[720,1380]],[[720,1380]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1380]]],"pid":"ChIJXWvslBpD1moRI2sVjMgpSgE","city":"Melbourne"},{"id":"mel-stella","name":"Stella","area":"South Yarra","lat":-37.8446,"lng":144.994347,"rating":4.7,"address":"427 Chapel St","hours":[[],[[1020,1350]],[[1020,1350]],[[720,900],[1020,1350]],[[720,900],[1020,1470]],[[660,900],[1020,1470]],[[660,900],[1020,1320]]],"pid":"ChIJCYXsF6Bp1moRZHx4J6WPlUs","city":"Melbourne"},{"id":"mel-tetto-di-carolina","name":"Tetto di Carolina","area":"South Yarra","lat":-37.83869,"lng":144.988074,"rating":4.5,"address":"48 Toorak Rd","hours":[[],[],[],[],[[900,1500]],[[900,1500]],[]],"pid":"ChIJYSyX_bRD1moRQHmXTaEQXog","city":"Melbourne"},{"id":"mel-arcadia-hotel","name":"Arcadia Hotel","area":"South Yarra","lat":-37.838539,"lng":144.98666,"rating":4.3,"address":"2 Toorak Rd","hours":[[[690,1620]],[[690,1620]],[[690,1620]],[[690,1620]],[[690,1620]],[[690,1620]],[[690,1620]]],"pid":"ChIJETsOOp5C1moRYCqryEDomLg","city":"Melbourne"},{"id":"mel-the-emerson","name":"The Emerson","area":"South Yarra","lat":-37.846366,"lng":144.99121,"rating":3.6,"address":"141-145 Commercial Rd","hours":[[],[],[],[[1020,1320]],[[1140,1740]],[[900,1740]],[]],"pid":"ChIJh1-3NCRo1moR7dxH9c4IIbE","city":"Melbourne"},{"id":"mel-osborne-rooftop","name":"The Osborne Rooftop","area":"South Yarra","lat":-37.846184,"lng":144.989993,"rating":3.9,"address":"119 Commercial Rd","hours":[[],[[720,1260]],[[720,1260]],[[720,1260]],[[720,1500]],[[720,1620]],[[720,1500]]],"pid":"ChIJsQogFSRo1moR2h7D4KpX3TM","city":"Melbourne"},{"id":"mel-rufio","name":"Rufio","area":"St Kilda","lat":-37.868178,"lng":144.990158,"rating":4.7,"address":"188 Carlisle St","hours":[[],[],[[1020,1320]],[[1020,1320]],[[1020,1380]],[[720,1380]],[[720,1260]]],"pid":"ChIJyR9Yc-pp1moRSGY0m1zvR68","city":"Melbourne"},{"id":"mel-the-espy","name":"The Espy","area":"St Kilda","lat":-37.864218,"lng":144.972853,"rating":4.3,"address":"11 The Esplanade","hours":[[[720,1380]],[[720,1380]],[[720,1380]],[[720,1380]],[[720,1620]],[[720,1620]],[[720,1380]]],"pid":"ChIJZwv6MGVo1moRnQQHiuprVB0","city":"Melbourne"},{"id":"mel-baxter","name":"Baxter","area":"St Kilda","lat":-37.865428,"lng":144.972347,"rating":4.4,"address":"St Kilda Sea Baths, 10-18 Jacka Blvd","hours":[[],[],[[1020,1380]],[[1020,1380]],[[720,1440]],[[720,1500]],[[720,1380]]],"pid":"ChIJQwVGMXto1moRxnE3KLpu7Ls","city":"Melbourne"},{"id":"mel-local-taphouse","name":"The Local Taphouse","area":"St Kilda","lat":-37.868121,"lng":144.989994,"rating":4.6,"address":"184 Carlisle St","hours":[[[720,1380]],[[720,1380]],[[720,1380]],[[720,1380]],[[720,1500]],[[720,1500]],[[720,1380]]],"pid":"ChIJeyLgtURo1moR73XjND_zHZ8","city":"Melbourne"},{"id":"mel-ellora","name":"Ellora","area":"St Kilda","lat":-37.862743,"lng":144.972902,"rating":4.7,"address":"1 Fitzroy St","hours":[[],[],[],[[960,1350]],[[960,1440]],[[750,1530]],[[750,1380]]],"pid":"ChIJFdOgJLFp1moReS2oh8DGwGI","city":"Melbourne"},{"id":"mel-mirror-mirror","name":"Mirror Mirror","area":"South Melbourne","lat":-37.830914,"lng":144.959879,"rating":4.7,"address":"Level 3, 209 Clarendon St","hours":[[],[],[[900,1380]],[[900,1380]],[[720,1500]],[[720,1500]],[[720,1200]]],"pid":"ChIJscqLAs9n1moRjeTLzaf3J8s","city":"Melbourne"},{"id":"mel-brewmanity","name":"Brewmanity","area":"South Melbourne","lat":-37.830548,"lng":144.962937,"rating":4.7,"address":"50 Tope St","hours":[[[540,1320]],[[720,1320]],[[720,1320]],[[720,1380]],[[720,1500]],[[720,1500]],[[720,1320]]],"pid":"ChIJoXOSxPtD1moRg2_8h_A3INs","city":"Melbourne"},{"id":"mel-albion-rooftop","name":"The Albion Rooftop","area":"South Melbourne","lat":-37.831577,"lng":144.95602,"rating":4.1,"address":"172 York St","hours":[[],[],[],[],[[1020,1740]],[[900,1740]],[]],"pid":"ChIJZ2Hf0_5n1moR3lowcrH6WS8","city":"Melbourne"},{"id":"mel-skinny-dog","name":"Skinny Dog Hotel","area":"Kew","lat":-37.806724,"lng":145.030375,"rating":4.2,"address":"155 High St","hours":[[[720,1320]],[[720,1320]],[[720,1320]],[[720,1380]],[[720,1500]],[[720,1500]],[[720,1320]]],"pid":"ChIJvZ8YLsZD1moRkIifV7ZSlR4","city":"Melbourne"},{"id":"mel-nineteenforty","name":"Nineteenforty Rooftop","area":"Hawthorn East","lat":-37.830655,"lng":145.055772,"rating":4,"address":"200 Camberwell Rd","hours":[[],[],[],[],[[1020,1320]],[[900,1320]],[[900,1200]]],"pid":"ChIJ4-ezGoRB1moRIFnFIj2ixwo","city":"Melbourne"},{"id":"mel-olympia","name":"Olympia","area":"Oakleigh","lat":-37.899894,"lng":145.089444,"rating":4.7,"address":"16-18 Portman St","hours":[[[990,1380]],[[990,1290]],[[990,1290]],[[990,1320]],[[900,1380]],[[780,1410]],[[780,1260]]],"pid":"ChIJWVS19Ihr1moRASEJayFHLtI","city":"Melbourne"},{"id":"mel-suburban-rooftop","name":"The Suburban Rooftop","area":"Ringwood","lat":-37.814255,"lng":145.228441,"rating":4.2,"address":"Town Square, Eastland, Maroondah Hwy","hours":[[[720,1320]],[[720,1320]],[[720,1320]],[[720,1320]],[[720,1440]],[[720,1440]],[[720,1320]]],"pid":"ChIJfzJ_ZtY71moRF2jbA7goSXA","city":"Melbourne"},{"id":"mel-hobsons-bay-hotel","name":"Hobson's Bay Hotel","area":"Williamstown","lat":-37.858999,"lng":144.900326,"rating":4.1,"address":"28 Ferguson St","hours":[[[720,1500]],[[720,1500]],[[720,1500]],[[720,1500]],[[720,1500]],[[720,1500]],[[720,1500]]],"pid":"ChIJNRvmysJn1moRj0w40Ct7Oys","city":"Melbourne"},{"id":"per-lils-rooftop","name":"Lil's Rooftop","area":"Perth CBD","lat":-31.951371,"lng":115.852685,"rating":4.7,"address":"437 Murray St","hours":[[[690,1380]],[[690,1380]],[[690,1380]],[[690,1440]],[[690,1560]],[[660,1560]],[[690,1440]]],"pid":"ChIJ3aSBl267MioRxVd1gK7B6rw","city":"Perth"},{"id":"per-the-aviary","name":"The Aviary","area":"Perth CBD","lat":-31.952232,"lng":115.857766,"rating":4.5,"address":"Level 1, 140 William St","hours":[[[660,1380]],[[660,1380]],[[660,1380]],[[660,1440]],[[660,1500]],[[660,1500]],[[660,1440]]],"pid":"ChIJk1isoNa6MioRDmqv9PMsjBA","city":"Perth"},{"id":"per-rooftop-at-qt","name":"Rooftop at QT","area":"Perth CBD","lat":-31.953867,"lng":115.860998,"rating":4.3,"address":"Level 18, 133 Murray St","hours":[[[900,1320]],[[900,1320]],[[900,1320]],[[900,1320]],[[840,1440]],[[840,1440]],[[900,1320]]],"pid":"ChIJcbycEp27MioRxcQldySJRxo","city":"Perth"},{"id":"per-terrarium","name":"Terrarium","area":"Perth CBD","lat":-31.955343,"lng":115.857298,"rating":4.8,"address":"99 St Georges Tce, entry via Howard St","hours":[[],[[960,1440]],[[960,1440]],[[960,1440]],[[840,1440]],[[960,1440]],[]],"pid":"ChIJb55yQwK7MioRf4832Vp-mEI","city":"Perth"},{"id":"per-stories","name":"Stories","area":"Perth CBD","lat":-31.950605,"lng":115.85844,"rating":4.6,"address":"Yagan Square, 420 Wellington St","hours":[[[690,1380]],[[690,1380]],[[690,1380]],[[690,1440]],[[690,1560]],[[690,1560]],[[690,1440]]],"pid":"ChIJfbWjzii7MioRfvwhO6oxJJw","city":"Perth"},{"id":"per-farra","name":"Farra","area":"Perth CBD","lat":-31.954581,"lng":115.862279,"rating":4.3,"address":"Hyde Perth, 37 Pier St","hours":[[],[[720,870],[1020,1320]],[[720,870],[1020,1320]],[[720,870],[1020,1320]],[[720,870],[1020,1320]],[[720,870],[1020,1320]],[[720,900]]],"pid":"ChIJER6tWgK7MioR8ax35-UkT-4","city":"Perth"},{"id":"per-aurora-rooftop","name":"Aurora Rooftop Bar","area":"Perth CBD","lat":-31.95135,"lng":115.851688,"rating":4.2,"address":"The Melbourne Hotel, 33 Milligan St","hours":[[],[],[],[],[[960,1350]],[],[]],"pid":"ChIJDRyeMP6lMioRa5sisY-akbU","city":"Perth"},{"id":"per-songbird","name":"Songbird Bar","area":"Elizabeth Quay","lat":-31.958441,"lng":115.858161,"rating":4.2,"address":"Ritz-Carlton, 1 Barrack St","hours":[[[960,1320]],[[960,1320]],[[960,1320]],[[960,1320]],[[900,1440]],[[900,1440]],[[960,1320]]],"pid":"ChIJ72Mb8q67MioRog8tSi0lfrM","city":"Perth"},{"id":"per-hq-bar","name":"HQ Bar + Kitchen","area":"Elizabeth Quay","lat":-31.956232,"lng":115.857605,"rating":4.4,"address":"Rooftop, 18 The Esplanade","hours":[[[960,1320]],[[960,1320]],[[720,1320]],[[720,1320]],[[720,1320]],[[900,1320]],[]],"pid":"ChIJwR-xwrK7MioRKnqPFYfN8t4","city":"Perth"},{"id":"per-18-knots","name":"18 Knots","area":"Elizabeth Quay","lat":-31.959377,"lng":115.859151,"rating":4.2,"address":"Level 18, DoubleTree, 1 Barrack Square","hours":[[[720,1320]],[[720,1320]],[[720,1320]],[[720,1320]],[[720,1440]],[[720,1440]],[[720,1320]]],"pid":"ChIJZbksfa27MioRLqfcShcRmnU","city":"Perth"},{"id":"per-henrys-rooftop","name":"Henry's Rooftop","area":"Elizabeth Quay","lat":-31.958383,"lng":115.85749,"rating":3.9,"address":"The Reveley, Ophir Walk","hours":[[[660,1290]],[[660,1290]],[[660,1290]],[[660,1380]],[[660,1380]],[[660,1380]],[[660,1380]]],"pid":"ChIJ-UpOKSq7MioRS2qPIs_Gp5Y","city":"Perth"},{"id":"per-the-point","name":"The Point Rooftop","area":"East Perth","lat":-31.964762,"lng":115.878151,"rating":4.1,"address":"306 Riverside Dr","hours":[[],[],[[720,1320]],[[720,1320]],[[720,1440]],[[720,1440]],[[720,1320]]],"pid":"ChIJmbdEARe7MioRuvDxtipqfnA","city":"Perth"},{"id":"per-mechanics-institute","name":"Mechanics Institute","area":"Northbridge","lat":-31.948779,"lng":115.859924,"rating":4.5,"address":"Rear, 222 William St","hours":[[],[[960,1440]],[[960,1440]],[[960,1440]],[[900,1440]],[[900,1440]],[[900,1440]]],"pid":"ChIJHTUdFdG6MioRzgZ0kEvQ0Cg","city":"Perth"},{"id":"per-the-standard","name":"The Standard","area":"Northbridge","lat":-31.949442,"lng":115.857785,"rating":4.4,"address":"28 Roe St","hours":[[],[],[[960,1320]],[[960,1320]],[[960,1440]],[[720,1440]],[[720,1320]]],"pid":"ChIJlweC4NO6MioRNUd3FfUnH0I","city":"Perth"},{"id":"per-tiki-as-fk","name":"Tiki as FK","area":"Northbridge","lat":-31.94889,"lng":115.8582,"rating":4.5,"address":"91a James St","hours":[[[1200,1560]],[[1200,1560]],[[1200,1560]],[[1200,1560]],[[960,1560]],[[960,1560]],[]],"pid":"ChIJx22KYdG6MioRbI_xXTDsvjg","city":"Perth"},{"id":"per-lucky-chans","name":"Lucky Chan's","area":"Northbridge","lat":-31.946536,"lng":115.860781,"rating":4,"address":"311 William St","hours":[[],[[1020,1320]],[[1020,1320]],[[1020,1320]],[[1020,1380]],[[720,960],[1020,1380]],[[1020,1320]]],"pid":"ChIJQ0lDsdG6MioR5pM9_8q5l-o","city":"Perth"},{"id":"per-the-beaufort","name":"The Beaufort","area":"Highgate","lat":-31.93793,"lng":115.86962,"rating":4.7,"address":"521-525 Beaufort St","hours":[[[690,1380]],[[690,1380]],[[690,1380]],[[690,1380]],[[690,1440]],[[660,1440]],[[660,1320]]],"pid":"ChIJnxW_5vG7MioRX91ky-rw3Wk","city":"Perth"},{"id":"per-national-hotel","name":"The National Hotel","area":"Fremantle","lat":-32.05442,"lng":115.746309,"rating":4.3,"address":"98 High St","hours":[[[660,1440]],[[660,1440]],[[660,1500]],[[660,1500]],[[660,1500]],[[660,1500]],[[660,1440]]],"pid":"ChIJ5w_brHqhMioRxl0ks9CO-J0","city":"Perth"},{"id":"per-the-arbor","name":"The Arbor","area":"Fremantle","lat":-32.056644,"lng":115.749906,"rating":4.1,"address":"Old Synagogue, 92 South Tce","hours":[[[690,1440]],[[690,1440]],[[690,1440]],[[690,1440]],[[690,1500]],[[690,1500]],[[690,1500]]],"pid":"ChIJ96NoM7ahMioRbXDUQ3BshFA","city":"Perth"},{"id":"per-sweetwater","name":"Sweetwater Rooftop Bar","area":"East Fremantle","lat":-32.041176,"lng":115.764175,"rating":4.5,"address":"Level 6, 1 Silas St","hours":[[],[[1020,1320]],[[1020,1320]],[[720,1320]],[[720,1380]],[[660,1440]],[[660,1320]]],"pid":"ChIJF972592jMioRs-L4IT4CTxI","city":"Perth"},{"id":"per-storehouse","name":"Storehouse","area":"Subiaco","lat":-31.946121,"lng":115.82283,"rating":4.3,"address":"Vibe Hotel, 9 Alvan St","hours":[[[390,600]],[[390,600],[720,900],[960,1260]],[[390,600],[720,900],[960,1260]],[[390,600],[720,900],[960,1260]],[[390,600],[720,870],[960,1320]],[[420,630],[960,1320]],[[420,630]]],"pid":"ChIJjzfJYR-lMioRleCYmvhp-tg","city":"Perth"},{"id":"per-the-claremont","name":"The Claremont Rooftop","area":"Claremont","lat":-31.981319,"lng":115.781127,"rating":4.3,"address":"1 Bay View Tce","hours":[[[660,1320]],[[660,1320]],[[660,1320]],[[660,1380]],[[660,1440]],[[660,1440]],[[660,1320]]],"pid":"ChIJ87HmJ0ikMioR1jGfwNNN6Lo","city":"Perth"},{"id":"per-oyster-bar","name":"Oyster Bar","area":"Elizabeth Quay","lat":-31.957225,"lng":115.856255,"rating":3.9,"address":"21 Geoffrey Bolton Ave","hours":[[[660,1410]],[[660,1410]],[[660,1410]],[[660,1410]],[[660,1410]],[[660,1410]],[[660,1410]]],"pid":"ChIJp9lobCq7MioRycw_yBgJ8DU","city":"Perth"},{"id":"per-hello-rooftop","name":"Hello Rooftop","area":"Northbridge","lat":-31.948656,"lng":115.859882,"rating":3.8,"address":"The Rechabite, 224 William St","hours":[[[1020,1440]],[[1020,1440]],[[1020,1440]],[[1020,1440]],[[720,1440]],[[690,1440]],[[690,1440]]],"pid":"ChIJj1ilOcC7MioRPZZLeZg-KL8","city":"Perth"},{"id":"per-bobs-bar","name":"Bob's Bar","area":"Perth CBD","lat":-31.95527,"lng":115.85698,"rating":5,"address":"Level 11, Print Hall, 125 St Georges Tce","hours":[[],[],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[]],"pid":"ChIJpZINGQC7MioRgF1J5vsa55M","city":"Perth"},{"id":"per-sixty-cats","name":"Sixty Cats","area":"Perth CBD","lat":-31.955634,"lng":115.858067,"rating":5,"address":"77 St Georges Tce","hours":[[[720,1080]],[[660,1260]],[[660,1260]],[[660,1290]],[[660,1320]],[[990,1290]],[]],"pid":"ChIJM6IL5Lm7MioRbGSYCebwqac","city":"Perth"},{"id":"per-baha","name":"BAHA","area":"Perth CBD","lat":-31.95193,"lng":115.852766,"rating":4,"address":"Level 1, 900 Hay St","hours":[[[690,1260]],[[690,1260]],[[690,1260]],[[690,1260]],[[690,1260]],[[690,1260]],[[690,1260]]],"pid":"ChIJDYHe6kC7MioR9Qu0_UIRsWM","city":"Perth"},{"id":"per-generous-squire","name":"The Generous Squire","area":"Perth CBD","lat":-31.951447,"lng":115.853879,"rating":4.4,"address":"397 Murray St","hours":[[[630,1320]],[[630,1320]],[[630,1320]],[[630,1320]],[[630,1440]],[[630,1440]],[[630,1320]]],"pid":"ChIJJ1nHotS6MioR0RrYzidYDbI","city":"Perth"},{"id":"per-mr-chapple","name":"Mr Chapple","area":"Fremantle","lat":-32.056813,"lng":115.749677,"rating":4,"address":"92 South Tce","hours":[[[480,1380]],[[480,1380]],[[480,1380]],[[480,1380]],[[480,1500]],[[480,1500]],[[480,1500]]],"pid":"ChIJUyq0G2GhMioR8-W2KpIUmP4","city":"Perth"},{"id":"gc-lulu","name":"Lulu Rooftop","area":"Surfers Paradise","lat":-28.001643,"lng":153.429416,"rating":4.5,"address":"Level 2, 4 Orchid Ave","hours":[[[720,1320]],[[720,1320]],[[720,1320]],[[720,1320]],[[720,1620]],[[720,1620]],[[720,1320]]],"pid":"ChIJqyVHxNAFkWsRSTLfaqNB8sc","city":"Gold Coast"},{"id":"gc-cali-beach","name":"Cali Beach","area":"Surfers Paradise","lat":-27.998562,"lng":153.429156,"rating":4.1,"address":"21a Elkhorn Ave","hours":[[],[],[],[],[[1020,1500]],[[720,1500]],[[720,1380]]],"pid":"ChIJ7WPf7J0FkWsR-lGwI_zJTLM","city":"Gold Coast"},{"id":"gc-island-rooftop","name":"The Island Rooftop","area":"Surfers Paradise","lat":-28.002898,"lng":153.428434,"rating":4.1,"address":"The Island, 3128 Surfers Paradise Blvd","hours":[[],[],[],[[960,1440]],[[660,1440]],[[660,1440]],[[660,1440]]],"pid":"ChIJYQs1pM8FkWsRlqPnPFh-3So","city":"Gold Coast"},{"id":"gc-beer-garden","name":"Surfers Paradise Beer Garden","area":"Surfers Paradise","lat":-28.002146,"lng":153.429393,"rating":4.7,"address":"Cnr Cavill & Orchid Ave","hours":[[[600,1740]],[[600,1740]],[[600,1740]],[[600,1740]],[[600,1740]],[[600,1740]],[[600,1740]]],"pid":"ChIJNZGbwXIFkWsR_Tf39ZhLhTY","city":"Gold Coast"},{"id":"gc-skyline-rooftop","name":"Skyline Rooftop","area":"Surfers Paradise","lat":-28.000617,"lng":153.42815,"rating":4.1,"address":"Waxy's, 3206 Surfers Paradise Blvd","hours":[[[600,1440]],[[600,1440]],[[600,1440]],[[600,1440]],[[600,1560]],[[600,1560]],[[600,1440]]],"pid":"ChIJUxMdj3IFkWsRwD8sxDVMP2c","city":"Gold Coast"},{"id":"gc-exhibitionist","name":"The Exhibitionist Bar","area":"Surfers Paradise","lat":-28.002498,"lng":153.416348,"rating":4.1,"address":"Level 5, HOTA, 135 Bundall Rd","hours":[[[600,960]],[[600,960]],[[600,1320]],[[600,1320]],[[600,1320]],[[600,1320]],[[600,960]]],"pid":"ChIJE3QPhV4FkWsRGy_qFEd_OU8","city":"Gold Coast"},{"id":"gc-nineteen","name":"Nineteen at The Star","area":"Broadbeach","lat":-28.031323,"lng":153.429215,"rating":4.4,"address":"Level 19, The Darling, 1 Casino Dr","hours":[[],[[1050,1320]],[[960,1320]],[[960,1320]],[[720,900],[960,1320]],[[960,1320]],[]],"pid":"ChIJAQAAE_sEkWsRMrkPnAMI7LI","city":"Gold Coast"},{"id":"gc-charlies-rooftop","name":"Charlie's Rooftop","area":"Mermaid Beach","lat":-28.045117,"lng":153.434806,"rating":4.9,"address":"2460 Gold Coast Hwy","hours":[[[1020,1320]],[],[],[[1020,1320]],[[900,1320]],[[720,1320]],[[720,1320]]],"pid":"ChIJsT0PpgEFkWsR2nB87TdUfrc","city":"Gold Coast"},{"id":"gc-juju","name":"JuJu","area":"Mermaid Beach","lat":-28.058505,"lng":153.438705,"rating":4.2,"address":"2235 Gold Coast Hwy","hours":[[],[],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]]],"pid":"ChIJO6sDzUUFkWsRCcoEdiBcE1A","city":"Gold Coast"},{"id":"gc-sueno","name":"Sueño Rooftop","area":"Mermaid Beach","lat":-28.059432,"lng":153.438553,"rating":4.5,"address":"2217 Gold Coast Hwy","hours":[[],[],[],[[960,1380]],[[720,1380]],[[720,1380]],[[720,1380]]],"pid":"ChIJYaBW7vUFkWsRXth6WaBMsME","city":"Gold Coast"},{"id":"gc-justin-lane","name":"Justin Lane","area":"Burleigh Heads","lat":-28.08876,"lng":153.451592,"rating":4.1,"address":"1708-1710 Gold Coast Hwy","hours":[[[1020,1260]],[[1020,1260]],[[720,1260]],[[720,1260]],[[720,1440]],[[720,1440]],[[720,1260]]],"pid":"ChIJa7WfupADkWsRjbtHpFFyHUU","city":"Gold Coast"},{"id":"gc-burleigh-pavilion","name":"Burleigh Pavilion","area":"Burleigh Heads","lat":-28.089596,"lng":153.454887,"rating":3.7,"address":"3a/43 Goodwin Tce","hours":[[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]]],"pid":"ChIJfwJxNNoDkWsRSyCoRDudOSM","city":"Gold Coast"},{"id":"gc-the-collective","name":"The Collective","area":"Palm Beach","lat":-28.12122,"lng":153.472541,"rating":4.4,"address":"1128 Gold Coast Hwy","hours":[[[720,1230]],[[720,1230]],[[720,1230]],[[720,1230]],[[720,1290]],[[720,1290]],[[720,1230]]],"pid":"ChIJ_fGgzjICkWsRSPIuitWqiEw","city":"Gold Coast"},{"id":"gc-frida-sol","name":"Frida Sol","area":"Palm Beach","lat":-28.118809,"lng":153.471048,"rating":4.4,"address":"1176 Gold Coast Hwy","hours":[[[1020,1260]],[[1020,1290]],[[720,1290]],[[720,1290]],[[720,1320]],[[720,1320]],[[720,1230]]],"pid":"ChIJYXxW0A0DkWsRlUQVJkepUv0","city":"Gold Coast"},{"id":"gc-aviary-rooftop","name":"Aviary Rooftop Bar","area":"Southport","lat":-27.955926,"lng":153.384247,"rating":4.2,"address":"Mantra at Sharks, 5 Melia Ct","hours":[[],[],[[960,1260]],[[960,1260]],[[960,1380]],[[960,1380]],[[960,1260]]],"pid":"ChIJg8ENFLwRkWsR4ECnrhwxxxE","city":"Gold Coast"},{"id":"gc-mr-pps","name":"Mr PP's Rooftop","area":"Southport","lat":-27.967658,"lng":153.413431,"rating":4.6,"address":"43 Nerang St","hours":[[[720,1320]],[[720,1320]],[[720,1320]],[[720,1320]],[[720,1380]],[[720,1380]],[[720,1320]]],"pid":"ChIJwWWanfIPkWsR9HalsvSh1d4","city":"Gold Coast"}],VENUES_V=1794398054;
let venuesV=VENUES_V;
(()=>{try{const c=JSON.parse(localStorage.getItem("rr-venues")||"null");if(c&&c.v>VENUES_V&&Array.isArray(c.bars)&&c.bars.length>20){VENUES.splice(0,VENUES.length,...c.bars);venuesV=c.v}}catch(e){}})();
function refreshVenues(){
  const url=/github\.io$|rooftoproulette\.com/.test(location.hostname)?"venues.json":"https://chriskova.github.io/rooftoproulette/venues.json";
  fetch(url+"?t="+Date.now(),{cache:"no-store"}).then(r=>r.ok?r.json():null).then(d=>{
    if(!d||!(d.v>venuesV)||!Array.isArray(d.bars)||d.bars.length<20||!d.bars.every(v=>v&&v.id&&v.name&&isFinite(v.lat)&&isFinite(v.lng)))return;
    VENUES.splice(0,VENUES.length,...d.bars);venuesV=d.v;try{localStorage.setItem("rr-venues",JSON.stringify(d))}catch(e){}
    if(!spinning&&(S.route==="bars"||S.route==="home"))render()}).catch(()=>{})}
/* Places, grouped into regions. Each bar belongs to one area (from its suburb).
   Areas with enough rooftops close together can be a game's starting point; the rest are still on the map,
   in their region, and in Just the one. */
const REGIONS=[
 {name:"Surfers Paradise",city:"Gold Coast",d:"Orchid Ave, Cavill Ave, Bundall"},
 {name:"Broadbeach",city:"Gold Coast",d:"Broadbeach, Mermaid Beach"},
 {name:"Burleigh",city:"Gold Coast",d:"Burleigh Heads, Palm Beach"},
 {name:"Southport",city:"Gold Coast",d:"Nerang St, Main Beach"},
 {name:"City",city:"Perth",d:"Perth CBD, Elizabeth Quay, East Perth"},
 {name:"Northbridge",city:"Perth",d:"Northbridge, Highgate"},
 {name:"Fremantle",city:"Perth",d:"Fremantle, East Fremantle"},
 {name:"Further out",city:"Perth",d:"Subiaco, Claremont"},
 {name:"CBD",city:"Melbourne",d:"Melbourne CBD, Docklands"},
 {name:"North",city:"Melbourne",d:"Fitzroy, Collingwood, Carlton, Abbotsford, Brunswick, Thornbury"},
 {name:"Richmond",city:"Melbourne",d:"Swan St, Church St, Bridge Rd"},
 {name:"South",city:"Melbourne",d:"South Yarra, St Kilda, South Melbourne"},
 {name:"Further out",city:"Melbourne",d:"Armadale, Kew, Hawthorn East, Oakleigh, Ringwood, Williamstown"},
 {name:"CBD",city:"Brisbane",d:"Queen St, Edward St, Howard Smith Wharves, Petrie Terrace"},
 {name:"The Valley",city:"Brisbane",d:"Fortitude Valley, New Farm"},
 {name:"South Side",city:"Brisbane",d:"South Brisbane, South Bank, Kangaroo Point, Woolloongabba"},
 {name:"Further out",city:"Brisbane",d:"Bulimba, Everton Park"},
 {name:"City",d:"CBD, The Rocks, Barangaroo, Pyrmont"},
 {name:"East",d:"Surry Hills, Darlinghurst, Potts Point, Paddington, Double Bay, Watsons Bay, Coogee"},
 {name:"Inner West",d:"Newtown, Erskineville, Glebe, Chippendale, Marrickville"},
 {name:"North",d:"North Sydney, Neutral Bay, Mosman, Willoughby, Manly"}];
const AREAS=[
 {name:"Surfers Paradise",city:"Gold Coast",reg:"Surfers Paradise",d:"Orchid Ave, Cavill Ave, Surfers Paradise Blvd",lat:-28.0015,lng:153.4280,src:["Surfers Paradise"]},
 {name:"Broadbeach",city:"Gold Coast",reg:"Broadbeach",d:"The Star, Casino Dr",lat:-28.0313,lng:153.4292,src:["Broadbeach"]},
 {name:"Mermaid Beach",city:"Gold Coast",reg:"Broadbeach",d:"Gold Coast Hwy, Nobby Beach",lat:-28.0540,lng:153.4375,src:["Mermaid Beach"]},
 {name:"Burleigh Heads",city:"Gold Coast",reg:"Burleigh",d:"Gold Coast Hwy, Goodwin Tce",lat:-28.0890,lng:153.4530,src:["Burleigh Heads"]},
 {name:"Palm Beach",city:"Gold Coast",reg:"Burleigh",d:"Gold Coast Hwy",lat:-28.1200,lng:153.4718,src:["Palm Beach"]},
 {name:"Southport",city:"Gold Coast",reg:"Southport",d:"Nerang St, Main Beach",lat:-27.9650,lng:153.4050,src:["Southport"]},
 {name:"Perth CBD",city:"Perth",reg:"City",d:"Murray St, William St, St Georges Tce",lat:-31.9530,lng:115.8575,src:["Perth CBD"]},
 {name:"Elizabeth Quay",city:"Perth",reg:"City",d:"Barrack St, The Esplanade",lat:-31.9580,lng:115.8580,src:["Elizabeth Quay"]},
 {name:"East Perth",city:"Perth",reg:"City",d:"Riverside Dr",lat:-31.9648,lng:115.8782,src:["East Perth"]},
 {name:"Northbridge",city:"Perth",reg:"Northbridge",d:"William St, James St, Roe St",lat:-31.9483,lng:115.8592,src:["Northbridge"]},
 {name:"Highgate",city:"Perth",reg:"Northbridge",d:"Beaufort St",lat:-31.9379,lng:115.8696,src:["Highgate"]},
 {name:"Fremantle",city:"Perth",reg:"Fremantle",d:"High St, South Tce",lat:-32.0555,lng:115.7481,src:["Fremantle"]},
 {name:"East Fremantle",city:"Perth",reg:"Fremantle",d:"Silas St",lat:-32.0412,lng:115.7642,src:["East Fremantle"]},
 {name:"Subiaco",city:"Perth",reg:"Further out",d:"Alvan St",lat:-31.9461,lng:115.8228,src:["Subiaco"]},
 {name:"Claremont",city:"Perth",reg:"Further out",d:"Bay View Tce",lat:-31.9813,lng:115.7811,src:["Claremont"]},
 {name:"Melbourne CBD",city:"Melbourne",reg:"CBD",d:"Swanston St, Bourke St, Flinders Ln, Docklands",lat:-37.8136,lng:144.9650,src:["Melbourne CBD","Docklands"]},
 {name:"Fitzroy & Collingwood",city:"Melbourne",reg:"North",d:"Brunswick St, Johnston St, Smith St",lat:-37.7990,lng:144.9840,src:["Fitzroy","Collingwood","Abbotsford"]},
 {name:"Carlton",city:"Melbourne",reg:"North",d:"Lygon St, Grattan St",lat:-37.7990,lng:144.9660,src:["Carlton"]},
 {name:"Brunswick",city:"Melbourne",reg:"North",d:"Sydney Rd",lat:-37.7734,lng:144.9609,src:["Brunswick"]},
 {name:"Thornbury",city:"Melbourne",reg:"North",d:"High St",lat:-37.7527,lng:145.0014,src:["Thornbury"]},
 {name:"Richmond",city:"Melbourne",reg:"Richmond",d:"Swan St, Church St, Bridge Rd",lat:-37.8250,lng:144.9960,src:["Richmond"]},
 {name:"South Yarra",city:"Melbourne",reg:"South",d:"Chapel St, Toorak Rd, Commercial Rd",lat:-37.8410,lng:144.9910,src:["South Yarra"]},
 {name:"St Kilda",city:"Melbourne",reg:"South",d:"Fitzroy St, Carlisle St, the foreshore",lat:-37.8655,lng:144.9790,src:["St Kilda"]},
 {name:"South Melbourne",city:"Melbourne",reg:"South",d:"Clarendon St, York St",lat:-37.8310,lng:144.9600,src:["South Melbourne"]},
 {name:"Armadale",city:"Melbourne",reg:"Further out",d:"Wattletree Rd",lat:-37.8621,lng:145.0278,src:["Armadale"]},
 {name:"Kew",city:"Melbourne",reg:"Further out",d:"High St",lat:-37.8067,lng:145.0304,src:["Kew"]},
 {name:"Hawthorn East",city:"Melbourne",reg:"Further out",d:"Camberwell Rd",lat:-37.8307,lng:145.0558,src:["Hawthorn East"]},
 {name:"Oakleigh",city:"Melbourne",reg:"Further out",d:"Portman St",lat:-37.8999,lng:145.0894,src:["Oakleigh"]},
 {name:"Ringwood",city:"Melbourne",reg:"Further out",d:"Eastland",lat:-37.8143,lng:145.2284,src:["Ringwood"]},
 {name:"Williamstown",city:"Melbourne",reg:"Further out",d:"Ferguson St",lat:-37.8590,lng:144.9003,src:["Williamstown"]},
 {name:"Brisbane CBD",city:"Brisbane",reg:"CBD",d:"Queen St, Edward St, Petrie Terrace",lat:-27.4690,lng:153.0245,src:["Brisbane City","Petrie Terrace"]},
 {name:"Fortitude Valley",city:"Brisbane",reg:"The Valley",d:"Ann St, Brunswick St, Constance St",lat:-27.4572,lng:153.0350,src:["Fortitude Valley"]},
 {name:"New Farm",city:"Brisbane",reg:"The Valley",d:"Merthyr Rd, Brunswick St",lat:-27.4671,lng:153.0458,src:["New Farm"]},
 {name:"South Brisbane",city:"Brisbane",reg:"South Side",d:"South Bank, Melbourne St",lat:-27.4790,lng:153.0205,src:["South Brisbane","South Bank"]},
 {name:"Kangaroo Point",city:"Brisbane",reg:"South Side",d:"Kangaroo Point, Woolloongabba",lat:-27.4800,lng:153.0350,src:["Kangaroo Point","Woolloongabba"]},
 {name:"Bulimba",city:"Brisbane",reg:"Further out",d:"Oxford St",lat:-27.4509,lng:153.0540,src:["Bulimba"]},
 {name:"Everton Park",city:"Brisbane",reg:"Further out",d:"Stafford Rd",lat:-27.4068,lng:152.9915,src:["Everton Park"]},
 {name:"The City",reg:"City",d:"CBD, The Rocks, Barangaroo, Pyrmont",lat:-33.8668,lng:151.2068,src:["Sydney CBD","The Rocks","Barangaroo","Millers Point","Pyrmont"]},
 {name:"Surry Hills & Darlinghurst",reg:"East",d:"Crown St, Oxford St",lat:-33.8812,lng:151.2138,src:["Surry Hills","Darlinghurst","Waterloo"]},
 {name:"Potts Point",reg:"East",d:"Kings Cross, Woolloomooloo",lat:-33.8722,lng:151.2222,src:["Potts Point","Woolloomooloo"]},
 {name:"Paddington",reg:"East",d:"Paddington, Woollahra",lat:-33.8850,lng:151.2290,src:["Paddington","Woollahra"]},
 {name:"Double Bay",reg:"East",d:"Eastern suburbs",lat:-33.8770,lng:151.2420,src:["Double Bay"]},
 {name:"Watsons Bay",reg:"East",d:"South Head",lat:-33.8430,lng:151.2823,src:["Watsons Bay"]},
 {name:"Coogee",reg:"East",d:"Eastern beaches",lat:-33.9205,lng:151.2560,src:["Coogee"]},
 {name:"Newtown",reg:"Inner West",d:"King St, Erskineville",lat:-33.8960,lng:151.1810,src:["Newtown","Erskineville"]},
 {name:"Glebe & Chippendale",reg:"Inner West",d:"Glebe Point Rd, Broadway",lat:-33.8820,lng:151.1930,src:["Glebe","Chippendale"]},
 {name:"Marrickville",reg:"Inner West",d:"Sydenham Rd",lat:-33.9103,lng:151.1626,src:["Marrickville"]},
 {name:"North Sydney",reg:"North",d:"Miller St, McMahons Point",lat:-33.8400,lng:151.2065,src:["North Sydney","McMahons Point"]},
 {name:"Neutral Bay & Mosman",reg:"North",d:"Military Rd",lat:-33.8300,lng:151.2320,src:["Neutral Bay","Mosman"]},
 {name:"Willoughby",reg:"North",d:"Willoughby Rd",lat:-33.8073,lng:151.1990,src:["Willoughby"]},
 {name:"Manly",reg:"North",d:"Northern beaches",lat:-33.7975,lng:151.2870,src:["Manly"]}
];
const areaCity=a=>a.city||"Sydney",REG=()=>REGIONS.filter(r=>(r.city||"Sydney")===S.city);
const areaOf=v=>{const c=v.city||"Sydney",L=AREAS.filter(a=>areaCity(a)===c);return L.find(a=>a.src.includes(v.area))||L.slice().sort((a,b)=>dist(v,a)-dist(v,b))[0]};
const RADII=[0.5,1,1.5,2],LENS=[60,120],SKIPS=3;
const CHECKIN_M=75,LEAVE_M=150,DWELL_MIN=3,SOON=30,FINAL=30;
const KEY="rr-app-v3",HKEY="rr-history-v2";
const AN=window.RR_CONFIG,APPV="v70-9";
const SITE="https://chriskova.github.io/rooftoproulette/",SUPPORT="hello@rooftoproulette.com",IG="https://www.instagram.com/rooftoproulette/",TT="https://www.tiktok.com/@rooftoproulette",PLAY="https://play.google.com/store/apps/details?id=com.rooftoproulette.app";
/* Usage and crash reports, anonymous: a random install ID, the app version and what happened (e.g. "crawl ended, 4 bars").
   Never names, coordinates, photos or clips. Off in test mode, and off entirely until a PostHog key is set in data/config.json. */
const anId=(()=>{try{let i=localStorage.getItem("rr-anon");if(!i){i=(crypto.randomUUID?crypto.randomUUID():Date.now().toString(36)+Math.random().toString(36).slice(2));localStorage.setItem("rr-anon",i)}return i}catch(e){return "na"}})();
const anPlat=()=>{try{return window.Capacitor&&Capacitor.isNativePlatform&&Capacitor.isNativePlatform()?Capacitor.getPlatform():"web"}catch(e){return "web"}};
// A session: a new one after 30 minutes without activity (UUIDv7, as PostHog expects), so Web analytics can count visits.
const uuid7=()=>{const t=Date.now(),h=t.toString(16).padStart(12,"0"),r=[...crypto.getRandomValues(new Uint8Array(10))].map(b=>b.toString(16).padStart(2,"0")).join("");
  return `${h.slice(0,8)}-${h.slice(8,12)}-7${r.slice(0,3)}-${((parseInt(r.slice(3,4),16)&3)|8).toString(16)}${r.slice(4,7)}-${r.slice(7,19)}`};
const anSess=()=>{try{const now=Date.now();let o=JSON.parse(localStorage.getItem("rr-sess")||"null");if(!o||now-o.t>30*60000)o={id:uuid7(),t:now};o.t=now;localStorage.setItem("rr-sess",JSON.stringify(o));return o.id}catch(e){return null}};
const anDev=(()=>{const u=navigator.userAgent||"";
  const os=/Android/i.test(u)?"Android":/iPhone|iPad|iPod/i.test(u)?"iOS":/Mac OS X/i.test(u)?"Mac OS X":/Windows/i.test(u)?"Windows":/Linux/i.test(u)?"Linux":"Other";
  const br=/EdgA?\//.test(u)?"Microsoft Edge":/SamsungBrowser/.test(u)?"Samsung Internet":/CriOS|Chrome\//.test(u)?"Chrome":/FxiOS|Firefox\//.test(u)?"Firefox":/Safari\//.test(u)?"Safari":"Other";
  let ref="";try{ref=document.referrer||""}catch(e){}
  return {$os:os,$browser:br,$device_type:/Mobi|Android|iPhone/i.test(u)?"Mobile":/iPad|Tablet/i.test(u)?"Tablet":"Desktop",$raw_user_agent:u.slice(0,400),
    $referrer:ref||"$direct",$referring_domain:ref?(()=>{try{return new URL(ref).host}catch(e){return "$direct"}})():"$direct",
    $screen_width:screen.width,$screen_height:screen.height}})();
// what the app is running in: the store/test app (Capacitor), an installed web app, or a browser tab
const anShell=()=>{try{if(window.Capacitor&&Capacitor.isNativePlatform&&Capacitor.isNativePlatform())return "app";if(window.androidBridge||window.Capacitor)return "app-nobridge";return matchMedia("(display-mode: standalone)").matches?"home-screen":"browser"}catch(e){return "?"}};
function track(event,props){try{if(!AN.posthogKey||(typeof S!=="undefined"&&S&&(S.test||S.anOff)))return;
  const base={$geoip_disable:true,app_version:APPV,platform:anPlat(),shell:anShell(),$lib:"web",$session_id:anSess(),$host:location.host||"app",$current_url:location.href.split("#")[0],$pathname:location.pathname,$viewport_width:innerWidth,$viewport_height:innerHeight};
  const body=JSON.stringify({api_key:AN.posthogKey,event,distinct_id:anId,timestamp:new Date().toISOString(),properties:Object.assign(base,anDev,props||{})});
  fetch(AN.posthogHost.replace(/\/$/,"")+"/i/v0/e/",{method:"POST",headers:{"Content-Type":"application/json"},body,keepalive:true}).catch(()=>{})}catch(e){}}
let anErrs=0;const anErr=(type,msg,stack)=>{if(anErrs++>=10)return;track("$exception",{$exception_type:type||"Error",$exception_message:String(msg||"").slice(0,500),$exception_stack_trace_raw:String(stack||"").slice(0,3000),$exception_list:[{type:type||"Error",value:String(msg||"").slice(0,500),mechanism:{handled:false}}]})};
addEventListener("error",e=>anErr(e.error&&e.error.name,e.message,e.error&&e.error.stack));
addEventListener("unhandledrejection",e=>{const r=e.reason||{};anErr(r.name||"UnhandledRejection",r.message||String(r),r.stack)});
const $=id=>document.getElementById(id);
// Long-press (iPhone doesn't send a context menu on hold). The finger lifting afterwards isn't a tap:
// one shared guard swallows it wherever it lands, since a sheet's backdrop would close on it.
let lpAt=0;
addEventListener("click",e=>{if(lpAt&&Date.now()-lpAt<1500){e.stopImmediatePropagation();e.preventDefault();lpAt=0}},true);
function longPress(el,fn,ms){let t=null,x0=0,y0=0;ms=ms||480;
  const clear=()=>{clearTimeout(t);t=null};
  el.addEventListener("pointerdown",e=>{x0=e.clientX;y0=e.clientY;clear();t=setTimeout(()=>{t=null;lpAt=Date.now();try{navigator.vibrate&&S.vib!==false&&navigator.vibrate(15)}catch(_){}fn()},ms)});
  el.addEventListener("pointermove",e=>{if(t&&Math.hypot(e.clientX-x0,e.clientY-y0)>10)clear()});
  ["pointerup","pointercancel","pointerleave"].forEach(k=>el.addEventListener(k,clear));
  el.addEventListener("contextmenu",e=>e.preventDefault())}
const byId=id=>VENUES.find(v=>v.id===id);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

/* ---------- icons ---------- */
const I={
 dice:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v6M12 15v6M3 12h6M15 12h6"/></svg>',
 pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
 trophy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/></svg>',
 back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
 x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
 more:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>',
 nav:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l18-8-8 18-2-8-8-2z"/></svg>',
 go:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h12M12 6l6 6-6 6"/><path d="M20 5v14"/></svg>',
 clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
 target:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 1v3M12 20v3M1 12h3M20 12h3"/></svg>',
 city:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 21h18M5 21V8l5-3v16M10 21V3l6 3v15M16 21v-9l3 2v7"/></svg>',
 ring:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9" stroke-dasharray="3 3"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>',
 bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>',
 hour2:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5h5"/></svg>',
 move:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
 flag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V4M5 4h11l-2 4 2 4H5"/></svg>',
 help:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17.5v.01"/></svg>',
 bulb:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 .9 1.6V16h5.2v-.5c0-.6.4-1.2.9-1.6A6 6 0 0 0 12 3z"/></svg>',
 glass:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h14l-7 8z"/><path d="M12 12v8M8 20h8"/></svg>',
 camera:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>',
 sound:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M17 9a4 4 0 0 1 0 6"/></svg>',
 sparkle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></svg>'
};
I.plus='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>';
I.search='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>';
I.pair='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8.5" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M3 19c.6-3 2.8-5 5.5-5s4.9 2 5.5 5M13.6 14.3c.7-.2 1.5-.3 2.4-.3 2.7 0 4.9 2 5.5 5"/></svg>';
I.group='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7.5" r="2.8"/><circle cx="5" cy="10" r="2.2"/><circle cx="19" cy="10" r="2.2"/><path d="M7 19.5c.5-3 2.6-5 5-5s4.5 2 5 5"/><path d="M1.8 18c.3-2 1.6-3.4 3.4-3.6M22.2 18c-.3-2-1.6-3.4-3.4-3.6"/></svg>';
I.car='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 11l1.7-4.4A2 2 0 0 1 8.6 5.3h6.8a2 2 0 0 1 1.9 1.3L19 11"/><rect x="3" y="11" width="18" height="6.5" rx="2"/><path d="M5.5 17.5v2M18.5 17.5v2"/><circle cx="7.5" cy="14.2" r="1" fill="currentColor"/><circle cx="16.5" cy="14.2" r="1" fill="currentColor"/></svg>';
I.walk='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4" r="2"/><path d="M9 21l2-6 3 3v3M7 12l3-4 4 1 2 4 2 1M10 8l-1 5"/></svg>';
I.share='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3M7 8l5-5 5 5"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/></svg>';
I.redo='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/></svg>';
I.check='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.8 2.8L16 9.8"/></svg>';
I.reel='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M9 4v16M15 4v16"/><path d="M5 12h2M11 12h2M17 12h2" stroke-width="3"/></svg>';
I.dice2='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><rect x="2.5" y="8.5" width="11" height="11" rx="2.5" transform="rotate(-12 8 14)"/><rect x="11" y="3.5" width="10.5" height="10.5" rx="2.5" transform="rotate(14 16.25 8.75)"/><circle cx="5.6" cy="12.6" r="1" fill="currentColor"/><circle cx="8.3" cy="14.6" r="1" fill="currentColor"/><circle cx="10.9" cy="16.4" r="1" fill="currentColor"/><circle cx="14.4" cy="6.6" r="1" fill="currentColor"/><circle cx="18" cy="10.6" r="1" fill="currentColor"/></svg>';
// Play: the pin with two spin arrows around it. Rooftops: the cocktail glass used across the app.
const tabIcons={play:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(12 12.3) scale(.64) translate(-12 -11.75)"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></g><path d="M6.95 3.25L7.42 2.95L7.90 2.67L8.41 2.42L8.92 2.20L9.45 2.00L10.00 1.84L10.55 1.70L11.12 1.59L11.69 1.52L12.26 1.47L12.84 1.46L13.42 1.48L14.01 1.53L14.59 1.62L15.17 1.73L15.74 1.88L16.31 2.06L16.86 2.28L17.41 2.52L17.94 2.80L18.47 3.10L18.97 3.44L19.46 3.80L19.93 4.19L20.38 4.61L20.80 5.05L21.21 5.52L21.58 6.01L19.38 7.39L19.15 6.97L18.90 6.56L18.62 6.16L18.32 5.77L18.00 5.41L17.65 5.05L17.29 4.72L16.91 4.40L16.50 4.11L16.08 3.84L15.65 3.58L15.19 3.36L14.73 3.15L14.25 2.98L13.76 2.82L13.26 2.70L12.75 2.60L12.24 2.53L11.72 2.49L11.19 2.48L10.66 2.49L10.14 2.54L9.61 2.61L9.09 2.72L8.57 2.85L8.05 3.01L7.55 3.21L7.05 3.43Z" fill="currentColor" stroke="none"/><path d="M22.28 9.58L18.25 7.49L22.17 5.04Z" fill="currentColor" stroke="none" stroke-linejoin="round"/><path d="M17.05 20.75L16.58 21.05L16.10 21.33L15.59 21.58L15.08 21.80L14.55 22.00L14.00 22.16L13.45 22.30L12.88 22.41L12.31 22.48L11.74 22.53L11.16 22.54L10.58 22.52L9.99 22.47L9.41 22.38L8.83 22.27L8.26 22.12L7.69 21.94L7.14 21.72L6.59 21.48L6.06 21.20L5.53 20.90L5.03 20.56L4.54 20.20L4.07 19.81L3.62 19.39L3.20 18.95L2.79 18.48L2.42 17.99L4.62 16.61L4.85 17.03L5.10 17.44L5.38 17.84L5.68 18.23L6.00 18.59L6.35 18.95L6.71 19.28L7.09 19.60L7.50 19.89L7.92 20.16L8.35 20.42L8.81 20.64L9.27 20.85L9.75 21.02L10.24 21.18L10.74 21.30L11.25 21.40L11.76 21.47L12.28 21.51L12.81 21.52L13.34 21.51L13.86 21.46L14.39 21.39L14.91 21.28L15.43 21.15L15.95 20.99L16.45 20.79L16.95 20.57Z" fill="currentColor" stroke="none"/><path d="M1.72 14.42L5.75 16.51L1.83 18.96Z" fill="currentColor" stroke="none" stroke-linejoin="round"/></svg>',bars:I.glass,hist:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3h14v18l-2.33-1.5L14.33 21 12 19.5 9.67 21 7.33 19.5 5 21z"/><path d="M9 8h6M9 12h6M9 16h3"/></svg>'};

/* ---------- state ---------- */
let S={route:null,onboarded:false,intro:0,wiz:null,test:false,ff:0,fake:null,sound:true,game:null,lastEnd:null,tips:{},barsFilter:"all",last:{radius:1.5,len:60,newOnly:false},been:{},nfu:{},reports:[]};
try{const s=JSON.parse(localStorage.getItem(KEY)||"null");if(s)S=Object.assign(S,s)}catch(e){}
S.been=S.been||{};S.nfu=S.nfu||{};S.want=S.want||{};S.fav=S.fav||{};S.city=S.city||"Sydney";S.reports=S.reports||[];
if(/[?&]test\b/.test(location.search))S.test=true;
// Real games and test games keep separate histories. H is whichever one matches the current mode.
const TKEY="rr-history-test";
const readH=k=>{try{return JSON.parse(localStorage.getItem(k)||"[]")||[]}catch(e){return []}};
const writeH=(k,L)=>{try{localStorage.setItem(k,JSON.stringify(L))}catch(e){for(let i=L.length-1;i>=0;i--){if(L[i].photo){L[i].photo=null;try{localStorage.setItem(k,JSON.stringify(L));return}catch(_){}}}}};
// One-off: before the split, test games went into the real history. A test game is one marked as test, dated in the
// future (time travel), or whose start point is exactly the first bar (test mode puts it there; real GPS never lands on it).
(()=>{try{if(localStorage.getItem("rr-hsplit"))return;const all=readH(HKEY),real=[],test=[];
  all.forEach(r=>{const a=(r.visits||[]).find(v=>v.arrivedAt!=null),b=a&&byId(a.id),sp=r.startPos;
    const atBar=b&&sp&&Math.abs(sp.lat-b.lat)<1e-5&&Math.abs(sp.lng-b.lng)<1e-5;
    if(r.test||r.startedAt>Date.now()+3600000||atBar){r.test=true;test.push(r)}else{r.test=false;real.push(r)}});
  if(test.length){writeH(TKEY,test.concat(readH(TKEY)).sort((x,y)=>y.startedAt-x.startedAt));writeH(HKEY,real)}
  localStorage.setItem("rr-hsplit","1")}catch(e){}})();
let hTest=!!S.test,H=readH(hTest?TKEY:HKEY);
function syncH(){if(!!S.test!==hTest){hTest=!!S.test;H=readH(hTest?TKEY:HKEY)}}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
const saveH=()=>writeH(hTest?TKEY:HKEY,H);
// a game goes into the history of the mode it was played in
function pushH(rec){if(!!rec.test===hTest){H.unshift(rec);saveH()}else{const k=rec.test?TKEY:HKEY,L=readH(k);L.unshift(rec);writeH(k,L)}}
// Time travel only ever applies in test mode, so a real game always runs on the phone's clock.
const DEMO=()=>!!(S.game&&S.game.demo);
// Time travel applies in test mode, and in the demo (its "skip 3 minutes"); a real game always runs on the phone's clock.
const now=()=>Date.now()+(S.test?(S.ff||0):0)+(DEMO()?(S.game.dff||0):0);
// a time from a game as the phone's clock showed it (test games remember how far time travel had moved the clock)
const rt=(r,t)=>t-((r&&r.ff0)||0);
const HRT='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>';
const HRTF='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>';
// a heart only for bars you've actually been to (in a game, ticked as Been, or arrived at in this one)
const beenTo=id=>!!(collectedMap()[id]||S.been[id]||(S.game&&S.game.visits.some(v=>v.id===id&&v.arrivedAt!=null)));
function toggleFav(id){if(S.fav[id])delete S.fav[id];else{S.fav[id]=Date.now();delete S.want[id];delete S.nfu[id];buzz(15)}save()}
const isEve=ts=>{const m=sydAt(ts).min;return m>=17*60||m<4*60};
const dayWord=ts=>isEve(ts)?"tonight":"today";

/* ---------- time + hours ---------- */
const TZ={Sydney:"Australia/Sydney",Brisbane:"Australia/Brisbane",Melbourne:"Australia/Melbourne",Perth:"Australia/Perth","Gold Coast":"Australia/Brisbane"};
function sydAt(ts,tz){
  const p=new Intl.DateTimeFormat("en-AU",{timeZone:tz||"Australia/Sydney",weekday:"short",hour:"numeric",minute:"numeric",hour12:false}).formatToParts(new Date(ts));
  const g=t=>p.find(x=>x.type===t).value;let h=+g("hour");if(h===24)h=0;
  return {day:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].indexOf(g("weekday")),min:h*60+ +g("minute")};
}
function openState(v,ts){
  if(v.tempClosed)return {open:false,opens:null,temp:true};
  const {day,min}=sydAt(ts,TZ[v.city||"Sydney"]),prev=(day+6)%7;
  for(const [o,c] of v.hours[prev]) if(c>1440&&min<c-1440) return {open:true,until:c-1440-min,closeAt:c-1440};
  let opens=null;
  for(const [o,c] of v.hours[day]){if(min>=o&&min<c) return {open:true,until:c-min,closeAt:c%1440};if(o>min&&(opens===null||o<opens))opens=o}
  return {open:false,opens};
}
const openOK=(v,ts)=>{const s=openState(v,ts);return s.open&&s.until>SOON};
function clock12(m){m=((m%1440)+1440)%1440;let h=Math.floor(m/60),mm=m%60;const ap=h>=12?"pm":"am";h=h%12||12;return h+(mm?":"+String(mm).padStart(2,"0"):"")+ap}
const mmss=ms=>{ms=Math.max(0,ms);const s=Math.floor(ms/1000);return Math.floor(s/60)+":"+String(s%60).padStart(2,"0")};
const hmm=ms=>{if(ms<60000)return "<1 min";const m=Math.round(ms/60000);return m>=60?Math.floor(m/60)+"h "+String(m%60).padStart(2,"0")+"m":m+" min"};
const dateTxt=ts=>new Date(ts).toLocaleDateString("en-AU",{weekday:"short",day:"numeric",month:"short"});

/* ---------- geo ---------- */
function dist(a,b){const R=6371000,t=x=>x*Math.PI/180;return 2*R*Math.asin(Math.sqrt(Math.sin(t(b.lat-a.lat)/2)**2+Math.cos(t(a.lat))*Math.cos(t(b.lat))*Math.sin(t(b.lng-a.lng)/2)**2))}
const km=m=>(m/1000).toFixed(m<10000?1:0)+" km";
const mOrKm=m=>m<1000?Math.round(m/10)*10+" m":km(m);
const GAME_AREAS=city=>AREAS.filter(a=>areaCity(a)===(city||S.city)&&VENUES.some(v=>areaOf(v)===a&&!FAR.has(v.id)));
const nearestArea=p=>GAME_AREAS().sort((a,b)=>dist(p,a)-dist(p,b))[0].name;
// list rows grouped under area headings, areas in their usual order
function groupedRows(list,row){const by=new Map(AREAS.map(a=>[a,[]]));list.forEach(v=>by.get(areaOf(v)).push(v));const out=[];by.forEach((l,a)=>{if(l.length)out.push(`<div class="grouphd">${esc(a.name)}</div>`,...l.map(row))});return out}

/* ---------- collection ---------- */
function collectedMap(){ // id -> first date collected in a game
  const m={};
  const add=(v,t)=>{if(v.counted===true&&(!m[v.id]||t<m[v.id]))m[v.id]=t};
  H.forEach(r=>r.visits.forEach(v=>add(v,v.arrivedAt)));
  if(S.game)S.game.visits.forEach(v=>add(v,v.arrivedAt));
  return m;
}
/* Cities: picked up from where you are, changeable from "Sydney ▾". Your lists are per bar, so per city. */
const CITIES=[{name:"Sydney",lat:-33.8688,lng:151.2093,live:true},{name:"Melbourne",lat:-37.8136,lng:144.9631,live:true},{name:"Brisbane",lat:-27.4698,lng:153.0251,live:true},{name:"Perth",lat:-31.9523,lng:115.8613,live:true},{name:"Gold Coast",lat:-28.0167,lng:153.4000,live:true}];
const cityIn=c=>c==="Gold Coast"?"the Gold Coast":c;   // "in the Gold Coast", "all of the Gold Coast"
const cityOf=v=>v.city||"Sydney",cityC=c=>CITIES.find(x=>x.name===(c||S.city))||CITIES[0],inCityNow=v=>cityOf(v)===S.city;
const RUN=Date.now()+":"+Math.random();
const nearLive=p=>{if(!p)return null;const c=CITIES.filter(x=>x.live).map(x=>({x,d:dist(p,x)})).sort((a,b)=>a.d-b.d)[0];return c&&c.d<80000?c.x.name:null};
// Somewhere we don't cover yet: say so, offer the demo, or a look around a city we do.
function farSheet(){track("far_from_city",{});
  sheet(`<h3>Try a Sydney crawl from anywhere</h3><p class="note" style="margin:4px 0 14px">We don’t cover your area yet. Spin for real rooftops around Circular Quay and tap “I’m here” to play from home.</p>
    <div class="acts"><button class="btn" type="button" id="fsDemo">${I.dice} Start demo crawl</button>
    <button class="btn line" type="button" id="fsTrip">${I.pin} Browse cities</button></div>`,()=>{
    $("fsDemo").onclick=()=>{closeSheet();startDemo()};
    $("fsTrip").onclick=tripSheet})}
// Explore another city: pick one, then its rooftops open on the Rooftops tab.
function tripSheet(){const live=CITIES.filter(x=>x.live);
  sheet(`<h3>Pick a city</h3><div class="opts" style="margin-top:12px">${live.map(c=>{const n=VENUES.filter(v=>cityOf(v)===c.name).length;
    return `<button class="opt" type="button" data-fc="${c.name}"><span class="ic">${I.city}</span><span class="t"><b>${c.name}</b><small>${n} rooftop bars</small></span></button>`}).join("")}</div>`,()=>{
    $("sheetBody").querySelectorAll("[data-fc]").forEach(b=>b.onclick=()=>{S.city=b.dataset.fc;S.cityManual=true;S.cityManualRun=RUN;save();track("explore_city",{city:S.city});closeSheet();go("bars")})})}
// The demo: a 1-hour timed game from Circular Quay. "I'm here" stands in for the walk, "Skip 3 min" for the wait.
const DEMO_START={lat:-33.8612,lng:151.2110,name:"Circular Quay"};let DEMO_REC=null;
function startDemo(){if(S.game)return;ac();S.city="Sydney";const st=DEMO_START,r=1;
  S.game={id:"demo"+Date.now(),demo:true,city:"Sydney",test:false,started:false,startedAt:null,endsAt:null,len:60,radius:r,newOnly:false,
    zoneN:playable(inCircle(st,r),false).length,center:{lat:st.lat,lng:st.lng},startPos:{lat:st.lat,lng:st.lng},areas:["The Rocks"],moves:[],voluntaryUsed:false,freeSkips:1,excluded:[],
    zone:{lat:st.lat,lng:st.lng,name:nearestArea(st)},visits:[],target:null,targetAt:null,targetFrom:null,ended:false,shownFinal:false,dpos:{lat:st.lat,lng:st.lng,acc:5},dff:0};
  track("demo_start",{});save();buzz(30);go("play")}
function demoBar(g){const a=atVisit(),t=now();
  if(g.target&&g.started&&(!a||a.id!==g.target))return `<div class="demobar"><span class="dtag">Demo</span><span>No need to walk. Tap when you're "there".</span><button class="btn sm" type="button" id="dHere">I'm here</button></div>`;
  if(a&&t-a.arrivedAt<DWELL_MIN*60000)return `<div class="demobar"><span class="dtag">Demo</span><span>You’re at the bar. Skip ahead when you’re ready.</span><button class="btn sm" type="button" id="dSkip">Skip ahead</button></div>`;
  if(false)return `<div class="demobar"><span class="dtag">Demo</span><span>No need to walk. Tap when you're "there".</span><button class="btn sm" type="button" id="dHere">I'm here</button></div>`;
  return `<div class="demobar"><span class="dtag">Demo</span><span>Spin to start. Nothing here is saved.</span><button class="btn sm line" type="button" id="dEnd">End demo</button></div>`}
function bindDemoBar(g){
  if($("dHere"))$("dHere").onclick=()=>{const v=byId(g.target);if(!v)return;g.dpos={lat:v.lat+.0002,lng:v.lng,acc:5};save();animateId="at:"+v.id;onLocation()};
  if($("dSkip"))$("dSkip").onclick=()=>{const a=atVisit();if(!a)return;g.dff=(g.dff||0)+Math.max(0,DWELL_MIN*60000+2000-(now()-a.arrivedAt));save();loop();renderPlay()};
  if($("dEnd"))$("dEnd").onclick=()=>{if(g.started&&g.visits.length)endGame(now());else{S.game=null;save();go("home")}}}
function pickCity(p){if(!p||(S.cityManual&&S.cityManualRun===RUN))return;S.cityManual=false;const c=CITIES.filter(x=>x.live).map(x=>({x,d:dist(p,x)})).sort((a,b)=>a.d-b.d)[0];if(c&&c.d<80000&&S.city!==c.x.name){S.city=c.x.name;save()}}
const cityBtn=()=>`<button class="citybtn" type="button" data-city>${esc(S.city)}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></button>`;
function citySheet(){sheet(`<h3>Which city?</h3><p class="note" style="margin:4px 0 12px">We pick this up from where you are. Change it to plan a crawl somewhere else.</p>
  <div class="opts">${CITIES.map(c=>`<button class="opt" type="button" data-c="${c.name}" ${c.live?"":"disabled"} role="radio" aria-checked="${S.city===c.name}"><span class="ic">${I.city}</span><span class="t"><b>${c.name}</b><small>${c.live?`${VENUES.filter(v=>cityOf(v)===c.name).length} rooftop bars${S.city===c.name?" · You're here":""}`:"Coming soon"}</small></span></button>`).join("")}</div>`,
  ()=>$("sheetBody").querySelectorAll("[data-c]").forEach(b=>b.onclick=()=>{S.city=b.dataset.c;S.cityManual=true;S.cityManualRun=RUN;save();closeSheet();render()}))}
document.addEventListener("click",e=>{if(e.target.closest("[data-city]"))citySheet()});
const listed=()=>VENUES.filter(v=>!S.nfu[v.id]&&(v.city||"Sydney")===S.city);
function colStats(list){const c=collectedMap(),L=list||listed();const col=L.filter(v=>c[v.id]).length,been=L.filter(v=>!c[v.id]&&S.been[v.id]).length;return {col,been,total:L.length,c}}
const isNew=(id,c)=>!(c||collectedMap())[id]&&!S.been[id];
/* bars that can come up in a spin: not hidden, optionally only new */
// rooftops too far from the rest for a timed game (fewer than 5 rooftops within 2 km)
const FAR=new Set(VENUES.filter(v=>VENUES.filter(u=>dist(u,v)<=2000).length<5).map(v=>v.id));
// Timed game: "skip" only leaves out bars you've been to in a past game (your own Been list doesn't count here).
function playable(list,newOnly){const c=collectedMap();return list.filter(v=>!FAR.has(v.id)&&(!newOnly||!c[v.id]))}   // Timed game: Pass doesn't apply, you get 3 vetoes instead
const inCircle=(c,r)=>VENUES.filter(v=>dist(c,v)<=r*1000);
const openIn=(c,r,t,newOnly)=>playable(inCircle(c,r),newOnly).filter(v=>openOK(v,t||now()));
function nextOpen(list,t){ // earliest opening time later today among closed bars
  let best=null;list.forEach(v=>{const o=openState(v,t);if(!o.open&&o.opens!=null&&(best===null||o.opens<best))best=o.opens});return best==null?null:clock12(best)}
function avgHop(list){if(list.length<2)return null;let s=0,n=0;for(let i=0;i<list.length;i++)for(let j=i+1;j<list.length;j++){s+=dist(list[i],list[j]);n++}return s/n}

/* ---------- location ---------- */
// iPhone app: the web view's own location prompt names the web page ("localhost wants your location"), so route
// navigator.geolocation through the native Geolocation plugin instead. iOS then asks once, as Rooftop Roulette.
const IOSNAT=(()=>{try{const C=window.Capacitor;return !!(C&&C.isNativePlatform&&C.isNativePlatform()&&C.getPlatform&&C.getPlatform()==="ios")}catch(e){return false}})();
function natGeo(){const C=window.Capacitor;if(!IOSNAT)return null;
  if(C.Plugins&&C.Plugins.Geolocation&&C.Plugins.Geolocation.getCurrentPosition)return C.Plugins.Geolocation;
  if(typeof C.nativeCallback==="function"&&typeof C.nativePromise==="function")return {
    getCurrentPosition:o=>C.nativePromise("Geolocation","getCurrentPosition",o),
    watchPosition:(o,cb)=>Promise.resolve(C.nativeCallback("Geolocation","watchPosition",o,(res,err)=>cb(res,err))),
    clearWatch:o=>C.nativePromise("Geolocation","clearWatch",o),
    checkPermissions:()=>C.nativePromise("Geolocation","checkPermissions",{})};
  return null}
if(IOSNAT){try{
  const err=e=>{const m=String(e&&(e.message||e)||"");return {code:/denied|permission|not authori[sz]ed|disabled/i.test(m)?1:/time/i.test(m)?3:2,message:m}};
  const opt=o=>({enableHighAccuracy:!!(o&&o.enableHighAccuracy),timeout:(o&&o.timeout)||15000,maximumAge:(o&&o.maximumAge)||0});
  const ids={};let n=0;
  const geo={
    getCurrentPosition(ok,bad,o){const G=natGeo();if(!G){bad&&bad({code:2,message:"unavailable"});return}
      G.getCurrentPosition(opt(o)).then(p=>ok&&ok(p),e=>bad&&bad(err(e)))},
    watchPosition(ok,bad,o){const G=natGeo(),id=++n;if(!G){bad&&bad({code:2,message:"unavailable"});return id}
      Promise.resolve(G.watchPosition(opt(o),(p,e)=>{if(!(id in ids))return;if(e||!p){bad&&bad(err(e));return}ok&&ok(p)})).then(cid=>{if(id in ids)ids[id]=cid;else if(cid)G.clearWatch({id:cid}).catch(()=>{})});
      ids[id]=null;return id},
    clearWatch(id){const G=natGeo(),cid=ids[id];delete ids[id];if(G&&cid)G.clearWatch({id:cid}).catch(()=>{})}};
  Object.defineProperty(navigator,"geolocation",{value:geo,configurable:true});
}catch(e){}}
let here=null,watchId=null,locErr=null;
const you=()=>DEMO()?S.game.dpos:S.test?(S.fake||here):here;   // test mode: a fake spot only if you've set one, otherwise where you really are
// In the phone app, a crawl's location runs in the background too (an "Active crawl" notification on Android,
// the blue pill on iPhone), so arrivals and departures are logged on time with the phone in a pocket.
// Only while a game is on: stopWatch() ends it with the crawl.
// iPhone: "While Using" is enough. A crawl started in the app keeps getting locations in the background (with the blue
// location pill), so we never ask for "Always" (the plugin would, if left to request permissions itself).
let bgWatch=null;
function bgGeo(){const C=window.Capacitor;if(!(C&&C.isNativePlatform&&C.isNativePlatform()))return null;
  if(C.Plugins&&C.Plugins.BackgroundGeolocation&&C.Plugins.BackgroundGeolocation.addWatcher)return C.Plugins.BackgroundGeolocation;
  // no JS object: talk to the native plugin through the bridge directly
  if(typeof C.nativeCallback==="function"&&typeof C.nativePromise==="function")return {
    addWatcher:(o,cb)=>Promise.resolve(C.nativeCallback("BackgroundGeolocation","addWatcher",o,(res,err)=>cb(res,err))),
    removeWatcher:o=>C.nativePromise("BackgroundGeolocation","removeWatcher",o)};
  return null}
function startWatch(){
  if(S.test||DEMO())return;
  const BG=bgGeo();
  if(BG&&S.game){if(bgWatch!==null)return;bgWatch="pending";
    Promise.resolve().then(()=>BG.addWatcher({backgroundTitle:"Active crawl",backgroundMessage:"Checking you in when you reach each bar.",requestPermissions:!IOSNAT,stale:false,distanceFilter:10},(p,err)=>{
      if(err){locErr=err.code==="NOT_AUTHORIZED"?1:2;if(S.route==="play")renderPlay();return}
      if(!p)return;here={lat:p.latitude,lng:p.longitude,acc:p.accuracy};locErr=null;lastFix=Date.now();onLocation()
    })).then(id=>{if(bgWatch==="pending")bgWatch=id;else BG.removeWatcher({id}).catch(()=>{})}).catch(()=>{bgWatch=null;webWatch()});
    return}
  webWatch()}
function webWatch(){
  if(watchId!==null||!navigator.geolocation)return;
  watchId=navigator.geolocation.watchPosition(p=>{here={lat:p.coords.latitude,lng:p.coords.longitude,acc:p.coords.accuracy};locErr=null;lastFix=Date.now();onLocation()},
    e=>{locErr=e.code;if(S.route==="play")renderPlay()},{enableHighAccuracy:true,maximumAge:10000,timeout:30000});
}
function stopWatch(){if(watchId!==null){navigator.geolocation.clearWatch(watchId);watchId=null}
  if(NATIVE){NOTE.live="";natCall("CrawlNotify","clear").catch(()=>{})}
  const BG=bgGeo();if(BG&&bgWatch!==null){const id=bgWatch;bgWatch=null;if(id!=="pending")BG.removeWatcher({id}).catch(()=>{})}}
function getOnce(){
  if(S.test&&S.fake){pickCity(S.fake);return Promise.resolve(S.fake)}
  return new Promise((res,rej)=>{
    if(!navigator.geolocation)return rej({code:-1});
    navigator.geolocation.getCurrentPosition(p=>{here={lat:p.coords.latitude,lng:p.coords.longitude,acc:p.coords.accuracy};pickCity(S.test&&S.fake?S.fake:here);res(here)},rej,{enableHighAccuracy:true,timeout:15000,maximumAge:30000});
  });
}
async function permState(ask){if(S.test)return "granted";
  // In the phone app the web view's permission answer can be stale (still "denied" after you've turned it on in settings,
  // or "prompt" when it's allowed), so when a game is starting, ask for a fix instead: that's the real answer.
  if(NATIVE&&ask)return await new Promise(r=>{try{navigator.geolocation.getCurrentPosition(p=>{here={lat:p.coords.latitude,lng:p.coords.longitude,acc:p.coords.accuracy};lastFix=Date.now();r("granted")},e=>r(e&&e.code===1?"denied":"granted"),{enableHighAccuracy:false,maximumAge:600000,timeout:8000})}catch(e){r("prompt")}});
  if(IOSNAT){try{const r=await natGeo().checkPermissions();const st=r.location||r.coarseLocation;return st==="granted"?"granted":st==="denied"?"denied":"prompt"}catch(e){return "prompt"}}
  try{const p=await navigator.permissions.query({name:"geolocation"});return p.state}catch(e){return "prompt"}}

/* ---------- sound + haptics ---------- */
let AC=null;
function OUT(a){if(!a._out){a._out=a.createGain();a._out.connect(a.destination)}return a._out}
function OUTJ(a){if(!a._outJ){a._outJ=a.createGain();a._outJ.gain.value=.5;a._outJ.connect(a.destination)}return a._outJ}   // jackpot sounds: full on the phone, half in clips
function ac(){if(!AC){try{AC=new (window.AudioContext||window.webkitAudioContext)()}catch(e){AC=null}}if(AC&&AC.state==="suspended")AC.resume();return AC}
function tick(p){if(!S.sound)return;const a=ac();if(!a)return;const t=a.currentTime,o=a.createOscillator(),g=a.createGain(),f=a.createBiquadFilter();o.type="square";o.frequency.setValueAtTime(p,t);f.type="bandpass";f.frequency.value=p;f.Q.value=4;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.2,t+.003);g.gain.exponentialRampToValueAtTime(.0001,t+.035);o.connect(f).connect(g).connect(OUT(a));o.start(t);o.stop(t+.05)}
function arriveSound(){if(!S.sound)return;const a=ac();if(!a)return;const t=a.currentTime,out=a.createGain();out.gain.value=.9;out.connect(OUT(a));
  [[523.25,0],[659.25,.07],[783.99,.14],[1046.5,.21],[1318.5,.28]].forEach(([hz,dt],i)=>{const o=a.createOscillator(),g=a.createGain();o.type="triangle";o.frequency.value=hz;const st=t+dt;g.gain.setValueAtTime(.0001,st);g.gain.exponentialRampToValueAtTime(i===4?.22:.16,st+.01);g.gain.exponentialRampToValueAtTime(.0001,st+(i===4?.7:.25));o.connect(g).connect(out);o.start(st);o.stop(st+.75)})}
function fanfare(){if(!S.sound)return;const a=ac();if(!a)return;const t=a.currentTime,lp=a.createBiquadFilter();lp.type="lowpass";lp.frequency.value=4200;lp.connect(OUTJ(a));
  const notes=[[523.25,0],[659.25,.07],[783.99,.14],[1046.5,.21],[1318.5,.28],[1568,.35],[1046.5,.5],[1318.5,.5],[1568,.5],[2093,.5]];
  notes.forEach(([hz,dt],i)=>{const o=a.createOscillator(),g=a.createGain();o.type=i<6?"square":"triangle";o.frequency.value=hz;const st=t+dt,len=i<6?.12:1.3;
    g.gain.setValueAtTime(.0001,st);g.gain.exponentialRampToValueAtTime(i<6?.05:.09,st+.012);g.gain.exponentialRampToValueAtTime(.0001,st+len);o.connect(g).connect(lp);o.start(st);o.stop(st+len+.05)})}
let NB=null;function noiseBuf(){const a=ac();if(!a)return null;if(NB&&NB.sampleRate===a.sampleRate)return NB;NB=a.createBuffer(1,a.sampleRate*2,a.sampleRate);const ch=NB.getChannelData(0);for(let i=0;i<ch.length;i++)ch[i]=Math.random()*2-1;return NB}
const prewarmAudio=()=>{try{(window.requestIdleCallback||setTimeout)(()=>noiseBuf(),{timeout:1500})}catch(e){}};
function riser(sec){if(!S.sound)return()=>{};const a=ac();if(!a)return()=>{};const t=a.currentTime,end=t+sec,M=a.createGain();M.gain.value=1;M.connect(OUTJ(a));
  const out=a.createGain(),lp=a.createBiquadFilter();lp.type="lowpass";lp.frequency.setValueAtTime(1600,t);lp.frequency.exponentialRampToValueAtTime(7000,end);
  out.gain.setValueAtTime(.09,t);out.gain.linearRampToValueAtTime(.15,end);lp.connect(out).connect(M);
  const lfo=a.createOscillator(),lg=a.createGain();lfo.type="sine";lfo.frequency.setValueAtTime(3,t);lfo.frequency.exponentialRampToValueAtTime(16,end);lg.gain.value=.03;lfo.connect(lg).connect(out.gain);lfo.start(t);
  const os=[0,7,12,19].map(d=>{const o=a.createOscillator();o.type="sawtooth";o.frequency.setValueAtTime(196*Math.pow(2,d/12),t);o.frequency.exponentialRampToValueAtTime(784*Math.pow(2,d/12),end);o.detune.value=(Math.random()-.5)*14;o.connect(lp);o.start(t);return o});
  const ns=a.createBufferSource(),bp=a.createBiquadFilter(),ng=a.createGain();ns.buffer=noiseBuf();ns.loop=true;bp.type="bandpass";bp.Q.value=1.1;bp.frequency.setValueAtTime(700,t);bp.frequency.exponentialRampToValueAtTime(9000,end);
  ng.gain.setValueAtTime(.035,t);ng.gain.linearRampToValueAtTime(.08,end);ns.connect(bp).connect(ng).connect(M);ns.start(t);
  let done=false;const kill=()=>{if(done)return;done=true;const n=a.currentTime;M.gain.cancelScheduledValues(n);M.gain.setTargetAtTime(0,n,.015);
    setTimeout(()=>{try{os.concat([lfo,ns]).forEach(o=>o.stop());M.disconnect()}catch(e){}},120)};
  setTimeout(kill,(sec+.4)*1000);   // never outlives the spin, even if something goes wrong
  return kill}
function whoosh(){if(!S.sound)return;const a=ac();if(!a)return;const t=a.currentTime,len=.6;
  const ns=a.createBufferSource(),bp=a.createBiquadFilter(),g=a.createGain();ns.buffer=noiseBuf();bp.type="bandpass";bp.Q.value=.8;bp.frequency.setValueAtTime(300,t);bp.frequency.exponentialRampToValueAtTime(3000,t+len);
  g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.18,t+.15);g.gain.exponentialRampToValueAtTime(.0001,t+len);ns.connect(bp).connect(g).connect(OUTJ(a));ns.start(t);ns.stop(t+len)}
function sfx(kind){if(!S.sound)return;const a=ac();if(!a)return;const t=a.currentTime;
  const noise=(len,f0,f1,q,vol,type)=>{const nb=a.createBuffer(1,Math.ceil(a.sampleRate*len),a.sampleRate),ch=nb.getChannelData(0);for(let i=0;i<ch.length;i++)ch[i]=Math.random()*2-1;
    const n=a.createBufferSource(),f=a.createBiquadFilter(),g=a.createGain();n.buffer=nb;f.type=type||"bandpass";f.Q.value=q;f.frequency.setValueAtTime(f0,t);f.frequency.exponentialRampToValueAtTime(f1,t+len);
    g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(.0001,t+len);n.connect(f).connect(g).connect(OUT(a));n.start(t)};
  const tone=(hz,dt,len,vol,type)=>{const o=a.createOscillator(),g=a.createGain();o.type=type||"sine";o.frequency.value=hz;g.gain.setValueAtTime(.0001,t+dt);g.gain.exponentialRampToValueAtTime(vol,t+dt+.006);g.gain.exponentialRampToValueAtTime(.0001,t+dt+len);o.connect(g).connect(OUT(a));o.start(t+dt);o.stop(t+dt+len+.05)};
  if(kind==="flip")noise(.09,1200,5000,1.5,.25);
  if(kind==="clink"){tone(2637,0,.35,.09);tone(3951,.012,.28,.05);tone(5274,.02,.18,.03)}
  if(kind==="frost"){noise(.7,6000,9000,.7,.08,"highpass");tone(1568,.05,1.1,.05,"triangle");tone(2349,.12,1,.035,"triangle")}
  if(kind==="path")noise(.5,500,2600,1,.15);
  if(kind==="deal")noise(.07,2000,4000,1.2,.2);
  if(kind==="thud"){tone(110,0,.22,.35);noise(.12,300,120,.8,.35,"lowpass")}
}
function boom(){if(!S.sound)return;const a=ac();if(!a)return;const t=a.currentTime,o=a.createOscillator(),g=a.createGain();o.type="sine";o.frequency.setValueAtTime(160,t);o.frequency.exponentialRampToValueAtTime(38,t+.7);
  g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.5,t+.01);g.gain.exponentialRampToValueAtTime(.0001,t+.9);o.connect(g).connect(OUTJ(a));o.start(t);o.stop(t+1)}
function ding(){if(!S.sound)return;const a=ac();if(!a)return;const t=a.currentTime,lp=a.createBiquadFilter();lp.type="lowpass";lp.frequency.value=3200;lp.connect(OUT(a));[[659.25,0],[987.77,.06],[1318.5,.13]].forEach(([hz,dt])=>{const o=a.createOscillator(),g=a.createGain();o.type="sine";o.frequency.value=hz;const st=t+dt;g.gain.setValueAtTime(.0001,st);g.gain.exponentialRampToValueAtTime(.14,st+.015);g.gain.exponentialRampToValueAtTime(.0001,st+.9);o.connect(g).connect(lp);o.start(st);o.stop(st+.95)})}
const buzz=ms=>{if(S.vib===false)return;try{navigator.vibrate&&navigator.vibrate(ms)}catch(e){}};

/* ---------- maps ---------- */
const ESRI="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}";
const ESRI_LBL="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}";
const OSM="https://tile.openstreetmap.org/{z}/{x}/{y}.png";
let tilesFallback=false;
function mkMap(el,opts){
  const m=L.map(el,Object.assign({zoomControl:false,attributionControl:true,zoomSnap:.25},opts||{}));
  const useOSM=()=>{m.eachLayer(l=>{if(l instanceof L.TileLayer)m.removeLayer(l)});m.getContainer().classList.add("osm");L.tileLayer(OSM,{attribution:'&copy; OpenStreetMap',maxZoom:19}).addTo(m)};
  if(tilesFallback){useOSM();return m}
  let errs=0;
  const base=L.tileLayer(ESRI,{attribution:'Esri, HERE, Garmin, &copy; OpenStreetMap',maxNativeZoom:16,maxZoom:19});
  base.on("tileerror",()=>{if(++errs===3){tilesFallback=true;useOSM()}});
  base.addTo(m);
  L.tileLayer(ESRI_LBL,{maxNativeZoom:16,maxZoom:19,pane:"overlayPane",opacity:.85}).addTo(m);
  return m;
}
const pinIcon=cls=>L.divIcon({className:"",html:`<div class="pin ${cls||""}"></div>`,iconSize:cls==="big"?[26,26]:cls==="off"?[13,13]:[20,20]});
const numIcon=(n,x)=>L.divIcon({className:"",html:`<div class="num sm${x?" x":""}">${n}</div>`,iconSize:[16,16]});
const meIcon=L.divIcon({className:"",html:'<div class="me"></div>',iconSize:[18,18]});
const zoneCircle=(c,r)=>L.circle([c.lat,c.lng],{radius:r*1000,color:"#F5B83D",weight:2,opacity:.9,fillColor:"#F5B83D",fillOpacity:.06,interactive:false});
function fitZone(m,c,r,extra,pad){let b=L.latLng(c.lat,c.lng).toBounds(r*2000*1.04);(extra||[]).forEach(p=>b.extend(p));m.fitBounds(b,pad?{animate:false,paddingTopLeft:[8,pad],paddingBottomRight:[8,pad]}:{animate:false,padding:[8,8]})}

/* ---------- Google Maps + photos (falls back to the free map off the live site) ---------- */
const GKEY=window.RR_CONFIG.googleMapsBrowserKey,GMAPID="114ffde49621751bad7df10a";
let gP=null,gBad=false;
function gload(){
  if(gP)return gP;
  if(location.hostname!=="chriskova.github.io"||gBad)return Promise.reject("off");
  gP=new Promise((res,rej)=>{
    window.__gmReady=()=>res(window.google);
    window.gm_authFailure=()=>{gBad=true};
    const sc=document.createElement("script");
    sc.src=`https://maps.googleapis.com/maps/api/js?key=${GKEY}&v=weekly&loading=async&libraries=marker,places&callback=__gmReady`;
    sc.async=true;sc.onerror=()=>rej("load");document.head.appendChild(sc);
    setTimeout(()=>rej("timeout"),15000);
  });
  gP.catch(()=>{});
  return gP;
}
const LL=p=>({lat:p.lat,lng:p.lng});
function gWrap(el,o){
  const map=new google.maps.Map(el,{mapId:GMAPID,isFractionalZoomEnabled:true,colorScheme:"DARK",disableDefaultUI:true,clickableIcons:false,gestureHandling:o&&o.greedy?"greedy":"cooperative",center:{lat:-33.8732,lng:151.2069},zoom:14});
  let ov=[],meM=null,ringC=null,tapAt=0;   // a pin tap also reaches the map as a click: don't let that close what the pin opened
  const node=h=>{const d=document.createElement("div");d.style.transform="translateY(50%)";d.style.display="grid";d.style.placeItems="center";d.innerHTML=h;return d};
  const mk=(pos,h,z,onClick,title)=>{const n=node(h);
    const mm=new google.maps.marker.AdvancedMarkerElement({map,position:LL(pos),content:n,zIndex:z||0,title:title||"",gmpClickable:!!onClick});
    if(onClick){n.style.padding="10px";n.style.cursor="pointer";let last=0;const go=()=>{const t=Date.now();tapAt=t;if(t-last<400)return;last=t;onClick()};
      mm.addListener("click",go);n.addEventListener("click",e=>{e.stopPropagation();go()})}   // the marker's own tap (reliable on phones), and the element's as a backup
    return mm};
  return {
    clear(){ov.forEach(o=>{if(o.setMap)o.setMap(null);else o.map=null});ov=[]},
    circle(c,r){ov.push(new google.maps.Circle({map,center:LL(c),radius:r*1000,strokeColor:"#F5B83D",strokeOpacity:.9,strokeWeight:2,fillColor:"#F5B83D",fillOpacity:.06,clickable:false}))},
    pin(v,cls,onClick){ov.push(mk(v,`<div class="pin ${cls||""}"></div>`,cls==="big"?500:0,onClick,v.name))},
    num(p,n,x,title,onClick){ov.push(mk(p,`<div class="num sm${x?" x":""}">${n}</div>`,300,onClick||null,title))},
    dot(p){ov.push(mk(p,'<div class="me"></div>',1000))},
    route(pts,dashed){if(dashed){ov.push(new google.maps.Polyline({map,path:pts.map(LL),strokeOpacity:0,clickable:false,icons:[{icon:{path:"M 0,-1 0,1",strokeColor:"#F5B83D",strokeOpacity:.45,strokeWeight:2,scale:1.5},offset:"0",repeat:"9px"}]}));return}
      ov.push(new google.maps.Polyline({map,path:pts.map(LL),strokeColor:"#F5B83D",strokeOpacity:.18,strokeWeight:8,clickable:false}));ov.push(new google.maps.Polyline({map,path:pts.map(LL),strokeColor:"#F5B83D",strokeOpacity:1,strokeWeight:3,clickable:false}))},
    line(pts){ov.push(new google.maps.Polyline({map,path:pts.map(LL),strokeColor:"#0B0D12",strokeOpacity:.85,strokeWeight:9,clickable:false}));ov.push(new google.maps.Polyline({map,path:pts.map(LL),strokeColor:"#F5B83D",strokeOpacity:1,strokeWeight:5,clickable:false}))},
    fitZone(c,r,extra,pad){const b=new google.maps.Circle({center:LL(c),radius:r*1000*1.03}).getBounds();(extra||[]).forEach(p=>b.extend(LL(p)));const f=()=>map.fitBounds(b,pad?{top:pad,bottom:pad,left:4,right:4}:4);
      if(el.offsetHeight)f();else google.maps.event.addListenerOnce(map,"idle",f)},   // fit once: repeat fits used to fight a pinch that had already started
    fitPts(pts,maxZoom,pad){const b=new google.maps.LatLngBounds();pts.forEach(p=>b.extend(LL(p)));const f=()=>{map.fitBounds(b,pad||50);google.maps.event.addListenerOnce(map,"idle",()=>{if(map.getZoom()>(maxZoom||16))map.setZoom(maxZoom||16)})};f();setTimeout(f,400)},
    setView(p,z){map.panTo(LL(p));map.setZoom(z)},
    me(p){if(!p){if(meM){meM.map=null;meM=null}return}if(!meM)meM=mk(p,'<div class="me"></div>',1000);else meM.position=LL(p)},
    onTap(fn){map.addListener("click",e=>{if(Date.now()-tapAt<500)return;fn(e.latLng.lat(),e.latLng.lng())})},
    center(){const c=map.getCenter();return {lat:c.lat(),lng:c.lng()}},onMove(fn){map.addListener("center_changed",fn)},onIdle(fn){map.addListener("idle",fn)},
    onZoom(fn){map.addListener("zoom_changed",fn)},mpp(){return 156543.03392*Math.cos(map.getCenter().lat()*Math.PI/180)/Math.pow(2,map.getZoom())},
    ring(c,r){if(!c){if(ringC){ringC.setMap(null);ringC=null}return}if(!ringC)ringC=new google.maps.Circle({map,center:LL(c),radius:r*1000,strokeColor:"#F5B83D",strokeOpacity:.9,strokeWeight:2,fillColor:"#F5B83D",fillOpacity:.08,clickable:false});else{ringC.setCenter(LL(c));ringC.setRadius(r*1000)}},
    resize(){},remove(){this.clear();if(meM)meM.map=null;if(ringC)ringC.setMap(null);el.innerHTML=""}
  };
}
function lWrap(el){
  const m=mkMap(el),ov=L.layerGroup().addTo(m);let meM=null,ringC=null;
  return {
    clear(){ov.clearLayers()},
    circle(c,r){zoneCircle(c,r).addTo(ov)},
    pin(v,cls,onClick){const mm=L.marker([v.lat,v.lng],{icon:pinIcon(cls),zIndexOffset:cls==="big"?500:0}).addTo(ov);if(onClick)mm.on("click",onClick);mm.bindTooltip(v.name,{direction:"top",offset:[0,-10]})},
    num(p,n,x,title,onClick){const mm=L.marker([p.lat,p.lng],{icon:numIcon(n,x)}).addTo(ov);if(title&&!onClick)mm.bindTooltip(title);if(onClick)mm.on("click",onClick)},
    dot(p){L.marker([p.lat,p.lng],{icon:meIcon}).addTo(ov)},
    route(pts,dashed){const ll=pts.map(p=>[p.lat,p.lng]);if(dashed){L.polyline(ll,{color:"#F5B83D",weight:2,opacity:.35,dashArray:"2 7",lineCap:"round"}).addTo(ov);return}
      L.polyline(ll,{color:"#F5B83D",weight:8,opacity:.18,lineCap:"round",lineJoin:"round"}).addTo(ov);L.polyline(ll,{color:"#F5B83D",weight:3,opacity:1,lineCap:"round",lineJoin:"round"}).addTo(ov)},
    line(pts){const ll=pts.map(p=>[p.lat,p.lng]);L.polyline(ll,{color:"#0B0D12",weight:9,opacity:.85,lineCap:"round",lineJoin:"round"}).addTo(ov);L.polyline(ll,{color:"#F5B83D",weight:5,opacity:1,lineCap:"round",lineJoin:"round"}).addTo(ov)},
    fitZone(c,r,extra,pad){fitZone(m,c,r,(extra||[]).map(p=>L.latLng(p.lat,p.lng)),pad)},
    fitPts(pts,maxZoom,pad){const bb=L.latLngBounds(pts.map(p=>[p.lat,p.lng]));pad?m.fitBounds(bb,{animate:false,maxZoom:maxZoom||16,paddingTopLeft:[pad.left,pad.top],paddingBottomRight:[pad.right,pad.bottom]}):m.fitBounds(bb.pad(.3),{animate:false,maxZoom:maxZoom||16})},
    setView(p,z){m.setView([p.lat,p.lng],z,{animate:true})},
    me(p){if(!p){if(meM){m.removeLayer(meM);meM=null}return}if(!meM)meM=L.marker([p.lat,p.lng],{icon:meIcon,zIndexOffset:1000,interactive:false}).addTo(m);else meM.setLatLng([p.lat,p.lng])},
    onTap(fn){m.on("click",e=>fn(e.latlng.lat,e.latlng.lng))},
    center(){const c=m.getCenter();return {lat:c.lat,lng:c.lng}},onMove(fn){m.on("move",fn)},onIdle(fn){m.on("moveend",fn)},
    onZoom(fn){m.on("zoom",fn)},mpp(){return 156543.03392*Math.cos(m.getCenter().lat*Math.PI/180)/Math.pow(2,m.getZoom())},
    ring(c,r){if(!c){if(ringC){m.removeLayer(ringC);ringC=null}return}if(!ringC)ringC=zoneCircle(c,r).addTo(m);else{ringC.setLatLng([c.lat,c.lng]);ringC.setRadius(r*1000)}},
    resize(){m.invalidateSize()},remove(){m.remove()}
  };
}
async function makeMap(id,o){const el=$(id);if(!el)return null;try{await gload();if(gBad)throw 0;return gWrap(el,o)}catch(e){return lWrap(el)}}
function setMe(m){if(m)m.me(you())}

const gmapsURL=v=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.name+", "+v.address)}${v.pid?"&query_place_id="+v.pid:""}`;
/* bar photos: Google Place photo, fetched live, never stored. Capped per phone per day. */
// Per phone, per day: photos for up to 40 different bars, and at most 120 photo loads in total.
// Seeing the same bar again (after the app reloads) doesn't use up one of the 40.
const PH_BARS=40,PH_LOADS=120,phMem={},phWait={};
function phDay(){try{const d=JSON.parse(localStorage.getItem("rr-ph")||"{}");if(d.k===new Date().toDateString()&&Array.isArray(d.ids))return d}catch(e){}return {k:new Date().toDateString(),ids:[],n:0}}
// Browsing the Rooftops tab has its own, smaller allowance (25 bars a day), so it can't use up a game's photos.
const PH_KIND={play:{key:"rr-ph",bars:PH_BARS,loads:PH_LOADS},browse:{key:"rr-ph-b",bars:25,loads:60}};
function phDayK(k){try{const d=JSON.parse(localStorage.getItem(PH_KIND[k].key)||"{}");if(d.k===new Date().toDateString()&&Array.isArray(d.ids))return d}catch(e){}return {k:new Date().toDateString(),ids:[],n:0}}
function phAllowed(id,k){k=k||"play";const d=phDayK(k);if(d.n>=PH_KIND[k].loads)return false;return d.ids.includes(id)||d.ids.length<PH_KIND[k].bars}
function phBump(id,k){k=k||"play";try{const d=phDayK(k);if(!d.ids.includes(id))d.ids.push(id);d.n++;localStorage.setItem(PH_KIND[k].key,JSON.stringify(d))}catch(e){}}
async function placeId(v){
  if(v.pid)return v.pid;S.pids=S.pids||{};if(S.pids[v.id])return S.pids[v.id];
  const {Place}=await google.maps.importLibrary("places");
  const r=await Place.searchByText({textQuery:`${v.name}, ${v.address}, ${{Brisbane:"Brisbane QLD",Melbourne:"Melbourne VIC",Perth:"Perth WA","Gold Coast":"Gold Coast QLD"}[cityOf(v)]||"Sydney NSW"}`,fields:["id"],locationBias:{lat:v.lat,lng:v.lng},maxResultCount:1});
  const id=r&&r.places&&r.places[0]&&r.places[0].id;if(id){S.pids[v.id]=id;save()}return id;
}
const photoRetryAfter=new Map();
function loadPhotoImage(url){
  return new Promise((resolve,reject)=>{
    const img=new Image(),timer=setTimeout(()=>finish(false),8000);
    function finish(ok){clearTimeout(timer);img.onload=img.onerror=null;ok?resolve():reject(new Error("Photo unavailable"))}
    img.onload=()=>finish(img.naturalWidth>0);img.onerror=()=>finish(false);img.src=url;
  });
}
function barPhoto(v,kind="play"){
  if(phMem[v.id])return Promise.resolve(phMem[v.id]);
  if(!phAllowed(v.id,kind)||Date.now()<(photoRetryAfter.get(v.id)||0))return Promise.resolve(null);
  if(phWait[v.id])return phWait[v.id];
  phWait[v.id]=(async()=>{
    await gload();if(gBad)return null;
    const id=await placeId(v);if(!id)return null;
    const {Place}=await google.maps.importLibrary("places");
    const pl=new Place({id});await pl.fetchFields({fields:["photos"]});
    for(const ph of (pl.photos||[]).slice(0,2)){
      if(!phAllowed(v.id,kind))break;
      phBump(v.id,kind);
      try{
        const url=ph.getURI(kind==="browse"?{maxWidth:640,maxHeight:440}:{maxWidth:800,maxHeight:560});
        await loadPhotoImage(url);
        const a=(ph.authorAttributions||[])[0]||{};
        return phMem[v.id]={url,by:a.displayName||"",byUri:a.uri||"",gm:ph.googleMapsURI||""};
      }catch(e){/* Try the next available photo. */}
    }
    return null;
  })().catch(()=>null).then(photo=>{if(!photo)photoRetryAfter.set(v.id,Date.now()+30000);return photo})
    .finally(()=>{delete phWait[v.id]});
  return phWait[v.id];
}
// Warm a bar's photo when a finger rests on its row, but not when it's just scrolling past
// (each fetch counts against the day's photo allowance).
function warmOnHold(el,v){let t=0;const stop=()=>{clearTimeout(t);t=0};
  el.addEventListener("pointerdown",()=>{stop();t=setTimeout(()=>{t=0;barPhoto(v,"browse")},140)});
  ["pointermove","pointercancel","pointerleave"].forEach(e=>el.addEventListener(e,ev=>{if(e!=="pointermove"||Math.abs(ev.movementY)+Math.abs(ev.movementX)>3)stop()}));
  el.addEventListener("click",stop,true)}
function fillPhotos(root){
  (root||document).querySelectorAll("[data-ph]").forEach(box=>{
    if(box.dataset.done)return;box.dataset.done="1";
    const v=byId(box.dataset.ph);
    barPhoto(v).then(ph=>{
      if(!ph||!document.contains(box))return;
      box.innerHTML=phInner(v,ph);
      const img=box.querySelector("img");img.onload=()=>box.classList.add("on");img.onerror=()=>{box.remove()};
    });
  });
}
const phInner=(v,ph)=>`<img src="${ph.url}" alt="${esc(v.name)}" onerror="this.parentNode.remove()"><span class="cr">${ph.by?`Photo: <a href="${esc(ph.byUri)}" target="_blank" rel="noopener">${esc(ph.by)}</a> · `:""}<a href="${esc(ph.gm||"https://maps.google.com")}" target="_blank" rel="noopener">Google Maps</a></span>`;
function cardPhoto(v){const ph=phMem[v.id];if(!ph)return {cls:"",style:"",cr:""};
  return {cls:" photo",style:` style="background-image:url('${ph.url}')"`,cr:`<span class="cr">${ph.by?`Photo: <a href="${esc(ph.byUri)}" target="_blank" rel="noopener">${esc(ph.by)}</a> · `:""}<a href="${esc(ph.gm||"https://maps.google.com")}" target="_blank" rel="noopener">Google Maps</a></span>`}}
// The card at the top of a bar's sheet: same look as the game's bar card. Tap it to open the Google listing.
function sheetCard(v,facts){const cp=cardPhoto(v),wait=phMem[v.id]===undefined&&phAllowed(v.id,"browse")&&!gBad;
  return `<div class="bar sheetbar${cp.cls||" photo blank"}${wait?" loading":""}"${cp.style} data-gm="${esc(gmapsURL(v))}" data-sc="${v.id}" role="link" tabindex="0">${cp.cr}<span class="gmgo" aria-hidden="true">${I.nav}</span><span class="eyebrow">${esc(v.area)}</span><h2>${esc(v.name)}</h2><div class="facts">${facts}</div></div>`}
function bindSheetCard(v,facts){const el=document.querySelector(`[data-sc="${v.id}"]`);if(!el)return;
  el.onclick=e=>{if(e.target.closest("a"))return;window.open(el.dataset.gm,"_blank","noopener")};
  if(phMem[v.id]===undefined)barPhoto(v,"browse").then(ph=>{const cur=document.querySelector(`[data-sc="${v.id}"]`);if(!ph){if(cur)cur.classList.remove("loading");return}if(cur&&$("sheet").open){cur.outerHTML=sheetCard(v,facts);bindSheetCard(v,facts);const nw=document.querySelector(`[data-sc="${v.id}"]`);if(nw&&nw.animate&&phMem[v.id])nw.animate([{filter:"brightness(.4)"},{filter:"none"}],{duration:320,easing:"ease-out"})}})}
const phBox=(v,cls)=>{const ph=phMem[v.id];return ph?`<div class="bph on ${cls||""}" data-ph="${v.id}" data-done="1">${phInner(v,ph)}</div>`:ph===null?"":`<div class="bph ${cls||""}" data-ph="${v.id}"></div>`};


/* ---------- router ---------- */
const VIEWS=["intro","ob","home","wiz","perm","play","end","bars","hist","quick"];
let anLastPage=null;
function pageView(route){if(!route||route===anLastPage)return;anLastPage=route;const base=location.pathname.replace(/\/(index\.html)?$/,"");
  const nm={home:"home",play:"crawl",end:"summary",bars:"rooftops",hist:"my-tab",wiz:"setup",quick:"rr-setup",perm:"location",intro:"intro",ob:"welcome"}[route]||route;
  track("$pageview",{$pathname:base+"/"+nm,$current_url:location.origin+base+"/"+nm,screen:nm})}
let prevRoute=null;
function go(route){prevRoute=S.route;if(route!=="home")backArm();
  // leaving a setup screen: clear it, so its map can't be mistaken for the next one's (both use the same names)
  if(route!==S.route){if(S.route==="wiz"&&$("wBody")){$("wBody").innerHTML="";if(rrMap){rrMap.remove();rrMap=null}}if(S.route==="quick"&&$("v-quick")){$("v-quick").innerHTML="";if(rrMap){rrMap.remove();rrMap=null}}}{const t=document.querySelector(".camtip");if(t&&route!=="play")t.remove()}if(route==="end"&&S.route!=="end")S.endBack=S.route;if(S.route!==route&&typeof hideToast==="function")hideToast();if(route!=="bars"&&typeof bSearching!=="undefined"&&bSearching){bSearching=false;$("app").classList.remove("searching");$("barsMain").hidden=false;$("barsResults").hidden=true;$("bQx").hidden=true;$("bView").hidden=false;$("bQ").value=""}S.route=route;save();render()}
function render(){
  syncH();
  if(typeof pageView==="function")setTimeout(()=>pageView(S.route),0);
  if(SHARED&&S.route==="end"){VIEWS.forEach(v=>$("v-"+v).hidden=v!=="end");$("appbar").hidden=false;$("tabs").hidden=false;$("app").classList.add("has-tabs");renderEnd();return}
  if($("logo"))$("logo").classList.toggle("tap",SETUP_ROUTES.includes(S.route));
  if(!S.onboarded&&S.route!=="intro"&&!S.game)S.route="intro";
  if(!S.route)S.route=S.game?"play":"home";
  if(S.route==="play"&&!S.game)S.route="home";
  const r=S.route;
  VIEWS.forEach(v=>$("v-"+v).hidden=v!==r);
  $("appbar").hidden=r==="home";
  const tabbed=["home","play","end","bars","hist"].includes(r);
  $("tabs").hidden=!tabbed;$("app").classList.toggle("has-tabs",tabbed);
  const tab=r==="bars"?"bars":r==="hist"||(r==="end"&&S.endBack==="hist")?"hist":"play";
  document.querySelectorAll("#tabs button").forEach(b=>b.setAttribute("aria-selected",String(b.dataset.tab===tab)));

  $("cta").hidden=true;$("app").classList.remove("has-cta");
  $("testFab").hidden=!S.test;
  ({intro:renderIntro,ob:renderOb,home:renderHome,wiz:renderWiz,perm:renderPerm,quick:renderQuick,play:renderPlay,end:renderEnd,bars:renderBars,hist:renderHist})[r]();
  $("v-"+r).scrollTop=0;
  renderMini();
}
function renderMini(){const g=G(),m=$("mini");if(!m)return;
  const show=!!g&&!g.demo&&!g.ended&&["home","bars","hist","end"].includes(S.route);
  if(!show){m.hidden=true;m._on=false;$("app").classList.remove("has-mini");return}
  const cr=CR(g),a=atVisit(),y=you();let left,sm=false,line;
  if(!g.started){left="Ready";sm=true}else if(cr){if(a)left=now()-a.arrivedAt>=3600000?hmm(now()-a.arrivedAt):mmss(now()-a.arrivedAt);else{left="R&R";sm=true}}else left=mmss(remaining());
  if(!g.started)line="Spin to start";else if(a)line="At "+byId(a.id).name;else if(g.target){const v=byId(g.target);line="Heading to "+v.name+(y?" · "+kmTxt(dist(y,v)/1000):"")}else line="Spin for the next one";
  const h=`<span class="mt${sm?" sm":""}">${esc(left)}</span><span class="ml"><b>${esc(line)}</b><small>${cr?"R&amp;R":LEN(g.len)}</small></span><span class="up"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 15l6-6 6 6"/></svg></span>`;
  if(m._h!==h){m._h=h;m.innerHTML=h}
  if(!m._on){m._on=true;m.hidden=false;$("app").classList.add("has-mini");if(prevRoute==="play"){m.classList.remove("drop");void m.offsetWidth;m.classList.add("drop")}}
  m.onclick=()=>{go("play");const v=$("v-play");v.classList.remove("rise");void v.offsetWidth;v.classList.add("rise");setTimeout(()=>v.classList.remove("rise"),520)}}
function cta(html,on){const c=$("cta");c.innerHTML=html;c.hidden=false;$("app").classList.add("has-cta");if(on)on(c)}
[["tPlay","play","Play"],["tBars","bars","Rooftops"],["tHist","hist","My Tab"]].forEach(([id,k,l])=>{$(id).innerHTML=tabIcons[k]+`<span>${l}</span>`;$(id).dataset.tab=k});
$("tabs").onclick=e=>{const b=e.target.closest("button");if(!b)return;const k=b.dataset.tab;go(k==="play"?"home":k)};

/* ---------- shared copy ---------- */

const stepsHTML=list=>list.map((s,i)=>`<div class="step"><span class="k">${i+1}</span><div><b>${s[0]}</b><span>${s[1]}</span></div></div>`).join("");

/* ---------- intro ---------- */
const LOOP_ART=()=>`<div class="loopc"><svg class="ring" viewBox="0 0 160 160"><mask id="loopMask" maskUnits="userSpaceOnUse" x="0" y="0" width="160" height="160"><circle class="lm" cx="80" cy="80" r="58" pathLength="100" transform="rotate(-90 80 80)"/></mask><circle class="dl" cx="80" cy="80" r="58" pathLength="360" mask="url(#loopMask)"/><circle class="dl dls" cx="80" cy="80" r="58" pathLength="360" mask="url(#loopMask)"/><circle class="head" r="3.2"/><path class="ah" d="M133.9 45.4L132.7 55.3L123.5 51.4"/><path class="ah" d="M83.0 144.0L75.0 138.0L83.0 132.0"/><path class="ah" d="M23.1 50.6L32.3 46.7L33.5 56.6"/></svg><i class="p1">${tabIcons.play}</i><i class="p2">${I.go}</i><i class="p3">${I.glass}</i></div>`;
// Each intro icon has its own short move, played once when its screen lands.
const SPIN_ART=()=>tabIcons.play.replace('</g>','</g><g class="spa">').replace(/<\/svg>$/,'</g></svg>').replace('<svg ','<svg class="ia-spin" ');
const GO_ART=()=>'<svg class="ia-go" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path class="gar" d="M4 12h12M12 6l6 6-6 6"/><path class="gbar" d="M20 5v14"/></svg>';
const CHEERS_ART=()=>`<svg class="ia-cheers" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
 <g class="gl gl-l"><path class="wine" d="M7.2 15h9.6c-.6 4.6-2.4 7-4.8 7s-4.2-2.4-4.8-7z"/><path d="M6 8h12c0 9.5-2.7 14-6 14s-6-4.5-6-14z"/><path d="M12 22v16M8 38h8"/></g>
 <g class="gl gl-r"><path class="wine" d="M31.2 15h9.6c-.6 4.6-2.4 7-4.8 7s-4.2-2.4-4.8-7z"/><path d="M30 8h12c0 9.5-2.7 14-6 14s-6-4.5-6-14z"/><path d="M36 22v16M32 38h8"/></g>
 <g class="clk"><path d="M24 4.5V1.5"/><path d="M20.2 5.6l-2-2.2"/><path d="M27.8 5.6l2-2.2"/></g></svg>`;
const WILD_ART=()=>`<svg class="ia-wild" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
 <rect class="bk" x="9" y="9" width="20" height="28" rx="3.5" transform="rotate(-14 19 23)"/>
 <g class="fr"><rect x="19" y="10" width="20" height="28" rx="3.5" stroke-dasharray="3.2 3.2"/><path d="M29 17.5l1.6 4.9 4.9 1.6-4.9 1.6-1.6 4.9-1.6-4.9-4.9-1.6 4.9-1.6z" fill="currentColor" fill-opacity=".35"/></g></svg>`;
const SLIDES=[
 {art:SPIN_ART(),h:"Spin the wheel",p:"Land a random rooftop bar in your zone.<br>No planning, no debating."},
 {art:GO_ART(),h:"Get to the bar",p:"Walk, run or Uber.<br>It only counts once you've had a drink."},
 {art:LOOP_ART(),h:"Spin again",p:"See how many you can hit before<br>the clock runs out."},
 {art:WILD_ART(),h:"Wildcards and jackpots",p:"Some bars come with a wildcard.<br>One spin a game hits the jackpot."},
 {art:CHEERS_ART(),h:"Or take it easy",p:"Try R&R.<br>Just the spin, no clock."}
];
function renderIntro(){
  const i=S.intro||0,b=$("introBody");
  let t=b.querySelector(".itrack");
  if(!t){
    b.innerHTML=`<div class="itrack">${SLIDES.map(s=>`<div class="intro"><div class="art">${s.art}</div><h1 class="q" style="font-size:32px">${s.h}</h1><p class="sub" style="margin:0;min-height:2.9em;text-wrap:balance">${s.p}</p></div>`).join("")}</div>`;
    t=b.firstChild;t.classList.add("drag");t.style.transform=`translateX(${-i*100}%)`;t.offsetWidth;t.classList.remove("drag");
  }
  t.style.transform=`translateX(${-i*100}%)`;
  [...t.children].forEach((el,k)=>el.classList.toggle("cur",k===i));
  if($("introDots").children.length!==SLIDES.length)$("introDots").innerHTML="<i></i>".repeat(SLIDES.length);   // one dot per slide
  [...$("introDots").children].forEach((d,k)=>{const on=k===i;if(on&&!d.classList.contains("on")){d.classList.add("on")}else if(!on)d.classList.remove("on")});
  $("introNext").textContent=i<SLIDES.length-1?"Next":"Get started";
  $("introSkip").style.visibility=i===SLIDES.length-1?"hidden":"";   // keeps its space, so the last screen doesn't jump
}
$("introNext").onclick=()=>{if((S.intro||0)<SLIDES.length-1){S.intro=(S.intro||0)+1;save();renderIntro()}else{S.onboarded=true;S.ob=2;go("home")}};
// The logo takes you home from game setup and R&R setup (not the first-time city and been-to screens).
const SETUP_ROUTES=["wiz","quick"];
$("logo").onclick=()=>{if(SETUP_ROUTES.includes(S.route)){closeSheet();go("home")}};
$("introSkip").onclick=()=>{S.onboarded=true;S.ob=2;go("home")};
(()=>{let x0=null,y0=0,dx=0,horiz=null,t0=0;const v=$("v-intro"),tr=()=>$("introBody").querySelector(".itrack");
  v.addEventListener("touchstart",e=>{x0=e.touches[0].clientX;y0=e.touches[0].clientY;dx=0;horiz=null;t0=Date.now()},{passive:true});
  v.addEventListener("touchmove",e=>{if(x0===null)return;const t=tr();if(!t)return;dx=e.touches[0].clientX-x0;const dy=e.touches[0].clientY-y0;
    if(horiz===null&&(Math.abs(dx)>8||Math.abs(dy)>8))horiz=Math.abs(dx)>Math.abs(dy);if(!horiz)return;
    const i=S.intro||0,edge=(i===0&&dx>0)||(i===SLIDES.length-1&&dx<0),off=edge?dx/3:dx;
    t.classList.add("drag");t.style.transform=`translateX(calc(${-i*100}% + ${off}px))`},{passive:true});
  v.addEventListener("touchend",()=>{if(x0===null)return;x0=null;const t=tr();if(t)t.classList.remove("drag");if(!horiz){return}
    const i=S.intro||0,w=$("introBody").clientWidth||360,fast=Math.abs(dx)>30&&Date.now()-t0<250;
    if((dx<-w*.2||(fast&&dx<0))&&i<SLIDES.length-1)S.intro=i+1;else if((dx>w*.2||(fast&&dx>0))&&i>0)S.intro=i-1;
    save();renderIntro()});
  v.addEventListener("touchcancel",()=>{x0=null;const t=tr();if(t)t.classList.remove("drag");renderIntro()});
})();

/* ---------- first-time setup ---------- */
function renderOb(){
  const body=$("obBody");$("obProg").style.width="100%";
  {
    body.innerHTML=`<div><h1 class="q">Which city?</h1><p class="sub" style="margin:6px 0 0">Sydney, Melbourne, Brisbane, Perth and the Gold Coast so far. More cities are on the way.</p></div>
      <div class="opts">
        ${CITIES.map(c=>{const n=VENUES.filter(v=>cityOf(v)===c.name).length;return `<button class="opt" type="button" role="radio" data-obc="${c.name}" aria-checked="${c.live&&S.city===c.name}" ${c.live?"":"disabled"}><span class="ic">${I.city}</span><span class="t"><b>${c.name}</b><small>${c.live?n+" rooftop bars":"Coming soon"}</small></span></button>`}).join("")}
      </div>`;
    body.querySelectorAll("[data-obc]").forEach(b=>b.onclick=()=>{S.city=b.dataset.obc;S.cityManual=true;S.cityManualRun=RUN;save();renderOb()});
    cta(`<button class="btn" id="obNext" type="button">Let's go</button>`,()=>$("obNext").onclick=()=>{S.ob=2;save();go("home")});
    return;
  }
}

/* ---------- home ---------- */
function colCardHTML(){
  const st=colStats(),pct=st.total?st.col/st.total*100:0;
  return `<div style="display:flex;justify-content:space-between;align-items:flex-end;gap:10px"><div><div class="eyebrow">Your collection</div><div class="big" style="margin-top:6px">${st.col}<span> / ${st.total}</span></div></div>
    <span class="small" style="text-align:right">${st.col?"rooftops collected":"Every rooftop you hit<br>gets stamped here"}</span></div>
    <div class="pbar"><i style="width:${pct}%"></i></div>`;
}
function renderHome(){
  $("homeHow").onclick=howSheet;$("homeHowRR").onclick=cruiseHow;
  homeOpen();
  homeAt();
  requestAnimationFrame(fitHome);
}
// Standing at a rooftop with the app open and no game on: offer to start one from here.
// Only uses location while the app is open (no extra permission), and only if it's already allowed.
let atT=0;
addEventListener("visibilitychange",()=>{if(!document.hidden&&S.route==="home")homeAt()});
function homeAt(){const b=$("homeAt");if(!b)return;
  const show=v=>{if(!v||S.game||S.route!=="home"){b.hidden=true;return}
    b.innerHTML=`${I.pin} <span>At <b>${esc(v.name)}</b>? Start a crawl here.</span><button class="x" type="button" aria-label="Not now">×</button>`;b.hidden=false;
    b.onclick=e=>{if(e.target.closest(".x")){e.stopPropagation();S.atNo={id:v.id,day:new Date(now()).toDateString()};save();b.hidden=true;requestAnimationFrame(fitHome);return}
      track("home_at_tap",{bar:v.id});
      sheet(`<h3>Start at ${esc(v.name)}</h3><p class="note" style="margin:6px 0 14px">Your zone starts here.</p><div class="acts"><button class="btn" type="button" id="atRush">Play</button><button class="btn line" type="button" id="atRR">Play R&amp;R</button></div>`,()=>{
        $("atRush").onclick=()=>{closeSheet();firstRules("rush",howSheet,startWizard)};
        $("atRR").onclick=()=>{closeSheet();firstRules("rr",cruiseHow,()=>{S.quick={step:0,from:null};go("quick")})}})};
    requestAnimationFrame(fitHome)};
  const pick=p=>{const t=now(),slack=60+Math.min(p.acc||60,60),no=S.atNo&&S.atNo.day===new Date(t).toDateString()?S.atNo.id:null;
    let best=null,bd=1e9;VENUES.forEach(v=>{const d=dist(p,v);if(d<bd&&v.id!==no&&openState(v,t).open){bd=d;best=v}});return bd<=slack?best:null};
  if(S.game||S.test||!navigator.geolocation){b.hidden=true;return}
  if(here)show(pick(here));else b.hidden=true;
  if(Date.now()-atT<120000)return;atT=Date.now();
  permState().then(st=>{if(st!=="granted")return;
    navigator.geolocation.getCurrentPosition(p=>{here={lat:p.coords.latitude,lng:p.coords.longitude,acc:p.coords.accuracy};if(S.route==="home")show(pick(here))},()=>{},{maximumAge:120000,timeout:10000,enableHighAccuracy:true})})}
// How many rooftops are open in your city right now, above Play. None open: when the first one opens.
function homeOpen(){const el=$("homeOpen");if(!el)return;const t=now(),L=VENUES.filter(inCityNow),n=L.filter(v=>openOK(v,t)).length,where=esc(cityIn(S.city));
  const op=n?null:nextOpen(L,t);
  el.innerHTML=I.pin+`<span>${n?`<b>${plural(n,"rooftop")}</b> open in ${where} right now`:op?`Rooftops in ${where} open from <b>${op}</b>`:`Nothing's open in ${where} right now`}</span>`}
// The name grows on tall phones (--hs). If something extra shows (the Hit list row), scale it back until it all fits.
function fitHome(){const v=$("v-home");if(!v||!v.offsetParent)return;let k=1;v.style.setProperty("--hs",k);
  while(k>0&&v.scrollHeight>v.clientHeight+1){k=Math.max(0,+(k-.1).toFixed(2));v.style.setProperty("--hs",k)}}
addEventListener("resize",()=>{if(S.route==="home")fitHome()});
// The first time each mode is played, its rules come up first (with the demo spin), then "Let's play" carries on.
function firstRules(k,show,start){if((S.seenHow||{})[k]){start();return}show(start)}
// Away from the cities we cover, starting a game goes to the "not in your city yet" sheet instead.
const farAway=()=>!S.test&&here&&!nearLive(here);
// Starting something while a game's on: go back to it, or end it (it's saved) and start the new one
function playingSheet(next){const g=S.game;
  sheet(`<h3>You've got a game going</h3><p class="note" style="margin:6px 0 14px">Your ${CR(g)?"R&amp;R crawl":"game"} is still on.</p><div class="acts"><button class="btn" type="button" id="pgBack">Back to it</button><button class="btn line" type="button" id="pgNew">End it and start a new one</button></div>`,()=>{
    $("pgBack").onclick=()=>{closeSheet();go("play")};
    $("pgNew").onclick=()=>{closeSheet();if(G().started)endGame(now());else{S.game=null;save();stopWatch()}next()}})}
$("newGame").onclick=()=>{if(S.game){playingSheet(()=>firstRules("rush",howSheet,startWizard));return}if(farAway()){farSheet();return}firstRules("rush",howSheet,startWizard)};
$("quickGo").onclick=()=>{if(S.game){playingSheet(()=>firstRules("rr",cruiseHow,()=>{S.quick={step:0,from:null};go("quick")}));return}if(farAway()){farSheet();return}firstRules("rr",cruiseHow,()=>{S.quick={step:0,from:null};go("quick")})};
(()=>{let n=0,t0=0;[$("logo"),$("heroBrand")].forEach(el=>el.addEventListener("click",()=>{const t=Date.now();n=t-t0<700?n+1:1;t0=t;if(n>=5){n=0;S.test=!S.test;if(!S.test){S.ff=0;S.fake=null}save();render()}}))})();
$("rrIcon").innerHTML=CHEERS_ART().replace('class="ia-cheers"','class="ia-cheers mcheers"').replace('viewBox="0 0 48 48"','viewBox="4 0 40 40"');
document.querySelector(".city").innerHTML=document.querySelector(".city").innerHTML.replace("${PIN}",I.pin.replace('<svg','<svg width="16" height="16"'));


/* ---------- one-off spin: one random rooftop, no clock, no scorecard ---------- */
/* ---------- Just the one: where → how far / which area → spin. No clock, no scorecard. ---------- */
const QR=1.5; // km around an area's centre
const QDIST=[{r:1,t:"A short walk",s:"Within 1 km, about 12 minutes"},{r:2,t:"A decent walk",s:"Within 2 km, about 25 minutes"},{r:5,t:"Happy to Uber",s:"Within 5 km"}];
function quickSet(q){ // every rooftop that could come up, open or not
  if(!q||!q.from)return [];
  if(q.from.type==="list")return wantList().filter(v=>!q.r||q.from.lat==null||dist(q.from,v)<=q.r*1000);
  const base=VENUES.filter(v=>!S.nfu[v.id]&&!v.tempClosed&&(q.from.type==="me"||inCityNow(v)));
  if(q.from.type==="me")return base.filter(v=>dist(q.from,v)<=(q.r||1)*1000);
  if(q.from.type==="all")return base;
  return base.filter(v=>areaOf(v).reg===q.from.name);
}
function quickPool(q,t){const P=quickSet(q).filter(v=>openOK(v,t));const fresh=P.filter(v=>!q.seen.includes(v.id));return fresh.length?fresh:P}
const wantList=()=>VENUES.filter(v=>S.want[v.id]&&!v.tempClosed&&cityOf(v)===S.city);
const listOpt=(t,on)=>{const L=wantList(),o=L.filter(v=>openOK(v,t)).length;return `<button class="opt" type="button" role="radio" aria-checked="${!!on}" id="qList"><span class="ic">${I.sparkle}</span><span class="t"><b>Pick from my Hit list</b><small>${L.length?`Only the ${esc(S.city)} bars on your shortlist. Keep it to one area if you like`:"Pick a few you've been meaning to try. The wheel decides"}</small></span>${L.length?`<span class="n"><b>${o}</b><small>open</small></span>`:`<span class="n"><small>Make one</small></span>`}</button>`};
const quickLabel=q=>q.from.type==="list"?"Hit list":q.from.type==="me"?`Near you · ${q.r} km`:q.from.type==="all"?"Anywhere in "+S.city:q.from.name;
async function quickNearMe(){
  const q=S.quick;q.note=null;
  try{const p=await getOnce();q.from={type:"me",name:"Near you",lat:p.lat,lng:p.lng};if(!q.z||dist(q.z,p)>5000)q.z={lat:p.lat,lng:p.lng,r:q.z?q.z.r:2};q.step=1}
  catch(e){q.note="Couldn't find you just now. Try again, or spin from your Hit list."}
  save();renderQuick();
}
// smooth distance slider: 0–970 = 500 m to 15 km (finer at the short end), the last bit = the whole city (r 0)
// the suburb of the closest rooftop: one short name for a dragged circle
const nearestSuburb=p=>{let b=null,bd=1e12;VENUES.forEach(v=>{const d=dist(p,v);if(d<bd){bd=d;b=v}});return b?b.area:S.city};
const RRMAX=1000,RRALL=970,rrToR=x=>x>=RRALL?0:Math.round(0.5*Math.pow(30,x/RRALL)*10)/10,rrToX=r=>r?Math.round(Math.log(r/0.5)/Math.log(30)*RRALL):RRMAX;
const kmTxt=r=>r<1?Math.round(r*1000/50)*50+" m":(r<10?r.toFixed(1).replace(/\.0$/,""):Math.round(r))+" km";
function rrPool(z,t,newOnly){const c_=collectedMap(),base=VENUES.filter(v=>!S.nfu[v.id]&&!v.tempClosed&&(!newOnly||isNew(v.id,c_)));
  const all=z.r?base.filter(v=>dist(z,v)<=z.r*1000):base.filter(v=>cityOf(v)===S.city);return {all,open:all.filter(v=>openOK(v,t))}}
var rrMap=null;   // var: go() can reach it during startup
function fitMap(v,again){const el=$("rrMap");if(!v||!el||v.closest("dialog"))return;el.style.height="200px";
  const vv=window.visualViewport,vr=v.getBoundingClientRect(),pb=parseFloat(getComputedStyle(v).paddingBottom)||0;
  let limit=vr.top+v.clientHeight-pb;if(vv&&document.body.classList.contains("mapq"))limit=Math.min(limit,vv.offsetTop+vv.height-12);
  const last=Math.max(...[...v.children].filter(x=>x.offsetParent!==null).map(x=>x.getBoundingClientRect().bottom));
  el.style.height=Math.round(Math.max(150,Math.min(document.body.classList.contains("mapq")?900:620,200+(limit-last)-6)))+"px";if(rrMap)rrMap.resize();
  if(!again){requestAnimationFrame(()=>fitMap(v,1));setTimeout(()=>fitMap(v,1),350)}}
if(window.visualViewport)visualViewport.addEventListener("resize",()=>{if(S.route==="wiz"||S.route==="quick")fitMap($("v-"+S.route),1)});
window.addEventListener("resize",()=>{if(S.route==="wiz"||S.route==="quick")fitMap($("v-"+S.route))});
let SUBS=null;const subs=()=>SUBS||(SUBS=Object.values(VENUES.reduce((m,v)=>{const k=cityOf(v)+"|"+v.area,o=m[k]||(m[k]={name:v.area,city:cityOf(v),lat:0,lng:0,n:0});o.lat+=v.lat;o.lng+=v.lng;o.n++;return m},{})).map(o=>({...o,lat:o.lat/o.n,lng:o.lng/o.n})));
// a crawl belongs to the city its zone is in, whatever city the app was last showing
function zoneCity(p){const c=p&&cityAt(p);if(c&&c!==S.city){S.city=c;S.cityManual=false;save()}}
// whichever city the circle sits in becomes the app's city (like changing your address in Uber Eats)
function cityAt(p){let b=null,bd=1e12;VENUES.forEach(v=>{const d=dist(p,v);if(d<bd){bd=d;b=v}});return b&&bd<40000?cityOf(b):null}
function followCity(p){const c=cityAt(p);if(!c||c===S.city)return false;S.city=c;S.cityManual=true;S.cityManualRun=RUN;save();toast(`<span>Now in <b>${esc(cityIn(c))}</b></span>`,2500);return true}
// a smooth range lo..hi km (log scale); R&R adds "All" at the end
const zRange=o=>{if(!o||!o.lo)return {toR:rrToR,toX:rrToX,ticks:[[1,"1 km"],[2,"2 km"],[5,"5 km"],[10,"10 km"]],all:true};
  const k=Math.log(o.hi/o.lo),toR=x=>Math.round(o.lo*Math.exp(k*x/RRMAX)*10)/10,toX=r=>Math.round(Math.log(Math.max(o.lo,Math.min(o.hi,r))/o.lo)/k*RRMAX);
  return {toR,toX,ticks:o.ticks,all:false}};
const rrZoneHTML=o=>{const Z=zRange(o);return `<div class="map rrmap"><div id="rrMap"></div><i class="rrpin" id="rrPin"></i><button class="rrme" type="button" id="rrHome" aria-label="Back to where I am" hidden>${I.target}</button>
      <div class="msearch">${I.search}<div id="rrQ" class="sfield" contenteditable="plaintext-only" role="searchbox" inputmode="search" enterkeyhint="search" autocapitalize="off" autocorrect="off" spellcheck="false" data-hint="${o&&o.searchHint||"Search a suburb"}"></div></div><div class="mres" id="rrRes" hidden></div><button class="mcard" type="button" id="rrCard" hidden></button></div>
      <div class="rrsum"><b id="rrLbl"></b><button class="rrnb" type="button" id="rrNB"><span id="rrN"></span> <span class="chev">›</span></button></div>
      <div class="rrslide"${o&&o.fixed?" hidden":""}><input class="rrrange" type="range" id="rrR" min="0" max="${RRMAX}" step="1" aria-label="How far">
      <div class="rrticks">${Z.ticks.map(([r,l],i)=>`<span style="left:${Z.toX(r)/RRMAX*100}%${!Z.all&&i===0?";transform:none":""}${!Z.all&&i===Z.ticks.length-1?";transform:translateX(-100%)":""}">${l}</span>`).join("")}${Z.all?`<span style="left:100%;transform:translateX(-100%)">All</span>`:""}</div></div>
      ${o&&o.note?`<p class="note rrnote" style="margin:2px 0 0">${o.note}</p>`:""}
`};
// room the suburb search takes at the top of a zone map (used top and bottom so the circle stays in the middle)
const ZPAD=()=>{const s_=document.querySelector(".rrmap .zsearch,.rrmap .msearch,.rrmap input,.rrmap [role=searchbox]");const m_=s_&&s_.closest(".rrmap");return s_&&m_?Math.round(s_.getBoundingClientRect().bottom-m_.getBoundingClientRect().top)+6:0};   // no search bar (Your zone): no extra room
function rrZoneBind(z,me,newOnly,onPaint,o){const Z=zRange(o),pool=o&&o.pool||rrPool;
  $("rrR").value=Z.toX(z.r);
  const moved=()=>!!me&&dist(z,me)>150;
  const paint=full=>{if(!$("rrLbl"))return;const P=pool(z,now(),newOnly());
    $("rrLbl").textContent=z.r?`Within ${kmTxt(z.r)} of ${moved()||!me?nearestSuburb(z):"you"}`:(o&&o.allLbl)||`All of ${S.city}`;
    $("rrN").textContent=P.open.length?`${P.open.length} open`:"None open";
    $("rrHome").hidden=!z.r||(!me&&!(o&&o.locate));$("rrHome").classList.toggle("on",!!me&&!moved());$("rrPin").hidden=!z.r;
    lastP=P;onPaint(P,z,moved(),full);
    if(!rrMap)return;
    if(full){const ids=new Set(P.open.map(v=>v.id)),set=o&&o.pinSet?o.pinSet():VENUES.filter(v=>cityOf(v)===S.city||(me&&dist(me,v)<20000)),key=set.map(v=>v.id+(ids.has(v.id)?"+":"")).join();
      if(key!==pinKey){pinKey=key;rrMap.clear();set.forEach(v=>rrMap.pin(v,ids.has(v.id)?"":"off",()=>pinCard(v)))}}
    rrMap.ring(z.r?z:null,z.r);if(me)rrMap.me(me)};
  // Pinch or scroll to zoom and the distance changes with it: the circle keeps its size on screen (same as the slider).
  // Past the smallest or biggest distance, the map settles back on the whole circle when you let go.
  // base: the map's scale when the circle last filled the view. prog: a fit we started ourselves, until its map stops moving.
  let base=null,prog=0,clamped=false,pinKey="";const lo=Z.toR(0),hi=Z.all?Z.toR(RRALL-1):Z.toR(RRMAX);
  const ours=()=>prog&&Date.now()<prog;
  const setBase=()=>{if(rrMap&&rrMap.mpp)base={r:z.r,mpp:rrMap.mpp()}};
  const fit=()=>{if(!rrMap)return;const p0=prog=Date.now()+800;clamped=false;setTimeout(()=>{if(prog===p0){prog=0;setBase()}},820);if(z.r)rrMap.fitZone(z,z.r,null,ZPAD());else rrMap.fitPts(VENUES.filter(v=>cityOf(v)===S.city),14)};
  $("rrR").oninput=()=>{z.r=Z.toR(+$("rrR").value);paint(false)};
  $("rrR").onchange=()=>{save();paint(true);fit()};
  // tap a pin: a little card on the map; tap the card for the full bar page (not from inside a panel)
  const card=$("rrCard"),inSheet=!!card.closest("dialog");
  const pinCard=v=>{const o=openState(v,now()),y=me||you();
    card.innerHTML=`<span class="t"><b>${esc(v.name)}</b><small>${esc(v.vibe||v.area)} · ${o.open?"Open til "+clock12(o.closeAt):o.opens!=null?"Opens "+clock12(o.opens):"Closed today"}${y?" · "+mOrKm(dist(y,v)):""}</small></span>${inSheet?"":`<span class="chev">›</span>`}`;
    card.hidden=false;cardAt=Date.now();card.onclick=()=>{if(!inSheet)barSheet(v)}};
  let lastP=null,cardAt=0;
  ["pointerdown","touchstart","mousedown","wheel","dblclick"].forEach(ev=>card.addEventListener(ev,e=>e.stopPropagation(),{passive:true}));swipeHide(card);
  // the bars in the circle, in a panel from the bottom like everything else
  $("rrNB").onclick=()=>{if(!lastP)return;if(o&&o.listSheet){o.listSheet(lastP);return}const t=now(),y=me||you(),back=inSheet&&o&&o.reopen;
    const L=lastP.all.slice().sort((a,b)=>(openOK(b,t)?1:0)-(openOK(a,t)?1:0)||(y?dist(y,a)-dist(y,b):a.name.localeCompare(b.name)));
    sheet(`<h3>${lastP.open.length} open in your circle</h3><p class="note" style="margin:2px 0 8px">${esc($("rrLbl").textContent)}</p>
      <div class="mlr">${L.map(v=>{const st=openState(v,t);return `<button type="button" class="${openOK(v,t)?"":"off"}" data-v="${v.id}" ${back?"disabled":""}><span class="t"><b>${esc(v.name)}</b><small>${esc(v.vibe||v.area)} · ${st.open?"Open til "+clock12(st.closeAt):st.opens!=null?"Opens "+clock12(st.opens):"Closed today"}</small></span>${y?`<span class="d">${mOrKm(dist(y,v))}</span>`:""}</button>`}).join("")||`<p class="note">No rooftops in the circle. Drag or widen it.</p>`}</div>
      <button class="btn dark" type="button" id="mlBack" style="margin-top:14px">${back?"Back to the map":"Close"}</button>`,()=>{
      $("sheetBody").querySelectorAll("[data-v]").forEach(b=>b.onclick=()=>barSheet(byId(b.dataset.v)));
      $("mlBack").onclick=()=>{if(back)back(z);else closeSheet()}})};
  {const q=sfield($("rrQ")),res=$("rrRes");
    ["pointerdown","touchstart","mousedown","dblclick","wheel"].forEach(ev=>[q.parentNode,res].forEach(x=>x.addEventListener(ev,e=>e.stopPropagation(),{passive:true})));
    const show=()=>{const t=fold(q.value.trim());if(!t){res.hidden=true;return}
      const L=subs().filter(o=>fold(o.name).includes(t)).sort((a,b)=>(fold(a.name).startsWith(t)?0:1)-(fold(b.name).startsWith(t)?0:1)||(a.city===S.city?0:1)-(b.city===S.city?0:1)||b.n-a.n).slice(0,5);
      res.innerHTML=L.length?L.map((o,i)=>`<button type="button" data-s="${i}"><b>${esc(o.name)}</b><span>${o.city===S.city?"":esc(o.city)+" · "}${o.n} rooftop${o.n===1?"":"s"}</span></button>`).join(""):`<div class="mnone">No rooftops in a suburb called "${esc(q.value.trim())}" yet</div>`;
      res.hidden=false;res.querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>{const o=L[+b.dataset.s];q.value="";res.hidden=true;q.blur();
        z.lat=o.lat;z.lng=o.lng;if(!z.r){z.r=2;$("rrR").value=Z.toX(2)}followCity(z);save();paint(true);fit()})};
    q.oninput=show;
    const v_=q.closest(".view");
    q.addEventListener("focus",()=>{if(!v_)return;document.body.classList.add("mapq");fitMap(v_)});
    q.addEventListener("blur",()=>setTimeout(()=>{if(!q.value)res.hidden=true;if(document.activeElement!==q){document.body.classList.remove("mapq");if(v_)fitMap(v_)}},200))}
  $("rrHome").onclick=()=>{if(!me){if(o&&o.locate)o.locate();return}z.lat=me.lat;z.lng=me.lng;save();paint(true);fit()};
  paint(true);
  requestAnimationFrame(async()=>{if(rrMap){rrMap.remove();rrMap=null}const el=$("rrMap");if(!el)return;
    const m=await makeMap("rrMap",{greedy:true});if(!m||!document.contains(el))return;rrMap=m;pinKey="";
    const active=()=>rrMap===m&&el.isConnected;
    const syncCenter=()=>{const c=m.center();z.lat=c.lat;z.lng=c.lng;m.ring(z,z.r)};
    const interruptFit=()=>{if(active()&&ours()){prog=0;clamped=false;setBase()}};
    for(const event of ["pointerdown","touchstart","wheel"])el.addEventListener(event,interruptFit,{capture:true,passive:true});
    m.onMove(()=>{if(!active())return;if(Date.now()-cardAt>700)card.hidden=true;if(z.r&&!ours())syncCenter()});
    m.onIdle(()=>{
      if(!active())return;
      if(z.r)syncCenter();
      if(prog){const mine=ours();prog=0;if(mine){setBase();paint(true);return}}
      if(clamped){clamped=false;fit();return}
      setBase();if(!z.r)return;followCity(z);save();paint(true)});
    if(m.onZoom&&!(o&&o.fixed))m.onZoom(()=>{if(!active()||ours()||!z.r)return;if(!base){setBase();return}
      const r0=base.r*m.mpp()/base.mpp,r=Math.round(Math.max(lo,Math.min(hi,r0))*20)/20;clamped=r0<lo*.97||r0>hi*1.03;if(r===z.r)return;
      z.r=r;$("rrR").value=Z.toX(r);paint(false)});
    m.onTap(()=>{if(Date.now()-cardAt>500)card.hidden=true});
    // the map's box changes size (keyboard, a toggle opening below): put the whole circle back in view
    fit();paint(true);   // after the listeners, so the first fit's scale is caught (otherwise your first pinch did nothing)
    if(window.ResizeObserver){let h0=el.offsetHeight,rt=0;const ro=new ResizeObserver(()=>{if(!document.contains(el)){ro.disconnect();return}const h=el.offsetHeight;if(Math.abs(h-h0)<4)return;h0=h;clearTimeout(rt);rt=setTimeout(()=>{if(rrMap===m){m.resize();fit()}},120)});ro.observe(el)}
  });
  return {paint};
}
/* mid-game: move or resize where an R&R night spins, or switch to the Hit list. Full height. */
function clearInactiveZoneSetup(){
  if(S.route!=="quick")$("v-quick").innerHTML="";
  if(S.route!=="wiz"&&$("wBody"))$("wBody").innerHTML="";
}
function rrZoneSheet(mode,keep){const g=G();if(!g||!CR(g))return;clearInactiveZoneSetup();
  const me=you()||fromPoint(),cz=g.cz,cur=cz.type==="list"?"list":"map",m=mode==="map"||mode==="list"?mode:cur;
  const z=keep||(cz.type==="spot"?{lat:cz.lat,lng:cz.lng,r:cz.r||2}:cz.type==="all"?{lat:me.lat,lng:me.lng,r:0}:{lat:me.lat,lng:me.lng,r:cz.r||2});
  const nowTxt=cz.type==="list"?"your Hit list":zoneTxt(g);
  const apply=(nc,label)=>{g.cz=nc;if(nc.r)g.radius=nc.r;if(g.areas[g.areas.length-1]!==label)g.areas.push(label);save();closeSheet();if(rrMap){rrMap.remove();rrMap=null}renderPlay()};
  sheet(`<div class="rzsheet rz-${m}"><div class="lshead"><h3 tabindex="-1" autofocus style="outline:0">Spin zone</h3><p class="note" style="margin:2px 0 10px">Now spinning: <b style="color:var(--text)">${nowTxt}</b></p>
    <div class="seg"><button type="button" data-m="map" aria-pressed="${m==="map"}">Area${cur==="map"?' <i class="segdot"></i>':""}</button><button type="button" data-m="list" aria-pressed="${m==="list"}">Hit list${cur==="list"?' <i class="segdot"></i>':""}</button></div>
    ${m==="list"?`<p class="note" id="rzCount" style="margin:10px 0 8px"></p><div class="lsearch">${I.search}<div id="lsQ" class="sfield" contenteditable="plaintext-only" role="searchbox" inputmode="search" enterkeyhint="search" autocapitalize="off" autocorrect="off" spellcheck="false" data-hint="Search rooftops"></div><button class="lsclr" type="button" id="lsClr" hidden aria-label="Clear">${I.x}</button></div>`:""}</div>
    ${m==="map"?`<div style="margin-top:12px">${rrZoneHTML()}</div>`:`<div class="lsitems" id="lsItems"></div>`}
    <div class="lsfoot"><button class="btn" type="button" id="rzOk">Done</button></div></div>`,()=>{
    $("sheet").classList.add("full");$("sheet").scrollTop=0;requestAnimationFrame(()=>{$("sheet").scrollTop=0;if(document.activeElement&&document.activeElement.closest&&document.activeElement.closest(".rzsheet"))document.activeElement.blur()});
    document.querySelectorAll(".rzsheet [data-m]").forEach(b=>b.onclick=()=>{if(b.dataset.m!==m)rrZoneSheet(b.dataset.m)});
    if(m==="map"){rrZoneBind(z,me,()=>g.newOnly,(P,zz,moved)=>{const b=$("rzOk");if(!b)return;b.disabled=!P.open.length;
      b.onclick=()=>{const label=zz.r?(moved?"Around "+nearestSuburb(zz):"Near you"):"Anywhere";
        apply(zz.r?(moved?{type:"spot",name:label,r:zz.r,lat:zz.lat,lng:zz.lng}:{type:"me",name:null,r:zz.r}):{type:"all",name:null,r:null},label)}},{reopen:k=>rrZoneSheet("map",k)});return}
    // Hit list, right here: yours ticked at the top, tap to add or take off, search narrows
    const q=sfield($("lsQ")),t=now();let order=[];
    const sub=v=>{const o=openState(v,t);return `${esc(v.area)} · ${o.open?"Open til "+clock12(o.closeAt):o.opens!=null?"Opens "+clock12(o.opens):(o.temp?"Temporarily closed":"Closed today")}`};
    const sortNow=()=>{const s_=fold(q.value.trim());order=VENUES.filter(v=>cityOf(v)===S.city).filter(v=>!s_||fold(v.name).includes(s_)||fold(v.area).startsWith(s_)).sort((a,b)=>(S.want[a.id]?0:1)-(S.want[b.id]?0:1)||a.name.localeCompare(b.name))};
    const paint=()=>{const L=wantList(),lo=L.filter(v=>openOK(v,now())).length;
      $("rzCount").innerHTML=`<b style="color:var(--text)">${L.length} on your Hit list</b> · ${lo} open now${lo<2?". Add a couple that are open now and the wheel spins these.":""}`;
      $("lsClr").hidden=!q.value;$("rzOk").disabled=lo<2;
      $("lsItems").innerHTML=order.length?order.map(v=>{const on=!!S.want[v.id];return `<button class="lsrow lspick" type="button" data-t="${v.id}"><span class="t"><b>${esc(v.name)}</b><small>${sub(v)}</small></span><span class="pl${on?" on":""}">${on?TICK:I.plus}</span></button>`}).join(""):`<div class="lsempty">No rooftops match "${esc(q.value.trim())}".</div>`;
      $("lsItems").querySelectorAll("[data-t]").forEach(b=>{b.onpointerdown=e=>{if(document.activeElement===q)e.preventDefault()};b.onclick=()=>{const id=b.dataset.t;if(S.want[id])delete S.want[id];else{S.want[id]=1;delete S.nfu[id];buzz(10)}save();paint()}})};
    q.oninput=()=>{sortNow();paint()};$("lsClr").onclick=()=>{q.value="";sortNow();paint();q.blur()};
    {let y0=null;const it=$("lsItems");it.addEventListener("touchstart",e=>{y0=e.touches[0].clientY},{passive:true});it.addEventListener("touchmove",e=>{if(y0!==null&&Math.abs(e.touches[0].clientY-y0)>8&&document.activeElement===q){q.blur();y0=null}},{passive:true})}
    sortNow();paint();
    $("rzOk").onclick=()=>apply({type:"list",name:"Hit list",r:null},"Hit list");
  });
}
function renderQuick(){
  if(farAway()&&!S.game){S.quick=null;go("home");setTimeout(farSheet,150);return}
  const q=S.quick||(S.quick={step:0,from:null}),b=$("v-quick"),t=now(),step=q.step||0;
  if(!S.game)$("stage").innerHTML="";
  if(q.sel===undefined)q.sel=wantList().filter(v=>openOK(v,now())).length>=2?"__want":"__me";   // saved a few here? start on them
  if(q.sel==="*"||(q.sel&&q.sel!=="__me"&&q.sel!=="__want"))q.sel="__me";
  if(q.newOnly===undefined)q.newOnly=!!(S.last&&S.last.rrNew);
  if(rrMap&&step!==1){rrMap.remove();rrMap=null}
  const top=`<div class="wtop"><button class="iconbtn" id="qBack" type="button" aria-label="Back">${I.back}</button><div class="prog"><i style="width:${step===0?50:100}%"></i></div><button class="iconbtn" id="qClose" type="button" aria-label="Close">${I.x}</button></div>`;
  const beenN=VENUES.filter(v=>inCityNow(v)&&!isNew(v.id)).length;
  const newTog=`<div class="beenbox"><button class="toggle" type="button" id="qNew" role="switch" aria-checked="${!!q.newOnly}"><span class="t"><b>Skip bars I've been to</b><small id="qBeenN">${beenTxt(beenN)}</small></span><span class="sw"></span></button>
    <button class="txtbtn beenx" type="button" id="qBeenX" aria-expanded="${!!q.beenOpen}">${q.beenOpen?"Hide":"Edit"} your Been list <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="${q.beenOpen?"M6 15l6-6 6 6":"M6 9l6 6 6-6"}"/></svg></button>
    <div class="beenpanel" id="qBeenP" ${q.beenOpen?"":"hidden"}></div></div>`;
  // Looking at another city? "Near me" would mean nowhere near it, so offer a spot in that city instead.
  const hp=S.test&&S.fake?S.fake:here,away=!!hp&&nearLive(hp)!==S.city;
  // No fix yet this session: get one quietly (without switching the city) so "Near me" isn't offered for the wrong state
  if(!here&&!S.test&&!renderQuick.asked&&navigator.geolocation){renderQuick.asked=1;permState().then(st=>{if(st!=="granted")return;
    navigator.geolocation.getCurrentPosition(p=>{here={lat:p.coords.latitude,lng:p.coords.longitude,acc:p.coords.accuracy};if(S.route==="quick"&&S.quick&&!S.quick.step)renderQuick()},()=>{},{maximumAge:600000,timeout:10000})})}
  if(step===0){
    b.innerHTML=top+`<div><div class="cityrow"><h1 class="q modename">R<i>&amp;</i>R</h1>${cityBtn()}</div><p class="sub" style="margin:6px 0 0">Spin for a bar, stay as long as you like, spin again when you're ready. Where are we spinning?</p></div>
      <div class="opts"><button class="opt" type="button" role="radio" aria-checked="${q.sel==="__me"}" id="qMe"><span class="ic">${I.pin}</span><span class="t">${away?`<b>Pick a spot in ${esc(cityIn(S.city))}</b><small>You're not in ${esc(cityIn(S.city))} right now, so choose where you'll start</small>`:`<b>Pick an area</b><small>Starts where you are. Move it anywhere and set how far next</small>`}</span></button>
      ${apWrap("__want",listOpt(t,q.sel==="__want"))}</div>
      ${q.sel==="__me"?newTog:""}
      ${q.note?`<div class="alertbox">${esc(q.note)}</div>`:""}`;
    apBind(b,async k=>wantList(),()=>null);
    cta(`<button class="btn" id="qNext" type="button">Next</button>`,()=>$("qNext").onclick=async()=>{
      if(q.sel==="__want"){const L=wantList(),near=here&&L.some(v=>dist(here,v)<5000);
        const c=near?here:{lat:L.reduce((a,v)=>a+v.lat,0)/L.length,lng:L.reduce((a,v)=>a+v.lng,0)/L.length};
        q.from={type:"list",name:"Hit list",lat:c.lat,lng:c.lng};q.newOnly=false;q.lz={lat:c.lat,lng:c.lng,r:0};q.step=1;save();renderQuick();return}
      if(away){const a=GAME_AREAS(S.city)[0]||CITIES.find(c=>c.name===S.city);q.from={type:"pick",name:null,lat:a.lat,lng:a.lng};q.z={lat:a.lat,lng:a.lng,r:q.z&&q.z.r||2};q.step=1;save();renderQuick();return}
      if(!S.test){const st=await permState(true);if(st!=="granted"){S.permNext="rr-me";go("perm");return}}
      quickNearMe()});
  }else{
    apClear();
    const pick=q.from&&q.from.type==="pick",lst=q.from&&q.from.type==="list",me=q.from&&q.from.type==="me"?{lat:q.from.lat,lng:q.from.lng}:lst&&here?{lat:here.lat,lng:here.lng}:null;if(!me&&!pick&&!lst){q.step=0;save();renderQuick();return}
    if(lst&&!q.lz)q.lz={lat:q.from.lat,lng:q.from.lng,r:0};
    if(!q.z)q.z={lat:q.from.lat,lng:q.from.lng,r:2};
    const zz=lst?q.lz:q.z;
    const listPool=(z,t)=>{const all=wantList().filter(v=>!z.r||dist(z,v)<=z.r*1000);return {all,open:all.filter(v=>openOK(v,t))}};
    b.innerHTML=top+`<div><h1 class="q qmap">${pick?"Where to?":lst?"Your Hit list":"Set your area"}</h1><p class="sub msub" style="margin:6px 0 0">${pick?"Drag the map to where you'll start.":lst?"Spin all of it, or slide to keep it to one area.":"Drag the map to move it. Pinch or slide to change how far."}</p></div>${rrZoneHTML()}${lst?"":newTog}`;
    qZB=rrZoneBind(zz,me,()=>lst?false:q.newOnly,(P,z,moved)=>cta(`<button class="btn" id="qGo" type="button" ${P.open.length?"":"disabled"}>Let's go</button>`,()=>$("qGo").onclick=()=>{if(lst){q.from={type:"list",name:"Hit list",lat:z.lat,lng:z.lng};q.r=z.r||null;save();startCruise();return}q.from=z.r?(moved||pick?{type:"spot",name:"Around "+nearestSuburb(z),lat:z.lat,lng:z.lng}:Object.assign({},q.from)):{type:"all",name:"Anywhere"};q.r=z.r||null;save();startCruise()}),lst?{pool:listPool,allLbl:"Your whole Hit list",pinSet:wantList}:undefined);fitMap(b);
  }
  $("qBack").onclick=()=>{if(step===0){S.quick=null;go("home");return}q.step=0;q.note=null;save();renderQuick()};
  $("qClose").onclick=()=>{S.quick=null;go("home")};
  if($("qMe"))$("qMe").onclick=()=>{q.sel="__me";q.note=null;save();renderQuick()};
  if($("qList"))$("qList").onclick=()=>{const o=wantList().filter(v=>openOK(v,now())).length;
    if(o>=2){q.sel="__want";q.note=null;save();renderQuick();return}
    listSheet("want",wantList().length?`Only ${o} of these ${o===1?"is":"are"} open right now. Add a couple more and you're good to go.`:"Add at least 2 and the wheel only spins these.",()=>{if(wantList().filter(v=>openOK(v,now())).length>=2)q.sel="__want";save();renderQuick()})};
  // Skip bars I've been to: on step 2 the map stays put and just recounts
  const beenChanged=()=>{const n=VENUES.filter(v=>inCityNow(v)&&!isNew(v.id)).length;if($("qBeenN"))$("qBeenN").textContent=beenTxt(n);if(step===1&&qZB)qZB.paint(true)};
  if($("qNew"))$("qNew").onclick=()=>{q.newOnly=!q.newOnly;S.last.rrNew=q.newOnly;save();if(step===1&&qZB){$("qNew").setAttribute("aria-checked",String(q.newOnly));qZB.paint(true)}else renderQuick()};
  if($("qBeenX"))$("qBeenX").onclick=()=>{q.beenOpen=!q.beenOpen;save();const P=$("qBeenP"),x=$("qBeenX");P.hidden=!q.beenOpen;x.setAttribute("aria-expanded",String(q.beenOpen));
    x.innerHTML=`${q.beenOpen?"Hide":"Edit"} your Been list <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="${q.beenOpen?"M6 15l6-6 6 6":"M6 9l6 6 6-6"}"/></svg>`;
    if(q.beenOpen){beenInline(P,beenChanged);setTimeout(()=>x.scrollIntoView({block:"start",behavior:"smooth"}),60)}else if(step===1)fitMap(b)};
  if(q.beenOpen&&$("qBeenP"))beenInline($("qBeenP"),beenChanged);
}
let qZB=null;
const beenTxt=n=>n?`${plural(n,"bar")} on your Been list`:"Your Been list is empty";
// The Been list, right where you set up: yours ticked, tap to take one off, search to add more.
// Bars from past games stay on (they're your history), like on the Rooftops tab.
function beenInline(box,onChange){
  const c=collectedMap(),has=id=>!!(S.been[id]||c[id]);
  box.innerHTML=`<div class="lsearch">${I.search}<div id="bpQ" class="sfield" contenteditable="plaintext-only" role="searchbox" inputmode="search" enterkeyhint="search" autocapitalize="off" autocorrect="off" spellcheck="false" data-hint="Search to add a bar"></div><button class="lsclr" type="button" id="bpClr" hidden aria-label="Clear">${I.x}</button></div><div class="bpitems" id="bpItems"></div>`;
  const q=sfield($("bpQ"));
  const paint=()=>{const s_=fold(q.value.trim());
    const L=VENUES.filter(v=>inCityNow(v)&&(s_?fold(v.name).includes(s_)||fold(v.area).startsWith(s_):has(v.id))).sort((a,b)=>(has(a.id)?0:1)-(has(b.id)?0:1)||a.name.localeCompare(b.name)).slice(0,s_?8:999);
    $("bpClr").hidden=!q.value;
    $("bpItems").innerHTML=L.length?L.map(v=>{const on=has(v.id),fixed=!!c[v.id]&&!S.been[v.id];
      return `<button class="lsrow lspick" type="button" data-t="${v.id}" ${fixed?"disabled":""}><span class="t"><b>${esc(v.name)}</b><small>${esc(v.area)}${fixed?" · Visited in a game":""}</small></span><span class="pl${on?" on":""}">${on?TICK:I.plus}</span></button>`}).join("")
      :`<div class="lsempty">${s_?`No rooftops match "${esc(q.value.trim())}".`:"Nothing here yet. Search to add bars you've been to."}</div>`;
    $("bpItems").querySelectorAll("[data-t]").forEach(b=>{b.onpointerdown=e=>{if(document.activeElement===q)e.preventDefault()};
      b.onclick=()=>{const id=b.dataset.t;if(S.been[id])delete S.been[id];else{S.been[id]=1;buzz(10)}save();paint();onChange()}})};
  q.oninput=paint;$("bpClr").onclick=()=>{q.value="";paint();q.blur()};paint()}
async function startCruise(noLoc){
  ac();const q=S.quick;noLoc=noLoc===true;
  if(!S.test&&!noLoc&&q.from&&q.from.type!=="me"&&(await permState(true))==="denied"){noLocSheet(startCruise);return}
  let pos;if(noLoc)pos=null;else try{pos=await getOnce()}catch(e){if(e&&e.code===1&&q.from&&q.from.type!=="me"){noLocSheet(startCruise);return}S.permNext="cruise";go("perm");return}
  const f=q.from,c=f.type==="me"||f.type==="spot"||(f.type==="list"&&q.r&&f.lat!=null)?{lat:f.lat,lng:f.lng}:(()=>{const l=f.type==="list"?wantList():VENUES.filter(v=>inCityNow(v)&&(f.type==="all"||areaOf(v).reg===f.name));return {lat:l.reduce((s,v)=>s+v.lat,0)/l.length,lng:l.reduce((s,v)=>s+v.lng,0)/l.length}})();
  const label=f.type==="me"?"Near you":f.type==="spot"?f.name:f.type==="all"?"Anywhere":f.type==="list"?"Hit list":f.name;
  zoneCity(c);S.game={id:"g"+now(),city:S.city,test:!!S.test,mode:"cruise",cz:{type:f.type,name:f.name||null,r:q.r||null,lat:f.type==="spot"||(f.type==="list"&&q.r)?f.lat:null,lng:f.type==="spot"||(f.type==="list"&&q.r)?f.lng:null},nudge:60,started:false,startedAt:null,endsAt:null,len:1440,radius:q.r||2,newOnly:!!q.newOnly,
    center:c,startPos:pos?{lat:pos.lat,lng:pos.lng}:{lat:c.lat,lng:c.lng},noLoc:noLoc||undefined,areas:[label],moves:[],voluntaryUsed:true,freeSkips:999,excluded:[],zone:{lat:c.lat,lng:c.lng,name:label},
    visits:[],target:null,targetAt:null,targetFrom:null,ended:false,shownFinal:true};
  S.quick=null;save();if(!noLoc)startWatch();buzz(30);go("play");
}
function quickSpin(vel){
  const q=S.quick;if(spinning||!q||!q.from)return false;ac();
  const P=quickPool(q,now());if(!P.length){renderQuick();return false}
  const pick=P[Math.floor(Math.random()*P.length)];barPhoto(pick);
  if(vel!==undefined)S.tips.swipe=1;
  spinning=true;
  reel.spinTo(pick.name,vel===undefined?-(30+Math.random()*20):vel,info=>{spinning=false;if(S.route!=="quick"||!S.quick)return;q.pick=pick.id;q.seen.push(pick.id);animateId=null;save();renderQuick();reveal(info,$("v-quick"))});
}

/* ---------- wizard: where → how long → zone size → your zone ---------- */
// your record for a game length, once you've played it
const pbHTML=len=>{const b=H.filter(r=>r.mode!=="cruise"&&r.len===len).reduce((m,r)=>Math.max(m,new Set((r.visits||[]).filter(v=>v.counted===true).map(v=>v.id)).size),-1);return b<0?"":`<span class="pbtag">PB: ${b}</span>`};
function startWizard(){S.wiz={step:0,start:null,radius:null,len:S.last.len||60,newOnly:!!S.last.newOnly};go("wiz")}
const recRadius=len=>len===60?0.5:2;
const rLabel=r=>r<1?Math.round(r*1000)+" m":r+" km";
let zMap=null;
function renderWiz(){
  const w=S.wiz;if(!w){go("home");return}if(farAway()){S.wiz=null;go("home");setTimeout(farSheet,150);return}if(w.step>1)w.step=1;
  $("wBack").innerHTML=I.back;$("wClose").innerHTML=I.x;if(rrMap&&w.step!==1){rrMap.remove();rrMap=null}
  $("wProg").style.width=((w.step+1)/2*100)+"%";
  const body=$("wBody"),t=now();
  // Picks so far, under the progress bar. Tap one to jump back and change it.
  const picks=[];
  if(w.step>0)picks.push([0,I.clock,w.len===60?"1 hour":"2 hours"]);
  if(w.step>1&&w.start)picks.push([1,I.pin,(w.start.type==="me"?"Near me":esc(w.start.name))+" · "+kmTxt(w.radius)]);
  $("wSum").innerHTML=picks.map(([k,ic,txt])=>`<button class="chip" type="button" data-s="${k}">${ic} ${txt}</button>`).join("");
  $("wSum").hidden=!picks.length;
  $("wSum").querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>{w.step=+b.dataset.s;save();renderWiz()});
  if(w.step===0){
    body.innerHTML=`<div><div class="cityrow" style="margin-bottom:6px"><div class="eyebrow">New game</div>${cityBtn()}</div><h1 class="q">How long have you got?</h1><p class="sub" style="margin:6px 0 0">The clock starts on your first spin.</p></div>
      <div class="opts">
        <button class="opt" type="button" role="radio" data-l="60" aria-checked="${w.len===60}"><span class="ic">${I.pair}</span><span class="t"><b>1 hour <span class="rtag">up to 1 km</span></b><small>In, out, spin again.<br>Best for 2–3 people.</small></span></button>
        <button class="opt" type="button" role="radio" data-l="120" aria-checked="${w.len===120}"><span class="ic">${I.group}</span><span class="t"><b>2 hours <span class="rtag">up to 2 km</span></b><small>Another round, or onto the next.<br>Best for 4+ people.</small></span></button>
      </div>`;
    body.querySelectorAll("[data-l]").forEach(b=>b.onclick=()=>{w.len=+b.dataset.l;w.radius=null;save();renderWiz()});
    cta(`<button class="btn" id="wNext" type="button" ${w.len?"":"disabled"}>Next</button>`,()=>$("wNext").onclick=()=>{w.step=1;save();renderWiz()});
  }
  if(w.step===1){
    // drag the circle where you're starting; the size slides within what this game length allows
    const R1=w.len===60?{lo:.5,hi:1,ticks:[[.5,"500 m"],[.75,"750 m"],[1,"1 km"]],note:"1-hour games go up to 1 km. Need more room? Pick 2 hours."}:{lo:.5,hi:2,ticks:[[.5,"500 m"],[1,"1 km"],[2,"2 km"]]};
    const me=w.me||null;
    if(!me&&!w._loc){w._loc=1;permState().then(st=>{if(st==="granted"&&S.route==="wiz"&&S.wiz===w&&w.step===1)useMe()})}
    if(!w.z){const c0=me&&GAME_AREAS().some(a=>dist(a,me)<6000)?me:(GAME_AREAS().find(a=>a.name==="The City")||GAME_AREAS()[0]);w.z={lat:c0.lat,lng:c0.lng,r:null}}
    if(w.z.r==null||w.z.r<R1.lo||w.z.r>R1.hi){let r=recRadius(w.len);if(r<R1.lo)r=R1.lo;if(r>R1.hi)r=R1.hi;if(r===.5&&playable(inCircle(w.z,.5),false).length<4)r=1;w.z.r=r}
    const excl=w.excl||(w.excl=[]),hasHistory=Object.keys(collectedMap()).length;
    R1.searchHint="Search where you’re going";
    body.innerHTML=`<div><h1 class="q qmap">Pick your crawl zone</h1><p class="note" id="zoneCue"></p></div>${rrZoneHTML(R1)}<div><p class="note" id="zonePreview"></p><button type="button" class="txtbtn" id="zoneSuggest" hidden></button></div>
      ${hasHistory?`<button class="toggle" type="button" id="newTog" role="switch" aria-checked="${!!w.newOnly}"><span class="t"><b>Skip bars from past games</b><small id="newTogS"></small></span><span class="sw"></span></button>`:""}`;
    const pool=(z,t)=>{const all=playable(inCircle(z,z.r),!!w.newOnly).filter(v=>!excl.includes(v.id));return {all,open:all.filter(v=>openOK(v,t))}};
    body.insertAdjacentHTML("beforeend",'<div><p class="note" id="zoneTravel"></p><button class="txtbtn" type="button" id="zoneDemo">Playing from home? Try a demo</button></div>');
    $("zoneDemo").onclick=()=>{S.wiz=null;startDemo()};
    const zb=rrZoneBind(w.z,me,()=>!!w.newOnly,(P,z,moved,settled)=>{
      const t=now(),shut=!P.all.some(v=>openState(v,t).open);   // outside opening hours: count every rooftop so people can still plan ahead
      const location=me||you(),far=location&&dist(location,z)>Math.max(2000,z.r*1000+1000);
      $("zoneCue").textContent=`${far||!location?"We’ve centred the map on "+nearestSuburb(z)+". ":""}Drag or search to pick where you’ll play. Every spin lands inside the circle.`;
      $("rrN").textContent="View bars ›";
      const options=P.open.length?P.open:P.all;
      const summary=P.open.length?`${P.open.length} open`:P.all.length?"None open now":"No rooftops here";
      const preview=options.slice(0,2).map(v=>v.name).join(", ");
      if(settled)$("zonePreview").textContent=[summary,preview].filter(Boolean).join(" · ")+(options.length>2?` + ${options.length-2} more`:"");
      $("zoneTravel").textContent=(far?`Starting area is ${mOrKm(dist(location,z))} away. `:"")+"Visit each rooftop to unlock your next spin.";
      const suggestion=$("zoneSuggest");
      suggestion.hidden=true;
      if(P.open.length<2){
        const candidates=GAME_AREAS().map(area=>({area,open:pool({...area,r:z.r},t).open.length})).filter(x=>x.open>=2).sort((a,b)=>dist(z,a.area)-dist(z,b.area));
        if(candidates.length){const {area,open}=candidates[0];suggestion.hidden=false;suggestion.textContent=`Use ${area.name} · ${open} open`;suggestion.onclick=()=>{w.z={lat:area.lat,lng:area.lng,r:z.r};save();renderWiz()}}
      }
      if($("newTogS")){const a=playable(inCircle(z,z.r),false).filter(v=>openOK(v,t)).length,n_=playable(inCircle(z,z.r),true).filter(v=>openOK(v,t)).length;$("newTogS").textContent=`${n_} of ${a} open here you haven't played yet`}
      w.start={type:me&&!moved?"me":"area",name:me&&!moved?"you":nearestSuburb(z),lat:z.lat,lng:z.lng};
      const op=P.open.length<2&&P.all.length>=2?nextOpen(P.all,t):null;
      cta(`<button class="btn" id="wStart" type="button" ${P.open.length>=2?"":"disabled"}>${P.open.length>=2?"Start live crawl":op?"Opens "+op+". Come back then":"Not enough rooftops here. Drag or widen"}</button>`,()=>$("wStart").onclick=()=>{
        w.radius=z.r;w.excl=excl.filter(id=>{const v=byId(id);return v&&dist(z,v)<=z.r*1000});save();tryStart()})},
      Object.assign({pool,listSheet:()=>wizBars(),locate:me?null:async()=>{const st=await permState();if(st!=="granted"){S.permNext="wiz-me";go("perm");return}useMe()}},R1));
    wizRepaint=()=>{if(zb&&S.route==="wiz")zb.paint(true)};
    if($("newTog"))$("newTog").onclick=()=>{w.newOnly=!w.newOnly;save();$("newTog").setAttribute("aria-checked",String(w.newOnly));wizRepaint()};
    fitMap($("v-wiz"));
  }
}
let wizRepaint=null;
// The bars in the circle. Everything ticked is in; up to 3 vetoes. Tap a name for its page.
function wizBars(){const w=S.wiz;if(!w||!w.z)return;const MAXOUT=3,excl=w.excl||(w.excl=[]),col=collectedMap(),t=now();
  const all=playable(inCircle(w.z,w.z.r),false).sort((x,y)=>{const ox=openState(x,t).open,oy=openState(y,t).open;return ox!==oy?(ox?-1:1):x.name.localeCompare(y.name)});
  const rows=()=>all.map(v=>{const o=openState(v,t),out=excl.includes(v.id),been=!isNew(v.id,col),skip=w.newOnly&&!!col[v.id],dim=out||skip||!o.open;
    const status=out?"Vetoed":skip?"Skipped, you've been":o.open?"Open til "+clock12(o.closeAt):o.opens!=null?"Opens "+clock12(o.opens):(o.temp?"Temporarily closed":"Closed today");
    const tick=skip||!o.open?"":`<button class="tickbtn${out?"":" on"}" type="button" data-x="${v.id}" aria-pressed="${!out}" aria-label="${out?"Put "+esc(v.name)+" back in":"Sit "+esc(v.name)+" out"}" ${!out&&excl.length>=MAXOUT?"disabled":""}>${out?"":TICK}</button>`;
    return `<div class="zrow${dim?" off":""}"><button class="t zopen" type="button" data-z="${v.id}"><b>${esc(v.name)}</b><small>${status}${been&&!skip?" · Been":""}</small></button>${tick}</div>`}).join("");
  sheet(`<div class="zhead"><h3>Rooftops in your zone</h3><span class="small" id="zOut"></span></div>
    <p class="note" style="margin:2px 0 10px">Everything ticked is in. You get ${MAXOUT} vetoes: untick a bar to sit it out this crawl.</p>
    <div class="card zlist" id="zList"></div><button class="btn dark" type="button" id="zDone" style="margin-top:14px">Done</button>`,()=>{
    const paint=()=>{$("zList").innerHTML=rows();$("zOut").textContent=excl.length?`${excl.length} of ${MAXOUT} vetoes used`:"";
      $("zList").querySelectorAll("[data-x]").forEach(b=>b.onclick=()=>{const id=b.dataset.x,i=excl.indexOf(id);if(i>=0)excl.splice(i,1);else if(excl.length<MAXOUT)excl.push(id);save();paint();if(wizRepaint)wizRepaint()});
      $("zList").querySelectorAll("[data-z]").forEach(b=>{b.onclick=()=>zoneBarSheet(byId(b.dataset.z),wizBars);warmOnHold(b,byId(b.dataset.z))})};
    paint();$("zDone").onclick=closeSheet})}

const TICK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
function zoneBarSheet(v,back){
  const w=S.wiz;if(!w){barSheet(v);return}
  const excl=w.excl||(w.excl=[]),out=excl.includes(v.id),o=openState(v,now());
  const zf=`<span>${I.clock} ${o.open?"Open til "+clock12(o.closeAt):o.opens!=null?"Opens "+clock12(o.opens):(o.temp?"Temporarily closed":"Closed today")}</span>`;
  sheet(`${sheetCard(v,zf)}
    <div class="acts">${o.open?`<button class="btn ${out?"":"dark"}" type="button" id="zx" ${!out&&excl.length>=3?"disabled":""}>${out?"Put it back in":"Sit this one out"}</button>`:""}<button class="btn line" type="button" id="zc">Close</button></div>`,()=>{
    $("zc").onclick=()=>{if(back)back();else closeSheet()};bindSheetCard(v,zf);if($("zx"))$("zx").onclick=()=>{const i=excl.indexOf(v.id);if(i>=0)excl.splice(i,1);else excl.push(v.id);save();if(wizRepaint)wizRepaint();if(back)back();else closeSheet()}});
}
async function useMe(){
  const w=S.wiz;
  try{
    const p=await getOnce();const n=openIn(p,1.5).length,tot=playable(inCircle(p,1.5),false).length;
    w.me={lat:p.lat,lng:p.lng};if(tot>=3)w.z={lat:p.lat,lng:p.lng,r:w.z?w.z.r:null};w.meNote=null;
  }catch(e){w.meNote="Couldn't find you just now."}
  save();go("wiz");
}
$("wBack").onclick=()=>{const w=S.wiz;if(w.step>0){w.step--;save();renderWiz()}else go("home")};
$("wClose").onclick=()=>{S.wiz=null;go("home")};
async function tryStart(noLoc){
  ac();noLoc=noLoc===true;
  if(!S.test&&!noLoc){const st=await permState(true);if(st==="denied"){noLocSheet(tryStart);return}if(st!=="granted"&&!here){S.permNext="start";go("perm");return}}
  let pos;if(noLoc)pos={lat:S.wiz.start.lat,lng:S.wiz.start.lng};else try{pos=await getOnce()}catch(e){if(e&&e.code===1){noLocSheet(tryStart);return}S.permNext="start";go("perm");return}
  const w=S.wiz;
  S.last={radius:w.radius,len:w.len,newOnly:w.newOnly};
  zoneCity(w.start);S.game={id:"g"+now(),city:S.city,test:!!S.test,started:false,startedAt:null,endsAt:null,len:w.len,radius:w.radius,newOnly:w.newOnly,zoneN:playable(inCircle(w.start,w.radius),!!w.newOnly).filter(v=>!(w.excl||[]).includes(v.id)).length,center:{lat:w.start.lat,lng:w.start.lng},
    startPos:{lat:pos.lat,lng:pos.lng},areas:[w.start.type==="area"?w.start.name:nearestSuburb(w.start)],moves:[],voluntaryUsed:false,freeSkips:1,excluded:(w.excl||[]).slice(),zone:{lat:w.start.lat,lng:w.start.lng,name:w.start.type==="area"?w.start.name:nearestArea(w.start)},
    visits:[],target:null,targetAt:null,targetFrom:null,ended:false,shownFinal:false};
  if(noLoc)S.game.noLoc=true;
  spinning=false;S.wiz=null;save();if(!noLoc)startWatch();buzz(30);go("play");
}

// Location blocked as a round starts: say what that means, then let them turn it on or play without it.
function noLocSheet(go_){
  sheet(`<h3>Location's off</h3><p class="note" style="margin:6px 0 14px">Without it, we can't check you in at each bar. You'll tap <b>I'm here</b> when you arrive, and your crawl card will show your bars and total time, but no route or timings.</p>
    <div class="acts"><button class="btn" type="button" id="nlOn">Turn on location</button><button class="btn line" type="button" id="nlGo">Play without it</button></div>`,()=>{
    $("nlOn").onclick=()=>{closeSheet();S.permNext=go_===startCruise?"cruise":"start";go("perm")};
    $("nlGo").onclick=()=>{closeSheet();go_(true)}})}
/* ---------- permission primer ---------- */
const PERM_SUB="So we can find rooftops near you and log each visit in the app when you arrive. Nothing to tap mid-crawl.";
let permOk=false;   // location came on after a trip to settings: show it, and let them carry on with Continue
function renderPerm(){$("pBack").innerHTML=I.back;$("permArt").innerHTML=permOk?I.check:I.pin;$("permArt").classList.toggle("ok",permOk);$("permWarn").hidden=true;
  $("permT").textContent=permOk?"Location's on":"Turn on location";$("permS").textContent=permOk?"You're good to go.":PERM_SUB;$("permGo").textContent=permOk?"Continue":"Allow location"}
$("pBack").onclick=()=>{permOk=false;go(S.permNext==="cruise"||S.permNext==="rr-me"?"quick":"wiz")};
let permBack=false;
document.addEventListener("visibilitychange",()=>{if(document.hidden||!permBack)return;permBack=false;if(S.route==="perm")permTry(true)});
$("permGo").onclick=()=>{if(permOk){permOk=false;permDone();return}permTry(false)};
function permDone(){
    if(S.permNext==="cruise"){S.route="quick";startCruise()}
    else if(S.permNext==="rr-me"){S.route="quick";save();render();quickNearMe()}
    else if(S.permNext==="wiz-me"){S.route="wiz";useMe()}
    else if(S.permNext==="start"){S.route="wiz";save();tryStart()}
    else go("wiz");
}
async function permTry(fromSettings){const t0=Date.now();
  try{await getOnce();
    if(fromSettings){permOk=true;renderPerm();return}
    permDone();
  }catch(e){
    const w=$("permWarn");w.hidden=false;
    w.innerHTML=e&&e.code===1?(NATIVE?`<b>Location is off for Rooftop Roulette.</b> Turn it on in settings, then come back.<button class="btn line sm" type="button" id="permSet" style="margin-top:10px">Open settings</button>`
        :`<b>Location is blocked.</b> In Chrome, tap the icon left of the web address → <b>Permissions</b> → <b>Location</b> → Allow. Then tap the button again.`)
      :`<b>Couldn't find you.</b> Make sure Location is switched on for your phone, then try again.`;
    // In the app: go straight to the app's settings page, and try again by itself when they come back
    const toSettings=()=>{permBack=true;openAppSettings().catch(err=>{permBack=false;anErr("SettingsOpen",(err&&err.message)||String(err),err&&err.stack);toast("Couldn't open settings. Go to Settings → Apps → Rooftop Roulette.",4000)})};
    if($("permSet"))$("permSet").onclick=toSettings;
    // a refusal that comes back instantly means the phone didn't even ask (it's been turned off), so open settings for them
    if(NATIVE&&e&&e.code===1&&!fromSettings&&Date.now()-t0<900)toSettings();
    if(e&&e.code===1&&(S.permNext==="start"||S.permNext==="cruise")){const fn=S.permNext==="start"?tryStart:startCruise;
      w.insertAdjacentHTML("beforeend",`<button class="btn line sm" type="button" id="permNo" style="margin-top:10px">Play without location</button>`);
      $("permNo").onclick=()=>{S.route=fn===tryStart?"wiz":"quick";save();noLocSheet(fn)}}
  }
};

/* ---------- game logic ---------- */
const G=()=>S.game;
const atVisit=()=>{const g=G();return g&&g.visits.find(v=>v.leftAt==null&&!v.dep)};
const leaving=()=>{const g=G();return g&&g.visits.find(v=>v.leftAt==null&&v.dep)};   // spun, still at the bar until we see you go
// when you left, if we didn't see it happen: the last time the phone went in your pocket after the spin
const awayNow=()=>!document.hidden&&Date.now()-resumedAt<45000&&awayGap>=60000;
const leftGuess=d=>Math.max(d.dep,d.hid&&d.hid>=d.dep?d.hid:d.dep);
const visited=id=>G().visits.some(v=>v.id===id);
// A freeze pushes the end back and holds the clock still until it runs out. A free trip (Your call) ends early
// when you arrive or spin again, and hands back whatever it didn't use.
const frozen=g=>!!(g&&g.frz&&now()<g.frz.until);
const remaining=()=>{const g=G();return g.started?(frozen(g)?g.endsAt-g.frz.until:g.endsAt-now()):g.len*60000};
function startFreeze(g,ms,trip){g.endsAt+=ms;g.frz={from:now(),until:now()+ms,trip:!!trip}}
function endTripFreeze(g,arrived){if(g&&g.frz&&g.frz.trip&&now()<g.frz.until&&(!g.frz.zone||arrived)){g.endsAt-=g.frz.until-now();g.frz.until=now()}}
const CR=g=>!!(g&&g.mode==="cruise");
const RR_AUTO=3*3600000; // R&R nights wrap up on their own after 3 hours

// R&R: where spins can land. Near me = within your distance of where you are now.
// A region or anywhere = that part of town, kept to bars within 2 km of you once you're out (if there are any).
function cruiseSet(g){
  if(g.cz.type==="list")return wantList().filter(v=>!g.cz.r||g.cz.lat==null||dist(g.cz,v)<=g.cz.r*1000);
  const c_=collectedMap(),base=VENUES.filter(v=>!S.nfu[v.id]&&!v.tempClosed&&(!g.newOnly||isNew(v.id,c_))),here_=fromPoint();
  if(g.cz.type==="me")return base.filter(v=>dist(here_,v)<=(g.cz.r||2)*1000);
  if(g.cz.type==="spot")return base.filter(v=>dist(g.cz,v)<=(g.cz.r||2)*1000);
  const reg=base.filter(v=>cityOf(v)===(g.city||"Sydney")&&(g.cz.type==="all"||areaOf(v).reg===g.cz.name));
  if(!g.visits.length)return reg;
  const near=reg.filter(v=>dist(here_,v)<=2000&&openOK(v,now())&&!visited(v.id));return near.length?near:reg;
}
const elapsed=ms=>{const m=Math.floor(Math.max(0,ms)/60000);return Math.floor(m/60)+":"+String(m%60).padStart(2,"0")};
const zoneTxt=(g,short)=>g.cz.type==="list"?"Hit list"+(g.cz.r&&g.cz.lat!=null?` · ${kmTxt(g.cz.r)}`:""):g.cz.type==="spot"&&g.cz.lat!=null?(short?"":"Around ")+esc(nearestSuburb(g.cz))+` · ${kmTxt(g.cz.r)}`:esc(g.areas[g.areas.length-1])+(g.cz.type==="me"||g.cz.type==="spot"?` · ${kmTxt(g.cz.r)}`:"");
// shrink the zone line under R&R until it fits (long suburbs, big text settings)
function fitFacts(){document.querySelectorAll("#v-play .bar.tgt .facts").forEach(f=>{f.style.fontSize="";let z=14;while(f.scrollWidth>f.clientWidth+1&&z>11){z-=.5;f.style.fontSize=z+"px"}})}
window.addEventListener("resize",()=>fitFacts());
const _renderPlay=renderPlay;renderPlay=function(){const r=_renderPlay.apply(this,arguments);fitFacts();return r};
function fitZoneLbl(){const b=$("mixZone");if(!b)return;b.style.fontSize="";let f=13;while(b.scrollWidth>b.clientWidth+1&&f>10){f-=.5;b.style.fontSize=f+"px"}}
window.addEventListener("resize",()=>fitZoneLbl());
const mixlineHTML=g=>CR(g)?""
  :`<div class="mixline"><span>${esc(g.areas[g.areas.length-1])}</span><span>${rLabel(g.radius)}</span><span>${g.len===60?"1 hour":"2 hours"}</span></div>`;
function fromPoint(){const y=you();if(y)return y;const a=atVisit();if(a)return byId(a.id);const g=G();return g.visits.length?byId(g.visits[g.visits.length-1].id):g.startPos}
function basePool(){const g=G(),t=now(),skipped=(g.skipped||[]).concat(g.excluded||[]);
  // first spin from a rooftop: don't send them to the one they're already standing in
  const y=!g.visits.length&&!g.target?(you()||g.startPos):null,slack=y?Math.min(y.acc||0,40):0,here_=y?VENUES.filter(v=>dist(y,v)-slack<=CHECKIN_M).map(v=>v.id):[];
  return (CR(g)?cruiseSet(g):playable(inCircle(g.center,g.radius),g.newOnly)).filter(v=>!visited(v.id)&&v.id!==g.target&&!skipped.includes(v.id)&&!here_.includes(v.id)&&openOK(v,t))}
const walkMin=(a,b)=>Math.max(1,Math.round(dist(a,b)*1.3/80));
// Playing without location: "I'm here" opens once they could realistically be there: a third of the walk
// (an Uber, with the wait, still takes about that), so nobody taps straight through a crawl
const hereAt=g=>{const v=byId(g.target),f=g.targetFrom||g.startPos||v;return (g.targetAt||0)+Math.round(walkMin(f,v)*60000/3)};
const hereLbl=g=>{const w=hereAt(g)-now();return w>0?`${I.pin} I'm here <small class="hin">in ${w>=60000?Math.ceil(w/60000)+" min":Math.ceil(w/1000)+"s"}</small>`:`${I.pin} I'm here`};
// more than a 45-minute walk: show a rough drive time with a car instead
const travelHTML=(a,b)=>{const w=walkMin(a,b);if(w<=45)return `${I.walk} ${w} min walk`;const d=Math.round(dist(a,b)/1000*1.25/50*60)+4;return `${I.car} ${d<60?d+" min":Math.floor(d/60)+"h"+(d%60?" "+d%60+"m":"")} drive`};
const tripMin=walkMin; // walking pace keeps final-stretch spins reachable
function spinPool(){
  const g=G(),rem=remaining()/60000,from=fromPoint();let P=basePool();
  if(g.started&&rem<=FINAL){
    const reach=P.filter(v=>tripMin(from,v)<=rem/2);if(reach.length)return {pool:reach,final:true};
    if(!P.length)return {pool:[],final:true};
    return {pool:P.slice().sort((a,b)=>dist(from,a)-dist(from,b)).slice(0,3),final:true};
  }
  return {pool:P,final:false};
}
function closeVisit(v,t,reason){if(!v||v.leftAt!=null)return;v.leftAt=Math.max(v.arrivedAt,t);const ok=(v.leftAt-v.arrivedAt)/60000>=DWELL_MIN;
  if(reason==="end"&&!v.dep)v.counted=v.arrivedAt<G().endsAt;else v.counted=ok?true:v._ans!==undefined?v._ans:null;delete v._ans}
function onLocation(){liveNote();alertSync();
  const g=G();[bMap,zMap].forEach(setMe);
  if(!g||g.ended)return;
  const y=you();if(!y)return;
  if(g.started&&(!here||!here.acc||here.acc<60)){const T=g.trail||(g.trail=[]),l=T[T.length-1];if(!l||dist({lat:l[0],lng:l[1]},y)>=25){T.push([+y.lat.toFixed(5),+y.lng.toFixed(5)]);if(T.length>3000)T.splice(0,T.length-3000)}}
  const slack=Math.min(y.acc||0,40),a=atVisit();
  const d=leaving();if(d&&dist(y,byId(d.id))-slack>LEAVE_M){closeVisit(d,awayNow()?leftGuess(d):Math.max(d.dep,now()-90000),"walk");save()}
  if(a){if(dist(y,byId(a.id))-slack>LEAVE_M){closeVisit(a,now(),"walk");save()}}
  else if(g.target&&g.started&&now()<g.endsAt){
    const v=byId(g.target);
    if(dist(y,v)-slack<=CHECKIN_M){logArrival(false);return}
  }
  // don't redraw the screen mid-reveal (it would wipe the card transition); catch up once it's done
  if(S.route==="play"){if(Date.now()<revealEnd)afterReveal(()=>{if(S.route==="play"&&!spinning)renderPlay()});else renderPlay()}
}
let spinning=false,animateId=null,reel=null;
/* ---------- the reel: swipe it like a slot reel; the swipe speed sets how far it runs ---------- */
const ROW=58,PH0="Spin to start";
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
/* The reel behaves like a real one:
   - it follows your finger;
   - let go gently, or push it the wrong way, and it springs back to "Spin to start";
   - flick it down and it carries on at the speed you flicked, then slows to a stop. Harder flick, longer spin.
   Speed on screen is capped so names never strobe backwards; anything harder than the cap just runs longer. */
function makeReel(el,names,o){
  const PH=(o&&o.ph)||PH0;
  o=o||{};
  // The list round the drum. No name sits within GAP rows of itself (7 rows show at once). Small pools can't
  // manage that, so they get as much space as they can. Before each spin, the stretch it's about to roll
  // through is rewritten the same way, with the winner dropped in where it'll stop.
  const U=[...new Set(names)],GAP=Math.max(1,Math.min(12,U.length-2)),LEN=Math.max(260,U.length+1);
  const clash=(A,i,nm)=>{for(let d=1;d<=GAP;d++){if(A[(i-d+A.length)%A.length]===nm||A[(i+d)%A.length]===nm)return true}return false};
  const pickFrom=(ban,fallback)=>{let c=U.filter(x=>!ban.has(x));if(!c.length)c=U.filter(x=>x!==fallback);if(!c.length)c=U;return c[Math.floor(Math.random()*c.length)]};
  let L=[PH];while(L.length<LEN)L.push(pickFrom(new Set(L.slice(-GAP)),L[L.length-1]));
  const swapIn=i=>{const c=shuffle(U.filter(x=>x!==L[i]&&!clash(L,i,x)));if(c.length)L[i]=c[0]};
  for(let i=LEN-GAP;i<LEN;i++)if(clash(L,i,L[i]))swapIn(i);
  const R={p:0,busy:false,raf:0,rest:0},mod=k=>((k%L.length)+L.length)%L.length;
  el.classList.add("reel");el.classList.remove("won");
  /* A bulging lens: one layer of names, never clipped. Each name grows smoothly as it nears the middle of the
     window and is only full size dead centre. On the way in it's squashed top-to-bottom (the edge of a rounded
     lens squeezes more in that direction), and it swaps from the fine weight to the bold one as it swells.
     Names are spread further apart near the middle so a big name never runs into its neighbours. */
  el.innerHTML=`<div class="frame"></div>${[...Array(13)].map(()=>`<div class="row"><span class="t"></span><span class="b"></span></div>`).join("")}${o.hint?`<div class="hint" aria-hidden="true"><i></i></div>`:""}`;
  const rows=[...el.querySelectorAll(".row")],frame=el.querySelector(".frame");
  let lastK=0,lastFl=0,moved=false,lastP=0,lastT=performance.now();
  const SIG=.62,OUT=.66,bump=d=>Math.exp(-(d/SIG)*(d/SIG));
  // where each name sits: spacing is wider near the middle (integrated once into a lookup table)
  const STEPD=.01,YT=[0];for(let i=1;i<=800;i++){const u=(i-.5)*STEPD;YT.push(YT[i-1]+(43+30*bump(u))*STEPD)}
  const yAt=d=>{const a=Math.min(7.99,Math.abs(d))/STEPD,i=Math.floor(a),f=a-i,y=YT[i]+(YT[i+1]-YT[i])*f;return d<0?-y:y};
  let RAD=190;   // the drum the names sit on, so the far ones curve away (bigger window, bigger drum)
  const draw=()=>{const b=Math.round(R.p);
    const now_=performance.now(),spd=Math.abs(R.p-lastP)/Math.max(1,now_-lastT)*1000;lastP=R.p;lastT=now_;
    const fNow=Math.floor(R.p),fPrev=Math.floor(lastFl),crossed=fNow!==fPrev?Math.max(fNow,fPrev):null;lastFl=R.p;
    if(crossed!==null){tick(560+Math.random()*80);buzz(3);
      // the slot's lights flash with every name that passes: a fast flicker at speed, slow blinks as it winds down
      if(frame&&frame.animate&&!R.landing){const dur=Math.round(Math.min(240,Math.max(70,900/Math.max(spd,1))));const fi=Math.min(1,.4+.6*Math.min(1,7/Math.max(spd,1)));frame._fl=performance.now();frame._fd=dur;frame._fi=fi;   // softer at full speed, full strength on the last few names
        frame.animate([{borderColor:fi>.8?"#FFE3A3":"#FBD27E",boxShadow:`0 0 0 ${(4*fi).toFixed(1)}px rgba(255,214,120,${(.45*fi).toFixed(2)}),0 0 ${Math.round(28*fi)}px rgba(255,214,120,${(.6*fi).toFixed(2)}),inset 0 0 18px rgba(255,214,120,${(.25*fi).toFixed(2)})`},{}],{duration:dur,easing:"ease-out"})}}
    // the slot is pushed out while a name sits in its catch, and springs back once it's rolled past (same range as the name's own zoom)
    if(frame){const fin=Math.abs(R.p-Math.round(R.p))<.14&&spd<12&&!R.landing;if(fin!==frame._in){frame._in=fin;frame.style.transition="transform .2s cubic-bezier(.3,1.5,.5,1)";frame.style.transform=fin?"scale(1.025,1.09)":""}
      frame.classList.toggle("held",fin&&!!R.down)}   // dragging slowly: the light holds while a name's in the slot
    // once the placeholder has scrolled out of sight, it becomes a bar like the rest
    if(moved&&L[0]===PH&&Math.abs(R.p-Math.round(R.p/L.length)*L.length)>4){L[0]=U[0];swapIn(0)}
    const fl=Math.floor(R.p);
    // each name keeps the same element for as long as it's on screen, so its zoom state travels with it
    RAD=Math.max(190,(el.clientHeight||290)*.6);
    for(let k=fl-6;k<=fl+6;k++){const r=rows[((k%13)+13)%13],d=k-R.p,a=Math.abs(d),n=L[mod(k)],t=r.firstChild,bo=r.lastChild;
      if(r._k!==k){r._k=k;r._in=false;[t,bo].forEach(x=>{x.style.transition="none";x.style.transform=""})}
      if(t.textContent!==n){t.textContent=n;bo.textContent=n;r.classList.toggle("long",n.length>15);r.classList.toggle("xlong",n.length>26);r.classList.toggle("ph",n===PH);t.style.scale="";const wt=t.offsetWidth,wb=bo.offsetWidth;r._wr=wt&&wb?wb/wt:1}
      const g=bump(d),y=yAt(d),ang=y/RAD;
      if(Math.abs(ang)>1.4){r.style.opacity=0;continue}
      const sx=OUT+(1-OUT)*Math.pow(g,.75),sy=OUT+(1-OUT)*Math.pow(g,1.5);
      r.style.transform=`translateY(${RAD*Math.sin(ang)}px) rotateX(${-ang}rad) scale(${sx},${sy})`;
      r.style.opacity=Math.pow(Math.cos(ang),1.3);
      const w=Math.min(1,Math.max(0,(g-.2)/.55));bo.style.opacity=w;t.style.opacity=1-w;
      // the thin copy widens to match the bold one only as they swap, so the swap looks like one name getting bolder
      t.style.scale=`${1+((r._wr||1)-1)*Math.min(1,g/.3)} 1`;
      r.classList.toggle("c",a<.5);
      // a quick press-and-release as each name clicks into the middle, once the reel is slow enough to see it
      // a small catch at the apex: inside this tiny range the name sits zoomed in, and it springs back
      // when it's dragged or rolled off. On a fast spin it doesn't catch at all.
      const inR=a<.14&&spd<12&&!R.landing;
      if(inR!==r._in){r._in=inR;[t,bo].forEach(x=>{x.style.transition="transform .2s cubic-bezier(.3,1.5,.5,1)";x.style.transform=inR?"scale(1.12)":""})}
    }};
  draw();R.redraw=draw;
  const anim=(dur,fn,end)=>{cancelAnimationFrame(R.raf);const t0=performance.now();const f=t=>{const u=Math.min(1,(t-t0)/dur);fn(u);draw();if(u<1)R.raf=requestAnimationFrame(f);else end&&end()};R.raf=requestAnimationFrame(f)};
  R.bounce=()=>{const p0=R.p,to=R.rest;R.busy=true;anim(380,u=>{const c=1.7,x=u-1;R.p=p0+(to-p0)*(1+(c+1)*x*x*x+c*x*x)},()=>{R.p=to;draw();R.busy=false;const h=el.querySelector(".hint");if(h)h.classList.remove("off")})};
  R.spinTo=(name,v,done,opt)=>{
    opt=opt||{};moved=true;const dir=-1,v0=Math.max(4,Math.abs(v)||20),VC=28,vs=Math.min(VC,v0);
    const extra=v0>VC?Math.min(30,(v0-VC)*.5):0, Dd=Math.max(7,vs*vs/24);   // 24 = 2 × friction (12 rows/s²)
    let k=Math.round(R.p+dir*(extra+Dd));
    if(opt.dur){const Tdj=2.5*Dd/vs;k=Math.round(R.p+dir*(Math.max(0,opt.dur-Tdj)*vs+Dd))}
    // rewrite everything between just off-screen now and just past where it'll stop (all out of sight)
    const top=Math.round(R.p)-5;
    // on a short spin the rows still on screen sit close to the stop: if the winner's among them, roll a bit further
    for(let guard=0;guard<GAP+2;guard++){let near=false;for(let j=top+1;j<=k+GAP;j++)if(L[mod(j)]===name)near=true;if(!near)break;k--}
    // try stopping a row or two further if that lets every name keep its distance (matters for tiny pools)
    const attempt=kk=>{const end=kk-4-2*GAP,seq={},get=j=>seq[j]!==undefined?seq[j]:L[mod(j)];let fails=0;
      for(let j=top;j>=end;j--){
        if(j===kk){seq[j]=name;if([...Array(GAP)].some((_,d)=>get(j+d+1)===name))fails++;continue}
        const ban=new Set();for(let d=1;d<=GAP;d++){ban.add(get(j+d));if(j-d<end)ban.add(L[mod(j-d)])}
        if(Math.abs(j-kk)<=GAP)ban.add(name);
        if(U.every(x=>ban.has(x)))fails++;
        seq[j]=pickFrom(ban,get(j+1));
      }
      return {kk,seq,fails}};
    let best=null;for(let kk=k;kk>=k-3;kk--){const a=attempt(kk);if(!best||a.fails<best.fails)best=a;if(!a.fails)break}
    k=best.kk;for(const j in best.seq)L[mod(+j)]=best.seq[j];
    const stop=k;
    const p0=R.p,dist=Math.abs(stop-p0),Dc=Math.max(0,dist-Dd),Tc=Dc/vs,Dr=dist-Dc,Td=(opt.jackpot?2.5:2)*Dr/vs,T=Tc+Td;
    R.busy=true;el.classList.add("going");const h=el.querySelector(".hint");if(h)h.remove();
    const land=()=>{
      R.landing=true;R.p=k;draw();R.landing=false;el.classList.remove("going");el.classList.add("won");
      if(opt.jackpot){opt.onLand&&opt.onLand();boom();fanfare();buzz([60,40,60,40,220])}else{ding();buzz([30,40,70])}
      punchLand(el,frame,name,info=>{R.busy=false;done&&done(info)});
    };
    const ease=opt.jackpot?q=>1-Math.pow(1-q,3):q=>1-(1-q)*(1-q);
    anim(T*1000,u=>{const s=u*T;let x;if(s<Tc)x=vs*s;else{const q=(s-Tc)/Td;x=Dc+Dr*ease(q)}R.p=p0+dir*x},land);
    return T;
  };
  if(o.onRelease){
    let y0=0,pS=0,pts=[],down=false;
    el.addEventListener("pointerdown",e=>{if(R.busy||spinning)return;cancelAnimationFrame(R.raf);down=true;R.down=true;el.setPointerCapture(e.pointerId);y0=e.clientY;pS=R.p;pts=[[performance.now(),R.p]];ac();const h=el.querySelector(".hint");if(h)h.classList.add("off")});
    el.addEventListener("pointermove",e=>{if(!down)return;const dy=e.clientY-y0;R.p=pS-(dy>0?dy:dy*.35)/ROW;const t=performance.now();pts.push([t,R.p]);while(pts.length>2&&t-pts[1][0]>80)pts.shift();draw()});
    const up=()=>{if(!down)return;down=false;R.down=false;draw();const t=performance.now(),a=pts[0],travel=R.p-pS;
      let v=(t-a[0])>8&&(t-pts[pts.length-1][0])<150?(R.p-a[1])/((t-a[0])/1000):0;
      if(Math.abs(travel)<.2&&Math.abs(v)<2){if(o.onRelease(-16)===false)R.bounce();return}  // a tap gives a gentle spin
      if(v>-3.5){if(travel<-1.5)v=-14;else{R.bounce();return}}                                // too gentle, or the wrong way (a long, slow pull down still counts)
      if(o.onRelease(v)===false)R.bounce()};
    el.addEventListener("pointerup",up);el.addEventListener("pointercancel",up);
  }
  return R;
}
/* The landing: the name punches out of the wheel, way bigger than the wheel can hold, and shakes like an
   earthquake while the rest of the screen drops back into shadow behind a soft gold bloom. Then it's pulled
   straight from there into its spot on the card, so it all reads as one move. */
function punchLand(el,frame,name,done){
  const c=el.querySelector(".row.c .b"),row=c.parentElement,cs=getComputedStyle(c),r0=c.getBoundingClientRect(),fr=frame.getBoundingClientRect();
  const host=el.closest("dialog")||el.closest(".jpx,.jpdemo")||document.body,calm=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cx=fr.left+fr.width/2,cy=r0.top+r0.height/2,fs=parseFloat(cs.fontSize),INK="#F5B83D";   // centred on the slot (very long names overflow the wheel lopsided)
  const P=document.createElement("div");P.className="punch";P.textContent=name;
  Object.assign(P.style,{left:cx+"px",top:cy+"px",fontFamily:cs.fontFamily,fontWeight:cs.fontWeight,fontSize:cs.fontSize,letterSpacing:cs.letterSpacing,color:INK});
  host.appendChild(P);row.style.visibility="hidden";
  const w0=P.offsetWidth||r0.width,fit=innerWidth*.94/w0,big=Math.min(2.3,fit);   // as big as the screen allows (very long names shrink to fit)
  const T=(k,x=0,y=0,r=0)=>`translate(calc(-50% + ${x}px),calc(-50% + ${y}px)) rotate(${r}deg) scale(${k})`;
  const HIT=170,QUAKE=0,HOLD=200,ALL=HIT+HOLD;
  // punch in: fast, with a little overshoot, then hold big while it quakes (amplitude dies away)
  const k0=Math.max(1,r0.width/(c.offsetWidth||r0.width));
  const kf=[{transform:T(k0),offset:0,textShadow:"0 0 0 rgba(245,184,61,0)"},{transform:T(big*1.08),offset:HIT*.7/ALL,textShadow:"0 0 26px rgba(245,184,61,.9)"},{transform:T(big),offset:HIT/ALL,textShadow:"0 0 18px rgba(245,184,61,.7)"},{transform:T(big),offset:1,textShadow:"0 0 18px rgba(245,184,61,.7)"}];
  if(QUAKE){const n=8;for(let i=1;i<=n;i++){const d=1-i/n,amp=11*d*d+1.5*d,s=i%2?1:-1;
      kf.push({transform:T(big,s*amp*(.6+Math.random()*.4),(Math.random()-.5)*amp*.9,s*1.6*d),offset:(HIT+QUAKE*i/n)/ALL})}
    kf[kf.length-1].transform=T(big);kf[kf.length-1].textShadow="0 0 18px rgba(245,184,61,.7)"}
  P.animate(kf,{duration:ALL,easing:"linear",fill:"forwards"});
  frame.animate([{boxShadow:"0 0 0 7px rgba(245,184,61,.28),0 0 60px rgba(245,184,61,.45)"},{boxShadow:"0 0 0 10px rgba(245,184,61,.4),0 0 90px rgba(245,184,61,.7)",offset:.25},{boxShadow:"0 0 0 7px rgba(245,184,61,.28),0 0 60px rgba(245,184,61,.45)"}],{duration:ALL,easing:"ease-out"});
  const fx=[];
  // the room goes dark around it, and a soft bloom of light sits behind the name
  const dim=document.createElement("div");dim.className="jdim";fx.push(dim);
  dim.animate([{opacity:0},{opacity:1,offset:.25},{opacity:1,offset:.7},{opacity:0}],{duration:ALL+520,easing:"ease-out",fill:"forwards"});
  const bloom=document.createElement("div");bloom.className="jbloom";Object.assign(bloom.style,{left:cx+"px",top:cy+"px"});fx.push(bloom);
  bloom.animate([{transform:"translate(-50%,-50%) scale(.3)",opacity:0},{transform:"translate(-50%,-50%) scale(1.05)",opacity:1,offset:.3},{transform:"translate(-50%,-50%) scale(1.15)",opacity:.75,offset:.7},{transform:"translate(-50%,-50%) scale(1.3)",opacity:0}],{duration:ALL+420,easing:"ease-out",fill:"forwards"});
  if(!calm){
    // one clean shockwave
    const ring=document.createElement("div");ring.className="jring";Object.assign(ring.style,{left:cx+"px",top:cy+"px"});fx.push(ring);
    ring.animate([{transform:"translate(-50%,-50%) scale(.25)",opacity:.9},{transform:"translate(-50%,-50%) scale(3)",opacity:0}],{duration:700,easing:"cubic-bezier(.1,.7,.3,1)",fill:"forwards"});
  }
  fx.forEach(x=>host.appendChild(x));setTimeout(()=>fx.forEach(x=>x.remove()),ALL+700);
  // pulled from the big name straight into the card
  setTimeout(()=>{const nr=P.getBoundingClientRect();P.remove();done({fr,nr,fs:fs*big,name,ink:INK})},ALL+20);
}
let revealEnd=0;
const afterReveal=fn=>setTimeout(fn,Math.max(0,revealEnd-Date.now()));
function reveal(info,scope){
  /* Landing → card: the slot (as it looks, dark with the yellow outline) grows to the card's size and spot,
     the landed name rides along into the title position, then the card fades in over the top. */
  const card=scope.querySelector(".bar,.camtgt");if(!card||!card.animate)return;
  if(!info){card.animate([{opacity:0},{opacity:1}],{duration:220});return}
  revealEnd=Date.now()+960;
  const h2=card.querySelector("h2,.ct-n"),cr=card.getBoundingClientRect(),hr=h2.getBoundingClientRect(),fr=info.fr,nr=info.nr;
  const cs=getComputedStyle(card),hs=getComputedStyle(h2),E="cubic-bezier(.3,.75,.2,1)",D=440,X=200;
  const after=[];let n=card.nextElementSibling;while(n){after.push(n);n=n.nextElementSibling}
  const host=scope.closest("dialog")||scope.closest(".jpx,.jpdemo")||document.body;
  const box=document.createElement("div");box.className="flybox";host.appendChild(box);
  box.animate([
    {left:fr.left+"px",top:fr.top+"px",width:fr.width+"px",height:fr.height+"px",borderRadius:"14px"},
    {left:cr.left+"px",top:cr.top+"px",width:cr.width+"px",height:cr.height+"px",borderRadius:cs.borderTopLeftRadius}],{duration:D,easing:E,fill:"forwards"});
  const font={fontFamily:hs.fontFamily,fontWeight:hs.fontWeight,fontSize:hs.fontSize,lineHeight:hs.lineHeight,letterSpacing:hs.letterSpacing,textTransform:hs.textTransform,color:info.ink||"#F5B83D"};
  const words=h2.textContent.trim().split(/\s+/).map(w=>`<span class="fw">${esc(w)}</span>`).join(" ");
  const ghost=document.createElement("div");ghost.className="flyname";ghost.innerHTML=words;
  Object.assign(ghost.style,font,{left:hr.left+"px",top:hr.top+"px",width:hr.width+"px",whiteSpace:getComputedStyle(h2).whiteSpace==="nowrap"?"nowrap":"normal"});
  host.appendChild(ghost);
  const line=document.createElement("div");line.className="flyname";line.innerHTML=words;
  Object.assign(line.style,font,{left:"0px",top:"0px",whiteSpace:"nowrap",visibility:"hidden"});host.appendChild(line);
  const lr=line.getBoundingClientRect(),ls=[...line.children].map(x=>x.getBoundingClientRect());line.remove();
  const sc=Math.min(info.fs/parseFloat(hs.fontSize),(fr.width-24)/Math.max(1,lr.width)),x0=nr.left+nr.width/2-lr.width*sc/2,y0=nr.top+nr.height/2-lr.height*sc/2;
  [...ghost.children].forEach((sp,i)=>{const f_=sp.getBoundingClientRect(),sx=x0+(ls[i].left-lr.left)*sc,sy=y0+(ls[i].top-lr.top)*sc;
    sp.animate([{transform:`translate(${sx-f_.left}px,${sy-f_.top}px) scale(${sc})`},{transform:"none"}],{duration:D,easing:E,fill:"forwards"})});
  card.style.opacity="0";after.forEach(k=>k.style.opacity="0");
  setTimeout(()=>{
    card.style.opacity="";card.animate([{opacity:0},{opacity:1}],{duration:X,easing:"ease-out"});
    ghost.animate([{opacity:1},{opacity:0}],{duration:X,fill:"forwards"}).onfinish=()=>ghost.remove();
    box.animate([{opacity:1},{opacity:0}],{duration:X,fill:"forwards"}).onfinish=()=>box.remove();
    after.forEach((k,i)=>{k.style.opacity="";k.animate([{opacity:0,transform:"translateY(8px)"},{opacity:1,transform:"none"}],{duration:280,delay:60+i*50,easing:"ease-out",fill:"backwards"})});
  },D);
}
setTimeout(()=>{gload().catch(()=>{})},1200);
function reelNote(){return "Flick it down. Harder flick, longer spin."}

// Leaving a bar inside 3 minutes: ask whether it counts before heading on.
function noneLeft(){const g=G();sheet(`<h3>Nothing else open nearby</h3><p class="note">${g.cz.type==="me"||g.cz.type==="spot"?`No other rooftops are open within ${kmTxt(g.cz.r)} of ${g.cz.type==="me"?"you":esc(g.cz.name.replace(/^Around /,""))} right now.`:"No other rooftops are open in this part of town right now."} Wrap it up, or stay where you are.</p><div class="acts"><button class="btn" type="button" id="nlE">End the crawl</button><button class="btn dark" type="button" id="nlS">Stay put</button></div>`,()=>{$("nlS").onclick=closeSheet;$("nlE").onclick=()=>{closeSheet();endGame(now())}})}
function askDrink(a0,then){const v=byId(a0.id);
  sheet(`<h3>Count your visit to ${esc(v.name)}?</h3><p class="note">If you stopped in, you can count this rooftop.</p><div class="acts"><button class="btn" type="button" id="dY">Yes, count it</button><button class="btn dark" type="button" id="dN">No, don't count it</button><button class="btn line" type="button" id="dS">Stay a bit longer</button></div>`,()=>{
    $("dS").onclick=closeSheet;
    $("dY").onclick=()=>{closeSheet();a0._ans=true;save();then()};
    $("dN").onclick=()=>{closeSheet();a0._ans=false;save();then()};
  })}
function gameReelNames(){const g=G(),P=spinPool().pool.map(v=>v.name);if(P.length>=6)return P;return P.concat(inCircle(g.center,g.radius).filter(v=>!v.tempClosed).map(v=>v.name)).concat(P.length?[]:VENUES.slice(0,10).map(v=>v.name))}
function doSpin(force,vel){
  const g=G();if(spinning||!g||g.ended)return;ac();
  const a0=atVisit();
  if(a0&&force!==true&&a0._ans===undefined&&now()-a0.arrivedAt<DWELL_MIN*60000){askDrink(a0,()=>doSpin(true,vel));return false}
  if(!g.started){track("crawl_start",{demo:!!g.demo,mode:CR(g)?"rr":"rush",length_min:CR(g)?null:g.len,radius_km:g.radius||null,city:g.city||S.city||null,camera:!!(typeof CAM!=="undefined"&&CAM.once)});prewarmAudio();const t=now();g.started=true;g.startedAt=t;g.ff0=S.test?(S.ff||0):0;g.endsAt=t+g.len*60000;if(CR(g))g.autoAt=t+RR_AUTO;const y=you();if(y)g.startPos={lat:y.lat,lng:y.lng}}
  const a=atVisit();if(a){a.dep=now();if(a._ans!==undefined)a._inCount=a._ans}
  endTripFreeze(g);
  if(!g.demo&&!CR(g)&&!g.jp){if(g.jpLeg==null)g.jpLeg=1+Math.floor(Math.random()*(g.len===60?2:4));
    if(g.visits.length>=g.jpLeg&&spinPool().pool.length){jackpotSpin(vel);return}}
  const {pool:P}=spinPool();
  if(!P.length){save();renderPlay();if(CR(g))noneLeft();else openMove(true);return false}
  const pick=P[Math.floor(Math.random()*P.length)],from=fromPoint();barPhoto(pick);
  spinning=true;seen("spin");if(vel!==undefined){S.tips.swipe=1}g.finalBanner=false;renderPlay();
  if(!reel||!$("reelBox")||!document.contains($("reelBox"))){
    $("stage").innerHTML=`<div class="ready">${mixlineHTML(g)}<div id="reelBox"></div><div class="poolnum"><b>${P.length}</b> rooftop${P.length===1?"":"s"} in the mix</div></div>`;
    reel=makeReel($("reelBox"),gameReelNames(),{});
  }
  if(g.pick3){
    reel.spinTo(pick.name,vel===undefined?-(30+Math.random()*20):vel,()=>{
      const others=shuffle(P.filter(v=>v.id!==pick.id)).slice(0,2),opts=[pick,...others];g.pick3=false;spinning=false;save();
      opts.forEach(v=>barPhoto(v));
      const choose=v=>{closeSheet();g.target=v.id;g.targetAt=now();g.targetFrom={lat:from.lat,lng:from.lng};g.reelOpen=false;animateId=v.id;rollWild(g,v.id);save();renderPlay();onLocation()};
      sheet(`<h3>Pick from 3</h3><p class="note">Your wildcard. Choose where you're heading.</p><div class="acts">${opts.map(v=>{const o=openState(v,now());return `<button class="opt" type="button" data-p3="${v.id}"><span class="ic">${I.pin}</span><span class="t"><b>${esc(v.name)}</b><small>${walkMin(from,v)} min walk · ${mOrKm(dist(from,v))}${o.open?" · til "+clock12(o.closeAt):""}</small></span></button>`}).join("")}</div>`,
        ()=>document.querySelectorAll("[data-p3]").forEach(b=>b.onclick=()=>choose(byId(b.dataset.p3))));
      $("sheet").addEventListener("close",()=>{if(!g.target)choose(pick)},{once:true});  // closed without choosing: take the one it landed on
    });
    return;
  }
  reel.spinTo(pick.name,vel===undefined?-(30+Math.random()*20):vel,info=>{g.target=pick.id;g.targetAt=now();g.targetFrom={lat:from.lat,lng:from.lng};g.reelOpen=false;animateId=null;if(!CR(g))rollWild(g,pick.id);spinning=false;save();renderPlay();reveal(info,$("stage"));onLocation();dealWild(900)});
}
/* ---------- the Jackpot: once a timed game, a longer gold spin that pays out one of five rewards ---------- */
const JACKPOTS=[
  {k:"call",t:"Your call",d:"Pick your next bar from three. You've got 20 seconds, and the trip there's on the house (up to 15 minutes).",go:"Show me"},
  {k:"freeze",t:"Time freeze",d:"The clock's frozen for 10 minutes. Stay for another, or go somewhere further.",go:"Spin for your bar"},
  {k:"spins",t:"Free spins",d:"Your next 3 re-spins don't cost a thing.",go:"Spin for your bar"},
  {k:"short",t:"Shortcut",d:"Your next bar is the closest one that's open.",go:"Show me"},
  {k:"dealer",t:"Dealer's choice",d:"You pick the wildcard for your next bar.",go:"Pick it"}];
function jackpotSpin(vel){
  const g=G(),opts=JACKPOTS.filter(j=>j.k!==S.lastJP),j=(S.test&&S.forceJP&&JACKPOTS.find(x=>x.k===S.forceJP))||opts[Math.floor(Math.random()*opts.length)];
  g.jp={k:j.k,at:now(),leg:g.visits.length,claimed:false};S.lastJP=j.k;spinning=true;save();track("jackpot",{kind:j.k,leg:g.visits.length});
  if(!reel||!$("reelBox")||!document.contains($("reelBox"))){
    $("stage").innerHTML=`<div class="ready">${mixlineHTML(g)}<div id="reelBox"></div><div class="poolnum">&nbsp;</div></div>`;
    reel=makeReel($("reelBox"),gameReelNames(),{});
  }
  // the card's button claims it straight from the jackpot layer
  const ctx=jackpotCtx();
  ctx.onLand=()=>{if(j.k==="freeze"){applyJackpot(g,j);save();renderClock()}};   // the real clock freezes the moment it lands
  jackpotRun($("reelBox"),reel,vel,j,res=>{spinning=false;applyJackpot(g,j);g.jp.claimed=true;save();
    if(j.k==="call"&&res.bar){setTarget(res.bar,ctx.from);startFreeze(g,15*60000,true);animateId=res.bar.id;save();renderPlay();onLocation();dealWild(700);return}
    if(j.k==="short"&&ctx.nearest){setTarget(ctx.nearest,ctx.from);animateId=ctx.nearest.id;save();renderPlay();onLocation();dealWild(700);return}
    if(j.k==="dealer"){g.dealt={leg:g.visits.length,text:res.wild||null,shown:true};save();renderPlay();doSpin(true);return}
    renderPlay();doSpin(true)},ctx);
}
/* The takeover. The moment the wheel's flicked it lifts out of the page (bigger, tilted, gold), the rest drops
   into the dark, warm light swells in from the sides, streaks race past, and the riser builds from the first
   moment to the last. The bars spin as normal, for longer; it lands on the reward, which punches out like a bar
   name does and then flies into a card in the middle of the screen. The card's button carries on the game. */
function jackpotRun(box,R_,vel,j,done,ctx){
  ac();
  const r=box.getBoundingClientRect(),calm=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ov=document.createElement("div");ov.className="jpx";
  ov.innerHTML=`<i class="jpx-bg"></i><i class="jpx-glow l"></i><i class="jpx-glow r"></i><div class="jpx-streaks"></div>`;
  document.body.appendChild(ov);
  if(!calm){const st=ov.querySelector(".jpx-streaks");for(let i=0;i<18;i++){const e=document.createElement("i"),left=i%2?78+Math.random()*20:Math.random()*20;
    Object.assign(e.style,{left:left+"vw",height:(40+Math.random()*90)+"px",animationDuration:(.45+Math.random()*.5)+"s",animationDelay:(-Math.random())+"s",opacity:.25+Math.random()*.5});st.appendChild(e)}}
  const ph=document.createElement("div");ph.style.height=r.height+"px";box.parentNode.insertBefore(ph,box);
  Object.assign(box.style,{position:"fixed",left:r.left+"px",top:r.top+"px",width:r.width+"px",margin:"0",zIndex:"2"});ov.appendChild(box);
  const camUp=document.body.classList.contains("camon");if(camUp)ov.classList.add("camup");
  const tx=camUp?0:innerWidth/2-(r.left+r.width/2),ty=camUp?0:innerHeight*.5-(r.top+r.height/2),SC=camUp?1:Math.max(1,Math.min(1.12,(innerWidth-20)/(r.width*1.03)));
  box.classList.add("lifting");requestAnimationFrame(()=>{box.classList.add("gold","jpbig");ov.classList.add("live")});
  box.animate([{transform:"translate(0,0) scale(1)"},{transform:`translate(${tx}px,${ty}px) scale(${SC})`}],{duration:900,easing:"cubic-bezier(.33,0,.15,1)",fill:"forwards"});
  ov.querySelector(".jpx-bg").animate([{opacity:0},{opacity:1}],{duration:700,easing:"cubic-bezier(.4,0,.2,1)",fill:"forwards"});   // only the dark fades in; the wheel stays solid
  let stopRiser=()=>{};
  const T=R_.spinTo(j.t,Math.min(-40,vel||-40),info=>{
    ov.classList.add("won");confetti(ov);ctx.onLand&&ctx.onLand();
    const fl=document.createElement("i");fl.className="jpx-flash";ov.appendChild(fl);fl.animate([{opacity:.9},{opacity:0}],{duration:600,easing:"ease-out",fill:"forwards"}).onfinish=()=>fl.remove();
    // the card, in the middle of the screen, built the same way as a bar's card
    const wrap=document.createElement("div");wrap.className="jpcard-wrap";
    wrap.innerHTML=`<div class="bar jpcard jc-${j.k}"><span class="eyebrow">Jackpot</span><h2>${esc(j.t)}</h2>${jvHTML(j,ctx)}<p>${esc(jvText(j))}</p>${jvActs(j)}</div>`;
    ov.appendChild(wrap);
    box.animate([{opacity:1},{opacity:0}],{duration:260,delay:120,fill:"forwards"});
    reveal(info,wrap);
    const card=wrap.querySelector(".jpcard");let gone=false;
    const choose=res=>{if(gone)return;gone=true;ctx.stop&&ctx.stop();
      ov.animate([{opacity:1},{opacity:0}],{duration:300,fill:"forwards"}).onfinish=()=>{ov.remove();ph.remove();done&&done(res||{})}};
    const go=card.querySelector("#jvGo");if(go&&j.k!=="dealer")go.onclick=()=>choose({});
    setTimeout(()=>jvRun(j,card,ctx,choose),680);   // once the card's settled
  },{jackpot:true,dur:6.5,onLand:()=>stopRiser()});
  stopRiser=riser(T);whoosh();   // timed to this exact spin, so it peaks and cuts as the wheel stops
  (()=>{const pat=[];let t=0;const end=T*1000-120;while(t<end){const q=t/end,on=Math.round(10+q*32),off=Math.round(380-q*330);pat.push(on,off);t+=on+off}buzz(pat)})();
}
/* What sits in the middle of each jackpot card: a little graphic that plays once the card lands.
   Your call and Dealer's choice are the choice itself, made right there on the card. */
function jvHTML(j,ctx){
  if(j.k==="call")return `<div class="jv-count"><b id="jvSec">20</b><small>seconds</small></div><div class="jv jv-call">${ctx.bars.map((v,i)=>`<button class="jv-tile" type="button" data-i="${i}" disabled><span class="jv-f">?</span><span class="jv-b"><i class="jv-ph"></i><b>${esc(v.name)}</b><small>${ctx.from?walkMin(ctx.from,v)+" min walk":esc(v.area)}</small></span></button>`).join("")}</div><div class="jv-timer"><i></i></div>`;
  if(j.k==="freeze"){
    // frost: jagged crystals that grow in from the rim, each with a branch or two
    let cr="";for(let i=0;i<16;i++){const a=(i/16)*Math.PI*2+Math.random()*.3,len=16+Math.random()*20;let x=60+Math.cos(a)*55,y=60+Math.sin(a)*55,d=`M${x.toFixed(1)} ${y.toFixed(1)}`;
      const steps=4;for(let k=1;k<=steps;k++){const r=55-len*k/steps,j2=(Math.random()-.5)*.22;x=60+Math.cos(a+j2)*r;y=60+Math.sin(a+j2)*r;d+=` L${x.toFixed(1)} ${y.toFixed(1)}`;
        if(k===2||k===3&&Math.random()<.6){const b2=a+(Math.random()<.5?.5:-.5),bl=4+Math.random()*5;d+=` M${x.toFixed(1)} ${y.toFixed(1)} l${(Math.cos(b2+Math.PI)*bl).toFixed(1)} ${(Math.sin(b2+Math.PI)*bl).toFixed(1)} M${x.toFixed(1)} ${y.toFixed(1)}`}}
      cr+=`<path pathLength="1" d="${d}" style="animation-delay:${(Math.random()*.35).toFixed(2)}s"/>`}
    return `<div class="jv jv-freeze"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="54" class="trk"/><circle cx="60" cy="60" r="54" class="arc"/><g class="ice">${cr}</g></svg><i class="jv-frost"></i><b>${mmss(ctx.clock())}</b><small>left</small>${[...Array(7)].map(()=>`<i class="spk" style="left:${15+Math.random()*70}%;top:${15+Math.random()*70}%;animation-delay:${(.4+Math.random()*.8).toFixed(2)}s"></i>`).join("")}</div>`}
  if(j.k==="spins")return `<div class="jv jv-spins">${[0,1,2].map(()=>`<i class="jv-tok">${I.redo}</i>`).join("")}<b class="jv-x">×3</b></div>`;
  if(j.k==="short"){const v=ctx.nearest;return `<div class="jv jv-short"><svg viewBox="0 0 300 96" preserveAspectRatio="none"><path class="grid" d="M0 24H300M0 56H300M0 84H300M48 0V96M122 0V96M196 0V96M262 0V96"/><path class="road" d="M30 70 C 90 70, 110 26, 170 30 S 250 40, 268 26"/></svg><i class="me"></i><i class="pin">${I.pin}</i><span class="lbl"><b>${esc(v.name)}</b> · ${ctx.from?walkMin(ctx.from,v)+" min walk":mOrKm(ctx.nearestM||0)}</span></div>`}
  if(j.k==="dealer")return `<div class="jv jv-deal">${ctx.wilds.map((w,i)=>`<button class="jv-card" type="button" data-i="${i}" disabled><span class="jv-f">${I.sparkle}</span><span class="jv-b"><span class="jv-face">${wildFace(w)}</span></span></button>`).join("")}</div>`;
  return "";
}
function jvRun(j,card,ctx,choose){
  const q=sel=>[...card.querySelectorAll(sel)];
  if(j.k==="call"){
    const tiles=q(".jv-tile");
    ctx.bars.forEach((v,i)=>barPhoto(v).then(ph=>{if(ph)tiles[i].querySelector(".jv-ph").style.backgroundImage=`url("${ph.url}")`}));
    tiles.forEach((t,i)=>setTimeout(()=>{t.classList.add("on");sfx("flip");buzz(8)},i*260));
    setTimeout(()=>{tiles.forEach(t=>{t.disabled=false;t.onclick=()=>choose({bar:ctx.bars[+t.dataset.i]})});
      const bar=card.querySelector(".jv-timer i"),t0=Date.now();card.classList.add("timing");
      const sec=card.querySelector("#jvSec");let lastS=20;card.classList.add("counting");
      const tm=setInterval(()=>{const r=1-(Date.now()-t0)/20000,left=Math.max(0,Math.ceil(r*20));bar.style.transform=`scaleX(${Math.max(0,r)})`;
        if(left!==lastS){lastS=left;sec.textContent=left;sec.animate([{transform:"scale(1.25)"},{transform:"none"}],{duration:220,easing:"ease-out"});if(left<=5&&left>0){tick(left<=3?1300:1000);buzz(12);sec.classList.add("hot")}}
        if(r<=0){clearInterval(tm);choose({bar:ctx.bars[0]})}},100);ctx.stop=()=>clearInterval(tm)},3*260+350);
  }
  if(j.k==="freeze"){const fz=card.querySelector(".jv-freeze");fz.querySelector("b").textContent=mmss(ctx.clock());fz.classList.add("on");sfx("frost");buzz(20)}
  if(j.k==="spins")q(".jv-tok").forEach((t,i)=>setTimeout(()=>{t.classList.add("on");sfx("clink");buzz(10);if(i===2)setTimeout(()=>card.querySelector(".jv-x").classList.add("on"),220)},i*240));
  if(j.k==="short"){card.querySelector(".jv-short").classList.add("on");sfx("path")}
  if(j.k==="dealer"){const cs=q(".jv-card");cs.forEach((c,i)=>setTimeout(()=>{c.classList.add("dealt");sfx("deal")},i*120));
    cs.forEach((c,i)=>setTimeout(()=>{c.classList.add("on");sfx("flip")},500+i*260));
    // tap a card: it flips over to show what you're in for; tap another to swap; then lock it in
    let pickI=-1;const go=card.querySelector("#jvGo"),txt=card.querySelector(":scope>p");
    const flip=(c,html)=>{const b=c.querySelector(".jv-b");b.animate([{transform:"rotateY(180deg) scaleX(1)"},{transform:"rotateY(180deg) scaleX(0)"}],{duration:140,easing:"ease-in"}).onfinish=()=>{b.innerHTML=html;b.animate([{transform:"rotateY(180deg) scaleX(0)"},{transform:"rotateY(180deg) scaleX(1)"}],{duration:180,easing:"ease-out"})}};
    setTimeout(()=>cs.forEach(c=>{c.disabled=false;c.onclick=()=>{const i=+c.dataset.i;if(i===pickI)return;
      if(pickI>=0){const p=cs[pickI];p.classList.remove("picked");flip(p,`<span class="jv-face">${wildFace(ctx.wilds[pickI])}</span>`)}
      pickI=i;c.classList.add("picked");card.classList.add("haspick");sfx("flip");buzz(10);flip(c,`<span class="jv-txt"><b>${esc((WNAME[ctx.wilds[i]]||["Wildcard"])[0])}</b>${esc(ctx.wilds[i])}</span>`);
      if(txt)txt.textContent="That's the one for your next bar.";if(go)go.hidden=false}}),500+3*260+200);
    if(go){go.hidden=true;go.onclick=()=>{if(pickI>=0)choose({wild:ctx.wilds[pickI]})}}}
}
// what the card says under the graphic, and its button
const jvText=j=>j.k==="call"?"Pick one before the bar runs out. The trip there's on the house.":j.k==="dealer"?"Tap a card to see what you're in for.":j.d;
const jvActs=j=>j.k==="call"?"":j.k==="dealer"?`<button class="btn dark" type="button" id="jvGo" hidden>Lock it in</button>`:`<button class="btn dark" type="button" id="jvGo">${j.go}</button>`;
function jackpotCtx(){   // the real numbers, for a game in progress
  const g=G(),from=fromPoint(),P=spinPool().pool.slice(),near=P.slice().sort((a,b)=>dist(from,a)-dist(from,b))[0];
  return {from,bars:shuffle(P).slice(0,3),nearest:near,clock:()=>remaining(),wilds:shuffle(WILDS.slice()).slice(0,3)};
}
function demoCtx(){      // stand-ins for the test jackpot
  const c=AREAS.find(a=>a.name==="The City")||AREAS[0],P=playable(inCircle(c,1),false).filter(v=>!v.tempClosed),near=P.slice().sort((a,b)=>dist(c,a)-dist(c,b))[0];
  return {from:{lat:c.lat,lng:c.lng},bars:shuffle(P.slice()).slice(0,3),nearest:near,clock:()=>37*60000+12000,wilds:shuffle(WILDS.slice()).slice(0,3)};
}
function applyJackpot(g,j){if(g.jp.applied)return;g.jp.applied=true;if(j.k==="freeze")startFreeze(g,10*60000,false);if(j.k==="spins")g.freeSkips=(g.freeSkips||0)+3}
// test panel: an endless wheel of every bar. Flick, land, spin again. No game, no clock, nothing saved.
function wheelSandbox(){
  const ov=document.createElement("div");ov.className="jpdemo sandbox";
  ov.innerHTML=`<div class="jpdemo-in"><p class="note">Wheel sandbox. No game, nothing saved.</p><div class="demo"><div id="sbBox"></div></div><button class="btn line" type="button" id="sbX">Close</button></div>`;
  document.body.appendChild(ov);$("sbX").onclick=()=>ov.remove();
  bindDemo(null,null,$("sbBox"));
}
// test panel: a stand-in wheel of real bars. Flick it and the jackpot takes over, same as in a game.
function jackpotDemo(k){prewarmAudio();
  const opts=JACKPOTS.filter(j=>j.k!==S.lastJP),j=(k&&JACKPOTS.find(x=>x.k===k))||opts[Math.floor(Math.random()*opts.length)];S.lastJP=j.k;save();
  const ov=document.createElement("div");ov.className="jpdemo";
  ov.innerHTML=`<div class="jpdemo-in"><p class="note">Test jackpot: <b>${j.t}</b>. Flick the wheel like a normal spin.</p>
    <div class="chips jd-pick">${JACKPOTS.map(x=>`<button class="chip" type="button" data-k="${x.k}" aria-pressed="${x.k===j.k}">${x.t}</button>`).join("")}</div>
    <div id="jdReel"></div><button class="btn line" type="button" id="jdX">Close</button></div>`;
  document.body.appendChild(ov);
  const pool=playable(VENUES,false).filter(v=>!v.tempClosed).map(v=>v.name);
  $("jdReel").style.height=Math.round(Math.max(230,Math.min(760,innerHeight*.56)))+"px";
  const R_=makeReel($("jdReel"),pool,{hint:true,onRelease:vel=>{if(R_.busy)return false;$("jdX").hidden=true;
    ov.querySelector(".jd-pick").style.visibility="hidden";
    jackpotRun($("jdReel"),R_,vel,j,res=>{ov.remove();jackpotDemo(j.k)},demoCtx())}});
  ov.querySelectorAll("[data-k]").forEach(b=>b.onclick=()=>{ov.remove();jackpotDemo(b.dataset.k)});
  $("jdX").onclick=()=>ov.remove();
}
function jackpotSheet(){
  const g=G();if(!g||!g.jp||g.jp.claimed)return;const j=JACKPOTS.find(x=>x.k===g.jp.k);
  if(!g.jp.applied){applyJackpot(g,j);save();renderClock()}
  let acted=false;const act=()=>{if(acted)return;acted=true;g.jp.claimed=true;save();
    // Your call and Dealer's choice open their own pop-up in place, so this one doesn't close (its close would end theirs)
    if(j.k!=="call"&&j.k!=="dealer")closeSheet();claimJackpot(j.k)};
  sheet(`<div class="jpbox"><div class="jpk">Jackpot</div><h3>${j.t}</h3><p class="note">${j.d}</p></div><button class="btn" type="button" id="jpGo">${j.go}</button>`,
    ()=>{$("jpGo").onclick=act;$("sheet").addEventListener("close",act,{once:true})});   // swiped away: carry on as if they'd tapped
}
function claimJackpot(k){
  if(k==="call")return yourCall();
  if(k==="short")return shortcut();
  if(k==="dealer")return dealerChoice();
  renderPlay();doSpin(true);
}
function setTarget(v,from){const g=G();g.target=v.id;g.targetAt=now();g.targetFrom={lat:from.lat,lng:from.lng};g.reelOpen=false;rollWild(g,v.id)}
function yourCall(){
  const g=G(),from=fromPoint(),P=shuffle(spinPool().pool.slice()).slice(0,3);if(!P.length){renderPlay();return}
  let timer=0;const SEC=20;
  const choose=v=>{clearInterval(timer);if(g.target)return;setTarget(v,from);startFreeze(g,15*60000,true);animateId=v.id;save();closeSheet();renderPlay();onLocation()};
  sheet(`<h3>Your call</h3><p class="note">Pick one. The trip there's on the house.</p><div class="jptimer"><i id="jpT"></i><b id="jpS">${SEC}</b></div>
    <div class="acts">${P.map(v=>{const o=openState(v,now());return `<button class="opt" type="button" data-yc="${v.id}"><span class="ic">${I.pin}</span><span class="t"><b>${esc(v.name)}</b><small>${walkMin(from,v)} min walk · ${mOrKm(dist(from,v))}${o.open?" · til "+clock12(o.closeAt):""}</small></span></button>`}).join("")}</div>`,()=>{
    document.querySelectorAll("[data-yc]").forEach(b=>b.onclick=()=>choose(byId(b.dataset.yc)));
    const t0=Date.now();timer=setInterval(()=>{const r=SEC-(Date.now()-t0)/1000;if($("jpT"))$("jpT").style.width=Math.max(0,r/SEC*100)+"%";if($("jpS"))$("jpS").textContent=Math.max(0,Math.ceil(r));if(r<=0)choose(P[0])},200);
    $("sheet").addEventListener("close",()=>{if(!g.target)choose(P[0])},{once:true});   // out of time or swiped away: the first one
  });
}
function shortcut(){
  const g=G(),from=fromPoint(),v=spinPool().pool.slice().sort((a,b)=>dist(from,a)-dist(from,b))[0];if(!v){renderPlay();return}
  setTarget(v,from);animateId=v.id;save();renderPlay();onLocation();
}
function dealerChoice(){
  const g=G(),cards=shuffle(WILDS.slice()).slice(0,3);let done=false;
  const pick=text=>{if(done)return;done=true;g.dealt={leg:g.visits.length,text};save();closeSheet();renderPlay();doSpin(true)};
  sheet(`<h3>Dealer's choice</h3><p class="note">Pick the wildcard for your next bar.</p>
    <div class="acts">${cards.map((c,i)=>`<button class="opt dealt" type="button" data-dc="${i}"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${WIC[(WNAME[c]||[0,"star"])[1]]}</svg></span><span class="t"><b>${esc((WNAME[c]||["Wildcard"])[0])}</b><small>${esc(c)}</small></span></button>`).join("")}
    </div>`,()=>{
    document.querySelectorAll("[data-dc]").forEach(b=>b.onclick=()=>pick(cards[+b.dataset.dc]));
    $("sheet").addEventListener("close",()=>pick(null),{once:true});
  });
}
/* A new wildcard flies in: a copy of the wildcard box comes tumbling in from above the screen, flipping as it
   falls, and crashes into its spot on the bar card. On impact the box squashes, the whole card jolts and the
   phone thuds. The box on the card stays empty until then. Once per wildcard. */
function dealWild(delay){
  const g=G();if(!g||!g.wild||g.wild.shown||g.wild.dealing||g.wild.id!==g.target)return;g.wild.dealing=true;
  setTimeout(()=>{
    const slot=$("stage")&&$("stage").querySelector(".bar .wild,.camtgt .wild");if(!slot||S.route!=="play"){g.wild.dealing=false;return}
    g.wild.shown=true;g.wild.flying=true;delete g.wild.dealing;save();
    const b=slot.getBoundingClientRect(),fly=slot.cloneNode(true);fly.removeAttribute("data-pending");fly.classList.add("wfly");
    Object.assign(fly.style,{left:b.left+"px",top:b.top+"px",width:b.width+"px",height:b.height+"px"});document.body.appendChild(fly);
    const calm=matchMedia("(prefers-reduced-motion: reduce)").matches,dy=-(b.top+b.height+80),dx=innerWidth*.35;
    sfx("deal");buzz(20);
    fly.animate(calm?[{opacity:0},{opacity:1}]:[
      {transform:`perspective(700px) translate(${dx}px,${dy}px) rotateY(-540deg) rotateZ(-25deg) scale(1.35)`,opacity:1},
      {transform:`perspective(700px) translate(${dx*.25}px,${dy*.18}px) rotateY(-150deg) rotateZ(-8deg) scale(1.2)`,offset:.6},
      {transform:"perspective(700px) translate(0,0) rotateY(0) rotateZ(0) scale(1)",opacity:1}],{duration:calm?200:620,easing:"cubic-bezier(.45,0,.75,.6)",fill:"forwards"}).onfinish=()=>{
      fly.remove();g.wild.landed=true;delete g.wild.flying;save();slot.removeAttribute("data-pending");
      const cur=($("stage")&&$("stage").querySelector(".bar .wild,.camtgt .wild"))||slot;cur.removeAttribute("data-pending");
      sfx("thud");buzz([90,50,140]);
      cur.animate([{transform:"scale(1.12,.86)"},{transform:"scale(.96,1.05)",offset:.4},{transform:"scale(1.02,.99)",offset:.7},{transform:"none"}],{duration:420,easing:"ease-out"});
      const card=cur.closest(".bar,.camtgt");if(card&&!calm)card.animate([{transform:"none"},{transform:"translate(-5px,3px) rotate(-.6deg)"},{transform:"translate(4px,-2px) rotate(.5deg)"},{transform:"translate(-3px,1px)"},{transform:"translate(2px,0)"},{transform:"none"}],{duration:380,easing:"ease-out"});
      cur.classList.add("fresh");setTimeout(()=>cur.classList.remove("fresh"),2200);
    };
  },delay||0);
}
/* ---------- Camera: front camera behind the game, and each spin recorded with the game drawn over it ---------- */
const CAM={stream:null,vid:null,rec:null,cv:null,last:[],t0:0,idleAt:0,busy:false};
function camSync(asked){
  const g=G(),spot=!!g&&!g.ended&&(spinning||!g.target&&(!atVisit()||g.reelOpen));
  const want=!!CAM.once&&S.route==="play"&&!document.hidden&&!!g&&(spot||!!CAM.rec);
  if(want&&!CAM.stream&&!CAM.busy){
    if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){CAM.once=false;toast("This browser can't use the camera.",3500);return}
    CAM.busy=true;
    navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:1920},height:{ideal:1080}},audio:{echoCancellation:false,noiseSuppression:false,autoGainControl:false,channelCount:{ideal:2},sampleRate:{ideal:48000}}}).then(st=>{
      CAM.busy=false;if(!(CAM.once&&S.route==="play"&&!document.hidden)){st.getTracks().forEach(t=>t.stop());return}
      CAM.stream=st;let v=$("camVid");if(!v){v=document.createElement("video");v.id="camVid";v.muted=true;v.playsInline=true;v.setAttribute("playsinline","");document.body.prepend(v)}
      v.classList.remove("on");v.onplaying=()=>v.classList.add("on");v.srcObject=st;v.play().catch(()=>{});CAM.vid=v;document.body.classList.add("camon");fitPlay();
    }).catch(e=>{CAM.busy=false;CAM.once=false;if(S.route==="play"&&!spinning)renderPlay();toast(e&&e.name==="NotAllowedError"?(NATIVE?"Camera's off for Rooftop Roulette. Allow it in your phone's settings.":"Camera blocked. Allow it in Chrome's site settings."):"Couldn't start the camera.",4000)});
  }
  // the camera layout goes up the moment it's asked for, before the picture arrives, so the plain wheel never flashes up
  if(CAM.once&&spot&&S.route==="play"&&!document.body.classList.contains("camon")){document.body.classList.add("camon");if(!spinning)fitPlay()}
  if(!CAM.once&&!CAM.rec&&!CAM.stream&&!CAM.busy&&document.body.classList.contains("camon")){document.body.classList.remove("camon");if(S.route==="play"&&!spinning){renderPlay();fitPlay()}}
  if(!want&&CAM.stream&&(!CAM.once||document.hidden||S.route!=="play")){if(CAM.rec)camStop(CAM.spun===false);CAM.stream.getTracks().forEach(t=>t.stop());CAM.stream=null;const v=$("camVid");if(v){v.srcObject=null;v.remove()}document.body.classList.remove("camon");if(S.route==="play"){if(!spinning)renderPlay();fitPlay()}}
}
document.addEventListener("visibilitychange",()=>camSync());
setInterval(()=>{
  {const g=G(),spot=!!g&&!g.ended&&(spinning||!g.target&&(!atVisit()||g.reelOpen));if(CAM.once&&!CAM.rec&&!spinning&&g&&!spot&&!($("sheet")&&$("sheet").open)&&Date.now()-(CAM.onceAt||0)>1500)CAM.once=false}   // backed out (closed the re-spin or drink question): no camera next time
  camSync();
  if(!CAM.stream){camRecPill();camLight(false);return}   // camera closed: the recording pill and light go with it
  const busy=spinning||!!document.querySelector(".jpx");
  if(!CAM.rec&&spinning){camStart();CAM.spun=true}
  else if(!CAM.rec&&CAM.once&&CAM.vid&&CAM.vid.videoWidth&&!document.hidden){camStart();CAM.spun=false}
  else if(CAM.rec){if(spinning)CAM.spun=true;
    if(!CAM.spun){if(Date.now()-CAM.t0>8000&&!document.querySelector("#v-play .reel .row")?.closest(".reel")?.matches(":active"))camStop(true)}   // touched the reel but never spun: no clip
    else{if(busy)CAM.idleAt=0;else if(!CAM.idleAt)CAM.idleAt=Date.now();
      if((CAM.idleAt&&Date.now()-CAM.idleAt>6000)||Date.now()-CAM.t0>90000)camStop()}}
  camLight(!!CAM.rec&&CAM.dark&&S.camLight!==false);camRecPill()},120);
let nudgeAt=0;setInterval(()=>{if(!document.body.classList.contains("camon")||spinning||!reel||reel.busy||!$("reelBox")||document.hidden||CAM.spun||$("sheet").open||Math.abs(reel.p-reel.rest)>.01)return;
  if(!nudgeAt)nudgeAt=Date.now();if(Date.now()-nudgeAt<6500)return;nudgeAt=Date.now();
  // a slow pull up of the wheel, then it drops back with a little bounce: "pull me down"
  const R_=reel,p0=R_.rest,t0=performance.now(),UP=420,HOLD=90;
  const f=t=>{if(R_!==reel||R_.down||spinning||!document.body.classList.contains("camon"))return;const u=Math.min(1,(t-t0)/UP),e=u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2;
    R_.p=p0+.42*e;R_.redraw();if(u<1)requestAnimationFrame(f);else setTimeout(()=>{if(R_===reel&&!R_.down&&!spinning)R_.bounce()},HOLD)};requestAnimationFrame(f)},500);   // the wheel twitches now and then, so it reads as a wheel
function camRecPill(){let p=$("camRec");document.body.classList.toggle("spinning",!!spinning);document.body.classList.toggle("recording",!!CAM.rec);document.body.classList.toggle("recspun",!!CAM.rec&&CAM.spun!==false);const on=!!CAM.rec&&CAM.spun!==false&&document.body.classList.contains("camon");
  if(!p){if(!on)return;p=document.createElement("div");p.id="camRec";p.className="camrec";p.innerHTML='<i></i><b></b><button type="button" class="recstop" aria-label="Stop recording"><span></span></button>';document.body.appendChild(p);
    p.querySelector(".recstop").onclick=e=>{e.stopPropagation();if(CAM.rec){camStop(CAM.spun===false);buzz(15)}}}
  p.classList.toggle("on",on);if(CAM.rec){const t=Math.floor((Date.now()-CAM.t0)/1000);p.querySelector("b").textContent=`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}}
// the build-up counts: recording starts the moment a finger lands on the reel
document.addEventListener("pointerdown",e=>{if(CAM.stream&&!CAM.rec&&e.isTrusted&&e.target.closest&&(e.target.closest("#v-play .reel")||camGrab(e.target))){camStart();CAM.spun=false}},true);
// a swipe down the middle of the screen drives the reel
const camGrab=t=>!!t.closest&&(!!t.closest("#camSwipe")||document.body.classList.contains("camon")&&!!t.closest("#v-play,.appbar")&&!t.closest("button,a,input,.reel,.camtgt,.wild,.bar,dialog"));
document.addEventListener("pointerdown",e=>{const sw=camGrab(e.target),rb=$("reelBox");if(!sw||!rb||spinning||rb.closest(".jpx"))return;e.preventDefault();
  rb.dispatchEvent(new PointerEvent("pointerdown",{pointerId:e.pointerId,pointerType:e.pointerType,isPrimary:true,clientX:e.clientX,clientY:e.clientY,bubbles:true}))});
function camLight(on){let l=$("camLight");if(!l){if(!on)return;l=document.createElement("div");l.id="camLight";document.body.appendChild(l)}l.classList.toggle("on",on)}
function camStart(){
  if(typeof MediaRecorder==="undefined"||!CAM.vid)return;
  const W=1080,H=1920,cv=document.createElement("canvas");cv.width=W;cv.height=H;CAM.cv=cv;CAM.last=[];
  // is it dark? (judged once, before the light comes on)
  try{const t=document.createElement("canvas");t.width=t.height=24;const tx=t.getContext("2d",{willReadFrequently:true});tx.drawImage(CAM.vid,0,0,24,24);const d=tx.getImageData(0,0,24,24).data;let L=0;for(let i=0;i<d.length;i+=4)L+=.2126*d[i]+.7152*d[i+1]+.0722*d[i+2];CAM.dark=L/(d.length/4)<70}catch(e){CAM.dark=false}
  const out=cv.captureStream(0),vtrack=out.getVideoTracks()[0];
  // sound: your mic plus the app's own clicks and chimes
  const a=ac();let mix=null;
  if(a&&a.createMediaStreamDestination){try{mix={d:a.createMediaStreamDestination(),m:CAM.stream.getAudioTracks().length?a.createMediaStreamSource(CAM.stream):null};if(mix.m)mix.m.connect(mix.d);mix.g=a.createGain();mix.g.gain.value=.7;OUT(a).connect(mix.g);mix.g.connect(mix.d);mix.j=a.createGain();mix.j.gain.value=.7;OUTJ(a).connect(mix.j);mix.j.connect(mix.d);mix.d.stream.getAudioTracks().forEach(t=>out.addTrack(t))}catch(e){mix=null}}
  if(!mix)CAM.stream.getAudioTracks().forEach(t=>out.addTrack(t));
  const mt=["video/mp4;codecs=avc1.42E01E,mp4a.40.2","video/mp4","video/webm;codecs=vp9,opus","video/webm"].find(m=>MediaRecorder.isTypeSupported(m))||"";
  let rec;try{rec=new MediaRecorder(out,mt?{mimeType:mt,videoBitsPerSecond:12e6,audioBitsPerSecond:160000}:{})}catch(e){return}
  const parts=[],gid=G().id;rec.ondataavailable=e=>{if(e.data&&e.data.size)parts.push(e.data)};
  rec.onstop=async()=>{setTimeout(()=>{CAM.saving=false},400);if(mix){try{OUT(a).disconnect(mix.g);mix.g.disconnect();OUTJ(a).disconnect(mix.j);mix.j.disconnect()}catch(e){}try{mix.m&&mix.m.disconnect()}catch(e){}}if(rec._drop)return;let type=rec.mimeType||mt||"video/webm",blob=new Blob(parts,{type});if(blob.size<2000)return;
    if(/mp4/.test(type)){try{const flat=mp4Flat(await blob.arrayBuffer());if(flat){blob=new Blob([flat],{type:"video/mp4"});type="video/mp4"}}catch(e){console.warn("clip: couldn't flatten",e)}}   // proper length in the gallery and on Instagram
    const at=Date.now();const auto=NATIVE&&S.clipAuto!==false?nativeSaveVideo(blob,clipFile(blob,type,at).name).then(()=>true).catch(e=>{console.warn(e);return false}):Promise.resolve(false);
    track("clip_recorded",{seconds:Math.round((Date.now()-CAM.t0)/1000),gallery:NATIVE&&S.clipAuto!==false});
    clipPut({id:"c"+at,game:gid,at,type,blob}).then(()=>auto).then(inGal=>{if(inGal)clipPut({id:"c"+at,game:gid,at,type,blob,gal:true}).catch(()=>{});const g_=G();if(g_&&g_.id===gid){g_.clipN=(g_.clipN||0)+1;save()}camSaved(blob,type,at,inGal)}).catch(()=>toast("Couldn't save the clip. Phone storage might be full.",4000))};
  CAM.rec=rec;CAM.t0=Date.now();CAM.idleAt=0;rec.start(1000);
  let next=0;const FR=1000/30,frame=()=>{camDraw();if(vtrack&&vtrack.requestFrame)vtrack.requestFrame()};
  const loop=t=>{if(CAM.rec!==rec)return;if(!next)next=t;if(t>=next-6){frame();next+=FR;if(t-next>FR*2)next=t+FR}requestAnimationFrame(loop)};frame();requestAnimationFrame(loop);   // 30fps on a fixed beat, so playback doesn't stutter
}
/* Chrome records fragmented MP4 with no duration in the header: galleries and Instagram read it as a few seconds.
   This rewrites it as a plain MP4 (one moov up front with full sample tables, then the media). */
function mp4Flat(buf){
  const u=new Uint8Array(buf),dv=new DataView(buf),boxes=(s,e)=>{const L=[];let o=s;while(o+8<=e){let sz=dv.getUint32(o),hs=8;const t=String.fromCharCode(u[o+4],u[o+5],u[o+6],u[o+7]);if(sz===1){sz=Number(dv.getBigUint64(o+8));hs=16}else if(sz===0)sz=e-o;if(sz<8)break;L.push({t,s:o,e:o+sz,b:o+hs});o+=sz}return L},
    kid=(b,t)=>boxes(b.b,b.e).find(x=>x.t===t),kids=(b,t)=>boxes(b.b,b.e).filter(x=>x.t===t);
  const top=boxes(0,u.length),ftyp=top.find(x=>x.t==="ftyp"),moov=top.find(x=>x.t==="moov");if(!moov||!top.some(x=>x.t==="moof"))return null;
  const mvex=kid(moov,"mvex"),trex={};if(mvex)kids(mvex,"trex").forEach(x=>{const p=x.b+4;trex[dv.getUint32(p)]={dur:dv.getUint32(p+8),size:dv.getUint32(p+12),flags:dv.getUint32(p+16)}});
  const tracks={};kids(moov,"trak").forEach(tr=>{const tk=kid(tr,"tkhd"),v=u[tk.b],id=dv.getUint32(tk.b+4+(v?16:8));tracks[id]={tr,id,smp:[]}});
  for(const mf of top.filter(x=>x.t==="moof"))for(const tf of kids(mf,"traf")){
    const th=kid(tf,"tfhd"),fl=dv.getUint32(th.b)&0xffffff;let p=th.b+4;const id=dv.getUint32(p);p+=4;const T=tracks[id],d=trex[id]||{dur:0,size:0,flags:0};if(!T)continue;
    let base=mf.s;if(fl&1){base=Number(dv.getBigUint64(p));p+=8}if(fl&2)p+=4;let dDur=d.dur,dSize=d.size,dFl=d.flags;if(fl&8){dDur=dv.getUint32(p);p+=4}if(fl&16){dSize=dv.getUint32(p);p+=4}if(fl&32){dFl=dv.getUint32(p);p+=4}
    let next=null;
    for(const tn of kids(tf,"trun")){const v=u[tn.b],f=dv.getUint32(tn.b)&0xffffff;let q=tn.b+4;const n=dv.getUint32(q);q+=4;let off=next==null?base:next;if(f&1){off=base+dv.getInt32(q);q+=4}let ffl=null;if(f&4){ffl=dv.getUint32(q);q+=4}
      for(let i=0;i<n;i++){let du=dDur,sz=dSize,sf=i===0&&ffl!=null?ffl:dFl,ct=0;if(f&0x100){du=dv.getUint32(q);q+=4}if(f&0x200){sz=dv.getUint32(q);q+=4}if(f&0x400){sf=dv.getUint32(q);q+=4}if(f&0x800){ct=v?dv.getInt32(q):dv.getUint32(q);q+=4}
        T.smp.push({off,sz,du,sync:!(sf&0x10000),ct});off+=sz}next=off}}
  const ids=Object.keys(tracks).map(Number).filter(id=>tracks[id].smp.length);if(!ids.length)return null;
  ids.forEach(id=>{const S_=tracks[id].smp;for(let i=0;i<S_.length-1;i++)if(!S_[i].du&&S_[i+1].du>1){const h=Math.floor(S_[i+1].du/2);S_[i].du=h;S_[i+1].du-=h}});
  // video: frames were drawn on a 30fps beat but stamped whenever the phone got round to it; snap them back onto the beat so playback is even
  ids.forEach(id=>{const tr=tracks[id].tr,md=kid(tr,"mdia"),hd=kid(md,"hdlr");if(!hd||String.fromCharCode(...u.subarray(hd.b+8,hd.b+12))!=="vide")return;
    const mh=kid(md,"mdhd"),ts=dv.getUint32(mh.b+(u[mh.b]?20:12)),F=ts/30,S_=tracks[id].smp;if(S_.length<3||S_.some(x=>x.ct))return;
    let t=0,prev=-1;const at=S_.map(x=>{const v=t;t+=x.du;return v}),end=t,slot=at.map(v=>{let k=Math.round(v/F);if(k<=prev)k=prev+1;prev=k;return k});
    for(let i=0;i<S_.length;i++)S_[i].du=Math.round(((i<S_.length-1?slot[i+1]:Math.max(slot[i]+1,Math.round(end/F)))-slot[i])*F)});
  const B=(t,...parts)=>{const n=8+parts.reduce((a,p)=>a+p.length,0),o=new Uint8Array(n),w=new DataView(o.buffer);w.setUint32(0,n);for(let i=0;i<4;i++)o[4+i]=t.charCodeAt(i);let k=8;parts.forEach(p=>{o.set(p,k);k+=p.length});return o},
    U32=(...a)=>{const o=new Uint8Array(a.length*4),w=new DataView(o.buffer);a.forEach((x,i)=>w.setUint32(i*4,x>>>0));return o},raw=b=>u.slice(b.s,b.e),body=b=>u.slice(b.b,b.e);
  const mvhd=kid(moov,"mvhd"),mts=dv.getUint32(mvhd.b+(u[mvhd.b]?20:12));
  // media goes after the moov; work out sizes first, then offsets
  const T=ids.map(id=>{const t=tracks[id],md=kid(kid(t.tr,"mdia"),"mdhd"),mv=u[md.b],ts=dv.getUint32(md.b+(mv?20:12)),dur=t.smp.reduce((a,s)=>a+s.du,0);return {t,md,ts,dur,bytes:t.smp.reduce((a,s)=>a+s.sz,0)}});
  const patchDur=(bx,durOff1,durOff0,val)=>{const o=raw(bx),w=new DataView(o.buffer),v=o[8];if(v)w.setBigUint64(8+durOff1,BigInt(val));else w.setUint32(8+durOff0,val>>>0);return o};
  const build=chunkOff=>{let at=chunkOff;const traks=T.map(x=>{const tr=x.t.tr,mdia=kid(tr,"mdia"),minf=kid(mdia,"minf"),stbl=kid(minf,"stbl"),S=x.t.smp,stts=[];S.forEach(s=>{const l=stts[stts.length-1];if(l&&l[1]===s.du)l[0]++;else stts.push([1,s.du])});
      const hasCt=S.some(s=>s.ct),sync=S.map((s,i)=>s.sync?i+1:0).filter(Boolean),allSync=sync.length===S.length;
      const st=B("stbl",raw(kid(stbl,"stsd")),B("stts",U32(0,stts.length),...stts.map(e=>U32(e[0],e[1]))),...(hasCt?[B("ctts",U32(0x01000000,S.length),...S.map(s=>U32(1,s.ct)))]:[]),...(allSync?[]:[B("stss",U32(0,sync.length),U32(...sync))]),
        B("stsc",U32(0,1,1,S.length,1)),B("stsz",U32(0,0,S.length),U32(...S.map(s=>s.sz))),B("stco",U32(0,1,at)));at+=x.bytes;
      const mi=B("minf",...boxes(minf.b,minf.e).filter(b=>b.t!=="stbl").map(raw),st);
      const md=B("mdia",patchDur(x.md,24,16,x.dur),...boxes(mdia.b,mdia.e).filter(b=>b.t!=="mdhd"&&b.t!=="minf").map(raw),mi);
      const tk=patchDur(kid(tr,"tkhd"),28,20,Math.round(x.dur*mts/x.ts));
      return B("trak",tk,...boxes(tr.b,tr.e).filter(b=>b.t!=="tkhd"&&b.t!=="mdia"&&b.t!=="edts").map(raw),md)});
    const mdur=Math.max(...T.map(x=>Math.round(x.dur*mts/x.ts)));
    return B("moov",patchDur(mvhd,24,16,mdur),...boxes(moov.b,moov.e).filter(b=>b.t!=="mvhd"&&b.t!=="trak"&&b.t!=="mvex").map(raw),...traks)};
  const ft=ftyp?raw(ftyp):B("ftyp",new TextEncoder().encode("isom"),U32(512),new TextEncoder().encode("isomiso2mp41"));
  const total=T.reduce((a,x)=>a+x.bytes,0),mdatHead=8;let mv=build(0);mv=build(ft.length+mv.length+mdatHead);
  const out=new Uint8Array(ft.length+mv.length+mdatHead+total);out.set(ft,0);out.set(mv,ft.length);let k=ft.length+mv.length;new DataView(out.buffer).setUint32(k,mdatHead+total);out.set([109,100,97,116],k+4);k+=8;
  T.forEach(x=>x.t.smp.forEach(s=>{out.set(u.subarray(s.off,s.off+s.sz),k);k+=s.sz}));
  return out.buffer}
/* ---------- crawl links: the whole crawl packed into the link, so mates can see it and add it to their tab ---------- */
const SHARE_BASE="https://chriskova.github.io/rooftoproulette/";
const b64u=bytes=>{let s="";bytes.forEach(b=>s+=String.fromCharCode(b));return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")};
const unb64u=str=>{const s=atob(str.replace(/-/g,"+").replace(/_/g,"/"));return Uint8Array.from(s,c=>c.charCodeAt(0))};
async function packCrawl(r){const t0=r.startedAt,sec=t=>t==null?-1:Math.round((t-t0)/1000);
  const o={i:r.id,m:r.mode==="cruise"?"c":"r",l:r.len,ra:r.radius,c:r.city,a:r.areas,s:Math.round(t0/1000),e:sec(r.endedAt),d:sec(r.endsAt),
    p:r.startPos?[+r.startPos.lat.toFixed(5),+r.startPos.lng.toFixed(5)]:null,ce:r.center?[+r.center.lat.toFixed(4),+r.center.lng.toFixed(4)]:null,
    v:r.visits.filter(v=>v.arrivedAt!=null).map(v=>[v.id,sec(v.arrivedAt),sec(v.leftAt),v.counted===true?1:v.counted===false?0:-1,v.cant?1:0]),
    b:r.barOfDay||null,j:r.jp&&r.jp.k||null,n:r.title||null,cz:r.cz||null,ae:r.autoEnded?1:0};
  const raw=new TextEncoder().encode(JSON.stringify(o));
  if(window.CompressionStream){try{const z=new Uint8Array(await new Response(new Blob([raw]).stream().pipeThrough(new CompressionStream("deflate-raw"))).arrayBuffer());return "z"+b64u(z)}catch(e){}}
  return "j"+b64u(raw)}
async function unpackCrawl(str){let raw=unb64u(str.slice(1));
  if(str[0]==="z")raw=new Uint8Array(await new Response(new Blob([raw]).stream().pipeThrough(new DecompressionStream("deflate-raw"))).arrayBuffer());
  const o=JSON.parse(new TextDecoder().decode(raw)),t0=o.s*1000,at=x=>x<0?null:t0+x*1000;
  if(!o||!o.i||!Array.isArray(o.v))throw new Error("bad crawl link");
  return {id:o.i,mode:o.m==="c"?"cruise":"rush",len:o.l,radius:o.ra,city:o.c,areas:o.a||[],startedAt:t0,endedAt:at(o.e),endsAt:at(o.d),started:true,ended:true,
    startPos:o.p?{lat:o.p[0],lng:o.p[1]}:null,center:o.ce?{lat:o.ce[0],lng:o.ce[1]}:null,
    visits:o.v.filter(v=>byId(v[0])).map(v=>({id:v[0],arrivedAt:at(v[1]),leftAt:at(v[2]),counted:v[3]===1?true:v[3]===0?false:null,cant:v[4]?true:undefined})),
    barOfDay:o.b||null,jp:o.j?{k:o.j,claimed:true}:null,title:o.n||undefined,cz:o.cz||undefined,autoEnded:!!o.ae,trail:[],moves:[],bodDone:true,stillAsked:true,shared:true}}
async function crawlLink(r){try{return SHARE_BASE+"#crawl="+(await packCrawl(r))}catch(e){return SHARE_BASE}}
const crawlLine=r=>{const st=stats(r),n=st.counted.length;return `${r.title?r.title+": ":""}${n} bar${n===1?"":"s"} on Rooftop Roulette.`};
let SHARED=null;
async function openSharedFromHash(){const m=location.hash.match(/crawl=([A-Za-z0-9_-]+)/);if(!m)return;
  try{const r=await unpackCrawl(m[1]);SHARED=r;S.lastEnd=r.id;S.route="end";track("crawl_link_open",{in_tab:readH(HKEY).some(x=>x.id===r.id)});render()}
  catch(e){toast("That crawl link didn't work.",3500)}
  history.replaceState(null,"",location.pathname+location.search)}
function addSharedToTab(){const r=SHARED;if(!r)return;const L=readH(HKEY);if(!L.some(x=>x.id===r.id)){L.push(r);L.sort((x,y)=>y.startedAt-x.startedAt);writeH(HKEY,L)}
  if(!hTest)H=readH(HKEY);track("crawl_link_add");SHARED=null;toast("Added to your tab.",2500);
  if(hTest){go("home")}else{S.lastEnd=r.id;save();renderEnd()}}
let camPopT=null;
function camSaved(blob,type,at,inGal){let p=$("camPop");if(p){clearTimeout(camPopT);p.remove()}
  p=document.createElement("div");p.id="camPop";p.className="campop";const u=URL.createObjectURL(blob);
  p.innerHTML=`<video src="${u}" muted playsinline autoplay loop></video><span class="cpt"><b>Clip saved</b><small>On your crawl card${inGal?" and in your gallery":""}</small></span>${inGal?"":`<button type="button" data-a="save">Save</button>`}<button type="button" data-a="share" class="pri">Share</button>`;
  document.body.appendChild(p);requestAnimationFrame(()=>p.classList.add("on"));
  const bye=()=>{clearTimeout(camPopT);p.classList.remove("on");setTimeout(()=>{p.remove();URL.revokeObjectURL(u)},250)};
  if(p.querySelector('[data-a="save"]'))p.querySelector('[data-a="save"]').onclick=()=>{clipSave(blob,type,at);p.querySelector("b").textContent="Saved to your phone";clearTimeout(camPopT);camPopT=setTimeout(bye,2200)};
  p.querySelector('[data-a="share"]').onclick=()=>{bye();clipShare(blob,type,at)};
  let x0=null,dx=0;p.addEventListener("pointerdown",e=>{if(e.target.closest("button"))return;x0=e.clientX;dx=0});p.addEventListener("pointermove",e=>{if(x0===null)return;dx=e.clientX-x0;p.style.translate=dx+"px 0"});
  p.addEventListener("pointerup",()=>{if(x0===null)return;x0=null;if(Math.abs(dx)>60)bye();else p.style.translate=""});
  camPopT=setTimeout(bye,7000)}
function camStop(drop){const r=CAM.rec;CAM.rec=null;if(!drop)CAM.once=false;if(r&&r.state!=="inactive"){r._drop=!!drop;if(!drop)CAM.saving=true;try{r.requestData()}catch(e){}r.stop()}}
const svgImgs={};
function svgImg(el,col){const k=el.outerHTML+col;if(svgImgs[k])return svgImgs[k].complete&&svgImgs[k].naturalWidth?svgImgs[k]:null;
  const im=new Image();let src=el.outerHTML.replace(/currentColor/g,col);if(!/xmlns=/.test(src))src=src.replace("<svg",'<svg xmlns="http://www.w3.org/2000/svg"');
  im.src="data:image/svg+xml,"+encodeURIComponent(src);svgImgs[k]=im;return null}
const camPh={};
function camPhoto(url){if(!url)return null;if(camPh[url]!==undefined)return camPh[url]&&camPh[url].complete&&camPh[url].naturalWidth?camPh[url]:null;
  if(/^data:/.test(url)){const im=new Image();im.src=url;camPh[url]=im;return null}
  camPh[url]=null;fetch(url,{mode:"cors"}).then(r=>r.ok?r.blob():Promise.reject()).then(b=>createImageBitmap(b)).then(bm=>{camPh[url]={complete:true,naturalWidth:bm.width,bm}}).catch(()=>{camPh[url]=false});return null}
function camPaint(x,k,ox,oy,roots){
  const mm=new Map(),am=new Map(),cs_=new Map(),gs=el=>{let c=cs_.get(el);if(!c){c=getComputedStyle(el);cs_.set(el,c)}return c};
  const off=n=>{let X=0,Y=0;while(n){X+=n.offsetLeft||0;Y+=n.offsetTop||0;n=n.offsetParent}return {x:X,y:Y}};
  const mat=el=>{if(!el||el===document.documentElement||el.nodeType!==1)return new DOMMatrix();let M=mm.get(el);if(M)return M;M=mat(el.parentElement);
    const c=gs(el),hasT=c.transform!=="none",hasX=c.translate&&c.translate!=="none",hasS=c.scale&&c.scale!=="none";
    if(hasT||hasX||hasS){const o=off(el),org=c.transformOrigin.split(" ").map(parseFloat),ox=o.x+(org[0]||0),oy=o.y+(org[1]||0);M=M.translate(ox,oy);
      if(hasX){const t=c.translate.split(" ").map(parseFloat);M=M.translate(t[0]||0,t[1]||0)}if(hasS){const t=c.scale.split(" ").map(parseFloat);M=M.scale(t[0],t[1]==null?t[0]:t[1])}
      if(hasT)M=M.multiply(new DOMMatrix(c.transform));M=M.translate(-ox,-oy)}
    mm.set(el,M);return M};
  const alp=el=>{if(!el||el.nodeType!==1||el===document.documentElement)return 1;let a=am.get(el);if(a!=null)return a;a=alp(el.parentElement)*parseFloat(gs(el).opacity);am.set(el,a);return a};
  const firstCol=g=>{const m=g.match(/rgba?\([^)]*\)|#[0-9a-f]{3,8}/i);return m?m[0]:null};
  const node=el=>{const c=gs(el);if(c.display==="none"||c.visibility==="hidden")return;const A=alp(el);if(A<.02)return;
    const M3=mat(el),o=off(el),w=el.offsetWidth||0,h=el.offsetHeight||0;
    // 3D (a card flipping in): fit a flat transform to where its corners actually land on screen
    let M=M3;if(!M3.is2D&&w&&h){const q0=M3.transformPoint(new DOMPoint(o.x,o.y)),q1=M3.transformPoint(new DOMPoint(o.x+w,o.y)),q2=M3.transformPoint(new DOMPoint(o.x,o.y+h)),P_=q=>({x:q.x/q.w,y:q.y/q.w}),a0=P_(q0),a1=P_(q1),a2=P_(q2);
      const a=(a1.x-a0.x)/w,b=(a1.y-a0.y)/w,c=(a2.x-a0.x)/h,d=(a2.y-a0.y)/h;M=new DOMMatrix([a,b,c,d,a0.x-a*o.x-c*o.y,a0.y-b*o.x-d*o.y])}
    x.save();x.setTransform(k*M.a,k*M.b,k*M.c,k*M.d,k*M.e+ox,k*M.f+oy);x.globalAlpha=Math.min(1,A);
    let rad=parseFloat(c.borderTopLeftRadius)||0;if(/%/.test(c.borderTopLeftRadius))rad=Math.min(w,h)*rad/100;rad=Math.min(rad,w/2,h/2);
    const box=()=>{x.beginPath();x.roundRect(o.x,o.y,w,h,rad)};
    if(w&&h){const bg=c.backgroundColor;if(bg&&!/rgba\([^)]*,\s*0\)|transparent/.test(bg)){box();x.fillStyle=bg;x.fill()}
      const bi=c.backgroundImage;if(bi&&bi!=="none"){const u=bi.match(/url\("?([^")]+)"?\)/);if(u){const im=camPhoto(u[1]);if(im){const iw=im.bm?im.bm.width:im.naturalWidth,ih=im.bm?im.bm.height:im.naturalHeight,s_=Math.max(w/iw,h/ih),sw=w/s_,sh=h/s_;x.save();box();x.clip();x.drawImage(im.bm||im,(iw-sw)/2,(ih-sh)/2,sw,sh,o.x,o.y,w,h);x.restore()}}
        else{const fc=firstCol(bi);if(fc){box();x.fillStyle=fc;x.fill()}}}
      const bw=parseFloat(c.borderTopWidth)||0;if(bw>0&&c.borderTopStyle!=="none"){x.beginPath();x.roundRect(o.x+bw/2,o.y+bw/2,w-bw,h-bw,Math.max(0,rad-bw/2));x.lineWidth=bw;x.strokeStyle=c.borderTopColor;x.setLineDash(c.borderTopStyle==="dashed"?[bw*3,bw*2.5]:[]);x.stroke();x.setLineDash([])}
      const sh_=c.boxShadow&&c.boxShadow.match(/(rgba?\([^)]*\)) 0px 0px 0px ([\d.]+)px inset/);if(sh_){x.beginPath();x.roundRect(o.x+(+sh_[2])/2,o.y+(+sh_[2])/2,w-(+sh_[2]),h-(+sh_[2]),Math.max(0,rad-(+sh_[2])/2));x.lineWidth=+sh_[2];x.strokeStyle=sh_[1];x.stroke()}}
    const tag=el.tagName;
    if(tag==="svg"||tag==="SVG"){const im=svgImg(el,c.color),r=el.getBoundingClientRect();if(im&&r.width){const sw=parseFloat(c.width)||16,sh=parseFloat(c.height)||sw,p=new DOMMatrix([M.a,M.b,M.c,M.d,M.e,M.f]).inverse().transformPoint(new DOMPoint(r.left+r.width/2,r.top+r.height/2));x.drawImage(im,p.x-sw/2,p.y-sh/2,sw,sh)}x.restore();return}
    if(tag==="IMG"){const im=camPhoto(el.currentSrc||el.src);if(im){const iw=im.bm?im.bm.width:im.naturalWidth,ih=im.bm?im.bm.height:im.naturalHeight,s_=Math.max(w/iw,h/ih),sw=w/s_,sh=h/s_;x.save();box();x.clip();x.drawImage(im.bm||im,(iw-sw)/2,(ih-sh)/2,sw,sh,o.x,o.y,w,h);x.restore()}x.restore();return}
    if(tag==="VIDEO"||tag==="CANVAS"){x.restore();return}
    if(c.overflow==="hidden"||c.overflowX==="hidden"){box();x.clip()}
    let inv=null;
    for(const t of el.childNodes){if(t.nodeType!==3||!t.textContent.trim())continue;
      if(!inv)inv=new DOMMatrix([M.a,M.b,M.c,M.d,M.e,M.f]).inverse();
      x.font=`${c.fontStyle} ${c.fontWeight} ${c.fontSize} ${c.fontFamily}`;try{x.letterSpacing=c.letterSpacing==="normal"?"0px":c.letterSpacing}catch(e){}
      x.fillStyle=c.color;x.textAlign="center";x.textBaseline="middle";const up=c.textTransform==="uppercase";
      const re=/\S+/g,txt=t.textContent,rg=document.createRange();let m;
      while((m=re.exec(txt))){rg.setStart(t,m.index);rg.setEnd(t,m.index+m[0].length);const r=rg.getBoundingClientRect();if(!r.width)continue;
        const p=inv.transformPoint(new DOMPoint(r.left+r.width/2,r.top+r.height/2));x.fillText(up?m[0].toUpperCase():m[0],p.x,p.y)}}
    for(const ch of el.children)node(ch);
    x.restore()};
  roots.forEach(r=>{if(r&&r.isConnected)node(r)});
}
function camDraw(){
  // 9:16 for Stories: the camera fills the frame, the game is scaled to the frame's height and centred
  const cv=CAM.cv,x=cv.getContext("2d"),W=cv.width,H=cv.height,k=Math.min(H/innerHeight,W/innerWidth),ox=(W-innerWidth*k)/2,v=CAM.vid;
  x.fillStyle="#000";x.fillRect(0,0,W,H);
  if(v&&v.videoWidth){const s_=Math.max(W/v.videoWidth,H/v.videoHeight),dw=v.videoWidth*s_,dh=v.videoHeight*s_;x.save();x.translate(W,0);x.scale(-1,1);x.drawImage(v,(W-dw)/2,(H-dh)/2,dw,dh);x.restore()}
  const jp=document.querySelector(".jpx");if(jp){x.fillStyle="rgba(40,26,4,.42)";x.fillRect(0,0,W,H)}
  x.save();x.translate(ox,(H-innerHeight*k)/2);
  const txt=(el,o)=>{o=o||{};const r=el.getBoundingClientRect();if(!r.width||!r.height)return;const cs=getComputedStyle(el);let t=el.textContent;if(cs.textTransform==="uppercase")t=t.toUpperCase();if(!t.trim())return;
    x.save();x.font=`${cs.fontWeight} ${parseFloat(cs.fontSize)*k}px ${cs.fontFamily}`;try{x.letterSpacing=cs.letterSpacing==="normal"?"0px":(parseFloat(cs.letterSpacing)*k)+"px"}catch(e){}
    x.globalAlpha=o.a==null?1:o.a;x.fillStyle=o.c||cs.color;x.textBaseline="middle";
    if(o.left){x.textAlign="left";x.fillText(t,r.left*k,(r.top+r.height/2)*k)}else{x.textAlign="center";x.fillText(t,(r.left+r.width/2)*k,(r.top+r.height/2)*k)}
    x.restore()};
  const icon=el=>{const r=el.getBoundingClientRect();if(!r.width)return;const im=svgImg(el,getComputedStyle(el).color);if(im)x.drawImage(im,r.left*k,r.top*k,r.width*k,r.height*k)};
  const rrect=(r,rad,fill,stroke,lw)=>{x.beginPath();x.roundRect(r.left*k,r.top*k,r.width*k,r.height*k,rad*k);if(fill){x.fillStyle=fill;x.fill()}if(stroke){x.strokeStyle=stroke;x.lineWidth=lw*k;x.stroke()}};
  // logo
  const mk=$("camMark");if(mk&&mk.offsetParent){const b=mk.querySelector("b"),r=b.getBoundingClientRect(),cs=getComputedStyle(b);x.save();x.font=`${cs.fontWeight} ${parseFloat(cs.fontSize)*k}px ${cs.fontFamily}`;try{x.letterSpacing=(parseFloat(cs.letterSpacing)||0)*k+"px"}catch(e){}
    x.textBaseline="middle";x.textAlign="left";x.shadowColor="rgba(0,0,0,.5)";x.shadowBlur=8*k;x.fillStyle=cs.color;x.fillText("R",r.left*k,(r.top+r.height/2)*k);const w=x.measureText("R").width;x.fillStyle=getComputedStyle(b.querySelector("span")).color;x.fillText("R",r.left*k+w,(r.top+r.height/2)*k);x.restore();
    x.save();x.shadowColor="rgba(0,0,0,.5)";x.shadowBlur=6*k;txt(mk.querySelector("small"));x.restore()}
  const lg=$("logo");if(lg&&lg.offsetParent){const r=lg.getBoundingClientRect(),cs=getComputedStyle(lg),sp=lg.querySelector("span");x.save();x.font=`${cs.fontWeight} ${parseFloat(cs.fontSize)*k}px ${cs.fontFamily}`;try{x.letterSpacing=(parseFloat(cs.letterSpacing)||0)*k+"px"}catch(e){}x.textBaseline="middle";x.textAlign="left";
    x.shadowColor="rgba(0,0,0,.5)";x.shadowBlur=8*k;x.fillStyle=cs.color;const a="ROOFTOP ";x.fillText(a,r.left*k,(r.top+r.height/2)*k);x.fillStyle=getComputedStyle(sp).color;x.fillText("ROULETTE",r.left*k+x.measureText(a).width,(r.top+r.height/2)*k);x.restore()}
  // where you are
  const cl=$("camLoc");if(cl&&cl.offsetParent){const r=cl.getBoundingClientRect();rrect(r,r.height/2,"rgba(11,13,18,.62)");cl.querySelectorAll("svg").forEach(icon);cl.querySelectorAll("i").forEach(e=>txt(e))}
  // clock pill
  const ck=$("clock");if(ck&&ck.offsetParent&&getComputedStyle(ck).visibility!=="hidden"){const r=ck.getBoundingClientRect();rrect(r,r.height/2,"rgba(11,13,18,.62)");x.save();x.shadowColor="transparent";[...ck.children].forEach(c=>txt(c));x.restore()}
  // the reel, as it sits on screen (or as it landed, once it's gone)
  const rb=document.querySelector(".reel");
  if(rb&&rb.offsetParent!==null||rb&&rb.closest(".jpx")){const R_=rb.getBoundingClientRect(),ops=[];
    if(false)ops.push(()=>{const w=Math.round(R_.width*k),h=Math.round(R_.height*k);let t=CAM.shade;if(!t||t.width!==w||t.height!==h){t=CAM.shade=document.createElement("canvas");t.width=w;t.height=h;const c=t.getContext("2d");
        const gh=c.createLinearGradient(0,0,w,0);gh.addColorStop(0,"rgba(11,13,18,0)");gh.addColorStop(.09,"rgba(11,13,18,.62)");gh.addColorStop(.91,"rgba(11,13,18,.62)");gh.addColorStop(1,"rgba(11,13,18,0)");c.fillStyle=gh;c.fillRect(0,0,w,h);
        c.globalCompositeOperation="destination-in";const gv=c.createLinearGradient(0,0,0,h);gv.addColorStop(0,"rgba(0,0,0,0)");gv.addColorStop(.24,"#000");gv.addColorStop(.76,"#000");gv.addColorStop(1,"rgba(0,0,0,0)");c.fillStyle=gv;c.fillRect(0,0,w,h)}
      x.drawImage(t,R_.left*k,R_.top*k)});   // the usual dark band, faded at all four sides so there are no corners
    const fr=rb.querySelector(".frame");if(fr){const r=fr.getBoundingClientRect(),cam=document.body.classList.contains("camon"),fl=fr.classList.contains("held")?1:fr._fl?Math.max(0,1-(performance.now()-fr._fl)/(fr._fd||120))*(fr._fi||1):0;ops.push(()=>{
      if(fl>0){x.save();x.shadowColor=`rgba(255,214,120,${.6*fl})`;x.shadowBlur=28*k*fl;rrect({left:r.left-4*fl,top:r.top-4*fl,width:r.width+8*fl,height:r.height+8*fl},18,null,`rgba(255,214,120,${.45*fl})`,4);x.restore()}
      rrect(r,14,cam?"rgba(11,13,18,.35)":"rgba(245,184,61,.10)",fl>0?`rgb(${245+10*fl|0},${184+43*fl|0},${61+102*fl|0})`:"#F5B83D",2);
})}
    const fe=document.body.classList.contains("camon")&&!rb.closest(".jpx")?.3:.24,fade=y=>{const u=(y-R_.top)/R_.height;return u<fe?Math.max(0,u/fe):u>1-fe?Math.max(0,(1-u)/fe):1};
    rb.querySelectorAll(".row").forEach(row=>{const ro=parseFloat(row.style.opacity||"1");if(ro<.02||row.style.visibility==="hidden")return;[...row.children].forEach(sp=>{const a=ro*parseFloat(sp.style.opacity===""?"1":sp.style.opacity);if(a<.02)return;
      const r=sp.getBoundingClientRect(),f=fade(r.top+r.height/2);if(f<.02)return;const col=getComputedStyle(sp).color,snap={getBoundingClientRect:()=>r,textContent:sp.textContent,offsetWidth:sp.offsetWidth,offsetHeight:sp.offsetHeight},cs=getComputedStyle(sp),font={fw:cs.fontWeight,fs:cs.fontSize,ff:cs.fontFamily};
      ops.push(()=>{x.save();x.font=`${font.fw} ${font.fs} ${font.ff}`;x.globalAlpha=a*f;x.fillStyle=col;x.shadowColor="rgba(0,0,0,.55)";x.shadowBlur=10*k;x.shadowOffsetY=2*k;x.textBaseline="middle";x.textAlign="center";const t=snap.textContent.toUpperCase(),m=x.measureText(t).width||1;
        x.translate((r.left+r.width/2)*k,(r.top+r.height/2)*k);x.scale(k*r.width/m,k*r.height/(snap.offsetHeight||r.height));x.fillText(t,0,0);x.restore()})})});
    CAM.last=ops}
  const ct=document.querySelector(".camtgt"),flying=document.querySelector(".flybox,.flyname,.wfly,.punch");
  if(rb||!ct&&!flying)CAM.last.forEach(f=>f());
  camPaint(x,k,ox,(H-innerHeight*k)/2,[...document.querySelectorAll(".punch,.flybox,.flyname"),ct,...document.querySelectorAll(".wfly,.jpx .jpcard-wrap,.jpx .cf"),$("sheet")&&$("sheet").open?$("sheet"):null]);
  if(false){const r=ct.getBoundingClientRect(),o=parseFloat(getComputedStyle(ct).opacity)||1;x.save();x.globalAlpha=o;rrect(r,18,"rgba(11,13,18,.72)");
    const im=ct.querySelector(".ct-ph");if(im){const p=im.getBoundingClientRect(),src=camPhoto(im.currentSrc||im.src);if(src){const w=src.bm?src.bm.width:src.naturalWidth,h=src.bm?src.bm.height:src.naturalHeight,s_=Math.max(p.width/w,p.height/h),sw=p.width/s_,sh=p.height/s_;
      x.save();x.beginPath();x.roundRect(p.left*k,p.top*k,p.width*k,p.height*k,12*k);x.clip();x.drawImage(src.bm||src,(w-sw)/2,(h-sh)/2,sw,sh,p.left*k,p.top*k,p.width*k,p.height*k);x.restore()}}
    const tx=ct.querySelector(".ct-t").getBoundingClientRect();x.save();x.beginPath();x.rect(tx.left*k,tx.top*k,tx.width*k,tx.height*k);x.clip();
    ct.querySelectorAll(".eyebrow,.ct-n,.ct-f i").forEach(e=>txt(e,{left:1}));ct.querySelectorAll(".ct-f svg").forEach(icon);x.restore();x.restore()}
  x.restore();
}
/* clips: kept on the phone (IndexedDB), grouped by night */
const clipDB=()=>new Promise((res,rej)=>{const q=indexedDB.open("rr-clips",1);q.onupgradeneeded=()=>q.result.createObjectStore("clips",{keyPath:"id"});q.onsuccess=()=>res(q.result);q.onerror=()=>rej(q.error)});
const clipPut=o=>clipDB().then(db=>new Promise((res,rej)=>{const t=db.transaction("clips","readwrite");t.objectStore("clips").put(o);t.oncomplete=res;t.onerror=()=>rej(t.error)}));
const clipAll=()=>clipDB().then(db=>new Promise(res=>{const q=db.transaction("clips").objectStore("clips").getAll();q.onsuccess=()=>res(q.result||[]);q.onerror=()=>res([])})).catch(()=>[]);
const mbTxt=b=>b<1e6?Math.max(1,Math.round(b/1e3))+" KB":b<1e9?(b/1e6).toFixed(b<1e7?1:0)+" MB":(b/1e9).toFixed(1)+" GB";
const clipList=gid=>clipDB().then(db=>new Promise(res=>{const q=db.transaction("clips").objectStore("clips").getAll();q.onsuccess=()=>res(q.result.filter(c=>c.game===gid).sort((a,b)=>a.at-b.at));q.onerror=()=>res([])})).catch(()=>[]);
const clipDel=id=>clipDB().then(db=>new Promise(res=>{const t=db.transaction("clips","readwrite");t.objectStore("clips").delete(id);t.oncomplete=res;t.onerror=res}));
/* in the native app the browser's share and download don't exist: use the phone's own share sheet and gallery */
const CAPX=window.Capacitor,NATIVE=!!(CAPX&&CAPX.isNativePlatform&&CAPX.isNativePlatform());
// Native plugins: the plugin's own object when the bridge made one, otherwise straight calls through the bridge
const PLG=NATIVE?new Proxy({},{get:(_,pl)=>{const o=CAPX.Plugins&&CAPX.Plugins[pl];if(o)return o;
  return new Proxy({},{get:(_,m)=>opts=>typeof CAPX.nativePromise==="function"?CAPX.nativePromise(pl,m,opts||{}):Promise.reject(new Error("no bridge"))})}}):{};
const b64of=blob=>new Promise((res,rej)=>{const fr=new FileReader();fr.onload=()=>res(String(fr.result).split(",")[1]);fr.onerror=rej;fr.readAsDataURL(blob)});
async function nativeFile(blob,name){const r=await PLG.Filesystem.writeFile({path:name,data:await b64of(blob),directory:"CACHE"});return r.uri}
async function nativeShare(blob,name,title,text){const uri=await nativeFile(blob,name),o={files:[uri],title:title||"Rooftop Roulette"};if(text)o.text=text;await PLG.Share.share(o)}
let galleryAlbum=null;
async function nativeSaveVideo(blob,name){const uri=await nativeFile(blob,name),opt={path:uri};
  if(CAPX.getPlatform()==="android"){if(!galleryAlbum){const find=async()=>((await PLG.Media.getAlbums()).albums||[]).find(a=>a.name==="Rooftop Roulette");let a=await find();if(!a){await PLG.Media.createAlbum({name:"Rooftop Roulette"});a=await find()}galleryAlbum=a&&a.identifier}
    if(galleryAlbum)opt.albumIdentifier=galleryAlbum;opt.fileName=name.replace(/\.\w+$/,"")}
  return PLG.Media.saveVideo(opt)}
async function nativeSavePhoto(blob,name){const uri=await nativeFile(blob,name),opt={path:uri};
  if(CAPX.getPlatform()==="android"){await nativeAlbum();if(galleryAlbum)opt.albumIdentifier=galleryAlbum;opt.fileName=name.replace(/\.\w+$/,"")}
  return PLG.Media.savePhoto(opt)}
async function nativeAlbum(){if(galleryAlbum)return galleryAlbum;const find=async()=>((await PLG.Media.getAlbums()).albums||[]).find(a=>a.name==="Rooftop Roulette");let a=await find();if(!a){await PLG.Media.createAlbum({name:"Rooftop Roulette"});a=await find()}galleryAlbum=a&&a.identifier;return galleryAlbum}
function clipFile(blob,type,at){const ext=/mp4/.test(type)?"mp4":"webm",d=new Date(at||Date.now());return new File([blob],`rooftop-roulette-${d.getHours()}${String(d.getMinutes()).padStart(2,"0")}${String(d.getSeconds()).padStart(2,"0")}.${ext}`,{type:type.split(";")[0]})}
function clipSave(blob,type,at){if(NATIVE){const f=clipFile(blob,type,at);return nativeSaveVideo(blob,f.name).then(()=>toast("Saved to your gallery.",2500)).catch(e=>{console.warn(e);toast("Couldn't save to your gallery.",3500)})}
  const f=clipFile(blob,type,at),u=URL.createObjectURL(f),a=document.createElement("a");a.href=u;a.download=f.name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),4000)}
function clipShare(blob,type,at,text){const f=clipFile(blob,type,at);if(NATIVE){nativeShare(blob,f.name,"Rooftop Roulette",text).catch(e=>console.warn(e));return}const o=text?{files:[f],text}:{files:[f]};if(navigator.canShare&&navigator.canShare(o))navigator.share(o).catch(()=>{});else clipSave(blob,type,at)}
function clipsSheet(gid){clipList(gid).then(L=>{const urls=L.map(c=>URL.createObjectURL(c.blob));
  sheet(`<h3>Clips</h3><p class="note">Your spins from this crawl. They're saved on this phone.</p><div class="clips">${L.map((c,i)=>`<div class="clip"><video src="${urls[i]}#t=0.1" controls playsinline preload="metadata"></video><div class="clipb"><span class="small">${(d=>clock12(d.getHours()*60+d.getMinutes()))(new Date(c.at))}</span><button class="btn sm" type="button" data-cs="${i}">Share</button><button class="btn sm dark" type="button" data-cv="${i}">Save</button><button class="btn sm line" type="button" data-cd="${i}" aria-label="Delete">Delete</button></div></div>`).join("")}</div>`,()=>{
    document.querySelectorAll("[data-cs]").forEach(b=>b.onclick=()=>{const c=L[+b.dataset.cs];clipShare(c.blob,c.type,c.at)});
    document.querySelectorAll("[data-cv]").forEach(b=>b.onclick=()=>{const c=L[+b.dataset.cv];clipSave(c.blob,c.type,c.at)});
    document.querySelectorAll("[data-cd]").forEach(b=>b.onclick=()=>{const c=L[+b.dataset.cd];clipDel(c.id).then(()=>{closeSheet();if(S.route==="end")renderEnd();clipList(gid).then(n=>{if(n.length)clipsSheet(gid)})})});
    $("sheet").addEventListener("close",()=>urls.forEach(u=>URL.revokeObjectURL(u)),{once:true})})})}
function fitPlay(){
  const v=$("v-play");if(!v||v.hidden)return;v.scrollTop=0;
  const rb=$("reelBox");
  if(rb&&!rb.closest(".jpx")&&document.body.classList.contains("camon")){rb.style.height="250px";if(reel&&reel.redraw)reel.redraw()}
  else if(rb&&!rb.closest(".jpx")){rb.style.height="";
    // free space = the bottom of the usable area minus the bottom of the last thing on screen
    const vr=v.getBoundingClientRect(),pb=parseFloat(getComputedStyle(v).paddingBottom)||0,limit=vr.top+v.clientHeight-pb;
    const last=Math.max(...[...v.querySelectorAll("#stage>:not(.ready),#stage .ready>*")].map(x=>x.getBoundingClientRect().bottom));
    const h=Math.round(Math.max(230,Math.min(760,rb.offsetHeight+(limit-last)-14)));rb.style.height=h+"px";if(reel&&reel.redraw)reel.redraw()}
  const card=$("stage").querySelector(".bar.photo");if(!card)return;card.style.minHeight="";
  const over=v.scrollHeight-v.clientHeight;if(over>0)card.style.minHeight=Math.max(0,card.offsetHeight-over)+"px";
}
addEventListener("resize",()=>{if(S.route==="play")fitPlay()});
const countShown=g=>{const a=g.visits.find(v=>v.leftAt==null);return g.visits.filter(v=>v.counted===true).length+(a&&a._inCount&&a.counted!==true?1:0)};
/* When the bar you're at goes on the board (3 minutes in, or the first time the app's open after that):
   its name pops up off the card, the drinks counter swings open like a little door, the name gets sucked
   in, and the door snaps shut as the number ticks over. Once per bar. */
/* "It counts": the name pops off the card, the pill opens like a little door, the name gets
   sucked in, the door shuts and the count ticks over. About a second, and any tap skips it
   (so tapping Spin skips it and spins). */
function flyToCounter(force,lead){
  const g=G(),a=g&&g.visits.find(v=>v.leftAt==null);if(!a||(a._flew&&!force)||document.hidden||S.route!=="play")return;
  const pc=$("pCount");if(!pc)return;
  a._flew=true;save();
  const tm=[],fx=[];let h=null,over=false;
  const at=(ms,f)=>tm.push(setTimeout(()=>{if(!over)f()},ms));
  const finish=()=>{if(over)return;over=true;tm.forEach(clearTimeout);fx.forEach(e=>e.remove());pc.classList.remove("opening");
    if(h)h.style.visibility="";document.removeEventListener("pointerdown",finish,true);
    a._inCount=true;save();const b2=pc.querySelector("b");if(b2)b2.textContent=countShown(g)};
  document.addEventListener("pointerdown",finish,true);
  if(matchMedia("(prefers-reduced-motion: reduce)").matches){finish();return}
  at(lead==null?350:lead,()=>{
    h=$("stage")&&$("stage").querySelector(".bar.at h2");if(!h||!h.isConnected){finish();return}
    const hr=h.getBoundingClientRect(),pr=pc.getBoundingClientRect(),cs=getComputedStyle(h),INK="#F5B83D";
    const old=+(pc.querySelector("b")||{}).textContent||0,nw=a._inCount?old:old+1;
    const cx=hr.left+hr.width/2,cy=hr.top+hr.height/2;
    // 1. pop off the card (same punch as the wheel landing, quicker)
    const bloom=document.createElement("div");bloom.className="jbloom";Object.assign(bloom.style,{left:cx+"px",top:cy+"px",zIndex:904});document.body.appendChild(bloom);fx.push(bloom);
    bloom.animate([{transform:"translate(-50%,-50%) scale(.3)",opacity:0},{transform:"translate(-50%,-50%) scale(1.05)",opacity:.9,offset:.35},{transform:"translate(-50%,-50%) scale(1.2)",opacity:0}],{duration:600,easing:"ease-out",fill:"forwards"});
    const f=document.createElement("div");f.className="cpop";f.textContent=h.textContent;
    Object.assign(f.style,{left:cx+"px",top:cy+"px",fontFamily:cs.fontFamily,fontWeight:cs.fontWeight,fontSize:cs.fontSize,textTransform:cs.textTransform,letterSpacing:cs.letterSpacing,color:INK});
    document.body.appendChild(f);h.style.visibility="hidden";fx.push(f);
    const big=Math.min(1.5,innerWidth*.9/(f.offsetWidth||hr.width));
    const T=(x,y,sx,sy=sx,r=0)=>`translate(calc(-50% + ${x}px),calc(-50% + ${y}px)) rotate(${r}deg) scale(${sx},${sy})`;
    f.animate([{transform:T(0,0,1),textShadow:"0 0 0 rgba(245,184,61,0)"},{transform:T(0,-14,big*1.08),textShadow:"0 0 24px rgba(245,184,61,.9)",offset:.6},{transform:T(0,-12,big),textShadow:"0 0 16px rgba(245,184,61,.7)"}],{duration:170,easing:"cubic-bezier(.2,.9,.3,1.2)",fill:"forwards"});
    sfx("deal");buzz(15);
    // 2. the pill grows and swings open
    const GROW=1.7,box=document.createElement("div");box.className="cbox";
    Object.assign(box.style,{left:pr.left+"px",top:pr.top+"px",width:pr.width+"px",height:pr.height+"px",perspective:"150px"});
    box.innerHTML=`<div class="chole"></div><div class="cleaf">${pc.innerHTML}</div>`;box.querySelectorAll(".cnudge").forEach(e=>e.remove());
    document.body.appendChild(box);fx.push(box);pc.classList.add("opening");
    const leaf=box.querySelector(".cleaf"),hole=box.querySelector(".chole");
    box.animate([{transform:"scale(1)"},{transform:`scale(${GROW})`}],{duration:170,easing:"cubic-bezier(.3,1.4,.5,1)",fill:"forwards"});
    at(150,()=>{sfx("flip");
      leaf.animate([{transform:"rotateY(0)"},{transform:"rotateY(-76deg)",offset:.75},{transform:"rotateY(-71deg)"}],{duration:200,easing:"cubic-bezier(.25,.8,.35,1)",fill:"forwards"});
      hole.animate([{opacity:0},{opacity:1}],{duration:120,fill:"forwards"})});
    // 3. sucked in
    const tx=pr.left+pr.width*GROW*.5,ty=pr.top+pr.height/2,dx=tx-cx,dy=ty-cy;
    at(260,()=>{sfx("path");
      f.animate([{transform:T(0,-12,big),opacity:1},{transform:T(dx*.06,-20,big*1.04,big*1.04,-2),opacity:1,offset:.15},{transform:T(dx*.55,dy*.5,big*.55,big*.32,-8),opacity:1,offset:.65},{transform:T(dx,dy,.03,.05,-14),opacity:.2}],{duration:380,easing:"cubic-bezier(.6,0,.85,.35)",fill:"forwards"})});
    // 4. in: flare, the door slams, the name settles back on the card
    at(640,()=>{f.remove();h.style.visibility="";h.animate([{opacity:0},{opacity:1}],{duration:300,delay:120,fill:"backwards"});
      hole.animate([{filter:"brightness(1)"},{filter:"brightness(2.2)",offset:.3},{filter:"brightness(1)"}],{duration:240});
      leaf.animate([{transform:"rotateY(-71deg)"},{transform:"rotateY(8deg)",offset:.7},{transform:"rotateY(-3deg)",offset:.85},{transform:"rotateY(0)"}],{duration:190,easing:"ease-in",fill:"forwards"})});
    // 5. the count ticks over, the pill settles back
    at(830,()=>{sfx("thud");buzz([30,30,30]);
      const b=leaf.querySelector("b");
      if(b&&nw!==old){b.innerHTML=`<span class="codo"><span>${old}</span><span>${nw}</span></span>`;requestAnimationFrame(()=>b.querySelector(".codo").classList.add("go"));sfx("clink")}
      box.animate([{transform:`scale(${GROW})`},{transform:`scale(${GROW}) translateX(-3px)`,offset:.25},{transform:`scale(${GROW}) translateX(3px)`,offset:.5},{transform:`scale(${GROW})`}],{duration:150})});
    at(1150,()=>{box.animate([{transform:`scale(${GROW})`,boxShadow:"0 0 0 0 rgba(245,184,61,0)"},{transform:`scale(${GROW*1.06})`,boxShadow:"0 0 0 6px rgba(245,184,61,.35)",offset:.3},{transform:"scale(1)",boxShadow:"0 0 0 0 rgba(245,184,61,0)"}],{duration:300,easing:"ease-in-out",fill:"forwards"})});
    at(1460,finish);
  });
}
/* End of the night: every bar that counted pops off the scorecard and gets sucked into the big
   number, the door shuts, and the count racks up. Any tap skips to the end. */
function rackUp(box,n){
  const cell=box.querySelector(".tri>div"),num=cell&&cell.querySelector("b");if(!cell||!num)return;
  const chips=[...box.querySelectorAll(".sc-bars .br:not(.x) .nm")],vw=innerWidth;
  const tm=[],fx=[];let over=false;
  const at=(ms,f)=>tm.push(setTimeout(()=>{if(!over)f()},ms));
  const finish=()=>{if(over)return;over=true;tm.forEach(clearTimeout);fx.forEach(e=>e.remove());cell.style.visibility="";chips.forEach(c=>c.style.opacity="");num.textContent=n;
    document.removeEventListener("pointerdown",finish,true)};
  document.addEventListener("pointerdown",finish,true);
  if(!chips.length||matchMedia("(prefers-reduced-motion: reduce)").matches){finish();return}
  const cr=cell.getBoundingClientRect();
  if(cr.bottom<0||cr.top>innerHeight){finish();return}
  const small=cell.querySelector("small");
  const dbox=document.createElement("div");dbox.className="cbox";
  Object.assign(dbox.style,{left:cr.left+"px",top:cr.top+"px",width:cr.width+"px",height:cr.height+"px",perspective:Math.round(cr.width*2.6)+"px",borderRadius:"14px",transformOrigin:"50% 50%"});
  dbox.innerHTML=`<div class="chole" style="border-radius:14px"></div><div class="cleaf" style="border-radius:14px;flex-direction:column;gap:2px;background:var(--s2)"><b style="display:block;font-family:var(--display);font-weight:800;font-size:${getComputedStyle(num).fontSize};line-height:1;color:var(--amber)">0</b><small style="font-size:${small?getComputedStyle(small).fontSize:"12px"};color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:.06em">${small?small.textContent:""}</small></div>`;
  document.body.appendChild(dbox);fx.push(dbox);cell.style.visibility="hidden";
  const leaf=dbox.querySelector(".cleaf"),hole=dbox.querySelector(".chole"),lb=leaf.querySelector("b");
  at(0,()=>{sfx("flip");
    leaf.animate([{transform:"rotateY(0)"},{transform:"rotateY(-76deg)",offset:.75},{transform:"rotateY(-70deg)"}],{duration:280,easing:"cubic-bezier(.25,.8,.35,1)",fill:"forwards"});
    hole.animate([{opacity:0},{opacity:1}],{duration:180,fill:"forwards"})});
  const tx=cr.left+cr.width/2,ty=cr.top+cr.height/2,STEP=260;
  chips.forEach((c,i)=>at(300+i*STEP,()=>{
    let r=c.getBoundingClientRect();const cs=getComputedStyle(c);if(r.right<0||r.left>vw){const mp=box.querySelector(".scmap").getBoundingClientRect();r={left:mp.left+mp.width*(.25+((i*37)%50)/100),width:0,top:mp.top+mp.height*.55,height:0}}
    const x0=r.left+r.width/2,y0=r.top+r.height/2,dx=tx-x0,dy=ty-y0;
    const f=document.createElement("div");f.className="cpop";f.textContent=c.textContent;
    Object.assign(f.style,{left:x0+"px",top:y0+"px",fontFamily:cs.fontFamily,fontWeight:700,fontSize:cs.fontSize,color:"#F5B83D",textShadow:"0 0 14px rgba(245,184,61,.8)"});
    document.body.appendChild(f);fx.push(f);c.style.opacity=".3";
    const T=(x,y,sx,sy=sx,rt=0)=>`translate(calc(-50% + ${x}px),calc(-50% + ${y}px)) rotate(${rt}deg) scale(${sx},${sy})`;
    f.animate([{transform:T(0,0,1)},{transform:T(0,-10,1.35),offset:.25},{transform:T(dx*.5,dy*.5-10,.8,.6,-6),offset:.65},{transform:T(dx,dy,.05,.08,-12),opacity:.2}],{duration:460,easing:"cubic-bezier(.55,0,.85,.4)",fill:"forwards"}).onfinish=()=>{
      f.remove();sfx("deal");buzz(10)};
  }));
  const shut=300+(chips.length-1)*STEP+480;
  at(shut,()=>{leaf.animate([{transform:"rotateY(-70deg)"},{transform:"rotateY(8deg)",offset:.7},{transform:"rotateY(-3deg)",offset:.85},{transform:"rotateY(0)"}],{duration:220,easing:"ease-in",fill:"forwards"})});
  at(shut+220,()=>{sfx("thud");buzz([30,30,30]);
    dbox.animate([{transform:"translateX(0)"},{transform:"translateX(-4px)",offset:.25},{transform:"translateX(4px)",offset:.5},{transform:"translateX(0)"}],{duration:160})});
  // the count racks up
  for(let k=1;k<=n;k++)at(shut+300+(k-1)*110,()=>{lb.textContent=k;sfx(k===n?"clink":"flip");
    lb.animate([{transform:"scale(1)"},{transform:`scale(${k===n?1.45:1.18})`,textShadow:"0 0 20px rgba(245,184,61,.8)",offset:.35},{transform:"scale(1)"}],{duration:k===n?420:180,easing:"ease-out"})});
  at(shut+300+(n-1)*110+520,finish);
}
/* Tap the drinks counter: tonight's bars, your zone, and what's left to spin */
let ngMap=null;
function nightSheet(){
  const g=G();if(!g)return;if(!S.tips.night){S.tips.night=1;save();renderPlay()}
  const t=now(),left=basePool().length,cr=CR(g),c=countShown(g),arr=g.visits.filter(v=>v.arrivedAt!=null);
  const rows=g.visits.map((v,i)=>{const b=byId(v.id),here=v.leftAt==null&&v.arrivedAt!=null,ms=v.arrivedAt!=null?(v.leftAt||t)-v.arrivedAt:0;
    const st=here?(v._inCount?"You're here · Counted":"You're here"):v.counted===true?"Counted":v.counted===false?"Didn't count":"Waiting on you";
    return `<button class="ngrow${v.counted===false?" x":""}" type="button" data-b="${b.id}">${vthumb(b,i+1)}<span class="t"><b>${esc(b.name)}${S.fav[b.id]?`<i class="fv">${HRTF}</i>`:""}</b><small class="${v.counted===true?"ok":""}">${st}${v.counted===true?" ✓":""}</small></span><span class="d">${v.arrivedAt!=null?hmm(ms):""}</span></button>`}).join("");
  sheet(`<h3 tabindex="-1" autofocus style="outline:0">Your crawl</h3>
    <div class="nightzone"><span>${I.pin} ${cr?zoneTxt(g):esc(g.areas[g.areas.length-1])}</span>${cr?`<span>R&amp;R</span>`:`<span>${rLabel(g.radius)}</span><span>${g.len===60?"1 hour":"2 hours"}</span>`}</div>
    <p class="note" style="margin:10px 0 6px"><b style="color:var(--amber)">${c}</b> bar${c===1?"":"s"} so far · <b style="color:var(--amber)">${left}</b> ${cr?"open nearby":"left in your zone to spin"}</p>
    ${arr.length?`<div class="ngmap" id="ngMap"></div>`:""}
    ${rows?`<div class="nglist">${rows}</div><p class="note ngtip">Tap a bar to see it${arr.some(v=>!S.fav[v.id])?" or make it a favourite":""}.</p>`:`<p class="note">No bars yet. Get spinning.</p>`}
    <button class="btn dark" type="button" id="ngX" style="margin-top:14px">Close</button>`,()=>{
    $("ngX").onclick=closeSheet;
    const open=id=>{const v=byId(id),vi=g.visits.find(x=>x.id===id);if(!v)return;const here=vi&&vi.leftAt==null;
      const ms=vi&&vi.arrivedAt!=null?(vi.leftAt||now())-vi.arrivedAt:0;
      barSheet(v,null,{lite:true,back:nightSheet,backTxt:"Your crawl",visit:vi&&vi.arrivedAt!=null?`${here?"Here for":"You were here"} ${hmm(ms)}${vi.counted===true?" · Counted ✓":vi.counted===false?" · Didn't count":""}`:""})};
    $("sheetBody").querySelectorAll(".ngrow").forEach(x=>x.onclick=()=>open(x.dataset.b));
    // the bars so far, joined bar to bar. The real walking route waits for the summary.
    if(arr.length){try{ngMap&&ngMap.remove()}catch(e){}ngMap=null;
      makeMap("ngMap",{}).then(m=>{if(!m||!$("ngMap"))return;ngMap=m;const pts=arr.map(v=>byId(v.id));
        if(pts.length>1)m.route(pts,true);arr.forEach((v,i)=>m.num(byId(v.id),i+1,v.counted===false,byId(v.id).name,()=>open(v.id)));
        const y=you(),all=y?pts.concat([y]):pts;if(y)m.me&&m.me(y);setTimeout(()=>m.fitPts(all,16,{top:28,left:28,right:28,bottom:28}),60)})}
  });
}
$("pCount").onclick=nightSheet;
function boardHTML(names,live){
  return `<div class="board${live?" live":""}" id="board">${names.map((n,i)=>{const o=i-2;return `<div class="flap${o===0?" mid":Math.abs(o)===1?" f1":" f2"}"${live?` id="q${i}"`:""}><span>${esc(n)}</span></div>`}).join("")}</div>`;
}
function answer(idx,yes){const v=G()&&G().visits[idx];if(v){v.counted=!!yes;save();renderPlay()}}

/* ---------- tips (first game only) ---------- */
const seen=k=>{if(!S.tips[k]){S.tips[k]=1;save()}};
function tip(k,text,arrow){if(S.tips[k])return "";return `<div class="tip${arrow?"":" nob"}" data-tip="${k}">${I.bulb}<span>${text}</span><button type="button">Got it</button></div>`}
document.addEventListener("click",e=>{const b=e.target.closest(".tip button");if(!b)return;const t=b.closest(".tip");seen(t.dataset.tip);t.remove()});

/* ---------- sheets ---------- */
function sheet(html,bind){backArm();$("sheet").classList.remove("full","tq");$("sheetBody").innerHTML=html;fillPhotos($("sheetBody"));if(bind)bind();const d=$("sheet");if(!d.open)d.showModal()}
const closeSheet=()=>{const d=$("sheet");if(d.open)d.close()};
$("sheet").addEventListener("click",e=>{if(e.target===$("sheet"))closeSheet()});
(()=>{const d=$("sheet");let y0=null,dy=0;
  d.addEventListener("touchstart",e=>{if(d.scrollTop>0||e.target.closest&&e.target.closest(".rrmap,.rrslide,.map,input")){y0=null;return}y0=e.touches[0].clientY;dy=0;d.style.transition="none"},{passive:true});
  d.addEventListener("touchmove",e=>{if(y0===null)return;dy=Math.max(0,e.touches[0].clientY-y0);if(dy>0)d.style.transform=`translateY(${dy}px)`},{passive:true});
  d.addEventListener("touchend",()=>{if(y0===null)return;d.style.transition="transform .2s ease";if(dy>90){d.style.transform="translateY(100%)";setTimeout(()=>{closeSheet();d.style.transform="";d.style.transition=""},180)}else d.style.transform="";y0=null});
})();

function moveOptions(){
  const g=G(),t=now(),from=fromPoint();
  return GAME_AREAS(g.city).filter(a=>dist(a,g.center)>500).map(a=>({a,open:playable(inCircle(a,g.radius),g.newOnly).filter(v=>!visited(v.id)&&openOK(v,t)).length,m:dist(from,a)}))
   .filter(o=>o.open>=2).sort((x,y)=>x.m-y.m).slice(0,6);
}
/* Peek at an area before you pick it: a chevron on the option opens a map of its bars (tap a pin
   for the bar), with the full list a tap away. One open at a time. */
let apMaps=[],apOpen=null,apN=0;
const apClear=()=>{apMaps.forEach(m=>{try{m.remove()}catch(e){}});apMaps=[]};
const apWrap=(key,opt)=>`<div class="ap" data-apk="${esc(key)}"><div class="aprow">${opt}<button class="apx" type="button" aria-label="See the bars here" aria-expanded="false"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></button></div><div class="apbody" hidden></div></div>`;
let apRoot=null;
function apBind(root,getList,getGeo){apClear();if(root!==apRoot){apRoot=root;apOpen=null}root.querySelectorAll(".ap").forEach(ap=>{const k=ap.dataset.apk;ap.querySelector(".apx").onclick=()=>apToggle(ap,k,getList,getGeo);if(apOpen===k)apToggle(ap,k,getList,getGeo,true)})}
async function apToggle(ap,k,getList,getGeo,force){
  const body=ap.querySelector(".apbody"),btn=ap.querySelector(".apx");
  if(!body.hidden&&!force){body.hidden=true;btn.setAttribute("aria-expanded","false");ap.classList.remove("open");apOpen=null;return}
  const host=ap.closest(".opts")||document;
  host.querySelectorAll(".ap.open").forEach(o=>{if(o!==ap){o.classList.remove("open");o.querySelector(".apbody").hidden=true;o.querySelector(".apx").setAttribute("aria-expanded","false")}});
  apOpen=k;ap.classList.add("open");btn.setAttribute("aria-expanded","true");
  let L0;
  if(k==="__me"){body.innerHTML=`<p class="note" style="margin:12px 2px 2px">Finding you…</p>`;body.hidden=false}
  try{L0=await getList(k)}catch(e){body.innerHTML=`<p class="note" style="margin:12px 2px 2px">Couldn't find you just now. Check location is on for this app, then try again.</p>`;body.hidden=false;return}
  if(apOpen!==k)return;
  const t=now(),L=L0.slice().sort((a,b)=>(openOK(b,t)?1:0)-(openOK(a,t)?1:0)||a.name.localeCompare(b.name)),id="apm"+(++apN);
  const st=v=>{const o=openState(v,t);return o.open?"Open til "+clock12(o.closeAt):o.opens!=null?"Opens "+clock12(o.opens):(o.temp?"Temporarily closed":"Closed today")};
  body.innerHTML=`${L.length?`<div class="apmap" id="${id}"></div>`:""}${L.length?`<button class="txtbtn apl" type="button" aria-expanded="false">Show the ${L.length} bars as a list</button>`:`<p class="note" style="margin:10px 2px 2px">${k==="__want"?"Nothing on your list yet. Tap Pick from my Hit list to add some.":"No rooftops this close. Try a part of town instead."}</p>`}
    <div class="aplist" hidden>${L.map(v=>`<button class="aprow2${openOK(v,t)?"":" off"}" type="button" data-v="${v.id}"><span class="dot${openOK(v,t)?"":" off"}"></span><span class="t"><b>${esc(v.name)}</b><small>${st(v)}</small></span><span class="chev">›</span></button>`).join("")}</div>`;
  body.hidden=false;
  const lb=body.querySelector(".apl"),ll=body.querySelector(".aplist");
  if(lb)lb.onclick=()=>{ll.hidden=!ll.hidden;lb.textContent=ll.hidden?`Show the ${L.length} bars as a list`:"Hide the list";lb.setAttribute("aria-expanded",String(!ll.hidden))};
  body.querySelectorAll("[data-v]").forEach(b=>b.onclick=()=>barSheet(byId(b.dataset.v)));
  if(!force)setTimeout(()=>ap.scrollIntoView({block:"nearest",behavior:"smooth"}),60);
  const m=await makeMap(id);if(!m)return;apMaps.push(m);const g_=getGeo(k);
  if(g_&&g_.r){m.circle(g_.c,g_.r);m.fitZone(g_.c,g_.r)}else if(L.length)m.fitPts(L,15);
  L.forEach(v=>m.pin(v,openOK(v,t)?"":"off",()=>barSheet(v)));if(k==="__me")setMe(m);
}
let mvMaps=[];
function openMove(free,keep){
  clearInactiveZoneSetup();
  const g=G(),me=you()||fromPoint(),z=keep||{lat:g.center.lat,lng:g.center.lng,r:g.radius};
  const range=g.len===60?{lo:.5,hi:1,ticks:[[.5,"500 m"],[.75,"750 m"],[1,"1 km"]]}:{lo:.5,hi:2,ticks:[[.5,"500 m"],[1,"1 km"],[2,"2 km"]]};
  sheet(`<div class="rzsheet move-zone"><div class="lshead"><h3 tabindex="-1" autofocus style="outline:0">${free?"Your zone's run dry":"Move your zone"}</h3>
    <p class="note" style="margin:2px 0 10px">${free?"Nothing else is open here, so this move is free. Drag the circle somewhere new.":"Once a game. Drag to move. Pinch or slide to change the radius."}</p></div>
    <div class="move-map-controls">${rrZoneHTML(range)}</div><p class="note" id="mvNote" style="margin:8px 0 0"></p>
    <div class="lsfoot"><button class="btn" type="button" id="mvGo">Move here</button><button class="btn dark" type="button" id="mvX" style="margin-top:10px">${free?"Close":"Stay here"}</button></div></div>`,()=>{
    $("sheet").classList.add("full");$("sheet").scrollTop=0;
    const pool=(zz,t)=>{const all=playable(inCircle(zz,zz.r),g.newOnly).filter(v=>!visited(v.id));return {all,open:all.filter(v=>openOK(v,t))}};
    rrZoneBind(z,me,()=>g.newOnly,(P,zz)=>{const m=me?dist(me,zz):0,far=m>1500,same=dist(zz,g.center)<300&&Math.abs(zz.r-g.radius)<.025;
      $("mvNote").textContent=same?"That's where you are now. Drag the map or change the radius.":far?`About ${km(m)} from you, so the clock waits till you reach your first bar there (up to 20 minutes).`:"Close enough that the clock keeps running.";
      const b=$("mvGo");b.disabled=same||P.open.length<2;b.textContent=!same&&P.open.length<2?"Not enough open here":"Move here";
      b.onclick=()=>{const name=nearestSuburb(zz);g.center={lat:zz.lat,lng:zz.lng};g.radius=zz.r;g.areas.push(name);g.moves.push({at:now(),to:name,free:!!free,m:Math.round(m)});if(!free)g.voluntaryUsed=true;
        if(far){endTripFreeze(g,true);startFreeze(g,20*60000,true);g.frz.zone=true}   // the clock waits till the first bar in the new zone
        g.target=null;g.reelOpen=false;save();closeSheet();if(rrMap){rrMap.remove();rrMap=null}renderPlay();renderClock()}},{...range,pool,reopen:k=>openMove(free,k)});
    $("mvX").onclick=closeSheet;
  });
}
/* Practice spin: the real wheel and real rooftops, landing on a card. No game, nothing saved.
   First time someone taps Play for a mode: rules → Next → practice spin → "Let's play" (or skip).
   Any other time it hangs off the rules sheet. Opening either one counts as having seen that mode's intro. */
const demoBtns=next=>next?`<button class="btn" type="button" id="howX" style="margin-top:16px">Next</button>`
  :`<div class="demoacts"><button class="btn line" type="button" id="demoGo">Practice spin</button><button class="btn dark" type="button" id="howX">Got it</button></div>`;
function bindDemoBtns(back,next){if(next)$("howX").onclick=()=>demoSheet(back,next);else{$("howX").onclick=closeSheet;$("demoGo").onclick=()=>demoSheet(back)}}
function demoSheet(back,next){
  const play=()=>{closeSheet();next()};
  sheet(`<h3>Practice spin</h3><p class="note">Just a practice. Real rooftops, no game, nothing saved. Flick it down.</p><div class="demo"><div id="demoBox"></div></div>
    <button class="btn dark" type="button" id="demoBack" style="margin-top:14px">${next?"Skip, let's play":"Back to the rules"}</button>`,
    ()=>{$("demoBack").onclick=next?play:back;
      bindDemo(next?`<div class="demoacts"><button class="btn line" type="button" id="demoAgain">Spin again</button><button class="btn" type="button" id="demoPlay">Let's play</button></div>`:null,
        ()=>{if(!next)return;$("demoBack").hidden=true;$("demoPlay").onclick=play})});
}
function bindDemo(afterHTML,landed,boxEl){
  const box=boxEl||$("demoBox");if(!box)return;
  box.addEventListener("touchstart",e=>e.stopPropagation(),{passive:true});   // flicking the wheel shouldn't drag the sheet shut
  // your city's rooftops, open ones only (falls back to all of them if none are open)
  const city=playable(VENUES,false).filter(v=>!v.tempClosed&&cityOf(v)===S.city),open_=city.filter(v=>openState(v,now()).open),pool=open_.length>=5?open_:city;
  const mk=()=>{if(box.parentNode&&box.parentNode.classList.contains("demo"))box.parentNode.style.minHeight="";box.innerHTML=`<div id="demoReel" class="demoreel"></div>`;if($("demoBack"))$("demoBack").hidden=false;
    const R=makeReel($("demoReel"),pool.map(v=>v.name),{hint:true,onRelease:vel=>{
      if(R.busy)return false;const v=pool[Math.floor(Math.random()*pool.length)];barPhoto(v,"browse");
      R.spinTo(v.name,vel,info=>{const o=openState(v,now());
        const facts=`<span>${I.clock} ${o.open?"Open til "+clock12(o.closeAt):o.opens!=null?"Opens "+clock12(o.opens):"Closed today"}</span>`;
        if(box.parentNode&&box.parentNode.classList.contains("demo"))box.parentNode.style.minHeight="0";box.innerHTML=sheetCard(v,facts)+(afterHTML||`<button class="btn sm line" type="button" id="demoAgain">Spin again</button>`);
        reveal(info,box);afterReveal(()=>bindSheetCard(v,facts));$("demoAgain").onclick=mk;if(landed)landed()})}})};   // photo swaps in after the reveal, not mid-flight
  mk();
}
const HOW={rush:()=>[
    ["Spin","You get a random rooftop in your zone. The clock starts on your first spin."],
    ["Get to the bar","Walk, run or Uber. It only counts once you've had a drink."],
    ["Not feeling it?",`Spin again. The first re-spin is free, then it's ${SKIP_COST} minutes off the clock. Can't get in? That re-spin's free.`],
    ["Stuck somewhere quiet?","Move your zone once a game. If it's far, the clock waits."],
    ["Wildcards, and a jackpot","Some spins come with a little challenge for the next bar. And once a game, you'll hit the jackpot."],
    ["Beat the clock","Get to your last rooftop before zero and it counts. How many can you fit in?"]],rr:()=>[
  ["Spin","You get a random rooftop near you, or one from your Hit list."],
  ["Not feeling it?","Spin again. Re-spins are always free."],
  ["Just the spin","No clock, no wildcards, no jackpot. Stay as long as you like at each bar. You still get a crawl card at the end with all your stats."],
  ["Spin when you're ready","One bar or five. End the crawl from the menu, or we'll wrap it up for you after 3 hours. Still out? Tap Keep going."]]};
// How to play from settings: both modes in one sheet, three-quarters high
function howToPlay(k){k=k||"rush";
  sheet(`<h3>How to play</h3><div class="seg" style="margin-top:12px"><button type="button" data-hw="rush" aria-pressed="${k==="rush"}">Timed</button><button type="button" data-hw="rr" aria-pressed="${k==="rr"}">R&amp;R</button></div><div class="steps" style="margin-top:14px">${stepsHTML(HOW[k]())}</div>`,()=>{
    $("sheet").classList.add("tq");$("sheetBody").querySelectorAll("[data-hw]").forEach(b=>b.onclick=()=>howToPlay(b.dataset.hw))})}
const sawHow=k=>{S.seenHow=S.seenHow||{};if(!S.seenHow[k]){S.seenHow[k]=1;save()}};
function howSheet(next){next=typeof next==="function"?next:null;sawHow("rush");
  sheet(`<h3>How it works</h3><div class="steps" style="margin-top:12px">${stepsHTML(HOW.rush())}</div>
    ${demoBtns(next)}`,()=>bindDemoBtns(()=>howSheet(next),next));
}
function openMenu(){
  const g=G(),free=g.started&&basePool().length<2,canMove=free||!g.voluntaryUsed;
  const cr=CR(g);
  sheet(`<h3>${cr?"Menu":"Game menu"}</h3><div class="menu">
    ${cr?`<button type="button" id="mZone">${I.move}<span>Spin zone<small>${g.cz.type==="list"?"Your Hit list":zoneTxt(g)}</small></span></button>`:""}
    <button type="button" id="mMove" ${cr?"hidden":""} ${canMove?"":"disabled style='opacity:.4'"}>${I.move}<span>Move zone<small>${free?"Free: your zone's nearly empty":g.voluntaryUsed?"Already used this game":"Change of scenery. 1 move per game"}</small></span></button>
    ${S.test?`<button type="button" id="mHome">${I.back}<span>Home (test mode)<small>Drops this ${cr?"crawl":"game"}. Nothing goes on your tab</small></span></button>`:""}
    <button type="button" id="mHow">${I.help}<span>How it works</span></button>
    <button type="button" id="mSound">${I.sound}<span>Sound ${S.sound?"on":"off"}<small>Spin clicks and arrival chime</small></span></button>
    <button type="button" id="mLight">${I.sparkle}<span>Light ${S.camLight!==false?"auto":"off"}<small>Lights up your faces when you film a spin in the dark</small></span></button>
    ${g.clipN?`<button type="button" id="mClips">${I.camera}<span>Clips<small>${g.clipN} from this crawl</small></span></button>`:""}
    <button type="button" class="danger" id="mEnd">${I.flag}<span>${cr?"End the crawl":"End game"}<small>${g.started?(cr?"Your crawl goes on your tab":"Your crawl card is saved"):"Nothing's been played yet"}</small></span></button>
  </div>`,()=>{
    $("mMove").onclick=()=>{if(canMove)openMove(free)};if($("mZone"))$("mZone").onclick=()=>rrZoneSheet();
    if($("mHome"))$("mHome").onclick=()=>{closeSheet();S.game=null;S.wiz=null;S.quick=null;save();stopWatch();go("home")};   // test mode: throw the game away, don't record it
    $("mHow").onclick=cr?cruiseHow:howSheet;
    $("mSound").onclick=()=>{S.sound=!S.sound;save();openMenu()};
    $("mLight").onclick=()=>{S.camLight=S.camLight===false;save();openMenu()};
    if($("mClips"))$("mClips").onclick=()=>clipsSheet(g.id);
    $("mEnd").onclick=()=>sheet(`<h3>${cr?"End the crawl?":"End the game now?"}</h3><p class="note">${g.started?(cr?"Your night is saved, with the time you spent at each bar.":"Your crawl card is saved. The bar you're at counts if your visit's been logged."):"You haven't spun yet, so nothing will be saved."}</p>
      <div class="acts"><button class="btn" type="button" id="eY" style="background:var(--red);color:#fff">${cr?"End the crawl":"End game"}</button><button class="btn dark" type="button" id="eN">${cr?"Keep going":"Keep playing"}</button></div>`,()=>{$("eN").onclick=closeSheet;$("eY").onclick=()=>{closeSheet();endGame(now())}});
  });
}
$("pMenu").onclick=openMenu;
document.addEventListener("click",e=>{if(e.target.closest&&e.target.closest("#mixZone"))rrZoneSheet()});

function cruiseHow(next){next=typeof next==="function"?next:null;sawHow("rr");sheet(`<h3>How R&amp;R works</h3><div class="steps" style="margin-top:12px">${stepsHTML(HOW.rr())}</div>
    ${demoBtns(next)}`,()=>bindDemoBtns(()=>cruiseHow(next),next))}
function endGame(at){
  const g=G();if(!g||g.ended)return;
  document.querySelectorAll(".jpx").forEach(o=>o.remove());spinning=false;   // a jackpot card still up when the clock runs out (or the crawl's ended from the notification) mustn't sit over the crawl card
  if(!g.started){S.game=null;save();stopWatch();go("home");return}
  track("crawl_end",{mode:CR(g)?"rr":"rush",bars:g.visits.filter(v=>v.counted===true||(v.leftAt==null&&v.arrivedAt!=null)).length,minutes:Math.round((Math.min(at,g.endsAt)-g.startedAt)/60000),ended_early:at<g.endsAt,city:g.city||null});
  const before=collectedMap();
  const t=Math.min(at,g.endsAt),early=at<g.endsAt;if(early)g.endsAt=at;
  const a=atVisit();if(a)closeVisit(a,t,"end");
  const d=leaving();if(d)closeVisit(d,Math.min(t,awayNow()||document.hidden?leftGuess(d):t),"end");
  if(g.target){const y=you(),v=byId(g.target);g.missed={id:v.id,m:y?Math.round(dist(y,v)):null}}
  g.ended=true;g.endedAt=t;g.early=early;
  const rec=JSON.parse(JSON.stringify(g));
  // which bars were new to the collection in this game
  const prevCol={};H.forEach(r=>r.visits.forEach(v=>{if(v.counted===true)prevCol[v.id]=1}));
  rec.newIds=rec.visits.filter(v=>v.counted===true&&!prevCol[v.id]).map(v=>v.id);
  if(g.demo){DEMO_REC=rec;track("demo_end",{bars:rec.visits.filter(v=>v.counted===true).length});S.lastEnd=g.id;S.rackEnd=null;S.game=null;save();closeSheet();ding();go("end");confetti();return}
  rec.test=!!(g.test||S.test);pushH(rec);syncH();afterNote(rec);
  S.lastEnd=g.id;S.rackEnd=g.id;S.game=null;save();stopWatch();closeSheet();ding();buzz([100,60,100,60,200]);go("end");confetti();
}


/* ---------- play render ---------- */
const SKIP_COST=2;
let lastFix=Date.now();
function needManual(g){
  if(S.test||g.demo||!g.target)return false;
  if(g.noLoc||locErr!=null)return true;
  if(!here)return now()-g.targetAt>60000;
  if(here.acc>100)return true;
  if(Date.now()-lastFix>90000)return true;
  const v=byId(g.target),exp=walkMin(g.targetFrom||here,v);
  return now()-g.targetAt>(exp*1.5+5)*60000;
}
function logArrival(manual){
  const g=G();if(!g||!g.target)return;track("arrive",{manual:!!manual,leg:g.visits.length+1});const v=byId(g.target);endTripFreeze(g,true);prewarmAudio();
  // the phone was away for a while and we only just found out they're here: assume they've done their 3 minutes
  const late=!document.hidden&&Date.now()-resumedAt<45000&&awayGap>=DWELL_MIN*60000;
  let at=now();const d=leaving();
  if(d){const W=walkMin(byId(d.id),v)*60000;let L=late?leftGuess(d):Math.max(d.dep,now()-W);if(late)at=Math.min(now()-DWELL_MIN*60000,Math.max(L+W,d.dep));L=Math.min(L,at);closeVisit(d,L,"walk")}
  else if(late){const est=(g.targetAt||at)+walkMin(g.targetFrom||v,v)*60000;at=Math.min(now()-DWELL_MIN*60000,Math.max(now()-awayGap,est))}
  g.visits.push({id:v.id,arrivedAt:at,leftAt:null,counted:undefined,manual:!!manual,assumed:late||undefined});
  if((S.test||g.demo)&&g.visits.length===1){g.startPos={lat:v.lat,lng:v.lng};g.trail=[]}   // testing from home: no long line out to the first bar
  g.target=null;save();
  if(document.hidden){g.celebrate=v.id;save();return}
  if(late){catchUp(v.id);return}
  celebrate(v.id);
}
/* Opening the app to find you've arrived and it already counts: one quick beat, not two */
function catchUp(id){
  const g=G();if(g)delete g.celebrate;animateId=null;buzz(40);save();
  if(S.route!=="play")go("play");else renderPlay();
  flyToCounter(false,300);
}
let resumedAt=Date.now(),awayGap=S.seenAt?Date.now()-S.seenAt:0;
function markSeen(){S.seenAt=Date.now();try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
function celebrate(id){
  const g=G();if(g)delete g.celebrate;animateId="at:"+id;arriveSound();buzz([60,40,60,40,120]);save();
  if(S.route!=="play")go("play");else renderPlay();
  setTimeout(confetti,60);
}
// One-time pointer at the camera button, from the second spin on (the first one is just about the game)
function camTip(){const cb=$("camBtn"),g_=G();let tip=document.querySelector(".camtip");
  if(!cb||!cb.classList.contains("ontop")||!g_||!g_.visits.length||!S.tips.night||S.tips.cam||CAM.once||document.body.classList.contains("camon")||S.route!=="play"||$("sheet").open){if(tip)tip.remove();return}
  if(!tip){tip=document.createElement("button");tip.type="button";tip.className="camtip";
    tip.innerHTML=`<b>Film the spin</b><span>Tap the camera, then spin. It records the spin and everyone's reaction.</span>`;document.body.appendChild(tip);
    tip.onclick=()=>{S.tips.cam=1;save();tip.remove()}}
  if(!cb._tip){cb._tip=1;cb.addEventListener("pointerdown",()=>{S.tips.cam=1;save();const t=document.querySelector(".camtip");if(t)t.remove()})}
  ["spinBtn","skipBtn","hereBtn"].forEach(id=>{const x=$(id);if(x&&!x._tip){x._tip=1;x.addEventListener("pointerdown",()=>{if(S.tips.cam)return;S.tips.cam=1;save();const t=document.querySelector(".camtip");if(t)t.remove()})}});
  requestAnimationFrame(()=>{const r=cb.getBoundingClientRect();if(!r.width){tip.hidden=true;return}tip.hidden=false;const below=r.top<innerHeight/2;
    tip.style.right=Math.max(8,innerWidth-r.right)+"px";tip.style.top=below?r.bottom+12+"px":"auto";tip.style.bottom=below?"auto":innerHeight-r.top+12+"px";
    tip.classList.toggle("below",below);tip.style.setProperty("--ax",Math.max(10,(innerWidth-r.right)+r.width/2-Math.max(8,innerWidth-r.right)-8)+"px")})}
function renderPlay(){
  const g=G();if(!g)return;
  if(typeof CAM!=="undefined"&&CAM.once&&!g.ended&&(spinning||!g.target&&(!atVisit()||g.reelOpen)))document.body.classList.add("camon");
  $("pMenu").innerHTML=I.more;
  const counted=countShown(g);
  if(g.visits.length&&!S.tips.night){if(!S.tips.nightAt){S.tips.nightAt=Date.now();save();setTimeout(()=>{S.tips.night=1;save();if(S.route==="play")renderPlay()},8000)}else if(Date.now()-S.tips.nightAt>8000){S.tips.night=1;save()}}
  $("pCount").innerHTML=`${I.glass.replace('<svg','<svg width="18" height="18" style="color:var(--amber)"')} <b>${counted}</b><i class="cv">${I.chev||"›"}</i>${g.visits.length&&!S.tips.night?`<span class="cnudge">Your crawl</span>`:""}`;
  $("strip").innerHTML=g.visits.map((v,i)=>{const b=byId(v.id),c=v.leftAt==null?"here":v.counted===true?"yes":v.counted===false?"no":"q";return `<span class="pip ${c}">${i+1}. ${esc(b.name)}${c==="yes"?" ✓":""}</span>`}).join("");
  $("strip").hidden=true;   // tonight's bars live behind the counter (Your night)
  $("pCount").classList.toggle("nudge",!!g.visits.length&&!S.tips.night);
  renderClock();
  {const cm=$("camMode");if(cm)cm.innerHTML=CR(g)?"R&amp;R":LEN(g.len)}
  {const lv=g.visits.filter(x=>!x.cant&&x.counted!==false).pop(),cl=$("camLoc");if(cl)cl.innerHTML=`${I.pin}<i>${esc(lv?byId(lv.id).name:nearestSuburb(you()||g.center))}</i>`}   // the bar you're at (or just left); the suburb before the first one
  {let mt=$("manTag");if(g.noLoc){if(!mt){mt=document.createElement("div");mt.id="manTag";mt.className="mantag";$("v-play").insertBefore(mt,$("v-play").children[2]||null)}mt.innerHTML=`${I.pin} Manual check-ins`}else if(mt)mt.remove()}
  {let db=$("demoBar");if(g.demo){if(!db){db=document.createElement("div");db.id="demoBar";$("v-play").insertBefore(db,$("v-play").children[2]||null)}db.innerHTML=demoBar(g);bindDemoBar(g)}else if(db)db.remove()}
  if(spinning)return;
  const st=$("stage"),a=atVisit(),t=now(),rem=remaining();
  const qi=g.visits.findIndex(v=>v.leftAt!=null&&v.counted===null);
  const ask=qi>=0?`<div class="ask"><b>Should ${esc(byId(g.visits[qi].id).name)} count?</b><span class="small">You weren't there long. Count it if you stopped in.</span><div class="row"><button class="btn sm" type="button" id="aY">Count it</button><button class="btn sm dark" type="button" id="aN">Don't count</button></div></div>`:"";
  let banner="";
  if(g.started&&rem<=FINAL*60000&&!g.shownFinal){g.shownFinal=true;g.finalBanner=true;save()}
  if(g.finalBanner&&!a)banner=`<div class="banner"><b>Final stretch.</b> Every minute counts now.</div>`;
  const wild=(id)=>g.wild&&g.wild.id===id&&g.wild.locked?
    '<div class="wild"><span aria-hidden="true">🔒</span><span><b>Locked wildcard</b>Play a real crawl to discover this one.</span></div>':
    g.wild&&g.wild.id===id?`<div class="wild"${g.wild.landed||g.wild.shown&&!g.wild.flying?"":' data-pending="1"'}>${I.sparkle}<span><b>Wildcard</b>${esc(g.wild.text)}</span></div>`:"";
  if(a&&!g.reelOpen){
    const v=byId(a.id),o=openState(v,t),d=t-a.arrivedAt,ok=d>=DWELL_MIN*60000,nw=isNew(v.id);
    const cp=cardPhoto(v);
    st.innerHTML=ask+`<div class="bar at${cp.cls||" photo blank"}${animateId===("at:"+a.id)?" anim":""}"${cp.style}>${cp.cr}<span class="eyebrow">${CR(g)?"You're here":"Visit logged"}${nw?'<span class="newpill">New to you</span>':""}</span><h2>${esc(v.name)}</h2>${v.fact?`<div class="wi">${esc(v.fact)}</div>`:""}
      <div style="display:flex;justify-content:space-between;align-items:flex-end;gap:10px"><div><div class="small">Time here</div><div class="dwell" id="dwell">${mmss(d)}</div></div>
      <div class="small" style="text-align:right">${o.open?"Closes "+clock12(o.closeAt):""}</div></div>
      ${g.wild&&g.wild.id===v.id?wild(v.id).replace('class="wild"','class="wild dark"').replace(' data-pending="1"',''):""}</div>
      ${CR(g)&&g.nudge&&d>=g.nudge*60000?`<div class="nudge">${I.clock}<span><b>Keen to try another bar?</b> Spin whenever you're ready.</span></div>`:""}
      ${ok&&g.visits.filter(x=>x.arrivedAt!=null).length>=2&&!g.snapAsk&&!(g.photos||[]).length?`<div class="snap two"><div class="snapt">${I.camera}<span><b>Grab a photo for your crawl card?</b></span><button class="snapx" type="button" id="snapX" aria-label="Not now">${I.x}</button></div><div class="row2"><button class="btn sm" type="button" id="snapIn">${I.camera} Camera</button><button class="btn sm dark" type="button" id="snapGal">${GAL} Gallery</button></div></div>`
        :(g.photos||[]).length&&!g.snapSeen?`<div class="tip nob soft ok">${I.check}<span><b>Photo saved.</b> It'll be on your story card.</span></div>`
        :ok?`<div class="tip nob soft ok">${I.check}<span><b>This rooftop's on the board.</b> Spin whenever you're ready.</span></div>`:""}
      <div class="spinrow"><button class="btn" type="button" id="spinBtn">Spin for the next one</button><button class="camfab" type="button" id="camBtn" aria-label="Film this spin">${I.camera}</button></div>
      ${d<DWELL_MIN*60000?`<div class="links"><button class="btn sm line" type="button" id="cantBtn" style="width:auto;padding:0 16px">Can't get in?</button></div>`:""}`;
    if(animateId===("at:"+a.id))animateId=null;
  }else if(g.target){
    const v=byId(g.target),y=you()||g.targetFrom,o=openState(v,t),dm=dist(y,v),nw=isNew(v.id),man=needManual(g);
    const cp0=cardPhoto(v),fs=g.freeSkips||0,coming=!cp0.cls&&phMem[v.id]===undefined&&phAllowed(v.id,"play")&&!gBad;
    const cp=cp0.cls?cp0:{cls:coming?" photo blank loading":" photo blank",style:"",cr:""};
    if(document.body.classList.contains("camon")){const ph=phMem[v.id];
      st.innerHTML=ask+`<div class="camtgt tapmaps" data-gm="${esc(gmapsURL(v))}" role="link" tabindex="0">${ph&&ph.url?`<img class="ct-ph" src="${ph.url}" alt="">`:""}<div class="ct-t"><span class="eyebrow">Next bar</span><b class="ct-n">${esc(v.name)}</b><div class="ct-f"><span>${travelHTML(y,v).replace(/<\/svg>\s*/,"</svg><i>")}</i></span><span>${I.pin}<i>${mOrKm(dm)}</i></span></div></div>${wild(v.id)}</div>
      <div class="camacts"><a class="btn sm dir" href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(v.name+", "+v.address+", "+({Brisbane:"QLD",Melbourne:"VIC",Perth:"WA","Gold Coast":"QLD"}[cityOf(v)]||"NSW"))}${v.pid?"&destination_place_id="+v.pid:""}" target="_blank" rel="noopener">${I.nav} Directions</a><button class="btn sm line" type="button" id="skipBtn">${I.redo} Spin again</button></div>`;{const cn=st.querySelector(".ct-n");if(cn)fitLine(cn,15)}
}
    else{st.innerHTML=banner+ask+`<div class="bar tgt tapmaps${cp.cls}${animateId===v.id?" anim":""}"${cp.style} data-gm="${esc(gmapsURL(v))}" role="link" tabindex="0">${cp.cr}<span class="gmgo" aria-hidden="true">${I.nav}</span><span class="eyebrow">Next bar${nw?`<span class="newpill"${cp.cls?"":' style="background:rgba(36,24,3,.15);color:var(--amber-ink)"'}>New to you</span>`:""}</span><h2>${esc(v.name)}</h2>${v.vibe?`<div class="vibe">${esc(v.vibe)}</div>`:""}
      <div class="facts"><span>${travelHTML(y,v)}</span><span>${I.pin} ${mOrKm(dm)}</span>${o.open?`<span>${I.clock} til ${clock12(o.closeAt)}</span>`:""}</div>
      ${wild(v.id)}
      <a class="btn dir" href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(v.name+", "+v.address+", "+({Brisbane:"QLD",Melbourne:"VIC",Perth:"WA","Gold Coast":"QLD"}[cityOf(v)]||"NSW"))}${v.pid?"&destination_place_id="+v.pid:""}" target="_blank" rel="noopener">${I.nav} Directions</a></div>
      ${g.noLoc?`<div class="again"><div class="spinrow"><button class="btn again-btn${now()<hereAt(g)?" locked":""}" type="button" id="hereBtn" aria-disabled="${now()<hereAt(g)}">${hereLbl(g)}</button><button class="camfab" type="button" id="camBtn" aria-label="Film this spin">${I.camera}</button></div><button class="txtbtn skiplink" type="button" id="skipBtn">Skip this one</button></div>`:""}
      ${g.noLoc?"":`<div class="again"><div class="spinrow"><button class="btn line again-btn" type="button" id="skipBtn">${I.redo} Spin again</button><button class="camfab" type="button" id="camBtn" aria-label="Film this spin">${I.camera}</button></div><span class="fine">${CR(g)?"Not feeling it? Spin again, as often as you like":fs?`${fs} free re-spin${fs>1?"s":""} left`:`Costs ${SKIP_COST} minutes${g.skipCost?` · ${g.skipCost} min used so far`:""}`}</span></div>`}
      ${man&&!g.noLoc?`<button class="btn line" type="button" id="hereBtn">I'm here</button>`:""}
      ${!g.demo&&!CR(g)?`<p class="note">Next spin unlocks after your visit. ${g.noLoc?"Location is off. Tap “I’m here” when you arrive.":man?"Tap “I’m here” when you arrive.":"Head to "+esc(v.name)+" for automatic check-in."}</p>`:""}
      ${!g.demo&&!CR(g)&&!g.visits.length&&(!you()||dist(you(),v)>2000)?'<button type="button" class="txtbtn" id="homeDemo">Playing from home? Try the demo</button>':""}
      ${CR(g)&&!g.noLoc?tip("enroute","You're checked in when you arrive. Nothing to tap.",false):""}
      ${man&&!g.noLoc?`<p class="note" style="text-align:center;margin:0">Location's struggling. Tap "I'm here" if you've arrived.</p>`:""}`;}
    if(animateId===v.id)animateId=null;
  }else{
    const bp=basePool(),pool=bp.length,nm=k=>bp.length?bp[(k+bp.length*3)%bp.length].name:"";
    st.innerHTML=banner+ask+`<div class="ready">
      ${g.started?"":mixlineHTML(g)}
      <div id="reelBox"></div><button class="camfab ontop${CAM.once?" x":""}" type="button" id="camBtn" aria-label="${CAM.once?"Close camera":"Film this spin"}">${CAM.once?I.x:I.camera}</button><div class="camswipe" id="camSwipe"><span><i class="recdot"></i>Swipe down to spin and record</span></div>
      ${pool<=3&&g.started?`<div class="poolnum low">Only <b>${pool}</b> ${CR(g)?"open nearby":"left in your zone"}</div>`:""}
      ${g.started?"":`<p class="note reelnote">${reelNote()}${CR(g)?"":"<br>The clock starts when you spin."}</p>`}
      ${a?`<button class="btn line" type="button" id="reelBack">Back to ${esc(byId(a.id).name)}</button>`:""}</div>`;
  }
  if($("homeDemo"))$("homeDemo").onclick=()=>sheet('<h3>Switch to a demo crawl?</h3><p class="note">This ends your current crawl and starts a Sydney demo.</p><div class="acts"><button class="btn" id="confirmDemo">Start demo crawl</button><button class="btn dark" id="keepCrawl">Keep playing</button></div>',()=>{
    $("keepCrawl").onclick=closeSheet;$("confirmDemo").onclick=()=>{if(G()!==g||g.visits.length){closeSheet();return}closeSheet();stopWatch();S.game=null;startDemo()}
  });
  g._man=g.target?needManual(g):false;
  const pv=a?byId(a.id):g.target?byId(g.target):null;
  if(pv&&phMem[pv.id]===undefined)barPhoto(pv).then(ph=>{if(!ph){if(G()===g&&g.target===pv.id)st.querySelector(".bar.loading")?.classList.remove("loading");return}afterReveal(()=>{const gg=G();if(gg&&(gg.target===pv.id||(atVisit()&&atVisit().id===pv.id))&&!spinning&&!gg.reelOpen)renderPlay()})});
  fitPlay();
  st.querySelectorAll(".wild").forEach(w=>w.onclick=e=>{e.stopPropagation();const txt=w.querySelector("span").lastChild.textContent;
    sheet(`<h3>Wildcards</h3><p class="note">Little challenges for the bar you're heading to. Completely optional… I guess.</p><div class="wild wexplain">${I.sparkle}<span><b>This one</b>${esc(txt)}</span></div><button class="btn" type="button" id="wOk" style="margin-top:16px">Challenge accepted</button>`,()=>$("wOk").onclick=closeSheet)});
  st.querySelectorAll(".bar.tapmaps,.camtgt").forEach(c=>c.onclick=e=>{if(e.target.closest("a,button,.wild"))return;window.open(c.dataset.gm,"_blank","noopener")});
  const sb=$("spinBtn");if(sb)sb.onclick=()=>{if(!CR(g)&&g.started&&!basePool().length){openMove(true);return}const open_=()=>{g.reelOpen=true;save();renderPlay()};
    if(a&&a._ans===undefined&&now()-a.arrivedAt<DWELL_MIN*60000)askDrink(a,open_);else open_()};
  if($("leaveBtn"))$("leaveBtn").onclick=()=>{const d=leaving();if(d){closeVisit(d,now(),"walk");save();buzz(10)}renderPlay()};
  camTip();
  {const cb=$("camBtn");if(cb)cb.onclick=()=>{if(spinning)return;
    if(cb.classList.contains("x")){CAM.once=false;camSync();renderPlay();return}
    CAM.once=true;CAM.onceAt=Date.now();track("camera_open");document.body.classList.add("camon");const sb_=$("spinBtn"),sk_=$("skipBtn");
    if(sb_)sb_.click();else if(sk_)sk_.click();else{camSync();renderPlay()}}}
  if($("snapX"))$("snapX").onclick=()=>{g.snapAsk=1;save();renderPlay()};
  const snapGot=f=>shrink(f,1000).then(d=>{const gg=S.game;if(!gg)return;(gg.photos=gg.photos||[]).push(d);if(gg.photos.length>3)gg.photos.shift();gg.snapAsk=1;try{save()}catch(x){gg.photos.pop();toast("Couldn't save the photo. Phone storage is full.")}if(S.route==="play")renderPlay();setTimeout(()=>{if(S.game){S.game.snapSeen=1;save();if(S.route==="play")renderPlay()}},4000)});
  if($("snapIn")){$("snapIn").onclick=()=>pickPhoto(snapGot,true);$("snapGal").onclick=()=>pickPhoto(snapGot,false)}
  if($("reelBack"))$("reelBack").onclick=()=>{if(a)delete a._ans;g.reelOpen=false;save();renderPlay()};
  if($("reelBox")){reel=makeReel($("reelBox"),gameReelNames(),{hint:true,onRelease:v=>doSpin(false,v)});fitPlay();requestAnimationFrame(()=>{if(!spinning)fitPlay()});setTimeout(()=>{if(!spinning)fitPlay()},400)}
  if(qi>=0){$("aY").onclick=()=>answer(qi,true);$("aN").onclick=()=>answer(qi,false)}
  const sk=$("skipBtn");if(sk&&CR(g))sk.onclick=()=>{const id=g.target;(g.skipped=g.skipped||[]).push(id);g.target=null;save();renderPlay();skipToast(id)};
  else if(sk)sk.onclick=()=>{if(!basePool().length){openMove(true);return}const free=(g.freeSkips||0)>0;sheet(`<h3>Spin again?</h3><p class="note">${free?"This one's free.":`This re-spin costs <b style="color:var(--amber)">${SKIP_COST} minutes</b> off the clock${g.skipCost?` (you've used ${g.skipCost} so far)`:""}.`}</p><div class="acts"><button class="btn" type="button" id="sY">${free?"Spin again, free":"Spin again (−"+SKIP_COST+" min)"}</button><button class="btn dark" type="button" id="sN">Keep ${esc(byId(g.target).name)}</button></div>`,()=>{$("sN").onclick=closeSheet;$("sY").onclick=()=>{closeSheet();if(free)g.freeSkips--;else{g.endsAt-=SKIP_COST*60000;g.skipCost=(g.skipCost||0)+SKIP_COST}(g.skipped=g.skipped||[]).push(g.target);g.target=null;save();if(remaining()<=0){loop();return}renderPlay()}})};
  const cg=$("cantBtn");if(cg)cg.onclick=()=>{const v=byId(a.id);sheet(`<h3>Couldn't get in to ${esc(v.name)}?</h3><p class="note">Closed, full, or not letting groups in. You get a free re-spin${CR(g)?"":" and no time is lost"}. We'll note it so the bar gets checked.</p><div class="acts"><button class="btn" type="button" id="cY">Yes, free re-spin</button><button class="btn dark" type="button" id="cN">We're in</button></div>`,()=>{$("cN").onclick=closeSheet;$("cY").onclick=()=>{closeSheet();a.leftAt=now();a.counted=false;a.cant=true;S.reports.push({id:a.id,at:now()});(g.skipped=g.skipped||[]).push(a.id);save();renderPlay()}})};
  const hb=$("hereBtn");if(hb)hb.onclick=()=>{const v=byId(g.target),far=here?dist(here,v):null;
    if(g.noLoc){if(now()<hereAt(g)){toast("Check-in opens once estimated arrival time elapses.",2600);return}buzz(30);logArrival(true);return}   // playing without location: the tap is the check-in
    sheet(`<h3>At ${esc(v.name)}?</h3><p class="note">${far!=null&&far>800?`Your phone last placed you ${mOrKm(far)} away, but GPS can be off.`:"Your location isn't coming through properly, so you can log the visit yourself."} Only tap this if you're actually there.</p><div class="acts"><button class="btn" type="button" id="hY">Yes, log my visit</button><button class="btn dark" type="button" id="hN">Not yet</button></div>`,()=>{$("hN").onclick=closeSheet;$("hY").onclick=()=>{closeSheet();logArrival(true)}})};
  const gn=$("gpsNote");
  if(S.test||(G()&&G().noLoc))gn.textContent="";
  else if(locErr===1)gn.innerHTML=`<b style="color:var(--red)">Location is off.</b> Turn it back on so visits log automatically.`;
  else if(!here&&!(G()&&G().noLoc))gn.textContent="Finding you…";
  else gn.textContent=g.target?"Keep the app open on the way so your visit logs the moment you arrive.":"";
}
function confetti(host){
  const app=host||$("app"),cols=["#F5B83D","#F4F1EA","#4ADE80","#FFD27A"];
  for(let i=0;i<46;i++){const p=document.createElement("i");p.className="cf";p.style.left=(Math.random()*100)+"%";p.style.background=cols[i%4];p.style.animationDelay=(Math.random()*.25)+"s";p.style.setProperty("--x",(Math.random()*160-80)+"px");p.style.setProperty("--r",(Math.random()*720-360)+"deg");app.appendChild(p);setTimeout(()=>p.remove(),1900)}
}
const PICK3="Pick from 3. Your next spin lands on three rooftops and you choose.";
// a short name and a picture for each wildcard, for Dealer's choice
const WIC={glass:'<path d="M5 4h14l-7 8z"/><path d="M12 12v7M8 20h8"/>',two:'<path d="M4 4h6l-1 9a2 2 0 0 1-4 0zM14 4h6l-1 9a2 2 0 0 1-4 0z"/><path d="M7 15v5M17 15v5M5 20h4M15 20h4"/>',
 star:'<path d="M12 3l2.4 5.6 6 .6-4.5 4 1.3 6-5.2-3.1-5.2 3.1 1.3-6-4.5-4 6-.6z"/>',left:'<path d="M15 6l-6 6 6 6"/><path d="M9 12h11"/>',menu:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6"/><path d="M11 17.5a1.5 1.5 0 1 1 2.4 1.2"/>',
 hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7-2.5 0-4-1.5-5.5-4L4 13a1.5 1.5 0 0 1 2.5-1.5L8 13"/>',
 batt:'<rect x="3" y="7" width="16" height="10" rx="2"/><path d="M21 10v4"/><path d="M6 10v4"/>',party:'<path d="M4 20l5-14 9 9z"/><path d="M14 4v2M19 9h2M17 6l2-2"/>',shot:'<path d="M6 5h12l-1.5 14h-9z"/><path d="M7 10h10"/>',
 coin:'<circle cx="12" cy="12" r="8"/><path d="M14.5 9.5c-.5-1-1.5-1.5-2.5-1.5-1.4 0-2.5.8-2.5 2s1 1.6 2.5 2 2.5.9 2.5 2-1.1 2-2.5 2c-1 0-2-.5-2.5-1.5M12 6.5V8M12 16v1.5"/>',
 person:'<circle cx="12" cy="8" r="3.5"/><path d="M5 20c1-4 4-5.5 7-5.5s6 1.5 7 5.5"/>',mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4"/>',
 copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',shirt:'<path d="M8 4l-5 3 2 4 3-1v10h8V10l3 1 2-4-5-3c-.5 1.5-2 2.5-4 2.5S8.5 5.5 8 4z"/>'};
const WNAME={"Bartender's choice for the whole group.":["Bartender's call","glass"],"Order something none of you have tried before.":["First timers","star"],"Everyone orders the same thing.":["Matching","two"],
 "Pick the drink for the person on your left.":["Pass it left","left"],"Order the drink with the strangest name on the menu.":["Weirdest name","menu"],"Rock-paper-scissors. Loser picks the next round.":["Rock paper","hand"],
 "Whoever's phone is on the lowest battery picks the drinks.":["Low battery","batt"],"Find out what a table nearby is celebrating, and toast them.":["Party crash","party"],"Shots all round.":["Shots","shot"],
 "Cheapest thing on the menu. No exceptions.":["Cheapskate","coin"],"Ask a stranger to pick your round.":["Stranger's pick","person"],"Make a toast. Worst one buys the next round.":["Toastmaster","mic"],
 "Buffalo. Left hand only.":["Buffalo","hand"],"Order whatever the bartender just made for the last person. The whole group.":["Copycat","copy"],"Whoever's wearing the most black picks the round.":["Most black","shirt"]};
const wildFace=w=>{const[n,ic]=WNAME[w]||["Wildcard","star"];return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${WIC[ic]}</svg><b>${esc(n)}</b>`};
const WILDS=[
 "Bartender's choice for the whole group.",
 "Order something none of you have tried before.",
 "Everyone orders the same thing.",
 "Pick the drink for the person on your left.",
 "Order the drink with the strangest name on the menu.",
 "Rock-paper-scissors. Loser picks the next round.",
 "Whoever's phone is on the lowest battery picks the drinks.",
 "Find out what a table nearby is celebrating, and toast them.",
 "Shots all round.",
 "Cheapest thing on the menu. No exceptions.",
 "Ask a stranger to pick your round.",
 "Make a toast. Worst one buys the next round.",
 "Buffalo. Left hand only.",
 "Order whatever the bartender just made for the last person. The whole group.",
 "Whoever's wearing the most black picks the round."
];
// Wildcards: a set number per game (1 hour: 2, 2 hours: 3 or 4), on random bars, never the first and never two in a row.
// Cards come off a shuffled deck: no repeats in a game, and the ones you saw last game go to the bottom.
function planWilds(g){
  if(g.demo)return [1,3];
  const n=g.len===60?2:(Math.random()<.5?3:4),max=g.len===60?4:8;
  for(let tries=0;tries<200;tries++){const legs=shuffle([...Array(max)].map((_,i)=>i+1)).slice(0,n).sort((a,b)=>a-b);
    if(legs.every((x,i)=>!i||x-legs[i-1]>1))return legs}
  return [1,3,5,7].slice(0,n);
}
function rollWild(g,id){
  const leg=g.visits.length;   // how many bars you've been to before this one
  if(!g.demo&&g.dealt&&g.dealt.leg===leg){g.wild=g.dealt.text?{id,text:g.dealt.text,leg}:null;if(g.wild)g.lastWild=g.wild.text;return}   // Dealer's choice
  if(!g.wplan)g.wplan=planWilds(g);
  // past the planned stretch (a big night), wildcards keep coming: never two in a row, and the longer it's been, the likelier
  const max=g.len===60?4:8;g.wlate=g.wlate||{};
  if(leg>max&&g.wlate[leg]===undefined){const last=Math.max(0,...g.wplan.filter(x=>x<leg)),dry=leg-last;   // bars since the last one
    g.wlate[leg]=dry>1&&Math.random()<Math.min(1,.3+.3*(dry-2));if(g.wlate[leg])g.wplan.push(leg)}
  if(!g.wplan.includes(leg)){g.wild=null;return}
  if(g.wild&&g.wild.leg===leg){g.wild.id=id;return}   // re-spun: the same wildcard moves to the new bar
  if(g.demo){
    if(g.demoWildLeg==null)g.demoWildLeg=g.lastWild?-1:leg;
    if(leg!==g.demoWildLeg){g.wild={id,leg,locked:true,shown:true};return}
    if(g.lastWild){g.wild={id,leg,text:g.lastWild};return}
  }
  if(!g.wdeck||!g.wdeck.length){const recent=S.wseen||[],sh=shuffle(WILDS.map((_,i)=>i));g.wdeck=sh.filter(i=>!recent.includes(i)).concat(sh.filter(i=>recent.includes(i)))}
  const i=g.wdeck.shift(),w=WILDS[i];
  if(!g.demo)S.wseen=[i].concat((S.wseen||[]).filter(x=>x!==i)).slice(0,8);
  g.wild={id,text:w,leg};g.lastWild=w;if(w===PICK3)g.pick3=true;
}
function renderClock(){
  const g=G();if(!g)return;{const lt=$("lvT"),d=leaving();if(lt&&d)lt.textContent=mmss(now()-d.arrivedAt)}const r=remaining(),tot=g.len*60000;
  if(CR(g)){$("clock").className="clock cruise";$("tbar").hidden=true;
    if(!g.started){$("clockT").textContent="";{const h='<span class="rrt">R<i>&amp;</i>R</span><button class="rrz" type="button" id="mixZone">'+zoneTxt(g,1)+' <span class="zchev">›</span></button>',el=$("clockL");if(el._h!==h){el._h=h;el.innerHTML=h;fitZoneLbl()}}return}
    $("clockT").textContent="";{const h='<span class="rrt">R<i>&amp;</i>R</span><button class="rrz" type="button" id="mixZone">'+zoneTxt(g,1)+' <span class="zchev">›</span></button>',el=$("clockL");if(el._h!==h){el._h=h;el.innerHTML=h;fitZoneLbl()}}return}
  $("tbar").hidden=false;
  $("clockT").textContent=mmss(r);
  if(!g.started){$("clock").className="clock";$("tbar").className="tbar";$("tbarI").style.width="100%";$("clockL")._h=null;$("clockL").textContent="Starts on spin";return}
  const warn=r<=FINAL*60000&&r>10*60000,red=r<=10*60000;
  $("clock").className="clock"+(red?" red":warn?" warn":"");
  $("tbar").className="tbar"+(red?" red":warn?" warn":"");
  $("tbarI").style.width=Math.max(0,Math.min(100,r/tot*100))+"%";
  $("clockL")._h=null;$("clockL").textContent=r<=FINAL*60000?"Final stretch":"Left";
  if(frozen(g)){$("clock").className="clock frozen";$("tbar").className="tbar frozen";$("clockL")._h=null;$("clockL").textContent=(g.frz.trip?"Free trip · ":"Frozen · ")+mmss(g.frz.until-now())}
}

/* ---------- stats + scorecard ---------- */
function stats(r){
  const arrived=r.visits.filter(v=>v.arrivedAt!=null),counted=arrived.filter(v=>v.counted===true);
  const pts=[r.startPos,...arrived.map(v=>byId(v.id))];let total=0,legs=[];
  for(let i=1;i<pts.length;i++){const d=dist(pts[i-1],pts[i])*1.3;total+=d;legs.push({to:arrived[i-1],d})}
  const longest=legs.slice().sort((a,b)=>b.d-a.d)[0];let quick=null;
  for(let i=1;i<arrived.length;i++){const p=arrived[i-1];if(p.leftAt!=null){const dt=arrived[i].arrivedAt-p.leftAt;if(dt>=0&&(!quick||dt<quick.ms))quick={ms:dt,from:p.id,to:arrived[i].id}}}
  return {arrived,counted,total,longest,quick,dur:(r.endedAt||r.endsAt)-r.startedAt,last:arrived[arrived.length-1]};
}


let eMap=null;
const NOLOC_AW=["Trust the Wheel","Change of Scenery","Bounced","Top Floor","Ground Floor","Grand Tour","Just the One","Good Night Out","Good Day Out","Quiet One"];
// No award to give (and always for R&R): a plain title from when it started, like "Afternoon crawl". The stats are right below.
const DAYN=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const plainTitle=r=>{const a=sydAt(r.startedAt||r.endedAt||Date.now(),TZ[r.city||"Sydney"]),h=a.min/60;
  return {t:`${DAYN[a.day]} ${h<5?"night":h<11?"morning":h<14?"lunch":h<17?"afternoon":h<21?"evening":"night"} crawl`,why:"",plain:true}};
const awardsFor=(r,st)=>{if(r.mode==="cruise")return [r.title?{t:r.title,why:"",plain:true}:plainTitle(r)];
  const L=awards(r,st);if(!r.noLoc)return L;const k=L.filter(a=>NOLOC_AW.includes(a.t));return k.length?k:[plainTitle(r)]};
// where a crawl was, for the card: a Hit list (or anywhere) crawl just shows the city
const placeOf=r=>{const a=r.areas[r.areas.length-1]||"";return a==="Hit list"||a==="Anywhere"||!a?(r.city||"Sydney"):a==="you"?"Near you":a};
function awards(r,st){
  const L=[],n=st.counted.length,nm=id=>esc(byId(id).name);
  const add=(t,why)=>L.push({t,why});
  if(st.last&&!r.early&&!r.missed&&r.endsAt-st.last.arrivedAt<=3*60000)add("Down to the Wire",`Into ${nm(st.last.id)} with ${mmss(r.endsAt-st.last.arrivedAt)} to spare`);
  if(r.missed&&r.missed.m!=null&&r.missed.m<=300)add("So Close",`${nm(r.missed.id)} was ${mOrKm(r.missed.m)} away at zero`);
  if(st.quick&&st.quick.ms>=60000&&st.quick.ms<=6*60000)add("Pit Stop",`${nm(st.quick.from)} to ${nm(st.quick.to)} in ${hmm(st.quick.ms)}`);
  // a counted bar you were in and out of fast (not one the clock ran out at)
  const inOut=st.counted.filter(v=>v.leftAt&&(!r.endedAt||v.leftAt<r.endedAt-60000)&&v.leftAt-v.arrivedAt<10*60000).sort((a,b)=>(a.leftAt-a.arrivedAt)-(b.leftAt-b.arrivedAt))[0];
  // every bar quick, across the whole crawl (3+ bars; the one the clock ran out at doesn't count against you)
  const runV=st.counted.filter(v=>v.leftAt&&(!r.endedAt||v.leftAt<r.endedAt-60000));
  if(runV.length>=3&&runV.every(v=>v.leftAt-v.arrivedAt<15*60000))add("Clean Run",`${runV.length} bars, every one under 15 minutes`);
  if(inOut)add("In and Out",`${hmm(inOut.leftAt-inOut.arrivedAt)} at ${nm(inOut.id)}`);
  if(st.longest&&st.longest.d>=1500)add("Long Haul",`${km(st.longest.d)} to ${nm(st.longest.to.id)}`);
  const longStay=st.arrived.filter(v=>v.leftAt&&v.leftAt-v.arrivedAt>=30*60000).sort((a,b)=>(b.leftAt-b.arrivedAt)-(a.leftAt-a.arrivedAt))[0];
  if(longStay)add("Settled In",`${hmm(longStay.leftAt-longStay.arrivedAt)} at ${nm(longStay.id)}`);
  if((r.skipCost||0)>=6)add("Spin Cycle",`${r.skipCost} minutes spent re-spinning`);
  const cant=r.visits.find(v=>v.cant);if(cant)add("Bounced",`Couldn't get into ${nm(cant.id)}`);
  if(r.areas.length>1)add("Change of Scenery",esc(r.areas.filter((a,i)=>a!==r.areas[i-1]).join(" → ")));
  if(!r.skipCost&&!(r.skipped||[]).length&&n>=2)add("Trust the Wheel","Took every spin the wheel gave you");
  if(!L.length)L.push(plainTitle(r));
  return L;
}
// "Still going?": put an auto-ended R&R night back on, picking up where it left off.
function resumeNight(r){
  const i=H.findIndex(x=>x.id===r.id);if(i<0||S.game)return;H.splice(i,1);saveH();
  const g=r;const last=g.visits[g.visits.length-1];
  if(last&&last.leftAt===g.endedAt&&!last.cant){last.leftAt=null;last.counted=undefined}
  delete g.ended;delete g.endedAt;delete g.early;delete g.missed;delete g.newIds;
  g.autoEnded=false;g.endsAt=now()+24*3600000;g.autoAt=now()+RR_AUTO;g.resumed=(g.resumed||0)+1;
  S.game=g;S.lastEnd=null;save();startWatch();buzz(30);go("play");
}
// shrink text until it sits on one line (never cut off)
// the night's route, full screen
async function bigMap(r,st){
  const ov=document.createElement("div");ov.className="mapfull";ov.innerHTML=`<div id="bigMap"></div><button class="shv-x mf-x" type="button" aria-label="Close">${I.x}</button>`;
  document.body.appendChild(ov);requestAnimationFrame(()=>ov.classList.add("on"));let m=null;
  const close=()=>{ov.classList.remove("on");setTimeout(()=>{try{m&&m.remove()}catch(e){}ov.remove()},220)};ov.querySelector(".mf-x").onclick=close;
  m=await makeMap("bigMap",{greedy:true});if(!m)return;
  const pts=[r.startPos,...st.arrived.map(v=>byId(v.id))].filter(Boolean),tr=(r.trail||[]).map(p=>({lat:p[0],lng:p[1]}));
  if(!r.noLoc){m.route(pts,true);if(tr.length>1)m.route(tr);else m.route(pts);m.dot(r.startPos)}
  st.arrived.forEach((v,i)=>{const b=byId(v.id);m.num(b,i+1,v.counted!==true,b.name)});
  const all=pts.concat(tr);setTimeout(()=>m.fitPts(all,17,{top:80,left:30,right:30,bottom:40}),80);
}
// Test mode: no GPS trail from a real walk, so draw one. A real walking route from Google when it's available,
// otherwise a street-like zigzag between the bars.
async function simTrail(r,from){
  const stops=r.visits.filter(v=>v.arrivedAt!=null).map(v=>byId(v.id)).filter(Boolean);if(from&&stops.length&&dist(from,stops[0])>120&&dist(from,stops[0])<2500)stops.unshift({lat:from.lat,lng:from.lng});if(stops.length<2)return [];
  try{const out=[];let ok=0;
    for(let i=1;i<stops.length;i++){const A=stops[i-1],B=stops[i],u=`https://routing.openstreetmap.de/routed-foot/route/v1/foot/${A.lng.toFixed(6)},${A.lat.toFixed(6)};${B.lng.toFixed(6)},${B.lat.toFixed(6)}?overview=full&geometries=geojson`;
      let seg=null;try{const j=await (await fetch(u)).json(),rt=j&&j.routes&&j.routes[0];if(rt&&rt.distance<Math.max(400,dist(A,B)*2.6)){seg=rt.geometry.coordinates.map(q=>[+q[1].toFixed(5),+q[0].toFixed(5)]);ok++}}catch(e){}
      (seg||[[A.lat,A.lng],[B.lat,B.lng]]).forEach((p,k)=>{if(!(k===0&&out.length))out.push(p)})}
    if(ok)return out}catch(e){}
  try{if(!(window.google&&google.maps&&google.maps.DirectionsService))throw 0;
    const res=await new google.maps.DirectionsService().route({origin:stops[0],destination:stops[stops.length-1],waypoints:stops.slice(1,-1).map(p=>({location:{lat:p.lat,lng:p.lng},stopover:true})),travelMode:"WALKING"});
    const path=res.routes[0].overview_path.map(p=>[+p.lat().toFixed(5),+p.lng().toFixed(5)]);if(path.length>1)return path}catch(e){}
  let seed=7;const rnd=()=>{seed=(seed*9301+49297)%233280;return seed/233280-.5};const out=[];
  for(let i=1;i<stops.length;i++){const A=stops[i-1],B=stops[i],n=4;let la=A.lat,lo=A.lng;out.push([la,lo]);
    for(let k=1;k<n;k++){const t=k/n;if(k%2){lo=A.lng+(B.lng-A.lng)*(t+rnd()*.15)}else{la=A.lat+(B.lat-A.lat)*(t+rnd()*.15)}out.push([+la.toFixed(5),+lo.toFixed(5)])}
    out.push([+la.toFixed(5),+B.lng.toFixed(5)]);out.push([B.lat,B.lng])}
  return out}
function fitLine(el,min){if(!el)return;el.style.fontSize="";let f=parseFloat(getComputedStyle(el).fontSize);while(el.scrollWidth>el.clientWidth+1&&f>min){f-=.5;el.style.fontSize=f+"px"}}
function fitEnd(){const box=$("v-end"),el=$("endMap");if(!box||!el||box.hidden)return;
  box.querySelectorAll(".bcard .nm").forEach(n=>fitLine(n,10.5));box.querySelectorAll(".brow .nmw").forEach(w=>{const n=w.querySelector(".nm");n.style.fontSize="";let f=parseFloat(getComputedStyle(n).fontSize);while(n.scrollWidth>w.clientWidth-(w.querySelector(".bodtag")?40:0)&&f>11){f-=.5;n.style.fontSize=f+"px"}});fitLine(box.querySelector(".schead .aw-t"),16);fitLine(box.querySelector(".schead .aw-w"),11);fitLine(box.querySelector(".schead .scmeta"),10);box.querySelectorAll(".sc-bars .nm").forEach(n=>fitLine(n,10.5));
  box.classList.remove("tight");el.style.height="200px";
  const room=()=>{const br=box.getBoundingClientRect(),pb=parseFloat(getComputedStyle(box).paddingBottom)||0,kids=[...box.children].filter(k=>k.offsetParent),last=kids.length?Math.max(...kids.map(k=>k.getBoundingClientRect().bottom)):br.top;return Math.floor(br.top+box.clientHeight-pb-last+box.scrollTop)};
  let h=200+room();if(h<170){box.classList.add("tight");el.style.height="200px";h=200+room()}
  for(let k=0;k<4;k++){h=Math.max(140,Math.min(460,h));el.style.height=h+"px";const d=room();if(Math.abs(d)<2)break;h+=d}
  el.style.height=Math.max(140,Math.min(460,h))+"px";if(eMap){const m=eMap;m.resize&&m.resize();m._fit&&setTimeout(()=>{if(eMap===m&&document.contains(el)&&!box.hidden)try{m._fit()}catch(e){}},60)}}
addEventListener("resize",()=>{if(S.route==="end")fitEnd()});
function renderEnd(){
  const r=(DEMO_REC&&DEMO_REC.id===S.lastEnd)?DEMO_REC:(SHARED&&SHARED.id===S.lastEnd&&!H.some(x=>x.id===SHARED.id))?SHARED:H.find(x=>x.id===S.lastEnd),box=$("v-end");if(!r){SHARED=null;go("home");return}
  const isShared=r===SHARED;
  const cr=r.mode==="cruise",st=stats(r),n=st.counted.length,lenTxt=cr?"R&amp;R":r.len===60?"1 hour":"2 hours",aw=awardsFor(r,st);
  const pending=r.visits.map((v,i)=>({v,i})).filter(o=>o.v.counted===null);
  const atBars=st.arrived.reduce((s,v)=>s+((v.leftAt||r.endedAt)-v.arrivedAt),0),moving=Math.max(0,st.dur-atBars);
  const still=cr&&r.autoEnded&&!r.stillAsked&&!S.game&&now()-r.endedAt<12*3600000;
  if(!r.photo&&!r.noPhoto&&r.photos&&r.photos.length){r.photo=r.photos[r.photos.length-1];saveH()}
  // just finished, 2+ bars, no pick yet: ask for bar of the day before the scorecard rolls in
  const reopen=S.bodOpen===r.id;
  if(reopen||(S.rackEnd===r.id&&n>=2&&!r.barOfDay&&!r.bodDone)){
    box.innerHTML=`<div class="bodpick"><div><div class="bodhd"><div class="eyebrow">${n} bar${n===1?"":"s"} ${dayWord(r.startedAt)}</div><button class="txtbtn amber" type="button" id="bodSkip">${reopen?"Back":"Skip"}</button></div><h1 class="q" style="margin-top:6px">Bar of the day?</h1><p class="sub" style="margin:6px 0 0">Saved to your History, so you can look back on your favourites.</p></div>
      <div class="bodgrid">${st.counted.map(v=>{const b=byId(v.id),cp=cardPhoto(b);return `<button type="button" class="bodt${cp.cls}${r.barOfDay===b.id?" on":""}" data-bp="${b.id}"${cp.style}><b>${esc(b.name)}</b></button>`}).join("")}</div></div>`;
    box.scrollTop=0;
    box.querySelectorAll("[data-bp]").forEach(t=>t.onclick=()=>{r.barOfDay=t.dataset.bp;r.bodDone=true;delete S.bodOpen;saveH();buzz(15);renderEnd()});
    $("bodSkip").onclick=()=>{r.bodDone=true;delete S.bodOpen;saveH();renderEnd()};
    st.counted.forEach(v=>{const b=byId(v.id);if(phMem[b.id]===undefined&&phAllowed(b.id,"play"))barPhoto(b).then(ph=>{const t=box.querySelector(`[data-bp="${b.id}"]`);if(t&&ph){t.classList.add("photo");t.style.backgroundImage=`url('${ph.url}')`}})});
    return}
  box.innerHTML=`
    ${still?`<div class="still"><b>Still going?</b><span>We wrapped your crawl at 3 hours and saved it. If you're still out, pick up where you left off.</span><div class="row2"><button class="btn sm" type="button" id="stY">Keep going</button><button class="btn sm dark" type="button" id="stN">That's a wrap</button></div></div>`:""}
    ${pending.map(o=>`<div class="ask"><b>Should ${esc(byId(o.v.id).name)} count?</b><span class="small">You weren't there long. Count it if you stopped in.</span><div class="row"><button class="btn sm" type="button" data-q="${o.i}" data-a="1">Count it</button><button class="btn sm dark" type="button" data-q="${o.i}" data-a="0">Don't count</button></div></div>`).join("")}
    <div class="sc">
      <div class="sc-top"><button class="scback" type="button" id="doneBtn" aria-label="Back">${I.back}</button><span class="eyebrow scttl">${cr?"R&amp;R":LEN(r.len)} · ${dateTxt(rt(r,r.startedAt))}</span><span class="sctr"><button class="scmore" type="button" id="scMore" aria-label="Crawl options">${I.more}</button></span></div>
      ${(()=>{const stays=st.arrived.filter(v=>v.leftAt).map(v=>v.leftAt-v.arrivedAt),lng=stays.length?Math.max(...stays):0;
        const K=r.noLoc?[[n,n===1?"Bar":"Bars"],[hmm(st.dur),"Total time"]]:cr?[[n,n===1?"Bar":"Bars"],[km(st.total),"Distance"],[hmm(st.dur),"Total time"]]:[[n,n===1?"Bar":"Bars"],[km(st.total),"Distance"],[hmm(moving),"Travel time"]];
        const M=r.noLoc?[]:cr?[[hmm(atBars),"Bar time"],[lng?hmm(lng):"—","Longest stay"],[stays.length?hmm(stays.reduce((a,b)=>a+b,0)/stays.length):"—","Average stay"]]
          :[[hmm(atBars),"Bar time"],[stays.length?hmm(Math.min(...stays)):"—","Quickest stop"],[st.longest?mOrKm(st.longest.d):"—","Longest leg"]];
        const meta=`${cr?`${I.pin} ${esc(placeOf(r))}`:`${I.pin} ${esc(placeOf(r))} · ${kmTxt(r.radius)}`}${r.jp&&!cr?`<span class="jpmini">${I.sparkle} ${(JACKPOTS.find(x=>x.k===r.jp.k)||{t:""}).t}</span>`:""}`;
        return `<div class="schead"><div class="sct"><button class="scname${r.title&&!cr?"":" add"}" type="button" id="scName">${r.title?(cr?`${IC.edit} Rename`:esc(r.title)+` <span aria-hidden="true">${IC.edit}</span>`):"+ Name this crawl"}</button><div class="aw-t">${aw[0].plain?esc(aw[0].t):aw[0].t}</div>${aw[0].why?`<div class="aw-w">${aw[0].why}</div>`:""}<div class="scmeta">${meta}</div></div>
          <button class="scph${r.photo?"":" none"}" type="button" id="scPh" aria-label="Photo for your card">${r.photo?`<img src="${r.photo}" alt="">`:`${I.camera}<small>Photo</small>`}</button></div>
${(()=>{const SV=window.SUMV||"b",arr=st.arrived;
          const row=(v,i,k)=>{const b=byId(v.id),stay=v.leftAt?(v.leftAt-v.arrivedAt):(r.endedAt-v.arrivedAt),bod=r.barOfDay===v.id,tm=v.cant?"No entry":v.counted===false?"Didn't count":r.noLoc?"":hmm(Math.max(0,stay)),cp=cardPhoto(b);
            if(k==="strip")return `<div class="bcard${v.counted===true?"":" x"}${bod?" isbod":""}" ${bod?'data-bodopen="1"':`data-bar="${b.id}"`} role="button" tabindex="0"><span class="bth${cp.cls}" data-ph="${b.id}"${cp.style}><i>${i+1}</i></span><span class="nm">${esc(b.name)}</span><span class="tm">${tm}</span>${bod?'<span class="bodtag">Bar of the day</span>':""}</div>`;
            return `<div class="brow${v.counted===true?"":" x"}${bod?" isbod":""}"${bod?' data-bodopen="1" role="button"':""}><span class="bth${cp.cls}" data-ph="${b.id}"${cp.style}></span><i>${i+1}</i><span class="nmw"><span class="nmx"><span class="nm">${esc(b.name)}</span>${bod?'<span class="bodtag">Bar of the day</span>':""}</span><span class="tm">${tm}</span></span></div>`};
          const pick=n>=2&&!r.barOfDay?`<button class="bodbtn" type="button" data-bodopen="1">${I.sparkle} Pick your bar of the day</button>`:"";
          const mapblk=`        <div class="scmap wide"><div id="endMap"></div><button class="scexp" type="button" id="scExp" aria-label="Open the map">${I.expand||'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>'}</button>
          <div class="scov"><div class="tri s6c">${K.concat(M).map(([v,l])=>`<div><b>${String(v).replace(/([a-zA-Z]+)/g,"<i>$1</i>")}</b><small>${l}</small></div>`).join("")}</div></div></div>
`;
          if(SV==="a")return `<div class="scar2" id="scar2"><section class="scp2">${mapblk}</section><section class="scp2 p2"><div class="scph-h">The bars</div><div class="sblist${arr.length>6?" many":""}">${arr.map((v,i)=>row(v,i,"row")).join("")}</div>${pick}</section></div>
            <div class="scdots dots" id="scdots2"><button type="button" data-p="0" aria-pressed="true" aria-label="Map and stats"></button><button type="button" data-p="1" aria-pressed="false" aria-label="The bars"></button></div>`;
          return mapblk+`<div class="bstrip">${arr.map((v,i)=>row(v,i,"strip")).join("")}</div>${pick}`})()}`})()}
    </div>
    ${isShared?`<div class="row2"><button class="btn" type="button" id="addTab">${IC.tab||I.check} Add to My Tab</button><button class="btn dark" type="button" id="shareBtn">${I.share} Save card</button></div>`
      :`<div class="row2"><button class="btn" type="button" id="shareBtn">${I.share} Share</button><button class="btn dark" type="button" id="runBack">${I.redo} Play again</button></div>`}
    `;
  box.querySelectorAll("[data-q]").forEach(b=>b.onclick=()=>{const v=r.visits[+b.dataset.q];v.counted=b.dataset.a==="1";
    const prev={};H.forEach(x=>{if(x.id!==r.id)x.visits.forEach(y=>{if(y.counted===true&&x.startedAt<r.startedAt)prev[y.id]=1})});
    r.newIds=r.visits.filter(y=>y.counted===true&&!prev[y.id]).map(y=>y.id);saveH();renderEnd()});
  box.querySelectorAll("[data-bodopen]").forEach(b=>b.onclick=e=>{e.stopPropagation();S.bodOpen=r.id;renderEnd()});
  box.querySelectorAll("[data-bar]").forEach(c=>c.onclick=()=>{const v=byId(c.dataset.bar);if(v)barSheet(v,r)});
  $("scPh").onclick=()=>r.photo?mediaView(r):photoSheet(r,renderEnd);
  if(!isShared&&!r.demo)clipList(r.id).then(L=>{const ph=$("scPh");if(L.length&&ph&&document.contains(ph)){ph.insertAdjacentHTML("beforeend",`<i class="phclips">▶ ${L.length}</i>`);if(!r.photo)ph.onclick=()=>mediaView(r)}}).catch(()=>{});
  box.querySelectorAll("[data-ph]").forEach(t=>{const b=byId(t.dataset.ph);if(!b||t.style.backgroundImage)return;if(phMem[b.id]===undefined&&!phAllowed(b.id,"play"))return;
    (phMem[b.id]!==undefined?Promise.resolve(phMem[b.id]):barPhoto(b)).then(ph=>{if(ph){t.style.backgroundImage=`url('${ph.url}')`;t.classList.add("photo")}}).catch(()=>{})});
  if($("scar2")){const car=$("scar2"),ds=[...box.querySelectorAll("#scdots2 [data-p]")];let cur=0;
    car.addEventListener("scroll",()=>{const i=Math.round(car.scrollLeft/car.clientWidth);if(i!==cur){cur=i;ds.forEach((d,j)=>d.setAttribute("aria-pressed",j===i))}},{passive:true});
    ds.forEach((d,i)=>d.onclick=()=>car.scrollTo({left:i*car.clientWidth,behavior:"smooth"}))}
  const thin=!S.test&&!r.noLoc&&!r.simDone&&st.arrived.length>=1&&(r.trail||[]).length<st.arrived.length*8;   // phone closed between bars
  if((S.test&&r.simDone!==3||thin)&&!(window._simRan||(window._simRan={}))[r.id]&&st.arrived.length){window._simRan[r.id]=1;const fb=byId(st.arrived[0].id);if(S.test&&fb)r.startPos={lat:fb.lat,lng:fb.lng};simTrail(r,S.test?null:r.startPos).then(t=>{if(t.length>1){r.trail=t;r.simDone=3;saveH();if(S.route==="end"&&S.lastEnd===r.id)renderEnd()}})}
  box.querySelector(".scmap").onclick=e=>{if(!e.target.closest("a"))bigMap(r,st)};

  $("doneBtn").onclick=()=>{SHARED=null;const to=["hist","bars"].includes(S.endBack)?S.endBack:"home";go(to)};
  fitLine(box.querySelector(".scttl"),9);
  // an old crawl: no "Play again", Share takes the row
  if(S.endBack!=="play"&&!r.demo){const rb=$("runBack");if(rb)rb.remove()}if($("addTab"))$("addTab").onclick=addSharedToTab;
  if(r.demo){const nm=$("scName");if(nm)nm.outerHTML=`<span class="scname scdemo">Demo crawl · not saved</span>`;const mo=$("scMore");if(mo)mo.remove();
    const rb=$("runBack");if(rb){rb.innerHTML=`${I.back} Done`;rb.id="demoDone";rb.onclick=()=>{DEMO_REC=null;S.lastEnd=null;save();go("home")}}}
  if(isShared){const nm=$("scName");if(nm&&!r.title)nm.remove();else if(nm){nm.onclick=null;const ic=nm.querySelector("span");if(ic)ic.remove()}const mo=$("scMore");if(mo)mo.remove()}   // someone else's crawl: look, add, save the card
  if($("scMore"))$("scMore").onclick=()=>crawlMenu(r);if($("scName")&&!isShared&&!r.demo)$("scName").onclick=()=>nameCrawl(r);
  if($("stY"))$("stY").onclick=()=>resumeNight(r);
  if($("stN"))$("stN").onclick=()=>{r.stillAsked=true;saveH();renderEnd()};
  if($("runBack"))$("runBack").onclick=cr?()=>{S.quick={step:0,from:null};go("quick")}:()=>{const c=r.zone||{lat:r.center.lat,lng:r.center.lng,name:r.areas[0]};S.wiz={step:2,start:{type:"area",name:c.name||r.areas[0],lat:c.lat,lng:c.lng},radius:r.radius,len:r.len,newOnly:!!r.newOnly};go("wiz")};
  $("shareBtn").onclick=()=>shareStory(r);
  if(r.noLoc&&!box.querySelector(".estnote")){const m=box.querySelector(".scmap");if(m)m.insertAdjacentHTML("afterend",`<p class="estnote">Location was off, so there's no route or timings for this crawl.</p>`)}
  if(S.rackEnd===r.id){delete S.rackEnd;save();if(n){const nb=box.querySelector(".tri>div b");if(nb)nb.textContent="0";setTimeout(()=>rackUp(box,n),700)}}
  requestAnimationFrame(async()=>{
    if(eMap){eMap.remove();eMap=null}
    const el=$("endMap"),m=await makeMap("endMap");if(!m||!document.contains(el))return;eMap=m;
    const pts=[r.startPos,...st.arrived.map(v=>byId(v.id))],tr=(r.trail||[]).map(p=>({lat:p[0],lng:p[1]}));
    if(!r.noLoc){m.route(pts,true);if(tr.length>1)m.route(tr);else m.route(pts);m.dot(r.startPos)}
    st.arrived.forEach((v,i)=>{const b=byId(v.id);m.num(b,i+1,v.counted!==true,b.name)});
    // leave room under the route for the stats laid over the bottom of the map
    const all=pts.concat(tr).filter(Boolean);
    m._fit=()=>{if(eMap!==m||!document.contains(el))return;const ov=box.querySelector(".scmap .scov"),h=el.offsetHeight,ob=ov?Math.round(ov.offsetHeight*.55):40,pad=h-ob-20>70?{top:20,left:26,right:26,bottom:ob}:{top:10,left:20,right:20,bottom:Math.max(10,h-80)};m.fitPts(all,17,pad)};m._fit();
  });
  fitEnd();
}
// ---------- story cards (9:16) ----------
// Two looks, Strava style: the crew photo with the route in a corner, or the map on its own.
async function storyCard(r,look){const NLs=a=>{if(!r.noLoc)return a;const o=a.filter(x=>x[1]==="Bars"||x[1]==="Total time");if(!o.some(x=>x[1]==="Total time"))o.push([hmm(stats(r).dur),"Total time","clock"]);return o};
  await Promise.all([document.fonts.load('800 100px "Big Shoulders Display"'),document.fonts.load('500 40px "Big Shoulders Display"')]).catch(()=>{});
  const W=1080,Hh=1920,c=document.createElement("canvas");c.width=W;c.height=Hh;const x=c.getContext("2d");
  const cr=r.mode==="cruise",st=stats(r),n=st.counted.length,aw=awardsFor(r,st),D='"Big Shoulders Display","Arial Narrow",Impact,sans-serif',U='system-ui,-apple-system,Roboto,Arial,sans-serif';
  const plain=t=>String(t).replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'");
  const fit=(t,w)=>{t=String(t);if(x.measureText(t).width<=w)return t;while(t.length>1&&x.measureText(t+"…").width>w)t=t.slice(0,-1);return t.trimEnd()+"…"};
  const sp=(t,X,Y,ls,al)=>{x.letterSpacing=ls+"px";x.textAlign=al||"left";x.fillText(t,X,Y);x.letterSpacing="0px";x.textAlign="left"};
  const AMB="#F5B83D",INK="#F4F1EA",MUT="#9AA1AD",BG="#0B0D12",full=look==="full"&&!!r.photo,rund=look==="rund",RV=rund?(window.RUND_VAR||(r.photo?"photo":"map")):"",mapc=look==="map",photo=(look==="photo"||full)&&r.photo;let mapP=null,sideMap=false;
  x.fillStyle=BG;x.fillRect(0,0,W,Hh);
  // hero
  // where the Rundown's title will land, so the map above it can reach down to meet it
  const L4=Math.min(8,st.arrived.length),LT=RV==="plain"?Math.max(760,1700-(L4-1)*96):Math.max(1180,1700-(L4-1)*78),T4=LT-265,RMH=LT-10;
  const HH=full?Hh:rund?(RV==="map"?RMH:Hh):mapc?1800:1160;
  if(rund){   // rundown: a photo or the map up top, the night listed underneath (or plain)
    if(RV==="photo"&&r.photo){const img=await loadImg(r.photo);const s2=Math.max(W/img.width,HH/img.height);x.save();x.beginPath();x.rect(0,0,W,HH);x.clip();x.drawImage(img,(W-img.width*s2)/2,(HH-img.height*s2)/2,img.width*s2,img.height*s2);x.restore()}
    else if(RV==="map"){x.fillStyle="#10141B";x.fillRect(0,0,W,HH);mapP=await mapTiles(x,r,st,W,HH,{cx:W/2,cy:(300+T4-150)/2,bw:860,bh:Math.max(300,T4-150-300-60)}).catch(()=>null);
      if(!mapP){x.save();x.translate(W/2,HH/2);x.rotate(-12*Math.PI/180);x.strokeStyle="rgba(255,255,255,.035)";x.lineWidth=2;for(let i=-1400;i<=1400;i+=90){x.beginPath();x.moveTo(i,-1400);x.lineTo(i,1400);x.stroke();x.beginPath();x.moveTo(-1400,i);x.lineTo(1400,i);x.stroke()}x.restore()}}
    else{const g4=x.createRadialGradient(W*.8,250,0,W*.8,250,1100);g4.addColorStop(0,"rgba(245,184,61,.16)");g4.addColorStop(1,"rgba(245,184,61,0)");x.fillStyle=g4;x.fillRect(0,0,W,Hh)}}
  else if(photo){const img=await loadImg(r.photo);const s=Math.max(W/img.width,HH/img.height);x.save();x.beginPath();x.rect(0,0,W,HH);x.clip();x.drawImage(img,(W-img.width*s)/2,(HH-img.height*s)/2,img.width*s,img.height*s);x.restore();
    if(!full){const oc=document.createElement("canvas");oc.width=W;oc.height=HH;const o=oc.getContext("2d");o.fillStyle="#10141B";o.fillRect(0,0,W,HH);
      mapP=await mapTiles(o,r,st,W,HH,{cx:830,cy:680,bw:360,bh:560}).catch(()=>null);
      if(!mapP){o.save();o.translate(W/2,HH/2);o.rotate(-12*Math.PI/180);o.strokeStyle="rgba(255,255,255,.04)";o.lineWidth=2;for(let i=-1400;i<=1400;i+=90){o.beginPath();o.moveTo(i,-1400);o.lineTo(i,1400);o.stroke();o.beginPath();o.moveTo(-1400,i);o.lineTo(1400,i);o.stroke()}o.restore()}
      o.globalCompositeOperation="destination-in";const mg=o.createLinearGradient(380,0,720,0);mg.addColorStop(0,"rgba(0,0,0,0)");mg.addColorStop(1,"rgba(0,0,0,1)");o.fillStyle=mg;o.fillRect(0,0,W,HH);
      x.drawImage(oc,0,0);x._mapSrc=o._mapSrc;sideMap=true}}
  else{x.fillStyle="#10141B";x.fillRect(0,0,W,HH);mapP=await mapTiles(x,r,st,W,HH,mapc?{cx:W/2,cy:780,bw:860,bh:900}:null).catch(e=>{(window._mapErrs=window._mapErrs||[]).push("error: "+(e&&e.message||e));return null});if(!mapP){x.save();x.translate(W/2,HH/2);x.rotate(-12*Math.PI/180);x.strokeStyle="rgba(255,255,255,.035)";x.lineWidth=2;for(let i=-1400;i<=1400;i+=90){x.beginPath();x.moveTo(i,-1400);x.lineTo(i,1400);x.stroke();x.beginPath();x.moveTo(-1400,i);x.lineTo(1400,i);x.stroke()}x.restore()}}
  const gr=x.createLinearGradient(0,0,0,HH);if(rund&&RV==="plain"){gr.addColorStop(0,"rgba(11,13,18,0)");gr.addColorStop(1,"rgba(11,13,18,0)")}else if(rund&&RV==="photo"){gr.addColorStop(0,"rgba(11,13,18,.3)");gr.addColorStop(.1,"rgba(11,13,18,0)");gr.addColorStop(1,"rgba(11,13,18,0)")}else if(rund){const q=v=>Math.max(0,Math.min(1,v/HH));gr.addColorStop(0,"rgba(11,13,18,.3)");gr.addColorStop(q(220),"rgba(11,13,18,0)");gr.addColorStop(q(T4-330),"rgba(11,13,18,0)");gr.addColorStop(q(T4-180),"rgba(11,13,18,.35)");gr.addColorStop(q(T4-40),"rgba(11,13,18,.74)");gr.addColorStop(q(LT-50),"rgba(11,13,18,.9)");gr.addColorStop(1,BG)}else if(mapc){const q=v=>Math.max(0,Math.min(1,v/HH));gr.addColorStop(0,"rgba(11,13,18,.3)");gr.addColorStop(q(220),"rgba(11,13,18,0)");gr.addColorStop(q(1230),"rgba(11,13,18,0)");gr.addColorStop(q(1380),"rgba(11,13,18,.35)");gr.addColorStop(q(1520),"rgba(11,13,18,.74)");gr.addColorStop(q(1660),"rgba(11,13,18,.9)");gr.addColorStop(1,BG)}else if(full){x.fillStyle="rgba(11,13,18,.06)";x.fillRect(0,0,W,Hh);gr.addColorStop(0,"rgba(11,13,18,.3)");gr.addColorStop(.12,"rgba(11,13,18,0)");gr.addColorStop(.46,"rgba(11,13,18,0)");gr.addColorStop(.58,"rgba(11,13,18,.42)");gr.addColorStop(.7,"rgba(11,13,18,.66)");gr.addColorStop(1,"rgba(11,13,18,.84)")}
  else{gr.addColorStop(0,"rgba(11,13,18,.35)");gr.addColorStop(.14,"rgba(11,13,18,0)");gr.addColorStop(.45,"rgba(11,13,18,0)");gr.addColorStop(.76,"rgba(11,13,18,.85)");gr.addColorStop(1,BG)}x.fillStyle=gr;x.fillRect(0,0,W,HH);
  // route: GPS trail when we have one, otherwise stop to stop
  const stops=[r.startPos,...st.arrived.map(v=>byId(v.id))].filter(Boolean),tr=(r.trail||[]).map(p=>({lat:p[0],lng:p[1]})),line=tr.length>1?tr:stops;
  const FV=full?(window.FULL_VAR||"e"):"";
  if(stops.length>1&&!FV&&(!rund||RV==="map")){
    const B=rund?{x:110,y:300,w:860,h:Math.max(300,T4-150-300-60)}:full?{x:200,y:400,w:680,h:620}:photo?{x:650,y:400,w:360,h:560}:mapc?{x:110,y:330,w:860,h:900}:{x:110,y:400,w:860,h:540},all=stops.concat(tr),k=Math.cos(all[0].lat*Math.PI/180);
    const la=all.map(p=>p.lat),lo=all.map(p=>p.lng),mnla=Math.min(...la),mxla=Math.max(...la),mnlo=Math.min(...lo),mxlo=Math.max(...lo);
    const s=Math.min(B.w/Math.max((mxlo-mnlo)*k,1e-4),B.h/Math.max(mxla-mnla,1e-4),photo?60000:200000);
    const ox=B.x+(B.w-(mxlo-mnlo)*k*s)/2,oy=B.y+(B.h-(mxla-mnla)*s)/2,P=mapP||(p=>[ox+(p.lng-mnlo)*k*s,oy+(mxla-p.lat)*s]);
    if(!photo&&!mapP){x.fillStyle="#3A4150";VENUES.forEach(v=>{const[X,Y]=P(v);if(X>40&&X<W-40&&Y>320&&Y<(mapc?1300:rund?820:980)){x.beginPath();x.arc(X,Y,7,0,7);x.fill()}})}
    const T=full?{g:20,l:7,r:24,f:24,w:5}:photo?{g:16,l:5,r:19,f:20,w:4}:{g:22,l:6,r:24,f:24,w:5};
    x.save();if(photo){x.shadowColor="rgba(0,0,0,.7)";x.shadowBlur=14;x.shadowOffsetY=3}
    const path=()=>{x.beginPath();line.forEach((p,i)=>{const[X,Y]=P(p);i?x.lineTo(X,Y):x.moveTo(X,Y)})};
    x.lineCap="round";x.lineJoin="round";
    if(photo){x.save();x.shadowColor="rgba(0,0,0,.85)";x.shadowBlur=28;x.shadowOffsetY=0;x.strokeStyle="rgba(8,9,12,.55)";x.lineWidth=T.g+14;path();x.stroke();x.restore()}   // dark halo: readable on bright, busy photos
    x.strokeStyle="rgba(245,184,61,.22)";x.lineWidth=T.g;path();x.stroke();x.strokeStyle=AMB;x.lineWidth=T.l;path();x.stroke();
    const[sx,sy]=P(stops[0]);x.fillStyle=INK;x.beginPath();x.arc(sx,sy,T.r*.5,0,7);x.fill();
    // each bar is a little cocktail glass standing on its spot, numbered in the bowl
    // bars close together share one glass ("5,6") so pins never pile on top of each other
    const r0=T.r*1.05,grp=[];st.arrived.forEach((v,i)=>{const q=P(byId(v.id)),g=grp.find(g=>Math.hypot(g.X-q[0],g.Y-q[1])<r0*2.9);if(g){g.n.push(i+1);g.ok=g.ok||v.counted===true}else grp.push({X:q[0],Y:q[1],n:[i+1],ok:v.counted===true})});
    x._lbl=grp.map(G=>{const rr=r0*1.1;return[G.X-rr*1.3,G.Y-rr*2.6,G.X+rr*1.3,G.Y+rr*1.3]});
    grp.forEach(G=>{const X=G.X,Y=G.Y,lab=G.n.length>2?G.n[0]+"–"+G.n[G.n.length-1]:G.n.join(","),r=r0*(lab.length>2?1.25:1),c=G.ok?AMB:"#6B7280";
      x.lineJoin="round";x.lineCap="round";x.strokeStyle=BG;x.lineWidth=T.w*2.2;
      const glass=()=>{x.beginPath();x.moveTo(X-r*1.25,Y-r*2.5);x.lineTo(X+r*1.25,Y-r*2.5);x.lineTo(X,Y-r*.75);x.closePath()};
      x.beginPath();x.moveTo(X,Y-r*.8);x.lineTo(X,Y);x.moveTo(X-r*.65,Y);x.lineTo(X+r*.65,Y);x.stroke();glass();x.stroke();
      x.shadowColor="transparent";x.strokeStyle=c;x.lineWidth=T.w*.9;x.beginPath();x.moveTo(X,Y-r*.8);x.lineTo(X,Y);x.moveTo(X-r*.65,Y);x.lineTo(X+r*.65,Y);x.stroke();
      glass();x.fillStyle=c;x.fill();x.fillStyle=BG;x.font=`800 ${T.f*(lab.length>2?.78:.92)}px ${U}`;x.textAlign="center";x.fillText(lab,X,Y-r*1.72);x.textAlign="left";
      if(mapc){const vs=G.n.map(k=>st.arrived[k-1]),b0=byId(vs[0].id),nm=b0.name.replace(/ (Hotel|Rooftop)$/,"")+(vs.length>1?` +${vs.length-1}`:""),stay=vs.reduce((a,v)=>a+(v.leftAt?(v.leftAt-v.arrivedAt):0),0);
        x.font=`700 27px ${U}`;const nn=fit(nm,300),lw3=Math.max(x.measureText(nn).width,90);const placed=x._lbl||(x._lbl=[]);
        const tryAt=(rt,dy)=>{const lx=rt?X+r*1.5+8:X-r*1.5-8,bx=rt?lx:lx-lw3,by=Y-r*1.5-26+dy;if(bx<20||bx+lw3>W-20)return null;const box=[bx,by,bx+lw3,by+56];
          return placed.some(q=>!(box[2]<q[0]||box[0]>q[2]||box[3]<q[1]||box[1]>q[3]))?null:{lx,dy,box,rt}};
        const rt0=X<W-330,pos=[[rt0,0],[!rt0,0],[rt0,56],[!rt0,56],[rt0,-56],[!rt0,-56],[rt0,112],[!rt0,112],[rt0,-112],[!rt0,-112]].map(([a,b])=>tryAt(a,b)).find(Boolean);if(!pos)return;
        placed.push(pos.box);placed.push([X-r*1.3,Y-r*2.6,X+r*1.3,Y+r*1.3]);
        const right=pos.rt,lx=pos.lx;x.save();x.shadowColor="rgba(0,0,0,.85)";x.shadowBlur=10;x.textAlign=right?"left":"right";
        x.fillStyle=INK;x.fillText(nn,lx,Y-r*1.5+pos.dy);x.font=`600 21px ${U}`;x.fillStyle="rgba(244,241,234,.75)";x.fillText(stay?hmm(stay):"",lx,Y-r*1.5+26+pos.dy);x.restore()}});
    x.restore()}
  if(mapP&&(!photo||sideMap)){x.font=`500 16px ${U}`;x.fillStyle="rgba(154,161,173,.6)";x.textAlign="right";x.fillText(x._mapSrc==="google"?"Map data © Google":x._mapSrc==="carto"?"© OpenStreetMap © CARTO":"Esri, HERE, Garmin, © OpenStreetMap",W-64,mapc?1290:rund?T4-260:1140);x.textAlign="left"}
  const ICP={roof:"M4 4h16l1.5 5h-19z M2.5 9a2.4 2.4 0 0 0 4.8 0 2.4 2.4 0 0 0 4.7 0 2.4 2.4 0 0 0 4.7 0 2.4 2.4 0 0 0 4.8 0 M4 11.5V20h16v-8.5 M9.5 20v-5h5v5",route:"M6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M18 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M8 19h7.5a3.5 3.5 0 0 0 0-7h-7a3.5 3.5 0 0 1 0-7H16",
    glass:"M5 4h14l-7 8z M12 12v7 M8 20h8",cheers:"M2.8 6.2l6.6-1.8 1.4 7.6a3.3 3.3 0 0 1-6.4 1.7z M7 13.6l1.4 5.6 M5.6 20l5.2-1.4 M21.2 6.2l-6.6-1.8-1.4 7.6a3.3 3.3 0 0 0 6.4 1.7z M17 13.6l-1.4 5.6 M18.4 20l-5.2-1.4",walk:"M14 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M9.5 21l2.5-7 3 3v4 M8 12l2.5-3.5 4 1.5 2 3.5 M12 14l-1.5-5",bolt:"M13 2L4 14h7l-1 8 9-12h-7z",
    span:"M3 12h18 M7 8l-4 4 4 4 M17 8l4 4-4 4",moon:"M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z",sun:"M12 8a4 4 0 1 0 0 8a4 4 0 1 0 0-8z M12 2v2 M12 20v2 M4.9 4.9l1.4 1.4 M17.7 17.7l1.4 1.4 M2 12h2 M20 12h2 M4.9 19.1l1.4-1.4 M17.7 6.3l1.4-1.4",hour:"M7 3h10 M7 21h10 M8 3c0 5 8 5 8 9s-8 4-8 9 M16 3c0 5-8 5-8 9s8 4 8 9",clock:"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3 2"};
  const stays=st.arrived.filter(v=>v.leftAt).map(v=>v.leftAt-v.arrivedAt),atBars=st.arrived.reduce((a,v)=>a+((v.leftAt||r.endedAt)-v.arrivedAt),0),moving=Math.max(0,st.dur-atBars),lng=stays.length?Math.max(...stays):0;
  const SCH=window.STORY_SCHEME||"d",NS=window.STORY_NUMS||"dim";
  const stat=(v,l,ic,X,Y,sz)=>{x.font=`800 ${sz}px ${D}`;
    if(SCH==="a"){x.fillStyle=AMB;x.fillText(fit(String(v),300),X,Y)}
    else if(SCH==="b"||SCH==="d"){x.fillStyle=INK;x.fillText(fit(String(v),300),X,Y)}
    else{let cx=X;String(v).split(/([a-zA-Z]+)/).filter(Boolean).forEach(t=>{const u=/[a-zA-Z]/.test(t);x.font=`800 ${u?Math.round(sz*.62):sz}px ${D}`;x.fillStyle=u?AMB:INK;x.fillText(t,cx,Y);cx+=x.measureText(t).width+(u?4:0)})}
    x.save();x.translate(X,Y+12);x.scale(26/24,26/24);x.strokeStyle=AMB;x.lineWidth=2;x.lineCap="round";x.lineJoin="round";x.stroke(new Path2D(ICP[ic]));x.restore();
    x.fillStyle=full?"rgba(244,241,234,.8)":MUT;x.font=`700 21px ${U}`;sp(l.toUpperCase(),X+36,Y+34,2.5)};
  const foot=big=>{let lf=big===false?80:58;x.font=`800 ${lf}px ${D}`;x.letterSpacing="1px";const rw=W-128-360;while(x.measureText("ROOFTOP ROULETTE").width>rw&&lf>50){lf-=2;x.font=`800 ${lf}px ${D}`}
    x.globalAlpha=.72;x.fillStyle=INK;x.fillText("ROOFTOP",64,1840);const lw2=x.measureText("ROOFTOP ").width;x.fillStyle=AMB;x.fillText("ROULETTE",64+lw2,1840);x.letterSpacing="0px";x.globalAlpha=1;
    if(WV==="foot"){const pl=placeOf(r).toUpperCase();x.font=`700 23px ${U}`;x.letterSpacing="2.4px";const pw=x.measureText(pl).width;x.letterSpacing="0px";
      x.save();x.translate(W-64-pw-34,1786);x.scale(26/24,26/24);x.fillStyle=AMB;x.fill(new Path2D("M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"));x.fillStyle="rgba(11,13,18,.9)";x.beginPath();x.arc(12,10,2.6,0,7);x.fill();x.restore();
      x.fillStyle="rgba(244,241,234,.9)";sp(pl,W-64,1808,2.4,"right");
      x.font=`600 19px ${U}`;x.fillStyle="rgba(244,241,234,.6)";x.textAlign="right";x.fillText([(cr?"R&R":LEN(r.len)),dateTxt(rt(r,r.startedAt))].join(" · "),W-64,1840);x.textAlign="left";return}
    x.font=`700 21px ${U}`;x.fillStyle="rgba(244,241,234,.8)";sp((cr?"R&R":LEN(r.len)).toUpperCase(),W-64,1832,3,"right")};
  // where and when, with a pin, sitting just above the title
  const WV=window.WHERE_VAR||"foot";
  const where=Y=>{if(WV!=="top")return;x.save();x.shadowColor="transparent";const t=[placeOf(r),dateTxt(rt(r,r.startedAt))].filter(Boolean).join(" · ").toUpperCase();
    x.save();x.translate(64,Y-25);x.scale(28/24,28/24);x.fillStyle=AMB;x.fill(new Path2D("M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"));x.fillStyle="rgba(11,13,18,.9)";x.beginPath();x.arc(12,10,2.6,0,7);x.fill();x.restore();
    x.font=`700 24px ${U}`;x.fillStyle="rgba(244,241,234,.88)";sp(t,104,Y,2.6);x.restore()};
  const tagAt=(X,Y,rot)=>{x.save();x.font=`800 15px ${U}`;x.letterSpacing="1.6px";const t="BAR OF THE DAY",w=x.measureText(t).width+16;x.translate(X,Y);x.rotate((rot||5)*Math.PI/180);
    x.shadowColor="rgba(0,0,0,.45)";x.shadowBlur=10;x.shadowOffsetY=3;x.fillStyle=AMB;roundRect(x,0,-17,w,27,7);x.fill();x.shadowColor="transparent";x.fillStyle=BG;x.fillText(t,8,2);x.restore();return w};
  const bars=st.arrived.filter(v=>v.counted!==false||v.cant).slice(0,8);
  if(full&&(FV==="b"||FV==="c")){   // the night as a list down the photo
    const lg=x.createLinearGradient(0,0,W*.8,0);lg.addColorStop(0,"rgba(11,13,18,.6)");lg.addColorStop(1,"rgba(11,13,18,0)");x.fillStyle=lg;x.fillRect(0,0,W,Hh);
    const rowH=FV==="b"?(bars.length>6?92:112):(bars.length>6?92:112),y0=380+Math.max(0,(6-bars.length))*rowH/2;
    x.save();x.shadowColor="rgba(0,0,0,.6)";x.shadowBlur=14;
    bars.forEach((v,i)=>{const b=byId(v.id),Y=y0+i*rowH,stay=v.leftAt?(v.leftAt-v.arrivedAt):(r.endedAt-v.arrivedAt);
      if(FV==="b"){x.font=`700 42px ${U}`;x.fillStyle=INK;const nm=fit(b.name,W-260);x.fillText(nm,64,Y);
        if(r.barOfDay===v.id){x.shadowColor="transparent";tagAt(Math.min(64+x.measureText(nm).width-60,W-260),Y-44);x.shadowColor="rgba(0,0,0,.6)"}
        if(i<bars.length-1){x.strokeStyle=AMB;x.lineWidth=4;x.lineCap="round";x.lineJoin="round";const cy=Y+rowH/2-6;x.beginPath();x.moveTo(78,cy-12);x.lineTo(92,cy+2);x.lineTo(106,cy-12);x.stroke()}}
      else{const cx=88;if(i<bars.length-1){x.save();x.shadowColor="transparent";x.strokeStyle="rgba(245,184,61,.75)";x.lineWidth=4;x.setLineDash([2,12]);x.lineCap="round";x.beginPath();x.moveTo(cx,Y+14);x.lineTo(cx,Y+rowH-42);x.stroke();x.restore()}
        const r2=20,gy=Y-12;x.beginPath();x.moveTo(cx-r2*1.25,gy-r2*1.3);x.lineTo(cx+r2*1.25,gy-r2*1.3);x.lineTo(cx,gy+r2*.45);x.closePath();x.fillStyle=AMB;x.fill();x.strokeStyle=AMB;x.lineWidth=4;x.beginPath();x.moveTo(cx,gy+r2*.4);x.lineTo(cx,gy+r2*1.25);x.moveTo(cx-r2*.7,gy+r2*1.25);x.lineTo(cx+r2*.7,gy+r2*1.25);x.stroke();
        x.fillStyle=BG;x.font=`800 18px ${U}`;x.textAlign="center";x.fillText(String(i+1),cx,gy-r2*.45);x.textAlign="left";
        x.font=`700 40px ${U}`;x.fillStyle=INK;const nm=fit(b.name,W-300);x.fillText(nm,142,Y);x.font=`600 24px ${U}`;x.fillStyle="rgba(244,241,234,.7)";x.fillText((r.noLoc?"":hmm(Math.max(0,stay))),142,Y+34);
        if(r.barOfDay===v.id){x.shadowColor="transparent";tagAt(Math.min(142+(x.font=`700 40px ${U}`,x.measureText(nm).width)-60,W-260),Y-42);x.shadowColor="rgba(0,0,0,.6)"}}});
    x.restore()}
  if(full&&(FV==="d"||FV==="e")&&bars.length){   // a winding dotted path with the bars along it
    const segs=FV==="d"?[[150,380],[930,520],[930,640],[150,760],[150,880],[930,1010],[930,1080]]:null;
    const pts=[];
    if(FV==="d"){const P0=[[110,420],[970,520],[110,760],[970,1000]];
      for(let i=0;i<P0.length-1;i++){const[a,b]=[P0[i],P0[i+1]],c1=[a[0]+(b[0]-a[0])*.15,a[1]+(b[1]-a[1])*.85+40],c2=[b[0]-(b[0]-a[0])*.15,b[1]-(b[1]-a[1])*.85-40];
        for(let t=0;t<=1;t+=.02){const u=1-t;pts.push([u*u*u*a[0]+3*u*u*t*c1[0]+3*u*t*t*c2[0]+t*t*t*b[0],u*u*u*a[1]+3*u*u*t*c1[1]+3*u*t*t*c2[1]+t*t*t*b[1]])}}}
    else{let h=0;String(r.id||r.startedAt).split("").forEach(ch=>h=(h*31+ch.charCodeAt(0))>>>0);const shape=window.WAVE!=null?window.WAVE:h%3;let sd=h%9973||7;const rn=()=>{sd=(sd*9301+49297)%233280;return sd/233280};
      const A=[[40,1.7,4.1,30,.6,1,-10],[44,1.4,1.0,30,.5,3.0,14],[38,1.85,0.4,30,.5,2.2,18]][shape].map((v,i)=>i===1||i===4?v*(.96+rn()*.08):i===2||i===5?v+rn()*.5:v);
      for(let X=70;X<=1010;X+=7){const t=(X-70)/940;pts.push([X,1278+A[0]*Math.sin(2*Math.PI*A[1]*t+A[2])+A[3]*Math.sin(2*Math.PI*A[4]*t+A[5])+A[6]*t])}
      bars._jit=bars.map((_,i)=>(rn()-.5)*.06)}
    const L=[0];for(let i=1;i<pts.length;i++)L.push(L[i-1]+Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]));const tot=L[L.length-1];
    const at=d=>{let i=L.findIndex(v=>v>=d);if(i<1)return pts[Math.max(0,i)];const f=(d-L[i-1])/(L[i]-L[i-1]);return[pts[i-1][0]+(pts[i][0]-pts[i-1][0])*f,pts[i-1][1]+(pts[i][1]-pts[i-1][1])*f]};
    if(false){const lg=x.createLinearGradient(0,820,0,1180);lg.addColorStop(0,"rgba(11,13,18,0)");lg.addColorStop(.5,"rgba(11,13,18,.45)");lg.addColorStop(1,"rgba(11,13,18,0)");x.fillStyle=lg;x.fillRect(0,820,W,360)}
    x.save();x.lineCap="round";x.lineJoin="round";x.shadowColor="rgba(0,0,0,.7)";x.shadowBlur=12;x.strokeStyle="rgba(245,184,61,.95)";x.lineWidth=7;x.setLineDash([2,17]);
    x.beginPath();pts.forEach((p,i)=>i?x.lineTo(p[0],p[1]):x.moveTo(p[0],p[1]));x.stroke();x.restore();
    if(window.WAVE_ENDS&&FV==="e"){const p0=pts[0],pn=pts[pts.length-1],pq=pts[pts.length-4],ang=Math.atan2(pn[1]-pq[1],pn[0]-pq[0]);x.save();x.shadowColor="rgba(0,0,0,.6)";x.shadowBlur=8;
      x.fillStyle=INK;x.beginPath();x.arc(p0[0],p0[1],8,0,7);x.fill();
      x.translate(pn[0]+6,pn[1]);x.rotate(ang);x.strokeStyle=AMB;x.lineWidth=5;x.lineCap="round";x.lineJoin="round";x.globalAlpha=.9;x.beginPath();x.moveTo(-12,-11);x.lineTo(2,0);x.lineTo(-12,11);x.stroke();x.restore()}
    const n2=bars.length;bars.forEach((v,i)=>{const d=tot*Math.min(.97,Math.max(.03,n2===1?.5:(.04+.92*i/(n2-1))+((bars._jit||[])[i]||0))),[gx,gy]=at(d),b=byId(v.id),stay=v.leftAt?(v.leftAt-v.arrivedAt):(r.endedAt-v.arrivedAt);
      x.save();x.shadowColor="rgba(0,0,0,.6)";x.shadowBlur=12;const r2=FV==="d"?22:17;
      x.beginPath();x.moveTo(gx-r2*1.25,gy-r2*1.3);x.lineTo(gx+r2*1.25,gy-r2*1.3);x.lineTo(gx,gy+r2*.45);x.closePath();x.fillStyle=AMB;x.fill();x.strokeStyle=AMB;x.lineWidth=4;x.beginPath();x.moveTo(gx,gy+r2*.4);x.lineTo(gx,gy+r2*1.25);x.moveTo(gx-r2*.7,gy+r2*1.25);x.lineTo(gx+r2*.7,gy+r2*1.25);x.stroke();
      x.shadowColor="transparent";x.fillStyle=BG;x.font=`800 ${FV==="d"?19:15}px ${U}`;x.textAlign="center";x.fillText(String(i+1),gx,gy-r2*.45);
      x.shadowColor="rgba(0,0,0,.75)";x.shadowBlur=14;const nm=FV==="e"?b.name.replace(/ (Hotel|Rooftop|Bar)$/,""):b.name;
      if(FV==="d"){x.font=`700 34px ${U}`;const nn=fit(nm,420),tw=x.measureText(nn).width,lx=Math.min(Math.max(gx,64+tw/2),W-64-tw/2);x.textAlign="center";x.fillStyle=INK;x.fillText(nn,lx,gy-44);
        x.font=`600 21px ${U}`;x.fillStyle="rgba(244,241,234,.75)";x.fillText((r.noLoc?"":hmm(Math.max(0,stay))),lx,gy+58);
        if(r.barOfDay===v.id){x.textAlign="left";x.shadowColor="transparent";tagAt(Math.min(lx+tw/2-50,W-250),gy-84)}}
      else{const yb=at(Math.max(0,d-40))[1],ya=at(Math.min(tot,d+40))[1],cv=(yb+ya)/2-gy,up=Math.abs(cv)>3?cv>0:i%2===0;x.textAlign="center";x.font=`700 26px ${U}`;x.fillStyle=INK;const nn=fit(nm,200),ly=up?gy-48:gy+64;x.fillText(nn,Math.min(Math.max(gx,110),W-110),ly);
        if(r.barOfDay===v.id){const tw=x.measureText(nn).width;x.textAlign="left";x.shadowColor="transparent";(()=>{const lx=Math.min(Math.max(gx,110),W-110);x.font=`800 15px ${U}`;x.letterSpacing="1.6px";const w=x.measureText("BAR OF THE DAY").width+16;x.letterSpacing="0px";tagAt(Math.min(Math.max(40,lx-w/2+10),W-40-w),up?ly-40:ly+30,4)})()}}
      x.textAlign="left";x.restore()})}
  if(mapc){
    let f3=80;x.font=`800 ${f3}px ${D}`;const t3=aw[0].t.toUpperCase();while(x.measureText(t3).width>W-128&&f3>44){f3-=4;x.font=`800 ${f3}px ${D}`}
    x.fillStyle=INK;where(1468);x.fillStyle=INK;x.fillText(t3,64,1560);x.font=`600 28px ${U}`;x.fillStyle="#C9CDD4";x.fillText(fit(plain(aw[0].why),W-128),64,1598);
    NLs([[km(st.total),"Distance","route"],[hmm(moving),"Travel time","walk"],[st.longest?mOrKm(st.longest.d):"—","Longest leg","span"]]).forEach(([v,l,ic],i)=>stat(v,l,ic,64+i*320,1690,64));
    foot();return new Promise(res=>c.toBlob(res,"image/png"))}
  if(rund){   // the rundown: every bar and the time there, on the photo (softened) or plain
    const list=st.arrived.slice(0,8),n4=list.length,listTop=RV==="plain"?Math.max(760,1700-(n4-1)*96):Math.max(1180,1700-(n4-1)*78),gap4=n4>1?Math.min(RV==="plain"?96:78,(1700-listTop)/(n4-1)):0;
    x.font=`800 76px ${D}`;let f4=76;const t4=aw[0].t.toUpperCase();while(x.measureText(t4).width>W-128&&f4>44){f4-=4;x.font=`800 ${f4}px ${D}`}
    const top4=listTop-265;
    if(RV==="photo"&&r.photo){const f0=top4-170,g5=x.createLinearGradient(0,f0,0,Hh);g5.addColorStop(0,"rgba(11,13,18,0)");g5.addColorStop(Math.min(.9,180/(Hh-f0)),"rgba(11,13,18,.5)");g5.addColorStop(Math.min(.95,(listTop-50-f0)/(Hh-f0)),"rgba(11,13,18,.8)");g5.addColorStop(1,"rgba(11,13,18,.93)");x.fillStyle=g5;x.fillRect(0,f0,W,Hh-f0)}
    x.shadowColor="rgba(0,0,0,.55)";x.shadowBlur=16;where(top4-94);x.fillStyle=INK;x.fillText(t4,64,top4);x.font=`600 27px ${U}`;x.fillStyle="#C9CDD4";x.fillText(fit(plain(aw[0].why),W-128),64,top4+42);
    NLs(cr?[[n,"Bars","glass"],[hmm(atBars),"Bar time","clock"],[hmm(st.dur),"Total time",isEve(r.startedAt)?"moon":"sun"]]:[[n,"Bars","glass"],[hmm(atBars),"Bar time","clock"],[hmm(moving),"Travel time","walk"]]).forEach(([v,l,ic],i)=>stat(v,l,ic,64+i*320,top4+135,60));
    x.strokeStyle="rgba(244,241,234,.12)";x.lineWidth=2;x.beginPath();x.moveTo(64,listTop-62);x.lineTo(W-64,listTop-62);x.stroke();
    list.forEach((v,i)=>{const Y=listTop+i*gap4,b=byId(v.id),ok=v.counted===true,stay=v.leftAt?(v.leftAt-v.arrivedAt):(r.endedAt-v.arrivedAt),tm=v.cant?"No entry":v.counted===false?"—":r.noLoc?"":hmm(Math.max(0,stay));
      x.fillStyle=ok?"rgba(244,241,234,.14)":"rgba(107,114,128,.2)";x.beginPath();x.arc(88,Y-12,24,0,7);x.fill();x.fillStyle=ok?INK:"#6B7280";x.font=`800 24px ${U}`;x.textAlign="center";x.fillText(String(i+1),88,Y-3);x.textAlign="left";
      x.font=`600 30px ${U}`;const tw=x.measureText(tm).width;x.fillStyle="rgba(244,241,234,.7)";x.fillText(tm,W-64-tw,Y);
      x.font=`700 38px ${U}`;x.fillStyle=ok?INK:"#6B7280";const nm=fit(b.name,W-64-tw-40-130);x.fillText(nm,130,Y);
      if(r.barOfDay===v.id){const ex=130+x.measureText(nm).width;x.font=`800 15px ${U}`;x.letterSpacing="1.6px";const w=x.measureText("BAR OF THE DAY").width+16;x.letterSpacing="0px";tagAt(Math.min(ex-24,W-64-tw-20-w),Y-42)}});
    foot();return new Promise(res=>c.toBlob(res,"image/png"))}
  if(full){x.shadowColor="rgba(0,0,0,.55)";x.shadowBlur=16;
    let f2=80;x.font=`800 ${f2}px ${D}`;const t2=aw[0].t.toUpperCase();while(x.measureText(t2).width>W-128&&f2>44){f2-=4;x.font=`800 ${f2}px ${D}`}
    x.fillStyle=SCH==="c"?AMB:INK;where(1448);x.fillStyle=INK;x.fillText(t2,64,1540);x.font=`600 28px ${U}`;x.fillStyle="rgba(244,241,234,.85)";x.fillText(fit(plain(aw[0].why),W-128),64,1578);
    let sy=1670;
    if(FV==="a"){x.font=`700 32px ${U}`;let X=64,Y=1366;const gl=(gx,gy)=>{x.fillStyle=AMB;x.beginPath();x.moveTo(gx-11,gy-22);x.lineTo(gx+11,gy-22);x.lineTo(gx,gy-8);x.closePath();x.fill();x.strokeStyle=AMB;x.lineWidth=3;x.beginPath();x.moveTo(gx,gy-9);x.lineTo(gx,gy);x.moveTo(gx-6,gy);x.lineTo(gx+6,gy);x.stroke()};
      bars.forEach((v,i)=>{const nm=byId(v.id).name.replace(/ (Hotel|Rooftop|Bar)$/,""),w=x.measureText(nm).width;if(X+w>W-64){X=64;Y+=50}x.fillStyle=INK;x.font=`700 32px ${U}`;x.fillText(nm,X,Y);
        if(r.barOfDay===v.id){x.font=`800 15px ${U}`;x.letterSpacing="1.6px";const tw2=x.measureText("BAR OF THE DAY").width+16;x.letterSpacing="0px";tagAt(Math.min(X+w-50,W-64-tw2),Y-34,4);x.font=`700 32px ${U}`}X+=w+14;if(i<bars.length-1){if(X+30>W-64){X=64;Y+=50}gl(X+11,Y-2);X+=36}});
      sy=Y+96}
    NLs(cr?[[n,"Bars","glass"],[hmm(st.dur),"Total time",isEve(r.startedAt)?"moon":"sun"],[hmm(atBars),"Bar time","clock"]]:[[n,"Bars","glass"],[km(st.total),"Distance","route"],[hmm(atBars),"Bar time","clock"]]).forEach(([v,l,ic],i)=>stat(v,l,ic,64+i*320,sy,64));
    if(!FV&&r.barOfDay&&byId(r.barOfDay)){x.font=`700 34px ${U}`;x.fillStyle=INK;const bn=fit(byId(r.barOfDay).name,W-128-120);x.fillText(bn,64,1508);const ex=64+x.measureText(bn).width;
      x.save();x.font=`800 15px ${U}`;x.letterSpacing="1.6px";const t="BAR OF THE DAY",w=x.measureText(t).width+16;x.translate(Math.min(ex-w*.3,W-64-w),1508-38);x.rotate(5*Math.PI/180);
      x.shadowColor="rgba(0,0,0,.45)";x.shadowBlur=10;x.shadowOffsetY=3;x.fillStyle=AMB;roundRect(x,0,-17,w,27,7);x.fill();x.shadowColor="transparent";x.fillStyle=BG;x.fillText(t,8,2);x.restore()}
    foot();return new Promise(res=>c.toBlob(res,"image/png"))}
  // award
  let fs=84;x.font=`800 ${fs}px ${D}`;const at=aw[0].t.toUpperCase();while(x.measureText(at).width>W-128&&fs>44){fs-=4;x.font=`800 ${fs}px ${D}`}
  x.fillStyle=SCH==="c"?AMB:INK;where(943);x.fillStyle=SCH==="c"?AMB:INK;x.fillText(at,64,1035);x.font=`600 28px ${U}`;x.fillStyle="#C9CDD4";x.fillText(fit(plain(aw[0].why),W-128),64,1092);
  // stats
  const S6=cr?[[n,"Bars"],[km(st.total),"Distance"],[hmm(st.dur),"Total time"],[hmm(atBars),"Bar time"],[lng?hmm(lng):"—","Longest stay"],[stays.length?hmm(stays.reduce((a,b)=>a+b,0)/stays.length):"—","Average stay"]]
    :[[n,"Bars"],[km(st.total),"Distance"],[hmm(moving),"Travel time"],[hmm(atBars),"Bar time"],[stays.length?hmm(Math.min(...stays)):"—","Quickest stop"],[st.longest?mOrKm(st.longest.d):"—","Longest leg"]];
  if(r.noLoc){S6.splice(0,S6.length,[n,"Bars"],[hmm(st.dur),"Total time"])}
  const SIC=r.noLoc?["glass","clock"]:cr?["glass","route",isEve(r.startedAt)?"moon":"sun","clock","hour","span"]:["glass","route","walk","clock","bolt","span"];
  S6.forEach(([v,l],i)=>stat(v,l,SIC[i],64+(i%3)*320,1205+Math.floor(i/3)*118,68));
  // bars, two columns, with time at each
  const list=st.arrived.slice(0,8),rows=Math.max(3,Math.ceil(list.length/2)),gap=rows>3?62:72,cw=(W-128-40)/2;
  list.forEach((v,i)=>{const col=Math.floor(i/rows),row=i%rows,X=64+col*(cw+40),Y=1445+row*gap,ok=v.counted===true,b=byId(v.id),bod=r.barOfDay===v.id;
    if(NS==="amber"){x.fillStyle=ok?AMB:"#4B5263";x.beginPath();x.arc(X+20,Y-9,20,0,7);x.fill();x.fillStyle=BG}
    else if(NS==="ring"){x.strokeStyle=ok?"rgba(244,241,234,.45)":"rgba(107,114,128,.6)";x.lineWidth=2;x.beginPath();x.arc(X+20,Y-9,18,0,7);x.stroke();x.fillStyle=ok?INK:"#6B7280"}
    else if(NS==="dim"){x.fillStyle=ok?"rgba(244,241,234,.14)":"rgba(107,114,128,.2)";x.beginPath();x.arc(X+20,Y-9,20,0,7);x.fill();x.fillStyle=ok?INK:"#6B7280"}
    else x.fillStyle=MUT;
    x.font=`${NS==="plain"?700:800} ${NS==="plain"?26:22}px ${U}`;x.textAlign="center";x.fillText(String(i+1),X+20,Y-1);x.textAlign="left";
    const stay=v.leftAt?(v.leftAt-v.arrivedAt):(r.endedAt-v.arrivedAt),tm=v.cant?"No entry":v.counted===false?"—":r.noLoc?"":hmm(Math.max(0,stay));
    x.font=`600 25px ${U}`;const tw=x.measureText(tm).width;x.fillStyle=MUT;x.fillText(tm,X+cw-tw,Y);
    x.font=`650 28px ${U}`;x.fillStyle=SCH==="b"?(ok?AMB:"#6B7280"):SCH==="d"?(ok?INK:"#6B7280"):(bod?AMB:ok?INK:"#6B7280");const nm=fit(b.name,cw-56-tw-18);x.fillText(nm,X+54,Y);
    if(bod){const ex=X+54+x.measureText(nm).width;x.save();x.font=`800 15px ${U}`;x.letterSpacing="1.6px";const t="BAR OF THE DAY",w=x.measureText(t).width+16;x.translate(Math.min(ex-24,X+cw-w),Y-40);x.rotate(5*Math.PI/180);
      x.shadowColor="rgba(0,0,0,.45)";x.shadowBlur=10;x.shadowOffsetY=3;x.fillStyle=AMB;roundRect(x,0,-17,w,27,7);x.fill();x.shadowColor="transparent";x.fillStyle=BG;x.fillText(t,8,2);x.restore()}});
  if(st.arrived.length>8){x.fillStyle=MUT;x.font=`600 24px ${U}`;x.fillText(`+${st.arrived.length-8} more`,64,1445+rows*gap)}
  foot();
  return new Promise(res=>c.toBlob(res,"image/png"));
}
// Dark basemap behind the map card. Returns the lat/lng -> canvas projection, or null.
async function mapTiles(x,r,st,W,HH,area){const AR=area||{cx:W/2,cy:670,bw:860,bh:540};
  const stops=[r.startPos,...st.arrived.map(v=>byId(v.id))].filter(Boolean),all=stops.concat((r.trail||[]).map(p=>({lat:p[0],lng:p[1]})));if(!all.length)return null;
  const wp=(p,z)=>{const n=256*Math.pow(2,z),s=Math.sin(p.lat*Math.PI/180);return[(p.lng+180)/360*n,(.5-Math.log((1+s)/(1-s))/(4*Math.PI))*n]};
  let SC=2;const BW=AR.bw,BH=AR.bh,cy0=AR.cy,cxp=AR.cx;let z=17;
  for(;z>3;z--){const a=all.map(p=>wp(p,z)),xs=a.map(q=>q[0]),ys=a.map(q=>q[1]);if((Math.max(...xs)-Math.min(...xs))*SC<=BW&&(Math.max(...ys)-Math.min(...ys))*SC<=BH)break}
  const a=all.map(p=>wp(p,z)),cx=(Math.min(...a.map(q=>q[0]))+Math.max(...a.map(q=>q[0])))/2,cy=(Math.min(...a.map(q=>q[1]))+Math.max(...a.map(q=>q[1])))/2;
  {const ew=Math.max(...a.map(q=>q[0]))-Math.min(...a.map(q=>q[0])),eh=Math.max(...a.map(q=>q[1]))-Math.min(...a.map(q=>q[1]));SC=2*Math.max(1,Math.min(1.95,BW/Math.max(ew*2,1),BH/Math.max(eh*2,1)))}
  const P=p=>{const q=wp(p,z);return[cxp+(q[0]-cx)*SC,cy0+(q[1]-cy)*SC]};
  const x0=cx-cxp/SC,y0=cy-cy0/SC,x1=cx+(W-cxp)/SC,y1=y0+HH/SC,T=[];
  for(let tx=Math.floor(x0/256);tx<=Math.floor(x1/256);tx++)for(let ty=Math.floor(y0/256);ty<=Math.floor(y1/256);ty++)T.push([tx,ty]);
  const errs=(window._mapErrs=window._mapErrs||[]);
  const load=u=>Promise.race([fetch(u,{mode:"cors",cache:"no-store"}).then(async rs=>{if(!rs.ok){errs.push(rs.status+" "+u.split("?")[0].split("/").slice(2,4).join("/"));return null}return await createImageBitmap(await rs.blob())}).catch(e=>{errs.push((e&&e.message||"blocked")+" "+u.split("/")[2]);return null}),new Promise(res=>setTimeout(()=>res(null),12000))]);
  const n=Math.pow(2,z),url=(b,tx,ty)=>b.replace("{z}",z).replace("{y}",ty).replace("{x}",((tx%n)+n)%n);
  // Google first: the same maps as the rest of the app, as still images (Static Maps), dark style
  const ll=(px,py)=>{const n=256*Math.pow(2,z),lng=px/n*360-180,lat=Math.atan(Math.sinh(Math.PI*(1-2*py/n)))*180/Math.PI;return lat.toFixed(6)+","+lng.toFixed(6)};
  const GST=["element:geometry|color:0x1b2130","element:labels.text.fill|color:0x8d96a8","element:labels.text.stroke|color:0x10141b","element:labels.icon|visibility:off","feature:poi|visibility:off","feature:transit|visibility:off",
    "feature:road|element:geometry|color:0x2b3345","feature:road.arterial|element:geometry|color:0x323b4f","feature:road.highway|element:geometry|color:0x3b455b","feature:water|element:geometry|color:0x0c1422","feature:administrative|element:geometry|visibility:off","feature:landscape.man_made|element:geometry|color:0x1e2534"].map(v=>"&style="+encodeURIComponent(v)).join("");
  {const MAXH=Math.floor(600*SC),EX=Math.ceil(70*SC/2),parts=[];for(let y=0;y<HH;y+=MAXH)parts.push([y,Math.min(MAXH,HH-y)]);
    const gi=await Promise.all(parts.map(([py,ph],i)=>{const last=i===parts.length-1,rh=last?ph:ph+EX,ccx=x0+W/2/SC,ccy=y0+(py+rh/2)/SC;return load(`https://maps.googleapis.com/maps/api/staticmap?center=${ll(ccx,ccy)}&zoom=${z}&size=${Math.ceil(W/SC)}x${Math.ceil(rh/SC)}&scale=2&key=${GKEY}${GST}`).then(im=>im&&{im,rh})}));
    if(gi.every(Boolean)){x.save();x.beginPath();x.rect(0,0,W,HH);x.clip();gi.forEach((g,i)=>{const[py,ph]=parts[i],sh=g.im.height*ph/g.rh;x.drawImage(g.im,0,0,g.im.width,sh,0,py,W,ph)});x.fillStyle="rgba(11,13,18,.18)";x.fillRect(0,0,W,HH);x.restore();x._mapSrc="google";return P}
    console.warn("story map: Google static map didn't load")}
  const imgs=await Promise.all(T.map(([tx,ty])=>Promise.all([load(url(ESRI,tx,ty)),load(url(ESRI_LBL,tx,ty))])));const src="esri";
  if(imgs.filter(q=>q[0]).length<T.length*.6){console.warn("story map: tiles didn't load");return null}
  x._mapSrc=src;
  x.save();x.beginPath();x.rect(0,0,W,HH);x.clip();x.imageSmoothingQuality="high";
  T.forEach(([tx,ty],i)=>{if(!imgs[i][0])return;const X=Math.floor((tx*256-x0)*SC),Y=Math.floor((ty*256-y0)*SC),Z=Math.ceil(256*SC)+1;x.drawImage(imgs[i][0],X,Y,Z,Z)});
  T.forEach(([tx,ty],i)=>{if(!imgs[i][1])return;const X=Math.floor((tx*256-x0)*SC),Y=Math.floor((ty*256-y0)*SC),Z=Math.ceil(256*SC)+1;x.globalAlpha=.75;x.drawImage(imgs[i][1],X,Y,Z,Z);x.globalAlpha=1});
  x.fillStyle="rgba(11,13,18,.25)";x.fillRect(0,0,W,HH);x.restore();
  return P;
}
async function shareStory(r){track("share_open",{has_photo:!!r.photo});
  const ov=document.createElement("div");ov.className="sharev";document.body.appendChild(ov);requestAnimationFrame(()=>ov.classList.add("on"));
  let urls=[],blobs=[],looks=[],cur=0;
  const close=()=>{ov.classList.remove("on");setTimeout(()=>{ov.remove();urls.forEach(u=>URL.revokeObjectURL(u))},250)};
  const top=`<div class="shv-top"><b>Your crawl card</b><button type="button" class="shv-x" aria-label="Close">${I.x}</button></div>`;
  const bindX=()=>ov.querySelector(".shv-x").onclick=close;
  const addPhoto=cam=>pickPhoto(f=>shrink(f,1000).then(d=>{(r.photos=r.photos||[]).push(d);if(r.photos.length>3)r.photos.shift();r.photo=d;delete r.noPhoto;try{saveH()}catch(e){}cards(0)}),cam);
  // no photo yet: offer one first, the map card is the fallback
  const ask=()=>{ov.innerHTML=top+`<div class="shv-ask">${I.camera}<h2>Add a photo?</h2><p>The group, the view, whatever's in your glass. It sets the background of your card.</p>
      <button class="btn" type="button" id="shvAdd">${I.camera} Take a photo</button><button class="btn dark" type="button" id="shvGal">${GAL} Choose from gallery</button><button class="txtbtn" type="button" id="shvSkip">Skip, use the map</button></div>`;
    bindX();$("shvAdd").onclick=()=>addPhoto(true);$("shvGal").onclick=()=>addPhoto(false);$("shvSkip").onclick=()=>cards(0)};
  async function cards(start){
    ov.innerHTML=top+`<div class="shv-wait">Making your card…</div>`;bindX();
    looks=r.photo?["full","map","rund"]:["map","rund"];
    window._mapErrs=[];try{blobs=await Promise.all(looks.map(l=>storyCard(r,l)))}catch(e){console.warn(e);blobs=[]}
    const clips=await clipList(r.id);clips.forEach(c=>{looks.push("clip");blobs.push(c.blob)});
    const mapDiag=S.test&&window._mapErrs.length?`<div class="shv-diag">Map didn't load: ${esc([...new Set(window._mapErrs)].slice(0,4).join(" · "))}</div>`:"";
    if(!blobs.length||!blobs[0]){ov.querySelector(".shv-wait").textContent="Couldn't make the card. Try again.";return}
    urls.forEach(u=>URL.revokeObjectURL(u));urls=blobs.map(b=>URL.createObjectURL(b));cur=Math.min(start||0,looks.length-1);
    const thumbs=(r.photos||[]).length>1?`<div class="shv-th">${r.photos.map((p,i)=>`<button type="button" data-ph="${i}" aria-pressed="${r.photo===p}"><img src="${p}" alt=""></button>`).join("")}</div>`:"";
    ov.innerHTML=top+`<div class="shv-car">${urls.map((u,i)=>looks[i]==="clip"?`<div class="shv-s clip"><video src="${u}" muted loop playsinline preload="metadata"></video><button type="button" class="shv-snd" aria-label="Sound">${I.sound}</button></div>`:`<div class="shv-s"><img src="${u}" alt="Story card"></div>`).join("")}</div>
      <div class="shv-ctl">${looks.length>1?`<div class="shv-dots dots">${looks.map((l,i)=>`<button type="button" data-k="${i}" aria-pressed="${i===cur}" aria-label="${l==="full"?"Photo":l==="map"?"Map":l==="clip"?"Clip":"Rundown"}"${l==="clip"?' class="cdot"':""}></button>`).join("")}</div>`:`<button class="txtbtn" type="button" id="shvAdd2">${I.camera} Add a photo</button>`}${thumbs}</div>
      ${mapDiag}<div class="shv-go"><button class="btn dark" type="button" id="shvSave" hidden>Save</button><button class="btn" type="button" id="shvGo">${I.share} Share</button></div>`;
    bindX();const car=ov.querySelector(".shv-car"),dots=[...ov.querySelectorAll("[data-k]")],th=ov.querySelector(".shv-th");
    const vids=[...ov.querySelectorAll(".shv-s")].map(sl=>sl.querySelector("video"));
    const mark=()=>{dots.forEach((d,i)=>d.setAttribute("aria-pressed",i===cur));if(th)th.style.visibility=looks[cur]==="map"||looks[cur]==="clip"?"hidden":"visible";
      $("shvSave").hidden=false;vids.forEach((v,i)=>{if(!v)return;if(i===cur)v.play().catch(()=>{});else v.pause()})};
    ov.querySelectorAll(".shv-snd").forEach(b=>b.onclick=()=>{const v=b.parentNode.querySelector("video");v.muted=!v.muted;b.classList.toggle("on",!v.muted)});
    requestAnimationFrame(()=>{car.scrollLeft=cur*car.clientWidth;mark()});
    car.addEventListener("scroll",()=>{const i=Math.round(car.scrollLeft/car.clientWidth);if(i!==cur){cur=i;mark()}},{passive:true});
    dots.forEach((d,i)=>d.onclick=()=>car.scrollTo({left:i*car.clientWidth,behavior:"smooth"}));
    ov.querySelectorAll("[data-ph]").forEach(b=>b.onclick=()=>{r.photo=r.photos[+b.dataset.ph];saveH();cards(0)});
    if($("shvAdd2"))$("shvAdd2").onclick=()=>photoSheet(r,()=>cards(0));
    $("shvSave").onclick=()=>{track("card_saved",{kind:looks[cur]});if(looks[cur]==="clip"){const c=clips[cur-(looks.length-clips.length)];if(c)clipSave(c.blob,c.type,c.at);return}
      const name=`rooftop-roulette-${looks[cur]}.png`;if(NATIVE){nativeSavePhoto(blobs[cur],name).then(()=>toast("Saved to your gallery.",2500)).catch(e=>{console.warn(e);toast("Couldn't save to your gallery.",3500)});return}
      const a=document.createElement("a");a.href=urls[cur];a.download=name;document.body.appendChild(a);a.click();a.remove()};
    const linkP=r.shared?Promise.resolve(null):crawlLink(r);
    $("shvGo").onclick=async()=>{track("share_sent",{kind:looks[cur]});const link=await linkP,text=link?`${crawlLine(r)}\n${link}`:"";
      if(looks[cur]==="clip"){const c=clips[cur-(looks.length-clips.length)];if(c)clipShare(c.blob,c.type,c.at,text);return}const file=new File([blobs[cur]],`rooftop-roulette-${looks[cur]}.png`,{type:"image/png"});
      if(NATIVE){nativeShare(blobs[cur],file.name,"Rooftop Roulette",text).catch(e=>console.warn(e));return}
      if(navigator.canShare&&navigator.canShare(text?{files:[file],text}:{files:[file]})){await navigator.share(text?{files:[file],text}:{files:[file]}).catch(()=>{})}
      else{const a=document.createElement("a");a.href=urls[cur];a.download=file.name;a.click()}};
  }
  if(r.photo)cards(0);else ask();
}
function roundRect(x,X,Y,w,h,r){x.beginPath();x.moveTo(X+r,Y);x.arcTo(X+w,Y,X+w,Y+h,r);x.arcTo(X+w,Y+h,X,Y+h,r);x.arcTo(X,Y+h,X,Y,r);x.arcTo(X,Y,X+w,Y,r);x.closePath()}
const loadImg=src=>new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=src});
function drawRoute(x,r,st,bx,by,bw,bh){
  const pts=[r.startPos,...st.arrived.map(v=>byId(v.id))];
  // faint zone circle + all bars around for texture
  const lat0=pts.reduce((s,p)=>s+p.lat,0)/pts.length,cos=Math.cos(lat0*Math.PI/180);
  const xs=pts.map(p=>p.lng*cos),ys=pts.map(p=>-p.lat);
  let minX=Math.min(...xs),maxX=Math.max(...xs),minY=Math.min(...ys),maxY=Math.max(...ys);
  const span=Math.max(maxX-minX,maxY-minY,.006),pad=110,sc=Math.min((bw-2*pad)/span,(bh-2*pad)/span);
  const cx=(minX+maxX)/2,cy=(minY+maxY)/2,P=p=>[bx+bw/2+(p.lng*cos-cx)*sc,by+bh/2+(-p.lat-cy)*sc];
  x.fillStyle="#2A303D";VENUES.forEach(v=>{const [X,Y]=P(v);if(X>bx&&X<bx+bw&&Y>by&&Y<by+bh){x.beginPath();x.arc(X,Y,7,0,7);x.fill()}});
  const path=()=>{x.beginPath();pts.forEach((p,i)=>{const [X,Y]=P(p);i?x.lineTo(X,Y):x.moveTo(X,Y)})};
  x.lineCap="round";x.lineJoin="round";x.strokeStyle="#0B0D12";x.lineWidth=22;path();x.stroke();x.strokeStyle="#F5B83D";x.lineWidth=12;path();x.stroke();
  const [sx,sy]=P(pts[0]);x.fillStyle="#5AA9FF";x.beginPath();x.arc(sx,sy,16,0,7);x.fill();x.strokeStyle="#fff";x.lineWidth=5;x.stroke();
  st.arrived.forEach((v,i)=>{const [X,Y]=P(byId(v.id));x.fillStyle=v.counted===true?"#F5B83D":"#6B7280";x.beginPath();x.arc(X,Y,20,0,7);x.fill();x.strokeStyle="#0B0D12";x.lineWidth=5;x.stroke();x.fillStyle="#241803";x.font='800 22px system-ui,Arial';x.textAlign="center";x.fillText(String(i+1),X,Y+8);x.textAlign="left"});
}
const GAL='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2.5"/><circle cx="9" cy="10" r="1.8"/><path d="M21 16l-5-5-9 9"/></svg>';
// Full-size photos and clips from one crawl, swipe between them.
async function mediaView(r,start){
  let clips=[];try{clips=await clipList(r.id)}catch(e){}
  const items=(r.photos||[]).map(p=>({k:"p",src:p})).concat(clips.map(c=>({k:"c",c,src:URL.createObjectURL(c.blob)})));if(!items.length){photoSheet(r,renderEnd);return}
  let cur=Math.max(0,start!=null?start:items.findIndex(x=>x.k==="p"&&x.src===r.photo));
  const ov=document.createElement("div");ov.className="mview";
  ov.innerHTML=`<div class="mv-car">${items.map(x=>`<div class="mv-s">${x.k==="p"?`<img src="${x.src}" alt="">`:`<video src="${x.src}#t=0.1" controls playsinline preload="metadata"></video>`}</div>`).join("")}</div>
    <button class="shv-x mv-x" type="button" aria-label="Close">${I.x}</button><div class="mv-bar"><span class="mv-n"></span><span class="mv-acts"></span></div>`;
  document.body.appendChild(ov);requestAnimationFrame(()=>ov.classList.add("on"));
  const car=ov.querySelector(".mv-car"),acts=ov.querySelector(".mv-acts");
  const close=()=>{ov.querySelectorAll("video").forEach(v=>v.pause());ov.classList.remove("on");setTimeout(()=>{items.forEach(x=>{if(x.k==="c")URL.revokeObjectURL(x.src)});ov.remove()},220)};
  ov.querySelector(".mv-x").onclick=close;
  const paint=()=>{const x=items[cur];ov.querySelector(".mv-n").textContent=`${cur+1} / ${items.length}`;
    acts.innerHTML=x.k==="p"?(r.photo===x.src?`<span class="mv-on">On your crawl card</span>`:`<button class="btn sm" type="button" data-a="use">Use on crawl card</button>`)+`<button class="btn sm line" type="button" data-a="add">Add photo</button>`
      :`<button class="btn sm" type="button" data-a="share">Share</button><button class="btn sm line" type="button" data-a="save">Save</button>`;
    acts.querySelectorAll("[data-a]").forEach(b=>b.onclick=()=>{const a=b.dataset.a;
      if(a==="use"){r.photo=x.src;delete r.noPhoto;saveH();paint();if(S.route==="end")renderEnd()}
      else if(a==="add"){close();photoSheet(r,renderEnd)}
      else if(a==="share")clipShare(x.c.blob,x.c.type,x.c.at);else if(a==="save")clipSave(x.c.blob,x.c.type,x.c.at)})};
  car.addEventListener("scroll",()=>{const i=Math.round(car.scrollLeft/car.clientWidth);if(i!==cur){cur=i;ov.querySelectorAll("video").forEach(v=>v.pause());paint()}},{passive:true});
  requestAnimationFrame(()=>{car.scrollLeft=cur*car.clientWidth;paint()})}
function photoSheet(r,after){
  const ph=r.photos||[];
  sheet(`<h3>Photo for your crawl card</h3><p class="note">The group, the view, whatever's in your glass.</p>
    ${ph.length?`<div class="phgrid">${ph.map((p,i)=>`<button type="button" data-pp="${i}" aria-pressed="${r.photo===p}"><img src="${p}" alt=""></button>`).join("")}</div>`:""}
    <div class="acts"><button class="btn" type="button" id="phCam">${I.camera} Take a photo</button><button class="btn dark" type="button" id="phGal">${GAL} Choose from gallery</button>
    ${r.photo?`<button class="txtbtn" type="button" id="phNo">No photo, use the map</button>`:""}</div>`,()=>{
    const got=(f,cam)=>{if(cam&&NATIVE&&S.clipAuto!==false)nativeSavePhoto(f,`rooftop-roulette-${Date.now()}.jpg`).catch(e=>console.warn("photo to gallery",e));return shrink(f,1000).then(d=>{(r.photos=r.photos||[]).push(d);if(r.photos.length>3)r.photos.shift();r.photo=d;delete r.noPhoto;try{saveH()}catch(e){}closeSheet();after&&after()})};
    $("phCam").onclick=()=>pickPhoto(f=>got(f,true),true);$("phGal").onclick=()=>pickPhoto(got,false);
    document.querySelectorAll("[data-pp]").forEach(b=>b.onclick=()=>{r.photo=ph[+b.dataset.pp];delete r.noPhoto;saveH();closeSheet();after&&after()});
    if($("phNo"))$("phNo").onclick=()=>{r.photo=null;r.noPhoto=true;saveH();closeSheet();after&&after()}})}
function pickPhoto(cb,cam){let i=document.getElementById("pickIn");if(!i){i=document.createElement("input");i.type="file";i.accept="image/*";i.id="pickIn";i.style.display="none";document.body.appendChild(i)}
  if(cam)i.setAttribute("capture","environment");else i.removeAttribute("capture");
  i.value="";i.onchange=()=>{const f=i.files&&i.files[0];if(f)cb(f)};i.click()}
function shrink(file,max){return new Promise(res=>{const img=new Image(),u=URL.createObjectURL(file);img.onload=()=>{const s=Math.min(1,max/Math.max(img.width,img.height)),c=document.createElement("canvas");c.width=Math.round(img.width*s);c.height=Math.round(img.height*s);c.getContext("2d").drawImage(img,0,0,c.width,c.height);URL.revokeObjectURL(u);res(c.toDataURL("image/jpeg",.72))};img.src=u})}



/* ---------- rooftops tab ---------- */
let bMap=null,bMapP=null,bMapFit=false;
const regionChips=(rg,openOnly)=>`<div class="rgrow"><label class="dd"><select id="rgSel" aria-label="Part of town">${[["all","All of "+cityIn(S.city)],...REG().map(r=>[r.name,r.name])].map(([k,l])=>`<option value="${esc(k)}" ${k===rg?"selected":""}>${esc(l)}</option>`).join("")}</select><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></label><button class="chip" type="button" id="rgOpen" aria-pressed="${openOnly}">${I.clock} Open now</button></div>`;
function barStatus(v,c){if(S.nfu[v.id])return "nfu";if(c[v.id])return "col";if(S.been[v.id])return "been";return ""}
const stampHTML=s=>s==="col"||s==="been"?'':s==="nfu"?'<span class="stamp nfu">Pass</span>':s==="next"?'<span class="stamp col">Next</span>':s==="done"?`<span class="stamp been">${dayWord(now())==="tonight"?"Tonight":"Today"}</span>`:"";
// the Hit list is a bookmark; the heart belongs to Favourites
const HEART='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M6.5 3.5h11v17l-5.5-3.8-5.5 3.8z"/></svg>';
const heartBtn=v=>`<button class="heart" type="button" data-heart="${v.id}" aria-pressed="${!!S.want[v.id]}" aria-label="Add to Hit list">${HEART}</button>`;
function rowHTML(v,o,s,y){return `<div class="barrow${s==="nfu"?" hid":""}${o.open?"":" shut"}" role="button" tabindex="0" data-id="${v.id}"><span class="t"><b>${esc(v.name)}${S.fav[v.id]?`<i class="fv rfv">${HRTF}</i>`:""}${s==="col"||s==="been"?'<i class="beenic" title="Been here" aria-label="Been here"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5"/><path d="M8 12.3l2.7 2.7L16 9.6"/></svg></i>':""}</b><small>${esc(v.vibe||v.area)}</small></span><span class="rt">${o.open?(y&&dist(y,v)<50000?mOrKm(dist(y,v)):""):o.temp?"Temp. closed":o.opens!=null?"Opens "+clock12(o.opens):"Closed today"}</span>${stampHTML(s)}${heartBtn(v)}</div>`}
function bindRows(root){
  root.querySelectorAll("[data-id]").forEach(b=>{const v=byId(b.dataset.id);b.onclick=e=>{if(e.target.closest("[data-heart],[data-rm]"))return;if(root.id==="barsResults")rememberBar(v.id);barSheet(v)};warmOnHold(b,v)});
  root.querySelectorAll("[data-heart]").forEach(h=>h.onclick=e=>{e.stopPropagation();const id=h.dataset.heart;if(S.want[id])delete S.want[id];else{S.want[id]=1;delete S.nfu[id];buzz(10)}save();
    document.querySelectorAll(`[data-heart="${id}"]`).forEach(x=>x.setAttribute("aria-pressed",String(!!S.want[id])));paintLists()});
}
function paintLists(){
  const c=collectedMap(),inCity=v=>cityOf(v)===S.city,nWant=VENUES.filter(v=>S.want[v.id]&&inCity(v)).length,nBeen=VENUES.filter(v=>(c[v.id]||S.been[v.id])&&inCity(v)).length,nFav=VENUES.filter(v=>S.fav[v.id]&&inCity(v)).length;
  $("barsLists").innerHTML=[["want","Hit list",nWant],["fav","Favourites",nFav],["been","Been",nBeen]].map(([k,l,n])=>`<button class="blist ${k}" type="button" data-l="${k}"><b>${n}</b><span>${l}</span></button>`).join("")+`<button class="txtbtn nfulink" type="button" data-l="nfu">Pass list ›</button>`;
  $("barsLists").querySelectorAll("[data-l]").forEach(b=>b.onclick=()=>listSheet(b.dataset.l));
}
function sfield(el){if(!el||el._sf)return el;el._sf=1;
  Object.defineProperty(el,"value",{get(){return (this.textContent||"").replace(/\n/g," ")},set(v){this.textContent=v}});
  el.addEventListener("input",()=>{if(!el.textContent.trim()&&el.innerHTML)el.innerHTML=""});
  el.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();el.blur()}});
  el.addEventListener("focus",()=>$("app").classList.add("kb"));el.addEventListener("blur",()=>$("app").classList.remove("kb"));
  return el}
/* Search: every rooftop in your city by name or suburb; matches in other cities underneath */
let bSearching=false;
// recent = bars you opened from search (per city): 5 shown, 15 kept so removing one backfills the next
function rememberBar(id){const c=cityOf(byId(id));S.recentB=S.recentB||{};S.recentB[c]=[id,...(S.recentB[c]||[]).filter(x=>x!==id)].slice(0,15);save()}
const rememberQ=()=>{};
function paintSearch(){
  const q=$("bQ"),box=$("barsResults"),s_=fold(q.value.trim()),t=now(),y=you(),c=collectedMap();
  $("bQclr").hidden=!q.value;
  if(!s_){
    const rec=((S.recentB||{})[S.city]||[]).map(byId).filter(Boolean).slice(0,3),subs=[...new Set(VENUES.filter(inCityNow).map(v=>v.area))].sort();
    const rrow=v=>`<div class="barrow rrow" role="button" tabindex="0" data-id="${v.id}"><span class="rclock">${I.clock}</span><span class="t"><b>${esc(v.name)}</b><small>${esc(v.area)}</small></span><button class="rmx" type="button" data-rm="${v.id}" aria-label="Remove ${esc(v.name)}">${I.x}</button></div>`;
    // suburbs first as one swipeable row (always above the keyboard), then recent
    // everything scrolls one way (down): last 3 bars you opened, then every suburb with how many rooftops it has
    const nIn=a=>VENUES.filter(v=>inCityNow(v)&&v.area===a).length;
    box.innerHTML=`${rec.length?`<div class="shd">Recent</div><div class="rlist">${rec.map(rrow).join("")}</div>`:""}
      <div class="shd">Suburbs</div><div class="chips subwrap">${subs.map(a=>`<button class="chip" type="button" data-q="${esc(a)}">${esc(a)}</button>`).join("")}</div>`;
    box.querySelectorAll("[data-q]").forEach(b=>b.onclick=()=>{q.value=b.dataset.q;paintSearch()});
    bindRows(box);
    box.querySelectorAll("[data-rm]").forEach(b=>b.onclick=e=>{e.stopPropagation();S.recentB[S.city]=(S.recentB[S.city]||[]).filter(x=>x!==b.dataset.rm);save();paintSearch()});return;
  }
  const hit=v=>fold(v.name).includes(s_)||fold(v.area).includes(s_)||fold(areaOf(v).name).includes(s_);
  const rank=v=>(fold(v.name).startsWith(s_)?0:fold(v.name).includes(s_)?1:2);
  const sortR=(a,b)=>rank(a)-rank(b)||(y?dist(y,a)-dist(y,b):a.name.localeCompare(b.name));
  const here=VENUES.filter(v=>inCityNow(v)&&hit(v)).sort(sortR),away=VENUES.filter(v=>!inCityNow(v)&&hit(v)).sort(sortR);
  const row=v=>rowHTML(v,openState(v,t),barStatus(v,c),inCityNow(v)?y:null);
  box.innerHTML=(here.length?`<div class="card list" style="padding:4px 16px">${here.map(row).join("")}</div>`
      :`<div class="nores"><b>No rooftop called "${esc(q.value.trim())}" in ${esc(cityIn(S.city))}</b><span>If it's a rooftop bar, it's not on Rooftop Roulette yet. Every bar here has been checked, so if it's missing we haven't got to it.</span></div>`)
    +(away.length?`<div class="shd">In ${[...new Set(away.map(cityOf))].join(" and ")}</div><div class="card list" style="padding:4px 16px">${away.map(row).join("")}</div>`:"");
  bindRows(box);
}
function setSearching(on){
  bSearching=on;$("app").classList.toggle("searching",on);$("barsMain").hidden=on;$("barsResults").hidden=!on;$("bQx").hidden=!on;$("bView").hidden=on;
  if(on)paintSearch();else{$("bQ").value="";$("bQclr").hidden=true;$("bQ").blur();renderBars()}
}
sfield($("bQ"));
$("bQ").onfocus=()=>{if(!bSearching)setSearching(true)};
$("bQ").oninput=()=>{paintSearch();$("v-bars").scrollTop=0};
$("bQclr").onclick=()=>{$("bQ").value="";paintSearch();$("bQ").focus()};
$("bQx").onclick=()=>setSearching(false);
{let y0=null;const r=$("barsResults");r.addEventListener("touchstart",e=>{y0=e.touches[0].clientY},{passive:true});r.addEventListener("touchmove",e=>{if(y0!==null&&Math.abs(e.touches[0].clientY-y0)>8&&document.activeElement===$("bQ")){$("bQ").blur();y0=null}},{passive:true})}
/* List or map: the map's a tap away instead of taking half the screen */
$("bView").onclick=()=>{S.barsView=S.barsView==="map"?"list":"map";save();renderBars();$("v-bars").scrollTop=0};
function renderBars(){
  if(!$("barsLists"))return;
  if(bSearching){paintSearch();return}
  const mapV=S.barsView==="map";
  $("barsMapWrap").hidden=!mapV;$("barsList").hidden=mapV;
  $("barsMap").style.height=mapV?"calc(100dvh - 330px)":"";$("barsMap").style.minHeight=mapV?"300px":"";
  $("bView").innerHTML=mapV?`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg> List`:`${I.pin} Map`;
  const t=now(),y=you(),c=collectedMap(),g=G();
  // one list, filtered: everything, the ones you've been to, the ones you've hidden (and your zone, mid-game)
  const tabs=g?[["zone",CR(g)?(g.cz.type==="list"?"Your list":"Nearby"):"My zone"],["all","All"]]:[["all","All"]];
  if(g&&S.barsFilterGame!==g.id){S.barsFilter="zone";S.barsFilterGame=g.id;save()}   // a new game opens on your zone
  let f=S.barsFilter;if(!tabs.some(x=>x[0]===f))f=tabs[0][0];
  $("barsCity").innerHTML=cityBtn();
  const inCity=v=>cityOf(v)===S.city,nWant=VENUES.filter(v=>S.want[v.id]&&inCity(v)).length,nBeen=VENUES.filter(v=>(c[v.id]||S.been[v.id])&&inCity(v)).length,nNfu=Object.keys(S.nfu).filter(id=>byId(id)).length;
  paintLists();
  if(false)$("barsLists").innerHTML=[["want","Hit list",nWant],["been","Been",nBeen]].map(([k,l,n])=>`<button class="blist ${k}" type="button" data-l="${k}"><b>${n}</b><span>${l}</span></button>`).join("")+`<button class="txtbtn nfulink" type="button" data-l="nfu">Pass list ›</button>`;
  const today=new Date().toDateString(),ct=sydAt(t,TZ[S.city]);
  const openOnly=false;
  const rgSel=f==="all"?(S.barsRegion||"all"):null;
  $("barsSeg").hidden=false;
  $("barsSeg").innerHTML=(g?`<button class="chip" type="button" data-w="zone" aria-pressed="${f==="zone"}">${tabs[0][1]}</button>`:"")
    +`<button class="chip" type="button" data-w="all" aria-pressed="${rgSel==="all"}">All of ${esc(cityIn(S.city))}<span class="cn">${VENUES.filter(inCityNow).length}</span></button>`
    +REG().map(r=>`<button class="chip" type="button" data-w="${esc(r.name)}" aria-pressed="${rgSel===r.name}">${esc(r.name)}<span class="cn">${VENUES.filter(v=>inCityNow(v)&&areaOf(v).reg===r.name).length}</span></button>`).join("");
  const sortD=(a,b)=>y?dist(y,a)-dist(y,b):a.name.localeCompare(b.name);
  const os=v=>openState(v,t);
  let intro="",rows=[],pins=[],extra="",fitTo=null;
  const tapHint=``;
  if(f==="zone"){
    const inZ=CR(g)?cruiseSet(g):playable(inCircle(g.center,g.radius),false).filter(v=>!(g.excluded||[]).includes(v.id)),tonight=g.visits.map(v=>v.id);
    const live=inZ.filter(v=>!tonight.includes(v.id)&&os(v).open).sort(sortD);
    if(g.target){const i=live.findIndex(v=>v.id===g.target);if(i>0)live.unshift(live.splice(i,1)[0])}
    const closed=openOnly?[]:inZ.filter(v=>!tonight.includes(v.id)&&!os(v).open).sort(sortD);
    intro=`${CR(g)?(g.cz.type==="list"?"Your Hit list. Your spins only land on these.":g.cz.type==="spot"?"Rooftops your next spin could land on, "+esc(g.cz.name.toLowerCase().replace(/^around /,"around "))+".":"Rooftops your next spin could land on, from where you are now."):"These are the rooftops your spins can land on."} ${tapHint}`;
    rows=[...live.map(v=>rowHTML(v,os(v),v.id===g.target?"next":barStatus(v,c),y)),
      ...tonight.map(id=>rowHTML(byId(id),os(byId(id)),"done",y)),
      ...(closed.length?[`<div class="grouphd shuthd">Closed now</div>`]:[]),...closed.map(v=>rowHTML(v,os(v),barStatus(v,c),y))];
    pins=inZ.map(v=>({v,cls:v.id===g.target?"big":tonight.includes(v.id)?"done":os(v).open?"":"off"}));
    if(!CR(g)){const free=g.started&&basePool().length<2,canMove=free||!g.voluntaryUsed;
      extra=canMove?`<button class="btn sm line" type="button" id="bMove" style="margin-top:10px">${I.move} Change of scenery? Move my zone</button>`:`<p class="note" style="margin-top:8px">You've used your zone move this game.</p>`}
  }else if(f==="other"){
    const zIds=new Set((CR(g)?cruiseSet(g):inCircle(g.center,g.radius)).map(v=>v.id));
    const others=VENUES.filter(v=>!zIds.has(v.id)&&!S.nfu[v.id]).sort(sortD);
    const free=g.started&&basePool().length<2,canMove=free||!g.voluntaryUsed;
    if(CR(g)){intro=`Every other rooftop in ${S.city}. ${tapHint}`}else intro=`<b>Fancy a change of scenery?</b> Move your zone and every spin from then on lands in the new area. You get one move per game${free?", and right now it's free because your zone's nearly empty":""}.`;
    extra=CR(g)?"":canMove?`<button class="btn sm" type="button" id="bMove" style="margin-top:10px">${I.move} Move my zone</button>`:`<p class="note" style="margin-top:8px">You've used your zone move this game.</p>`;
    rows=groupedRows(others,v=>rowHTML(v,os(v),barStatus(v,c),y));
    pins=others.map(v=>({v,cls:os(v).open?"":"off"}));
  }else if(f==="been"){
    const list=VENUES.filter(v=>{const s=barStatus(v,c);return s==="col"||s==="been"}).sort(sortD);
    intro=`Rooftops you've visited in a game or marked as been before. Turn on <b>New rooftops only</b> when you set up a game and these get skipped.`;
    rows=list.map(v=>rowHTML(v,os(v),barStatus(v,c),y));
    if(!rows.length)rows=[`<div class="empty" style="padding:22px 8px">Nothing here yet. Tap any rooftop in another tab and switch on "Been here before".</div>`];
    pins=list.map(v=>({v,cls:"done"}));
  }else if(f==="nfu"){
    const list=VENUES.filter(v=>S.nfu[v.id]).sort(sortD);
    intro=`Rooftops you'd never go to. These never come up in a spin. Tap one to bring it back.`;
    rows=list.map(v=>rowHTML(v,os(v),"nfu",y));
    if(!rows.length)rows=[`<div class="empty" style="padding:22px 8px">No bars hidden. If there's a rooftop you'd never go to, tap it in another tab and switch on "Pass".</div>`];
    pins=list.map(v=>({v,cls:"off"}));
  }else{
    const rg=S.barsRegion||"all";
    if(rg!=="all"&&!REG().some(r=>r.name===rg)){S.barsRegion="all";save();return renderBars()}
    if(bMap&&bMap._city!==S.city){bMap._city=S.city;bMapFit=true}
    const list=VENUES.filter(v=>inCityNow(v)&&(rg==="all"||areaOf(v).reg===rg)&&(!openOnly||os(v).open)).sort(sortD);
    extra="";
    intro="";
    const op=list.filter(v=>os(v).open),ok=v=>{const x=os(v);return x.opens!=null&&!x.temp?x.opens:1e9},cl=list.filter(v=>!os(v).open).sort((a,b)=>ok(a)-ok(b)||sortD(a,b));   // closed: opening soonest first
    rows=[...groupedRows(op,v=>rowHTML(v,os(v),barStatus(v,c),y)),...(cl.length?[`<div class="grouphd shuthd">Closed now</div>`,...cl.map(v=>rowHTML(v,os(v),barStatus(v,c),y))]:[])];
    pins=list.map(v=>({v,cls:barStatus(v,c)==="col"?"done":os(v).open?"":"off"}));fitTo=list;
  }
  $("barsIntro").hidden=f==="all"&&!intro&&!extra;
  $("barsIntro").innerHTML=f==="all"?`${extra}${intro?`<p class="note" style="margin:10px 0 0">${intro}</p>`:""}`:`<p class="note" style="margin:0">${intro}</p>${extra}`;
  if($("rgSel"))$("rgSel").onchange=e=>{S.barsRegion=e.target.value;save();bMapFit=true;renderBars()};
  if($("rgOpen"))$("rgOpen").onclick=()=>{S.barsOpen=!S.barsOpen;save();renderBars()};
  $("barsList").innerHTML=rows.join("");
  bindRows($("barsList"));
  if($("bMove"))$("bMove").onclick=()=>openMove(g.started&&basePool().length<2);
  if(!mapV)return;
  requestAnimationFrame(async()=>{
    if(!bMapP)bMapP=makeMap("barsMap").then(m=>{m.setView(cityC(),13);m.onTap((lat,lng)=>{if(S.test){S.fake={lat,lng};save();onLocation();renderBars()}});return m});
    const m=bMap=await bMapP;if(!m)return;m.resize();m.clear();
    if(g&&!CR(g)){m.circle(g.center,g.radius);if(m._zoneFor!==g.id+g.center.lat){m._zoneFor=g.id+g.center.lat;m.fitZone(g.center,g.radius)}}
    pins.forEach(({v,cls})=>m.pin(v,cls,()=>barSheet(v)));
    if(fitTo&&fitTo.length&&(bMapFit||m._fitRg!==(S.barsRegion||"all"))){m._fitRg=S.barsRegion||"all";bMapFit=false;m.fitPts(fitTo,15)}
    setMe(m);
  });
}
$("barsSeg").onclick=e=>{const b=e.target.closest("button");if(!b)return;
  if(b.hasAttribute("data-open")){S.barsOpen=b.getAttribute("aria-pressed")!=="true";S.barsOpenDay=new Date().toDateString();save();renderBars();return}
  const w=b.dataset.w;if(w==="zone")S.barsFilter="zone";else{S.barsFilter="all";S.barsRegion=w;bMapFit=true}save();renderBars()};
function visitsOf(id){const out=[];const add=r=>{const x=r.visits.find(w=>w.id===id&&w.counted===true);if(x)out.push({r,t:rt(r,x.arrivedAt),d:Math.max(0,(x.leftAt||r.endedAt||now())-x.arrivedAt)})};
  H.forEach(add);if(S.game&&!S.game.ended)add(S.game);return out.sort((a,b)=>b.t-a.t)}
const stayTxt=ms=>{const m=Math.max(1,Math.round(ms/60000));if(m<60)return m+" min";const h=Math.floor(m/60),r=m%60;return h+" hr"+(r?" "+r:"")};
const gameLbl=x=>(x.r.mode==="cruise"?"R&amp;R":LEN(x.r.len))+" · "+stayTxt(x.d);
function visitsHTML(v){const vs=visitsOf(v.id);if(!vs.length)return "";
  if(vs.length===1)return `<p class="note" style="margin-top:6px"><span class="stamp col">Visited</span> ${dateTxt(vs[0].t)} · ${gameLbl(vs[0])}</p>`;
  const tot=vs.reduce((s,x)=>s+x.d,0);
  return `<button class="vhist" type="button" id="vHist" aria-expanded="false"><span class="stamp col">Visited</span> ${vs.length} times · ${hmm(tot)} all up <span class="chev">›</span></button>
    <div class="vlist" id="vList">${vs.map(x=>`<button type="button" data-g="${x.r.id||""}">${dateTxt(x.t)}<span>${gameLbl(x)}</span></button>`).join("")}</div>`}
function bindVisits(){const b=$("vHist");if(!b)return;b.onclick=()=>{const on=b.getAttribute("aria-expanded")!=="true";b.setAttribute("aria-expanded",String(on));$("vList").classList.toggle("on",on)};
  $("vList").querySelectorAll("[data-g]").forEach(x=>x.onclick=()=>{const id=x.dataset.g;if(!id||!H.some(r=>r.id===id))return;closeSheet();S.lastEnd=id;go("end")})}
function barSheet(v,night,opt){opt=opt||{};const been_=beenTo(v.id);
  const t=now(),o=openState(v,t),y=you(),c=collectedMap(),s=barStatus(v,c);
  if(bMap&&S.route==="bars")bMap.setView(v,16);
  const bf=`<span>${I.clock} ${o.open?"Open til "+clock12(o.closeAt):o.opens!=null?"Opens "+clock12(o.opens):(o.temp?"Temporarily closed":"Closed today")}</span>${y?`<span>${I.pin} ${mOrKm(dist(y,v))}</span>`:""}`;
  sheet(`${opt.back?`<button class="txtbtn bsback" type="button" id="bsBack">‹ ${esc(opt.backTxt||"Back")}</button>`:""}<div class="bswrap">${sheetCard(v,bf)}${true?`<button class="favbtn" type="button" id="bsFav" aria-pressed="${!!S.fav[v.id]}" aria-label="Favourite">${HRT}${HRTF}</button>`:""}</div>
    ${opt.visit?`<p class="note bsvisit">${opt.visit}</p>`:""}
    ${v.fact&&!opt.lite?`<p class="wordis">${esc(v.fact)}</p>`:""}
    ${opt.lite&&visitsOf(v.id).length<=1?"":visitsHTML(v)}
    <div class="acts">
      ${night&&night.barOfDay!==v.id&&night.visits.some(x=>x.id===v.id&&x.counted===true)&&night.visits.filter(x=>x.counted===true).length>=2?`<button class="btn" type="button" id="mkBod">${I.sparkle} Make this bar of the day</button>`:""}
      ${c[v.id]||night?"":`<button class="toggle" type="button" id="tgBeen" role="switch" aria-checked="${!!S.been[v.id]}"><span class="t"><b>Been here before</b><small>Leave out of "New rooftops only"</small></span><span class="sw"></span></button>`}
      ${been_&&!S.want[v.id]?"":`<button class="toggle" type="button" id="tgWant" role="switch" aria-checked="${!!S.want[v.id]}"><span class="t"><b>Hit list</b><small>Save for next time</small></span><span class="sw"></span></button>`}
      <button class="toggle" type="button" id="tgNfu" role="switch" aria-checked="${!!S.nfu[v.id]}"><span class="t"><b>Pass</b><small>Leave out of R&amp;R</small></span><span class="sw"></span></button>
    </div>
    <button class="txtbtn reportbtn" type="button" id="rpBar">Wrong hours or info? Let us know</button>`,()=>{
    $("rpBar").onclick=()=>{track("report_change");const sub=encodeURIComponent(`${v.name}: info update`),body=encodeURIComponent(`Bar: ${v.name} (${v.id})\nWhat's changed:\n\n`);location.href=`mailto:hello@rooftoproulette.com?subject=${sub}&body=${body}`};bindSheetCard(v,bf);bindVisits();
    if($("mkBod"))$("mkBod").onclick=()=>{night.barOfDay=v.id;night.bodDone=true;saveH();buzz(15);closeSheet();if(S.route==="end")renderEnd()};
    if($("tgBeen"))$("tgBeen").onclick=()=>{if(S.been[v.id])delete S.been[v.id];else S.been[v.id]=1;save();barSheet(v);if(S.route==="bars")renderBars()};
    if($("bsBack"))$("bsBack").onclick=opt.back;
    if($("bsFav"))$("bsFav").onclick=e=>{e.stopPropagation();toggleFav(v.id);const b=$("bsFav"),on=!!S.fav[v.id];b.setAttribute("aria-pressed",String(on));
      if(on&&b.animate)b.animate([{transform:"scale(1)"},{transform:"scale(1.3)"},{transform:"scale(1)"}],{duration:320,easing:"ease-out"});
      toast(on?"Added to Favourites":"Removed from Favourites",1800);if(S.route==="bars")renderBars();if(S.route==="hist")renderHist()};
    $("tgNfu").onclick=()=>{if(S.nfu[v.id])delete S.nfu[v.id];else{S.nfu[v.id]=1;delete S.want[v.id];delete S.fav[v.id]}save();barSheet(v,night,opt);if(S.route==="bars")renderBars()};
    if($("tgWant"))$("tgWant").onclick=()=>{if(S.want[v.id])delete S.want[v.id];else{S.want[v.id]=1;delete S.nfu[v.id]}save();barSheet(v,night,opt);if(S.route==="bars")renderBars()};
  });
}

/* After an R&R skip: a quiet offer to put the bar on Pass (gone after a few seconds) */
let toastT=null;
function toast(html,ms,bind){let t=$("toast");if(!t){t=document.createElement("div");t.id="toast";t.className="toast";document.body.appendChild(t);swipeAway(t)}
  t.style.transition="";t.style.translate="";
  clearTimeout(toastT);t.innerHTML=html;t.classList.add("on");if(bind)bind(t);toastT=setTimeout(()=>t.classList.remove("on"),ms)}
// drag a map card or the bar list down (or sideways) to put it away
function swipeHide(el,handle){let x0=null,y0=0,dx=0,dy=0;
  el.addEventListener("touchstart",e=>{if(handle&&!e.target.closest(handle))return;x0=e.touches[0].clientX;y0=e.touches[0].clientY;dx=dy=0;el.style.transition="none"},{passive:true});
  el.addEventListener("touchmove",e=>{if(x0===null)return;dx=e.touches[0].clientX-x0;dy=Math.max(0,e.touches[0].clientY-y0);const side=Math.abs(dx)>dy;el.style.transform=side?`translateX(${dx}px)`:`translateY(${dy}px)`;el.style.opacity=String(1-Math.min(.7,Math.max(Math.abs(dx),dy)/240))},{passive:true});
  el.addEventListener("touchend",()=>{if(x0===null)return;x0=null;el.style.transition="transform .18s ease, opacity .18s ease";
    if(Math.abs(dx)>70||dy>50){el.style.opacity="0";el.style.transform=Math.abs(dx)>dy?`translateX(${dx>0?120:-120}%)`:"translateY(120%)";setTimeout(()=>{el.hidden=true;el.style.transform="";el.style.opacity="";el.style.transition=""},180)}
    else{el.style.transform="";el.style.opacity=""}})}
// drag a toast sideways (or down) to get rid of it
function swipeAway(t){let x0=null,y0=0,dx=0,dy=0;
  t.addEventListener("pointerdown",e=>{if(e.target.closest("button"))return;x0=e.clientX;y0=e.clientY;dx=dy=0;t.style.transition="none";t.setPointerCapture(e.pointerId)});
  t.addEventListener("pointermove",e=>{if(x0===null)return;dx=e.clientX-x0;dy=Math.max(0,e.clientY-y0);t.style.translate=Math.abs(dx)>dy?`${dx}px 0`:`0 ${dy}px`;t.style.opacity=String(1-Math.min(.8,Math.max(Math.abs(dx),dy)/220))});
  const end=()=>{if(x0===null)return;x0=null;t.style.transition="translate .2s ease, opacity .2s ease";
    if(Math.abs(dx)>70||dy>40){t.style.translate=Math.abs(dx)>dy?`${dx>0?"110%":"-110%"} 0`:"0 120%";t.style.opacity="0";clearTimeout(toastT);setTimeout(()=>{t.classList.remove("on");t.style.translate="";t.style.opacity=""},220)}
    else{t.style.translate="";t.style.opacity=""}};
  t.addEventListener("pointerup",end);t.addEventListener("pointercancel",end);t.style.touchAction="none"}
const hideToast=()=>{const t=$("toast");if(t)t.classList.remove("on");clearTimeout(toastT)};
function skipToast(id){const v=byId(id);if(!v||S.nfu[id])return;
  toast(`<span>Skipped <b>${esc(v.name)}</b></span><button type="button" id="tNfu">Pass</button>`,6000,()=>$("tNfu").onclick=()=>{
    S.nfu[id]=1;const w=!!S.want[id];delete S.want[id];save();buzz(15);
    toast(`<span><b>${esc(v.name)}</b> won't come up again</span><button type="button" id="tUndo">Undo</button>`,4500,()=>$("tUndo").onclick=()=>{delete S.nfu[id];if(w)S.want[id]=1;save();hideToast()})})}
/* One of your lists: search to add (suggests as you type), ✕ to take one off */
const fold=x=>x.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();
function listSheet(k,msg,after){
  const c=collectedMap();
  const L={want:{t:"Hit list",d:"Bars you've been meaning to get to. Start R&amp;R with <b>Pick from my Hit list</b> and the wheel only spins these."},
    been:{t:"Been",d:"Bars you've been to before. Turn on <b>Skip bars I've been to</b> when you set up and they won't come up."},
    nfu:{t:"Pass",d:"Bars you'd never go to. These never come up in R&amp;R."},
    fav:{t:"Favourites",d:"Bars you love. Tap the heart on any bar to add it here."}}[k];
  const has=id=>k==="been"?!!(S.been[id]||c[id]):!!S[k][id];
  const add=id=>{if(k==="been")S.been[id]=1;else if(k==="fav"){S.fav[id]=Date.now();delete S.want[id];delete S.nfu[id]}else{S[k][id]=1;delete S[k==="want"?"nfu":"want"][id];if(k==="nfu")delete S.fav[id]}save();buzz(10)};
  const del=id=>{delete S[k][id];save()};
  // opens full height on every rooftop: the ones on your list ticked at the top, the rest underneath.
  // Tap to tick or untick. Typing narrows it. The order holds while you tick, so nothing jumps.
  let city=S.city;
  sheet(`<div class="lshead"><h3 tabindex="-1" autofocus style="outline:0">${L.t} <span class="lscity" id="lsCity">· ${esc(city)}</span></h3><p class="note" style="margin:4px 0 12px">${L.d}</p>${msg?`<div class="alertbox" style="margin:0 0 12px">${esc(msg)}</div>`:""}
    <div class="lsearch">${I.search}<div id="lsQ" class="sfield" contenteditable="plaintext-only" role="searchbox" inputmode="search" enterkeyhint="search" autocapitalize="off" autocorrect="off" spellcheck="false" data-hint="Search rooftops"></div><button class="lsclr" type="button" id="lsClr" hidden aria-label="Clear">${I.x}</button></div><div class="lsalso" id="lsAlso"></div></div>
    <div class="lsitems" id="lsItems"></div>
    <div class="lsfoot"><button class="btn" type="button" id="lsDone">Done</button></div>`,()=>{
    $("sheet").classList.add("full");
    const q=sfield($("lsQ")),t=now();
    const sub=v=>{const o=openState(v,t);return `${esc(v.area)} · ${o.open?"Open til "+clock12(o.closeAt):o.opens!=null?"Opens "+clock12(o.opens):(o.temp?"Temporarily closed":"Closed today")}`};
    let order=[];
    const sortNow=()=>{const s_=fold(q.value.trim());
      order=VENUES.filter(v=>cityOf(v)===city).filter(v=>!s_||fold(v.name).includes(s_)||fold(v.area).startsWith(s_)).sort((a,b)=>(has(a.id)?0:1)-(has(b.id)?0:1)||(s_?(fold(a.name).startsWith(s_)?0:1)-(fold(b.name).startsWith(s_)?0:1):0)||a.name.localeCompare(b.name))};
    const paint=()=>{
      $("lsClr").hidden=!q.value;$("lsCity").textContent="· "+city;
      const also=CITIES.map(x=>({x,n:VENUES.filter(v=>cityOf(v)===x.name&&has(v.id)).length})).filter(o=>o.x.name!==city&&o.n);
      $("lsAlso").innerHTML=also.length?`Also saved: ${also.map(o=>`<button type="button" data-cy="${o.x.name}">${o.x.name} ${o.n} ›</button>`).join(" ")}`:"";
      $("lsAlso").querySelectorAll("[data-cy]").forEach(b=>b.onclick=()=>{city=b.dataset.cy;q.value="";sortNow();paint();$("sheet").scrollTop=0});
      $("lsItems").innerHTML=order.length?order.map(v=>{const on=has(v.id),fixed=k==="been"&&c[v.id]&&!S.been[v.id];
        return `<button class="lsrow lspick" type="button" data-t="${v.id}" ${fixed?"disabled":""}><span class="t"><b>${esc(v.name)}</b><small>${fixed?esc(v.area)+" · Visited in a game":sub(v)}</small></span><span class="pl${on?" on":""}">${on?TICK:I.plus}</span></button>`}).join("")
        :`<div class="lsempty">No rooftops match "${esc(q.value.trim())}".</div>`;
      $("lsItems").querySelectorAll("[data-t]").forEach(b=>{b.onpointerdown=e=>{if(document.activeElement===q)e.preventDefault()};b.onclick=()=>{const id=b.dataset.t;if(has(id))del(id);else add(id);paint();renderBars()}});
    };
    q.oninput=()=>{sortNow();paint();$("sheet").scrollTop=0};
    $("lsClr").onclick=()=>{q.value="";sortNow();paint();q.blur()};
    // start scrolling and the keyboard gets out of the way (the search stays as typed)
    {let y0=null;const it=$("lsItems");
      it.addEventListener("touchstart",e=>{y0=e.touches[0].clientY},{passive:true});
      it.addEventListener("touchmove",e=>{if(y0!==null&&Math.abs(e.touches[0].clientY-y0)>8&&document.activeElement===q){q.blur();y0=null}},{passive:true});}
    sortNow();paint();
    $("lsDone").onclick=()=>{closeSheet();if(after)after()};
  });
}

/* ---------- history tab ---------- */
// every counted bar visit across finished crawls, newest first
function allVisits(){const out=[];H.forEach(r=>{const st=stats(r);st.counted.forEach((v,i)=>{const b=byId(v.id);if(!b)return;
  out.push({r,v,b,n:st.arrived.indexOf(v)+1,t:rt(r,v.arrivedAt),ms:Math.max(0,(v.leftAt||r.endedAt||r.endsAt)-v.arrivedAt)})})});return out.sort((a,b)=>b.t-a.t)}
const modeTxt=r=>r.mode==="cruise"?"R&amp;R":LEN(r.len);
const monthTxt=ts=>new Date(ts).toLocaleDateString("en-AU",{month:"long",year:"numeric",timeZone:"Australia/Sydney"});
// a small square: the bar's photo if we already have it (no new photo loads), otherwise its initial
const vthumb=(b,txt)=>{const ph=phMem[b.id];return `<span class="vth${ph?" ph":""}"${ph?` style="background-image:url('${ph.url}')"`:""}>${ph?"":esc(txt!=null?String(txt):b.name.replace(/^the\s+/i,"")[0]||"·")}</span>`};
// Strava-style personal bests. Each one links back to the night it happened.
function records(){
  const R=[],best=(lbl,ic,list,val,fmt,sub,lowest)=>{const c=list.filter(x=>val(x)!=null&&val(x)>0);if(!c.length)return;c.sort((x,y)=>lowest?val(x)-val(y):val(y)-val(x));const w=c[0];R.push({lbl,ic,v:fmt(val(w)),sub:sub(w),id:w.r.id})};
  const nights=H.map(r=>({r,st:stats(r)})),tn=nights.filter(x=>!x.r.noLoc);
  [[60,"Most bars · 1 hr"],[120,"Most bars · 2 hr"]].forEach(([l,t])=>best(t,"glass",nights.filter(x=>x.r.mode!=="cruise"&&x.r.len===l),x=>x.st.counted.length,n=>n,x=>dateTxt(rt(x.r,x.r.startedAt))));
  best("Most bars · R&amp;R","glass",nights.filter(x=>x.r.mode==="cruise"),x=>x.st.counted.length,n=>n,x=>dateTxt(rt(x.r,x.r.startedAt)));
  best("Most bar time in a crawl","moon",tn.filter(x=>x.st.counted.length),x=>x.st.counted.reduce((s,v)=>s+Math.max(0,(v.leftAt||x.r.endedAt||x.r.endsAt)-v.arrivedAt),0),hmm,x=>dateTxt(rt(x.r,x.r.startedAt))+" · "+modeTxt(x.r));
  best("Furthest crawl","route",tn,x=>x.st.total,km,x=>dateTxt(rt(x.r,x.r.startedAt))+" · "+x.st.counted.length+" bar"+(x.st.counted.length===1?"":"s"));
  const vs=allVisits().filter(x=>x.v.leftAt!=null&&!x.r.noLoc);
  best("Longest stay","clock",vs,x=>x.ms,hmm,x=>esc(x.b.name)+" · "+dateTxt(x.t));
  best("Quickest stay","bolt",vs,x=>x.ms,hmm,x=>esc(x.b.name)+" · "+dateTxt(x.t),true);
  {const c={};allVisits().filter(x=>!x.r.noLoc).forEach(x=>{const o=c[x.b.id]||(c[x.b.id]={b:x.b,ms:0,n:0});o.ms+=x.ms;o.n++});const top=Object.values(c).filter(o=>o.n>1).sort((a,b)=>b.n-a.n||b.ms-a.ms)[0];   // 2+ visits, so it's never just the longest stay again
    if(top&&top.ms>0)R.push({lbl:"Your local",ic:"clock",v:hmm(top.ms),sub:esc(top.b.name)+" · "+top.n+" visit"+(top.n===1?"":"s"),bar:top.b.id})}
  const legs=[],hops=[];tn.forEach(({r,st})=>{if(st.longest&&st.longest.to)legs.push({r,d:st.longest.d,to:st.longest.to.id});if(st.quick&&st.quick.ms>=30000)hops.push({r,ms:st.quick.ms,from:st.quick.from,to:st.quick.to})});
  best("Longest walk","walk",legs,x=>x.d,mOrKm,x=>"To "+esc(byId(x.to).name)+" · "+dateTxt(rt(x.r,x.r.startedAt)));
  best("Fastest changeover","bolt",hops,x=>x.ms,hmm,x=>esc(byId(x.from).name)+" → "+esc(byId(x.to).name),true);
  return R}
function renderHist(){
  const b=$("v-hist");
  if(!H.length){b.innerHTML=`<div class="cityrow"><h1 class="q">My Tab</h1><button class="gear tabgear" type="button" data-gear aria-label="Settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></button></div><div class="empty">${I.trophy}<b style="color:var(--text);font-size:17px">No crawls yet</b><span>Finish a crawl and it goes on your tab.</span><button class="btn" type="button" id="hStart" style="max-width:260px">Start a new game</button></div>`;$("hStart").onclick=startWizard;return}
  const N=H.map(stats),games=H.length,vs=allVisits(),bars=vs.length,uniq=new Set(vs.map(x=>x.b.id)).size,TI=H.map((r,i)=>!r.noLoc);
  const tracked=TI.filter(Boolean).length||1,dist_=N.reduce((s,x,i)=>s+(TI[i]?x.total:0),0),tv=vs.filter(x=>!x.r.noLoc),atBars=tv.reduce((s,x)=>s+x.ms,0),mk=monthTxt(now()),thisMonth=H.filter(r=>monthTxt(rt(r,r.startedAt))===mk).length;
  const recs=records();
  b.innerHTML=`<div class="cityrow"><h1 class="q">My Tab</h1><button class="gear tabgear" type="button" data-gear aria-label="Settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></button></div>
    <div class="grid2 hstats">
      <button class="stat tap" type="button" id="hCrawls"><small>Crawls <span class="chev">›</span></small><b>${games}</b><em>${thisMonth?thisMonth+" this month":"Last: "+dateTxt(rt(H[0],H[0].startedAt))}</em></button>
      <button class="stat tap" type="button" id="hVisits"><small>Bar visits <span class="chev">›</span></small><b>${bars}</b><em>Avg ${+(bars/games).toFixed(1)} a crawl</em></button>
      <button class="stat tap" type="button" id="hDist"><small>Distance <span class="chev">›</span></small><b>${TI.some(Boolean)?km(dist_):"—"}</b><em>${TI.some(Boolean)?"Avg "+km(dist_/tracked)+" a crawl":"Needs location"}</em></button>
      <button class="stat tap" type="button" id="hTime"><small>Time at bars <span class="chev">›</span></small><b>${tv.length?hmm(atBars):"—"}</b><em>${tv.length?"Avg "+hmm(atBars/tv.length)+" a bar":"Needs location"}</em></button>
    </div>
    ${recs.length?`<div class="eyebrow hsec">Personal bests</div><div class="recs">${recs.map(x=>`<button class="rec" type="button" ${x.bar?`data-bar="${x.bar}"`:`data-id="${x.id}"`}><span class="t"><small>${x.lbl}</small><span>${x.sub}</span></span><b>${x.v}</b><span class="chev">›</span></button>`).join("")}</div>`:""}`;
  b.querySelectorAll(".rec[data-id]").forEach(x=>x.onclick=()=>{S.lastEnd=x.dataset.id;go("end")});
  b.querySelectorAll(".rec[data-bar]").forEach(x=>x.onclick=()=>{const v=byId(x.dataset.bar);if(v)barSheet(v)});
  $("hCrawls").onclick=()=>crawlsSheet();
  $("hVisits").onclick=()=>visitsSheet();
  $("hDist").onclick=()=>crawlStatSheet("dist");$("hTime").onclick=()=>crawlStatSheet("time");
}
// ⋯ on a crawl: name it, move it between real and test, or delete it
const IC={edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/></svg>',
  swap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4L3 8l4 4"/><path d="M3 8h14"/><path d="M17 20l4-4-4-4"/><path d="M21 16H7"/></svg>',
  bin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M10 11v6M14 11v6"/><path d="M6 7l1 13h10l1-13"/><path d="M9 7V4h6v3"/></svg>'};
function crawlMenu(r){const n=stats(r).counted.length,isT=!!r.test;
  sheet(`<h3>${r.title?esc(r.title):dateTxt(rt(r,r.startedAt))}</h3><p class="note">${modeTxt(r)} · ${n} bar${n===1?"":"s"}${r.title?" · "+dateTxt(rt(r,r.startedAt)):""}</p>
    <div class="menu">
      <button type="button" id="cmMedia" hidden>${I.camera}<span>Photos &amp; clips<small id="cmMediaS"></small></span></button>
      <button type="button" id="cmName">${IC.edit}<span>${r.title?"Rename":"Name this crawl"}<small>Shows on your tab instead of the date</small></span></button>
      <button type="button" id="cmMove">${IC.swap}<span>${isT?"Move to real crawls":"Move to test crawls"}<small>${isT?"Goes on your tab and counts in your stats":"Takes it off your tab and out of your stats"}</small></span></button>
      <button type="button" id="cmDel" class="danger">${IC.bin}<span>Delete crawl<small>You can undo for a few seconds</small></span></button>
    </div>`,()=>{
    $("cmName").onclick=()=>nameCrawl(r);
    clipList(r.id).catch(()=>[]).then(L=>{const np=(r.photos||[]).length,b=$("cmMedia");if(!b||!(np+L.length))return;b.hidden=false;
      $("cmMediaS").textContent=[np?np+" photo"+(np===1?"":"s"):"",L.length?L.length+" clip"+(L.length===1?"":"s"):""].filter(Boolean).join(" · ");b.onclick=()=>{closeSheet();mediaView(r)}});
    $("cmMove").onclick=()=>{closeSheet();moveCrawl(r)};
    $("cmDel").onclick=()=>{closeSheet();deleteCrawl(r)};
  })}
function nameCrawl(r){
  sheet(`<h3>Name this crawl</h3><input id="cnIn" class="cnin" type="text" maxlength="40" placeholder="${esc(dateTxt(rt(r,r.startedAt)))}" value="${esc(r.title||"")}" enterkeyhint="done" autocomplete="off">
    <div class="acts"><button class="btn" type="button" id="cnSave">Save</button>${r.title?`<button class="btn line" type="button" id="cnClr">Remove name</button>`:""}</div>`,()=>{
    const q=$("cnIn");setTimeout(()=>{q.focus();q.select()},120);
    const done=v=>{v=(v||"").trim();if(v)r.title=v;else delete r.title;saveH();closeSheet();render()};
    $("cnSave").onclick=()=>done(q.value);q.onkeydown=e=>{if(e.key==="Enter")done(q.value)};
    if($("cnClr"))$("cnClr").onclick=()=>done("");
  })}
function moveCrawl(r){const i=H.findIndex(x=>x.id===r.id);if(i<0)return;
  H.splice(i,1);saveH();r.test=!r.test;const k=r.test?TKEY:HKEY,L=readH(k);L.push(r);L.sort((a,b)=>b.startedAt-a.startedAt);writeH(k,L);
  if(S.lastEnd===r.id){S.lastEnd=null;save()}
  go("hist");toast(`<span>Moved to ${r.test?"test":"real"} crawls</span><button type="button" class="tundo">Undo</button>`,6000,t=>{t.querySelector(".tundo").onclick=()=>{
    const L2=readH(k).filter(x=>x.id!==r.id);writeH(k,L2);r.test=!r.test;H.splice(Math.min(i,H.length),0,r);saveH();hideToast();render()}})}
function deleteCrawl(r){const i=H.findIndex(x=>x.id===r.id);if(i<0)return;
  H.splice(i,1);saveH();if(S.lastEnd===r.id){S.lastEnd=null;save()}let undone=false;
  go("hist");toast(`<span>Crawl deleted</span><button type="button" class="tundo">Undo</button>`,6000,t=>{t.querySelector(".tundo").onclick=()=>{undone=true;H.splice(Math.min(i,H.length),0,r);saveH();hideToast();render()}});
  // its clips go once the undo has passed
  setTimeout(()=>{if(undone||H.some(x=>x.id===r.id))return;clipList(r.id).then(L=>L.forEach(c=>clipDel(c.id))).catch(()=>{})},7000)}
// Every bar visit, like a ride history: by month, newest first. Second tab ranks the rooftops.
function visitsSheet(){
  const vs=allVisits(),uniq=new Set(vs.map(x=>x.b.id)).size,atBars=vs.reduce((s,x)=>s+x.ms,0),yr=String(new Date(now()).getFullYear());let m=null;
  const list=vs.map(x=>{const mm=monthTxt(x.t),[mo,y]=mm.split(" "),head=mm!==m?`<div class="vmon"><span>${mo}${y!==yr?" "+y:""}</span></div>`:"";m=mm;
    return head+`<button class="vrow" type="button" data-b="${x.b.id}">${vthumb(x.b)}<span class="t"><b>${esc(x.b.name)}${S.fav[x.b.id]?` <i class="fv">${HRTF}</i>`:""}</b><small>${dateTxt(x.t)} · ${clock12(sydAt(x.t).min)} · ${x.r.mode==="cruise"?"R&amp;R":LEN(x.r.len)}</small></span><span class="chev vch">›</span></button>`}).join("");
  sheet(`<h3>Bar visits</h3><p class="note vsum">${vs.length} visits · ${uniq} rooftop${uniq===1?"":"s"}</p><div class="vlist2">${list}</div>`,()=>{
    $("sheet").classList.add("full");$("sheet").scrollTop=0;
    $("sheetBody").querySelectorAll("[data-b]").forEach(x=>x.onclick=()=>{const v=byId(x.dataset.b);if(v)barSheet(v,null,{back:visitsSheet,backTxt:"Bar visits"})});
  });
}
function crawlsSheet(){const N=H.map(stats);let m=null;const yr=String(new Date(now()).getFullYear());
  const rows=H.map((r,i)=>{const st=N[i],bod=r.barOfDay?byId(r.barOfDay):null,nw=(r.newIds||[]).length,mm=monthTxt(rt(r,r.startedAt)),[mo,y]=mm.split(" "),head=mm!==m?`<div class="vmon"><span>${mo}${y!==yr?" "+y:""}</span></div>`:"";m=mm;
    return head+`<button class="hrow" type="button" data-id="${r.id}"><span class="n">${st.counted.length}</span><span class="t"><b>${r.title?esc(r.title):dateTxt(rt(r,r.startedAt))+" · "+modeTxt(r)}${nw?`<span class="newpill">+${nw} new</span>`:""}</b><small>${r.title?dateTxt(rt(r,r.startedAt))+" · "+modeTxt(r)+" · ":""}${esc(r.areas.filter((a,j)=>a!==r.areas[j-1]).join(" → "))} · ${km(st.total)}${bod?" · ★ "+esc(bod.name):""}</small></span>${r.photo?`<img src="${r.photo}" alt="">`:""}</button>`}).join("");
  sheet(`<h3>Crawls</h3><p class="note vsum">Tap one to see it. Hold for options.</p><div class="clist">${rows}</div>`,()=>{
    $("sheet").classList.add("full");$("sheet").scrollTop=0;
    $("sheetBody").querySelectorAll(".hrow").forEach(x=>{x.onclick=()=>{closeSheet();S.lastEnd=x.dataset.id;go("end")};longPress(x,()=>{const r=H.find(y=>y.id===x.dataset.id);if(r)crawlMenu(r)})})})}
// Distance or time, crawl by crawl. Tap a crawl for its legs (distance) or its bars (time).
function crawlStatSheet(kind,id){
  const isD=kind==="dist",N=H.filter(r=>!r.noLoc).map(r=>({r,st:stats(r)})),val=x=>isD?x.st.total:x.st.counted.reduce((s,v)=>s+Math.max(0,(v.leftAt||x.r.endedAt)-v.arrivedAt),0),fmt=isD?km:hmm,lbl=isD?"Distance":"Time at bars";
  const name=r=>r.title?esc(r.title):dateTxt(rt(r,r.startedAt));
  if(id){const x=N.find(o=>o.r.id===id);if(!x){crawlStatSheet(kind);return}const r=x.r,st=x.st;
    let rows;
    if(isD){const pts=[{name:"Start"}].concat(st.arrived.map(v=>byId(v.id)));
      rows=st.arrived.map((v,i)=>{const leg=st.legs?st.legs[i]:null,d=leg?leg.d:dist(i?byId(st.arrived[i-1].id):r.startPos,byId(v.id))*1.3;
        return `<div class="srow"><span class="t"><small>${i?esc(pts[i].name):"Start"} →</small><b>${esc(byId(v.id).name)}</b></span><span class="d">${mOrKm(d)}</span></div>`}).join("")}
    else rows=st.arrived.map((v,i)=>{const ms=Math.max(0,(v.leftAt||r.endedAt)-v.arrivedAt),b_=byId(v.id);
        return `<div class="srow${v.counted===true?"":" x"}"><span class="t"><small>Bar ${i+1}${v.counted===true?"":" · didn't count"}</small><b>${esc(b_.name)}</b></span><span class="d">${hmm(ms)}</span></div>`}).join("");
    sheet(`<button class="txtbtn bsback" type="button" id="csBack">‹ ${lbl}</button><h3>${name(r)}</h3><p class="note vsum">${modeTxt(r)} · ${fmt(val(x))}${isD?"":" at "+st.counted.length+" bar"+(st.counted.length===1?"":"s")}</p>
      <div class="slist">${rows||'<p class="note">No bars on this one.</p>'}</div><button class="btn line" type="button" id="csOpen" style="margin-top:14px">See the whole crawl</button>`,()=>{
      $("csBack").onclick=()=>crawlStatSheet(kind);$("csOpen").onclick=()=>{closeSheet();S.lastEnd=r.id;go("end")}});
    return}
  const tot=N.reduce((s,x)=>s+val(x),0);
  sheet(`<h3>${lbl}</h3><p class="note vsum">${fmt(tot)} across ${N.length} crawl${N.length===1?"":"s"} · ${fmt(tot/Math.max(1,N.length))} a crawl</p>
    <div class="vlist2">${N.map(x=>`<button class="vrow" type="button" data-cs="${x.r.id}"><span class="n2">${x.st.counted.length}</span><span class="t"><b>${name(x.r)}</b><small>${modeTxt(x.r)}${x.r.title?" · "+dateTxt(rt(x.r,x.r.startedAt)):""}</small></span><span class="d">${fmt(val(x))}</span></button>`).join("")}</div>`,()=>{
    $("sheet").classList.add("full");$("sheet").scrollTop=0;
    $("sheetBody").querySelectorAll("[data-cs]").forEach(b_=>b_.onclick=()=>crawlStatSheet(kind,b_.dataset.cs))});
}

/* ---------- back up / restore: crawls, stats and lists as one file ---------- */
function backupTab(){track("backup");
  const keep=["been","nfu","want","fav","names","clipAuto","camLight","sound","vib","last"],st={};keep.forEach(k=>{if(S[k]!==undefined)st[k]=S[k]});
  const data={app:"rooftop-roulette",kind:"tab-backup",v:1,at:Date.now(),history:readH(HKEY),settings:st},d=new Date(),name=`rooftop-roulette-backup-${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}.json`;
  const blob=new Blob([JSON.stringify(data)],{type:"application/json"});
  // in the app: the phone's share sheet (save to Files or Drive, send it anywhere). On the web: a download (phones won't share .json files)
  if(NATIVE){nativeShare(blob,name,"My Tab backup").catch(e=>{if(e&&/cancel/i.test(e.message||""))return;anErr("Backup",(e&&e.message)||String(e),e&&e.stack);toast("Couldn't back up your tab.",3500)});return}
  try{const u=URL.createObjectURL(blob),a=document.createElement("a");a.href=u;a.download=name;a.rel="noopener";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),60000);toast("Backup saved to your downloads.",3000)}
  catch(e){anErr("Backup",e.message,e.stack);toast("Couldn't back up your tab.",3500)}}
function restoreTab(){const i=document.createElement("input");i.type="file";i.accept="application/json,.json";
  i.onchange=()=>{const f=i.files&&i.files[0];if(!f)return;f.text().then(t=>{let d;try{d=JSON.parse(t)}catch(e){d=null}
    if(!d||d.kind!=="tab-backup"||!Array.isArray(d.history)){toast("That's not a Rooftop Roulette backup.",3500);return}
    const cur=readH(HKEY),ids=new Set(cur.map(r=>r.id)),add=d.history.filter(r=>r&&r.id&&!ids.has(r.id));
    sheet(`<h3>Restore My Tab?</h3><p class="note">${add.length?`Adds ${add.length} crawl${add.length===1?"":"s"} from ${new Date(d.at).toLocaleDateString("en-AU",{day:"numeric",month:"short",year:"numeric"})}. Nothing already on this phone is removed.`:"Everything in this backup is already on this phone."}</p><div class="acts">${add.length?`<button class="btn" type="button" id="rsY">Restore</button>`:""}<button class="btn line" type="button" id="rsN">${add.length?"Cancel":"Close"}</button></div>`,()=>{
      $("rsN").onclick=closeSheet;
      if($("rsY"))$("rsY").onclick=()=>{const all=cur.concat(add).sort((x,y)=>y.startedAt-x.startedAt);writeH(HKEY,all);
        const st=d.settings||{};["been","nfu","want","fav"].forEach(k=>{if(st[k]&&typeof st[k]==="object")S[k]=Object.assign({},st[k],S[k]||{})});save();
        if(!hTest){H=readH(HKEY)}closeSheet();toast(`Restored ${add.length} crawl${add.length===1?"":"s"}.`,3000);render()}})})};
  i.click()}

/* ---------- settings (the gear) ---------- */
// Settings: a full page that slides in from the right (back arrow, or the phone's back gesture, to close).
// Grouped like the phone's own settings; links and version at the bottom.
const IGI='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".6" fill="currentColor"/></svg>';
const TTI='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 3c.3 2.2 1.6 3.7 3.9 3.9v3.2c-1.4.1-2.7-.3-3.9-1.1v5.9c0 3.6-2.6 6.1-6 6.1-3.3 0-5.9-2.6-5.9-5.8 0-3.6 3.1-6.3 6.8-5.7v3.3c-1.6-.4-3.3.6-3.3 2.4 0 1.4 1.1 2.5 2.5 2.5 1.6 0 2.6-1.1 2.6-2.8V3z"/></svg>';
function settingsSheet(){
  let pg=$("setPage");const fresh=!pg;
  if(fresh){pg=document.createElement("div");pg.id="setPage";pg.className="setpage";document.body.appendChild(pg);
    try{history.pushState({setPage:1},"")}catch(e){}requestAnimationFrame(()=>requestAnimationFrame(()=>pg.classList.add("on")))}
  if($("sheet").open)closeSheet();
  const tg=(id,on,t,sub)=>`<button class="strow tgl" type="button" id="${id}" role="switch" aria-checked="${!!on}"><span class="t"><b>${t}</b>${sub?`<small>${sub}</small>`:""}</span><span class="sw"></span></button>`;
  const lk=(id,t,val,cls)=>`<button class="strow${cls?" "+cls:""}" type="button" id="${id}"><span class="t"><b>${t}</b></span>${val!=null?`<span class="sval" id="${id}S">${val}</span>`:""}<i class="chev">›</i></button>`;
  const grp=(h,rows)=>rows.filter(Boolean).length?`<div class="sgh">${h}</div><div class="sgrp">${rows.filter(Boolean).join("")}</div>`:"";
  const nT=readH(TKEY).length,live=!!(S.game&&S.game.started&&!S.game.ended),plat=anPlat(),top=pg.querySelector(".spbody")?pg.querySelector(".spbody").scrollTop:0;
  pg.innerHTML=`<div class="sphead"><button class="spback" type="button" id="spBack" aria-label="Back">${I.back}</button><b>Settings</b></div><div class="spbody">
    ${grp("Sound and vibration",[tg("stSound",S.sound,"Sound"),tg("stVib",S.vib!==false,"Vibration")])}
    ${grp("Photos and clips",[NATIVE?tg("stGal",S.clipAuto!==false,"Save to gallery","Photos and clips you take in the app"):"",lk("stClips","Clips on this phone","")])}
    ${grp("Your tab",[lk("stBk","Back up My Tab"),lk("stRs","Restore My Tab")])}
    ${grp("Privacy",[tg("stAn",!S.anOff,"Share usage data","Anonymous. Never names, locations, photos or clips"),lk("stPerm","Permissions"),lk("stPriv","Privacy policy")])}
    ${grp("Help",[live?"":lk("stHow","How to play"),lk("stSup","Contact us"),lk("stTerms","Terms of use")])}
    ${grp("Testing",[tg("stTest",S.test,"Test mode","Tap the map to move. Test crawls stay off your tab"),nT?lk("stClr","Clear test crawls",String(nT),"danger"):""])}
    <div class="spfoot"><div class="spsoc"><button type="button" id="stIG" aria-label="Instagram">${IGI}</button><button type="button" id="stTT" aria-label="TikTok">${TTI}</button></div>
      ${plat==="android"?`<button class="txtbtn sprate" type="button" id="stRate">Rate Rooftop Roulette</button>`:""}
      <p class="setv">Rooftop Roulette · v70-9</p></div></div>`;
  pg.querySelector(".spbody").scrollTop=top;
  const ext=u=>{try{window.open(u,"_blank","noopener")}catch(e){location.href=u}};
  $("spBack").onclick=()=>{try{if(history.state&&history.state.setPage)history.back();else closeSettings()}catch(e){closeSettings()}};
  $("stSound").onclick=()=>{S.sound=!S.sound;save();settingsSheet()};
  $("stVib").onclick=()=>{S.vib=S.vib===false;save();if(S.vib)buzz(30);settingsSheet()};
  if($("stGal"))$("stGal").onclick=()=>{S.clipAuto=S.clipAuto===false;save();settingsSheet()};
  $("stAn").onclick=()=>{if(!S.anOff){track("analytics_off");S.anOff=true}else{S.anOff=false;save();track("analytics_on")}save();settingsSheet()};
  $("stBk").onclick=()=>backupTab();$("stRs").onclick=()=>restoreTab();
  clipAll().then(L=>{const el=$("stClipsS");if(!el)return;const bytes=L.reduce((t,c)=>t+(c.blob&&c.blob.size||0),0);
    el.textContent=L.length?`${L.length} · ${mbTxt(bytes)}`:"None";$("stClips").onclick=()=>{if(L.length)clipsClearSheet(L)}});
  $("stPerm").onclick=permSheet;
  $("stPriv").onclick=()=>docPage("privacy.html","Privacy policy");$("stTerms").onclick=()=>docPage("terms.html","Terms of use");
  if($("stHow"))$("stHow").onclick=()=>howToPlay(G()&&CR(G())?"rr":"rush");
  $("stSup").onclick=()=>{const body=`\n\n\n—\nApp ${APPV} · ${plat} · ${anDev.$os} · ${anDev.$browser} · ${innerWidth}×${innerHeight}`;
    location.href=`mailto:${SUPPORT}?subject=${encodeURIComponent("Rooftop Roulette")}&body=${encodeURIComponent(body)}`};
  $("stIG").onclick=()=>ext(IG);$("stTT").onclick=()=>ext(TT);if($("stRate"))$("stRate").onclick=()=>ext(PLAY);
  $("stTest").onclick=()=>{S.test=!S.test;if(!S.test){S.ff=0;S.fake=null;history.replaceState(history.state,"",location.pathname)}save();if(S.game&&!S.test)startWatch();render();settingsSheet()};
  if($("stClr"))$("stClr").onclick=()=>sheet(`<h3>Clear test crawls?</h3><p class="note">All ${nT} test crawls go. Your real tab isn't touched.</p><div class="acts"><button class="btn" type="button" id="stClrY" style="background:var(--red);color:#fff">Clear them</button><button class="btn line" type="button" id="stClrN">Cancel</button></div>`,()=>{
    $("stClrY").onclick=()=>{try{localStorage.removeItem(TKEY)}catch(e){}if(hTest){H.length=0}closeSheet();render();settingsSheet()};$("stClrN").onclick=closeSheet});
}
// Privacy policy and terms open on a page of their own inside the app; back comes back to settings
function docPage(file,title){if($("docPage"))return;const pg=document.createElement("div");pg.id="docPage";pg.className="setpage docpage";
  pg.innerHTML=`<div class="sphead"><button class="spback" type="button" id="dpBack" aria-label="Back">${I.back}</button><b>${title}</b></div><iframe src="${(location.hostname==="localhost"?SITE:"")+file}?embed" title="${title}"></iframe>`;
  document.body.appendChild(pg);try{history.pushState({docPage:1},"")}catch(e){}requestAnimationFrame(()=>requestAnimationFrame(()=>pg.classList.add("on")));
  $("dpBack").onclick=()=>{try{if(history.state&&history.state.docPage)history.back();else closeDoc()}catch(e){closeDoc()}}}
function closeDoc(){const pg=$("docPage");if(!pg)return;pg.id="";pg.classList.remove("on");setTimeout(()=>pg.remove(),260)}
function closeSettings(now_){const pg=$("setPage");if(!pg)return;pg.classList.remove("on");setTimeout(()=>pg.remove(),now_?0:260)}
/* Back: the phone's back gesture or button (and the browser's back) steps back one screen instead of closing the app.
   Order: a page over the app, then a panel, then the screen's own back button, then home. At home it leaves. */
function appBack(){
  if($("docPage")){closeDoc();return true}
  if($("setPage")){closeSettings();return true}
  if(document.querySelector(".jpx")||spinning)return true;   // a spin or the jackpot plays out
  const d=$("sheet");if(d&&d.open){closeSheet();return true}
  if(document.body.classList.contains("camon")&&CAM.once&&!CAM.rec){CAM.once=false;camSync();renderPlay();return true}
  if(S.route==="bars"&&bSearching){setSearching(false);return true}
  if(S.route==="intro"&&(S.intro||0)>0){S.intro--;save();renderIntro();return true}
  const v=$("v-"+S.route),bk=v&&[...v.querySelectorAll('[aria-label="Back"]')].find(x=>x.offsetParent!==null);
  if(bk){bk.click();return true}
  if(!["home","intro","ob"].includes(S.route)){go("home");return true}
  return false}
// In a browser there's nothing to catch the back gesture with, so the app keeps one spare history entry while you're away from home
function backArm(){const C=window.Capacitor;if(C&&C.isNativePlatform&&C.isNativePlatform())return;try{if(!(history.state&&history.state.rrBack))history.pushState({rrBack:1},"")}catch(e){}}
function backNeeded(){return S.route!=="home"||!!($("sheet")&&$("sheet").open)}
addEventListener("popstate",()=>{if($("docPage")){closeDoc();return}if($("setPage")){closeSettings();return}
  if(NATIVE)return;if(appBack()&&backNeeded())backArm()});
if(NATIVE&&CAPX.Plugins&&CAPX.Plugins.App&&CAPX.Plugins.App.addListener)
  CAPX.Plugins.App.addListener("backButton",()=>{if(!appBack())CAPX.Plugins.App.minimizeApp()});
// Clips take space on the phone; clear them by hand (never automatically: some people keep them only here).
function clipsClearSheet(L){const inGal=L.filter(c=>c.gal),sz=a=>mbTxt(a.reduce((t,c)=>t+(c.blob&&c.blob.size||0),0));
  sheet(`<h3>Clips on this phone</h3><p class="note">${L.length} clip${L.length===1?"":"s"} · ${sz(L)}. Clearing them here doesn't touch copies in your photos.</p>
    <div class="acts">${inGal.length?`<button class="btn" type="button" id="ccGal">Clear the ${inGal.length} already in your photos (${sz(inGal)})</button>`:""}
    <button class="btn line" type="button" id="ccAll" style="color:var(--red)">Clear all clips (${sz(L)})</button><button class="btn line" type="button" id="ccNo">Back</button></div>`,()=>{
    const del=a=>Promise.all(a.map(c=>clipDel(c.id))).then(()=>{toast(`Cleared ${a.length} clip${a.length===1?"":"s"}`,2500);closeSheet();if($("setPage"))settingsSheet();if(S.route==="end")renderEnd()});
    if($("ccGal"))$("ccGal").onclick=()=>del(inGal);
    $("ccAll").onclick=()=>sheet(`<h3>Clear all clips?</h3><p class="note">${L.length-inGal.length?`${L.length-inGal.length} of them aren't in your photos, so they'll be gone for good.`:"They're all in your photos too."}</p><div class="acts"><button class="btn" type="button" id="ccY" style="background:var(--red);color:#fff">Clear them</button><button class="btn line" type="button" id="ccN">Cancel</button></div>`,()=>{$("ccY").onclick=()=>del(L);$("ccN").onclick=()=>clipsClearSheet(L)});
    $("ccNo").onclick=closeSheet})}
// What the app is allowed to use, and a way to change it.
// Call a native plugin method whether or not its JS object was set up (the bridge always has nativePromise).
function natCall(plugin,method,opts){const C=window.Capacitor;if(!C||!C.isNativePlatform||!C.isNativePlatform())return Promise.reject(new Error("web"));
  const P=C.Plugins&&C.Plugins[plugin];if(P&&typeof P[method]==="function")return P[method](opts||{});
  if(typeof C.nativePromise==="function")return C.nativePromise(plugin,method,opts||{});return Promise.reject(new Error("no bridge"))}
const openAppSettings=()=>natCall("NativeSettings","open",{optionAndroid:"application_details",optionIOS:"app"});
// light status bar icons on our dark screens (the phone's default follows its own light/dark mode)
if(NATIVE)natCall("SystemBars","setStyle",{style:"DARK"}).catch(()=>{});
// Permissions: apps can only ask; switching one off (or back on after a no) happens in the phone's settings.
// Each row: not asked yet → tap asks; allowed or off → tap opens this app's page in the phone's settings.
async function permSheet(){
  const q=async n=>{if(IOSNAT&&n==="geolocation")return permState();try{return (await navigator.permissions.query({name:n})).state}catch(e){return "unknown"}};
  // Location: ask for a fix (instant if it's been turned off). Camera and mic: only a clear yes shows.
  const locNow=()=>new Promise(r=>{try{navigator.geolocation.getCurrentPosition(()=>r("granted"),e=>r(e&&e.code===1?"denied":"granted"),{maximumAge:600000,timeout:4000})}catch(e){r("unknown")}});
  let [loc,cam,mic]=await Promise.all([NATIVE?locNow():q("geolocation"),q("camera"),q("microphone")]);
  if(NATIVE){if(cam!=="granted")cam="unknown";if(mic!=="granted")mic="unknown"}
  // In the app the web view's answers can lag the phone's real settings, so it only shows a clear yes or no
  const lab=st=>st==="granted"?`<span class="pst ok">On</span>`:st==="denied"?`<span class="pst no">Off</span>`:"";
  const row=(k,t,st)=>`<button class="prow" type="button" data-pm="${k}" data-st="${st}"><b>${t}</b>${lab(st)}<i class="chev">›</i></button>`;
  sheet(`<h3>Permissions</h3>
    <div class="plist">${row("loc","Location",loc)}${row("cam","Camera",cam)}${row("mic","Microphone",mic)}</div>
    <div class="acts">${NATIVE?`<button class="btn" type="button" id="pmOpen">Open phone settings</button>`:""}<button class="btn line" type="button" id="pmBack">Back</button></div>`,()=>{
    const open=()=>openAppSettings().catch(err=>{anErr("SettingsOpen",(err&&err.message)||String(err),err&&err.stack);toast("Couldn't open settings. Go to Settings → Apps → Rooftop Roulette → Permissions.",5000)});
    if($("pmOpen"))$("pmOpen").onclick=open;
    $("pmBack").onclick=closeSheet;
    $("sheetBody").querySelectorAll("[data-pm]").forEach(b=>b.onclick=async()=>{const k=b.dataset.pm,st=b.dataset.st;
      if(NATIVE){open();return}
      if(st==="granted"||st==="denied"){toast("Change this in your browser's site settings.",3500);return}
      try{if(k==="loc")await getOnce();else{const sm=await navigator.mediaDevices.getUserMedia(k==="cam"?{video:true}:{audio:true});sm.getTracks().forEach(t=>t.stop())}}catch(e){}
      permSheet()})});
  if(!permSheet._vis){permSheet._vis=1;document.addEventListener("visibilitychange",()=>{if(!document.hidden&&$("sheet").open&&$("sheetBody").querySelector("[data-pm]"))permSheet()})}
}
document.addEventListener("click",e=>{if(e.target.closest&&e.target.closest("[data-gear]"))settingsSheet()});

/* ---------- test mode ---------- */
$("testFab").onclick=()=>{
  const s=sydAt(now());
  sheet(`<h3>Test mode</h3><p class="note">Sydney ${["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][s.day]} ${clock12(s.min)}${S.ff?` (+${Math.round(S.ff/60000)} min)`:""}. Tap the Rooftops map to move yourself.</p>
   <div class="eyebrow" style="margin:14px 0 8px">Time travel</div><div class="trow">${G()&&G().started?`<span class="note">Finish or end your game first.</span>`:`<button class="btn sm dark" type="button" data-to="4,1080">Friday 6pm</button><button class="btn sm dark" type="button" data-to="5,900">Saturday 3pm</button>`}</div>
   <div class="eyebrow" style="margin:14px 0 8px">Fast-forward</div><div class="trow">${[1,5,15,60].map(m=>`<button class="btn sm dark" type="button" data-ff="${m}">+${m<60?m+" min":"1 hr"}</button>`).join("")}</div>
   ${G()?`<div class="eyebrow" style="margin:14px 0 8px">Move me</div><div class="trow"><button class="btn sm dark" type="button" id="tA">Arrive at target</button><button class="btn sm dark" type="button" id="tL">Leave (200 m)</button></div><div class="trow" style="margin-top:8px"><button class="btn sm dark" type="button" id="tCT">Play the "it counts" animation</button></div>${!CR(G())?`<div class="trow" style="margin-top:8px"><button class="btn sm dark" type="button" id="tJP">${G().jp?"Jackpot used · reset it":"Jackpot on next spin"}</button><button class="btn sm dark" type="button" id="tWC">Wildcard on next spin</button></div>`:""}`:""}
   <div class="eyebrow" style="margin:14px 0 8px">Put me at a bar</div><select id="tJ"><option value="">Choose…</option>${VENUES.slice().sort((a,b)=>a.name.localeCompare(b.name)).map(v=>`<option value="${v.id}">${esc(v.name)}</option>`).join("")}</select>
   <div class="trow" style="margin-top:14px"><button class="btn sm line" type="button" id="tSB">Wheel sandbox</button><button class="btn sm line" type="button" id="tJD">Play the jackpot</button><button class="btn sm line" type="button" id="tR">Real time</button><button class="btn sm line" type="button" id="tF">Replay intro</button><button class="btn sm line" type="button" id="tP">Reset photo limit</button><button class="btn sm line" type="button" id="tX">Reset all</button><button class="btn sm line" type="button" id="tO">Test off</button></div>`,()=>{
    $("sheetBody").querySelectorAll("[data-ff]").forEach(b=>b.onclick=()=>{S.ff=(S.ff||0)+ +b.dataset.ff*60000;save();loop();closeSheet();render()});
    if($("tA"))$("tA").onclick=()=>{const g=G();if(!g||!g.target)return;const v=byId(g.target);S.fake={lat:v.lat+.0002,lng:v.lng};save();closeSheet();animateId="at:"+v.id;onLocation()};
    $("tSB").onclick=()=>{closeSheet();setTimeout(wheelSandbox,250)};
    $("tJD").onclick=()=>{closeSheet();setTimeout(jackpotDemo,250)};
    if($("tCT"))$("tCT").onclick=()=>{const g=G(),a=g&&g.visits.find(v=>v.leftAt==null);if(!a)return;closeSheet();setTimeout(()=>flyToCounter(true),300)};
    if($("tWC"))$("tWC").onclick=()=>{const g=G();g.wplan=(g.wplan||[]).concat([g.visits.length]);g.wild=null;delete g.dealt;save();closeSheet();render()};
    if($("tJP"))$("tJP").onclick=()=>{const g=G();delete g.jp;g.jpLeg=0;save();closeSheet();render()};   // jpLeg 0: the very next spin is the jackpot
    if($("tL"))$("tL").onclick=()=>{const y=you();if(!y)return;S.fake={lat:y.lat+.0018,lng:y.lng};save();closeSheet();onLocation()};
    $("tJ").onchange=e=>{const v=byId(e.target.value);if(v){S.fake={lat:v.lat,lng:v.lng};save();closeSheet();onLocation();render()}};
    $("tR").onclick=()=>{S.ff=0;save();closeSheet();render()};
    $("sheetBody").querySelectorAll("[data-to]").forEach(b=>b.onclick=()=>{const [dd,mm]=b.dataset.to.split(",").map(Number),s0=sydAt(now());let d=((dd-s0.day+7)%7)*1440+(mm-s0.min);if(d<=0)d+=7*1440;S.ff=(S.ff||0)+d*60000;save();closeSheet();render()});
    $("tP").onclick=()=>{try{localStorage.removeItem("rr-ph");localStorage.removeItem("rr-ph-b")}catch(e){}for(const k in phMem)delete phMem[k];closeSheet();render()};
    $("tF").onclick=()=>{S.onboarded=false;S.intro=0;S.tips={};S.seenHow={};save();closeSheet();go("intro")};
    $("tX").onclick=()=>{try{localStorage.removeItem(KEY);localStorage.removeItem(HKEY);localStorage.removeItem(TKEY)}catch(e){}location.reload()};
    $("tO").onclick=()=>{S.test=false;S.ff=0;S.fake=null;save();history.replaceState(null,"",location.pathname);closeSheet();if(S.game)startWatch();render()};
  });
};

/* ---------- loop ---------- */

/* ---------- notifications (phone app only) ----------
   Live: one silent, ongoing notification while a crawl is on (CrawlNotify, our own small Android plugin).
     The timed game counts down with a bar that shrinks; R&R counts up from when you got to the bar.
   Alerts (LocalNotifications, set ahead so they arrive with the app closed): 10 minutes left and time's up in the timed game,
     check-in open when you're checking in by hand, and the day after a crawl, a look back at it. */
const NOTE={live:"",liveAt:0,alerts:"",ready:false};
const realAt=t=>t-(now()-Date.now());   // game time -> the phone's clock (test mode can run ahead)
const LEN=m=>m%60===0?`${m/60} hr`:`${m} min`;   // the timed game goes by its length: "1 hr", "2 hr"
const plural=(n,w)=>`${n} ${w}${n===1?"":"s"}`;
function noteSetup(){if(NOTE.ready||!NATIVE)return;NOTE.ready=true;
  natCall("LocalNotifications","createChannel",{id:"crawl_alerts",name:"Crawl alerts",description:"Time warnings and check-ins during a crawl",importance:4,visibility:1,vibration:true}).catch(()=>{});
  natCall("LocalNotifications","createChannel",{id:"crawl_after",name:"After a crawl",description:"A look back the day after",importance:3,visibility:1}).catch(()=>{});
  try{const LN=window.Capacitor&&Capacitor.Plugins&&Capacitor.Plugins.LocalNotifications;
    if(LN&&LN.addListener)LN.addListener("localNotificationActionPerformed",e=>{const id=e&&e.notification&&e.notification.extra&&e.notification.extra.crawl;
      if(id&&!S.game&&(H.some(r=>r.id===id)||readH(TKEY).some(r=>r.id===id))){S.lastEnd=id;save();closeSheet();go("end")}})}catch(e){}}
// "End crawl" on the notification opens the app on the end-the-crawl question (so a stray tap can't end it)
{const CN=window.Capacitor&&Capacitor.Plugins&&Capacitor.Plugins.CrawlNotify;
  if(NATIVE&&CN&&CN.addListener)CN.addListener("crawlAction",e=>{if(!S.game||!e)return;closeSheet();go("play");
    if(e.action==="end")setTimeout(()=>{openMenu();setTimeout(()=>{const b=$("mEnd");if(b)b.click()},60)},250)})}
function liveNote(){
  if(!NATIVE)return;const g=G();
  if(!g||g.demo||!g.started||g.ended){if(NOTE.live){NOTE.live="";natCall("CrawlNotify","clear").catch(()=>{})}return}
  noteSetup();
  if(!S.notifAsked){S.notifAsked=1;save();natCall("LocalNotifications","requestPermissions").catch(()=>{})}   // the phone's own prompt, first crawl only
  const cr=CR(g),a=atVisit(),y=you(),mode=cr?"R&R":LEN(g.len)+" game";let title,text;
  if(a){title=`At ${byId(a.id).name}`;text=cr?mode:`${mode} · here ${Math.max(0,Math.floor((now()-a.arrivedAt)/60000))} min`}
  else if(g.target){const v=byId(g.target);title=`Heading to ${v.name}`;text=mode+(y?` · ${kmTxt(dist(y,v)/1000)} away`:"")}
  else{title="Spin for the next one";text=`${mode} · ${plural(countShown(g),"bar")}`}
  const o={title,text};
  if(!cr){o.endsAt=Math.round(realAt(g.endsAt));o.max=1000;o.progress=Math.round(1000*Math.max(0,g.endsAt-now())/Math.max(1,g.endsAt-g.startedAt))}
  else if(a)o.since=Math.round(realAt(a.arrivedAt));
  const key=JSON.stringify([o.title,o.text,o.endsAt,o.since]);
  if(key===NOTE.live&&Date.now()-NOTE.liveAt<60000)return;   // text changes go straight out; the bar moves once a minute
  NOTE.live=key;NOTE.liveAt=Date.now();natCall("CrawlNotify","update",o).catch(()=>{})}
function alertSync(){
  if(!NATIVE)return;const g=G(),on=g&&!g.demo&&g.started&&!g.ended,want=[];
  if(on&&!CR(g)){const n=countShown(g);
    if(g.endsAt-now()>10.5*60000)want.push({id:101,title:"10 minutes left",body:`${plural(n,"bar")} so far.`,at:realAt(g.endsAt-600000)});
    want.push({id:102,title:"Time's up",body:"Tap to see how you went.",at:realAt(g.endsAt)})}
  if(on&&g.noLoc&&g.target&&!atVisit()){const t=hereAt(g);if(t>now())want.push({id:103,title:"Check-in's open",body:`Tap I'm here once you're at ${byId(g.target).name}.`,at:realAt(t)})}
  const key=JSON.stringify(want.map(w=>[w.id,w.body,Math.round(w.at/10000)]));if(key===NOTE.alerts)return;NOTE.alerts=key;noteSetup();
  natCall("LocalNotifications","cancel",{notifications:[{id:101},{id:102},{id:103}]}).catch(()=>{}).then(()=>{
    const L=want.filter(w=>w.at>Date.now()+5000).map(w=>({id:w.id,title:w.title,body:w.body,channelId:"crawl_alerts",smallIcon:"ic_stat_rr",iconColor:"#F5B83D",schedule:{at:new Date(w.at),allowWhileIdle:true}}));
    if(L.length)natCall("LocalNotifications","schedule",{notifications:L}).catch(()=>{})})}
// The day after: which day, how many, which bars. Reads the same whether or not they've looked at the card since.
function afterNote(rec){
  if(!NATIVE||!rec)return;const names=rec.visits.filter(v=>v.counted===true).map(v=>byId(v.id)).filter(Boolean).map(v=>v.name);if(!names.length)return;
  const st=new Date(realAt(rec.startedAt)),at=new Date(st.getFullYear(),st.getMonth(),st.getDate()+1,10,0,0);if(at.getTime()<Date.now()+30*60000)return;
  const day=st.toLocaleDateString("en-AU",{weekday:"long"}),u=[...new Set(names)];
  const list=u.length<=3?(u.length>1?u.slice(0,-1).join(", ")+" and "+u[u.length-1]:u[0]):u.slice(0,3).join(", ")+` and ${u.length-3} more`;
  noteSetup();natCall("LocalNotifications","schedule",{notifications:[{id:104,title:`${day}'s crawl: ${plural(u.length,"rooftop")}`,body:list+".",channelId:"crawl_after",smallIcon:"ic_stat_rr",iconColor:"#F5B83D",extra:{crawl:rec.id},schedule:{at,allowWhileIdle:true}}]}).catch(()=>{})}
function loop(){
  liveNote();alertSync();if(S.route!=="play")renderMini();
  const g=G();
  if(g&&g.started&&!g.ended&&now()>=g.endsAt){endGame(g.endsAt);return}
  if(CR(g)&&g.started&&!g.ended&&g.autoAt&&now()>=g.autoAt){g.autoEnded=true;endGame(g.autoAt);return}
  if(S.route==="play"&&g&&g.noLoc&&g.target){const hb=$("hereBtn");if(hb&&hb.classList.contains("locked")){if(now()>=hereAt(g)){hb.classList.remove("locked");hb.setAttribute("aria-disabled","false");hb.innerHTML=hereLbl(g);buzz(20)}else hb.innerHTML=hereLbl(g)}}
  if(S.route==="play"&&g){
    renderClock();const a=atVisit(),d=$("dwell");if(a&&d)d.textContent=CR(g)&&now()-a.arrivedAt>=3600000?hmm(now()-a.arrivedAt):mmss(now()-a.arrivedAt);
    if(a&&!spinning&&(now()-a.arrivedAt)>=DWELL_MIN*60000&&!a._shown){a._shown=1;renderPlay()}
    if(a&&!spinning&&!a._flew&&(now()-a.arrivedAt)>=DWELL_MIN*60000&&!$("sheet").open&&!g.reelOpen)flyToCounter();
    if(CR(g)&&g.nudge&&a&&!a._nudged&&!document.hidden&&now()-a.arrivedAt>=g.nudge*60000){a._nudged=1;save();ding();buzz([80,60,80]);if(!spinning)renderPlay()}
    if(a&&!spinning&&(now()-a.arrivedAt)<DWELL_MIN*60000&&$("cantBtn")===null&&false)renderPlay();
    if(!spinning&&g.started&&remaining()<=FINAL*60000&&!g.shownFinal)renderPlay();
    if(g.started&&!spinning){const r=remaining();if(r>0&&r<=10000)tick(1200)}
    if(!spinning&&g.target&&needManual(g)!==!!g._man)renderPlay();
    if(!CR(g)&&g.jp&&!g.jp.claimed&&!spinning&&!$("sheet").open)jackpotSheet();
    if(g.wild&&!g.wild.shown&&!g.wild.dealing&&g.target===g.wild.id&&!spinning&&Date.now()>revealEnd&&!document.querySelector(".jpx"))dealWild(0);
  }
}
setInterval(loop,1000);setInterval(()=>{if(!document.hidden)markSeen()},15000);addEventListener("pagehide",markSeen);
document.addEventListener("visibilitychange",()=>{
  if(document.hidden){const d_=leaving();if(d_){d_.hid=now();save()}markSeen();return}
  awayGap=S.seenAt?Date.now()-S.seenAt:0;resumedAt=Date.now();
  if(!S.game&&(S.test||navigator.geolocation)){const c0=S.city;permState().then(st=>{if(st==="granted"||S.test)getOnce().then(()=>{if(S.city!==c0)render()}).catch(()=>{})})}
  const g=G();
  if(g&&g.celebrate){const a=g.visits.find(v=>v.leftAt==null);
    // arrived while the phone was away: if it already counts, one quick beat; otherwise the usual arrival
    if(a&&a.id===g.celebrate&&now()-a.arrivedAt>=DWELL_MIN*60000)setTimeout(()=>catchUp(g.celebrate),200);else setTimeout(()=>celebrate(g.celebrate),350)}
  else if(S.route==="play")renderPlay();
  loop();
});

/* ---------- boot ---------- */
if(S.game&&!S.test&&!S.game.demo)startWatch();
if(S.test&&!S.game&&S.fake){S.fake=null;save()}
if(navigator.permissions&&navigator.geolocation)permState().then(s=>{if(s==="granted")getOnce().then(()=>{render();[zMap,bMap].forEach(setMe)}).catch(()=>{})});
if(S.onboarded&&S.route!=="intro"){S.route=S.game?"play":"home";save()}   // a fresh open always lands on Play
render();loop();setTimeout(refreshVenues,1500);openSharedFromHash();addEventListener("hashchange",openSharedFromHash);track("app_open",{city:S.city||null,returning:!!(H&&H.length)});pageView(S.route||"home");document.addEventListener("visibilitychange",()=>{if(!document.hidden)refreshVenues()});
if("serviceWorker" in navigator&&location.protocol==="https:")navigator.serviceWorker.register("sw.js").catch(()=>{});
// Phones keep the app open in the background for days. Coming back to it (not mid-crawl), pick up a newer version if there is one.
{let hidAt=0;document.addEventListener("visibilitychange",()=>{if(document.hidden){hidAt=Date.now();return}
  if(!hidAt||Date.now()-hidAt<5000||location.protocol!=="https:"||(S.game&&S.game.started&&!S.game.ended)||$("sheet").open)return;
  fetch("sw.js",{cache:"no-store"}).then(r=>r.text()).then(t=>{const m=t.match(/rr-app-(v[\d-]+)/);if(m&&m[1]!==APPV)location.reload()}).catch(()=>{})})}
