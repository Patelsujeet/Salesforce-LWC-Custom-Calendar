import { LightningElement,api, track } from 'lwc';
import FullCalendarJS from '@salesforce/resourceUrl/FullCalendarLibrary';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';

export default class CalendarView extends LightningElement {
    
    async renderedCallback(){
        if (this.fullCalendarInitialized) {
            return;
          }
          this.fullCalendarInitialized = true;
    
      
          await Promise.all([
            loadScript(this, FullCalendarJS + "/packages/core/main.js"),
            loadStyle(this, FullCalendarJS + "/packages/core/main.css")
          ])
            .then(async () => {
              await Promise.all([
                loadScript(this, FullCalendarJS + "/packages/daygrid/main.js"),
                loadStyle(this, FullCalendarJS + "/packages/daygrid/main.css"),
                loadScript(this, FullCalendarJS + "/packages/list/main.js"),
                loadStyle(this, FullCalendarJS + "/packages/list/main.css"),
                loadScript(this, FullCalendarJS + "/packages/timegrid/main.js"),
                loadStyle(this, FullCalendarJS + "/packages/timegrid/main.css"),
                loadScript(this, FullCalendarJS + "/packages/interaction/main.js"),
                loadScript(this, FullCalendarJS + "/packages/moment/main.js"),
                loadScript(this, FullCalendarJS + "/packages/moment-timezone/main.js"),
              ]).then(() => {
                console.log("init");
                this.initializeCalendar();
              });
            })
            .catch(error => {
              this.dispatchEvent(
                new ShowToastEvent({
                  title: "Error loading FullCalendarJS",
                  variant: "error"
                })
              );
            });
    }

    initializeCalendar() { 
        const calendarEl = this.template.querySelector('div.fullcalendar');
        const calendar = new FullCalendar.Calendar(calendarEl, {
            plugins: ["dayGrid", "timeGrid", "list","interaction","moment"],
            header: false,
        });
        calendar.render();
        calendar.setOption('contentHeight', 550);

        this.calendarTitle = calendar.view.title;
        this.calendar = calendar;
        
    }

    @api
    getCalendarProp() {
        return this.calendar;
    }
}