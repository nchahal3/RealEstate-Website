# Bond-Estate - CPSC 481
Members:
Albert Choi - albert.choi1@ucalgary.ca

Azeem Choudhry - azeem.choudhry@ucalgary.ca

Derek Braun - derek.braun@ucalgary.ca

Navroop Chahal - navroop.chahal@ucalgary.ca 

Sarthak Sharan - sarthak.sharan@ucalgary.ca


## What is Bond Estate ?

Bond Estate is a one stop personalised platform that simplifies the concept of searching for houses. Bond Estate  wants  to  let  customers  browse  through  home  listings  from their  homes. The  program  lets  customers  indicate  properties  of  homes  they  are interested  in,  view  details  of  homes  that  fit  these  criteria,  and  select  ones  that  they may be interested in visiting with a realtor. Our main marketspace of users are who value a personalized experience and the ability to seamlessly interact with people and our compact system throughout the house buying/selling process.

The platform is split into three main components.
1. Users purchasing a home
2. Users selling a home
3.  Real estate agents

From our research and discussions with people engaged in the real estate market, the current system of choices available to house buyers and sellers has become rather dichotomous. An individually-guided information-focused approach to engaging with the market is supported through the large online platforms (eg. Zillow). On the other hand, a more communication, and preference guided approach is primarily restricted to traditional in-person methods (hiring a realtor, emailing sellers, etc.). There are not many options available for people to engage with both styles of real estate interaction simultaneously.

We have designed and developerd a new simplified system which will address the challenge of merging technical real-estate details with a communication-driven system. This will allow prospective users to have a simple, but robust method for addressing their unique house buying/selling needs.

## Technologies Used

| Stack     | Technologies Used                    |
|-----------|--------------------------------------|
| Front-End | C#, HTML, CSS, JS, Blazor            |



## Integration of frameworks 

Bond Estate web application was developed as a Blazor App. Available to be viewed on mobile as well. We have not fully implemented the backend yet as our main focus for now was the designing part of the webpage. Blazor provides reusable web UI components implemented using C#, HTML, and CSS. Both client and server code is written in C#, allowing us to share code and libraries. 

## Implemented Features of our application
As the home page, we have implemeneted a map view right away to reduce friction from navigating through many pages. At different zoom levels, personalized information is provided to the user. We have a filtering options so that users can easily see their options in a glance with a search bar. 

We have different registration options depending on the user type - realtor and general user. Both end users are able to create and edit their own listings, and within those sections, we also have the option to add custom fields, such as renovations, as each user may have something unique which they want to share. 

While regular users only display basic information such as name, realtors have the ability to add varying fields to their profile. These fields include a personal summary, location, number of clients, years of experience, and their spoken languages. We believe that the addition of spoken languages is important as it allows regular users to be worry-free in regards to a language barrier, and is catered to their overall experience with our application.

Next, for each house we have testimonials, and we have navigation options to switch views for the user. We show the nearby amenities and also the option to share the listing. We weren't able to add the 3D fiewing of the house so far, but that is something which can be added in the future. 

For each listing a user views, they are able to add it to their favourites section at the press of a button. Once it is in their favourites, they are able to navigate to the favourites section through the nav bar and sort the list from most to least favourite listing. Another feature we have implemented is the ability to search for homes which have similarities to currently favourited listings through a filter-like system.

The user is matched with realtors and they can chat with them on our platform seamlessly. They can decide which realtor they want to go with based on filters like language, location, and experience. In the same context, a user is able to not only start a chat, but also book a meeting(s) with a realtor at a time which fits for both end users.

If a user decides to go through with the process of buying a home, they are able to view exactly which steps have been completed and which steps are still required through our progress view, and they are able to progress forwards and backwards through it as they see fit.




## Prequisites to run our Application

Download and install the .NET SDK
Preferably use Visual Studio 2019 and above. 

## How to run the application

Toggle to the Blazor app folder and open terminal there
dotnet build
dotnet run



## **Walkthrough of the application**

Once the program is running, you will be directed to the home page. Once there, you are shown a map view on the left hand side, and featured listings on the right hand side. Any user is able to view this screen without the requirement of signing in. Within the map view, a user is able to zoom in to different levels to see clusters or individual listings within our application. 


From this page, a user is able to apply filters from above the featured listings. These include price, bedrooms, bathrooms, type, and community. It is quite intuitive to apply filters, as clicking on each of these menu items brings a drop down menu. Once all the desired filters have been selected, pressing the filter button will update the listings. To clear them, a user can simply press the "Clear All" button.

Each listing includes an "Add to Favourites" button, as well as a chat button. These will add a listing to a users favourites, or start a chat with the realtor of the given listing. Under a small description of the property, there is a more details button.

Clicking on the more details button shows a detailed view of the property, including the price, a full description, any custom fields the poster has added, as well as any nearby ammenities. This view, similarly to the previous one, has an add to favourites button as well as a chat button. There are testimonials about  the neighborhood of which the property is located at, which have been submitted by users of our application, and a user is able to easily add a new one if they deem fit. Upon clicking the Add a Testimonial button, a pop-up will be shown where a user is able to add a testimonial, including a drop down menu for the neighborhood which they would like to select. The submit and cancel buttons within this pop up are self-explanatory.

Next, View More Listings Like This. Clicking this button will bring a user to a new page where they are able to view listings with similar features to one they were looking at prior. Sliders at the top allow the user to select relative importance of each feature, so they are able to view houses similarly priced, as well as similar in square footage, amenities, and number of rooms. Refreshing the list re-populates it when these are applied. Similar listings are shown with an add to favourites button as well as a more details button. 

If a user is not signed in, they will be able to through the sign-up/sign in button. This will redirect them to a login page with username and password fields. If they don't have an existing account, they will be able to create one through the create account button shown on the login page.

On the account creation screen, a user can select between a user account and a realtor account. If a user account is selected, they will be prompted for their basic information in order to create an account, and will be done in 1 step.

If a user decides to create a realtor account, they must input their basic information, click next step, complete the realtor details including location, summary, and languages spoken. After this step, they will be prompted to connect a calendar for booking meetings.

After the account is created, they will be re-directed the login page where they will be able to sign in.

Within the top nav bar, clicking on either the logo or the Map button will re-direct a user to this main page. Next, we have the "Find Realtor" button. Clicking on this will bring up the realtor search view. An invidual is able to view realtors and their details, and it includes a filtering system very similar to the one shown on the main-page. When a user is satisfied with their realtor of choice, they are able to start a chat or book a meeting with that realtor with the respective buttons shown on the right hand side of the screen.

Next, we have the "Create Listing" button. A user should be signed in to use this feature. It is self explanatory, it will redirect a user to a page where they are able to create their listing by filling out the required fields (address, postal code, square footage, etc).

We have a blue chat button next in the nav-bar, which will bring up our chat view, and show any conversations the user had started previously. This section includes a Book a Meeting button within realtor chats, where a user can book a meeting with the realtor they are speaking with without having to navigate away from the chat view.

The drop down menu on the far right hand side of the nav bar starts off with an Add a Testimonial button. This shows the same pop up as we have seen before in the detailed listings view, where a user can select a community to leave a testimony for, along with the submit and cancel options.

Next, a user is able to view their favorited listings. Upon navigating to this view, a user is shown all of their favourited listings. With each listing, a user is given the option to remove it from their favourites, or share  the listing through an external service. A user may rank their own favourites from their most to least favourite with the arrows shown on the left-hand side. They can sort these favourites by their ranking, price, beds, baths, or square footage in both ascending or descending order as they see fit.

Beneath the favourited listings menu item, we have a My Posted Listings button, which will bring a user to the listings which they have posted. From here, they are able to unlist them or edit the listing. When clicking unlist, a pop up to confirm the action will occur to ensure that this doesn't happen by error. Editing the listing will bring a user to the edit listing view, where they will be able to edit their listing, similar to the listing creation view.

Finally, we have the edit profile button. This functionality will differ from a regular user to a realtor. A regular user will be able to edit their basic information, such as email or password, or their name. When clicking save changes, their edited fields will be saved.

A realtors edit profile view has the same functionality, however, they have an extra page which they will navigate to with the edit realtor details button which will be shown to them. This will bring up a very similar page, except these will include realtor fields including a personal summary, spoken languages, and location.



