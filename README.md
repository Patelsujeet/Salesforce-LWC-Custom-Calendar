# Salesforce LWC Custom Calendar
1. Used [FullCalendar Library](https://fullcalendar.io/docs)
2. This project contains the only basic features and to achieve more customization please refer [this link](https://fullcalendar.io/docs)
3. This project is implemented based on [Standard License](https://fullcalendar.io/pricing) of FullCalendar

## Plan to Deploy

Step 1. Deploy the **FullCalendarLibrary** Static Resource in Org ([Click Here](https://github.com/Patelsujeet/LWC-Custom-Calendar/tree/main/force-app/main/default/staticresources))

Step 2. Deploy the [calendarView](force-app/main/default/lwc/calendarView) LWC components

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
3. To override the render UI behaviour of events we can use following method
```
    this.calendar.on('eventRender',this.eventRenderHandler.bind(this)); // [click here](https://github.com/Patelsujeet/LWC-Custom-Calendar/blob/dc0449559e012b515741eec09ddd963394877758/force-app/main/default/lwc/calendar/calendar.js#L73)
```
Example:
To show event title in following way:
" **_Event Title Name_** $`\textcolor{teal}{\text{Id with event status}} `$ "

## Final Output
1. ![dayGrid](https://github.com/Patelsujeet/LWC-Custom-Calendar/blob/main/dayGrid.png)

2. ![Month Grid](https://github.com/Patelsujeet/LWC-Custom-Calendar/blob/main/month.png)

3. ![Week Grid](https://github.com/Patelsujeet/LWC-Custom-Calendar/blob/main/week%20grid.png)

## Reference Link
1. [https://fullcalendar.io/](https://fullcalendar.io/)
2. [https://fullcalendar.io/docs/event-object](https://fullcalendar.io/docs/event-object)
