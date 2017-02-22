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

# Before running the website
* From the command line, navigate to the website project Subdirectory
* Run ``` npm run webpack-dev ```.  This builds vendor dependencies. 

# Running the website
## Run from the command line
* Run ``` set ASPNETCORE_ENVIRONMENT=Development ```
* Run ``` dotnet run ```

## In Visual Studio
* Navigate to the Flight project settings
* Navigate to the 'Debug' tab
* Ensure there is an Environment Variable with Name ``` ASPNETCORE_ENVIRONMENT ``` and value ``` Development ```
(This is also where you can set Production, if desired)
* Run the project