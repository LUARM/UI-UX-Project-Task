# UI-UX Engineer challenge

This React website allows you to sort location markers representing Starbukcs locations in the Portland Metro Area using user inputs. These inputs include city, zip code, loan amount range, and account number.

# Set Up / Running 
1) Clone the repository:
**git clone git@github.com:LUARM/UI-UX-Project-Task.git**
2) Download the dependencies: 
**npm i**
3) In order for the map to work you must get your own google API key as shown in the link:
**https://developers.google.com/maps/documentation/javascript/get-api-key**
4) Place your API key in LoadScript found in the return of the Map.js file:
**EX:** LoadScript googleMapsApiKey='API KEY HERE'
5) Run with **npm start**

# Figma
Inital concepts, alternative designs, and future features can be seen on my figma link:
https://www.figma.com/file/IDIiMkduEgfeDIa1BsriOS/UI-UX-Engineer-challenge?node-id=0%3A1



# Future Goals
1) Improve the max and min loan amount inputs, so it dispalys as a money value while typing.
2) Show the amount of locations found after user's filter options where placed .
3) A list view of all locations that fit the filter options. And a way to sort that list. Also cliking on that list would open up that marker on the map.
4) Make the filter input section of the website something that can be hidden .


