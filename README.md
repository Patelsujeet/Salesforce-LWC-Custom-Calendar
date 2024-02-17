# Salesforce LWC Custom Calendar
1. Used [FullCalendar Library](https://fullcalendar.io/docs)
2. This project contains the only basic features and to achieve more customization please refer [this link](https://fullcalendar.io/docs)
3. This project is implemented based on [Standard License](https://fullcalendar.io/pricing) of FullCalendar

## Plan to Deploy

Step 1. Deploy the **FullCalendarLibrary** Static Resource in Org ([Click Here](https://github.com/Patelsujeet/Salesforce-LWC-Custom-Calendar/tree/main/force-app/main/default/staticresources))

Step 2. Deploy all LWC components
   a. calendar - component is main component which needs to be place in Lightning Tab or Lightning App

   b. calendarHeader - Use this component to add some custom action in header

   c. calendarView - is main component which will load the calendar and store all property of calendar.
    
   d. calendarView - this component has one public method which returns the calendar object which can be used to modify or add events in calendar. [Click Here](https://github.com/Patelsujeet/Salesforce-LWC-Custom-Calendar/blob/5f18ba23bce1ab6299d092b28280f382c031ce47/force-app/main/default/lwc/calendarView/calendarView.js#L59)
    ```
    @api
    getCalendarProp() {
        return this.calendar;
    }
    ```

Step 3. You can modify this component as per your requirment and also can modify the meta-data file to use in different places in salesforce.

## Configure CustomCalendar
1. To Show the events in Calendar we need to set the events using (addEvent) method.
2. Basic Example of Events Data. To know more about event object [click here](https://fullcalendar.io/docs/event-object)
```
calendarEvents = [
        {
            id : '001', // Here we can store the salesforce id
            title: 'ABC company', // Here we can store the salesforce subject or name etc.
            start: new Date(),
            end: new Date(new Date().setDate(new Date().getDate() + 1)),
            backgroundColor : 'black',
            borderColor : 'black',
            allDay : true
        },
        {
            id : '002',
            title: 'ABC company',
            start: new Date(new Date().setDate(new Date().getDate() + 2)),
            end: new Date(new Date().setDate(new Date().getDate() + 5)),
            backgroundColor : 'black',
            borderColor : 'black',
            allDay : true,
            textColor: 'white'
        }
    ]
```
3. To override the render UI behaviour of events we can use following method: [click here](hhttps://github.com/Patelsujeet/Salesforce-LWC-Custom-Calendar/blob/5f18ba23bce1ab6299d092b28280f382c031ce47/force-app/main/default/lwc/calendar/calendar.js#L73)
```
    this.calendar.on('eventRender',this.eventRenderHandler.bind(this));
```
Example:
To show event title in following way:
" **_Event Title Name_** $`\textcolor{teal}{\text{Id with event status}} `$ "

## Final Output
1. ![dayGrid](https://github.com/Patelsujeet/Salesforce-LWC-Custom-Calendar/blob/main/dayGrid.png)

2. ![Month Grid](https://github.com/Patelsujeet/Salesforce-LWC-Custom-Calendar/blob/main/month.png)

3. ![Week Grid](https://github.com/Patelsujeet/Salesforce-LWC-Custom-Calendar/blob/main/week%20grid.png)

## Reference Link
1. [https://fullcalendar.io/](https://fullcalendar.io/)
2. [https://fullcalendar.io/docs/event-object](https://fullcalendar.io/docs/event-object)
