/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //app.receivedEvent('deviceready');
            var push = PushNotification.init({
                android: {
                },
                ios: {
                    alert: "true",
                    badge: "true",
                    sound: "true",
                    clearBadge: "true"
                },
                windows: {}
            });
            push.on('registration', function (data) {
                // data.registrationId
                alert(data.registrationId)
                //DevExpress.ui.notify("Device registered " + data.registrationId, "success", 3000);
            });
            push.on('notification', function (data) {
                // data.message,
                // data.title,
                // data.count,
                // data.sound,
                // data.image,
                // data.additionalData
                // mostra la notifica se l'app è aperta
                alert(data.message);
                //DevExpress.ui.notify(data.message, "info", 10000);
            });
            push.on('error', function (e) {
                // e.message
                // sarà da togliere, utilissimo in fase di debug
                alert(e.message);
                //DevExpress.ui.notify(e.message, "error", 10000);
            });


        var ref = window.open('https://www.info-juego.es/v2/', '_blank', 'location=no,zoom=no,toolbar=no');



       
    },
    
};