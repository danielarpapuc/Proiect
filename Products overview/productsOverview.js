// const sortBy = document.getElementById("sort-by-field")
// document.getElementById("sort-by1").innerHTML = sortBy;

document.getElementById("website-logo").addEventListener("click", () => {
  window.location.href = "../Landing page/landingPage.html";
})

// function filter(arr, keyword){

// arr.filter(obj => obj.productType.contains(keyword.slice(0, keyword.length-2)))
// }






const productsForCards = [
  {
  id: 'GUN-916558',
  productName: 'Springfield Armory SAINT Victor 5.56 AR-15 Semi Auto Rifle 7.5" Barrel 30 Rounds with a SB Tactical Rifle Brace Black',
  productShortName: 'Springfield Armory SAINT Victor 5.56 AR-15 Semi Auto Rifle',
  productType: 'Rifles',
  brand: 'Springfield',
  category: "FIREARMS",
  longDescription: "<H2> Springfield Armory SAINT Victor AR Rifle with SB Tactical Brace Built for CQB </H2>\r\nThe Springfield SAINT Victor Rifle with SB Tactical rifle brace are the most compact AR-15 rifle with many of the same features of the rifles, but in a stock-free, non-NFA rifle form with a 7.5” barrel in 5.56. The 7.5” SAINT Victor Rifle is equipped with an SA Forward Blast Diverter muzzle device.<br><br>\r\n\r\nBuilt for CQB, the compact design of the SAINT Victor Rifle is an ideal choice for home defense and delivers rifle power in a small, fast-handling package. The rugged SB Tactical SBX-K forearm brace reduces size, stabilizes recoil, and enhances accuracy. Just like the SAINT Victor rifles, the M16 bolt carrier group is precision-machined from 9310 steel, shot peened, HPI/MPT inspected and finished in super-hard Melonite, as are the barrels, both inside and out. A staked receiver end plate features a QD mount for sling attachment.<br><br>\r\n\r\n<H2> Springfield SAINT Victor Rifle Specifications and Features:</H2><UL>\r\n<LI>UPC: 706397926069<LI>\r\nMFR#: STV975556B<LI>\r\nCaliber: 5.56x45mm NATO (accepts .223 Remington)<LI>\r\nUpper Receiver:  Forged Type III Hard Coat Anodized, 7075 T6 Aluminum<LI>\r\nLower Receiver: Forged Type III Hard Coat Anodized, 7075 T6 Aluminum w/ Accutite Tension System<LI>\r\nBarrel Material: 416R Stainless Steel<LI>\r\nTwist: 1:7<LI>\r\nBarrel Finish: Melonite Finish<LI>\r\nBarrel Length: 7.5\"<LI>\r\nGas System: Direct Impingement Rifle-Length Gas Port<LI>\r\nTrigger: Enhanced Nickel Boron Coated Single Stage Flat Trigger<LI>\r\nTrigger Guard: Bravo Company<LI>\r\nRifle Grip: Bravo Company Mod.3<LI>\r\nHandguard: M-Lok Aluminum SA Patent Pending Free Float w/ SA Locking Tabs and Forward Hand Stop<LI>\r\nForearm Brace: SB Tactical - SBX-K<LI>\r\nBuffer Assembly: Carbine \"H\" Heavy Tungsten Buffer<LI>\r\nReceiver Extension: SA Rifle T6 Type III Hard Coat Anodized Aluminum<LI>\r\nCharging Handle: GI Style<LI>\r\nBCG: Enhanced M16, MPT, Melonite Finish with 9310 Steel Bolt<LI>\r\nMagazine: (1) 30 Round Magpul PMAG<LI>\r\nCase: Soft AR-15 Rifle Case</LI></UL>",
  price: {
    value: 859,
    currency: 'USD',
    formatted: '$859.00',
    decimalPrice: '859.00'
  },
  images: {
    large: [
      {
        alt: 'Springfield Armory SAINT Victor 5.56 AR-15 Semi Auto Rifle 7.5" Barrel 30 Rounds with a SB Tactical Rifle Brace Black',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwa7d75f40/large/gun-916558.jpg?sw=800&sh=800'
      },
      {
        alt: 'Springfield Armory SAINT Victor 5.56 AR-15 Semi Auto Rifle 7.5" Barrel 30 Rounds with a SB Tactical Rifle Brace Black',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwdf064139/large/gun-916558_a.jpg?sw=800&sh=800'
      },
      {
        alt: 'Springfield Armory SAINT Victor 5.56 AR-15 Semi Auto Rifle 7.5" Barrel 30 Rounds with a SB Tactical Rifle Brace Black',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw6595f661/large/gun-916558_b.jpg?sw=800&sh=800'
      }
    ],
    small: [
      {
        alt: 'Springfield Armory SAINT Victor 5.56 AR-15 Semi Auto Rifle 7.5" Barrel 30 Rounds with a SB Tactical Rifle Brace Black',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwa7d75f40/large/gun-916558.jpg?sw=146&sh=146'
      },
      {
        alt: 'Springfield Armory SAINT Victor 5.56 AR-15 Semi Auto Rifle 7.5" Barrel 30 Rounds with a SB Tactical Rifle Brace Black',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwdf064139/large/gun-916558_a.jpg?sw=146&sh=146'
      },
      {
        alt: 'Springfield Armory SAINT Victor 5.56 AR-15 Semi Auto Rifle 7.5" Barrel 30 Rounds with a SB Tactical Rifle Brace Black',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw6595f661/large/gun-916558_b.jpg?sw=146&sh=146'
      }
    ]
  }
},
{
  id: 'GUN-8570',
  productName: 'Ruger AR-556 NATO Semi Auto AR-15 Rifle with SBA3 Brace 10.5" Barrel 30 Rounds M-LOK Handguard Black',
  productShortName: 'Ruger AR-556 NATO Semi Auto AR-15 Rifle',
  productType: 'Rifles',
  brand: 'Ruger',
  category: "FIREARMS",
  longDescription: "<H2>Ruger AR-15 Rifle with 10.5\" Barrel and SB Tactical Stock is designed to shoot both .223 and 5.56 NATO ammunition. </H2>\r\n<BR><BR>\r\nThe Ruger AR-556 Rifle features a lower receiver that is fitted with an adjustable SB Tactical rifle stabilizing brace to aid in accuracy, balance and recoil management.  The slim 9\" handguard is free-floating and provides enhanced ergonomics and support. Magpul M-LOK accessory attachment slots along the 3:00, 6:00 and 9:00 positions. \r\n<BR><BR>\r\nMade from aerospace-grade 7075-T6 aluminum forging, the flattop upper receiver includes a forward assist, dust cover and brass deflector. The bolt is machined from 9310 alloy steel and is shot-peened and pressure proof tested to ensure strength, structural integrity and durability. The twist rate stabilizes bullets from 35 to 77 grains and the 5.56 NATO chamber allows the use of both 5.56 NATO and .223 Remington ammunition.<BR><BR>\r\n\r\nA matte black oxide finish on the exterior of the bolt carrier provides corrosion resistance. A Ruger flash suppressor is provided, and the threaded barrel allows for standard muzzle accessories to be installed. M4 feed ramps provide improved reliability and includes a 30 round Magpul PMAG.\r\n<BR><BR>\r\n\r\n<H2> Ruger AR-556 Rifle Specifications and Features:</H2><UL> \r\n<LI>Manufacturer: \tRuger\r\n<LI>Manufacturer part number: 8570\r\n<LI>Caliber: \t.223/5.56 NATO\r\n<LI>Finish: \tBlack\r\n<LI>Action: \tSemi-Automatic\r\n<LI>Does not include Sights\r\n<LI>Barrel Length: \t10.5\" cold hammer forged\r\n<LI>Barrel Twist; 1 in 8\"\r\n<LI>Overall Length: \t25.30 - 27.90(when stock is extended)\r\n<LI>Weight: \t6.2 pounds\r\n<LI>Capacity: \t30+1 (30 round magazine plus one in the chamber)\r\n<LI>Includes one Magpul PMAG 30\r\n<LI>Safety: \tManual Safety\r\n<LI>Adjustable SB Tactical SBA3 Stabilizing Brace\r\n<LI>Muzzle: \tRuger Flash Suppressor\r\n<LI>Barrel Threaded 1/2-28\r\n<LI>Magpul M-LOK Accessory Rails that are Type III Hard Coat Anodized</LI></UL>",
  price: {
    value: 659,
    currency: 'USD',
    formatted: '$659.00',
    decimalPrice: '659.00'
  },
  images: {
    large: [
      {
        alt: 'Ruger AR-556 NATO Semi Auto AR-15 Rifle with SBA3 Brace 10.5" Barrel 30 Rounds M-LOK Handguard Black',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwe2a1ed57/large/gun-8570.jpg?sw=800&sh=800'
      },
      {
        alt: 'Ruger AR-556 NATO Semi Auto AR-15 Rifle with SBA3 Brace 10.5" Barrel 30 Rounds M-LOK Handguard Black',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw3b66dc0e/large/gun-8570_a.jpg?sw=800&sh=800'
      },
      {
        alt: 'Ruger AR-556 NATO Semi Auto AR-15 Rifle with SBA3 Brace 10.5" Barrel 30 Rounds M-LOK Handguard Black',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwf8e180bc/large/gun-8570_b.jpg?sw=800&sh=800'
      },
      {
        alt: 'Ruger AR-556 NATO Semi Auto AR-15 Rifle with SBA3 Brace 10.5" Barrel 30 Rounds M-LOK Handguard Black',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw8dae7780/large/gun-8570_c.jpg?sw=800&sh=800'
      },
      {
        alt: 'Ruger AR-556 NATO Semi Auto AR-15 Rifle with SBA3 Brace 10.5" Barrel 30 Rounds M-LOK Handguard Black',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw48c02c32/large/gun-8570_d.jpg?sw=800&sh=800'
      }
    ],
    small: [
      {
        alt: 'Ruger AR-556 NATO Semi Auto AR-15 Rifle with SBA3 Brace 10.5" Barrel 30 Rounds M-LOK Handguard Black',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwe2a1ed57/large/gun-8570.jpg?sw=146&sh=146'
      },
      {
        alt: 'Ruger AR-556 NATO Semi Auto AR-15 Rifle with SBA3 Brace 10.5" Barrel 30 Rounds M-LOK Handguard Black',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw3b66dc0e/large/gun-8570_a.jpg?sw=146&sh=146'
      },
      {
        alt: 'Ruger AR-556 NATO Semi Auto AR-15 Rifle with SBA3 Brace 10.5" Barrel 30 Rounds M-LOK Handguard Black',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwf8e180bc/large/gun-8570_b.jpg?sw=146&sh=146'
      },
      {
        alt: 'Ruger AR-556 NATO Semi Auto AR-15 Rifle with SBA3 Brace 10.5" Barrel 30 Rounds M-LOK Handguard Black',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw8dae7780/large/gun-8570_c.jpg?sw=146&sh=146'
      },
      {
        alt: 'Ruger AR-556 NATO Semi Auto AR-15 Rifle with SBA3 Brace 10.5" Barrel 30 Rounds M-LOK Handguard Black',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw48c02c32/large/gun-8570_d.jpg?sw=146&sh=146'
      }
    ]
  }
},
{
  id: '2-EA610066',
  productName: 'EAA Witness Gold Custom Xtreme Single Action Semi Automatic Pistol 9mm Luger 5.25" Barrel 17 Rounds Fully Equipped Custom Shop Firearm Two Toned Ceramic Coating',
  productShortName: 'EAA Witness Gold Custom Xtreme Single Action Semi Automatic Pistol',
  productType: 'Pistols',
  brand: 'EAA',
  category: "FIREARMS",
  longDescription: "The European American Armory Witness Xtreme single action semi automatic pistol is built for open division competition and is made to the specifications of the six time world champion Eric Grauffel. This hand tuned pistol is worked on by master gunsmith's from the Tanfoglio Custom Shop in Italy and features a ceramic coating for longer life. This fully equipped pistol, right out of the box, will set a new bar for excellence and quality. <BR><BR>\r\n\r\n<B>Specifications and Features:</B><BR>\r\nEAA Witness Gold Custom Xtreme Single Action Semi Automatic Pistol by Tanfoglio 610066<BR>\r\n9mm Luger<BR>\r\n5.25\" Barrel<BR>\r\n17 Rounds <BR>\r\nTuned Trigger<BR>\r\nConed Ported Barrel<BR>\r\nPolygonal Rifling<BR>\r\nLighter Ported Slide<BR>\r\nCompensator<BR>\r\nAmbidextrous Safety<BR>\r\nXtreme Aluminum Grips<BR>\r\nXtreme Hammer<BR>\r\nXtreme Adjustable Single Action Trigger<BR>\r\nXtreme Guide Rod<BR>\r\nXtreme Firing Pin<BR>\r\nXtreme Firing Pin Safety<BR>\r\nXtreme Hammer Spring<BR>\r\nExtended Mag Well<BR>\r\nScope Mount with Blast Shield<BR>\r\nC-More Sight<BR>\r\nSlide Racker<BR>\r\nThumb Rest<BR>\r\nReversible Magazine Catch<BR>\r\nLarge Slide Serrations<BR>\r\nOverall Length 10.5\" <BR>\r\nHeight 5\" <BR>\r\nWidth 1.4\" <BR>\r\nWeight 3 lbs <BR>\r\nTwo Toned Ceramic Coating<BR><BR>\r\n\r\n<B>Includes:</B><BR>\r\nCleaning Set<BR>\r\nTwo Recoil Springs for different loads<BR>\r\nThree Spare Magazines<BR>\r\nXtreme Aluminum Base Pad<BR>\r\nCertificate Signed by six time world champion Eric Grauffel<BR><BR>",   
  price: {
    value: 5088.2,
    currency: 'USD',
    formatted: '$5,088.20',
    decimalPrice: '5088.20'
  },
  images: {
    large: [
      {
        alt: 'EAA Witness Gold Custom Xtreme Single Action Semi Automatic Pistol 9mm Luger 5.25" Barrel 17 Rounds Fully Equipped Custom Shop Firearm Two Toned Ceramic Coating',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwe5eb9e65/large/2-ea610066.jpg?sw=800&sh=800'
      }
    ],
    small: [
      {
        alt: 'EAA Witness Gold Custom Xtreme Single Action Semi Automatic Pistol 9mm Luger 5.25" Barrel 17 Rounds Fully Equipped Custom Shop Firearm Two Toned Ceramic Coating',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwe5eb9e65/large/2-ea610066.jpg?sw=146&sh=146'
      }
    ]
  }
},
{
  id: '103911',
  productName: 'Ed Brown Special Forces SRC Semi Auto Pistol .45 ACP 4.25" Threaded Barrel 7 Rounds Trijicon RMR Matte Black Finish',
  productShortName: 'Ed Brown Special Forces SRC Semi Auto Pistol',
  productType: 'Pistols',
  brand: 'Ed Brown Products Inc',
  category: "FIREARMS",
  longDescription: "Ed Brown is the name you know and trust when it comes time to purchase a highly collectable 1911 firearm. These high end guns are coveted by gun aficionados and collectors alike. Ed Brown leaves nothing to chance by utilizing the best components and manufacturing process to ensure only the best pieces bear the Ed Brown name. Ed Brown 1911's are limited production firearms so don't let your opportunity to purchase one pass you by. <BR><BR>\r\n\r\n<B>Specifications and Features:</B><BR>\r\nEd Brown Special Forces SRC SRC18LW <BR>\r\n1911 Semi Automatic Handgun <BR>\r\nSuppressor Ready <BR>\r\n.45 ACP <BR>\r\n7 Rounds <BR>\r\n4.25\" Threaded Barrel <BR>\r\nThreaded .578x28 TPI with Thread Protector <BR>\r\nCommander Sized Slide <BR>\r\nSingle Stack Aluminum Frame <BR>\r\nChen Gen 2 One-Piece Magwell <BR>\r\nExclusive Chainlink III Grip Treatment <BR>\r\nTrijicon RMR Sight 3.25 MOA Red Dot <BR>\r\nSuppressor Height Night Sights <BR>\r\nFront/Rear Cocking Serrations <BR>\r\nMatte Black Finish <BR>\r\nWeight 38 Ounces <BR><BR>",
  price: {
    value: 4369.24,
    currency: 'USD',
    formatted: '$4,369.24',
    decimalPrice: '4369.24'
  },
  images: {
    large: [
      {
        alt: 'Ed Brown Special Forces SRC Semi Auto Pistol .45 ACP 4.25" Threaded Barrel 7 Rounds Trijicon RMR Matte Black Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwfc384cec/large/103911.jpg?sw=800&sh=800'
      }
    ],
    small: [
      {
        alt: 'Ed Brown Special Forces SRC Semi Auto Pistol .45 ACP 4.25" Threaded Barrel 7 Rounds Trijicon RMR Matte Black Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwfc384cec/large/103911.jpg?sw=146&sh=146'
      }
    ]
  }
},
{
  id: '103906',
  productName: 'Ed Brown CCO LW 9mm Luger Semi Auto Pistol 4.25" Barrel 8 Rounds Officer Frame Commander Slide FO Front Sight Synthetic Grips Matte Black Finish',
  productShortName: 'Ed Brown CCO LW 9mm Luger Semi Auto Pistol',
  productType: 'Pistols',
  brand: 'Ed Brown Products Inc',
  category: "FIREARMS",
  longDescription: "The Ed Brown CCO LW 1911 is purpose built for concealed carry and self defense. It features a compact Officer sized round butt frame, with a Commander sized slide for a longer sight radius and enhanced accuracy. For a crystal clear sight picture it has a fixed black rear sight and a fiber optic front sight, making this the ideal 1911 for the legally armed citizen. Snakeskin treatment on the front strap and main spring housing are an attractive optimization of comfort without sacrificing grip. Ed Brown firearms are engineered for performance and hand-crafted to perfection! <BR><BR>\r\n\r\n<B>Specifications and Features</B><BR>\r\nEd Brown CCO LW CCO18-LW-9 <BR>\r\n1911 Style Semi Automatic Handgun <BR>\r\nSingle Action Only <BR>\r\n9mm Luger<BR>\r\n8 Rounds <BR>\r\n4.25\" Match Grade Barrel<BR>\r\nOfficer Sized Frame <BR>\r\nCommander Sized Slide <BR>\r\nAluminum Alloy Construction <BR>\r\nSnakeskin Frame Texturing <BR>\r\nRounded Butt Housing <BR>\r\nConcealed Carry Beaver Tail <BR>\r\nFixed Black Rear Sights<BR>\r\nFiber Optic Front Sight <BR>\r\nRecessed Slide Stop <BR>\r\nAmbidextrous Thumb Safety <BR>\r\nBlack Gen4 Finish <BR>\r\nSynthetic Grips<BR>\r\nWeight 29 oz<BR><BR>",
    
  price: {
    value: 3391.16,
    currency: 'USD',
    formatted: '$3,391.16',
    decimalPrice: '3391.16'
  },
  images: {
    large: [
      {
        alt: 'Ed Brown CCO LW 9mm Luger Semi Auto Pistol 4.25" Barrel 8 Rounds Officer Frame Commander Slide FO Front Sight Synthetic Grips Matte Black Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwf05186c0/large/103906.jpg?sw=800&sh=800'
      }
    ],
    small: [
      {
        alt: 'Ed Brown CCO LW 9mm Luger Semi Auto Pistol 4.25" Barrel 8 Rounds Officer Frame Commander Slide FO Front Sight Synthetic Grips Matte Black Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwf05186c0/large/103906.jpg?sw=146&sh=146'
      }
    ]
  }
},
{
  id: '111853',
  productName: 'Wilson Combat Tactical Carry Commander 1911 Semi Automatic Handgun 9mm Luger 4" Barrel 10 Rounds Starburst G10 Grips Armor Tuff Black Finish',
  productShortName: 'Wilson Combat Tactical Carry Commander 1911 Semi Automatic Handgun',
  productType: 'Handguns',
  brand: 'Wilson Combat',
  category: "FIREARMS",
  longDescription: "<H2>A Gun Built for the Professional Businessman </H2>Wilson Combat is the name that's synonymous with superior quality high performance 1911 style handguns. Whether it's a custom built 1911, an elite tactical long gun or premium parts and components, you know that Wilson Combat won't let you down. Innovative design, peerless craftsmanship, exceptional reliability and legendary performance come standard with every product that bears Bill Wilson's name! When 'just as good as' isn't good enough, turn to Wilson Combat when you demand the absolute best! <BR><BR>This version of the Tactical Carry Commander features a full size grip frame allowing for the use of full size magazines while sporting the 4\" slide and barrel completing the commander profile. This model represents the most popular features and is a tribute to the original spirit of John M. Browning's designs. <BR><BR>\r\n<H2>Wilson Combat Tactical Carry Commander 1911 Semi Auto Pistol (Black) Specifications and Features:</H2>\r\n<UL>\r\n<LI>Wilson Combat TC-COM-9</LI>\r\n<LI>Full Size 1911 Frame</LI>\r\n<LI>Single Action Pistol</LI>\r\n<LI>9mm Luger</LI>\r\n<LI>4.25\" Stainless Match Grade Barrel/Bushing</LI>\r\n<LI>Flush Cut Reverse Crown</LI>\r\n<LI>Fluted Chamber</LI>\r\n<LI>Carbon Steel Frame</LI>\r\n<LI>High Cut Checkered Frontstrap</LI>\r\n<LI>Concealment Bullet Proof Beavertail Grip Safety/Hammer</LI>\r\n<LI>Tactical Bullet Proof Thumb Safety</LI>\r\n<LI>3.5lb to 3.75lb Crisp Trigger Pull (Medium Length Pad(</LI>\r\n<LI>Bullet Proof Magazine Release</LI>\r\n<LI>Bullet Proof Round But Magazine Well</LI>\r\n<LI>G10 Starburst Grips (Flat Bottom, Pewter Medallions)</LI>\r\n<LI>4.25\" Carbon Steel Slide</LI>\r\n<LI>Battlesight with Fiber Optic Front Sight</LI>\r\n<LI>30 LPI Slide Top Serrations</LI>\r\n<LI>40 LPI Serrated Rear of Slide</LI>\r\n<LI>Rear Cocking Serrations</LI>\r\n<LI>Carry Cuts/Ball Endmill Cuts</LI>\r\n<LI>Heavy Machine Chamfer On Bottom Of Slide</LI>\r\n<LI>Torx Head Grip Screws</LI>\r\n<LI>Countersunk Slide Stop</LI>\r\n<LI>10 Rounds</LI>\r\n<LI>Sight Radius 5.95\" </LI>\r\n<LI>Overall Length 7.85\" </LI>\r\n<LI>Height 5.6\" </LI>\r\n<LI>Width 1.3\" </LI>\r\n<LI>Weight Empty 37.8oz</LI>\r\n<LI>Weight Loaded 43.2oz</LI>\r\n<LI>Accuracy Guarantee 1\" at 25 Yards</LI>\r\n<LI>Black Armor Tuff Finish</LI></UL>",   
  price: {
    value: 3067.31,
    currency: 'USD',
    formatted: '$3,067.31',
    decimalPrice: '3067.31'
  },
  images: {
    large: [
      {
        alt: 'Wilson Combat Tactical Carry Commander 1911 Semi Automatic Handgun 9mm Luger 4" Barrel 10 Rounds Starburst G10 Grips Armor Tuff Black Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwb9c3398e/large/111853.jpg?sw=800&sh=800'
      },
      {
        alt: 'Wilson Combat Tactical Carry Commander 1911 Semi Automatic Handgun 9mm Luger 4" Barrel 10 Rounds Starburst G10 Grips Armor Tuff Black Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwcff2dd8a/large/111853_a.jpg?sw=800&sh=800'
      }
    ],
    small: [
      {
        alt: 'Wilson Combat Tactical Carry Commander 1911 Semi Automatic Handgun 9mm Luger 4" Barrel 10 Rounds Starburst G10 Grips Armor Tuff Black Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwb9c3398e/large/111853.jpg?sw=146&sh=146'
      },
      {
        alt: 'Wilson Combat Tactical Carry Commander 1911 Semi Automatic Handgun 9mm Luger 4" Barrel 10 Rounds Starburst G10 Grips Armor Tuff Black Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwcff2dd8a/large/111853_a.jpg?sw=146&sh=146'
      }
    ]
  }
},
{
  id: 'FC-806703911748',
  productName: 'CZ-USA CZ75 TS Czechmate 9mm Luger Semi-Auto Competition Handgun 5.27" Barrel 26 Rounds C-More Red Dot Sight Steel Frame Black Finish',
  productShortName: 'CZ-USA CZ75 TS Czechmate Semi-Auto Competition Handgun',
  productType: 'Handguns',
  brand: 'CZ-USA',
  category: "FIREARMS",
  longDescription: "<LI>The Ultimate IPSC Competition Pistol</LI>\r\nBuilding upon a modified version of the venerable 75 Target Sports frame, CZ is proud to offer serious competition handgun shooters the Czechmate. This pistol is ready for hardcore target blasting in Open division right out of the box with included frame mounted C-more SlideRide 6 MOA Red Dot, ambi slide racker, 4 port compensator and 26 round magazine. If Limited division is more your cup of tea, the included front sight adapter and rear sight can be installed in lieu of the compensator and racker. The CZ 75 TS Czechmate also comes with 3 additional 20 round magazines and has a light and crisp single action only trigger which round out this extreme high performance handgun.\r\n<BR><BR>\r\n<H2>CZ-USA CZ75 TS Czechmate Specifications and Features:</H2><UL>\r\n<LI>CZ-USA item #: 91174</LI>\r\n<LI>Semi-Automatic Handgun</LI>\r\n<LI>9mm Luger</LI>\r\n<LI>5.23\" Cold Hammer Forged Barrel</LI>\r\n<LI>26 and 20 round magazines</LI>\r\n<LI>Compatible with Tactical Sports Magazines</LI>\r\n<LI>Single Action Only Trigger</LI>\r\n<LI>Undercut trigger guard</LI>\r\n<LI>Beavertail extension</LI>\r\n<LI>Competition hammer</LI>\r\n<LI>Ambidextrous safety</LI>\r\n<LI>Thin aluminum grips</LI>\r\n<LI>Aluminum magwell</LI>\r\n<LI>Compatible with 160 Power Factor Ammunition with compensator</LI>\r\n<LI>Ideal for Limited or Open Division</LI>\r\n<LI>Height: 5.51\"</LI>\r\n<LI>Width: 2.44\"</LI>\r\n<LI>Overall Length: 10.47\"</LI>\r\n<LI>Weight: 45.9 oz (Limited Setup), 52.7 oz (Open Setup)</LI>\r\n<LI>Steel Frame/Slide</LI>\r\n<LI>Black Finish</LI>\r\n</UL><BR><BR>\r\n<STRONG>Includes:</STRONG>\r\n<LI>C-More SlideRide Non-click 6 MOA Red Dot</LI>\r\n<LI>Ambidextrous Slide Racker</LI>\r\n<LI>Rear Sight Replacement</LI>\r\n<LI>4 Port Compensator</LI>\r\n<LI>Front Sight Adapter</LI>\r\n<LI>3x 20 round magazines</LI>\r\n<LI>1x 26 round magazine</LI>\r\n<LI>2x slide stops with slide lock</LI>\r\n<LI>4x slide stop pins without slide lock</LI>\r\n<BR>",    
  price: {
    value: 2981.74,
    currency: 'USD',
    formatted: '$2,981.74',
    decimalPrice: '2981.74'
  },
  images: {
    large: [
      {
        alt: 'CZ-USA CZ75 TS Czechmate 9mm Luger Semi-Auto Competition Handgun 5.27" Barrel 26 Rounds C-More Red Dot Sight Steel Frame Black Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwd17eba8b/large/2-cz7591174.jpg?sw=800&sh=800'
      },
      {
        alt: 'CZ-USA CZ75 TS Czechmate 9mm Luger Semi-Auto Competition Handgun 5.27" Barrel 26 Rounds C-More Red Dot Sight Steel Frame Black Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwbe4d159a/large/2-cz7591174_a.jpg?sw=800&sh=800'
      }
    ],
    small: [
      {
        alt: 'CZ-USA CZ75 TS Czechmate 9mm Luger Semi-Auto Competition Handgun 5.27" Barrel 26 Rounds C-More Red Dot Sight Steel Frame Black Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwd17eba8b/large/2-cz7591174.jpg?sw=146&sh=146'
      },
      {
        alt: 'CZ-USA CZ75 TS Czechmate 9mm Luger Semi-Auto Competition Handgun 5.27" Barrel 26 Rounds C-More Red Dot Sight Steel Frame Black Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwbe4d159a/large/2-cz7591174_a.jpg?sw=146&sh=146'
      }
    ]
  }
},
{
  id: '2-BANDT-36077',
  productName: 'B&T APC308 Semi Auto Rifle .308 Winchester 14.3" Barrel 20 Rounds Full Length Optic Rail Ambidextrous Controls Backup Sights Matte Black',
  productShortName: 'B&T APC308 Semi Auto Rifle',
  productType: 'Rifles',
  brand: 'B&T AG',
  category: "FIREARMS",
  longDescription: "<H2> Swiss Chocolates, Swiss Watches, and Swiss Firearms Are Three of the Best Things in Life </H2>\r\n\r\nCheaper Than Dirt is excited to bring a distributor exclusive version of the Brugger & Thomet APC 308 AR style semi automatic pistol. This limited supply B&T APC 308 has been engineered to obliterate the competition with its fine Swiss construction. From the start the R&D department was tasked with meeting and exceeding the expectations of Special Operation Forces and Law Enforcement/SWAT professionals.  B&T has produced a modern, compact and lightweight pistol with a recoil-reduced closed bolt blowback operation.<BR><BR>\r\n\r\nThe B&T APC30 features a 14.3\" cold hammer forged barrel with black nitride finish. The upper assembly is made from an alloy receiver and it features a mil-spec hard coat anodized finish. The B&T APC308 is able to run on DPMS LR-308 pattern magazines and the included magazine is the Magpul PMAG version.<BR><BR>\r\n\r\nThe Brugger & Thomet APC308 is designed to tick like a fine Swiss watch, pick up one of these rare pistols while you still can.<BR><BR>    \r\n\r\n<H2> Brugger & Thomet APC 308 Semi Auto Pistol (Matte Black) Specifications and Features:</H2>\r\n<UL>\r\n<LI>BT-36077</LI>\r\n<LI>Distributor Exclusive</LI>\r\n<LI>.308 Winchester (Accepts 7.62 NATO) </LI>\r\n<LI>14.3\" Cold Hammer Forged/Nitrided Barrel</LI>\r\n<LI>20 Round Magazine (Magpul PMAG) </LI>\r\n<LI>DPMS LR-308/SR-25 Magazine Compatible</LI>\r\n<LI>Lightweight Mil-spec hard-coat anodized 7075 alloy upper receiver</LI>\r\n<LI>Full Length Optics Rail</LI>\r\n<LI>Backup sights</LI>\r\n<LI>Flash Hiding Muzzle Device</LI>\r\n<LI>Steel Frame</LI>\r\n<LI>100% Ambidextrous Controls</LI>\r\n<LI>Adjustable 2-Stroke Gas Piston System</LI>\r\n<LI>Rotating Bolt Operation</LI>\r\n<LI>Matte Black</LI>\r\n</UL>\r\n\r\n<B>Includes:</B><UL>\r\n<LI>Backup Iron Sights</LI>\r\n<LI>Magpul PMAG</LI>\r\n</UL>",
   
  price: {
    value: 2910.39,
    currency: 'USD',
    formatted: '$2,910.39',
    decimalPrice: '2910.39'
  },
  images: {
    large: [
      {
        alt: 'B&T APC308 Semi Auto Rifle .308 Winchester 14.3" Barrel 20 Rounds Full Length Optic Rail Ambidextrous Controls Backup Sights Matte Black',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwb68f12b4/large/2-bandt-36077.jpg?sw=800&sh=800'
      }
    ],
    small: [
      {
        alt: 'B&T APC308 Semi Auto Rifle .308 Winchester 14.3" Barrel 20 Rounds Full Length Optic Rail Ambidextrous Controls Backup Sights Matte Black',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwb68f12b4/large/2-bandt-36077.jpg?sw=146&sh=146'
      }
    ]
  }
},
{
  id: '111851',
  productName: 'Wilson Combat CQB Elite Full Size 1911 Semi Automatic Handgun .45 ACP 5" Barrel 8 Rounds Diagonal G10 Grips Natural Stainless Steel Finish',
  productShortName: 'Wilson Combat CQB Elite Full Size 1911 Semi Automatic Handgun',
  productType: 'Handguns',
  brand: 'Wilson Combat',
  category: "FIREARMS",
  longDescription: "<H2> The Wilson Combat CQB Elite Model Is Wilson's Most Popular 1911 Model to This Day</H2>\r\n\r\nWilson Combat is the name that's synonymous with superior quality high performance 1911 style handguns. Whether it's a custom built 1911, an elite tactical long gun or premium parts and components, you know that Wilson Combat won't let you down. Innovative design, peerless craftsmanship, exceptional reliability and legendary performance come standard with every product that bears Bill Wilson's name! When 'just as good as' isn't good enough, turn to Wilson Combat when you demand the absolute best! <BR><BR>   \r\n\r\nThis version of the Elite CQB is a full size pistol designed to bear the standard by which the CQB family of pistols is made. This model remains the most popular Wilson Combat design and even through modernization of the 1911 this model retains the original spirit of the John M. Browning design. <BR><BR>\r\n\r\n<H2>Wilson Combat Elite CQB Full Size 1911 Semi Auto Pistol (Natural Stainless Steel) Specifications and Features:</H2>\r\n<UL>\r\n<LI>Wilson Combat CQB-EFS-45-SS</LI>\r\n<LI>Full Size 1911 Single Action Pistol</LI>\r\n<LI>.45 ACP</LI>\r\n<LI>5\" Stainless Steel Match Grade Barrel/Bushing (Hand Fit)</LI>\r\n<LI>Stainless Steel Frame</LI>\r\n<LI>High Cut Checkered Frontstrap</LI>\r\n<LI>High Ride Bullet Proof Beavertail Grip Safety</LI>\r\n<LI>Bullet Proof Thumb Safety</LI>\r\n<LI>3.5lb to 4.5lb Crisp Trigger Pull</LI>\r\n<LI>Three Hole Trigger</LI>\r\n<LI>Bullet Proof Magazine Well</LI>\r\n<LI>Bullet Proof Magazine Release</LI>\r\n<LI>G10 Diagonal Flat Bottom Grips</LI>\r\n<LI>5\" Stainless Steel Slide</LI>\r\n<LI>Battlesight with Fiber Optic Front Sight</LI>\r\n<LI>30 LPI Slide Top Serrations</LI>\r\n<LI>40 LPI Serrated Rear of Slide</LI>\r\n<LI>Front/Rear Cocking Serrations</LI>\r\n<LI>8 Rounds</LI>\r\n<LI>Sight Radius 6.6\" </LI>\r\n<LI>Overall Length 8.7\" </LI>\r\n<LI>Height 5.6\" </LI>\r\n<LI>Width 1.3\" </LI>\r\n<LI>Weight Empty 41oz</LI>\r\n<LI>Weight Loaded 46.6oz</LI>\r\n<LI>Accuracy Guarantee 1\" at 25 Yards</LI>\r\n<LI>Natural Stainless Steel Finish</LI>\r\n</UL>",
   
  price: {
    value: 2809.36,
    currency: 'USD',
    formatted: '$2,809.36',
    decimalPrice: '2809.36'
  },
  images: {
    large: [
      {
        alt: 'Wilson Combat CQB Elite Full Size 1911 Semi Automatic Handgun .45 ACP 5" Barrel 8 Rounds Diagonal G10 Grips Natural Stainless Steel Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwad95e566/large/111851.jpg?sw=800&sh=800'
      },
      {
        alt: 'Wilson Combat CQB Elite Full Size 1911 Semi Automatic Handgun .45 ACP 5" Barrel 8 Rounds Diagonal G10 Grips Natural Stainless Steel Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw306d759a/large/111851_a.jpg?sw=800&sh=800'
      }
    ],
    small: [
      {
        alt: 'Wilson Combat CQB Elite Full Size 1911 Semi Automatic Handgun .45 ACP 5" Barrel 8 Rounds Diagonal G10 Grips Natural Stainless Steel Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwad95e566/large/111851.jpg?sw=146&sh=146'
      },
      {
        alt: 'Wilson Combat CQB Elite Full Size 1911 Semi Automatic Handgun .45 ACP 5" Barrel 8 Rounds Diagonal G10 Grips Natural Stainless Steel Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw306d759a/large/111851_a.jpg?sw=146&sh=146'
      }
    ]
  }
},
{
  id: '2-POF01600',
  productName: 'POF USA Revolution DI .308 Winchester Semi Auto Rifle 12.5" Barrel 20 Rounds Direct Gas Impingement System 11.5" M-LOK Free Float Rail Burnt Bronze Finish',
  productShortName: 'POF USA Revolution DI Semi Auto Rifle',
  productType: 'Rifles',
  brand: 'Patriot Ordnance Factory',
  category: "FIREARMS",
  longDescription: "<H2> Patriot Ordnance Factory's Most Popular Direct Gas Impingement Rifle, Has Just Been Made Into a Rifle </H2>\r\n\r\nPOF-USA is excited to offers it's new line of rifle for 2019. This particular rifle features a semi-automatic direct gas impingement system. Additionally this DI gun features a gas system with an adjustable dictator gas block allowing you to control the flow of gas back to your BCG for nominal operation in adverse conditions or when shooting suppressed. Moreover this rifle features a 12.5\" barrel, a 11.5\" M-LOK compatible free float rail system and it weighs in at only 6.31lbs. The POF USA Revolution DI rifles comes standard with the Mission First Tactical Grip and SB Tactical SBA3 Rifle Stabilizing Brace.<BR><BR>\r\n\r\n<H2>Patriot Ordnance Factory USA Revolution DI AR-Style Semi Auto Rifle (Burnt Bronze) Specifications and Features:</H2>\r\n<UL>\r\n<LI>POF USA 01600</LI>\r\n<LI>Semi-Automatic Direct Gas Impingement System</LI>\r\n<LI>.308 Winchester (accepts 7.62 NATO) </LI>\r\n<LI>12.5\" Match Grade Nitride Heat Treated Barrel</LI>\r\n<LI>1:10\" Twist Rate</LI>\r\n<LI>Barrel Threaded 5/8x24</LI>\r\n<LI>20 Rounds</LI>\r\n<LI>11.5\" M-LOK Renegade Free Float Rail System</LI>\r\n<LI>Four Integrated QD Sling Mounts</LI>\r\n<LI>SB Tactical SBA3 Rifle Stabilizing Brace</LI>\r\n<LI>Mission First Tactical Rifle Grip</LI>\r\n<LI>E2 Dual Extraction Technology Chamber</LI>\r\n<LI>Nine Position Dictator Adjustable Gas Block</LI>\r\n<LI>Flash Hider</LI>\r\n<LI>POF USA Drop In Trigger System (4.5lbs) </LI>\r\n<LI>KNS Anti-Walk Pin Kit</LI>\r\n<LI>Gen4 Billet Lower Receiver</LI>\r\n<LI>Ambidextrous Bolt Release</LI>\r\n<LI>Ambidextrous Safety Selector</LI>\r\n<LI>Ambidextrous Bolt Catch</LI>\r\n<LI>Ambidextrous Magazine Release</LI>\r\n<LI>6 Position Anti-Tilt Buffer Tube</LI>\r\n<LI>Magpul PMAG Magazine (DPMS LR-308/SR-25 Compatible</LI>\r\n<LI>One Receiver Teflon Tension Screw</LI>\r\n<LI>Overall Length 29.5\" Collapsed</LI>\r\n<LI>Overall Weight 6.31lbs</LI>\r\n<LI>Anodized Finish</LI>\r\n<LI>Burnt Bronze Finish</LI>\r\n</UL>\r\n<br><br><font color=\"red\">NOTE:  This item is oversized or heavy and is subject to a \"Bulk Fee\".  The fee will be added to your cart at checkout.</font><br>",
   
  price: {
    value: 2530.54,
    currency: 'USD',
    formatted: '$2,530.54',
    decimalPrice: '2530.54'
  },
  images: {
    large: [
      {
        alt: 'POF USA Revolution DI .308 Winchester Semi Auto Rifle 12.5" Barrel 20 Rounds Direct Gas Impingement System 11.5" M-LOK Free Float Rail Burnt Bronze Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw6864fde6/large/2-pof01600.jpg?sw=800&sh=800'
      }
    ],
    small: [
      {
        alt: 'POF USA Revolution DI .308 Winchester Semi Auto Rifle 12.5" Barrel 20 Rounds Direct Gas Impingement System 11.5" M-LOK Free Float Rail Burnt Bronze Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw6864fde6/large/2-pof01600.jpg?sw=146&sh=146'
      }
    ]
  }
},
{
  id: '2-BANDT-430003',
  productName: 'B&T USW A1 Semi Auto Pistol 9mm Luger 4.8" Barrel 17 Rounds Aimpoint Nano B&T 200 Lumen APL Tactical Pistol Light Ambidextrous Controls Grip Panel Inserts Matte Black',
  productShortName: 'B&T USW A1 Semi Auto Pistol',
  productType: 'Pistols',
  brand: 'B&T AG',
  category: "FIREARMS",
  longDescription: "Brugger & Thomet has engineered the a pistol designed to exceed the expectations of Special Operation Forces, Law Enforcement/SWAT professionals, and now you. The B&T Universal Service Weapon or USW as it is known is designed to be a weapons platform for the first responder to be able to deal with a serious threat with a firearm that maintains a small profile similar to that of an every day carry sidearm. B&T has delivered! The USW is an ultra modern, compact lightweight pistol which comes with an Aimpoint NANO Micro Red Dot Sight and an APL 200 Lumen Tactical Pistol Light. The B&T USW ticks like a fine Swiss watch, pick up one of these rare pistols while you still can. Only a small number of these pistols have been imported into the USA.<BR><BR>    \r\n\r\n<B>Specifications and Features:</B><BR>\r\nBrugger & Thomet USW A1 Semi Auto Pistol BT-430003<BR>\r\n9mm Luger<BR>\r\n4.3\" Barrel<BR>\r\nMuzzle Threaded M13.5x1 Left Hand<BR>\r\n17 Round Magazine<BR>\r\nCZ-75 Type Magazines<BR>\r\nAimpoint NANO<BR>\r\nB&T 200 Lumen APL Tactical Pistol Light<BR>\r\n3 Grip Panel Inserts (Small, Medium, Large)<BR>\r\nDouble/Single Action<BR>\r\n100% Ambidextrous Controls<BR>\r\nOverall Length 9.96\"<BR>\r\nOverall Width 1.69\"<BR>\r\nOverall Height 6.69\"<BR>\r\nOverall Weight 2.55lbs<BR>\r\nNO STOCK INCLUDED<BR>\r\nMatte Black<BR><BR>",
   
  price: {
    value: 2207.41,
    currency: 'USD',
    formatted: '$2,207.41',
    decimalPrice: '2207.41'
  },
  images: {
    large: [
      {
        alt: 'B&T USW A1 Semi Auto Pistol 9mm Luger 4.8" Barrel 17 Rounds Aimpoint Nano B&T 200 Lumen APL Tactical Pistol Light Ambidextrous Controls Grip Panel Inserts Matte Black',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwd797dd43/large/2-bandt-430003.jpg?sw=800&sh=800'
      },
      {
        alt: 'B&T USW A1 Semi Auto Pistol 9mm Luger 4.8" Barrel 17 Rounds Aimpoint Nano B&T 200 Lumen APL Tactical Pistol Light Ambidextrous Controls Grip Panel Inserts Matte Black',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwc15ca58b/large/2-bandt-430003_a.jpg?sw=800&sh=800'
      }
    ],
    small: [
      {
        alt: 'B&T USW A1 Semi Auto Pistol 9mm Luger 4.8" Barrel 17 Rounds Aimpoint Nano B&T 200 Lumen APL Tactical Pistol Light Ambidextrous Controls Grip Panel Inserts Matte Black',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwd797dd43/large/2-bandt-430003.jpg?sw=146&sh=146'
      },
      {
        alt: 'B&T USW A1 Semi Auto Pistol 9mm Luger 4.8" Barrel 17 Rounds Aimpoint Nano B&T 200 Lumen APL Tactical Pistol Light Ambidextrous Controls Grip Panel Inserts Matte Black',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwc15ca58b/large/2-bandt-430003_a.jpg?sw=146&sh=146'
      }
    ]
  }
},
{
  id: 'FC-741566104534',
  productName: 'EAA Witness Elite Gold Team Semi-auto Pistol 9mm 5.25" Barrel 17 Rounds, Compensater, No Sights, Drilled and Tapped, Single Action, Chrome',
  productShortName: 'EAA Witness Elite Gold Team Semi-auto Pistol',
  productType: 'Pistols',
  brand: 'EAA',
  category: "FIREARMS",
  longDescription: "EAA Witness Elite Gold Team Semi-auto Pistol 9mm 5.25\" Barrel 17 Rounds, Compensater, No Sights, Drilled and Tapped, Single Action, Chrome Finish<br><br>\r\n\r\nTanfoglio Witness Elite pistols have won almost every major competition pistol match in the world at one time or another. There is a reason for this. They work and shoot where you point and they are so comfortable to use so you look forward to practice.<BR><BR>\r\n\r\n<b>Features and Specifications:</b><br>\r\nChrome Finish<br>\r\n17 + 1 Capacity<br>\r\nSingle Action<br>\r\nNo Sights<br>\r\nCompensator<br>\r\nPorted Barrel<BR>\r\nCheckered front and backstrap<br>\r\nAluminum Grips<br>\r\nBeveled Mag Well<br>\r\nDrilled and Tapped for Scope Mount<BR>\r\nBarrel 5.25” <br>\r\nLength 10.5” <br>\r\nWidth 1.4\" <br>\r\nHeight 5\"<br> \r\nEmpty Weight 41 oz<br><br>",
    
  price: {
    value: 2155,
    currency: 'USD',
    formatted: '$2,155.00',
    decimalPrice: '2155.00'
  },
  images: {
    large: [
      {
        alt: 'EAA Witness Elite Gold Team Semi-auto Pistol 9mm 5.25" Barrel 17 Rounds, Compensater, No Sights, Drilled and Tapped, Single Action, Chrome',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw0a7724d0/large/7-g600066.jpg?sw=800&sh=800'
      }
    ],
    small: [
      {
        alt: 'EAA Witness Elite Gold Team Semi-auto Pistol 9mm 5.25" Barrel 17 Rounds, Compensater, No Sights, Drilled and Tapped, Single Action, Chrome',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw0a7724d0/large/7-g600066.jpg?sw=146&sh=146'
      }
    ]
  }
},
{
  id: '7-GSAR4N1',
  productName: 'Standard Manufacturing .45 Long Colt Single Action Revolver 4.75" Barrel 6 Rounds Fixed Sights One Piece Grip Nickel Finish',
  productShortName: 'Standard Manufacturing Single Action Revolver',
  productType: 'Revolvers',
  brand: 'Standard Manufacturing',
  category: "FIREARMS",
  longDescription: "<H2> The Standard Manufacturing Singe Action Revolver Is the Finest Example of a Single Action Revolver on the Market Today </H2>\r\n\r\nStandard Manufacturing is very proud to introduce a Single Action Revolver that is clearly the result of amazing effort which has been put forth to produce the finest single action revolver around. Beginning with a solid 4140 steel frame and cylinder there are no inferior cast or metal injection molded parts used. Additionally only the highest quality precision machining equipment was used in order to manufacturer this firearm which allows Standard MFG to closely monitor and control the overall quality. Next Master gunsmiths are employed to refine and hone the firearm into the condition you see before you. Almost immediately it will become apparent that this firearm is something very special.<BR><BR>\r\n\r\n\r\n<H2> Standard Manufacturing Single Action Revolver (Nickel Finish) Specifications and Features:</H2>\r\n<UL>\r\n<LI>STD MFG SAR4N1 </LI>\r\n<LI>Single Action Revolver</LI>\r\n<LI>.45 Long Colt</LI>\r\n<LI>4.75\" Barrel</LI>\r\n<LI>6 Round Cylinder </LI>\r\n<LI>No Transfer Bar</LI>\r\n<LI>Spurred Hammer </LI>\r\n<LI>One Piece Grip </LI>\r\n<LI>Fixed Sights </LI>\r\n<LI>Overall Weight 40oz (Approximate) </LI>\r\n<LI>Made from 4140 Steel</LI>\r\n<LI>All Screws and Pins are Fired Blue </LI>\r\n<LI>Frame, Barrel and Cylinder and Metal Parts are Nickel</LI>\r\n</UL>",
    
  price: {
    value: 2024.6,
    currency: 'USD',
    formatted: '$2,024.60',
    decimalPrice: '2024.60'
  },
  images: {
    large: [
      {
        alt: 'Standard Manufacturing .45 Long Colt Single Action Revolver 4.75" Barrel 6 Rounds Fixed Sights One Piece Grip Nickel Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw7e45c94e/large/7-gsar4n1.jpg?sw=800&sh=800'
      }
    ],
    small: [
      {
        alt: 'Standard Manufacturing .45 Long Colt Single Action Revolver 4.75" Barrel 6 Rounds Fixed Sights One Piece Grip Nickel Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw7e45c94e/large/7-gsar4n1.jpg?sw=146&sh=146'
      }
    ]
  }
},
{
  id: 'FC-761226088394',
  productName: 'Magnum Research Desert Eagle Mark XIX Semi Auto Pistol .50 Action Express 6" Barrel 7 Rounds Fixed Combat Sights Weaver Accessory Rail Color Case Hardened Finish',
  productShortName: 'Magnum Research Desert Eagle Mark XIX Semi Auto Pistol',
  productType: 'Pistols',
  brand: 'Magnum Research',
  category: "FIREARMS",
  longDescription: "The iconic and legendary Magnum Research Desert Eagle pistol has probably made more cameos in Hollywood movies, TV shows and video games than any other pistol. The Desert Eagle Mark XIX after nearly 25 years can now be yours to own forever. The D-Eagle is a pop culture icon like no other. The barrel, frame and slide are all constructed from high quality carbon steel. This particular model features a full weaver style accessory rail along with a standard Black Oxide finish. This single action pistol provides you with around a 4lb trigger pull functioning in conjunction with a gas-operated rotating bolt design. Own a legend, own and icon, own a Desert Eagle Mark XIX today!<BR><BR>\r\n\r\n<B>Specifications and Features:</B><BR>\r\nMagnum Research Desert Eagle Mark XIX Semi Automatic Pistol DE50CH<BR>\r\nGas-Operated Rotating Bolt<BR>\r\nSingle Action<BR>\r\n.50 Action Express (.50AE)<BR>\r\n6\" High Quality Carbon Steel Barrel<BR>\r\n1:19\" Twist Rate<BR>\r\nHigh Quality Carbon Steel Frame/Slide<BR>\r\nFull Weaver Style Accessory Rail<BR>\r\nCombat Type Fixed Sights<BR>\r\nWalnut Grips<BR>\r\n7 Round Magazine<BR>\r\nApproximately 4lb Trigger Pull<BR>\r\nTrigger Reach 2.75\"<BR>\r\nSight Radius 8.5\"<BR>\r\nOverall Length 10.75\"<BR>\r\nHeight 6.25\"<BR>\r\nSlide Width 1.25\"<BR>\r\nOverall Weight (Empty Magazine) 4lbs 5.8oz<BR>\r\nColor Case Hardened Finish<BR><BR>",
   
  price: {
    value: 1958.88,
    currency: 'USD',
    formatted: '$1,958.88',
    decimalPrice: '1958.88'
  },
  images: {
    large: [
      {
        alt: 'Magnum Research Desert Eagle Mark XIX Semi Auto Pistol .50 Action Express 6" Barrel 7 Rounds Fixed Combat Sights Weaver Accessory Rail Color Case Hardened Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw9b3dfa56/large/44591.jpg?sw=800&sh=800'
      }
    ],
    small: [
      {
        alt: 'Magnum Research Desert Eagle Mark XIX Semi Auto Pistol .50 Action Express 6" Barrel 7 Rounds Fixed Combat Sights Weaver Accessory Rail Color Case Hardened Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw9b3dfa56/large/44591.jpg?sw=146&sh=146'
      }
    ]
  }
},
{
  id: '2-SPKSTP5610-M1R',
  productName: 'Spikes Rare Breed Spartan AR-15 5.56 NATO Semi Auto Rifle 11.5" Barrel Milled Spartan Helmet Lower 12" M-LOK Hand Guard SBA3 Brace Bronze Battle Worn Finish',
  productShortName: 'Spikes Rare Breed Spartan AR-15 Semi Auto Rifle',
  productType: 'Rifles',
  brand: 'Spikes Tactical',
  category: "FIREARMS",
  longDescription: "A Spike's Tactical Rare Breed Spartan Rifle is an excellent rifle for hunting, defense or competition and the unique cut lower receiver is sure to turn some heads at the range! The Rare Breed Spartan features a billet aluminum flat top upper with a 11.5\" cold hammer forged barrel. The precision machined Spike's Spartan Helmet billet lower is outfitted with an ambi safety, a jeweled Mil-Spec trigger, and a SB Tactical SBA3 Rifle Stabilizing Brace. It has a 10\" Spikes free float M-LOK compatible hand guard with a full length picatinny top rail. Now you can get a unique high performance competition quality AR-15 at a price you can afford! <BR><BR>\r\n\r\n<B>Specifications and Features:</B><BR>\r\nSpikes Tactical Rare Breed Spartan AR-15 Style Semi Automatic Rifle STP5610-M1R<BR> \r\nDirect Gas Impingement System<BR>\r\n5.56mm NATO (accepts .223 Remington)<BR>\r\n11.5\" Cold Hammer Forged Chrome Lined Barrel<BR>\r\n1:7 Twist Rate <BR>\r\n1/2\" x 28 Thread Pitch<BR>\r\nCarbine Length Gas System<BR>\r\nAccepts Standard AR-15 Magazines<BR>\r\nNo Magazine Included<BR>\r\nSpartan Billet 7075-T6 Aluminum Flat Top Upper Receiver <BR>\r\nSpartan Helmet Billet 7075-T6 Lower Receiver<BR>\r\nSpikes Tactical 10\" Free Float M-LOK Compatible Hand Guard<BR>\r\nFull Length Picatinny Top Rail <BR>\r\nRadian Raptor-LT Charging Handle <BR>\r\nAmbidextrous Safety <BR>\r\nJeweled Mil-Spec Trigger <BR>\r\nSpikes Pro Rifle Grip<BR>\r\nSB Tactical SBA3 Rifle Stabilizing Brace<BR>\r\nSpikes Tactical R2 Muzzle Device<BR>\r\n.625\" Low Profile Gas Block<BR>\r\nOverall Length 27.75\" Collapsed to 30.5\" Extended <BR>\r\nWeight 6 lbs <BR>\r\nSpikes Tactical Lifetime Warranty<BR>\r\nMade In The USA <BR>\r\nBronze Battle Worn Finish <BR><BR>\r\n\r\nNote: No Magazine included<BR><BR>\r\n\r\n<BR><BR><B><FONT color=red>Note: </B></FONT>\r\nHere is the NRA's interpretation of the latest ATF letter regarding the use and legality of rifle braces.<BR> \r\n<a href=\"https://www.nraila.org/articles/20170425/brace-yourself-atf-reconsiders-obama-era-policy-on-stabilizing-braces\">NRA Interpretation of Latest ATF Letter</a>\r\n<br><br><font color=\"red\">NOTE:  This item is oversized or heavy and is subject to a \"Bulk Fee\".  The fee will be added to your cart at checkout.</font><br>",
   
  price: {
    value: 1957.5,
    currency: 'USD',
    formatted: '$1,957.50',
    decimalPrice: '1957.50'
  },
  images: {
    large: [
      {
        alt: 'Spikes Rare Breed Spartan AR-15 5.56 NATO Semi Auto Rifle 11.5" Barrel Milled Spartan Helmet Lower 12" M-LOK Hand Guard SBA3 Brace Bronze Battle Worn Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw46d57442/large/2-spkstp5610-m1r.jpg?sw=800&sh=800'
      }
    ],
    small: [
      {
        alt: 'Spikes Rare Breed Spartan AR-15 5.56 NATO Semi Auto Rifle 11.5" Barrel Milled Spartan Helmet Lower 12" M-LOK Hand Guard SBA3 Brace Bronze Battle Worn Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw46d57442/large/2-spkstp5610-m1r.jpg?sw=146&sh=146'
      }
    ]
  }
},
{
  id: '7-GSAR7CC1',
  productName: 'Standard Manufacturing .45 Long Colt Single Action Revolver 7.5" Barrel 6 Rounds Fixed Sights One Piece Grip Color Case Hardened Frame Blued Finish',
  productShortName: 'Standard Manufacturing Single Action Revolver',
  productType: 'Revolvers',
  brand: 'Standard Manufacturing',
  category: "FIREARMS",
  longDescription: "<H2> The Standard Manufacturing Singe Action Revolver Is the Finest Example of a Single Action Revolver on the Market Today </H2>\r\n\r\nStandard Manufacturing is very proud to introduce a Single Action Revolver that is clearly the result of amazing effort which has been put forth to produce the finest single action revolver around. Beginning with a solid 4140 steel frame and cylinder there are no inferior cast or metal injection molded parts used. Additionally only the highest quality precision machining equipment was used in order to manufacturer this firearm which allows Standard MFG to closely monitor and control the overall quality. Next Master gunsmiths are employed to refine and hone the firearm into the condition you see before you. Almost immediately it will become apparent that this firearm is something very special.<BR><BR>\r\n\r\n\r\n<H2> Standard Manufacturing Single Action Revolver (CCH/Blued Finish) Specifications and Features:</H2>\r\n<UL>\r\n<LI>STD MFG SAR7CC1 </LI>\r\n<LI>Single Action Revolver</LI>\r\n<LI>.45 Long Colt</LI>\r\n<LI>7.5\" Barrel</LI>\r\n<LI>6 Round Cylinder </LI>\r\n<LI>No Transfer Bar</LI>\r\n<LI>Spurred Hammer </LI>\r\n<LI>One Piece Grip </LI>\r\n<LI>Fixed Sights </LI>\r\n<LI>Overall Weight 40oz (Approximate) </LI>\r\n<LI>Made from 4140 Steel</LI>\r\n<LI>All Screws and Pins are Fired Blue Bone</LI>\r\n<LI>Color Case Hardened Frame Frame</LI>\r\n<LI>Barrel and Cylinder and Metal Parts are Blued</LI>\r\n</UL>",
    
  price: {
    value: 1934.5,
    currency: 'USD',
    formatted: '$1,934.50',
    decimalPrice: '1934.50'
  },
  images: {
    large: [
      {
        alt: 'Standard Manufacturing .45 Long Colt Single Action Revolver 7.5" Barrel 6 Rounds Fixed Sights One Piece Grip Color Case Hardened Frame Blued Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwdef2ce41/large/7-gsar7cc1.jpg?sw=800&sh=800'
      }
    ],
    small: [
      {
        alt: 'Standard Manufacturing .45 Long Colt Single Action Revolver 7.5" Barrel 6 Rounds Fixed Sights One Piece Grip Color Case Hardened Frame Blued Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwdef2ce41/large/7-gsar7cc1.jpg?sw=146&sh=146'
      }
    ]
  }
},
{
  id: 'FC-680017478001',
  productName: 'Maxim Defense PDX 7.62x39 Semi Auto Rifle 5.5" Barrel 20 Rounds M-LOK Free Float Forend Maxim Defense SCW PDW Rifle Stabilizing Brace Arid Flat Dark Earth',
  productShortName: 'Maxim Defense PDX Semi Auto Rifle',
  productType: 'Rifles',
  brand: 'Maxim Defense',
  category: "FIREARMS",
  longDescription: "<H2> This Is the Personal Defense Weapon That the Tier 1 Community Has Been Asking For </H2>\r\n\r\nMaxim Defense hits a grand slam, out of the park, no doubter with the new PDX personal defense weapon. This little gem was voted as the Best of Shot 2019 by Recoil Magazine. The PDX was designed to handle the fierce demands of the elite tier 1 special operations community. This is due to the fact that they work in countless close quarter encounters and need to dominate in those scenarios. The PDX allows them to achieve maximum energy on target with very little recoil in order to transition from target to target. This PDX uses a direct gas impingement system and operates on a set of very familiar AR-15 style controls. Additionally the Maxim HATEBRAKE muzzle booster reduces recoil, decreases flash signature and pushes gasses and concussive blast waves downrange away from the operator. You will notice an overall improvement of operation which typically can be hit or miss in short barreled rifles and rifles.<BR><BR> \r\n\r\n<H2>Maxim Defense PDX Personal Defense Rifle (Arid) Specifications and Features:</H2>\r\n<UL>\r\n<LI>Maxim Defense MSM-47800</LI>\r\n<LI>Direct Gas Impingement System</LI>\r\n<LI>5.5\" Barrel</LI>\r\n<LI>Billet Aluminum Upper/Lower Receiver</LI>\r\n<LI>M4 Style Flat Top Upper</LI>\r\n<LI>Integrated Trigger Guard Lower</LI>\r\n<LI>Flared/Beveled Magazine Well</LI>\r\n<LI>M-LOK Compatible Free Float Forend</LI>\r\n<LI>Maxim Defense HATEBRAKE Muzzle Booster</LI>\r\n<LI>Maxim Defense SCW Personal Defense Weapon Rifle Stabilizing Brace</LI>\r\n<LI>ALG ACT Combat Trigger System</LI>\r\n<LI>20 Round Magazine (C-Products Defense)</LI>\r\n<LI>AR-15 Magazine Compatible</LI>\r\n<LI>AR-15 Style Controls/Ergonomics</LI>\r\n<LI>Ambidextrous Safety Selector</LI>\r\n<LI>Ambidextrous Charging Handle</LI>\r\n<LI>Polymer Rifle Grip</LI>\r\n<LI>Overall Length 18.75\"</LI>\r\n<LI>Overall Weight 5lbs 11oz</LI>\r\n<LI>Arid Flat Dark Earth Finish</LI>\r\n</UL>\r\n\r\n<B>Includes:</B><UL>\r\n<LI>one 20 Round Magazine </LI>\r\n</UL>",
   
  price: {
    value: 1895.69,
    currency: 'USD',
    formatted: '$1,895.69',
    decimalPrice: '1895.69'
  },
  images: {
    large: [
      {
        alt: 'Maxim Defense PDX 7.62x39 Semi Auto Rifle 5.5" Barrel 20 Rounds M-LOK Free Float Forend Maxim Defense SCW PDW Rifle Stabilizing Brace Arid Flat Dark Earth',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwa9af2fcb/large/111193.jpg?sw=800&sh=800'
      }
    ],
    small: [
      {
        alt: 'Maxim Defense PDX 7.62x39 Semi Auto Rifle 5.5" Barrel 20 Rounds M-LOK Free Float Forend Maxim Defense SCW PDW Rifle Stabilizing Brace Arid Flat Dark Earth',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwa9af2fcb/large/111193.jpg?sw=146&sh=146'
      }
    ]
  }
},
{
  id: 'FC-728028235456',
  productName: 'Metro Arms SPS Vista Long Semi Auto Handgun .38 Super 5.5" Barrel 21 Rounds 4140 Steel Frame Black Chrome Finish with Scope Mount Polymer Grips Black SPVL38SBC',
  productShortName: 'Metro Arms SPS Vista Long Semi Auto Handgun',
  productType: 'Handguns',
  brand: 'Metro Arms Corp',
  category: "FIREARMS",
  longDescription: "The Metro Arms SPS Vista Long is an excellent choice for defense and competitive shooting applications.  This is a fantastic 1911 that comes packed with features like a 5.5\" Match Grade Barrel Ramped and Threaded, Polymer Grips, Hammer Forged 4140 Steel Slide, Enhanced Beavertail Grip Safety, and a high capacity 21 Round Magazine. It includes the scope mount but does not include the holographic sight. The SPS Vista Long is built from the ground up to be a reliable and accurate competition gun that will impress new and seasoned shooters alike with its outstanding handling and accuracy.<BR><BR> \r\n\r\n<font color=red><B>Does Not Include Holographic Sight</font></B><BR><BR>\r\n\r\n<B>Specifications and Features:</B><BR>\r\nMetro Arms SPS Vista Long SPVL38SBC <BR>\r\nSemi Automatic Pistol <BR>\r\n.38 Super <BR>\r\n5.5\" Match Grade Barrel <BR>\r\nRamped and Threaded <BR>\r\n21 Rounds <BR>\r\nHammer Forged 4140 Steel Slide <BR>\r\nFlared and Lowered Ejection Port <BR>\r\nScope Mount Is Included <BR>\r\nPolymer Grips <BR>\r\nCheckered Front Strap Serration <BR>\r\nWide Rear Slide Serrations <BR>\r\nWide Magwell <BR>\r\nSkeletal Hammer <BR>\r\nLight Weight Polymer Trigger <BR>\r\nSingle Action Trigger <BR>\r\nEnhanced Beavertail Grip Safety <BR>\r\nAmbidextrous Thumb Safety <BR>\r\nStandard Slide Stop <BR>\r\nBlack Chrome Finish <BR>\r\nLength 10.7\" <BR>\r\nHeight 7.85\" <BR>\r\nWidth 1.25\" <BR>\r\nWeight 43.38 Ounces <BR><BR>",
    
  price: {
    value: 1990.99,
    currency: 'USD',
    formatted: '$1,990.99',
    decimalPrice: '1990.99'
  },
  images: {
    large: [
      {
        alt: 'Metro Arms SPS Vista Long Semi Auto Handgun .38 Super 5.5" Barrel 21 Rounds 4140 Steel Frame Black Chrome Finish with Scope Mount Polymer Grips Black SPVL38SBC',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw4795589c/large/3-0218157.jpg?sw=800&sh=800'
      }
    ],
    small: [
      {
        alt: 'Metro Arms SPS Vista Long Semi Auto Handgun .38 Super 5.5" Barrel 21 Rounds 4140 Steel Frame Black Chrome Finish with Scope Mount Polymer Grips Black SPVL38SBC',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw4795589c/large/3-0218157.jpg?sw=146&sh=146'
      }
    ]
  }
},
{
  id: 'FC-806703018867',
  productName: 'Dan Wesson 1911 Discretion Government Semi Auto Pistol 9mm Luger 5.75" Threaded Barrel 10 Rounds Suppressor Height Night Sights G-10 Grips Stainless Steel Frame Black Duty Finish',
  productShortName: 'Dan Wesson 1911 Discretion Government Semi Auto Pistol',
  productType: 'Pistols',
  brand: 'Dan Wesson',
  category: "FIREARMS",
  longDescription: "The CZ-USA Dan Wesson Discretion takes the 1911 to the next level with it's ported slide and 5.75\" extended barrel.  The Discretion is suppressor ready with a threaded muzzle and extra high tactical ledge tritium sights.  The rear sight permits racking the slide on the belt or a table edge.  The pistol features a serrated trigger and has an accessory rail for addition of a tactical light or laser. \r\n\r\n<BR><BR>\r\n<B>Specifications and Features:</B><BR>\r\nCZ-USA Dan Wesson 1911 Discretion Government Semi Auto Pistol 1886 <BR>\r\n9mm Luger<BR>\r\n5.75\" Threaded Stainless Match Barrel<BR>\r\n10 Round Magazine Capacity<BR>\r\nSingle Action Pistol<BR>\r\nFixed Suppressor Height Night Sights<BR>\r\nFront slide lightening cuts<BR>\r\n1913 Picatinny Rail<BR>\r\nMagazine well<BR>\r\nManual Thumb Safety<BR>\r\nGrip Safety<BR>\r\nFrontstrap 25 LPI Checkering<BR>\r\nCheckered Mainspring Housing<BR>\r\nSkeletonized Hammer<BR>\r\nG-10 Grips<BR>\r\nStainless Steel Frame <BR>\r\nBlack Duty Finish<BR>\r\nOverall Length 9.5\"<BR>\r\nOverall Height 6\"<BR>\r\nOverall Width 1.5\"<BR>\r\nOverall Weight 42.2 oz<BR><BR>",
    
  price: {
    value: 1843.67,
    currency: 'USD',
    formatted: '$1,843.67',
    decimalPrice: '1843.67'
  },
  images: {
    large: [
      {
        alt: 'Dan Wesson 1911 Discretion Government Semi Auto Pistol 9mm Luger 5.75" Threaded Barrel 10 Rounds Suppressor Height Night Sights G-10 Grips Stainless Steel Frame Black Duty Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwd3f5e227/large/2-dw01886.jpg?sw=800&sh=800'
      }
    ],
    small: [
      {
        alt: 'Dan Wesson 1911 Discretion Government Semi Auto Pistol 9mm Luger 5.75" Threaded Barrel 10 Rounds Suppressor Height Night Sights G-10 Grips Stainless Steel Frame Black Duty Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwd3f5e227/large/2-dw01886.jpg?sw=146&sh=146'
      }
    ]
  }
},
{
  id: 'FC-811607032352',
  productName: 'Kriss USA Kriss Vector Gen II SDP-SB Enhanced 10mm Auto Semi Auto Rifle 6.5" Barrel 15 Rounds Rifle Stabilizing Brace Alpine White Finish',
  productType: 'Rifles',
  brand: 'KRISS USA',
  category: "FIREARMS",
  longDescription: "<H2>The Kriss USA Vector Gen II Enhanced is the culmination of years of Research and Development</H2>\r\n\r\nThe Kriss USA Kriss Vector Gen II Enhanced features the innovative KRISS Super V recoil mitigation system. This innovative nonlinear operating system re-vectors energy down and away from the shooters shoulder in order to dramatically reduce felt recoil and muzzle climb simultaneously.  You will immediately notice that you will have the ability to recover faster for quicker and more accurate sequential shot strings. In addition to having a futuristic look the Vector Gen II supports tool-less caliber interchangeability and GLOCK magazine interchangeability in order to provide you with maximum modularity and flexibility. Moreover the Vector Gen II features a full length picatinny rail perfect for mounting any of your favorite optics, lights, lasers or any other picatinny compatible accessories.<BR><BR>\r\n\r\n<H2> Kriss USA Kriss Vector Gen II SDP-SB Enhanced Semi Auto Rifle (Alpine White) Specifications and Features:</H2>\r\n<UL>\r\n<LI>Kriss USA KV10-PSBAP31 </LI>\r\n<LI>Closed Bolt, Delayed Blowback</LI>\r\n<LI>10mm Auto</LI>\r\n<LI>6.5\" Barrel (Black Nitride QPQ Finish) </LI>\r\n<LI>1:10\" Right Hand Twist Rate</LI>\r\n<LI>6 Groove Rifling</LI>\r\n<LI>4140 Chrome Moly Barrel</LI>\r\n<LI>Barrel Threaded 9/16x24 Right Hand</LI>\r\n<LI>15 Round Capacity</LI>\r\n<LI>Accepts GLOCK Pattern Magazines</LI>\r\n<LI>Patented KRISS Super V Recoil Mitigation System</LI>\r\n<LI>Smooth Trigger with Audible/Tactile Reset</LI>\r\n<LI>SB Tactical SBX-K Arm Brace</LI>\r\n<LI>Full Length MIL-STD 1913 Picatinny Top Rail</LI>\r\n<LI>Low Profile Folding Sights</LI>\r\n<LI>Tool-less Caliber Interchangeability</LI>\r\n<LI>Ambidextrous Short Throw Safety Lever</LI>\r\n<LI>Simple Brass Check Charging Handle</LI>\r\n<LI>Left or Right Folding Adaptor</LI>\r\n<LI>Vector Modular Rail (VMR) System</LI>\r\n<LI>Kriss Hand Stop</LI>\r\n<LI>4 Pin Tool-Less Disassembly</LI>\r\n<LI>Advanced Polymer Composite Housing</LI>\r\n<LI>Pivoting, Single Stage Trigger</LI>\r\n<LI>Overall Length 18.5\" to 25.6\"</LI>\r\n<LI>Overall Weight 7.28lbs</LI>\r\n<LI>Alpine White Finish</LI>\r\n</UL>",
    
  price: {
    value: 1799,
    currency: 'USD',
    formatted: '$1,799.00',
    decimalPrice: '1799.00'
  },
  images: {
    large: [
      {
        alt: 'Kriss USA Kriss Vector Gen II SDP-SB Enhanced 10mm Auto Semi Auto Rifle 6.5" Barrel 15 Rounds Rifle Stabilizing Brace Alpine White Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw8e95ae54/large/2-krkv10-psbap31.jpg?sw=800&sh=800'
      }
    ],
    small: [
      {
        alt: 'Kriss USA Kriss Vector Gen II SDP-SB Enhanced 10mm Auto Semi Auto Rifle 6.5" Barrel 15 Rounds Rifle Stabilizing Brace Alpine White Finish',
        url: 'https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw8e95ae54/large/2-krkv10-psbap31.jpg?sw=146&sh=146'
      }
    ]
  }
},
{
  id: "FC-24607094862479",
  productName: "Silver Bear 5.45x39mm 60 Grain Bi-Metal FMJ 750 Rnd Case",
  productShortName: 'Silver Bear 5.45x39mm 60 Grain Bi-Metal FMJ 750 Rnd Case',
  productType: "Rifle Ammo",
  brand: "Bear Ammo",
  category: "AMMUNITION",
longDescription: "Silver Bear ammo is high quality ammo features distinctive, highly polished, zinc plating on the steel cartridge case; hence the name Silver Bear. Silver Bear offers you a high quality ammunition at reasonable prices. Silver Bear uses Berdan primers that are non corrosive. These primers offer long shelf life and sure-fire ignition. Silver Bear is loaded to exacting standards.<BR><BR>\r\n\r\n5.45x39mm<BR>\r\n60 Grain Full Metal Jacket<BR>\r\nBi-Metal Jacket<BR>\r\nZinc Plated Steel Case<BR>\r\nBerdan Primed<BR>\r\nNon-Reloadable<BR>\r\nNon-Corrosive<BR>\r\nMuzzle Velocity 2821 fps<BR>\r\nUses: Target, Training, and Plinking<BR>\r\nNote: The projectile is a lead core however the jacket is bi-metal and it may contain steel. As such a magnet would be attracted to the bullet.<BR><BR>\r\n\r\n<B><font color=\"red\">750 round case</font><BR><BR>Ammo price is per case</font></b></center><BR><BR>", 
  price: {    
      value: 257.01,
      currency: "USD",
      formatted: "$257.01",
      decimalPrice: "257.01"
    },    
  images: {
    large: [
      {
        alt: "Silver Bear 5.45x39mm 60 Grain Bi-Metal FMJ 750 Rnd Case",
        url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw9879985e/large/18-a545nfmj-750.jpg?sw=800&sh=800",
        "title": "Silver Bear 5.45x39mm 60 Grain Bi-Metal FMJ 750 Rnd Case"
      }
    ],
    small: [
      {
        alt: "Silver Bear 5.45x39mm 60 Grain Bi-Metal FMJ 750 Rnd Case",
        url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw9879985e/large/18-a545nfmj-750.jpg?sw=146&sh=146",
        title: "Silver Bear 5.45x39mm 60 Grain Bi-Metal FMJ 750 Rnd Case"
      }
    ]
  }},
  {
    id: "20-FEDEP9HST3CS",
    productName: "Federal LE Tactical 9mm Luger +P Ammunition 1000 Rounds 124 Grain HST Jacketed Hollow Point Projectile 1200fps",
    productShortName: "Federal LE Tactical 9mm Luger +P Ammunition 1000 Rounds",
    productType: "Shotgun Ammo",
    brand: "Federal",
    category: "AMMUNITION",
    longDescription: "Federal Law Enforcement Tactical ammunition is built to an uncompromising standard due to the fact that Federal LE Tactical ammo is trusted by large numbers Federal and Law Enforcement agents and agencies. LE Tactical is designed to be the most reliable and consistent rounds available when the moment strikes. Stop loading inferior defensive loads in your firearm and trust Federal Law Enforcement Tactical when your life is on the line.<BR><BR>\r\n\r\nFederal Law Enforcement Ammunition P9HST3<BR>\r\n9mm Luger +P<BR>\r\n124 Grain HST Jacketed Hollow Point Projectile<BR>\r\nBrass Cased<BR>\r\nNickel Coated<BR>\r\nReloadable<BR>\r\nTest Barrel Length 4\"<BR>\r\nMuzzle velocity: 1200 fps<BR>\r\nMuzzle energy: 396 ft/lbs<BR>\r\nUses: Self Defense, Personal Protection, or Training<BR><BR>\r\n\r\n<font color=red><B>1000 rounds per case. </B></font><BR><BR>\r\n<B> Ammo Price is per case.</B><BR><BR>\r\n<br><br><font color=\"red\">NOTE:  This item is oversized or heavy and is subject to a \"Bulk Fee\".  The fee will be added to your cart at checkout.</font><br>",
  
   price: {
    
        value: 437.64,
        currency: "USD",
        formatted: "$437.64",
        decimalPrice: "437.64"
    
    },
    images: {
    large: [
        {
          alt: "Federal LE Tactical 9mm Luger +P Ammunition 1000 Rounds 124 Grain HST Jacketed Hollow Point Projectile 1200fps",
          url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw558a3d27/large/20-fedep9hst3cs.jpg?sw=800&sh=800",
          title: "Federal LE Tactical 9mm Luger +P Ammunition 1000 Rounds 124 Grain HST Jacketed Hollow Point Projectile 1200fps"
        }
      ],
      small: [
        {
          alt: "Federal LE Tactical 9mm Luger +P Ammunition 1000 Rounds 124 Grain HST Jacketed Hollow Point Projectile 1200fps",
          url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw558a3d27/large/20-fedep9hst3cs.jpg?sw=146&sh=146",
          title: "Federal LE Tactical 9mm Luger +P Ammunition 1000 Rounds 124 Grain HST Jacketed Hollow Point Projectile 1200fps"
        }
      ]
    }
    },
    {
   
      id: "FC-000381043719",
     productName: "Burris MTAC 1-4x24 Riflescope CQ 5.56 Illuminated Reticle with Burris FastFire II Red Dot Reflex Sight and PEPR AR Mount Matte Black 200437-FF",
     productType: "Optics & Scopes",
     brand: "Burris",
     category: "ACCESSORIES",
     longDescription: "The Burris MTAC 1-4x24 Riflescope CQ 5.56 Illuminated Reticle with Burris FastFire II Red Dot Reflex Sight and PEPR AR Mount is the ultimate optics package for your rifle. This package gives you the versatility for any kind of situation. The package comes in a matte black finish.<BR><BR>\r\n\r\n<STRONG>Features and Specifications:</STRONG><BR>\r\nManufacturer Number: 200437-FF <BR>\r\nAll lenses are precision ground optical glass that is index matched, multi coated wit HiLume for clear, sharp high resolution images<BR>\r\nRubber coated eyepiece<BR>\r\nDeep relief, ergonomic power ring <BR>\r\nForever warranty<BR>\r\nWide field of view<BR>\r\nBallistic CQ 5.56/7.62 Illuminated reticles<BR>\r\nMagnification: 1-4x<BR>\r\nObjective: 24mm<BR>\r\nReticle:\tBallistic Plex CQ 5.56<BR>\r\nFinish: Matte Black<BR>\r\nField of View (ft at 100 yds):\t100 Low - 32 High<BR>\r\nExit Pupil: 24mm Low - 6mm High<BR>\r\nClick Value (in at 100 yds):\t.5\"<BR>\r\nMax Adjust (in at 100 yds):\t130\"<BR>\r\nEye Relief:\t3.5 - 4.0\"<BR>\r\nLength:\t11.3\"<BR>\r\nWeight:\t17oz<BR><BR>\r\n\r\nCompact and Lightweight<BR>\r\nWon't effect handling or balance<BR>\r\nUnlimited eye relief<BR>\r\nParallax free 1x magnification<BR>\r\nSight Window:\t21mm x 15mm<BR>\r\nElevation adustment range:\t3° or 190\" at 100 yds<BR>\r\nWindage adjustment range:\t3° or 190\" at 100 yds.<BR>\r\nParallax-free sighting distance:\tapprox. 50 yards<BR>\r\nRecoil resistance:\tAt least 1000 G's<BR>\r\nOperating Temperature Range:\t-10°F to +130°F (-25°C to +55°C)<BR>\r\nPower Supply:\t3V with one CR 2032 Lithium battery<BR>\r\nDimensions (LxWxH):1.8\"x1\"x0.9\"<BR><BR>\r\n\r\n<STRONG>Includes:</STRONG><BR>\r\nBurris FastFire II Red Dot Reflex Sight<BR>\r\nBurris PEPR AR Riflescope Ring Mount\r\n\r\n<BR>\r\n<BR>\r\n<STRONG> Every Burris optic is covered by the Burris Forever Warranty™. They will repair or replace your Burris optic if it is damaged or defective. The Burris Forever Warranty does not cover loss, theft, deliberate damage or cosmetic damage that does not hinder the performance of the product. All returns MUST go through:  Burris Company, 331 E. 8th Street, Greeley, Colorado 80631, 1-888-440-0244, <a href=\"mailto:customerservice@burrisoptics.com\">customerservice@burrisoptics.com</a><STRONG><BR><BR>",
     
      price: {
   
          value: 599,
          currency: "USD",
          formatted: "$599.00",
          decimalPrice: "599.00"
        
      },
    images: {
       large: [
          {
            alt: "Burris MTAC 1-4x24 Riflescope CQ 5.56 Illuminated Reticle with Burris FastFire II Red Dot Reflex Sight and PEPR AR Mount Matte Black 200437-FF",
            url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw38bc3cfa/large/10-0930266.jpg?sw=800&sh=800",
            title: "Burris MTAC 1-4x24 Riflescope CQ 5.56 Illuminated Reticle with Burris FastFire II Red Dot Reflex Sight and PEPR AR Mount Matte Black 200437-FF"
          },
          {
           alt: "Burris MTAC 1-4x24 Riflescope CQ 5.56 Illuminated Reticle with Burris FastFire II Red Dot Reflex Sight and PEPR AR Mount Matte Black 200437-FF",
           url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwa62e4f8e/large/10-0930266_a.jpg?sw=800&sh=800",
           title: "Burris MTAC 1-4x24 Riflescope CQ 5.56 Illuminated Reticle with Burris FastFire II Red Dot Reflex Sight and PEPR AR Mount Matte Black 200437-FF"
          },
          {
           alt: "Burris MTAC 1-4x24 Riflescope CQ 5.56 Illuminated Reticle with Burris FastFire II Red Dot Reflex Sight and PEPR AR Mount Matte Black 200437-FF",
           url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw82b5f2dd/large/10-0930266_b.jpg?sw=800&sh=800",
           title: "Burris MTAC 1-4x24 Riflescope CQ 5.56 Illuminated Reticle with Burris FastFire II Red Dot Reflex Sight and PEPR AR Mount Matte Black 200437-FF"
          }
        ],
        small: [
          {
        alt: "Burris MTAC 1-4x24 Riflescope CQ 5.56 Illuminated Reticle with Burris FastFire II Red Dot Reflex Sight and PEPR AR Mount Matte Black 200437-FF",
        url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw38bc3cfa/large/10-0930266.jpg?sw=146&sh=146",
        title: "Burris MTAC 1-4x24 Riflescope CQ 5.56 Illuminated Reticle with Burris FastFire II Red Dot Reflex Sight and PEPR AR Mount Matte Black 200437-FF"
          },
          {
            alt: "Burris MTAC 1-4x24 Riflescope CQ 5.56 Illuminated Reticle with Burris FastFire II Red Dot Reflex Sight and PEPR AR Mount Matte Black 200437-FF",
            url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwa62e4f8e/large/10-0930266_a.jpg?sw=146&sh=146",
            title: "Burris MTAC 1-4x24 Riflescope CQ 5.56 Illuminated Reticle with Burris FastFire II Red Dot Reflex Sight and PEPR AR Mount Matte Black 200437-FF"
          },
          {
           alt: "Burris MTAC 1-4x24 Riflescope CQ 5.56 Illuminated Reticle with Burris FastFire II Red Dot Reflex Sight and PEPR AR Mount Matte Black 200437-FF",
           url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw82b5f2dd/large/10-0930266_b.jpg?sw=146&sh=146",
           title: "Burris MTAC 1-4x24 Riflescope CQ 5.56 Illuminated Reticle with Burris FastFire II Red Dot Reflex Sight and PEPR AR Mount Matte Black 200437-FF"
          }
        ]
      }},  
      {
   
        id: "FC-601299069411",
        productName: "Galco Miami Classic GLOCK 17, 19, 26, 22, 23, 27, 31, 32, 33 Shoulder Holster Right Hand Leather Black MC224B",
        productShortName: "Galco Miami Classic Shoulder Holster",
        productType: "Belts & Holsters",
        brand: "Galco",
        category: "ACCESSORIES",
       longDescription: "Galco International, founded 1969 in Chicago Illinois became an instant hit with the firearm community with their Famous Jackass Leather Holster.  Law Enforcement, Military, and Concealed Carry Aficionados alike have come to rely on Galco International for their reliable and dependable Concealment Holsters and accessories.  Regardless if you are kicking in doors chasing down insurgents, clearing houses, or just walking to your car in a dark secluded parking lot Galco will feel right at home.  Who needs Galco?  Simply put Galco is \"For those who demand the best... and know the difference.\"   <BR>\n<BR>\nOur Miami Classic is quite possibly the most imitated shoulder holster system in the world. A direct descendant of the original shoulder system first introduced by Galco in 1970 (then the Famous Jackass Leather Company), the Miami Classic has since become the favorite of professionals worldwide. <BR>\n<BR>\nA key component of this patented shoulder system is its spider harness. All four points of the spider harness pivot independently and are connected by our unique clover shaped Flexalon swivel back plate, which is a Galco trademark. This results in a perfect fit and lasting comfort for all sizes and shapes.<BR>\n<BR>\nThis system is constructed of premium saddle leather and includes holster, harness, ammo carrier and a set of system screws. The Miami Classic is fully modular. <BR>\n<BR>\n<B>Fits:</B><BR>\nGLOCK 17, 19, 26, 22, 23, 27, 31, 32, 33  <BR>\n<BR>\n<BR>\n<BR>\n<BR>\nDISCLAIMER: “GLOCK” is a federally registered trademark of GLOCK, Inc. and is one of many trademarks owned by GLOCK, Inc. and GLOCK Ges.m.b.H. Neither Cheaper Than Dirt!, nor this site are affiliated in any manner with, or otherwise endorsed by, GLOCK, Inc. or GLOCK Ges.m.b.H. The use of “GLOCK” on this page is merely to advertise the sale of GLOCK pistols, parts, or components. Components and parts that do not specifically have GLOCK listed as the manufacturer are made by their respective company. Such parts may be intended for use with GLOCK components but are not produced by GLOCK, Inc.. For additional genuine GLOCK, Inc. and GLOCK Ges.m.b.H products and parts visit www.glock.com.",
      
      price: {
         
            value: 208.34,
            currency: "USD",
            formatted: "$208.34",
            decimalPrice: "208.34"
          
        },
        images: {
          large: [
            {
              alt: "Galco Miami Classic GLOCK 17, 19, 26, 22, 23, 27, 31, 32, 33 Shoulder Holster Right Hand Leather Black MC224B",
              url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwc376a86b/large/2-galmc224b.jpg?sw=800&sh=800",
              title: "Galco Miami Classic GLOCK 17, 19, 26, 22, 23, 27, 31, 32, 33 Shoulder Holster Right Hand Leather Black MC224B"
            },
            {
             alt: "Galco Miami Classic GLOCK 17, 19, 26, 22, 23, 27, 31, 32, 33 Shoulder Holster Right Hand Leather Black MC224B",
             url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwc11b415e/large/2-galmc224b_a.jpg?sw=800&sh=800",
             title: "Galco Miami Classic GLOCK 17, 19, 26, 22, 23, 27, 31, 32, 33 Shoulder Holster Right Hand Leather Black MC224B"
            },
            {
             alt: "Galco Miami Classic GLOCK 17, 19, 26, 22, 23, 27, 31, 32, 33 Shoulder Holster Right Hand Leather Black MC224B",
             url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw6d790813/large/2-galmc224b_b.jpg?sw=800&sh=800",
             title: "Galco Miami Classic GLOCK 17, 19, 26, 22, 23, 27, 31, 32, 33 Shoulder Holster Right Hand Leather Black MC224B"
            },
            {
              alt: "Galco Miami Classic GLOCK 17, 19, 26, 22, 23, 27, 31, 32, 33 Shoulder Holster Right Hand Leather Black MC224B",
              url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw22377196/large/2-galmc224b_c.jpg?sw=800&sh=800",
              title: "Galco Miami Classic GLOCK 17, 19, 26, 22, 23, 27, 31, 32, 33 Shoulder Holster Right Hand Leather Black MC224B"
            },
           
           
            {
              alt: "Galco Miami Classic GLOCK 17, 19, 26, 22, 23, 27, 31, 32, 33 Shoulder Holster Right Hand Leather Black MC224B",
              url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwbf009d66/large/2-galmc224b_f.jpg?sw=800&sh=800",
              title: "Galco Miami Classic GLOCK 17, 19, 26, 22, 23, 27, 31, 32, 33 Shoulder Holster Right Hand Leather Black MC224B"
            }
          ],
          small: [
            {
              alt: "Galco Miami Classic GLOCK 17, 19, 26, 22, 23, 27, 31, 32, 33 Shoulder Holster Right Hand Leather Black MC224B",
              url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwc376a86b/large/2-galmc224b.jpg?sw=146&sh=146",
              title: "Galco Miami Classic GLOCK 17, 19, 26, 22, 23, 27, 31, 32, 33 Shoulder Holster Right Hand Leather Black MC224B"
            },
            {
             alt: "Galco Miami Classic GLOCK 17, 19, 26, 22, 23, 27, 31, 32, 33 Shoulder Holster Right Hand Leather Black MC224B",
             url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwc11b415e/large/2-galmc224b_a.jpg?sw=146&sh=146",
             title: "Galco Miami Classic GLOCK 17, 19, 26, 22, 23, 27, 31, 32, 33 Shoulder Holster Right Hand Leather Black MC224B"
            },
            {
             alt: "Galco Miami Classic GLOCK 17, 19, 26, 22, 23, 27, 31, 32, 33 Shoulder Holster Right Hand Leather Black MC224B",
             url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw6d790813/large/2-galmc224b_b.jpg?sw=146&sh=146",
             title: "Galco Miami Classic GLOCK 17, 19, 26, 22, 23, 27, 31, 32, 33 Shoulder Holster Right Hand Leather Black MC224B"
            },
            {
             alt: "Galco Miami Classic GLOCK 17, 19, 26, 22, 23, 27, 31, 32, 33 Shoulder Holster Right Hand Leather Black MC224B",
             url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw22377196/large/2-galmc224b_c.jpg?sw=146&sh=146",
             title: "Galco Miami Classic GLOCK 17, 19, 26, 22, 23, 27, 31, 32, 33 Shoulder Holster Right Hand Leather Black MC224B"
            },
           
        
            {
             alt: "Galco Miami Classic GLOCK 17, 19, 26, 22, 23, 27, 31, 32, 33 Shoulder Holster Right Hand Leather Black MC224B",
             url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwbf009d66/large/2-galmc224b_f.jpg?sw=146&sh=146",
             title: "Galco Miami Classic GLOCK 17, 19, 26, 22, 23, 27, 31, 32, 33 Shoulder Holster Right Hand Leather Black MC224B"
            }
          ]
        }
        },
        {   
          id: "25929",
          productName: "Peltor ComTac III Hearing Defender Electronic Earmuffs -20dB Noise Reduction Rating Slim Cup Design Ballistic Helmet Compatible Coyote Brown",
          productType: "Eye & Ear Protection",
          brand: "Peltor",
          category: "ACCESSORIES",
          longDescription: "Peltor ComTac III Hearing Defense Electronic Earmuffs provide you with the ability to have clear and reliable communications in virtually any situation. These electronic earmuffs allow you to maintain communication while protecting your hearing from harmful noise levels. These electronic earmuffs are ideal for the individuals who find themselves in combat situations or individuals who participate in live fire training courses. The Peltor ComTac III is compatible with the majority of ballistic helmets on the market. <BR><BR>\r\n\r\n<B>Specifications and Features:</B><BR>\r\nPeltor ComTac III Hearing Defender Electronic Earmuffs MT17H682FB-09 CY<BR>\r\nSlim cup design<BR>\r\n-20dB Noise Reduction Rating<BR>\r\nLevel dependent function for ambient listening<BR>\r\nFully independent dual earphone system for talk through and external radio signal<BR>\r\nCompatible with the majority of ballistic helmets on the market<BR>\r\nCoyote Brown<BR><BR>", 
       price: {
       value: 419.08,
       currency: "USD",
       formatted: "$419.08",
       decimalPrice: "419.08"
          },
          images: {
            large: [
              {
                alt: "Peltor ComTac III Hearing Defender Electronic Earmuffs -20dB Noise Reduction Rating Slim Cup Design Ballistic Helmet Compatible Coyote Brown",
                url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwd5267d80/large/25929.jpg?sw=800&sh=800",
                title: "Peltor ComTac III Hearing Defender Electronic Earmuffs -20dB Noise Reduction Rating Slim Cup Design Ballistic Helmet Compatible Coyote Brown"
              }
            ],
            small: [
              {
            alt: "Peltor ComTac III Hearing Defender Electronic Earmuffs -20dB Noise Reduction Rating Slim Cup Design Ballistic Helmet Compatible Coyote Brown",
            url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwd5267d80/large/25929.jpg?sw=146&sh=146",
            title: "Peltor ComTac III Hearing Defender Electronic Earmuffs -20dB Noise Reduction Rating Slim Cup Design Ballistic Helmet Compatible Coyote Brown"
              }
            ]
          },
           }
  ];

// document.getElementById("filter-card").innerHTML = productsForCards[0].longDescription;


var productsForDisplay = productsForCards;

// console.log(productsForCards)
var userCards = document.getElementById("user-cards");
function createUserCard(obj) {
  var userCard = document.createElement("div");
  userCard.className = "user-card";
  userCard.setAttribute("id", `${obj.id}`);
  userCards.appendChild(userCard);
  userCard.innerHTML = `<img src=${obj.images.small[0].url} alt=${obj.images.small[0].alt}>
<p>${obj.productName}</p>            
<h3>${obj.price.formatted}</h3>
<div class="card-overlay">
    <button class="details">SEE DETAILS</button>
    <button class="add-to-cart">ADD TO CART</button>
</div>`
}
// for (product of productsForCards) {
//   createUserCard(product);
// }
for (var i = 1; i <= 6; i ++) {
    createUserCard(productsForCards[i]);
}



const productContainer = document.getElementById("product-container");
const productPage = document.getElementById("product-page");
const productDescription = document.getElementById("product-description");
const largeImage = document.getElementById("large-image");
const smallImages = document.getElementById("small-images");
const productName = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");
userCards.addEventListener("click", getProductPage);
function getProductPage (e) {
  if (e.target.innerText === "SEE DETAILS") {
    // console.log("aha!")
    largeImage.innerHTML = "";
    smallImages.innerHTML = "";
    productDescription.innerHTML = "";
    productContainer.style.display = "block";
const cardTarget = e.target.parentNode.parentNode;
productsForDisplay.find((obj) => {
  if (obj.id === cardTarget.id) {  
    // console.log(obj)   
    document.querySelector(".product-name-card").setAttribute("id", `${obj.id}`)
    largeImage.innerHTML = `<img src=${obj.images.large[0].url} alt=${obj.images.large[0].alt} class="large-image">`;
obj.images.small.forEach((image) => {
const imgSmall = document.createElement("img");
imgSmall.setAttribute("src", `${image.url}`);
imgSmall.setAttribute("alt", `${image.alt}`);
imgSmall.setAttribute("class", "small-images")
smallImages.appendChild(imgSmall);
})
productDescription.innerHTML = `${obj.longDescription}`;
var price = transformNumber(Number(obj.price.value))
  productName.innerText = `${obj.productName}`
  productPrice.innerText = `${"$" + price}`;
  const btn = document.getElementById("add-to-cart")
  btn.addEventListener("click", addToCart);
for (let i = 0; i < smallImages.children.length; i++) {
  let selectImage = smallImages.children[i];
  selectImage.addEventListener('click', function() {
    largeImage.innerHTML = `<img src=${obj.images.large[i].url} alt=${obj.images.large[i].alt} class="large-image">`
  });
}
  }
}) 
  }console.log(productPage);
  
}
productContainer.addEventListener("click", exitProductPage) 
function exitProductPage (e){
  // e.preventDefault()
  if(e.target == e.currentTarget){
    productContainer.style.display = "none";
  }

  // console.log(e.target, e.currentTarget)
}



userCards.addEventListener("click", addToCart);
const cartItemsNumber = document.getElementById("cart-items");
var cartItemsCounter = 0;
const shoppingList = document.getElementById("shopping-list");


function transformNumber(num)  {
    var numParts = num.toString().split(".");
    numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numParts.join(".");
  }


  function addToCart(e) { 
if (e.target.innerText === "ADD TO CART") {
 cartItemsCounter++;
  cartItemsNumber.style.visibility = "visible";
  cartItemsNumber.innerText = `${cartItemsCounter}`;
  var cardTarget = e.target.parentNode.parentNode;
  console.log(cardTarget);
  // var cartRows = document.getElementsByClassName("shopping-list-item")
  // console.log(cartRows[0])
  // var cartRows = shoppingList.querySelectorAll(".shopping-list-item") 
  // console.log(cartRows[0].getAttribute("id"))
//   for (var i = 0; i <= cartRows.length; i++) {
// if (cardTarget.id === cartRows[i].getAttribute("id")) {
//   console.log(cartRows[i])
// }
//   }
// console.log(e.target.innerText)
   productsForDisplay.find((obj) => {
    if (obj.id === cardTarget.id) {      
      var price = transformNumber(Number(obj.price.value));
      const listItem = document.createElement("li");
      listItem.setAttribute("class", "shopping-list-item")
      listItem.innerHTML = `<img src=${obj.images.small[0].url} alt=${obj.images.small[0].alt}>
<div class="product-name">
    <p>${obj.brand + " " + obj.productType}</p>
    <p class="product-price" value=${obj.price.value}>${'$' + price}</p>    
</div>
<input type="number" class="number-of-products" value="1" min="1">
<p class="product-price-total">${'$' + price}</p>
<button class = "remove-from-cart" id = ${obj.id}>X</button>`;
      shoppingList.appendChild(listItem);
      updateCartTotal();
    }
  })
}
 
}

shoppingList.addEventListener("click", removeFromCart);


function removeFromCart(e) {
  if (e.target.hasAttribute("id")) {  
    e.target.parentNode.remove();
    cartItemsCounter--;

if (cartItemsCounter > 0) {
  cartItemsNumber.innerText = `${cartItemsCounter}`;
} else {
  cartItemsNumber.style.visibility = "hidden";
}
updateCartTotal();
  }  
}

shoppingList.addEventListener("input", multiplyPrice);

function multiplyPrice (e) {  
  // console.log(Number(e.target.previousElementSibling.children[1].getAttribute("value")));
  var price = Math.round(Number(e.target.previousElementSibling.children[1].getAttribute("value")) * e.target.value * 100) /100 
  var priceMultiplied = transformNumber(price);
// console.log(e.target.nextElementSibling)
e.target.nextElementSibling.innerText = `${'$' + priceMultiplied}`
updateCartTotal()
  }

  function updateCartTotal () {
    var cartRows = document.getElementsByClassName("shopping-list-item")
    var total = 0;
    for(var i = 0; i < cartRows.length; i++) {
      if(cartRows.length===0){
        total=0;
        document.getElementById("total-price").innerText = "Total: " + "$" + 0;
      } else {
        var price = Number(cartRows[i].getElementsByClassName("product-price")[0].getAttribute("value")) 
var quantity = Number(cartRows[i].getElementsByClassName("number-of-products")[0].value) 
total = total + (price * quantity);
    total = Math.round(total * 100) / 100;
    var formattedTotal = transformNumber(total);
document.getElementById("total-price").innerText = "Total: " + "$" + formattedTotal; } 
      }   
  }

var indexPage = 0;
  document.getElementById("results-per-page").addEventListener("change", resetResults)
  
  function resultsPerPage (arr) { 
var noOfProds = Number(document.getElementById("results-per-page").value);
var splitProducts = chunkArray(arr, noOfProds);
  userCards.innerHTML = "";
 for (var i=0; i<splitProducts[indexPage].length; i++) {
  createUserCard(splitProducts[indexPage][i]);
}
}

  function resetResults (){
    indexPage = 0;
    resultsPerPage(productsForDisplay)
  }
  
  function chunkArray(myArray, chunkSize){
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];    
    for (index = 0; index < arrayLength; index += chunkSize) {
        myChunk = myArray.slice(index, index+chunkSize);
        tempArray.push(myChunk);
    }

     return tempArray;
}

document.getElementById("second-header").addEventListener("click", filterProductCategory);

  function filterProductCategory (e) {   
  if (e.target.hasAttribute("href")) {
    productsForDisplay = productsForCards.filter(obj => e.target.innerText == obj.productType);
  } else if (e.target !== e.currentTarget) {
    productsForDisplay = productsForCards.filter(obj => e.target.innerText == obj.category);
  } indexPage = 0;
  resultsPerPage(productsForDisplay);
  }


document.getElementById("previous-products").addEventListener("click", seePreviousProducts)
function seePreviousProducts () {
  if (indexPage > 0){
      indexPage -=1;
  resultsPerPage(productsForDisplay)
  }

}

document.getElementById("next-products").addEventListener("click", seeNextProducts)
function seeNextProducts () { 
      var noOfProds = Number(document.getElementById("results-per-page").value);
    var splitProducts = chunkArray(productsForDisplay, noOfProds);
    if(indexPage < (splitProducts.length-1)) {
indexPage +=1;
 resultsPerPage(productsForDisplay);
  } 
 
}

// const sortBy = document.getElementById("sort-by")
// // sortBy.addEventListener("click", sortCards);

// function sortAlphabetically (arr = productsForCards) {
// //   arr.sort(function(a, b){
// //   return a.brand > b.brand;
// // });
// arr.sort((a, b) => {
//   if (a.name < b.name) {return -1}  
//   else {return a.brand > b.brand ? 1 : 0}  
// })
// }
// const test2 = function sortNumbers (arr = productsForCards){
// arr.sort(function (a, b) {
//   return Number(a.price.value) - Number(b.price.value);
// });
// }

// console.log(sortAlphabetically(productsForCards))
