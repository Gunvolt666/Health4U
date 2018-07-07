import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  Programmadvance()
  {
   
(function () {
    "uso estricto";
    var accelerometer;
    var WinJS;
    var Windows;
    var app = WinJS.Application;

    // Esta funcion responde a todas las activaciones de la app
    app.onactivated = function (eventObject) {
        if (eventObject.detail.kind === Windows.ApplicationModel.Activation.ActivationKind.launch) {
            if (accelerometer == null) {
                accelerometer = Windows.Devices.Sensors.Accelerometer.getDefault();

                // Establece el reporte del intervalo
                var minimumReportInterval = accelerometer.minimumReportInterval;
                var reportInterval = minimumReportInterval > 16 ? minimumReportInterval : 16;
                accelerometer.reportInterval = reportInterval;

                accelerometer.addEventListener("readingchanged", onDataChanged);
            }
            WinJS.UI.processAll();
        }
    };


    function onDataChanged(e) {
        var reading = e.reading;
        var accelX = reading.accelerationX;
        var accelY = reading.accelerationY;
        var accelZ = reading.accelerationZ;

        id('eventOutputX').innerHTML = accelX.toFixed(2);
        id('eventOutputY').innerHTML = accelY.toFixed(2);
        id('eventOutputZ').innerHTML = accelZ.toFixed(2);
    }

   
    function id(elementId) {
        return document.getElementById(elementId);
    }

    app.start();
})();


  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Health4U</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
