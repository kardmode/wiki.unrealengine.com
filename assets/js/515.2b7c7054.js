(window.webpackJsonp=window.webpackJsonp||[]).push([[515],{917:function(e,t,a){"use strict";a.r(t);var r=a(28),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Forward Declarations - Epic Wiki")]),e._v(" "),a("h1",{attrs:{id:"forward-declarations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forward-declarations"}},[e._v("#")]),e._v(" Forward Declarations")]),e._v(" "),a("p",[e._v("From Epic Wiki")]),e._v(" "),a("p",[e._v("Jump to: "),a("a",{attrs:{href:"#mw-head"}},[e._v("navigation")]),e._v(", "),a("a",{attrs:{href:"#p-search"}},[e._v("search")])]),e._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Overview"}},[e._v("1 Overview")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Forward_Declarations_To_The_Rescue.21"}},[e._v("2 Forward Declarations To The Rescue!")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#YourController.h"}},[e._v("3 YourController.h")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Compile_Error_if_Used_in_.h"}},[e._v("4 Compile Error if Used in .h")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#You_can_.23include_anything_in_.cpp_files"}},[e._v("5 You can #include anything in .cpp files")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Shorthand_Forward_Declaration"}},[e._v("6 Shorthand Forward Declaration")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#FORCEINLINE_Usage"}},[e._v("7 FORCEINLINE Usage")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Summary"}},[e._v("8 Summary")])])]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[a("em",[e._v("Author:")]),e._v(" "),a("a",{attrs:{href:"/index.php?title=User:Rama",title:"User:Rama"}},[e._v("Rama")]),e._v(" ("),a("a",{attrs:{href:"/index.php?title=User_talk:Rama",title:"User talk:Rama"}},[e._v("talk")]),e._v(")")]),e._v(" "),a("p",[e._v("Dear Community,")]),e._v(" "),a("p",[e._v("In UE4 C++ you will often find that your code won't compile if you refer to other custom classes you've created.")]),e._v(" "),a("p",[e._v("For example, if you have a custom pawn and a custom hud class, and in your controller class you have in your header file (.h) :")]),e._v(" "),a("p",[a("syntaxhighlight",{attrs:{lang:"cpp"}},[e._v(" UPROPERTY() ACustomPawn* myPawn;")])],1),e._v(" "),a("p",[e._v("UPROPERTY() ACustomHUD* myHUD; ")]),e._v(" "),a("p",[e._v("The compiler will report that there are errors on the above lines because it has not yet compiled CustomPawn and CustomHUD, so these identifiers are not found yet.")]),e._v(" "),a("p",[e._v("The logical thing to do is then #include these classes above your controller .generated #include:")]),e._v(" "),a("p",[a("syntaxhighlight",{attrs:{lang:"cpp"}},[e._v('#include "CustomPawn.h"')])],1),e._v(" "),a("ol",[a("li",[e._v('include "CustomHUD.h"')])]),e._v(" "),a("p",[a("em",[e._v("Circular Dependency!")])]),e._v(" "),a("p",[e._v("But if your HUD and Pawn classes also #include your custom player controller you now have a circular dependency!")]),e._v(" "),a("h2",{attrs:{id:"forward-declarations-to-the-rescue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forward-declarations-to-the-rescue"}},[e._v("#")]),e._v(" Forward Declarations To The Rescue!")]),e._v(" "),a("p",[e._v("The solution is to just declare all the classes that are not being recognized at the top of your .h file, this is called Forward Declaration")]),e._v(" "),a("h2",{attrs:{id:"yourcontroller-h"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yourcontroller-h"}},[e._v("#")]),e._v(" YourController.h")]),e._v(" "),a("syntaxhighlight",{attrs:{lang:"cpp"}},[a("ol",[a("li",[e._v('include "YourController.generated.h"')])]),e._v(" "),a("p",[e._v("//~~~~~ Forward Declarations~~~~~")]),e._v(" "),a("p",[e._v("class ACustomPawn; class ACustomHUD;")]),e._v(" "),a("p",[e._v("UCLASS() class AYourController : public APlayerController {")]),e._v(" "),a("p",[e._v("ACutomPawn* myPawn;\nACustomHUD* myHUD;")]),e._v(" "),a("p",[e._v("//etc")]),e._v(" "),a("p",[e._v("} ")])]),a("p"),e._v(" "),a("h2",{attrs:{id:"compile-error-if-used-in-h"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile-error-if-used-in-h"}},[e._v("#")]),e._v(" Compile Error if Used in .h")]),e._v(" "),a("p",[e._v("It is important to note that you cannot access the members of solely forward-declared class, you must only try to access members in the .cpp file.")]),e._v(" "),a("p",[e._v("Forward declaration will get everything to compile, but all the logic must be done in the .cpp file.")]),e._v(" "),a("h2",{attrs:{id:"you-can-include-anything-in-cpp-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#you-can-include-anything-in-cpp-files"}},[e._v("#")]),e._v(" You can #include anything in .cpp files")]),e._v(" "),a("p",[e._v("It is very important to note that you can add the required #include's in any .cpp file, it is only the .h files that have to compile without circular dependencies")]),e._v(" "),a("p",[e._v("These can be added in the .cpp file where you forward declared the types in the .h")]),e._v(" "),a("syntaxhighlight",{attrs:{lang:"cpp"}},[a("ol",[a("li",[e._v('include "CustomPawn.h"')]),e._v(" "),a("li",[e._v('include "CustomHUD.h"')])])]),e._v(" "),a("p",[e._v("Now in the .cpp file you have fully defined the types that you forward declared in the .h file, and can actually access their custom member variables that are specific to your game code!")]),e._v(" "),a("p",[e._v("When you want to use #include for various headers in CPP files you don't have to worry about the compile order, and can just include all the classes you need without ever thinking about forward declaration issues!")]),e._v(" "),a("p",[e._v("Forward Declaration only has to be considered for .h files 😃")]),e._v(" "),a("p",[e._v("So you should try to #include as many .h files as you can in the .cpp rather than the .h, and reserve .h #includes for the ones you really need.")]),e._v(" "),a("p",[e._v("And whenever you have circular dependencies, you can use Forward Declaration instead!")]),e._v(" "),a("h2",{attrs:{id:"shorthand-forward-declaration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shorthand-forward-declaration"}},[e._v("#")]),e._v(" Shorthand Forward Declaration")]),e._v(" "),a("p",[e._v("If you only need to forward declare a type in one place you can just put "),a("strong",[e._v("class")]),e._v(" right before it!")]),e._v(" "),a("p",[a("syntaxhighlight",{attrs:{lang:"cpp"}},[e._v(' UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="Joy Mech BPs") TSubclassOf'),a("class",{attrs:{AJoySkelMeshOutline:""}},[e._v(" JoyMechOutline; ")])],1)],1),e._v(" "),a("p",[e._v("In the above example, I dont have to #include JoySkelMeshOutline.h, but I am still creating a pointer to a Blueprint of this class that I can then set in the Editor, without ever having told C++ the actual definition of AJoySkelMeshOutline!")]),e._v(" "),a("p",[e._v("The advantage here is that I can minimize header dependencies, and in this case I dont have to ever define the type at all since it is a UPROPERTY value that I set in the Editor!")]),e._v(" "),a("p",[e._v("This")]),e._v(" "),a("p",[a("syntaxhighlight",{attrs:{lang:"cpp"}},[e._v(" TSubclassOf"),a("class",{attrs:{AJoySkelMeshOutline:""}},[e._v(" JoyMechOutline; ")])],1)],1),e._v(" "),a("p",[e._v("is the equivalent of this")]),e._v(" "),a("syntaxhighlight",{attrs:{lang:"cpp"}},[a("ol",[a("li",[e._v("pragma once")])]),e._v(" "),a("p",[e._v("//Normal Forward Declaration class AJoySkelMeshOutline;")]),e._v(" "),a("p",[e._v("//This Class .generated")]),e._v(" "),a("ol",[a("li",[e._v('include "CurrentClass.generated.h"')])]),e._v(" "),a("p",[e._v("UCLASS() //current class definition")]),e._v(" "),a("p",[e._v("//AJoySkelMeshOutline has been forward declared so this will compile TSubclassOf"),a("AJoySkelMeshOutline",[e._v(" JoyMechOutline; ")])],1)]),a("p"),e._v(" "),a("p",[e._v("Notice it is just easier and more organized in this case to add "),a("strong",[e._v("class")]),e._v(" by using forward declaration shorthand.")]),e._v(" "),a("h2",{attrs:{id:"forceinline-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forceinline-usage"}},[e._v("#")]),e._v(" FORCEINLINE Usage")]),e._v(" "),a("p",[e._v("If you want to write functions in .h files using FORCEINLINE you must then make sure to order your classes correctly so that you can #include the .h file you need so you have the full definition of the class/struct you want to use!")]),e._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),a("p",[e._v("Using Forward Declarations you can have as many inter-relating classes as you want in your c++ code without having circular dependencies 😃")]),e._v(" "),a("p",[e._v("Enjoy!")]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=User:Rama",title:"User:Rama"}},[e._v("Rama")]),e._v(" ("),a("a",{attrs:{href:"/index.php?title=User_talk:Rama",title:"User talk:Rama"}},[e._v("talk")]),e._v(")")]),e._v(" "),a("p",[e._v('Retrieved from "'),a("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Forward_Declarations&oldid=403",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Forward_Declarations&oldid=403"),a("OutboundLink")],1),e._v('"')]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=Special:Categories",title:"Special:Categories"}},[e._v("Category")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/index.php?title=Category:Code",title:"Category:Code"}},[e._v("Code")])])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);