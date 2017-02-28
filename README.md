# Flight Onboarding Instructions

# Clone Flight Repository
Go to booyami.visualstudio.com and ensure you are in the [Flight repo](https://booyami.visualstudio.com/Booyami/_git/Flight)

* In the menu bar: ``` Clone ```

* Copy the [command line URL](https://booyami.visualstudio.com/Booyami/_git/Flight)

* Open Git Extensions ``` Start -> Clone ```

``` Repository to clone: <previously copied command line> ```  
``` Destination: <your git path> ```  
``` Subdirectory to create: <flight> ```  
``` Branch: Dev ```

* Clone

# Install .NET Core SDK

Install the [.NET Core SDK](https://www.microsoft.com/net/core#windowscmd). 

# Environment Configuration

* Install NPM packages

``` cd <repo> ```  
``` npm install ```

* Ensure typescript version for your editor is set to the current version of typescript. ``` npm ls typescript ```

# Before running the website
* From the command line, navigate to the website project Subdirectory
* Run ``` npm run webpack-dev ```.  This builds vendor dependencies. 

# Running the website

Webpack devserver/hot module replacement is run automatically with the C# code when Development is set.

## Run from cmd
* ``` set ASPNETCORE_ENVIRONMENT=Development ```
* ``` dotnet run ```

## Powershell
* ``` $env:ASPNETCORE_ENVIRONMENT = "Development" ```
* ``` dotnet run ```

## In Visual Studio
* Navigate to the Flight project settings
* Navigate to the 'Debug' tab
* Ensure there is an Environment Variable with Name ``` ASPNETCORE_ENVIRONMENT ``` and value ``` Development ```
(This is also where you can set Production, if desired)
* Run the project

## Vscode
* ASPNETCORE_ENVIRONMENT variable is contained in ``` .vscode/launch.json ```
* ``` F5 ``` to start debugging.  ``` Ctrl + F5 ``` to start without Debugging.
* Alternatively, ``` Ctrl + Shift + P ``` to open the command window, then search 'Start Debugging'

# Testing
## Javascript
To run tests, use ``` npm test ```  
We use [Jest](https://facebook.github.io/jest/) with [Enzyme](https://github.com/airbnb/enzyme) for testing  

# Recommended installs

* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
* [Redux Webtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)