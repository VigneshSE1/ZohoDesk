import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// This is a version of the sample app that does not use React Context to intialise the App instance
// I'm keeping this in place as a sample, but will base most things on the React Context
import { useEffect, useState } from 'react';
import PopupButton from './PopupButton';
import { RenderObject } from './RenderObject';
import { Button } from './Button';
const App = () => {
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('not set!');
    const [ticket, setTicket] = useState({});
    const [app, setApp] = useState(null);
    useEffect(() => {
        // waiting the ZOHODESK extension loading using it
        ZOHODESK.extension.onload().then((App) => {
            setLoading(false);
            ZOHODESK.get('ticket.email').then((data) => {
                setEmail(data['ticket.email']);
            });
            ZOHODESK.get('ticket').then((data) => {
                setTicket(data['ticket']);
            });
            setApp(App);
            /*
                          //To Set data in Desk UI Client
                          ZOHODESK.set('ticket.comment', { 'content': "Test comment" }).then(function (res) {
                              //response Handling
                          }).catch(function (err) {
                              //error Handling
                          });
              
                          //Access Data Storage for an extension
                          //Get the saved data of an extension from data storage
                          ZOHODESK.get('database', { 'key': 'key1', 'queriableValue': 'value1' }).then(function (response) {
                              //response Handling
                          }).catch(function (err) {
                              //error Handling
                          })
                          
                          //Save data in to data staorage
                          ZOHODESK.set('database', { 'key': 'key_1', 'value': { 'id': 123 }, 'queriableValue': 'value1' }).then(function (response) {
                              //response Handling
                          }).catch(function (err) {
                              //error Handling
                          })
              
                          //Change tabs in ticket detailview
                          ZOHODESK.invoke('ROUTE_TO', 'ticket.attachments');
              
                          //To Insert the content in the current opened reply editor from extension
                          ZOHODESK.invoke('Insert', 'ticket.replyEditor', { content: "<p>your content</p>" });
              
                          //To listen to an event in desk
                          App.instance.on('comment_Added', function(data){
                              //data handling
                          });
              
                          //To access locale
                          App.locale;
              
                          //To access localresources
                          App.localeResource
                              
                          //To Know more on these, please read the documentation
                      */
        });
    });
    useEffect(() => {
        if (!(app === null || app === void 0 ? void 0 : app.instance))
            return;
        console.log('Adding Comment Listener');
        app.instance.on('ticket_comment.add', function (data) {
            console.log('ticket_comment.add', data);
        });
    }, [app === null || app === void 0 ? void 0 : app.instance]);
    const setTicketComment = () => {
        console.log('setTicketComment');
        //To Set data in Desk UI Client
        ZOHODESK.set('ticket.comment', { comment: 'Test comment' })
            .then(function (res) {
            //response Handling
        })
            .catch(function (err) {
            //error Handling
        });
    };
    const setTicketReply = () => {
        console.log('setTicketReply');
        ZOHODESK.invoke('INSERT', 'ticket.replyEditor', {
            value: '<div style="border: 1px solid #cccccc; border-radius:5px; padding:5px;"><h1 style="font-size: 24px">Here is some HTML Formatted Content</h1><p style="font-size:16px">Here is a sub paragraph</p></div>',
            type: 'replace'
        });
        //To Set data in Desk UI Client
        // ZOHODESK.set('ticket.reply', {
        //   //value: '<h1>Hello</h1><p>THis is an HTML Reply</p>',
        //   reply: 'This is a plain text reply'
        //   //type: 'replace'
        // })
        //   .then(function (res) {
        //     console.log('success', res); //response Handling
        //   })
        //   .catch(function (err) {
        //     //error Handling
        //     console.log('fail', err);
        //   });
    };
    const openModal = () => {
        if (!(app === null || app === void 0 ? void 0 : app.instance))
            return;
        app.instance
            .modal({
            url: '/app/modal.html',
            title: 'Modal box'
        })
            .then(function (modalInfo) {
            var modalInstance = app.instance.getWidgetInstance(modalInfo.widgetID);
            modalInstance.on('modal.opened', function (data) {
                console.log('modal opened ++++++++++++++++++');
                console.log('modal instance data', modalInstance);
            });
        })
            .catch(function (err) {
            console.log(err, 'Modal error');
        });
    };
    if (loading) {
        return _jsx("p", { children: "Loading..." });
    }
    else {
        return (_jsxs(_Fragment, { children: [_jsx("h2", { className: "text-xl font-bold", children: "React Extension with Tailwind Samples" }), _jsx(PopupButton, { title: "Alert Button", content: "This is an Alert Botton", type: "alert", contentType: 'html', color: "emerald", okButtonColor: "blue", okText: "OK" }), _jsx(PopupButton, { title: "Confirmation Button", content: "This is a Confirmation Button", type: "confirmation", contentType: 'html', color: "emerald", okButtonColor: "blue", okText: "Carry On", cancelText: "Stop" }), _jsx(Button, { color: "blue", onClick: openModal, children: "Open a Modal" }), _jsx(Button, { color: "blue", onClick: setTicketComment, children: "Set Ticket Comment" }), _jsx(Button, { color: "slate", onClick: setTicketReply, children: "Set Ticket Reply" }), _jsx(RenderObject, { objectToRender: ticket, title: "Ticket" })] }));
    }
};
export default App;
