import { LightningElement, track } from 'lwc';

export default class Calendar extends LightningElement {

    @track isLoadOnce;
    @track calendar;
    @track calendarTitle;
    @track calendarEvents = [
        {
            id : '001',
            title: 'ABC company',
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
            allDay : true
        }
    ]
    connectedCallback() {
        this.isLoadOnce = true;
    }

    renderedCallback() {
        
        let calendar = this.template.querySelector('c-calendar-view');
        if(calendar && this.isLoadOnce) {
            let interval = setInterval(() => {
                this.calendar = calendar.getCalendarProp();
                if(this.calendar) {
                    this.isLoadOnce = false;
                    this.loadAllEvents();

                    this.calendarTitle = this.calendar.view.title;
                    clearInterval(interval);
                    
                    this.calendarEvents.forEach(items => {
                        this.calendar.addEvent(items); // this method is used to add the events in Calendar
                    })
                }

            }, 100);        
            
        }
    }

    changeViewHandler(event){
        const viewName = event.detail.value;
        if(viewName === 'previous') {
            this.calendar.prev();
        } else if(viewName === 'next') {
            this.calendar.next();
        } else if(viewName === 'today') {
            this.calendar.today();
        } else if( ['timeGridDay','timeGridWeek','dayGridMonth'].indexOf(viewName) >= 0) {
            this.calendar.changeView(viewName);
        }
        this.calendarTitle = this.calendar.view.title;
    }

    loadAllEvents() {
        this.calendar.on('eventClick',this.eventClickHandler.bind(this));
        this.calendar.on('eventMouseEnter',this.eventMouseEnterHandler.bind(this));
        this.calendar.on('dateClick',this.dateClickHandler.bind(this));
        this.calendar.on('eventRender',this.eventRenderHandler.bind(this));
    }

    eventClickHandler(info) {
        console.log(info.event.id);
    }

    eventMouseEnterHandler(info){
        console.log(info.event.id);
        console.log(info.event.title);
    }

    dateClickHandler(info){
        console.log(info.dateStr);
    }

    eventRenderHandler(info) {
        console.log(info.el);
    }
}