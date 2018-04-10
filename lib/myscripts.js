$(function () {
            $('#calendar').fullCalendar({
                // Applys Bootstrap 4 theme, making it look nicer
                themeSystem: 'bootstrap4',
                // Allows us to select times/days
                selectable: true,
                // Adds our button menu to change how our calendar looks
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay,listMonth'
                },
                // Source of our events and applys default styling
                events: {
                    url: 'events.json',
                    color: 'lightblue',
                    textColor: 'black'
                },
                // Alerts us of a date range when clicking
                select: function (startDate, endDate) {
                    alert('selected ' + startDate.format() + ' to ' + endDate.format());
                },
                // Allows to see more information about an event when we click
                eventClick: function (event, jsEvent, view) {
                    // Stretch Goals: Gives user a prompt to show event info if they click ok, doesn't show the modal if they click otherwise
                    var r = confirm('Do you want to open ' + event.title + '?');
                    if (r == true) {
                        // Changes our Bootstrap Modal based on the event information
                        $('#modalTitle').html(event.title);
                        $('#modalDescription').html(event.description + '<br/>' +
                            'Date: ' + event.start.format("dddd, MMMM Do YYYY") + '<br/>' +
                            'Start Time: ' + event.start.format("HH:mm") + '<br />' +
                            'End Time: ' + event.end.format("HH:mm") + '<br />' +
                            'Tags: ' + ' ' + $.each([event.tags], function (l) {l}) + '<br />'
                        );
                        $('#fullCalModal').modal().fadeIn('slow');
                    }
                },
            })
        });