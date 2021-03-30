# Day Planner

For this assignment, I was tasked with creating a simple calendar application that would allow a user to save events for each hour in their work schedule. 

<h1>The following are the acceptance criteria:</h1>

    * GIVEN I am using a daily planner to create a schedule
    * WHEN I open the planner
    * THEN the current day is displayed at the top of the calendar
    * WHEN I scroll down
    * THEN I am presented with timeblocks for standard business hours
    * WHEN I view the timeblocks for that day
    * THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    * WHEN I click into a timeblock
    * THEN I can enter an event
    * WHEN I click the save button for that timeblock
    * THEN the text for that event is saved in local storage
    * WHEN I refresh the page
    * THEN the saved events persist

<h1>What I Did</h1>

When the page loads up, at the top under the title, it will show the current date starting with the current day of the week. It is then followed by the month, the current number day and then the year.  

<img src="https://github.com/vickphat/work-planner/blob/master/Asset/images/date.JPG">

The rest of the page will consist of the time blocks where the user can type in their schedule for the day. On the left hand side will be the time. In the middle, will be the textarea where the user can click on and type in their schedule. And, over to the right, will be the save button to save their text input into local storage. 

<img src="https://github.com/vickphat/work-planner/blob/master/Asset/images/planner.JPG">

The time blocks will all be color coded to notify the user whether the time block is in the past, present or in the future. Past will be the color of grey. Present will be the color of red. And the future will be the color of green. 

<img src="https://github.com/vickphat/work-planner/blob/master/Asset/images/color-code3.JPG">

<img src="https://github.com/vickphat/work-planner/blob/master/Asset/images/color-code2.JPG">

<img src="https://github.com/vickphat/work-planner/blob/master/Asset/images/color-code.JPG">

After the user types into the textarea and clicks the save button, the text which was typed will be save into local storage. 

<img src="https://github.com/vickphat/work-planner/blob/master/Asset/images/storage2.JPG">

<img src="https://github.com/vickphat/work-planner/blob/master/Asset/images/storage.JPG">

As the data is saved to local storage, the data will persist even if the user were to refresh the page. However, if the user were to go into their local storage and delete one of the saved data inputs, then it will no longer persist after a page refresh. 

<img src="https://github.com/vickphat/work-planner/blob/master/Asset/images/storage3.JPG">

<img src="https://github.com/vickphat/work-planner/blob/master/Asset/images/storage4.JPG">

<h1>Link To Deployed Application</h1>

https://vickphat.github.io/work-planner/