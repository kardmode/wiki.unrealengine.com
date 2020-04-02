(window.webpackJsonp=window.webpackJsonp||[]).push([[1086],{568:function(e,t,o){"use strict";o.r(t);var a=o(28),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("Troubleshooting Launcher Problems - Epic Wiki")]),e._v(" "),o("h1",{attrs:{id:"troubleshooting-launcher-problems"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-launcher-problems"}},[e._v("#")]),e._v(" Troubleshooting Launcher Problems")]),e._v(" "),o("h2",{attrs:{id:"contents"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#Troubleshooting_Launcher_Problems"}},[e._v("1 Troubleshooting Launcher Problems")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#Launcher_Recommended_Specs"}},[e._v("1.1 Launcher Recommended Specs")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#I_am_unable_to_login_to_the_Launcher_with_my_account"}},[e._v("1.2 I am unable to login to the Launcher with my account")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#I_am_unable_to_install_the_Launcher_for_Windows"}},[e._v("1.3 I am unable to install the Launcher for Windows")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#The_Launcher_hangs_at_.22Please_Wait.22_when_I_try_to_run_it."}},[e._v('1.4 The Launcher hangs at "Please Wait" when I try to run it.')])]),e._v(" "),o("li",[o("a",{attrs:{href:"#The_Launcher_fails_to_load_or_crashes_on_load"}},[e._v("1.5 The Launcher fails to load or crashes on load")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#The_Launcher_is_unable_to_download_content"}},[e._v("1.6 The Launcher is unable to download content")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#None_of_the_Above_Helped_-_Getting_Debug_Logs"}},[e._v("1.7 None of the Above Helped - Getting Debug Logs")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#Tips_and_Tricks"}},[e._v("1.8 Tips and Tricks")])])])])]),e._v(" "),o("h2",{attrs:{id:"troubleshooting-launcher-problems-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-launcher-problems-2"}},[e._v("#")]),e._v(" Troubleshooting Launcher Problems")]),e._v(" "),o("p",[e._v("The Unreal Engine Launcher is used to download and launch binary versions of the Unreal Engine 4 (as opposed to the engine source code from GitHub), as well as serve as a location to download additional content and view news and blog posts.")]),e._v(" "),o("p",[e._v("If you are experiencing a problem with the Launcher, please read over the troubleshooting guide to see if there is an existing solution for your issue. If you cannot find a solution, please visit "),o("a",{attrs:{href:"http://help.epicgames.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://help.epicgames.com/"),o("OutboundLink")],1),e._v(" and use the Email Us button located under the Contact Us section, and ensure to provide as much information as possible regarding the problem that you are running into.")]),e._v(" "),o("h3",{attrs:{id:"launcher-recommended-specs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#launcher-recommended-specs"}},[e._v("#")]),e._v(" Launcher Recommended Specs")]),e._v(" "),o("p",[e._v("OS: A x64-bit version of Windows 7, 8, 8.1, 10, or Mac OS X 10.9.2 or later.")]),e._v(" "),o("p",[e._v("Hard Drive Space: ~1GB recommended for installing only the launcher. More hard drive space is required if you wish to download and install games, editors and projects, or content from the Marketplace.")]),e._v(" "),o("p",[e._v("Graphics Card: Any DX11, DX12 compatible card")]),e._v(" "),o("p",[e._v("Processor: Quad-Core Intel or AMD processor")]),e._v(" "),o("h3",{attrs:{id:"i-am-unable-to-login-to-the-launcher-with-my-account"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#i-am-unable-to-login-to-the-launcher-with-my-account"}},[e._v("#")]),e._v(" I am unable to login to the Launcher with my account")]),e._v(" "),o("p",[e._v("It is possible you are logging in with your account on multiple machines. The maximum limit of active machines under your account is 5. It may even be reduced to 1 if you log in with your account after many tries.")]),e._v(" "),o("p",[e._v("Note that your access to the Unreal Engine forums also counts towards the number of active machines.")]),e._v(" "),o("h3",{attrs:{id:"i-am-unable-to-install-the-launcher-for-windows"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#i-am-unable-to-install-the-launcher-for-windows"}},[e._v("#")]),e._v(" I am unable to install the Launcher for Windows")]),e._v(" "),o("p",[e._v("If you are unable to download and start the installer try some of the steps listed here:")]),e._v(" "),o("ul",[o("li",[e._v("Make sure you are running as an Administrator on your computer.")]),e._v(" "),o("li",[e._v("Make sure you have read/write access to the selected install path.")]),e._v(" "),o("li",[e._v("Make sure your computer is up to date and has the latest Service Packs and drivers.")])]),e._v(" "),o("p",[e._v("If none of the recommendations solved your issue you will need to get installer logs. To get installer logs follow these steps:")]),e._v(" "),o("ul",[o("li",[e._v("Place the msi on the root of C drive")]),e._v(" "),o("li",[e._v("Press WindowsKey+R and enter:")]),e._v(" "),o("li",[e._v('msiexec /i C:\\EpicGamesLauncherInstaller.msi /L*V C:\\EpicGamesInstallerLog.txt (Make sure to use the exact name of the installer msi file in place of the "EpicGamesLauncherInstaller.msi")')])]),e._v(" "),o("p",[e._v("Once you get the logs, please make a report on AnswerHub and attach them to your post.")]),e._v(" "),o("h3",{attrs:{id:"the-launcher-hangs-at-please-wait-when-i-try-to-run-it"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-launcher-hangs-at-please-wait-when-i-try-to-run-it"}},[e._v("#")]),e._v(' The Launcher hangs at "Please Wait" when I try to run it.')]),e._v(" "),o("p",[e._v("If you receive this notice when signing in try these steps listed here:")]),e._v(" "),o("ul",[o("li",[e._v("Make sure you are not behind a proxy (You can check to see if you are "),o("a",{attrs:{href:"http://amibehindaproxy.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(") and do not have epicgames.com filtered. If you are behind a proxy, add a wildcard exception for "),o("strong",[e._v("*.epicgames.com")]),e._v(" (or ask your IT department to do so). If your IT department would rather directly whitelist subdomains, there is a list at the bottom of this section.")]),e._v(" "),o("li",[e._v("You'll also need to ensure that ports "),o("strong",[e._v("80")]),e._v("(http), "),o("strong",[e._v("443")]),e._v("(https), and "),o("strong",[e._v("5222")]),e._v(" are unblocked.")]),e._v(" "),o("li",[e._v("Try switching your DNS Server (OpenDNS or GoogleDNS)")])]),e._v(" "),o("p",[e._v("List of Subdomains")]),e._v(" "),o("p",[e._v("unrealengine.com"),o("br"),e._v("\nunrealtournament.com"),o("br"),e._v("\nfortnite.com")]),e._v(" "),o("p",[e._v("account-public-service-prod03.ol.epicgames.com"),o("br"),e._v("\ncatalog-public-service-prod06.ol.epicgames.com"),o("br"),e._v("\neulatracking-public-service-prod06.ol.epicgames.com"),o("br"),e._v("\nentitlement-public-service-prod08.ol.epicgames.com"),o("br"),e._v("\norderprocessor-public-service-ecomprod01.ol.epicgames.com"),o("br"),e._v("\nfriends-public-service-prod06.ol.epicgames.com"),o("br"),e._v("\npersona-public-service-prod06.ol.epicgames.com"),o("br"),e._v("\nlightswitch-public-service-prod06.ol.epicgames.com"),o("br"),e._v("\nut-public-service-prod10.ol.epicgames.com"),o("br"),e._v("\nlauncher-public-service-prod06.ol.epicgames.com"),o("br"),e._v("\nxmpp-service-prod.ol.epicgames.com"),o("br"),e._v(" "),o("a",{attrs:{href:"https://download.epicgames.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://download.epicgames.com"),o("OutboundLink")],1),o("br"),e._v(" "),o("a",{attrs:{href:"https://cdn1.epicgames.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cdn1.epicgames.com"),o("OutboundLink")],1),o("br"),e._v(" "),o("a",{attrs:{href:"http://et2.epicgames.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://et2.epicgames.com"),o("OutboundLink")],1),o("br"),e._v(" "),o("a",{attrs:{href:"https://launcher-website-prod07.ol.epicgames.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://launcher-website-prod07.ol.epicgames.com"),o("OutboundLink")],1)]),e._v(" "),o("h3",{attrs:{id:"the-launcher-fails-to-load-or-crashes-on-load"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-launcher-fails-to-load-or-crashes-on-load"}},[e._v("#")]),e._v(" The Launcher fails to load or crashes on load")]),e._v(" "),o("p",[e._v("If nothing appears to happen when attempting to open or load the launcher, try these steps:")]),e._v(" "),o("ul",[o("li",[e._v("Make sure the launcher is not already open.")]),e._v(" "),o("li",[e._v("Check Task Manager to see if the launcher process did not close from the last session.")]),e._v(" "),o("li",[e._v("Make sure graphics drivers are updated to the latest version.")])]),e._v(" "),o("h3",{attrs:{id:"the-launcher-is-unable-to-download-content"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-launcher-is-unable-to-download-content"}},[e._v("#")]),e._v(" The Launcher is unable to download content")]),e._v(" "),o("p",[e._v("If you’re having trouble downloading or seeing content try these steps:")]),e._v(" "),o("ul",[o("li",[e._v("Close and restart the launcher and/or your computer, please try waiting a few minutes before restarting. (this is the most common solution!)")]),e._v(" "),o("li",[e._v("Make sure you are not behind a proxy (you can check to see if you are "),o("a",{attrs:{href:"http://amibehindaproxy.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(") and do not have epicgames.com and it’s subdomains filtered. If you are behind a proxy, add an exception for epicgames.com and it’s subdomains (or ask your IT department to do so).")]),e._v(" "),o("li",[e._v("Make sure if you are behind a firewall that exceptions are made for epicgames.com and it’s subdomains (or ask your IT department to do so).")]),e._v(" "),o("li",[e._v("Try switching your DNS Server ("),o("a",{attrs:{href:"https://www.opendns.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenDNS"),o("OutboundLink")],1),e._v(" or "),o("a",{attrs:{href:"https://developers.google.com/speed/public-dns",target:"_blank",rel:"noopener noreferrer"}},[e._v("GoogleDNS"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("If Marketplace content is stuck at syncing please let us know on the marketplace forums.")])]),e._v(" "),o("h3",{attrs:{id:"none-of-the-above-helped-getting-debug-logs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#none-of-the-above-helped-getting-debug-logs"}},[e._v("#")]),e._v(" None of the Above Helped - Getting Debug Logs")]),e._v(" "),o("p",[e._v("If none of the above helped in solving your issue or you are experiencing an issue not mentioned here, please take a look at the UE4 AnswerHub and see if someone else has already reported it. If not, you can make a new post but be sure to attach your DxDiag and Debug Logs!")]),e._v(" "),o("p",[o("strong",[e._v("Getting your DxDiag:")])]),e._v(" "),o("p",[o("em",[e._v("For Windows:")])]),e._v(" "),o("ul",[o("li",[e._v("Select the Start button and in the search field type “cmd”.")]),e._v(" "),o("li",[e._v("Once the command prompt is opened, type “dxdiag” and hit enter.")]),e._v(" "),o("li",[e._v("The directX diagnostic tool window should come up and have a progress bar going in the bottom left corner.")]),e._v(" "),o("li",[e._v("Once finished click the “Save All Information” button.")]),e._v(" "),o("li",[e._v("Save the text file to your desktop or somewhere you’ll be able to easily access it")])]),e._v(" "),o("p",[o("em",[e._v("For Mac:")])]),e._v(" "),o("ul",[o("li",[e._v("Go and click on the Apple Menu")]),e._v(" "),o("li",[e._v("Select “About This Mac” option")]),e._v(" "),o("li",[e._v("Copy the information including the OS and OS version.")])]),e._v(" "),o("p",[e._v("From there just attach the DxDiag or include your Mac System information when you post your AnswerHub issue!")]),e._v(" "),o("p",[o("strong",[e._v("Getting Debug Logs:")])]),e._v(" "),o("p",[o("em",[e._v("From Inside the Launcher:")])]),e._v(" "),o("ul",[o("li",[e._v("In the top-right of the Launcher, click the Gear icon.")]),e._v(" "),o("li",[e._v("Select 'Enable debug logging' and then choose 'Enable Now'. If you issue occurs at launch or sign in, Select 'Enable debug logging' and then choose 'Restart'")]),e._v(" "),o("li",[e._v("Reproduce the issue you’re experiencing while the debug logging is on.")]),e._v(" "),o("li",[e._v("After reproducing your issue go back to the Gear icon and select 'show launcher log'")]),e._v(" "),o("li",[e._v("Place all of the logs in this folder into a zip file and attach it to your AnswerHub report.")]),e._v(" "),o("li",[e._v("Back in the Launcher, select the Settings icon again and select 'Disable debug logging' or close your launcher.")])]),e._v(" "),o("p",[e._v("If you are unable to log in to turn on the debug logging, you can try using this command line to get debug logs as well.")]),e._v(" "),o("p",[o("em",[e._v("From Outside of the Launcher:")])]),e._v(" "),o("ul",[o("li",[e._v("Right-Click on the Epic Games Launcher desktop shortcut")]),e._v(" "),o("li",[e._v('Select Properties and go to the "Shortcut" tab')]),e._v(" "),o("li",[e._v('Add " -debuglogging" to the end of the file path in the target field')]),e._v(" "),o("li",[e._v("Don't add the quotes and make sure there is a space between the file path and the dash. It should look something like this:")])]),e._v(" "),o("p",[o("a",{attrs:{href:"/File:DebugLoggingCommand.JPG"}},[o("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/6/60/DebugLoggingCommand.JPG",alt:"DebugLoggingCommand.JPG"}})])]),e._v(" "),o("ul",[o("li",[e._v("After you have obtained the debug logs, remove the command from the target field")])]),e._v(" "),o("p",[o("em",[e._v("Finding and zipping the logs folder:")])]),e._v(" "),o("p",[e._v("You can find the logs here:")]),e._v(" "),o("p",[e._v('WIN: "C:\\Users\\"Username"\\AppData\\Local\\EpicGamesLauncher\\Saved\\Logs"')]),e._v(" "),o("p",[e._v('MAC: "~/Library/Logs/Unreal Engine/EpicGamesLauncher/"')]),e._v(" "),o("p",[e._v("It’s best to go ahead and zip up the entire logs folder and attach it to you answerhub issue.")]),e._v(" "),o("h3",{attrs:{id:"tips-and-tricks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tips-and-tricks"}},[e._v("#")]),e._v(" Tips and Tricks")]),e._v(" "),o("p",[o("strong",[e._v("How to create a Symbolic Link")])]),e._v(" "),o("p",[o("strong",[e._v("Windows:")])]),e._v(" "),o("p",[e._v('If you have disk space issues, Windows NTFS has symbolic link capabilities. For redirecting directories use "mklink /D link target".')]),e._v(" "),o("p",[e._v("Two common issues are the 30GB+ of example content available currently and the duplicate copy of engine made when upgrading a release (4.7 is sitting at 16GB+ w/o DerivedDataCache).")]),e._v(" "),o("p",[e._v('In a Command Prompt opened with Administrator privileges. [ Windows 8.1, right click absolute lower left, click "Command Prompt(Admin)" ]')]),e._v(" "),o("ul",[o("li",[e._v('cd "\\Program Files\\Epic Games\\Launcher"')]),e._v(" "),o("li",[e._v("explorer . (that's a space followed by a period, will open Windows Explorer in current location)")]),e._v(" "),o("li",[e._v("(User GUI to move PatchStaging and VaultCache to new location, Launcher should not be running... for example sake, root of E: drive)")]),e._v(" "),o("li",[e._v("mklink /d VaultCache E:\\VaultCache")]),e._v(" "),o("li",[e._v("mklink /d PatchStaging E:\\PatchStaging")])]),e._v(" "),o("p",[e._v("You should see something like:")]),e._v(" "),o("p",[e._v("Directory of C:\\Program Files\\Epic Games\\Launcher"),o("br"),e._v("\n02/02/2015  07:24 PM    "),o("DIR",[e._v("          Backup\n12/11/2014  01:19 AM    "),o("DIR",[e._v("          Engine\n02/12/2015  07:28 PM    "),o("SYMLINKD",[e._v("     PatchStaging [E:\\PatchStaging]\n01/07/2015  02:31 AM    "),o("SYMLINKD",[e._v("     VaultCache [E:\\VaultCache]")])],1)],1)],1)],1),e._v(" "),o("p",[e._v("Note the D at end of SYMLINKD.")]),e._v(" "),o("p",[e._v('You can also use "mklink" to move individual engine directories or Unreal Projects directory. Or your Android SDK install directory,...')]),e._v(" "),o("p",[e._v('By the way, your "Documents" folder is itself special, if you right click it, select Properties, there is a Location tab where you can re-base it. On that note, some directories are special to Windows and should not be messed with.')]),e._v(" "),o("p",[o("strong",[e._v("MAC:")])]),e._v(" "),o("p",[e._v("You can move the install location on a Mac to an external drive by using a Symbolic Link (SymLink). This method requires moving the /Users/Shared/UnrealEngine folder to the external drive and creating a symbolic link to the new location in the old folder. To set this up on the mac, these are the steps to take:")]),e._v(" "),o("ul",[o("li",[e._v("Backup the UnrealEngine folder found in /Users/Shared")]),e._v(" "),o("li",[e._v("Move the UnrealEngine folder to the drive the engine is to be installed to. This can be done with the following terminal command (without the quotation marks): “Sudo mv /Users/Shared/UnrealEngine /Destination/Location/” (Note: there is a space between the path of the folder that is being moved and the destination it is being moved to)")]),e._v(" "),o("li",[e._v("Enter the admin password when prompted")]),e._v(" "),o("li",[e._v('Create a symlink in the older UnrealEngine folder location and point it at the new UnrealEngine location: "ln -s /Destination/Location/ /Users/Shared/UnrealEngine"')])]),e._v(" "),o("p",[e._v('Retrieved from "'),o("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Troubleshooting_Launcher_Problems&oldid=23786",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Troubleshooting_Launcher_Problems&oldid=23786"),o("OutboundLink")],1),e._v('"')]),e._v(" "),o("p",[o("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Category")]),e._v(":")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"/Category:Troubleshooting",title:"Category:Troubleshooting"}},[e._v("Troubleshooting")])])]),e._v(" "),o("p",[o("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=n.exports}}]);