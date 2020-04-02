(window.webpackJsonp=window.webpackJsonp||[]).push([[1044],{1386:function(e,t,a){"use strict";a.r(t);var o=a(28),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Swimmable Water Volume Tutorial - Epic Wiki")]),e._v(" "),a("h1",{attrs:{id:"swimmable-water-volume-tutorial"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#swimmable-water-volume-tutorial"}},[e._v("#")]),e._v(" Swimmable Water Volume Tutorial")]),e._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Swimmable_Water_Volume"}},[e._v("1 Swimmable Water Volume")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Final_Outcome"}},[e._v("1.1 Final Outcome")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Steps_to_Follow"}},[e._v("2 Steps to Follow")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Initial_Set-Up"}},[e._v("2.1 Initial Set-Up")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Volume_Set-Up"}},[e._v("2.2 Volume Set-Up")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Blueprint_Set-Up"}},[e._v("2.3 Blueprint Set-Up")])])])])]),e._v(" "),a("h2",{attrs:{id:"swimmable-water-volume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#swimmable-water-volume"}},[e._v("#")]),e._v(" Swimmable Water Volume")]),e._v(" "),a("p",[e._v("This tutorial will go through how to set up a swimmable water volume using a “Physics Volume” in conjunction with a “Post Process Volume” to get the basic look and feel of swimming underwater.")]),e._v(" "),a("p",[e._v("We will also be setting the “Buoyancy” of our character in the character blueprint as well as setting up vertical swim input axis actions.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('Follow the link to learn more about the material used in this example: [Water\\_Shader\\_Tutorial](/Water_Shader_Tutorial "Water Shader Tutorial")       \n')])])]),a("h3",{attrs:{id:"final-outcome"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#final-outcome"}},[e._v("#")]),e._v(" Final Outcome")]),e._v(" "),a("p",[e._v("Your end result should resemble the below images.....")]),e._v(" "),a("p",[a("a",{attrs:{href:"/File:Pool_Image.PNG"}},[a("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/7/77/Pool_Image.PNG",alt:""}})])]),e._v(" "),a("p",[e._v("Pool Perspective View")]),e._v(" "),a("p",[a("a",{attrs:{href:"/File:Underwater_Pool.PNG"}},[a("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/d/d4/Underwater_Pool.PNG",alt:""}})])]),e._v(" "),a("p",[e._v("Underwater")]),e._v(" "),a("h2",{attrs:{id:"steps-to-follow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps-to-follow"}},[e._v("#")]),e._v(" Steps to Follow")]),e._v(" "),a("h3",{attrs:{id:"initial-set-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initial-set-up"}},[e._v("#")]),e._v(" Initial Set-Up")]),e._v(" "),a("p",[e._v("1. Create a new project using the “ThirdPerson Blueprint” template and enable the starter content.")]),e._v(" "),a("p",[e._v("2. In the default level create a new additive “BSP” box brush large enough to resemble a pool relative to your characters size.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("a. In my case I created a box roughly 1500 x 1200 x 450\nb. I also rested the pool in a way I could easily walk from the premade stair brushes to the pool deck in order for me to “dive” into the pool.\n")])])]),a("p",[e._v("3. Now create a subtractive brush and place it in the center of your pool. This will act as the hole or cut-out area of your pool where the “Physics volume” and “Post Process Volume will rest.")]),e._v(" "),a("p",[e._v("4. In your content browser, search for the word “Shape_Plane,” and place that in your level. Resize this mesh so it fits snuggly in your pool. This plane will represent the water’s surface.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("a. Be sure to turn off the \"Shape\\_Plane\" collision.\nb. Double-click the mesh to open the 'Static Mesh Editor' to remove the collision.\n")])])]),a("p",[e._v("5. Now in your content browser type the word “Lake” or “Ocean” in the search field of the “Game” folder to find the two example materials of water provided by the starter content.")]),e._v(" "),a("p",[e._v("6. Drag and drop either one of these materials onto your “Shape_Plane” mesh.")]),e._v(" "),a("p",[e._v("7. Click on your water mesh and within the “Details” tab underneath the “Lighting” options check the box “Use Two Sided Lighting.” This will make it so when underwater the material is also shown.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("a. Your pool should look something like the first image in the tutorial underneath the “Final Outcome” section. \t\nb. Aside from the translucency of the water material.\n")])])]),a("h3",{attrs:{id:"volume-set-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volume-set-up"}},[e._v("#")]),e._v(" Volume Set-Up")]),e._v(" "),a("p",[e._v("Now we will set up the physics volume and the post process volume so that we can apply the look and feel of water to our pool.")]),e._v(" "),a("p",[e._v("8. In the modes section type the words “Physics Volume” in the search field and place this volume in your level. Set the bounds of the volume as close to the “Subtractive” brush as possible.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("a.This volume represents the area in which you will be able to swim around.\n")])])]),a("p",[e._v("9. Within the details panel of your “Physics Volume” under the “Character Movement” options there is a few settings we need to change.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("a.Check the box that says “Water Volume”\nb.Change the fluid friction to about 0.35\n")])])]),a("p",[e._v("10. Now we need to pull in a “Post Process Volume” that will give us the underwater look and feel. Set the bounds of this volume similar to your “Physics Volume”")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("a.See images on how I set it up in my scene.\nb.The smaller pink box represents the “Post Process Volume” and the outer pink box represents the “Physics Volume.”\n")])])]),a("p",[a("a",{attrs:{href:"/File:Volume_SetUps.PNG"}},[a("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/1/1b/Volume_SetUps.PNG",alt:""}})])]),e._v(" "),a("p",[e._v("Volume Perspective Set-Up")]),e._v(" "),a("p",[a("a",{attrs:{href:"/File:Wireframe_Pool_Layout.PNG"}},[a("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/c/cf/Wireframe_Pool_Layout.PNG",alt:""}})])]),e._v(" "),a("p",[e._v("Wireframe Volume Set-Up")]),e._v(" "),a("h3",{attrs:{id:"blueprint-set-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blueprint-set-up"}},[e._v("#")]),e._v(" Blueprint Set-Up")]),e._v(" "),a("p",[e._v("Now within your character blueprint we need to edit a few things so that our character has a good “Buoyancy” and set two different input keys to ascend and descend the volume.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("_Currently we are not working with a swimming animation so while “swimming” in the volume we are using the run animation which works fine for the basic goal._\n")])])]),a("p",[e._v("11. Go into your character blueprint labeled “MyCharacter” and under the “Defaults” section there is a search field. Type “Buoyancy” in the field and set the characters buoyancy to around 1.1")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("a. You can play with this setting to make your character more or less buoyant\nb. Too little or too much will make it difficult to have a believable though\n")])])]),a("p",[a("a",{attrs:{href:"/File:Buoyancy_SetUp.PNG"}},[a("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/2/21/Buoyancy_SetUp.PNG",alt:""}})])]),e._v(" "),a("p",[e._v("Buoyancy setting")]),e._v(" "),a("p",[e._v("12. Now go into your “Project Settings” by clicking on the “Edit” option.")]),e._v(" "),a("p",[e._v("13. Underneath the “Engine” section click on the word “Input.”")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("a. Here you will create a new “Axis Mapping” which controls the vertical movement in the water.\nb. The value of 1.0 = Up and the value of -1.0 = Down.\n")])])]),a("p",[e._v("14. Under the “Axis Mappings” drop down box click the plus symbol and label this new Axis Map, “SwimUp”")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("a. Choose the keyboard key X = 1.0 to swim up\nb. And Z = -1.0 to swim down\n")])])]),a("p",[a("a",{attrs:{href:"/File:Axis_Mapping.PNG"}},[a("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/6/63/Axis_Mapping.PNG",alt:""}})])]),e._v(" "),a("p",[e._v("Axis Mapping Set-Up")]),e._v(" "),a("p",[e._v("15. Now within our “MyCharacter” blueprint of the “EventGraph” create a new “InputAxis” using our “SwimUp” mapping.")]),e._v(" "),a("p",[e._v("16. Right click in the “EventGraph” and search for “InputAxis SwimUp”")]),e._v(" "),a("p",[e._v("17. Now create a new “Add Movement Input” node and set the world direction of Z =1.0")]),e._v(" "),a("p",[e._v("18. Connect the pins to their respective locations. Use the below image as reference.")]),e._v(" "),a("p",[a("a",{attrs:{href:"/File:Input_Axis_SwimUp.PNG"}},[a("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/a/ac/Input_Axis_SwimUp.PNG",alt:""}})])]),e._v(" "),a("p",[e._v("Blueprint Input Action")]),e._v(" "),a("p",[e._v("19. Save all your work.")]),e._v(" "),a("p",[e._v("20. Launch PIE (Play in Editor)")]),e._v(" "),a("p",[e._v("21. Start Swimming")]),e._v(" "),a("p",[a("a",{attrs:{href:"/File:CharacterSwimming.PNG"}},[a("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/7/7a/CharacterSwimming.PNG",alt:""}})])]),e._v(" "),a("p",[e._v("Pool time!")]),e._v(" "),a("p",[e._v("Thanks for following along! I have written some more tutorials you can check out by following the links within my Wiki Profile page found below.")]),e._v(" "),a("p",[a("a",{attrs:{href:"/User:AndrewHurley",title:"User:AndrewHurley"}},[e._v("Andrew Hurley Wiki Profile Page")])]),e._v(" "),a("p",[e._v('Retrieved from "'),a("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Swimmable_Water_Volume_Tutorial&oldid=22673",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Swimmable_Water_Volume_Tutorial&oldid=22673"),a("OutboundLink")],1),e._v('"')]),e._v(" "),a("p",[a("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Categories")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/Category:Epic_Created_Content",title:"Category:Epic Created Content"}},[e._v("Epic Created Content")])]),e._v(" "),a("li",[a("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[e._v("Tutorials")])])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);