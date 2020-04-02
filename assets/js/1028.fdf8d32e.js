(window.webpackJsonp=window.webpackJsonp||[]).push([[1028],{613:function(t,e,a){"use strict";a.r(e);var r=a(28),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Structs, USTRUCTS(), They're Awesome - Epic Wiki")]),t._v(" "),a("h1",{attrs:{id:"structs-ustructs-they-re-awesome"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structs-ustructs-they-re-awesome"}},[t._v("#")]),t._v(" Structs, USTRUCTS(), They're Awesome")]),t._v(" "),a("p",[t._v("From Epic Wiki")]),t._v(" "),a("p",[t._v("Jump to: "),a("a",{attrs:{href:"#mw-head"}},[t._v("navigation")]),t._v(", "),a("a",{attrs:{href:"#p-search"}},[t._v("search")])]),t._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Overview"}},[t._v("1 Overview")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Technical"}},[t._v("1.1 Technical")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Core_Syntax"}},[t._v("2 Core Syntax")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Examples"}},[t._v("3 Examples")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Example_1"}},[t._v("3.1 Example 1")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Example_2"}},[t._v("3.2 Example 2")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Particle_Data_Tracker"}},[t._v("3.2.1 Particle Data Tracker")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Garbage_Collection"}},[t._v("3.2.2 Garbage Collection")])])])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Structs_With_Struct_Member_Variables"}},[t._v("4 Structs With Struct Member Variables")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Struct_Assignment"}},[t._v("5 Struct Assignment")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Deep_Copy"}},[t._v("5.1 Deep Copy")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Automatic_Make.2FBreak_in_BP"}},[t._v("6 Automatic Make/Break in BP")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Replication"}},[t._v("7 Replication")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Other_notes"}},[t._v("8 Other notes")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Related_Links"}},[t._v("9 Related Links")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Thank_You_Epic_for_USTRUCTS.28.29"}},[t._v("10 Thank You Epic for USTRUCTS()")])])]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[a("em",[t._v("Original Author:")]),t._v(" "),a("a",{attrs:{href:"/index.php?title=User:Rama",title:"User:Rama"}},[t._v("Rama")]),t._v(" ("),a("a",{attrs:{href:"/index.php?title=User_talk:Rama",title:"User talk:Rama"}},[t._v("talk")]),t._v(")")]),t._v(" "),a("p",[t._v("Structs enable you to create custom variable types to organize your data, by relating other c++ or UE4 C++ data types to each other.")]),t._v(" "),a("p",[t._v("The power of structs is "),a("strong",[t._v("extreme organization")]),t._v(", as well as ability to have functions for internal data type operations!")]),t._v(" "),a("h3",{attrs:{id:"technical"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#technical"}},[t._v("#")]),t._v(" Technical")]),t._v(" "),a("p",[t._v("Structs enable you to create custom variable types to organize your data, by relating other C++ or UE4 C++ data types to each other. The power of structs is "),a("strong",[t._v("extreme organization")]),t._v(" as well as the ability to have functions for "),a("strong",[t._v("internal data type operations")]),t._v(". '")]),t._v(" "),a("p",[t._v("In UE4, structs should be used for simple data type combining and data management purposes. For complex interactions with the game world, you should make a UObject or AActor subclass instead.")]),t._v(" "),a("h2",{attrs:{id:"core-syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#core-syntax"}},[t._v("#")]),t._v(" Core Syntax")]),t._v(" "),a("p",[a("syntaxhighlight",{attrs:{lang:"cpp"}},[t._v(" //If you want this to appear in BP, make sure to use this instead //USTRUCT(BlueprintType) USTRUCT() struct FJoyStruct { GENERATED_BODY()")])],1),t._v(" "),a("p",[t._v("//Always make USTRUCT variables into UPROPERTY() // any non-UPROPERTY() struct vars are not replicated")]),t._v(" "),a("p",[t._v("// So to simplify your life for later debugging, always use UPROPERTY() UPROPERTY() int32 SampleInt32;")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("   //If you want the property to appear in BP, make sure to use this instead\n   //UPROPERTY(BlueprintReadOnly)\n")])])]),a("p",[t._v("UPROPERTY() AActor* TargetActor;")]),t._v(" "),a("p",[t._v("//Set void SetInt(const int32 NewValue) { SampleInt32 = NewValue; }")]),t._v(" "),a("p",[t._v("//Get AActor* GetActor() { return TargetActor; }")]),t._v(" "),a("p",[t._v("//Check bool ActorIsValid() const { if(!TargetActor) return false; return TargetActor->IsValidLowLevel(); }")]),t._v(" "),a("p",[t._v("//Constructor FJoyStruct() { //Always initialize your USTRUCT variables! // exception is if you know the variable type has its own default constructor SampleInt32 = 5; TargetActor = NULL; } }; ")]),t._v(" "),a("p",[a("em",[t._v("Additional Note Author:")]),t._v(" "),a("a",{attrs:{href:"/index.php?title=User:DesertEagle_PWN&action=edit&redlink=1",title:"User:DesertEagle PWN (page does not exist)"}},[t._v("DesertEagle_PWN")]),t._v(" ("),a("a",{attrs:{href:"/index.php?title=User_talk:DesertEagle_PWN&action=edit&redlink=1",title:"User talk:DesertEagle PWN (page does not exist)"}},[t._v("talk")]),t._v(")"),a("br"),t._v("\nAdditional Note: The idea of USTRUCTS() is to declare engine data types that are in global scope and can be accessed by other classes/structs/blueprints. Because of this, it is invalid UE4 syntax to declare a struct inside of a class or other struct if using the USTRUCT() macro. Regular structs can still be utilized inside your classes and other structs; however these cannot be replicated natively and will not be available for UE4 reflective debugging or other engine systems such as Blueprints.")]),t._v(" "),a("p",[a("em",[t._v("Additional Note Author:")]),t._v(" "),a("a",{attrs:{href:"/index.php?title=User:Darkgaze&action=edit&redlink=1",title:"User:Darkgaze (page does not exist)"}},[t._v("Darkgaze")]),t._v(" ("),a("a",{attrs:{href:"/index.php?title=User_talk:Darkgaze&action=edit&redlink=1",title:"User talk:Darkgaze (page does not exist)"}},[t._v("talk")]),t._v(")"),a("br"),t._v("\nAdditional Note: Concerning the variables visibility on the editor: In the example above, if you don't add \"EditAnywhere\" parameter into UPROPERTY inside the members of the USTRUCT, whey won't show up in the Editor panel. You will see the variable but there will be no way to see/change/unfold the values inside. The class that defines a new UPROPERTY using that struct type should have that parameter too. In case you can't modify the data and you are using blueprints, you should add BlueprintType inside the USTRUCT parenthesis.")]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("h3",{attrs:{id:"example-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-1"}},[t._v("#")]),t._v(" Example 1")]),t._v(" "),a("p",[t._v("You want to relate a float brightness value with a world space location FVector, both of which are interpolated using an Alpha value.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("And you want to do this for 100 different game locations simultaneously.")])]),t._v(" "),a("li",[a("p",[t._v("And you want to do this process repeatedly over time!")])]),t._v(" "),a("li",[a("p",[t._v("You need to store the incremental interpolation values between game events.")])]),t._v(" "),a("li",[a("p",[t._v("AActors/UObjects are not involved (You could just subclass AActor/UObject and store the data per instance)")])])]),t._v(" "),a("p",[a("syntaxhighlight",{attrs:{lang:"cpp"}},[t._v(" USTRUCT() struct FMyInterpStruct { GENERATED_BODY()")])],1),t._v(" "),a("p",[t._v("UPROPERTY() float Brightness;")]),t._v(" "),a("p",[t._v("UPROPERTY() float BrightnessGoal; //interping to")]),t._v(" "),a("p",[t._v("UPROPERTY() FVector Location;")]),t._v(" "),a("p",[t._v("UPROPERTY() FVector LocationGoal;")]),t._v(" "),a("p",[t._v("UPROPERTY() float Alpha;")]),t._v(" "),a("p",[t._v("void InterpInternal() { Location = FMath::Lerp"),a("FVector",[t._v("(Location,LocationGoal,Alpha); Brightness = FMath::Lerp"),a("float",[t._v("(Brightness,BrightnessGoal,Alpha); }")])],1)],1),t._v(" "),a("p",[t._v("//Brightness out is returned, FVector is returned by reference float Interp(const float& NewAlpha, FVector& Out) { //value received from rest of your game engine Alpha = NewAlpha;")]),t._v(" "),a("p",[t._v("//Internal data structure management InterpInternal();")]),t._v(" "),a("p",[t._v("//Return Values Out = Location; return Brightness; } FMyInterpStruct() { Brightness = 2; BrightnessGoal = 100;")]),t._v(" "),a("p",[t._v("Alpha = 0;")]),t._v(" "),a("p",[t._v("Location = FVector::ZeroVector; LocationGoal = FVector(0,0,200000); } }; ")]),t._v(" "),a("h3",{attrs:{id:"example-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example 2")]),t._v(" "),a("p",[t._v("You want to track information about particle system components that you have spawned into the world through")]),t._v(" "),a("p",[t._v("UGameplayStatics::SpawnEmitterAtLocation() // returns a UParticleSystemComponent")]),t._v(" "),a("p",[t._v("and you want to track the lifetime of the particle and apply parameter changes from C++. You could write your own class, but if your needs are simple or you do not have project-permissions to make a subclass of UParticleSystemComponent, you can just make a USTRUCT to relate the various data types!")]),t._v(" "),a("p",[a("syntaxhighlight",{attrs:{lang:"cpp"}},[t._v(" USTRUCT() struct FParticleStruct { GENERATED_BODY()")])],1),t._v(" "),a("p",[t._v("UPROPERTY() UParticleSystemComponent* PSCPtr;")]),t._v(" "),a("p",[t._v("UPROPERTY() float LifeTime;")]),t._v(" "),a("p",[t._v("void SetColor() { // } FLinearColor GetCurrentColor() const { // }")]),t._v(" "),a("p",[t._v("//For GC void Destroy() { PSCPtr = nullptr; }")]),t._v(" "),a("p",[t._v("//Constructor FParticleStruct() { PSCPtr = NULL; LifeTime = -1; } }; ")]),t._v(" "),a("h4",{attrs:{id:"particle-data-tracker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#particle-data-tracker"}},[t._v("#")]),t._v(" Particle Data Tracker")]),t._v(" "),a("p",[t._v("Now you can have an array of these USTRUCTS for each particle that you spawn!")]),t._v(" "),a("p",[a("syntaxhighlight",{attrs:{lang:"cpp"}},[t._v(" //Particle Data Tracking Array UPROPERTY() TArray"),a("FParticleStruct",[t._v(" PSCArray; ")])],1)],1),t._v(" "),a("h4",{attrs:{id:"garbage-collection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#garbage-collection"}},[t._v("#")]),t._v(" Garbage Collection")]),t._v(" "),a("p",[t._v("By marking a USTRUCT or USTRUCT array as UPROPERTY() and marking any UObject / AActor members as UPROPERTY(), you are protected from dangling pointer crashes")]),t._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=How_To_Prevent_Crashes_Due_To_Dangling_Actor_Pointers",title:"How To Prevent Crashes Due To Dangling Actor Pointers"}},[t._v("How_To_Prevent_Crashes_Due_To_Dangling_Actor_Pointers")])]),t._v(" "),a("p",[t._v("However you must also clear ustructs you no longer need if they have pointers to UObjects if you ever want GC to be able garbage collect those UObjects.")]),t._v(" "),a("h2",{attrs:{id:"structs-with-struct-member-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structs-with-struct-member-variables"}},[t._v("#")]),t._v(" Structs With Struct Member Variables")]),t._v(" "),a("p",[t._v("The struct that wants to use another struct must be defined below the struct it wants to include.")]),t._v(" "),a("p",[a("syntaxhighlight",{attrs:{lang:"cpp"}},[t._v(" USTRUCT() struct FFlowerStruct { GENERATED_BODY()")])],1),t._v(" "),a("p",[t._v("UPROPERTY() int32 NumPetals;")]),t._v(" "),a("p",[t._v("UPROPERTY() FLinearColor Color;")]),t._v(" "),a("p",[t._v("UPROPERTY() FVector Scale3D;")]),t._v(" "),a("p",[t._v("void SetFlowerColor(const FLinearColor& NewColor) { Color = NewColor; }")]),t._v(" "),a("p",[t._v("FFlowerStruct() { NumPetals = 5; Scale3D = FVector(1,1,1); Color = FLinearColor(1,0,0,1); } };")]),t._v(" "),a("p",[t._v("USTRUCT() struct FIslandStruct { GENERATED_BODY()")]),t._v(" "),a("p",[t._v("UPROPERTY() int32 Type;")]),t._v(" "),a("p",[t._v("UPROPERTY() TArray"),a("FVector",[t._v(" StarLocations;")])],1),t._v(" "),a("p",[t._v("UPROPERTY() float RainAlpha;")]),t._v(" "),a("p",[t._v("//Dynamic Array of Flower Custom USTRUCT() UPROPERTY() TArray"),a("FFlowerStruct",[t._v(" FlowersOnThisIsland;")])],1),t._v(" "),a("p",[t._v("void SetRainAlpha(const float& NewAlpha) { RainAlpha = NewAlpha; }")]),t._v(" "),a("p",[t._v("int32 GetStarCount() const { return StarLocations.Num(); } FIslandStruct() { Type = 0; Percent = 1; } }; ")]),t._v(" "),a("h2",{attrs:{id:"struct-assignment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#struct-assignment"}},[t._v("#")]),t._v(" Struct Assignment")]),t._v(" "),a("p",[t._v("My personal favorite thing about structs is that unlike UObject or AActor classes, which must be utilized via pointers (AActor*) you can directly copy the entire contents of a USTRUCT to another USTRUCT of the same type with a single line of assignment!")]),t._v(" "),a("p",[a("syntaxhighlight",{attrs:{lang:"cpp"}},[t._v(" FFlowerStruct ExistingFlower;")])],1),t._v(" "),a("p",[t._v("// ... create ExistingFlower here")]),t._v(" "),a("p",[t._v("FFlowerStruct NewFlower; NewFlower = ExistingFlower; ")]),t._v(" "),a("h3",{attrs:{id:"deep-copy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deep-copy"}},[t._v("#")]),t._v(" Deep Copy")]),t._v(" "),a("p",[t._v("If you have struct members pointing to UObjects or array pointers, you must be careful to copy these members yourself!")]),t._v(" "),a("p",[a("syntaxhighlight",{attrs:{lang:"cpp"}},[t._v(" USTRUCT() struct FMyStruct {")])],1),t._v(" "),a("p",[t._v("int32* MyIntArray;")]),t._v(" "),a("p",[t._v("};")]),t._v(" "),a("p",[t._v("FMyStruct MyFirstStruct, MySecondStruct;")]),t._v(" "),a("p",[t._v("// Create the integer array on the first struct MyFirstStruct.MyIntArray = new int32[10]; for( int i = 0; i < 10; ++i ) {")]),t._v(" "),a("p",[t._v("MyFirstStruct.MyIntArray[i] = i;")]),t._v(" "),a("p",[t._v("}")]),t._v(" "),a("p",[t._v("GEngine->AddOnScreenMessage(-1, 10.f, FColor::Blue, FString::FromInt(MyFirstStruct.MyIntArray[4]));")]),t._v(" "),a("p",[t._v("// Assign the first struct to the second struct, i.e. create a shallow copy MySecondStruct.MyIntArray[4] = 6;")]),t._v(" "),a("p",[t._v('GEngine->AddOnScreenMessage(-1, 10.f, FColor::Blue, FString::Printf(TEXT("%d %d"), MyFirstStruct.MyIntArray[4], MySecondStruct.MyIntArray[4])); ')]),t._v(" "),a("p",[t._v("On screen the output will be")]),t._v(" "),a("p",[t._v("4\n6 6")]),t._v(" "),a("p",[t._v("instead of the expected")]),t._v(" "),a("p",[t._v("4\n4 6")]),t._v(" "),a("p",[t._v("This is because the data stored in MyStruct::MyIntArray is not actually stored inside of MyStruct. The "),a("em",[t._v("new")]),t._v(" keyword creates the data somewhere in RAM and we simply store a pointer there. The address the pointer stores is copied over to "),a("em",[t._v("MySecondStruct")]),t._v(", but it still points to the same data. In fact, it would be counterproductive to remove this functionality since there are cases where you want exactly that. Additionally the Unreal Property System does not support non-UObject pointers, which is why "),a("em",[t._v("MyIntArray")]),t._v(" is not marked with UPROPERTY().")]),t._v(" "),a("p",[t._v('However, copying arrays of integers (e.g. int32[10] instead of int32*) means the data is stored directly inside the struct and as such "deep copied". However, if you store a pointer to a UObject, this object is NOT deep copied! Once again only the pointer is copied and the original UObject left unchanged. Which is good because otherwise you might manipulate the wrong instance thinking you only had one to begin with leaving the original UObject unaffected, thus resembling a very nerve-wrecking and very difficult to track down bug!')]),t._v(" "),a("h2",{attrs:{id:"automatic-make-break-in-bp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automatic-make-break-in-bp"}},[t._v("#")]),t._v(" Automatic Make/Break in BP")]),t._v(" "),a("p",[t._v("Marking the USTRUCT as "),a("em",[t._v("BlueprintType")]),t._v(" and adding "),a("em",[t._v('EditAnywhere, BlueprintReadWrite, Category = "Your Category"')]),t._v(" to USTRUCT properties causes UE4 to automatically create "),a("em",[t._v("Make")]),t._v(" and "),a("em",[t._v("Break")]),t._v(" Blueprint functions, allowing to construct or extract data from the custom USTRUCT.")]),t._v(" "),a("p",[t._v("Special thanks to Community member Iniside for pointing this out. 😃")]),t._v(" "),a("p",[a("syntaxhighlight",{attrs:{lang:"cpp"}},[t._v(" USTRUCT(BlueprintType) struct FFlowerStruct { GENERATED_BODY()")])],1),t._v(" "),a("p",[t._v('UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="Flower Struct") int32 NumPetals;')]),t._v(" "),a("p",[t._v('UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="Flower Struct") FLinearColor Color;')]),t._v(" "),a("p",[t._v('UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="Flower Struct") FVector Scale3D; }; ')]),t._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=File:CustomUStructMakeBreak.jpg"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/0/0d/CustomUStructMakeBreak.jpg/1000px-CustomUStructMakeBreak.jpg",alt:"CustomUStructMakeBreak.jpg"}})])]),t._v(" "),a("h2",{attrs:{id:"replication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replication"}},[t._v("#")]),t._v(" Replication")]),t._v(" "),a("hr"),t._v(" "),a("hr"),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("Remember that only UPROPERTY() variables of USTRUCTS() are considered for replication!")]),t._v(" "),a("hr"),t._v(" "),a("hr"),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("So if your USTRUCT is not replicating properly, the first thing you should check is that every member is at least UPROPERTY()! The struct does not have be a BlueprintType, it just needs UPROPERTY() above all properties that you want replicated.")]),t._v(" "),a("h2",{attrs:{id:"other-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-notes"}},[t._v("#")]),t._v(" Other notes")]),t._v(" "),a("p",[t._v("In case you are looking for GENERATED_USTRUCT_BODY, in 4.11+, GENERATED_BODY() should be used instead.")]),t._v(" "),a("h2",{attrs:{id:"related-links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-links"}},[t._v("#")]),t._v(" Related Links")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://forums.unrealengine.com/showthread.php?103241-UE_Log-crashing-engine-when-trying-to-print-a-FString&p=488561&viewfull=1#post488561",target:"_blank",rel:"noopener noreferrer"}},[t._v("UStruct data member memory management"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"thank-you-epic-for-ustructs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thank-you-epic-for-ustructs"}},[t._v("#")]),t._v(" Thank You Epic for USTRUCTS()")]),t._v(" "),a("p",[t._v("I love USTRUCTS(), thank you Epic!")]),t._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=User:Rama",title:"User:Rama"}},[t._v("Rama")]),t._v(" ("),a("a",{attrs:{href:"/index.php?title=User_talk:Rama",title:"User talk:Rama"}},[t._v("talk")]),t._v(")")]),t._v(" "),a("p",[t._v("Additional edits "),a("a",{attrs:{href:"/index.php?title=User:Darkgaze&action=edit&redlink=1",title:"User:Darkgaze (page does not exist)"}},[t._v("Darkgaze")]),t._v(" ("),a("a",{attrs:{href:"/index.php?title=User_talk:Darkgaze&action=edit&redlink=1",title:"User talk:Darkgaze (page does not exist)"}},[t._v("talk")]),t._v(")")]),t._v(" "),a("p",[t._v('Retrieved from "'),a("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Structs,_USTRUCTS(),_They%27re_Awesome&oldid=33",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.unrealengine.com/index.php?title=Structs,_USTRUCTS(),_They%27re_Awesome&oldid=33"),a("OutboundLink")],1),t._v('"')]),t._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=Special:Categories",title:"Special:Categories"}},[t._v("Category")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/index.php?title=Category:Code",title:"Category:Code"}},[t._v("Code")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);