# AWS Console Customizer

Allows you to customize the display of your AWS account ids for the SAML signin page: https://signin.aws.amazon.com/saml
- Font color of the account listing
- Custom label after the account id
    - Dev, Test, Prod, Project Name, etc.
    
## Usage
<div>
    <img src="./screen.png"/>
</div>
<div>
    <img src="./screen2.png"/>
</div>

## Installation
- Clone this repository on your local filesystem
- Open Extension Manager in Chrome/Brave browser: <a href="about://extensions">about://extensions</a>
- Turn on "Developer mode"
- Click on the "Load unpacked button"
- Browse to the directory on your local system where you cloned the source code
- Click the extension button that is now in your browser <img src="./icon.png"/>
- Configure your account settings as desired
```json
[
    {
        "color": "red",
        "id": 1000000001,
        "label": "Project One PROD"
    },
    {
        "color": "green",
        "id": 100000000002,
        "label": "Project One NON PROD"
    }
]
```
