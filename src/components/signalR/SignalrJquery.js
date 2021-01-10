import {React , useEffect} from 'react'
import $ from 'jquery'


export default function SignalrJquery() {
    useEffect(() => {
        
        $.getScript('https://localhost:44371/signalr/hubs', function () {
            //Set the hubs URL for the connection
            $.connection.hub.url = 'https://localhost:44371/signalr';
            var hub = $.connection.chatHub; //yourHub is name of hub on the server side
            console.log(hub);
            //wire up SignalR

            hub.client.broadcastMessage = function (name, message) {  
               
                console.log(message);
            };

            //start hub
            $.connection.hub.start().done(function () {
                //once we're done with SignalR init we can wire up our other stuff
            });
        });
   
    }, [])
    
    return (
        <div>
            <h3>Signal R jquery test</h3>
        </div>
    )
}
