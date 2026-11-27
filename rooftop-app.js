"use strict";
// Store builds carry the game inside the app (served from the phone, not the website). Anything that
// depends on the address it runs from checks this.
const BUNDLED=(()=>{try{const C=window.Capacitor;return !!(C&&C.isNativePlatform&&C.isNativePlatform())&&!/^(www\.)?rooftoproulette\.com$|github\.io$/.test(location.hostname)}catch(e){return false}})();
const VENUES=[{"id":"untied","name":"Untied","area":"Barangaroo","lat":-33.865555,"lng":151.201996,"rating":4.7,"address":"Level 4, 400 Barangaroo Ave","hours":[[[720,1320]],[[720,1320]],[[720,1320]],[[720,1320]],[[720,1440]],[[720,1440]],[[720,1260]]],"pid":"ChIJF9mEdEeuEmsRO3QF3fOwfs8","vibe":"Bottomless brunch"},{"id":"jimmy-s-rooftop","name":"Jimmy's Rooftop","area":"Sydney CBD","lat":-33.866292,"lng":151.207502,"rating":4.3,"address":"Level 4, 320 George St","hours":[[],[[720,1440]],[[720,1440]],[[720,1620]],[[720,1620]],[[720,1620]],[[960,1320]]],"pid":"ChIJTRT8DNKvEmsRzIMltEcEzRY","vibe":"Rooftop pool","fact":"Used to be Ivy Pool Club. The pool stayed."},{"id":"sora-rooftop-bar","name":"Sora Rooftop Bar","area":"Sydney CBD","lat":-33.872503,"lng":151.205453,"rating":4.3,"address":"Level 9, 285 Clarence St","hours":[[],[[960,1380]],[[960,1380]],[[960,1380]],[[720,1560]],[[720,1560]],[]],"pid":"ChIJIZl-CeivEmsR8QKYWFwFa0w","vibe":"DJs on weekends"},{"id":"above-319","name":"Above 319","area":"Sydney CBD","lat":-33.875183,"lng":151.204269,"rating":4.2,"address":"Rooftop, 319 Sussex St","hours":[[],[],[[990,1260]],[[990,1260]],[[990,1380]],[[780,1380]],[[780,1200]]],"pid":"ChIJN_enO-GvEmsRDjvdxEZSBmo","vibe":"Bottomless margs"},{"id":"harper-rooftop","name":"Harper Rooftop","area":"Sydney CBD","lat":-33.874979,"lng":151.207602,"rating":3.7,"address":"Level 7, 339 Pitt St","hours":[[],[],[[960,1380]],[[960,1380]],[[960,1380]],[[720,1380]],[[720,1380]]],"pid":"ChIJu0OKArCvEmsRfENSCqhDNDA","vibe":"Huge rooftop + pool"},{"id":"j-ji","name":"Jōji","area":"Sydney CBD","lat":-33.868396,"lng":151.207405,"rating":4.6,"address":"Level 5, 388 George St","hours":[[[960,1380]],[[720,1380]],[[720,1440]],[[720,1500]],[[720,1500]],[[720,1560]],[[960,1380]]],"pid":"ChIJ3eP7NQCvEmsRC-Yj4qiks8U","vibe":"Japanese + DJs"},{"id":"the-rook","name":"The Rook","area":"Sydney CBD","lat":-33.86973,"lng":151.20635,"rating":4.4,"address":"Level 7, 56 York St","hours":[[[720,1320]],[[720,1320]],[[720,1320]],[[720,1380]],[[720,1440]],[[720,1440]],[]],"pid":"ChIJs-zIED-uEmsRsHT2GJUVTUQ","vibe":"Great cocktails"},{"id":"babylon-rooftop","name":"Babylon Rooftop","area":"Sydney CBD","lat":-33.869726,"lng":151.208454,"rating":4.2,"address":"Level 7, 182 Pitt St","hours":[[[720,1320]],[[720,1380]],[[720,1380]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1320]]],"pid":"ChIJ1bVicD6uEmsR84q2UI62xC4","vibe":"Middle Eastern food"},{"id":"the-rooftop-sydney","name":"The Rooftop Sydney","area":"Sydney CBD","lat":-33.871149,"lng":151.204121,"rating":4.1,"address":"Shelbourne Hotel, 200 Sussex St","hours":[[],[],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[]],"pid":"ChIJSSLfNjmuEmsRCtzLzCGEwDY","vibe":"Quiet for the CBD"},{"id":"jacksons-on-george","name":"Jacksons on George","area":"Sydney CBD","lat":-33.861808,"lng":151.208123,"rating":3.9,"address":"176 George St","hours":[[[600,1560]],[[600,1560]],[[600,1560]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1560]]],"pid":"ChIJT_GmSEKuEmsRyjWPfU3NleQ","vibe":"Big sports pub","fact":"Rebuilt in 2023."},{"id":"taylor-s-rooftop","name":"Taylor's Rooftop","area":"Sydney CBD","lat":-33.863841,"lng":151.208726,"rating":4.0,"address":"Republic Hotel, 69 Pitt St","hours":[[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1440]]],"pid":"ChIJS4fpjEGuEmsRlcCqLAjLgw4","vibe":"Retractable roof"},{"id":"hotel-sweeney-s","name":"Hotel Sweeney's","area":"Sydney CBD","lat":-33.872606,"lng":151.20585,"rating":4.1,"address":"236 Clarence St","hours":[[[600,1560]],[[600,1560]],[[600,1560]],[[600,1560]],[[600,1650]],[[600,1650]],[[720,1320]]],"pid":"ChIJLSVxoj6uEmsR_P552YU9Ii0","vibe":"Craft beer"},{"id":"the-bristol","name":"The Bristol","area":"Sydney CBD","lat":-33.867754,"lng":151.203187,"rating":3.9,"address":"81 Sussex St","hours":[[[600,1500]],[[600,1500]],[[600,1500]],[[600,1560]],[[600,1620]],[[720,1620]],[]],"pid":"ChIJ2_Y-oziuEmsRSh6QEqRiuwA","vibe":"Souvlaki"},{"id":"the-sussex-hotel","name":"The Sussex Hotel","area":"Sydney CBD","lat":-33.865008,"lng":151.203379,"rating":4.0,"address":"20 Sussex St","hours":[[[600,1440]],[[600,1500]],[[600,1500]],[[600,1500]],[[600,1560]],[[720,1560]],[]],"pid":"ChIJRRcbJEeuEmsRGUevvdn564Q","vibe":"Thai upstairs","fact":"A freeway pillar runs through it."},{"id":"sky-bar-shell-house","name":"Sky Bar, Shell House","area":"Sydney CBD","lat":-33.865166,"lng":151.206718,"rating":4.0,"address":"37 Margaret St","hours":[[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[]],"pid":"ChIJNT38zwmvEmsRiZHInwB-M60","vibe":"Next to the clock tower","fact":"The 400-tonne clock tower once hung mid-air."},{"id":"old-mate-s-place","name":"Old Mate's Place","area":"Sydney CBD","lat":-33.869547,"lng":151.205153,"rating":4.7,"address":"Level 4, 199 Clarence St","hours":[[],[[960,1560]],[[960,1560]],[[960,1560]],[[900,1560]],[[900,1560]],[[900,1560]]],"pid":"ChIJuasXSJivEmsR8XembUrbNVc","vibe":"Secret menu"},{"id":"zephyr","name":"Zephyr","area":"Sydney CBD","lat":-33.869509,"lng":151.203289,"rating":4.2,"address":"Level 12, 161 Sussex St","hours":[[],[[900,1440]],[[900,1440]],[[900,1440]],[[900,1440]],[[840,1440]],[[840,1440]]],"pid":"ChIJcZ8-ITmuEmsRiu6ZF0314rw","vibe":"Saturday fireworks"},{"id":"panorama-bar","name":"Panorama Bar","area":"Sydney CBD","lat":-33.867884,"lng":151.209637,"rating":4.1,"address":"The International, 25 Martin Pl","hours":[[],[[960,1440]],[[960,1440]],[[900,1440]],[[900,1440]],[[960,1440]],[]],"pid":"ChIJc-qWKQCvEmsRxi8m2WzdqxI","vibe":"Grill skewers"},{"id":"aster","name":"Aster","area":"Sydney CBD","lat":-33.862904,"lng":151.212384,"rating":4.2,"address":"Level 32, 117 Macquarie St","hours":[[[960,1320]],[[960,1440]],[[960,1440]],[[960,1440]],[[960,1440]],[[960,1440]],[[960,1320]]],"pid":"ChIJF0c8VZWvEmsRfNK5hhY70JA","vibe":"Level 32"},{"id":"cirq","name":"CIRQ","area":"Barangaroo","lat":-33.862548,"lng":151.201074,"rating":4.1,"address":"Level 26, 1 Barangaroo Ave","hours":[[],[],[[960,1440]],[[960,1440]],[[960,1500]],[[960,1500]],[[960,1320]]],"pid":"ChIJiRQJU9avEmsRDzWfv2otLpg","vibe":"Level 26 at Crown","fact":"Sydney's tallest building."},{"id":"smoke-bar","name":"Smoke Bar","area":"Barangaroo","lat":-33.865576,"lng":151.201534,"rating":4.4,"address":"Level 2, 35 Barangaroo Ave","hours":[[],[[900,1320]],[[900,1440]],[[900,1440]],[[900,1500]],[[900,1500]],[[900,1380]]],"pid":"ChIJ3818dUeuEmsR8lhLI5I9PWs","vibe":"Harbour sunsets"},{"id":"zeta-bar","name":"Zeta Bar","area":"Sydney CBD","lat":-33.87175,"lng":151.207175,"rating":3.7,"address":"Hilton, Level 4, 488 George St","hours":[[],[],[],[],[[1020,1440]],[[1020,1440]],[]],"pid":"ChIJodn99D6uEmsRqGYZbqVW-go","vibe":"Inside the Hilton"},{"id":"the-glenmore","name":"The Glenmore","area":"The Rocks","lat":-33.858627,"lng":151.207429,"rating":4.3,"address":"96 Cumberland St","hours":[[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1500]],[[660,1500]],[[660,1440]]],"pid":"ChIJz66NJ0OuEmsRRA_Dvawy8kI","vibe":"Opera House view","fact":"Been in Sydney longer than the Harbour Bridge."},{"id":"henry-deane","name":"Henry Deane","area":"Millers Point","lat":-33.857891,"lng":151.202225,"rating":4.0,"address":"Hotel Palisade, 35 Bettington St","hours":[[],[[960,1320]],[[960,1320]],[[720,1380]],[[720,1440]],[[720,1440]],[[720,1320]]],"pid":"ChIJmwkf3USuEmsRAQuLyMIFeZ4","vibe":"Harbour views"},{"id":"keg-brew","name":"Keg & Brew","area":"Surry Hills","lat":-33.883864,"lng":151.209905,"rating":4.3,"address":"26 Foveaux St","hours":[[[600,1440]],[[600,1440]],[[600,1440]],[[600,1440]],[[600,1620]],[[600,1620]],[[600,1320]]],"pid":"ChIJyVf-AyKuEmsRf5Ez1dNyUD0","vibe":"Pub rooftop"},{"id":"taphouse","name":"Taphouse","area":"Darlinghurst","lat":-33.884582,"lng":151.218117,"rating":4.3,"address":"122 Flinders St","hours":[[[960,1380]],[[960,1380]],[[960,1380]],[[960,1440]],[[690,1500]],[[690,1500]],[[690,1380]]],"pid":"ChIJl3F0uxuuEmsR1-VJdifvCm4","vibe":"Spice bags"},{"id":"colombian-hotel","name":"Colombian Hotel","area":"Darlinghurst","lat":-33.87958,"lng":151.215284,"rating":3.8,"address":"117 Oxford St","hours":[[[540,1800]],[[540,1800]],[[540,1800]],[[540,1800]],[[540,1800]],[[540,1800]],[[540,1800]]],"pid":"ChIJ04H5RReuEmsRzuSfVMcRz6U","vibe":"Oxford St staple"},{"id":"the-tilbury","name":"The Tilbury","area":"Woolloomooloo","lat":-33.86978,"lng":151.220455,"rating":4.1,"address":"12 Nicholson St","hours":[[[660,1200]],[[660,1200]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1320]]],"pid":"ChIJ70-WHm2uEmsRQJ9NjYZ9QOQ","vibe":"Proper pub"},{"id":"the-imperial","name":"The Imperial","area":"Erskineville","lat":-33.899142,"lng":151.182612,"rating":4.2,"address":"35 Erskineville Rd","hours":[[[960,1320]],[[960,1320]],[[960,1380]],[[960,1380]],[[960,1620]],[[720,1680]],[[720,1320]]],"pid":"ChIJn2KDQDSwEmsRqtyqeKSgUb8","vibe":"Erko institution","fact":"Priscilla was filmed here."},{"id":"aurora-hotel-rooftop","name":"Aurora Hotel Rooftop","area":"Surry Hills","lat":-33.884126,"lng":151.208419,"rating":4.0,"address":"324 Elizabeth St","hours":[[[540,1680]],[[540,1680]],[[540,1680]],[[540,1680]],[[540,1680]],[[540,1680]],[[540,1680]]],"pid":"ChIJQ8DXjiGuEmsRwXqm3Mt5HOo","vibe":"Footy on"},{"id":"slims-rooftop","name":"Slims Rooftop","area":"Darlinghurst","lat":-33.874257,"lng":151.214643,"rating":3.9,"address":"47/49 William St","hours":[[[600,1620]],[[600,1620]],[[600,1620]],[[600,1620]],[[600,1620]],[[600,1620]],[[600,1440]]],"pid":"ChIJz3feFRSuEmsRtgAiFAPuhac","vibe":"St Mary's view"},{"id":"the-strawberry","name":"The Strawberry","area":"Surry Hills","lat":-33.886524,"lng":151.208032,"rating":4.0,"address":"453 Elizabeth St","hours":[[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1440]]],"pid":"ChIJgzJwTSCuEmsR-_il2-0vp6w","vibe":"Happy hour cocktails"},{"id":"east-village-hotel","name":"East Village Hotel","area":"Darlinghurst","lat":-33.877594,"lng":151.216632,"rating":4.2,"address":"234 Palmer St","hours":[[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1320]]],"pid":"ChIJb8UmMBGuEmsR0lfFBnciMAM","vibe":"Sunday roast","fact":"Tilly Devine's old local."},{"id":"darlo-bar","name":"Darlo Bar","area":"Darlinghurst","lat":-33.877986,"lng":151.2206267,"rating":4.3,"address":"306 Liverpool St","hours":[[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]]],"pid":"ChIJaVxY6hGuEmsRT7xRTYn89I8","vibe":"Retro corner bar"},{"id":"burdekin-rooftop","name":"Burdekin Rooftop","area":"Darlinghurst","lat":-33.877028,"lng":151.212957,"rating":4.5,"address":"2 Oxford St","hours":[[],[],[[960,1320]],[[960,1320]],[[960,1440]],[[720,1440]],[]],"pid":"ChIJp-z_ImCvEmsRlf4URZ1mG2c","vibe":"Hyde Park views"},{"id":"kasbah-the-strand","name":"Kasbah, The Strand","area":"Darlinghurst","lat":-33.874564,"lng":151.216521,"rating":4.5,"address":"99 William St","hours":[[],[],[],[[960,1380]],[[960,1440]],[[780,1440]],[[780,1260]]],"pid":"ChIJx1TSsbSvEmsR9QfDNjgr_KU","vibe":"64 stairs. Worth it."},{"id":"monica-rooftop","name":"Monica Rooftop","area":"Paddington","lat":-33.881801,"lng":151.219223,"rating":4.1,"address":"Level 5/1 Oxford St","hours":[[[900,1320]],[[900,1320]],[[900,1320]],[[900,1320]],[[720,1435]],[[720,1435]],[[720,1320]]],"pid":"ChIJr6_ybjyvEmsR6Wh4-D7iuJ4","vibe":"Feels like LA"},{"id":"royal-hotel","name":"Royal Hotel","area":"Paddington","lat":-33.882399,"lng":151.228503,"rating":4.1,"address":"237 Glenmore Rd","hours":[[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[600,1440]],[[660,1320]]],"pid":"ChIJfT3LxwiuEmsRlc_AQvE1Q8I","vibe":"Classic pub balcony"},{"id":"the-light-brigade","name":"The Light Brigade","area":"Woollahra","lat":-33.888535,"lng":151.232214,"rating":4.0,"address":"Cnr Oxford St & Jersey Rd","hours":[[[690,1440]],[[690,1440]],[[690,1440]],[[690,1440]],[[690,1500]],[[690,1500]],[[690,1320]]],"pid":"ChIJNbXEageuEmsRnctwYerAMgM","vibe":"Taco Tuesdays"},{"id":"sweethearts-terraza","name":"Sweethearts Terraza","area":"Potts Point","lat":-33.873366,"lng":151.223741,"rating":4.2,"address":"Level 3/33-35 Darlinghurst Rd","hours":[[],[],[[1020,1440]],[[1020,1440]],[[1020,1440]],[[720,1440]],[[720,1440]]],"pid":"ChIJwd3FH1mvEmsRJdynbd6KmtU","vibe":"Mexican brunch"},{"id":"kings-cross-hotel","name":"Kings Cross Hotel","area":"Potts Point","lat":-33.874903,"lng":151.222045,"rating":4.1,"address":"244-248 William St","hours":[[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]]],"pid":"ChIJ_Zmujw2uEmsRAaqIm1aG_8E","vibe":"Coke sign view"},{"id":"arturo-s-rooftop","name":"Arturo's Rooftop","area":"Woolloomooloo","lat":-33.869182,"lng":151.219488,"rating":3.6,"address":"Level 2/2 Bourke St","hours":[[],[],[[1020,1440]],[[1020,1440]],[[720,1440]],[[720,1440]],[[720,1200]]],"pid":"ChIJl2HU9MevEmsRUYj9_nsucvs","vibe":"Lobster sliders"},{"id":"green-moustache","name":"Green Moustache","area":"North Sydney","lat":-33.838401,"lng":151.206795,"rating":4.3,"address":"Level 10/100 Miller St","hours":[[],[[705,1320]],[[705,1320]],[[690,1320]],[[690,1350]],[[690,1350]],[]],"pid":"ChIJk1sOd7ivEmsRKXWPQ82SEtE","vibe":"Fancy food"},{"id":"four-hundred","name":"Four Hundred","area":"North Sydney","lat":-33.840308,"lng":151.207483,"rating":4.7,"address":"Greenwood Plaza Rooftop","hours":[[],[[720,1380]],[[720,1380]],[[720,1380]],[[720,1380]],[[720,1380]],[]],"pid":"ChIJGfh_AZ6vEmsRwklZQAumXW4","vibe":"Mexican food"},{"id":"the-treehouse-hotel","name":"The Treehouse Hotel","area":"North Sydney","lat":-33.839196,"lng":151.206475,"rating":4.3,"address":"60 Miller St","hours":[[[720,1320]],[[720,1320]],[[720,1380]],[[720,1380]],[[720,1380]],[[1020,1380]],[]],"pid":"ChIJx1H_TfKuEmsRHok6k4ljUVs","vibe":"Feels like a forest"},{"id":"websters","name":"Websters","area":"Newtown","lat":-33.896988,"lng":151.179059,"rating":4.1,"address":"323 King St","hours":[[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1680]],[[600,1440]]],"pid":"ChIJ6zc9zTawEmsRnod33Al5njQ","vibe":"Trivia nights"},{"id":"corridor","name":"Corridor","area":"Newtown","lat":-33.89357,"lng":151.183129,"rating":4.4,"address":"153A King St","hours":[[[1020,1380]],[[1020,1380]],[[1020,1380]],[[1020,1380]],[[960,1440]],[[900,1440]],[[900,1380]]],"pid":"ChIJI6pXTzGwEmsR2knXcm5PFtQ","vibe":"Grungy, in a good way"},{"id":"hotel-steyne","name":"Hotel Steyne","area":"Manly","lat":-33.796961,"lng":151.287679,"rating":3.7,"address":"75 The Corso","hours":[[[540,1620]],[[540,1620]],[[540,1620]],[[540,1620]],[[540,1800]],[[540,1800]],[[540,720]]],"pid":"ChIJ0SobZw-rEmsR8XKo0XEZCPE","vibe":"Opposite the beach"},{"id":"coogee-pavilion-rooftop","name":"Coogee Pavilion Rooftop","area":"Coogee","lat":-33.918713,"lng":151.258244,"rating":3.7,"address":"Level 3/169 Dolphin St","hours":[[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[660,1440]],[[660,1440]]],"pid":"ChIJUR24XvqzEmsRFFs3JRkMvyw","vibe":"Beach view","fact":"Used to be an aquarium. Google the Shark Arm case."},{"id":"the-rooftop-pyrmont","name":"The Rooftop, Pyrmont","area":"Pyrmont","lat":-33.871066,"lng":151.194971,"rating":3.8,"address":"214-216 Harris St","hours":[[],[],[[720,1350]],[[720,1350]],[[720,1440]],[[720,1440]],[[720,1260]]],"pid":"ChIJqZNV7DWvEmsRWMshJxavX24","vibe":"Corner pub rooftop"},{"id":"the-old-clare-rooftop","name":"The Old Clare Rooftop","area":"Chippendale","lat":-33.884421,"lng":151.201388,"rating":3.8,"address":"Level 4, 1 Kensington St","hours":[[],[],[[960,1320]],[[960,1320]],[[960,1320]],[[960,1320]],[]],"pid":"ChIJoeLDLyavEmsRksXCvNmiOcQ","vibe":"Rooftop pool"},{"id":"the-library-bar","name":"The Library Bar","area":"Sydney CBD","lat":-33.8665466,"lng":151.2134094,"rating":4.3,"address":"Mitchell Library, 1 Shakespeare Pl","hours":[[],[],[[960,1320]],[[960,1320]],[[960,1320]],[[960,1320]],[]],"pid":"ChIJc1vwpumvEmsRE7WYsnNTYBo","vibe":"Hidden harbour view"},{"id":"martinez","name":"Martinez","area":"Sydney CBD","lat":-33.8627915,"lng":151.2112344,"rating":4.2,"address":"Quay Quarter Tower, 50 Bridge St","hours":[[[690,1260]],[[690,1260]],[[690,1260]],[[690,1260]],[[690,1260]],[],[]],"pid":"ChIJt5CEcQ2vEmsR6c3vf6d45Os","vibe":"Lunch crowd"},{"id":"the-butler","name":"The Butler","area":"Potts Point","lat":-33.871688,"lng":151.22268,"rating":4.6,"address":"123 Victoria St","hours":[[[960,1380]],[[960,1380]],[[720,1380]],[[720,1380]],[[720,1440]],[[720,1440]],[[720,1320]]],"pid":"ChIJk5rNr3KuEmsRQSgDz3qgIm0","vibe":"Margarita flights"},{"id":"the-toxteth","name":"The Toxteth","area":"Glebe","lat":-33.8768,"lng":151.1849,"rating":4.1,"address":"345 Glebe Point Rd","hours":[[[600,1440]],[[600,1440]],[[600,1440]],[[600,1440]],[[600,1440]],[[600,1440]],[[660,1320]]],"pid":"ChIJ2TPEbdOvEmsRt8I7LQF5I3I","vibe":"Big pub"},{"id":"the-fernery","name":"The Fernery","area":"Mosman","lat":-33.8283958,"lng":151.2439408,"rating":4.2,"address":"719 Military Rd","hours":[[],[],[[720,1320]],[[720,1320]],[[720,1440]],[[720,1440]],[[720,1260]]],"pid":"ChIJp1qr8hqsEmsR8tBjPXYFOKo","vibe":"Big groups"},{"id":"socal","name":"SoCal","area":"Neutral Bay","lat":-33.830924,"lng":151.221458,"rating":4.4,"address":"1 Young St","hours":[[[1020,1440]],[[1020,1440]],[[1020,1440]],[[1020,1440]],[[720,1440]],[[720,1440]],[[720,1440]]],"pid":"ChIJY0p97IWJtAER-iCXGhiYGpA","vibe":"Tacos","tempClosed":true},{"id":"kiln","name":"Kiln","area":"Surry Hills","lat":-33.8788571,"lng":151.209904,"rating":4.4,"address":"Level 18, Ace Hotel, 53 Wentworth Ave","hours":[[[1020,1380]],[[1020,1380]],[[1020,1380]],[[720,1380]],[[720,1440]],[[720,1440]],[]],"pid":"ChIJ5cqf0LavEmsRgYffN6rZabM","vibe":"Level 18"},{"id":"white-horse","name":"White Horse","area":"Surry Hills","lat":-33.8853965,"lng":151.2138641,"rating":4.7,"address":"381 Crown St","hours":[[],[[900,1380]],[[900,1380]],[[900,1380]],[[720,1410]],[[720,1410]],[[720,1260]]],"pid":"ChIJ75-1BwCvEmsRdwPXo6alBO4","vibe":"Chef's hat food","fact":"Steel horse on the roof. Shipped from Scotland."},{"id":"the-lansdowne","name":"The Lansdowne","area":"Chippendale","lat":-33.8847945,"lng":151.1950215,"rating":4.2,"address":"2-6 City Rd","hours":[[],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1620]],[[720,1620]],[[720,1440]]],"pid":"ChIJ405xzymuEmsRG73wo6BzHw0","vibe":"Live music","fact":"You Am I played early gigs here."},{"id":"bar-ombre","name":"Bar Ombré","area":"Sydney CBD","lat":-33.8619735,"lng":151.210137,"rating":4.0,"address":"Level 3, Gateway, Alfred St","hours":[[[960,1440]],[[960,1440]],[[960,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1320]]],"pid":"ChIJD4oA-FWvEmsRfMSH7M35uIc","tempClosed":true,"vibe":"Tucked away"},{"id":"the-mercantile","name":"The Mercantile","area":"The Rocks","lat":-33.8571355,"lng":151.2083827,"rating":4.3,"address":"25 George St","hours":[[[630,1320]],[[630,1320]],[[630,1320]],[[630,1380]],[[600,1410]],[[600,1410]],[[600,1320]]],"pid":"ChIJkdqMPV2uEmsRaGwdOX-V2Oc","vibe":"Irish pub"},{"id":"harbour-view-hotel","name":"Harbour View Hotel","area":"The Rocks","lat":-33.8565983,"lng":151.2073426,"rating":4.3,"address":"18 Lower Fort St","hours":[[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1320]]],"pid":"ChIJV_wrHl2uEmsR92Q_ubhgXDI","vibe":"Bridge right there"},{"id":"cauliflower-hotel","name":"The Cauliflower Hotel","area":"Waterloo","lat":-33.898883,"lng":151.200268,"rating":4.4,"address":"123 Botany Rd","hours":[[[600,1380]],[[600,1380]],[[600,1440]],[[600,1440]],[[600,1440]],[[600,1440]],[[600,1320]]],"pid":"ChIJibUEE8WxEmsRas8y_hrd_No","vibe":"Cheap schooners","fact":"The one '70s pub you couldn't get whacked in."},{"id":"marrickville-springs","name":"Marrickville Springs","area":"Marrickville","lat":-33.9102514,"lng":151.1626457,"rating":4.6,"address":"Philter Brewing, 92-98 Sydenham Rd","hours":[[],[],[[900,1320]],[[900,1320]],[[720,1440]],[[720,1440]],[[720,1260]]],"pid":"ChIJ6V6RpT6xEmsRFPMvNbJ9zXM","vibe":"Brewery"},{"id":"watsons-bay-hotel","name":"Watsons Bay Boutique Hotel","area":"Watsons Bay","lat":-33.8429855,"lng":151.2823156,"rating":4.2,"address":"10 Marine Parade","hours":[[[660,1260]],[[660,1260]],[[660,1260]],[[660,1260]],[[660,1320]],[[600,1320]],[[600,1320]]],"pid":"ChIJg6K8SYqsEmsRc90_ZVkqUzU","vibe":"Mind the seagulls"},{"id":"royal-oak-double-bay","name":"Royal Oak Hotel","area":"Double Bay","lat":-33.8771556,"lng":151.2414361,"rating":4.2,"address":"28 Bay St","hours":[[[600,1440]],[[600,1440]],[[600,1440]],[[600,1440]],[[600,1500]],[[600,1500]],[[600,1380]]],"pid":"ChIJt04AY-etEmsR4KjbC2RTD1M","vibe":"Dog friendly"},{"id":"intercontinental-double-bay","name":"Rooftop at InterContinental Double Bay","area":"Double Bay","lat":-33.8763177,"lng":151.243405,"rating":4.0,"address":"33 Cross St","hours":[[[720,1140]],[[720,1140]],[[720,1140]],[[720,1140]],[[720,1140]],[[720,1140]],[[720,1140]]],"pid":"ChIJ_zdFct2tEmsRfFCl6ILF20g","vibe":"Bay views"},{"id":"bridgeview-hotel","name":"Bridgeview Hotel","area":"Willoughby","lat":-33.8072602,"lng":151.1990473,"rating":4.1,"address":"580 Willoughby Rd","hours":[[[600,1500]],[[600,1500]],[[600,1500]],[[600,1500]],[[600,1500]],[[600,1500]],[[600,1320]]],"pid":"ChIJs19DfVtTDWsRx-3_9Wx0jOg","vibe":"Sunday roast"},{"id":"bne-sixteen-antlers","name":"Sixteen Antlers","area":"Brisbane City","lat":-27.468382,"lng":153.023103,"rating":4.0,"address":"Level 16, Pullman, cnr Ann & Roma St","hours":[[],[[960,1320]],[[960,1320]],[[960,1320]],[[900,1440]],[[900,1440]],[]],"pid":"ChIJo7F8jwNakWsR1Oe_Jk-lhDY","city":"Brisbane"},{"id":"bne-hibiscus-bar","name":"Hibiscus Bar & Terrace","area":"Brisbane City","lat":-27.470199,"lng":153.023841,"rating":4.2,"address":"Level 4, Hyatt Regency, 72 Queen St","hours":[[[900,1320]],[[900,1320]],[[900,1320]],[[900,1320]],[[720,1380]],[[720,1380]],[[720,1080]]],"pid":"ChIJxzBW7QRakWsRPgS6ODt30UQ","city":"Brisbane"},{"id":"bne-wet-deck","name":"WET Deck","area":"Brisbane City","lat":-27.46993,"lng":153.022139,"rating":3.7,"address":"Level 4, W Brisbane, 81 North Quay","hours":[[[660,1140]],[[660,1140]],[[660,1140]],[[660,1140]],[[660,1440]],[[660,1440]],[[660,1140]]],"pid":"ChIJHZVaSKVbkWsRudt-EgDXY0s","city":"Brisbane"},{"id":"bne-cicada-blu","name":"Cicada Blu","area":"Brisbane City","lat":-27.474199,"lng":153.024952,"rating":3.7,"address":"Level 23, Sky Deck, The Star, 33 William St","hours":[[[720,1290]],[[720,1290]],[[720,1290]],[[720,1290]],[[720,1290]],[[600,1290]],[[600,1290]]],"pid":"ChIJXYVwawBbkWsRPQvWTHiowLA","city":"Brisbane"},{"id":"bne-fiume","name":"Fiume","area":"Brisbane City","lat":-27.462476,"lng":153.035727,"rating":4.4,"address":"Level 3, Crystalbrook Vincent, 5 Boundary St","hours":[[],[],[[720,990]],[[960,1410]],[[720,1410]],[[720,1410]],[[720,1260]]],"pid":"ChIJlYsqLIxZkWsRk0_5cMfcS6g","city":"Brisbane"},{"id":"bne-stock-exchange","name":"Stock Exchange Rooftop","area":"Brisbane City","lat":-27.46954,"lng":153.028513,"rating":3.8,"address":"Stock Exchange Hotel, 131 Edward St","hours":[[[600,1200]],[[600,1320]],[[600,1320]],[[600,1320]],[[600,1560]],[[600,1560]],[[660,1080]]],"pid":"ChIJAUaoYRtakWsR996_T1jxEys","city":"Brisbane"},{"id":"bne-the-milton","name":"The Milton Rooftop","area":"Petrie Terrace","lat":-27.464782,"lng":153.012722,"rating":4.7,"address":"2 Caxton St","hours":[[],[[660,1380]],[[660,1380]],[[660,1380]],[[660,1500]],[[660,1500]],[[660,1380]]],"pid":"ChIJk4pToxpRkWsRsEuPxqSpAYw","city":"Brisbane"},{"id":"bne-maya","name":"MAYA Mexican","area":"Fortitude Valley","lat":-27.456938,"lng":153.036788,"rating":4.3,"address":"Level 11, 757 Ann St","hours":[[],[],[[720,1380]],[[720,1380]],[[720,1620]],[[720,1620]],[[720,1380]]],"pid":"ChIJG_0nwvJZkWsRlEtqw044e9M","city":"Brisbane"},{"id":"bne-iris","name":"Iris Rooftop","area":"Fortitude Valley","lat":-27.460242,"lng":153.0377,"rating":4.4,"address":"Hotel X, 458 Brunswick St","hours":[[],[],[[960,1350]],[[960,1350]],[[690,1410]],[[690,1410]],[[690,1350]]],"pid":"ChIJw990El9ZkWsRLtnMlazxUA0","city":"Brisbane"},{"id":"bne-soko","name":"Soko","area":"Fortitude Valley","lat":-27.453306,"lng":153.033951,"rating":4.4,"address":"Level 14, 7 Symes St","hours":[[[720,960]],[[660,960]],[[720,1320]],[[720,1320]],[[720,1380]],[[720,1380]],[[720,1320]]],"pid":"ChIJc_Ht8qBZkWsRdG1eV_CieAo","city":"Brisbane"},{"id":"bne-valley-hops","name":"Valley Hops Rooftop","area":"Fortitude Valley","lat":-27.458893,"lng":153.034995,"rating":3.9,"address":"Cloudland, 641 Ann St","hours":[[],[],[[690,1320]],[[690,1380]],[[690,1440]],[[690,1440]],[[690,1320]]],"pid":"ChIJgeniPEhZkWsRW1TCaph_MWw","city":"Brisbane"},{"id":"bne-siroco","name":"Siroco Rooftop","area":"Fortitude Valley","lat":-27.456356,"lng":153.036385,"rating":4.4,"address":"The Constance, 14-20 Constance St","hours":[[],[],[[720,900],[1020,1380]],[[720,900],[1020,1380]],[[720,900],[1020,1380]],[[720,1380]],[[720,1380]]],"pid":"ChIJWXhTlkJZkWsRJHokHqSaQbY","city":"Brisbane"},{"id":"bne-above-rooftop","name":"Above Rooftop","area":"Fortitude Valley","lat":-27.452379,"lng":153.039292,"rating":4.5,"address":"Ovolo The Valley, 1000 Ann St","hours":[[],[],[[900,1200]],[[900,1200]],[[780,1260]],[[780,1260]],[[780,1140]]],"pid":"ChIJjduLw_RZkWsRICrUsrqt3mg","city":"Brisbane"},{"id":"bne-su-casa","name":"Su Casa Rooftop","area":"Fortitude Valley","lat":-27.458699,"lng":153.034557,"rating":3.8,"address":"648 Ann St","hours":[[],[],[[1020,1620]],[[1020,1620]],[[900,1620]],[[900,1620]],[[1020,1620]]],"pid":"ChIJ5z4CeVVZkWsRKAsOMz0mFLg","city":"Brisbane"},{"id":"bne-the-terrace","name":"The Terrace","area":"South Brisbane","lat":-27.481495,"lng":153.023155,"rating":4.3,"address":"Level 21, Emporium Hotel, 267 Grey St","hours":[[[660,1320]],[[660,1320]],[[660,1440]],[[660,1440]],[[660,1500]],[[390,1500]],[[390,1320]]],"pid":"ChIJa0SOJNBbkWsRArdJerkLeXY","city":"Brisbane"},{"id":"bne-lina","name":"Lina Rooftop","area":"South Brisbane","lat":-27.481881,"lng":153.020607,"rating":4.5,"address":"Level 12, 74-80 Tribune St","hours":[[[720,1020]],[[720,1020]],[[660,1380]],[[660,1380]],[[660,1380]],[[660,1380]],[[660,1140]]],"pid":"ChIJ0at1yHtbkWsRKMbb-e6195Q","city":"Brisbane"},{"id":"bne-fox-rooftop","name":"Fox Rooftop","area":"South Brisbane","lat":-27.47418,"lng":153.01747,"rating":4.0,"address":"Hotel Terminus, 71-73 Melbourne St","hours":[[],[[960,1440]],[[960,1440]],[[720,1560]],[[720,1560]],[[720,1560]],[[720,1560]]],"pid":"ChIJ65wGYghakWsRpod_nTOYBnw","city":"Brisbane"},{"id":"bne-sunsets","name":"Sunsets Rooftop","area":"Kangaroo Point","lat":-27.484641,"lng":153.039539,"rating":4.5,"address":"Rooftop, 95 Linton St","hours":[[],[],[],[[720,1320]],[[720,1320]],[[720,1320]],[[720,1290]]],"pid":"ChIJD28EKrBbkWsRtaAnH3rlsYM","city":"Brisbane"},{"id":"bne-ooh-la-la","name":"Ooh La La","area":"Woolloongabba","lat":-27.485721,"lng":153.029516,"rating":4.4,"address":"Above C'est Bon, 609-611 Stanley St","hours":[[],[],[],[],[[960,1260]],[[960,1260]],[]],"pid":"ChIJe40k7wVbkWsR7ZKbYlQYDPo","city":"Brisbane"},{"id":"bne-ruma","name":"Ruma Rooftop","area":"New Farm","lat":-27.467144,"lng":153.045803,"rating":4.7,"address":"84 Merthyr Rd","hours":[[],[],[[720,1290]],[[720,1290]],[[720,1320]],[[660,1350]],[[660,1230]]],"pid":"ChIJ1653K_pZkWsRzNZ3sh0KDqk","city":"Brisbane"},{"id":"bne-melrose","name":"Melrose","area":"Bulimba","lat":-27.450889,"lng":153.053976,"rating":4.8,"address":"Level 1, 37 Oxford St","hours":[[],[],[[1020,1260]],[[1020,1260]],[[720,1320]],[[720,1320]],[[720,1020]]],"pid":"ChIJE_9SHtZZkWsRKFyyT0hXWv8","city":"Brisbane"},{"id":"bne-tetto","name":"Tetto Rooftop Bar","area":"Everton Park","lat":-27.406796,"lng":152.991503,"rating":4.6,"address":"807 Stafford Rd","hours":[[],[[960,1260]],[[960,1290]],[[960,1290]],[[720,1380]],[[720,1380]],[[720,1260]]],"pid":"ChIJ--er3QNXkWsRWFzCMpyC7Es","city":"Brisbane"},{"id":"mel-rooftop-bar-curtin-house","name":"Curtin House Rooftop","area":"Melbourne CBD","lat":-37.812014,"lng":144.965261,"rating":4.4,"address":"Level 7, Curtin House, 252 Swanston St","hours":[[[600,1620]],[[600,1620]],[[600,1620]],[[600,1620]],[[600,1620]],[[600,1620]],[[600,1620]]],"pid":"ChIJwYzOQcpC1moRbm5SF7RuCm0","city":"Melbourne"},{"id":"mel-her-rooftop","name":"Her Rooftop","area":"Melbourne CBD","lat":-37.811498,"lng":144.964155,"rating":4,"address":"Level 4, 270 Lonsdale St","hours":[[[690,1500]],[[690,1500]],[[690,1500]],[[690,1560]],[[690,1620]],[[690,1620]],[[690,1560]]],"pid":"ChIJ7SeQ6ZBD1moR7P9hvzDvNrQ","city":"Melbourne"},{"id":"mel-union-electric","name":"Union Electric Rooftop","area":"Melbourne CBD","lat":-37.81179,"lng":144.966705,"rating":4.6,"address":"13 Heffernan Ln","hours":[[[960,1500]],[[960,1500]],[[960,1500]],[[960,1500]],[[720,1500]],[[720,1500]],[[720,1500]]],"pid":"ChIJ7_FCh8lC1moRPc7-4Iwg5WE","city":"Melbourne"},{"id":"mel-rooftop-at-qt","name":"Rooftop at QT","area":"Melbourne CBD","lat":-37.813428,"lng":144.967824,"rating":4.4,"address":"Level 11, 133 Russell St","hours":[[[900,1380]],[[900,1380]],[[900,1380]],[[900,1380]],[[720,1500]],[[720,1500]],[[720,1380]]],"pid":"ChIJt7f_wMlC1moR78AaroNklv4","city":"Melbourne"},{"id":"mel-loop-roof","name":"Loop Roof","area":"Melbourne CBD","lat":-37.812176,"lng":144.97219,"rating":4.3,"address":"Level 3, 23 Meyers Pl","hours":[[],[],[[960,1380]],[[960,1380]],[[840,1500]],[[720,1500]],[[780,1200]]],"pid":"ChIJG86Ln8hC1moRgRVvzbmC6iI","city":"Melbourne"},{"id":"mel-inuman","name":"Inuman","area":"Melbourne CBD","lat":-37.811701,"lng":144.970111,"rating":4.8,"address":"167 Exhibition St","hours":[[],[[960,1380]],[[960,1380]],[[960,1380]],[[960,1440]],[[960,1440]],[]],"pid":"ChIJc9OhfQBD1moR99BjnibW_BQ","city":"Melbourne"},{"id":"mel-santana","name":"Santana Rooftop","area":"Melbourne CBD","lat":-37.813046,"lng":144.968622,"rating":4.7,"address":"Level 3, 169 Melbourne Pl","hours":[[[900,1500]],[[900,1500]],[[900,1500]],[[900,1500]],[[900,1500]],[[900,1500]],[[900,1500]]],"pid":"ChIJoYXGtY9D1moRRcp2-gnXHnI","city":"Melbourne"},{"id":"mel-farmers-daughters","name":"Farmer's Daughters","area":"Melbourne CBD","lat":-37.813554,"lng":144.971025,"rating":4.4,"address":"80 Collins, 95 Exhibition St","hours":[[[720,1260]],[[720,1260]],[[720,1260]],[[720,1290]],[[720,1290]],[[690,1290]],[[690,1260]]],"pid":"ChIJbVfLiJdD1moRk7I8Ws1zp7w","city":"Melbourne"},{"id":"mel-fleet","name":"Fleet Rooftop Bar","area":"Melbourne CBD","lat":-37.818788,"lng":144.962035,"rating":4.6,"address":"Level 22, Vibe Hotel, 1 Queen St","hours":[[],[[900,1380]],[[900,1380]],[[900,1380]],[[900,1440]],[[720,1440]],[[900,1380]]],"pid":"ChIJiVHlaQBD1moRD3FgRMTmjAc","city":"Melbourne"},{"id":"mel-imperial-hotel","name":"Imperial Hotel","area":"Melbourne CBD","lat":-37.81124,"lng":144.97277,"rating":4.2,"address":"2-8 Bourke St","hours":[[[660,1380]],[[660,1380]],[[660,1380]],[[660,1440]],[[660,1560]],[[660,1560]],[[660,1380]]],"pid":"ChIJ0y4DB8ZC1moRRnezTs9hzKs","city":"Melbourne"},{"id":"mel-morris-house","name":"Morris House","area":"Melbourne CBD","lat":-37.812869,"lng":144.971197,"rating":4.1,"address":"120 Exhibition St","hours":[[[690,1380]],[[690,1380]],[[690,1380]],[[690,1380]],[[690,1500]],[[690,1500]],[[690,1320]]],"pid":"ChIJDea8Si9D1moRvFKUQfX7iAk","city":"Melbourne"},{"id":"mel-hickens-hotel","name":"Hickens Hotel","area":"Melbourne CBD","lat":-37.813723,"lng":144.968295,"rating":4.5,"address":"127 Russell St","hours":[[[660,1500]],[[660,1500]],[[660,1500]],[[660,1500]],[[660,1620]],[[660,1620]],[[660,1500]]],"pid":"ChIJ-5_Hj5dD1moRLf5AmJkXZVo","city":"Melbourne"},{"id":"mel-good-heavens","name":"Good Heavens","area":"Melbourne CBD","lat":-37.812076,"lng":144.971143,"rating":4.3,"address":"Level 2, 79 Bourke St","hours":[[[720,1500]],[[720,1500]],[[720,1500]],[[720,1500]],[[720,1500]],[[720,1500]],[[720,1500]]],"pid":"ChIJ7cO7k8hC1moRgZW5lxx0mDI","city":"Melbourne"},{"id":"mel-fable","name":"Fable","area":"Melbourne CBD","lat":-37.810561,"lng":144.967408,"rating":4.1,"address":"Level 13, 168 Lonsdale St","hours":[[],[[900,1440]],[[900,1440]],[[900,1440]],[[900,1500]],[[900,1500]],[[900,1350]]],"pid":"ChIJNcMQVv5D1moRl98V2jj-Xpc","city":"Melbourne"},{"id":"mel-goldilocks","name":"Goldilocks","area":"Melbourne CBD","lat":-37.811823,"lng":144.965131,"rating":4.4,"address":"Level 5, 264 Swanston St","hours":[[[720,1500]],[[720,1500]],[[720,1500]],[[720,1500]],[[720,1560]],[[720,1560]],[[720,1500]]],"pid":"ChIJFxQqR8pC1moRtrCWdmUuFTU","city":"Melbourne"},{"id":"mel-transit","name":"Transit Rooftop Bar","area":"Melbourne CBD","lat":-37.818426,"lng":144.968406,"rating":4.2,"address":"Level 2, Transport Hotel, Federation Square","hours":[[[960,1380]],[[960,1380]],[[960,1440]],[[960,1440]],[[960,1560]],[[720,1560]],[[720,1380]]],"pid":"ChIJh1-3NCRo1moR-z74M9dBDP4","city":"Melbourne"},{"id":"mel-bomba","name":"Bomba","area":"Melbourne CBD","lat":-37.810404,"lng":144.969197,"rating":4.5,"address":"103 Lonsdale St","hours":[[[1020,1380]],[[720,1380]],[[720,1380]],[[720,1380]],[[720,1440]],[[720,1440]],[[900,1380]]],"pid":"ChIJ9yEuL8lC1moRpVtvu92LyWA","city":"Melbourne"},{"id":"mel-siglo","name":"Siglo","area":"Melbourne CBD","lat":-37.81091,"lng":144.972536,"rating":4.1,"address":"Level 2, 161 Spring St","hours":[[[1020,1620]],[[1020,1620]],[[1020,1620]],[[1020,1620]],[[1020,1620]],[[1020,1620]],[]],"pid":"ChIJVUlb_MVC1moReBMBN5F84vw","city":"Melbourne"},{"id":"mel-doms-social-club","name":"Dom's Social Club","area":"Melbourne CBD","lat":-37.811056,"lng":144.964241,"rating":4.7,"address":"Level 1, 301 Swanston St","hours":[[],[],[[1020,1380]],[[1020,1380]],[[960,1500]],[[960,1500]],[]],"pid":"ChIJLzCh9TBD1moRSUAqm95HPlA","city":"Melbourne"},{"id":"mel-heroes","name":"Heroes","area":"Melbourne CBD","lat":-37.812678,"lng":144.967615,"rating":4.3,"address":"188 Bourke St","hours":[[],[],[],[],[[960,1620]],[[960,1620]],[]],"pid":"ChIJPyZRld5D1moRQjRYEJV4tyc","city":"Melbourne"},{"id":"mel-cleo","name":"Cleo","area":"Melbourne CBD","lat":-37.813279,"lng":144.968525,"rating":3.9,"address":"Level 12, Melbourne Place, 130 Russell St","hours":[[[390,1350]],[[390,1350]],[[390,1350]],[[390,1350]],[[390,1440]],[[420,1440]],[[420,1350]]],"pid":"ChIJI9ItHcFD1moRwjW0Zud3kwg","city":"Melbourne"},{"id":"mel-state-of-grace","name":"State of Grace","area":"Melbourne CBD","lat":-37.819752,"lng":144.956983,"rating":4.6,"address":"27 King St","hours":[[[720,1320]],[[720,1320]],[[720,1320]],[[720,1380]],[[720,1500]],[[720,1500]],[[720,1260]]],"pid":"ChIJmfW-qk1d1moRewnuCAqvfY4","city":"Melbourne"},{"id":"mel-disuko","name":"Disuko","area":"Melbourne CBD","lat":-37.811999,"lng":144.971523,"rating":4.4,"address":"Level 3, 59-63 Bourke St","hours":[[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,900],[1020,1440]],[[720,900],[1020,1440]],[[720,900],[1020,1440]]],"pid":"ChIJS8y9tTVD1moRayt85yADL6g","city":"Melbourne"},{"id":"mel-waterside-hotel","name":"The Waterside Hotel","area":"Melbourne CBD","lat":-37.820225,"lng":144.957261,"rating":4.1,"address":"508 Flinders St","hours":[[[690,1380]],[[690,1380]],[[690,1500]],[[690,1620]],[[690,1620]],[[690,1620]],[[690,1500]]],"pid":"ChIJqXync1Jd1moRsFcec9xZZuo","city":"Melbourne"},{"id":"mel-hotel-nacional","name":"Hotel Nacional","area":"Melbourne CBD","lat":-37.814085,"lng":144.961334,"rating":4.2,"address":"23-25 Hardware Ln","hours":[[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]]],"pid":"ChIJ_1DxAkJD1moRmusslphummc","city":"Melbourne"},{"id":"mel-top-yard","name":"Top Yard Rooftop","area":"Melbourne CBD","lat":-37.81888,"lng":144.957329,"rating":4,"address":"2 Geddes Ln","hours":[[],[],[],[[1080,1620]],[[1200,1800]],[[1080,1800]],[]],"pid":"ChIJp80KPZld1moRAQM98kREfVU","city":"Melbourne"},{"id":"mel-blossom","name":"Blossom Rooftop Bar","area":"Melbourne CBD","lat":-37.81282,"lng":144.964754,"rating":4,"address":"Level 14, Pullman, 265 Little Bourke St","hours":[[],[[960,1380]],[[960,1380]],[[960,1380]],[[960,1380]],[[720,1440]],[]],"pid":"ChIJm8sqwlFD1moRiBJRkbSrL48","city":"Melbourne"},{"id":"mel-carlton-rooftop","name":"The Carlton Rooftop","area":"Melbourne CBD","lat":-37.813229,"lng":144.967663,"rating":4,"address":"193 Bourke St","hours":[[],[],[],[],[[1020,1620]],[[1020,1620]],[]],"pid":"ChIJISCTFkpD1moRuloSfN8hGsg","city":"Melbourne"},{"id":"mel-stolen-gem","name":"The Stolen Gem","area":"Melbourne CBD","lat":-37.814398,"lng":144.962108,"rating":4.3,"address":"Level 8, 388 Bourke St","hours":[[],[],[[900,1320]],[[900,1320]],[[900,1440]],[[840,1440]],[[840,1140]]],"pid":"ChIJU9snJLVC1moRT946l1nLJF8","city":"Melbourne"},{"id":"mel-q-rooftop","name":"The Q Rooftop","area":"Melbourne CBD","lat":-37.819588,"lng":144.956905,"rating":4.3,"address":"Level 28, 509 Flinders Ln","hours":[[],[],[],[],[[960,1320]],[[960,1320]],[]],"pid":"ChIJEe-HAC5d1moRGMPc4lhJArY","city":"Melbourne"},{"id":"mel-garden-state-rooftop","name":"Garden State Rooftop","area":"Melbourne CBD","lat":-37.81542,"lng":144.971164,"rating":4.1,"address":"Garden State Hotel, 101 Flinders Ln","hours":[[[690,1440]],[[690,1440]],[[690,1440]],[[690,1440]],[[690,1620]],[[720,1620]],[[720,1380]]],"pid":"ChIJ17FTBFxD1moRafdxQd8z_wQ","city":"Melbourne"},{"id":"mel-emerald-peacock","name":"The Emerald Peacock","area":"Melbourne CBD","lat":-37.811449,"lng":144.965539,"rating":4.3,"address":"233 Lonsdale St","hours":[[[960,1380]],[[960,1380]],[[960,1440]],[[960,1440]],[[960,1500]],[[960,1500]],[[960,1380]]],"pid":"ChIJ5fBdNspC1moRAXDdMcwkKYw","city":"Melbourne"},{"id":"mel-young-and-jacksons","name":"Young and Jackson","area":"Melbourne CBD","lat":-37.817341,"lng":144.967163,"rating":4.2,"address":"1 Swanston St","hours":[[[600,1440]],[[600,1440]],[[600,1440]],[[600,1440]],[[600,1440]],[[600,1440]],[[600,1440]]],"pid":"ChIJ3VlKn7ZC1moRnOHqo_15M_I","city":"Melbourne"},{"id":"mel-duke-of-wellington","name":"The Duke of Wellington","area":"Melbourne CBD","lat":-37.816443,"lng":144.970121,"rating":4.3,"address":"146 Flinders St","hours":[[[660,1380]],[[660,1380]],[[660,1440]],[[660,1500]],[[660,1500]],[[660,1500]],[[660,1380]]],"pid":"ChIJ9YePsLdC1moRhmhASJxsSqk","city":"Melbourne"},{"id":"mel-quarterhouse","name":"Quarterhouse","area":"Docklands","lat":-37.819768,"lng":144.952252,"rating":4.7,"address":"693 Collins St","hours":[[[690,1380]],[[690,1440]],[[690,1440]],[[690,1440]],[[690,1500]],[[690,1500]],[[690,1380]]],"pid":"ChIJX5nuSEZd1moRWe7HSa_uM7o","city":"Melbourne"},{"id":"mel-johnnys-green-room","name":"Johnny's Green Room","area":"Carlton","lat":-37.798381,"lng":144.967062,"rating":4,"address":"Level 2, 293-297 Lygon St","hours":[[[720,1380]],[[720,1380]],[[720,1380]],[[720,1380]],[[720,1440]],[[720,1440]],[[720,1380]]],"pid":"ChIJS3c_WtBD1moRSdoTjZt7llI","city":"Melbourne"},{"id":"mel-prince-alfred","name":"Prince Alfred Rooftop","area":"Carlton","lat":-37.800423,"lng":144.962229,"rating":4.2,"address":"191 Grattan St","hours":[[[720,1380]],[[720,1380]],[[720,1500]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1380]]],"pid":"ChIJN5RQIdNC1moRs1htswJSRJY","city":"Melbourne"},{"id":"mel-wolfs-lair","name":"Wolf's Lair","area":"Carlton","lat":-37.797466,"lng":144.967034,"rating":4.5,"address":"Jimmy Watson's, Little Elgin St","hours":[[],[[630,1380]],[[630,1380]],[[630,1380]],[[630,1380]],[[630,1380]],[[630,1140]]],"pid":"ChIJ052tZkVD1moRD-4Z7TFIaKk","city":"Melbourne"},{"id":"mel-runner-up","name":"Runner Up","area":"Collingwood","lat":-37.799271,"lng":144.986514,"rating":4.5,"address":"Level 2, 35 Johnston St","hours":[[],[[1020,1380]],[[1020,1380]],[[960,1380]],[[960,1500]],[[780,1500]],[[900,1320]]],"pid":"ChIJIZCRcZpD1moRghAETO0nWIw","city":"Melbourne"},{"id":"mel-slowpoke","name":"Slowpoke","area":"Collingwood","lat":-37.804023,"lng":144.988493,"rating":4.4,"address":"Level 4, 50 Gipps St","hours":[[],[],[[960,1320]],[[960,1380]],[[960,1380]],[[840,1380]],[[840,1320]]],"pid":"ChIJOxf46OFD1moR7Jysyy_g0rM","city":"Melbourne"},{"id":"mel-easeys","name":"Easey's","area":"Collingwood","lat":-37.797615,"lng":144.986443,"rating":4.3,"address":"Level 3, 48 Easey St","hours":[[[660,1320]],[[660,1320]],[[660,1320]],[[660,1320]],[[660,1380]],[[660,1380]],[[660,1320]]],"pid":"ChIJI0eazx5D1moRIPxFYpXoeCM","city":"Melbourne"},{"id":"mel-naked-in-the-sky","name":"Naked in the Sky","area":"Fitzroy","lat":-37.798765,"lng":144.978198,"rating":4.4,"address":"Naked for Satan, 285 Brunswick St","hours":[[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1500]],[[720,1500]],[[720,1320]]],"pid":"ChIJZTxgryBD1moRLY4a4APof1Q","city":"Melbourne"},{"id":"mel-marquis-of-lorne","name":"Marquis of Lorne","area":"Fitzroy","lat":-37.797213,"lng":144.981978,"rating":4.6,"address":"411 George St","hours":[[[960,1380]],[[960,1380]],[[960,1380]],[[720,1380]],[[720,1500]],[[720,1500]],[[720,1380]]],"pid":"ChIJE4WnxyFD1moRW-Pvjv626S4","city":"Melbourne"},{"id":"mel-provincial-hotel","name":"The Provincial Hotel","area":"Fitzroy","lat":-37.79813,"lng":144.978303,"rating":4.2,"address":"299 Brunswick St","hours":[[[720,1320]],[[720,1320]],[[720,1320]],[[720,1320]],[[720,1620]],[[720,1620]],[[720,1320]]],"pid":"ChIJ7bx8tyBD1moRcvM39mhnAag","city":"Melbourne"},{"id":"mel-full-moon-fever","name":"Full Moon Fever","area":"Abbotsford","lat":-37.800078,"lng":144.993596,"rating":4.6,"address":"Lulie Tavern, 225 Johnston St","hours":[[[960,1380]],[[960,1380]],[[720,1380]],[[720,1500]],[[720,1500]],[[720,1500]],[[720,1380]]],"pid":"ChIJj5-OpwRD1moRTc2_PgcPgWg","city":"Melbourne"},{"id":"mel-cornish-arms","name":"The Cornish Arms","area":"Brunswick","lat":-37.773403,"lng":144.960877,"rating":4.4,"address":"163A Sydney Rd","hours":[[[720,1380]],[[720,1380]],[[720,1380]],[[720,1380]],[[720,1500]],[[720,1500]],[[720,1380]]],"pid":"ChIJRwm4S7Vc1moRsQe2HMiLwyE","city":"Melbourne"},{"id":"mel-gigi-rooftop","name":"Gigi Rooftop","area":"Thornbury","lat":-37.752655,"lng":145.001404,"rating":4.2,"address":"Level 2, 917 High St","hours":[[],[],[],[[990,1320]],[[990,1320]],[[840,1320]],[[840,1320]]],"pid":"ChIJs8PXoiNF1moRx4wmmRLulE0","city":"Melbourne"},{"id":"mel-harlow","name":"Harlow","area":"Richmond","lat":-37.826822,"lng":144.997996,"rating":4.3,"address":"447 Church St","hours":[[[690,1380]],[[690,1380]],[[690,1380]],[[690,1440]],[[690,1560]],[[690,1620]],[[690,1440]]],"pid":"ChIJR6q2WIxC1moRcGVICR5pTVY","city":"Melbourne"},{"id":"mel-corner-hotel","name":"Corner Hotel","area":"Richmond","lat":-37.824965,"lng":144.992759,"rating":4.4,"address":"57 Swan St","hours":[[],[[720,1500]],[[720,1500]],[[720,1500]],[[720,1620]],[[720,1620]],[[720,1500]]],"pid":"ChIJ3br785JC1moR963nGxdKAcA","city":"Melbourne"},{"id":"mel-union-house","name":"Union House","area":"Richmond","lat":-37.826066,"lng":144.999266,"rating":4.4,"address":"270 Swan St","hours":[[[960,1320]],[[960,1320]],[[960,1380]],[[720,1380]],[[720,1500]],[[720,1500]],[[720,1320]]],"pid":"ChIJUSklooxC1moRHCZgAhznvBc","city":"Melbourne"},{"id":"mel-fargo-and-co","name":"Fargo and Co","area":"Richmond","lat":-37.82569,"lng":144.996788,"rating":4.4,"address":"216 Swan St","hours":[[],[],[],[[720,1380]],[[720,1620]],[[720,1620]],[[720,1320]]],"pid":"ChIJ--7iHI1C1moRWVDDY6tdkF8","city":"Melbourne"},{"id":"mel-public-house","name":"Public House","area":"Richmond","lat":-37.826205,"lng":144.99811,"rating":4,"address":"433-435 Church St","hours":[[],[],[],[[720,1320]],[[720,1560]],[[720,1560]],[[720,1380]]],"pid":"ChIJlwPh8YxC1moRgekC18r1aWw","city":"Melbourne"},{"id":"mel-mt-view-hotel","name":"Mt View Hotel","area":"Richmond","lat":-37.818011,"lng":144.992156,"rating":4.3,"address":"68-70 Bridge Rd","hours":[[[720,1380]],[[720,1380]],[[720,1380]],[[720,1380]],[[720,1500]],[[720,1500]],[[720,1380]]],"pid":"ChIJ2cdr2O1C1moRANQmeH32rzE","city":"Melbourne"},{"id":"mel-harvie","name":"Harvie","area":"Armadale","lat":-37.862093,"lng":145.027839,"rating":4.1,"address":"109 Wattletree Rd","hours":[[[900,1320]],[[900,1290]],[[900,1290]],[[900,1320]],[[900,1410]],[[780,1410]],[[780,1320]]],"pid":"ChIJI5HbIt9p1moRNU7lc-3bk5Q","city":"Melbourne"},{"id":"mel-beverly","name":"Beverly","area":"South Yarra","lat":-37.838328,"lng":144.995393,"rating":4.2,"address":"Level 24, 627 Chapel St","hours":[[[960,1380]],[[720,1380]],[[720,1380]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1380]]],"pid":"ChIJXWvslBpD1moRI2sVjMgpSgE","city":"Melbourne"},{"id":"mel-stella","name":"Stella","area":"South Yarra","lat":-37.8446,"lng":144.994347,"rating":4.7,"address":"427 Chapel St","hours":[[],[[1020,1350]],[[1020,1350]],[[720,900],[1020,1350]],[[720,900],[1020,1470]],[[660,900],[1020,1470]],[[660,900],[1020,1320]]],"pid":"ChIJCYXsF6Bp1moRZHx4J6WPlUs","city":"Melbourne"},{"id":"mel-tetto-di-carolina","name":"Tetto di Carolina","area":"South Yarra","lat":-37.83869,"lng":144.988074,"rating":4.5,"address":"48 Toorak Rd","hours":[[],[],[],[],[[900,1500]],[[900,1500]],[]],"pid":"ChIJYSyX_bRD1moRQHmXTaEQXog","city":"Melbourne"},{"id":"mel-arcadia-hotel","name":"Arcadia Hotel","area":"South Yarra","lat":-37.838539,"lng":144.98666,"rating":4.3,"address":"2 Toorak Rd","hours":[[[690,1620]],[[690,1620]],[[690,1620]],[[690,1620]],[[690,1620]],[[690,1620]],[[690,1620]]],"pid":"ChIJETsOOp5C1moRYCqryEDomLg","city":"Melbourne"},{"id":"mel-the-emerson","name":"The Emerson","area":"South Yarra","lat":-37.846366,"lng":144.99121,"rating":3.6,"address":"141-145 Commercial Rd","hours":[[],[],[],[[1020,1320]],[[1140,1740]],[[900,1740]],[]],"pid":"ChIJh1-3NCRo1moR7dxH9c4IIbE","city":"Melbourne"},{"id":"mel-osborne-rooftop","name":"The Osborne Rooftop","area":"South Yarra","lat":-37.846184,"lng":144.989993,"rating":3.9,"address":"119 Commercial Rd","hours":[[],[[720,1260]],[[720,1260]],[[720,1260]],[[720,1500]],[[720,1620]],[[720,1500]]],"pid":"ChIJsQogFSRo1moR2h7D4KpX3TM","city":"Melbourne"},{"id":"mel-rufio","name":"Rufio","area":"St Kilda","lat":-37.868178,"lng":144.990158,"rating":4.7,"address":"188 Carlisle St","hours":[[],[],[[1020,1320]],[[1020,1320]],[[1020,1380]],[[720,1380]],[[720,1260]]],"pid":"ChIJyR9Yc-pp1moRSGY0m1zvR68","city":"Melbourne"},{"id":"mel-the-espy","name":"The Espy","area":"St Kilda","lat":-37.864218,"lng":144.972853,"rating":4.3,"address":"11 The Esplanade","hours":[[[720,1380]],[[720,1380]],[[720,1380]],[[720,1380]],[[720,1620]],[[720,1620]],[[720,1380]]],"pid":"ChIJZwv6MGVo1moRnQQHiuprVB0","city":"Melbourne"},{"id":"mel-baxter","name":"Baxter","area":"St Kilda","lat":-37.865428,"lng":144.972347,"rating":4.4,"address":"St Kilda Sea Baths, 10-18 Jacka Blvd","hours":[[],[],[[1020,1380]],[[1020,1380]],[[720,1440]],[[720,1500]],[[720,1380]]],"pid":"ChIJQwVGMXto1moRxnE3KLpu7Ls","city":"Melbourne"},{"id":"mel-local-taphouse","name":"The Local Taphouse","area":"St Kilda","lat":-37.868121,"lng":144.989994,"rating":4.6,"address":"184 Carlisle St","hours":[[[720,1380]],[[720,1380]],[[720,1380]],[[720,1380]],[[720,1500]],[[720,1500]],[[720,1380]]],"pid":"ChIJeyLgtURo1moR73XjND_zHZ8","city":"Melbourne"},{"id":"mel-ellora","name":"Ellora","area":"St Kilda","lat":-37.862743,"lng":144.972902,"rating":4.7,"address":"1 Fitzroy St","hours":[[],[],[],[[960,1350]],[[960,1440]],[[750,1530]],[[750,1380]]],"pid":"ChIJFdOgJLFp1moReS2oh8DGwGI","city":"Melbourne"},{"id":"mel-mirror-mirror","name":"Mirror Mirror","area":"South Melbourne","lat":-37.830914,"lng":144.959879,"rating":4.7,"address":"Level 3, 209 Clarendon St","hours":[[],[],[[900,1380]],[[900,1380]],[[720,1500]],[[720,1500]],[[720,1200]]],"pid":"ChIJscqLAs9n1moRjeTLzaf3J8s","city":"Melbourne"},{"id":"mel-brewmanity","name":"Brewmanity","area":"South Melbourne","lat":-37.830548,"lng":144.962937,"rating":4.7,"address":"50 Tope St","hours":[[[540,1320]],[[720,1320]],[[720,1320]],[[720,1380]],[[720,1500]],[[720,1500]],[[720,1320]]],"pid":"ChIJoXOSxPtD1moRg2_8h_A3INs","city":"Melbourne"},{"id":"mel-albion-rooftop","name":"The Albion Rooftop","area":"South Melbourne","lat":-37.831577,"lng":144.95602,"rating":4.1,"address":"172 York St","hours":[[],[],[],[],[[1020,1740]],[[900,1740]],[]],"pid":"ChIJZ2Hf0_5n1moR3lowcrH6WS8","city":"Melbourne"},{"id":"mel-skinny-dog","name":"Skinny Dog Hotel","area":"Kew","lat":-37.806724,"lng":145.030375,"rating":4.2,"address":"155 High St","hours":[[[720,1320]],[[720,1320]],[[720,1320]],[[720,1380]],[[720,1500]],[[720,1500]],[[720,1320]]],"pid":"ChIJvZ8YLsZD1moRkIifV7ZSlR4","city":"Melbourne"},{"id":"mel-nineteenforty","name":"Nineteenforty Rooftop","area":"Hawthorn East","lat":-37.830655,"lng":145.055772,"rating":4,"address":"200 Camberwell Rd","hours":[[],[],[],[],[[1020,1320]],[[900,1320]],[[900,1200]]],"pid":"ChIJ4-ezGoRB1moRIFnFIj2ixwo","city":"Melbourne"},{"id":"mel-olympia","name":"Olympia","area":"Oakleigh","lat":-37.899894,"lng":145.089444,"rating":4.7,"address":"16-18 Portman St","hours":[[[990,1380]],[[990,1290]],[[990,1290]],[[990,1320]],[[900,1380]],[[780,1410]],[[780,1260]]],"pid":"ChIJWVS19Ihr1moRASEJayFHLtI","city":"Melbourne"},{"id":"mel-suburban-rooftop","name":"The Suburban Rooftop","area":"Ringwood","lat":-37.814255,"lng":145.228441,"rating":4.2,"address":"Town Square, Eastland, Maroondah Hwy","hours":[[[720,1320]],[[720,1320]],[[720,1320]],[[720,1320]],[[720,1440]],[[720,1440]],[[720,1320]]],"pid":"ChIJfzJ_ZtY71moRF2jbA7goSXA","city":"Melbourne"},{"id":"mel-hobsons-bay-hotel","name":"Hobson's Bay Hotel","area":"Williamstown","lat":-37.858999,"lng":144.900326,"rating":4.1,"address":"28 Ferguson St","hours":[[[720,1500]],[[720,1500]],[[720,1500]],[[720,1500]],[[720,1500]],[[720,1500]],[[720,1500]]],"pid":"ChIJNRvmysJn1moRj0w40Ct7Oys","city":"Melbourne"},{"id":"per-lils-rooftop","name":"Lil's Rooftop","area":"Perth CBD","lat":-31.951371,"lng":115.852685,"rating":4.7,"address":"437 Murray St","hours":[[[690,1380]],[[690,1380]],[[690,1380]],[[690,1440]],[[690,1560]],[[660,1560]],[[690,1440]]],"pid":"ChIJ3aSBl267MioRxVd1gK7B6rw","city":"Perth"},{"id":"per-the-aviary","name":"The Aviary","area":"Perth CBD","lat":-31.952232,"lng":115.857766,"rating":4.5,"address":"Level 1, 140 William St","hours":[[[660,1380]],[[660,1380]],[[660,1380]],[[660,1440]],[[660,1500]],[[660,1500]],[[660,1440]]],"pid":"ChIJk1isoNa6MioRDmqv9PMsjBA","city":"Perth"},{"id":"per-rooftop-at-qt","name":"Rooftop at QT","area":"Perth CBD","lat":-31.953867,"lng":115.860998,"rating":4.3,"address":"Level 18, 133 Murray St","hours":[[[900,1320]],[[900,1320]],[[900,1320]],[[900,1320]],[[840,1440]],[[840,1440]],[[900,1320]]],"pid":"ChIJcbycEp27MioRxcQldySJRxo","city":"Perth"},{"id":"per-terrarium","name":"Terrarium","area":"Perth CBD","lat":-31.955343,"lng":115.857298,"rating":4.8,"address":"99 St Georges Tce, entry via Howard St","hours":[[],[[960,1440]],[[960,1440]],[[960,1440]],[[840,1440]],[[960,1440]],[]],"pid":"ChIJb55yQwK7MioRf4832Vp-mEI","city":"Perth"},{"id":"per-stories","name":"Stories","area":"Perth CBD","lat":-31.950605,"lng":115.85844,"rating":4.6,"address":"Yagan Square, 420 Wellington St","hours":[[[690,1380]],[[690,1380]],[[690,1380]],[[690,1440]],[[690,1560]],[[690,1560]],[[690,1440]]],"pid":"ChIJfbWjzii7MioRfvwhO6oxJJw","city":"Perth"},{"id":"per-farra","name":"Farra","area":"Perth CBD","lat":-31.954581,"lng":115.862279,"rating":4.3,"address":"Hyde Perth, 37 Pier St","hours":[[],[[720,870],[1020,1320]],[[720,870],[1020,1320]],[[720,870],[1020,1320]],[[720,870],[1020,1320]],[[720,870],[1020,1320]],[[720,900]]],"pid":"ChIJER6tWgK7MioR8ax35-UkT-4","city":"Perth"},{"id":"per-aurora-rooftop","name":"Aurora Rooftop Bar","area":"Perth CBD","lat":-31.95135,"lng":115.851688,"rating":4.2,"address":"The Melbourne Hotel, 33 Milligan St","hours":[[],[],[],[],[[960,1350]],[],[]],"pid":"ChIJDRyeMP6lMioRa5sisY-akbU","city":"Perth"},{"id":"per-songbird","name":"Songbird Bar","area":"Elizabeth Quay","lat":-31.958441,"lng":115.858161,"rating":4.2,"address":"Ritz-Carlton, 1 Barrack St","hours":[[[960,1320]],[[960,1320]],[[960,1320]],[[960,1320]],[[900,1440]],[[900,1440]],[[960,1320]]],"pid":"ChIJ72Mb8q67MioRog8tSi0lfrM","city":"Perth"},{"id":"per-hq-bar","name":"HQ Bar + Kitchen","area":"Elizabeth Quay","lat":-31.956232,"lng":115.857605,"rating":4.4,"address":"Rooftop, 18 The Esplanade","hours":[[[960,1320]],[[960,1320]],[[720,1320]],[[720,1320]],[[720,1320]],[[900,1320]],[]],"pid":"ChIJwR-xwrK7MioRKnqPFYfN8t4","city":"Perth"},{"id":"per-18-knots","name":"18 Knots","area":"Elizabeth Quay","lat":-31.959377,"lng":115.859151,"rating":4.2,"address":"Level 18, DoubleTree, 1 Barrack Square","hours":[[[720,1320]],[[720,1320]],[[720,1320]],[[720,1320]],[[720,1440]],[[720,1440]],[[720,1320]]],"pid":"ChIJZbksfa27MioRLqfcShcRmnU","city":"Perth"},{"id":"per-henrys-rooftop","name":"Henry's Rooftop","area":"Elizabeth Quay","lat":-31.958383,"lng":115.85749,"rating":3.9,"address":"The Reveley, Ophir Walk","hours":[[[660,1290]],[[660,1290]],[[660,1290]],[[660,1380]],[[660,1380]],[[660,1380]],[[660,1380]]],"pid":"ChIJ-UpOKSq7MioRS2qPIs_Gp5Y","city":"Perth"},{"id":"per-the-point","name":"The Point Rooftop","area":"East Perth","lat":-31.964762,"lng":115.878151,"rating":4.1,"address":"306 Riverside Dr","hours":[[],[],[[720,1320]],[[720,1320]],[[720,1440]],[[720,1440]],[[720,1320]]],"pid":"ChIJmbdEARe7MioRuvDxtipqfnA","city":"Perth"},{"id":"per-mechanics-institute","name":"Mechanics Institute","area":"Northbridge","lat":-31.948779,"lng":115.859924,"rating":4.5,"address":"Rear, 222 William St","hours":[[],[[960,1440]],[[960,1440]],[[960,1440]],[[900,1440]],[[900,1440]],[[900,1440]]],"pid":"ChIJHTUdFdG6MioRzgZ0kEvQ0Cg","city":"Perth"},{"id":"per-the-standard","name":"The Standard","area":"Northbridge","lat":-31.949442,"lng":115.857785,"rating":4.4,"address":"28 Roe St","hours":[[],[],[[960,1320]],[[960,1320]],[[960,1440]],[[720,1440]],[[720,1320]]],"pid":"ChIJlweC4NO6MioRNUd3FfUnH0I","city":"Perth"},{"id":"per-tiki-as-fk","name":"Tiki as FK","area":"Northbridge","lat":-31.94889,"lng":115.8582,"rating":4.5,"address":"91a James St","hours":[[[1200,1560]],[[1200,1560]],[[1200,1560]],[[1200,1560]],[[960,1560]],[[960,1560]],[]],"pid":"ChIJx22KYdG6MioRbI_xXTDsvjg","city":"Perth"},{"id":"per-lucky-chans","name":"Lucky Chan's","area":"Northbridge","lat":-31.946536,"lng":115.860781,"rating":4,"address":"311 William St","hours":[[],[[1020,1320]],[[1020,1320]],[[1020,1320]],[[1020,1380]],[[720,960],[1020,1380]],[[1020,1320]]],"pid":"ChIJQ0lDsdG6MioR5pM9_8q5l-o","city":"Perth"},{"id":"per-the-beaufort","name":"The Beaufort","area":"Highgate","lat":-31.93793,"lng":115.86962,"rating":4.7,"address":"521-525 Beaufort St","hours":[[[690,1380]],[[690,1380]],[[690,1380]],[[690,1380]],[[690,1440]],[[660,1440]],[[660,1320]]],"pid":"ChIJnxW_5vG7MioRX91ky-rw3Wk","city":"Perth"},{"id":"per-national-hotel","name":"The National Hotel","area":"Fremantle","lat":-32.05442,"lng":115.746309,"rating":4.3,"address":"98 High St","hours":[[[660,1440]],[[660,1440]],[[660,1500]],[[660,1500]],[[660,1500]],[[660,1500]],[[660,1440]]],"pid":"ChIJ5w_brHqhMioRxl0ks9CO-J0","city":"Perth"},{"id":"per-the-arbor","name":"The Arbor","area":"Fremantle","lat":-32.056644,"lng":115.749906,"rating":4.1,"address":"Old Synagogue, 92 South Tce","hours":[[[690,1440]],[[690,1440]],[[690,1440]],[[690,1440]],[[690,1500]],[[690,1500]],[[690,1500]]],"pid":"ChIJ96NoM7ahMioRbXDUQ3BshFA","city":"Perth"},{"id":"per-sweetwater","name":"Sweetwater Rooftop Bar","area":"East Fremantle","lat":-32.041176,"lng":115.764175,"rating":4.5,"address":"Level 6, 1 Silas St","hours":[[],[[1020,1320]],[[1020,1320]],[[720,1320]],[[720,1380]],[[660,1440]],[[660,1320]]],"pid":"ChIJF972592jMioRs-L4IT4CTxI","city":"Perth"},{"id":"per-storehouse","name":"Storehouse","area":"Subiaco","lat":-31.946121,"lng":115.82283,"rating":4.3,"address":"Vibe Hotel, 9 Alvan St","hours":[[[390,600]],[[390,600],[720,900],[960,1260]],[[390,600],[720,900],[960,1260]],[[390,600],[720,900],[960,1260]],[[390,600],[720,870],[960,1320]],[[420,630],[960,1320]],[[420,630]]],"pid":"ChIJjzfJYR-lMioRleCYmvhp-tg","city":"Perth"},{"id":"per-the-claremont","name":"The Claremont Rooftop","area":"Claremont","lat":-31.981319,"lng":115.781127,"rating":4.3,"address":"1 Bay View Tce","hours":[[[660,1320]],[[660,1320]],[[660,1320]],[[660,1380]],[[660,1440]],[[660,1440]],[[660,1320]]],"pid":"ChIJ87HmJ0ikMioR1jGfwNNN6Lo","city":"Perth"},{"id":"per-oyster-bar","name":"Oyster Bar","area":"Elizabeth Quay","lat":-31.957225,"lng":115.856255,"rating":3.9,"address":"21 Geoffrey Bolton Ave","hours":[[[660,1410]],[[660,1410]],[[660,1410]],[[660,1410]],[[660,1410]],[[660,1410]],[[660,1410]]],"pid":"ChIJp9lobCq7MioRycw_yBgJ8DU","city":"Perth"},{"id":"per-hello-rooftop","name":"Hello Rooftop","area":"Northbridge","lat":-31.948656,"lng":115.859882,"rating":3.8,"address":"The Rechabite, 224 William St","hours":[[[1020,1440]],[[1020,1440]],[[1020,1440]],[[1020,1440]],[[720,1440]],[[690,1440]],[[690,1440]]],"pid":"ChIJj1ilOcC7MioRPZZLeZg-KL8","city":"Perth"},{"id":"per-bobs-bar","name":"Bob's Bar","area":"Perth CBD","lat":-31.95527,"lng":115.85698,"rating":5,"address":"Level 11, Print Hall, 125 St Georges Tce","hours":[[],[],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[]],"pid":"ChIJpZINGQC7MioRgF1J5vsa55M","city":"Perth"},{"id":"per-sixty-cats","name":"Sixty Cats","area":"Perth CBD","lat":-31.955634,"lng":115.858067,"rating":5,"address":"77 St Georges Tce","hours":[[[720,1080]],[[660,1260]],[[660,1260]],[[660,1290]],[[660,1320]],[[990,1290]],[]],"pid":"ChIJM6IL5Lm7MioRbGSYCebwqac","city":"Perth"},{"id":"per-baha","name":"BAHA","area":"Perth CBD","lat":-31.95193,"lng":115.852766,"rating":4,"address":"Level 1, 900 Hay St","hours":[[[690,1260]],[[690,1260]],[[690,1260]],[[690,1260]],[[690,1260]],[[690,1260]],[[690,1260]]],"pid":"ChIJDYHe6kC7MioR9Qu0_UIRsWM","city":"Perth"},{"id":"per-generous-squire","name":"The Generous Squire","area":"Perth CBD","lat":-31.951447,"lng":115.853879,"rating":4.4,"address":"397 Murray St","hours":[[[630,1320]],[[630,1320]],[[630,1320]],[[630,1320]],[[630,1440]],[[630,1440]],[[630,1320]]],"pid":"ChIJJ1nHotS6MioR0RrYzidYDbI","city":"Perth"},{"id":"per-mr-chapple","name":"Mr Chapple","area":"Fremantle","lat":-32.056813,"lng":115.749677,"rating":4,"address":"92 South Tce","hours":[[[480,1380]],[[480,1380]],[[480,1380]],[[480,1380]],[[480,1500]],[[480,1500]],[[480,1500]]],"pid":"ChIJUyq0G2GhMioR8-W2KpIUmP4","city":"Perth"},{"id":"gc-lulu","name":"Lulu Rooftop","area":"Surfers Paradise","lat":-28.001643,"lng":153.429416,"rating":4.5,"address":"Level 2, 4 Orchid Ave","hours":[[[720,1320]],[[720,1320]],[[720,1320]],[[720,1320]],[[720,1620]],[[720,1620]],[[720,1320]]],"pid":"ChIJqyVHxNAFkWsRSTLfaqNB8sc","city":"Gold Coast"},{"id":"gc-cali-beach","name":"Cali Beach","area":"Surfers Paradise","lat":-27.998562,"lng":153.429156,"rating":4.1,"address":"21a Elkhorn Ave","hours":[[],[],[],[],[[1020,1500]],[[720,1500]],[[720,1380]]],"pid":"ChIJ7WPf7J0FkWsR-lGwI_zJTLM","city":"Gold Coast"},{"id":"gc-island-rooftop","name":"The Island Rooftop","area":"Surfers Paradise","lat":-28.002898,"lng":153.428434,"rating":4.1,"address":"The Island, 3128 Surfers Paradise Blvd","hours":[[],[],[],[[960,1440]],[[660,1440]],[[660,1440]],[[660,1440]]],"pid":"ChIJYQs1pM8FkWsRlqPnPFh-3So","city":"Gold Coast"},{"id":"gc-beer-garden","name":"Surfers Paradise Beer Garden","area":"Surfers Paradise","lat":-28.002146,"lng":153.429393,"rating":4.7,"address":"Cnr Cavill & Orchid Ave","hours":[[[600,1740]],[[600,1740]],[[600,1740]],[[600,1740]],[[600,1740]],[[600,1740]],[[600,1740]]],"pid":"ChIJNZGbwXIFkWsR_Tf39ZhLhTY","city":"Gold Coast"},{"id":"gc-skyline-rooftop","name":"Skyline Rooftop","area":"Surfers Paradise","lat":-28.000617,"lng":153.42815,"rating":4.1,"address":"Waxy's, 3206 Surfers Paradise Blvd","hours":[[[600,1440]],[[600,1440]],[[600,1440]],[[600,1440]],[[600,1560]],[[600,1560]],[[600,1440]]],"pid":"ChIJUxMdj3IFkWsRwD8sxDVMP2c","city":"Gold Coast"},{"id":"gc-exhibitionist","name":"The Exhibitionist Bar","area":"Surfers Paradise","lat":-28.002498,"lng":153.416348,"rating":4.1,"address":"Level 5, HOTA, 135 Bundall Rd","hours":[[[600,960]],[[600,960]],[[600,1320]],[[600,1320]],[[600,1320]],[[600,1320]],[[600,960]]],"pid":"ChIJE3QPhV4FkWsRGy_qFEd_OU8","city":"Gold Coast"},{"id":"gc-nineteen","name":"Nineteen at The Star","area":"Broadbeach","lat":-28.031323,"lng":153.429215,"rating":4.4,"address":"Level 19, The Darling, 1 Casino Dr","hours":[[],[[1050,1320]],[[960,1320]],[[960,1320]],[[720,900],[960,1320]],[[960,1320]],[]],"pid":"ChIJAQAAE_sEkWsRMrkPnAMI7LI","city":"Gold Coast"},{"id":"gc-charlies-rooftop","name":"Charlie's Rooftop","area":"Mermaid Beach","lat":-28.045117,"lng":153.434806,"rating":4.9,"address":"2460 Gold Coast Hwy","hours":[[[1020,1320]],[],[],[[1020,1320]],[[900,1320]],[[720,1320]],[[720,1320]]],"pid":"ChIJsT0PpgEFkWsR2nB87TdUfrc","city":"Gold Coast"},{"id":"gc-juju","name":"JuJu","area":"Mermaid Beach","lat":-28.058505,"lng":153.438705,"rating":4.2,"address":"2235 Gold Coast Hwy","hours":[[],[],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]],[[720,1440]]],"pid":"ChIJO6sDzUUFkWsRCcoEdiBcE1A","city":"Gold Coast"},{"id":"gc-sueno","name":"Sueño Rooftop","area":"Mermaid Beach","lat":-28.059432,"lng":153.438553,"rating":4.5,"address":"2217 Gold Coast Hwy","hours":[[],[],[],[[960,1380]],[[720,1380]],[[720,1380]],[[720,1380]]],"pid":"ChIJYaBW7vUFkWsRXth6WaBMsME","city":"Gold Coast"},{"id":"gc-justin-lane","name":"Justin Lane","area":"Burleigh Heads","lat":-28.08876,"lng":153.451592,"rating":4.1,"address":"1708-1710 Gold Coast Hwy","hours":[[[1020,1260]],[[1020,1260]],[[720,1260]],[[720,1260]],[[720,1440]],[[720,1440]],[[720,1260]]],"pid":"ChIJa7WfupADkWsRjbtHpFFyHUU","city":"Gold Coast"},{"id":"gc-burleigh-pavilion","name":"Burleigh Pavilion","area":"Burleigh Heads","lat":-28.089596,"lng":153.454887,"rating":3.7,"address":"3a/43 Goodwin Tce","hours":[[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]],[[660,1440]]],"pid":"ChIJfwJxNNoDkWsRSyCoRDudOSM","city":"Gold Coast"},{"id":"gc-the-collective","name":"The Collective","area":"Palm Beach","lat":-28.12122,"lng":153.472541,"rating":4.4,"address":"1128 Gold Coast Hwy","hours":[[[720,1230]],[[720,1230]],[[720,1230]],[[720,1230]],[[720,1290]],[[720,1290]],[[720,1230]]],"pid":"ChIJ_fGgzjICkWsRSPIuitWqiEw","city":"Gold Coast"},{"id":"gc-frida-sol","name":"Frida Sol","area":"Palm Beach","lat":-28.118809,"lng":153.471048,"rating":4.4,"address":"1176 Gold Coast Hwy","hours":[[[1020,1260]],[[1020,1290]],[[720,1290]],[[720,1290]],[[720,1320]],[[720,1320]],[[720,1230]]],"pid":"ChIJYXxW0A0DkWsRlUQVJkepUv0","city":"Gold Coast"},{"id":"gc-aviary-rooftop","name":"Aviary Rooftop Bar","area":"Southport","lat":-27.955926,"lng":153.384247,"rating":4.2,"address":"Mantra at Sharks, 5 Melia Ct","hours":[[],[],[[960,1260]],[[960,1260]],[[960,1380]],[[960,1380]],[[960,1260]]],"pid":"ChIJg8ENFLwRkWsR4ECnrhwxxxE","city":"Gold Coast"},{"id":"gc-mr-pps","name":"Mr PP's Rooftop","area":"Southport","lat":-27.967658,"lng":153.413431,"rating":4.6,"address":"43 Nerang St","hours":[[[720,1320]],[[720,1320]],[[720,1320]],[[720,1320]],[[720,1380]],[[720,1380]],[[720,1320]]],"pid":"ChIJwWWanfIPkWsR9HalsvSh1d4","city":"Gold Coast"}],VENUES_V=1795771433;
let venuesV=VENUES_V;
(()=>{try{const c=JSON.parse(localStorage.getItem("rr-venues")||"null");if(c&&c.v>VENUES_V&&Array.isArray(c.bars)&&c.bars.length>20){VENUES.splice(0,VENUES.length,...c.bars);venuesV=c.v}}catch(e){}})();
function refreshVenues(){
  const url=!BUNDLED&&/github\.io$|rooftoproulette\.com/.test(location.hostname)?(window.RR_ROOT||"")+"venues.json":"https://rooftoproulette.com/venues.json";
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
const LAST_ORDERS=10,CHECKIN_M=75,LEAVE_M=150,DWELL_MIN=3,SOON=30,FINAL=20;
const DWELL=()=>{const g_=S.game;return g_&&g_.demo?0:DWELL_MIN*60000};   // the demo counts a bar the moment you arrive
const KEY="rr-app-v3",HKEY="rr-history-v2";
const AN=window.RR_CONFIG,APPV="v98-251";
const SITE="https://rooftoproulette.com/",SUPPORT="hello@rooftoproulette.com",IG="https://www.instagram.com/rooftoproulette/",TT="https://www.tiktok.com/@rooftoproulette",PLAY="https://play.google.com/store/apps/details?id=com.rooftoproulette.app";
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
const I={link:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg>',map:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/></svg>',
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
// every saved crawl gets the fields the tab and crawl card rely on, whichever version (or friend's phone) saved it
const fixRec=r=>{if(!r||typeof r!=="object")return null;if(!Array.isArray(r.visits))r.visits=[];r.visits=r.visits.filter(v=>v&&v.id);
  if(!(Array.isArray(r.areas)&&r.areas.length)){let a="";try{a=(r.zone&&r.zone.name)||(r.center?nearestSuburb(r.center):"")}catch(e){}r.areas=[a||""]}
  if(!Array.isArray(r.moves))r.moves=[];if(!Array.isArray(r.excluded))r.excluded=[];if(!r.startedAt&&r.visits[0])r.startedAt=r.visits[0].arrivedAt;if(!r.len&&r.mode!=="cruise")r.len=60;return r};
const readH=k=>{try{return (JSON.parse(localStorage.getItem(k)||"[]")||[]).map(fixRec).filter(Boolean)}catch(e){return []}};
const writeH=(k,L)=>{try{localStorage.setItem(k,JSON.stringify(L))}catch(e){for(let i=L.length-1;i>=0;i--){if(L[i].photo){L[i].photo=null;try{localStorage.setItem(k,JSON.stringify(L));return}catch(_){}}}}};
// One-off: before the split, test games went into the real history. A test game is one marked as test, dated in the
// future (time travel), or whose start point is exactly the first bar (test mode puts it there; real GPS never lands on it).
(()=>{try{if(localStorage.getItem("rr-hsplit"))return;const all=readH(HKEY),real=[],test=[];
  all.forEach(r=>{const a=(r.visits||[]).find(v=>v.arrivedAt!=null),b=a&&byId(a.id),sp=r.startPos;
    const atBar=b&&sp&&Math.abs(sp.lat-b.lat)<1e-5&&Math.abs(sp.lng-b.lng)<1e-5;
    if(r.test||r.startedAt>Date.now()+3600000||atBar){r.test=true;test.push(r)}else{r.test=false;real.push(r)}});
  if(test.length){writeH(TKEY,test.concat(readH(TKEY)).sort((x,y)=>y.startedAt-x.startedAt));writeH(HKEY,real)}
  localStorage.setItem("rr-hsplit","1")}catch(e){}})();
// a simulated friend's crawl (test mode) belongs on the test tab: move any that landed on the real tab before that was fixed
try{const R=readH(HKEY),sim=R.filter(r=>/^SIM/.test(r.liveId||""));if(sim.length){writeH(HKEY,R.filter(r=>!/^SIM/.test(r.liveId||"")));const T=readH(TKEY);sim.forEach(r=>{r.test=true;if(!T.some(x=>x.id===r.id))T.unshift(r)});writeH(TKEY,T)}}catch(e){}
let hTest=!!S.test,H=readH(hTest?TKEY:HKEY);
function syncH(){if(!!S.test!==hTest){hTest=!!S.test;H=readH(hTest?TKEY:HKEY)}}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}try{if(typeof liveKick==="function"&&S.game&&S.game.live)liveKick()}catch(e){}};   // a live crawl: friends see the change straight away
const saveH=()=>{writeH(hTest?TKEY:HKEY,H);if(!hTest)tabSyncSoon()};
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
  // the demo is practice from home at any hour: every bar's open while you're playing it (browsing Rooftops still shows real hours)
  if(S.game&&S.game.demo&&S.route==="play"){const r=openState0(v,ts);if(r.open&&r.until>SOON)return r;const {day}=sydAt(ts,TZ[v.city||"Sydney"]),cs=(v.hours[day]||[]).map(h=>h[1]);return {open:true,until:600,closeAt:(cs.length?Math.max(...cs):1440)%1440}}
  return openState0(v,ts)}
function openState0(v,ts){
  const {day,min}=sydAt(ts,TZ[v.city||"Sydney"]),prev=(day+6)%7;
  for(const [o,c] of v.hours[prev]) if(c>1440&&min<c-1440) return {open:true,until:c-1440-min,closeAt:c-1440};
  let opens=null;
  for(const [o,c] of v.hours[day]){if(min>=o&&min<c) return {open:true,until:c-min,closeAt:c%1440};if(o>min&&(opens===null||o<opens))opens=o}
  return {open:false,opens};
}
const openOK=(v,ts)=>{const s=openState(v,ts);return s.open&&s.until>SOON};
function clock12(m){m=((m%1440)+1440)%1440;let h=Math.floor(m/60),mm=m%60;const ap=h>=12?"pm":"am";h=h%12||12;return h+(mm?":"+String(mm).padStart(2,"0"):"")+ap}
// clock text: 59:59 under an hour, 1:44:42 from an hour (never "104:42")
const mmss=ms=>{ms=Math.max(0,ms);const s=Math.floor(ms/1000),h=Math.floor(s/3600),m=Math.floor(s/60)%60,p=n=>String(n).padStart(2,"0");return h?h+":"+p(m)+":"+p(s%60):m+":"+p(s%60)};
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
// Not near a city we cover (yet), tapped Play: pick a city first (closest first), then a demo crawl there or a look around before you go.
function farSheet(){track("far_from_city",{});const live=CITIES.filter(x=>x.live).map(c=>({c,d:here?dist(here,c):0})).sort((a,b)=>a.d-b.d);
  sheet(`<h3>Pick a city</h3><div class="opts" style="margin-top:12px">${live.map(({c})=>{const n=VENUES.filter(v=>cityOf(v)===c.name).length;
    return `<button class="opt" type="button" data-fc="${c.name}"><span class="ic">${I.city}</span><span class="t"><b>${c.name}</b><small>${n} rooftop bars</small></span></button>`}).join("")}</div>`,()=>{
    $("sheetBody").querySelectorAll("[data-fc]").forEach(b=>b.onclick=()=>{S.city=b.dataset.fc;S.cityManual=true;S.cityManualRun=RUN;save();track("explore_city",{city:S.city,from:"far"});farCitySheet()})})}
function farCitySheet(){const c=S.city;
  sheet(`<h3>${esc(c)}</h3><p class="note" style="margin:4px 0 16px">Try a practice crawl or build your Hit list.</p>
    <div class="acts"><button class="btn" type="button" id="fcDemo">${I.dice} Practice crawl</button><button class="btn dark" type="button" id="fcBrowse">See the rooftops</button></div>`,()=>{
    $("fcDemo").onclick=()=>{closeSheet();track("demo_from_far",{city:c});startDemo()};
    $("fcBrowse").onclick=()=>{closeSheet();go("bars")}})}
// Explore another city: pick one, then its rooftops open on the Rooftops tab.
function tripSheet(){const live=CITIES.filter(x=>x.live);
  sheet(`<h3>Pick a city</h3><div class="opts" style="margin-top:12px">${live.map(c=>{const n=VENUES.filter(v=>cityOf(v)===c.name).length;
    return `<button class="opt" type="button" data-fc="${c.name}"><span class="ic">${I.city}</span><span class="t"><b>${c.name}</b><small>${n} rooftop bars</small></span></button>`}).join("")}</div>`,()=>{
    $("sheetBody").querySelectorAll("[data-fc]").forEach(b=>b.onclick=()=>{S.city=b.dataset.fc;S.cityManual=true;S.cityManualRun=RUN;save();track("explore_city",{city:S.city});closeSheet();go("bars")})})}
// The demo: a 1-hour timed game in a zone you pick (it opens on Circular Quay, or your own city's centre). "I'm here" stands in for the walk, "Skip 3 min" for the wait.
const DEMO_START={lat:-33.8612,lng:151.2110,name:"Circular Quay"};let DEMO_REC=null;
function askDemo(before){sheet(`<h3>Practice crawl</h3><p class="note">For a practice run from home. This won't appear in “My&nbsp;Tab” as a completed&nbsp;crawl.</p><div class="acts"><button class="btn" type="button" id="dmGo">Start practice crawl</button><button class="btn dark" type="button" id="dmNo">Cancel</button></div>`,()=>{
  $("dmNo").onclick=closeSheet;$("dmGo").onclick=()=>{closeSheet();if(before)before();startDemo()}})}
// The demo starts with picking a zone, same as a real crawl: drag the map, pinch or slide the radius, then go.
// It's practice from anywhere, any hour, so every bar counts as open and you're dropped in the middle of it.
function startDemo(){if(S.game)return;ac();clearInactiveZoneSetup();
  const range={lo:.5,hi:1,ticks:[[.5,"500 m"],[.75,"750 m"],[1,"1 km"]]},cc=S.city!=="Sydney"&&CITIES.find(x=>x.live&&x.name===S.city&&x.lat),z=cc?{lat:cc.lat,lng:cc.lng,r:1}:{lat:DEMO_START.lat,lng:DEMO_START.lng,r:1};
  const pool=zz=>{const all=playable(inCircle(zz,zz.r),false);return {all,open:all}};
  const ov=document.createElement("div");ov.className="mapfull demozone";document.body.appendChild(ov);requestAnimationFrame(()=>ov.classList.add("on"));
  const drop=()=>{if(rrMap){try{rrMap.remove()}catch(e){}rrMap=null}};
  const close=()=>{ov.classList.remove("on");setTimeout(()=>{drop();ov.remove()},220)};
  // the same panel as a real crawl's setup: drag it up (or tap See list) for the rooftops in the circle, behind the same spoiler question.
  // Every rooftop counts as open in practice, so the list is everything in the circle.
  let cur=z,spoiled=false;
  const list=()=>{const L=pool(cur).all.slice().sort((a,c)=>dist(cur,a)-dist(cur,c));
    return {title:`${L.length} rooftop${L.length===1?"":"s"} open in your zone`,html:`<div class="card zlist">${L.map(v=>`<div class="zrow"><button class="t zopen" type="button" data-z="${v.id}"><b>${esc(v.name)}</b><small>${esc(v.area)}</small></button><span class="zd">${mOrKm(dist(cur,v))}</span></div>`).join("")}</div>`,
      bind(root){root.querySelectorAll("[data-z]").forEach(x=>x.onclick=()=>barSheet(byId(x.dataset.z)))},gate:()=>!spoiled,ungate:()=>{spoiled=true}}};
  zonePanel(ov,{range,title:"Pick your zone",sub:"A 1-hour practice run.",go:"Start the practice crawl",back:"Cancel",list});
  $("mvX").onclick=close;
  rrZoneBind(z,null,()=>false,(P,zz)=>{cur=zz;const n=P.all.length,b=$("mvGo");if(!b)return;
    $("mvNote").textContent=n<2?"Not enough rooftops here. Try somewhere busier.":"Every rooftop's open in a practice crawl, whatever the time.";
    b.disabled=n<2;b.onclick=()=>{ov.remove();drop();startDemoAt({lat:zz.lat,lng:zz.lng},zz.r)}},{...range,pool})}
function startDemoAt(st,r){if(S.game)return;const c=CITIES.filter(x=>x.live).map(x=>({x,d:dist(st,x)})).sort((a,b)=>a.d-b.d)[0],city=c?c.x.name:"Sydney";S.city=city;
  S.game={id:"demo"+Date.now(),demo:true,city,test:false,started:false,startedAt:null,endsAt:null,len:60,radius:r,newOnly:false,
    zoneN:playable(inCircle(st,r),false).length,center:{lat:st.lat,lng:st.lng},startPos:{lat:st.lat,lng:st.lng},areas:[nearestSuburb(st)],moves:[],voluntaryUsed:false,freeSkips:1,excluded:[],
    zone:{lat:st.lat,lng:st.lng,name:nearestArea(st)},visits:[],target:null,targetAt:null,targetFrom:null,ended:false,shownFinal:false,dpos:{lat:st.lat,lng:st.lng,acc:5},dff:0};
  track("demo_start",{});save();buzz(30);go("play")}
function demoBar(g){return `<div class="demobar"><span class="dtag">Practice</span><span>From home, any time</span><button class="btn sm line" type="button" id="dEnd">End practice</button></div>`}
function bindDemoBar(g){
  if($("dWalk"))$("dWalk").onclick=()=>{const v=byId(g.target);if(!v)return;g.dpos={lat:v.lat+.0002,lng:v.lng,acc:5};save();animateId="at:"+v.id;onLocation()};
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
// The Hit list is bars you haven't tried: once you've been (a counted visit, or marked Been), a bar comes off it
function tickOff(){if(!S.want)return 0;const c=collectedMap();let n=0;Object.keys(S.want).forEach(id=>{if(c[id]||S.been[id]){delete S.want[id];n++}});if(n)save();return n}
setTimeout(()=>{try{tickOff()}catch(e){}},0);   // tidy lists from before this rule
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
    checkPermissions:()=>C.nativePromise("Geolocation","checkPermissions",{}),
    requestPermissions:o=>C.nativePromise("Geolocation","requestPermissions",o||{})};
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
let here=null,watchId=null,locErr=null,lastFix=Date.now();
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
  // a watcher left over from before the page reloaded (an update, Android restarting the web view) still holds the
  // background-location notification; we can only remove it by its id, so the id is kept outside the page
  if(BG&&S.game){if(bgWatch!==null)return;bgOrphan(BG);bgWatch="pending";
    Promise.resolve().then(()=>BG.addWatcher({backgroundTitle:"Active crawl",backgroundMessage:"Checking you in when you reach each rooftop.",requestPermissions:!IOSNAT,stale:false,distanceFilter:10},(p,err)=>{
      if(err){locErr=err.code==="NOT_AUTHORIZED"?1:2;if(S.route==="play")renderPlay();if(locErr!==1)setTimeout(()=>locKick(true),1500);return}
      if(!p)return;here={lat:p.latitude,lng:p.longitude,acc:p.accuracy,t:Date.now()};locErr=null;lastFix=Date.now();onLocation()
    })).then(id=>{if(bgWatch==="pending"){bgWatch=id;try{localStorage.setItem("rr_bgw",id)}catch(e){}}else BG.removeWatcher({id}).catch(()=>{})}).catch(()=>{bgWatch=null;webWatch()});
    return}
  webWatch()}
function webWatch(){
  if(watchId!==null||!navigator.geolocation)return;
  watchId=navigator.geolocation.watchPosition(p=>{here={lat:p.coords.latitude,lng:p.coords.longitude,acc:p.coords.accuracy,t:Date.now()};locErr=null;lastFix=Date.now();onLocation()},
    e=>{if(e.code!==1&&Date.now()-lastFix<60000)return;   // a timeout while standing still isn't a problem
      locErr=e.code;if(S.route==="play")renderPlay();if(e.code!==1)setTimeout(()=>locKick(true),1500)},{enableHighAccuracy:true,maximumAge:10000,timeout:30000});
}
function stopWatch(){if(watchId!==null){navigator.geolocation.clearWatch(watchId);watchId=null}
  // clear now, and again a moment later in case an update was already on its way to the phone
  if(NATIVE){NOTE.live="";NOTE.gone=true;natCall("CrawlNotify","clear").catch(()=>{});setTimeout(()=>{if(!G()||G().ended)natCall("CrawlNotify","clear").catch(()=>{})},1500)}
  const BG=bgGeo();if(BG&&bgWatch!==null){const id=bgWatch;bgWatch=null;if(id!=="pending")BG.removeWatcher({id}).catch(()=>{})}
  if(BG)bgOrphan(BG);try{localStorage.removeItem("rr_bgw")}catch(e){}}
function bgOrphan(BG){let o=null;try{o=localStorage.getItem("rr_bgw")}catch(e){}if(o&&o!==bgWatch){BG.removeWatcher({id:o}).catch(()=>{});try{localStorage.removeItem("rr_bgw")}catch(e){}}}
function getOnce(){
  if(S.test&&S.fake){pickCity(S.fake);return Promise.resolve(S.fake)}
  return new Promise((res,rej)=>{
    if(!navigator.geolocation)return rej({code:-1});
    const got=p=>{here={lat:p.coords.latitude,lng:p.coords.longitude,acc:p.coords.accuracy,t:Date.now()};lastFix=Date.now();locErr=null;pickCity(S.test&&S.fake?S.fake:here);try{meAll()}catch(x){}res(here)};
    // GPS slow to lock on (indoors, just woken up): fall back to a rougher fix rather than giving up
    navigator.geolocation.getCurrentPosition(got,e=>{if(e&&e.code===1)return rej(e);
      navigator.geolocation.getCurrentPosition(got,rej,{enableHighAccuracy:false,timeout:10000,maximumAge:300000})},{enableHighAccuracy:true,timeout:10000,maximumAge:30000});
  });
}
// iPhone app: ask the phone itself and wait for the answer. A position request made while the prompt is up can come back
// late or not at all once they tap Allow, which left the screen sitting there until the app was reopened.
async function iosAsk(){const G=natGeo();if(!G||!G.requestPermissions)return null;
  try{const r=await G.requestPermissions({permissions:["location"]});const st=r&&(r.location||r.coarseLocation);return st==="granted"?"granted":st==="denied"?"denied":null}catch(e){return /denied|disabled|not authori/i.test(String(e&&(e.message||e)))?"denied":null}}
// Mid-crawl the location feed can go quiet: the background watcher only reports when you move 10 m, so sitting at a bar
// means nothing new arrives, and phones drop the GPS now and then. Keep asking for a fresh fix in the background so it
// fixes itself, instead of handing the job to the player.
let kickAt=0,kicking=false,weakSince=0;
function locKick(force){const g=G();
  if(!g||g.ended||S.test||g.demo||g.noLoc||document.hidden||kicking||!navigator.geolocation)return;
  if(locErr===1)return;   // turned off: nothing to fix from here
  const stale=Date.now()-lastFix>40000||!here||locErr!=null;if(!stale&&!force)return;
  if(!force&&Date.now()-kickAt<15000)return;kickAt=Date.now();kicking=true;
  const done=()=>{kicking=false};
  navigator.geolocation.getCurrentPosition(p=>{done();here={lat:p.coords.latitude,lng:p.coords.longitude,acc:p.coords.accuracy,t:Date.now()};locErr=null;lastFix=Date.now();onLocation()},
    e=>{done();if(e&&e.code===1){locErr=1;if(S.route==="play")renderPlay();return}
      // the watcher itself may have died: start it again
      if(watchId!==null&&bgWatch===null){try{navigator.geolocation.clearWatch(watchId)}catch(x){}watchId=null;webWatch()}
      if(bgWatch!==null&&bgWatch!=="pending"&&Date.now()-lastFix>120000){const BG=bgGeo(),id=bgWatch;bgWatch=null;if(BG)BG.removeWatcher({id}).catch(()=>{});startWatch()}},
    {enableHighAccuracy:true,timeout:12000,maximumAge:5000})}
async function permState(ask){if(S.test)return "granted";
  // In the phone app the web view's permission answer can be stale (still "denied" after you've turned it on in settings,
  // or "prompt" when it's allowed), so when a game is starting, ask for a fix instead: that's the real answer.
  if(NATIVE&&ask)return await new Promise(r=>{try{navigator.geolocation.getCurrentPosition(p=>{here={lat:p.coords.latitude,lng:p.coords.longitude,acc:p.coords.accuracy,t:Date.now()};lastFix=Date.now();r("granted")},e=>r(e&&e.code===1?"denied":"granted"),{enableHighAccuracy:false,maximumAge:600000,timeout:8000})}catch(e){r("prompt")}});
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
// Light or dark: Settings > Appearance (auto follows the phone). The page's class is set before first paint in index.html.
const isDark=()=>document.documentElement.classList.contains("dark");
function applyTheme(rerender){const t=S.theme||"auto",d=t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme: dark)").matches),was=isDark();
  document.documentElement.classList.toggle("dark",d);const m=document.getElementById("themeColor");if(m)m.content=d?"#0B0D12":"#FBF7F0";
  try{window.__setBars&&window.__setBars()}catch(e){}
  if(rerender&&was!==d&&S.route)try{go(S.route)}catch(e){}}   // maps pick their tiles when drawn
try{matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>applyTheme(true))}catch(e){}
const themeBg=()=>getComputedStyle(document.documentElement).getPropertyValue("--bg").trim()||"#FBF7F0";
const themeAmberText=el=>getComputedStyle(el||document.documentElement).getPropertyValue("--amber-text").trim()||"#F5B83D";
const ESRI="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}";   // share cards stay dark
const ESRI_LBL="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}";
const ESRI_T=(k,dark=isDark())=>`https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_${dark?"Dark":"Light"}_Gray_${k}/MapServer/tile/{z}/{y}/{x}`;
const OSM="https://tile.openstreetmap.org/{z}/{x}/{y}.png";
let tilesFallback=false;
function mkMap(el,opts){
  const m=L.map(el,Object.assign({zoomControl:false,attributionControl:true,zoomSnap:.25},opts||{}));
  const useOSM=()=>{m.eachLayer(l=>{if(l instanceof L.TileLayer)m.removeLayer(l)});m.getContainer().classList.add("osm");L.tileLayer(OSM,{attribution:'&copy; OpenStreetMap',maxZoom:19}).addTo(m)};
  if(tilesFallback){useOSM();return m}
  let errs=0;
  const base=L.tileLayer(ESRI_T("Base"),{attribution:'Esri, HERE, Garmin, &copy; OpenStreetMap',maxNativeZoom:16,maxZoom:19});
  base.on("tileerror",()=>{if(++errs===3){tilesFallback=true;useOSM()}});
  base.addTo(m);
  L.tileLayer(ESRI_T("Reference"),{maxNativeZoom:16,maxZoom:19,pane:"overlayPane",opacity:.85}).addTo(m);
  return m;
}
const pinIcon=cls=>L.divIcon({className:"",html:`<div class="pin ${cls||""}"></div>`,iconSize:cls==="big"?[26,26]:cls==="seen"?[24,24]:cls&&/\boff\b/.test(cls)?[13,13]:[20,20]});
const numIcon=(n,x)=>L.divIcon({className:"",html:`<div class="num sm${x?" x":""}">${n}</div>`,iconSize:[16,16]});
const meIcon=L.divIcon({className:"",html:'<div class="me"></div>',iconSize:[18,18]});
const zoneCircle=(c,r)=>L.circle([c.lat,c.lng],{radius:r*1000,color:"#F5B83D",weight:2,opacity:.9,fillColor:"#F5B83D",fillOpacity:.06,interactive:false});
function fitZone(m,c,r,extra,pad,k,anim){let b=L.latLng(c.lat,c.lng).toBounds(r*2000*(k||1.04));(extra||[]).forEach(p=>b.extend(p));const a=anim?{animate:true,duration:.45}:{animate:false};const pt=pad&&pad.t!=null?pad.t:pad,pb=pad&&pad.b!=null?pad.b:pad;m.fitBounds(b,pad?{...a,paddingTopLeft:[8,pt],paddingBottomRight:[8,pb]}:{...a,padding:[8,8]})}

/* ---------- Google Maps + photos (falls back to the free map off the live site) ---------- */
const GKEY=(BUNDLED&&window.RR_CONFIG.googleMapsAppKey)||window.RR_CONFIG.googleMapsBrowserKey,GMAPID="114ffde49621751bad7df10a";
let gP=null,gBad=false;
function gload(){
  if(gP)return gP;
  if(!(BUNDLED||/^(www\.)?rooftoproulette\.com$|^chriskova\.github\.io$/.test(location.hostname))||gBad)return Promise.reject("off");
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
  const map=new google.maps.Map(el,{mapId:GMAPID,isFractionalZoomEnabled:true,colorScheme:isDark()?"DARK":"LIGHT",disableDefaultUI:true,clickableIcons:false,gestureHandling:o&&o.locked?"none":o&&o.greedy?"greedy":"cooperative",keyboardShortcuts:!(o&&o.locked),center:{lat:-33.8732,lng:151.2069},zoom:14});
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
    pin(v,cls,onClick){ov.push(mk(v,`<div class="pin ${cls||""}"></div>`,cls==="big"?500:cls==="seen"?1100:0,onClick,v.name))},   // ticked bars sit above your dot
    num(p,n,x,title,onClick){ov.push(mk(p,`<div class="num sm${x?" x":""}">${n}</div>`,300,onClick||null,title))},
    dot(p){ov.push(mk(p,'<div class="me"></div>',1000))},
    route(pts,dashed){if(dashed){ov.push(new google.maps.Polyline({map,path:pts.map(LL),strokeOpacity:0,clickable:false,icons:[{icon:{path:"M 0,-1 0,1",strokeColor:isDark()?"#F5B83D":"#C98A10",strokeOpacity:isDark()?.45:.8,strokeWeight:2,scale:1.5},offset:"0",repeat:"9px"}]}));return}
      const P=(c,o,w)=>ov.push(new google.maps.Polyline({map,path:pts.map(LL),strokeColor:c,strokeOpacity:o,strokeWeight:w,clickable:false}));
      if(isDark()){P("#F5B83D",.18,8);P("#F5B83D",1,3)}else{P("#7A5300",.22,11);P("#FFFFFF",1,8);P("#E99A12",1,4)}},   // light map: a white casing and a deeper amber so the line stands out
    line(pts){const P=(c,o,w)=>ov.push(new google.maps.Polyline({map,path:pts.map(LL),strokeColor:c,strokeOpacity:o,strokeWeight:w,clickable:false}));
      if(isDark()){P(themeBg(),.85,9);P("#F5B83D",1,5)}else{P("#7A5300",.22,12);P("#FFFFFF",1,9);P("#E99A12",1,5)}},
    fitZone(c,r,extra,pad,k){const b=new google.maps.Circle({center:LL(c),radius:r*1000*(k||1.03)}).getBounds();(extra||[]).forEach(p=>b.extend(LL(p)));const f=()=>map.fitBounds(b,pad?{top:pad.t!=null?pad.t:pad,bottom:pad.b!=null?pad.b:pad,left:4,right:4}:4);
      if(el.offsetHeight)f();else google.maps.event.addListenerOnce(map,"idle",f)},   // fit once: repeat fits used to fight a pinch that had already started
    fitPts(pts,maxZoom,pad){const b=new google.maps.LatLngBounds();pts.forEach(p=>b.extend(LL(p)));const f=()=>{map.fitBounds(b,pad||50);google.maps.event.addListenerOnce(map,"idle",()=>{if(map.getZoom()>(maxZoom||16))map.setZoom(maxZoom||16)})};f();setTimeout(f,400)},
    setView(p,z){map.panTo(LL(p));map.setZoom(z)},
    me(p){if(!p){if(meM){meM.map=null;meM=null}return}if(!meM)meM=mk(p,'<div class="me"></div>',1000);else meM.position=LL(p)},
    onTap(fn){map.addListener("click",e=>{if(Date.now()-tapAt<500)return;fn(e.latLng.lat(),e.latLng.lng())})},
    center(){const c=map.getCenter();return {lat:c.lat(),lng:c.lng()}},onMove(fn){map.addListener("center_changed",fn)},onIdle(fn){map.addListener("idle",fn)},
    onZoom(fn){map.addListener("zoom_changed",fn)},mpp(){return 156543.03392*Math.cos(map.getCenter().lat()*Math.PI/180)/Math.pow(2,map.getZoom())},setMpp(v){map.setZoom(Math.log2(156543.03392*Math.cos(map.getCenter().lat()*Math.PI/180)/v))},
    ring(c,r){if(!c){if(ringC){ringC.setMap(null);ringC=null}return}if(!ringC)ringC=new google.maps.Circle({map,center:LL(c),radius:r*1000,strokeColor:"#F5B83D",strokeOpacity:.9,strokeWeight:2,fillColor:"#F5B83D",fillOpacity:.08,clickable:false});else{ringC.setCenter(LL(c));ringC.setRadius(r*1000)}},
    resize(){},remove(){this.clear();if(meM)meM.map=null;if(ringC)ringC.setMap(null);el.innerHTML=""}
  };
}
function lWrap(el,o){
  const m=mkMap(el,o&&o.locked?{dragging:false,touchZoom:false,doubleClickZoom:false,scrollWheelZoom:false,boxZoom:false,keyboard:false,tap:false}:undefined),ov=L.layerGroup().addTo(m);let meM=null,ringC=null;
  return {
    clear(){ov.clearLayers()},
    circle(c,r){zoneCircle(c,r).addTo(ov)},
    pin(v,cls,onClick){const mm=L.marker([v.lat,v.lng],{icon:pinIcon(cls),zIndexOffset:cls==="big"?500:cls==="seen"?1100:0}).addTo(ov);if(onClick)mm.on("click",onClick);mm.bindTooltip(v.name,{direction:"top",offset:[0,-10]})},
    num(p,n,x,title,onClick){const mm=L.marker([p.lat,p.lng],{icon:numIcon(n,x)}).addTo(ov);if(title&&!onClick)mm.bindTooltip(title);if(onClick)mm.on("click",onClick)},
    dot(p){L.marker([p.lat,p.lng],{icon:meIcon}).addTo(ov)},
    route(pts,dashed){const ll=pts.map(p=>[p.lat,p.lng]);if(dashed){L.polyline(ll,{color:isDark()?"#F5B83D":"#C98A10",weight:2,opacity:isDark()?.35:.75,dashArray:"2 7",lineCap:"round"}).addTo(ov);return}
      const P=(c,o,w)=>L.polyline(ll,{color:c,weight:w,opacity:o,lineCap:"round",lineJoin:"round"}).addTo(ov);
      if(isDark()){P("#F5B83D",.18,8);P("#F5B83D",1,3)}else{P("#7A5300",.22,11);P("#FFFFFF",1,8);P("#E99A12",1,4)}},
    line(pts){const ll=pts.map(p=>[p.lat,p.lng]),P=(c,o,w)=>L.polyline(ll,{color:c,weight:w,opacity:o,lineCap:"round",lineJoin:"round"}).addTo(ov);
      if(isDark()){P(themeBg(),.85,9);P("#F5B83D",1,5)}else{P("#7A5300",.22,12);P("#FFFFFF",1,9);P("#E99A12",1,5)}},
    fitZone(c,r,extra,pad,k,anim){fitZone(m,c,r,(extra||[]).map(p=>L.latLng(p.lat,p.lng)),pad,k,anim)},
    fitPts(pts,maxZoom,pad){const bb=L.latLngBounds(pts.map(p=>[p.lat,p.lng]));pad?m.fitBounds(bb,{animate:false,maxZoom:maxZoom||16,paddingTopLeft:[pad.left,pad.top],paddingBottomRight:[pad.right,pad.bottom]}):m.fitBounds(bb.pad(.3),{animate:false,maxZoom:maxZoom||16})},
    setView(p,z){m.setView([p.lat,p.lng],z,{animate:true})},
    me(p){if(!p){if(meM){m.removeLayer(meM);meM=null}return}if(!meM)meM=L.marker([p.lat,p.lng],{icon:meIcon,zIndexOffset:1000,interactive:false}).addTo(m);else meM.setLatLng([p.lat,p.lng])},
    onTap(fn){m.on("click",e=>fn(e.latlng.lat,e.latlng.lng))},
    center(){const c=m.getCenter();return {lat:c.lat,lng:c.lng}},onMove(fn){m.on("move",fn)},onIdle(fn){m.on("moveend",fn)},
    onZoom(fn){m.on("zoom",fn)},mpp(){return 156543.03392*Math.cos(m.getCenter().lat*Math.PI/180)/Math.pow(2,m.getZoom())},setMpp(v){m.setZoom(Math.log2(156543.03392*Math.cos(m.getCenter().lat*Math.PI/180)/v),{animate:false})},
    ring(c,r){if(!c){if(ringC){m.removeLayer(ringC);ringC=null}return}if(!ringC)ringC=zoneCircle(c,r).addTo(m);else{ringC.setLatLng([c.lat,c.lng]);ringC.setRadius(r*1000)}},
    resize(){m.invalidateSize()},remove(){m.remove()}
  };
}
// Every live map shows where you are and follows you (finished crawls opt out with noMe: they're a record, not a live view).
const meMaps=[];
async function makeMap(id,o){const el=$(id);if(!el)return null;let m;try{await gload();if(gBad)throw 0;m=gWrap(el,o)}catch(e){m=lWrap(el,o)}
  if(!(o&&o.noMe)){m._el=el;meMaps.push(m);const y=you();if(y)try{m.me(y)}catch(e){}}
  return m}
function meAll(){const y=you();for(let i=meMaps.length-1;i>=0;i--){const m=meMaps[i];if(!document.contains(m._el)){meMaps.splice(i,1);continue}try{m.me(y)}catch(e){}}}
function setMe(m){if(m)m.me(you())}

// Directions open in the phone's own maps app: Apple Maps on an iPhone (Google Maps if they pick it in Settings),
// Google Maps everywhere else.
const ISIOS=IOSNAT||/iPhone|iPad|iPod/i.test(navigator.userAgent)||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);
const appleMaps=()=>ISIOS&&S.maps!=="google";
const fullAddr=v=>v.name+", "+v.address+", "+({Brisbane:"QLD",Melbourne:"VIC",Perth:"WA","Gold Coast":"QLD"}[cityOf(v)]||"NSW");
const gmapsURL=v=>appleMaps()?`https://maps.apple.com/?q=${encodeURIComponent(v.name)}&address=${encodeURIComponent(fullAddr(v))}&ll=${v.lat},${v.lng}`
  :`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.name+", "+v.address)}${v.pid?"&query_place_id="+v.pid:""}`;
const dirURL=v=>appleMaps()?`https://maps.apple.com/?daddr=${encodeURIComponent(fullAddr(v))}`
  :`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddr(v))}${v.pid?"&destination_place_id="+v.pid:""}`;
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
  return {cls:" photo phd",style:` style="background-image:url('${ph.url}')"`,cr:`<span class="cr">${ph.by?`Photo: <a href="${esc(ph.byUri)}" target="_blank" rel="noopener">${esc(ph.by)}</a> · `:""}<a href="${esc(ph.gm||"https://maps.google.com")}" target="_blank" rel="noopener">Google Maps</a></span>`}}
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
let minWhy="";
function go(route){prevRoute=S.route;if(route!=="home")backArm();
  // test mode: say what dropped a crawl into the bar above the tabs (tracking down an unexpected minimise)
  if(S.test&&S.route==="play"&&route==="home"&&S.game&&!S.game.ended){const w=minWhy||(new Error().stack||"").split("\n").slice(2,4).map(x=>x.trim().replace(/^at /,"").split(" ")[0]).join(" < ");setTimeout(()=>toast(`Test: minimised by ${esc(w)}`,5000),300)}minWhy="";
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
  let fl=null;try{fl=!g&&S.follow&&liveDoc&&!liveDoc.ended&&!fv?liveDoc:null}catch(e){}   // the live-crawl code loads after this file's first render: until then there's nothing to show
  if(fl&&["home","bars","hist","end"].includes(S.route)){   // following a friend's crawl
    const d=fl,fg=fvGame(d),t=Date.now()+(d.off||0),c=fvClockTxt(d,fg,t),vs=(fg.visits||[]).filter(v=>v.arrivedAt!=null),at=vs.find(v=>!v.leftAt),tg=fg.target&&byId(fg.target);
    const hn=(d.hostName||"Friend").split(" ")[0],line=at?"At "+byId(at.id).name:tg?"Heading to "+tg.name:fvSpinning(fg,t)?hn+" is spinning":!fg.started&&!vs.length?"Waiting on "+hn:hn+" spins next",who=hn+"'s crawl";
    const h=`<span class="mt${fg.started?"":" sm"}">${esc(c.clock)}</span><span class="ml"><b>${esc(line)}</b><small>${esc(who)} · live</small></span><span class="up"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 15l6-6 6 6"/></svg></span>`;
    if(m._h!==h){m._h=h;m.innerHTML=h}if(!m._on){m._on=true;m.hidden=false;$("app").classList.add("has-mini");if(fvMinDrop){m.classList.remove("drop");void m.offsetWidth;m.classList.add("drop")}}fvMinDrop=false;
    m.onclick=()=>openFollow();return}
  const show=!!g&&!g.ended&&["home","bars","hist","end"].includes(S.route);
  if(!show){m.hidden=true;m._on=false;$("app").classList.remove("has-mini");return}
  const cr=CR(g),a=atVisit(),y=you();let left,sm=false,line;
  if(!g.started){left="Ready";sm=true}else if(cr){if(a)left=now()-a.arrivedAt>=3600000?hmm(now()-a.arrivedAt):mmss(now()-a.arrivedAt);else{left="R&R";sm=true}}else left=mmss(remaining());
  if(!g.started)line="Spin to start";else if(a)line="At "+byId(a.id).name;else if(g.target){const v=byId(g.target);line="Heading to "+v.name+(y?" · "+kmTxt(dist(y,v)/1000):"")}else line="Spin for the next one";
  const h=`<span class="mt${sm?" sm":""}">${esc(left)}</span><span class="ml"><b>${esc(line)}</b><small>${g.demo?"Practice · "+LEN(g.len):cr?"R&amp;R":LEN(g.len)}</small></span><span class="up"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 15l6-6 6 6"/></svg></span>`;
  if(m._h!==h){m._h=h;m.innerHTML=h}
  if(!m._on){m._on=true;m.hidden=false;$("app").classList.add("has-mini");if(prevRoute==="play"){m.classList.remove("drop");void m.offsetWidth;m.classList.add("drop")}}
  m.onclick=()=>{go("play");const v=$("v-play");v.classList.remove("rise");void v.offsetWidth;v.classList.add("rise");setTimeout(()=>v.classList.remove("rise"),520)}}
function cta(html,on){const c=$("cta");c.innerHTML=html;c.hidden=false;$("app").classList.add("has-cta");if(on)on(c)}
[["tPlay","play","Play"],["tBars","bars","Rooftops"],["tHist","hist","My Tab"]].forEach(([id,k,l])=>{$(id).innerHTML=tabIcons[k]+`<span>${l}</span>`;$(id).dataset.tab=k});
$("tabs").onclick=e=>{const b=e.target.closest("button");if(!b)return;const k=b.dataset.tab;minWhy=`the ${k==="play"?"Play":k==="bars"?"Rooftops":"My Tab"} tab`;if(typeof fv!=="undefined"&&fv){if(k!=="play")minFollow(k);return}if(k==="bars"&&S.route!=="bars"&&S.barsView==="map"){S.barsView="list";save()}go(k==="play"?"home":k)};   // Rooftops always opens on the list

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
// two phones on the same crawl: the second slides in beside the first, both showing the same pin
const TOG_ART=()=>`<svg class="ia-tog" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
 <g class="p1"><rect x="6" y="9" width="18" height="31" rx="3.5"/><path d="M15 17.5a4 4 0 0 1 4 4c0 3-4 6.5-4 6.5s-4-3.5-4-6.5a4 4 0 0 1 4-4z"/></g>
 <g class="p2"><rect x="24" y="9" width="18" height="31" rx="3.5" transform="rotate(10 33 24.5)"/><path d="M33 17.5a4 4 0 0 1 4 4c0 3-4 6.5-4 6.5s-4-3.5-4-6.5a4 4 0 0 1 4-4z" transform="rotate(10 33 24.5)"/></g></svg>`;
const WILD_ART=()=>`<svg class="ia-wild" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
 <rect class="bk" x="9" y="9" width="20" height="28" rx="3.5" transform="rotate(-14 19 23)"/>
 <g class="fr"><rect x="19" y="10" width="20" height="28" rx="3.5" stroke-dasharray="3.2 3.2"/><path d="M29 17.5l1.6 4.9 4.9 1.6-4.9 1.6-1.6 4.9-1.6-4.9-4.9-1.6 4.9-1.6z" fill="currentColor" fill-opacity=".35"/></g></svg>`;
const SLIDES=[
 {art:SPIN_ART(),h:"Spin the wheel",p:"Land a random rooftop bar for your crawl.<br>No planning, no debating."},
 {art:GO_ART(),h:"Get to the rooftop",p:"One drink at each rooftop."},
 {art:LOOP_ART(),h:"Spin again",p:"See how many you can hit before<br>the clock runs out."},
 {art:WILD_ART(),h:"Wildcards and jackpots",p:"Some rooftops come with a wildcard.<br>One spin a crawl hits the jackpot."},
 {art:TOG_ART(),h:"Play together",p:"Friends follow every spin<br>from their own phones."}
];   // (R&R isn't in the intro: setup offers Rest & Roulette right where you choose)
function renderIntro(){if((S.intro||0)>=SLIDES.length)S.intro=SLIDES.length-1;
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
  $("introNext").textContent=i<SLIDES.length-1?"Next":S.introReplay?"Got it":"Get started";
  // Replayed from home: the last card offers the demo alongside Got it
  const lastReplay=S.introReplay&&i===SLIDES.length-1;$("introDemo").hidden=!lastReplay;$("introNext").classList.toggle("dark",lastReplay);
  $("introSkip").style.visibility=i===SLIDES.length-1?"hidden":"";   // keeps its space, so the last screen doesn't jump
}
$("introNext").onclick=()=>{if((S.intro||0)<SLIDES.length-1){S.intro=(S.intro||0)+1;save();renderIntro()}else{S.onboarded=true;S.ob=2;S.introReplay=false;go("home")}};
// The logo takes you home from game setup and R&R setup (not the first-time city and been-to screens).
const SETUP_ROUTES=["wiz","quick"];
$("logo").onclick=()=>{if(SETUP_ROUTES.includes(S.route)){closeSheet();go("home")}};
$("introDemo").onclick=()=>{S.introReplay=false;S.onboarded=true;S.ob=2;save();track("intro_demo",{});if(S.game){go("home");playingSheet(startDemo);return}startDemo()};
$("introSkip").onclick=()=>{S.onboarded=true;S.ob=2;S.introReplay=false;go("home")};
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
// the one small link under Play: join a friend's crawl (How to play lives in Settings)
function homeLinks(){}
function renderHome(){
  homeLinks();
  homeOpen();
  homeAt();
  try{homeLive()}catch(e){}
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
        $("atRush").onclick=()=>{closeSheet();startWizard()};
        $("atRR").onclick=()=>{closeSheet();firstRules("rr",cruiseHow,()=>{S.quick={step:0,from:null};go("quick")})}})};
    requestAnimationFrame(fitHome)};
  const pick=p=>{const t=now(),slack=60+Math.min(p.acc||60,60),no=S.atNo&&S.atNo.day===new Date(t).toDateString()?S.atNo.id:null;
    let best=null,bd=1e9;VENUES.forEach(v=>{const d=dist(p,v);if(d<bd&&v.id!==no&&openState(v,t).open){bd=d;best=v}});return bd<=slack?best:null};
  if(S.game||S.test||!navigator.geolocation){b.hidden=true;return}
  if(here)show(pick(here));else b.hidden=true;
  if(Date.now()-atT<120000)return;atT=Date.now();
  permState().then(st=>{if(st!=="granted")return;
    navigator.geolocation.getCurrentPosition(p=>{here={lat:p.coords.latitude,lng:p.coords.longitude,acc:p.coords.accuracy,t:Date.now()};if(S.route==="home")show(pick(here))},()=>{},{maximumAge:120000,timeout:10000,enableHighAccuracy:true})})}
// How many rooftops are open in your city right now, above Play. None open: when the first one opens.
function homeOpen(){const el=$("homeOpen");if(!el)return;const t=now(),L=VENUES.filter(inCityNow),n=L.filter(v=>openOK(v,t)).length,where=esc(cityIn(S.city));
  const op=n?null:nextOpen(L,t);
  el.innerHTML=I.pin+`<span>${n?`<b>${plural(n,"rooftop")}</b> open in ${where} right now`:op?`Rooftops in ${where} open from <b>${op}</b>`:`Nothing's open in ${where} right now`}</span>`}
// The name grows on tall phones (--hs). If something extra shows (the Hit list row), scale it back until it all fits.
function fitHome(){const v=$("v-home");if(!v||!v.offsetParent)return;let k=1;v.style.setProperty("--hs",k);
  while(k>0&&v.scrollHeight>v.clientHeight+1){k=Math.max(0,+(k-.1).toFixed(2));v.style.setProperty("--hs",k)}
  // the big faded pin is a backdrop: its top sits halfway up "ROULETTE" (the TT) and its tip runs on under the tab bar, so it scales with the screen.
  // Its left edge sits 9% in from the left on every phone, so it bleeds off the right only.
  const lg=$("homeLogo"),im=lg&&lg.querySelector("img"),tb=$("tabs"),sp=v.querySelector(".brand span");
  if(im&&lg.offsetParent&&tb&&tb.offsetHeight&&sp){lg.style.top="0px";const p0=lg.getBoundingClientRect().top,rg=document.createRange();rg.selectNodeContents(sp);const sr=rg.getBoundingClientRect(),top=sr.top+.483*sr.height,H=Math.max(300,Math.round(tb.getBoundingClientRect().top+28-top));
    im.style.height=H+"px";const vw=v.clientWidth||innerWidth,W=H*477/600;lg.style.right=Math.round(vw*.91-W)+"px";{const d=im.getBoundingClientRect().left-v.getBoundingClientRect().left-vw*.09;if(Math.abs(d)>1)lg.style.right=Math.round(vw*.91-W+d)+"px"}lg.style.top=Math.round(top-p0)+"px"}}
addEventListener("resize",()=>{if(S.route==="home")fitHome()});
// The first time each mode is played, its rules come up first (with the demo spin), then "Let's play" carries on.
function firstRules(k,show,start){if((S.seenHow||{})[k]){start();return}show(start)}
// Away from the cities we cover, starting a game goes to the "not in your city yet" sheet instead.
const farAway=()=>!S.test&&here&&!nearLive(here);
// Starting something while a game's on: go back to it, or end it (it's saved) and start the new one
function playingSheet(next){const g=S.game;
  sheet(`<h3>You've got a crawl going</h3><p class="note" style="margin:6px 0 14px">Your ${CR(g)?"R&amp;R crawl":"crawl"} is still on.</p><div class="acts"><button class="btn" type="button" id="pgBack">Back to it</button><button class="btn line" type="button" id="pgNew">End it and start a new one</button></div>`,()=>{
    $("pgBack").onclick=()=>{closeSheet();go("play")};
    $("pgNew").onclick=()=>{closeSheet();if(G().started)endGame(now());else{S.game=null;save();stopWatch()}next()}})}
$("newGame").onclick=()=>{if(S.game){playingSheet(startWizard);return}if(farAway()){farSheet();return}if(firstPlayDue()){firstPlaySheet();return}startWizard()};
// Before the first real crawl: the safety basics, agreed once.
function safetySheet(next){sheet(`<h3>Before you head out</h3><div class="safe">
  <p><b>Walk, don't run.</b> The clock never needs you to rush. If time's up on the way, the rooftop still counts.</p>
  <p><b>Drinking is optional.</b> Water, soft drinks or nothing all count. Know your limit.</p>
  <p><b>Eyes up at roads.</b> Check the app when you've stopped, not while you're crossing.</p>
  <p><b>Never drive after drinking.</b> Look after each other and get everyone home.</p></div>
  <p class="note">You're 18+ and you agree to the <a href="terms.html" target="_blank" rel="noopener">terms of use</a>. You're responsible for your own safety on a crawl.</p>
  <div class="acts"><button class="btn" type="button" id="sfOk">I'm 18+ and I agree</button></div>`,()=>{$("sfOk").onclick=()=>{S.safeOK=Date.now();save();track("safety_ok");closeSheet();next()}})}
// Before anyone's played anything: ask straight up whether they're heading out or trying it first.
function firstPlayDue(){return !S.firstPlay&&!S.test&&!readH(HKEY).length}
function firstPlaySheet(){sheet(`<h3>Heading out now?</h3><p class="note">Trying it from home first? A practice crawl plays anywhere.</p><div class="acts"><button class="btn" type="button" id="fpOut">Heading out now</button><button class="btn line" type="button" id="fpDemo">Try a practice crawl</button></div>`,()=>{
  $("fpOut").onclick=()=>{S.firstPlay=1;save();closeSheet();track("first_play",{pick:"out"});startWizard()};
  $("fpDemo").onclick=()=>{S.firstPlay=1;save();closeSheet();track("first_play",{pick:"demo"});startDemo()}})}
if($("quickGo"))$("quickGo").onclick=()=>{if(S.game){playingSheet(()=>firstRules("rr",cruiseHow,()=>{S.quick={step:0,from:null};go("quick")}));return}if(farAway()){farSheet();return}firstRules("rr",cruiseHow,()=>{if(!S.safeOK&&!S.test){safetySheet(()=>{S.quick={step:0,from:null};go("quick")});return}S.quick={step:0,from:null};go("quick")})};
// Test mode is hidden: tap the logo 10 times fast to switch it on or off. Settings only shows Testing while it's on.
(()=>{let n=0,t0=0;[$("logo"),$("heroBrand")].forEach(el=>el.addEventListener("click",()=>{const t=Date.now();n=t-t0<700?n+1:1;t0=t;if(n>=10){n=0;S.test=!S.test;if(!S.test){S.ff=0;S.fake=null}save();if(CLP)location.reload();else render()}}))})();
if($("rrIcon"))$("rrIcon").innerHTML=CHEERS_ART().replace('class="ia-cheers"','class="ia-cheers mcheers"').replace('viewBox="0 0 48 48"','viewBox="4 0 40 40"');
document.querySelector(".city").innerHTML=document.querySelector(".city").innerHTML.replace("${PIN}",I.pin.replace('<svg','<svg width="16" height="16"'));


/* ---------- one-off spin: one random rooftop, no clock, no scorecard ---------- */
/* ---------- Just the one: where → how far / which area → spin. No clock, no scorecard. ---------- */
const QR=1.5; // km around an area's centre
const QDIST=[{r:1,t:"A short walk",s:"Within 1 km, about 12 minutes"},{r:2,t:"A decent walk",s:"Within 2 km, about 25 minutes"},{r:5,t:"Happy to Uber",s:"Within 5 km"}];
function quickSet(q){ // every rooftop that could come up, open or not
  if(!q||!q.from)return [];
  if(q.from.type==="list")return listOf(q.from.list).filter(v=>!q.r||q.from.lat==null||dist(q.from,v)<=q.r*1000);
  const base=VENUES.filter(v=>!S.nfu[v.id]&&!v.tempClosed&&(q.from.type==="me"||inCityNow(v)));
  if(q.from.type==="me")return base.filter(v=>dist(q.from,v)<=(q.r||1)*1000);
  if(q.from.type==="all")return base;
  return base.filter(v=>areaOf(v).reg===q.from.name);
}
function quickPool(q,t){const P=quickSet(q).filter(v=>openOK(v,t));const fresh=P.filter(v=>!q.seen.includes(v.id));return fresh.length?fresh:P}
const wantList=()=>VENUES.filter(v=>S.want[v.id]&&!v.tempClosed&&cityOf(v)===S.city);
const favList=()=>VENUES.filter(v=>S.fav[v.id]&&!v.tempClosed&&cityOf(v)===S.city);
const listOf=k=>k==="fav"?favList():wantList(),listName=k=>k==="fav"?"Favourites":"Hit list";
const listOpt=(t,on)=>{const L=wantList(),o=L.filter(v=>openOK(v,t)).length;return `<button class="opt" type="button" role="radio" aria-checked="${!!on}" id="qList"><span class="ic">${I.sparkle}</span><span class="t"><b>My Hit list</b><small>Rooftops you want to try</small></span>${L.length?`<span class="n"><b>${o}</b><small>open</small></span>`:`<span class="n"><small>Make one</small></span>`}</button>`};
const quickLabel=q=>q.from.type==="list"?listName(q.from.list):q.from.type==="me"?`Near you · ${q.r} km`:q.from.type==="all"?"Anywhere in "+S.city:q.from.name;
// Setting up a zone only needs to know roughly where you are. Use a fix from the last 10 minutes if there is one
// (the app grabs one on open), otherwise take whichever answer comes first: a rough network fix (a second or two)
// or the GPS. Waiting on a full GPS lock here was the long "Finding you…" before R&R's map showed.
function quickFix(){
  if(S.test&&S.fake)return getOnce();
  if(here&&here.t&&Date.now()-here.t<10*60000){pickCity(here);return Promise.resolve(here)}
  if(!navigator.geolocation)return Promise.reject({code:-1});
  return new Promise((res,rej)=>{let done=0,fails=0;
    const ok=p=>{if(!done){done=1;res(p)}},no=e=>{if(done)return;if((e&&e.code===1)||++fails>=2){done=1;rej(e)}};
    navigator.geolocation.getCurrentPosition(p=>{if(done)return;here={lat:p.coords.latitude,lng:p.coords.longitude,acc:p.coords.accuracy,t:Date.now()};lastFix=Date.now();locErr=null;pickCity(here);try{meAll()}catch(x){}ok(here)},no,{enableHighAccuracy:false,maximumAge:600000,timeout:6000});
    getOnce().then(ok,no)})}
const fixFresh=()=>!!(here&&here.t&&Date.now()-here.t<10*60000);
async function quickNearMe(){
  const q=S.quick;q.note=null;
  try{const p=await quickFix();q.from={type:"me",name:"Near you",lat:p.lat,lng:p.lng};if(!q.z||dist(q.z,p)>5000){q.z={lat:p.lat,lng:p.lng,r:q.z?q.z.r:2};
      // nothing open within 2 km of you: start on the closest city's CBD, same as timed
      const t=now();if(rrPool({lat:p.lat,lng:p.lng,r:2},t,false).open.length<1){const city=nearLive(p)||S.city,O=VENUES.filter(v=>cityOf(v)===city&&!S.nfu[v.id]&&!v.tempClosed&&openOK(v,t)),best=O.length;
        const c=GAME_AREAS(city).find(a=>a.name==="The City")||GAME_AREAS(city)[0]||CITIES.find(x=>x.name===city);
        q.z={lat:c.lat,lng:c.lng,r:2};q.from={type:"pick",name:null,lat:c.lat,lng:c.lng};if(!best)q.far="Nothing's open right now. Showing the city centre."}}q.step=1}
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
function fitMap(v,again){const el=$("rrMap");if(!v||!el||v.closest("dialog"))return;if(v.classList.contains("fsv")){el.style.height="";if(rrMap)rrMap.resize();return}el.style.height="200px";
  const vv=window.visualViewport,vr=v.getBoundingClientRect(),pb=parseFloat(getComputedStyle(v).paddingBottom)||0;
  let limit=vr.top+v.clientHeight-pb;if(vv&&document.body.classList.contains("mapq"))limit=Math.min(limit,vv.offsetTop+vv.height-12);
  const last=Math.max(...[...v.children].filter(x=>x.offsetParent!==null).map(x=>x.getBoundingClientRect().bottom));
  el.style.height=Math.round(Math.max(200,Math.min(document.body.classList.contains("mapq")?900:620,parseFloat(el.style.height)+(limit-last)-6)))+"px";if(rrMap)rrMap.resize();
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
const zRange=o=>{if(!o||!o.lo)return {toR:rrToR,toX:rrToX,ticks:[[1,"1 km"],[2,"2 km"],[5,"5 km"],[10,"10 km"]],all:true,max:RRMAX,snap:r=>Math.round(r*20)/20};
  if(o.step){const n=Math.round((o.hi-o.lo)/o.step),toR=x=>Math.round((o.lo+Math.max(0,Math.min(n,Math.round(x)))*o.step)*10)/10,toX=r=>Math.round((Math.max(o.lo,Math.min(o.hi,r))-o.lo)/o.step);
    return {toR,toX,ticks:o.ticks,all:false,max:n,snap:r=>Math.round(Math.round((r-o.lo)/o.step)*o.step*10+o.lo*10)/10}}
  const k=Math.log(o.hi/o.lo),toR=x=>Math.round(o.lo*Math.exp(k*x/RRMAX)*10)/10,toX=r=>Math.round(Math.log(Math.max(o.lo,Math.min(o.hi,r))/o.lo)/k*RRMAX);
  return {toR,toX,ticks:o.ticks,all:false,max:RRMAX,snap:r=>Math.round(r*20)/20}};
const rrZoneHTML=o=>{const Z=zRange(o),sr=`<button class="rrme" type="button" id="rrHome" aria-label="Back to where I am" hidden>${I.target}</button>
      <div class="msearch">${I.search}<div id="rrQ" class="sfield" contenteditable="plaintext-only" role="searchbox" inputmode="search" enterkeyhint="search" autocapitalize="off" autocorrect="off" spellcheck="false" data-hint="${o&&o.searchHint||"Search a suburb"}"></div></div><div class="mres" id="rrRes" hidden></div>`;
  return (o&&o.row?`<div class="rrmap stack">${sr}<div class="map rrcanvas"><div id="rrMap"></div><i class="rrpin" id="rrPin"></i><button class="mcard" type="button" id="rrCard" hidden></button></div></div>`
    :`<div class="map rrmap"><div id="rrMap"></div><i class="rrpin" id="rrPin"></i>${sr}<button class="mcard" type="button" id="rrCard" hidden></button></div>`)+`
      <div class="rrsum"><b id="rrLbl"></b>${o&&o.row?"":`<button class="rrnb" type="button" id="rrNB"><span id="rrN"></span> <span class="chev">›</span></button>`}</div>
      <div class="rrslide"${o&&o.fixed?" hidden":""}><input class="rrrange" type="range" id="rrR" min="0" max="${Z.max}" step="1" aria-label="How far">
      <div class="rrticks">${Z.ticks.map(([r,l],i)=>`<span style="left:${Z.toX(r)/Z.max*100}%${!Z.all&&i===0?";transform:none":""}${!Z.all&&i===Z.ticks.length-1?";transform:translateX(-100%)":""}">${l}</span>`).join("")}${Z.all?`<span style="left:100%;transform:translateX(-100%)">All</span>`:""}</div></div>
      ${o&&o.row?`<button class="zbars" type="button" id="rrNB"><span class="zic">${I.glass||""}</span><span class="t"><b id="rrN"></b><small id="rrNs"></small></span><span class="chev">›</span></button>`:""}
      ${o&&o.note?`<p class="note rrnote" style="margin:2px 0 0">${o.note}</p>`:""}
`};
// room the suburb search takes at the top of a zone map (used top and bottom so the circle stays in the middle)
const ZONEK=1.3;   // zone maps leave a ring of map around the circle, so the bars just outside it show
const ZPAD=()=>{const fv=document.querySelector(".fsv .rrmap");if(fv){const m=fv.getBoundingClientRect(),tops=[...fv.querySelectorAll(".msearch,.mchips,.fsbanner")].filter(x=>x.offsetParent).map(x=>x.getBoundingClientRect().bottom),pl=fv.querySelector(".fspill");
    // the same room top and bottom: the circle's centre has to stay the map's centre (that's where the zone is)
    // (R&R's All / Hit list tabs don't count: they'd make its circle smaller than timed's, and the ring of map around it clears them)
    // (the map itself is screen-tall and centred on this box, so add the part of it the box doesn't show)
    const me_=$("rrMap"),ex=me_?Math.max(0,(me_.offsetHeight-fv.clientHeight)/2):0;
    return Math.round(ex+Math.max(Math.max(m.top,...tops)-m.top+12,m.bottom-(pl&&pl.offsetParent?pl.getBoundingClientRect().top:m.bottom-40)+12))}
  const s_=document.querySelector(".rrmap .zsearch,.rrmap .msearch,.rrmap input,.rrmap [role=searchbox]"),m_=$("rrMap");if(!s_||!m_)return 0;const d=s_.getBoundingClientRect().bottom-m_.getBoundingClientRect().top;return d>0?Math.round(d)+6:0};   // no search bar (Your zone): no extra room
function rrZoneBind(z,me,newOnly,onPaint,o){const Z=zRange(o),pool=o&&o.pool||rrPool;
  $("rrR").value=Z.toX(z.r);
  const moved=()=>!!me&&dist(z,me)>150;
  const paint=full=>{if(!$("rrLbl"))return;const P=pool(z,now(),newOnly());
    {const rr=$("rrR");if(rr)rr.style.setProperty("--p",((rr.value-rr.min)/((rr.max-rr.min)||1)*100)+"%")}   // amber fill up to the thumb
    $("rrLbl").innerHTML=z.r?`Within <strong>${kmTxt(z.r)}</strong> of ${esc(moved()||!me?nearestSuburb(z):"you")}`:esc((o&&o.allLbl)||`All of ${S.city}`);
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
  let base=null,prog=0,clamped=false,pinKey="";const lo=Z.toR(0),hi=Z.all?Z.toR(RRALL-1):Z.toR(Z.max);
  const ours=()=>prog&&Date.now()<prog;
  const setBase=()=>{if(rrMap&&rrMap.mpp)base={r:z.r,mpp:rrMap.mpp()}};
  const fit=()=>{if(!rrMap)return;const p0=prog=Date.now()+800;clamped=false;setTimeout(()=>{if(prog===p0){prog=0;setBase()}},820);if(z.r)rrMap.fitZone(z,z.r,null,ZPAD(),ZONEK);else rrMap.fitPts(VENUES.filter(v=>cityOf(v)===S.city),14)};
  // sliding bigger: the map zooms out with the circle as you go. Sliding smaller: the circle shrinks on the map as it is,
  // and the map zooms back in to fit when you let go.
  $("rrR").oninput=()=>{const r0=z.r;if(!base&&r0)setBase();z.r=Z.toR(+$("rrR").value);paint(false);
    if(rrMap&&rrMap.setMpp&&z.r&&r0&&base&&base.r){const want=base.mpp*z.r/base.r;if(want>rrMap.mpp()*1.001){prog=Date.now()+400;rrMap.setMpp(want)}}};
  $("rrR").onchange=()=>{save();paint(true);fit()};
  // tap a pin: a little card on the map; tap the card for the full bar page (not from inside a panel)
  const card=$("rrCard"),inSheet=!!card.closest("dialog");
  const pinCard0=v=>{const o=openState(v,now()),y=me||you();
    card.innerHTML=`<span class="t"><b>${esc(v.name)}</b><small>${esc(v.vibe||v.area)} · ${o.open?"Open til "+clock12(o.closeAt):o.opens!=null?"Opens "+clock12(o.opens):"Closed today"}${y?" · "+mOrKm(dist(y,v)):""}</small></span>${inSheet?"":`<span class="chev">›</span>`}`;
    card.hidden=false;cardAt=Date.now();card.onclick=()=>{if(!inSheet)barSheet(v)}};
  const pinCard=v=>{if(S.route==="wiz"&&S.wiz&&!S.wiz.spoiled)wizSpoiler(()=>pinCard0(v));else pinCard0(v)};   // setup: names are a surprise until you say otherwise
  let lastP=null,cardAt=0;
  ["pointerdown","touchstart","mousedown","wheel","dblclick"].forEach(ev=>card.addEventListener(ev,e=>e.stopPropagation(),{passive:true}));swipeHide(card);
  // the bars in the circle, in a panel from the bottom like everything else
  // (a full-screen setup panel with its own list keeps its See list: it opens the panel's list, not this sheet)
  {const nb0=$("rrNB");if(!(nb0&&nb0.classList.contains("fspill")))nb0.onclick=()=>{if(!lastP)return;if(o&&o.listSheet){o.listSheet(lastP);return}const t=now(),y=me||you(),back=inSheet&&o&&o.reopen;
    const L=lastP.all.slice().sort((a,b)=>(openOK(b,t)?1:0)-(openOK(a,t)?1:0)||(y?dist(y,a)-dist(y,b):a.name.localeCompare(b.name)));
    const sk=o&&o.skip&&o.skip.show()?`<button class="toggle" type="button" id="mlSkip" role="switch" aria-checked="${!!o.skip.get()}" style="margin:4px 0 10px"><span class="t"><b>Skip visited rooftops${o.skip.n&&o.skip.n()?` <span class="skn">${o.skip.n()}</span>`:""}</b></span><span class="sw"></span></button>`:"";
    sheet(`<h3>${lastP.open.length} open in your circle</h3><p class="note" style="margin:2px 0 8px">${esc($("rrLbl").textContent)}</p>${sk}
      <div class="mlr">${L.map(v=>{const st=openState(v,t);return `<button type="button" class="${openOK(v,t)?"":"off"}" data-v="${v.id}" ${back?"disabled":""}><span class="t"><b>${esc(v.name)}</b><small>${esc(v.vibe||v.area)} · ${st.open?"Open til "+clock12(st.closeAt):st.opens!=null?"Opens "+clock12(st.opens):"Closed today"}</small></span>${y?`<span class="d">${mOrKm(dist(y,v))}</span>`:""}</button>`}).join("")||`<p class="note">No rooftops in the circle. Drag or widen it.</p>`}</div>
      <button class="btn dark" type="button" id="mlBack" style="margin-top:14px">${back?"Back to the map":"Close"}</button>`,()=>{
      $("sheetBody").querySelectorAll("[data-v]").forEach(b=>b.onclick=()=>barSheet(byId(b.dataset.v)));
      $("mlBack").onclick=()=>{if(back)back(z);else closeSheet()};
      if($("mlSkip"))$("mlSkip").onclick=()=>{o.skip.set(!o.skip.get());paint(true);$("rrNB").onclick()}})}};
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
      const r0=base.r*m.mpp()/base.mpp,r=Z.snap(Math.max(lo,Math.min(hi,r0)));clamped=r0<lo*.97||r0>hi*1.03;if(r0<lo*.97&&o&&o.onShrink)o.onShrink();if(r===z.r)return;
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
  // R&R setup is one screen: the map, with what's in play as pills on it (open count, Hit list, Skip visited)
  if(farAway()&&!S.game){S.quick=null;go("home");setTimeout(farSheet,150);return}
  const q=S.quick||(S.quick={step:1,from:null}),b=$("v-quick"),t=now();
  if(!S.game)$("stage").innerHTML="";
  if(q.who&&whoOn()){if(rrMap){rrMap.remove();rrMap=null}b.classList.remove("fsv");
    b.innerHTML=`<div class="wtop"><button class="iconbtn" id="qBack" type="button" aria-label="Back">${I.back}</button><div class="prog"><i style="width:100%"></i></div><button class="iconbtn" id="qClose" type="button" aria-label="Close">${I.x}</button></div><div id="qWho" style="display:flex;flex-direction:column;gap:16px;padding:0 20px"></div>`;
    $("qBack").onclick=()=>{q.who=0;save();renderQuick()};$("qClose").onclick=()=>{S.quick=null;go("home")};whoStep($("qWho"),q,()=>startCruise());return}
  if(q.newOnly===undefined)q.newOnly=!!(S.last&&S.last.rrNew);
  apClear();
  const top=`<div class="wtop"><button class="iconbtn" id="qBack" type="button" aria-label="Back">${I.back}</button><div class="prog"><i style="width:100%"></i></div><button class="iconbtn" id="qClose" type="button" aria-label="Close">${I.x}</button></div>`;
  const head=`<div><h1 class="q qmap">Rest &amp; Roulette</h1><p class="sub qpace">Crawl at your own pace.</p></div>`;
  const bindTop=()=>{$("qBack").onclick=()=>{S.quick=null;S.wiz={step:0,len:60,rr:true,radius:1};save();go("wiz")};$("qClose").onclick=()=>{S.quick=null;go("home")}};
  // Looking at another city? Start in that city. Otherwise start where you are (or the city centre if we can't find you).
  const hp=S.test&&S.fake?S.fake:here,away=!!hp&&nearLive(hp)!==S.city;
  const cityStart=()=>{const a=GAME_AREAS(S.city)[0]||CITIES.find(c=>c.name===S.city);q.from={type:"pick",name:null,lat:a.lat,lng:a.lng};q.z={lat:a.lat,lng:a.lng,r:q.z&&q.z.r||2}};
  if(q.note&&!q.from){q.note=null;cityStart();q.far="Couldn't find you. Drag the map to where you'll start."}
  if(!q.from&&!away&&!q.far&&(fixFresh()||(S.test&&S.fake))){const p=S.test&&S.fake?S.fake:here;q.from={type:"me",name:"Near you",lat:p.lat,lng:p.lng};
    if(!q.z||dist(q.z,p)>5000){q.z={lat:p.lat,lng:p.lng,r:q.z?q.z.r:2};const t=now();if(rrPool({lat:p.lat,lng:p.lng,r:2},t,false).open.length<1){q.from=null;q.z=null}}if(q.from){q.step=1;save()}}   // nothing open near you: the usual path picks the city centre
  if(!q.from){b.classList.remove("fsv");
    b.innerHTML=top+head+`<p class="note" style="margin:10px 2px">Finding you…</p>`;bindTop();
    cta(`<button class="btn" type="button" disabled>Start the crawl</button>`,()=>{});
    if(!renderQuick.busy){renderQuick.busy=1;(async()=>{try{
      if(away){cityStart();save();renderQuick();return}
      // already allowed (the usual case): no extra permission round trip, which on the phone app was its own location lookup
      if(!S.test&&!fixFresh()&&(await permState())!=="granted"){const st=await permState(true);if(st!=="granted"){S.permNext="rr-me";go("perm");return}}
      await quickNearMe()}finally{renderQuick.busy=0}})()}
    return}
  const pick=q.from.type==="pick",me=q.from.type==="me"?{lat:q.from.lat,lng:q.from.lng}:null;
  if(!q.z)q.z={lat:q.from.lat,lng:q.from.lng,r:2};
  if(!q.z.r&&!q.z.all)q.z.r=2;   // a circle from the start, so it's clear the distance can change
  // Lists: Hit list or Favourites as the whole pool (only lists with 2+ open show). Skip visited only with all rooftops.
  tickOff();if(q.hl&&!q.list)q.list="want";delete q.hl;
  const opn=k=>listOf(k).filter(v=>openOK(v,t)).length,lists=["want","fav"].filter(k=>opn(k)>=2);if(q.list&&!lists.includes(q.list))q.list=null;
  const wl=q.list?listOf(q.list):[];
  const listPool=(z,t,newOnly)=>{const all=wl.filter(v=>(!z.r||dist(z,v)<=z.r*1000)&&(!newOnly||isNew(v.id)));return {all,open:all.filter(v=>openOK(v,t))}};
  const tick=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`;
  const caret=`<svg class="cr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`;
  const allN=rrPool(q.z,t,!!q.newOnly).open.length;
  const chips=lists.length?`<div class="fstabs" role="tablist">${[["","All",allN]].concat(lists.map(k=>[k,listName(k),opn(k)])).map(([k,l,n])=>`<button type="button" role="tab" data-k="${k}" aria-selected="${(q.list||"")===k}">${l} <span>${n}</span></button>`).join("")}</div>`:"";
  b.innerHTML=top+head+rrZoneHTML({searchHint:"Search a suburb"}).replace('<button class="mcard"',chips+'<button class="mcard"');
  bindTop();
  const visN=z=>q.list?0:rrPool(z,now(),false).all.filter(v=>!isNew(v.id)).length;
  // Skip visited on the panel under the distance, like timed setup's Skip row:
  // label, the rooftops named in amber underneath, then the control. Each only when it has rooftops in the circle.
  function rrOpts(z){const panel=b.querySelector(".fspanel"),sl=panel&&panel.querySelector(".rrslide");if(!sl)return;
    let o=$("rrOpts");if(!o){o=document.createElement("div");o.id="rrOpts";o.className="fsopts";sl.after(o)}
    const t=now(),y=me||you()||z,byD=a=>a.slice().sort((u,w)=>dist(y,u)-dist(y,w)),
      nm=a=>esc(a[0].name)+(a.length>1?` + ${a.length-1} other${a.length>2?"s":""}`:"");
    const vis=q.list?[]:byD(rrPool(z,t,false).open.filter(v=>!isNew(v.id))),
      pas=[];   // the Pass list is a standing choice, not a per-crawl one: it's set on the rooftop or when skipping, not here
    o.innerHTML=(vis.length?`<button class="fsopt" id="rrSkip" type="button" role="switch" aria-checked="${!!q.newOnly}" aria-pressed="${!!q.newOnly}"><span class="l"><span class="lt">Skip visited rooftops</span><span class="ln">${nm(vis)}</span></span><i class="dv" aria-hidden="true"></i><span class="sw"></span></button>`:"")
      +(pas.length?`<button class="fsopt fspass" id="rrPass" type="button"><span class="l"><span class="lt">Pass list</span><span class="ln">${nm(pas)}</span></span><i class="dv" aria-hidden="true"></i><svg class="cr chv" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></button>`:"");
    o.hidden=!o.innerHTML;
    if($("rrSkip"))$("rrSkip").onclick=()=>{q.newOnly=!q.newOnly;S.last.rrNew=q.newOnly;save();if(qZB)qZB.paint(true)};
    if($("rrPass"))$("rrPass").onclick=()=>listSheet("nfu",null,()=>{if(qZB)qZB.paint(true)})}
  qZB=rrZoneBind(q.z,me,()=>!q.list&&!!q.newOnly,(P,z,moved)=>{
    q.z.all=!z.r;   // remember a deliberate "All" so a redraw doesn't put the circle back
    if(!visN(z)&&q.newOnly&&!q.list)q.newOnly=false;
    {const tb=document.querySelector('.fstabs [data-k=""] span');if(tb)tb.textContent=rrPool(z,now(),!!q.newOnly).open.length}
    $("rrNB").hidden=!P.open.length;rrOpts(z);
    cta(`<button class="btn" id="qGo" type="button" ${P.open.length?"":"disabled"}>Start the crawl</button>`,()=>$("qGo").onclick=()=>{
      if(q.list){q.from={type:"list",list:q.list,name:listName(q.list),lat:z.lat,lng:z.lng};q.newOnly=false}
      else q.from=z.r?(moved||pick?{type:"spot",name:"Around "+nearestSuburb(z),lat:z.lat,lng:z.lng}:Object.assign({},q.from)):{type:"all",name:"Anywhere"};
      q.r=z.r||null;q.z=z;if(whoOn()){q.who=1;save();renderQuick()}else{save();startCruise()}})},
    Object.assign({locate:me?null:()=>{const h=S.test&&S.fake?S.fake:here;if(h&&nearLive(h)===S.city){q.from={type:"me",lat:h.lat,lng:h.lng};q.z={lat:h.lat,lng:h.lng,r:q.z&&q.z.r||2};save();renderQuick();return}
      if(h){toast("You're not near "+esc(S.city)+" right now.",3000);return}q.from=null;save();renderQuick()},   // the locate button, same as timed: back to where you are
      skip:{n:()=>rrPool(q.z,now(),false).open.filter(v=>!isNew(v.id)).length,show:()=>!q.list&&visN(q.z)>0,get:()=>!!q.newOnly,set:v=>{q.newOnly=v;S.last.rrNew=v;save()}}},q.list?{pool:listPool,allLbl:"Your whole "+listName(q.list),pinSet:()=>wl}:{}));
  // full screen: Spin from (a dropdown) and Skip visited up top under search, the open count as the See list pill
  {const cv=$("rrMap").parentElement;
    // a one-off message (nothing open near you, couldn't find you): the same note as everywhere else, gone on its own or with a swipe
    if(q.far){const m=q.far;q.far=null;save();setTimeout(()=>toast(esc(m),4500),350)}}
  b._fsList=()=>{const z=q.z,t=now(),y=me||you()||z,P=q.list?listPool(z,t,false):rrPool(z,t,!!q.newOnly),L=P.open.slice().sort((a,c)=>dist(y,a)-dist(y,c));
    return {title:`${L.length} rooftop${L.length===1?"":"s"} open in your circle`,top:"",html:`<div class="card zlist">${L.map(v=>{const o=openState(v,t);return `<div class="zrow"><button class="t zopen" type="button" data-z="${v.id}"><b>${esc(v.name)}</b><small>${esc(v.area)} · Open til ${clock12(o.closeAt)}</small></button><span class="zd">${mOrKm(dist(y,v))}</span></div>`}).join("")}</div>`,
      bind(root,again){const pb=root.querySelector(".fspass");if(pb)pb.onclick=()=>listSheet("nfu",null,()=>{if(qZB)qZB.paint(true);again()});const sb=root.querySelector(".fsskip");if(sb)sb.onclick=()=>{q.newOnly=!q.newOnly;S.last.rrNew=q.newOnly;save();if(qZB)qZB.paint(true);again()};root.querySelectorAll("[data-z]").forEach(x=>x.onclick=()=>barSheet(byId(x.dataset.z)))}}};
  fsLayout(b,b);rrOpts(q.z);
  b.querySelectorAll(".fstabs [data-k]").forEach(x=>{["pointerdown","touchstart"].forEach(ev=>x.addEventListener(ev,e=>e.stopPropagation(),{passive:true}));x.onclick=()=>{const k=x.dataset.k||null;if(k===q.list)return;q.list=k;
    // picking a list: widen the circle (if it needs to) so every open bar on it is in it
    if(q.list&&q.z.r){const far=Math.max(0,...listOf(q.list).filter(v=>openOK(v,now())).map(v=>dist(q.z,v)/1000));if(far>q.z.r)q.z.r=[1,2,5,10,15].find(r=>r>=far)||15}
    save();renderQuick()}});
  fitMap(b);
}
let qZB=null;
const beenTxt=n=>n?`${plural(n,"rooftop")} on your Visited list`:"Your Visited list is empty";
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
      return `<button class="lsrow lspick" type="button" data-t="${v.id}" ${fixed?"disabled":""}><span class="t"><b>${esc(v.name)}</b><small>${esc(v.area)}${fixed?" · Visited on a crawl":""}</small></span><span class="pl${on?" on":""}">${on?TICK:I.plus}</span></button>`}).join("")
      :`<div class="lsempty">${s_?`No rooftops match "${esc(q.value.trim())}".`:"Nothing here yet. Search to add rooftops you've been to."}</div>`;
    $("bpItems").querySelectorAll("[data-t]").forEach(b=>{b.onpointerdown=e=>{if(document.activeElement===q)e.preventDefault()};
      b.onclick=()=>{const id=b.dataset.t;if(S.been[id])delete S.been[id];else{S.been[id]=1;buzz(10)}save();paint();onChange()}})};
  q.oninput=paint;$("bpClr").onclick=()=>{q.value="";paint();q.blur()};paint()}
async function startCruise(noLoc){
  ac();const q=S.quick;noLoc=noLoc===true;
  if(!S.test&&!noLoc&&q.from&&q.from.type!=="me"&&(await permState(true))==="denied"){noLocSheet(startCruise);return}
  let pos;if(noLoc)pos=null;else if(!S.test&&here&&here.t&&Date.now()-here.t<10*60000)pos=here;else try{pos=await getOnce()}catch(e){if(e&&e.code===1&&q.from&&q.from.type!=="me"){noLocSheet(startCruise);return}S.permNext="cruise";go("perm");return}
  const f=q.from,c=f.type==="me"||f.type==="spot"||(f.type==="list"&&q.r&&f.lat!=null)?{lat:f.lat,lng:f.lng}:(()=>{const l=f.type==="list"?listOf(f.list):VENUES.filter(v=>inCityNow(v)&&(f.type==="all"||areaOf(v).reg===f.name));return {lat:l.reduce((s,v)=>s+v.lat,0)/l.length,lng:l.reduce((s,v)=>s+v.lng,0)/l.length}})();
  const label=f.type==="me"?"Near you":f.type==="spot"?f.name:f.type==="all"?"Anywhere":f.type==="list"?listName(f.list):f.name;
  zoneCity(c);S.game={id:"g"+now(),city:S.city,test:!!S.test,mode:"cruise",cz:{type:f.type,list:f.type==="list"?(f.list||"want"):undefined,name:f.name||null,r:q.r||null,lat:f.type==="spot"||(f.type==="list"&&q.r)?f.lat:null,lng:f.type==="spot"||(f.type==="list"&&q.r)?f.lng:null},nudge:60,started:false,startedAt:null,endsAt:null,len:1440,radius:q.r||2,newOnly:!!q.newOnly,
    center:c,startPos:pos?{lat:pos.lat,lng:pos.lng}:{lat:c.lat,lng:c.lng},noLoc:noLoc||undefined,areas:[label],moves:[],voluntaryUsed:true,freeSkips:999,excluded:[],zone:{lat:c.lat,lng:c.lng,name:label},
    visits:[],target:null,targetAt:null,targetFrom:null,ended:false,shownFinal:true};
  if(q.live){S.game.live=q.live;try{liveAttach()}catch(e){}}
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
function startWizard(){if(!S.safeOK&&!S.test){safetySheet(startWizard);return}const at=S.test&&S.fake?S.fake:here;if(at&&cityAt(at))zoneCity(at);S.wiz={step:0,start:null,radius:null,len:S.last.len||60,newOnly:!!S.last.newOnly};go("wiz")}
const recRadius=len=>len===60?0.5:2;
const rLabel=r=>r<1?Math.round(r*1000)+" m":r+" km";
let zMap=null;
function renderWiz(){
  const w=S.wiz;if(!w){go("home");return}if(farAway()){S.wiz=null;go("home");setTimeout(farSheet,150);return}if(w.step===2&&!whoOn())w.step=1;if(w.step===3)w.step=1;   // 0 how long → 1 zone → 2 who's coming (when it's on) → start. Decks are a pill on the spin screen.
  $("wBack").innerHTML=I.back;$("wClose").innerHTML=I.x;if(w.step!==1)$("v-wiz").classList.remove("fsv");if(rrMap&&w.step!==1){rrMap.remove();rrMap=null}if(wMapRef){wMapRef.remove();wMapRef=null}
  // steps across the top: done ones show your pick and take you back to change it
  const stVal=[w.rr?"R&R":w.len===60?"1 hr":"2 hrs",w.start?(w.start.type==="me"?(w.z?nearestSuburb(w.z):"Near you"):w.start.name):"Zone"];
  stVal[3]=deckLbl();const order=whoOn()?[0,1,2]:[0,1],pos=Math.max(0,order.indexOf(w.step));
  // one bar that fills as you go
  $("wSteps").innerHTML=`<div class="prog"><i style="width:${Math.round((pos+1)/order.length*100)}%"></i></div>`;
  $("wSteps").querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>{w.step=+b.dataset.s;save();renderWiz()});
  const body=$("wBody"),t=now();
  // pick chips on the last screen only (the map gets the room on screen 2). Tap one to jump back and change it.
  const picks=[];
  $("wSum").innerHTML=picks.map(([k,ic,txt])=>`<button class="chip" type="button" data-s="${k}">${ic} ${txt}</button>`).join("");
  $("wSum").hidden=!picks.length;
  $("wSum").querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>{w.step=+b.dataset.s;save();renderWiz()});
  if(w.step===0){
    body.innerHTML=`<div><div class="eyebrow" style="margin-bottom:6px">New crawl</div><h1 class="q">Pick your crawl</h1></div>
      <div class="opts">
        <button class="opt" type="button" role="radio" data-l="60" aria-checked="${!w.rr&&w.len===60}"><span class="ic">${I.pair}</span><span class="t"><b>1 hour <span class="ppl">Best for 2–3</span></b><small>A few rooftops, quick drinks.</small></span></button>
        <button class="opt" type="button" role="radio" data-l="120" aria-checked="${!w.rr&&w.len===120}"><span class="ic">${I.group}</span><span class="t"><b>2 hours <span class="ppl">Best for 4+</span></b><small>More rooftops or longer stays.</small></span></button>
        <button class="opt optrr" type="button" role="radio" data-l="rr" aria-checked="${!!w.rr}"><span class="ic"><b class="rrwm">R<i>&amp;</i>R</b></span><span class="t"><b>Rest &amp; Roulette</b><small>Your own pace. No timer or wildcards.</small></span></button>
      </div>
      <button class="txtbtn zdemo" type="button" id="lenDemo">Not heading out yet? <span class="amber">Try a practice crawl</span></button>`;
    $("lenDemo").onclick=()=>askDemo(()=>{S.wiz=null});
    body.querySelectorAll("[data-l]").forEach(b=>b.onclick=()=>{if(b.dataset.l==="rr")w.rr=true;else{w.rr=false;w.len=+b.dataset.l;w.radius=null}save();renderWiz()});
    // joining a friend's crawl: the quiet way in, at the bottom above Next
    cta(`${typeof cloudOn==="function"&&cloudOn()?`<button class="txtbtn howlink wjoin" type="button" id="lenJoin">Join a friend's crawl</button>`:""}<button class="btn" id="wNext" type="button" ${w.len||w.rr?"":"disabled"}>Next</button>`,()=>{if($("lenJoin"))$("lenJoin").onclick=()=>joinScan();$("wNext").onclick=()=>{
      if(w.rr){S.wiz=null;save();track("rr_from_setup",{});firstRules("rr",cruiseHow,()=>{S.quick={step:0,from:null};go("quick")});return}
      w.step=1;save();renderWiz()}});
  }
  if(w.step===1){
    // drag the circle where you're starting; the size moves in 100 m steps within what this game length allows
    const R1=w.len===60?{lo:.5,hi:1,step:.1,ticks:[[.5,"Less travel"],[1,"More rooftops"]]}:{lo:.5,hi:2,step:.1,ticks:[[.5,"Less travel"],[2,"More rooftops"]]};
    R1.searchHint="Search where you’re going";   // search floats on the map; the open count sits beside the distance, like R&R
    const me=w.me||null;
    if(!me&&!w._loc){w._loc=1;permState().then(st=>{if(st==="granted"&&S.route==="wiz"&&S.wiz===w&&w.step===1)useMe()})}
    if(!w.z){const c0=me&&GAME_AREAS(cityAt(me)||S.city).some(a=>dist(a,me)<6000)?me:(GAME_AREAS().find(a=>a.name==="The City")||GAME_AREAS()[0]);w.z={lat:c0.lat,lng:c0.lng,r:null}}
    if(w.z.r==null||w.z.r<R1.lo||w.z.r>R1.hi){let r=recRadius(w.len);if(r<R1.lo)r=R1.lo;if(r>R1.hi)r=R1.hi;if(r===.5&&playable(inCircle(w.z,.5),false).length<4)r=1;w.z.r=r}
    w.z.r=Math.round(w.z.r*10)/10;
    const excl=w.excl||(w.excl=[]);
    body.innerHTML=`<div><h1 class="q qmap">Set your zone</h1><p class="sub zmove">You can move it once mid-crawl.</p></div>${rrZoneHTML(R1).replace('<button class="mcard"',`<button class="mchip" type="button" id="zSkipC" aria-pressed="${!!w.newOnly}" hidden><i class="off"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5l9 7-9 7z"/><path d="M18 5v14"/></svg></i><i class="on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></i>Skip visited <span id="zSkipN"></span></button><button class="mcard"`)}
      <div class="zwarn" id="zWarn" hidden><b id="zWarnT"></b><small id="zWarnS"></small><button class="btn line sm" type="button" id="zoneSuggest" hidden></button></div>
`;
    const pool=(z,t)=>{const all=playable(inCircle(z,z.r),!!w.newOnly).filter(v=>!excl.includes(v.id));return {all,open:all.filter(v=>openOK(v,t))}};
    const zb=rrZoneBind(w.z,me,()=>!!w.newOnly,(P,z,moved,settled)=>{
      const t=now(),location=me||you(),far=!location||dist(location,z)>Math.max(2000,z.r*1000+1000);
      const ok=P.open.length>=2,options=P.open.length?P.open:P.all;
      // not enough open: say so, offer the nearest area that works, and put the demo front and centre
      const op=!ok&&P.all.length?nextOpen(P.all,t):null,sug=$("zoneSuggest");
      $("rrNB").hidden=!P.open.length;
      $("zWarn").hidden=ok;sug.hidden=true;
      if(!ok&&!P.open.length)$("rrNB").hidden=true;   // the warning says it all (and the setup screen has to fit without scrolling)
      if(!ok){$("zWarnT").textContent=P.open.length===1?"Only 1 open here right now":!P.all.length?"No rooftops here":op?`Nothing open here till ${op}`:"Nothing open here today";
        $("zWarnS").textContent="Move the circle, or try a practice crawl.";
        const c_=GAME_AREAS().map(area=>({area,open:pool({...area,r:z.r},t).open.length})).filter(x=>x.open>=2).sort((a,b)=>dist(z,a.area)-dist(z,b.area));
        if(c_.length){const {area,open}=c_[0];sug.hidden=false;sug.innerHTML=`${I.move}<span>${esc(area.name)}</span><small>${open} open</small>`;sug.setAttribute("aria-label",`Move to ${area.name}, ${open} open`);sug.onclick=()=>{w.z={lat:area.lat,lng:area.lng,r:z.r};save();renderWiz()}}}
      // Skip visited: a filter chip on the map, only when you've been to some bars in this zone
      {const c=collectedMap(),bl=playable(inCircle(z,z.r),false).filter(v=>c[v.id]);
        if(!bl.length&&w.newOnly)w.newOnly=false;
        const ch=$("zSkipC"),bop=bl.filter(v=>openOK(v,now())).sort((x,y)=>dist(z,x)-dist(z,y)),bo=bop.length;ch.hidden=!bl.length;ch.setAttribute("aria-pressed",String(!!w.newOnly));
        // the visited rooftops by name, in yellow: tap the words to see them all (no spoiler: you've been)
        const lt=bo?esc(bop[0].name)+(bo>1?` + ${bo-1} other${bo>2?"s":""}`:""):"None open right now";if($("zSkipL"))$("zSkipL").innerHTML=lt;if($("zSkipN")){$("zSkipN").textContent=bo;$("zSkipN").hidden=!bo}}
      w.start={type:me&&!moved?"me":"area",name:me&&!moved?"you":nearestSuburb(z),lat:z.lat,lng:z.lng};
      w.radius=z.r;w.zN={open:P.open.length,all:P.all.length};
      {
        cta(ok?`<button class="btn" id="wNext" type="button">${whoOn()?"Next":"Start the crawl"}</button>`:`<button class="btn" id="wDemo" type="button">Try a practice crawl</button>`,()=>{
          if($("wNext"))$("wNext").onclick=()=>{w.radius=w.z.r;w.excl=excl.filter(id=>{const v=byId(id);return v&&dist(w.z,v)<=w.z.r*1000});save();sawHow("rush");if(whoOn()){w.step=2;save();renderWiz()}else tryStart()};
          if($("wDemo"))$("wDemo").onclick=()=>askDemo(()=>{S.wiz=null})})}},
      Object.assign({pool,listSheet:()=>wizSpoiler(),locate:me?null:async()=>{const st=await permState();if(st!=="granted"){S.permNext="wiz-me";go("perm");return}useMe()}},R1));
    wizRepaint=()=>{if(zb&&S.route==="wiz")zb.paint(true)};
    $("zSkipC").onclick=e=>{if(e&&e.target.closest&&e.target.closest(".l")&&$("zSkipC").querySelector(".dv")){visitedSheet(w.z);return}w.newOnly=!w.newOnly;save();if(zb)zb.paint(true)};
    // full screen: Skip visited up top under search, the open count as the See list pill above the panel
    {const cv=$("rrMap").parentElement,row=document.createElement("div");row.className="mchips";row.append($("zSkipC"));cv.append(row)}
    $("v-wiz")._fsList=()=>{const r=wizRows();return {title:(n=>`${n} rooftop${n===1?"":"s"} open in your zone`)(parseInt($("rrN").textContent)||0),top:`<p class="note fsln">${r.note}</p>`,html:`<div class="card zlist">${r.html}</div>`,bind:r.bind,gate:()=>!w.spoiled,ungate:()=>{w.spoiled=1;save()}}};
    fsLayout($("v-wiz"),body);fsOpts();
    fitMap($("v-wiz"));
  }
  if(w.step===2){body.classList.remove("fsv");whoStep(body,w,()=>tryStart())}
  if(w.step===3){
    const toAdd=PACKS.filter(p=>!packOwned(p.id));
    body.innerHTML=`<div><h1 class="q">Pick your decks</h1><p class="sub" style="margin:6px 0 0">Wildcards land at random along the way.</p></div>${deckSwHTML()}
      ${toAdd.length?`<div><div class="eyebrow dk-ph">More wildcard decks</div><div class="dk-packs">${toAdd.map(p=>`<button class="dk-pack" type="button" data-dp="${p.id}"><span class="dk-logo">${deckLogo(p.id)}</span><span class="t"><b>${esc(p.name)}</b><small>${esc(PACK_PITCH[p.id]||p.line)}</small></span><span class="dk-pr">${canBuy()&&rcPrice[PK_PRODUCT[p.id]]?esc(rcPrice[PK_PRODUCT[p.id]]):"Preview"}</span><span class="chev">›</span></button>`).join("")}</div></div>`:""}`;
    bindDeckSw(body);body.querySelectorAll("[data-dp]").forEach(b=>b.onclick=()=>packSheet(b.dataset.dp,closeSheet));
    cta(`<button class="btn" id="wNext" type="button">Next</button>`,()=>{$("wNext").onclick=()=>{w.step=1;save();renderWiz()}});
  }
}
let wizRepaint=null,wMapRef=null;
// Setup maps, full screen like Google Maps and Uber: back, search and locate across the top with the filters under them,
// the open count as a "See list" pill above a fixed panel (title, line, distance, slider), Start the crawl below.
function fsLayout(view,host,opt){opt=opt||{};const noList=opt.list===false;view.classList.add("fsv");const box=host.querySelector(".rrmap");if(!box)return;
  const panel=document.createElement("div");panel.className="fspanel";
  const ctl=document.createElement("div");ctl.className="fsctl";panel.append(ctl);
  const head=[...host.children].find(x=>x.querySelector&&x.querySelector("h1"));if(head)ctl.append(head);
  ["rrsum","rrslide"].forEach(c=>{const x=host.querySelector("."+c);if(x)ctl.append(x)});const zw=$("zWarn");if(zw)ctl.append(zw);
  box.after(panel);
  // Three stops, like Google Maps: tucked (more map), the zone controls (default), and the rooftop list (up, under the search bar).
  // The controls and the list are never on screen together: dragging between them crossfades one into the other.
  panel.insertAdjacentHTML("afterbegin",`<button class="fshandle" type="button" aria-label="Show less" aria-expanded="true"></button>`);
  const hd=panel.querySelector(".fshandle"),sub=ctl.querySelector("p.sub"),lbl=ctl.querySelector(".rrsum");
  const mk=()=>{const d=document.createElement("div");d.className="fsmore";return d};
  const m1=mk();if(sub){sub.after(m1);m1.append(sub)}
  const m2=mk();if(lbl){lbl.after(m2);let n=m2.nextSibling;while(n){const x=n.nextSibling;m2.append(n);n=x}}
  const lw=document.createElement("div");lw.className="fslist";lw.innerHTML=`<div class="fslh">${I.glass||""}<span class="n"></span></div><div class="fslb"></div>`;panel.append(lw);
  // timed mode: the spoiler question takes the controls' place at the same size, before the list ever shows
  const gt=document.createElement("div");gt.className="fsgate";gt.innerHTML=`<div class="fsgh">${I.glass||""}<span class="n"></span></div><div class="fsgc"><div class="fsgt"><b>Spoiler alert</b><span>This shows all the rooftops you could land on.</span></div><button class="fsgshow" type="button" data-g="show">See the rooftops</button></div>`;panel.append(gt);
  const bx=lw.querySelector(".fslb"),parts=[m1,m2];let full=null,u=1,base=300,span=300,spanMax=300,gateOK=false;
  const prov=()=>view._fsList&&view._fsList();
  const needGate=()=>{if(gateOK)return false;const L=prov();return !!(L&&L.gate&&L.gate())};
  const fill=()=>{const L=prov();if(!L)return;lw.querySelector(".n").textContent=L.title;bx.innerHTML=(L.top||"")+`<div class="fsrows">${L.html}</div>`;if(L.bind)L.bind(bx,fill);
    if(full){const s=listSpan();if(s!==span){span=s;if(u>1)apply(u)}}};
  view._fsFill=()=>{if(u>1.01)fill()};
  // the map never resizes while the panel moves (that's what made it stutter): it's sized to the whole screen once,
  // and just slides so its centre (the zone's centre) stays in the middle of the visible part
  const mapEl=box.querySelector("#rrMap");let mvh=0;
  const mapSize=()=>{mvh=view.clientHeight||innerHeight;if(mapEl)mapEl.style.setProperty("--fsmh",mvh+"px")};
  // ...and its centre sits halfway between whatever floats on top (search, tabs) and the open pill, so the circle looks centred in the space you can see
  const zoff=()=>{const br=box.getBoundingClientRect();let t=br.top;view.querySelectorAll(".msearch,.fstabs,.mchips").forEach(x=>{if(x.offsetParent){const r=x.getBoundingClientRect();if(r.height)t=Math.max(t,r.bottom)}});
    const pl=box.querySelector(".fspill"),pr_=pl&&pl.getBoundingClientRect(),b=pr_&&pr_.height?pr_.top:br.bottom;const o=((t-br.top)-(br.bottom-b))/2;return Math.abs(o)<120?o:0};
  let zo=0;
  const mapSync=()=>{if(!mapEl)return;zo=zoff();const y=Math.round((box.clientHeight-mvh)/2+zo);mapEl.style.transform=`translate3d(0,${y}px,0)`;const pin=box.querySelector("#rrPin");if(pin)pin.style.transform=`translateY(${Math.round(zo)}px)`};
  mapSize();mapSync();[60,300,900].forEach(t=>setTimeout(()=>{if(view.isConnected&&!moving)mapSync()},t));if(window.ResizeObserver)new ResizeObserver(()=>{if(!moving)mapSync()}).observe(box);addEventListener("resize",()=>{if(!view.isConnected)return;mapSize();mapSync();if(rrMap)rrMap.resize()});
  // timed, before you've seen the list: the panel settles into a small spoiler card (no list behind it, nothing to peek at).
  // Everything about the card (its height, the crossfade back to the controls, the map) runs off one spring, same as the rest of the panel.
  let gH=0,hb=null,hraf=0,cH=0;
  const gated=()=>panel.classList.contains("gated");
  // while the card's up, the main button becomes Keep it a surprise (same place, its words crossfade): that's the pick we want
  const ctaSwap=on=>{const b=document.querySelector("#cta:not([hidden]) .btn");if(!b)return;if(on===!!b._gk)return;const fade=()=>{try{b.animate([{opacity:1},{opacity:0,offset:.45},{opacity:0,offset:.55},{opacity:1}],{duration:260,easing:"ease"})}catch(e){}};
    if(on){b._gk={h:b.innerHTML,c:b.onclick,d:b.disabled};fade();setTimeout(()=>{b.innerHTML="Keep it a surprise"},110);b.disabled=false;b.onclick=e=>{e.stopPropagation();gateOut(1)}}
    else{const k=b._gk;b._gk=null;fade();setTimeout(()=>{b.innerHTML=k.h},110);b.onclick=k.c;b.disabled=k.d}};
  const gate=on=>{cancelAnimationFrame(hraf);panel.classList.remove("gleave");if(!on){hb=null;panel.classList.remove("gated");panel.style.height="";panel.style.removeProperty("--gp");ctaSwap(false);return}const L_=prov();gt.querySelector(".fsgh .n").textContent=L_?L_.title:"";panel.classList.add("gated");ctaSwap(true)};
  const tuckH=()=>base-tot();
  // H: the card's height. Above the card it fades back into the controls; below it, into the tucked panel
  // (the card is the same height as the controls: dragging it up fades back to them over the first 70px, gp can also be driven directly)
  const cardFrame=(H,gp)=>{cH=H;panel.style.height=Math.round(H)+"px";const up=gp!=null?gp:cl((H-gH)/70),dn=cl((gH-H-4)/Math.max(1,gH-tuckH()-4)),k=Math.max(up,dn);
    panel.style.setProperty("--gp",k.toFixed(3));const f=1-dn;parts.forEach((x,i)=>{x.style.maxHeight=(full[i]*f)+"px";x.style.opacity=f});
    const pl=view.querySelector(".fspill");if(pl){pl.style.opacity=String(k);pl.style.pointerEvents=k>.7?"":"none";pl.style.transform="translateX(-50%)"}mapSync()};
  const hspring=(to,o={})=>{cancelAnimationFrame(hraf);cancelAnimationFrame(raf);const k=o.k||340,c=2*(o.z||1)*Math.sqrt(k);let x=cH,v=o.v||0,last=performance.now();const t0=last;
    const step=t=>{const dt=Math.min(.034,Math.max(.001,(t-last)/1000));last=t;for(let n=0;n<4;n++){const h=dt/4,a=-k*(x-to)-c*v;v+=a*h;x+=v*h}
      const g=o.gp?o.gp(t-t0):null;if(Math.abs(x-to)<.4&&Math.abs(v)<12&&(g==null||g>=1)){cardFrame(to,g);if(o.done)o.done();return}cardFrame(x,g);hraf=requestAnimationFrame(step)};
    hraf=requestAnimationFrame(step)};
  const gateIn=v0=>{cancelAnimationFrame(raf);moving=false;tease=false;u=1;measure();cH=panel.offsetHeight;gate(true);
    gH=base;cardFrame(cH,0);hspring(gH,{v:v0||0,k:300,z:.55})};
  // back to the controls (or tucked away), landing exactly where the panel's own layout puts it
  const gateOut=(to,v0)=>{if(!gated())return;measure();const t=to===0?tuckH():base,g0=+(panel.style.getPropertyValue("--gp")||0);ctaSwap(false);
    hspring(t,{v:v0||0,gp:to===0?null:el=>Math.max(g0,cl(el/240)),done:()=>{u=to===0?0:1;moving=true;apply(u);gate(false);moving=false;apply(u)}})};
  const measure=()=>{full=parts.map(x=>{const o=x.style.maxHeight;x.style.maxHeight="none";const h=x.scrollHeight;x.style.maxHeight=o;return h});
    const oh=panel.style.height;panel.style.height="";const cur=parts.reduce((a,x)=>a+x.offsetHeight,0),nat=panel.offsetHeight;panel.style.height=oh;
    base=nat-cur+full[0]+full[1];
    // stop just under whatever floats at the top of the map (search, tabs, locate), wherever that is on this phone
    const pr=panel.getBoundingClientRect();let lim=0;view.querySelectorAll(".msearch,.fstabs,.mchips,.rrme,.wtop .iconbtn").forEach(x=>{const r=x.getBoundingClientRect();if(r.height&&!x.hidden)lim=Math.max(lim,r.bottom)});
    if(!lim)lim=view.getBoundingClientRect().top+96;
    // the list ends just above the button, wherever that sits on this phone (the bottom inset differs a lot between phones)
    {const c=document.querySelector("#cta:not([hidden])");if(c&&c.offsetHeight){const ct=c.getBoundingClientRect().top;if(ct>pr.top)lw.style.bottom=Math.max(0,Math.round(pr.bottom-ct+2))+"px"}}
    spanMax=Math.max(60,Math.round(pr.bottom-(lim+18)-base));span=listSpan()};
  // the list only rises as high as it needs: a short list stops lower (more map above, no empty space under it)
  const listSpan=()=>{try{if(!bx.firstChild)fill();const hh=lw.querySelector(".fslh"),cs=getComputedStyle(lw);
    const content=(hh?hh.offsetHeight+parseFloat(getComputedStyle(hh).marginBottom||0):0)+bx.scrollHeight;
    const need=parseFloat(cs.top)+parseFloat(cs.bottom)+content+8;return Math.max(60,Math.min(spanMax,Math.round(need-base)))}catch(e){return spanMax}};
  const tot=()=>Math.max(1,full[0]+full[1]),px=v=>v<=1?v*tot():tot()+(v-1)*span,inv=P=>P<=tot()?P/tot():1+(P-tot())/span;
  const cl=x=>Math.max(0,Math.min(1,x));
  // tease: the panel is being lifted a little above the controls (timed, before the spoiler question) with nothing crossfading yet
  let tease=false,moving=false,raf=0;
  const apply=v=>{u=Math.max(0,Math.min(2.3,v));if(!full)measure();const f=Math.min(1,u),g=Math.max(0,u-1),gv=tease?0:Math.min(1,g);
    parts.forEach((x,i)=>{x.style.maxHeight=(f>=1?(moving||g>0?full[i]+"px":"none"):(full[i]*f)+"px");x.style.opacity=f});
    if(!panel.classList.contains("gated")||hb!=null){const b0=hb==null?base:hb;panel.style.height=(g>.0005||hb!=null)?Math.round(b0+g*(base+span-b0))+"px":""}
    const co=cl(1-gv*2.2),lo=cl((gv-.45)*2.2);
    ctl.style.opacity=co;ctl.style.visibility=co<.01?"hidden":"";ctl.style.pointerEvents=gv>.3?"none":"";
    lw.style.opacity=lo;lw.style.visibility=lo<.01?"hidden":"visible";lw.style.pointerEvents=gv>.9?"auto":"none";lw.classList.toggle("on",gv>.98);
    panel.classList.toggle("min",u<.02);panel.classList.toggle("up",gv>.02);
    const pl=view.querySelector(".fspill");if(pl){const k=cl(gv/.5);pl.style.opacity=String(1-k);pl.style.pointerEvents=k>.3?"none":"";pl.style.transform=`translateX(-50%) translateY(${k*10}px) scale(${1-k*.06})`}mapSync()};
  // one spring drives everything (panel, fades, map) in the same frame, carrying on from the speed of your finger, like Google Maps
  const anim=(to,o={})=>{cancelAnimationFrame(raf);moving=true;const X=px(to),k=o.k||340,c=2*(o.z||1)*Math.sqrt(k);let x=px(u),v=o.v||0,last=performance.now(),peaked=false;
    const step=t=>{const dt=Math.min(.034,Math.max(.001,(t-last)/1000));last=t;
      for(let n=0;n<4;n++){const h=dt/4,a=-k*(x-X)-c*v;const pv=v;v+=a*h;x+=v*h;if(o.onPeak&&!peaked&&pv>0&&v<=0){peaked=true;o.onPeak();return}}
      if(Math.abs(x-X)<.4&&Math.abs(v)<12){moving=false;apply(to);if(o.done)o.done();return}
      apply(inv(x));raf=requestAnimationFrame(step)};
    raf=requestAnimationFrame(step)};
  const set=(to,o={})=>{if(typeof to==="boolean")to=to?0:1;if(to!==1&&!o.keepGate)gate(false);measure();tease=false;
    if(to>1&&u<=1.01){fill();bx.scrollTop=0}anim(to,o);
    hd.setAttribute("aria-expanded",String(to>=1));hd.setAttribute("aria-label",to>1?"Show less":"Show more")};
  view._fsSet=set;
  // timed, before you've seen the list: the panel lifts a little, springs back and the spoiler question pops out where the controls are
  // the panel lifts, springs back and settles into the spoiler card
  const tease1=(drag,v0)=>{measure();if(drag){gateIn(v0);return}tease=true;anim(1,{v:1000,k:300,z:.5,onPeak:()=>gateIn()})};
  const open=()=>{if(gated())return;if(needGate()){if(Math.abs(u-1)>.01)set(1,{done:()=>tease1()});else tease1()}else set(2)};view._fsOpen=open;
  gt.querySelector('[data-g="show"]').onclick=()=>{if(Date.now()-swiped<400)return;gateOK=true;const L=prov();if(L&&L.ungate)L.ungate();cancelAnimationFrame(hraf);measure();hb=cH||panel.offsetHeight;panel.style.setProperty("--gp","0");ctaSwap(false);panel.classList.add("gleave");set(2,{keepGate:1,done:()=>{gate(false);apply(2)}})};
  // tapping the top of the panel moves it a stop: tucked → controls, controls → list (spoiler first in timed), list → controls
  const tapTop=()=>{if(Date.now()-swiped<400)return;if(gated()){gateOut(1);return}if(u<.5)set(1);else if(u>1.5)set(1);else if(noList)set(0);else open()};
  hd.onclick=tapTop;lw.querySelector(".fslh").addEventListener("click",tapTop);
  // dragging: from anywhere on the panel it moves; inside the list it scrolls, and only a pull down from the top brings the panel with it
  let y0=null,u0=1,moved=false,swiped=0,cap=2,smp=[],card=false,h0=0;
  const dStart=y=>{cancelAnimationFrame(raf);cancelAnimationFrame(hraf);moving=false;measure();y0=y;u0=u;moved=false;smp=[];card=gated()&&!panel.classList.contains("gleave");h0=cH;cap=noList?1:u0>1.01||!needGate()?2:1};
  const rub=e=>70*(1-Math.exp(-e/160));
  const dMove=y=>{if(y0==null)return false;const d=y-y0;if(!moved&&Math.abs(d)<10)return false;if(!moved&&!card&&d<0&&u0>=1&&cap>1)fill();moved=true;
    const t=performance.now();smp.push([t,y]);while(smp.length>2&&t-smp[0][0]>90)smp.shift();
    // on the spoiler card: up grows it back into the controls, down tucks it away; it never opens the list
    if(card){let H=h0-d;const tk=tuckH();if(H>gH){const e=H-gH;cardFrame(gH+rub(e)*.5,cl(e/90));return true}if(H<tk)H=tk-rub(tk-H)*.4;cardFrame(H);return true}
    let P=Math.max(0,px(u0)-d);if(cap<2){const T=px(1);if(P>T)P=T+rub(P-T);tease=P>T+.5}else{P=Math.min(px(2)+rub(Math.max(0,P-px(2))),P);tease=false}
    moving=true;apply(inv(P));return true};
  const dEnd=y=>{if(y0==null)return;const d=y-y0;y0=null;
    // a tap (or a tap with a wobble) on the card mustn't leave its settle half done, or swallow the tap
    if(!moved){if(card&&gated()&&Math.abs(cH-gH)>.5)hspring(gH,{z:.8});card=false;return}if(Math.abs(d)>=16)swiped=Date.now();moving=false;
    let vy=0;if(smp.length>1){const a=smp[0],b=smp[smp.length-1];if(b[0]-a[0]>8)vy=(b[1]-a[1])/((b[0]-a[0])/1000)}
    if(performance.now()-(smp.length?smp[smp.length-1][0]:0)>80)vy=0;
    const vp=-vy;// panel speed, px/s, up is positive
    if(card){card=false;const H=cH,v=Math.max(-3000,Math.min(3000,vp));
      if(vp>300||(vp>-300&&H>gH+8))gateOut(1,v);else if(vp<-300||H<gH-(gH-tuckH())*.5)gateOut(0,v);else hspring(gH,{v,z:.7});return}
    if(noList&&u>=.98){set(1,{v:Math.min(0,vp)});return}
    if(cap<2&&u>1.0005){tease1(true,Math.min(0,vp));return}
    if(cap<2&&d<0&&vp>350&&u>=.98){tease1();return}
    const stops=[0,1,2].filter(s=>s<=cap),X=px(u);let to;
    if(Math.abs(vp)>300)to=vp>0?Math.min(cap,Math.floor(u+.02)+1):Math.max(0,Math.ceil(u-.02)-1);
    else{const s0=Math.round(u0),g0=px(s0),dir=X>g0?1:-1,nx=Math.max(0,Math.min(cap,s0+dir));to=Math.abs(X-g0)>Math.abs(px(nx)-g0)*.25?nx:s0;if(!stops.includes(to))to=s0}
    if(to===2&&cap<2)to=1;
    set(to,{v:Math.max(-4000,Math.min(4000,vp))})};
  panel.addEventListener("pointerdown",e=>{if(e.pointerType==="touch"&&e.target.closest(".fslb"))return;if(e.target.closest(".fslb,input,.rrrange,select,textarea"))return;dStart(e.clientY)},{passive:true});
  // a drag that started on a switch or button isn't a tap on it
  panel.addEventListener("click",e=>{if(Date.now()-swiped<400&&!e.target.closest(".fshandle")){e.stopPropagation();e.preventDefault()}},true);
  panel.addEventListener("pointermove",e=>dMove(e.clientY),{passive:true});
  panel.addEventListener("pointerup",e=>dEnd(e.clientY),{passive:true});panel.addEventListener("pointercancel",e=>dEnd(e.clientY),{passive:true});
  let ty=null,tl=null;
  bx.addEventListener("touchstart",e=>{ty=e.touches[0].clientY;tl=null},{passive:true});
  bx.addEventListener("touchmove",e=>{if(ty==null)return;const y=e.touches[0].clientY;
    if(tl==null){if(Math.abs(y-ty)<4)return;tl=y>ty&&bx.scrollTop<=0;if(tl){dStart(ty)}}
    if(tl){e.preventDefault();dMove(y)}},{passive:false});
  const tEnd=e=>{if(tl){const t=e.changedTouches[0];dEnd(t?t.clientY:ty)}ty=null;tl=null};
  bx.addEventListener("touchend",tEnd,{passive:true});bx.addEventListener("touchcancel",tEnd,{passive:true});
  panel.addEventListener("click",e=>{if(Date.now()-swiped<400||e.target.closest(".fshandle,.fslh"))return;if(panel.classList.contains("min")||e.clientY-panel.getBoundingClientRect().top<30&&!e.target.closest("button,input,a"))tapTop()});
  const nb=box.parentElement.querySelector("#rrNB")||$("rrNB");if(nb){nb.className="fspill";nb.innerHTML=noList?`${I.glass||""}<span id="rrN"></span>`:`${I.glass||""}<span id="rrN"></span><i class="sep"></i><span class="sl">See list</span>`;box.append(nb);if(noList){nb.onclick=null;nb.tabIndex=-1;nb.classList.add("fsnolist")}else nb.onclick=()=>open()}}
// a zone picker on a full-screen map with the same pull-up panel as setup (moving your zone mid-crawl, the demo)
function zonePanel(ov,o){
  ov.innerHTML=`<div class="mf-move">${rrZoneHTML(o.range)}<div class="mvhead"><h1 class="q">${o.title}</h1>${o.sub?`<p class="sub">${o.sub}</p>`:""}</div><p class="note mvnote" id="mvNote"></p>
    <div class="wtop"><button class="iconbtn" id="mvX" type="button" aria-label="${o.back||"Back"}">${I.back}</button></div></div>
    <div class="cta mvcta"><button class="btn" type="button" id="mvGo">${o.go}</button></div>`;
  const v=ov.querySelector(".mf-move");if(o.list)v._fsList=o.list;fsLayout(v,v,{list:!!o.list});
  const m=v.querySelectorAll(".fspanel .fsctl .fsmore");(m[m.length-1]||v.querySelector(".fsctl")).append($("mvNote"));return v}
function fsOpts(){const panel=document.querySelector(".fsv .fspanel");if(!panel)return;const o=document.createElement("div");o.className="fsopts";
  const hl=$("qHL");if(hl){const v=hl.firstChild&&hl.firstChild.nodeType===3?hl.firstChild.textContent:"";hl.className="fsopt fsdrop";hl.innerHTML=`<span class="l">Spin from</span><b>${esc(v)}</b><svg class="cr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`;o.append(hl)}
  const sk=$("zSkipC");if(sk){sk.className="fsopt";const n0=$("zSkipN")?$("zSkipN").textContent:"";const l0=$("zSkipL")?$("zSkipL").textContent:"";sk.innerHTML=`<span class="l"><span class="lt">Skip visited rooftops</span><span class="ln" id="zSkipL">${esc(l0)}</span></span><i class="dv" aria-hidden="true"></i><span class="sw"></span>`;o.append(sk)}
  const sl=panel.querySelector(".rrslide");(sl||panel.lastChild).after(o)}
const fsOff=()=>document.querySelectorAll(".view.fsv").forEach(v=>v.classList.remove("fsv"));
// The bars in the circle. Everything ticked is in; up to 3 vetoes. Tap a name for its page.
// The bars are a surprise by default: a spoiler warning first, then the list (with vetoes) for anyone who wants it.
function wizSpoiler(then){then=typeof then==="function"?then:wizBars;const w=S.wiz;if(w&&w.spoiled){then();return}if(w){w.spoiled=1;save()}sheet(`<h3>Spoiler alert</h3><p class="note" style="margin:6px 0 14px">This shows every rooftop in your circle. Half the fun is not knowing where you'll end up.</p>
    <div class="acts"><button class="btn" type="button" id="spKeep">Keep it a surprise</button><button class="btn line" type="button" id="spShow">Show me anyway</button></div>`,()=>{
    $("spKeep").onclick=closeSheet;$("spShow").onclick=()=>{closeSheet();setTimeout(then,200)}})}
// the timed zone's rooftops, with veto ticks: in the panel's list, and in the sheet
function wizRows(){const w=S.wiz;if(!w||!w.z)return {html:"",n:0,bind(){}};const MAXOUT=3,excl=w.excl||(w.excl=[]),col=collectedMap(),t=now();
  const all=playable(inCircle(w.z,w.z.r),false).sort((x,y)=>{const ox=openState(x,t).open,oy=openState(y,t).open,bx=!isNew(x.id,col),by=!isNew(y.id,col);return ox!==oy?(ox?-1:1):bx!==by?(bx?1:-1):x.name.localeCompare(y.name)});
  const html=all.map(v=>{const o=openState(v,t),out=excl.includes(v.id),been=!isNew(v.id,col),skip=w.newOnly&&!!col[v.id],dim=out||skip||!o.open;
    const status=out?"Vetoed":skip?"Skipped":o.open?"Open til "+clock12(o.closeAt):o.opens!=null?"Opens "+clock12(o.opens):(o.temp?"Temporarily closed":"Closed today");
    const tick=skip||!o.open?"":`<button class="tickbtn${out?"":" on"}" type="button" data-x="${v.id}" aria-pressed="${!out}" aria-label="${out?"Put "+esc(v.name)+" back in":"Sit "+esc(v.name)+" out"}" ${!out&&excl.length>=MAXOUT?"disabled":""}>${out?"":TICK}</button>`;
    return `<div class="zrow${dim?" off":""}"><button class="t zopen" type="button" data-z="${v.id}"><b>${esc(v.name)}</b><small>${status}</small></button>${been?`<span class="beentag">Visited</span>`:""}${tick}</div>`}).join("");
  return {html,note:`You get ${MAXOUT} vetoes: untick a rooftop to sit it out this crawl.`+(excl.length?` ${excl.length} of ${MAXOUT} used.`:""),
    bind(root,again){root.querySelectorAll("[data-x]").forEach(b=>b.onclick=()=>{vetoToggle(b.dataset.x);again()});
      root.querySelectorAll("[data-z]").forEach(b=>{b.onclick=()=>zoneBarSheet(byId(b.dataset.z));warmOnHold(b,byId(b.dataset.z))})}}}
function wizBars(){const w=S.wiz;if(!w||!w.z)return;const MAXOUT=3,excl=w.excl||(w.excl=[]),col=collectedMap(),t=now();
  const all=playable(inCircle(w.z,w.z.r),false).sort((x,y)=>{const ox=openState(x,t).open,oy=openState(y,t).open,bx=!isNew(x.id,col),by=!isNew(y.id,col);return ox!==oy?(ox?-1:1):bx!==by?(bx?1:-1):x.name.localeCompare(y.name)});
  const rows=()=>all.map(v=>{const o=openState(v,t),out=excl.includes(v.id),been=!isNew(v.id,col),skip=w.newOnly&&!!col[v.id],dim=out||skip||!o.open;
    const status=out?"Vetoed":skip?"Skipped":o.open?"Open til "+clock12(o.closeAt):o.opens!=null?"Opens "+clock12(o.opens):(o.temp?"Temporarily closed":"Closed today");
    const tick=skip||!o.open?"":`<button class="tickbtn${out?"":" on"}" type="button" data-x="${v.id}" aria-pressed="${!out}" aria-label="${out?"Put "+esc(v.name)+" back in":"Sit "+esc(v.name)+" out"}" ${!out&&excl.length>=MAXOUT?"disabled":""}>${out?"":TICK}</button>`;
    return `<div class="zrow${dim?" off":""}"><button class="t zopen" type="button" data-z="${v.id}"><b>${esc(v.name)}</b><small>${status}</small></button>${been?`<span class="beentag">Visited</span>`:""}${tick}</div>`}).join("");
  sheet(`<div class="zhead"><h3>Rooftops in your zone</h3><span class="small" id="zOut"></span></div>
    <p class="note" style="margin:2px 0 10px">Everything ticked is in. You get ${MAXOUT} vetoes: untick a rooftop to sit it out this crawl.</p>
    <div class="card zlist" id="zList"></div><button class="btn dark" type="button" id="zDone" style="margin-top:14px">Done</button>`,()=>{
    const paint=()=>{$("zList").innerHTML=rows();$("zOut").textContent=excl.length?`${excl.length} of ${MAXOUT} vetoes used`:"";
      $("zList").querySelectorAll("[data-x]").forEach(b=>b.onclick=()=>{const id=b.dataset.x,i=excl.indexOf(id);if(i>=0)excl.splice(i,1);else if(excl.length<MAXOUT)excl.push(id);save();paint();if(wizRepaint)wizRepaint()});
      $("zList").querySelectorAll("[data-z]").forEach(b=>{b.onclick=()=>zoneBarSheet(byId(b.dataset.z),wizBars);warmOnHold(b,byId(b.dataset.z))})};
    paint();$("zDone").onclick=closeSheet})}

// Vetoes (timed setup): up to 3 rooftops sat out of this crawl. The tick in the list, the button on a rooftop's card and the tick in
// Visited rooftops all flip the same thing, so they always agree and it can't be used twice.
const VETOS=3;
function vetoToggle(id){const w=S.wiz;if(!w)return;const excl=w.excl||(w.excl=[]),i=excl.indexOf(id);if(i>=0)excl.splice(i,1);else if(excl.length<VETOS)excl.push(id);else return;
  save();buzz(10);if(wizRepaint)wizRepaint();const vw=$("v-wiz");if(vw&&vw._fsFill)vw._fsFill()}
const vetoUsed=()=>{const n=((S.wiz&&S.wiz.excl)||[]).length;return n?`${n} of ${VETOS} vetoes used`:`You get ${VETOS} vetoes`};
const vetoTick=(v,o,skip)=>{const w=S.wiz,excl=(w&&w.excl)||[],out=excl.includes(v.id);if(skip||!o.open)return "";
  return `<button class="tickbtn${out?"":" on"}" type="button" data-x="${v.id}" aria-pressed="${!out}" aria-label="${out?"Put "+esc(v.name)+" back in":"Sit "+esc(v.name)+" out"}" ${!out&&excl.length>=VETOS?"disabled":""}>${out?"":TICK}</button>`};
const TICK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
// the rooftops in a zone you've already been to (no spoiler card: you know them)
function visitedSheet(z){if(!z)return;const col=collectedMap(),t=now(),w=S.wiz,skip=!!(w&&w.newOnly),bl=playable(inCircle(z,z.r),false).filter(v=>col[v.id]).sort((a,b)=>{const oa=openState(a,t).open,ob=openState(b,t).open;return oa!==ob?(oa?-1:1):a.name.localeCompare(b.name)});
  const out=id=>((w&&w.excl)||[]).includes(id);
  sheet(`<h3>Visited rooftops in your zone</h3><p class="note" style="margin:2px 0 10px">${skip?"Skip visited is on. None of these will come up.":"Untick one to sit it out.<br>"+vetoUsed()+"."}</p><div class="card zlist">${bl.map(v=>{const o=openState(v,t),st=out(v.id)?"Vetoed":o.open?"Open til "+clock12(o.closeAt):o.opens!=null?"Opens "+clock12(o.opens):(o.temp?"Temporarily closed":"Closed today");
    return `<div class="zrow${o.open&&!out(v.id)&&!skip?"":" off"}"><button class="t zopen" type="button" data-z="${v.id}"><b>${esc(v.name)}</b><small>${st}</small></button>${w?vetoTick(v,o,skip):""}</div>`}).join("")}</div>`,
    ()=>{$("sheetBody").querySelectorAll("[data-z]").forEach(b=>b.onclick=()=>zoneBarSheet(byId(b.dataset.z),()=>visitedSheet(z)));
      $("sheetBody").querySelectorAll("[data-x]").forEach(b=>b.onclick=()=>{vetoToggle(b.dataset.x);visitedSheet(z)})})}
function zoneBarSheet(v,back){
  const w=S.wiz;if(!w){barSheet(v);return}
  const excl=w.excl||(w.excl=[]),out=excl.includes(v.id),o=openState(v,now()),full=!out&&excl.length>=VETOS;
  const zf=`<span>${I.clock} ${out?"Vetoed for this crawl":o.open?"Open til "+clock12(o.closeAt):o.opens!=null?"Opens "+clock12(o.opens):(o.temp?"Temporarily closed":"Closed today")}</span>`;
  sheet(`${sheetCard(v,zf)}
    <div class="acts">${o.open?`<button class="btn ${out?"":"dark"}" type="button" id="zx" ${full?"disabled":""}>${out?"Put it back in":"Sit this one out"}</button>`:""}<button class="btn line" type="button" id="zc">${back?"Back":"Close"}</button></div>
    ${o.open?`<p class="note" style="text-align:center;margin:10px 0 0">${full?"All "+VETOS+" vetoes used":vetoUsed()}</p>`:""}`,()=>{
    $("zc").onclick=()=>{if(back)back();else closeSheet()};bindSheetCard(v,zf);if($("zx"))$("zx").onclick=()=>{vetoToggle(v.id);zoneBarSheet(v,back)}});
}
async function useMe(){
  const w=S.wiz;
  try{
    const p=await getOnce();const n=openIn(p,1.5).length,tot=playable(inCircle(p,1.5),false).length;
    w.me={lat:p.lat,lng:p.lng};if(tot>=3){const r_=w.z?w.z.r:null;zoneCity(p);w.z={lat:p.lat,lng:p.lng,r:r_}}w.meNote=null;
  }catch(e){w.meNote="Couldn't find you just now."}
  save();go("wiz");
}
$("wBack").onclick=()=>{const w=S.wiz;if(w.step===2){w.step=1;save();renderWiz();return}if(w.step===1||w.step===3){w.step=0;save();renderWiz();return}if(w.step>0)w.step--;else{go("home");return}save();renderWiz()};
$("wClose").onclick=()=>{S.wiz=null;go("home")};
async function tryStart(noLoc){
  ac();noLoc=noLoc===true;if(tryStart.busy)return;
  const sb=$("wStart");if(sb)sb.classList.add("busy");
  tryStart.busy=1;try{await tryStart2(noLoc)}finally{tryStart.busy=0;const b=$("wStart");if(b)b.classList.remove("busy")}}
async function tryStart2(noLoc){
  // Straight to the spinner. A fix from the last few minutes (setup just found you) is all we need to start:
  // waiting on a fresh GPS lock here was the pause after tapping Start. The crawl's own watcher takes it from there.
  const fresh=!!(here&&here.t&&Date.now()-here.t<10*60000);
  if(!S.test&&!noLoc&&!fresh){const st=await permState(true);if(st==="denied"){noLocSheet(tryStart);return}if(st!=="granted"&&!here){S.permNext="start";go("perm");return}}
  const w=S.wiz;
  let pos;if(noLoc)pos={lat:w.start.lat,lng:w.start.lng};
  else if(S.test&&S.fake)pos=S.fake;
  else if(here)pos=here;
  else{pos={lat:w.start.lat,lng:w.start.lng};getOnce().catch(()=>{})}   // allowed, no fix yet: the first spin sets the real start point
  S.last={radius:w.radius,len:w.len,newOnly:w.newOnly};
  zoneCity(w.start);S.game={id:"g"+now(),city:S.city,test:!!S.test,started:false,startedAt:null,endsAt:null,len:w.len,radius:w.radius,newOnly:w.newOnly,zoneN:playable(inCircle(w.start,w.radius),!!w.newOnly).filter(v=>!(w.excl||[]).includes(v.id)).length,center:{lat:w.start.lat,lng:w.start.lng},
    startPos:{lat:pos.lat,lng:pos.lng},zoneMoved:w.start.type!=="me"||undefined,areas:[w.start.type==="area"?w.start.name:nearestSuburb(w.start)],moves:[],voluntaryUsed:false,freeSkips:1,excluded:(w.excl||[]).slice(),zone:{lat:w.start.lat,lng:w.start.lng,name:w.start.type==="area"?w.start.name:nearestArea(w.start)},
    visits:[],target:null,targetAt:null,targetFrom:null,ended:false,shownFinal:false};
  if(noLoc)S.game.noLoc=true;
  if(w.live){S.game.live=w.live;try{liveAttach()}catch(e){}}   // friends invited from setup keep following
  spinning=false;S.wiz=null;save();if(!noLoc)startWatch();buzz(30);go("play");
}

// Location blocked as a round starts: say what that means, then let them turn it on or play without it.
function noLocSheet(go_){
  sheet(`<h3>Location's off</h3><p class="note" style="margin:6px 0 14px">Without it, we can't check you in at each rooftop. You'll tap <b>I'm here</b> when you arrive, and your crawl card will show your rooftops and total time, but no route or timings.</p>
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
async function permTry(fromSettings){const t0=Date.now(),pb=$("permGo");
  if(permTry.busy)return;permTry.busy=1;pb.disabled=true;pb.textContent="Finding you…";
  const reset=()=>{permTry.busy=0;pb.disabled=false;if(S.route==="perm")renderPerm()};
  try{
    // iPhone: wait for their answer to the phone's prompt first, then look for them
    if(IOSNAT&&!fromSettings){const st=await iosAsk();if(st==="denied")throw {code:1}}
    // allowed but the GPS is slow: carry on anyway. The crawl keeps looking for you in the background.
    await getOnce().catch(async e=>{if(e&&e.code===1)throw e;if((await permState())==="granted")return null;throw e});
    reset();
    if(fromSettings){permOk=true;renderPerm();return}
    permDone();
  }catch(e){reset();
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
const visited=id=>{const g=G();return !!g&&g.visits.some(v=>v.id===id)};   // safe if the crawl ended while a sheet was still open
// A freeze pushes the end back and holds the clock still until it runs out. A free trip (moving zone, starting away) ends early
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
  if(g.cz.type==="list")return listOf(g.cz.list).filter(v=>!g.cz.r||g.cz.lat==null||dist(g.cz,v)<=g.cz.r*1000);
  const c_=collectedMap(),base=VENUES.filter(v=>!S.nfu[v.id]&&!v.tempClosed&&(!g.newOnly||isNew(v.id,c_))),here_=fromPoint();
  if(g.cz.type==="me")return base.filter(v=>dist(here_,v)<=(g.cz.r||2)*1000);
  if(g.cz.type==="spot")return base.filter(v=>dist(g.cz,v)<=(g.cz.r||2)*1000);
  const reg=base.filter(v=>cityOf(v)===(g.city||"Sydney")&&(g.cz.type==="all"||areaOf(v).reg===g.cz.name));
  if(!g.visits.length)return reg;
  const near=reg.filter(v=>dist(here_,v)<=2000&&openOK(v,now())&&!visited(v.id));return near.length?near:reg;
}
const elapsed=ms=>{const m=Math.floor(Math.max(0,ms)/60000);return Math.floor(m/60)+":"+String(m%60).padStart(2,"0")};
const zoneTxt=(g,short)=>g.cz.type==="list"?listName(g.cz.list)+(g.cz.r&&g.cz.lat!=null?` · ${kmTxt(g.cz.r)}`:""):g.cz.type==="spot"&&g.cz.lat!=null?(short?"":"Around ")+esc(nearestSuburb(g.cz))+` · ${kmTxt(g.cz.r)}`:esc(g.areas[g.areas.length-1])+(g.cz.type==="me"||g.cz.type==="spot"?` · ${kmTxt(g.cz.r)}`:"");
// shrink the zone line under R&R until it fits (long suburbs, big text settings)
function fitFacts(){document.querySelectorAll("#v-play .bar.tgt .facts").forEach(f=>{f.style.fontSize="";let z=14;while(f.scrollWidth>f.clientWidth+1&&z>11){z-=.5;f.style.fontSize=z+"px"}})}
window.addEventListener("resize",()=>fitFacts());
const _renderPlay=renderPlay;renderPlay=function(){const r=_renderPlay.apply(this,arguments);fitFacts();return r};
function fitZoneLbl(){const b=$("mixZone");if(!b)return;b.style.fontSize="";let f=13;while(b.scrollWidth>b.clientWidth+1&&f>10){f-=.5;b.style.fontSize=f+"px"}}
window.addEventListener("resize",()=>fitZoneLbl());
// before the first spin: the crawl's zone, size and length, with Invite beside them (everyone's together, the clock hasn't started)
const mixInv=g=>{try{return !g.visits.length&&!g.demo&&!g.follow&&cloudOn()}catch(e){return false}};
// Before the clock starts, the pills are the crawl's settings: tap one to change just that (a sheet, or the zone map), nothing else.
// a small down arrow on each pill: tap to change it
const MIX_DD='<svg class="dd" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
const mixPre=g=>!g.started&&!g.visits.length&&!g.demo&&!g.follow;
const mixJoined=g=>{try{return g.live&&typeof liveDoc!=="undefined"&&liveDoc&&!liveDoc.ended?Object.keys(liveDoc.members||{}).length:0}catch(e){return 0}};
const MIX_CV='<svg class="cv" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
const MIX_INVI='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.6"/><path d="M2.5 20c1-3.7 3.6-5.6 6.5-5.6s5.5 1.9 6.5 5.6"/><path d="M19 8v6M16 11h6"/></svg>';
const MIX_PPLI='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.6"/><path d="M2.5 20c1-3.7 3.6-5.6 6.5-5.6s5.5 1.9 6.5 5.6"/><circle cx="17.5" cy="9" r="2.6"/><path d="M17 14.4c2.4.3 4 1.9 4.6 5"/></svg>';
// Before the first spin, the space under the spinner is a big Invite button: spinning is the skip, and nothing else big competes.
// Once people join it says so (and still invites more).
const mixInvLbl=j=>j?`${MIX_PPLI} ${j} joined · Invite more`:`${MIX_INVI} Invite friends`;
const mixInvBig=g=>mixInv(g)&&!g.visits.length?`<button class="btn invbig" type="button" data-mxinv="1">${mixInvLbl(mixJoined(g))}</button>`:"";
function paintMixInv(){const g=G();if(!g)return;const j=mixJoined(g);document.querySelectorAll("[data-mxinv]").forEach(b=>{const h=mixInvLbl(j);if(b._h!==h){b._h=h;b.innerHTML=h}})}   // only when it changes: a redraw mid-tap loses the tap
// the zone sits under the spinner before the clock starts (where Move zone goes once it has)
const mixZoneHTML=g=>CR(g)||!mixPre(g)?"":`<div class="mixzone"><button class="mixp" type="button" data-mx="zone">${I.pin}<span class="zt">${esc(g.areas[g.areas.length-1])} · ${rLabel(g.radius)}</span>${MIX_CV}</button></div>`;
const mixDeckLbl=()=>{if(!anyOwned())return "Wildcards";const on=(freeOn()?["free"]:[]).concat(PACKS.filter(p=>packOn(p.id)).map(p=>p.id));return on.length===1?esc(deckName(on[0])):on.length+" decks"};
// R&R's zone pill: where (or Anywhere) and how far
const crZone=g=>{const cz=g.cz;if(cz.type==="all"||(cz.type==="list"&&!(cz.r&&cz.lat!=null)))return {a:"Anywhere",r:""};
  return {a:cz.type==="me"?"Near you":esc(nearestSuburb(cz.lat!=null?cz:fromPoint())),r:rLabel(cz.r||g.radius||2)}};
const crPoolLbl=g=>g.cz.type==="list"?listName(g.cz.list):"All rooftops";
const mixlineHTML=g=>{if(CR(g)){if(g.demo||g.follow||g.ended)return "";const z=crZone(g);
    return `<div class="mixline pre"><button class="mixp mz" type="button" data-mx="zone"><span class="zt">${z.a}</span>${z.r?`<span class="zr">· ${z.r}</span>`:""}${MIX_DD}</button><button class="mixp" type="button" data-mx="pool">${crPoolLbl(g)}${MIX_DD}</button></div>`}const pre=mixPre(g),area=esc(g.areas[g.areas.length-1]),zone=`${area} · ${rLabel(g.radius)}`,len=g.len===60?"1 hour":"2 hours";
  if(!pre)return `<div class="mixline"><span>${area}</span><span>${rLabel(g.radius)}</span><span>${len}</span></div>`;
  const inv="";
  // one row: where (suburb shortens first on a small phone, the radius never does), how long, wildcards, invite
  return `<div class="mixline pre"><button class="mixp mz" type="button" data-mx="zone"><span class="zt">${area}</span><span class="zr">· ${rLabel(g.radius)}</span>${MIX_DD}</button><button class="mixp" type="button" data-mx="len">${g.len===60?"1 hour":"2 hours"}${MIX_DD}</button><button class="mixp" type="button" data-mx="deck">${mixDeckLbl()}${MIX_DD}</button>${inv}</div>`};
document.addEventListener("click",e=>{const t=e.target.closest&&e.target.closest("[data-mxinv],[data-mx]");if(!t)return;const g=G();if(!g)return;
  if(t.dataset.mxinv){if(typeof liveInvite==="function")liveInvite();return}
  const k=t.dataset.mx;
  if(CR(g)){if(g.ended||g.demo||g.follow)return;if(k==="zone")crawlMap({move:true,pre:true});else if(k==="pool")crPoolSheet(g);return}
  if(!mixPre(g))return;
  if(k==="zone")crawlMap({move:true,pre:true});
  else if(k==="len")lenSheet(g);
  // the same Wildcards sheet as My Tab; the pill catches up when it closes
  else if(k==="deck")deckSheet()});
// R&R: what the wheel spins from. Your lists show when 2+ on them are open.
function crPoolSheet(g){const t=now(),opn=k=>listOf(k).filter(v=>openOK(v,t)).length,cur=g.cz.type==="list"?g.cz.list:"";
  const rows=[["","All rooftops","Every open rooftop in your zone"]].concat(["want","fav"].filter(k=>opn(k)>=2||cur===k).map(k=>[k,listName(k),`${opn(k)} open now`]));
  sheet(`<h3>What spins?</h3><div class="opts" style="margin-top:10px">${rows.map(([k,l,s])=>`<button class="opt" type="button" role="radio" data-pl="${k}" aria-checked="${cur===k}"><span class="t"><b>${l}</b><small>${s}</small></span></button>`).join("")}</div>
    ${rows.length<2?`<p class="note" style="margin:12px 2px 0">Add a couple of rooftops to your Hit list and you can spin just those.</p>`:""}`,()=>{
    $("sheetBody").querySelectorAll("[data-pl]").forEach(b=>b.onclick=()=>{const k=b.dataset.pl;if(G()!==g){closeSheet();return}if(k===cur){closeSheet();return}
      if(k){if(g.cz.type!=="list")g.czArea=Object.assign({},g.cz);g.cz={type:"list",list:k,name:listName(k),r:null,lat:null,lng:null}}
      else g.cz=g.czArea||{type:"me",name:null,r:g.radius||2};
      const label=k?listName(k):g.cz.type==="all"?"Anywhere":g.cz.type==="spot"?g.cz.name:"Near you";if(g.areas[g.areas.length-1]!==label)g.areas.push(label);
      g.target=null;g.reelOpen=false;save();closeSheet();renderPlay();if(typeof liveSync==="function"&&g.live)liveSync(true).catch(()=>{})})})}
// 1 hour or 2, before the clock starts
function lenSheet(g){sheet(`<h3>How long?</h3><div class="opts" style="margin-top:10px">
    <button class="opt" type="button" role="radio" data-l="60" aria-checked="${g.len===60}"><span class="ic">${I.pair}</span><span class="t"><b>1 hour <span class="ppl">Best for 2–3</span></b><small>A few rooftops, quick drinks.</small></span></button>
    <button class="opt" type="button" role="radio" data-l="120" aria-checked="${g.len===120}"><span class="ic">${I.group}</span><span class="t"><b>2 hours <span class="ppl">Best for 4+</span></b><small>More rooftops or longer stays.</small></span></button></div>`,
  ()=>{$("sheetBody").querySelectorAll("[data-l]").forEach(b=>b.onclick=()=>{const l=+b.dataset.l;if(G()!==g||!mixPre(g)){closeSheet();return}g.len=l;S.last=Object.assign({},S.last||{},{len:l});save();closeSheet();renderPlay();if(typeof liveSync==="function"&&g.live)liveSync(true).catch(()=>{})})})}
// Who's coming?: the last step of setup (after the zone), so it never gets between you and the first spin.
// Starting the crawl is the skip; skip it three crawls running and it stops asking (the Invite pill's always on the spin screen).
const whoOn=()=>false;   // (the Who's coming? step is retired: the spin screen's big Invite button does the nudge)
function whoStep(host,st,start){
  host.innerHTML=`<div><h1 class="q">Who's coming?</h1><p class="sub" style="margin:6px 0 0">Friends follow along and get the recap.</p></div><div class="whobox" id="whoBox"></div>`;
  cta(`<button class="btn" id="whoGo" type="button">Start the crawl</button>`,()=>{$("whoGo").onclick=()=>{let j=0;try{j=Object.keys((liveDoc&&liveDoc.members)||{}).length}catch(e){}
    S.whoSkips=st.invited||j?0:(S.whoSkips||0)+1;save();start()}});
  whoFill(st)}
async function whoFill(st){const box=$("whoBox");if(!box)return;const acted=()=>{st.invited=1;S.whoSkips=0;save()};
  const gate=()=>{box.innerHTML=`<button class="btn dark" type="button" id="whoInv">${MIX_INVI} Invite friends</button>`;
    $("whoInv").onclick=()=>{acted();liveInvite();$("sheet").addEventListener("close",()=>setTimeout(()=>whoFill(st),200),{once:true})}};
  if(!(typeof signedIn==="function"&&signedIn()&&myName())){gate();return}
  box.innerHTML=`<div class="whold"></div>`;let id=null;try{id=st.live||await startLivePre()}catch(e){console.warn(e)}
  if(!$("whoBox"))return;if(!id){gate();return}track("live_invite",{from:"setup"});
  const P=await invParts(id,acted);if(!$("whoBox"))return;box.innerHTML=P.html;P.bind(box);const sb=box.querySelector('[data-iv="send"]');if(sb)sb.classList.add("dark")}   // Start the crawl is the one amber button here
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
function closeVisit(v,t,reason){if(!v||v.leftAt!=null)return;v.leftAt=Math.max(v.arrivedAt,t);const ok=(v.leftAt-v.arrivedAt)>=DWELL();
  // Walked away without spinning: usually a line, a door policy or a change of plans, however long the wait took.
  // Ask rather than count it (the demo just counts it).
  const walkedOff=reason==="walk"&&!v.dep&&!(G()&&G().demo);
  if(reason==="end"&&!v.dep)v.counted=v.arrivedAt<G().endsAt;else if(walkedOff)v.counted=v._ans!==undefined?v._ans:null;else v.counted=ok?true:v._ans!==undefined?v._ans:null;
  if(v.counted===true&&S.want[v.id]&&!S.test&&!(G()&&(G().demo||G().follow||G().test))){delete S.want[v.id];save();setTimeout(()=>toast("Ticked off your Hit list",2200),600)}
  if(walkedOff&&v.counted===null){v.walkedOff=1;try{if(NATIVE&&document.hidden){noteSetup();lnSchedule([{id:105,title:`Did you have a drink at ${byId(v.id).name}?`,body:"You left without spinning. Tap to say if it counts.",channelId:"crawl_alerts",smallIcon:"ic_stat_rr",iconColor:"#F5B83D",schedule:{at:new Date(Date.now()+1500),allowWhileIdle:true}}]).catch(()=>{})}}catch(e){}}
  delete v._ans}
function onLocation(){liveNote();alertSync();if(S.game&&S.game.live)liveSync(false);
  const g=G();[bMap,zMap].forEach(setMe);meAll();
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
  const R={p:0,busy:false,raf:0,rest:0},mod=k=>((k%L.length)+L.length)%L.length,WR=new Map();
  el.classList.add("reel");el.classList.remove("won");
  /* A bulging lens: one layer of names, never clipped. Each name grows smoothly as it nears the middle of the
     window and is only full size dead centre. On the way in it's squashed top-to-bottom (the edge of a rounded
     lens squeezes more in that direction), and it swaps from the fine weight to the bold one as it swells.
     Names are spread further apart near the middle so a big name never runs into its neighbours. */
  el.innerHTML=`<div class="frame"><i class="ffl"></i></div>${[...Array(13)].map(()=>`<div class="row"><span class="t"></span><span class="b"></span></div>`).join("")}${o.hint?`<div class="hint" aria-hidden="true"><i></i></div>`:""}`;
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
    if(crossed!==null){if(!o.quiet){tick(560+Math.random()*80);buzz(3)}
      // the slot's lights flash with every name that passes: a fast flicker at speed, slow blinks as it winds down
      if(frame&&frame.animate&&!R.landing){const dur=Math.round(Math.min(240,Math.max(70,900/Math.max(spd,1))));const fi=Math.min(1,.4+.6*Math.min(1,7/Math.max(spd,1)));frame._fl=performance.now();frame._fd=dur;frame._fi=fi;   // softer at full speed, full strength on the last few names
        const fg=frame.firstChild;if(fg)fg.animate([{opacity:fi},{opacity:0}],{duration:dur,easing:"ease-out"})}}
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
      if(t.textContent!==n){t.textContent=n;bo.textContent=n;r.classList.toggle("long",n.length>15);r.classList.toggle("xlong",n.length>26);r.classList.toggle("ph",n===PH);t.style.scale="";if(WR.has(n))r._wr=WR.get(n);else{const wt=t.offsetWidth,wb=bo.offsetWidth;r._wr=wt&&wb?wb/wt:1;WR.set(n,r._wr)}}
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
  const anim=(dur,fn,end)=>{cancelAnimationFrame(R.raf);const t0=performance.now();let tp=t0,n=0,slow=0;const f=t=>{const u=Math.min(1,(t-t0)/dur);if(t-tp>22)slow++;n++;tp=t;fn(u);draw();if(u<1)R.raf=requestAnimationFrame(f);else{if(dur>1500&&n>30)liteCheck(slow/n);end&&end()}};R.raf=requestAnimationFrame(f)};
  R.bounce=()=>{const p0=R.p,to=R.rest;R.busy=true;anim(380,u=>{const c=1.7,x=u-1;R.p=p0+(to-p0)*(1+(c+1)*x*x*x+c*x*x)},()=>{R.p=to;draw();R.busy=false;const h=el.querySelector(".hint");if(h)h.classList.remove("off")})};
  // a follower's reel: rolls at a steady speed until the host's result comes in, then spinTo winds it down onto it
  R.roll=v=>{cancelAnimationFrame(R.raf);moved=true;R.busy=true;el.classList.add("going");const h=el.querySelector(".hint");if(h)h.remove();
    let t0=performance.now();const f=t=>{R.p+=v*Math.min(.05,(t-t0)/1000);t0=t;draw();R.raf=requestAnimationFrame(f)};R.raf=requestAnimationFrame(f)};
  R.stop=()=>cancelAnimationFrame(R.raf);
  R.spinTo=(name,v,done,opt)=>{
    // it rolls the way you flicked it: down (the usual) or up
    opt=opt||{};moved=true;const dir=v>0?1:-1,v0=Math.max(4,Math.abs(v)||20),VC=28,vs=Math.min(VC,v0);
    const extra=v0>VC?Math.min(30,(v0-VC)*.5):0, Dd=Math.max(7,vs*vs/24);   // 24 = 2 × friction (12 rows/s²)
    let k=Math.round(R.p+dir*(extra+Dd));
    if(opt.dur){const Tdj=2.5*Dd/vs;k=Math.round(R.p+dir*(Math.max(0,opt.dur-Tdj)*vs+Dd))}
    // rewrite everything between just off-screen now and just past where it'll stop (all out of sight)
    const top=Math.round(R.p)+dir*5;
    // on a short spin the rows still on screen sit close to the stop: if the winner's among them, roll a bit further
    for(let guard=0;guard<GAP+2;guard++){const a=top-dir,b=k-dir*GAP;let near=false;if(dir*(a-b)>=0)for(let j=Math.min(a,b);j<=Math.max(a,b);j++)if(L[mod(j)]===name)near=true;if(!near)break;k+=dir}
    // try stopping a row or two further if that lets every name keep its distance (matters for tiny pools)
    const attempt=kk=>{const end=kk+dir*(4+2*GAP),seq={},get=j=>seq[j]!==undefined?seq[j]:L[mod(j)];let fails=0;
      for(let j=top;dir<0?j>=end:j<=end;j+=dir){
        if(j===kk){seq[j]=name;if([...Array(GAP)].some((_,d)=>get(j-dir*(d+1))===name))fails++;continue}
        const ban=new Set();for(let d=1;d<=GAP;d++){ban.add(get(j-dir*d));if(dir*(j+dir*d-end)>0)ban.add(L[mod(j+dir*d)])}
        if(Math.abs(j-kk)<=GAP)ban.add(name);
        if(U.every(x=>ban.has(x)))fails++;
        seq[j]=pickFrom(ban,get(j-dir));
      }
      return {kk,seq,fails}};
    let best=null;for(let i=0;i<=3;i++){const a=attempt(k+dir*i);if(!best||a.fails<best.fails)best=a;if(!a.fails)break}
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
    el.addEventListener("pointermove",e=>{if(!down)return;const dy=e.clientY-y0;R.p=pS-dy/ROW;const t=performance.now();pts.push([t,R.p]);while(pts.length>2&&t-pts[1][0]>80)pts.shift();draw()});
    const up=()=>{if(!down)return;down=false;R.down=false;draw();const t=performance.now(),a=pts[0],travel=R.p-pS;
      let v=(t-a[0])>8&&(t-pts[pts.length-1][0])<150?(R.p-a[1])/((t-a[0])/1000):0;
      if(Math.abs(travel)<.2&&Math.abs(v)<2){if(o.onRelease(-16)===false)R.bounce();return}  // a tap gives a gentle spin
      if(Math.abs(v)<3.5){if(Math.abs(travel)>1.5)v=travel>0?14:-14;else{R.bounce();return}}   // too gentle (a long, slow pull either way still counts), in the direction pulled
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
  const host=el.closest("dialog")||el.closest(".jpx,.jpdemo,.followv")||document.body,calm=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cx=fr.left+fr.width/2,cy=r0.top+r0.height/2,fs=parseFloat(cs.fontSize),INK=themeAmberText(c);   // centred on the slot (very long names overflow the wheel lopsided)
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
  const host=scope.closest("dialog")||scope.closest(".jpx,.jpdemo,.followv")||document.body;
  const box=document.createElement("div");box.className="flybox"+(card.classList.contains("phd")?" fb-dk":"");host.appendChild(box);
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
function reelNote(){return "Flick to spin. Harder flick, longer spin."}

// Leaving a bar inside 3 minutes: ask whether it counts before heading on.
function noneLeft(){const g=G();sheet(`<h3>Nothing else open nearby</h3><p class="note">${g.cz.type==="me"||g.cz.type==="spot"?`No other rooftops are open within ${kmTxt(g.cz.r)} of ${g.cz.type==="me"?"you":esc(g.cz.name.replace(/^Around /,""))} right now.`:"No other rooftops are open in this part of town right now."} Wrap it up, or stay where you are.</p><div class="acts"><button class="btn" type="button" id="nlE">End the crawl</button><button class="btn dark" type="button" id="nlS">Stay put</button></div>`,()=>{$("nlS").onclick=closeSheet;$("nlE").onclick=()=>{closeSheet();endGame(now())}})}
function farBarSheet(g,rushing){const v=byId(g.target),y=you();
  sheet((rushing?`<h3>Trying it from home?</h3><p class="note">Re-spins cost time on a real crawl. A practice crawl plays anywhere.</p>`:`<h3>You're not near this rooftop</h3><p class="note">${esc(v.name)} is ${mOrKm(dist(y,v))} away. Playing from home? A practice crawl plays anywhere.</p>`)+`<div class="acts"><button class="btn" type="button" id="fbDemo">Switch to a practice crawl</button><button class="btn dark" type="button" id="fbKeep">Keep going</button></div>`,()=>{
    $("fbKeep").onclick=closeSheet;
    $("fbDemo").onclick=()=>{closeSheet();if(G()!==g||g.visits.length)return;track("far_bar_demo",{});stopWatch();S.game=null;save();startDemo()}})}
function askDrink(a0,then){const v=byId(a0.id);
  sheet(`<h3>Did you have a drink at ${esc(v.name)}?</h3><div class="acts"><button class="btn" type="button" id="dY">Yes, count it</button><button class="btn dark" type="button" id="dN">No, don't count it</button><button class="btn line" type="button" id="dS">Stay a bit longer</button></div>`,()=>{
    $("dS").onclick=closeSheet;
    $("dY").onclick=()=>{closeSheet();a0._ans=true;save();then()};
    $("dN").onclick=()=>{closeSheet();a0._ans=false;save();then()};
  })}
function gameReelNames(){const g=G(),P=spinPool().pool.map(v=>v.name);if(P.length>=6)return P;return P.concat(inCircle(g.center,g.radius).filter(v=>!v.tempClosed).map(v=>v.name)).concat(P.length?[]:VENUES.slice(0,10).map(v=>v.name))}
// Which bar's spin is the jackpot. Never bar 1. 1 hour: bar 3 or 4. 2 hours: bar 3, 4 or 5.
// Owed one (first real crawl, or the last timed crawl ended without a jackpot): bar 2 is possible too.
function jpOwed(){const L=H.filter(r=>r.mode!=="cruise"&&!r.shared&&!r.demo).sort((a,b)=>(b.startedAt||0)-(a.startedAt||0));return !L.length||!L[0].jp}
function jpPlan(g){const lo=jpOwed()?2:3,hi=g.len===60?4:5;return lo+Math.floor(Math.random()*(hi-lo+1))}
function doSpin(force,vel){
  const g=G();if(spinning||!g||g.ended)return;ac();
  const a0=atVisit();
  if(a0&&force!==true&&a0._ans===undefined&&now()-a0.arrivedAt<DWELL()){askDrink(a0,()=>doSpin(true,vel));return false}
  const firstSpin=!g.started;
  if(!g.started){track("crawl_start",{demo:!!g.demo,mode:CR(g)?"rr":"rush",length_min:CR(g)?null:g.len,radius_km:g.radius||null,city:g.city||S.city||null,camera:!!(typeof CAM!=="undefined"&&CAM.once)});prewarmAudio();const t=now();g.started=true;g.startedAt=t;g.ff0=S.test?(S.ff||0):0;g.endsAt=t+g.len*60000;if(CR(g))g.autoAt=t+RR_AUTO;const y=you();if(y)g.startPos={lat:y.lat,lng:y.lng}}
  const a=atVisit();if(a){a.dep=now();if(a._ans!==undefined)a._inCount=a._ans}
  endTripFreeze(g);
  // The clock starts when you reach your first bar, wherever you spin from (in the zone or across town). Capped at 45 min.
  if(firstSpin&&!g.demo&&!CR(g)&&!g.frz){startFreeze(g,45*60000,true);g.frz.until=g.endsAt-g.len*60000;g.frz.zone=true;g.frz.start=true}
  if(!g.demo&&!CR(g)&&!g.jp){if(g.jpAt==null)g.jpAt=jpPlan(g);
    const n=g.visits.length+1;   // the spin for bar n
    const late=g.len!==60&&n>=4&&remaining()<45*60000;   // 2 hours: bar 4 with under 45 minutes left gets it, so it isn't missed
    if((n>=g.jpAt||late)&&spinPool().pool.length){jackpotSpin(vel);return}}
  const {pool:P}=spinPool();
  if(!P.length){save();renderPlay();if(CR(g))noneLeft();else openMove(true);return false}
  const pick=P[Math.floor(Math.random()*P.length)],from=fromPoint();barPhoto(pick);
  g.spinAt=now();spinning=true;seen("spin");if(vel!==undefined){S.tips.swipe=1}g.finalBanner=false;renderPlay();save();   // spinAt: followers see the wheel going
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
  const T_=reel.spinTo(pick.name,vel===undefined?-(30+Math.random()*20):vel,info=>{g.target=pick.id;g.targetAt=now();g.targetFrom={lat:from.lat,lng:from.lng};g.reelOpen=false;animateId=null;if(!CR(g))rollWild(g,pick.id);spinning=false;save();renderPlay();reveal(info,$("stage"));onLocation();dealWild(900)});
  // followers' reels stop on it at the same moment as this one (their screens don't show it any earlier)
  // counted from when the reel actually starts moving (redrawing and the camera can hold it up a moment after the tap)
  if(g.live&&T_){g.spinRes={at:g.spinAt,id:pick.id,land:now()+Math.round(T_*1000)};save();if(typeof liveSync==="function")liveSync(true)}
}
/* ---------- the Jackpot: once a timed game, a longer gold spin that pays out one of five rewards ---------- */
const JACKPOTS=[
  {k:"call",t:"Your call",d:"Pick your next rooftop from three. You've got 20 seconds.",go:"Show me"},
  {k:"freeze",t:"Time freeze",d:"The clock's frozen for 10 minutes. Stay for another, or go somewhere further.",go:"Spin for your rooftop"},
  {k:"spins",t:"Free spins",d:"Your next 3 re-spins don't cost a thing.",go:"Spin for your rooftop"},
  {k:"short",t:"Shortcut",d:"Your next rooftop is the closest one that's open.",go:"Show me"},
  {k:"dealer",t:"Dealer's choice",d:"You pick the wildcard for your next rooftop.",go:"Pick it"}];
function jackpotSpin(vel){
  const g=G(),opts=JACKPOTS.filter(j=>j.k!==S[WK("lastJP")]),j=(S.test&&S.forceJP&&JACKPOTS.find(x=>x.k===S.forceJP))||opts[Math.floor(Math.random()*opts.length)];
  g.jp={k:j.k,at:now(),leg:g.visits.length,claimed:false};S[WK("lastJP")]=j.k;g.spinAt=now();spinning=true;save();track("jackpot",{kind:j.k,leg:g.visits.length});
  if(!reel||!$("reelBox")||!document.contains($("reelBox"))){
    $("stage").innerHTML=`<div class="ready">${mixlineHTML(g)}<div id="reelBox"></div><div class="poolnum">&nbsp;</div></div>`;
    reel=makeReel($("reelBox"),gameReelNames(),{});
  }
  // the card's button claims it straight from the jackpot layer
  const ctx=jackpotCtx();
  ctx.onLand=()=>{if(j.k==="freeze"){applyJackpot(g,j);save();renderClock()}};   // the real clock freezes the moment it lands
  jackpotRun($("reelBox"),reel,vel,j,res=>{spinning=false;applyJackpot(g,j);g.jp.claimed=true;save();
    if(j.k==="call"&&res.bar){setTarget(res.bar,ctx.from);animateId=res.bar.id;save();renderPlay();onLocation();dealWild(700);return}
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
  const filming=!!CAM.rec;   // filming a jackpot on an older phone: drop the streaks (they're not in the clip) and go lighter on confetti
  if(!calm&&!filming){const st=ov.querySelector(".jpx-streaks");for(let i=0;i<(S.lite?8:18);i++){const e=document.createElement("i"),left=i%2?78+Math.random()*20:Math.random()*20;
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
    ov.classList.add("won");confetti(ov,filming||S.lite?18:0);ctx.onLand&&ctx.onLand();
    const fl=document.createElement("i");fl.className="jpx-flash";ov.appendChild(fl);fl.animate([{opacity:.9},{opacity:0}],{duration:600,easing:"ease-out",fill:"forwards"}).onfinish=()=>fl.remove();
    // the card, in the middle of the screen, built the same way as a bar's card
    const wrap=document.createElement("div");wrap.className="jpcard-wrap";
    wrap.innerHTML=`<div class="bar jpcard jc-${j.k}"><span class="eyebrow">Jackpot</span><h2>${esc(j.t)}</h2>${jvHTML(j,ctx)}<p>${esc(jvText(j))}</p>${jvActs(j)}</div>`;
    ov.appendChild(wrap);
    wrap.querySelectorAll(".jv-face b").forEach(b=>fitLine(b,11));   // a long wildcard name (Cheapskate) shrinks to fit its card
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
    ctx.bars.forEach((v,i)=>barPhoto(v).then(ph=>{if(ph){tiles[i].querySelector(".jv-ph").style.backgroundImage=`url("${ph.url}")`;tiles[i].querySelector(".jv-b").classList.add("phd")}}));
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
    const flip=(c,html)=>{const b=c.querySelector(".jv-b");b.animate([{transform:"rotateY(180deg) scaleX(1)"},{transform:"rotateY(180deg) scaleX(0)"}],{duration:140,easing:"ease-in"}).onfinish=()=>{b.innerHTML=html;b.querySelectorAll(".jv-face b").forEach(x=>fitLine(x,11));{const t=b.querySelector(".jv-txt");if(t){let f=parseFloat(getComputedStyle(t).fontSize);while(t.scrollHeight>b.clientHeight-16&&f>10){f-=.5;t.style.fontSize=f+"px"}}}b.animate([{transform:"rotateY(180deg) scaleX(0)"},{transform:"rotateY(180deg) scaleX(1)"}],{duration:180,easing:"ease-out"})}};
    setTimeout(()=>cs.forEach(c=>{c.disabled=false;c.onclick=()=>{const i=+c.dataset.i;if(i===pickI)return;
      if(pickI>=0){const p=cs[pickI];p.classList.remove("picked");flip(p,`<span class="jv-face">${wildFace(ctx.wilds[pickI])}</span>`)}
      pickI=i;c.classList.add("picked");card.classList.add("haspick");sfx("flip");buzz(10);flip(c,`<span class="jv-txt"><b>${esc((WNAME[ctx.wilds[i]]||["Wildcard"])[0])}</b>${esc(wShort(ctx.wilds[i]))}</span>`);
      if(txt)txt.textContent="That's the one for your next rooftop.";if(go)go.hidden=false}}),500+3*260+200);
    if(go){go.hidden=true;go.onclick=()=>{if(pickI>=0)choose({wild:ctx.wilds[pickI]})}}}
}
// what the card says under the graphic, and its button
const jvText=j=>j.k==="call"?"Pick one before the timer runs out.":j.k==="dealer"?"Tap a card to see what you're in for.":j.d;
const jvActs=j=>j.k==="call"?"":j.k==="dealer"?`<button class="btn dark" type="button" id="jvGo" hidden>Lock it in</button>`:`<button class="btn dark" type="button" id="jvGo">${j.go}</button>`;
function jackpotCtx(){   // the real numbers, for a game in progress
  const g=G(),from=fromPoint(),P=spinPool().pool.slice(),near=P.slice().sort((a,b)=>dist(from,a)-dist(from,b))[0];
  return {from,bars:shuffle(P).slice(0,3),nearest:near,clock:()=>remaining(),wilds:shuffle(deckCards()).slice(0,3)};
}
function demoCtx(){      // stand-ins for the test jackpot
  const c=AREAS.find(a=>a.name==="The City")||AREAS[0],P=playable(inCircle(c,1),false).filter(v=>!v.tempClosed),near=P.slice().sort((a,b)=>dist(c,a)-dist(c,b))[0];
  return {from:{lat:c.lat,lng:c.lng},bars:shuffle(P.slice()).slice(0,3),nearest:near,clock:()=>37*60000+12000,wilds:shuffle(deckCards()).slice(0,3)};
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
  const opts=JACKPOTS.filter(j=>j.k!==S[WK("lastJP")]),j=(k&&JACKPOTS.find(x=>x.k===k))||opts[Math.floor(Math.random()*opts.length)];S[WK("lastJP")]=j.k;save();
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
  const choose=v=>{clearInterval(timer);if(g.target)return;setTarget(v,from);animateId=v.id;save();closeSheet();renderPlay();onLocation()};
  sheet(`<h3>Your call</h3><p class="note">Pick one.</p><div class="jptimer"><i id="jpT"></i><b id="jpS">${SEC}</b></div>
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
  const g=G(),cards=shuffle(deckCards()).slice(0,3);let done=false;
  const pick=text=>{if(done)return;done=true;g.dealt={leg:g.visits.length,text};save();closeSheet();renderPlay();doSpin(true)};
  sheet(`<h3>Dealer's choice</h3><p class="note">Pick the wildcard for your next rooftop.</p>
    <div class="acts">${cards.map((c,i)=>`<button class="opt dealt" type="button" data-dc="${i}"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${WIC[(WNAME[c]||[0,"star"])[1]]}</svg></span><span class="t"><b>${esc((WNAME[c]||["Wildcard"])[0])}</b><small>${esc(wShort(c))}</small></span></button>`).join("")}
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
    const b=slot.getBoundingClientRect(),fly=slot.cloneNode(true);fly.removeAttribute("data-pending");fly.classList.add("wfly");{const card=slot.closest(".bar");if(card&&/\bphd\b/.test(card.className))fly.classList.add("wfly-dk")}   // light mode: dark fly-in on photo cards
    Object.assign(fly.style,{left:b.left+"px",top:b.top+"px",width:b.width+"px",height:b.height+"px"});
    // it flies in looking exactly as it lands (same see-through tint, border and text), not a solid card
    {const cs=getComputedStyle(slot),put=(el,src)=>{const c=getComputedStyle(src);el.style.setProperty("color",c.color,"important")};
      ["background-color","background-image","border-color","border-style","border-width","backdrop-filter","-webkit-backdrop-filter"].forEach(k=>{const v=cs.getPropertyValue(k);if(v)fly.style.setProperty(k,v,"important")});
      put(fly,slot);const fs=fly.querySelectorAll("svg,b,small,span"),ss=slot.querySelectorAll("svg,b,small,span");fs.forEach((el,i)=>{if(ss[i])put(el,ss[i])});
      fly.style.setProperty("box-shadow","0 14px 34px rgba(0,0,0,.25)","important")}
    document.body.appendChild(fly);
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
      CAM.stream=st;let v=$("camVid");if(!v){v=document.createElement("video");v.id="camVid";v.poster=NOPOSTER;v.muted=true;v.playsInline=true;v.setAttribute("playsinline","");document.body.prepend(v)}
      v.classList.remove("on");v.onplaying=()=>v.classList.add("on");v.srcObject=st;v.play().catch(()=>{});CAM.vid=v;document.body.classList.add("camon");fitPlay();
      // Android's web view sometimes hands over a stuck picture the first time (often right after the permission prompt).
      // If the picture hasn't started moving in 2.5 s, drop it and open the camera again, once, the same as closing and reopening it.
      const t0=v.currentTime;setTimeout(()=>{if(CAM.stream!==st||CAM.retried)return;if(v.videoWidth&&v.currentTime>t0+.2&&!v.paused)return;
        CAM.retried=true;if(CAM.rec)camStop(true);st.getTracks().forEach(t=>t.stop());CAM.stream=null;v.srcObject=null;v.classList.remove("on");camSync()},2500);
    }).catch(e=>{CAM.busy=false;CAM.once=false;if(S.route==="play"&&!spinning)renderPlay();toast(e&&e.name==="NotAllowedError"?(NATIVE?"Camera's off for Rooftop Roulette. Allow it in your phone's settings.":"Camera blocked. Allow it in Chrome's site settings."):"Couldn't start the camera.",4000)});
  }
  // the camera layout goes up the moment it's asked for, before the picture arrives, so the plain wheel never flashes up
  if(CAM.once&&spot&&S.route==="play"&&!document.body.classList.contains("camon")){document.body.classList.add("camon");if(!spinning)fitPlay()}
  if(!CAM.once&&!CAM.rec&&!CAM.stream&&!CAM.busy&&document.body.classList.contains("camon")){document.body.classList.remove("camon");if(S.route==="play"&&!spinning){renderPlay();fitPlay()}}
  if(!want&&CAM.stream&&(!CAM.once||document.hidden||S.route!=="play")){if(CAM.rec)camStop(CAM.spun===false);CAM.stream.getTracks().forEach(t=>t.stop());CAM.stream=null;CAM.retried=false;const v=$("camVid");if(v){v.srcObject=null;v.remove()}document.body.classList.remove("camon");if(S.route==="play"){if(!spinning)renderPlay();fitPlay()}}
}
document.addEventListener("visibilitychange",()=>camSync());
setInterval(()=>{
  {const g=G(),spot=!!g&&!g.ended&&(spinning||!g.target&&(!atVisit()||g.reelOpen));if(CAM.once&&!CAM.rec&&!spinning&&g&&!spot&&!($("sheet")&&$("sheet").open)&&Date.now()-(CAM.onceAt||0)>1500)CAM.once=false}   // backed out (closed the re-spin or drink question): no camera next time
  camSync();
  if(!CAM.stream){camRecPill();camLight(false);return}   // camera closed: the recording pill and light go with it
  const jpDone=!!document.querySelector(".jpx.won"),busy=!jpDone&&(spinning||!!document.querySelector(".jpx"));   // a jackpot's done once its card is up (spinning stays on until it's claimed)
  if(!CAM.rec&&spinning&&!jpDone){camStart();CAM.spun=true}
  else if(!CAM.rec&&CAM.once&&CAM.vid&&CAM.vid.videoWidth&&CAM.vid.currentTime>0&&!CAM.vid.paused&&!document.hidden){camStart();CAM.spun=false}
  else if(CAM.rec){if(spinning&&!jpDone)CAM.spun=true;
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
// Every link the app hands out lives on rooftoproulette.com. Crawl links sit under /crawl/ and live-crawl invites under /live/,
// so Android App Links and iOS Universal Links can open them straight in the app (see .well-known/ at the repo root).
const APP_SITE=SITE,SHARE_BASE=SITE+"crawl/",LIVE_BASE=SITE+"live/";
const crawlCode=u=>{const m=String(u||"").match(/[#?&]crawl=([A-Za-z0-9_-]+)/);return m?m[1]:null};
const b64u=bytes=>{let s="";bytes.forEach(b=>s+=String.fromCharCode(b));return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")};
const unb64u=str=>{const s=atob(str.replace(/-/g,"+").replace(/_/g,"/"));return Uint8Array.from(s,c=>c.charCodeAt(0))};
async function packCrawl(r){const t0=r.startedAt,sec=t=>t==null?-1:Math.round((t-t0)/1000);
  const o={i:r.id,m:r.mode==="cruise"?"c":"r",l:r.len,ra:r.radius,c:r.city,a:r.areas,s:Math.round(t0/1000),e:sec(r.endedAt),d:sec(r.endsAt),
    p:null,ce:r.center?[+r.center.lat.toFixed(4),+r.center.lng.toFixed(4)]:null,
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
async function crawlLink(r){try{return SHARE_BASE+"#crawl="+(await packCrawl(r))}catch(e){return SITE}}
const crawlLine=r=>{const st=stats(r),n=st.counted.length;return `${r.title?r.title+": ":""}${n} rooftop${n===1?"":"s"} on Rooftop Roulette.`};
let SHARED=null;
let SHARED_CODE=null;
async function openCrawlCode(code){if(!code)return;
  try{const r=await unpackCrawl(code);SHARED=r;SHARED_CODE=code;S.lastEnd=r.id;S.route="end";track("crawl_link_open",{in_tab:readH(HKEY).some(x=>x.id===r.id),native:NATIVE});render()}
  catch(e){toast("That crawl link didn't work.",3500)}}
async function openSharedFromHash(){const code=crawlCode(location.hash)||crawlCode(location.search);if(!code)return;
  await openCrawlCode(code);history.replaceState(null,"",location.pathname+location.search.replace(/[?&]crawl=[A-Za-z0-9_-]+/,"").replace(/^&/,"?"))}
function addSharedToTab(){const r=SHARED;if(!r)return;const L=readH(HKEY);if(!L.some(x=>x.id===r.id)){L.push(r);L.sort((x,y)=>y.startedAt-x.startedAt);writeH(HKEY,L)}
  if(!hTest)H=readH(HKEY);track("crawl_link_add");SHARED=null;toast("Added to your tab.",2500);
  if(cloudOn()&&!signedIn()&&canGoogle())setTimeout(()=>signInSheet("Keep your crawls, photos and saved lists across devices.","link_add","Save your tab"),1500);
  if(hTest){go("home")}else{S.lastEnd=r.id;save();renderEnd()}}
let camPopT=null;
function camSaved(blob,type,at,inGal){let p=$("camPop");if(p){clearTimeout(camPopT);p.remove()}
  p=document.createElement("div");p.id="camPop";p.className="campop";const u=URL.createObjectURL(blob);
  p.innerHTML=`<video poster="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" src="${u}" muted playsinline autoplay loop></video><span class="cpt"><b>Clip saved</b><small>On your crawl card${inGal?" and in your gallery":""}</small></span>${inGal?"":`<button type="button" data-a="save">Save</button>`}<button type="button" data-a="share" class="pri">Share</button>`;
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
      ops.push(()=>{x.save();x.font=`${font.fw} ${font.fs} ${font.ff}`;x.globalAlpha=a*f;x.fillStyle=col;if(!jp){x.shadowColor="rgba(0,0,0,.55)";x.shadowBlur=10*k;x.shadowOffsetY=2*k}x.textBaseline="middle";x.textAlign="center";const t=snap.textContent.toUpperCase(),m=x.measureText(t).width||1;
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
const clipDB=()=>new Promise((res,rej)=>{const q=indexedDB.open("rr-clips",2);
  q.onupgradeneeded=()=>{const db=q.result,st=db.objectStoreNames.contains("clips")?q.transaction.objectStore("clips"):db.createObjectStore("clips",{keyPath:"id"});if(!st.indexNames.contains("game"))st.createIndex("game","game")};
  q.onsuccess=()=>res(q.result);q.onerror=()=>rej(q.error)});
const clipPut=o=>clipDB().then(db=>new Promise((res,rej)=>{const t=db.transaction("clips","readwrite");t.objectStore("clips").put(o);t.oncomplete=res;t.onerror=()=>rej(t.error)}));
const clipAll=()=>clipDB().then(db=>new Promise(res=>{const q=db.transaction("clips").objectStore("clips").getAll();q.onsuccess=()=>res(q.result||[]);q.onerror=()=>res([])})).catch(()=>[]);
const mbTxt=b=>b<1e6?Math.max(1,Math.round(b/1e3))+" KB":b<1e9?(b/1e6).toFixed(b<1e7?1:0)+" MB":(b/1e9).toFixed(1)+" GB";
const clipList=gid=>clipDB().then(db=>new Promise(res=>{const st=db.transaction("clips").objectStore("clips");const q=st.indexNames.contains("game")?st.index("game").getAll(gid):st.getAll();q.onsuccess=()=>res(q.result.filter(c=>c.game===gid).sort((a,b)=>a.at-b.at));q.onerror=()=>res([])})).catch(()=>[]);
const clipDel=id=>clipDB().then(db=>new Promise(res=>{const t=db.transaction("clips","readwrite");t.objectStore("clips").delete(id);t.oncomplete=res;t.onerror=res}));
/* in the native app the browser's share and download don't exist: use the phone's own share sheet and gallery */
const CAPX=window.Capacitor,NATIVE=!!(CAPX&&CAPX.isNativePlatform&&CAPX.isNativePlatform());
// in the app: a crawl link tapped in a chat opens here (App Links / Universal Links, or the "Open in the app" button)
if(NATIVE&&CAPX.Plugins&&CAPX.Plugins.App){const A=CAPX.Plugins.App;
  try{A.addListener("appUrlOpen",e=>openCrawlCode(crawlCode(e&&e.url)))}catch(e){}
  try{A.getLaunchUrl&&A.getLaunchUrl().then(o=>{const c=crawlCode(o&&o.url);if(c)setTimeout(()=>openCrawlCode(c),300)}).catch(()=>{})}catch(e){}}
// a crawl link opened in a phone browser (an old link, or inside Instagram's browser): offer to open it in the app
const ANDROID_WEB=!NATIVE&&/Android/i.test(navigator.userAgent);
function openInApp(){const c=SHARED_CODE;if(!c)return;track("crawl_link_app");
  location.href=`intent://rooftoproulette.com/crawl/?crawl=${c}#Intent;scheme=https;package=com.rooftoproulette.app;S.browser_fallback_url=${encodeURIComponent(SHARE_BASE+"#crawl="+c)};end`}
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
  sheet(`<h3>Clips</h3><p class="note">Your spins from this crawl. They're saved on this phone.</p><div class="clips">${L.map((c,i)=>`<div class="clip"><video poster="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" src="${urls[i]}#t=0.1" controls playsinline preload="metadata"></video><div class="clipb"><span class="small">${(d=>clock12(d.getHours()*60+d.getMinutes()))(new Date(c.at))}</span><button class="btn sm" type="button" data-cs="${i}">Share</button><button class="btn sm dark" type="button" data-cv="${i}">Save</button><button class="btn sm line" type="button" data-cd="${i}" aria-label="Delete">Delete</button></div></div>`).join("")}</div>`,()=>{
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
   in, and the door snaps shut as the number ticks over. Once per rooftop. */
/* "It counts": the name pops off the card, the pill opens like a little door, the name gets
   sucked in, the door shuts and the count ticks over. About a second, and any tap skips it
   (so tapping Spin skips it and spins). */
function flyToCounter(force,lead){
  const g=G(),a=g&&g.visits.find(v=>v.leftAt==null);if(!a||(a._flew&&!force)||document.hidden||S.route!=="play")return;
  const pc=$("pCount");if(!pc)return;
  a._flew=true;save();
  countFly({pc,lead,getH:()=>$("stage")&&$("stage").querySelector(".bar.at h2"),bump:!a._inCount,done:()=>{
    a._inCount=true;save();const b2=pc.querySelector("b");if(b2)b2.textContent=countShown(g);
    S.tips=S.tips||{};if(!S.tips.night&&!pc.querySelector(".cnudge"))pc.insertAdjacentHTML("beforeend",`<span class="cnudge">Your crawl</span>`)}});   // the nudge lands right after the first bar counts
}
// the "it counts" animation itself: the host's crawl screen and a follower's both use it. z lifts it over the follow screen.
function countFly(o){const pc=o.pc,lead=o.lead,Z=o.z||0;
  const tm=[],fx=[];let h=null,over=false;
  const at=(ms,f)=>tm.push(setTimeout(()=>{if(!over)f()},ms));
  const finish=()=>{if(over)return;over=true;tm.forEach(clearTimeout);fx.forEach(e=>e.remove());pc.classList.remove("opening");
    if(h)h.style.visibility="";document.removeEventListener("pointerdown",finish,true);
    if(o.done)o.done()};
  document.addEventListener("pointerdown",finish,true);
  if(matchMedia("(prefers-reduced-motion: reduce)").matches){finish();return}
  at(lead==null?350:lead,()=>{
    h=o.getH();if(!h||!h.isConnected){finish();return}
    const hr=h.getBoundingClientRect(),pr=pc.getBoundingClientRect(),cs=getComputedStyle(h),INK=themeAmberText(h);
    const old=+(pc.querySelector("b")||{}).textContent||0,nw=o.bump?old+1:old;
    const cx=hr.left+hr.width/2,cy=hr.top+hr.height/2;
    // 1. pop off the card (same punch as the wheel landing, quicker)
    const bloom=document.createElement("div");bloom.className="jbloom";Object.assign(bloom.style,{left:cx+"px",top:cy+"px",zIndex:904+Z});document.body.appendChild(bloom);fx.push(bloom);
    bloom.animate([{transform:"translate(-50%,-50%) scale(.3)",opacity:0},{transform:"translate(-50%,-50%) scale(1.05)",opacity:.9,offset:.35},{transform:"translate(-50%,-50%) scale(1.2)",opacity:0}],{duration:600,easing:"ease-out",fill:"forwards"});
    const f=document.createElement("div");f.className="cpop";f.textContent=h.textContent;
    Object.assign(f.style,{left:cx+"px",top:cy+"px",fontFamily:cs.fontFamily,fontWeight:cs.fontWeight,fontSize:cs.fontSize,textTransform:cs.textTransform,letterSpacing:cs.letterSpacing,color:INK});
    if(Z)f.style.zIndex=906+Z;document.body.appendChild(f);h.style.visibility="hidden";fx.push(f);
    const big=Math.min(1.5,innerWidth*.9/(f.offsetWidth||hr.width));
    const T=(x,y,sx,sy=sx,r=0)=>`translate(calc(-50% + ${x}px),calc(-50% + ${y}px)) rotate(${r}deg) scale(${sx},${sy})`;
    f.animate([{transform:T(0,0,1),textShadow:"0 0 0 rgba(245,184,61,0)"},{transform:T(0,-14,big*1.08),textShadow:"0 0 24px rgba(245,184,61,.9)",offset:.6},{transform:T(0,-12,big),textShadow:"0 0 16px rgba(245,184,61,.7)"}],{duration:170,easing:"cubic-bezier(.2,.9,.3,1.2)",fill:"forwards"});
    sfx("deal");buzz(15);
    // 2. the pill grows and swings open
    const GROW=1.7,box=document.createElement("div");box.className="cbox";
    Object.assign(box.style,{left:pr.left+"px",top:pr.top+"px",width:pr.width+"px",height:pr.height+"px",perspective:"150px"});if(Z)box.style.zIndex=905+Z;
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
  dbox.innerHTML=`<div class="chole" style="border-radius:14px"></div><div class="cleaf" style="border-radius:14px;flex-direction:column;gap:2px;background:var(--s2)"><b style="display:block;font-family:var(--display);font-weight:800;font-size:${getComputedStyle(num).fontSize};line-height:1;color:var(--amber-text)">0</b><small style="font-size:${small?getComputedStyle(small).fontSize:"12px"};color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:.06em">${small?small.textContent:""}</small></div>`;
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
    Object.assign(f.style,{left:x0+"px",top:y0+"px",fontFamily:cs.fontFamily,fontWeight:700,fontSize:cs.fontSize,color:themeAmberText(c),textShadow:"0 0 14px rgba(245,184,61,.8)"});
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
/* Tap the drinks counter: tonight's bars, your zone, and what's left to spin.
   Followers of a live crawl get the same sheet (fo: {g, t, who, prev}) with the host's rooftops, minus anything that changes the crawl. */
let ngMap=null;
const ZONEI='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="8.5" fill="currentColor" fill-opacity=".16"/><circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none"/></svg>';
// when you got to a bar, on the crawl city's clock
const arrTime=(ts,city)=>clock12(sydAt(ts,TZ[city||"Sydney"]).min);
function nightSheet(fo){
  fo=fo&&fo.g?fo:null;const g=fo?fo.g:G();if(!g)return;if(!fo&&!S.tips.night){S.tips.night=1;save();renderPlay()}
  const t=fo?fo.t:now(),cr=fo?g.mode==="cruise":CR(g),vis=g.visits||[],arr=vis.filter(v=>v.arrivedAt!=null);
  const c=fo?vis.filter(v=>v.counted===true||(v.leftAt==null&&v.arrivedAt!=null&&v._inCount)).length:countShown(g);
  const been=arr.map(v=>v.id),left=fo?(cr||!g.center?null:playable(inCircle(g.center,g.radius),false).filter(v=>!(g.excluded||[]).includes(v.id)&&!been.includes(v.id)&&openOK(v,t)).length):basePool().length;
  const who=fo?(fo.who||"Their"):null,area=(g.areas&&g.areas[g.areas.length-1])||(g.center?nearestSuburb(g.center):"");
  const back=fo?()=>nightSheet(fo.fresh?fo.fresh():fo):()=>nightSheet(),title=fo?(fo.prev?"Your crawl":`${who}'s crawl`):"Your crawl";
  const rows=arr.map((v,i)=>{const b=byId(v.id);if(!b)return "";const here=v.leftAt==null,ms=(v.leftAt||t)-v.arrivedAt,ok=!here&&v.counted===true;
    // the tick says it counted, so the time it was logged sits beside it. Where you are now, the time on the right is still ticking: no arrival time.
    const st=here?"You're here":v.counted===false?`${arrTime(v.arrivedAt,g.city)} · Didn't count`:v.counted===true?arrTime(v.arrivedAt,g.city):fo&&!fo.prev?`${arrTime(v.arrivedAt,g.city)} · Not counted yet`:"Waiting on you";
    return `<button class="ngrow${v.counted===false?" x":""}" type="button" data-b="${b.id}">${vthumb(b,i+1)}<span class="t"><b>${esc(b.name)}${S.fav[b.id]?`<i class="fv">${HRTF}</i>`:""}</b><small class="${ok?"ok":""}">${st}${ok?" ✓":""}</small></span><span class="d">${hmm(ms)}</span></button>`}).join("");
  sheet(`<h3 tabindex="-1" autofocus style="outline:0">${esc(title)}</h3>
    <div class="nightzone">${area||cr?`<span>${I.pin} ${cr&&!fo?zoneTxt(g):esc(area)}</span>`:""}${cr?`<span>R&amp;R</span>`:`<span>${ZONEI}${rLabel(g.radius)}</span><span>${I.clock}${g.len===60?"1 hour":"2 hours"}</span>`}</div>
    <p class="note" style="margin:10px 0 6px"><b style="color:var(--amber-text)">${c}</b> rooftop${c===1?"":"s"} so far${left!=null?` · <b style="color:var(--amber-text)">${left}</b> ${cr?"open nearby":fo?"left in the zone to spin":"left in your zone to spin"}`:""}</p>
    ${arr.length?`<div class="ngmap" id="ngMap"></div>`:""}
    ${rows?`<div class="nglist">${rows}</div><p class="note ngtip">Tap a rooftop to see it${arr.some(v=>!S.fav[v.id])?" or make it a favourite":""}.</p>`:`<p class="note">No rooftops yet.${fo?"":" Get spinning."}</p>`}
    <button class="btn dark" type="button" id="ngX" style="margin-top:14px">Close</button>`,()=>{
    $("ngX").onclick=closeSheet;
    const open=id=>{const v=byId(id),vi=arr.find(x=>x.id===id);if(!v)return;const here=vi&&vi.leftAt==null;
      const ms=vi?(vi.leftAt||(fo?fo.t:now()))-vi.arrivedAt:0;
      const visit=!vi?"":fo&&!fo.prev?`Got there ${arrTime(vi.arrivedAt,g.city)} · ${here?hmm(ms)+" so far":hmm(ms)}${vi.counted===true?" ✓":vi.counted===false?" · Didn't count":""}`
        :`${here?"Here for":"You were here"} ${hmm(ms)}${vi.counted===true?" · Counted ✓":vi.counted===false?" · Didn't count":""}`;
      barSheet(v,null,{lite:true,back,backTxt:title,visit})};
    $("sheetBody").querySelectorAll(".ngrow").forEach(x=>{x.onclick=()=>open(x.dataset.b);
      const vis_=arr.find(y=>y.id===x.dataset.b);if(fo||!vis_||g.demo)return;
      swipeRow(x,()=>removeVisit(g,vis_,true));longPress(x,()=>removeAsk(g,vis_,true))});
    // the bars so far, joined bar to bar. The real walking route waits for the summary.
    if(arr.length){try{ngMap&&ngMap.remove()}catch(e){}ngMap=null;
      makeMap("ngMap",{}).then(m=>{if(!m||!$("ngMap"))return;ngMap=m;const pts=arr.map(v=>byId(v.id)).filter(Boolean);
        if(pts.length>1)m.route(pts,true);arr.forEach((v,i)=>{const b=byId(v.id);if(b)m.num(b,i+1,v.counted===false,b.name,()=>open(v.id))});
        const y=fo&&fo.prev?null:you(),all=y?pts.concat([y]):pts;if(y)m.me&&m.me(y);setTimeout(()=>m.fitPts(all,16,{top:28,left:28,right:28,bottom:28}),60)})}
  });
}
$("pCount").onclick=()=>nightSheet();
function boardHTML(names,live){
  return `<div class="board${live?" live":""}" id="board">${names.map((n,i)=>{const o=i-2;return `<div class="flap${o===0?" mid":Math.abs(o)===1?" f1":" f2"}"${live?` id="q${i}"`:""}><span>${esc(n)}</span></div>`}).join("")}</div>`;
}
function answer(idx,yes){const v=G()&&G().visits[idx];if(v){v.counted=!!yes;save();renderPlay()}}

/* ---------- tips (first game only) ---------- */
const seen=k=>{if(!S.tips[k]){S.tips[k]=1;save()}};
function tip(k,text,arrow){if(S.tips[k])return "";return `<div class="tip${arrow?"":" nob"}" data-tip="${k}">${I.bulb}<span>${text}</span><button type="button">Got it</button></div>`}
document.addEventListener("click",e=>{const b=e.target.closest(".tip button");if(!b)return;const t=b.closest(".tip");seen(t.dataset.tip);t.remove()});

/* ---------- sheets ---------- */
function sheet(html,bind){backArm();{const d_=$("sheet");if(!d_.open){d_.classList.add("fresh");clearTimeout(d_._fr);d_._fr=setTimeout(()=>d_.classList.remove("fresh"),380)}}
  const d=$("sheet"),h0=d.open?d.getBoundingClientRect().height:0;
  d.classList.remove("full","tq");$("sheetBody").innerHTML=html;fillPhotos($("sheetBody"));if(bind)bind();if(!d.open)d.showModal();
  // already open: ease from the old height to the new one (one pop-up leading to the next shouldn't jump)
  if(h0&&!matchMedia("(prefers-reduced-motion: reduce)").matches){const h1=d.getBoundingClientRect().height;if(Math.abs(h1-h0)>6)try{d.animate([{height:h0+"px",overflow:"hidden"},{height:h1+"px",overflow:"hidden"}],{duration:240,easing:"cubic-bezier(.2,.8,.2,1)"})}catch(e){}}}
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
   for the rooftop), with the full list a tap away. One open at a time. */
let apMaps=[],apOpen=null,apN=0;
const apClear=()=>{apMaps.forEach(m=>{try{m.remove()}catch(e){}});apMaps=[]};
const apWrap=(key,opt)=>`<div class="ap" data-apk="${esc(key)}"><div class="aprow">${opt}<button class="apx" type="button" aria-label="See the rooftops here" aria-expanded="false"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></button></div><div class="apbody" hidden></div></div>`;
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
  body.innerHTML=`${L.length?`<div class="apmap" id="${id}"></div>`:""}${L.length?`<button class="txtbtn apl" type="button" aria-expanded="false">Show the ${L.length} rooftops as a list</button>`:`<p class="note" style="margin:10px 2px 2px">${k==="__want"?"Nothing on your list yet. Tap Pick from my Hit list to add some.":"No rooftops this close. Try a part of town instead."}</p>`}
    <div class="aplist" hidden>${L.map(v=>`<button class="aprow2${openOK(v,t)?"":" off"}" type="button" data-v="${v.id}"><span class="dot${openOK(v,t)?"":" off"}"></span><span class="t"><b>${esc(v.name)}</b><small>${st(v)}</small></span><span class="chev">›</span></button>`).join("")}</div>`;
  body.hidden=false;
  const lb=body.querySelector(".apl"),ll=body.querySelector(".aplist");
  if(lb)lb.onclick=()=>{ll.hidden=!ll.hidden;lb.textContent=ll.hidden?`Show the ${L.length} rooftops as a list`:"Hide the list";lb.setAttribute("aria-expanded",String(!ll.hidden))};
  body.querySelectorAll("[data-v]").forEach(b=>b.onclick=()=>barSheet(byId(b.dataset.v)));
  if(!force)setTimeout(()=>ap.scrollIntoView({block:"nearest",behavior:"smooth"}),60);
  const m=await makeMap(id);if(!m)return;apMaps.push(m);const g_=getGeo(k);
  if(g_&&g_.r){m.circle(g_.c,g_.r);m.fitZone(g_.c,g_.r)}else if(L.length)m.fitPts(L,15);
  L.forEach(v=>m.pin(v,openOK(v,t)?"":"off",()=>barSheet(v)));if(k==="__me")setMe(m);
}
// Moving the zone happens right on the crawl map: the circle comes loose, a panel slides up, and you drag it.
function openMove(free){crawlMap({move:true,free:!!free})}
/* Practice spin: the real wheel and real rooftops, landing on a card. No game, nothing saved.
   First time someone taps Play for a mode: rules → Next → practice spin → "Let's play" (or skip).
   Any other time it hangs off the rules sheet. Opening either one counts as having seen that mode's intro. */
const demoBtns=next=>next?`<button class="btn" type="button" id="howX" style="margin-top:16px">Next</button>`
  :`<div class="demoacts"><button class="btn line" type="button" id="demoGo">Practice spin</button><button class="btn dark" type="button" id="howX">Got it</button></div>`;
function bindDemoBtns(back,next){if(next)$("howX").onclick=()=>demoSheet(back,next);else{$("howX").onclick=closeSheet;$("demoGo").onclick=()=>demoSheet(back)}}
function demoSheet(back,next,backLbl){
  const play=()=>{closeSheet();next()};
  sheet(`<h3>Practice spin</h3><p class="note">Just a practice. Real rooftops, no game, nothing saved. Flick it down.</p><div class="demo"><div id="demoBox"></div></div>
    <button class="btn dark" type="button" id="demoBack" style="margin-top:14px">${next?"Skip, let's play":backLbl||"Back to the rules"}</button>`,
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
    ["Spin","You get a random rooftop in your zone. The clock starts when you reach your first rooftop."],
    ["Get to the rooftop","One drink at each rooftop."],
    ["Not feeling it?",`Spin again. The first re-spin is free, then it's ${SKIP_COST} minutes off the clock. Can't get in? That re-spin's free.`],
    ["Stuck somewhere quiet?","Move your zone once a crawl: drag it somewhere new or make it bigger. If it's far, the clock waits."],
    ["Wildcards, and a jackpot","Some spins come with a little challenge for the next rooftop. And once a game, you'll hit the jackpot."],
    ["Beat the clock","Get to your last rooftop before zero and it counts. How many can you fit in?"]],rr:()=>[
  ["Spin","Nearby, or from the Hit list.<br>Re&#8209;spins are free."],
  ["Stay","No clock, wildcards or jackpot.<br>Spin again when ready."],
  ["End the crawl","From the menu, or after 3 hours.<br>Still out? Tap Keep going."],
  ["Get the crawl card","Every rooftop, time and stat from the crawl."]]};
// R&R's Pass list isn't a step: it sits under the steps on its own
const RR_NOTE=`<div class="hownote"><b>Pass list</b><span>Rooftops to leave out of R&amp;R.<br>Add when skipping, or from the Rooftops tab.</span></div>`;
// How to play from settings: both modes in one sheet, three-quarters high
function howToPlay(k){k=k||"rush";
  sheet(`<h3>How to play</h3><div class="seg" style="margin-top:12px"><button type="button" data-hw="rush" aria-pressed="${k==="rush"}">Timed</button><button type="button" data-hw="rr" aria-pressed="${k==="rr"}">R&amp;R</button></div><div class="steps" style="margin-top:14px">${stepsHTML(HOW[k]())}</div>${k==="rr"?RR_NOTE:""}`,()=>{
    $("sheet").classList.add("tq");$("sheetBody").querySelectorAll("[data-hw]").forEach(b=>b.onclick=()=>howToPlay(b.dataset.hw))})}
const sawHow=k=>{S.seenHow=S.seenHow||{};if(!S.seenHow[k]){S.seenHow[k]=1;save()}};
function howSheet(next){next=typeof next==="function"?next:null;sawHow("rush");
  sheet(`<h3>How it works</h3><div class="steps" style="margin-top:12px">${stepsHTML(HOW.rush())}</div>
    ${demoBtns(next)}`,()=>bindDemoBtns(()=>howSheet(next),next));
}
function openMenu(){
  const g=G(),free=g.started&&basePool().length<2,canMove=free||!g.voluntaryUsed;
  const cr=CR(g);
  sheet(`<h3>Menu</h3><div class="menu">
    ${cr?`<button type="button" id="mZone">${I.move}<span>Spin zone<small>${g.cz.type==="list"?"Your "+listName(g.cz.list):zoneTxt(g)}</small></span></button>`:""}
    <button type="button" id="mMove" ${cr?"hidden":""} ${canMove?"":"disabled style='opacity:.4'"}>${I.move}<span>Move zone<small>${free?"Free: your zone's nearly empty":g.voluntaryUsed?"Already used this crawl":"Move it or go bigger. Once a crawl"}</small></span></button>
    ${S.test?`<button type="button" id="mHome">${I.back}<span>Home (test mode)<small>Drops this crawl. Nothing goes on your tab</small></span></button>`:""}
    ${cr||g.demo?"":`<button type="button" id="mWild">${I.sparkle}<span>Wildcards<small>${esc(deckLbl())}</small></span></button>`}
    <button type="button" id="mHow">${I.help}<span>How it works</span></button>
    <button type="button" id="mSound">${I.sound}<span>Sound ${S.sound?"on":"off"}<small>Spin clicks and arrival chime</small></span></button>
    ${S.film!==false?`<button type="button" id="mLight">${I.sparkle}<span>Light ${S.camLight!==false?"auto":"off"}<small>Lights up your faces when you film a spin in the dark</small></span></button>`:""}
    ${g.clipN?`<button type="button" id="mClips">${I.camera}<span>Clips<small>${g.clipN} from this crawl</small></span></button>`:""}
    ${liveMenuRows(g)}
    <button type="button" class="danger" id="mEnd">${I.flag}<span>${g.started?"End crawl":"Cancel crawl"}<small>${g.started?(cr?"Your crawl goes on your tab":"Your crawl card is saved"):"It hasn't started, so nothing's saved"}</small></span></button>
  </div>`,()=>{
    $("mMove").onclick=()=>{if(canMove)openMove(free)};if($("mZone"))$("mZone").onclick=()=>crawlMap({move:true,pre:true});
    if($("mHome"))$("mHome").onclick=()=>{closeSheet();S.game=null;S.wiz=null;S.quick=null;save();stopWatch();go("home")};   // test mode: throw the game away, don't record it
    $("mHow").onclick=cr?cruiseHow:howSheet;if($("mWild"))$("mWild").onclick=deckSheet;
    $("mSound").onclick=()=>{S.sound=!S.sound;save();openMenu()};
    if($("mLight"))$("mLight").onclick=()=>{S.camLight=S.camLight===false;save();openMenu()};
    if($("mClips"))$("mClips").onclick=()=>clipsSheet(g.id);liveMenuBind();
    $("mEnd").onclick=()=>!g.started?sheet(`<h3>Cancel the crawl?</h3><p class="note">It hasn't started yet, so there's nothing to save.</p>
      <div class="acts"><button class="btn" type="button" id="eY" style="background:var(--red);color:#fff">Cancel crawl</button><button class="btn dark" type="button" id="eN">Keep it</button></div>`,()=>{$("eN").onclick=closeSheet;$("eY").onclick=()=>{closeSheet();endGame(now())}}):sheet(`<h3>End the crawl?</h3><p class="note">${g.started?(cr?"Your night is saved, with the time you spent at each rooftop.":"Your crawl card is saved. The rooftop you're at counts if your visit's been logged."):"You haven't spun yet, so nothing will be saved."}</p>
      <div class="acts"><button class="btn" type="button" id="eY" style="background:var(--red);color:#fff">End crawl</button><button class="btn dark" type="button" id="eN">${cr?"Keep going":"Keep playing"}</button></div>`,()=>{$("eN").onclick=closeSheet;$("eY").onclick=()=>{closeSheet();endGame(now())}});
  });
}
$("pMenu").onclick=openMenu;$("pMap").onclick=()=>crawlMap();
document.addEventListener("click",e=>{if(e.target.closest&&e.target.closest("#mixZone"))crawlMap({move:true,pre:true})});

function cruiseHow(next){next=typeof next==="function"?next:null;sawHow("rr");sheet(`<h3>How R&amp;R works</h3><div class="steps" style="margin-top:12px">${stepsHTML(HOW.rr())}</div>${RR_NOTE}
    ${demoBtns(next)}`,()=>bindDemoBtns(()=>cruiseHow(next),next))}
function endGame(at){
  const g=G();if(!g||g.ended)return;
  document.querySelectorAll(".jpx").forEach(o=>o.remove());spinning=false;   // a jackpot card still up when the clock runs out (or the crawl's ended from the notification) mustn't sit over the crawl card
  if(!g.started){if(g.live&&typeof liveCancel==="function")liveCancel(g.live);S.game=null;save();stopWatch();go("home");return}
  track("crawl_end",{mode:CR(g)?"rr":"rush",bars:g.visits.filter(v=>v.counted===true||(v.leftAt==null&&v.arrivedAt!=null)).length,minutes:Math.round((Math.min(at,g.endsAt)-g.startedAt)/60000),ended_early:at<g.endsAt,city:g.city||null});
  const before=collectedMap();
  const t=Math.min(at,g.endsAt),early=at<g.endsAt;if(early)g.endsAt=at;
  const a=atVisit();if(a)closeVisit(a,t,"end");
  const d=leaving();if(d)closeVisit(d,Math.min(t,awayNow()||document.hidden?leftGuess(d):t),"end");
  if(g.target){const y=you(),v=byId(g.target);g.missed={id:v.id,m:y?Math.round(dist(y,v)):null}}
  if(g.loHit){const lv=g.visits[g.visits.length-1];if(lv){lv.counted=true;lv.leftAt=lv.leftAt||lv.arrivedAt;lv.lastOrders=true}g.missed=null}
  g.ended=true;g.endedAt=t;g.early=early;
  const rec=JSON.parse(JSON.stringify(g));
  // which bars were new to the collection in this game
  const prevCol={};H.forEach(r=>r.visits.forEach(v=>{if(v.counted===true)prevCol[v.id]=1}));
  rec.newIds=rec.visits.filter(v=>v.counted===true&&!prevCol[v.id]).map(v=>v.id);
  if(g.demo){DEMO_REC=rec;track("demo_end",{bars:rec.visits.filter(v=>v.counted===true).length});S.lastEnd=g.id;S.rackEnd=g.id;S.bodDue=g.id;S.game=null;save();closeSheet();ding();go("end");confetti();return}
  rec.test=!!(g.test||S.test);pushH(rec);syncH();afterNote(rec);if(rec.live)liveEnded(rec);
  S.lastEnd=g.id;S.rackEnd=g.id;S.bodDue=g.id;S.game=null;save();stopWatch();closeSheet();ding();buzz([100,60,100,60,200]);go("end");confetti();
}


/* ---------- play render ---------- */
const SKIP_COST=2;
// Manual check-ins only when location is actually off. A weak or quiet signal is ours to fix (locKick), so the player
// just sees that we're on it.
function needManual(g){
  if(S.test||g.demo||!g.target)return false;
  return !!(g.noLoc||locErr===1);
}
function locWeak(g){
  if(S.test||g.demo||!g.target||needManual(g))return false;
  const w=!here||locErr!=null||here.acc>250||Date.now()-lastFix>75000;
  if(w){if(!weakSince)weakSince=Date.now()}else weakSince=0;
  return w;
}
// Last resort, long after we started trying: a small link to check in by hand. Also if they're right by the bar but
// the GPS hasn't put them inside it (big buildings, bars a few floors up) well after they should've arrived.
function hereLink(g){
  if(!g.target||g.demo||S.test||needManual(g)||!g.started)return false;
  if(locWeak(g)&&Date.now()-weakSince>180000)return true;
  const y=you(),v=byId(g.target);if(!y||!v)return false;
  const exp=walkMin(g.targetFrom||y,v);
  return dist(y,v)<250&&now()-g.targetAt>(exp+6)*60000;
}
function logArrival(manual){
  const g=G();if(!g||!g.target)return;track("arrive",{manual:!!manual,leg:g.visits.length+1});const v=byId(g.target);endTripFreeze(g,true);prewarmAudio();
  // the phone was away for a while and we only just found out they're here: assume they've done their 3 minutes
  const late=!g.demo&&!manual&&!document.hidden&&Date.now()-resumedAt<45000&&awayGap>=DWELL_MIN*60000;   // not in a demo or a tapped check-in: they're telling us they're here now
  let at=now();const d=leaving();
  if(d){const W=walkMin(byId(d.id),v)*60000;let L=late?leftGuess(d):Math.max(d.dep,now()-W);if(late)at=Math.min(now()-DWELL_MIN*60000,Math.max(L+W,d.dep));L=Math.min(L,at);closeVisit(d,L,"walk")}
  else if(late){const est=(g.targetAt||at)+walkMin(g.targetFrom||v,v)*60000;at=Math.min(now()-DWELL_MIN*60000,Math.max(now()-awayGap,est))}
  g.visits.push({id:v.id,arrivedAt:at,loggedAt:now(),leftAt:null,counted:undefined,manual:!!manual,assumed:late||undefined});
  if((S.test||g.demo)&&g.visits.length===1){g.startPos={lat:v.lat,lng:v.lng};g.trail=[]}   // testing from home: no long line out to the first bar
  g.target=null;save();
  if(g.lastOrders&&now()>=g.endsAt){g.loHit=true;g.endsAt=at;save();track("last_orders_made");endGame(at);return}
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
const mapHintDue=g=>{S.tips=S.tips||{};if(!g||S.tips.mapOpened)return false;const n=g.visits.filter(v=>v._inCount||v.counted===true).length;return n>=2||(n>=1&&!!S.tips.night)};
function mapTip(){S.tips=S.tips||{};const g=G();if(S.tips.map2||!mapHintDue(g)||$("sheet").open||document.querySelector(".camtip,.cnudge"))return;const btn=$("pMap");if(!btn||!btn.offsetParent)return;
  const r=btn.getBoundingClientRect(),tip=document.createElement("button");tip.type="button";tip.className="camtip maptip below";tip.style.top=Math.round(Math.max(r.bottom,r.top+btn.offsetHeight,(btn.closest(".ptop")||btn).getBoundingClientRect().bottom)+8)+"px";tip.style.setProperty("--ax",Math.max(10,Math.round(innerWidth-12-(r.left+r.width/2)-8))+"px");
  tip.innerHTML=`<i class="camtipx" aria-hidden="true">${I.x}</i><b>Your crawl map</b><span>Every rooftop you've hit, and what's left.</span>`;document.body.appendChild(tip);S.tips.map2=1;save();
  const t0=Date.now(),off=()=>{tip.remove();document.removeEventListener("pointerdown",away,true)},away=e=>{if(!tip.contains(e.target)&&Date.now()-t0>1500)off()};   // a tap already on its way doesn't close it before it's read
  tip.onclick=off;document.addEventListener("pointerdown",away,true)}
function camTip(){const cb=$("camBtn"),g_=G();let tip=document.querySelector(".camtip:not(.maptip)");
  if(!cb||!cb.classList.contains("ontop")||!g_||!g_.visits.length||!S.tips.night||S.tips.cam||CAM.once||document.body.classList.contains("camon")||S.route!=="play"||$("sheet").open){if(tip)tip.remove();return}
  if(!tip){tip=document.createElement("button");tip.type="button";tip.className="camtip";
    tip.innerHTML=`<i class="camtipx" aria-hidden="true">${I.x}</i><b>Film the spin</b><span>Tap the camera, then spin. It records the spin and everyone's reaction.</span>`;tip.setAttribute("aria-label","Film the spin. Close tip");document.body.appendChild(tip);
    const off=()=>{S.tips.cam=1;save();tip.remove();document.removeEventListener("pointerdown",away,true)},away=e=>{if(!tip.contains(e.target))off()};
    tip.onclick=off;document.addEventListener("pointerdown",away,true)}   // gone on the X, the tip itself, or any tap elsewhere (spinning the reel included)
  if(!cb._tip){cb._tip=1;cb.addEventListener("pointerdown",()=>{S.tips.cam=1;save();const t=document.querySelector(".camtip");if(t)t.remove()})}
  ["spinBtn","skipBtn","hereBtn"].forEach(id=>{const x=$(id);if(x&&!x._tip){x._tip=1;x.addEventListener("pointerdown",()=>{if(S.tips.cam)return;S.tips.cam=1;save();const t=document.querySelector(".camtip");if(t)t.remove()})}});
  requestAnimationFrame(()=>{const r=cb.getBoundingClientRect();if(!r.width){tip.hidden=true;return}tip.hidden=false;const below=r.top<innerHeight/2;
    tip.style.right=Math.max(8,innerWidth-r.right)+"px";tip.style.top=below?r.bottom+12+"px":"auto";tip.style.bottom=below?"auto":innerHeight-r.top+12+"px";
    tip.classList.toggle("below",below);tip.style.setProperty("--ax",Math.max(10,(innerWidth-r.right)+r.width/2-Math.max(8,innerWidth-r.right)-8)+"px")})}
/* Smooth changes on the bar card. Same bar, new state (heading there -> you're here, or the "on the board" line turning up):
   the green border fades in, the card's insides fade across, and anything new below it opens out instead of jumping in,
   so the card eases to its new size. */
const cardKey=c=>{const h=c&&c.querySelector("h2");return h?h.textContent:null};
function cardSnap(box){if(!box)return null;const c=box.querySelector(":scope>.bar");if(!c)return null;
  return {name:cardKey(c),at:c.classList.contains("at"),kids:new Set([...box.children].filter(x=>x!==c).map(x=>x.className+"|"+(x.textContent||"").slice(0,40)))}}
function cardMorph(box,prev){if(!prev||!box||matchMedia("(prefers-reduced-motion: reduce)").matches)return;const c=box.querySelector(":scope>.bar");if(!c||cardKey(c)!==prev.name)return;
  const E="cubic-bezier(.2,.8,.2,1)";
  if(c.classList.contains("at")&&!prev.at){
    const cs=getComputedStyle(c),photo=c.classList.contains("photo");
    if(photo){try{c.animate([{boxShadow:"inset 0 0 0 2px rgba(0,0,0,0)"},{boxShadow:cs.boxShadow}],{duration:520,easing:E})}catch(e){}
      try{c.animate([{opacity:0},{opacity:1}],{duration:520,easing:E,pseudoElement:"::after"})}catch(e){}}
    else try{c.animate([{borderColor:"rgba(0,0,0,0)",backgroundColor:cs.backgroundColor},{borderColor:cs.borderColor,backgroundColor:cs.backgroundColor}],{duration:520,easing:E})}catch(e){}
    [...c.children].forEach((k,i)=>{if(k.tagName==="H2"||k.classList.contains("bph")||k.classList.contains("cr"))return;
      k.animate([{opacity:0,transform:"translateY(8px)"},{opacity:1,transform:"none"}],{duration:380,delay:80+i*30,easing:E,fill:"backwards"})})}
  // new things under the card open out from nothing, and the card (flex) shrinks with them frame by frame
  [...box.children].forEach(k=>{if(k===c||prev.kids.has(k.className+"|"+(k.textContent||"").slice(0,40)))return;const h=k.offsetHeight;if(!h)return;
    const st=getComputedStyle(k),mt=st.marginTop,mb=st.marginBottom;k.style.overflow="hidden";
    const an=k.animate([{height:"0px",opacity:0,marginTop:"0px",marginBottom:"0px",paddingTop:"0px",paddingBottom:"0px"},{height:h+"px",opacity:1,marginTop:mt,marginBottom:mb,paddingTop:st.paddingTop,paddingBottom:st.paddingBottom}],{duration:420,easing:E});
    an.onfinish=an.oncancel=()=>{k.style.overflow=""}})}
function renderPlay(){const pv=cardSnap($("stage"));renderPlay0();try{cardMorph($("stage"),pv)}catch(e){}}
function renderPlay0(){
  const g=G();if(!g)return;
  if(typeof CAM!=="undefined"&&CAM.once&&!g.ended&&(spinning||!g.target&&(!atVisit()||g.reelOpen)))document.body.classList.add("camon");
  $("pMenu").innerHTML=I.more;$("pMap").innerHTML=I.map;try{paintPeople()}catch(e){}$("pMap").classList.toggle("hasdot",mapHintDue(g));
  const counted=countShown(g);
  if(g.visits.length&&!S.tips.night){if(!S.tips.nightAt){S.tips.nightAt=Date.now();save();setTimeout(()=>{S.tips.night=1;save();if(S.route==="play")renderPlay()},8000)}else if(Date.now()-S.tips.nightAt>8000){S.tips.night=1;save()}}
  $("pCount").innerHTML=`${I.glass.replace('<svg','<svg width="18" height="18" style="color:var(--amber-text)"')} <b>${counted}</b><i class="cv">${I.chev||"›"}</i>${g.visits.some(v=>v._inCount||v.counted===true)&&!S.tips.night?`<span class="cnudge">Your crawl</span>`:""}`;
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
  const ask=qi>=0?`<div class="ask"><b>Did you have a drink at ${esc(byId(g.visits[qi].id).name)}?</b>${g.visits[qi].walkedOff?`<span class="small">You left without spinning.</span>`:""}<div class="row"><button class="btn sm" type="button" id="aY">Count it</button><button class="btn sm dark" type="button" id="aN">Don't count it</button></div><button class="txtbtn acant" type="button" id="aC">Couldn't get in?</button></div>`:"";
  let banner="";
  if(g.started&&rem<=FINAL*60000&&!g.shownFinal){g.shownFinal=true;g.finalBanner=true;save()}
  if(g.finalBanner&&!a)banner=`<div class="banner"><b>Final stretch.</b> Out of time on the way? It still counts.</div>`;
  if(g.lastOrders&&now()>=g.endsAt&&g.target)banner=`<div class="banner"><b>Last orders.</b> Walk there. It counts if you arrive by ${clock12(new Date(g.lastOrders).getHours()*60+new Date(g.lastOrders).getMinutes())}.</div>`;
  const wild=(id)=>g.wild&&g.wild.id===id&&g.wild.locked?
    '<div class="wild"><span aria-hidden="true">🔒</span><span><b>Locked wildcard</b>Play a real crawl to discover this one.</span></div>':
    g.wild&&g.wild.id===id?wildBox(g,g.wild).replace('<div class="wild"','<div class="wild"'+(g.wild.landed||g.wild.shown&&!g.wild.flying?"":' data-pending="1"')):"";
  if(a&&!g.reelOpen){
    const v=byId(a.id),o=openState(v,t),d=t-a.arrivedAt,ok=d>=DWELL(),nw=isNew(v.id);
    const cp=cardPhoto(v);
    st.innerHTML=ask+`<div class="bar at${cp.cls||" photo blank"}${animateId===("at:"+a.id)?" anim":""}"${cp.style}>${cp.cr}<span class="eyebrow">${CR(g)?"You're here":"Visit logged"}${nw?'<span class="newpill">New to you</span>':""}</span><h2>${esc(v.name)}</h2>${v.fact?`<div class="wi">${esc(v.fact)}</div>`:""}
      <div style="display:flex;justify-content:space-between;align-items:flex-end;gap:10px"><div><div class="small">Time here</div><div class="dwell" id="dwell">${mmss(d)}</div></div>
      <div class="small" style="text-align:right">${o.open?"Closes "+clock12(o.closeAt):""}</div></div>
      ${g.wild&&g.wild.id===v.id?wild(v.id).replace(' data-pending="1"',''):""}</div>
      ${CR(g)&&g.nudge&&d>=g.nudge*60000?`<div class="nudge">${I.clock}<span><b>Keen to try another rooftop?</b> Spin whenever you're ready.</span></div>`:""}
      ${ok&&g.visits.filter(x=>x.arrivedAt!=null).length>=2&&!g.snapAsk&&!(g.photos||[]).length?`<div class="snap two"><div class="snapt">${I.camera}<span><b>Grab a photo for your crawl card?</b></span><button class="snapx" type="button" id="snapX" aria-label="Not now">${I.x}</button></div><div class="row2"><button class="btn sm" type="button" id="snapIn">${I.camera} Camera</button><button class="btn sm dark" type="button" id="snapGal">${GAL} Gallery</button></div></div>`
        :(g.photos||[]).length&&!g.snapSeen?`<div class="tip nob soft ok">${I.check}<span><b>Photo saved.</b> It'll be on your story card.</span></div>`
        :ok?`<div class="tip nob soft ok">${I.check}<span><b>This rooftop's on the board.</b> Spin whenever you're ready.</span></div>`:""}
      <div class="spinrow"><button class="btn" type="button" id="spinBtn">Spin for the next one</button><button class="camfab" type="button" id="camBtn" aria-label="Film this spin">${I.camera}</button></div>
      ${g.demo?"":`<div class="cantrow"><button class="txtbtn" type="button" id="cantBtn">Can't get in?</button></div>`}`;
    if(animateId===("at:"+a.id))animateId=null;
  }else if(g.target){
    const v=byId(g.target),y=you()||g.targetFrom,o=openState(v,t),dm=dist(y,v),nw=isNew(v.id),man=needManual(g),weak=locWeak(g),hl=hereLink(g);
    const cp0=cardPhoto(v),fs=g.freeSkips||0,coming=!cp0.cls&&phMem[v.id]===undefined&&phAllowed(v.id,"play")&&!gBad;
    const cp=cp0.cls?cp0:{cls:coming?" photo blank loading":" photo blank",style:"",cr:""};
    if(document.body.classList.contains("camon")){const ph=phMem[v.id];
      st.innerHTML=ask+`<div class="camtgt tapmaps" data-gm="${esc(gmapsURL(v))}" role="link" tabindex="0">${ph&&ph.url?`<img class="ct-ph" src="${ph.url}" alt="">`:""}<div class="ct-t"><span class="eyebrow">Next rooftop</span><b class="ct-n">${esc(v.name)}</b><div class="ct-f"><span>${travelHTML(y,v).replace(/<\/svg>\s*/,"</svg><i>")}</i></span><span>${I.pin}<i>${mOrKm(dm)}</i></span></div></div>${wild(v.id)}</div>
      <div class="camacts"><a class="btn sm dir" href="${esc(dirURL(v))}" target="_blank" rel="noopener">${I.nav} Directions</a><button class="btn sm line" type="button" id="skipBtn">${I.redo} Spin again</button></div>`;{const cn=st.querySelector(".ct-n");if(cn)fitLine(cn,15)}
}
    else{st.innerHTML=banner+ask+`<div class="bar tgt${cp.cls}${animateId===v.id?" anim":""}"${cp.style}>${cp.cr}<span class="eyebrow">Next rooftop${nw?`<span class="newpill"${cp.cls?"":' style="background:rgba(36,24,3,.15);color:var(--amber-ink)"'}>New to you</span>`:""}</span><h2>${esc(v.name)}</h2>${v.vibe?`<div class="vibe">${esc(v.vibe)}</div>`:""}
      <div class="facts"><span>${travelHTML(y,v)}</span><span>${I.pin} ${mOrKm(dm)}</span>${o.open?`<span>${I.clock} til ${clock12(o.closeAt)}</span>`:""}</div>
      ${wild(v.id)}
      <a class="btn dir" href="${esc(dirURL(v))}" target="_blank" rel="noopener">${I.nav} Directions</a></div>
      ${g.noLoc?`<div class="again"><div class="spinrow"><button class="btn again-btn${now()<hereAt(g)?" locked":""}" type="button" id="hereBtn" aria-disabled="${now()<hereAt(g)}">${hereLbl(g)}</button><button class="camfab" type="button" id="camBtn" aria-label="Film this spin">${I.camera}</button></div><button class="txtbtn skiplink" type="button" id="skipBtn">Skip this one</button></div>`:""}
      ${g.demo?`<div class="again"><div class="spinrow"><button class="btn again-btn" type="button" id="dWalk">Skip the walk</button><button class="camfab" type="button" id="camBtn" aria-label="Film this spin">${I.camera}</button></div></div>`:""}
      ${g.noLoc||g.demo?"":CR(g)?`<div class="again"><div class="spinrow"><button class="btn line again-btn" type="button" id="skipBtn">${I.redo} Spin again</button><button class="camfab" type="button" id="camBtn" aria-label="Film this spin">${I.camera}</button></div><span class="fine">Not feeling it? Spin again, as often as you like</span></div>`
        :`<div class="again"><div class="spinrow"><button class="btn again-btn locked" type="button" id="lockBtn" aria-disabled="true">${I.clock} Next spin unlocks on arrival</button><button class="camfab" type="button" id="camBtn" aria-label="Film this spin">${I.camera}</button></div><button class="txtbtn skiplink" type="button" id="skipBtn">${fs?`Re-spin (free, ${fs} left)`:`Re-spin (−${SKIP_COST} min)`}</button></div>`}
      ${man&&!g.noLoc?`<button class="btn line" type="button" id="hereBtn">I'm here</button>`:""}
      ${!man&&weak?`<div class="locfind" role="status"><i class="locspin" aria-hidden="true"></i>Finding your location…</div>`:""}
      ${!man&&hl?`<button class="txtbtn herelink" type="button" id="hereBtn">Already there? Check in</button>`:""}
      ${!g.demo&&!CR(g)&&(g.noLoc||man)?tip("enroute-man","Location's off. Tap “I’m here” when you arrive.",false):""}
      ${CR(g)&&!g.noLoc?tip("enroute","You're checked in when you arrive. Nothing to tap.",false):""}
`;}
    if(animateId===v.id)animateId=null;
  }else{
    const bp=basePool(),pool=bp.length,nm=k=>bp.length?bp[(k+bp.length*3)%bp.length].name:"";
    st.innerHTML=banner+ask+`<div class="ready">
      ${g.started&&!CR(g)?"":mixlineHTML(g)}
      <div id="reelBox"></div>${g.started?"":mixInvBig(g)}<button class="camfab ontop${CAM.once?" x":""}" type="button" id="camBtn" aria-label="${CAM.once?"Close camera":"Film this spin"}">${CAM.once?I.x:I.camera}</button><div class="camswipe" id="camSwipe"><span><i class="recdot"></i>Swipe down to spin and record</span></div>
      ${g.started&&!CR(g)&&!g.demo&&!g.voluntaryUsed&&pool>3?`<button class="txtbtn adjz" type="button" id="adjZone">${I.move} Move zone</button>`:""}
      ${pool<=3&&g.started?`<div class="poolnum low">Only <b>${pool}</b> ${CR(g)?"open nearby":"left in your zone"}${!CR(g)&&!g.demo&&(!g.voluntaryUsed||pool<2)?` <button class="txtbtn poolmove" type="button" id="poolMove">Move zone</button>`:""}</div>`:""}

      ${a?`<button class="btn line" type="button" id="reelBack">Back to ${esc(byId(a.id).name)}</button>`:""}</div>`;
  }
  {const lb=$("lockBtn");if(lb)lb.onclick=()=>{buzz(15);toast(`Unlocks when you get to <b>${esc(byId(g.target).name)}</b>.`,2600)}}
  // First bar of a real timed crawl and you're nowhere near it: most likely trying it from home. Ask once.
  if(g.target&&!g.demo&&!CR(g)&&!g.noLoc&&!g.zoneMoved&&!g.visits.length&&!g.farAsked){const y=you(),v=byId(g.target),far=!!(y&&v&&dist(y,v)>2000);
    if(far){g.farAsked=1;save();const tg=g.target;
      afterReveal(()=>setTimeout(()=>{if(G()!==g||g.target!==tg||g.visits.length||spinning)return;if($("sheet").open){g.farAsked=0;save();return}farBarSheet(g)},700))}}
  if($("poolMove"))$("poolMove").onclick=()=>openMove(basePool().length<2);
  if($("adjZone"))$("adjZone").onclick=()=>openMove(basePool().length<2);
  st.querySelectorAll("#camBtn").forEach(b=>{if(S.film===false||!b.classList.contains("ontop"))b.remove()});
  if($("homeDemo"))$("homeDemo").onclick=()=>sheet('<h3>Switch to a practice crawl?</h3><p class="note">This ends your current crawl and starts a Sydney practice crawl.</p><div class="acts"><button class="btn" id="confirmDemo">Start practice crawl</button><button class="btn dark" id="keepCrawl">Keep playing</button></div>',()=>{
    $("keepCrawl").onclick=closeSheet;$("confirmDemo").onclick=()=>{if(G()!==g||g.visits.length){closeSheet();return}closeSheet();stopWatch();S.game=null;startDemo()}
  });
  g._man=g.target?needManual(g)+"|"+locWeak(g)+"|"+hereLink(g):false;
  const pv=a?byId(a.id):g.target?byId(g.target):null;
  if(pv&&phMem[pv.id]===undefined)barPhoto(pv).then(ph=>{if(!ph){if(G()===g&&g.target===pv.id)st.querySelector(".bar.loading")?.classList.remove("loading");return}afterReveal(()=>{const gg=G();if(gg&&(gg.target===pv.id||(atVisit()&&atVisit().id===pv.id))&&!spinning&&!gg.reelOpen)renderPlay()})});
  fitPlay();
  st.querySelectorAll(".wild").forEach(w=>w.onclick=e=>{e.stopPropagation();const txt=w.dataset.t||"",m=WMETA[txt];
    if(w.querySelector("[data-wspin]")){wildSpin(txt);return}
    const shown=m&&m.seal&&!wOpenNow(g,g.wild)?"Opens at the rooftop":m&&m.spin?((g.wild&&g.wild.res||[]).length?wFull(m,g.wild.res):wLead(m)):txt;
    // the deck this card came from, with how much of it you've played (tap for its cards); other packs as their own link underneath
    const pl=WP(),dk=WILDS.includes(txt)?"free":(PACKS.find(p=>p.cards.some(c=>c.t===txt))||{}).id||"free";
    const ts=deckCardsOf(dk),nP=ts.filter(t=>pl[t]).length,more=PACKS.some(p=>!packOwned(p.id));
    const reopen=()=>w.click();
    sheet(`<h3>Wildcards</h3><p class="note">Mini challenges. Completely optional…</p><div class="wild wexplain">${wFace(txt)}<span><b>${esc(wNm(txt))}</b>${esc(shown)}</span></div>
      ${g.demo?"":`<div class="sgrp wxdeck"><button class="strow" type="button" id="wDeckRow"><span class="dk-ic">${deckLogo(dk)}</span><span class="t"><b>${esc(deckName(dk))}</b><small>${nP>=ts.length?"Complete":nP+" of "+ts.length+" played"}</small></span><i class="chev">›</i></button>${more?`<button class="strow" type="button" id="wMorePk"><span class="t"><b>More wildcard decks</b></span><i class="chev">›</i></button>`:""}</div>`}
      <div class="sfoot"><button class="btn" type="button" id="wOk" autofocus>Done</button></div>`,()=>{
      $("wOk").onclick=closeSheet;if($("wDeckRow"))$("wDeckRow").onclick=()=>deckView(dk,reopen);if($("wMorePk"))$("wMorePk").onclick=()=>deckSheet(reopen)})});
  st.querySelectorAll(".bar.tapmaps,.camtgt").forEach(c=>c.onclick=e=>{if(e.target.closest("a,button,.wild"))return;window.open(c.dataset.gm,"_blank","noopener")});
  const sb=$("spinBtn");if(sb)sb.onclick=()=>{if(!CR(g)&&g.started&&!basePool().length){openMove(true);return}const open_=()=>{g.reelOpen=true;save();renderPlay()};
    if(a&&a._ans===undefined&&now()-a.arrivedAt<DWELL())askDrink(a,open_);else open_()};
  if($("leaveBtn"))$("leaveBtn").onclick=()=>{const d=leaving();if(d){closeVisit(d,now(),"walk");save();buzz(10)}renderPlay()};
  camTip();setTimeout(mapTip,900);
  {const cb=$("camBtn");if(cb)cb.onclick=()=>{if(spinning)return;
    if(cb.classList.contains("x")){CAM.once=false;camSync();renderPlay();return}
    CAM.once=true;CAM.onceAt=Date.now();track("camera_open");document.body.classList.add("camon");const sb_=$("spinBtn"),sk_=$("skipBtn");
    if(sb_)sb_.click();else if(sk_)sk_.click();else{camSync();renderPlay()}}}
  if($("snapX"))$("snapX").onclick=()=>{g.snapAsk=1;save();renderPlay()};
  const snapGot=f=>shrink(f,1000).then(d=>{const gg=S.game;if(!gg)return;(gg.photos=gg.photos||[]).push(d);if(gg.photos.length>3)gg.photos.shift();gg.snapAsk=1;try{save()}catch(x){gg.photos.pop();toast("Couldn't save the photo. Phone storage is full.")}if(S.route==="play")renderPlay();setTimeout(()=>{if(S.game){S.game.snapSeen=1;save();if(S.route==="play")renderPlay()}},4000)});
  if($("snapIn")){$("snapIn").onclick=()=>pickPhoto(snapGot,true);$("snapGal").onclick=()=>pickPhoto(snapGot,false)}
  if($("reelBack"))$("reelBack").onclick=()=>{if(a)delete a._ans;g.reelOpen=false;save();renderPlay()};
  if($("reelBox")){reel=makeReel($("reelBox"),gameReelNames(),{hint:true,onRelease:v=>doSpin(false,v)});fitPlay();requestAnimationFrame(()=>{if(!spinning)fitPlay()});setTimeout(()=>{if(!spinning)fitPlay()},400)}
  if(qi>=0){$("aY").onclick=()=>answer(qi,true);$("aN").onclick=()=>answer(qi,false);
    $("aC").onclick=()=>{const v=g.visits[qi];v.counted=false;v.cant=true;S.reports.push({id:v.id,at:now()});(g.skipped=g.skipped||[]).push(v.id);save();renderPlay();toast("Noted. Spin for another one.",2500)}}
  const sk=$("skipBtn");if(sk&&CR(g))sk.onclick=()=>{const id=g.target;(g.skipped=g.skipped||[]).push(id);g.target=null;save();renderPlay();skipToast(id)};
  else if(sk)sk.onclick=()=>{if(!basePool().length){openMove(true);return}
    if(g.demo){(g.skipped=g.skipped||[]).push(g.target);g.target=null;save();renderPlay();return}   // free in the demo
    const free=(g.freeSkips||0)>0;
    // Second re-spin within a minute of the first spin, before reaching any bar: probably trying it from home.
    const home=!g.noLoc&&!g.visits.length&&!g.farAsked&&(g.respins||[]).length>=1&&now()-g.startedAt<=60000;if(home){g.farAsked=1;save()}
    sheet(`<h3>Spin again?</h3><p class="note">${free?"This one's free.":`This re-spin costs <b style="color:var(--amber-text)">${SKIP_COST} minutes</b> off the clock${g.skipCost?` (you've used ${g.skipCost} so far)`:""}.`}${home?"<br>Trying it from home? A practice crawl plays anywhere.":""}</p><div class="acts"><button class="btn" type="button" id="sY">${free?"Spin again, free":"Spin again (−"+SKIP_COST+" min)"}</button><button class="btn dark" type="button" id="sN">Keep ${esc(byId(g.target).name)}</button>${home?'<button class="btn line" type="button" id="sD">Switch to a practice crawl</button>':""}</div>`,()=>{$("sN").onclick=closeSheet;
      if($("sD"))$("sD").onclick=()=>{closeSheet();if(G()!==g||g.visits.length)return;track("respin_demo",{});stopWatch();S.game=null;save();startDemo()};$("sY").onclick=()=>{closeSheet();if(free)g.freeSkips--;else{g.endsAt-=SKIP_COST*60000;g.skipCost=(g.skipCost||0)+SKIP_COST}(g.respins=g.respins||[]).push(now());(g.skipped=g.skipped||[]).push(g.target);g.target=null;save();if(remaining()<=0){loop();return}renderPlay()}})};
  {const dw=$("dWalk");if(dw)dw.onclick=()=>{const v=byId(g.target);if(!v)return;g.dpos={lat:v.lat+.0002,lng:v.lng,acc:5};save();animateId="at:"+v.id;onLocation()}}   // demo: arrive without walking
  const cg=$("cantBtn");if(cg)cg.onclick=()=>{const v=byId(a.id);sheet(`<h3>Couldn't get in to ${esc(v.name)}?</h3><p class="note">Closed, full, or not letting groups in. You get a free re-spin${CR(g)?"":" and no time is lost"}. We'll note it so the rooftop gets checked.</p><div class="acts"><button class="btn" type="button" id="cY">Yes, free re-spin</button><button class="btn dark" type="button" id="cN">We're in</button></div>`,()=>{$("cN").onclick=closeSheet;$("cY").onclick=()=>{closeSheet();a.leftAt=now();a.counted=false;a.cant=true;S.reports.push({id:a.id,at:now()});(g.skipped=g.skipped||[]).push(a.id);save();renderPlay()}})};
  const hb=$("hereBtn");if(hb)hb.onclick=()=>{const v=byId(g.target),far=here?dist(here,v):null;
    if(g.noLoc){if(now()<hereAt(g)){toast("Check-in opens once estimated arrival time elapses.",2600);return}buzz(30);logArrival(true);return}   // playing without location: the tap is the check-in
    sheet(`<h3>At ${esc(v.name)}?</h3><p class="note">${far!=null&&far>800?`Your phone last placed you ${mOrKm(far)} away, but GPS can be off.`:"Your location isn't coming through properly, so you can log the visit yourself."} Only tap this if you're actually there.</p><div class="acts"><button class="btn" type="button" id="hY">Yes, log my visit</button><button class="btn dark" type="button" id="hN">Not yet</button></div>`,()=>{$("hN").onclick=closeSheet;$("hY").onclick=()=>{closeSheet();logArrival(true)}})};
  const gn=$("gpsNote");
  if(S.test||(G()&&(G().noLoc||G().demo)))gn.textContent="";   // the demo moves you itself: no GPS to wait for
  else if(locErr===1)gn.innerHTML=`<b style="color:var(--red)">Location is off.</b> Turn it back on so visits log automatically.`;
  else if(!here&&!(G()&&G().noLoc))gn.textContent="Finding you…";
  // The phone app tracks with the screen locked. Only a browser (or the app if background tracking failed to start) needs the app left open.
  else gn.textContent=g.target&&!(NATIVE&&bgWatch!==null)?"Keep the app open on the way so your visit logs the moment you arrive.":"";
}
// Lighter effects for phones that drop frames on a spin (no extra glow layers, fewer streaks and confetti). Decided by
// how the wheel actually ran here, not by the phone's age; two slow spins in a row switch it on.
function liteCheck(slowShare){const was=!!S.lite;S.liteHits=slowShare>.15?(S.liteHits||0)+1:0;if(S.liteHits>=1)S.lite=true;if(!!S.lite!==was){save();document.body.classList.toggle("lite",!!S.lite)}}
document.body.classList.toggle("lite",!!S.lite);
function confetti(host,n){if(S.lite&&n==null)n=20;
  const app=host||$("app"),cols=["#F5B83D","#F4F1EA","#4ADE80","#FFD27A"];
  for(let i=0;i<(n||46);i++){const p=document.createElement("i");p.className="cf";p.style.left=(Math.random()*100)+"%";p.style.background=cols[i%4];p.style.animationDelay=(Math.random()*.25)+"s";p.style.setProperty("--x",(Math.random()*160-80)+"px");p.style.setProperty("--r",(Math.random()*720-360)+"deg");app.appendChild(p);setTimeout(()=>p.remove(),1900)}
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
// ---------- Wildcard packs ----------
// Paid packs join the free deck. Cards are keyed by their rule text, like the free ones, so live crawls,
// Dealer's choice and the recent-cards list all keep working. Sealed cards show only their name on the way
// and open when you get to the bar. Spin cards open with a Spin button that rolls their options on the wheel.
Object.assign(WIC,{spin:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="2"/><path d="M12 3.5v6.5M12 14v6.5M3.5 12H10M14 12h6.5"/>',
 music:'<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
 phone:'<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
 search:'<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/>',
 build:'<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/>',
 walk:'<circle cx="13" cy="4.5" r="1.8"/><path d="M10 21l2-6 3 3v3M8 12l2-4 4 1 2 3M12 15l-1-5"/>',
 drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
 letter:'<path d="M5 20L11 4h2l6 16M7.5 14h9"/>',
 swap:'<path d="M7 4L3 8l4 4"/><path d="M3 8h14"/><path d="M17 12l4 4-4 4"/><path d="M21 16H7"/>',
 coupe:'<path d="M4 5h16c0 4-3.5 7-8 7s-8-3-8-7z"/><path d="M12 12v7M8 20h8"/>',
 bottle:'<path d="M10 2.5h4V7l1.5 2.5V20a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 8.5 20V9.5L10 7z"/><path d="M8.5 13h7"/>',
 bubbles:'<circle cx="8.5" cy="15.5" r="3.5"/><circle cx="15.5" cy="8.5" r="4"/><circle cx="17" cy="18" r="1.8"/><circle cx="7" cy="6.5" r="1.5"/>',
 citrus:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="5.5"/><path d="M12 6.5v11M6.5 12h11M8.1 8.1l7.8 7.8M15.9 8.1l-7.8 7.8"/>',
 bell:'<path d="M5 17a7 7 0 0 1 14 0z"/><path d="M3 20h18M12 10V7.5M10 7.5h4"/>',
 globe:'<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.5 3.5 5.4 3.5 8.5s-1.1 6-3.5 8.5c-2.4-2.5-3.5-5.4-3.5-8.5s1.1-6 3.5-8.5z"/>',
 book:'<path d="M12 6.5C10 5 7 4.5 4 5v13.5c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5V5c-3-.5-6 0-8 1.5z"/><path d="M12 6.5V20"/>',
 repeat:'<path d="M17 3l3 3-3 3"/><path d="M4 11V9.5A3.5 3.5 0 0 1 7.5 6H20"/><path d="M7 21l-3-3 3-3"/><path d="M20 13v1.5a3.5 3.5 0 0 1-3.5 3.5H4"/>',
 shaker:'<path d="M7.5 9h9L15 21H9z"/><path d="M8.5 9V7a3.5 3.5 0 0 1 7 0v2"/><path d="M11 3h2"/>',
 house:'<path d="M3.5 11L12 4l8.5 7"/><path d="M5.5 9.5V20h13V9.5"/><path d="M10 20v-5h4v5"/>',
 dspin:'<circle cx="8" cy="12" r="6.5"/><circle cx="16" cy="12" r="6.5"/><path d="M8 7.5v9M3.5 12h9"/>'});
const DRINK_SAY=["a spritz","a martini","a margarita","a beer","a glass of wine","a negroni","a mojito","an espresso martini"];
const SPIN_DRINKS=["Spritz","Martini","Margarita","Beer","Wine","Negroni","Mojito","Espresso martini"];
const PACKS=[
 {id:"house",name:"House Rules",logo:"house",line:"Wildcards that hit the whole group.",prev:[0,1,6],cards:[
  {n:"Every colour",ic:"drop",t:"Everyone orders a different colour drink."},
  {n:"First letter",ic:"letter",t:"Everyone orders a drink starting with the first letter of their name."},
  {n:"Outfit match",ic:"shirt",t:"Everyone orders a drink that matches their outfit."},
  {n:"Odd glass",ic:"coupe",t:"Every drink comes in a different glass."},
  {n:"Last glass",ic:"two",t:"Last glass up at the cheers drinks."},
  {n:"Walk time",ic:"walk",t:"Everyone guesses the walk to the next rooftop. Furthest off drinks.",walk:1},
  {n:"Drink spin",ic:"spin",t:"At the rooftop, spin for what everyone orders.",seal:1,spin:SPIN_DRINKS,lead:"Everyone orders",say:DRINK_SAY},
  {n:"Swap spin",ic:"swap",t:"Once the drinks land, spin: left, right or keep.",seal:1,spin:["Swap left","Swap right","Keep"],lead:"Once the drinks land, everyone",say:["passes their drink left","passes their drink right","keeps their own"]},
  {n:"Now playing",ic:"music",t:"Agree on one drink for the song playing as you walk in. Everyone orders it."},
  {n:"Level up",ic:"build",t:"Count the floor number through the alphabet. Order a drink starting with that letter."},
  {n:"Last search",ic:"search",t:"Read out your last Google search. The group picks a drink to match it."},
  {n:"Lock screen",ic:"phone",t:"Order a drink that matches your lock screen."}]},
 {id:"spin",name:"Double Spin",logo:"dspin",line:"Wildcards that hit the whole group.",prev:[0,9,6],cards:[
  {n:"Spirit spin",ic:"bottle",t:"Everyone orders something with the spirit it lands on.",spin:["Gin","Vodka","Tequila","Rum","Whisky","Mezcal"],lead:"Everyone orders something with"},
  {n:"Colour spin",ic:"drop",t:"Everyone orders that colour.",spin:["Red","Orange","Yellow","Green","Blue","Pink","Clear"],lead:"Everyone orders something"},
  {n:"Flavour spin",ic:"bubbles",t:"Sweet, sour, bitter or fizzy. Everyone orders to match.",spin:["Sweet","Sour","Bitter","Fizzy"],lead:"Everyone orders something"},
  {n:"Glass spin",ic:"coupe",t:"Everyone orders something served in that glass.",spin:["Martini glass","Coupe","Highball","Rocks glass","Wine glass","Flute"],lead:"Everyone orders something served in a"},
  {n:"Fruit spin",ic:"citrus",t:"Everyone orders something with that fruit in it.",spin:["Lime","Lemon","Orange","Pineapple","Berries","Passionfruit","Watermelon"],lead:"Everyone orders something with"},
  {n:"Order spin",ic:"bell",t:"Bartender's choice, a stranger's pick, or the next table's drink.",spin:["Bartender's choice","A stranger's pick","The next table's drink"],lead:"Everyone orders",say:["whatever the bartender picks","whatever a stranger picks","whatever the next table's drinking"]},
  {n:"Shot spin",ic:"shot",t:"Shots all round, half of you, or one of you.",spin:["Everyone","Half of you","One of you"],lead:"Shots for",say:["everyone","half of you","one of you"]},
  {n:"Passport spin",ic:"globe",t:"Spin for a country. Everyone orders a drink from it.",spin:["Mexico","Italy","Cuba","Japan","Brazil","Ireland","France"],lead:"Everyone orders a drink from",keep:1},
  {n:"Your spin",ic:"phone",t:"Pass the phone. Everyone spins for their own drink.",spin:SPIN_DRINKS,multi:1,lead:"Pass the phone. Everyone spins for their own drink."},
  {n:"Story spin",ic:"book",t:"Your first drink, your holiday drink or your guilty pleasure. Everyone orders their own answer.",spin:["First drink","Holiday drink","Guilty pleasure"],lead:"Everyone orders their",say:["first ever drink","go-to holiday drink","guilty pleasure drink"]},
  {n:"Usual spin",ic:"repeat",t:"Your usual, the opposite of your usual, or something you've never tried.",spin:["Your usual","The opposite","Never tried"],lead:"Everyone orders",say:["their usual","the opposite of their usual","something they've never tried"]},
  {n:"Bartender spin",ic:"shaker",t:"Ask for their favourite to make, their most popular, the newest on the menu, or the one they hate making.",spin:["Their favourite","Most popular","Newest one","One they hate"],lead:"Ask the bartender for",say:["their favourite to make","their most popular drink","the newest drink on the menu","the one they hate making"]}]}];
const WMETA={};PACKS.forEach(p=>p.cards.forEach(c=>{c.p=p.id;WMETA[c.t]=c;WNAME[c.t]=[c.n,c.ic]}));
const ALLW=WILDS.concat(...PACKS.map(p=>p.cards.map(c=>c.t)));   // free deck first, so the recent-cards list keeps its numbers
const packById=id=>PACKS.find(p=>p.id===id);
// Spin cards: the card shows how the sentence starts, the wheel finishes it. Rules stay keyed by t (played list, live crawls).
const wLead=m=>m&&m.lead?(m.multi?m.lead:m.lead+"…"):m?m.t:"";
const wSay=(m,r)=>{const i=m.spin?m.spin.indexOf(r):-1;if(i<0)return r;if(m.say)return m.say[i];return m.keep?r:r.charAt(0).toLowerCase()+r.slice(1)};
const wFull=(m,res)=>m.multi?m.lead+" "+res.join(", "):m.lead+" "+wSay(m,res[res.length-1])+".";
const wFill=(m,res)=>m.multi?res.join(" · "):"…"+wSay(m,res[res.length-1])+".";
// each deck's own mark: on its row, its pack and the cards you haven't landed yet
const deckLogo=id=>{const p=packById(id);return p&&p.logo?`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${WIC[p.logo]}</svg>`:I.sparkle};
// test mode keeps its own pretend purchases, so locked and owned can both be tried
// RR Dev loads the live site inside the app: packs unlock free there, kept apart from real purchases
const DEVAPP=NATIVE&&/(^|\.)rooftoproulette\.com$/.test(location.hostname);
const packStore=()=>S.test?(S.tpacks=S.tpacks||{}):DEVAPP?(S.dpacks=S.dpacks||{}):(S.packs=S.packs||{});
const packOwned=id=>!!packStore()[id];
const packOn=id=>packOwned(id)&&!(S.packOff||{})[id];
const freeOn=()=>!S.freeOff||!PACKS.some(p=>packOn(p.id));
const deckIdx=()=>{const fo=freeOn();return ALLW.map((_,i)=>i).filter(i=>{const m=WMETA[ALLW[i]];return m?packOn(m.p):fo})};
const deckCards=()=>deckIdx().map(i=>ALLW[i]);
const BASE_DECK="Rooftop Originals";   // the deck everyone has, named like the packs
const deckLbl=()=>{const on=(freeOn()?[BASE_DECK]:[]).concat(PACKS.filter(p=>packOn(p.id)).map(p=>p.name));return on.length===1?on[0]:on.length+" decks"};
const wSealed=t=>!!(WMETA[t]&&WMETA[t].seal);
const wShort=t=>wSealed(t)?"Opens at the rooftop":WMETA[t]?wLead(WMETA[t]):t;   // what a card shows before it's opened (Dealer's choice, previews)
const wOpenNow=(g,w)=>!!(g&&w&&(g.visits||[]).some(v=>v.id===w.id&&v.arrivedAt!=null&&v.leftAt==null));
// The inside of a wildcard box: sealed on the way, the rule once you're there, then what the spin landed on
function wildInner(g,w,o){o=o||{};const m=WMETA[w.text];
  if(!m)return `${wFace(w.text)}<span><b>${esc(wNm(w.text))}</b>${esc(w.text)}${lastLine(w)}</span>`;
  const here=wOpenNow(g,w),open=!m.seal||here,ic=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${WIC[m.ic]||WIC.star}</svg>`;
  if(!open)return `${ic}<span><b>${esc(m.n)}</b>Opens at the rooftop</span>`;
  if(!o.follow&&g&&!g.demo)markPlayed(w.text);
  const res=(w.res||[]).length?(m.spin?`<span class="wfill">${esc(wFill(m,w.res))}</span>`:`<small class="wres">${w.res.map(esc).join(" · ")}</small>`):"";
  let walk="";if(m.walk&&here&&w.t0){const a=g.visits.find(v=>v.id===w.id&&v.leftAt==null);if(a&&a.arrivedAt>w.t0)walk=`<small class="wres">The walk took ${Math.max(1,Math.round((a.arrivedAt-w.t0)/60000))} min</small>`}
  // a spin card waiting to be spun: the whole card is the control, with one line saying so
  const btn=m.spin&&(here||!m.seal)&&!o.follow&&(m.multi||!(w.res||[]).length)?`<small class="wcap" data-wspin="1">${m.multi&&(w.res||[]).length?"Tap for the next person":"Tap to spin"}</small>`:"";
  return `${ic}<span><b>${esc(m.n)}</b>${esc(wLead(m))}${res}${walk}${lastLine(w)}${btn}</span>`}
const lastLine=w=>w&&w.last?`<small class="wres">Last new Rooftop Originals card</small>`:"";
function wildBox(g,w,cls,o){return `<div class="wild${cls||""}" data-t="${esc(w.text)}">${wildInner(g,w,o)}</div>`}
// Test mode keeps its own wildcard record (played cards, deck order, recent cards, jackpot) so test crawls never touch the real ones
const WK=k=>S.test?"t"+k:k;
const WP=()=>S[WK("wplayed")]||(S[WK("wplayed")]={});
const markPlayed=t=>{if(!t||ALLW.indexOf(t)<0)return;WP()[t]=1};
// the wheel for a spin card. trial: a preview from the pack sheet, nothing is kept
function wildSpin(t,trial,back){const m=WMETA[t];if(!m||!m.spin)return;const g=G();
  const draw=()=>{const w=g&&g.wild&&g.wild.text===t?g.wild:null,done=w&&(w.res||[]);
    sheet(`<h3>${esc(m.n)}</h3><p class="note">${esc(wLead(m))}</p><div class="demo wsdemo"><div id="wsBox"><div id="wsReel" class="demoreel"></div></div></div><div id="wsOut"></div>`,()=>{
      const box=$("wsBox");box.addEventListener("touchstart",e=>e.stopPropagation(),{passive:true});
      const R=makeReel($("wsReel"),m.spin,{hint:true,onRelease:vel=>{if(R.busy)return false;go_(vel)}});
      const go_=vel=>{const pick=m.spin[Math.floor(Math.random()*m.spin.length)];
        R.spinTo(pick,vel===undefined?-(30+Math.random()*20):vel,()=>{buzz(20);box.innerHTML=`<div class="wsres">${esc(pick)}</div>`;
          if(!trial&&G()&&G().wild&&G().wild.text===t){const ww=G().wild;ww.res=m.multi?(ww.res||[]).concat([pick]):[pick];save();if(S.route==="play")renderPlay()}
          const more=m.multi||trial;
          $("wsOut").innerHTML=`${m.multi?"":`<p class="wsfull">${esc(m.lead)} <span>${esc(wSay(m,pick))}.</span></p>`}<div class="acts">${more?`<button class="btn" type="button" id="wsAgain">${trial?"Spin again":"Next person"}</button>`:""}<button class="btn ${more?"line":""}" type="button" id="wsDone">${trial&&back?"Back to the deck":"Done"}</button></div>`;
          if($("wsAgain"))$("wsAgain").onclick=draw;$("wsDone").onclick=()=>{if(trial&&back)back();else closeSheet()}})};
      $("wsOut").innerHTML=`<button class="btn" type="button" id="wsGo">Spin the wildcard</button>`;$("wsGo").onclick=()=>{$("wsOut").innerHTML="";go_()};
    })};
  draw()}
// What's in play: the free deck, packs you own (switch them on or off) and packs you could add
function packsSheet(mid){const g=G();
  const row=p=>packOwned(p.id)?`<button class="toggle pkrow" type="button" role="switch" data-pkt="${p.id}" aria-checked="${packOn(p.id)}"><span class="t"><b>${esc(p.name)}</b><small>${p.cards.length} wildcards · See the cards ›</small></span><span class="sw"></span></button>`
    :`<button class="opt pkrow" type="button" data-pk="${p.id}"><span class="ic">${I.sparkle}</span><span class="t"><b>${esc(p.name)}</b><small>${p.cards.length} wildcards · Preview</small></span><span class="chev">›</span></button>`;
  sheet(`<h3>Wildcards</h3><div class="pklist"><div class="toggle pkrow pkfree" aria-disabled="true"><span class="t"><b>${BASE_DECK}</b><small>${WILDS.length} wildcards · Always in</small></span></div>${PACKS.map(row).join("")}</div>${canBuy()?`<button class="txtbtn wmore" type="button" id="pkRestore">Restore purchases</button>`:""}`,()=>{
    if($("pkRestore"))$("pkRestore").onclick=()=>restorePacks().then(()=>packsSheet(mid));
    if(canBuy())rcInit();
    document.querySelectorAll("[data-pkt]").forEach(b=>b.onclick=e=>{const id=b.dataset.pkt;
      if(!e.target.closest(".sw")){packSheet(id,()=>packsSheet(mid));return}
      S.packOff=S.packOff||{};S.packOff[id]=!S.packOff[id];if(!S.packOff[id])delete S.packOff[id];if(g)g.wdeck=null;save();b.setAttribute("aria-checked",String(packOn(id)));refreshDeckLbl()});
    document.querySelectorAll("[data-pk]").forEach(b=>b.onclick=()=>packSheet(b.dataset.pk,()=>packsSheet(mid)));
  })}
function refreshDeckLbl(){const c=$("wDeck");if(c&&c.querySelector("b"))c.querySelector("b").textContent=deckLbl();const d=document.querySelector('[data-mx="deck"]');if(d&&typeof mixDeckLbl==="function")d.innerHTML=mixDeckLbl()+MIX_CV}
function packSheet(id,back){const p=packById(id);if(!p)return;const own=packOwned(id),g=G();
  const face=c=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${WIC[c.ic]||WIC.star}</svg>`;
  if(!own){const pv=p.prev.map(i=>p.cards[i]),rest=p.cards.length-pv.length;
    sheet(`<h3>${esc(p.name)}</h3><p class="note">${esc(p.line)}</p>
      <div class="pkprev">${pv.map((c,k)=>`<div class="wild wexplain">${face(c)}<span><b>${esc(c.n)}</b>${esc(wLead(c))}${c.spin&&k===0?`<button class="btn sm line wspin" type="button" id="pkTry">Try a spin</button>`:""}</span></div>`).join("")}
      <div class="pkbacks">${Array.from({length:rest},()=>`<span class="pkback">${deckLogo(id)}</span>`).join("")}</div></div>
      <p class="note pkgroup">Your whole group plays it.</p>
      <div class="acts"><button class="btn" type="button" id="pkBuy"${S.test||DEVAPP||canBuy()?"":" disabled"}>${S.test?"Unlock (test mode)":DEVAPP?"Unlock (RR Dev)":canBuy()?(rcPrice[PK_PRODUCT[id]]?"Get it · "+esc(rcPrice[PK_PRODUCT[id]]):"Get it"):NATIVE?"Coming soon":"In the app"}</button>${back?`<button class="btn line" type="button" id="pkBack">Back</button>`:""}</div>`,()=>{
      if(!S.test&&canBuy()&&!rcPrice[PK_PRODUCT[id]])rcInit().then(()=>{const b=$("pkBuy"),pr=rcPrice[PK_PRODUCT[id]];if(b&&pr&&!b.disabled)b.textContent="Get it · "+pr});
      if(!S.test&&canBuy())$("pkBuy").onclick=async()=>{const b=$("pkBuy");b.disabled=true;
        try{if(await buyPack(id)){packToPile(id);if(g)g.wdeck=null;track("pack_buy",{pack:id});refreshDeckLbl();afterBuy(id,back);return}}
        catch(e){const c=e&&(e.userCancelled||e.code==="1"||/cancel/i.test(e.message||""));if(!c)toast("Couldn't finish that. You haven't been charged.",2600)}
        b.disabled=false};
      if($("pkTry"))$("pkTry").onclick=()=>wildSpin(pv[0].t,true,()=>packSheet(id,back));
      if(S.test||DEVAPP)$("pkBuy").onclick=()=>{packStore()[id]=true;packToPile(id);if(g)g.wdeck=null;save();track("pack_unlock",{pack:id});refreshDeckLbl();afterBuy(id,back)};
      if($("pkBack"))$("pkBack").onclick=back});
    return}
  const pl=WP(),n=p.cards.filter(c=>pl[c.t]).length;
  sheet(`<h3>${esc(p.name)}</h3>
    <button class="toggle" type="button" role="switch" id="pkOn" aria-checked="${packOn(id)}"><span class="t"><b>In play</b><small>Mixed in with ${BASE_DECK}</small></span><span class="sw"></span></button>
    <div class="eyebrow pkcount">${n} of ${p.cards.length} played</div>
    <div class="pkcards">${p.cards.map(c=>`<div class="wild wexplain pkc${pl[c.t]?"":" unseen"}">${face(c)}<span><b>${esc(c.n)}</b>${pl[c.t]?esc(wLead(c)):"Play it to see the rule"}</span></div>`).join("")}</div>
    <div class="acts">${back?`<button class="btn line" type="button" id="pkBack">Back</button>`:""}${S.test?`<button class="txtbtn" type="button" id="pkLock">Lock again (test mode)</button>`:""}</div>`,()=>{
    $("pkOn").onclick=()=>{S.packOff=S.packOff||{};S.packOff[id]=!S.packOff[id];if(!S.packOff[id])delete S.packOff[id];if(g)g.wdeck=null;save();$("pkOn").setAttribute("aria-checked",String(packOn(id)));refreshDeckLbl()};
    if($("pkBack"))$("pkBack").onclick=back;
    if($("pkLock"))$("pkLock").onclick=()=>{delete packStore()[id];if(g)g.wdeck=null;save();refreshDeckLbl();packSheet(id,back)}})}
// ---------- Purchases: RevenueCat in the store apps, pretend unlocks in test mode ----------
// Product IDs are the same in App Store Connect and Play Console. Entitlement IDs in RevenueCat match the pack ids.
const PK_PRODUCT={house:"house_rules",spin:"double_spin"};
const RCP=()=>{try{return window.Capacitor&&Capacitor.Plugins&&Capacitor.Plugins.Purchases}catch(e){return null}};
const RCK=()=>{try{const p=Capacitor.getPlatform();return (p==="ios"?AN.revenuecatIosKey:p==="android"?AN.revenuecatAndroidKey:"")||""}catch(e){return ""}};
const canBuy=()=>!!(NATIVE&&!DEVAPP&&RCK()&&RCP());
let rcOn=null,rcUser=null;const rcPrice={};
function rcInit(){if(rcOn)return rcOn;rcOn=(async()=>{if(!canBuy())return null;const P=RCP();
  await P.configure({apiKey:RCK()});
  try{const r=await P.getProducts({productIdentifiers:Object.values(PK_PRODUCT),type:"NON_SUBSCRIPTION"});(r.products||[]).forEach(p=>rcPrice[p.identifier]=p.priceString)}catch(e){}
  await rcSync(P);return P})().catch(e=>{rcOn=null;return null});return rcOn}
// signed in: purchases follow the account onto any phone. Signed out: they stay with the Apple or Google account
async function rcSync(P){P=P||RCP();if(!P)return;try{const uid=typeof ME!=="undefined"&&ME&&!ME.anon?ME.uid:null;
  if(uid&&uid!==rcUser){const r=await P.logIn({appUserID:uid});rcUser=uid;rcApply(r.customerInfo);return}
  const {customerInfo}=await P.getCustomerInfo();rcApply(customerInfo)}catch(e){}}
function rcApply(ci){if(!ci)return;const act=(ci.entitlements&&ci.entitlements.active)||{},bought=ci.allPurchasedProductIdentifiers||[];let ch=false;
  PACKS.forEach(p=>{if((act[p.id]||bought.includes(PK_PRODUCT[p.id]))&&!(S.packs||{})[p.id]){(S.packs=S.packs||{})[p.id]=true;ch=true}});
  if(ch){save();refreshDeckLbl();if(S.route==="hist")renderHist()}}
async function buyPack(id){const P=await rcInit();if(!P)throw new Error("store");
  const r=await P.getProducts({productIdentifiers:[PK_PRODUCT[id]],type:"NON_SUBSCRIPTION"}),prod=(r.products||[])[0];if(!prod)throw new Error("product");
  const res=await P.purchaseStoreProduct({product:prod});rcApply(res.customerInfo);return packOwned(id)}
async function restorePacks(){const P=await rcInit();if(!P)return;
  try{const {customerInfo}=await P.restorePurchases();rcApply(customerInfo);const n=PACKS.filter(p=>packOwned(p.id)).length;toast(n?`Restored ${n} deck${n===1?"":"s"}`:"No decks to restore",2200)}catch(e){toast("Couldn't reach the store. Try again soon.",2400)}}
if(NATIVE)setTimeout(()=>rcInit(),2500);
// ---------- The deck ----------
// Cards you haven't had yet come first, across crawls. With more than one deck on, the decks take turns in a random order
// (every round deals each deck once, shuffled), so they're dealt evenly and at random. A deck that's run out of new cards
// sits out until every deck has, then all start over. Never the same card twice in one crawl.
const freePlayed=()=>WILDS.filter(t=>WP()[t]).length;
const markDeal=t=>{if(!t)return;if(!WMETA[t]||!WMETA[t].seal)markPlayed(t)};
const dkOf=i=>{const m=WMETA[ALLW[i]];return m?m.p:"free"};
function drawWild(ex){ex=(ex||[]).map(e=>e&&e.t||e);const pl=WP(),by={};deckIdx().forEach(i=>{(by[dkOf(i)]=by[dkOf(i)]||[]).push(i)});
  const ks=Object.keys(by);if(!ks.length)return 0;
  const fresh=k=>by[k].filter(i=>!pl[ALLW[i]]&&!ex.includes(ALLW[i]));
  let cand=ks.filter(k=>fresh(k).length);if(!cand.length)cand=ks;
  const bk=WK("wbag");let bag=(S[bk]||[]).filter(k=>cand.includes(k));if(!bag.length)bag=shuffle(cand.slice());
  const k=bag.shift();S[bk]=bag;
  let pool=fresh(k);
  if(!pool.length){const seen=S[WK("wseen")]||[],notEx=by[k].filter(i=>!ex.includes(ALLW[i]));pool=notEx.filter(i=>!seen.includes(i));if(!pool.length)pool=notEx;if(!pool.length)pool=by[k]}
  return pool[Math.floor(Math.random()*pool.length)]}
function packToPile(){S[WK("wbag")]=[]}   // a new deck joins the turns straight away
// One-off: test crawls used to mark cards played on the real deck. Rebuild the real record from real crawls only
// (every card a crawl logged, or for older crawls the cards they kept), and give the old mixed record to test mode.
(()=>{try{if(S.wfix1)return;const real={},add=t=>{if(t&&ALLW.indexOf(t)>=0)real[t]=1};
  readH(HKEY).filter(r=>!r.test).forEach(r=>{(r.wlog||[]).forEach(e=>add(e&&e.t||e));add(r.lastWild);if(r.wild)add(r.wild.text);if(r.dealt)add(r.dealt.text)});
  const g=S.game;if(g&&!g.test&&!g.demo&&!g.follow){(g.wlog||[]).forEach(e=>add(e&&e.t||e));add(g.lastWild);if(g.wild)add(g.wild.text)}
  if(!S.twplayed)S.twplayed=Object.assign({},S.wplayed||{});
  S.wplayed=real;delete S.wpile;S.wbag=[];S.twbag=[];S.wfinished=WILDS.every(t=>real[t]);S.wfix1=1;save()}catch(e){}})();
// My Tab: under the headline stats
function deckCardHTML(){const pl=WP(),own=PACKS.filter(p=>packOwned(p.id)),cards=WILDS.concat(...own.map(p=>p.cards.map(c=>c.t))),n=cards.filter(t=>pl[t]).length,tot=cards.length,done=n>=tot;
  return `<button class="deckcard" type="button" id="hDeck"><span class="dk-l"><small>Wildcards</small><b>${done?(own.length?"All decks":BASE_DECK)+" · Complete":n+" of "+tot+" played"}</b>${done?"":`<span class="dk-bar"><i style="width:${Math.round(n/tot*100)}%"></i></span>`}</span><span class="dk-fan">${[0,1,2].map(()=>`<span class="dk-back">${I.sparkle}</span>`).join("")}</span><span class="chev">›</span></button>`}
const PACK_PITCH={house:"Rules that hit the whole table",spin:"A second spin decides the round"};
// The deck screen: your free deck, then the packs and what each one adds
function wFace(t){const ic=WMETA[t]?WMETA[t].ic:(WNAME[t]||["Wildcard","star"])[1];return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${WIC[ic]||WIC.star}</svg>`}
const wNm=t=>WMETA[t]?WMETA[t].n:(WNAME[t]||["Wildcard"])[0];
// Every time a card came up on a crawl, with the rooftop and day. Crawls log each card; older ones only kept their last card,
// placed at the rooftop it was dealt for.
function wWhere(t){const out=[],L=H.slice(),g=S.game;if(g&&!g.demo&&!g.follow)L.unshift(g);
  L.forEach(r=>{const log=(r.wlog||[]).filter(e=>e&&typeof e==="object");
    if(log.length){log.forEach(e=>{if(e.t===t)out.push({id:e.id,at:e.at||r.startedAt})});return}
    if(r.lastWild!==t)return;let id=r.wild&&r.wild.text===t?r.wild.id:null;
    if(!id&&(r.wplan||[]).length){const leg=Math.max(...r.wplan.filter(x=>x<(r.visits||[]).length));if(leg>=0&&r.visits[leg])id=r.visits[leg].id}
    out.push({id,at:r.startedAt})});
  return out.sort((a,b)=>b.at-a.at)}
// The Wildcards screen: one row per deck, like a phone's settings list. Switch it on or off on the right, tap the row to see its cards.
// Wildcards: a pop-up laid out like Settings (grouped rows, a deck's switch behind a short line, no buttons at the bottom).
// Opening a deck swaps the pop-up to that deck, with a back arrow by its name; a card opens the same way from there.
function shBack(id,title){return `<div class="shback"><button class="spback" type="button" id="${id}" aria-label="Back">${I.back}</button><h3>${title}</h3></div>`}
function deckSheet(back){if(typeof back!=="function")back=null;
  const toAdd=PACKS.filter(p=>!packOwned(p.id)),owned=PACKS.filter(p=>packOwned(p.id));
  const pack=p=>`<button class="strow dkp" type="button" data-dp="${p.id}"><span class="dk-ic">${deckLogo(p.id)}</span><span class="t"><b>${esc(p.name)}</b><small>${esc(PACK_PITCH[p.id]||p.line)}</small></span><span class="sval">${canBuy()&&rcPrice[PK_PRODUCT[p.id]]?esc(rcPrice[PK_PRODUCT[p.id]]):"Preview"}</span><i class="chev">›</i></button>`;
  sheet(`${back?shBack("dsBack","Wildcards"):"<h3>Wildcards</h3>"}
    <div class="sgh first">${owned.length?"Your decks":"Your deck"}</div>${deckSwHTML()}
    ${toAdd.length?`<div class="sgh">More wildcard decks</div><div class="sgrp">${toAdd.map(pack).join("")}</div>`:""}
    ${canBuy()?`<div class="sgh">Purchases</div><div class="sgrp"><button class="strow" type="button" id="dkRestore"><span class="t"><b>Restore purchases</b></span><i class="chev">›</i></button></div>`:""}`,()=>{
    const me=()=>deckSheet(back);if($("dsBack"))$("dsBack").onclick=back;
    $("sheetBody").querySelectorAll("[data-dp]").forEach(b=>b.onclick=()=>packSheet(b.dataset.dp,me));
    bindDeckSw($("sheetBody"),null,me);
    if($("dkRestore"))$("dkRestore").onclick=()=>restorePacks().then(me);
    if(canBuy()&&PACKS.some(p=>!rcPrice[PK_PRODUCT[p.id]]))rcInit().then(()=>{if(PACKS.some(p=>rcPrice[PK_PRODUCT[p.id]])&&$("sheet").open&&$("sheetBody").querySelector(".dkp"))me()})})}
const deckCardsOf=id=>id==="free"?WILDS:packById(id).cards.map(c=>c.t);
const deckName=id=>id==="free"?BASE_DECK:packById(id).name;
// one deck opened up: played cards face up, the rest face down with the deck's mark
function deckView(id,back){const pl=WP(),ts=deckCardsOf(id),k=ts.filter(t=>pl[t]).length,face=wFace;
  const mini=t=>pl[t]?`<button class="dk-card up" type="button" data-dt="${esc(t)}">${face(t)}<span>${esc(wNm(t))}</span></button>`:`<span class="dk-card down">${deckLogo(id)}</span>`;
  sheet(`${back?shBack("dvBack",esc(deckName(id))):`<h3>${esc(deckName(id))}</h3>`}
    <div class="dk-head"><span class="sgh">Cards</span><span class="dk-n">${k>=ts.length?"Complete":k+" of "+ts.length+" played"}</span></div>${k>=ts.length?"":`<div class="dk-bar wide"><i style="width:${Math.round(k/ts.length*100)}%"></i></div>`}
    <div class="dk-grid">${ts.map(mini).join("")}</div>`,()=>{
    if($("dvBack"))$("dvBack").onclick=back;
    $("sheetBody").querySelectorAll("[data-dt]").forEach(b=>b.onclick=()=>cardSheet(b.dataset.dt,()=>deckView(id,back),deckName(id)))})}
// a card's details: the card itself (its mark and name, as it's dealt) with the rule beside it, then where it was played
function cardSheet(t,back,title){const m=WMETA[t],wh=wWhere(t),rule=m?(m.lead?m.t:wLead(m)):t;   // spin cards: the whole rule, not the half-sentence the spin finishes
  sheet(`${back?shBack("cdBack",esc(title||"")):""}<div class="wcd"><div class="wcd-card">${wFace(t)}<b>${esc(wNm(t))}</b></div><div class="wcd-t"><p class="wcd-r">${esc(rule)}</p></div></div>
    ${wh.length?`<div class="sgh">Played</div><div class="wwhere">${wh.map(x=>{const v=x.id&&byId(x.id);return `<div><b>${esc(v?v.name:"Rooftop not recorded")}</b><span>${esc(dateTxt(x.at))}</span></div>`}).join("")}</div>`:""}`,()=>{if($("cdBack"))$("cdBack").onclick=back})}
// your decks as rows: the deck's mark, name and how much you've played; a switch on the right once you own a pack
function deckSwHTML(){const pl=WP(),own=anyOwned();
  const row=(k,on)=>{const ts=deckCardsOf(k),n=ts.filter(t=>pl[t]).length;
    return `<div class="dkr${own&&on?" on":""}"><button class="strow dk-open" type="button" data-dv="${k}"><span class="dk-ic">${deckLogo(k)}</span><span class="t"><b>${esc(deckName(k))}</b><small>${n>=ts.length?"Complete":n+" of "+ts.length+" played"}</small></span>${own?"":`<i class="chev">›</i>`}</button>${own?`<button class="dk-sw" type="button" role="switch" data-dk="${k}" aria-checked="${on}" aria-label="${esc(deckName(k))} in play"><span class="sw"></span></button>`:""}</div>`};
  return `<div class="sgrp dk-on">${row("free",freeOn())}${PACKS.filter(p=>packOwned(p.id)).map(p=>row(p.id,packOn(p.id))).join("")}</div>`}
function bindDeckSw(root,after,back){root.querySelectorAll("[data-dv]").forEach(b=>b.onclick=()=>deckView(b.dataset.dv,back));
  root.querySelectorAll("[data-dk]").forEach(b=>b.onclick=()=>{const k=b.dataset.dk,on=b.getAttribute("aria-checked")==="true";
  if(on&&root.querySelectorAll('[data-dk][aria-checked="true"]').length<2){toast("Keep one deck on",1600);return}
  if(k==="free"){if(on)S.freeOff=true;else delete S.freeOff}else{S.packOff=S.packOff||{};if(on)S.packOff[k]=true;else delete S.packOff[k]}
  const g=G();if(g)g.wdeck=null;save();b.setAttribute("aria-checked",String(!on));const r=b.closest(".dk-row");if(r)r.classList.toggle("on",!on);refreshDeckLbl();after&&after()})}
const anyOwned=()=>PACKS.some(p=>packOwned(p.id));
// just bought a pack: play it on its own, or mix it in
function afterBuy(id,back){const p=packById(id),g=G();
  sheet(`<h3>${esc(p.name)} is in</h3><p class="note" style="margin:6px 0 14px">How do you want to play it?</p>
    <div class="acts"><button class="btn" type="button" id="abMix">With ${BASE_DECK}</button><button class="btn line" type="button" id="abOnly">Only this deck</button></div>`,()=>{
    $("abMix").onclick=()=>{delete S.freeOff;if(S.packOff)delete S.packOff[id];if(g)g.wdeck=null;save();refreshDeckLbl();packSheet(id,back)};
    $("abOnly").onclick=()=>{S.freeOff=true;S.packOff={};PACKS.forEach(q=>{if(q.id!==id)S.packOff[q.id]=true});if(g)g.wdeck=null;save();refreshDeckLbl();packSheet(id,back)}})}
// the day after, on the recap: where your deck's at, once per crawl
function recapDeck(r){if(r.demo||r.deckAsked||!H.length)return "";const n=freePlayed(),tot=WILDS.length;if(n>=tot)return "";
  return `<button class="sinudge" type="button" id="rcDeck">${I.sparkle}<span><b>${"Wildcards: "+n+" of "+tot+" played"}</b><small>${(tot-n)+" you haven't had yet"}</small></span></button>`}
// My Tab: your packs, then the ones you could add
function tabPacksHTML(){return `<div class="eyebrow hsec">Wildcard decks</div><div class="recs">${PACKS.map(p=>{const own=packOwned(p.id),pl=WP(),n=p.cards.filter(c=>pl[c.t]).length;
  return `<button class="rec" type="button" data-tpk="${p.id}"><span class="t"><small>${own?(packOn(p.id)?"In play":"Switched off"):p.cards.length+" wildcards"}</small><span>${esc(p.name)}</span></span><b>${own?n+"/"+p.cards.length:"Preview"}</b><span class="chev">›</span></button>`}).join("")}</div>`}
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
  if(!g.demo&&g.dealt&&g.dealt.leg===leg){g.wild=g.dealt.text?{id,text:g.dealt.text,leg,t0:now()}:null;if(g.wild){g.lastWild=g.wild.text;g.wlog=(g.wlog||[]).concat([{t:g.wild.text,id,at:now()}]);markDeal(g.wild.text)}return}   // Dealer's choice
  if(!g.wplan)g.wplan=planWilds(g);
  // past the planned stretch (a big night), wildcards keep coming: never two in a row, and the longer it's been, the likelier
  const max=g.len===60?4:8;g.wlate=g.wlate||{};
  if(leg>max&&g.wlate[leg]===undefined){const last=Math.max(0,...g.wplan.filter(x=>x<leg)),dry=leg-last;   // bars since the last one
    g.wlate[leg]=dry>1&&Math.random()<Math.min(1,.3+.3*(dry-2));if(g.wlate[leg])g.wplan.push(leg)}
  if(!g.wplan.includes(leg)){g.wild=null;return}
  if(g.wild&&g.wild.leg===leg){g.wild.id=id;g.wild.t0=now();const e=(g.wlog||[]).filter(x=>x&&x.t===g.wild.text).pop();if(e&&typeof e==="object")e.id=id;return}   // re-spun: the same wildcard moves to the new bar
  if(g.demo){
    if(g.demoWildLeg==null)g.demoWildLeg=g.lastWild?-1:leg;
    if(leg!==g.demoWildLeg){g.wild={id,leg,locked:true,shown:true};return}
    if(g.lastWild){g.wild={id,leg,text:g.lastWild};return}
  }
  const before=freePlayed(),i=g.demo?shuffle(deckIdx())[0]:drawWild(g.wlog),w=ALLW[i];
  if(!g.demo){const sk=WK("wseen");S[sk]=[i].concat((S[sk]||[]).filter(x=>x!==i)).slice(0,8);g.wlog=(g.wlog||[]).concat([{t:w,id,at:now()}])}
  g.wild={id,text:w,leg,t0:now()};g.lastWild=w;if(w===PICK3)g.pick3=true;
  if(!g.demo){markDeal(w);if(before<WILDS.length&&freePlayed()>=WILDS.length&&!S[WK("wfinished")]){S[WK("wfinished")]=true;g.wild.last=true}}
}
function renderClock(){
  const g=G();if(!g)return;{const lt=$("lvT"),d=leaving();if(lt&&d)lt.textContent=mmss(now()-d.arrivedAt)}const r=remaining(),tot=g.len*60000;
  if(CR(g)){$("clock").className="clock cruise";$("tbar").hidden=true;
    // laid out like timed: R&R big where the clock goes, one short line under it. The zone and the pool are pills under that.
    {const ct=$("clockT"),h='R<i>&amp;</i>R';if(ct._h!==h){ct._h=h;ct.innerHTML=h}const el=$("clockL");if(el._h!=="pace"){el._h="pace";el.textContent="Your own pace"}}return}
  $("tbar").hidden=false;
  if(g.lastOrders&&now()>=g.endsAt){$("clockT").textContent=mmss(Math.max(0,g.lastOrders-now()));$("clock").className="clock red";$("tbar").className="tbar red";$("tbarI").style.width=Math.max(0,(g.lastOrders-now())/(LAST_ORDERS*60000)*100)+"%";$("clockL")._h=null;$("clockL").textContent="Last orders";return}
  $("clockT").textContent=mmss(r);
  if(!g.started){$("clock").className="clock";$("tbar").className="tbar";$("tbarI").style.width="100%";$("clockL")._h=null;$("clockL").textContent="Starts at first rooftop";return}
  const warn=r<=FINAL*60000&&r>10*60000,red=r<=10*60000;
  $("clock").className="clock"+(red?" red":warn?" warn":"");
  $("tbar").className="tbar"+(red?" red":warn?" warn":"");
  $("tbarI").style.width=Math.max(0,Math.min(100,r/tot*100))+"%";
  $("clockL")._h=null;$("clockL").textContent=r<=FINAL*60000?"Final stretch":"Left";
  if(frozen(g)){if(g.frz.start){$("clock").className="clock";$("tbar").className="tbar";$("tbarI").style.width="100%";$("clockL")._h=null;$("clockL").textContent="Starts at first rooftop"}else{$("clock").className="clock frozen";$("tbar").className="tbar frozen";$("clockL")._h=null;$("clockL").textContent=(g.frz.trip?"Free trip · ":"Frozen · ")+mmss(g.frz.until-now())}}
}

/* ---------- stats + scorecard ---------- */
// The bars in order, and the GPS trail from the first bar on (the walk in to the first bar isn't part of the crawl,
// and it often starts at home, so it's never drawn or shared).
function crawlPath(r,st){const stops=(st||stats(r)).arrived.map(v=>byId(v.id)).filter(Boolean);let tr=(r.trail||[]).map(p=>({lat:p[0],lng:p[1]}));
  if(stops.length&&tr.length){let bi=-1,bd=1e9;tr.forEach((p,i)=>{const d=dist(p,stops[0]);if(d<bd-1){bd=d;bi=i}});tr=bd<=250?tr.slice(bi):[]}
  return {stops,trail:tr}}
function stats(r){
  const arrived=r.visits.filter(v=>v.arrivedAt!=null),counted=arrived.filter(v=>v.counted===true);
  // the crawl runs from the first bar (that's when the clock starts): the walk in isn't counted or drawn
  const pts=arrived.map(v=>byId(v.id));let total=0,legs=[];
  for(let i=1;i<pts.length;i++){const d=dist(pts[i-1],pts[i])*1.3;total+=d;legs.push({to:arrived[i],d})}
  const longest=legs.slice().sort((a,b)=>b.d-a.d)[0];let quick=null;
  for(let i=1;i<arrived.length;i++){const p=arrived[i-1];if(p.leftAt!=null){const dt=arrived[i].arrivedAt-p.leftAt;if(dt>=0&&(!quick||dt<quick.ms))quick={ms:dt,from:p.id,to:arrived[i].id}}}
  return {arrived,counted,total,longest,quick,dur:(r.endedAt||r.endsAt)-(arrived.length?arrived[0].arrivedAt:r.startedAt),last:arrived[arrived.length-1]};
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
  if(st.last&&st.last.lastOrders)add("Last Orders",`Made it to ${nm(st.last.id)} after the clock ran out`);
  if(st.last&&!st.last.lastOrders&&!r.early&&!r.missed&&r.endsAt-st.last.arrivedAt<=3*60000)add("Down to the Wire",`Into ${nm(st.last.id)} with ${mmss(r.endsAt-st.last.arrivedAt)} to spare`);
  if(r.missed&&r.missed.m!=null&&r.missed.m<=300)add("So Close",`${nm(r.missed.id)} was ${mOrKm(r.missed.m)} away at zero`);
  if(st.quick&&st.quick.ms>=60000&&st.quick.ms<=6*60000)add("Pit Stop",`${nm(st.quick.from)} to ${nm(st.quick.to)} in ${hmm(st.quick.ms)}`);
  // a counted bar you were in and out of fast (not one the clock ran out at)
  const inOut=st.counted.filter(v=>v.leftAt&&(!r.endedAt||v.leftAt<r.endedAt-60000)&&v.leftAt-v.arrivedAt<10*60000).sort((a,b)=>(a.leftAt-a.arrivedAt)-(b.leftAt-b.arrivedAt))[0];
  // every bar quick, across the whole crawl (3+ bars; the one the clock ran out at doesn't count against you)
  const runV=st.counted.filter(v=>v.leftAt&&(!r.endedAt||v.leftAt<r.endedAt-60000));
  if(runV.length>=3&&runV.every(v=>v.leftAt-v.arrivedAt<15*60000))add("Clean Run",`${runV.length} rooftops, every one under 15 minutes`);
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
// The live crawl map, full screen from Play. No route line: the path is the reveal on the scorecard.
async function crawlMap(o){o=o||{};const g=G();if(!g)return;S.tips=S.tips||{};if(!S.tips.mapOpened){S.tips.mapOpened=1;S.tips.map2=1;save();const t_=document.querySelector(".maptip");if(t_)t_.remove();if($("pMap"))$("pMap").classList.remove("hasdot")}
  clearInactiveZoneSetup();closeSheet();document.querySelectorAll(".mapfull.crawlmf").forEach(x=>x.remove());
  const ov=document.createElement("div");ov.className="mapfull crawlmf";document.body.appendChild(ov);requestAnimationFrame(()=>ov.classList.add("on"));
  let m=null,gen=0;
  const drop=()=>{gen++;try{m&&m.remove()}catch(e){}m=null;if(rrMap){try{rrMap.remove()}catch(e){}rrMap=null}};
  const close=()=>{ov.classList.remove("on");setTimeout(()=>{drop();ov.remove()},220)};
  const freeNow=()=>g.started&&!CR(g)&&basePool().length<2;
  // like Uber or Google Maps: only round icon buttons float on the map; the words live in a card at the bottom
  const view=async()=>{drop();const my=gen,free=freeNow(),canMove=!CR(g)&&(free||!g.voluntaryUsed);
    const t0=now(),been0=g.visits.filter(v=>v.arrivedAt!=null).map(v=>v.id),left=CR(g)?0:playable(inCircle(g.center,g.radius),false).filter(v=>!(g.excluded||[]).includes(v.id)&&!been0.includes(v.id)&&openOK(v,t0)).length;
    ov.classList.remove("moving");
    const crOpen=CR(g)?cruiseSet(g).filter(v=>openOK(v,t0)&&!visited(v.id)).length:0,crZ=CR(g)?crZone(g):null;
    ov.innerHTML=`<div id="crawlMap"></div><button class="shv-x mf-x" type="button" aria-label="Close">${I.x}</button>${CR(g)?`<button class="mf-pill" type="button" id="cmMove">${I.move}Change zone</button><div class="mf-card"><span class="mf-ring" aria-hidden="true"></span><div class="t"><b>Spin zone</b><small>${crZ.a}${crZ.r?" · "+crZ.r:""} · ${crPoolLbl(g)} · ${crOpen} open</small></div></div>`:`${canMove?`<button class="mf-pill" type="button" id="cmMove">${I.move}Move zone</button>`:""}<div class="mf-card"><span class="mf-ring" aria-hidden="true"></span><div class="t"><b>Your zone</b><small>${esc(g.areas[g.areas.length-1]||nearestSuburb(g.center))} · ${kmTxt(g.radius)} · ${plural(left,"rooftop")} left</small>${canMove?"":`<small>Zone move used</small>`}</div></div>`}`;
    ov.querySelector(".mf-x").onclick=close;
    if($("cmMove"))$("cmMove").onclick=()=>CR(g)?crMove():move(free);
    const mm=await makeMap("crawlMap",{greedy:true});if(!mm)return;if(my!==gen||!ov.isConnected){try{mm.remove()}catch(e){}return}m=mm;
    const t=now(),been=g.visits.filter(v=>v.arrivedAt!=null).map(v=>v.id),inZ=CR(g)?cruiseSet(g):playable(inCircle(g.center,g.radius),false).filter(v=>!(g.excluded||[]).includes(v.id));
    const crz=CR(g)?crCircle(g):null;
    if(!CR(g))m.circle(g.center,g.radius);else if(crz)m.circle(crz,crz.r);
    inZ.filter(v=>!been.includes(v.id)&&v.id!==g.target).forEach(v=>m.pin(v,openOK(v,t)?"":"off",()=>barSheet(v)));
    been.map(byId).filter(Boolean).forEach(v=>m.pin(v,"seen",()=>barSheet(v)));
    if(g.target){const v=byId(g.target);if(v)m.pin(v,"big",()=>barSheet(v))}
    setMe(m);
    if(!CR(g))m.fitZone(g.center,g.radius,g.target?[byId(g.target)]:[],60);else if(crz)m.fitZone(crz,crz.r,g.target?[byId(g.target)]:[],60);else{const pts=inZ.concat(you()?[you()]:[]);if(pts.length)m.fitPts(pts,16,{top:80,left:30,right:30,bottom:60})}};
  // the same map, with the circle loose: drag the map under it, pinch or slide to make it bigger
  const move=free=>{drop();ov.classList.add("moving");
    const me=you()||fromPoint(),z={lat:g.center.lat,lng:g.center.lng,r:g.radius};
    const range0=g.len===60?{lo:.5,hi:1,ticks:[[.5,"500 m"],[.75,"750 m"],[1,"1 km"]]}:{lo:.5,hi:2,ticks:[[.5,"500 m"],[1,"1 km"],[2,"2 km"]]};
    // Once the clock's running the zone can move or grow, never shrink: a tighter circle late in a crawl only buys
    // shorter walks. (The last half hour already sticks to bars you can reach.)
    const lo=g.started?Math.max(range0.lo,Math.round(g.radius*20)/20):range0.lo,grow=lo<range0.hi-.01;
    const range=Object.assign({},range0,{lo:Math.min(lo,range0.hi),hi:Math.max(range0.hi,Math.min(lo,range0.hi)+.001),ticks:[[lo,kmTxt(lo)]].concat(range0.ticks.filter(([r])=>r>lo+.1)),fixed:!grow});
    if(z.r<range.lo)z.r=range.lo;
    zonePanel(ov,{range,title:o.pre?"Set your zone":free?"Your zone's run dry":"Move your zone",sub:o.pre?"":free?"Nothing's open here. This move's free.":"You get one move per crawl.",go:"Use this zone",back:o.move?(free?"Close":"Stay here"):"Cancel"});
    $("mvX").onclick=()=>{if(o.move)close();else view()};
    const pool=(zz,t)=>{const all=playable(inCircle(zz,zz.r),g.newOnly).filter(v=>!visited(v.id));return {all,open:all.filter(v=>openOK(v,t))}};
    let warned=false;
    rrZoneBind(z,me,()=>g.newOnly,(P,zz)=>{if(!$("mvNote"))return;const same=dist(zz,g.center)<300&&Math.abs(zz.r-g.radius)<.025;
      // How far is the walk? To the closest open bar in the new circle, not its middle: otherwise a circle parked
      // with its only bars on the edge nearest you would buy a free 20 minutes.
      const near=me&&P.open.length?Math.min(...P.open.map(v=>dist(me,v))):null,far=near!=null&&near>1500;
      $("mvNote").textContent=same?(range.fixed?"That's your zone now. Drag to move it.":"That's your zone now. Drag or resize it."):near==null?"":far?`Closest open rooftop there is ${km(near)} away. The clock waits till you reach your first rooftop (up to 20 minutes).`:`Closest open rooftop there is ${mOrKm(near)} away. The clock keeps running.`;
      const b=$("mvGo");b.disabled=same||P.open.length<2;b.textContent=!same&&P.open.length<2?"Not enough open here":"Use this zone";
      b.onclick=()=>{const name=nearestSuburb(zz);
        // before the clock starts it's still setup: change the zone, no move used, nothing logged
        if(o.pre){g.center={lat:zz.lat,lng:zz.lng};g.radius=zz.r;g.areas[g.areas.length-1]=name;g.zoneN=P.all.length;g.target=null;g.reelOpen=false;S.last=Object.assign({},S.last||{},{radius:zz.r});save();renderPlay();close();if(typeof liveSync==="function"&&g.live)liveSync(true).catch(()=>{});return}
        g.center={lat:zz.lat,lng:zz.lng};g.radius=zz.r;g.areas.push(name);g.moves.push({at:now(),to:name,free:!!free,m:Math.round(near||0)});if(!free)g.voluntaryUsed=true;
        if(far){endTripFreeze(g,true);startFreeze(g,20*60000,true);g.frz.zone=true}   // the clock waits till the first bar in the new zone
        g.target=null;g.reelOpen=false;save();renderPlay();renderClock();if(o.move)close();else view()}},
      {...range,pool,onShrink:()=>{if(warned||!g.started)return;warned=true;toast("Your zone can only get bigger once the clock's running.",2600)}});
  };
  const crMove=()=>{drop();ov.classList.add("moving");
    const me=you()||fromPoint(),c=crCircle(g),z=c?{lat:c.lat,lng:c.lng,r:c.r}:{lat:me.lat,lng:me.lng,r:0},lst=g.cz.type==="list"?g.cz.list:null;
    zonePanel(ov,{title:"Set your zone",sub:lst?"Spinning your "+listName(lst)+". Pick All on the slider for the whole list.":"",go:"Use this zone",back:o.move?"Cancel":"Back"});
    $("mvX").onclick=()=>{if(o.move)close();else view()};
    const pool=(zz,t)=>{if(lst){const all=listOf(lst).filter(v=>!zz.r||dist(zz,v)<=zz.r*1000);return {all,open:all.filter(v=>openOK(v,t))}}return rrPool(zz,t,!!g.newOnly)};
    rrZoneBind(z,me,()=>!!g.newOnly,(P,zz,moved)=>{if(!$("mvNote"))return;$("mvNote").textContent="";
      const b=$("mvGo");b.disabled=!P.open.length;b.textContent=P.open.length?"Use this zone":"Nothing open here";
      b.onclick=()=>{const near=!moved;let nc,label;
        if(lst){nc={type:"list",list:lst,name:listName(lst),r:zz.r||null,lat:zz.r?zz.lat:null,lng:zz.r?zz.lng:null};label=listName(lst)}
        else if(!zz.r){nc={type:"all",name:null,r:null};label="Anywhere"}
        else if(near){nc={type:"me",name:null,r:zz.r};label="Near you"}
        else{label="Around "+nearestSuburb(zz);nc={type:"spot",name:label,r:zz.r,lat:zz.lat,lng:zz.lng}}
        g.cz=nc;if(zz.r)g.radius=zz.r;if(g.areas[g.areas.length-1]!==label)g.areas.push(label);g.target=null;g.reelOpen=false;save();renderPlay();
        if(typeof liveSync==="function"&&g.live)liveSync(true).catch(()=>{});if(o.move)close();else view()}},
      {pool,locate:null,allLbl:lst?"Your whole "+listName(lst):undefined,pinSet:lst?()=>listOf(lst):undefined});
  };
  if(o.move&&CR(g))crMove();else if(o.move)move(o.free);else view();
}
// R&R's circle on a map (none for Anywhere, or a whole list)
function crCircle(g){const cz=g.cz;if(cz.type==="me"){const p=fromPoint();return p?{lat:p.lat,lng:p.lng,r:cz.r||g.radius||2}:null}
  if((cz.type==="spot"||cz.type==="list")&&cz.r&&cz.lat!=null)return {lat:cz.lat,lng:cz.lng,r:cz.r};return null}
// the night's route, full screen
async function bigMap(r,st){
  const ov=document.createElement("div");ov.className="mapfull";ov.innerHTML=`<div id="bigMap"></div><button class="shv-x mf-x" type="button" aria-label="Close">${I.x}</button>`;
  document.body.appendChild(ov);requestAnimationFrame(()=>ov.classList.add("on"));let m=null;
  const close=()=>{ov.classList.remove("on");setTimeout(()=>{try{m&&m.remove()}catch(e){}ov.remove()},220)};ov.querySelector(".mf-x").onclick=close;
  m=await makeMap("bigMap",{greedy:true,noMe:true});if(!m)return;
  const {stops:pts,trail:tr}=crawlPath(r,st);
  if(!r.noLoc&&pts.length>1){m.route(pts,true);if(tr.length>1)m.route(tr);else m.route(pts)}
  st.arrived.forEach((v,i)=>{const b=byId(v.id);m.num(b,i+1,v.counted!==true,b.name)});
  const all=pts.concat(tr);if(!all.length&&r.center)all.push(r.center);setTimeout(()=>m.fitPts(all,17,{top:80,left:30,right:30,bottom:40}),80);
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
  const pending=r.followed?[]:r.visits.map((v,i)=>({v,i})).filter(o=>o.v.counted===null);   // a followed crawl: the host answers these, not you
  const atBars=st.arrived.reduce((s,v)=>s+((v.leftAt||r.endedAt)-v.arrivedAt),0),moving=Math.max(0,st.dur-atBars);
  const still=cr&&r.autoEnded&&!r.stillAsked&&!S.game&&now()-r.endedAt<12*3600000;
  if(!r.photo&&!r.noPhoto&&r.photos&&r.photos.length){r.photo=r.photos[r.photos.length-1];saveH()}
  // just finished, 2+ bars, no pick yet: ask for bar of the day before the scorecard rolls in
  const reopen=S.bodOpen===r.id&&!r.followed;
  if(reopen||((S.rackEnd===r.id||S.bodDue===r.id)&&n>=2&&!r.barOfDay&&!r.bodDone)){
    box.innerHTML=`<div class="bodpick"><div><div class="bodhd"><div class="eyebrow">${n} rooftop${n===1?"":"s"} ${dayWord(r.startedAt)}</div><button class="txtbtn amber" type="button" id="bodSkip">${reopen?"Back":"Skip"}</button></div><h1 class="q" style="margin-top:6px">Bar of the day?</h1><p class="sub" style="margin:6px 0 0">Saved to your History, so you can look back on your favourites.</p></div>
      <div class="bodgrid" style="--rows:${Math.ceil(st.counted.length/2)}">${st.counted.map(v=>{const b=byId(v.id),cp=cardPhoto(b);return `<button type="button" class="bodt${cp.cls}${r.barOfDay===b.id?" on":""}" data-bp="${b.id}"${cp.style}><b>${esc(b.name)}</b></button>`}).join("")}</div></div>`;
    box.scrollTop=0;
    box.querySelectorAll("[data-bp]").forEach(t=>t.onclick=()=>{r.barOfDay=t.dataset.bp;r.bodDone=true;delete S.bodOpen;delete S.bodDue;save();saveH();if(typeof liveMeta==="function")liveMeta(r);buzz(15);renderEnd()});
    $("bodSkip").onclick=()=>{r.bodDone=true;delete S.bodOpen;delete S.bodDue;save();saveH();if(typeof liveMeta==="function")liveMeta(r);renderEnd()};
    st.counted.forEach(v=>{const b=byId(v.id);if(phMem[b.id]===undefined&&phAllowed(b.id,"play"))barPhoto(b).then(ph=>{const t=box.querySelector(`[data-bp="${b.id}"]`);if(t&&ph){t.classList.add("photo");t.style.backgroundImage=`url('${ph.url}')`}})});
    return}
  box.innerHTML=`
    ${still?`<div class="still"><b>Still going?</b><span>We wrapped your crawl at 3 hours and saved it. If you're still out, pick up where you left off.</span><div class="row2"><button class="btn sm" type="button" id="stY">Keep going</button><button class="btn sm dark" type="button" id="stN">That's a wrap</button></div></div>`:""}
    ${pending.map(o=>`<div class="ask"><b>Should ${esc(byId(o.v.id).name)} count?</b><span class="small">You weren't there long. Did you have a drink?</span><div class="row"><button class="btn sm" type="button" data-q="${o.i}" data-a="1">Count it</button><button class="btn sm dark" type="button" data-q="${o.i}" data-a="0">Don't count</button></div></div>`).join("")}
    <div class="sc">
      <div class="sc-top">${S.endBack==="play"&&!isShared?`<button class="scback" type="button" id="doneBtn" aria-label="Close">${I.x}</button>`:`<button class="scback" type="button" id="doneBtn" aria-label="Back">${I.back}</button>`}<span class="eyebrow scttl">${cr?"R&amp;R":LEN(r.len)} · ${dateTxt(rt(r,r.startedAt))}</span><span class="sctr"><button class="scmore" type="button" id="scMore" aria-label="Crawl options">${I.more}</button></span></div>
      ${(()=>{const stays=st.arrived.filter(v=>v.leftAt&&!v.lastOrders).map(v=>v.leftAt-v.arrivedAt),lng=stays.length?Math.max(...stays):0;
        const K=r.noLoc?[[n,n===1?"Rooftop":"Rooftops"],[hmm(st.dur),"Total time"]]:cr?[[n,n===1?"Rooftop":"Rooftops"],[km(st.total),"Distance",st.arrived.length>1&&"dist"],[hmm(st.dur),"Total time"]]:[[n,n===1?"Rooftop":"Rooftops"],[km(st.total),"Distance",st.arrived.length>1&&"dist"],[hmm(moving),"Travel time"]];
        const M=r.noLoc?[]:cr?[[hmm(atBars),"Rooftop time",st.arrived.length&&"time"],[lng?hmm(lng):"—","Longest stay",lng&&"long"],[stays.length?hmm(stays.reduce((a,b)=>a+b,0)/stays.length):"—","Average stay"]]
          :[[hmm(atBars),"Rooftop time",st.arrived.length&&"time"],[stays.length?hmm(Math.min(...stays)):"—","Quickest stop",stays.length&&"quick"],[st.longest?mOrKm(st.longest.d):"—","Longest leg",st.longest&&"leg"]];
        const meta=`${cr?`${I.pin} ${esc(placeOf(r))}`:`${I.pin} ${esc(placeOf(r))} · ${kmTxt(r.radius)}`}${r.jp&&!cr?`<span class="jpmini">${I.sparkle} ${(JACKPOTS.find(x=>x.k===r.jp.k)||{t:""}).t}</span>`:""}`;
        return `<div class="schead"><div class="sct"><button class="scname${r.title&&!cr?"":" add"}" type="button" id="scName">${r.title?(cr?`${IC.edit} Rename`:esc(r.title)+` <span aria-hidden="true">${IC.edit}</span>`):"+ Name this crawl"}</button><div class="aw-t">${aw[0].plain?esc(aw[0].t):aw[0].t}</div>${aw[0].why?`<div class="aw-w">${aw[0].why}</div>`:""}<div class="scmeta">${meta}</div></div>
          <button class="scph${r.photo?"":" none"}" type="button" id="scPh" aria-label="${r.photo?"Change photo":"Add photo"}">${r.photo?`<img src="${r.photo}" alt=""><span class="scph-chg" data-chg="1">${I.camera}Change</span>`:`${I.camera}<small>Add photo</small>`}</button></div>
${(()=>{const SV=window.SUMV||"b",arr=st.arrived;
          const row=(v,i,k)=>{const b=byId(v.id),stay=v.leftAt?(v.leftAt-v.arrivedAt):(r.endedAt-v.arrivedAt),bod=r.barOfDay===v.id,tm=v.cant?"No entry":v.lastOrders?"Last orders":v.counted===false?"Didn't count":r.noLoc?"":hmm(Math.max(0,stay)),cp=cardPhoto(b);
            if(k==="strip")return `<div class="bcard${v.counted===true?"":" x"}${bod?" isbod":""}" ${bod?'data-bodopen="1"':`data-bar="${b.id}"`} role="button" tabindex="0"><span class="bth${cp.cls}" data-ph="${b.id}"${cp.style}><i>${i+1}</i></span><span class="nm">${esc(b.name)}</span><span class="tm">${tm}</span>${bod?'<span class="bodtag">Bar of the day</span>':""}</div>`;
            return `<div class="brow${v.counted===true?"":" x"}${bod?" isbod":""}"${bod?' data-bodopen="1" role="button"':""}><span class="bth${cp.cls}" data-ph="${b.id}"${cp.style}></span><i>${i+1}</i><span class="nmw"><span class="nmx"><span class="nm">${esc(b.name)}</span>${bod?'<span class="bodtag">Bar of the day</span>':""}</span><span class="tm">${tm}</span></span></div>`};
          const pick=n>=2&&!r.barOfDay&&!r.followed?`<button class="bodbtn" type="button" data-bodopen="1">${I.sparkle} Pick your bar of the day</button>`
            :r.followed&&r.bodWait&&!r.barOfDay?`<div class="bodwait"><span class="fv-dots"><i></i><i></i><i></i></span>${esc(r.followed)} is picking the bar of the day</div>`:"";
          const mapblk=`        <div class="scmap wide"><div id="endMap"></div><button class="scexp" type="button" id="scExp" aria-label="Open the map">${I.expand||'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>'}</button>
          <div class="scov"><div class="tri s6c">${K.concat(M).map(([v,l,k])=>`<div${k?` class="sttap" role="button" tabindex="0" data-st="${k}" data-sl="${l}" data-sv="${esc(String(v))}"`:""}><b>${String(v).replace(/([a-zA-Z]+)/g,"<i>$1</i>")}</b><small>${l}${k?' <span class="chev">›</span>':""}</small></div>`).join("")}</div></div></div>
`;
          if(SV==="a")return `<div class="scar2" id="scar2"><section class="scp2">${mapblk}</section><section class="scp2 p2"><div class="scph-h">The rooftops</div><div class="sblist${arr.length>6?" many":""}">${arr.map((v,i)=>row(v,i,"row")).join("")}</div>${pick}</section></div>
            <div class="scdots dots" id="scdots2"><button type="button" data-p="0" aria-pressed="true" aria-label="Map and stats"></button><button type="button" data-p="1" aria-pressed="false" aria-label="The rooftops"></button></div>`;
          return mapblk+`<div class="bstrip">${arr.map((v,i)=>row(v,i,"strip")).join("")}</div>${pick}`})()}`})()}
    </div>
    ${isShared?`<div class="row2"><button class="btn" type="button" id="addTab">${IC.tab||I.check} Add to My Tab</button><button class="btn dark" type="button" id="shareBtn">${I.share} Save card</button></div>${ANDROID_WEB&&SHARED_CODE?`<button class="txtbtn amber openapp" type="button" id="openApp">Open in the app</button>`:""}`
      :`<div class="row2"><button class="btn" type="button" id="shareBtn">${I.share} Share crawl</button><button class="btn dark" type="button" id="runBack">${I.redo} Play again</button></div>${S.recapOpen===r.id?recapDeck(r)+recapSignIn(r):r.followed?"":endSignInNudge(r)}`}
    `;
  box.querySelectorAll("[data-q]").forEach(b=>b.onclick=()=>{const v=r.visits[+b.dataset.q];v.counted=b.dataset.a==="1";
    const prev={};H.forEach(x=>{if(x.id!==r.id)x.visits.forEach(y=>{if(y.counted===true&&x.startedAt<r.startedAt)prev[y.id]=1})});
    r.newIds=r.visits.filter(y=>y.counted===true&&!prev[y.id]).map(y=>y.id);saveH();renderEnd()});
  box.querySelectorAll("[data-bodopen]").forEach(b=>b.onclick=e=>{e.stopPropagation();if(r.followed){const t=b.querySelector("[data-ph]"),v=t&&byId(t.dataset.ph);if(v)barSheet(v,r);return}S.bodOpen=r.id;renderEnd()});
  box.querySelectorAll("[data-bar]").forEach(c=>c.onclick=()=>{const v=byId(c.dataset.bar);if(v)barSheet(v,r)});
  if(!isShared&&!r.demo)box.querySelectorAll(".bcard,.brow").forEach((c,i)=>{const vis=st.arrived[i];if(vis)longPress(c,()=>removeAsk(r,vis,false))});
  // the stats on the map open what they're about: the leg, the stop, the breakdown
  box.querySelectorAll("[data-st]").forEach(t=>t.onclick=e=>{e.stopPropagation();const k=t.dataset.st,l=t.dataset.sl,v=t.dataset.sv;
    const stays=st.arrived.filter(x=>x.leftAt&&!x.lastOrders),by=f=>stays.slice().sort((a,b)=>f*((a.leftAt-a.arrivedAt)-(b.leftAt-b.arrivedAt)))[0];
    if(k==="leg"){const j=st.arrived.indexOf(st.longest.to);if(j>0)legSheet(r,st.arrived[j-1].id,st.longest.to.id,l,v)}
    else if(k==="quick")staySheet(r,by(1),l,v);else if(k==="long")staySheet(r,by(-1),l,v);
    else if(k==="dist"||k==="time")crawlStatSheet(k,r.id,l)});
  if(r.followed&&!r.photo){$("scPh").remove()}   // a friend's crawl: their photos stay on their phone, and the photo's theirs to pick
  else $("scPh").onclick=e=>r.photo&&!e.target.closest("[data-chg]")?mediaView(r):r.followed?null:photoSheet(r,renderEnd);
  if(!isShared&&!r.demo)clipList(r.id).then(L=>{const ph=$("scPh");if(L.length&&ph&&document.contains(ph)){ph.insertAdjacentHTML("beforeend",`<i class="phclips">▶ ${L.length}</i>`);if(!r.photo)ph.onclick=()=>mediaView(r)}}).catch(()=>{});
  box.querySelectorAll("[data-ph]").forEach(t=>{const b=byId(t.dataset.ph);if(!b||t.style.backgroundImage)return;if(phMem[b.id]===undefined&&!phAllowed(b.id,"play"))return;
    (phMem[b.id]!==undefined?Promise.resolve(phMem[b.id]):barPhoto(b)).then(ph=>{if(ph){t.style.backgroundImage=`url('${ph.url}')`;t.classList.add("photo")}}).catch(()=>{})});
  if($("scar2")){const car=$("scar2"),ds=[...box.querySelectorAll("#scdots2 [data-p]")];let cur=0;
    car.addEventListener("scroll",()=>{const i=Math.round(car.scrollLeft/car.clientWidth);if(i!==cur){cur=i;ds.forEach((d,j)=>d.setAttribute("aria-pressed",j===i))}},{passive:true});
    ds.forEach((d,i)=>d.onclick=()=>car.scrollTo({left:i*car.clientWidth,behavior:"smooth"}))}
  const thin=!S.test&&!r.noLoc&&!r.simDone&&st.arrived.length>=1&&(r.trail||[]).length<st.arrived.length*8;   // phone closed between bars
  if((S.test&&r.simDone!==3||thin)&&!(window._simRan||(window._simRan={}))[r.id]&&st.arrived.length){window._simRan[r.id]=1;const fb=byId(st.arrived[0].id);if(S.test&&fb)r.startPos={lat:fb.lat,lng:fb.lng};simTrail(r,S.test?null:r.startPos).then(t=>{if(t.length>1){r.trail=t;r.simDone=3;saveH();if(S.route==="end"&&S.lastEnd===r.id)renderEnd()}})}
  box.querySelector(".scmap").onclick=e=>{if(!e.target.closest("a"))bigMap(r,st)};

  if(!isShared&&!pending.length)prefetchCards(r);
  $("doneBtn").onclick=()=>{SHARED=null;const to=["hist","bars"].includes(S.endBack)?S.endBack:"home";go(to)};
  fitLine(box.querySelector(".scttl"),9);
  // an old crawl: no "Play again", Share takes the row
  if(S.endBack!=="play"&&!r.demo){const rb=$("runBack");if(rb)rb.remove()}if($("addTab"))$("addTab").onclick=addSharedToTab;endSignInBind();if($("rcDeck"))$("rcDeck").onclick=()=>{r.deckAsked=true;saveH();$("rcDeck").remove();deckSheet()};if($("rcIn"))$("rcIn").onclick=()=>{r.recapAsked=true;saveH();signInSheet("Keep your crawls and saved lists across devices.","recap","Save your crawls")};if(S.recapOpen===r.id&&$("rcIn")){r.recapAsked=true;saveH()}delete S.recapOpen;if($("openApp"))$("openApp").onclick=openInApp;
  if(r.demo){const nm=$("scName");if(nm)nm.outerHTML=`<span class="scname scdemo">Practice crawl · not saved</span>`;const mo=$("scMore");if(mo)mo.remove();
    const rb=$("runBack");if(rb){rb.innerHTML=`${I.back} Done`;rb.id="demoDone";rb.onclick=()=>{DEMO_REC=null;S.lastEnd=null;save();go("home")}}}
  if(isShared||r.followed){const nm=$("scName");if(nm&&!r.title)nm.remove();else if(nm){nm.onclick=null;const ic=nm.querySelector("span");if(ic)ic.remove()}const mo=$("scMore");if(mo&&isShared)mo.remove()}   // someone else's crawl: look, add, save the card
  if($("scMore"))$("scMore").onclick=()=>crawlMenu(r);if($("scName")&&!isShared&&!r.followed&&!r.demo)$("scName").onclick=()=>nameCrawl(r);
  if($("stY"))$("stY").onclick=()=>resumeNight(r);
  if($("stN"))$("stN").onclick=()=>{r.stillAsked=true;saveH();renderEnd()};
  if($("runBack"))$("runBack").onclick=cr?()=>{S.quick={step:0,from:null};go("quick")}:()=>{const c=r.zone||{lat:r.center.lat,lng:r.center.lng,name:r.areas[0]};S.wiz={step:2,start:{type:"area",name:c.name||r.areas[0],lat:c.lat,lng:c.lng},radius:r.radius,len:r.len,newOnly:!!r.newOnly};go("wiz")};
  $("shareBtn").onclick=()=>shareStory(r);
  if(r.noLoc&&!box.querySelector(".estnote")){const m=box.querySelector(".scmap");if(m)m.insertAdjacentHTML("afterend",`<p class="estnote">Location was off, so there's no route or timings for this crawl.</p>`)}
  if(S.rackEnd===r.id){delete S.rackEnd;save();if(n){const nb=box.querySelector(".tri>div b");if(nb)nb.textContent="0";setTimeout(()=>rackUp(box,n),700)}}
  requestAnimationFrame(async()=>{
    if(eMap){eMap.remove();eMap=null}
    const el=$("endMap"),m=await makeMap("endMap",{noMe:true,locked:true});if(!m||!document.contains(el))return;eMap=m;
    const {stops:pts,trail:tr}=crawlPath(r,st);
    if(!r.noLoc&&pts.length>1){m.route(pts,true);if(tr.length>1)m.route(tr);else m.route(pts)}
    st.arrived.forEach((v,i)=>{const b=byId(v.id);m.num(b,i+1,v.counted!==true,b.name)});
    // leave room under the route for the stats laid over the bottom of the map
    const all=pts.concat(tr).filter(Boolean);if(!all.length&&r.center)all.push(r.center);
    m._fit=()=>{if(eMap!==m||!document.contains(el))return;const ov=box.querySelector(".scmap .scov"),h=el.offsetHeight,ob=ov&&getComputedStyle(ov).position==="absolute"?Math.round(ov.offsetHeight*.55):24,pad=h-ob-20>70?{top:20,left:26,right:26,bottom:ob}:{top:10,left:20,right:20,bottom:Math.max(10,h-80)};m.fitPts(all,17,pad)};m._fit();
  });
  fitEnd();
}
// ---------- story cards (9:16) ----------
// Two looks, Strava style: the crew photo with the route in a corner, or the map on its own.
async function storyCard(r,look){const NLs=a=>{if(!r.noLoc)return a;const o=a.filter(x=>x[1]==="Rooftops"||x[1]==="Total time");if(!o.some(x=>x[1]==="Total time"))o.push([hmm(stats(r).dur),"Total time","clock"]);return o};
  await Promise.all([document.fonts.load('800 100px "Big Shoulders Display"'),document.fonts.load('500 40px "Big Shoulders Display"')]).catch(()=>{});
  const W=1080,Hh=1920,c=document.createElement("canvas");c.width=W;c.height=Hh;const x=c.getContext("2d");
  const cr=r.mode==="cruise",st=stats(r),n=st.counted.length,aw=awardsFor(r,st),D='"Big Shoulders Display","Arial Narrow",Impact,sans-serif',U='system-ui,-apple-system,Roboto,Arial,sans-serif';
  const plain=t=>String(t).replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'");
  const fit=(t,w)=>{t=String(t);if(x.measureText(t).width<=w)return t;while(t.length>1&&x.measureText(t+"…").width>w)t=t.slice(0,-1);return t.trimEnd()+"…"};
  const sp=(t,X,Y,ls,al)=>{x.letterSpacing=ls+"px";x.textAlign=al||"left";x.fillText(t,X,Y);x.letterSpacing="0px";x.textAlign="left"};
  const AMB="#F5B83D",INK="#F4F1EA",MUT="#9AA1AD",BG="#0B0D12",full=look==="full"&&!!r.photo,rund=look==="rund",RV=rund?(window.RUND_VAR||(r.photo?"photo":"map")):"",mapc=look==="map"||look==="map2",photo=(look==="photo"||full)&&r.photo;let mapP=null,sideMap=false;
  x.fillStyle=BG;x.fillRect(0,0,W,Hh);x._day=look==="map2"?!dayCrawl(r):dayCrawl(r);   // daytime crawls (sunrise to sunset where the crawl was) get the light map with warm fades; night crawls the dark one
  // hero
  // where the Rundown's title will land, so the map above it can reach down to meet it
  const L4=Math.min(8,st.arrived.length),LT=RV==="plain"?Math.max(760,1700-(L4-1)*96):Math.max(1180,1700-(L4-1)*78),T4=LT-265,RMH=LT-10;
  const HH=full?Hh:rund?(RV==="map"?RMH:Hh):mapc?(x._day?Hh:1800):1160;   // a daytime map runs the full card, under a light warm fade
  if(rund){   // rundown: a photo or the map up top, the night listed underneath (or plain)
    if(RV==="photo"&&r.photo){const img=await loadImg(r.photo);const s2=Math.max(W/img.width,HH/img.height);x.save();x.beginPath();x.rect(0,0,W,HH);x.clip();x.drawImage(img,(W-img.width*s2)/2,(HH-img.height*s2)/2,img.width*s2,img.height*s2);x.restore()}
    else if(RV==="map"){x.fillStyle="#10141B";x.fillRect(0,0,W,HH);mapP=await mapTiles(x,r,st,W,HH,{cx:W/2,cy:(300+T4-150)/2,bw:860,bh:Math.max(300,T4-150-300-60)}).catch(()=>null);
      if(!mapP){x.save();x.translate(W/2,HH/2);x.rotate(-12*Math.PI/180);x.strokeStyle="rgba(255,255,255,.035)";x.lineWidth=2;for(let i=-1400;i<=1400;i+=90){x.beginPath();x.moveTo(i,-1400);x.lineTo(i,1400);x.stroke();x.beginPath();x.moveTo(-1400,i);x.lineTo(1400,i);x.stroke()}x.restore()}}
    else{const g4=x.createRadialGradient(W*.8,250,0,W*.8,250,1100);g4.addColorStop(0,"rgba(245,184,61,.16)");g4.addColorStop(1,"rgba(245,184,61,0)");x.fillStyle=g4;x.fillRect(0,0,W,Hh)}}
  else if(photo){const img=await loadImg(r.photo);const s=Math.max(W/img.width,HH/img.height);x.save();x.beginPath();x.rect(0,0,W,HH);x.clip();x.drawImage(img,(W-img.width*s)/2,(HH-img.height*s)/2,img.width*s,img.height*s);x.restore();
    if(!full){const oc=document.createElement("canvas");oc.width=W;oc.height=HH;const o=oc.getContext("2d");o._day=x._day;o.fillStyle="#10141B";o.fillRect(0,0,W,HH);
      mapP=await mapTiles(o,r,st,W,HH,{cx:830,cy:680,bw:360,bh:560}).catch(()=>null);
      if(!mapP){o.save();o.translate(W/2,HH/2);o.rotate(-12*Math.PI/180);o.strokeStyle="rgba(255,255,255,.04)";o.lineWidth=2;for(let i=-1400;i<=1400;i+=90){o.beginPath();o.moveTo(i,-1400);o.lineTo(i,1400);o.stroke();o.beginPath();o.moveTo(-1400,i);o.lineTo(1400,i);o.stroke()}o.restore()}
      o.globalCompositeOperation="destination-in";const mg=o.createLinearGradient(380,0,720,0);mg.addColorStop(0,"rgba(0,0,0,0)");mg.addColorStop(1,"rgba(0,0,0,1)");o.fillStyle=mg;o.fillRect(0,0,W,HH);
      x.drawImage(oc,0,0);x._mapSrc=o._mapSrc;sideMap=true}}
  else{x.fillStyle="#10141B";x.fillRect(0,0,W,HH);mapP=await mapTiles(x,r,st,W,HH,mapc?{cx:W/2,cy:780,bw:860,bh:900}:null).catch(e=>{(window._mapErrs=window._mapErrs||[]).push("error: "+(e&&e.message||e));return null});if(!mapP){x.save();x.translate(W/2,HH/2);x.rotate(-12*Math.PI/180);x.strokeStyle="rgba(255,255,255,.035)";x.lineWidth=2;for(let i=-1400;i<=1400;i+=90){x.beginPath();x.moveTo(i,-1400);x.lineTo(i,1400);x.stroke();x.beginPath();x.moveTo(-1400,i);x.lineTo(1400,i);x.stroke()}x.restore()}}
  const gr=x.createLinearGradient(0,0,0,HH);if(rund&&RV==="plain"){gr.addColorStop(0,"rgba(11,13,18,0)");gr.addColorStop(1,"rgba(11,13,18,0)")}else if(rund&&RV==="photo"){gr.addColorStop(0,"rgba(11,13,18,.3)");gr.addColorStop(.1,"rgba(11,13,18,0)");gr.addColorStop(1,"rgba(11,13,18,0)")}else if(rund){const q=v=>Math.max(0,Math.min(1,v/HH));gr.addColorStop(0,"rgba(11,13,18,.3)");gr.addColorStop(q(220),"rgba(11,13,18,0)");if(x._day){[[T4-520,0],[T4-380,.14],[T4-240,.38],[T4-100,.66],[T4+20,.84]].forEach(([y,a])=>gr.addColorStop(q(y),`rgba(11,13,18,${a})`));gr.addColorStop(q(LT-50),"rgba(11,13,18,.94)")}
    else{gr.addColorStop(q(T4-330),"rgba(11,13,18,0)");gr.addColorStop(q(T4-180),"rgba(11,13,18,.35)");gr.addColorStop(q(T4-40),"rgba(11,13,18,.74)");gr.addColorStop(q(LT-50),"rgba(11,13,18,.9)")}gr.addColorStop(1,BG)}else if(mapc){const q=v=>Math.max(0,Math.min(1,v/HH));
    // Daytime: the light map with the same cool near-black as night (keeps the map's colours), eased in so there's no visible edge:
    // a soft fade at the top for Instagram's header, and a long one at the bottom that builds to 90% so the stats read.
    if(x._day){const WM="11,13,18";for(let i=0;i<=8;i++){const t=i/8;gr.addColorStop(q(t*380),`rgba(${WM},${(.3*(1-t)*(1-t)).toFixed(3)})`)}
      for(let i=1;i<=12;i++){const t=i/12;gr.addColorStop(q(860+t*(HH-860)),`rgba(${WM},${(.9*Math.pow(t,1.3)).toFixed(3)})`)}}
    else{gr.addColorStop(0,"rgba(11,13,18,.3)");gr.addColorStop(q(220),"rgba(11,13,18,0)");gr.addColorStop(q(1230),"rgba(11,13,18,0)");gr.addColorStop(q(1380),"rgba(11,13,18,.35)");gr.addColorStop(q(1520),"rgba(11,13,18,.74)");gr.addColorStop(q(1660),"rgba(11,13,18,.9)");gr.addColorStop(1,BG)}}else if(full){x.fillStyle="rgba(11,13,18,.06)";x.fillRect(0,0,W,Hh);gr.addColorStop(0,"rgba(11,13,18,.3)");gr.addColorStop(.12,"rgba(11,13,18,0)");gr.addColorStop(.46,"rgba(11,13,18,0)");gr.addColorStop(.58,"rgba(11,13,18,.42)");gr.addColorStop(.7,"rgba(11,13,18,.66)");gr.addColorStop(1,"rgba(11,13,18,.84)")}
  else{gr.addColorStop(0,"rgba(11,13,18,.35)");gr.addColorStop(.14,"rgba(11,13,18,0)");gr.addColorStop(.45,"rgba(11,13,18,0)");gr.addColorStop(.76,"rgba(11,13,18,.85)");gr.addColorStop(1,BG)}x.fillStyle=gr;x.fillRect(0,0,W,HH);
  // route: GPS trail when we have one, otherwise stop to stop
  const {stops,trail:tr}=crawlPath(r,st),line=tr.length>1?tr:stops;
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
        if(x._day){   // light map: dark names with a white glow, like map labels (no box)
          const glow=()=>{x.lineJoin="round";x.strokeStyle="rgba(255,255,255,.92)";x.lineWidth=7;x.shadowColor="rgba(255,255,255,.9)";x.shadowBlur=10},tm_=stay?hmm(stay):"";
          x.font=`800 28px ${U}`;glow();x.strokeText(nn,lx,Y-r*1.5+pos.dy);x.shadowColor="transparent";x.fillStyle="#1A1612";x.fillText(nn,lx,Y-r*1.5+pos.dy);
          x.font=`700 21px ${U}`;glow();x.strokeText(tm_,lx,Y-r*1.5+27+pos.dy);x.shadowColor="transparent";x.fillStyle="rgba(26,22,18,.62)";x.fillText(tm_,lx,Y-r*1.5+27+pos.dy)}
        else{x.fillStyle=INK;x.fillText(nn,lx,Y-r*1.5+pos.dy);x.font=`600 21px ${U}`;x.fillStyle="rgba(244,241,234,.75)";x.fillText(stay?hmm(stay):"",lx,Y-r*1.5+26+pos.dy)}x.restore()}});
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
  // the crawl's own name, if they gave it one: small amber caps, a little clear of the headline (R&R already uses it as the headline)
  const where=Y=>{if(r.title&&!cr){x.save();x.shadowColor="rgba(0,0,0,.5)";x.shadowBlur=10;let fz=32;x.font=`800 ${fz}px ${U}`;x.letterSpacing="2.4px";const t=r.title.toUpperCase();while(x.measureText(t).width>W-128&&fz>22){fz-=2;x.font=`800 ${fz}px ${U}`}
      x.fillStyle=AMB;x.fillText(t,64,Y);x.letterSpacing="0px";x.restore();return}
    if(WV!=="top")return;x.save();x.shadowColor="transparent";const t=[placeOf(r),dateTxt(rt(r,r.startedAt))].filter(Boolean).join(" · ").toUpperCase();
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
    NLs(cr?[[n,"Rooftops","glass"],[hmm(atBars),"Rooftop time","clock"],[hmm(st.dur),"Total time",isEve(r.startedAt)?"moon":"sun"]]:[[n,"Rooftops","glass"],[hmm(atBars),"Rooftop time","clock"],[hmm(moving),"Travel time","walk"]]).forEach(([v,l,ic],i)=>stat(v,l,ic,64+i*320,top4+135,60));
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
    NLs(cr?[[n,"Rooftops","glass"],[hmm(st.dur),"Total time",isEve(r.startedAt)?"moon":"sun"],[hmm(atBars),"Rooftop time","clock"]]:[[n,"Rooftops","glass"],[km(st.total),"Distance","route"],[hmm(atBars),"Rooftop time","clock"]]).forEach(([v,l,ic],i)=>stat(v,l,ic,64+i*320,sy,64));
    if(!FV&&r.barOfDay&&byId(r.barOfDay)){x.font=`700 34px ${U}`;x.fillStyle=INK;const bn=fit(byId(r.barOfDay).name,W-128-120);x.fillText(bn,64,1508);const ex=64+x.measureText(bn).width;
      x.save();x.font=`800 15px ${U}`;x.letterSpacing="1.6px";const t="BAR OF THE DAY",w=x.measureText(t).width+16;x.translate(Math.min(ex-w*.3,W-64-w),1508-38);x.rotate(5*Math.PI/180);
      x.shadowColor="rgba(0,0,0,.45)";x.shadowBlur=10;x.shadowOffsetY=3;x.fillStyle=AMB;roundRect(x,0,-17,w,27,7);x.fill();x.shadowColor="transparent";x.fillStyle=BG;x.fillText(t,8,2);x.restore()}
    foot();return new Promise(res=>c.toBlob(res,"image/png"))}
  // award
  let fs=84;x.font=`800 ${fs}px ${D}`;const at=aw[0].t.toUpperCase();while(x.measureText(at).width>W-128&&fs>44){fs-=4;x.font=`800 ${fs}px ${D}`}
  x.fillStyle=SCH==="c"?AMB:INK;where(943);x.fillStyle=SCH==="c"?AMB:INK;x.fillText(at,64,1035);x.font=`600 28px ${U}`;x.fillStyle="#C9CDD4";x.fillText(fit(plain(aw[0].why),W-128),64,1092);
  // stats
  const S6=cr?[[n,"Rooftops"],[km(st.total),"Distance"],[hmm(st.dur),"Total time"],[hmm(atBars),"Rooftop time"],[lng?hmm(lng):"—","Longest stay"],[stays.length?hmm(stays.reduce((a,b)=>a+b,0)/stays.length):"—","Average stay"]]
    :[[n,"Rooftops"],[km(st.total),"Distance"],[hmm(moving),"Travel time"],[hmm(atBars),"Rooftop time"],[stays.length?hmm(Math.min(...stays)):"—","Quickest stop"],[st.longest?mOrKm(st.longest.d):"—","Longest leg"]];
  if(r.noLoc){S6.splice(0,S6.length,[n,"Rooftops"],[hmm(st.dur),"Total time"])}
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
// Day or night for the share cards: the crawl's midpoint against the real sunrise and sunset where the crawl was (standard sunrise equation).
const sunUp=(ts,lat,lng)=>{const R=Math.PI/180,J=ts/864e5+2440587.5,n=Math.round(J-2451545+lng/360),Js=n-lng/360,M=(357.5291+.98560028*Js)%360,
  C=1.9148*Math.sin(M*R)+.02*Math.sin(2*M*R)+.0003*Math.sin(3*M*R),L=(M+C+282.9372)%360,Jt=2451545+Js+.0053*Math.sin(M*R)-.0069*Math.sin(2*L*R),
  sd=Math.sin(L*R)*Math.sin(23.4397*R),cd=Math.cos(Math.asin(sd)),cw=(Math.sin(-.833*R)-Math.sin(lat*R)*sd)/(Math.cos(lat*R)*cd);
  if(cw<=-1)return true;if(cw>=1)return false;const w=Math.acos(cw)/R/360,ms=j=>(j-2440587.5)*864e5;return ts>=ms(Jt-w)&&ts<ms(Jt+w)};
function dayCrawl(r){const t=rt(r,r.startedAt),mid=t+((r.endedAt||r.endsAt||t)-t)/2;
  const v=r.visits&&r.visits.find(v=>v.arrivedAt!=null&&byId(v.id)),p=r.center||(v&&byId(v.id))||r.startPos||{lat:-33.87,lng:151.21};
  return sunUp(mid,p.lat,p.lng)}
async function mapTiles(x,r,st,W,HH,area){const DAY=!!x._day;const AR=area||{cx:W/2,cy:670,bw:860,bh:540};
  const cp=crawlPath(r,st),stops=cp.stops.length?cp.stops:[r.startPos].filter(Boolean),all=stops.concat(cp.trail);if(!all.length)return null;
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
  const GSTL=["element:geometry|color:0xf3efe8","element:labels.text.fill|color:0x7a7064","element:labels.text.stroke|color:0xffffff","element:labels.icon|visibility:off","feature:poi|visibility:off","feature:transit|visibility:off",
    "feature:road|element:geometry|color:0xffffff","feature:road.arterial|element:geometry|color:0xfbf7f0","feature:road.highway|element:geometry|color:0xe8dccb","feature:water|element:geometry|color:0xc9dbe3","feature:landscape.natural|element:geometry|color:0xe3ead9","feature:poi.park|element:geometry|color:0xdde7d2","feature:administrative|element:geometry|visibility:off"].map(v=>"&style="+encodeURIComponent(v)).join("");
  {const MAXH=Math.floor(600*SC),EX=Math.ceil(70*SC/2),parts=[];for(let y=0;y<HH;y+=MAXH)parts.push([y,Math.min(MAXH,HH-y)]);
    // Street names stay, but not around the bars: small-street names are cleared near each bar, and every name right behind the bar's label,
    // so bar names never sit on a street name. Three versions of the same map, blended with soft masks.
    const gurl=(py,rh,extra)=>{const ccx=x0+W/2/SC,ccy=y0+(py+rh/2)/SC;return `https://maps.googleapis.com/maps/api/staticmap?center=${ll(ccx,ccy)}&zoom=${z}&size=${Math.ceil(W/SC)}x${Math.ceil(rh/SC)}&scale=2&key=${GKEY}${DAY?GSTL:GST}${extra}`};
    const fetchSet=extra=>Promise.all(parts.map(([py,ph],i)=>{const last=i===parts.length-1,rh=last?ph:ph+EX;return load(gurl(py,rh,extra)).then(im=>im&&{im,rh})}));
    const S_=v=>"&style="+encodeURIComponent(v);
    const [gi,gl,gn]=await Promise.all([fetchSet(""),fetchSet(S_("feature:road.local|element:labels|visibility:off")),fetchSet(S_("element:labels|visibility:off"))]);
    if(gi.every(Boolean)){const paint=(c,set)=>set.forEach((g,i)=>{const[py,ph]=parts[i],sh=g.im.height*ph/g.rh;c.drawImage(g.im,0,0,g.im.width,sh,0,py,W,ph)});
      x.save();x.beginPath();x.rect(0,0,W,HH);x.clip();paint(x,gi);
      const side=X=>X<W-330?1:-1;
      const patch=(set,zone)=>{if(!set.every(Boolean))return;const o=document.createElement("canvas");o.width=W;o.height=HH;const oc=o.getContext("2d");paint(oc,set);
        const m=document.createElement("canvas");m.width=W;m.height=HH;const mc=m.getContext("2d");stops.forEach(s=>{const[X,Y]=P(s);zone(mc,X,Y,side(X))});
        oc.globalCompositeOperation="destination-in";oc.drawImage(m,0,0);x.drawImage(o,0,0)};
      const ell=(mc,cx,cy,rx,ry,hard)=>{mc.save();mc.translate(cx,cy);mc.scale(rx/100,ry/100);const rg=mc.createRadialGradient(0,0,0,0,0,100);rg.addColorStop(0,"#000");rg.addColorStop(hard,"#000");rg.addColorStop(1,"rgba(0,0,0,0)");mc.fillStyle=rg;mc.fillRect(-100,-100,200,200);mc.restore()};
      patch(gl,(mc,X,Y,sd)=>ell(mc,X+sd*150,Y-40,410,170,.85));
      patch(gn,(mc,X,Y,sd)=>ell(mc,X+sd*170,Y-50,230,62,.7));
      x.fillStyle=DAY?"rgba(11,13,18,.08)":"rgba(11,13,18,.18)";x.fillRect(0,0,W,HH);x.restore();x._mapSrc="google";return P}
    console.warn("story map: Google static map didn't load")}
  const imgs=await Promise.all(T.map(([tx,ty])=>Promise.all([load(url(DAY?ESRI_T("Base",false):ESRI,tx,ty)),load(url(DAY?ESRI_T("Reference",false):ESRI_LBL,tx,ty))])));const src="esri";
  if(imgs.filter(q=>q[0]).length<T.length*.6){console.warn("story map: tiles didn't load");return null}
  x._mapSrc=src;
  x.save();x.beginPath();x.rect(0,0,W,HH);x.clip();x.imageSmoothingQuality="high";
  T.forEach(([tx,ty],i)=>{if(!imgs[i][0])return;const X=Math.floor((tx*256-x0)*SC),Y=Math.floor((ty*256-y0)*SC),Z=Math.ceil(256*SC)+1;x.drawImage(imgs[i][0],X,Y,Z,Z)});
  T.forEach(([tx,ty],i)=>{if(!imgs[i][1])return;const X=Math.floor((tx*256-x0)*SC),Y=Math.floor((ty*256-y0)*SC),Z=Math.ceil(256*SC)+1;x.globalAlpha=.75;x.drawImage(imgs[i][1],X,Y,Z,Z);x.globalAlpha=1});
  x.fillStyle=DAY?"rgba(11,13,18,.1)":"rgba(11,13,18,.25)";x.fillRect(0,0,W,HH);x.restore();
  return P;
}
// Crawl cards are made once per crawl and kept, and the scorecard starts making them in the background,
// so Share opens straight onto the cards and the share row (like Spotify's share screen).
const CARDS=new Map();
const cardLooks=r=>r.photo?["full","map","rund"]:["map","rund"];   // one map card: light for a daytime crawl, dark after sunset
const cardSig=r=>[r.id,r.photo?r.photo.length+r.photo.slice(-24):"",r.title||"",r.barOfDay||"",r.jp&&r.jp.k||"",(r.visits||[]).map(v=>v.id+(v.counted===true?1:v.counted===false?0:2)).join(","),r.endedAt||"",window.RUND_VAR||""].join("|");
function cardBlob(r,look){const k=cardSig(r)+"|"+look;let p=CARDS.get(k);
  if(!p){p=Promise.race([storyCard(r,look),new Promise(z=>setTimeout(()=>z(null),20000))]).catch(e=>{console.warn(e);return null}).then(b=>{if(!b)CARDS.delete(k);return b});CARDS.set(k,p)}
  return p}
let prefetchT=null;
function prefetchCards(r){clearTimeout(prefetchT);if(!r||r.demo)return;
  prefetchT=setTimeout(async()=>{for(const l of cardLooks(r)){if(S.route!=="end"||S.lastEnd!==r.id)return;await cardBlob(r,l)}},1200)}
// which apps the share row can send to directly (Android app); the phone's own share sheet covers the rest
let shareTargets=null;
function shareTargetsP(){if(shareTargets)return shareTargets;
  shareTargets=NATIVE&&CAPX.getPlatform()==="android"?Promise.resolve().then(()=>PLG.ShareTo.available()).then(o=>o||{}).catch(()=>({}))
    :Promise.resolve(ANDROID_WEB?{whatsapp:true,messages:true}:{});
  return shareTargets}
const SI={
  copy:I.link,
  whatsapp:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2A9.8 9.8 0 0 0 3.6 17l-1.4 4.9 5-1.3A9.8 9.8 0 1 0 12 2.2zm0 17.8a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c1.6.7 2.2.7 3 .6.5-.1 1.4-.6 1.6-1.2.2-.6.2-1 .1-1.2l-.5-.2z"/></svg>',
  stories:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg>',
  messages:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.6A8 8 0 1 1 21 12z"/><circle cx="8.5" cy="12" r=".6" fill="currentColor"/><circle cx="12" cy="12" r=".6" fill="currentColor"/><circle cx="15.5" cy="12" r=".6" fill="currentColor"/></svg>',
  save:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>',
  more:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5.5" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="18.5" cy="12" r="1.8"/></svg>'};
async function shareStory(r){track("share_open",{has_photo:!!r.photo});
  const ov=document.createElement("div");ov.className="sharev";document.body.appendChild(ov);requestAnimationFrame(()=>ov.classList.add("on"));
  let urls=[],looks=[],blobs=[],cur=0,clips=[],gen=0;
  const close=()=>{gen++;ov.classList.remove("on");ov.querySelectorAll("video").forEach(v=>v.pause());setTimeout(()=>{ov.remove();urls.forEach(u=>u&&URL.revokeObjectURL(u))},250)};
  const linkP=r.shared?Promise.resolve(null):crawlLink(r);
  const addPhoto=()=>photoSheet(r,()=>build(0));
  const copyText=async t=>{const ok=await (navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(t).then(()=>true,()=>false):Promise.resolve(false));if(ok)return true;
    try{const ta=document.createElement("textarea");ta.value=t;ta.style.cssText="position:fixed;opacity:0";document.body.appendChild(ta);ta.select();const k=document.execCommand("copy");ta.remove();return k}catch(e){return false}};
  async function build(start){const g=++gen;
    looks=cardLooks(r);blobs=looks.map(()=>null);urls.forEach(u=>u&&URL.revokeObjectURL(u));urls=looks.map(()=>null);cur=Math.min(start||0,looks.length-1);
    const T=await shareTargetsP();if(g!==gen)return;
    const acts=[["copy","Copy link",!r.shared],["whatsapp","WhatsApp",!!T.whatsapp],["stories","Stories",!!T.stories],["messages","Messages",!!T.messages],["save","Save",true],["more","More",true]].filter(a=>a[2]);
    const thumbs=(r.photos||[]).length>1?`<div class="shv-th">${r.photos.map((p,i)=>`<button type="button" data-ph="${i}" aria-pressed="${r.photo===p}"><img src="${p}" alt=""></button>`).join("")}</div>`:"";
    ov.innerHTML=`<div class="shv-top"><b>Share crawl</b><button type="button" class="shv-x" aria-label="Close">${I.x}</button></div>
      <div class="shv-car">${looks.map((l,i)=>`<div class="shv-s" data-s="${i}"><div class="shv-ph"></div></div>`).join("")}</div>
      <div class="shv-ctl"><div class="shv-dots dots">${looks.map((l,i)=>`<button type="button" data-k="${i}" aria-pressed="${i===cur}"></button>`).join("")}</div>${r.photo?thumbs:r.followed?"":`<button class="txtbtn" type="button" id="shvAdd2">${I.camera} Add a photo</button>`}</div>
      <div class="shv-row">${acts.map(([k,l])=>`<button type="button" class="shv-a sa-${k}" data-a="${k}"><span>${SI[k]}</span><small>${l}</small></button>`).join("")}</div>`;
    ov.querySelector(".shv-x").onclick=close;
    const car=ov.querySelector(".shv-car"),slides=()=>[...ov.querySelectorAll(".shv-s")],dots=()=>[...ov.querySelectorAll("[data-k]")];
    const mark=()=>{dots().forEach((d,i)=>d.setAttribute("aria-pressed",i===cur));const th=ov.querySelector(".shv-th");if(th)th.style.visibility=looks[cur]==="full"||looks[cur]==="rund"?"visible":"hidden";
      slides().forEach((sl,i)=>{const v=sl.querySelector("video");if(v){if(i===cur)v.play().catch(()=>{});else v.pause()}})};
    const bindDots=()=>dots().forEach((d,i)=>d.onclick=()=>car.scrollTo({left:i*car.clientWidth,behavior:"smooth"}));bindDots();
    car.addEventListener("scroll",()=>{const i=Math.round(car.scrollLeft/car.clientWidth);if(i!==cur&&i<looks.length){cur=i;mark()}},{passive:true});
    requestAnimationFrame(()=>{car.scrollLeft=cur*car.clientWidth;mark()});
    ov.querySelectorAll("[data-ph]").forEach(b=>b.onclick=()=>{r.photo=r.photos[+b.dataset.ph];saveH();build(cur)});
    if($("shvAdd2"))$("shvAdd2").onclick=addPhoto;
    // cards fill in as they're ready (straight away when the scorecard already made them)
    const ready=looks.map((l,i)=>cardBlob(r,l).then(b=>{if(g!==gen)return null;const sl=slides()[i];
      if(!b){if(sl)sl.innerHTML=`<div class="shv-ph none">Couldn't make this one</div>`;return null}
      blobs[i]=b;urls[i]=URL.createObjectURL(b);if(sl)sl.innerHTML=`<img src="${urls[i]}" alt="Crawl card">`;return b}));
    clipList(r.id).then(L=>{if(g!==gen||!L||!L.length)return;clips=L;
      L.forEach(c=>{const i=looks.length;looks.push("clip");const u=URL.createObjectURL(c.blob);urls.push(u);blobs.push(c.blob);ready.push(Promise.resolve(c.blob));
        car.insertAdjacentHTML("beforeend",`<div class="shv-s clip" data-s="${i}"><video poster="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" src="${u}" muted loop playsinline preload="metadata"></video><button type="button" class="shv-snd" aria-label="Sound">${I.sound}</button></div>`);
        ov.querySelector(".shv-dots").insertAdjacentHTML("beforeend",`<button type="button" data-k="${i}" aria-pressed="false" class="cdot"></button>`)});
      ov.querySelectorAll(".shv-snd").forEach(b=>b.onclick=()=>{const v=b.parentNode.querySelector("video");v.muted=!v.muted;b.classList.toggle("on",!v.muted)});bindDots()}).catch(()=>{});
    const item=async()=>{const i=cur,b=blobs[i]||await ready[i];if(!b){toast("That card didn't load. Swipe to another.",2500);return null}
      const clip=looks[i]==="clip",c=clip?clips[i-(looks.length-clips.length)]:null,name=clip?clipFile(c.blob,c.type,c.at).name:`rooftop-roulette-${looks[i]}.png`;
      return {b,clip,c,name,type:clip?c.type.split(";")[0]:"image/png",look:looks[i]}};
    ov.querySelectorAll("[data-a]").forEach(btn=>btn.onclick=async()=>{const a=btn.dataset.a;buzz(10);
      if(a==="copy"){const link=await linkP;if(!link)return;track("link_copied");toast((await copyText(link))?"Link copied.":"Couldn't copy the link.",2200);return}
      const link=await linkP,text=link?`${crawlLine(r)}\n${link}`:"";
      if(a==="whatsapp"&&!NATIVE){track("share_sent",{to:"whatsapp"});location.href="https://wa.me/?text="+encodeURIComponent(text||crawlLine(r));return}
      if(a==="messages"&&!NATIVE){track("share_sent",{to:"messages"});location.href="sms:?&body="+encodeURIComponent(text||crawlLine(r));return}
      const it=await item();if(!it)return;
      if(a==="save"){track("card_saved",{kind:it.look});if(it.clip){clipSave(it.c.blob,it.c.type,it.c.at);return}
        if(NATIVE){nativeSavePhoto(it.b,it.name).then(()=>toast("Saved to your gallery.",2500)).catch(e=>{console.warn(e);toast("Couldn't save to your gallery.",3500)});return}
        const u=URL.createObjectURL(it.b),el=document.createElement("a");el.href=u;el.download=it.name;document.body.appendChild(el);el.click();el.remove();setTimeout(()=>URL.revokeObjectURL(u),4000);return}
      track("share_sent",{kind:it.look,to:a});
      if(a==="more"){if(it.clip){clipShare(it.c.blob,it.c.type,it.c.at,text);return}
        if(NATIVE){nativeShare(it.b,it.name,"Rooftop Roulette",text).catch(e=>console.warn(e));return}
        const file=new File([it.b],it.name,{type:"image/png"}),o=text?{files:[file],text}:{files:[file]};
        if(navigator.canShare&&navigator.canShare(o))await navigator.share(o).catch(()=>{});else{const u=URL.createObjectURL(it.b),el=document.createElement("a");el.href=u;el.download=it.name;el.click();setTimeout(()=>URL.revokeObjectURL(u),4000)}return}
      // Stories, WhatsApp, Messages: straight into that app
      try{const path=await nativeFile(it.b,it.name);await PLG.ShareTo.share({to:a,path,type:it.type,text:a==="stories"?undefined:text})}
      catch(e){console.warn(e);nativeShare(it.b,it.name,"Rooftop Roulette",a==="stories"?"":text).catch(()=>{})}});
  }
  build(0);
}
function roundRect(x,X,Y,w,h,r){x.beginPath();x.moveTo(X+r,Y);x.arcTo(X+w,Y,X+w,Y+h,r);x.arcTo(X+w,Y+h,X,Y+h,r);x.arcTo(X,Y+h,X,Y,r);x.arcTo(X,Y,X+w,Y,r);x.closePath()}
const loadImg=src=>new Promise((res,rej)=>{const i=new Image();const t=setTimeout(()=>rej("timeout"),12000);i.onload=()=>{clearTimeout(t);res(i)};i.onerror=e=>{clearTimeout(t);rej(e)};i.src=src});
function drawRoute(x,r,st,bx,by,bw,bh){
  const pts=crawlPath(r,st).stops;if(!pts.length&&r.startPos)pts.push(r.startPos);if(!pts.length)return;
  // faint zone circle + all bars around for texture
  const lat0=pts.reduce((s,p)=>s+p.lat,0)/pts.length,cos=Math.cos(lat0*Math.PI/180);
  const xs=pts.map(p=>p.lng*cos),ys=pts.map(p=>-p.lat);
  let minX=Math.min(...xs),maxX=Math.max(...xs),minY=Math.min(...ys),maxY=Math.max(...ys);
  const span=Math.max(maxX-minX,maxY-minY,.006),pad=110,sc=Math.min((bw-2*pad)/span,(bh-2*pad)/span);
  const cx=(minX+maxX)/2,cy=(minY+maxY)/2,P=p=>[bx+bw/2+(p.lng*cos-cx)*sc,by+bh/2+(-p.lat-cy)*sc];
  x.fillStyle="#2A303D";VENUES.forEach(v=>{const [X,Y]=P(v);if(X>bx&&X<bx+bw&&Y>by&&Y<by+bh){x.beginPath();x.arc(X,Y,7,0,7);x.fill()}});
  const path=()=>{x.beginPath();pts.forEach((p,i)=>{const [X,Y]=P(p);i?x.lineTo(X,Y):x.moveTo(X,Y)})};
  x.lineCap="round";x.lineJoin="round";x.strokeStyle="#0B0D12";x.lineWidth=22;path();x.stroke();x.strokeStyle="#F5B83D";x.lineWidth=12;path();x.stroke();
    st.arrived.forEach((v,i)=>{const [X,Y]=P(byId(v.id));x.fillStyle=v.counted===true?"#F5B83D":"#6B7280";x.beginPath();x.arc(X,Y,20,0,7);x.fill();x.strokeStyle="#0B0D12";x.lineWidth=5;x.stroke();x.fillStyle="#241803";x.font='800 22px system-ui,Arial';x.textAlign="center";x.fillText(String(i+1),X,Y+8);x.textAlign="left"});
}
const GAL='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2.5"/><circle cx="9" cy="10" r="1.8"/><path d="M21 16l-5-5-9 9"/></svg>';
// Full-size photos and clips from one crawl, swipe between them.
async function mediaView(r,start){
  let clips=[];try{clips=await clipList(r.id)}catch(e){}
  const items=(r.photos||[]).map(p=>({k:"p",src:p})).concat(clips.map(c=>({k:"c",c,src:URL.createObjectURL(c.blob)})));if(!items.length){photoSheet(r,renderEnd);return}
  let cur=Math.max(0,start!=null?start:items.findIndex(x=>x.k==="p"&&x.src===r.photo));
  const ov=document.createElement("div");ov.className="mview";
  ov.innerHTML=`<div class="mv-car">${items.map(x=>`<div class="mv-s">${x.k==="p"?`<img src="${x.src}" alt="">`:`<video poster="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" src="${x.src}#t=0.1" controls playsinline preload="metadata"></video>`}</div>`).join("")}</div>
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
  $("barsLists").innerHTML=[["want","Hit list",nWant],["fav","Favourites",nFav],["been","Visited",nBeen]].map(([k,l,n])=>`<button class="blist ${k}" type="button" data-l="${k}"><b>${n}</b><span>${l}</span></button>`).join("")+`<button class="txtbtn nfulink" type="button" data-l="nfu">Pass list ›</button>`;
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
      :`<div class="nores"><b>No rooftop called "${esc(q.value.trim())}" in ${esc(cityIn(S.city))}</b><span>If it's a rooftop bar, it's not on Rooftop Roulette yet. Every rooftop here has been checked, so if it's missing we haven't got to it.</span></div>`)
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
function renderBars(){tickOff();
  if(!$("barsLists"))return;
  if(bSearching){paintSearch();return}
  const mapV=S.barsView==="map";
  $("barsMapWrap").hidden=!mapV;$("barsList").hidden=mapV;$("barsLists").hidden=mapV;
  $("barsMap").style.height="";$("barsMap").style.minHeight="";
  const fitB=()=>{const el=$("barsMap"),tb=$("tabs");if(!el||!el.offsetParent||S.barsView!=="map")return;const top=el.getBoundingClientRect().top,mi=$("mini"),bot=Math.min(tb&&tb.offsetParent?tb.getBoundingClientRect().top:innerHeight,mi&&!mi.hidden&&mi.offsetParent?mi.getBoundingClientRect().top:innerHeight);el.style.height=Math.max(260,Math.round(bot-top-12))+"px";if(bMap)bMap.resize()};
  if(mapV){requestAnimationFrame(fitB);setTimeout(fitB,350)}
  $("bView").innerHTML=mapV?`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg> List`:`${I.pin} Map`;
  const t=now(),y=you(),c=collectedMap(),g=G();
  // one list, filtered: everything, the ones you've been to, the ones you've hidden (and your zone, mid-game)
  const tabs=[["all","All"]];   // your crawl's map lives on Play now
  let f=S.barsFilter;if(!tabs.some(x=>x[0]===f))f=tabs[0][0];
  $("barsCity").innerHTML=cityBtn();
  const inCity=v=>cityOf(v)===S.city,nWant=VENUES.filter(v=>S.want[v.id]&&inCity(v)).length,nBeen=VENUES.filter(v=>(c[v.id]||S.been[v.id])&&inCity(v)).length,nNfu=Object.keys(S.nfu).filter(id=>byId(id)).length;
  paintLists();
  if(false)$("barsLists").innerHTML=[["want","Hit list",nWant],["been","Visited",nBeen]].map(([k,l,n])=>`<button class="blist ${k}" type="button" data-l="${k}"><b>${n}</b><span>${l}</span></button>`).join("")+`<button class="txtbtn nfulink" type="button" data-l="nfu">Pass list ›</button>`;
  const today=new Date().toDateString(),ct=sydAt(t,TZ[S.city]);
  const openOnly=false;
  const rgSel=f==="all"?(S.barsRegion||"all"):null;
  $("barsSeg").hidden=false;
  $("barsSeg").innerHTML=""
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
    intro=`${CR(g)?(g.cz.type==="list"?`Your ${listName(g.cz.list)}. Your spins only land on these.`:g.cz.type==="spot"?"Rooftops your next spin could land on, "+esc(g.cz.name.toLowerCase().replace(/^around /,"around "))+".":"Rooftops your next spin could land on, from where you are now."):"These are the rooftops your spins can land on."} ${tapHint}`;
    rows=[...live.map(v=>rowHTML(v,os(v),v.id===g.target?"next":barStatus(v,c),y)),
      ...tonight.map(id=>rowHTML(byId(id),os(byId(id)),"done",y)),
      ...(closed.length?[`<div class="grouphd shuthd">Closed now</div>`]:[]),...closed.map(v=>rowHTML(v,os(v),barStatus(v,c),y))];
    pins=inZ.map(v=>({v,cls:v.id===g.target?"big":tonight.includes(v.id)?"done":os(v).open?"":"off"}));
    if(!CR(g)){const free=g.started&&basePool().length<2,canMove=free||!g.voluntaryUsed;
      extra=canMove?`<button class="btn sm line" type="button" id="bMove" style="margin-top:10px">${I.move} Change of scenery? Move zone</button>`:`<p class="note" style="margin-top:8px">You've moved your zone this crawl.</p>`}
  }else if(f==="other"){
    const zIds=new Set((CR(g)?cruiseSet(g):inCircle(g.center,g.radius)).map(v=>v.id));
    const others=VENUES.filter(v=>!zIds.has(v.id)&&!S.nfu[v.id]).sort(sortD);
    const free=g.started&&basePool().length<2,canMove=free||!g.voluntaryUsed;
    if(CR(g)){intro=`Every other rooftop in ${S.city}. ${tapHint}`}else intro=`<b>Fancy a change of scenery?</b> Move your zone and every spin from then on lands in the new area. You get one move per game${free?", and right now it's free because your zone's nearly empty":""}.`;
    extra=CR(g)?"":canMove?`<button class="btn sm" type="button" id="bMove" style="margin-top:10px">${I.move} Move zone</button>`:`<p class="note" style="margin-top:8px">You've moved your zone this crawl.</p>`;
    rows=groupedRows(others,v=>rowHTML(v,os(v),barStatus(v,c),y));
    pins=others.map(v=>({v,cls:os(v).open?"":"off"}));
  }else if(f==="been"){
    const list=VENUES.filter(v=>{const s=barStatus(v,c);return s==="col"||s==="been"}).sort(sortD);
    intro=`Rooftops you've been to. Turn on <b>Skip visited rooftops</b> when you set up and they won't come up.`;
    rows=list.map(v=>rowHTML(v,os(v),barStatus(v,c),y));
    if(!rows.length)rows=[`<div class="empty" style="padding:22px 8px">Nothing here yet. Tap any rooftop in another tab and switch on "Visited".</div>`];
    pins=list.map(v=>({v,cls:"done"}));
  }else if(f==="nfu"){
    const list=VENUES.filter(v=>S.nfu[v.id]).sort(sortD);
    intro=`Rooftops to leave out of R&amp;R. Tap one to bring it back.`;
    rows=list.map(v=>rowHTML(v,os(v),"nfu",y));
    if(!rows.length)rows=[`<div class="empty" style="padding:22px 8px">Nothing here yet. Tap any rooftop in another tab and switch on "Pass".</div>`];
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
    if(!bMapP)bMapP=makeMap("barsMap",{greedy:true}).then(m=>{m.setView(cityC(),13);m.onTap((lat,lng)=>{if(S.test){S.fake={lat,lng};save();onLocation();renderBars()}});return m});
    const m=bMap=await bMapP;if(!m)return;m.resize();m.clear();
    if(g&&!CR(g)&&f==="zone"){m.circle(g.center,g.radius);if(bMapFit||m._zoneFor!==g.id+g.center.lat){m._zoneFor=g.id+g.center.lat;bMapFit=false;m.fitZone(g.center,g.radius)}}
    pins.forEach(({v,cls})=>m.pin(v,cls,()=>barSheet(v)));
    if(fitTo&&fitTo.length&&(bMapFit||m._fitRg!==(S.barsRegion||"all"))){m._fitRg=S.barsRegion||"all";bMapFit=false;m.fitPts(fitTo,15)}
    setMe(m);
  });
}
$("barsSeg").onclick=e=>{const b=e.target.closest("button");if(!b)return;
  if(b.hasAttribute("data-open")){S.barsOpen=b.getAttribute("aria-pressed")!=="true";S.barsOpenDay=new Date().toDateString();save();renderBars();return}
  const w=b.dataset.w;if(w==="zone")S.barsFilter="zone";else{S.barsFilter="all";S.barsRegion=w}bMapFit=true;save();renderBars()};
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
      ${night&&!night.followed&&night.barOfDay!==v.id&&night.visits.some(x=>x.id===v.id&&x.counted===true)&&night.visits.filter(x=>x.counted===true).length>=2?`<button class="btn" type="button" id="mkBod">${I.sparkle} Make this bar of the day</button>`:""}
      ${c[v.id]||night?"":`<button class="toggle" type="button" id="tgBeen" role="switch" aria-checked="${!!S.been[v.id]}"><span class="t"><b>Visited</b><small>Rooftops you've been to</small></span><span class="sw"></span></button>`}
      ${been_&&!S.want[v.id]?"":`<button class="toggle" type="button" id="tgWant" role="switch" aria-checked="${!!S.want[v.id]}"><span class="t"><b>Hit list</b><small>Rooftops you want to try</small></span><span class="sw"></span></button>`}
      <button class="toggle" type="button" id="tgNfu" role="switch" aria-checked="${!!S.nfu[v.id]}"><span class="t"><b>Pass</b><small>Rooftops to leave out of R&amp;R</small></span><span class="sw"></span></button>
    </div>
    <button class="txtbtn reportbtn" type="button" id="rpBar">Wrong hours or info? Let us know</button>`,()=>{
    $("rpBar").onclick=()=>{track("report_change");const sub=encodeURIComponent(`${v.name}: info update`),body=encodeURIComponent(`Bar: ${v.name} (${v.id})\nWhat's changed:\n\n`);location.href=`mailto:hello@rooftoproulette.com?subject=${sub}&body=${body}`};bindSheetCard(v,bf);bindVisits();
    if($("mkBod"))$("mkBod").onclick=()=>{night.barOfDay=v.id;night.bodDone=true;saveH();if(typeof liveMeta==="function")liveMeta(night);buzz(15);closeSheet();if(S.route==="end")renderEnd()};
    if($("tgBeen"))$("tgBeen").onclick=()=>{if(S.been[v.id])delete S.been[v.id];else{S.been[v.id]=1;delete S.want[v.id]}save();barSheet(v);if(S.route==="bars")renderBars()};
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
  {const sh=$("sheet"),host=sh&&sh.open?sh:document.body;if(t.parentNode!==host)host.appendChild(t)}   // above an open panel, not hidden behind it
  clearTimeout(toastT);t.innerHTML=html;t.classList.add("on");if(bind)bind(t);toastT=setTimeout(()=>t.classList.remove("on"),ms)}
// drag a map card or the bar list down (or sideways) to put it away
function swipeHide(el,handle){let x0=null,y0=0,dx=0,dy=0;
  el.addEventListener("touchstart",e=>{if(handle&&!e.target.closest(handle))return;x0=e.touches[0].clientX;y0=e.touches[0].clientY;dx=dy=0;el.style.transition="none"},{passive:true});
  el.addEventListener("touchmove",e=>{if(x0===null)return;dx=e.touches[0].clientX-x0;dy=Math.max(0,e.touches[0].clientY-y0);const side=Math.abs(dx)>dy;el.style.transform=side?`translateX(${dx}px)`:`translateY(${dy}px)`;el.style.opacity=String(1-Math.min(.7,Math.max(Math.abs(dx),dy)/240))},{passive:true});
  el.addEventListener("touchend",()=>{if(x0===null)return;x0=null;el.style.transition="transform .18s ease, opacity .18s ease";
    if(Math.abs(dx)>70||dy>50){el.style.opacity="0";el.style.transform=Math.abs(dx)>dy?`translateX(${dx>0?120:-120}%)`:"translateY(120%)";setTimeout(()=>{el.hidden=true;el.style.transform="";el.style.opacity="";el.style.transition=""},180)}
    else{el.style.transform="";el.style.opacity=""}})}
// drag a toast sideways (or down) to get rid of it
// swipe a note away: sideways, or towards the edge it sits on (down at the bottom, up when it's at the top)
function swipeAway(t){let x0=null,y0=0,dx=0,dy=0,up=false;
  t.addEventListener("pointerdown",e=>{if(e.target.closest("button"))return;x0=e.clientX;y0=e.clientY;dx=dy=0;up=t.getBoundingClientRect().top<innerHeight/2;t.style.transition="none";t.setPointerCapture(e.pointerId)});
  t.addEventListener("pointermove",e=>{if(x0===null)return;dx=e.clientX-x0;dy=Math.max(0,up?y0-e.clientY:e.clientY-y0);t.style.translate=Math.abs(dx)>dy?`${dx}px 0`:`0 ${up?-dy:dy}px`;t.style.opacity=String(1-Math.min(.8,Math.max(Math.abs(dx),dy)/220))});
  const end=()=>{if(x0===null)return;x0=null;t.style.transition="translate .2s ease, opacity .2s ease";
    if(Math.abs(dx)>70||dy>40){t.style.translate=Math.abs(dx)>dy?`${dx>0?"110%":"-110%"} 0`:`0 ${up?"-120%":"120%"}`;t.style.opacity="0";clearTimeout(toastT);setTimeout(()=>{t.classList.remove("on");t.style.translate="";t.style.opacity=""},220)}
    else{t.style.translate="";t.style.opacity=""}};
  t.addEventListener("pointerup",end);t.addEventListener("pointercancel",end);t.style.touchAction="none"}
const hideToast=()=>{const t=$("toast");if(t)t.classList.remove("on");clearTimeout(toastT)};
function skipToast(id){const v=byId(id);if(!v||S.nfu[id])return;
  toast(`<span>Skipped <b>${esc(v.name)}</b></span><button type="button" id="tNfu">Add to Pass list</button>`,6000,()=>$("tNfu").onclick=()=>{
    S.nfu[id]=1;const w=!!S.want[id];delete S.want[id];save();buzz(15);
    toast(`<span><b>${esc(v.name)}</b> added to Pass list</span><button type="button" id="tUndo">Undo</button>`,4500,()=>$("tUndo").onclick=()=>{delete S.nfu[id];if(w)S.want[id]=1;save();hideToast()})})}
/* One of your lists: search to add (suggests as you type), ✕ to take one off */
const fold=x=>x.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();
function listSheet(k,msg,after){
  const c=collectedMap();
  const L={want:{t:"Hit list",d:"Rooftops you've been meaning to get to. Start R&amp;R with <b>Pick from my Hit list</b> and the wheel only spins these."},
    been:{t:"Visited",d:"Rooftops you've been to before. Turn on <b>Skip visited rooftops</b> when you set up and they won't come up."},
    nfu:{t:"Pass",d:"Rooftops to leave out of R&amp;R."},
    fav:{t:"Favourites",d:"Rooftops you love. Tap the heart on any rooftop to add it here."}}[k];
  const has=id=>k==="been"?!!(S.been[id]||c[id]):!!S[k][id];
  const add=id=>{if(k==="been"){S.been[id]=1;delete S.want[id]}else if(k==="fav"){S.fav[id]=Date.now();delete S.want[id];delete S.nfu[id]}else{S[k][id]=1;delete S[k==="want"?"nfu":"want"][id];if(k==="nfu")delete S.fav[id]}save();buzz(10)};
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
        return `<button class="lsrow lspick" type="button" data-t="${v.id}" ${fixed?"disabled":""}><span class="t"><b>${esc(v.name)}</b><small>${fixed?esc(v.area)+" · Visited on a crawl":sub(v)}</small></span><span class="pl${on?" on":""}">${on?TICK:I.plus}</span></button>`}).join("")
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
  const R=[],best=(lbl,ic,list,val,fmt,sub,lowest,open)=>{const c=list.filter(x=>val(x)!=null&&val(x)>0);if(!c.length)return;c.sort((x,y)=>lowest?val(x)-val(y):val(y)-val(x));const w=c[0];
    R.push({lbl,ic,v:fmt(val(w)),sub:sub(w),id:w.r.id,open:open?()=>open(w,lbl,fmt(val(w))):null})};
  const nights=H.map(r=>({r,st:stats(r)})),tn=nights.filter(x=>!x.r.noLoc);
  [[60,"Most rooftops · 1 hr"],[120,"Most rooftops · 2 hr"]].forEach(([l,t])=>best(t,"glass",nights.filter(x=>x.r.mode!=="cruise"&&x.r.len===l),x=>x.st.counted.length,n=>n,x=>dateTxt(rt(x.r,x.r.startedAt)),false,(w,l)=>crawlStatSheet("bars",w.r.id,l)));
  best("Most rooftops · R&amp;R","glass",nights.filter(x=>x.r.mode==="cruise"),x=>x.st.counted.length,n=>n,x=>dateTxt(rt(x.r,x.r.startedAt)),false,(w,l)=>crawlStatSheet("bars",w.r.id,l));
  best("Most rooftop time in a crawl","moon",tn.filter(x=>x.st.counted.length),x=>x.st.counted.reduce((s,v)=>s+Math.max(0,(v.leftAt||x.r.endedAt||x.r.endsAt)-v.arrivedAt),0),hmm,x=>dateTxt(rt(x.r,x.r.startedAt))+" · "+modeTxt(x.r),false,(w,l)=>crawlStatSheet("time",w.r.id,l));
  best("Furthest crawl","route",tn,x=>x.st.total,km,x=>dateTxt(rt(x.r,x.r.startedAt))+" · "+x.st.counted.length+" rooftop"+(x.st.counted.length===1?"":"s"),false,(w,l)=>crawlStatSheet("dist",w.r.id,l));
  const vs=allVisits().filter(x=>x.v.leftAt!=null&&!x.r.noLoc);
  best("Longest stay","clock",vs,x=>x.ms,hmm,x=>esc(x.b.name)+" · "+dateTxt(x.t),false,(w,l,v)=>staySheet(w.r,w.v,l,v));
  best("Quickest stay","bolt",vs,x=>x.ms,hmm,x=>esc(x.b.name)+" · "+dateTxt(x.t),true,(w,l,v)=>staySheet(w.r,w.v,l,v));
  {const c={};allVisits().filter(x=>!x.r.noLoc).forEach(x=>{const o=c[x.b.id]||(c[x.b.id]={b:x.b,ms:0,n:0});o.ms+=x.ms;o.n++});const top=Object.values(c).filter(o=>o.n>1).sort((a,b)=>b.n-a.n||b.ms-a.ms)[0];   // 2+ visits, so it's never just the longest stay again
    if(top&&top.ms>0)R.push({lbl:"Your local",ic:"clock",v:hmm(top.ms),sub:esc(top.b.name)+" · "+top.n+" visit"+(top.n===1?"":"s"),bar:top.b.id})}
  const legs=[],hops=[];tn.forEach(({r,st})=>{if(st.longest&&st.longest.to){const k=st.arrived.indexOf(st.longest.to);if(k>0)legs.push({r,d:st.longest.d,to:st.longest.to.id,from:st.arrived[k-1].id})}if(st.quick&&st.quick.ms>=30000)hops.push({r,ms:st.quick.ms,from:st.quick.from,to:st.quick.to})});
  best("Longest walk","walk",legs,x=>x.d,mOrKm,x=>"To "+esc(byId(x.to).name)+" · "+dateTxt(rt(x.r,x.r.startedAt)),false,(w,l,v)=>legSheet(w.r,w.from,w.to,l,v));
  best("Fastest changeover","bolt",hops,x=>x.ms,hmm,x=>esc(byId(x.from).name)+" → "+esc(byId(x.to).name),true,(w,l,v)=>legSheet(w.r,w.from,w.to,l,v));
  return R}
function renderHist(){
  const b=$("v-hist");
  if(!H.length){b.innerHTML=`<div class="cityrow"><h1 class="q">My Tab</h1>${acctChip()}<button class="gear tabgear" type="button" data-gear aria-label="Settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></button></div><div class="empty">${I.trophy}<b style="color:var(--text);font-size:17px">No crawls yet</b><span>Finish a crawl and it goes on your tab.</span><button class="btn" type="button" id="hStart" style="max-width:260px">Start a new crawl</button></div>`;$("hStart").onclick=startWizard;return}
  const N=H.map(stats),games=H.length,vs=allVisits(),bars=vs.length,uniq=new Set(vs.map(x=>x.b.id)).size,TI=H.map((r,i)=>!r.noLoc);
  const tracked=TI.filter(Boolean).length||1,dist_=N.reduce((s,x,i)=>s+(TI[i]?x.total:0),0),tv=vs.filter(x=>!x.r.noLoc),atBars=tv.reduce((s,x)=>s+x.ms,0),mk=monthTxt(now()),thisMonth=H.filter(r=>monthTxt(rt(r,r.startedAt))===mk).length;
  const recs=records();
  b.innerHTML=`<div class="cityrow"><h1 class="q">My Tab</h1>${acctChip()}<button class="gear tabgear" type="button" data-gear aria-label="Settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></button></div>
    ${typeof tabSignIn==="function"?tabSignIn():""}
    <div class="grid2 hstats">
      <button class="stat tap" type="button" id="hCrawls"><small>Crawls <span class="chev">›</span></small><b>${games}</b><em>${thisMonth?thisMonth+" this month":"Last: "+dateTxt(rt(H[0],H[0].startedAt))}</em></button>
      <button class="stat tap" type="button" id="hVisits"><small>Rooftops visited <span class="chev">›</span></small><b>${uniq}</b><em>Avg ${+(bars/games).toFixed(1)} a crawl</em></button>
      <button class="stat tap" type="button" id="hDist"><small>Distance <span class="chev">›</span></small><b>${TI.some(Boolean)?km(dist_):"—"}</b><em>${TI.some(Boolean)?"Avg "+km(dist_/tracked)+" a crawl":"Needs location"}</em></button>
      <button class="stat tap" type="button" id="hTime"><small>Time at rooftops <span class="chev">›</span></small><b>${tv.length?hmm(atBars):"—"}</b><em>${tv.length?"Avg "+hmm(atBars/tv.length)+" a rooftop":"Needs location"}</em></button>
    </div>
    ${deckCardHTML()}
    ${recs.length?`<div class="eyebrow hsec">Personal bests</div><div class="recs">${recs.map((x,ri)=>`<button class="rec" type="button" ${x.bar?`data-bar="${x.bar}"`:`data-id="${x.id}" data-ri="${ri}"`}><span class="t"><small>${x.lbl}</small><span>${x.sub}</span></span><b>${x.v}</b><span class="chev">›</span></button>`).join("")}</div>`:""}
`;
  if($("hDeck"))$("hDeck").onclick=deckSheet;
  b.querySelectorAll(".rec[data-id]").forEach(x=>x.onclick=()=>{const rc=recs[+x.dataset.ri];if(rc&&rc.open){rc.open();return}S.lastEnd=x.dataset.id;go("end")});
  b.querySelectorAll(".rec[data-bar]").forEach(x=>x.onclick=()=>{const v=byId(x.dataset.bar);if(v)barSheet(v)});
  if($("tabIn"))$("tabIn").onclick=()=>signInSheet("Keep your crawls and saved lists across devices.","my_tab","Save your crawls");
  $("hCrawls").onclick=()=>crawlsSheet();
  $("hVisits").onclick=()=>visitsSheet();
  $("hDist").onclick=()=>crawlStatSheet("dist");$("hTime").onclick=()=>crawlStatSheet("time");
}
// ⋯ on a crawl: name it, move it between real and test, or delete it
const IC={edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/></svg>',
  swap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4L3 8l4 4"/><path d="M3 8h14"/><path d="M17 20l4-4-4-4"/><path d="M21 16H7"/></svg>',
  bin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M10 11v6M14 11v6"/><path d="M6 7l1 13h10l1-13"/><path d="M9 7V4h6v3"/></svg>'};
function crawlMenu(r){const n=stats(r).counted.length,isT=!!r.test;
  sheet(`<h3>${r.title?esc(r.title):dateTxt(rt(r,r.startedAt))}</h3><p class="note">${modeTxt(r)} · ${n} rooftop${n===1?"":"s"}${r.title?" · "+dateTxt(rt(r,r.startedAt)):""}</p>
    <div class="menu">
      <button type="button" id="cmMedia" hidden>${I.camera}<span>Photos &amp; clips<small id="cmMediaS"></small></span></button>
      <button type="button" id="cmName"${r.followed?" hidden":""}>${IC.edit}<span>${r.title?"Rename":"Name this crawl"}<small>Shows on your tab instead of the date</small></span></button>
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
    const done=v=>{v=(v||"").trim();if(v)r.title=v;else delete r.title;saveH();closeSheet();render();if(typeof liveMeta==="function")liveMeta(r)};
    $("cnSave").onclick=()=>done(q.value);q.onkeydown=e=>{if(e.key==="Enter")done(q.value)};
    if($("cnClr"))$("cnClr").onclick=()=>done("");
  })}
function moveCrawl(r){const i=H.findIndex(x=>x.id===r.id);if(i<0)return;
  H.splice(i,1);saveH();r.test=!r.test;const k=r.test?TKEY:HKEY,L=readH(k);L.push(r);L.sort((a,b)=>b.startedAt-a.startedAt);writeH(k,L);
  if(S.lastEnd===r.id){S.lastEnd=null;save()}
  go("hist");toast(`<span>Moved to ${r.test?"test":"real"} crawls</span><button type="button" class="tundo">Undo</button>`,6000,t=>{t.querySelector(".tundo").onclick=()=>{
    const L2=readH(k).filter(x=>x.id!==r.id);writeH(k,L2);r.test=!r.test;H.splice(Math.min(i,H.length),0,r);saveH();hideToast();render()}})}
// A deleted crawl is remembered as deleted (S.gone, kept on your account too), so the backup can't bring it back
// on the next open or on another phone signed in as you.
function deleteCrawl(r){const i=H.findIndex(x=>x.id===r.id);if(i<0)return;
  if(!hTest){S.gone=S.gone||{};S.gone[r.id]=Date.now()}
  H.splice(i,1);saveH();if(S.lastEnd===r.id)S.lastEnd=null;save();let undone=false;
  go("hist");toast(`<span>Crawl deleted</span><button type="button" class="tundo">Undo</button>`,6000,t=>{t.querySelector(".tundo").onclick=()=>{undone=true;if(S.gone)delete S.gone[r.id];save();H.splice(Math.min(i,H.length),0,r);saveH();hideToast();render()}});
  // its clips go once the undo has passed
  setTimeout(()=>{if(undone||H.some(x=>x.id===r.id))return;clipList(r.id).then(L=>L.forEach(c=>clipDel(c.id))).catch(()=>{})},7000)}
// Every bar visit, like a ride history: by month, newest first. Second tab ranks the rooftops.
function visitsSheet(){
  const vs=allVisits(),uniq=new Set(vs.map(x=>x.b.id)).size,atBars=vs.reduce((s,x)=>s+x.ms,0),yr=String(new Date(now()).getFullYear());let m=null;
  const list=vs.map(x=>{const mm=monthTxt(x.t),[mo,y]=mm.split(" "),head=mm!==m?`<div class="vmon"><span>${mo}${y!==yr?" "+y:""}</span></div>`:"";m=mm;
    return head+`<button class="vrow" type="button" data-b="${x.b.id}">${vthumb(x.b)}<span class="t"><b>${esc(x.b.name)}${S.fav[x.b.id]?` <i class="fv">${HRTF}</i>`:""}</b><small>${dateTxt(x.t)} · ${clock12(sydAt(x.t).min)} · ${x.r.mode==="cruise"?"R&amp;R":LEN(x.r.len)}</small></span><span class="chev vch">›</span></button>`}).join("");
  sheet(`<h3>Rooftops visited</h3><div class="vstats"><div><b>${uniq}</b><small>Rooftop${uniq===1?"":"s"}</small></div><div><b>${vs.length}</b><small>Total visit${vs.length===1?"":"s"}</small></div></div><div class="vlist2">${list}</div>`,()=>{
    $("sheet").classList.add("full");$("sheet").scrollTop=0;
    $("sheetBody").querySelectorAll("[data-b]").forEach(x=>x.onclick=()=>{const v=byId(x.dataset.b);if(v)barSheet(v,null,{back:visitsSheet,backTxt:"Rooftops visited"})});
  });
}
function crawlsSheet(){const N=H.map(stats);let m=null;const yr=String(new Date(now()).getFullYear());
  const rows=H.map((r,i)=>{const st=N[i],bod=r.barOfDay?byId(r.barOfDay):null,nw=(r.newIds||[]).length,mm=monthTxt(rt(r,r.startedAt)),[mo,y]=mm.split(" "),head=mm!==m?`<div class="vmon"><span>${mo}${y!==yr?" "+y:""}</span></div>`:"";m=mm;
    return head+`<button class="hrow" type="button" data-id="${r.id}"><span class="n">${st.counted.length}</span><span class="t"><b>${r.title?esc(r.title):dateTxt(rt(r,r.startedAt))+" · "+modeTxt(r)}${nw?`<span class="newpill">+${nw} new</span>`:""}</b><small>${r.title?dateTxt(rt(r,r.startedAt))+" · "+modeTxt(r)+" · ":""}${esc(r.areas.filter((a,j)=>a!==r.areas[j-1]).join(" → "))} · ${km(st.total)}${bod?" · ★ "+esc(bod.name):""}</small></span>${r.photo?`<img src="${r.photo}" alt="">`:""}</button>`}).join("");
  sheet(`<h3>Crawls</h3><p class="note vsum">Tap one to see it. Hold for options.</p><div class="clist">${rows}</div>`,()=>{
    $("sheet").classList.add("full");$("sheet").scrollTop=0;
    $("sheetBody").querySelectorAll(".hrow").forEach(x=>{x.onclick=()=>{closeSheet();S.lastEnd=x.dataset.id;go("end")};longPress(x,()=>{const r=H.find(y=>y.id===x.dataset.id);if(r)crawlMenu(r)})})})}
// Distance or time, crawl by crawl. Tap a crawl for its legs (distance) or its bars (time).
function crawlStatSheet(kind,id,rec){
  const isD=kind==="dist",isB=kind==="bars",N=H.filter(r=>isB||!r.noLoc).map(r=>({r,st:stats(r)})),val=x=>isD?x.st.total:x.st.counted.reduce((s,v)=>s+Math.max(0,(v.leftAt||x.r.endedAt)-v.arrivedAt),0),fmt=isD?km:hmm,lbl=isD?"Distance":"Time at rooftops";
  const name=r=>r.title?esc(r.title):dateTxt(rt(r,r.startedAt));
  if(id){const x=N.find(o=>o.r.id===id);if(!x){crawlStatSheet(kind);return}const r=x.r,st=x.st;
    let rows;
    if(isD){rows=st.arrived.slice(1).map((v,i)=>{const a=byId(st.arrived[i].id),d=dist(a,byId(v.id))*1.3;
        return `<div class="srow"><span class="t"><small>${esc(a.name)} →</small><b>${esc(byId(v.id).name)}</b></span><span class="d">${mOrKm(d)}</span></div>`}).join("")||`<div class="srow"><span class="t"><b>Just the one rooftop, no walking yet</b></span></div>`}
    else if(isB)rows=st.arrived.map((v,i)=>{const b_=byId(v.id),ms=Math.max(0,(v.leftAt||r.endedAt)-v.arrivedAt);
        return `<div class="srow${v.counted===true?"":" x"}"><span class="t"><small>Rooftop ${i+1}${v.counted===true?"":" · didn't count"}</small><b>${esc(b_.name)}</b></span><span class="d">${r.noLoc?"":hmm(ms)}</span></div>`}).join("");
    else rows=st.arrived.map((v,i)=>{const ms=Math.max(0,(v.leftAt||r.endedAt)-v.arrivedAt),b_=byId(v.id);
        return `<div class="srow${v.counted===true?"":" x"}"><span class="t"><small>Rooftop ${i+1}${v.counted===true?"":" · didn't count"}</small><b>${esc(b_.name)}</b></span><span class="d">${hmm(ms)}</span></div>`}).join("");
    const sub=isB?`${r.title?dateTxt(rt(r,r.startedAt))+" · ":""}${modeTxt(r)} · ${st.counted.length} rooftop${st.counted.length===1?"":"s"}`:`${rec&&r.title?dateTxt(rt(r,r.startedAt))+" · ":""}${modeTxt(r)} · ${fmt(val(x))}${isD?"":" at "+st.counted.length+" rooftop"+(st.counted.length===1?"":"s")}`;
    sheet(`${rec?`<div class="eyebrow">${rec}</div>`:`<button class="txtbtn bsback" type="button" id="csBack">‹ ${lbl}</button>`}<h3>${name(r)}</h3><p class="note vsum">${sub}</p>
      <div class="slist">${rows||'<p class="note">No rooftops on this one.</p>'}</div><button class="btn line" type="button" id="csOpen" style="margin-top:14px">See the whole crawl</button>`,()=>{
      if($("csBack"))$("csBack").onclick=()=>crawlStatSheet(kind);$("csOpen").onclick=()=>{closeSheet();S.lastEnd=r.id;go("end")}});
    return}
  const tot=N.reduce((s,x)=>s+val(x),0);
  sheet(`<h3>${lbl}</h3><p class="note vsum">${fmt(tot)} across ${N.length} crawl${N.length===1?"":"s"} · ${fmt(tot/Math.max(1,N.length))} a crawl</p>
    <div class="vlist2">${N.map(x=>`<button class="vrow" type="button" data-cs="${x.r.id}"><span class="n2">${x.st.counted.length}</span><span class="t"><b>${name(x.r)}</b><small>${modeTxt(x.r)}${x.r.title?" · "+dateTxt(rt(x.r,x.r.startedAt)):""}</small></span><span class="d">${fmt(val(x))}</span></button>`).join("")}</div>`,()=>{
    $("sheet").classList.add("full");$("sheet").scrollTop=0;
    $("sheetBody").querySelectorAll("[data-cs]").forEach(b_=>b_.onclick=()=>crawlStatSheet(kind,b_.dataset.cs))});
}

// Take a bar off a crawl (didn't go in, logged by mistake). Live crawl or finished one; undo for a few seconds.
function removeVisit(r,vis,live){const i=r.visits.indexOf(vis);if(i<0)return;const b=byId(vis.id),bod=r.barOfDay===vis.id;
  if(live&&vis.leftAt==null)vis.leftAt=now();
  r.visits.splice(i,1);if(bod)delete r.barOfDay;
  const reNew=()=>{if(live)return;const prev={};H.forEach(x=>{if(x.id!==r.id)x.visits.forEach(y=>{if(y.counted===true&&x.startedAt<r.startedAt)prev[y.id]=1})});r.newIds=r.visits.filter(y=>y.counted===true&&!prev[y.id]).map(y=>y.id)};
  const sk=live&&!(r.skipped||[]).includes(vis.id);if(sk)(r.skipped=r.skipped||[]).push(vis.id);   // and it won't come up again this crawl
  const redo=()=>{if(live){save();if(S.route==="play")renderPlay();if($("sheet").open&&$("ngMap"))nightSheet()}else{reNew();saveH();if(S.route==="end")renderEnd();if(S.route==="hist")renderHist()}};
  redo();buzz(15);
  toast(`<span>${esc(b?b.name:"Rooftop")} removed</span><button type="button" class="tundo">Undo</button>`,5000,t=>{t.querySelector(".tundo").onclick=()=>{
    r.visits.splice(Math.min(i,r.visits.length),0,vis);if(bod)r.barOfDay=vis.id;if(sk)r.skipped=r.skipped.filter(x=>x!==vis.id);hideToast();redo()}})}
function removeAsk(r,vis,live){const b=byId(vis.id);if(!b)return;
  sheet(`<h3>Remove ${esc(b.name)}?</h3><p class="note">It comes off this crawl and your stats.</p><div class="acts"><button class="btn" type="button" id="rmGo">Remove from crawl</button><button class="btn dark" type="button" id="rmX">Keep it</button></div>`,()=>{
    $("rmGo").onclick=()=>{closeSheet();removeVisit(r,vis,live)};$("rmX").onclick=closeSheet})}
// Swipe a row left for Remove, like a phone's own lists
function swipeRow(row,onRemove){const w=document.createElement("div");w.className="swp";row.parentNode.insertBefore(w,row);w.appendChild(row);
  const x=document.createElement("button");x.type="button";x.className="swpx";x.textContent="Remove";w.insertBefore(x,row);
  let x0=null,y0=0,dx=0,open=false,drag=false;const W=96;
  const set=(v,anim)=>{row.style.transition=anim?"transform .2s":"none";row.style.transform=v?`translateX(${v}px)`:""};
  row.addEventListener("touchstart",e=>{x0=e.touches[0].clientX;y0=e.touches[0].clientY;drag=false},{passive:true});
  row.addEventListener("touchmove",e=>{if(x0===null)return;const ddx=e.touches[0].clientX-x0,ddy=e.touches[0].clientY-y0;
    if(!drag){if(Math.abs(ddy)>Math.abs(ddx)||Math.abs(ddx)<8){if(Math.abs(ddy)>8)x0=null;return}drag=true}
    dx=Math.min(0,Math.max(-W*1.4,(open?-W:0)+ddx));set(dx)},{passive:true});
  let dragAt=0;
  row.addEventListener("touchend",()=>{if(x0===null)return;x0=null;if(!drag)return;dragAt=Date.now();open=dx<-W/2;set(open?-W:0,true)});
  row.addEventListener("click",e=>{if(open||Date.now()-dragAt<400){e.stopImmediatePropagation();e.preventDefault();if(open&&Date.now()-dragAt>=400){open=false;set(0,true)}}},true);
  x.onclick=e=>{e.stopPropagation();onRemove()}}

// One leg of a crawl (longest walk, fastest changeover): the two bars on a map with the route between them,
// then the crawl it came from.
function legSheet(r,fromId,toId,lbl,val,back){
  const a=byId(fromId),b=byId(toId),st=stats(r);if(!a||!b){S.lastEnd=r.id;go("end");return}
  const ia=st.arrived.findIndex(v=>v.id===fromId),ib=st.arrived.findIndex((v,i)=>i>ia&&v.id===toId);
  const va=st.arrived[ia],vb=st.arrived[ib],walk=va&&vb&&va.leftAt!=null?Math.max(0,vb.arrivedAt-va.leftAt):null,d=dist(a,b)*1.3;
  sheet(`${back?`<button class="txtbtn bsback" type="button" id="lgBack">‹ ${back.t}</button>`:""}<div class="eyebrow">${lbl}</div><h3 class="lgv">${val}</h3>
    <div class="lgmap"><div id="lgMap"></div></div>
    <div class="lgleg"><div class="lgstop"><i class="num sm">${ia+1}</i><span><small>From</small><b>${esc(a.name)}</b></span></div><div class="lgstop"><i class="num sm">${ib+1}</i><span><small>To</small><b>${esc(b.name)}</b></span></div></div>
    <p class="note vsum">${mOrKm(d)}${walk!=null?" · "+hmm(walk)+" door to door":""}</p>
    <p class="note vsum" style="margin-top:2px">${r.title?esc(r.title)+" · ":""}${dateTxt(rt(r,r.startedAt))} · ${modeTxt(r)}</p>
    <button class="btn line" type="button" id="lgOpen" style="margin-top:14px">See the whole crawl</button>`,async()=>{
    if($("lgBack"))$("lgBack").onclick=back.fn;
    $("lgOpen").onclick=()=>{closeSheet();S.lastEnd=r.id;go("end")};
    const m=await makeMap("lgMap",{noMe:true});if(!m||!$("lgMap"))return;
    // the bit of the recorded trail between the two bars, if there is one
    let tr=(r.trail||[]).map(p=>({lat:p[0],lng:p[1]})),seg=[];
    if(tr.length>1){const near=(p,from)=>{let bi=-1,bd=1e9;for(let i=from;i<tr.length;i++){const dd=dist(tr[i],p);if(dd<bd){bd=dd;bi=i}}return bd<=200?bi:-1};
      const i0=near(a,0),i1=i0>=0?near(b,i0):-1;if(i0>=0&&i1>i0)seg=tr.slice(i0,i1+1)}
    if(!r.noLoc){m.route([a,b],true);if(seg.length>1)m.route(seg);else m.route([a,b])}
    m.num(a,ia+1,false,a.name);m.num(b,ib+1,false,b.name);
    setTimeout(()=>m.fitPts([a,b].concat(seg),17,{top:36,left:36,right:36,bottom:36}),80)});
}
// One stay (longest, quickest): the bar, how long, which crawl.
function staySheet(r,v,lbl,val,back){
  const b=byId(v.id),st=stats(r),i=st.arrived.indexOf(v);if(!b){S.lastEnd=r.id;go("end");return}
  const cp=cardPhoto(b);
  sheet(`${back?`<button class="txtbtn bsback" type="button" id="syBack">‹ ${back.t}</button>`:""}<div class="eyebrow">${lbl}</div><h3 class="lgv">${val}</h3>
    <button type="button" class="systay${cp.cls}" id="syBar"${cp.style}><span class="t"><small>Rooftop ${i+1}${v.counted===true?"":" · didn't count"}</small><b>${esc(b.name)}</b></span><span class="chev">›</span></button>
    <p class="note vsum" style="margin-top:10px">${r.title?esc(r.title)+" · ":""}${dateTxt(rt(r,r.startedAt))} · ${clock12(sydAt(rt(r,v.arrivedAt)).min)} · ${modeTxt(r)}</p>
    <button class="btn line" type="button" id="syOpen" style="margin-top:14px">See the whole crawl</button>`,()=>{
    if($("syBack"))$("syBack").onclick=back.fn;
    $("syBar").onclick=()=>barSheet(b,null,{back:()=>staySheet(r,v,lbl,val,back),backTxt:lbl});
    $("syOpen").onclick=()=>{closeSheet();S.lastEnd=r.id;go("end")};
    if(!cp.cls&&phMem[b.id]===undefined&&phAllowed(b.id,"play"))barPhoto(b).then(ph=>{const e=$("syBar");if(e&&ph){e.classList.add("photo");e.style.backgroundImage=`url('${ph.url}')`}}).catch(()=>{})});
}

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
  const lk=(id,t,val,cls)=>`<button class="strow${cls?" "+cls:""}" type="button" id="${id}"><span class="t"><b>${t}</b></span>${val!=null?`<span class="sval" id="${id}S">${val}</span>`:""}<i class="chev" id="${id}C">›</i></button>`;
  const grp=(h,rows)=>rows.filter(Boolean).length?`<div class="sgh">${h}</div><div class="sgrp">${rows.filter(Boolean).join("")}</div>`:"";
  const nT=readH(TKEY).length,live=!!(S.game&&S.game.started&&!S.game.ended),plat=anPlat(),top=pg.querySelector(".spbody")?pg.querySelector(".spbody").scrollTop:0;
  pg.innerHTML=`<div class="sphead"><button class="spback" type="button" id="spBack" aria-label="Back">${I.back}</button><b>Settings</b></div><div class="spbody">
    ${grp("Appearance",[`<div class="strow stseg"><div class="seg" id="stTheme">${[["auto","Auto"],["light","Light"],["dark","Dark"]].map(([k,l])=>`<button type="button" data-th="${k}" aria-pressed="${(S.theme||"auto")===k}">${l}</button>`).join("")}</div></div>`])}
    ${ISIOS?grp("Directions",[`<div class="strow stseg"><div class="seg" id="stMaps">${[["apple","Apple Maps"],["google","Google Maps"]].map(([k,l])=>`<button type="button" data-mp="${k}" aria-pressed="${(S.maps==="google"?"google":"apple")===k}">${l}</button>`).join("")}</div></div>`]):""}
    ${grp("Sound and vibration",[tg("stSound",S.sound,"Sound"),tg("stVib",S.vib!==false,"Vibration")])}
    ${grp("Photos and clips",[tg("stFilm",S.film!==false,"Creator mode","Record your spins during a crawl"),NATIVE?tg("stGal",S.clipAuto!==false,"Save to gallery","Photos and clips you take in the app"):"",lk("stClips","Storage","")])}
    ${grp("Account",accountRows(lk))}
    ${grp("Privacy",[lk("stPerm","Permissions"),lk("stPriv","Privacy policy")])}
    ${grp("Help",[live?"":lk("stHow","How to play"),lk("stSup","Contact us"),lk("stTerms","Terms of use")])}
    ${S.test?grp("Testing",[tg("stTest",S.test,"Test mode","Tap the map to move. Test crawls stay off your tab"),S.test?lk("stTips","Reset tips"):"",nT?lk("stClr","Clear test crawls",String(nT),"danger"):""]):""}
    <div class="spfoot"><div class="spsoc"><button type="button" id="stIG" aria-label="Instagram">${IGI}</button><button type="button" id="stTT" aria-label="TikTok">${TTI}</button></div>
      ${plat==="android"?`<button class="txtbtn sprate" type="button" id="stRate">Rate Rooftop Roulette</button>`:""}
      <p class="setv">Rooftop Roulette · v98-251</p></div></div>`;
  pg.querySelector(".spbody").scrollTop=top;
  const ext=u=>{try{window.open(u,"_blank","noopener")}catch(e){location.href=u}};
  $("spBack").onclick=()=>{try{if(history.state&&history.state.setPage)history.back();else closeSettings()}catch(e){closeSettings()}};
  $("stTheme").querySelectorAll("[data-th]").forEach(b=>b.onclick=()=>{S.theme=b.dataset.th;save();track("theme",{theme:S.theme});applyTheme(true);settingsSheet()});
  $("stSound").onclick=()=>{S.sound=!S.sound;save();settingsSheet()};
  if($("stMaps"))$("stMaps").querySelectorAll("[data-mp]").forEach(b=>b.onclick=()=>{S.maps=b.dataset.mp;save();settingsSheet();if(S.route==="play")renderPlay()});
  $("stVib").onclick=()=>{S.vib=S.vib===false;save();if(S.vib)buzz(30);settingsSheet()};
  if($("stGal"))$("stGal").onclick=()=>{S.clipAuto=S.clipAuto===false;save();settingsSheet()};
  $("stFilm").onclick=()=>{S.film=S.film===false;save();track("film_toggle",{on:S.film!==false,where:"settings"});settingsSheet();if(S.route==="play")renderPlay()};
  accountBind();
  clipAll().then(L=>{const el=$("stClipsS");if(!el)return;const bytes=L.reduce((t,c)=>t+(c.blob&&c.blob.size||0),0);
    el.textContent=L.length?mbTxt(bytes):"0 MB";if(L.length)$("stClips").onclick=()=>clipsClearSheet(L);else{const ch=$("stClipsC");if(ch)ch.style.visibility="hidden";$("stClips").style.cursor="default"}});
  $("stPerm").onclick=permSheet;
  $("stPriv").onclick=()=>docPage("privacy.html","Privacy policy");$("stTerms").onclick=()=>docPage("terms.html","Terms of use");
  // replays the first-open walkthrough, the same screens the home link used to show
  if($("stHow"))$("stHow").onclick=()=>{closeSettings(true);S.intro=0;S.introReplay=true;save();go("intro")};
  // Contact us shows the address first: copy it, or start an email (with the app details at the bottom for us)
  $("stSup").onclick=()=>{const body=`\n\n\n—\nApp ${APPV} · ${plat} · ${anDev.$os} · ${anDev.$browser} · ${innerWidth}×${innerHeight}`;
    sheet(`<h3>Contact us</h3><p class="note">Questions, bugs or a rooftop we're missing.</p><p class="supmail">${esc(SUPPORT)}</p>
      <div class="acts"><button class="btn" type="button" id="suMail">Send email</button><button class="btn dark" type="button" id="suCopy">Copy address</button></div>`,()=>{
      $("suMail").onclick=()=>{track("support_email");location.href=`mailto:${SUPPORT}?subject=${encodeURIComponent("Rooftop Roulette")}&body=${encodeURIComponent(body)}`};
      $("suCopy").onclick=()=>{try{navigator.clipboard.writeText(SUPPORT)}catch(e){}toast("Address copied",1800)}})};
  $("stIG").onclick=()=>ext(IG);$("stTT").onclick=()=>ext(TT);if($("stRate"))$("stRate").onclick=()=>ext(PLAY);
  if($("stTest"))$("stTest").onclick=()=>{S.test=!S.test;if(!S.test){S.ff=0;S.fake=null;history.replaceState(history.state,"",location.pathname)}save();if(S.game&&!S.test)startWatch();render();settingsSheet()};
  if($("stTips"))$("stTips").onclick=()=>{S.tips={};S.seenHow={};save();document.querySelectorAll(".camtip").forEach(t=>t.remove());toast("Tips reset",2000)};   // test mode: see every first-time hint again
  if($("stClr"))$("stClr").onclick=()=>sheet(`<h3>Clear test crawls?</h3><p class="note">${nT} test crawl${nT===1?"":"s"} will be cleared. Your tab isn't affected.</p><div class="acts"><button class="btn" type="button" id="stClrY" style="background:var(--red);color:#fff">Clear</button><button class="btn line" type="button" id="stClrN">Cancel</button></div>`,()=>{
    $("stClrY").onclick=()=>{try{localStorage.removeItem(TKEY)}catch(e){}if(hTest){H.length=0}closeSheet();render();settingsSheet()};$("stClrN").onclick=closeSheet});
}
// Privacy policy and terms open on a page of their own inside the app; back comes back to settings
function docPage(file,title){if($("docPage"))return;const pg=document.createElement("div");pg.id="docPage";pg.className="setpage docpage";
  pg.innerHTML=`<div class="sphead"><button class="spback" type="button" id="dpBack" aria-label="Back">${I.back}</button><b>${title}</b></div><iframe src="${(BUNDLED||location.hostname==="localhost"?SITE:(window.RR_ROOT||""))+file}?embed" title="${title}"></iframe>`;
  document.body.appendChild(pg);try{history.pushState({docPage:1},"")}catch(e){}requestAnimationFrame(()=>requestAnimationFrame(()=>pg.classList.add("on")));
  $("dpBack").onclick=()=>{try{if(history.state&&history.state.docPage)history.back();else closeDoc()}catch(e){closeDoc()}}}
function closeDoc(){const pg=$("docPage");if(!pg)return;pg.id="";pg.classList.remove("on");setTimeout(()=>pg.remove(),260)}
function closeSettings(now_){const pg=$("setPage");if(!pg)return;pg.classList.remove("on");setTimeout(()=>pg.remove(),now_?0:260)}
/* Back: the phone's back gesture or button (and the browser's back) steps back one screen instead of closing the app.
   Order: a page over the app, then a panel, then the screen's own back button, then home. At home it leaves. */
function appBack(){
  if($("docPage")){closeDoc();return true}
  if($("acctPage")){closeAcct();return true}
  if($("setPage")){closeSettings();return true}
  if(document.querySelector(".jpx")||spinning)return true;   // a spin or the jackpot plays out
  const d=$("sheet");if(d&&d.open){closeSheet();return true}
  if(document.body.classList.contains("camon")&&CAM.once&&!CAM.rec){CAM.once=false;camSync();renderPlay();return true}
  if(S.route==="bars"&&bSearching){setSearching(false);return true}
  if(S.route==="intro"&&(S.intro||0)>0){S.intro--;save();renderIntro();return true}
  if(S.route==="intro"&&S.introReplay){S.introReplay=false;go("home");return true}
  if(S.route==="play"&&$("reelBack")&&$("reelBack").offsetParent!==null){$("reelBack").click();return true}
  const v=$("v-"+S.route),bk=v&&[...v.querySelectorAll('[aria-label="Back"]')].find(x=>x.offsetParent!==null);
  if(bk){bk.click();return true}
  if(!["home","intro","ob"].includes(S.route)){go("home");return true}
  return false}
// In a browser there's nothing to catch the back gesture with, so the app keeps one spare history entry while you're away from home
function backArm(){const C=window.Capacitor;if(C&&C.isNativePlatform&&C.isNativePlatform())return;try{if(!(history.state&&history.state.rrBack))history.pushState({rrBack:1},"")}catch(e){}}
function backNeeded(){return S.route!=="home"||!!($("sheet")&&$("sheet").open)}
addEventListener("popstate",()=>{if($("docPage")){closeDoc();return}if($("acctPage")){closeAcct();return}if($("setPage")){closeSettings();return}
  if(NATIVE)return;if(appBack()&&backNeeded())backArm()});
if(NATIVE&&CAPX.Plugins&&CAPX.Plugins.App&&CAPX.Plugins.App.addListener)
  CAPX.Plugins.App.addListener("backButton",()=>{minWhy="the back gesture";if(!appBack())CAPX.Plugins.App.minimizeApp()});
// Clips take space on the phone; clear them by hand (never automatically: some people keep them only here).
function clipsClearSheet(L){const inGal=L.filter(c=>c.gal),out=L.length-inGal.length,sz=a=>mbTxt(a.reduce((t,c)=>t+(c.blob&&c.blob.size||0),0));
  const cn=n=>`${n} clip${n===1?"":"s"}`;
  // all in their photos: one safe button. Some not: clear the safe ones, or all (confirmed). None: clear all (confirmed).
  const note=!out?"Saved to gallery":inGal.length?`${inGal.length} saved to gallery`:"Not saved to gallery";
  sheet(`<h3>Storage</h3><p class="note">${cn(L.length)} · ${sz(L)} · ${note}</p>
    <div class="acts">${!out?`<button class="btn" type="button" id="ccSafe">Clear clips</button>`:`${inGal.length?`<button class="btn" type="button" id="ccSafe">Clear saved clips</button>`:""}<button class="btn line" type="button" id="ccAll" style="color:var(--red)">Clear all clips</button>`}<button class="btn line" type="button" id="ccNo">Cancel</button></div>`,()=>{
    const del=a=>Promise.all(a.map(c=>clipDel(c.id))).then(()=>{toast(`Cleared ${cn(a.length)}`,2500);closeSheet();if($("setPage"))settingsSheet();if(S.route==="end")renderEnd()});
    if($("ccSafe"))$("ccSafe").onclick=()=>del(inGal);
    if($("ccAll"))$("ccAll").onclick=()=>sheet(`<h3>Clear all clips?</h3><p class="note">${out} unsaved clip${out===1?"":"s"} can't be recovered.</p><div class="acts"><button class="btn" type="button" id="ccY" style="background:var(--red);color:#fff">Clear all</button><button class="btn line" type="button" id="ccN">Cancel</button></div>`,()=>{$("ccY").onclick=()=>del(L);$("ccN").onclick=()=>clipsClearSheet(L)});
    $("ccNo").onclick=closeSheet})}
// What the app is allowed to use, and a way to change it.
// Call a native plugin method whether or not its JS object was set up (the bridge always has nativePromise).
function natCall(plugin,method,opts){const C=window.Capacitor;if(!C||!C.isNativePlatform||!C.isNativePlatform())return Promise.reject(new Error("web"));
  const P=C.Plugins&&C.Plugins[plugin];if(P&&typeof P[method]==="function")return P[method](opts||{});
  if(typeof C.nativePromise==="function")return C.nativePromise(plugin,method,opts||{});return Promise.reject(new Error("no bridge"))}
const openAppSettings=()=>natCall("NativeSettings","open",{optionAndroid:"application_details",optionIOS:"app"});
// status bar icons that suit the screen: dark on the cream theme, light in dark mode and over the camera
if(NATIVE){const setBars=()=>{const cam=document.body.classList.contains("camon");natCall("SystemBars","setStyle",{style:isDark()||cam?"DARK":"LIGHT"}).catch(()=>{});
    natCall("CrawlNotify","setTheme",{dark:isDark()}).catch(()=>{})};   // the bar colours behind the icons (Android)
  window.__setBars=setBars;setBars();
  let camWas=false;new MutationObserver(()=>{const c=document.body.classList.contains("camon");if(c!==camWas){camWas=c;setBars()}}).observe(document.body,{attributes:true,attributeFilter:["class"]})}
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
    <div class="acts">${NATIVE?`<button class="btn" type="button" id="pmOpen">Open settings</button>`:""}<button class="btn line" type="button" id="pmBack">Done</button></div>`,()=>{
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
  const s=sydAt(now()),F=followSim();
  sheet(`<h3>Test mode</h3><p class="note">Sydney ${["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][s.day]} ${clock12(s.min)}${S.ff?` (+${Math.round(S.ff/60000)} min)`:""}. Tap the Rooftops map to move yourself.</p>
   <div class="eyebrow" style="margin:14px 0 8px">Time travel</div><div class="trow">${G()&&G().started?`<span class="note">Finish or end your crawl first.</span>`:`<button class="btn sm dark" type="button" data-to="4,1080">Friday 6pm</button><button class="btn sm dark" type="button" data-to="5,900">Saturday 3pm</button>`}</div>
   <div class="eyebrow" style="margin:14px 0 8px">Fast-forward${F?` ${esc(F.fh.n)}'s clock`:""}</div><div class="trow">${[1,5,15,60].map(m=>`<button class="btn sm dark" type="button" data-ff="${m}">+${m<60?m+" min":"1 hr"}</button>`).join("")}</div>
   ${F?followSimHTML(F):""}
   ${G()?`<div class="eyebrow" style="margin:14px 0 8px">Move me</div><div class="trow"><button class="btn sm dark" type="button" id="tA">Arrive at target</button><button class="btn sm dark" type="button" id="tL">Leave (200 m)</button></div><div class="trow" style="margin-top:8px"><button class="btn sm dark" type="button" id="tCT">Play the "it counts" animation</button></div>${!CR(G())?`<div class="trow" style="margin-top:8px"><button class="btn sm dark" type="button" id="tJP">${G().jp?"Jackpot used · reset it":"Jackpot on next spin"}</button><button class="btn sm dark" type="button" id="tWC">Wildcard on next spin</button></div>`:""}`:""}
   ${liveModeHTML()}${simHTML()}
   <div class="eyebrow" style="margin:14px 0 8px">${F?`Put ${esc(F.fh.n)} at a rooftop`:"Put me at a rooftop"}</div><select id="tJ"><option value="">Choose…</option>${VENUES.slice().sort((a,b)=>a.name.localeCompare(b.name)).map(v=>`<option value="${v.id}">${esc(v.name)}</option>`).join("")}</select>
   <div class="trow" style="margin-top:14px"><button class="btn sm line" type="button" id="tSB">Wheel sandbox</button><button class="btn sm line" type="button" id="tJD">Play the jackpot</button><button class="btn sm line" type="button" id="tR">Real time</button><button class="btn sm line" type="button" id="tF">Replay intro</button><button class="btn sm line" type="button" id="tP">Reset photo limit</button><button class="btn sm line" type="button" id="tX">Reset all</button><button class="btn sm line" type="button" id="tO">Test off</button></div>`,()=>{
    if(F){followSimBind(F);
      $("sheetBody").querySelectorAll("[data-ff]").forEach(b=>b.onclick=()=>{simAct(F.k,(g,o)=>{o.off+= +b.dataset.ff*60000});closeSheet()});
      $("tJ").onchange=e=>{const v=byId(e.target.value);if(v){simAct(F.k,(g,o)=>simArrive(g,o.t,v.id));closeSheet()}}}
    else $("sheetBody").querySelectorAll("[data-ff]").forEach(b=>b.onclick=()=>{S.ff=(S.ff||0)+ +b.dataset.ff*60000;save();loop();closeSheet();render()});
    if($("tA"))$("tA").onclick=()=>{const g=G();if(!g||!g.target)return;const v=byId(g.target);S.fake={lat:v.lat+.0002,lng:v.lng};save();closeSheet();animateId="at:"+v.id;onLocation()};
    $("tSB").onclick=()=>{closeSheet();setTimeout(wheelSandbox,250)};
    $("tJD").onclick=()=>{closeSheet();setTimeout(jackpotDemo,250)};
    if($("tCT"))$("tCT").onclick=()=>{const g=G(),a=g&&g.visits.find(v=>v.leftAt==null);if(!a)return;closeSheet();setTimeout(()=>flyToCounter(true),300)};
    if($("tWC"))$("tWC").onclick=()=>{const g=G();g.wplan=(g.wplan||[]).concat([g.visits.length]);g.wild=null;delete g.dealt;save();closeSheet();render()};
    if($("tJP"))$("tJP").onclick=()=>{const g=G();delete g.jp;g.jpAt=0;save();closeSheet();render()};   // jpAt 0: the very next spin is the jackpot
    if($("tL"))$("tL").onclick=()=>{const y=you();if(!y)return;S.fake={lat:y.lat+.0018,lng:y.lng};save();closeSheet();onLocation()};
    if(!F)$("tJ").onchange=e=>{const v=byId(e.target.value);if(v){S.fake={lat:v.lat,lng:v.lng};save();closeSheet();onLocation();render()}};
    $("tR").onclick=()=>{S.ff=0;save();closeSheet();render()};
    $("sheetBody").querySelectorAll("[data-to]").forEach(b=>b.onclick=()=>{const [dd,mm]=b.dataset.to.split(",").map(Number),s0=sydAt(now());let d=((dd-s0.day+7)%7)*1440+(mm-s0.min);if(d<=0)d+=7*1440;S.ff=(S.ff||0)+d*60000;save();closeSheet();render()});
    $("tP").onclick=()=>{try{localStorage.removeItem("rr-ph");localStorage.removeItem("rr-ph-b")}catch(e){}for(const k in phMem)delete phMem[k];closeSheet();render()};
    $("tF").onclick=()=>{S.onboarded=false;S.intro=0;S.tips={};S.seenHow={};save();closeSheet();go("intro")};
    $("tX").onclick=()=>{try{localStorage.removeItem("rr-sim");localStorage.removeItem(KEY);localStorage.removeItem(HKEY);localStorage.removeItem(TKEY)}catch(e){}location.reload()};
    $("tO").onclick=()=>{S.test=false;S.ff=0;S.fake=null;save();history.replaceState(null,"",location.pathname);closeSheet();if(CLP){location.reload();return}if(S.game)startWatch();render()};
    simBind();
  });
};

// Test mode: Sam and Jess, simulated friends (cloud.template.js, simBackend) for trying invites and live crawls on one phone
function liveModeHTML(){if(!(FB_CFG||(typeof FAKE_CLOUD!=="undefined"&&FAKE_CLOUD)))return "";const on=!!S.testLive;
  return `<div class="eyebrow" style="margin:14px 0 8px">Live crawls</div><div class="trow"><button class="btn sm ${on?"dark":""}" type="button" id="tLm1">Sam &amp; Jess</button><button class="btn sm ${on?"":"dark"}" type="button" id="tLm2">Two real phones</button></div>
  <p class="note" style="margin:8px 0 0">${on?"Host on this phone (signed in) and join from the other with Join on home. Both phones can stay in test mode. Test crawls stay off real tabs.":"Sam and Jess are simulated on this phone. Nothing gets sent."}</p>`}
function liveModeBind(){[["tLm1",false],["tLm2",true]].forEach(([id,v])=>{const el=$(id);if(!el)return;el.onclick=()=>{if(!!S.testLive===v)return;
  if(v){testGoReal(null);return}   // from Sam & Jess: their crawl ids are dropped, your crawl carries on
  if((S.game&&S.game.live)||S.follow){toast("Finish the live crawl first.",2500);return}S.testLive=v;save();location.reload()}})}
function simHTML(){if(typeof testReal==="function"&&testReal())return "";const g=G(),mine=g&&g.started&&!g.ended,k=simLiveKey(),d=k&&SIM.docs[k],fh=d&&!d.ended&&simFriend(d.host);
  const b=(id,t)=>`<button class="btn sm dark" type="button" id="${id}">${t}</button>`;let r="";
  if(fh)r=b("sQt",`${fh.n} goes quiet`)+b("sEn",`${fh.n} ends the crawl`);
  else if(mine)r=b("sPv","See what friends see")+SIMF.filter(f=>!(d&&d.members&&d.members[f.uid])).map(f=>b("sF-"+f.uid,`${f.n} follows you`)).join("");
  else if(!S.follow||(d&&d.ended)||!d)r=SIMF.map(f=>b("sI-"+f.uid,`${f.n} invites you`)).join("");
  return `<div class="eyebrow" style="margin:14px 0 8px">Friends (simulated)</div><p class="note" style="margin:0 0 8px">Sam and Jess are on this phone only. Nothing gets sent.</p>${r?`<div class="trow">${r}</div>`:""}${NATIVE?`<p class="note" id="sNote" style="margin:8px 0 0">Notifications: checking…</p>`:""}`}
// Following Sam's or Jess's crawl in test mode: the test panel's controls drive their crawl instead of yours
function followSim(){if(typeof SIM==="undefined"||G())return null;const k=simLiveKey(),d=k&&SIM.docs[k],fh=d&&!d.ended&&simFriend(d.host);return fh?{k,d,fh}:null}
function simAct(k,fn){const d=SIM.docs[k];if(!d||d.ended)return;let g;try{g=JSON.parse(d.g)}catch(e){return}g.visits=g.visits||[];
  const o={off:d.off||0};o.t=Date.now()+o.off;const r=fn(g,o,d);if(r===false)return;const real=Date.now();
  {const a=simAt(g);if(a&&!a._inCount&&real+o.off-a.arrivedAt>=DWELL_MIN*60000)a._inCount=true}
  SIM.B.set(k,Object.assign({beat:real,simAt:real,off:o.off,g:JSON.stringify(g)},r&&r.patch||{}),true).then(()=>{if(g.mode!=="cruise"&&g.started&&real+o.off>=g.endsAt)simEnd(k)})}
const simAt=g=>(g.visits||[]).find(v=>v.arrivedAt!=null&&!v.leftAt);
// their spin: a bar in their zone, with a wildcard if one was asked for
function simSpinNext(g,t){const was=g.target;g.target=null;for(let i=0;i<6&&(!g.target||g.target===was);i++)simSpin(g,t);
  g.wild=g.wnext&&g.target?{id:g.target,text:WILDS[Math.floor(Math.random()*WILDS.length)],shown:1}:null;delete g.wnext}
function simLeave(g,t){const a=simAt(g);if(!a)return false;a.leftAt=t;a.counted=!!a._inCount||t-a.arrivedAt>=DWELL_MIN*60000;delete a._inCount}
function simArrive(g,t,id){const a=simAt(g);if(a)simLeave(g,t);g.visits.push({id,arrivedAt:t,counted:null});if(g.frz&&t<g.frz.until){g.endsAt-=g.frz.until-t;g.frz.until=t}if(g.wild&&g.wild.id!==id)g.wild=null;g.target=null}
function followSimHTML(F){let g={};try{g=JSON.parse(F.d.g)}catch(e){}const a=simAt(g),tg=g.target&&byId(g.target),n=esc(F.fh.n);
  const b=(id,t)=>`<button class="btn sm dark" type="button" id="${id}">${t}</button>`;
  const where=a?`At ${esc(byId(a.id).name)}${a._inCount?", on the board":""}`:tg?`Heading to ${esc(tg.name)}`:"Waiting to spin";
  return `<div class="eyebrow" style="margin:14px 0 8px">${n}'s crawl</div><p class="note" style="margin:0 0 8px">${where}.</p>
    <div class="trow">${tg?b("fA","Arrive at rooftop")+b("fR","Spin again"):b("fS","Spin for the next rooftop")}${a?b("fL","Leave (200 m)")+(a._inCount?"":b("fC","Count this rooftop")):""}</div>
    <div class="trow" style="margin-top:8px">${b("fW",g.wnext?"Wildcard on next spin · on":"Wildcard on next spin")}${b("fZ","Move their zone")}</div>
    <div class="trow" style="margin-top:8px">${b("fG","Give me the spin")}</div>`}
function followSimBind(F){const k=F.k,re=()=>setTimeout(()=>$("testFab").onclick(),150),on=(id,fn,stay)=>{const el=$(id);if(el)el.onclick=()=>{simAct(k,fn);if(stay)re();else closeSheet()}};
  on("fA",(g,o)=>{if(!g.target)return false;simArrive(g,o.t,g.target)});
  on("fL",(g,o)=>simLeave(g,o.t));
  on("fC",g=>{const a=simAt(g);if(!a)return false;a._inCount=true});
  // their wheel goes for a few seconds (you see it rolling), then lands
  const spinNow=(g,o)=>{g.spinAt=o.t;setTimeout(()=>simAct(k,(g2,o2)=>{simSpinNext(g2,o2.t);g2.targetAt=o2.t}),3500)};
  on("fS",spinNow);on("fR",spinNow);
  on("fW",g=>{g.wnext=!g.wnext},true);
  on("fZ",g=>{const c=g.center||{lat:-33.8688,lng:151.2093},nc={lat:c.lat+.009,lng:c.lng+.004};g.center=nc;g.radius=Math.min(2,(g.radius||1)+.5);g.areas=(g.areas||[]).concat([nearestSuburb(nc)]);g.voluntaryUsed=true;g.target=null;g.wild=null});
  on("fG",()=>({patch:{host:ME.uid,hostName:myName()||"You"}}))}
function simBind(){liveModeBind();if(typeof testReal==='function'&&testReal())return;const k=simLiveKey(),on=(id,f)=>{const el=$(id);if(el)el.onclick=()=>{closeSheet();f()}};
  if($("sNote"))natCall("CrawlNotify","status").then(r=>{const el=$("sNote");if(!el)return;el.innerHTML=r&&r.enabled?"Notifications: on":`Notifications: off. <button class="txtbtn" type="button" id="sNoteOn">Turn on</button>`;
    if($("sNoteOn"))$("sNoteOn").onclick=()=>natCall("CrawlNotify","openSettings").catch(()=>{})}).catch(()=>{const el=$("sNote");if(el)el.textContent="Notifications: this app version can't tell"});
  on("sPv",previewFollow);on("sQt",()=>{simQuiet();toast("Sam's phone has gone quiet. Take over shows up on the follow screen.",3500)});on("sEn",()=>simEnd(k));
  SIMF.forEach(f=>{on("sF-"+f.uid,async()=>{await simFollowMe(f);toast(`${f.n} is following.`,2200);try{paintPeople()}catch(e){}});
    on("sI-"+f.uid,async()=>{await cloud();watchInvites();await simInvite(f)})})}

/* ---------- loop ---------- */

/* ---------- notifications (phone app only) ----------
   Live: one silent, ongoing notification while a crawl is on (CrawlNotify, our own small Android plugin).
     The timed game counts down with a bar that shrinks; R&R counts up from when you got to the rooftop.
   Alerts (LocalNotifications, set ahead so they arrive with the app closed): 10 minutes left and time's up in the timed game,
     check-in open when you're checking in by hand, and the day after a crawl, a look back at it. */
const NOTE={live:"",liveAt:0,alerts:"",ready:false};
const realAt=t=>t-(now()-Date.now());   // game time -> the phone's clock (test mode can run ahead)
const LEN=m=>m%60===0?`${m/60} hr`:`${m} min`;   // the timed game goes by its length: "1 hr", "2 hr"
// Every scheduled alert is inexact: an exact alarm needs Android's "Alarms & reminders" permission, and asking for it
// throws the phone's settings screen at people mid-crawl. allowWhileIdle still gets them through the phone sleeping.
// Android draws a big grey "play" icon on any video that has no frame yet (camera starting, clip loading): a blank poster hides it
const NOPOSTER="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
const lnSchedule=L=>natCall("LocalNotifications","schedule",{notifications:L.map(n=>Object.assign({},n,{isExactNotification:false}))});
const plural=(n,w)=>`${n} ${w}${n===1?"":"s"}`;
function noteSetup(){if(NOTE.ready||!NATIVE)return;NOTE.ready=true;
  natCall("LocalNotifications","createChannel",{id:"crawl_alerts",name:"Crawl alerts",description:"Time warnings and check-ins during a crawl",importance:4,visibility:1,vibration:true}).catch(()=>{});
  natCall("LocalNotifications","createChannel",{id:"crawl_after",name:"After a crawl",description:"A look back the day after",importance:3,visibility:1}).catch(()=>{});
  try{const LN=window.Capacitor&&Capacitor.Plugins&&Capacitor.Plugins.LocalNotifications;
    if(LN&&LN.addListener)LN.addListener("localNotificationActionPerformed",e=>{const id=e&&e.notification&&e.notification.extra&&e.notification.extra.crawl;
      if(id&&!S.game&&(H.some(r=>r.id===id)||readH(TKEY).some(r=>r.id===id))){S.lastEnd=id;S.recapOpen=id;save();closeSheet();go("end")}})}catch(e){}}
// "End crawl" on the notification opens the app on the end-the-crawl question (so a stray tap can't end it)
{const CN=window.Capacitor&&Capacitor.Plugins&&Capacitor.Plugins.CrawlNotify;
  if(NATIVE&&CN&&CN.addListener)CN.addListener("crawlAction",e=>{if(!S.game&&S.follow&&e){closeSheet();openFollow();return}if(!S.game||!e)return;closeSheet();go("play");
    if(e.action==="end")setTimeout(()=>{openMenu();setTimeout(()=>{const b=$("mEnd");if(b)b.click()},60)},250)})}
// The live notification needs notification permission (Android 13+). Check once per crawl, after the location prompt is out of
// the way: Android drops a second permission prompt that arrives while one is open, which is how it went missing before.
let notifKey=null;
async function notifEnsure(key,noWait){if(!NATIVE||notifKey===key)return;notifKey=key;
  const st=async()=>{try{const r=await natCall("CrawlNotify","status");return r||{}}catch(e){return {}}};
  let r=await st();if(r.enabled){track("notif_state",{on:true,ios:IOSNAT});return}if(IOSNAT&&r.supported===false)return;   // Live Activities need iOS 16.2
  for(let i=0;i<40&&(document.visibilityState!=="visible"||(!noWait&&i<14&&!(here||locErr)));i++)await new Promise(f=>setTimeout(f,1500));   // location sorted first
  await new Promise(f=>setTimeout(f,1200));
  if(r.app===false&&!IOSNAT){try{await natCall("LocalNotifications","requestPermissions")}catch(e){}r=await st()}   // iPhone: Live Activities are on unless switched off in Settings
  track("notif_state",{on:!!r.enabled,app:!!r.app,channel:r.channel!==false,ios:IOSNAT});
  if(r.enabled||(S.notifNo||0)>=2)return;
  if($("sheet").open){notifKey=null;return}   // try again on the next update
  sheet(`<h3>Turn on ${IOSNAT?"Live Activities":"notifications"}?</h3><p class="note">Shows the time left and the next rooftop on your lock screen.</p>
    <div class="acts"><button class="btn" type="button" id="nfOn">Turn on</button><button class="btn dark" type="button" id="nfNo">Not now</button></div>`,()=>{
    $("nfOn").onclick=()=>{closeSheet();track("notif_settings");natCall("CrawlNotify","openSettings").catch(()=>{});
      const back=()=>{if(document.visibilityState!=="visible")return;document.removeEventListener("visibilitychange",back);NOTE.live="";fvNote="";notifKey=null};document.addEventListener("visibilitychange",back)};
    $("nfNo").onclick=()=>{S.notifNo=(S.notifNo||0)+1;save();closeSheet()}})}
function liveNote(){
  if(!NATIVE)return;const g=G();
  if(!g||g.demo||!g.started||g.ended){if(NOTE.live||!NOTE.gone){NOTE.live="";NOTE.gone=true;natCall("CrawlNotify","clear").catch(()=>{})}return}
  NOTE.gone=false;
  noteSetup();
  notifEnsure(g.id);
  const cr=CR(g),a=atVisit(),y=you(),mode=cr?"R&R":LEN(g.len)+" crawl";let title,text;
  // the line under it: this rooftop's wildcard, if it has one (the time left is the bar itself; the mode you already know)
  const wl=id=>g.wild&&g.wild.id===id&&g.wild.text&&(g.wild.shown||g.wild.landed)&&!g.wild.locked?`Wildcard · ${wNm(g.wild.text)}`:"";
  // the line under: what's live and useful, joined with " · " (time here, the wildcard, who's following, rooftops so far)
  let fl=0;try{fl=g.live&&typeof liveDoc!=="undefined"&&liveDoc&&!liveDoc.ended?Object.keys(liveDoc.members||{}).length:0}catch(e){}
  const fol=fl?`${fl} following`:"",nb=countShown(g),join=(...x)=>x.filter(Boolean).join(" · ");
  if(a){title=`At ${byId(a.id).name}`;text=join(`${Math.max(0,Math.floor((now()-a.arrivedAt)/60000))} min here`,wl(a.id),fol)}
  else if(g.target){const v=byId(g.target);title=`Heading to ${v.name}`;text=join(wl(v.id),fol)||`Rooftop ${g.visits.filter(x=>x.arrivedAt!=null).length+1}`}
  else{title="Spin for the next one";text=join(nb?plural(nb,"rooftop")+" so far":"",fol)}
  const o={title,text};
  if(!cr&&frozen(g)&&g.frz.start){o.text="Clock starts at your first rooftop"}
  else if(!cr){o.endsAt=Math.round(realAt(g.endsAt));o.startAt=Math.round(realAt(g.startedAt));o.max=1000;o.progress=Math.round(1000*Math.max(0,g.endsAt-now())/Math.max(1,g.endsAt-g.startedAt))}
  else if(a)o.since=Math.round(realAt(a.arrivedAt));
  const key=JSON.stringify([o.title,o.text,o.endsAt,o.since]);
  if(key===NOTE.live&&Date.now()-NOTE.liveAt<60000)return;   // text changes go straight out; the bar moves once a minute
  NOTE.live=key;NOTE.liveAt=Date.now();natCall("CrawlNotify","update",o).catch(()=>{})}
function alertSync(){
  if(!NATIVE)return;const g=G(),on=g&&!g.demo&&g.started&&!g.ended,want=[];
  if(on&&!CR(g)){const n=countShown(g);
    if(g.endsAt-now()>10.5*60000)want.push({id:101,title:"10 minutes left",body:`${plural(n,"rooftop")} so far.`,at:realAt(g.endsAt-600000)});
    want.push({id:102,title:"Time's up",body:"Tap to see how you went.",at:realAt(g.endsAt)})}
  if(on&&g.noLoc&&g.target&&!atVisit()){const t=hereAt(g);if(t>now())want.push({id:103,title:"Check-in's open",body:`Tap I'm here once you're at ${byId(g.target).name}.`,at:realAt(t)})}
  const key=JSON.stringify(want.map(w=>[w.id,w.body,Math.round(w.at/10000)]));if(key===NOTE.alerts)return;NOTE.alerts=key;noteSetup();
  natCall("LocalNotifications","cancel",{notifications:[{id:101},{id:102},{id:103}]}).catch(()=>{}).then(()=>{
    const L=want.filter(w=>w.at>Date.now()+5000).map(w=>({id:w.id,title:w.title,body:w.body,channelId:"crawl_alerts",smallIcon:"ic_stat_rr",iconColor:"#F5B83D",schedule:{at:new Date(w.at),allowWhileIdle:true}}));
    if(L.length)lnSchedule(L).catch(()=>{})})}
// The day after: which day, how many, which bars. Reads the same whether or not they've looked at the card since.
function afterNote(rec){
  if(!NATIVE||!rec)return;const names=rec.visits.filter(v=>v.counted===true).map(v=>byId(v.id)).filter(Boolean).map(v=>v.name);if(!names.length)return;
  const st=new Date(realAt(rec.startedAt)),at=new Date(st.getFullYear(),st.getMonth(),st.getDate()+1,10,0,0);if(at.getTime()<Date.now()+30*60000)return;
  const day=st.toLocaleDateString("en-AU",{weekday:"long"}),u=[...new Set(names)];
  const list=u.length<=3?(u.length>1?u.slice(0,-1).join(", ")+" and "+u[u.length-1]:u[0]):u.slice(0,3).join(", ")+` and ${u.length-3} more`;
  noteSetup();lnSchedule([{id:104,title:`${day}'s crawl: ${plural(u.length,"rooftop")}`,body:list+".",channelId:"crawl_after",smallIcon:"ic_stat_rr",iconColor:"#F5B83D",extra:{crawl:rec.id},schedule:{at,allowWhileIdle:true}}]).catch(()=>{})}
function loop(){
  liveNote();alertSync();if(S.route!=="play")renderMini();
  const g=G();
  if(g&&g.started&&!g.ended&&now()>=g.endsAt){
    // last orders: heading to a bar when the clock runs out? It still counts if you get there in the next 10 minutes. Nothing to gain by running.
    if(!CR(g)&&!g.demo&&g.target&&!g.lastOrders){g.lastOrders=g.endsAt+LAST_ORDERS*60000;save();buzz([60,40,60]);closeSheet();toast(`Time's up. ${esc(byId(g.target).name)} still counts if you get there in the next ${LAST_ORDERS} minutes. No need to run.`,7000);track("last_orders");if(S.route==="play")renderPlay()}
    if(!(g.lastOrders&&g.target&&now()<g.lastOrders)){endGame(g.endsAt);return}}
  if(CR(g)&&g.started&&!g.ended&&g.autoAt&&now()>=g.autoAt){g.autoEnded=true;endGame(g.autoAt);return}
  if(S.route==="play"&&g&&g.noLoc&&g.target){const hb=$("hereBtn");if(hb&&hb.classList.contains("locked")){if(now()>=hereAt(g)){hb.classList.remove("locked");hb.setAttribute("aria-disabled","false");hb.innerHTML=hereLbl(g);buzz(20)}else hb.innerHTML=hereLbl(g)}}
  if(S.route==="play"&&g){
    renderClock();const a=atVisit(),d=$("dwell");if(a&&d)d.textContent=CR(g)&&now()-a.arrivedAt>=3600000?hmm(now()-a.arrivedAt):mmss(now()-a.arrivedAt);
    if(a&&!spinning&&(now()-a.arrivedAt)>=DWELL()&&!a._shown){a._shown=1;renderPlay()}
    if(a&&!spinning&&!a._flew&&(now()-a.arrivedAt)>=DWELL()&&!$("sheet").open&&!g.reelOpen)flyToCounter();
    if(CR(g)&&g.nudge&&a&&!a._nudged&&!document.hidden&&now()-a.arrivedAt>=g.nudge*60000){a._nudged=1;save();ding();buzz([80,60,80]);if(!spinning)renderPlay()}
    if(a&&!spinning&&(now()-a.arrivedAt)<DWELL_MIN*60000&&$("cantBtn")===null&&false)renderPlay();
    if(!spinning&&g.started&&remaining()<=FINAL*60000&&!g.shownFinal)renderPlay();
    if(g.started&&!spinning){const r=remaining();if(r>0&&r<=10000)tick(1200)}
    if(!spinning&&g.target&&(needManual(g)+"|"+locWeak(g)+"|"+hereLink(g))!==g._man)renderPlay();
    if(g.target||atVisit())locKick();
    if(!CR(g)&&g.jp&&!g.jp.claimed&&!spinning&&!$("sheet").open)jackpotSheet();
    if(g.wild&&!g.wild.shown&&!g.wild.dealing&&g.target===g.wild.id&&!spinning&&Date.now()>revealEnd&&!document.querySelector(".jpx"))dealWild(0);
  }
}
setInterval(loop,1000);setInterval(()=>{if(!document.hidden)markSeen()},15000);addEventListener("pagehide",markSeen);
document.addEventListener("visibilitychange",()=>{
  if(document.hidden){const d_=leaving();if(d_){d_.hid=now();save()}markSeen();return}
  awayGap=S.seenAt?Date.now()-S.seenAt:0;resumedAt=Date.now();
  if(S.game&&locErr===1&&!S.game.noLoc)permState().then(st=>{if(st==="granted"){locErr=null;startWatch();locKick(true)}});   // turned back on in settings
  else if(S.game)locKick(true);
  if(!S.game&&(S.test||navigator.geolocation)){const c0=S.city;permState().then(st=>{if(st==="granted"||S.test)getOnce().then(()=>{if(S.city!==c0)render()}).catch(()=>{})})}
  const g=G();
  if(g&&g.celebrate){const a=g.visits.find(v=>v.leftAt==null);
    // arrived while the phone was away: if it already counts, one quick beat; otherwise the usual arrival
    if(a&&a.id===g.celebrate&&now()-a.arrivedAt>=DWELL())setTimeout(()=>catchUp(g.celebrate),200);else setTimeout(()=>celebrate(g.celebrate),350)}
  else if(S.route==="play")renderPlay();
  loop();
});

/* ---------- boot ---------- */
if(S.game&&!S.test&&!S.game.demo)startWatch();
// no crawl on: nothing of ours should be sitting in the notification shade (left over from a crawl that ended while the page was elsewhere)
else if(NATIVE&&!S.game){natCall("CrawlNotify","clear").catch(()=>{});const BG=bgGeo();if(BG)bgOrphan(BG)}
if(S.test&&!S.game&&S.fake){S.fake=null;save()}
if(navigator.permissions&&navigator.geolocation)permState().then(s=>{if(s==="granted")getOnce().then(()=>{render();[zMap,bMap].forEach(setMe)}).catch(()=>{})});
if(S.onboarded&&(S.route!=="intro"||S.introReplay)){S.introReplay=false;S.route=S.game?"play":"home";save()}   // a fresh open always lands on Play
try{render()}catch(e){console.error(e)}loop();setTimeout(refreshVenues,1500);   // a screen that fails to draw must never stop the rest of the app loading
openSharedFromHash();addEventListener("hashchange",openSharedFromHash);track("app_open",{city:S.city||null,returning:!!(H&&H.length)});pageView(S.route||"home");document.addEventListener("visibilitychange",()=>{if(!document.hidden)refreshVenues()});
if(!BUNDLED&&"serviceWorker" in navigator&&location.protocol==="https:"){const hadSW=!!navigator.serviceWorker.controller;navigator.serviceWorker.register((window.RR_ROOT||"")+"sw.js").then(rg=>{try{rg.update()}catch(e){}}).catch(()=>{});
  // a new version took over: reload once so it's used straight away, unless a crawl screen is open (then it's used next launch)
  let reloaded=false;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!hadSW||reloaded||S.route==="play"||spinning)return;reloaded=true;location.reload()})}
// Phones keep the app open in the background for days. Coming back to it (not mid-crawl), pick up a newer version if there is one.
{let hidAt=0;document.addEventListener("visibilitychange",()=>{if(document.hidden){hidAt=Date.now();return}
  if(BUNDLED||!hidAt||Date.now()-hidAt<5000||location.protocol!=="https:"||(S.game&&S.game.started&&!S.game.ended)||$("sheet").open)return;
  fetch((window.RR_ROOT||"")+"sw.js",{cache:"no-store"}).then(r=>r.text()).then(t=>{const m=t.match(/rr-app-(v[\d-]+)/);if(m&&m[1]!==APPV)location.reload()}).catch(()=>{})})}


/* ---------- accounts and live crawls ----------
   Optional sign-in (Google) backs up My Tab and links you to the people you crawl with.
   Live crawls: the spinner's phone sends the crawl to the cloud when something happens (spin, arrive, leave)
   and a small "still here" every 2 minutes. Anyone with the invite link follows along live.
   One spinner at a time: they can hand the spin over, and if their phone can't be reached for 5 minutes
   a follower can take over. When the crawl ends it lands on every follower's tab.
   Backend: Firebase (Auth + Firestore) when data/config.json has "firebase"; ?fakecloud uses a local stand-in for tests.
   Nothing here runs, and none of it shows, until one of those is set. */
const FB_CFG=(window.RR_CONFIG&&RR_CONFIG.firebase)||null,FAKE_CLOUD=/[?&]fakecloud\b/.test(location.search);
const cloudOn=()=>((!!FB_CFG&&!S.test)||FAKE_CLOUD||S.test)&&!DEMO();   // test mode: friends and live crawls are simulated on the phone (simBackend)
const BEAT_MS=40000,STALE_MS=150000;   // the host checks in every 40 s; nothing for 2½ minutes and followers are offered the spin
let ME=null,CLP=null,liveUnsub=null,liveDoc=null,inviteUnsub=null;

// ----- backend: Firebase -----
function fbBackend(){return new Promise((res,rej)=>{
  const go_=()=>{try{const F=window.RRFB,app=F.initializeApp(FB_CFG);
    const auth=F.initializeAuth(app,{persistence:[F.indexedDBLocalPersistence,F.browserLocalPersistence]}),db=F.initializeFirestore(app,{});
    const d=p=>F.doc(db,...p.split("/")),c=p=>F.collection(db,...p.split("/"));
    const linkOrIn=async(cred,P,name)=>{const u=auth.currentUser;let r;
      try{r=await F.linkWithCredential(u,cred)}
      catch(e){if(e.code==="auth/credential-already-in-use"||e.code==="auth/email-already-in-use")return F.signInWithCredential(auth,P.credentialFromError(e)||cred);throw e}
      if(!r.user.displayName){const pd=(r.user.providerData||[])[0]||{},n=name||pd.displayName;if(n)await F.updateProfile(r.user,{displayName:n,photoURL:pd.photoURL||null})}
      return r};
    res({
      onUser:cb=>F.onAuthStateChanged(auth,u=>{if(!u){F.signInAnonymously(auth).catch(e=>console.warn("anon",e));return}const pd=(u.providerData||[]).find(x=>x&&(x.displayName||x.email))||{};
        cb({uid:u.uid,anon:u.isAnonymous,name:u.displayName||pd.displayName||"",photo:u.photoURL||pd.photoURL||"",email:u.email||pd.email||"",via:(pd.providerId||"").replace(".com","")})}),
      emailUp:async(email,pass,name)=>{const cred=F.EmailAuthProvider.credential(email,pass);const r=await F.linkWithCredential(auth.currentUser,cred);if(name)await F.updateProfile(r.user,{displayName:name});await r.user.reload();return r},
      emailIn:(email,pass)=>F.signInWithEmailAndPassword(auth,email,pass),
      resetPw:email=>F.sendPasswordResetEmail(auth,email),
      rename:n=>F.updateProfile(auth.currentUser,{displayName:n}),
      refresh:()=>auth.currentUser,
      // Google and Apple both end in a Firebase credential, linked onto this phone's anonymous account so its data comes along
      // (or, if that Google/Apple account already exists, signed into instead).
      google:async()=>{let cred=null;
        if(NATIVE&&IOSNAT){const o=await PLG.RRSignIn.google({clientId:RR_CONFIG.googleIosClientId});cred=F.GoogleAuthProvider.credential(o.idToken)}
        else if(NATIVE){const o=await PLG.GoogleAuth.signIn({webClientId:RR_CONFIG.googleWebClientId});cred=F.GoogleAuthProvider.credential(o.idToken)}
        if(cred)return linkOrIn(cred,F.GoogleAuthProvider,null);
        const u=auth.currentUser,p=new F.GoogleAuthProvider();try{return await F.linkWithPopup(u,p)}catch(e){if(e.code==="auth/credential-already-in-use")return F.signInWithCredential(auth,F.GoogleAuthProvider.credentialFromError(e));throw e}},
      apple:async()=>{const raw=Array.from(crypto.getRandomValues(new Uint8Array(24)),b=>b.toString(16).padStart(2,"0")).join("");
        const o=await PLG.RRSignIn.apple({nonce:raw});
        const cred=new F.OAuthProvider("apple.com").credential({idToken:o.idToken,rawNonce:raw});
        // Apple only shares the name the first time someone signs in to the app
        return linkOrIn(cred,F.OAuthProvider,[o.givenName,o.familyName].filter(Boolean).join(" ")||null)},
      // Apple asks apps to cut their access when an account is deleted: a fresh Apple sign-in gives the code to revoke with
      revokeApple:async()=>{const raw=Array.from(crypto.getRandomValues(new Uint8Array(24)),b=>b.toString(16).padStart(2,"0")).join("");
        const o=await PLG.RRSignIn.apple({nonce:raw});if(o.authorizationCode)await F.revokeAccessToken(auth,o.authorizationCode)},
      signOut:async()=>{try{if(NATIVE)await PLG.GoogleAuth.signOut()}catch(e){}await F.signOut(auth)},
      deleteMe:async()=>{await F.deleteUser(auth.currentUser)},
      get:async p=>{const s=await F.getDoc(d(p));return s.exists()?s.data():null},
      set:(p,v,merge)=>F.setDoc(d(p),v,merge?{merge:true}:{}),
      del:p=>F.deleteDoc(d(p)),
      list:async p=>(await F.getDocs(c(p))).docs.map(x=>Object.assign({_id:x.id},x.data())),
      watch:(p,cb)=>F.onSnapshot(d(p),s=>cb(s.exists()?s.data():null),e=>console.warn("watch",e)),
      watchList:(p,cb)=>F.onSnapshot(c(p),s=>cb(s.docs.map(x=>Object.assign({_id:x.id},x.data()))),e=>console.warn("watchList",e)),
      tx:(p,fn)=>F.runTransaction(db,async t=>{const r=d(p),s=await t.get(r),v=fn(s.exists()?s.data():null);if(v===undefined)return false;t.set(r,v);return true})})}catch(e){rej(e)}};
  if(window.RRFB)return go_();
  const sc=document.createElement("script");sc.src=(window.RR_ROOT||"")+"vendor/firebase/rr-firebase.js";sc.onload=go_;sc.onerror=()=>rej(new Error("firebase didn't load"));document.head.appendChild(sc)})}

// ----- backend: a stand-in for tests (?fakecloud=http://127.0.0.1:PORT, served by tests/fakecloud-server.js) -----
function fakeBackend(){
  const base=(location.search.match(/fakecloud=([^&]+)/)||[])[1];const U=decodeURIComponent(base||"http://127.0.0.1:8787");
  const req=(m,p,v)=>fetch(`${U}/${m}?p=${encodeURIComponent(p)}`,v===undefined?{}:{method:"POST",body:JSON.stringify(v)}).then(r=>r.json());
  let uid=sessionStorage.getItem("rrfake-uid");if(!uid){uid="u"+Math.random().toString(36).slice(2,8);sessionStorage.setItem("rrfake-uid",uid)}
  let user={uid,anon:true,name:"",photo:"",email:""};const ucbs=[];
  const poll=(f,get)=>{let last,on=true;const t=async()=>{if(!on)return;try{const v=await get(),k=JSON.stringify(v);if(k!==last){last=k;f(v)}}catch(e){}setTimeout(t,400)};t();return()=>{on=false}};
  return Promise.resolve({
    onUser:cb=>{ucbs.push(cb);setTimeout(()=>cb(user),0)},
    google:async()=>{user=Object.assign({},user,{anon:false,name:sessionStorage.getItem("rrfake-name")||"Test Person",email:"test@example.com"});ucbs.forEach(f=>f(user))},
    signOut:async()=>{user={uid,anon:true,name:"",photo:"",email:""};ucbs.forEach(f=>f(user))},
    emailUp:async(email,pass,name)=>{if(pass.length<6)throw {code:"auth/weak-password"};user=Object.assign({},user,{anon:false,name:name||"",email,via:"password"});ucbs.forEach(f=>f(user))},
    emailIn:async(email,pass)=>{if(pass!=="secret1")throw {code:"auth/invalid-credential"};user=Object.assign({},user,{anon:false,name:"Email Person",email,via:"password"});ucbs.forEach(f=>f(user))},
    resetPw:async()=>true,
    rename:async n=>{user=Object.assign({},user,{name:n})},
    deleteMe:async()=>{user={uid,anon:true,name:"",photo:"",email:""};ucbs.forEach(f=>f(user))},
    get:p=>req("get",p),set:(p,v,merge)=>req(merge?"merge":"set",p,v),del:p=>req("del",p,null),list:p=>req("list",p),
    watch:(p,cb)=>poll(cb,()=>req("get",p)),watchList:(p,cb)=>poll(cb,()=>req("list",p)),
    tx:async(p,fn)=>{const v=fn(await req("get",p));if(v===undefined)return false;await req("set",p,v);return true}})}

// ----- backend: test mode. Nothing leaves the phone. You're signed in as "You", and two simulated friends,
// Sam and Jess, answer invites, follow your crawl, invite you to theirs and play their crawls out (a step every ~25 s).
const SIM={docs:{},w:{},wl:{},quiet:{},manual:{},B:null,t:null};
const SIMF=[{uid:"sim-sam",n:"Sam"},{uid:"sim-jess",n:"Jess"}],SIMSTEP=25000;
function simBackend(){
  const me={uid:"sim-me",anon:false,name:S.myName||"You",photo:"",email:"you@test",via:"google"};
  try{SIM.docs=JSON.parse(localStorage.getItem("rr-sim")||"{}")}catch(e){SIM.docs={}}
  const cp=v=>v==null?null:JSON.parse(JSON.stringify(v)),par=p=>p.split("/").slice(0,-1).join("/");
  const list=pp=>Object.keys(SIM.docs).filter(k=>par(k)===pp).map(k=>Object.assign({_id:k.split("/").pop()},cp(SIM.docs[k])));
  const fire=p=>{(SIM.w[p]||[]).forEach(cb=>setTimeout(()=>cb(cp(SIM.docs[p]||null)),0));const pp=par(p);(SIM.wl[pp]||[]).forEach(cb=>setTimeout(()=>cb(list(pp)),0))};
  const put=(p,v)=>{if(v==null)delete SIM.docs[p];else SIM.docs[p]=cp(v);try{localStorage.setItem("rr-sim",JSON.stringify(SIM.docs))}catch(e){}fire(p)};
  const sub=(m,p,cb)=>{(m[p]=m[p]||[]).push(cb);return()=>{m[p]=(m[p]||[]).filter(x=>x!==cb)}};
  put(`users/${me.uid}`,Object.assign({},SIM.docs[`users/${me.uid}`]||{},{mates:Object.fromEntries(SIMF.map(f=>[f.uid,{n:f.n,t:Date.now()}]))}));
  const B={onUser:cb=>setTimeout(()=>cb(me),0),refresh:()=>me,
    google:async()=>{},apple:async()=>{},emailUp:async()=>{},emailIn:async()=>{},resetPw:async()=>true,deleteMe:async()=>{},revokeApple:async()=>{},
    signOut:async()=>{toast("Test mode keeps you signed in.",2200)},rename:async n=>{me.name=n},
    get:async p=>cp(SIM.docs[p]||null),set:async(p,v,merge)=>put(p,merge?Object.assign({},SIM.docs[p]||{},v):v),del:async p=>put(p,null),list:async p=>list(p),
    watch:(p,cb)=>{setTimeout(()=>cb(cp(SIM.docs[p]||null)),0);return sub(SIM.w,p,cb)},
    watchList:(p,cb)=>{setTimeout(()=>cb(list(p)),0);return sub(SIM.wl,p,cb)},
    tx:async(p,fn)=>{const v=fn(cp(SIM.docs[p]||null));if(v===undefined)return false;put(p,v);return true}};
  SIM.B=B;if(!SIM.t)SIM.t=setInterval(simTick,2000);return Promise.resolve(B)}
const simFriend=uid=>SIMF.find(f=>f.uid===uid);
function simTick(){const B=SIM.B;if(!B)return;
  // an invite to Sam or Jess: they join that crawl a couple of seconds later
  SIMF.forEach(f=>Object.keys(SIM.docs).filter(k=>k.startsWith(`users/${f.uid}/invites/`)).forEach(k=>{B.del(k);simJoin(k.split("/").pop(),f)}));
  // their crawl moves only when you move it from the test panel; their phone still checks in so it doesn't look gone
  Object.keys(SIM.docs).filter(k=>k.startsWith("live/")).forEach(k=>{const d=SIM.docs[k];if(d&&!d.ended&&simFriend(d.host)&&!SIM.quiet[k]&&Date.now()-(d.beat||0)>60000)B.set(k,{beat:Date.now()},true)});
  // and answers "are you there?" from a follower's menu, the way a real phone does (not once it's been made to go quiet)
  Object.keys(SIM.docs).filter(k=>k.startsWith("live/")).forEach(k=>{const d=SIM.docs[k];if(!d||d.ended||!simFriend(d.host)||SIM.quiet[k])return;const P=hostPongs(d);if(P)B.set(k,{pongs:P,beat:Date.now()},true)});
  // and their bar counts once they've been there 3 minutes, the way it does on a real phone
  Object.keys(SIM.docs).filter(k=>k.startsWith("live/")).forEach(k=>{const d=SIM.docs[k];if(!d||d.ended||!simFriend(d.host))return;let g;try{g=JSON.parse(d.g)}catch(e){return}const a=(g.visits||[]).find(v=>v.arrivedAt!=null&&!v.leftAt);
    if(a&&!a._inCount&&Date.now()+(d.off||0)-a.arrivedAt>=DWELL_MIN*60000)simAct(k,()=>{})})}
function simJoin(id,f){return SIM.B.tx(`live/${id}`,d=>{if(!d||d.ended)return undefined;const m=Object.assign({},d.members||{});if(m[f.uid])return undefined;
  let gg={};try{gg=JSON.parse(d.g)}catch(e){}m[f.uid]={n:f.n,j:Date.now(),b:(gg.visits||[]).length};return Object.assign({},d,{members:m})})}
function simSpin(g,t){const c=g.center||{lat:-33.8688,lng:151.2093},been=new Set((g.visits||[]).map(v=>v.id));
  let P=VENUES.filter(v=>!been.has(v.id)&&dist(c,v)<=(g.radius||1.5)*1000);if(!P.length)P=VENUES.filter(v=>!been.has(v.id)).sort((a,b)=>dist(c,a)-dist(c,b)).slice(0,20);
  const v=P[Math.floor(Math.random()*P.length)];if(!v)return;g.target=v.id;g.tAt=t;
  g.wild=Math.random()<.5?{id:v.id,text:WILDS[Math.floor(Math.random()*WILDS.length)],shown:1}:null}
// one step of a crawl Sam or Jess is spinning: spin, walk (~25 s), arrive, stay (~35 s), leave and spin again
const simMin=(a,b)=>(a+Math.random()*(b-a))*60000;
function simDrive(k,force){const d=SIM.docs[k];let g;try{g=JSON.parse(d.g)}catch(e){return}
  let off=d.off||0;const real=Date.now(),cr=g.mode==="cruise";let ch=false;g.visits=g.visits||[];
  if(!d.simAt&&!force){SIM.B.set(k,{simAt:real,beat:real},true);return}   // just handed the spin: start their clock from now, not from the crawl's start
  const jump=ms=>{off+=Math.max(0,ms-(real-(d.simAt||real)));t=real+off};let t=real+off;
  if(!cr&&g.started&&t>=g.endsAt){simEnd(k);return}
  const at=g.visits.find(v=>v.arrivedAt!=null&&!v.leftAt);
  if(at){if(force||real-(d.simAt||0)>=SIMSTEP*1.4){jump(simMin(15,30));if(!cr&&t>=g.endsAt){simEnd(k,g);return}at.leftAt=t;at.counted=true;simSpin(g,t);ch=true}}
  else if(g.target){if(!g.tAt){g.tAt=t;ch=true}
    else if(force||real-(d.simAt||0)>=SIMSTEP){jump(simMin(6,14));if(!cr&&g.started&&t>=g.endsAt){simEnd(k,g);return}g.visits.push({id:g.target,arrivedAt:t,counted:null});if(g.frz&&t<g.frz.until){g.endsAt-=g.frz.until-t;g.frz.until=t}
      if(g.wild&&g.wild.id!==g.target)g.wild=null;g.target=null;ch=true}}
  else{simSpin(g,t);ch=true}
  const patch={beat:real};if(ch){patch.g=JSON.stringify(g);patch.off=off;patch.simAt=real}
  if(!cr&&g.started&&t>=g.endsAt){SIM.B.set(k,patch,true).then(()=>simEnd(k));return}
  SIM.B.set(k,patch,true)}
function simEnd(k,g0){const d=SIM.docs[k];if(!d||d.ended)return;let g=g0;if(!g)try{g=JSON.parse(d.g)}catch(e){return}const t=Date.now()+(d.off||0),stop=g.mode==="cruise"?t:Math.min(t,g.endsAt||t);
  (g.visits||[]).forEach(v=>{if(v.arrivedAt!=null&&!v.leftAt){v.leftAt=Math.max(stop,v.arrivedAt+60000);v.counted=true}});
  const rec=Object.assign({},g,{id:g.id||("gsim"+t),ended:true,endedAt:stop,target:null,wild:null});
  SIM.B.set(k,{ended:true,rec:recForCloud(rec),g:JSON.stringify(rec),beat:Date.now()},true)}
// Sam or Jess starts a 1 hr crawl near you and invites you
async function simInvite(f){const B=await cloud();if(!SIM.B)return;const c=you()||{lat:-33.8688,lng:151.2093},t=Date.now(),len=60;
  // the same shape as a crawl started on a real phone, so it ends, lands on the tab and shows its card like one
  const g={id:"gsim"+t,city:S.city,test:true,mode:"rush",len,radius:1.5,newOnly:false,started:true,startedAt:t,endsAt:t+len*60000+45*60000,frz:{from:t,until:t+45*60000,start:true,zone:true,trip:true},
    center:{lat:c.lat,lng:c.lng},startPos:{lat:c.lat,lng:c.lng},areas:[nearestSuburb(c)],moves:[],voluntaryUsed:false,freeSkips:1,excluded:[],zone:{lat:c.lat,lng:c.lng,name:nearestArea(c)},
    visits:[],target:null,targetAt:null,targetFrom:null,ended:false,shownFinal:false};
  g.zoneN=playable(inCircle(c,g.radius),false).length;
  simSpin(g,t);const id="SIM"+t.toString(36);
  await B.set(`live/${id}`,{host:f.uid,hostName:f.n,g:JSON.stringify(g),beat:t,upd:t,members:{},ended:false,v:1,off:0,simAt:t});
  await B.set(`users/${ME.uid}/invites/${id}`,{from:f.n,fromUid:f.uid,at:t});return id}
// Sam or Jess follows your crawl (makes it live first if it isn't)
async function simFollowMe(f){const g=G();if(!g||!g.started)return;await cloud();const id=await startLive();if(id)await simJoin(id,f)}
const simLiveKey=()=>{const id=S.follow||(G()&&G().live);return id?`live/${id}`:null};
function simQuiet(){const k=simLiveKey();if(!k||!SIM.docs[k])return;SIM.quiet[k]=1;SIM.B.set(k,{beat:Date.now()-STALE_MS-5000},true)}

// test mode simulates friends on this phone, unless two-phone mode is on: then live crawls go through the real backend
const testReal=()=>!!(S.test&&S.testLive&&(FB_CFG||FAKE_CLOUD));
// Test mode with Sam & Jess: crawl codes only exist on this phone, so a real phone can't join one. Scanning a real phone's
// code, or tapping "Invite a real phone", switches this phone to two-phone mode and carries on after the reload.
const testSimOn=()=>!!(S.test&&!testReal()&&(FB_CFG||FAKE_CLOUD));
function testGoReal(next){const g=S.game;if(g&&g.live)delete g.live;[S.wiz,S.quick].forEach(w=>{if(w&&w.live)delete w.live});   // sim crawl ids mean nothing to the real backend
  if(S.follow)S.follow=null;S.testLive=true;S.testNext=next;save();closeSheet();toast("Switching to two real phones…",1500);setTimeout(()=>location.reload(),400)}
function testNextRun(){const n=S.testNext;if(!n||!testReal())return;S.testNext=null;save();
  if(n.join)followLive(n.join);else if(n.invite&&G())setTimeout(liveInvite,600)}
function cloud(){if(!CLP){CLP=(S.test&&!testReal()?simBackend():FAKE_CLOUD?fakeBackend():fbBackend()).then(B=>new Promise(res=>{let first=true;B.onUser(u=>{const was=ME;ME=u;if(first){first=false;res(B)}onUserChange(was,u)})})).catch(e=>{console.warn("cloud",e);CLP=null;throw e})}return CLP}
const signedIn=()=>!!(ME&&!ME.anon);
const myName=()=>(ME&&ME.name)||S.myName||"";
// Other people only ever get your first name (plus your last initial, kept to tell two Sams apart). Never the full name.
const crawlName=()=>{const p=String(myName()).trim().split(/\s+/).filter(Boolean);return p.length?p[0]+(p.length>1?" "+p[p.length-1][0].toUpperCase():""):""};
const nFirst=n=>String(n||"").trim().split(/\s+/)[0]||"";
// how people are shown: first name and last initial ("Sam K."). In a sentence ("Sam's crawl") it's just the first name.
const nShort=n=>{const p=String(n||"").trim().split(/\s+/).filter(Boolean);return p.length>1?p[0]+" "+p[p.length-1][0].toUpperCase()+".":p[0]||""};
const nIn=n=>nShort(n);
const canGoogle=()=>!!(FAKE_CLOUD||(FB_CFG&&(!NATIVE||(CAPX.getPlatform()==="android"&&RR_CONFIG.googleWebClientId)||(IOSNAT&&RR_CONFIG.googleIosClientId))));
// Sign in with Apple: on iPhone (Apple requires it next to Google there)
const canApple=()=>!!(FB_CFG&&IOSNAT);

function onUserChange(was,u){
  if(u&&!u.anon&&(!was||was.anon||was.uid!==u.uid)){tabSyncAll();watchInvites()}
  if(u&&u.anon&&was&&!was.anon){if(inviteUnsub){inviteUnsub();inviteUnsub=null}}
  if($("setPage"))settingsSheet();if($("apOut")){if(u&&!u.anon)accountPage();else closeAcct()}if(S.route==="hist")renderHist();if(u&&!u.anon){if($("siNudge"))$("siNudge").remove();if($("rcIn"))$("rcIn").remove()}
  if(S.follow||(S.game&&S.game.live))liveAttach();
}

// ----- sign in -----
const AUTH_ERR={"auth/invalid-credential":"Wrong email or password.","auth/wrong-password":"Wrong email or password.","auth/user-not-found":"No account with that email. Create one instead.","auth/email-already-in-use":"That email already has an account. Sign in instead.","auth/credential-already-in-use":"That email already has an account. Sign in instead.","auth/weak-password":"Use at least 6 characters.","auth/invalid-email":"That email doesn't look right.","auth/too-many-requests":"Too many tries. Wait a minute and try again.","auth/network-request-failed":"No connection. Check your signal."};
const authErr=e=>AUTH_ERR[e&&e.code]||"Couldn't sign in. Try again.";
const isCancel=e=>/cancel|popup-closed|user.?cancel/i.test(String(e&&(e.code||e.message)||e));
async function signIn(from,via){via=via||"google";track("sign_in_tap",{from,via});
  try{const B=await cloud();await(via==="apple"?B.apple():B.google());track("signed_in",{from,via});afterSignIn(from);return true}
  catch(e){console.warn("sign in",e);if(!isCancel(e)){
    // RR Dev only: show the real reason under the toast so sign-in problems can be diagnosed on the phone
    const dev=NATIVE&&/(^|\.)rooftoproulette\.com$/.test(location.hostname),why=dev?String((e&&(e.code||e.message))||e).slice(0,160):"";
    toast(esc(authErr(e))+(why?"<br><small>"+esc(why)+"</small>":""),dev?9000:3500)}return false}}
// one sign-in sheet everywhere: Apple (iPhone), Google or email
// Signing in from Settings or the account button lists the perks; from an action, just the line that action needs.
const PERK_TAB=()=>`<div>${I.check}<span><b>Save your tab</b><small>Keep your crawls, photos and saved lists across devices</small></span></div>`;
const PERK_LIVE=()=>`<div>${I.check}<span><b>Share your crawl live</b><small>Let friends follow every spin and the timer from their own phones</small></span></div>`;
function signInSheet(why,from,title){from=from||"sheet";
  const perks=(from==="acct"||from==="settings"||from==="sheet"||from==="mytab")?PERK_TAB()+PERK_LIVE():"";
  sheet(`<h3>${title||"Sign in"}</h3>${why?`<p class="note">${why}</p>`:""}
    ${perks?`<div class="aperks">${perks}</div>`:""}
    <div class="acts">
    ${canApple()?`<button class="btn apple" type="button" id="siA">${AIC} Continue with Apple</button>`:""}
    ${canGoogle()?`<button class="btn" type="button" id="siG">${GIC} Continue with Google</button>`:""}
    <button class="btn dark" type="button" id="siE">${I.mail||MAILI} Continue with email</button></div>`,()=>{
    if($("siA"))$("siA").onclick=()=>signIn(from,"apple");if($("siG"))$("siG").onclick=()=>signIn(from);$("siE").onclick=()=>emailSheet("in",from)})}
const MAILI='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 6.5 12 13l8.5-6.5"/></svg>';
function emailSheet(mode,from,em){const up=mode==="up";
  sheet(`<h3>${up?"Create an account":"Sign in with email"}</h3>
    <div class="aform">${up?`<input class="cnin" id="aeName" maxlength="24" autocomplete="given-name" placeholder="First name" value="${esc(S.myName||"")}">`:""}
    <input class="cnin" id="aeMail" type="email" autocomplete="email" inputmode="email" placeholder="Email" value="${esc(em||"")}">
    <input class="cnin" id="aePw" type="password" autocomplete="${up?"new-password":"current-password"}" placeholder="${up?"Password (6+ characters)":"Password"}">
    <p class="aerr" id="aeErr"></p></div>
    <div class="acts"><button class="btn" type="button" id="aeGo">${up?"Create account":"Sign in"}</button>
    <button class="txtbtn" type="button" id="aeSwap">${up?"Already have an account? Sign in":"New here? Create an account"}</button>
    ${up?"":`<button class="txtbtn" type="button" id="aeForgot">Forgot password</button>`}</div>`,()=>{
    const err=t=>{$("aeErr").textContent=t||""};
    $("aeSwap").onclick=()=>emailSheet(up?"in":"up",from,$("aeMail").value.trim());
    if($("aeForgot"))$("aeForgot").onclick=async()=>{const m=$("aeMail").value.trim();if(!m){err("Type your email first.");return}
      try{const B=await cloud();await B.resetPw(m);err("");toast("Check your email for a reset link.",3500)}catch(e){err(authErr(e))}};
    const go=async()=>{const m=$("aeMail").value.trim(),pw=$("aePw").value,nm=up?$("aeName").value.trim():"";
      if(!m||!pw){err("Fill in your email and password.");return}if(up&&!nm){err("Add your first name.");return}
      const b=$("aeGo");b.disabled=true;err("");
      try{const B=await cloud();if(up){await B.emailUp(m,pw,nm);S.myName=nm;save();const u=B.refresh&&B.refresh();if(u&&!FAKE_CLOUD){const was=ME;ME=Object.assign({},ME,{anon:false,name:nm,email:m,via:"password"});onUserChange(was,ME)}}else await B.emailIn(m,pw);
        track("signed_in",{from,via:"email",created:up});afterSignIn(from)}
      catch(e){console.warn(e);err(authErr(e));b.disabled=false}};
    $("aeGo").onclick=go;$("aePw").onkeydown=e=>{if(e.key==="Enter")go()};setTimeout(()=>(up?$("aeName"):$("aeMail")).focus(),60)})}
// your Google photo when there is one, otherwise your initial (also if the photo fails to load)
const meInitial=()=>esc(((ME&&(ME.name||ME.email))||"?")[0].toUpperCase());
const avatarHTML=big=>`<span class="aav${big?" big":""}">${ME&&ME.photo?`<img src="${esc(ME.photo)}" alt="" referrerpolicy="no-referrer" onerror="this.replaceWith(document.createTextNode(this.parentNode.dataset.i))">`:meInitial()}</span>`.replace('<span class="aav','<span data-i="'+meInitial()+'" class="aav');
// once you're in: the account page if you came from the account button or Settings, otherwise just a toast
function afterSignIn(from){let k=0;const go=()=>{const first=((ME&&ME.name)||"").split(" ")[0];
    if(signedIn()&&(from==="acct"||from==="settings"||from==="mytab"))accountPage();
    else if(signedIn()&&from==="live"){closeSheet();toast(first?`You're in, ${esc(first)}.`:"You're in.",2000);setTimeout(liveInvite,350)}
    else{closeSheet();toast(first?`You're in, ${esc(first)}.`:"You're in.",2600)}};
  if(signedIn())go();else{const t=setInterval(()=>{if(signedIn()||++k>25){clearInterval(t);go()}},100)}}
// Account: a full page like Settings, for when you're signed in. Who you are, who you crawl with, your tab's backup.
// App preferences (look, sound, creator mode) stay in Settings: they're for this phone and work signed out too.
const fmtD=t=>new Date(t).toLocaleDateString("en-AU",{day:"numeric",month:"short",year:new Date(t).getFullYear()===new Date().getFullYear()?undefined:"numeric"});
// Account is a slide-up: who you're signed in as, Sign out, Delete account. Nothing else lives here.
function accountPage(){if(!signedIn()){signInSheet(null,"acct");return}
  sheet(`<div class="acct aphead">${avatarHTML(true)}<h3>${esc(ME.name||myName()||"Signed in")}</h3>${ME.email?`<p class="note">${esc(ME.email)}</p>`:""}</div>
    <div class="acts"><button class="btn dark" type="button" id="apOut">Sign out</button><button class="txtbtn" type="button" id="apDel" style="color:var(--red)">Delete account</button></div>`,()=>{
    if(typeof rcSync==="function"&&canBuy())rcInit().then(()=>rcSync());$("apOut").onclick=()=>signOutNow();$("apDel").onclick=deleteAccountSheet})}
function closeAcct(){if($("apOut")&&$("sheet").open)closeSheet()}
function accountSheet(){if(signedIn())accountPage();else signInSheet(null,"acct")}
// the account button on My Tab: your initial when signed in, an outline when not
function acctChip(){if(!(FB_CFG||FAKE_CLOUD))return "";
  return signedIn()?`<button class="acbtn on" type="button" id="acctChip" aria-label="Your account">${avatarHTML()}</button>`
    :`<button class="acbtn" type="button" id="acctChip" aria-label="Sign in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c1.2-3.8 4-5.6 7.5-5.6s6.3 1.8 7.5 5.6"/></svg></button>`}
function acctChipBind(){const b=$("acctChip");if(b)b.onclick=accountSheet}
const AIC='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style="vertical-align:-2px"><path d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.77-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.82-.81-3-.79-1.54.02-2.97.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.24-.02 2.02-1.12 2.77-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.38-3.69zM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.02.61-2.67 1.37-.58.68-1.1 1.77-.96 2.81 1.02.08 2.06-.52 2.69-1.29z"/></svg>';
const GIC='<svg viewBox="0 0 24 24" width="18" height="18" style="vertical-align:-3px"><path fill="#4285F4" d="M22.5 12.3c0-.8-.1-1.5-.2-2.3H12v4.3h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2-1.9 3.2-4.7 3.2-8z"/><path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.7c-1 .7-2.2 1-3.7 1-2.9 0-5.3-1.9-6.2-4.5H2.1v2.8A11 11 0 0 0 12 23z"/><path fill="#FBBC05" d="M5.8 14.1a6.6 6.6 0 0 1 0-4.2V7.1H2.1a11 11 0 0 0 0 9.8l3.7-2.8z"/><path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.6l3.2-3.2A11 11 0 0 0 2.1 7.1l3.7 2.8C6.7 7.3 9.1 5.4 12 5.4z"/></svg>';
async function signOutNow(){const B=await cloud();await B.signOut();closeAcct();localStorage.removeItem("rr-synced");toast("Signed out. Your tab stays on this phone.",3000)}
function deleteAccountSheet(){
  sheet(`<h3>Delete your account?</h3><p class="note">Your tab's backup can't be recovered. Crawls on this phone are kept.</p><div class="acts"><button class="btn" type="button" id="daY" style="background:var(--red);color:#fff">Delete account</button><button class="btn dark" type="button" id="daN">Cancel</button></div>`,()=>{
    $("daN").onclick=closeSheet;$("daY").onclick=async()=>{const B=await cloud(),uid=ME.uid;
      try{const L=await B.list(`users/${uid}/crawls`);for(const x of L)await B.del(`users/${uid}/crawls/${x._id}`);
        try{for(const x of await B.list(`users/${uid}/invites`))await B.del(`users/${uid}/invites/${x._id}`)}catch(e){}
        await B.del(`users/${uid}`);if(ME.via==="apple"&&B.revokeApple&&RR_CONFIG.appleRevoke)try{await B.revokeApple()}catch(e){console.warn("apple revoke",e)}await B.deleteMe();localStorage.removeItem("rr-synced");closeSheet();closeAcct();toast("Account deleted.",3000);track("account_deleted")}
      catch(e){console.warn(e);if(/recent-login/.test(e.code||"")){closeSheet();toast("Sign in again, then delete.",3500);await signIn("delete",ME.via==="apple"?"apple":"google")}else toast("Couldn't delete account. Try again.",3000)}}})}

// ----- My Tab backup (signed in) -----
const syncedMap=()=>{try{return JSON.parse(localStorage.getItem("rr-synced")||"{}")}catch(e){return {}}};
const recHash=s=>{let h=0;for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))|0;return String(h)};
// Everything on your tab comes back when you sign in on another phone: crawls, their photos, your lists and crawl names.
// Photos (already shrunk to 1000px, 3 a crawl at most) go as their own docs next to the crawl: "<crawl id>~p0", "~p1"…
const crawlPics=r=>{const P=(r.photos||[]).slice();if(r.photo&&!P.includes(r.photo))P.push(r.photo);return P};
const recForCloud=r=>{const o=Object.assign({},r),P=crawlPics(r);delete o.photo;delete o.photos;if(P.length){o.np=P.length;o.pi=r.photo?P.indexOf(r.photo):-1}
  if(o.trail&&o.trail.length>600)o.trail=o.trail.filter((_,i)=>i%Math.ceil(o.trail.length/600)===0);return JSON.stringify(o)};
const isPicDoc=id=>/~p\d+$/.test(id);
// a photo has to fit the cloud's size cap; most already do, the rest get re-squeezed
function fitPic(d){if(!d||d.length<380000)return Promise.resolve(d);return new Promise(res=>{const img=new Image();img.onload=()=>{let s=.85,q=.72,out=d;
  for(let k=0;k<6&&out.length>=380000;k++){const c=document.createElement("canvas");c.width=Math.round(img.width*s);c.height=Math.round(img.height*s);c.getContext("2d").drawImage(img,0,0,c.width,c.height);out=c.toDataURL("image/jpeg",q);s*=.85;q=Math.max(.5,q-.05)}
  res(out.length<380000?out:null)};img.onerror=()=>res(null);img.src=d})}
// lists (been, not for us, hit list, favourites) and crawl names live on your account too
const PREF_KEYS=["been","nfu","want","fav","names","gone"];
const prefsNow=()=>{const o={};PREF_KEYS.forEach(k=>{if(S[k]&&typeof S[k]==="object")o[k]=S[k]});return JSON.stringify(o)};
let tabT=null,prefsSent=null;
function tabSyncSoon(){if(!signedIn())return;clearTimeout(tabT);tabT=setTimeout(tabPush,2500)}
async function tabPush(){if(!signedIn())return;const B=await cloud(),uid=ME.uid,m=syncedMap(),L=readH(HKEY),seen={};
  for(const r of L){if(r.demo)continue;seen[r.id]=1;const j=recForCloud(r),h=recHash(j);
    if(m[r.id]!==h){try{await B.set(`users/${uid}/crawls/${r.id}`,{j,at:r.startedAt||0});m[r.id]=h}catch(e){console.warn("tab push",e);break}}
    const P=crawlPics(r);
    for(let i=0;i<P.length;i++){const k=`${r.id}~p${i}`,ph=recHash(P[i]);seen[k]=1;if(m[k]===ph)continue;
      try{const d=await fitPic(P[i]);if(d)await B.set(`users/${uid}/crawls/${k}`,{j:d,at:r.startedAt||0});m[k]=ph}catch(e){console.warn("photo push",e);break}}}
  for(const id of Object.keys(m))if(!seen[id]){try{await B.del(`users/${uid}/crawls/${id}`);delete m[id]}catch(e){}}
  localStorage.setItem("rr-synced",JSON.stringify(m));await prefsPush()}
async function prefsPush(){if(!signedIn())return;const j=prefsNow();if(j===prefsSent)return;
  try{const B=await cloud();await B.set(`users/${ME.uid}`,{prefs:j},true);prefsSent=j}catch(e){console.warn("prefs push",e)}}
// save the whole tab, falling back to cover photos only if the phone's storage is full
function writeTab(L){try{localStorage.setItem(HKEY,JSON.stringify(L));return}catch(e){}
  L.forEach(r=>{if(r.photos&&r.photos.length>1)r.photos=r.photo?[r.photo]:r.photos.slice(-1)});writeH(HKEY,L)}
async function tabSyncAll(){if(!signedIn())return;const B=await cloud(),uid=ME.uid;
  try{const u=(await B.get(`users/${uid}`))||{};B.set(`users/${uid}`,{name:ME.name||"",photo:ME.photo||"",seen:Date.now()},true);
    // lists: merge what's on the account with what's on this phone
    if(u.prefs){try{const p=JSON.parse(u.prefs);PREF_KEYS.forEach(k=>{if(p[k]&&typeof p[k]==="object")S[k]=Object.assign({},p[k],S[k]||{})});save();if(typeof render==="function"&&S.route!=="play")render()}catch(e){}}
    // crawls deleted here or on another of your phones: off this phone too, and never restored
    const gone=S.gone||{};let L=readH(HKEY);const L0=L.length;L=L.filter(r=>!gone[r.id]);if(L.length!==L0){writeTab(L);if(!hTest)H=readH(HKEY);if(S.route==="hist")renderHist()}
    const have=new Set(L.map(r=>r.id)),m=syncedMap(),docs=await B.list(`users/${uid}/crawls`),pics={};let added=0,picsBack=0;
    docs.forEach(x=>{if(gone[x._id.split("~p")[0]])m[x._id]=m[x._id]||1});   // tabPush clears these off the account
    docs.filter(x=>isPicDoc(x._id)).forEach(x=>{const [id,n]=x._id.split("~p");(pics[id]=pics[id]||[])[+n]=x.j});
    // test crawls (simulated friends' crawls, ones moved to test) don't belong on the real tab: mark them so tabPush
    // clears them from the account, instead of bringing them back on every open
    const testIds=new Set(readH(TKEY).map(r=>r.id)),isTestRec=r=>r.test||/^SIM/.test(r.liveId||"")||testIds.has(r.id);
    for(const x of docs){if(isPicDoc(x._id)||have.has(x._id)||gone[x._id])continue;try{const r=JSON.parse(x.j);m[r.id]=recHash(x.j);
      if(isTestRec(r)){docs.filter(d=>d._id.startsWith(r.id+"~p")).forEach(d=>m[d._id]=1);continue}
      const P=(pics[r.id]||[]).filter(Boolean);if(P.length){r.photos=P;if(r.pi>=0&&P[r.pi])r.photo=P[r.pi]}delete r.np;delete r.pi;L.push(r);added++}catch(e){}}
    // crawls already on this phone that lost their photos get them back too
    L.forEach(r=>{const P=(pics[r.id]||[]).filter(Boolean);if(P.length&&!crawlPics(r).length){r.photos=P;r.photo=P[P.length-1];picsBack++}});
    localStorage.setItem("rr-synced",JSON.stringify(m));
    if(added||picsBack){L.sort((a,b)=>b.startedAt-a.startedAt);writeTab(L);if(!hTest)H=readH(HKEY);localStorage.setItem("rr-synced",JSON.stringify(m));
      if(added)toast(`${added} crawl${added===1?"":"s"} back on your tab.`,3000);if(S.route==="hist")renderHist()}
    await tabPush()}catch(e){console.warn("tab sync",e)}}
// lists change all over the app: check every 15 seconds and send them when they have
setInterval(()=>{if(CLP&&signedIn())prefsPush()},15000);

// ----- live crawls -----
const liveId=()=>"L"+Date.now().toString(36)+Math.random().toString(36).slice(2,8);
const liveLink=id=>LIVE_BASE+"#live="+id;
const liveCode=u=>{const m=String(u||"").match(/[#?&]live=([A-Za-z0-9]+)/);return m?m[1]:null};
// what followers get: the bars and times, never your GPS trail or where you started from
const gameForCloud=g=>{const o=Object.assign({},g);["trail","photos","photo","moves","clipN","startPos","here","lastFix"].forEach(k=>delete o[k]);return JSON.stringify(o)};
const liveSig=g=>JSON.stringify([g.started,g.startedAt,g.endsAt,g.frz&&g.frz.until,g.target,g.targetAt,g.spinAt,g.reelOpen,g.jp,g.wild,g.title,g.center,g.radius,(g.visits||[]).map(v=>[v.id,v.arrivedAt,v.leftAt,v.counted,v._inCount])]);
let liveLastSig=null,liveLastPut=0,liveBusy=false;
const isHost=()=>!!(liveDoc&&ME&&liveDoc.host===ME.uid);

async function startLive(){const g=G();if(!g)return startLivePre();if(g.live)return g.live;const B=await cloud();
  const id=liveId(),me=ME.uid;g.live=id;save();
  await B.set(`live/${id}`,{host:me,hostName:crawlName(),g:gameForCloud(g),beat:Date.now(),upd:Date.now(),members:{},ended:false,v:1});
  liveLastSig=liveSig(g);liveLastPut=Date.now();track("live_start");liveAttach();return id}
// invited before the crawl starts: the follow link works straight away and shows "Not started" until the first spin
async function startLivePre(){const w=S.wiz||S.quick,rr=!S.wiz;if(!w||!w.z)return null;if(w.live)return w.live;const B=await cloud();
  const id=liveId();w.live=id;save();
  const pre={mode:rr?"cruise":"rush",len:rr?null:w.len,started:false,visits:[],center:{lat:w.z.lat,lng:w.z.lng},radius:rr?(w.z.r||null):(w.radius||w.z.r),city:S.city};
  await B.set(`live/${id}`,{host:ME.uid,hostName:crawlName(),g:JSON.stringify(pre),beat:Date.now(),upd:Date.now(),members:{},ended:false,v:1});
  track("live_start",{pre:true});return id}
async function liveInvite(){
  if(!signedIn()){track("live_invite_gate");signInSheet("Friends don't need an account to follow.","live","Sign in to share live");return}
  if(!myName()){nameSheet(()=>liveInvite());return}
  let id;try{id=await startLive()}catch(e){console.warn(e);toast("Couldn't start live. Check your signal.",3000);return}if(!id)return;
  track("live_invite");const n=Object.keys((liveDoc&&liveDoc.members)||{}).length;
  inviteSheet(id,`<h3 tabindex="-1" autofocus style="outline:0">Invite friends</h3><p class="note" style="margin:4px 0 12px"><span id="invN">${n?`<span class="invn">${n} following.</span> `:""}</span>Friends follow along and get the recap.</p>`)}
// The invite sheet (Who's coming? and Invite friends): friends you've crawled with as a row of faces up top (one tap each),
// then Send link, with the QR one tap away beside it. No friends yet: the QR shows big instead, the quickest way to get the first one in.
// The invite (Who's coming? in setup, Invite friends from the pill or menu): crawl friends' faces up top (one tap each), the QR
// always there (smaller when the faces are), one Share link button.
async function invParts(id,onAct){const link=liveLink(id),text=`Follow our crawl on Rooftop Roulette:\n${link}`;
  let mates=[],svg="";try{[mates,svg]=await Promise.all([matesList(),qrSVG(link)])}catch(e){}
  const sent=invParts.sent[id]||(invParts.sent[id]={});invParts.mates=mates;invParts.id=id;
  const qr=svg?`<div class="qrbox ${mates.length?"xs":"sm"}">${svg}</div><p class="note qrnote">Scan to follow</p>`:"";
  const real=testSimOn()?`<button class="btn line" type="button" data-iv="real" style="margin-top:8px">Test: invite a real phone</button><p class="note" style="margin:6px 0 0">This code only works for Sam and Jess. Switches to two real phones.</p>`:"";
  return {html:`<div id="invRow">${invRowHTML(id)}</div>`+qr+`<button class="btn invshare" type="button" data-iv="send">${I.share} Share link</button>`+real+`<button class="btn invdone" type="button" data-iv="done">Done</button>`,bind:root=>{
    root.querySelector('[data-iv="done"]').onclick=closeSheet;
    const rb=root.querySelector('[data-iv="real"]');if(rb)rb.onclick=()=>testGoReal({invite:1});
    root.querySelector('[data-iv="send"]').onclick=()=>{if(onAct)onAct();if(NATIVE)PLG.Share.share({title:"Rooftop Roulette",text}).catch(()=>{});else if(navigator.share)navigator.share({text}).catch(()=>{});else{navigator.clipboard&&navigator.clipboard.writeText(link);toast("Link copied.",2000)}};
    invBindRow(root,id,onAct)}}}
// The faces row: people following now (green tick, their name, "Following") first, then crawl friends to tap and invite.
// It redraws as people join, so the host watches each one tick over.
function invRowHTML(id,fresh){const mates=invParts.mates||[],sent=invParts.sent[id]||{},mem=(liveDoc&&liveDoc.members)||{},me=ME&&ME.uid;
  const inn=Object.entries(mem).filter(([u])=>u!==me).sort((a,b)=>(a[1].j||0)-(b[1].j||0)),inU=new Set(inn.map(([u])=>u));
  const names=inn.map(([,m])=>m.n).concat(mates.map(m=>m.n));
  const joined=inn.map(([u,m])=>`<div class="fr in${fresh&&fresh.has(u)?" pop":""}"><span class="av">${esc((m.n||"?")[0].toUpperCase())}<i>✓</i></span><span class="fn">${esc(nIn(m.n,names)||"Friend")}</span><span class="st">Following</span></div>`);
  const rest=mates.filter(m=>!inU.has(m.uid)).map(m=>`<button type="button" class="fr${sent[m.uid]?" sent":""}" data-mu="${m.uid}" ${sent[m.uid]?"disabled":""}><span class="av">${esc((m.n||"?")[0].toUpperCase())}<i>${sent[m.uid]?"✓":"+"}</i></span><span class="fn">${sent[m.uid]?"Invited":esc(nIn(m.n,names)||"Friend")}</span></button>`);
  const all=joined.concat(rest);return all.length?`<div class="frow">${all.join("")}</div>`:""}
function invRefresh(fresh){const r=$("invRow"),id=invParts.id;if(!r||!id||!document.contains(r))return;r.innerHTML=invRowHTML(id,fresh);invBindRow($("sheetBody"),id);
  const n=$("invN"),c=Object.keys((liveDoc&&liveDoc.members)||{}).length;if(n)n.innerHTML=c?`<span class="invn">${c} following.</span> `:""}
function invBindRow(root,id,onAct){const sent=invParts.sent[id]||(invParts.sent[id]={});
    root.querySelectorAll("[data-mu]").forEach(b=>b.onclick=async()=>{const u=b.dataset.mu;b.disabled=true;
      try{const B=await cloud();await B.set(`users/${u}/invites/${id}`,{from:crawlName(),fromUid:ME.uid,at:Date.now()});sent[u]=1;b.classList.add("sent");b.querySelector("i").textContent="✓";b.querySelector(".fn").textContent="Invited";track("live_invite_mate");if(onAct)onAct()}
      catch(e){b.disabled=false;toast("Couldn't send that one.",2500)}})}
invParts.sent={};
async function inviteSheet(id,head,foot){const P=await invParts(id);sheet(head+P.html+(foot||""),()=>{P.bind($("sheetBody"));const l=$("sheetBody").querySelector('[data-iv="later"]');if(l)l.onclick=closeSheet})}

// QR code of the follow link: for when everyone's standing together. Always black on white so cameras read it.
const QRI='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="6.5" height="6.5" rx="1.2"/><rect x="14" y="3.5" width="6.5" height="6.5" rx="1.2"/><rect x="3.5" y="14" width="6.5" height="6.5" rx="1.2"/><path d="M14 14h2.5v2.5H14zM18.5 18.5h2M14 20.5h2.5M20.5 14v2.5"/></svg>';
let qrP=null;
const qrLib=()=>qrP||(qrP=new Promise((res,rej)=>{if(window.qrcode)return res(window.qrcode);const sc=document.createElement("script");sc.src=(window.RR_ROOT||"")+"vendor/qr/qrcode.js";sc.onload=()=>res(window.qrcode);sc.onerror=()=>{qrP=null;rej(new Error("qr didn't load"))};document.head.appendChild(sc)}));
async function qrSVG(link){try{const Q=await qrLib(),q=Q(0,"M");q.addData(link);q.make();return q.createSvgTag({cellSize:6,margin:3,scalable:true})}catch(e){console.warn(e);return ""}}
async function qrSheet(link,back){let svg="";
  try{const Q=await qrLib(),q=Q(0,"M");q.addData(link);q.make();svg=q.createSvgTag({cellSize:6,margin:3,scalable:true})}catch(e){console.warn(e);toast("Couldn't make the code. Send the link instead.",3000);return}
  track("live_qr");
  sheet(`<h3>Scan to follow</h3><p class="note">Open the phone camera and point it here.</p><div class="qrbox">${svg}</div>
    <div class="acts"><button class="btn dark" type="button" id="qrBack">Back</button></div>`,()=>{$("qrBack").onclick=()=>back?back():closeSheet()})}
function nameSheet(after,why){
  sheet(`<h3>What's your name?</h3><p class="note">${why==="follow"?"So friends know who's following.":"So friends know whose crawl it is."}</p><input class="cnin" id="nmIn" maxlength="24" autocomplete="given-name" placeholder="First name" value="${esc(S.myName||"")}">
    <div class="acts"><button class="btn" type="button" id="nmOk">Done</button>${why==="follow"?"":`<button class="btn dark" type="button" id="nmG">Sign in instead</button>`}</div>`,()=>{
    const ok=()=>{const v=$("nmIn").value.trim();if(!v)return;S.myName=v;save();closeSheet();after&&after()};
    $("nmOk").onclick=ok;$("nmIn").onkeydown=e=>{if(e.key==="Enter")ok()};if($("nmG"))$("nmG").onclick=()=>signInSheet("So friends see your name.","live");setTimeout(()=>$("nmIn").focus(),50)})}

// host: push the crawl when something happened, plus a "still here" every 2 minutes
// Anything friends would see (a spin starting, the bar it lands on, arriving, a bar counting) goes out as soon as it
// happens, at most one write a second; otherwise a "still here" every 2 minutes.
var liveKickT=0;   // var: save() can kick a live crawl while the app is still starting, before this line has run
function liveKick(){if(liveKickT)return;liveKickT=setTimeout(()=>{liveKickT=0;liveSync(false)},120)}
async function liveSync(force){const g=G();if(!g||!g.live||!CLP||!isHost())return;if(liveBusy){liveKick();return}
  const sig=liveSig(g)+"|"+Math.round((now()-Date.now())/5000),t=Date.now();if(!force&&sig===liveLastSig&&t-liveLastPut<BEAT_MS)return;
  if(!force&&sig!==liveLastSig&&t-liveLastPut<1000){clearTimeout(liveKickT);liveKickT=setTimeout(()=>{liveKickT=0;liveSync(false)},1000-(t-liveLastPut)+20);return}
  liveBusy=true;try{const B=await cloud();const patch={beat:t,upd:t,off:now()-Date.now()};if(sig!==liveLastSig||force)patch.g=gameForCloud(g);if(g.ended)patch.ended=true;
    await B.set(`live/${g.live}`,patch,true);liveLastSig=sig;liveLastPut=t}catch(e){console.warn("live sync",e)}finally{liveBusy=false}}

// everyone in a live crawl watches its doc
async function liveAttach(){const id=(S.game&&S.game.live)||S.follow;if(!id)return;const B=await cloud();if(liveUnsub&&liveUnsub._id===id)return;if(liveUnsub)liveUnsub();
  liveUnsub=B.watch(`live/${id}`,d=>{liveDoc=d;onLive(id,d)});liveUnsub._id=id}
function liveDetach(){if(liveUnsub)liveUnsub();liveUnsub=null;liveDoc=null}
function onLive(id,d){
  if(!d){if(S.follow===id){S.follow=null;save();closeFollow();if(fvNote){fvNote="";natCall("CrawlNotify","clear").catch(()=>{})}toast("That crawl's not live any more.",3000)}return}
  const me=ME&&ME.uid,g=G();
  if(g&&g.live===id&&d.host!==me){   // the spin was handed over or taken: this phone becomes a follower
    if(fv&&fvPrev)closeFollow();g.handedOff=true;S.game=null;S.follow=id;save();stopWatch();closeSheet();toast(`${esc(nFirst(d.hostName)||"Someone else")} has the spin now.`,3500);go("home");openFollow();return}
  if(S.follow===id&&d.host===me&&!d.ended){takeSpin(d);return}   // handed to this phone
  if(S.follow===id&&d.cancelled){S.follow=null;save();if(fv)closeFollow();toast(`${esc(nFirst(d.hostName)||"The host")} called off the crawl.`,3500);go("home");return}
  if(S.follow===id){if(d.ended)followEnded(d);paintFollow();if(!fv){let gg={};try{gg=JSON.parse(d.g)}catch(e){}followNote(d,gg,Date.now()+(d.off||0))}}
  if(g&&g.live===id){paintMembers(d,id);if(d.host===me){const P=hostPongs(d);if(P)cloud().then(B=>B.set(`live/${id}`,{pongs:P,beat:Date.now()},true)).catch(()=>{})}}}
// A follower opening the menu asks "are you there?" (their member entry gets a ping time). The host's phone answers
// straight away by echoing it back. No answer within a few seconds and that follower can take over the crawl.
function hostPongs(d){const P=Object.assign({},d.pongs||{});let ch=false;Object.entries(d.members||{}).forEach(([u,m])=>{if(m&&m.ping&&P[u]!==m.ping){P[u]=m.ping;ch=true}});return ch?P:null}
// A locked phone (or another app on top) can't answer followers' "are you there?". The host's phone says so as it goes,
// so followers see "away from the app", not "isn't connected", and nobody takes over from someone just pocketing a phone.
function hostAway(on){const g=G();if(!g||!g.live||g.ended||!isHost())return;cloud().then(B=>B.set(`live/${g.live}`,on?{away:Date.now(),beat:Date.now()}:{away:0,beat:Date.now()},true)).catch(()=>{})}
document.addEventListener("visibilitychange",()=>hostAway(document.hidden));
addEventListener("pagehide",()=>hostAway(true));
let memSeen=null;
function paintMembers(d,id){const ids=Object.keys(d.members||{}),me=ME&&ME.uid,prev=memSeen&&memSeen.id===id?memSeen.s:null,fresh=new Set(prev?ids.filter(u=>!prev.has(u)&&u!==me):[]);
  memSeen={id,s:new Set(ids)};
  if(fresh.size){buzz([30,60,30]);const nm=[...fresh].map(u=>nFirst(d.members[u].n)||"A friend");
    if(!($("sheet").open&&$("invRow")&&$("sheet").contains($("invRow"))))toast(nm.length>1?`${nm.length} friends joined your crawl`:`${esc(nm[0])} joined your crawl`,3000);invRefresh(fresh)}
  const n=ids.length,el=$("liveN");if(el)el.textContent=n?`${n} following`:"Live";paintPeople();if(typeof paintMixInv==="function")paintMixInv()}
// the people button on the crawl screen: a plus until someone follows, then how many are following
function PEOPLEI_(){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="8" r="3.6"/><path d="M3.5 20c1-3.7 3.6-5.6 6.5-5.6s5.5 1.9 6.5 5.6"/></svg>'}
function paintPeople(){const b=$("pPeople"),g=G();if(!b)return;const on=cloudOn()&&g&&!g.ended&&!g.demo;b.hidden=!on;if(!on)return;
  const n=g.live&&liveDoc&&!liveDoc.ended?Object.keys(liveDoc.members||{}).length:0;
  {const h=PEOPLEI_()+`<i class="pbadge${n?" n":""}">${n||"+"}</i>`;if(b._h!==h){b._h=h;b.innerHTML=h}}{const t=$("tbar");if(t)b.style.top=(t.offsetTop+t.offsetHeight+12)+"px"}b.setAttribute("aria-label",n?`${n} following. Invite friends`:"Invite friends")}

// test mode: open the follow screen on your own crawl, exactly as it reaches friends' phones
async function previewFollow(){const g=G();if(!g||!g.started)return;try{await cloud();await startLive();await liveSync(true)}catch(e){console.warn(e)}closeSheet();openFollow(true);liveAttach()}
// follower
async function followLive(id){if(!cloudOn()){toast("Live crawls need the latest app.",3000);return}
  if(testSimOn()&&!/^SIM/.test(id)&&!(typeof SIM!=="undefined"&&SIM.docs[`live/${id}`])){testGoReal({join:id});return}
  if(S.game&&S.game.live===id){go("play");return}
  if(S.game&&S.game.started&&!S.game.ended){toast("Finish your own crawl first.",3000);return}
  if(!myName()){nameSheet(()=>followLive(id),"follow");return}   // so the host sees who's following, not "Friend"
  S.follow=id;S.liveInv=null;save();track("live_follow");openFollow();
  const B=await cloud();
  try{await B.tx(`live/${id}`,d=>{if(!d||d.ended||d.host===ME.uid)return undefined;const m=d.members||{};if(m[ME.uid]){if(m[ME.uid].n===crawlName())return undefined}else{let gg={};try{gg=JSON.parse(d.g)}catch(e){}m[ME.uid]={n:crawlName()||"",j:Date.now(),b:(gg.visits||[]).length}}
    m[ME.uid].n=crawlName()||m[ME.uid].n||"";return Object.assign({},d,{members:m})})}catch(e){console.warn("join",e)}
  liveAttach()}
let fv=null,fvMap=null,fvLayer=null,fvT=null,fvPrev=false;
const CHEVD='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
// The same layout as the person spinning (count, clock, map up top, the bar card below), under a banner that says
// whose crawl it is and that they have the spin, so nobody (or nobody looking over a shoulder) takes it for theirs.
const EYEI='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>';
function openFollow(prev){if(fv)return;fvPrev=!!prev;fvSig="";fvCardSig="";fvCnt=null;
  // the tabs stay under the follow screen, like they do under your own crawl
  if(!fvPrev&&S.route!=="home"){S.route="home";save();render()}   // opening it puts you back on the Play tab, wherever you opened it from
  document.body.classList.add("fvon");paintTabsFv();
  fv=document.createElement("div");fv.className="followv";document.body.appendChild(fv);requestAnimationFrame(()=>fv&&fv.classList.add("on"));
  // A status page, not a copy of the game: the clock, where the group is, the wildcard in play and the rooftops so far.
  // No reel, no animations, nothing to press that the host's phone does, so nobody expects it to work like the host's.
  fv.innerHTML=`<div class="fv-hd"><div class="t"><b id="fvWho">Following</b><small id="fvWhoS"></small></div>${S.test?`<button type="button" class="fv-test" id="fvTest">TEST</button>`:""}<span class="fv-livepill"><i></i>LIVE</span><button type="button" class="iconbtn" id="fvMenu" aria-label="Menu">${I.more}</button></div>
    <div class="clock fv-clock" id="fvClockW"><b id="fvClock">--:--</b><small id="fvSub"></small></div>
    <div class="tbar" id="fvBar"><i id="fvBarI"></i></div>
    <div class="fv-body"><div class="fv-alert" id="fvAlert" hidden></div><div id="fvNow"></div><div id="fvList"></div><div class="fv-act" id="fvAct"></div></div>`;
  $("fvMenu").onclick=followMenu;if($("fvTest"))$("fvTest").onclick=()=>$("testFab").onclick();
  // travel time to the bar from where you are: only if location's already allowed (no prompt just for following)
  if(!(S.test&&S.fake)&&!here)permState(false).then(st=>{if(st==="granted")getOnce().then(()=>{if($("fvNow"))$("fvNow")._k="";paintFollow()}).catch(()=>{})}).catch(()=>{});
  fvStretch(fv.querySelector(".fv-body"));
  clearInterval(fvT);fvT=setInterval(()=>{if(Date.now()-fvScrollAt>350)paintFollow()},250);liveAttach();paintFollow();if(!fvPrev)setTimeout(()=>pingHost(true),1500)}
// a quiet check of the host's phone whenever a follower comes back to the app, so the menu already knows
document.addEventListener("visibilitychange",()=>{if(document.hidden||!fv)return;const id=S.follow;
  if(id)cloud().then(B=>B.get(`live/${id}`)).then(d=>{if(d&&S.follow===id&&(!liveDoc||(d.upd||0)>=(liveDoc.upd||0))){liveDoc=d;onLive(id,d)}}).catch(()=>{});
  if(!fvPrev)setTimeout(()=>pingHost(true),800)});
let fvScrollAt=0;
function fvStretch(el){if(!el)return;let y0=null,edge=0,pull=0;
  const set=p=>{pull=p;el.style.transformOrigin=edge>0?"50% 0":"50% 100%";el.style.transform=p?`scaleY(${1+Math.min(.08,p/2400)})`:""};
  el.addEventListener("scroll",()=>{fvScrollAt=Date.now()},{passive:true});
  el.addEventListener("touchstart",e=>{fvScrollAt=Date.now();y0=e.touches[0].clientY;edge=0;el.style.transition="none"},{passive:true});
  el.addEventListener("touchmove",e=>{if(y0==null)return;fvScrollAt=Date.now();const dy=e.touches[0].clientY-y0,top=el.scrollTop<=0,bot=el.scrollTop+el.clientHeight>=el.scrollHeight-1;
    if(!edge){if(top&&dy>0)edge=1;else if(bot&&dy<0)edge=-1;else{y0=e.touches[0].clientY;return}}
    const p=edge*dy;if(p<=0){edge=0;set(0);y0=e.touches[0].clientY;return}set(p*.5)},{passive:true});
  const end=()=>{y0=null;if(pull){el.style.transition="transform .45s cubic-bezier(.2,1.4,.4,1)";set(0)}edge=0};
  el.addEventListener("touchend",end,{passive:true});el.addEventListener("touchcancel",end,{passive:true})}
const fvGame=d=>{try{return JSON.parse(d.g)}catch(e){return {}}};
const fvHost=d=>((d&&d.hostName)||"Friend").split(" ")[0];
// the crawl's map, full screen, the same as the person spinning has it: zone, every bar in it, the bars so far, the next bar, you
async function followMap(){const d=liveDoc;if(!d)return;const g=fvGame(d),t=Date.now()+(d.off||0),cr=g.mode==="cruise",tgt=g.target&&byId(g.target);
  const been=(g.visits||[]).filter(v=>v.arrivedAt!=null).map(v=>v.id),inZ=!cr&&g.center&&g.radius?playable(inCircle(g.center,g.radius),false).filter(v=>!(g.excluded||[]).includes(v.id)):[];
  const left=inZ.filter(v=>!been.includes(v.id)&&openOK(v,t)).length,who=fvHost(d),area=(g.areas&&g.areas[g.areas.length-1])||(g.center?nearestSuburb(g.center):"");
  const ov=document.createElement("div");ov.className="mapfull";
  ov.innerHTML=`<div id="fvBigMap"></div>${fvPrev?"":`<div class="fv-live mf-follow" role="status"><span class="fv-eye">${EYEI}</span><span class="t"><b>Following ${esc(who)}'s crawl</b></span></div>`}<button class="shv-x mf-x" type="button" aria-label="Close">${I.x}</button>
    ${cr?"":`<div class="mf-card"><span class="mf-ring" aria-hidden="true"></span><div class="t"><b>${fvPrev?"Your zone":esc(who)+"'s zone"}</b><small>${esc(area)}${g.radius?" · "+kmTxt(g.radius):""} · ${plural(left,"rooftop")} left</small></div></div>`}`;
  document.body.appendChild(ov);requestAnimationFrame(()=>ov.classList.add("on"));let m=null;
  const close=()=>{ov.classList.remove("on");setTimeout(()=>{try{m&&m.remove()}catch(e){}ov.remove()},220)};ov.querySelector(".mf-x").onclick=close;
  m=await makeMap("fvBigMap",{greedy:true});if(!m)return;
  if(!cr&&g.center&&g.radius)m.circle(g.center,g.radius);
  inZ.filter(v=>!been.includes(v.id)&&v.id!==g.target).forEach(v=>m.pin(v,openOK(v,t)?"":"off",()=>barSheet(v)));
  been.map(byId).filter(Boolean).forEach(v=>m.pin(v,"seen",()=>barSheet(v)));
  if(tgt)m.pin(tgt,"big",()=>barSheet(tgt));
  if(!fvPrev)setMe(m);
  if(!cr&&g.center&&g.radius)m.fitZone(g.center,g.radius,tgt?[tgt]:[],60);
  else{const pts=been.map(byId).filter(Boolean).concat(tgt?[tgt]:[]);if(!fvPrev&&you())pts.push(you());if(pts.length)setTimeout(()=>m.fitPts(pts,16,{top:110,left:30,right:30,bottom:60}),80)}}
// the bars so far, behind the counter: the same sheet the person spinning has (photos, map, tap a bar to see it)
function followBars(){const d=liveDoc;if(!d)return;const fresh=()=>{const dd=liveDoc||d;return {g:fvGame(dd),t:Date.now()+(dd.off||0),who:fvHost(dd),prev:fvPrev,fresh}};nightSheet(fresh())}
// clock and line under it, shared by the follow screen and the minimised bar
function fvClockTxt(d,g,t){const cr=g.mode==="cruise",fz=g.frz&&t<g.frz.until,left=fz?g.endsAt-g.frz.until:g.endsAt-t,vs=(g.visits||[]).filter(v=>v.arrivedAt!=null),nb=vs.filter(v=>v.counted!==false).length;
  return {clock:d.ended?"Done":!g.started?"Not started":cr?hmm(t-g.startedAt):mmss(left),sub:d.ended?plural(nb,"rooftop"):cr?"No timer":fz&&g.frz.start?"Clock starts at the first rooftop":`${plural(nb,"rooftop")} so far`,nb}}
// the line under the clock and the bar under that, as the person spinning sees them
function fvLabel(d,g,t){const cr=g.mode==="cruise";if(d.ended)return {lbl:"Crawl over",cls:"",pct:0};if(!g.started)return {lbl:"Not started",cls:"",pct:100};if(cr)return {lbl:"R&R · no timer",cls:"",pct:0};
  const fz=g.frz&&t<g.frz.until,left=fz?g.endsAt-g.frz.until:g.endsAt-t,pct=Math.max(0,Math.min(100,left/((g.len||60)*60000)*100));
  if(fz)return g.frz.start?{lbl:"Starts at first rooftop",cls:"",pct:100}:{lbl:(g.frz.trip?"Free trip · ":"Frozen · ")+mmss(g.frz.until-t),cls:" frozen",pct};
  const red=left<=10*60000,warn=left<=FINAL*60000&&!red;return {lbl:left<=FINAL*60000?"Final stretch":"Left",cls:red?" red":warn?" warn":"",pct}}
// Followers get the same ongoing notification as the person spinning (Android): where the crawl's at and the time left
let fvNote="",fvNoteAt=0;
function followNote(d,g,t){if(!NATIVE||fvPrev)return;
  if(!d||d.ended||!g.started){if(fvNote){fvNote="";natCall("CrawlNotify","clear").catch(()=>{})}return}
  noteSetup();notifEnsure("f"+S.follow,true);
  const cr=g.mode==="cruise",vs=(g.visits||[]).filter(v=>v.arrivedAt!=null),at=vs.find(v=>!v.leftAt),tgt=g.target&&byId(g.target),who=d.hostName?nFirst(d.hostName)+"'s crawl":"Live crawl";
  const hn=fvHost(d),nx=tgt&&(!at||tgt.id!==at.id)?tgt:null,spin=fvSpinning(g,t);
  const o={follower:true,title:spin?`${hn} is spinning`:nx?(at?`Up next: ${nx.name}`:`Heading to ${nx.name}`):at?`At ${byId(at.id).name}`:`${hn} spins next`,text:`Following ${hn}'s crawl`};
  const fz=g.frz&&t<g.frz.until;
  if(!cr&&fz&&g.frz.start)o.text=`Following ${hn}'s crawl · clock starts at the first rooftop`;
  else if(!cr&&!fz){o.endsAt=Math.round(g.endsAt-(d.off||0));o.startAt=Math.round(g.startedAt-(d.off||0));o.max=1000;o.progress=Math.round(1000*Math.max(0,g.endsAt-t)/Math.max(1,g.endsAt-g.startedAt))}
  else if(cr&&at)o.since=Math.round(at.arrivedAt);
  const key=JSON.stringify([o.title,o.text,o.endsAt,o.since]);if(key===fvNote&&Date.now()-fvNoteAt<60000)return;
  fvNote=key;fvNoteAt=Date.now();natCall("CrawlNotify","update",o).catch(()=>{})}
// the follower's menu: the same sheet as the host's, with only what a follower can do
const PING_WAIT=6000;   // a host phone that's locked or on a slow connection can take a few seconds to answer: say "Checking" until it's sure
let fmPing=0;
// where the host's phone stands for this follower: answering, being checked, or not answering
// A locked host phone is normal (it's in a pocket): it still checks in every 15 seconds (the native notification nudges
// it), so it counts as connected. Three missed check-ins (flat, off, no signal) and it can be taken over.
const AWAY_DEAD=45000;
const QUIET_MS=20000;   // a check-in's overdue: probably flat, but give it until AWAY_DEAD before anyone can take over
function hostReach(d){if(d&&!d.ended&&d.away){const q=Date.now()-(d.beat||0);return q>AWAY_DEAD?"gone":q>QUIET_MS?"quiet":"ok"}return hostReach0(d)}
const quietLeft=d=>Math.max(1,Math.ceil((AWAY_DEAD-(Date.now()-(d.beat||0)))/1000));
// the native nudge: the host's "still here", and an answer to anyone who asked
window.__rrBeat=async()=>{try{if(typeof liveNote==="function")liveNote()}catch(e){}   // keeps "12 min here" current with the phone locked
  const g=G();if(!g||!g.live||g.ended||!isHost()||!document.hidden)return;
  try{const B=await cloud(),id=g.live,d=await B.get(`live/${id}`).catch(()=>null),P=d?hostPongs(d):null;await B.set(`live/${id}`,Object.assign({beat:Date.now()},P?{pongs:P}:{}),true)}catch(e){console.warn("beat",e)}};
function hostReach0(d){if(!d||d.ended)return "ok";const me=ME&&ME.uid,m=me&&(d.members||{})[me];
  if(Date.now()-(d.beat||0)>STALE_MS)return "gone";
  if(fmPing&&(!m||m.ping!==fmPing))return Date.now()-fmPing<PING_WAIT?"checking":"ok";   // this phone's ask hasn't reached the crawl yet (or this phone's offline)
  if(!m||!m.ping)return "ok";if((d.pongs||{})[me]===m.ping)return "ok";return Date.now()-m.ping>PING_WAIT?"gone":"checking"}
async function pingHost(quiet){const id=S.follow,me=ME&&ME.uid;if(!id||!me||!liveDoc||liveDoc.ended||!(liveDoc.members||{})[me])return;
  if(quiet&&Date.now()-fmPing<30000)return;fmPing=Date.now();
  try{const B=await cloud();await B.set(`live/${id}`,{members:{[me]:Object.assign({},liveDoc.members[me],{ping:fmPing})}},true)}catch(e){console.warn(e)}}
// Never greyed out: a tap while it's still checking waits for the answer, then opens the confirm if the host's phone is gone.
function fmTakeHTML(d){const st=hostReach(d),who=esc(fvHost(d));
  return `<button type="button" id="fmTake" class="${st==="gone"||st==="quiet"?"warn":""}">${I.dice}<span>Take over the crawl<small>${st==="gone"?`${who} isn't connected`:st==="quiet"?`No signal from ${who} · ready in ${quietLeft(d)}s`:st==="checking"?`Checking ${who}…`:`${who} is connected`}</small></span></button>`}
let fmWant=false;
function takeTap(){const st=hostReach(liveDoc),who=esc(fvHost(liveDoc));
  if(st==="gone"||st==="away"){fmWant=false;takeOverSheet();return}
  if(st==="ok"&&Date.now()-fmPing<PING_WAIT+1500){fmWant=false;toast(`${who} is connected.<br>Ask ${who} for the spin.`,3500);return}
  if(st==="ok")pingHost();fmWant=true}   // checking (or a fresh check): the row carries on once it hears back
function followMenu(){const d=liveDoc,who=fvHost(d),mine=fvPrev;
  if(!mine&&d&&!d.ended&&Date.now()-fmPing>10000)pingHost();
  sheet(`<h3>Menu</h3><div class="menu">
    ${mine||!d||d.ended?"":`<div id="fmTakeW">${fmTakeHTML(d)}</div>`}
    <button type="button" id="fmHow">${I.help}<span>How it works</span></button>
    ${mine?"":`<button type="button" class="danger" id="fmLeave">${I.flag}<span>Stop following</span></button>`}
  </div>`,()=>{
    $("fmHow").onclick=()=>{let g={};try{g=JSON.parse(d.g)}catch(e){}(g.mode==="cruise"?cruiseHow:howSheet)()};
    // the take-over row updates itself while the menu's open: checking → responding, or checking → not responding
    fmWant=false;const W=$("fmTakeW");if(W){const bind=()=>{const b=$("fmTake");if(b)b.onclick=takeTap};bind();
      const iv=setInterval(()=>{if(!document.contains(W)||!$("sheet").open){clearInterval(iv);fmWant=false;return}const h=fmTakeHTML(liveDoc);if(W._h!==h){W._h=h;const b=$("fmTake"),t=document.createElement("div");t.innerHTML=h;const nb=t.firstElementChild;
          if(b&&nb){b.className=nb.className;const sm=b.querySelector("small"),ns=nb.querySelector("small");if(sm&&ns)sm.textContent=ns.textContent}else{W.innerHTML=h;bind()}}
        if(fmWant&&hostReach(liveDoc)!=="checking")takeTap()},250)}
    if($("fmLeave"))$("fmLeave").onclick=()=>sheet(`<h3>Stop following?</h3><p class="note">This crawl won't go on your tab.</p>
      <div class="acts"><button class="btn" type="button" id="flY" style="background:var(--red);color:#fff">Stop following</button><button class="btn dark" type="button" id="flN">Keep following</button></div>`,()=>{
      $("flN").onclick=closeSheet;$("flY").onclick=()=>{closeSheet();leaveFollow();go("home")}})})}
function paintTabsFv(){document.querySelectorAll("#tabs button").forEach(b=>b.setAttribute("aria-selected",String(fv?b.dataset.tab==="play":b.dataset.tab===(S.route==="bars"?"bars":S.route==="hist"?"hist":"play"))))}
// minimise: the follow screen drops into the bar above the tabs, the same as leaving your own crawl
function minFollow(to){const p=fvPrev;fvMinDrop=!p;closeFollow();go(p?"play":to||"home")}
let fvMinDrop=false;
function closeFollow(){clearInterval(fvT);fvPrev=false;document.body.classList.remove("fvon");setTimeout(paintTabsFv,0);if(fv){const el=fv;el.classList.remove("on");setTimeout(()=>el.remove(),220)}fv=null;fvMap=null;if(S.follow&&!(liveDoc&&!liveDoc.ended)){S.follow=null;save();liveDetach()}}
function leaveFollow(){S.follow=null;save();liveDetach();closeFollow();if(fvNote){fvNote="";natCall("CrawlNotify","clear").catch(()=>{})}}
let fvSig="",fvCardSig="",fvCnt=null,fvFly=false;
// The bar card, the same one the person spinning sees: photo, name, wildcard, time there or directions
// the host's wheel is going: their spin started after the bar they last landed on, in the last 30 seconds (60 for a jackpot)
const fvJack=g=>g.jp&&g.jp.at>(g.targetAt||0)&&g.jp.at>=(g.spinAt||0)?g.jp:null;   // a jackpot spin since the last bar landed
const fvSpinning=(g,t)=>!!g.spinAt&&(!g.targetAt||g.spinAt>g.targetAt)&&(fvJack(g)?t-g.spinAt<10*60000:t-g.spinAt<30000);
// a wheel of the zone's bar names rolling past, until the host's lands. Then the bar it landed on drops in, same as theirs.
// what's going on now: the rooftop the group's at or heading to (photo, name, time there or the walk), or a quiet
// panel while the host spins. The rooftop list and the wildcard sit under it.
function fvCard(d,g,t){fvCard0(d,g,t)}
const fvVisits=g=>(g.visits||[]).filter(v=>v.arrivedAt!=null);
const fvWildAt=(g,id)=>{const e=(g.wlog||[]).filter(x=>x&&typeof x==="object"&&x.id===id).pop();return e?e.t:(g.wild&&g.wild.id===id?g.wild.text:"")};
function fvRule(g,w){const m=WMETA[w.text];if(!m)return w.text;if(m.seal&&!wOpenNow(g,w))return "Opens at the rooftop";if(m.spin)return (w.res||[]).length?wFull(m,w.res):m.t;return wLead(m)}
function fvCard0(d,g,t){const el=$("fvNow"),who=esc(fvHost(d));if(!el)return;
  if(d.ended){if(el._k!=="end"){el._k="end";el.innerHTML=""}return}
  const vs=fvVisits(g),at=vs.find(v=>!v.leftAt),J=fvJack(g),JD=J&&JACKPOTS.find(x=>x.k===J.k);
  const spin=fvSpinning(g,t);                                        // the host's wheel is going, from a bar or on the way
  const nx=!spin&&g.target&&(!at||g.target!==at.id)?byId(g.target):null;   // landed: the next rooftop, even before they've left
  const v=nx||(!spin&&at?byId(at.id):null),here=!!(at&&v&&!nx);
  const lastB=(at||vs.slice().reverse().find(x=>x.leftAt))||null,yy=fvPrev?null:S.test?(lastB?byId(lastB.id):g.startPos||g.center||null):you();
  // this rooftop's wildcard and jackpot ride on its card
  const w=v&&g.wild&&g.wild.id===v.id&&g.wild.text&&!g.wild.locked&&(g.wild.shown||g.wild.landed)?g.wild:null;
  const jd=g.jp&&JACKPOTS.find(x=>x.k===g.jp.k),jpOn=!!(jd&&v&&(here?vs.indexOf(at)===g.jp.leg:g.jp.leg===vs.length&&(g.targetAt||0)>=g.jp.at));
  const k=JSON.stringify([d.ended,at&&at.id,v&&v.id,spin,JD&&JD.k,!!(v&&phMem[v.id]),yy&&Math.round(yy.lat*2000),yy&&Math.round(yy.lng*2000),g.started,!!nx,w&&fvRule(g,w),jpOn]);
  if(el._k===k){const dw=$("fvDwell");if(dw&&here){const x=fvHere(t-at.arrivedAt);if(dw.textContent!==x)dw.textContent=x}return}
  const was=el._k?JSON.parse(el._k):null;el._k=k;
  if(was&&v&&was[2]!==v.id)buzz(here?[40,40,40]:30);    // a new rooftop picked, or arrived
  if(!v){const first=!g.started&&!vs.length&&!g.target;
    el.innerHTML=`<div class="fv-panel">${spin?`<div class="fv-dots"><i></i><i></i><i></i></div>`:""}<b>${spin?`${who} is spinning`:first?`Waiting on ${who}`:`${who} spins next`}</b><span>${first&&!spin?"The first rooftop shows here":"The next rooftop shows here"}</span></div>`;return}
  if(phMem[v.id]===undefined)barPhoto(v).then(ph=>{if(ph&&fv){el._k="";paintFollow()}});
  const cp=cardPhoto(v);
  const meta=here?`<span id="fvDwell">${fvHere(t-at.arrivedAt)}</span>`:yy?`${walkMin(yy,v)<=45?walkMin(yy,v)+" min walk":Math.round(dist(yy,v)/1000*1.25/50*60)+4+" min drive"} · ${mOrKm(dist(yy,v))}`:(v.vibe?esc(v.vibe):"");
  el.innerHTML=`<div class="fv-ph${cp.cls?" on":""}${w?" has-w":""}"${cp.style}>${cp.cr}${jpOn?fvJTag(jd):""}<div class="fv-tx"><span class="eyebrow">${here?"At the rooftop":at?"Up next":"Heading to"}</span><h2>${esc(v.name)}</h2><div class="m">${meta}</div></div>
    ${here?"":`<a class="fv-dir" href="${esc(dirURL(v))}" target="_blank" rel="noopener" aria-label="Directions">${I.nav}</a>`}${w?fvWStrip(w.text,fvRule(g,w)):""}</div>`;
  const jt=el.querySelector(".fv-jtag");if(jt)jt.onclick=()=>toast(`<b>${esc(jd.t)}</b><br>${esc((FVJP[jd.k]||(()=>jd.d))(fvHost(d)))}`,3500)}
// the jackpot: a tag on the rooftop it picked, tap for what it did (the clock already says when it's frozen)
const FVJP={call:w=>`${w} picked this rooftop from three.`,freeze:()=>"Clock frozen for 10 minutes.",spins:w=>`${w}'s next 3 re-spins are free.`,short:()=>"The closest open rooftop.",dealer:w=>`${w} picked the wildcard.`};
const JPI={call:()=>I.pin,freeze:()=>I.clock,spins:()=>I.redo,short:()=>I.nav,dealer:()=>I.dice};
const jpIcon=k=>(JPI[k]||(()=>I.sparkle))();
const fvJTag=jd=>`<button type="button" class="fv-jtag">${jpIcon(jd.k)}Jackpot · ${esc(jd.t)}</button>`;
const fvWStrip=(w,rule)=>`<div class="fv-ws">${wFace(w)}<span><b>${esc(wNm(w))}</b>${esc(rule)}</span></div>`;
const fvMin=ms=>ms<60000?"<1 min":Math.floor(ms/60000)+" min";
const fvHere=ms=>ms<60000?"Just arrived":fvMin(ms)+" here";
// rooftops so far: every one you've left, newest first (the one you're at is the card above). The page scrolls; a crawl
// rarely goes past five or six.
function fvListPaint(d,g,t){const el=$("fvList");if(!el)return;const vs=fvVisits(g),done=vs.filter(v=>v.leftAt).slice().reverse(),JD=g.jp&&JACKPOTS.find(x=>x.k===g.jp.k),jpAt=JD?g.jp.leg:-1;
  const rows=done.map(v=>{const i=vs.indexOf(v),b=byId(v.id),w=fvWildAt(g,v.id);return `<button type="button" class="fv-li" data-fi="${i}"><span class="n">${i+1}</span><span class="t"><b>${esc(b?b.name:"Rooftop")}</b><small>${v.cant?"No entry":v.counted===false?"Didn't count":fvMin(v.leftAt-v.arrivedAt)+" there"} · ${clock12(sydAt(v.arrivedAt).min)}</small></span>${jpAt===i?`<span class="jpcoin" title="Jackpot · ${esc(JD.t)}">${jpIcon(JD.k)}</span>`:""}${w?`<span class="wcd-card wsm">${wFace(w)}<b>${esc(wNm(w))}</b></span>`:""}</button>`}).join("");
  const h=done.length?`<div class="fv-list"><div class="fv-lh"><span class="eyebrow">Previous rooftops</span></div>${rows}</div>`:"";
  if(el._h===h)return;el._h=h;el.innerHTML=h;
  el.querySelectorAll("[data-fi]").forEach(b=>b.onclick=()=>fvStopSheet(+b.dataset.fi))}
const fvG=()=>{try{return JSON.parse(liveDoc.g)}catch(e){return {}}};
// one stop on the crawl: its photo with the name over it, then arrived, time there and getting there, and its wildcard
function fvStopSheet(i,back){const d=liveDoc;if(!d)return;const g=fvG(),t=Date.now()+(d.off||0),vs=fvVisits(g),v=vs[i];if(!v)return;const b=byId(v.id);if(!b)return;
  const prev=i>0?vs[i-1].leftAt:g.startedAt,leg=prev?v.arrivedAt-prev:null,w=fvWildAt(g,v.id),cp=cardPhoto(b),jd=g.jp&&g.jp.leg===i&&JACKPOTS.find(x=>x.k===g.jp.k);
  if(phMem[b.id]===undefined)barPhoto(b).then(ph=>{if(ph&&$("sheet").open&&$("sheetBody").querySelector(".fv-sph"))fvStopSheet(i,back)});
  sheet(`<div class="fv-sph${cp.cls?" on":""}${w?" has-w":""}"${cp.style}>${cp.cr}${jd?fvJTag(jd):""}${back?`<button type="button" class="fv-sback" id="fsBack" aria-label="Back">${I.back}</button>`:""}<div class="fv-tx"><span class="eyebrow">Rooftop ${i+1}${v.cant?" · No entry":v.counted===false?" · Didn't count":""}</span><h2>${esc(b.name)}</h2></div>${w?fvWStrip(w,WMETA[w]&&WMETA[w].spin?WMETA[w].t:w):""}</div>
    <div class="fv-stats"><div><small>Arrived</small><b>${clock12(sydAt(v.arrivedAt).min)}</b></div><div><small>Time there</small><b>${v.cant?"No entry":fvMin((v.leftAt||t)-v.arrivedAt)}</b></div><div><small>Travel</small><b>${leg!=null&&leg>=0?fvMin(leg):"–"}</b></div></div>
`,()=>{$("sheet").classList.add("fvsh");if($("fsBack"))$("fsBack").onclick=back;const jt=$("sheetBody").querySelector(".fv-jtag");if(jt)jt.onclick=()=>toast(`<b>${esc(jd.t)}</b><br>${esc((FVJP[jd.k]||(()=>jd.d))(fvHost(d)))}`,3500)})}
function paintFollow(){if(!fv)return;const d=liveDoc;if(!d){$("fvSub").textContent="Connecting…";return}
  let g={};try{g=JSON.parse(d.g)}catch(e){}const vs=(g.visits||[]).filter(v=>v.arrivedAt!=null),t=Date.now()+(d.off||0),cr=g.mode==="cruise";   // the host's game clock
  const who=fvHost(d);$("fvWho").textContent=fvPrev?"What friends see":`${who}'s crawl`;$("fvWhoS").textContent=fvPrev?"Only you can spin":"You're following";
  followNote(d,g,t);
  // the same clock as the host's phone: held at the full length until the first bar (and through a time freeze), then counting down
  // only touch what changed: redrawing these four times a second made the page lay itself out again mid-scroll
  const set=(el,k,v)=>{if(el&&el[k]!==v)el[k]=v};
  const c=fvClockTxt(d,g,t),L=fvLabel(d,g,t);set($("fvClock"),"textContent",!d.ended&&!g.started&&!cr?mmss((g.len||60)*60000):c.clock);set($("fvSub"),"textContent",L.lbl);set($("fvClockW"),"className","clock"+L.cls);
  const tb=$("fvBar");set(tb,"hidden",!!(cr||!g.started||d.ended));set(tb,"className","tbar"+L.cls);{const bi=$("fvBarI"),w=Math.round(L.pct*10)/10+"%";if(bi._w!==w){bi._w=w;bi.style.width=w}}
  fvCard(d,g,t);fvListPaint(d,g,t);
  const stale=!d.ended&&Date.now()-(d.beat||0)>STALE_MS,   // before the clock's started too: a phone can die before the first spin   // real time: a host fast-forwarding in test mode isn't 'gone quiet'
  act=$("fvAct");
  {const al=$("fvAlert"),hr=!fvPrev&&!d.ended?hostReach(d):"ok",h=hr==="gone"?`<div class="t"><b>${esc(fvHost(d))} isn't connected</b></div><button class="btn sm" type="button" id="fvTake">Take over</button>`
      :hr==="quiet"?`<div class="t"><b>No signal from ${esc(fvHost(d))}</b><small>Take over in ${quietLeft(d)}s</small></div><button class="btn sm" type="button" id="fvTake" disabled>Take over</button>`:"";

    if(al._h!==h){const sameKind=al._hr===hr&&h;al._h=h;al._hr=hr;
      if(sameKind){const sm=al.querySelector("small"),t=document.createElement("div");t.innerHTML=h;const ns=t.querySelector("small");if(sm&&ns)sm.textContent=ns.textContent}
      else{al.innerHTML=h;al.hidden=!h;if($("fvTake"))$("fvTake").onclick=takeOverSheet}}}
  {const lp=fv.querySelector(".fv-livepill");if(lp)lp.hidden=!!d.ended||(!fvPrev&&["gone","quiet"].includes(hostReach(d)))}
  const want=fvPrev?"prev":d.ended?"end":"none";if(act.dataset.k!==want){act.dataset.k=want;
    act.innerHTML=want==="prev"?`<button class="btn dark" type="button" id="fvBack">Back to your crawl</button>`:want==="end"?`<button class="btn" type="button" id="fvDone">See the crawl</button>`:"";
    if($("fvBack"))$("fvBack").onclick=()=>{closeFollow();go("play")};if($("fvLeave"))$("fvLeave").onclick=()=>{leaveFollow();go("home")};
    if($("fvDone"))$("fvDone").onclick=()=>{const id=S.follow;leaveFollow();const r=H.find(x=>x.liveId===id);if(r){S.lastEnd=r.id;S.endBack="home";save();go("end")}else go("home")}}}
function takeOverSheet(){const who=esc(fvHost(liveDoc)),away=hostReach(liveDoc)==="away";
  sheet(`<h3>Take over the crawl?</h3><p class="note">${away?`${who} is away from the app.`:`${who} isn't connected.`} You'll have the spin and the clock, and everyone following moves to your phone.</p>
    <div class="acts"><button class="btn" type="button" id="toY">Take over</button><button class="btn dark" type="button" id="toN">Cancel</button></div>`,()=>{
    $("toN").onclick=closeSheet;$("toY").onclick=()=>{closeSheet();takeOver()}})}
async function takeOver(){const id=S.follow,B=await cloud();let ok=false;
  // a locked phone gone quiet: the crawl's rules also want an unanswered "are you there?", so send one and give it a moment
  if(liveDoc&&liveDoc.away){toast("Taking over…",3000);await pingHost();await new Promise(r=>setTimeout(r,2800))}
  try{ok=await B.tx(`live/${id}`,d=>{if(!d||d.ended||!["gone","away"].includes(hostReach(d)))return undefined;const m=Object.assign({},d.members||{}),me=m[ME.uid];delete m[ME.uid];let gg={};try{gg=JSON.parse(d.g)}catch(e){}
    m[d.host]={n:d.hostName||"",j:(me&&me.j)||Date.now(),b:0,was:1};
    return Object.assign({},d,{host:ME.uid,hostName:crawlName(),beat:Date.now(),prevHost:d.host,members:m})})}catch(e){console.warn(e)}
  if(!ok){toast("Someone else got there first.",2500);return}track("live_takeover")}
function takeSpin(d){let g;try{g=JSON.parse(d.g)}catch(e){return}
  const id=S.follow;closeFollow();S.follow=null;g.live=id;g.id=g.id||("g"+Date.now());g.test=!!S.test;if(S.test)S.ff=d.off||0;
  S.game=g;save();liveLastSig=liveSig(g);startWatch();buzz(30);go("play");toast("You've got the spin.",2500);liveSync(true)}
// host hands the spin to a follower
function giveSpinSheet(){const d=liveDoc,ms=Object.entries((d&&d.members)||{});
  sheet(`<h3>Give the spin to…</h3><p class="note">They spin from here and their phone tracks the crawl. You keep following.</p><div class="mates">${ms.length?ms.map(([u,m])=>`<button type="button" class="mate" data-gs="${u}"><span class="mav">${esc((m.n||"?")[0])}</span><span class="mn">${esc(nIn(m.n,ms.map(x=>x[1].n))||"Friend")}</span><span class="mst">Give</span></button>`).join(""):`<p class="note">Nobody's following yet. Invite someone first.</p>`}</div>`,()=>{
    document.querySelectorAll("[data-gs]").forEach(b=>b.onclick=()=>giveSpinTo(b.dataset.gs))})}
async function giveSpinTo(u){const d=liveDoc,m=d&&d.members&&d.members[u],g=G();if(!g||!m)return;await liveSync(true);const B=await cloud();
  const members=Object.assign({},d.members);delete members[u];members[ME.uid]={n:crawlName(),j:g.startedAt||Date.now(),b:0,was:1};
  try{await B.set(`live/${g.live}`,{host:u,hostName:m.n||"",members,beat:Date.now()},true);closeSheet();track("live_handover")}catch(e){toast("Couldn't hand it over. Check your signal.",3000)}}
// the end: the host's final crawl goes to the doc; followers copy it to their tab from the bar they joined
// called off before the clock started: followers go home, nothing's saved
async function liveCancel(id){try{const B=await cloud();await B.set(`live/${id}`,{ended:true,cancelled:true,beat:Date.now()},true)}catch(e){console.warn(e)}}
async function liveEnded(rec){if(!rec.live||!CLP)return;rec.liveId=rec.live;delete rec.live;
  try{const B=await cloud();const j=JSON.stringify(Object.assign(JSON.parse(recForCloud(rec)),{trail:[],startPos:null}));await B.set(`live/${rec.liveId}`,{ended:true,rec:j,beat:Date.now(),g:gameForCloud(Object.assign({},rec,{ended:true}))},true);saveH();
    matesFrom(liveDoc)}catch(e){console.warn("live end",e)}
  liveDetach()}
// after the crawl: the host's name and bar of the day reach everyone who followed (only the host sets them)
async function liveMeta(r){if(!r||!r.liveId||r.followed||!cloudOn()||!signedIn())return;
  try{const B=await cloud();await B.set(`live/${r.liveId}`,{title:r.title||"",bod:r.barOfDay||"",bodDone:!!r.bodDone},true)}catch(e){console.warn("live meta",e)}}
// followers pick those up when the app opens or comes back, for crawls from the last week
let metaAt=0;
// After the crawl ends the host usually names it and picks bar of the day: keep listening for 30 minutes so both land
// on the follower's recap as they're set, then fall back to the occasional check below.
function metaApply(r,d){let ch=false;
  if(d.title!==undefined&&(d.title||"")!==(r.title||"")){if(d.title)r.title=d.title;else delete r.title;ch=true}
  if(d.bod!==undefined){const hv=d.bod&&r.visits.find(v=>v.id===d.bod&&v.arrivedAt!=null),b=hv?d.bod:"";if(hv&&hv.counted!==true){hv.counted=true;ch=true}
    if(b!==(r.barOfDay||"")){if(b)r.barOfDay=b;else delete r.barOfDay;ch=true}}
  if((d.bod||d.bodDone)&&r.bodWait){r.bodWait=false;ch=true}
  return ch}
let metaUnsub=null;
async function metaWatch(id){try{if(metaUnsub)metaUnsub();const B=await cloud();const un=B.watch(`live/${id}`,d=>{if(!d)return;const r=H.find(x=>x.liveId===id&&x.followed);if(r&&metaApply(r,d)){saveH();if(S.route==="end"||S.route==="hist")render()}});
  metaUnsub=un;const until=Date.now()+30*60000;
    // a fallback while the host's choosing: a plain read every 20 seconds, in case the live listener dropped (phone locked, signal)
    const pl=setInterval(async()=>{if(Date.now()>until||document.hidden)return;const r=H.find(x=>x.liveId===id&&x.followed);if(!r||r.barOfDay&&r.title){clearInterval(pl);return}
      const d=await B.get(`live/${id}`).catch(()=>null);if(d&&metaApply(r,d)){saveH();if(S.route==="end"||S.route==="hist")render()}},20000);
    setTimeout(()=>{clearInterval(pl);if(metaUnsub===un){un();metaUnsub=null}const r=H.find(x=>x.liveId===id&&x.followed);if(r&&r.bodWait){r.bodWait=false;saveH();if(S.route==="end")render()}},30*60000)}catch(e){console.warn("meta watch",e)}}
async function followMetaPull(){if(!cloudOn()||Date.now()-metaAt<5*60000)return;
  const L=H.filter(r=>r.followed&&r.liveId&&now()-(r.endedAt||0)<7*864e5);if(!L.length)return;metaAt=Date.now();
  let ch=false;try{const B=await cloud();for(const r of L){const d=await B.get(`live/${r.liveId}`).catch(()=>null);if(!d)continue;
    if(metaApply(r,d))ch=true}}catch(e){console.warn("meta pull",e)}
  if(ch){saveH();if(S.route==="end"||S.route==="hist")render()}}
document.addEventListener("visibilitychange",()=>{if(!document.hidden){if(H.some(r=>r.followed&&r.bodWait))metaAt=0;followMetaPull()}});
function followEnded(d){if(!d.rec)return;const id=S.follow;if(H.some(r=>r.liveId===id))return;
  let r;try{r=JSON.parse(d.rec)}catch(e){return}
  // fill in anything an older host version left out, so the crawl card and tab can always draw it
  r.visits=r.visits||[];r.moves=r.moves||[];r.excluded=r.excluded||[];if(!(r.areas&&r.areas.length))r.areas=[r.center?nearestSuburb(r.center):""];
  const m=(d.members||{})[ME.uid],b=m?m.b||0:0;
  r.id="f"+id;r.liveId=id;r.followed=nFirst(d.hostName);if(d.title)r.title=d.title;if(b>0){r.visits=r.visits.slice(b);if(r.visits[0])r.startedAt=Math.max(r.startedAt,m.j||r.startedAt)}
  delete r.newIds;r.bodDone=true;r.test=!!S.test;if(!d.bod&&r.visits.filter(v=>v.counted!==false).length>=2)r.bodWait=true;
  // the host's "did you have a drink?" calls aren't the follower's to make: anything still open counts by the 3-minute rule
  r.visits.forEach(v=>{if(v.counted==null&&v.arrivedAt!=null)v.counted=!!v.leftAt&&v.leftAt-v.arrivedAt>=DWELL_MIN*60000||!v.leftAt});
  let gT={};try{gT=JSON.parse(d.g)}catch(e){}if(gT.test&&!S.test){leaveFollow();closeSheet();toast("That was a test crawl, so it's not on your tab.",3500);go("home");return}   // a test crawl stays out of a real tab
  pushH(r);syncH();matesFrom(d);track("live_landed",{bars:r.visits.length});afterNote(r);metaWatch(id);
  // followers get the same ending as the host: straight onto the summary, with the stats racking up. No sign-in ask here
  // (they're out, a few drinks in); the day-after card and My Tab ask instead.
  if(fvPrev)return;leaveFollow();closeSheet();S.lastEnd=r.id;S.rackEnd=r.id;SHARED=null;
  if(!["home","bars","hist"].includes(S.route))go("home");S.route="play";go("end");   // as if from the crawl screen, so "Play again" shows like it does for the host
  ding();buzz([100,60,100,60,200]);confetti()}
async function matesFrom(d){if(!d||!signedIn())return;const B=await cloud(),me=ME.uid,add={};
  const all=Object.assign({},d.members||{});if(d.host)all[d.host]={n:d.hostName};Object.entries(all).forEach(([u,m])=>{if(u!==me){const p=String(m.n||"").trim().split(/\s+/);add[u]={n:p[0]?p[0]+(p.length>1?" "+p[p.length-1][0].toUpperCase():""):"",t:Date.now()}}});
  if(Object.keys(add).length)try{const cur=(await B.get(`users/${me}`))||{};await B.set(`users/${me}`,{mates:Object.assign({},cur.mates||{},add)},true)}catch(e){console.warn(e)}}
async function matesList(all){try{const B=await cloud(),u=await B.get(`users/${ME.uid}`);const since=Date.now()-120*864e5;return Object.entries((u&&u.mates)||{}).map(([uid,m])=>({uid,n:m.n,t:m.t})).filter(m=>(m.t||0)>since).sort((a,b)=>b.t-a.t).slice(0,12)}catch(e){return []}}
// invites from mates (while the app's open)
async function watchInvites(){if(!signedIn()||inviteUnsub)return;const B=await cloud(),seen=new Set(JSON.parse(localStorage.getItem("rr-inv-seen")||"[]"));
  inviteUnsub=B.watchList(`users/${ME.uid}/invites`,L=>{L.filter(x=>!seen.has(x._id)&&Date.now()-x.at<6*3600000).forEach(x=>{seen.add(x._id);localStorage.setItem("rr-inv-seen",JSON.stringify([...seen].slice(-50)));
    S.liveInv={id:x._id,from:x.from||"",at:x.at};save();homeLive();inviteCard();B.del(`users/${ME.uid}/invites/${x._id}`).catch(()=>{})})})}
// the invite as a card you answer (like an incoming request). Not over another open panel or your own crawl: the home banner keeps it.
function inviteCard(){const v=S.liveInv;if(!v||$("sheet").open||(S.game&&S.game.started&&!S.game.ended)||S.follow)return;
  const nm=String(v.from||"").trim(),first=nm.split(" ")[0];track("invite_card");
  sheet(`<div class="invcard"><span class="mav">${esc((first||"?")[0].toUpperCase())}</span>
    <h3>${first?esc(first):"A friend"} invited you to a live crawl</h3><p class="note">Follow every spin and the timer from your phone.</p></div>
    <div class="acts"><button class="btn" type="button" id="icJoin">Join</button><button class="btn dark" type="button" id="icNo">Not now</button></div>`,()=>{
    $("icJoin").onclick=()=>{const id=v.id;S.liveInv=null;save();closeSheet();homeLive();followLive(id)};
    $("icNo").onclick=()=>{closeSheet();homeLive()}})}
// home: a friend's crawl you've been invited to, while it's live (invites last 6 hours)
function homeLive(){const b=$("homeLive");if(!b)return;const v=S.liveInv,ok=v&&Date.now()-v.at<6*3600000&&!S.game&&!S.follow&&cloudOn();
  if(!ok){if(v&&Date.now()-v.at>=6*3600000){S.liveInv=null;save()}b.hidden=true;return}
  const first=String(v.from||"").trim().split(" ")[0];
  b.innerHTML=`${PEOPLEI_()}<span><b>${first?esc(first):"A friend"}</b> invited you</span><span class="hjoin">Join</span><button class="x" type="button" aria-label="Not now">×</button>`;b.hidden=false;
  b.onclick=e=>{if(e.target.closest(".x")){e.stopPropagation();S.liveInv=null;save();b.hidden=true;if(typeof fitHome==="function")requestAnimationFrame(fitHome);return}
    const id=v.id;S.liveInv=null;save();b.hidden=true;track("home_live_join");followLive(id)};
  if(typeof fitHome==="function")requestAnimationFrame(fitHome)}
// setup: join a friend's crawl by scanning their QR code in the app (like unlocking a scooter)
let scanSt=null,jqP=null;
const jsqrLib=()=>jqP||(jqP=new Promise((res,rej)=>{if(window.jsQR)return res(window.jsQR);const sc=document.createElement("script");sc.src=(window.RR_ROOT||"")+"vendor/qr/jsQR.js";sc.onload=()=>res(window.jsQR);sc.onerror=()=>{jqP=null;rej(new Error("jsqr didn't load"))};document.head.appendChild(sc)}));
async function joinScan(){track("join_scan_open");
  const ov=document.createElement("div");ov.className="scanv";
  ov.innerHTML=`<video playsinline muted autoplay poster="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="></video><div class="scan-frame" aria-hidden="true"></div>
    <div class="scan-top"><b>Scan a friend's QR code</b><button type="button" class="shv-x" id="scX" aria-label="Close">${I.x}</button></div>`;
  document.body.appendChild(ov);requestAnimationFrame(()=>ov.classList.add("on"));
  const msg=t=>{toast(esc(t),2500);const tt=$("toast");if(tt){tt.style.zIndex="2001";if(tt.parentNode!==document.body)document.body.appendChild(tt)}};
  const close=()=>{if(scanSt){scanSt.getTracks().forEach(t=>t.stop());scanSt=null}ov.remove()};
  ov.querySelector("#scX").onclick=close;
  try{scanSt=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"}},audio:false})}catch(e){msg("Allow camera access to scan");return}
  if(!ov.isConnected){close();return}
  const v=ov.querySelector("video");v.srcObject=scanSt;v.play().catch(()=>{});
  let det=null;try{if("BarcodeDetector" in window&&(await BarcodeDetector.getSupportedFormats()).includes("qr_code"))det=new BarcodeDetector({formats:["qr_code"]})}catch(e){}
  let J=null;if(!det){try{J=await jsqrLib()}catch(e){msg("Couldn't start the scanner. Check your signal.");return}}
  const cv=document.createElement("canvas"),cx=cv.getContext("2d",{willReadFrequently:true});
  let bad="";const found=t=>{const c=liveCode(t);if(!c){if(t!==bad){bad=t;msg("That's not a Rooftop Roulette code")}return false}
    close();buzz(25);track("join_scanned");S.wiz=null;save();cloud().then(()=>followLive(c)).catch(()=>toast("No connection. Check your signal.",3000));return true};
  const tick=async()=>{if(!scanSt||!ov.isConnected)return;
    try{if(v.readyState>=2&&v.videoWidth){if(det){const r=await det.detect(v);if(r&&r[0]&&found(r[0].rawValue))return}
      else{const w=Math.min(640,v.videoWidth),h=Math.round(v.videoHeight*w/v.videoWidth);cv.width=w;cv.height=h;cx.drawImage(v,0,0,w,h);const r=J(cx.getImageData(0,0,w,h).data,w,h,{inversionAttempts:"dontInvert"});if(r&&found(r.data))return}}}catch(e){}
    setTimeout(tick,200)};
  tick()}

// low battery: offer to hand the spin over before the phone dies
let batAsked=false;
function batteryWatch(){if(!navigator.getBattery)return;navigator.getBattery().then(b=>{const chk=()=>{const g=G();
  // one follower: name them and hand straight over; more than one: pick who
  const ms=Object.entries((liveDoc&&liveDoc.members)||{});
  // 12%: clear of the phone's own low-battery warnings (Android 15%, iPhone 20% and 10%), so ours never lands on top of them,
  // and only while the app's on screen (if it isn't, it waits till you come back)
  if(!batAsked&&g&&g.live&&!g.ended&&isHost()&&!b.charging&&b.level<=0.12&&ms.length&&document.visibilityState==="visible"){batAsked=true;track("battery_handoff_ask",{n:ms.length});
    const one=ms.length===1?ms[0]:null,nm=one?esc(nFirst(one[1].n)||"your friend"):"";
    sheet(`<h3>Battery's low</h3><p class="note">${one?`Hand the spin to ${nm} before your phone dies?`:"Hand the spin to someone before your phone dies?"}</p><div class="acts"><button class="btn" type="button" id="bGive">${one?`Give it to ${nm}`:"Give the spin"}</button><button class="btn dark" type="button" id="bNo">Keep it</button></div>`,
      ()=>{$("bGive").onclick=()=>{if(one)giveSpinTo(one[0]);else giveSpinSheet()};$("bNo").onclick=closeSheet})}};
  b.addEventListener("levelchange",chk);document.addEventListener("visibilitychange",()=>setTimeout(chk,1500));chk()}).catch(()=>{})}

// menu rows during a crawl
function liveMenuRows(g){if(!cloudOn()||g.demo)return "";const n=Object.keys((liveDoc&&liveDoc.members)||{}).length;
  return `<button type="button" id="mInvite">${PEOPLEI_()}<span>Invite friends<small>${n?`${n} following live`:"They follow every spin and the timer"}</small></span></button>`+(g.live&&n?`<button type="button" id="mGive">${I.redo}<span>Give the spin to…<small>They spin, you follow</small></span></button>`:"")}
function liveMenuBind(){if($("mInvite"))$("mInvite").onclick=()=>liveInvite();if($("mGive"))$("mGive").onclick=giveSpinSheet}

// Settings rows
function accountRows(){if(!(FB_CFG||FAKE_CLOUD))return [];
  if(signedIn())return [`<button class="strow stacct" type="button" id="stAcct">${avatarHTML()}<span class="t"><b>${esc(ME.name||"Your account")}</b><small>${esc(ME.email||"Signed in")}</small></span><i class="chev">›</i></button>`];
  return [`<button class="strow" type="button" id="stIn"><span class="t"><b>Sign in</b><small>Save your tab and share crawls live</small></span><i class="chev">›</i></button>`]}
function accountBind(){if($("stIn"))$("stIn").onclick=()=>signInSheet(null,"settings");if($("stAcct"))$("stAcct").onclick=accountPage}

// scorecard nudge, once, after your first real crawl
function endSignInNudge(r){if(!cloudOn()||signedIn()||S.siNudged||r.demo||r.shared||!H.length)return "";
  return `<button class="sinudge" type="button" id="siNudge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c1.2-3.8 4-5.6 7.5-5.6s6.3 1.8 7.5 5.6"/></svg><span><b>Save your tab</b><small>Keep your crawls, photos and saved lists across devices</small></span></button>`}
// the day after, opened from the recap notification: one quiet line under the card, once per crawl, signed out only
const SAVEI='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c1.2-3.8 4-5.6 7.5-5.6s6.3 1.8 7.5 5.6"/></svg>';
function recapSignIn(r){if(!cloudOn()||signedIn()||r.demo||r.recapAsked)return "";
  return `<button class="sinudge" type="button" id="rcIn">${SAVEI}<span><b>Save your crawls</b><small>Keep your crawls and saved lists across devices</small></span></button>`}
// top of My Tab, signed out, once there's more than one crawl to lose
function tabSignIn(){if(!cloudOn()||signedIn()||H.length<2)return "";
  return `<button class="sinudge tabsi" type="button" id="tabIn">${SAVEI}<span><b>Save your crawls</b><small>Keep your crawls and saved lists across devices</small></span></button>`}
function endSignInBind(){const b=$("siNudge");if(b)b.onclick=()=>{S.siNudged=true;save();signInSheet("Keep your crawls, photos and saved lists across devices.","scorecard","Save your tab")}}

// start up
function cloudBoot(){if(!(FB_CFG||FAKE_CLOUD))return;
  const lc=liveCode(location.hash)||liveCode(location.search);
  if(lc){history.replaceState(null,"",location.pathname+location.search.replace(/[?&]live=[A-Za-z0-9]+/,"").replace(/^&/,"?"))}
  if(lc||S.follow||(S.game&&S.game.live)||S.testNext||localStorage.getItem("rr-synced")||ME){cloud().then(()=>{if(lc)followLive(lc);else if(S.follow)openFollow();testNextRun()}).catch(()=>{})}
  else setTimeout(()=>cloud().catch(()=>{}),4000);
  if(NATIVE&&CAPX.Plugins&&CAPX.Plugins.App&&CAPX.Plugins.App.getLaunchUrl)CAPX.Plugins.App.getLaunchUrl().then(o=>{const c=liveCode(o&&o.url);if(c)cloud().then(()=>followLive(c))}).catch(()=>{});
  setInterval(()=>liveSync(false),5000);batteryWatch();paintPeople();homeLive();setTimeout(followMetaPull,3000)}
if(NATIVE&&CAPX.Plugins&&CAPX.Plugins.App)try{CAPX.Plugins.App.addListener("appUrlOpen",e=>{const c=liveCode(e&&e.url);if(c)cloud().then(()=>followLive(c))})}catch(e){}
addEventListener("hashchange",()=>{const c=liveCode(location.hash);if(c){history.replaceState(null,"",location.pathname+location.search);cloud().then(()=>followLive(c))}});
cloudBoot();
document.addEventListener("click",e=>{if(e.target.closest&&e.target.closest("#acctChip"))accountSheet()});
try{homeLinks()}catch(e){}   // the home link was drawn before this part loaded
