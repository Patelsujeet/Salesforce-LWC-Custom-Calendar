import { LightningElement, api } from 'lwc';

export default class CalendarHeader extends LightningElement {
    @api calendarTitle;
    viewOptions = [
        {
            label: 'Day',
            viewName: 'timeGridDay',
            checked: false
        },
        {
            label: 'Week',
            viewName: 'timeGridWeek',
            checked: false
        },
        {
            label: 'Month',
            viewName: 'dayGridMonth',
            checked: true
        }
    ];

     // change calendar view
     changeViewHandler(event) {
        const viewName = event.detail.value;
        this.passTheEvent('changeviewactionname', viewName);
        
    }
    // click on forward and backword
    calendarActionsHandler(event) {
        const actionName = event.target.value;
        this.passTheEvent('changeviewactionname', actionName);
    }

    passTheEvent(eventName,property) {
        this.dispatchEvent(new CustomEvent(eventName, {
            detail : {
                value : property
            }
        }))
    }

}