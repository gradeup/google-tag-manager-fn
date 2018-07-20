# google-tag-manager-fn

`google-tag-manager-fn` is google tag manager functional management module. You can add gtm container to your web app via this module. Here are some functions that you can use for the various functionalities of gtm.

## Installation
``` shell
npm install --save google-tag-manager-fn
```

## Usage

### Import the module to your code
``` javascript
import GTM from 'google-tag-manager-fn'; // Adds functionalities to GTM variable
```

### Functions 
#### init({ id, preview, auth, events, dataLayerName, dataLayer, reactFlag })
``` javascript
GTM.init({
    id: 'GTM-abc', 
    preview: '', 
    auth: '', 
    events: {}, 
    dataLayerName: 'dataLayer', 
    dataLayer: {}, 
    reactFlag: false,
})
```
Folowing are the options to be passed :

| option              | used for | required      | default value                   |
| ------------------- |----------| ------------- |-------------------------------- |
| `id`               | GTM container Id | yes ||
| `preview`          | Previewing container | no | '' |
| `auth`             | Auth key for using gtm | no | '' |
| `events`           | For Adding events to datalayer for tags to be fired | no | {}  |
| `dataLayerName`    | Data Layer Key for Gtm to look for data | no  | `dataLayer`    |
| `dataLayer`          | object for adding data to datalayer variable | no     | {}   |
| `reactFlag`  | For returning react components to render in your app as script with dangerouslySetInnerHTML | no  | `false` |

#### appendDL({ dataLayerName, dataLayer, state, reactFlag, event })
``` javascript
GTM.init({
    dataLayerName: 'dataLayer', 
    dataLayer: {
        value: 'gtm variable',
    }, 
    state: 1,
    reactFlag: false,
    event: 'gtm-value',
})
```
Folowing are the options to be passed :

| option              | used for | required      | default value                   |
| ------------------- |----------| ------------- |-------------------------------- |
| `dataLayerName`    | Data Layer Key for Gtm to look for data | no  | `dataLayer`    |
| `dataLayer`          | object for adding data to datalayer variable | no     | {}   |
| `state`          | 0 : data without event, 1 : data with event  | no     | 0   |
| `reactFlag`  | For returning react components to render in your app as script with dangerouslySetInnerHTML | no  | `false` |
| `event`          | Event Name for dataLayer variable | no     | 'DLChanged'   |

#### fireEvent({ event, data, elementId })
``` javascript
GTM.fireEvent({
    event: 'gtm-event',
    data: {
        value: 'gtm event value',
    }, 
    elementId: '',
})
```
Folowing are the options to be passed :

| option              | used for | required      | default value                   |
| ------------------- |----------| ------------- |-------------------------------- |
| `event`          | Event Name for to be fired | no     | 'custom-event'   |
| `data`          | object for passing it to the custom event | no     | {}   |
| `elementId`   | string Id for the event to be attached to or in default case it attaches event to document object  | no     | ''   |

### GTM to Catch Events

#### Firing Tags

You can add Page Views Tags or Tags on the basis of data layer variable values.
You can `All Page Route Change` trigger for your react app. to check for the tag firing conditions.

#### Events Capture

You can add `Custom Html` Tag for capturing events that you are firing from your app using this module. `(CustomEvent :  object should be supported by your browser version.)`
```html
<script>
document.addEventListener('ga-event', function(ev){
    // Your data that you have passed from the app in your event will be available in ev.detail.
    console.log(ev.detail); // You data is logged on console.
});
</script>
```


> `If you have your app server side rendering try using functions in your user interactive functions or componentDidMount which runs only on browser as the document object might not be present on server side. And use reactFlag option as true for adding the component to your component render function.`

## Links

You can visit some links for reference:

* [React](https://reactjs.org/)
* [Google Tag Manager](https://developers.google.com/tag-manager/devguide)
* [Github Link For Repo](https://github.com/gradeup/google-tag-manager-fn)
* [Npm Link for the module](https://www.npmjs.com/package/google-tag-manager-fn)

## Organisation
[![Gradeup](https://gs-post-images.grdp.co/2017/2/img1486706448140-41-rs-high-webp.png)](https://gradeup.co)
