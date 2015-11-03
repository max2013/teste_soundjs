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

       alert("initialize");
       window.open('http://www.avmeventos.com.br/clientes/sanofi/teste_turbo/initgame.html', '_blank', 'location=yes');
        // var ref = window.open('http://www.avmeventos.com.br/clientes/sanofi/teste_turbo/initgame.html', '_blank', 'location=yes');
        // ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); }); 
        // ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
        // ref.addEventListener('exit', function(event) { alert(event.type); });

        // ref.addEventListener('loadstop', function(event) {
       //      alert('LEITURA COMPLETA!'); 
        // });
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() { 
       // document.addEventListener('deviceready', this.onDeviceReady, false);
        
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        window.open = cordova.InAppBrowser.open
         app.receivedEvent('deviceready');
         alert('deviceready!');
         window.open('http://www.avmeventos.com.br/clientes/sanofi/teste_turbo/initgame.html', '_blank', 'location=yes'); 
         // var ref = window.open('http://www.avmeventos.com.br/clientes/sanofi/teste_turbo/initgame.html', '_blank', //'toolbar=no,location=no,disallowoverscroll=yes,mediaPlaybackRequiresUserAction=yes,enableViewportScale=yes');

       
         // close InAppBrowser after 5 seconds 
         //setTimeout(function() {
            // ref.close();
        // }, 5000);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
       // var parentElement = document.getElementById(id);
      //  var listeningElement = parentElement.querySelector('.listening');
      //  var receivedElement = parentElement.querySelector('.received');

      //  listeningElement.setAttribute('style', 'display:none;');
       // receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

 
};
