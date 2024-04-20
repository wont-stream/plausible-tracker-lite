fetch("https://plausible.local/api/event", {
    method: "POST",
    body: JSON.stringify({
        domain: "wont.stream", // Domain name of the site in Plausible.
        name: "pageview", // Name of the event.
        url: window.location.href, // URL of the page where the event was triggered.
        referrer: document.referrer, // Referrer for this event.
    })
})