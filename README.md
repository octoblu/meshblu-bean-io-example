# meshblu-bean-io-example

## What are we doing?
[block:image]
{
  "images": [
    {
      "image": [
        "https://www.filepicker.io/api/file/29a7BZYTfWnSWtF2veC7",
        "Screen Shot 2015-11-06 at 2.09.26 PM.png",
        "743",
        "455",
        "#6b8ba5",
        ""
      ]
    }
  ]
}
[/block]
This tutorial will guide you in setting up your Light Blue Bean (bluetooth Arduino), flashing it with firmata (firmware for dynamic pin control), and then using NodeJS on OSX/Linux to control it from Octoblu.

There is a wonderful NodeJS robotics framework called [Johnny-Five](http://johnny-five.io) that lets you use a common API accross multiple hardware platforms. By flashing bean-firmata to your bean and using Bean-IO for Johnny-Five, you'll be able to use Johnny-Five with your bean.

First, you'll need to set-up and flash a Light Blue Bean.

## Set-up Bean Loader and Arduino

 Install Bean Loader and the latest Arduino IDE
This guide will show you how! [Getting Started with Light Blue Bean](http://legacy.punchthrough.com/bean/getting-started-osx/)

## Flash bean-firmata

1. Open up the Arduino IDE
2. Paste the [bean-firmata sketch](https://github.com/jacobrosenthal/arduino/blob/bean/examples/StandardFirmata/StandardFirmata.ino) into the Arduino editor.
[block:image]
{
  "images": [
    {
      "image": [
        "https://www.filepicker.io/api/file/uGYQaqhTgqRjPlvNkOgd",
        "Screen Shot 2015-11-06 at 1.45.33 PM.png",
        "495",
        "588",
        "#0d8b8e",
        ""
      ]
    }
  ]
}
[/block]
3. Select Tools -> Boards -> Light Blue Bean

[block:image]
{
  "images": [
    {
      "image": [
        "https://www.filepicker.io/api/file/3csCPdKGTKCrSkLvELBi",
        "Screen Shot 2015-11-06 at 1.45.47 PM.png",
        "631",
        "657",
        "#1ca3a9",
        ""
      ]
    }
  ]
}
[/block]
4. Open up Bean Loader
5. In the Arduino IDE press the arrow to Upload the firmware
[block:image]
{
  "images": [
    {
      "image": [
        "https://www.filepicker.io/api/file/E9a7S9SdaGa8fuPa7ytQ",
        "Screen Shot 2015-11-06 at 1.50.57 PM.png",
        "191",
        "28",
        "#4bb4bb",
        ""
      ]
    }
  ]
}
[/block]
Bean Loader will now show that the firmware is available for flashing to a bean
[block:image]
{
  "images": [
    {
      "image": [
        "https://www.filepicker.io/api/file/rhRXirYRSjCYKeWqOlWS",
        "Screen Shot 2015-11-06 at 1.48.31 PM.png",
        "575",
        "306",
        "#0e55c7",
        ""
      ]
    }
  ]
}
[/block]
6. Connect to your Bean, then right click and select "Program Sketch" , this can take a minute.
[block:image]
{
  "images": [
    {
      "image": [
        "https://www.filepicker.io/api/file/2SU7Em7R5OYlpZZsB8x9",
        "Screen Shot 2015-11-06 at 1.48.46 PM.png",
        "696",
        "311",
        "#0f4889",
        ""
      ]
    }
  ]
}
[/block]
## Set-Up NodeJS Script

1. Clone this repo down [meshblu-bean-io-examples](https://github.com/octoblu/meshblu-bean-io-example)

You can do so by typing this in the terminal

```
git clone https://github.com/octoblu/meshblu-bean-io-example
```

2. Copy and paste this to your terminal whilst in the directory and hit enter.
```
npm install && \
node node_modules/meshblu-util/command-register.js -t bean-io > meshblu.json && \
node node_modules/meshblu-util/command-claim.js
```
Upon completion your browser will be launched and you will be prompted to claim a device in your Octoblu account. Give it a name and claim it.

3. You can now run three different examples, each one has a corresponding flow (see next section)

To run them simply type:

```
node button-example.js
```

## Octoblu Flows

### Button Example

Flow: [Octoblu Bean Button Example](https://app.octoblu.com/bluprints/import/f23cb673-367f-4487-87af-f7c62136490a)

Wiring: [Hackster tutorial](https://www.hackster.io/3043/lightblue-bean-octoblu-542717?ref=platform&ref_id=2435_trending___&offset=25)

### Accelerometer and Temperature Example

Flow: [Bean-io Accel-Temp Example](https://app.octoblu.com/bluprints/import/27c796ea-39a4-45be-b8db-ad681bfba3d9)

### LED Example

Flow: [Bean LED Flow](https://app.octoblu.com/bluprints/import/0bb3904b-d4b8-40bc-b373-41b3eea61927)



### Pin Mappings

Bean to Arduino UNO


| Bean Port | Arduino Pin | Type |
|----------|-------------|------|
|A0|18|Analog/Digital|
|A1|19|AnalogDigital|
|0|6|Digital — Unavailable right now from firmata|
|1|9|Digital — Unavailable right now from firmata|
|2|10|Digital|
|3|11|Digital|
|4|12|Digital|
|5|13|Digital|

 
