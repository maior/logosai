# LogosAI Widget Integration Guide

This guide explains how to integrate the LogosAI chat widget into your website.

## Quick Start

1. Download the widget script from:
```html
http://logosai.info:8000/widget.js
```

2. Add the script to your HTML file:
```html
<script src="widget.js"></script>
```

## Basic Implementation

Here's a basic example of how to implement the LogosAI widget:

```html
<!DOCTYPE html>
<html>
<head>
    <title>LogosAI Widget Example</title>
</head>
<body>
    <!-- Add the widget script -->
    <script src="widget.js"></script>

    <!-- Initialize the widget with configuration -->
    <script>
        // Configure the widget
        const config = {
            // Required: Your API key for authentication
            apiKey: "YOUR_API_KEY",
            
            // Optional: Custom position for the widget button (default: 'right')
            position: "right",
            
            // Optional: Initial message to display
            welcomeMessage: "Hello! How can I help you today?",
            
            // Optional: Custom theme colors
            theme: {
                primary: "#007bff",    // Primary color for buttons and accents
                secondary: "#6c757d",  // Secondary color for additional elements
                background: "#ffffff"  // Background color of the chat window
            }
        };

        // Initialize the widget with your configuration
        window.LogosAI.init(config);
    </script>
</body>
</html>
```

## Advanced Implementation

Here's an example with more advanced features:

```html
<!DOCTYPE html>
<html>
<head>
    <title>LogosAI Advanced Widget Example</title>
</head>
<body>
    <!-- Add the widget script -->
    <script src="widget.js"></script>

    <script>
        // Advanced configuration example
        const config = {
            // Required: Your API key
            apiKey: "YOUR_API_KEY",

            // Optional: Widget positioning
            position: "right",  // 'right' or 'left'
            
            // Optional: Custom welcome message
            welcomeMessage: "Welcome to our service! How can I assist you?",
            
            // Optional: Custom theme
            theme: {
                primary: "#007bff",
                secondary: "#6c757d",
                background: "#ffffff",
                text: "#000000",
                buttonText: "#ffffff"
            },

            // Optional: Custom widget behavior
            behavior: {
                // Auto-open the widget after page load (in milliseconds)
                autoOpen: 3000,
                
                // Show notification badge for new messages
                showNotificationBadge: true,
                
                // Sound notification for new messages
                soundEnabled: true
            },

            // Optional: Callback functions
            callbacks: {
                // Called when the widget is opened
                onOpen: () => {
                    console.log("Widget opened");
                },
                
                // Called when the widget is closed
                onClose: () => {
                    console.log("Widget closed");
                },
                
                // Called when a message is sent
                onMessageSent: (message) => {
                    console.log("Message sent:", message);
                },
                
                // Called when a message is received
                onMessageReceived: (message) => {
                    console.log("Message received:", message);
                }
            }
        };

        // Initialize the widget
        window.LogosAI.init(config);
    </script>
</body>
</html>
```

## Configuration Options

### Required Options
- `apiKey`: Your LogosAI API key for authentication

### Optional Options
- `position`: Widget button position ("right" or "left")
- `welcomeMessage`: Initial message displayed in the chat
- `theme`: Custom color scheme for the widget
- `behavior`: Widget behavior settings
- `callbacks`: Event callback functions

## Theme Customization

You can customize the widget's appearance using the theme object:

```javascript
theme: {
    primary: "#007bff",    // Primary color
    secondary: "#6c757d",  // Secondary color
    background: "#ffffff", // Background color
    text: "#000000",      // Text color
    buttonText: "#ffffff" // Button text color
}
```

## Event Callbacks

The widget supports several event callbacks:

```javascript
callbacks: {
    onOpen: () => {},         // Widget opened
    onClose: () => {},        // Widget closed
    onMessageSent: (msg) => {},    // Message sent
    onMessageReceived: (msg) => {} // Message received
}
```

## Browser Support

The widget is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- Ensure your API key is kept secure
- The widget is responsive and works on both desktop and mobile devices
- For optimal performance, place the script at the bottom of your HTML body

## Support

For additional support or questions, please contact:
- Email: support@logosai.info
- Website: https://logosai.info

```

This README.md file provides a comprehensive guide for integrating widget.js, covering everything from basic implementation to advanced features. 
